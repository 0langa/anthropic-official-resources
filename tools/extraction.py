"""HTML preservation and deterministic Markdown conversion; no model calls."""
from __future__ import annotations

from dataclasses import dataclass, field
import re
from urllib.parse import urljoin, urlsplit

from bs4 import BeautifulSoup
from markdownify import MarkdownConverter

from archive_http import FetchError
from mirror import normalize
from scope import non_english_locale


class Converter(MarkdownConverter):
    def convert_table(self, el, text, parent_tags):
        # HTML retains rowspan/colspan and nested content that pipe tables can lose.
        return "\n\n" + str(el) + "\n\n"


@dataclass
class Extracted:
    markdown: str
    title: str
    links: set = field(default_factory=set)
    notes: list = field(default_factory=list)
    language: str = "unknown"
    needs_browser: bool = False
    canonical: str | None = None
    media: list = field(default_factory=list)


def inspect_html(raw, url, headers=None):
    soup = BeautifulSoup(raw, "html.parser")
    title = soup.title.get_text(" ", strip=True) if soup.title else ""
    text = soup.get_text(" ", strip=True)
    if re.search(r"^(?:just a moment|access denied|attention required|404\b|page not found|not found|verify you are human)", title, re.I):
        raise FetchError("Error or challenge page: " + title, "blocked" if "404" not in title else "gone")
    if soup.select_one('#challenge-running, #cf-challenge-running, form[action*="challenge-platform"]'):
        raise FetchError("Browser challenge detected; no bypass attempted", "blocked")
    declarations = []
    if soup.html and soup.html.get("lang"):
        declarations.append(soup.html["lang"])
    for tag in soup.select('meta[http-equiv="content-language"], meta[property="og:locale"]'):
        declarations.append(tag.get("content", ""))
    for key, value in (headers or {}).items():
        if key.lower() == "content-language":
            declarations.extend(value.split(","))
    if any(non_english_locale(x) for x in declarations):
        raise FetchError("Non-English page language declaration: " + ", ".join(declarations), "non_english")
    language = "en" if any(x.lower().startswith("en") for x in declarations) else "unknown"
    if len(text) < 100 and soup.select_one('input[type="password"]'):
        raise FetchError("Authentication required", "blocked")
    return soup, title, language


def extract_html(raw, url, headers=None):
    soup, title, language = inspect_html(raw, url, headers)
    base = url
    if soup.base and soup.base.get("href"):
        base = urljoin(url, soup.base["href"])
    links = set()
    media = []
    for el in soup.find_all(True):
        for attr in ("href", "src", "data-src", "poster"):
            if el.get(attr) and (value := normalize(el[attr], base)):
                links.add(value)
                el[attr] = value
        if el.get("srcset"):
            for item in el["srcset"].split(","):
                if value := normalize(item.strip().split(" ")[0], base):
                    links.add(value)
    canonical_tag = soup.find("link", rel="canonical")
    canonical = normalize(canonical_tag.get("href", ""), base) if canonical_tag else None
    # A real DOM parser preserves nested main/article elements; never regex-truncate.
    main = soup.find("main") or soup.find("article") or soup.body or soup
    notes = []
    if main is soup or main is soup.body:
        notes.append("No semantic main/article element; full body retained.")
    tabs = bool(main.select('[role="tab"], [aria-expanded="false"], [aria-label="Video companion content"]'))
    for element in list(main.select("script, style, nav, footer, noscript")):
        element.decompose()
    # Do not delete hidden/aria-hidden content: it may contain another code/tab variant.
    for element in list(main.select("iframe, video, audio")):
        sources = [element.get("src")] + [x.get("src") for x in element.select("source, track")]
        for source in filter(None, sources):
            media.append(source)
        replacement = soup.new_tag("p")
        replacement.string = "Embedded media: " + ", ".join(filter(None, sources))
        element.replace_with(replacement)
    markdown = Converter(heading_style="ATX", bullets="-", wrap=False).convert(str(main)).strip() + "\n"
    if media:
        notes.append("Embedded media URLs preserved; video/audio binaries are not mirrored.")
    if language == "unknown":
        notes.append("No explicit page language declaration; URL is English or unprefixed.")
    if not title:
        heading = main.find(re.compile("^h[1-6]$"))
        title = heading.get_text(" ", strip=True) if heading else urlsplit(url).path
    return Extracted(markdown, title, links, notes, language, tabs or len(markdown.strip()) < 150, canonical, media)


def validate_markdown(body):
    if len(body.strip()) < 80:
        raise FetchError("Empty or suspiciously short content", "partial")
    if re.match(r"\s*(?:<!doctype html|<html\b)", body, re.I):
        raise FetchError("HTML returned as native Markdown", "partial")
    if re.match(r"\s*#?\s*(?:just a moment|access denied|404 not found|verify you are human)\b", body, re.I):
        raise FetchError("Challenge/error text returned as Markdown", "blocked")
