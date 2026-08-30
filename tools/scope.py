"""Deterministic English-only URL policy; never invent translated counterparts."""
from __future__ import annotations

import html
import re
from urllib.parse import parse_qsl, unquote, urlencode, urlsplit, urlunsplit

LANGUAGES = frozenset("ar bg ca cs da de el es et fa fi fr he hi hr hu id it ja ko lt lv ms nl no pl pt ro ru sk sl sv th tr uk vi zh".split())
LANGUAGE_KEYS = {"lang", "language", "locale", "hl"}
TRACKING_KEYS = {"color", "fbclid", "gclid", "msclkid", "ref", "wtime"}


def non_english_locale(value):
    value = value.strip().replace("_", "-").lower()
    return bool(re.fullmatch(r"[a-z]{2}(?:-[a-z0-9]{2,8})*", value)) and value.split("-")[0] in LANGUAGES


def is_english_url(url):
    p = urlsplit(url)
    parts = [unquote(x) for x in p.path.split("/") if x]
    # Claude Code's generated language indexes use /docs/_llms/<locale>.
    # Some of those locale slugs are aliases (cn, jp), so the generic ISO
    # locale detector below cannot identify them reliably. In this explicit
    # language namespace, only English variants belong in this archive.
    if len(parts) > 2 and parts[:2] == ["docs", "_llms"]:
        locale = parts[2].strip().replace("_", "-").lower()
        if locale != "en" and not locale.startswith("en-"):
            return False
    position = 1 if parts and parts[0] == "docs" else 0
    if len(parts) > position and non_english_locale(parts[position]):
        return False
    return not any(k.lower() in LANGUAGE_KEYS and non_english_locale(v) for k, v in parse_qsl(p.query))


def clean_url(url):
    """Remove extraction punctuation/tracking only; preserve meaningful queries/case/slashes."""
    url = html.unescape(url.strip())
    # A previous Markdown extractor sometimes joined the visible destination
    # and its repeated link target as `destination](destination`.
    if "](" in url:
        url = url.split("](", 1)[0]
    # Markdown link punctuation/labels accidentally included by earlier broad
    # extraction regexes. Cut at the first unmatched closing parenthesis while
    # preserving legitimate balanced parentheses inside a URL.
    depth = 0
    for index, character in enumerate(url):
        if character == "(":
            depth += 1
        elif character == ")":
            if depth == 0:
                url = url[:index]
                break
            depth -= 1
    p = urlsplit(url)
    original_query = parse_qsl(p.query, keep_blank_values=True)
    query = []
    for key, value in original_query:
        lowered = key.lower().lstrip(";")
        navigation_filter = (
            p.hostname == "academy.claude.com" and lowered in {"color", "kind", "product", "department"}
        ) or (
            p.hostname == "platform.claude.com" and p.path.rstrip("/") == "/cookbook" and lowered == "category"
        ) or (
            p.hostname == "claude.com" and p.path.rstrip("/") == "/blog"
            and (lowered == "color" or lowered.endswith("_page"))
        )
        if lowered.startswith("utm_") or lowered in TRACKING_KEYS or navigation_filter:
            continue
        query.append((key, value))
    query_string = urlencode(query) if len(query) != len(original_query) else p.query
    return urlunsplit((p.scheme.lower(), p.netloc.lower(), p.path or "/", query_string, ""))
