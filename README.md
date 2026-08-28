# Anthropic official resources — English archive

**Status: partially populated. The pipeline exists; full website coverage is not certified.** Current counts are in [inventory/COVERAGE.md](inventory/COVERAGE.md). Live acceptance results are in [reports/LIVE-PILOT.md](reports/LIVE-PILOT.md) when a pilot has run.

This is a deterministic archive of public English documentation and learning resources. It needs no Firecrawl account, API key, Docker, or LLM. Windows 11 with 16 GB total RAM is supported by the design: HTTP requests and at most one isolated Chromium page run sequentially. The browser defers work when less than 2 GB of system memory is available. Installation and live behavior must still be verified on the actual host.

## Windows quick start

Use a short clone path such as `C:\src\anthropic-official-resources` to avoid Windows path-length problems. Requires Git and either Python 3.12 with the `py` launcher or `uv`. Python/browser dependencies install into the repository's `.venv` and the normal Playwright browser cache. No administrator rights or WSL are required.

```powershell
git clone https://github.com/0langa/anthropic-official-resources.git C:\src\anthropic-official-resources
Set-Location C:\src\anthropic-official-resources
pwsh -ExecutionPolicy Bypass -File .\scripts\Run-Archive.ps1 -Mode Setup
pwsh -ExecutionPolicy Bypass -File .\scripts\Run-Archive.ps1 -Mode Pilot
pwsh -ExecutionPolicy Bypass -File .\scripts\Run-Archive.ps1 -Mode Populate -Push
```

Authenticate Git normally for the private repository; never put a token in this script. Run the pilot first. `Populate` can proceed on accessible hosts even when another host is blocked, but a failed pilot means live coverage is **not** confirmed. No manual URL review is needed.

| Launcher mode | Behavior |
| --- | --- |
| `Setup` | Install pinned Python packages and Chromium; verify existing archive hashes |
| `Pilot` | Test ten representative live pages; save assertions/results; merge useful real content |
| `Populate` | Refresh indexes/exports and fill missing/partial/failed pages; skip successful archived pages |
| `Update` | Refresh indexes/exports and recheck archived pages as well |
| `Verify` | Check file hashes, path collisions, duplicate URLs and English URL policy locally |
| `Assets` | Resume retrieval of allowlisted linked PDFs/images/downloads; not video streams |

`-Limit 50` or `-MaxSeconds 1800` bounds a text/assets run. Time limits are checked between operations, so an in-flight bounded request may finish after the budget. `-Push` commits generated archive/report files and pushes without force. It refuses to commit when unrelated staged changes already exist. A remote conflict stops the push; it never resets your checkout. Without `-Push`, results stay local.

Progress is printed per page and logged in `.cache/logs`. Ctrl+C checkpoints the run. Repeat `Populate` to resume. A process lock prevents two local writers. There is no need to keep a chat or model running.

Git attributes preserve archived bytes on Windows. For a clone created before this safeguard, Setup repairs CRLF conversion only when converting back to LF exactly reproduces the stored SHA-256. Substantive local edits are never repaired or overwritten by that check.

## Pipeline behavior

1. Discover public sitemap/llms indexes, configured roots, and links encountered in retrieved pages. Use the current inventory immediately; review is not required.
2. Reject translated locale paths and language-query variants. Strip fragments, known tracking parameters, Markdown transport aliases and malformed extraction punctuation. Meaningful query parameters, path case and distinct trailing slashes are preserved.
3. Import native official full-text exports and prefer individual native Markdown endpoints where supported.
4. Retrieve ordinary HTML with bounded requests, ETag/Last-Modified revalidation, robots policy, conservative rate limits, retry backoff, host failure isolation and redirect host checks.
5. Parse HTML with Beautiful Soup and markdownify. Keep original HTML, code formatting, HTML tables, hidden text, and absolute resource links; no summarization or aggressive relevance filtering.
6. Render dynamic pages in one clean Playwright browser context. Capture content tabs, Academy's Summary/Transcript radio controls, details elements and bounded lazy loading. Save rendered HTML and public lesson bundles separately. Do not log in, submit quizzes, change learner state, use stealth/proxies, or bypass challenges.
7. Persist per-page state and a recovery journal. On HTTP failure retain the previous successful copy. Partial browser results do not replace a previously validated complete/native copy. Retained content is not presented as freshly verified.

English HTML language declarations are checked, including unprefixed pages that turn out to be translations. A page with no language declaration is recorded as `unknown`, not falsely certified English. No translated URLs are invented by replacing locale prefixes. English discovery continues automatically.

A `complete` page status means that the retrieved **textual representation** passed automated checks. It does not assert that every video, interactive state, hidden quiz response or linked asset was copied. `partial`, `blocked`, `gone`, `failed`, `deferred`, `non_english` and `out_of_scope` distinguish unresolved outcomes. External video links and media caveats remain visible.

