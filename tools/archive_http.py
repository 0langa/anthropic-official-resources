"""Bounded HTTP requests, conditional cache, robots policy, and safe redirects."""
from __future__ import annotations

from dataclasses import dataclass
from email.utils import parsedate_to_datetime
import json
import time
import urllib.error
import urllib.parse
import urllib.request
import urllib.robotparser

from mirror import digest, dump, normalize, write, USER_AGENT


class FetchError(Exception):
    def __init__(self, message, status="failed", code=None):
        super().__init__(message)
        self.status, self.code = status, code


@dataclass
class Response:
    body: bytes
    url: str
    content_type: str
    headers: dict
    status: int = 200
    cached: bool = False

    @property
    def text(self):
        return self.body.decode("utf-8-sig", errors="replace")


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def retry_delay(value, attempt, now=None):
    if value:
        try:
            return max(0.0, float(value))
        except ValueError:
            try:
                return max(0.0, parsedate_to_datetime(value).timestamp() - (now or time.time()))
            except (ValueError, TypeError, OverflowError):
                pass
    return float(2 ** (attempt + 1))


class HTTP:
    def __init__(self, root, hosts, settings=None):
        self.root = root
        self.hosts = set(hosts)
        self.settings = settings or {}
        self.cache = root / ".cache/http-v2"
        self.opener = urllib.request.build_opener(NoRedirect())
        self.robots = {}
        self.next_request = {}
        self.requests = 0
        self.cache_hits = 0

    def validate(self, url):
        if not normalize(url) or urllib.parse.urlsplit(url).hostname not in self.hosts:
            raise FetchError("Request or redirect outside configured hosts", "out_of_scope")

    def allowed(self, url):
        self.validate(url)
        p = urllib.parse.urlsplit(url)
        origin = p.scheme + "://" + p.netloc
        if origin not in self.robots:
            try:
                response = self.get(origin + "/robots.txt", check_robots=False)
                if "html" in response.content_type or response.text.lstrip().startswith("<"):
                    raise FetchError("robots.txt returned HTML; policy cannot be verified", "blocked")
                policy = urllib.robotparser.RobotFileParser()
                policy.parse(response.text.splitlines())
                self.robots[origin] = policy
            except FetchError as exc:
                if exc.code in {404, 410}:
                    self.robots[origin] = None
                else:
                    raise FetchError("Cannot verify robots.txt: " + str(exc), "blocked", exc.code) from exc
        policy = self.robots[origin]
        if policy and not policy.can_fetch(USER_AGENT, url):
            raise FetchError("Disallowed by robots.txt", "blocked")
        return policy

    def get(self, url, *, check_robots=True, max_bytes=None):
        self.validate(url)
        current = url
        for hop in range(9):
            self.validate(current)
            policy = self.allowed(current) if check_robots else None
            host = urllib.parse.urlsplit(current).netloc
            delay = float(self.settings.get("request_delay_seconds", 1.0))
            if policy:
                delay = max(delay, policy.crawl_delay(USER_AGENT) or policy.crawl_delay("*") or 0)
                rate = policy.request_rate(USER_AGENT) or policy.request_rate("*")
                if rate and rate.requests:
                    delay = max(delay, rate.seconds / rate.requests)
            key = digest(current)
            meta, data = self.cache / (key + ".json"), self.cache / (key + ".bin")
            old = json.loads(meta.read_text(encoding="utf-8")) if meta.exists() and data.exists() else {}
            headers = {"User-Agent": USER_AGENT, "Accept-Language": "en-US,en;q=0.9", "Accept": "*/*"}
            if old.get("etag"):
                headers["If-None-Match"] = old["etag"]
            if old.get("last_modified"):
                headers["If-Modified-Since"] = old["last_modified"]
            retries = int(self.settings.get("max_retries", 3))
            for attempt in range(retries + 1):
                wait = self.next_request.get(host, 0) - time.monotonic()
                if wait > 0:
                    time.sleep(wait)
                self.next_request[host] = time.monotonic() + delay
                try:
                    self.requests += 1
                    request = urllib.request.Request(current, headers=headers)
                    with self.opener.open(request, timeout=self.settings.get("timeout_seconds", 45)) as res:
                        cap = max_bytes or self.settings.get("max_page_bytes", 50 * 1024 * 1024)
                        body = res.read(cap + 1)
                        if len(body) > cap:
                            raise FetchError(f"Response exceeds {cap} byte limit", "partial")
                        info = {"etag": res.headers.get("ETag"), "last_modified": res.headers.get("Last-Modified"),
                                "type": res.headers.get("Content-Type", ""), "headers": dict(res.headers)}
                        write(data, body)
                        dump(meta, info)
                        return Response(body, current, info["type"], info["headers"])
                except urllib.error.HTTPError as exc:
                    exc.close()
                    if exc.code in {301, 302, 303, 307, 308}:
                        target = normalize(exc.headers.get("Location", ""), current)
                        if not target:
                            raise FetchError("Invalid redirect", "failed", exc.code) from exc
                        current = target
                        break
                    if exc.code == 304 and old:
                        self.cache_hits += 1
                        return Response(data.read_bytes(), current, old["type"], old.get("headers", {}), 304, True)
                    if exc.code in {429, 500, 502, 503, 504} and attempt < retries:
                        pause = retry_delay(exc.headers.get("Retry-After"), attempt)
                        if pause > 60:
                            raise FetchError(f"Server requests retry after {pause:.0f}s; defer to a later run", "deferred", exc.code) from exc
                        self.next_request[host] = time.monotonic() + pause
                        continue
                    status = "gone" if exc.code in {404, 410} else "blocked" if exc.code in {401, 403, 429} else "failed"
                    raise FetchError(f"HTTP {exc.code}: {current}", status, exc.code) from exc
                except (urllib.error.URLError, TimeoutError, ConnectionError) as exc:
                    if attempt == retries:
                        raise FetchError(str(exc)) from exc
                    self.next_request[host] = time.monotonic() + retry_delay(None, attempt)
            else:
                raise FetchError("Retry limit reached")
        raise FetchError("Redirect loop or too many redirects")
