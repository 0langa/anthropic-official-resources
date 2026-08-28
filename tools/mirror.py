#!/usr/bin/env python3
"""Deterministic public-resource archive. Source files are data, never executed."""
from __future__ import annotations

import argparse
import hashlib
import html
from html.parser import HTMLParser
import json
import os
from pathlib import Path
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import urllib.robotparser
import xml.etree.ElementTree as ET
from scope import clean_url, is_english_url

USER_AGENT = "AnthropicResourceArchive/1.0 (personal documentation backup)"
MAX_BYTES = 100 * 1024 * 1024
TRANSIENT = {429, 500, 502, 503, 504}
ASSET_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif", ".pdf", ".zip", ".ipynb", ".csv", ".json", ".txt", ".vtt", ".srt"}


def digest(data):
    return hashlib.sha256(data.encode() if isinstance(data, str) else data).hexdigest()


def dump(path, data):
    write(path, json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True) + "\n")


def write(path, data):
    path = Path(path)
    raw = data.encode("utf-8") if isinstance(data, str) else data
    if path.exists() and path.read_bytes() == raw:
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name(path.name + ".tmp")
    tmp.write_bytes(raw)
    tmp.replace(path)
    return True


def normalize(url, base=""):
    try:
        p = urllib.parse.urlsplit(clean_url(urllib.parse.urljoin(base, html.unescape(url))))
        port = p.port
    except (ValueError, TypeError):
        return None
    if p.scheme not in {"http", "https"} or not p.hostname or p.username or p.password:
        return None
    if port not in {None, 80, 443} and p.hostname not in {"localhost", "127.0.0.1", "::1"}:
        return None
    parts = p.path.split("/")
    if any(urllib.parse.unquote(x) in {".", ".."} or "\\" in urllib.parse.unquote(x) for x in parts):
        return None
    return urllib.parse.urlunsplit((p.scheme, p.netloc.lower(), p.path or "/", p.query, ""))


def page_url(url):
    p = urllib.parse.urlsplit(url)
    if p.path.endswith(".md") and (p.hostname in {"platform.claude.com", "code.claude.com", "support.claude.com"}):
        return urllib.parse.urlunsplit(p._replace(path=p.path[:-3]))
    return url


def local_path(url, area="content", filename="index.md"):
    url = normalize(url)
    if not url:
        raise ValueError("Unsafe URL")
    p = urllib.parse.urlsplit(url)
    # Keep literal URL path segments. Encode only filesystem-unsafe characters.
    parts = [urllib.parse.quote(x, safe="-._~%") for x in p.path.split("/") if x]
    # Windows reserved filenames and trailing dots cannot be represented literally.
    reserved = re.compile(r"^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)", re.I)
    parts = ["%" + x.encode().hex() if reserved.match(x) or x.endswith(".") else x for x in parts]
    if p.query:
        parts.append("__query_" + digest(p.query)[:16])
    if p.path != "/" and p.path.endswith("/"):
        filename = "directory-" + filename
    # Case-sensitive URL variants must coexist on Windows. Keep the URL folders
    # and distinguish the leaf filename deterministically on every platform.
    if any(c.isupper() for c in p.path):
        leaf = Path(filename)
        filename = leaf.stem + "--" + digest(url)[:16] + leaf.suffix
    host = p.netloc.replace(":", "%3A")
    return Path(area, host, *parts, filename)


