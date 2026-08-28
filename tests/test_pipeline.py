"""Real local HTTP/browser integration; no internet, accounts, or upstream content."""
import argparse
from contextlib import contextmanager
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import os
from pathlib import Path
import sys
import tempfile
import threading
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
from archive_http import HTTP, FetchError, Response, retry_delay
from extraction import extract_html, validate_markdown
from mirror import Archive, digest, dump, local_path, normalize, verify, write
from pipeline import Runner, cleanup, exclusive_run, repair_checkout_line_endings
from scope import is_english_url


PARAGRAPH = "This is original English resource content with enough detail to validate an actual archived page. " * 3


@contextmanager
def fixture_server():
    state = {"version": 1, "gone": False, "requests": []}
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *args):
            pass
        def do_GET(self):
            state["requests"].append((self.path, dict(self.headers)))
            code, headers = 200, {"Content-Type": "text/html; charset=utf-8"}
            body = f'<html lang="en"><title>Fixture</title><main><h1>Resource</h1><p>{PARAGRAPH} Version {state["version"]}</p></main></html>'
            if self.path == "/robots.txt":
                headers = {"Content-Type": "text/plain"}
                body = "User-agent: *\nDisallow: /denied\n"
            elif self.path == "/redirect":
                code, headers, body = 302, {"Location": "/page"}, ""
            elif self.path == "/outside":
                code, headers, body = 302, {"Location": "https://not-allowed.invalid/"}, ""
            elif self.path == "/locale":
                body = body.replace('lang="en"', 'lang="de"')
            elif self.path == "/dynamic":
                body = f'''<html lang="en"><title>Dynamic fixture</title><main><h1>Lesson</h1><p>{PARAGRAPH}</p>
                <div aria-label="Video companion content" role="radiogroup">
                <span role="radio" tabindex="0" onclick="document.querySelector('#panel').innerHTML='<p>UNIQUE TRANSCRIPT TEXT with all the extra information in the lesson.</p>'">Transcript</span></div>
                <div id="panel" role="tabpanel">Summary content</div><details><summary>More</summary>Hidden detail retained.</details>
                <button aria-expanded="false" aria-controls="faq" onclick="this.setAttribute('aria-expanded','true');document.querySelector('#faq').innerHTML='ACCORDION GENERATED TEXT'">Read more</button><div id="faq"></div>
                </main></html>'''
            elif self.path == "/page":
                headers["ETag"] = f'"{state["version"]}"'
                if state["gone"]:
                    code, body = 404, "Gone"
                elif self.headers.get("If-None-Match") == headers["ETag"]:
                    code, body = 304, ""
            self.send_response(code)
            for key, value in headers.items():
                self.send_header(key,value)
            self.end_headers()
            self.wfile.write(body.encode())
    server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f"http://127.0.0.1:{server.server_port}", state
    finally:
        server.shutdown()
        server.server_close()
        thread.join()


def archive(root, base):
    dump(root/"sources.json", {"roots":[base+"/"], "indexes":[], "exports":[], "asset_hosts":["127.0.0.1"],
                              "exclude_path_regex":r"/login(?:/|$)",
                              "pipeline":{"request_delay_seconds":0, "max_retries":0, "checkpoint_pages":1,
                                          "minimum_free_memory_mb":0}})
    return Archive(root)


def options(**kwargs):
    return argparse.Namespace(**({"resume":False,"no_discovery":True,"urls":None,"browser":"never","limit":0,"max_seconds":0} | kwargs))


