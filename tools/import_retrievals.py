"""Import completed connector scrapes; keep failure records separately."""
import json,sys
from pathlib import Path
from mirror import Archive
a=Archive(Path(__file__).resolve().parents[1])
for file in sorted(Path(sys.argv[1]).glob('*.json')):
    for row in json.loads(file.read_text()):
        url=row['url']
        if row.get('error'):
            a.errors[url]=row['error'];continue
        try:a.import_firecrawl(url,row['data'])
        except Exception as e:a.errors[url]=str(e)
print(json.dumps({k:v for k,v in a.save().items() if k in ['archived_pages','missing_pages','discovered_pages']}))