def parse_platform_export(text):
    pattern = r"^---\ntitle: (.*?)\nurl: (https://[^\n]+)\n(?:description:.*\n)?---\n"
    matches = list(re.finditer(pattern, text, re.M))
    expected = re.search(r"^Total pages included: (\d+)\s*$", text, re.M)
    if not matches or not expected or len(matches) != int(expected[1]):
        raise ValueError("Platform export marker/count mismatch")
    pages = []
    for i, m in enumerate(matches):
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = text[m.start():end]
        # Each next page has an export-only H2 before its frontmatter.
        if i + 1 < len(matches):
            body = re.sub(r"\n---\n\n## [^\n]+\n\n$", "", body)
        else:
            body = re.sub(r"\n---\n\nLast generated:.*\nTotal pages included: \d+\s*$", "", body)
        body = re.sub(r"\n{3,}(?:#{2,4} [^\n]+\n*)+$", "", body.rstrip())
        pages.append((m[2], m[1], body.strip() + "\n"))
    if len({x[0] for x in pages}) != len(pages):
        raise ValueError("Duplicate URLs in export")
    return pages


def parse_code_export(text):
    matches = list(re.finditer(r"^# ([^\n]+)\nSource: (https://[^\n]+)\n", text, re.M))
    if not matches:
        raise ValueError("Claude Code export format not recognized")
    return [(m[2], m[1], text[m.start():matches[i+1].start() if i+1<len(matches) else len(text)].strip()+"\n") for i,m in enumerate(matches)]


def urls_in(text, base):
    values = re.findall(r'https?://[^\s<>"\x27`\\]+', text)
    values += re.findall(r'(?:href|src)=["\x27]([^"\x27]+)', text)
    values += re.findall(r'\]\(([^\s)]+)', text)
    return sorted({u for value in values if (u := normalize(value.rstrip(").,;"), base))})


class ReadableHTML(HTMLParser):
    """Conservative HTML-to-Markdown; preserve tables as HTML and code verbatim."""
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.links, self.stack = [], [], []
        self.skip, self.pre, self.table = 0, 0, 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in {"script", "style", "nav", "footer", "noscript"}:
            self.skip += 1
        if self.skip:
            return
        if tag == "table": self.table += 1
        if self.table:
            self.out.append(self.get_starttag_text())
            return
        if tag in {"p", "div", "section", "article", "main", "blockquote"}: self.out.append("\n\n")
        if re.fullmatch(r"h[1-6]", tag): self.out.append("\n\n" + "#" * int(tag[1]) + " ")
        if tag == "br": self.out.append("\n")
        if tag == "li": self.out.append("\n- ")
        if tag == "pre":
            self.pre += 1
            self.out.append("\n\n~~~~\n")
        if tag == "code" and not self.pre: self.out.append("`")
        if tag in {"strong", "b"}: self.out.append("**")
        if tag in {"em", "i"}: self.out.append("*")
        if tag == "a":
            self.links.append(a.get("href", "")); self.out.append("[")
        if tag == "img": self.out.append("![" + a.get("alt", "") + "](" + a.get("src", "") + ")")

    def handle_endtag(self, tag):
        if tag in {"script", "style", "nav", "footer", "noscript"} and self.skip:
            self.skip -= 1
            return
        if self.skip: return
        if self.table:
            self.out.append("</" + tag + ">")
            if tag == "table": self.table -= 1
            return
        if tag == "pre":
            self.pre = max(0, self.pre - 1); self.out.append("\n~~~~\n\n")
        if tag == "code" and not self.pre: self.out.append("`")
        if tag in {"strong", "b"}: self.out.append("**")
        if tag in {"em", "i"}: self.out.append("*")
        if tag == "a" and self.links: self.out.append("](" + self.links.pop() + ")")
        if tag in {"p", "div", "section", "article", "main", "li"} or re.fullmatch(r"h[1-6]",tag): self.out.append("\n")

    def handle_data(self, data):
        if not self.skip:
            self.out.append(data if self.pre else re.sub(r"\s+", " ", data))

    def markdown(self):
        return "".join(self.out).strip() + "\n"


def html_to_md(raw):
    # Capture main content where available, keeping the raw page separately.
    m = re.search(r"<(main|article)\b[^>]*>([\s\S]*?)</\1>", raw, re.I)
    parser = ReadableHTML()
    parser.feed(m[2] if m else raw)
    return parser.markdown()


