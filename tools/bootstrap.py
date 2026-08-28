import json, sys
from pathlib import Path
from mirror import Archive, urls_in
root=Path(__file__).resolve().parents[1]
a=Archive(root);source=Path(sys.argv[1])
for filename,kind,url in [('platform-llms-full.txt','platform','https://platform.claude.com/llms-full.txt'),('code-llms-full.txt','code','https://code.claude.com/docs/llms-full.txt')]:
 print(kind,a.import_export((source/filename).read_text(),url,kind))
for f in source.glob('*_map.json'):
 a.discover(x['url'] for x in json.loads(f.read_text())['links'])
for f in source.glob('*_llms.json'):
 d=json.loads(f.read_text());a.discover(urls_in(d.get('rawHtml',d.get('markdown','')),''))
for name,url in [('academy_home','https://academy.claude.com/'),('academy_lesson','https://academy.claude.com/courses/claude-code-101/how-claude-code-works')]:
 a.import_firecrawl(url,json.loads((source/(name+'.json')).read_text()))
a.discover(a.config['roots']);print(a.save()['archived_pages'])