class ScopeTests(unittest.TestCase):
    def test_language_policy(self):
        for path in ["/docs/de/page","/zh-CN/courses/a","/pt-BR/articles/a","/page?locale=ja","/page?language=fr-CA"]:
            self.assertFalse(is_english_url("https://example.org"+path),path)
        for path in ["/docs/en/page","/en-US/articles/a","/engineering/design","/api/de","/page?locale=en"]:
            self.assertTrue(is_english_url("https://example.org"+path),path)
    def test_normalize_without_losing_meaningful_query(self):
        self.assertEqual(normalize("https://example.org/page):"),"https://example.org/page")
        self.assertEqual(normalize("https://example.org/page?utm_source=a&version=2#x"),"https://example.org/page?version=2")
        self.assertNotEqual(normalize("https://example.org/page?version=1"),normalize("https://example.org/page?version=2"))
    def test_cleanup_removes_files_and_persists_english_policy(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory); a=archive(root,"https://example.org")
            bad="https://example.org/de/page";good="https://example.org/en/page"
            a.accept(good,"# English\n"+PARAGRAPH,good)
            path=local_path(bad);write(root/path,"German")
            a.records[bad]={"path":path.as_posix(),"sha256":digest("German"),"source_url":bad}
            a.discovered.update([bad,good,good+"#fragment"])
            result=cleanup(a)
            self.assertEqual(result["removed_archived_pages"],1)
            self.assertFalse((root/path).exists())
            self.assertEqual(set(a.records),{good})
            a.discover([bad]);self.assertNotIn(bad,a.discovered)
            self.assertEqual(verify(a),[])
    def test_lock_excludes_other_writer_and_releases(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            with exclusive_run(root):
                with self.assertRaises(RuntimeError):
                    with exclusive_run(root): pass
            with exclusive_run(root): pass
    def test_checkout_repair_only_changes_proven_line_endings(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,"https://example.org");url="https://example.org/en/page"
            body="# Original\n\n"+PARAGRAPH+"\n"
            a.accept(url,body,url);path=root/a.records[url]["path"]
            path.write_bytes(body.replace("\n","\r\n").encode())
            self.assertEqual(repair_checkout_line_endings(a),1);self.assertEqual(verify(a),[])
            path.write_bytes(b"User edited this file\r\n")
            self.assertEqual(repair_checkout_line_endings(a),0)
            self.assertEqual(path.read_bytes(),b"User edited this file\r\n")


class ExtractionTests(unittest.TestCase):
    def test_nested_content_code_tables_hidden_and_absolute_links(self):
        raw='<html lang="en"><title>Example</title><main><article><p>Inner</p></article><p>AFTER ARTICLE</p><pre><code>x = 1\n  y = 2</code></pre><div hidden>Hidden panel</div><a href="/asset.pdf">PDF</a><table><tr><td colspan="2">Both</td></tr></table></main></html>'
        result=extract_html(raw,"https://example.org/page")
        for value in ["AFTER ARTICLE","x = 1\n  y = 2","Hidden panel","https://example.org/asset.pdf",'colspan="2"']:
            self.assertIn(value,result.markdown)
    def test_reject_language_and_challenge(self):
        for raw,status in [('<html lang="de"><main>'+PARAGRAPH+'</main></html>',"non_english"),('<html><title>Just a moment...</title></html>',"blocked")]:
            with self.assertRaises(FetchError) as caught:extract_html(raw,"https://example.org/page")
            self.assertEqual(caught.exception.status,status)
        with self.assertRaises(FetchError):validate_markdown("too short")
    def test_retry_after_date_and_seconds(self):
        self.assertEqual(retry_delay("7",0),7)
        self.assertEqual(retry_delay("Thu, 01 Jan 1970 00:00:20 GMT",0,now=10),10)


class HttpIntegrationTests(unittest.TestCase):
    def test_response_size_guard(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            http=HTTP(Path(directory),{"127.0.0.1"},{"request_delay_seconds":0,"max_retries":0})
            with self.assertRaises(FetchError) as caught:http.get(base+"/page",max_bytes=40)
            self.assertEqual(caught.exception.status,"partial")

    def test_robots_redirect_scope_cache_update_and_404(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            http=HTTP(Path(directory),{"127.0.0.1"},{"request_delay_seconds":0,"max_retries":0})
            first=http.get(base+"/page");second=http.get(base+"/page")
            self.assertEqual(first.body,second.body);self.assertTrue(second.cached)
            self.assertEqual(http.get(base+"/redirect").url,base+"/page")
            with self.assertRaises(FetchError) as caught:http.get(base+"/denied")
            self.assertEqual(caught.exception.status,"blocked")
            self.assertFalse(any(path=="/denied" for path,_ in state["requests"]))
            with self.assertRaises(FetchError) as caught:http.get(base+"/outside")
            self.assertEqual(caught.exception.status,"out_of_scope")
            state["version"]=2;self.assertIn(b'Version 2',http.get(base+"/page").body)
            state["gone"]=True
            with self.assertRaises(FetchError) as caught:http.get(base+"/page")
            self.assertEqual(caught.exception.status,"gone")


class PipelineIntegrationTests(unittest.TestCase):
    def test_native_markdown_and_header_language_guard(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,"https://platform.claude.com")
            url="https://platform.claude.com/docs/en/example";runner=Runner(a,options())
            response=Response(("# Example\n"+PARAGRAPH).encode(),url+".md","text/markdown",{"Content-Language":"en"})
            with patch.object(runner.http,"get",return_value=response):
                self.assertEqual(runner.scrape(url)[0],"complete")
            response.headers["Content-Language"]="de"
            with patch.object(runner.http,"get",return_value=response):
                with self.assertRaises(FetchError) as caught:runner.scrape(url)
                self.assertEqual(caught.exception.status,"non_english")
    def test_http_block_does_not_trigger_browser_bypass(self):
        with tempfile.TemporaryDirectory() as directory:
            a=archive(Path(directory),"https://platform.claude.com");runner=Runner(a,options(browser="auto"))
            with patch.object(runner.http,"get",side_effect=FetchError("Forbidden","blocked",403)) as get:
                with self.assertRaises(FetchError):runner.scrape("https://platform.claude.com/docs/en/example")
                self.assertEqual(get.call_count,1)
                self.assertIsNone(runner.browser)
    def test_partial_refresh_preserves_previous_complete_copy(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,base);url=base+"/dynamic"
            old="# Previous complete copy\n"+PARAGRAPH
            a.accept(url,old,url,"native-markdown")
            runner=Runner(a,options());runner.run()
            self.assertEqual(runner.state[url]["status"],"partial")
            self.assertEqual((root/a.records[url]["path"]).read_text(encoding="utf-8"),old)
    def test_download_resume_refresh_and_retain_on_failure(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,base);url=base+"/page";a.discover([url])
            first=Runner(a,options());first.run()
            path=root/a.records[url]["path"];initial=path.read_bytes()
            second=Runner(Archive(root),options(resume=True));second.run()
            self.assertEqual(second.attempted,[])
            state["version"]=2
            third=Runner(Archive(root),options());third.run()
            self.assertNotEqual(initial,path.read_bytes());fresh=path.read_bytes()
            state["gone"]=True
            fourth=Runner(Archive(root),options());fourth.run()
            self.assertEqual(fourth.state[url]["status"],"gone")
            self.assertEqual(fresh,path.read_bytes());self.assertEqual(verify(fourth.a),[])
    def test_language_mismatch_removed_and_excluded(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,base);url=base+"/locale"
            a.accept(url,"# Older copy\n"+PARAGRAPH,url);a.save()
            runner=Runner(a,options());runner.run()
            self.assertNotIn(url,runner.a.records);self.assertNotIn(url,runner.a.discovered)
            next_archive=Archive(root);next_archive.discover([url]);self.assertNotIn(url,next_archive.discovered)
            self.assertNotIn(url,runner.a.errors)
    def test_journal_recovery(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,base);url=base+"/page"
            runner=Runner(a,options());status,message,links,code=runner.scrape(url)
            runner.event(url,status,message,links,code)
            with runner.journal.open("a",encoding="utf-8") as handle:handle.write('{"interrupted":')
            recovered=Runner(Archive(root),options(resume=True))
            self.assertIn(url,recovered.a.records);self.assertEqual(recovered.state[url]["status"],"complete")
            self.assertEqual(verify(recovered.a),[])
    def test_partial_status_is_retried(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,base);url=base+"/dynamic";a.discover([url])
            runner=Runner(a,options());runner.run()
            self.assertEqual(runner.state[url]["status"],"partial")
            resumed=Runner(Archive(root),options(resume=True));self.assertIn(url,resumed.candidates())


@unittest.skipUnless(os.environ.get("ARCHIVE_BROWSER_TESTS")=="1","Set ARCHIVE_BROWSER_TESTS=1 after installing Chromium")
class BrowserIntegrationTests(unittest.TestCase):
    def test_real_chromium_captures_dynamic_transcript(self):
        with fixture_server() as (base,state), tempfile.TemporaryDirectory() as directory:
            root=Path(directory);a=archive(root,base);url=base+"/dynamic";a.discover([url])
            runner=Runner(a,options(browser="auto"));runner.run()
            self.assertEqual(runner.state[url]["status"],"complete",runner.state[url])
            body=(root/a.records[url]["path"]).read_text(encoding="utf-8")
            self.assertIn("UNIQUE TRANSCRIPT TEXT",body)
            self.assertIn("Hidden detail retained",body)
            self.assertIn("ACCORDION GENERATED TEXT",body)
            self.assertTrue((root/local_path(url,"html","rendered.html")).exists())


if __name__=="__main__":unittest.main()