def extract_transcripts(js):
    """Read literal JS string constants referenced by transcript props; no eval."""
    values = {}
    literal = r'(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|\x27(?:\\.|[^\x27\\])*\x27)'
    for m in re.finditer(r'(?:\bvar\s+|\bconst\s+|\blet\s+|,)([\w$]+)\s*=\s*' + literal, js):
        token = m[2]
        if "${" in token: continue
        if token.startswith('"'):
            try: value = json.loads(token)
            except ValueError: continue
        else:
            value = re.sub(r'\\([`\x27\\])', r'\1', token[1:-1])
            value = value.replace("\\n", "\n").replace("\\t", "\t").replace("\\r", "\r")
        values[m[1]] = value
    found = []
    for m in re.finditer(r'\btranscript\s*:\s*([\w$]+)', js):
        if m[1] in values and values[m[1]] not in found: found.append(values[m[1]])
    return found


class Fetcher:
    def __init__(self, root, transport="direct"):
        self.cache = root / ".cache/http"
        self.transport = transport
        self.robots = {}

    def fetch(self, url, robots=True):
        if not normalize(url): raise ValueError("Unsafe URL")
        if robots and self.transport == "direct":
            p=urllib.parse.urlsplit(url); origin=p.scheme+"://"+p.netloc
            if origin not in self.robots:
                try:
                    body, _, _, _ = self.fetch(origin+"/robots.txt", robots=False)
                    rp=urllib.robotparser.RobotFileParser();rp.parse(body.decode("utf-8", "replace").splitlines())
                    self.robots[origin]=rp
                except urllib.error.HTTPError as e:
                    if e.code not in {404,410}: raise
                    self.robots[origin]=None
            rp=self.robots[origin]
            if rp and not rp.can_fetch(USER_AGENT,url): raise RuntimeError("robots.txt disallows this URL")
        if self.transport == "firecrawl":
            key=os.environ.get("FIRECRAWL_API_KEY")
            if not key: raise RuntimeError("FIRECRAWL_API_KEY is required for --transport firecrawl")
            request=urllib.request.Request("https://api.firecrawl.dev/v2/scrape", data=json.dumps({"url":url,"formats":["rawHtml","markdown","links"],"onlyMainContent":True,"maxAge":0}).encode(),headers={"Authorization":"Bearer "+key,"Content-Type":"application/json"})
            with urllib.request.urlopen(request,timeout=120) as r: d=json.load(r)
            if not d.get("success"): raise RuntimeError("Firecrawl returned unsuccessful result")
            d=d["data"];m=d.get("metadata",{});raw=d.get("rawHtml") or d.get("markdown","")
            if m.get("statusCode",200)>=400: raise RuntimeError("Upstream HTTP "+str(m["statusCode"]))
            return raw.encode(),m.get("url",url),m.get("contentType","text/html"),d
        key=digest(url); meta=self.cache/(key+".json"); data=self.cache/(key+".bin")
        old=json.loads(meta.read_text()) if meta.exists() and data.exists() else {}
        headers={"User-Agent":USER_AGENT,"Accept":"text/markdown, text/html;q=0.9, */*;q=0.5"}
        if old.get("etag"):headers["If-None-Match"]=old["etag"]
        if old.get("last_modified"):headers["If-Modified-Since"]=old["last_modified"]
        for attempt in range(4):
            try:
                req=urllib.request.Request(url,headers=headers)
                with urllib.request.urlopen(req,timeout=60) as r:
                    body=r.read(MAX_BYTES+1)
                    if len(body)>MAX_BYTES:raise RuntimeError("Response exceeds 100 MiB safety limit")
                    info={"etag":r.headers.get("ETag"),"last_modified":r.headers.get("Last-Modified"),"url":r.url,"type":r.headers.get("Content-Type","")}
                    write(data,body);dump(meta,info)
                    return body,r.url,info["type"],{}
            except urllib.error.HTTPError as e:
                if e.code==304 and old:return data.read_bytes(),old["url"],old["type"],{}
                if e.code not in TRANSIENT or attempt==3:raise
                delay=e.headers.get("Retry-After","")
                time.sleep(min(120,int(delay)) if delay.isdigit() else 2**(attempt+1))


