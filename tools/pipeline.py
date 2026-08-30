#!/usr/bin/env python3
"""English public-resource archive: resumable, deterministic, and no paid API."""
from __future__ import annotations

import argparse
from collections import Counter, deque
from contextlib import contextmanager
import gzip
import json
import os
from pathlib import Path
import re
import sys
import time
from urllib.parse import urlsplit, urlunsplit
import xml.etree.ElementTree as ET

from mirror import Archive, ASSET_EXTS, TERMINAL_STATUSES, digest, dump, extract_transcripts, local_path, normalize, page_url, urls_in, verify, write
from scope import is_english_url, non_english_locale

ROOT = Path(__file__).resolve().parents[1]
GOOD = {"complete", "redirect"}


def read_json(path, default=None):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else (default if default is not None else {})


def has_transcript_control(raw):
    return bool(re.search(r">\s*Transcript\s*<", raw, re.I))


def repair_checkout_line_endings(archive):
    """Only repair CRLF conversion when the result exactly matches the stored hash."""
    repaired = 0
    for record in archive.records.values():
        path = (archive.root / record["path"]).resolve()
        if not path.is_relative_to(archive.root.resolve()) or not path.is_file():
            continue
        raw = path.read_bytes()
        normalized = raw.replace(b"\r\n", b"\n")
        if raw != normalized and digest(raw) != record["sha256"] and digest(normalized) == record["sha256"]:
            write(path, normalized)
            repaired += 1
    return repaired


def remove_record(archive, url):
    record = archive.records.pop(url, None)
    candidates = []
    if record:
        content_path = Path(record["path"])
        candidates.append(content_path)
        if content_path.parts and content_path.parts[0] == "content":
            html_folder = Path("html", *content_path.parts[1:-1])
            index_stem = content_path.stem
            rendered_stem = index_stem.replace("index", "rendered", 1)
            network_stem = index_stem.replace("index", "network", 1)
            candidates.extend((html_folder / (index_stem + ".html"),
                               html_folder / (rendered_stem + ".html"),
                               html_folder / (network_stem + ".json")))
    else:
        candidates.extend((local_path(url, "html", "index.html"), local_path(url, "html", "rendered.html"),
                           local_path(url, "html", "network.json")))
    for relative in candidates:
        target = (archive.root / relative).resolve()
        if target.is_relative_to(archive.root.resolve()) and target.is_file():
            target.unlink()
    archive.checked.pop(url, None)
    archive.errors.pop(url, None)


