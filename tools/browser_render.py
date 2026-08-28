"""One isolated Chromium page at a time; only read interactions, no login or stealth."""
from __future__ import annotations

from dataclasses import dataclass, field
import re
from urllib.parse import urlsplit

import psutil
from playwright.sync_api import sync_playwright

from archive_http import FetchError
from extraction import inspect_html
from mirror import digest, normalize, USER_AGENT
from scope import is_english_url


@dataclass
class Rendered:
    html: str
    url: str
    panels: list = field(default_factory=list)
    bundles: list = field(default_factory=list)
    notes: list = field(default_factory=list)


class Browser:
    def __init__(self, http, settings=None):
        self.http, self.settings = http, settings or {}
        self.driver = self.browser = None

    def close(self):
        try:
            if self.browser:
                self.browser.close()
        finally:
            if self.driver:
                self.driver.stop()
            self.browser = self.driver = None

    def render(self, url):
        self.http.allowed(url)
        free_mb = psutil.virtual_memory().available / (1024 ** 2)
        if free_mb < self.settings.get("minimum_free_memory_mb", 2048):
            raise FetchError(f"Only {free_mb:.0f} MB memory available; resume when >=2 GB is free", "deferred")
        if not self.driver:
            self.driver = sync_playwright().start()
            try:
                self.browser = self.driver.chromium.launch(headless=True)
            except Exception as exc:
                self.close()
                raise FetchError("Chromium could not start: " + str(exc).splitlines()[0], "deferred") from exc
        context = self.browser.new_context(locale="en-US", user_agent=USER_AGENT,
                                           accept_downloads=False, service_workers="block")
        notes, bundles, blocked = [], set(), set()
        timeout = self.settings.get("timeout_seconds", 45) * 1000
        context.set_default_timeout(min(timeout, 5000))
        context.set_default_navigation_timeout(timeout)

        def route_request(route):
            request = route.request
            target = normalize(request.url)
            if not target or request.method not in {"GET", "HEAD"}:
                route.abort()
                return
            host = urlsplit(target).hostname
            if request.resource_type in {"image", "media", "font"}:
                route.abort()
                return
            if host not in self.http.hosts or not is_english_url(target):
                if request.resource_type in {"document", "script", "xhr", "fetch"}:
                    blocked.add(target)
                route.abort()
                return
            try:
                self.http.allowed(target)
            except FetchError:
                blocked.add(target)
                route.abort()
                return
            if host == "academy.claude.com" and "/content/" in target and urlsplit(target).path.endswith(".js"):
                bundles.add(target)
            route.continue_()

        context.route("**/*", route_request)
        page = context.new_page()
        page.on("dialog", lambda dialog: dialog.dismiss())
        try:
            response = page.goto(url, wait_until="domcontentloaded")
            if not response or response.status >= 400:
                code = response.status if response else None
                raise FetchError(f"Browser navigation HTTP {code}", "blocked" if code in {401,403,429} else "failed", code)
            if not is_english_url(page.url):
                raise FetchError("Browser redirected to a non-English page", "non_english")
            inspect_html(page.content(), page.url)
            try:
                page.wait_for_load_state("networkidle", timeout=8000)
            except Exception:
                notes.append("Network did not become idle within 8 seconds; content may still be loading.")
            page.evaluate("document.querySelectorAll('details').forEach(x => x.open = true)")
            accordions = page.locator('main button[aria-expanded="false"][aria-controls]:not([aria-haspopup]), article button[aria-expanded="false"][aria-controls]:not([aria-haspopup])')
            accordion_count = accordions.count()
            for _ in range(min(accordion_count, 40)):
                if not accordions.count():
                    break
                control = accordions.first
                label = control.inner_text().strip()
                if re.search(r"\b(sign.?in|log.?in|submit|enroll|register|delete|purchase)\b", label, re.I):
                    notes.append("Unexpanded control requires a non-reading action.")
                    break
                try:
                    control.click()
                except Exception:
                    notes.append("Could not expand content control: " + label[:80])
                    break
            if accordion_count > 40:
                notes.append("Accordion safety limit reached; some content may remain collapsed.")
            # Bounded lazy-load scroll; capture all DOM text, including offscreen content.
            previous = 0
            for _ in range(8):
                height = page.evaluate("document.documentElement.scrollHeight")
                if height == previous:
                    break
                previous = height
                page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
                page.wait_for_timeout(350)
            else:
                notes.append("Lazy-loading scroll limit reached; additional content may remain unloaded.")
            initial = page.content()
            inspect_html(initial, page.url)
            panels, seen = [], set()
            tabs = page.locator('main [role="tab"], article [role="tab"], [aria-label="Video companion content"] [role="radio"]')
            if not tabs.count():
                tabs = page.locator('[role="tab"]')
            cap = self.settings.get("max_browser_tabs_per_page", 40)
            if tabs.count() > cap:
                notes.append(f"Tab safety limit {cap} reached; some panels were not opened.")
            for index in range(min(tabs.count(), cap)):
                tab = tabs.nth(index)
                if not tab.is_visible() or not tab.is_enabled():
                    continue
                label = tab.inner_text().strip()
                # Never submit a quiz, enroll, log in, navigate language, or change accounts.
                if re.search(r"\b(sign.?in|log.?in|submit|enroll|register|language|delete|purchase)\b", label, re.I):
                    continue
                try:
                    tab.click()
                    page.wait_for_timeout(300)
                    try:
                        page.wait_for_load_state("networkidle", timeout=5000)
                    except Exception:
                        notes.append(f"Tab {label!r} did not become idle; panel completeness is uncertain.")
                    visible = page.locator('[role="tabpanel"]:visible')
                    if visible.count():
                        fragments = [visible.nth(i).evaluate("el => el.outerHTML") for i in range(visible.count())]
                    else:
                        fragments = [page.locator("main").inner_html()] if page.locator("main").count() else []
                    for fragment in fragments:
                        key = digest(fragment)
                        if key not in seen:
                            panels.append((label, fragment))
                            seen.add(key)
                except Exception as exc:
                    notes.append(f"Could not read tab {label!r}: {type(exc).__name__}")
            if blocked:
                notes.append(f"{len(blocked)} document/script/API requests blocked by scope or robots policy; inspect rendered output.")
            return Rendered(initial, page.url, panels, sorted(bundles), notes)
        finally:
            context.close()