class Archive:
    def __init__(self, root):
        self.root=Path(root)
        self.config=json.loads((self.root/"sources.json").read_text(encoding="utf-8"))
        path=self.root/"inventory/manifest.json"
        self.records=json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}
        path=self.root/"inventory/discovered-urls.txt"
        self.discovered=set(path.read_text(encoding="utf-8").splitlines()) if path.exists() else set()
        errors=self.root/"inventory/errors.json"
        self.errors=json.loads(errors.read_text(encoding="utf-8")) if errors.exists() else {}
        state=self.root/"inventory/check-state.json"
        self.checked=json.loads(state.read_text(encoding="utf-8")) if state.exists() else {}
        state=self.root/"inventory/page-state.json"
        page_state=json.loads(state.read_text(encoding="utf-8")) if state.exists() else {}
        self.excluded={u for u,v in page_state.items() if v.get("status")=="non_english"}

    def allowed(self,url):
        if not normalize(url) or not is_english_url(url) or url in self.excluded:return False
        p=urllib.parse.urlsplit(url)
        if re.search(r"[{}<>]", urllib.parse.unquote(p.path)):
            return False
        if re.search(self.config["exclude_path_regex"],p.path):return False
        if p.path.endswith((".js",".css",".xml",".txt")):return False
        if "/assets/" in p.path:return False
        if Path(p.path).suffix.lower() in ASSET_EXTS:return False
        for root in self.config["roots"]:
            q=urllib.parse.urlsplit(root)
            prefix=q.path.rstrip("/")
            if p.netloc==q.netloc and (not prefix or p.path==prefix or p.path.startswith(prefix+"/")):return True
        return False

    def discover(self,urls):
        for url in urls:
            if (u:=normalize(url)) and is_english_url(u) and page_url(u) not in self.excluded: self.discovered.add(page_url(u))

    def accept(self,url,body,source,kind="markdown",notes=None,title=None):
        url=page_url(normalize(url))
        if not is_english_url(url) or not is_english_url(source):
            raise ValueError("Non-English resource excluded")
        if not body or len(body.strip())<30:raise ValueError("Empty or suspiciously short page")
        if re.search(r"^\s*<!doctype html|^\s*<html\b",body,re.I) and kind=="native-markdown":raise ValueError("HTML returned for Markdown endpoint")
        path=local_path(url)
        if any(u != url and r["path"].casefold() == path.as_posix().casefold() for u,r in self.records.items()):
            raise ValueError("Refusing to overwrite another URL's archive path")
        old_path = self.records.get(url,{}).get("path")
        write(self.root/path,body)
        if old_path and old_path != path.as_posix() and not any(u != url and r["path"].casefold() == old_path.casefold() for u,r in self.records.items()):
            old_file = (self.root/old_path).resolve()
            if old_file.is_relative_to(self.root.resolve()):old_file.unlink(missing_ok=True)
        record={"path":path.as_posix(),"sha256":digest(body),"source_url":source,"format":kind,"status":"archived","content_notes":notes or []}
        if title:record["title"]=title
        self.records[url]=record;self.discovered.add(url);self.errors.pop(url,None)
        self.discover(urls_in(body,url))

    def import_export(self,text,url,kind):
        parser=parse_platform_export if kind=="platform" else parse_code_export
        pages=parser(text)
        pages=[(page,title,body) for page,title,body in pages if is_english_url(page) and self.allowed(page_url(page))]
        self.last_export_urls={page_url(page) for page,_,_ in pages}
        for page,title,body in pages:
            self.accept(page,body,url,"native-markdown",["Contains upstream MDX/components; Markdown is not a visual website replica."],title)
        return len(pages)

    def import_firecrawl(self,url,data):
        m=data.get("metadata",{})
        if int(m.get("statusCode",200))>=400:raise ValueError("Upstream HTTP "+str(m["statusCode"]))
        raw=data.get("rawHtml","");body=data.get("markdown","")
        notes=[]
        if raw.lstrip().startswith(("#", "---")) and not raw.lstrip().startswith("<!"):
            body=raw
        if "academy.claude.com/courses/" in url and "Transcript" in body:
            notes.append("Transcript tab requires separate public lesson bundle retrieval.")
        if re.search(r"youtube(?:-nocookie)?\.com|vimeo\.com|wistia\.",raw+body):
            notes.append("Embedded video is linked, not copied as playable media.")
        self.accept(url,body,m.get("url",url),"firecrawl-markdown",notes,m.get("title"))
        self.discover(data.get("links",[]))
        if raw and "academy.claude.com" in url:
            bundles=re.findall(r'https://academy\.claude\.com/assets/[^"<>\s]+/content/[^"<>\s]+\.js',raw)
            self.records[page_url(url)]["lesson_bundles"]=sorted(set(bundles))

    def pending(self):
        return sorted({page_url(u) for u in self.discovered if self.allowed(page_url(u)) and page_url(u) not in self.records})

    def save(self):
        self.discovered={page_url(u) for value in self.discovered if (u:=normalize(value)) and is_english_url(u) and page_url(u) not in self.excluded}
        folder=self.root/"inventory"
        dump(folder/"manifest.json",self.records)
        dump(folder/"check-state.json",self.checked)
        write(folder/"discovered-urls.txt","\n".join(sorted(self.discovered))+"\n")
        assets=sorted(u for u in self.discovered if Path(urllib.parse.urlsplit(u).path).suffix.lower() in ASSET_EXTS)
        write(folder/"asset-urls.txt","\n".join(assets)+"\n")
        media=sorted(u for u in self.discovered if re.search(r"youtube(?:-nocookie)?\.com|youtu\.be|vimeo\.com|wistia\.",u))
        write(folder/"external-media-urls.txt","\n".join(media)+"\n")
        expected=sorted({page_url(u) for u in self.discovered if self.allowed(page_url(u))}|{u for u in self.records if is_english_url(u)})
        write(folder/"resource-urls.txt","\n".join(expected)+"\n")
        missing=[u for u in expected if u not in self.records]
        write(folder/"missing-urls.txt","\n".join(missing)+("\n" if missing else ""))
        dump(folder/"errors.json",self.errors)
        by_host={}
        for u in expected:
            host=urllib.parse.urlsplit(u).netloc
            entry=by_host.setdefault(host,{"discovered_pages":0,"archived_pages":0})
            entry["discovered_pages"]+=1;entry["archived_pages"]+=u in self.records
        issues={u:r["content_notes"] for u,r in self.records.items() if r.get("content_notes")}
        report={"discovered_pages":len(expected),"archived_pages":len(self.records),"missing_pages":len(missing),"by_host":by_host,"page_inventory_complete":not missing and not self.errors,"exact_website_replica":False,"live_errors":self.errors,"limitations":["Discovery is the union of public indexes and hyperlinks, not proof that unlinked pages do not exist.","Native Markdown/MDX and extracted Markdown do not reproduce application behavior.","Videos, interactive quizzes, account state, and assets require separate verification.","A multi-request snapshot is not an atomic point-in-time copy."],"pages_with_content_notes":len(issues)}
        dump(folder/"coverage.json",report);dump(folder/"content-notes.json",issues)
        lines=["# Coverage report","",f"Archived pages: **{len(self.records)}**",f"Discovered resource pages: **{len(expected)}**",f"Missing pages: **{len(missing)}**","","**Not a certified 1:1 website replica.** See `missing-urls.txt`, `errors.json`, and `content-notes.json`.","","| Host | Archived | Discovered |","| --- | ---: | ---: |"]
        lines += [f"| {h} | {v['archived_pages']} | {v['discovered_pages']} |" for h,v in sorted(by_host.items())]
        write(folder/"COVERAGE.md","\n".join(lines)+"\n")
        return report