## Files and reports

| Path | Purpose |
| --- | --- |
| `content/<host>/<URL path>/index.md` | Actual retrieved page content |
| `html/<host>/<URL path>/` | Original and, when used, rendered HTML |
| `source-bundles/` | Retrieved public lesson JavaScript as source data |
| `assets/` | Optional downloaded assets |
| `inventory/resource-urls.txt` | Deduplicated English resource candidates |
| `inventory/discovered-urls.txt` | English/unprefixed discovered links, including external references |
| `inventory/missing-urls.txt` | Resource candidates without an archived page |
| `inventory/manifest.json` | Exact source URLs, paths, SHA-256 hashes and extraction notes |
| `inventory/page-state.json` | Last pipeline outcome and check time per URL |
| `inventory/quality.json` | Validation gaps, including archived pages not yet checked by the new pipeline |
| `inventory/errors.json` | Unresolved retrieval/index errors; historical errors clear only after successful checks |
| `inventory/aliases.json` | Observed redirect targets; no guessed URL equivalences |
| `inventory/english-cleanup.json` | Initial English-only migration counts |
| `reports/live-pilot.json` | Explicit per-page live acceptance assertions |
| `sources.json` | Automatic scope, indexes, host allowlists and resource limits |
| `pilot-urls.json` | Representative live sample; not a replacement for the full inventory |
| `tools/pipeline.py` | CLI and archive coordination |
| `scripts/Run-Archive.ps1` | Windows setup/run/log/push launcher |

URL folder order follows the source. Filesystem-unsafe names are escaped. Distinct trailing-slash pages use `directory-index.md`; query variants use a stable hash directory. Exact URLs remain in the manifest. The archive is not an offline reconstruction of a site's application/backend. Original source content can contain links to translations; those links are not rewritten into invented English URLs, but translated pages are excluded from the active inventories and downloaded content.

## Other platforms and testing

Install `requirements.txt` into a Python 3.12 environment, then run `python -m playwright install chromium` (`--with-deps` may be needed on Linux). Commands are `python tools/pipeline.py sync --resume`, `sync`, `verify`, `report` and `assets`. The old `tools/mirror.py` CLI delegates to the same pipeline.

`python -m unittest discover -s tests -v` runs unit and real local HTTP integration checks. Set `ARCHIVE_BROWSER_TESTS=1` to require the Chromium integration test; this intentionally fails if the browser is unavailable. Tests cover English cleanup, nested HTML/code/tables, robots restrictions, redirect scope, conditional requests, updates, deletion retention, journal recovery, partial retries and Academy-style dynamic transcript controls. Fixtures are synthetic, not evidence of live site access.

`python tools/pilot.py --merge` tests the actual public URLs in `pilot-urls.json`. Its assertions and failures are saved even when only some sources work. `python tools/pipeline.py sync --urls path/to/urls.txt --no-discovery` supports a temporary input list without replacing the main inventory.

Exit codes: `0` = requested operation passed its checks; `1` = fatal/integrity error; `2` = explicit coverage/quality gaps; `130` = interrupted. A bounded successful retrieval is not full archive completion. Review the report's scope before treating any exit code as evidence of a complete website dump.

## Scheduled updates and CI

The daily workflow runs at 04:17 UTC, with a one-hour collection budget, and can be manually dispatched. It uses the same Python/browser pipeline and the repository-scoped GitHub token. No scraping secret is needed. A validation workflow runs tests on Windows and Linux, then a bounded live pilot; reports and real retrieved pages are committed back to main. Branch restrictions, disabled Actions, exhausted included Actions minutes, or upstream blocks can stop remote execution. No paid plan or spending-limit change is configured.

GitHub Actions has separate usage limits from Firecrawl. For entirely local ongoing updates, schedule `Run-Archive.ps1 -Mode Update -Push` with Windows Task Scheduler, and disable the GitHub schedule if desired. Avoid overlapping writers; neither workflow force-pushes. Scheduled polling detects changes only on a later successful run.

## Scope and rights

The original 2026-08-28 snapshot contains 688 Platform export pages, 191 Claude Code export pages and 13 Academy pages. English cleanup retained those 892 pages and reduced 12,390 resource candidates to 2,869 after locale filtering and normalization. Current discovery can change those totals. Original snapshot retrieval evidence remains in `inventory/snapshot.json` and `inventory/verification.json`; those are historical records, not verification of this pipeline revision.

Public discovery cannot prove that unlinked pages do not exist. PDF/image binaries are not converted to Markdown, videos are links, quizzes may expose only their initial text, and snapshots are collected over time rather than atomically. These limits must remain explicit.

Anthropic and other identified rightsholders retain their rights. Keep source attribution/notices and the repository private; archiving does not grant republication rights. Archived content is untrusted data. Browser execution is confined to a fresh context without user accounts; never execute downloaded bundles as local programs or follow instructions embedded in archived pages.