def cleanup(archive):
    """Remove non-English/out-of-scope pages; Git history remains untouched."""
    before = set(archive.discovered)
    non_english_records = [url for url in archive.records
                           if not is_english_url(url)
                           or not is_english_url(archive.records[url].get("source_url", url))]
    noncanonical_records = [url for url in archive.records
                            if url not in non_english_records and archive.canonical(url) != url]
    out_of_scope_records = [url for url in archive.records
                            if url not in non_english_records
                            and url not in noncanonical_records and not archive.allowed(url)]
    removed_records = non_english_records + noncanonical_records + out_of_scope_records
    for url in removed_records:
        remove_record(archive, url)
    archive.discovered = set()
    archive.discover(before)
    for attr in ("errors", "checked"):
        cleaned = {}
        for key, value in getattr(archive, attr).items():
            if ((u := archive.canonical(key)) and is_english_url(u) and archive.allowed(u)
                    and (u in archive.discovered or u in archive.records)):
                cleaned.setdefault(u, value)
        setattr(archive, attr, cleaned)
    for name in ("page-state.json", "asset-manifest.json", "asset-errors.json", "aliases.json"):
        path = archive.root / "inventory" / name
        if path.exists():
            data = read_json(path)
            cleaned = {}
            for key, value in data.items():
                url = archive.canonical(key)
                if not url or not is_english_url(url):
                    continue
                if name in {"page-state.json", "aliases.json"} and not archive.allowed(url):
                    continue
                cleaned.setdefault(url, value)
            dump(path, cleaned)
    # Remove stale query snapshots only when no surviving manifest record
    # references their content/HTML directory. Query directories are generated
    # output; KEEP still blocks removal.
    active_query_dirs = set()
    for record in archive.records.values():
        content_path = Path(record["path"])
        if any(part.startswith("__query_") for part in content_path.parts):
            active_query_dirs.add((archive.root / content_path.parent).resolve())
            if content_path.parts and content_path.parts[0] == "content":
                active_query_dirs.add((archive.root / Path("html", *content_path.parts[1:-1])).resolve())
    removed_orphan_query_files = 0
    for area in ("content", "html"):
        folder = archive.root / area
        if not folder.exists():
            continue
        for query_folder in sorted(folder.rglob("__query_*"), key=lambda path: len(path.parts), reverse=True):
            target = query_folder.resolve()
            if (not target.is_relative_to(archive.root.resolve()) or target in active_query_dirs
                    or any(path.name == "KEEP" for path in query_folder.rglob("KEEP"))):
                continue
            for path in query_folder.rglob("*"):
                if path.is_file():
                    path.unlink()
                    removed_orphan_query_files += 1
            for path in sorted((p for p in query_folder.rglob("*") if p.is_dir()),
                               key=lambda p: len(p.parts), reverse=True):
                if not any(path.iterdir()):
                    path.rmdir()
            if query_folder.exists() and not any(query_folder.iterdir()):
                query_folder.rmdir()
    # Include orphaned translated files, not only entries currently in the manifest.
    deleted_files = 0
    for area in ("content", "html", "assets", "source-bundles"):
        folder = archive.root / area
        if not folder.exists():
            continue
        # Hashed lesson-bundle paths are opaque URL keys. Their two-character
        # fanout directories can coincidentally equal locale codes (de, fr,
        # etc.), so URL-language inference cannot be applied to this area.
        if area == "source-bundles":
            continue
        for path in folder.rglob("*"):
            if path.is_file():
                parts = path.relative_to(folder).parts
                if len(parts) > 1 and not is_english_url("https://" + "/".join(parts[:-1])):
                    path.unlink()
                    deleted_files += 1
        for path in sorted((p for p in folder.rglob("*") if p.is_dir()), key=lambda p: len(p.parts), reverse=True):
            if not any(path.iterdir()):
                path.rmdir()
    report = archive.save()
    result = {"removed_non_english_urls": sum(not is_english_url(u) for u in before),
              "removed_noncanonical_records": len(noncanonical_records),
              "removed_out_of_scope_records": len(out_of_scope_records),
              "removed_orphan_query_files": removed_orphan_query_files,
              "normalized_duplicate_urls": len(before) - sum(not is_english_url(u) for u in before) - len(archive.discovered),
              "removed_archived_pages": len(removed_records), "removed_orphan_files": deleted_files,
              "english_candidate_pages": report["discovered_pages"], "archived_pages": report["archived_pages"]}
    return result