def synchronize(archive,args):
    fetcher=Fetcher(archive.root,args.transport)
    archive.errors={}
    export_urls=set()
    for item in archive.config["exports"]:
        try:
            raw,final,ctype,_=fetcher.fetch(item["url"])
            n=archive.import_export(raw.decode("utf-8"),item["url"],item["format"])
            export_urls.update(archive.last_export_urls)
            print(f"Export: {n} pages from {item['url']}",flush=True)
        except Exception as e:archive.errors[item["url"]]=str(e)
    indexes=list(archive.config["indexes"]);seen=set()
    while indexes:
        url=indexes.pop(0)
        if url in seen:continue
        seen.add(url)
        try:
            raw,final,ctype,_=fetcher.fetch(url);text=raw.decode("utf-8")
            if "<sitemapindex" in text or "<urlset" in text:
                root=ET.fromstring(text);locs=[e.text for e in root.iter() if e.tag.endswith("}loc") or e.tag=="loc"]
                if root.tag.endswith("sitemapindex"):
                    allowed_hosts={urllib.parse.urlsplit(x).hostname for x in archive.config["indexes"]}
                    indexes.extend(x for x in locs if normalize(x) and urllib.parse.urlsplit(x).hostname in allowed_hosts)
                else:archive.discover(locs)
            elif not text.lstrip().startswith("<"):
                archive.discover(urls_in(text,url))
            else:raise ValueError("Index returned HTML, not XML/llms text")
        except Exception as e:archive.errors[url]=str(e)
    archive.discover(archive.config["roots"])
    checked=set(export_urls)
    if args.resume:checked.update(archive.records)
    count=0
    started=time.monotonic()
    while True:
        todo=sorted({page_url(u) for u in archive.discovered if archive.allowed(page_url(u))}-checked, key=lambda u:(archive.checked.get(u,0),u))
        if not todo:break
        if args.limit and count>=args.limit:break
        if args.max_seconds and time.monotonic()-started>=args.max_seconds:break
        batch=todo[:1]
        def get(url):
            p=urllib.parse.urlsplit(url)
            native=p.hostname in {"platform.claude.com","code.claude.com","support.claude.com"} and ("/docs/" in p.path or "/articles/" in p.path)
            target=urllib.parse.urlunsplit(p._replace(path=p.path+".md")) if native else url
            try:raw,final,ctype,data=fetcher.fetch(target)
            except urllib.error.HTTPError as e:
                if native and e.code in {404,406}:raw,final,ctype,data=fetcher.fetch(url)
                else:raise
            text=raw.decode("utf-8","replace")
            if data:
                archive.import_firecrawl(url,data)
            elif "html" in ctype or text.lstrip().lower().startswith(("<!doctype html","<html")):
                if re.search(r"<title[^>]*>[^<]*(?:404|not found|just a moment|access denied)",text,re.I):raise ValueError("Error/challenge page returned")
                write(archive.root/local_path(url,"html","index.html"),raw)
                archive.accept(url,html_to_md(text),final,"html-derived",["Raw HTML preserved; dynamic tab completeness not certified."])
                archive.discover(urls_in(text,url))
                if p.hostname=="academy.claude.com":
                    for bundle in sorted(set(re.findall(r'https://academy\.claude\.com/assets/[^"<>\s]+/content/[^"<>\s]+\.js',text))):
                        b,_,_,_=fetcher.fetch(bundle);js=b.decode("utf-8")
                        write(archive.root/local_path(bundle,"source-bundles","source.js"),b)
                        transcripts=extract_transcripts(js)
                        if transcripts:
                            path=archive.root/Path(archive.records[url]["path"])
                            body=path.read_text()+"\n\n## Video transcripts\n\n"+"\n\n".join(transcripts)+"\n"
                            archive.accept(url,body,final,"html-derived",["Video transcript extracted from public lesson bundle; video itself remains linked."])
            else:archive.accept(url,text,final,"native-markdown")
        for url in batch:
            try:get(url)
            except Exception as e:archive.errors[url]=str(e)
            checked.add(url);count+=1
            archive.checked[url]=int(time.time())
            if count%10==0:print(f"Checked {count}; archived {len(archive.records)}; failures {len(archive.errors)}",flush=True);archive.save()
        if len(archive.errors)>=args.max_errors:
            print("Failure safety threshold reached; preserving prior content.",flush=True);break
    return archive.save()


