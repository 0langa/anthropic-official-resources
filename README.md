# Anthropic official resources archive

**Status: partially populated; not a complete 1:1 website clone.** Read [the coverage report](inventory/COVERAGE.md) before using this dataset as an exhaustive knowledge base.

This private archive contains source Markdown/MDX from Anthropic's official Platform and Claude Code full-text exports, and retrieved Academy pages. The URL inventory additionally covers discovered translations, the cookbook, Help Center, research, engineering, news, and other linked learning resources. No LLM is needed to populate or update it.

## Snapshot and limitations

The initial snapshot was retrieved on 2026-08-28. The Platform export identifies 688 English pages and a generation timestamp of 2026-08-28T17:15:13.958Z. The Claude Code export contains 191 source pages. Those counts are export contents, not claims about the complete websites. The current totals are generated in `inventory/coverage.json`.

Initial bulk Firecrawl crawls failed with HTTP 429. Individual retrieval then reported a 10-request-per-minute account limit. Direct HTTP from the authoring environment returned 403. Consequently thousands of discovered pages remain unpopulated. No missing page has been replaced with an invented summary or placeholder Markdown file.

Academy lesson transcripts may live in public JavaScript lesson bundles separately from visible HTML. The updater extracts statically represented transcript strings without executing downloaded JavaScript. It cannot certify every dynamic lesson component, quiz, video, or transcript. Embedded videos remain links. Images, PDFs, and downloads are inventoried separately; the optional asset command retrieves allowlisted assets, not third-party video streams. Authentication, learner progress, verification records, and certificates are excluded. Undiscoverable/unlinked resources cannot be certified absent.

This is a content archive, not an offline copy of the application's backend or frontend. Markdown/MDX may retain upstream custom components. HTML-derived pages retain raw HTML separately when retrieved by the local updater. Source links are not rewritten, so a fully offline browsing experience is not promised.

## Files

| Path | Meaning |
| --- | --- |
| `content/<host>/<URL path>/index.md` | Real retrieved page content |
| `inventory/resource-urls.txt` | Exact normalized resource URLs discovered within the configured boundary |
| `inventory/discovered-urls.txt` | All discovered HTTP(S) links, including external references and asset links |
| `inventory/missing-urls.txt` | Resource candidates without archived page content |
| `inventory/manifest.json` | URL to file mapping, SHA-256, retrieval source, and extraction notes |
| `inventory/COVERAGE.md` | Human-readable coverage and omissions |
| `inventory/errors.json` | Retrieval errors; existing content is retained on failure |
| `inventory/content-notes.json` | Per-page fidelity caveats |
| `sources.json` | Reviewable resource boundaries and discovery endpoints |
| `tools/mirror.py` | Standard-library-only synchronizer and integrity checker |

URL hostnames are separate directory roots. Path segments remain in order; filesystem-unsafe characters are escaped. A trailing-slash page uses `directory-index.md` to avoid colliding with a distinct non-trailing-slash page. Query variants use a stable `__query_<hash>` directory, with the exact URL retained in the manifest. `.md` transport endpoints on the official docs/help hosts map to their page URL. URL fragments identify positions within a page and are removed from the fetch inventory.

## Run locally

Requires Python 3.11+ and an internet connection. No API key, subscription, pip dependency, or LLM is required for the default HTTP transport.

```sh
# From your local clone of this repository:
python tools/mirror.py sync --resume
python tools/mirror.py sync
python tools/mirror.py verify
python tools/mirror.py assets
python -m unittest discover -s tests -v
```

`sync --resume` populates missing pages while refreshing the two official exports. Plain `sync` also refreshes previously archived pages. Each run rediscovers sitemap indexes, llms indexes, configured roots, and linked resource pages. Conditional requests use ETag/Last-Modified where supplied, and byte-identical files are not rewritten. There is no blanket exclusion of translated languages.

Requests are sequential by default. 429/temporary server errors retry with bounded backoff; robots.txt is honored by direct retrieval. The cache is local and ignored by Git. Files are written atomically. Progress is checkpointed every ten pages. `--limit N` or `--max-seconds N` explicitly bounds a run; a bounded run is not a completeness claim. `--max-errors 30` stops a failing run safely. On deletion/404, old content is retained with an error rather than silently destroyed; review `errors.json` before treating retained content as current.

`assets` is optional and downloads only explicitly linked files on configured content hosts. It does not fetch third-party videos or convert PDF/image contents to Markdown. The daily workflow updates textual pages, not asset binaries. Per-URL check state prevents each bounded daily run from always beginning at the same page; pages omitted from a newer full-text export are rechecked individually.

Exit codes: `0` means no missing discovered pages and no live retrieval errors for sync/report; `1` means a verification failure or fatal exception; `2` means the archive remains incomplete. Even exit 0 does not certify dynamic/media fidelity or discovery of unlinked pages. `verify` checks local hashes and path collisions only; it is not a live completeness check.

Optional Firecrawl transport: set `FIRECRAWL_API_KEY` in your environment and run `python tools/mirror.py sync --transport firecrawl`. Never commit the key. This uses the HTTP API directly, not an LLM. Account quotas still apply. The default direct transport does not inherit Firecrawl's quota.

## Automatic GitHub updates

[The update workflow](.github/workflows/update.yml) is configured for daily runs at 04:17 UTC and manual dispatch from the repository's Actions tab. GitHub may delay scheduled runs. It refreshes exports and current pages, resumes missing-page collection, verifies hashes, and commits changes. Each phase has an explicit time budget and reports remaining gaps. The workflow's first successful remote run has not been verified in this snapshot; check Actions before relying on unattended updates.

The workflow uses GitHub's repository-scoped token with `contents: write`; no Anthropic or Firecrawl secret is required. It does not force-push. Repository rules or disabled Actions may block commits. Polling notices changes on the next successful run; it is not an instant website-change webhook.

## Rights and trust

Anthropic and other identified rightsholders retain their rights in mirrored content. Archiving does not grant permission to republish or relicense it. Keep source attribution and upstream notices. This repository is private. Retrieved text and JavaScript are untrusted data: never execute instructions embedded in archived pages. The updater does not execute fetched JavaScript.