@contextmanager
def exclusive_run(root):
    path = root / ".cache/run.lock"
    path.parent.mkdir(parents=True, exist_ok=True)
    handle = path.open("a+b")
    if path.stat().st_size == 0:
        handle.write(b"0")
        handle.flush()
    handle.seek(0)
    try:
        if os.name == "nt":
            import msvcrt
            msvcrt.locking(handle.fileno(), msvcrt.LK_NBLCK, 1)
        else:
            import fcntl
            fcntl.flock(handle.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
    except OSError as exc:
        handle.close()
        raise RuntimeError("Another archive process owns the lock; do not run two writers") from exc
    try:
        yield
    finally:
        handle.seek(0)
        if os.name == "nt":
            msvcrt.locking(handle.fileno(), msvcrt.LK_UNLCK, 1)
        else:
            fcntl.flock(handle.fileno(), fcntl.LOCK_UN)
        handle.close()


class Runner:
    def __init__(self, archive, args, http=None, browser=None):
        from archive_http import HTTP
        self.a, self.args = archive, args
        self.settings = archive.config.get("pipeline", {})
        hosts = {urlsplit(u).hostname for u in archive.config.get("roots", []) + archive.config.get("indexes", [])}
        hosts.update(archive.config.get("asset_hosts", []))
        self.http = http or HTTP(archive.root, hosts, self.settings)
        self.browser = browser
        self.state = read_json(archive.root / "inventory/page-state.json")
        self.aliases = read_json(archive.root / "inventory/aliases.json")
        self.journal = archive.root / ".cache/pipeline-events.jsonl"
        self.run_log = archive.root / ".cache/run-events.jsonl"
        self.started = time.monotonic()
        self.export_urls = set()
        self.attempted = []
        self.failures = Counter()
        self.events = []
        self.recover()

    def recover(self):
        if not self.journal.exists():
            return
        for line in self.journal.read_text(encoding="utf-8").splitlines():
            try:
                event = json.loads(line)
            except ValueError:
                continue  # An interrupted final append may be incomplete.
            url = event["url"]
            if not is_english_url(url):
                continue
            self.state[url] = event["state"]
            self.a.checked[url] = event["state"]["checked_at"]
            record = event.get("record")
            if event["state"]["status"] == "non_english":
                self.a.excluded.add(url)
                remove_record(self.a, url)
                self.a.discovered.discard(url)
            elif record:
                path = self.a.root / record["path"]
                if path.is_file() and digest(path.read_bytes()) == record["sha256"]:
                    self.a.records[url] = record
            if event["state"]["status"] in GOOD or event["state"]["status"] == "non_english":
                self.a.errors.pop(url, None)
            else:
                self.a.errors[url] = event["state"].get("message", "Incomplete")
            self.a.discover(event.get("links", []))
            if event.get("alias"):
                self.aliases[url] = event["alias"]

    def log(self, message):
        print(message, flush=True)

    def event(self, url, status, message="", links=(), code=None):
        now = int(time.time())
        previous = self.state.get(url, {})
        state = {"status": status, "checked_at": now, "attempts": previous.get("attempts", 0) + 1,
                 "message": message, "http_status": code}
        self.state[url] = state
        self.a.checked[url] = now
        if status in GOOD or status == "non_english":
            self.a.errors.pop(url, None)
        else:
            self.a.errors[url] = message or status
        event = {"url": url, "state": state, "record": self.a.records.get(url),
                 "links": sorted(links), "alias": self.aliases.get(url)}
        self.journal.parent.mkdir(parents=True, exist_ok=True)
        with self.journal.open("a", encoding="utf-8") as handle:
            handle.write(json.dumps(event, ensure_ascii=False) + "\n")
            handle.flush()
            os.fsync(handle.fileno())
        self.events.append({"url": url, **state})

    def checkpoint(self):
        dump(self.a.root / "inventory/page-state.json", self.state)
        dump(self.a.root / "inventory/aliases.json", self.aliases)
        # Coverage reads page-state; persist current events before deriving reports.
        report = self.a.save()
        # All derived state is durable before truncating the recovery journal.
        write(self.journal, "")
        quality = {"statuses": dict(Counter(v["status"] for v in self.state.values())),
                   "archived_without_pipeline_validation": sum(u not in self.state for u in self.a.records),
                   "unresolved_urls": sorted(u for u,v in self.state.items() if v["status"] not in GOOD and v["status"] != "non_english"),
                   "actionable_unresolved_urls": sorted(u for u,v in self.state.items()
                                                        if v["status"] not in GOOD | TERMINAL_STATUSES | {"non_english", "partial"}),
                   "terminal_unarchived_urls": sorted(u for u,v in self.state.items()
                                                       if v["status"] in TERMINAL_STATUSES and u not in self.a.records),
                   "retained_partial_urls": sorted(u for u,v in self.state.items()
                                                   if v["status"] == "partial" and u in self.a.records),
                   "language_policy": "English locale paths and declared English HTML; undeclared language is reported, not guessed.",
                   "complete_definition": "Fetched textual representation passed automated extraction checks; not a guarantee of media/interactive fidelity."}
        dump(self.a.root / "inventory/quality.json", quality)
        return report

    def time_up(self):
        return bool(self.args.max_seconds and time.monotonic() - self.started >= self.args.max_seconds)

    def indexes(self):
        from archive_http import FetchError
        for item in self.a.config.get("exports", []):
            if self.time_up():
                return
            url = item["url"]
            try:
                response = self.http.get(url, max_bytes=100*1024*1024)
                self.a.import_export(response.text, url, item["format"])
                self.export_urls.update(self.a.last_export_urls)
                for page in self.a.last_export_urls:
                    self.state[page] = {"status": "complete", "checked_at": int(time.time()),
                                        "attempts": self.state.get(page, {}).get("attempts", 0) + 1,
                                        "message": "Native official export", "http_status": response.status}
                    self.a.checked[page] = int(time.time())
                self.a.errors.pop(url, None)
                self.log(f"Export: {len(self.a.last_export_urls)} English pages from {url}")
            except Exception as exc:
                self.a.errors[url] = str(exc)
                self.log(f"Export unavailable: {url}: {exc}")
        queue = deque(self.a.config.get("indexes", []))
        seen = set()
        while queue and not self.time_up():
            url = queue.popleft()
            if url in seen or not is_english_url(url):
                continue
            seen.add(url)
            if len(seen) > 500:
                self.a.errors[url] = "Sitemap recursion safety limit reached"
                break
            try:
                response = self.http.get(url)
                text = gzip.decompress(response.body).decode("utf-8") if response.body.startswith(b"\x1f\x8b") else response.text
                if "<sitemapindex" in text or "<urlset" in text:
                    xml = ET.fromstring(text)
                    locs = [node.text for node in xml.iter() if node.tag.rsplit("}",1)[-1] == "loc" and node.text]
                    if xml.tag.rsplit("}",1)[-1] == "sitemapindex":
                        queue.extend(u for v in locs if (u:=normalize(v,url)) and urlsplit(u).hostname in self.http.hosts and is_english_url(u))
                    else:
                        self.a.discover(locs)
                elif text.lstrip().startswith("<"):
                    raise FetchError("Index returned HTML instead of XML/text", "partial")
                else:
                    self.a.discover(urls_in(text, url))
                self.a.errors.pop(url, None)
            except Exception as exc:
                self.a.errors[url] = str(exc)
                self.log(f"Index unavailable: {url}: {exc}")
        self.a.discover(self.a.config.get("roots", []))
        self.checkpoint()

    def valid_record(self, url):
        record = self.a.records.get(url)
        if not record:
            return False
        path = self.a.root / record["path"]
        return path.is_file() and digest(path.read_bytes()) == record["sha256"]

    def candidates(self):
        urls = {page_url(u) for u in self.a.discovered if self.a.allowed(page_url(u))}
        urls.update(self.a.records)
        if self.args.urls:
            urls = {page_url(u) for line in self.args.urls.read_text(encoding="utf-8-sig").splitlines()
                    if line.strip() and not line.lstrip().startswith("#") and (u:=normalize(line)) and self.a.allowed(page_url(u))}
            self.a.discover(urls)
        urls.difference_update(self.export_urls)
        if self.args.resume:
            urls = {u for u in urls if not (self.valid_record(u) and
                    (self.state.get(u,{}).get("status") in GOOD or
                     (u not in self.state and self.a.records[u]["format"] == "native-markdown")))}
        urls = {u for u in urls if self.state.get(u,{}).get("status") != "non_english"}
        # Fair across hosts: one blocked Academy host cannot starve all other sources.
        groups = {}
        for url in sorted(urls, key=lambda u:(u in self.a.records, self.a.checked.get(u,0), u)):
            groups.setdefault(urlsplit(url).hostname, deque()).append(url)
        ordered = []
        while any(groups.values()):
            for host in sorted(groups):
                if groups[host]:
                    ordered.append(groups[host].popleft())
        return ordered

    def scrape(self, url):
        from archive_http import FetchError
        from extraction import extract_html, validate_markdown
        p = urlsplit(url)
        native = p.hostname in {"platform.claude.com", "code.claude.com", "support.claude.com"} and ("/docs/" in p.path or "/articles/" in p.path)
        response = None
        if native:
            target = urlunsplit(p._replace(path=p.path.rstrip("/") + ".md"))
            try:
                response = self.http.get(target)
            except FetchError as exc:
                if exc.code not in {404, 406, 415}:
                    raise
        if response is None:
            response = self.http.get(url)
        final = page_url(normalize(response.url))
        if not is_english_url(final):
            raise FetchError("Redirected to a non-English URL", "non_english")
        if not self.a.allowed(final):
            raise FetchError("Redirect outside resource scope: " + final, "out_of_scope")
        raw = response.text
        if any(key.lower() == "content-language" and any(non_english_locale(v) for v in value.split(",")) for key,value in response.headers.items()):
            raise FetchError("Response declares a non-English language", "non_english")
        html_content = "html" in response.content_type.lower() or bool(re.match(r"\s*(<!doctype html|<html\b)", raw, re.I))
        links, notes = set(), []
        if not html_content:
            if not (native or "text/" in response.content_type or "markdown" in response.content_type):
                raise FetchError("Unexpected non-text content type: " + response.content_type, "partial")
            validate_markdown(raw)
            self.a.accept(url, raw, response.url, "native-markdown", ["Native source; upstream MDX components retained."])
            links.update(urls_in(raw, url))
            status, message = "complete", "Native Markdown validated"
        else:
            extracted = extract_html(raw, final, response.headers)
            write(self.a.root / local_path(url, "html", "index.html"), response.body)
            links.update(extracted.links)
            body = extracted.markdown
            notes.extend(extracted.notes)
            requires_browser = self.args.browser == "always" or extracted.needs_browser or p.hostname == "academy.claude.com"
            panels, bundles, browser_issues = [], [], []
            rendered = None
            if requires_browser:
                if self.args.browser == "never":
                    browser_issues.append("Browser rendering required but disabled.")
                else:
                    if self.browser is None:
                        from browser_render import Browser
                        self.browser = Browser(self.http, self.settings)
                    try:
                        rendered = self.browser.render(final)
                        final = page_url(normalize(rendered.url))
                        if not self.a.allowed(final):
                            raise FetchError("Browser navigated outside resource scope", "out_of_scope")
                        extracted = extract_html(rendered.html, final, response.headers)
                        write(self.a.root / local_path(url, "html", "rendered.html"), rendered.html)
                        dump(self.a.root / local_path(url, "html", "network.json"), rendered.resource_audit)
                        links.update(extracted.links)
                        body = extracted.markdown
                        panels, bundles = rendered.panels, rendered.bundles
                        browser_issues.extend(rendered.notes)
                    except FetchError as exc:
                        if exc.status in {"blocked", "non_english", "out_of_scope"}:
                            raise
                        browser_issues.append(str(exc))
                    except Exception as exc:
                        browser_issues.append("Browser failed: " + str(exc).splitlines()[0])
            transcript_characters = 0
            for label, panel in panels:
                extra = extract_html("<html lang='en'><main>" + panel + "</main></html>", final)
                links.update(extra.links)
                if extra.markdown.strip() and re.sub(r"\s+", " ", extra.markdown).strip() not in re.sub(r"\s+", " ", body):
                    body += "\n\n## " + (label or "Additional panel") + "\n\n" + extra.markdown
                    if "transcript" in label.lower():
                        transcript_characters = max(transcript_characters, len(extra.markdown.strip()))
            if p.hostname == "academy.claude.com":
                bundles = set(bundles) | {u for u in extracted.links if "/content/" in u and urlsplit(u).path.endswith(".js")}
                for bundle in sorted(bundles):
                    try:
                        source = self.http.get(bundle)
                        write(self.a.root / local_path(bundle, "source-bundles", "source.js"), source.body)
                        for transcript in extract_transcripts(source.text):
                            if re.sub(r"\s+", " ", transcript).strip() not in re.sub(r"\s+", " ", body):
                                body += "\n\n## Video transcript\n\n" + transcript + "\n"
                                transcript_characters = max(transcript_characters, len(transcript.strip()))
                    except Exception as exc:
                        browser_issues.append("Lesson bundle unavailable: " + str(exc))
                if has_transcript_control(raw) and not any("transcript" in label.lower() for label, _ in panels) and "## Video transcript" not in body:
                    browser_issues.append("Transcript control present, but transcript capture could not be confirmed.")
                if "quiz" in p.path:
                    browser_issues.append("Quiz UI text retained; hidden questions/feedback and learner state are not certified complete.")
            validate_markdown(body)
            notes.extend(browser_issues)
            status = "partial" if browser_issues else "complete"
            preserve = status == "partial" and self.valid_record(url) and (self.state.get(url,{}).get("status") == "complete" or self.a.records[url]["format"] == "native-markdown")
            if not preserve:
                self.a.accept(url, body, final, "browser-html" if rendered else "html-derived", notes, extracted.title)
                self.a.records[url]["language"] = extracted.language
                self.a.records[url]["text_validation"] = status
                if transcript_characters:
                    self.a.records[url]["transcript_characters"] = transcript_characters
            message = "; ".join(browser_issues) if browser_issues else "HTML content and available panels extracted"
        self.a.discover(links)
        if final != url:
            self.aliases[url] = final
            self.a.discover([final])
        return status, message, links, response.status

    def run(self):
        from archive_http import FetchError
        checked = set()
        try:
            if not self.args.no_discovery and not self.args.urls:
                self.indexes()
            while not self.time_up():
                candidates = [u for u in self.candidates() if u not in checked and self.failures[urlsplit(u).hostname] < self.settings.get("max_consecutive_host_errors",5)]
                if not candidates:
                    break
                for url in candidates:
                    if self.time_up() or (self.args.limit and len(self.attempted) >= self.args.limit):
                        break
                    host = urlsplit(url).hostname
                    if self.failures[host] >= self.settings.get("max_consecutive_host_errors",5):
                        continue
                    started = time.monotonic()
                    try:
                        status, message, links, code = self.scrape(url)
                        self.failures[host] = 0
                    except Exception as exc:
                        status = exc.status if isinstance(exc, FetchError) else "failed"
                        code = exc.code if isinstance(exc, FetchError) else None
                        message, links = str(exc), set()
                        if status == "non_english":
                            self.a.excluded.add(url)
                            remove_record(self.a, url)
                            self.a.discovered.discard(url)
                        if status in {"blocked", "failed", "deferred"}:
                            self.failures[host] += 1
                    self.event(url, status, message, links, code)
                    self.attempted.append(url)
                    checked.add(url)
                    self.log(f"[{len(self.attempted)}] {status.upper()} {url} ({time.monotonic()-started:.1f}s)" + (f" — {message[:180]}" if status not in GOOD else ""))
                    if len(self.attempted) % self.settings.get("checkpoint_pages",10) == 0:
                        self.checkpoint()
                if self.args.limit and len(self.attempted) >= self.args.limit:
                    break
        finally:
            if self.browser:
                self.browser.close()
            report = self.checkpoint()
            run_report = {"checked_at": int(time.time()), "elapsed_seconds": round(time.monotonic()-self.started,2),
                          "attempted_pages": len(self.attempted), "results": self.events,
                          "http_requests": self.http.requests, "conditional_cache_hits": self.http.cache_hits,
                          "host_circuit_breakers": {h:n for h,n in self.failures.items() if n >= self.settings.get("max_consecutive_host_errors",5)},
                          "missing_pages": report["missing_pages"], "archived_pages": report["archived_pages"]}
            dump(self.a.root / "inventory/last-run.json", run_report)
        return report


def assets(archive, args):
    from archive_http import HTTP
    http = HTTP(archive.root, archive.config.get("asset_hosts", []), archive.config.get("pipeline", {}))
    records = read_json(archive.root / "inventory/asset-manifest.json")
    errors = read_json(archive.root / "inventory/asset-errors.json")
    count, started = 0, time.monotonic()
    for url in sorted(archive.discovered):
        p = urlsplit(url)
        ext = Path(p.path).suffix.lower()
        if p.hostname not in http.hosts or ext not in ASSET_EXTS or not is_english_url(url):
            continue
        if args.limit and count >= args.limit or args.max_seconds and time.monotonic()-started >= args.max_seconds:
            break
        if args.resume and url in records:
            existing=archive.root/records[url]["path"]
            if existing.is_file() and digest(existing.read_bytes())==records[url]["sha256"]:
                continue
        try:
            response = http.get(url, max_bytes=archive.config.get("pipeline",{}).get("max_asset_bytes",104857600))
            if not is_english_url(response.url):
                continue
            if "html" in response.content_type.lower() or (ext == ".pdf" and not response.body.startswith(b"%PDF-")):
                raise ValueError("Asset endpoint returned HTML or an invalid PDF signature")
            path = local_path(url, "assets", "original" + ext)
            write(archive.root/path, response.body)
            records[url] = {"path":path.as_posix(), "sha256":digest(response.body), "source_url":response.url, "content_type":response.content_type}
            errors.pop(url, None)
        except Exception as exc:
            errors[url] = str(exc)
        count += 1
        dump(archive.root/"inventory/asset-manifest.json", records)
        dump(archive.root/"inventory/asset-errors.json", errors)
        print(f"Asset {count}: {url}", flush=True)
    return 2 if errors else 0


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["sync", "cleanup", "verify", "report", "assets"])
    parser.add_argument("--root", type=Path, default=ROOT)
    parser.add_argument("--resume", action="store_true", help="Retry missing/partial/failed pages; skip verified successful pages")
    parser.add_argument("--no-discovery", action="store_true", help="Use existing inventory only; no index/export requests")
    parser.add_argument("--urls", type=Path, help="Optional URL list for a bounded pilot; never overwrites the main inventory")
    parser.add_argument("--browser", choices=["auto", "always", "never"], default="auto")
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--max-seconds", type=int, default=0)
    parser.add_argument("--repair-line-endings", action="store_true", help="With verify: repair only proven Git CRLF conversion, never substantive edits")
    args = parser.parse_args(argv)
    if args.limit < 0 or args.max_seconds < 0:
        parser.error("Limits must be non-negative")
    archive = Archive(args.root.resolve())
    if args.command == "verify":
        if args.repair_line_endings:
            with exclusive_run(archive.root):
                print(f"Repaired checkout line endings: {repair_checkout_line_endings(archive)}")
        failures = verify(archive)
        failures.extend("Non-English manifest URL: " + u for u in archive.records if not is_english_url(u))
        failures.extend("Out-of-scope manifest URL: " + u for u in archive.records if not archive.allowed(u))
        for name in ("resource-urls.txt", "missing-urls.txt", "actionable-missing-urls.txt", "discovered-urls.txt", "asset-urls.txt", "external-media-urls.txt"):
            path = archive.root/"inventory"/name
            if path.exists():
                lines = path.read_text(encoding="utf-8").splitlines()
                if len(lines) != len(set(lines)) or any(not is_english_url(u) for u in lines):
                    failures.append("Duplicates or non-English URLs in " + name)
                if name in {"resource-urls.txt", "missing-urls.txt", "actionable-missing-urls.txt"} and any(not archive.allowed(u) for u in lines):
                    failures.append("Out-of-scope page URLs in " + name)
        print(json.dumps({"verified_files":len(archive.records), "failures":failures}, indent=2))
        return 1 if failures else 0
    if args.command == "report":
        report = archive.save()
        print(json.dumps(report, indent=2))
        return 2 if report["actionable_missing_pages"] else 0
    with exclusive_run(archive.root):
        result = cleanup(archive)
        if args.command == "cleanup":
            dump(archive.root/"inventory/english-cleanup.json", result)
            print(json.dumps(result,indent=2))
            return 0
        if args.command == "assets":
            return assets(archive,args)
        runner = Runner(archive,args)
        report = runner.run()
        print(json.dumps({k:report[k] for k in ("archived_pages","discovered_pages","missing_pages","actionable_missing_pages","terminal_pages")},indent=2))
        actionable_unresolved = any(v["status"] not in GOOD | TERMINAL_STATUSES | {"non_english", "partial"}
                                    for v in runner.state.values())
        return 2 if report["actionable_missing_pages"] or actionable_unresolved else 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("Interrupted. Checkpoint preserved; rerun with --resume.", file=sys.stderr)
        sys.exit(130)
    except Exception as exc:
        print(f"Fatal: {exc}",file=sys.stderr)
        sys.exit(1)