def verify(archive):
    failures=[];paths={}
    for url,record in archive.records.items():
        path=archive.root/record["path"]
        if not path.is_file() or digest(path.read_bytes())!=record["sha256"]:failures.append(url)
        if record["path"].casefold() in paths and paths[record["path"].casefold()]!=url:failures.append("case/path collision: "+url)
        paths[record["path"].casefold()]=url
    return failures


def download_assets(archive,args):
    """Fetch only explicitly linked files on configured official content hosts."""
    fetcher=Fetcher(archive.root)
    path=archive.root/"inventory/asset-manifest.json"
    records=json.loads(path.read_text()) if path.exists() else {}
    errors={};count=0
    for url in sorted(archive.discovered):
        p=urllib.parse.urlsplit(url)
        if p.hostname not in archive.config["asset_hosts"] or Path(p.path).suffix.lower() not in ASSET_EXTS:continue
        if args.limit and count>=args.limit:break
        try:
            data,final,ctype,_=fetcher.fetch(url)
            destination=local_path(url,"assets","original"+Path(p.path).suffix.lower())
            write(archive.root/destination,data)
            records[url]={"path":destination.as_posix(),"sha256":digest(data),"source_url":final,"content_type":ctype}
        except Exception as e:errors[url]=str(e)
        count+=1
        if count%10==0:print(f"Assets checked: {count}",flush=True);dump(path,records)
        if len(errors)>=args.max_errors:break
    dump(path,records);dump(archive.root/"inventory/asset-errors.json",errors)
    print(json.dumps({"archived_assets":len(records),"errors":len(errors)}))
    return 2 if errors else 0


