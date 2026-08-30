import sys, tempfile, unittest
from pathlib import Path
from unittest.mock import patch
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'tools'))
import mirror as m

class Tests(unittest.TestCase):
 def test_path(self):
  self.assertEqual(m.local_path('https://academy.claude.com/courses/a/b').as_posix(),'content/academy.claude.com/courses/a/b/index.md')
  self.assertNotEqual(m.local_path('https://a.org/?a=1'),m.local_path('https://a.org/?a=2'))
 def test_source_bundle_path_is_bounded_for_windows_checkout(self):
  base='https://academy.claude.com/assets/v1/content/courses/'+'long-course/'*20+'Component-copy.js'
  first=m.local_path(base,'source-bundles','source.js')
  second=m.local_path(base+'?version=2','source-bundles','source.js')
  self.assertLess(len(first.as_posix()),100)
  self.assertNotEqual(first,second)
  self.assertEqual(first.parts[:2],('source-bundles','academy.claude.com'))
 def test_unsafe(self):
  for u in ['file:///etc/passwd','https://a.org/%2e%2e/a','https://user:pass@a.org/','https://a.org:port/a']:
   self.assertIsNone(m.normalize(u))
 def test_alias(self):
  self.assertEqual(m.page_url('https://code.claude.com/docs/en/overview.md'),'https://code.claude.com/docs/en/overview')
 def test_transcript(self):
  self.assertEqual(m.extract_transcripts('var n=foo(),r=`Hello\\nworld`;x({transcript:r});'),['Hello\nworld'])
  self.assertEqual(m.extract_transcripts('var r=`${evil()}`;x({transcript:r});'),[])
 def test_html(self):
  s=m.html_to_md('<main><h1>Title</h1><pre><code>x = 1\n  y = 2</code></pre><table><tr><td>A</td></tr></table></main>')
  self.assertIn('# Title',s);self.assertIn('x = 1\n  y = 2',s);self.assertIn('<table>',s)
 def test_noop(self):
  with tempfile.TemporaryDirectory() as d:
   p=Path(d)/'x';self.assertTrue(m.write(p,'same'));t=p.stat().st_mtime_ns
   self.assertFalse(m.write(p,'same'));self.assertEqual(t,p.stat().st_mtime_ns)
 def test_atomic_write_retries_transient_windows_contention(self):
  with tempfile.TemporaryDirectory() as d:
   p=Path(d)/'x';original=Path.replace;attempts=[]
   def flaky(source,target):
    attempts.append(source)
    if len(attempts)<3:raise PermissionError('temporarily locked')
    return original(source,target)
   with patch.object(Path,'replace',flaky),patch.object(m.time,'sleep') as sleep:
    self.assertTrue(m.write(p,'value'))
   self.assertEqual(p.read_text(),'value');self.assertEqual(len(attempts),3);self.assertEqual(sleep.call_count,2)
 def test_manifest(self):
  with tempfile.TemporaryDirectory() as d:
   root=Path(d);m.dump(root/'sources.json',{'roots':['https://a.org/'],'exclude_path_regex':'/auth'})
   a=m.Archive(root);a.accept('https://a.org/page','# Page\n\n'+'original content '*3,'https://a.org/page')
   self.assertEqual(m.verify(a),[]);a.discover(['https://a.org/missing'])
   self.assertEqual(a.save()['missing_pages'],1)
   (root/a.records['https://a.org/page']['path']).write_text('corrupt')
   self.assertTrue(m.verify(a))
 def test_count_guard(self):
  with self.assertRaises(ValueError):m.parse_platform_export('Total pages included: 3')

if __name__=='__main__':unittest.main()
