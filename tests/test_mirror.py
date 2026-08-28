import sys, tempfile, unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'tools'))
import mirror as m

class Tests(unittest.TestCase):
 def test_path(self):
  self.assertEqual(str(m.local_path('https://academy.claude.com/courses/a/b')),'content/academy.claude.com/courses/a/b/index.md')
  self.assertNotEqual(m.local_path('https://a.org/?a=1'),m.local_path('https://a.org/?a=2'))
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