def main():
    # Compatibility entrypoint: all user-facing commands use the v2 pipeline.
    from pipeline import main as pipeline_main
    return pipeline_main()


def legacy_main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command",choices=["sync","verify","report","assets"])
    parser.add_argument("--root",type=Path,default=Path(__file__).resolve().parents[1])
    parser.add_argument("--transport",choices=["direct","firecrawl"],default="direct")
    parser.add_argument("--resume",action="store_true",help="Populate missing URLs; do not refresh existing pages")
    parser.add_argument("--limit",type=int,default=0,help="Optional explicit page cap; zero means uncapped")
    parser.add_argument("--max-seconds",type=int,default=0,help="Checkpoint and stop after this many seconds; zero means uncapped")
    parser.add_argument("--max-errors",type=int,default=30)
    args=parser.parse_args();archive=Archive(args.root)
    if args.command=="assets":return download_assets(archive,args)
    if args.command=="verify":
        errors=verify(archive);print(json.dumps({"verified_files":len(archive.records),"failures":errors},indent=2));return 1 if errors else 0
    report=synchronize(archive,args) if args.command=="sync" else archive.save()
    print(json.dumps({k:report[k] for k in ["archived_pages","discovered_pages","missing_pages","exact_website_replica"]},indent=2))
    return 2 if report["missing_pages"] or archive.errors else 0


if __name__=="__main__":sys.exit(main())
