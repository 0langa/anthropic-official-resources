#!/usr/bin/env python3
"""Small live acceptance test; success requires all selected textual pages to pass."""
from __future__ import annotations
import argparse
import json
from pathlib import Path
import platform
import sys
import tempfile
import time

from mirror import Archive, dump, verify, write
from pipeline import Runner, exclusive_run, ROOT


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root',type=Path,default=ROOT)
    parser.add_argument('--merge',action='store_true',help='Copy successful/partial real retrievals into the main archive; preserve stronger existing native copies')
    args=parser.parse_args();root=args.root.resolve()
    selected=json.loads((root/'pilot-urls.json').read_text(encoding='utf-8'))
    with exclusive_run(root), tempfile.TemporaryDirectory(prefix='archive-pilot-') as directory:
        temporary=Path(directory)
        config=json.loads((root/'sources.json').read_text(encoding='utf-8'))
        config['pipeline'].update({'max_retries':0,'timeout_seconds':20,'checkpoint_pages':1})
        dump(temporary/'sources.json',config)
        urls=temporary/'urls.txt';write(urls,'\n'.join(item['url'] for item in selected)+'\n')
        archive=Archive(temporary)
        options=argparse.Namespace(resume=False,no_discovery=True,urls=urls,browser='auto',limit=len(selected),max_seconds=900)
        runner=Runner(archive,options);runner.run()
        results=[]
        for item in selected:
            url=item['url'];state=runner.state.get(url,{'status':'not_attempted','message':'Pilot budget or host failure threshold reached'})
            record=archive.records.get(url)
            text=(temporary/record['path']).read_text(encoding='utf-8') if record else ''
            checks={'retrieved':bool(record),'minimum_characters':len(text)>=item.get('minimum_characters',150),
                    'required_text':all(term.lower() in text.lower() for term in item.get('contains',[])),
                    'text_extraction_complete':state['status']=='complete'}
            if item.get('require_transcript'):
                checks['substantive_transcript_captured'] = bool(record and record.get('transcript_characters',0)>=500)
            results.append({**item,'state':state,'checks':checks,'characters':len(text),'passed':all(checks.values())})
        report={'tested_at_utc':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),
                'platform':platform.platform(),'python':platform.python_version(),'results':results,
                'passed':all(item['passed'] for item in results),'integrity_failures':verify(archive),
                'meaning':'Passing verifies only these live sample pages and the listed assertions, not every URL or all media.'}
        dump(root/'reports/live-pilot.json',report)
        lines=['# Live pilot','',f"Passed: **{sum(x['passed'] for x in results)}/{len(results)}**",'',
               '| Category | Result | Characters | URL |','| --- | --- | ---: | --- |']
        lines += [f"| {item['category']} | {'PASS' if item['passed'] else item['state']['status']} | {item['characters']} | {item['url']} |" for item in results]
        lines += ['',report['meaning']]
        write(root/'reports/LIVE-PILOT.md','\n'.join(lines)+'\n')
        if args.merge:
            destination=Archive(root)
            page_state=json.loads((root/'inventory/page-state.json').read_text(encoding='utf-8')) if (root/'inventory/page-state.json').exists() else {}
            for url,record in archive.records.items():
                existing=destination.records.get(url)
                if existing and existing['format']=='native-markdown' and record['format']!='native-markdown':
                    continue
                if existing and runner.state[url]['status']=='partial':
                    continue
                source=temporary/record['path']
                destination.accept(url,source.read_bytes().decode('utf-8'),record['source_url'],record['format'],record.get('content_notes'),record.get('title'))
                destination.records[url]=record
                page_state[url]=runner.state[url];destination.checked[url]=runner.state[url]['checked_at']
                if runner.state[url]['status']=='complete':destination.errors.pop(url,None)
                else:destination.errors[url]=runner.state[url]['message']
            for area in ('html','source-bundles'):
                for source in (temporary/area).rglob('*') if (temporary/area).exists() else []:
                    if source.is_file():write(root/source.relative_to(temporary),source.read_bytes())
            destination.discover(archive.discovered);destination.save();dump(root/'inventory/page-state.json',page_state)
        print(json.dumps({'passed':sum(x['passed'] for x in results),'total':len(results),'report':'reports/live-pilot.json'},indent=2))
        return 0 if report['passed'] and not report['integrity_failures'] else 2


if __name__=='__main__':sys.exit(main())
