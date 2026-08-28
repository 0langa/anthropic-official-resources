import io, sys, tempfile, unittest, urllib.error
from pathlib import Path
from unittest.mock import patch
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'tools'))
import mirror as m

class Response:
 def __init__(self,body=b'page',headers=None):
  self.body=body;self.headers=headers or {'Content-Type':'text/plain','ETag':'"one"'};self.url='https://example.org/page'
 def __enter__(self):return self
 def __exit__(self,*args):pass
 def read(self,n):return self.body[:n]

class HttpTests(unittest.TestCase):
 def test_conditional_304(self):
  with tempfile.TemporaryDirectory() as d:
   f=m.Fetcher(Path(d));seen=[]
   def opener(req,**kwargs):
    seen.append(req)
    if len(seen)==1:return Response(b'unchanged')
    raise urllib.error.HTTPError(req.full_url,304,'Not Modified',{},io.BytesIO())
   with patch('urllib.request.urlopen',side_effect=opener):
    self.assertEqual(f.fetch('https://example.org/page',robots=False)[0],b'unchanged')
    self.assertEqual(f.fetch('https://example.org/page',robots=False)[0],b'unchanged')
   self.assertEqual(seen[1].get_header('If-none-match'),'"one"')
 def test_404_does_not_overwrite(self):
  with tempfile.TemporaryDirectory() as d:
   f=m.Fetcher(Path(d))
   with patch('urllib.request.urlopen',return_value=Response(b'original')):f.fetch('https://example.org/page',robots=False)
   error=urllib.error.HTTPError('https://example.org/page',404,'Gone',{},io.BytesIO())
   with patch('urllib.request.urlopen',side_effect=error):
    with self.assertRaises(urllib.error.HTTPError):f.fetch('https://example.org/page',robots=False)
   self.assertEqual((f.cache/(m.digest('https://example.org/page')+'.bin')).read_bytes(),b'original')
 def test_retry_after(self):
  with tempfile.TemporaryDirectory() as d:
   f=m.Fetcher(Path(d));error=urllib.error.HTTPError('https://example.org/page',429,'Wait',{'Retry-After':'7'},io.BytesIO())
   with patch('urllib.request.urlopen',side_effect=[error,Response()]),patch('time.sleep') as sleep:
    f.fetch('https://example.org/page',robots=False);sleep.assert_called_once_with(7)

if __name__=='__main__':unittest.main()
