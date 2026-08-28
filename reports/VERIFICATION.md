# Pipeline verification — 2026-08-28 UTC

The English archive pipeline is implemented and tested. The full archive is **not yet populated**.

## Verified results

| Check | Result |
| --- | --- |
| Windows unit/integration tests | 31 passed, including real Chromium |
| Linux unit/integration tests | 31 passed, including real Chromium |
| PowerShell launcher | Parse and actual Verify-mode execution passed in Windows CI |
| Live textual-page pilot | 10/10 passed across Platform, Claude Code, Academy, support, cookbook, engineering, research and Claude blog |
| Academy transcript | Substantial newly captured transcript text asserted, beyond checking for a Transcript label |
| Live native exports | 688 Platform pages + 191 Claude Code pages imported and hashes verified |
| Live index discovery | Completed without hitting its time budget; 17 HTTP requests, zero errors |
| Published URL inventory audit | 3,102 candidates; zero duplicate URLs, translated locale URLs or predicted Windows filename collisions |
| Local merged archive integrity | 898 page hashes verified; zero failures |

[Successful CI run](https://github.com/0langa/anthropic-official-resources/actions/runs/33214650661) tested pipeline commit `ec3930a5b3f38abd0268157e84f677cd277e3d89`. Subsequent data/report updates incorporate the separately tested live export and sitemap discovery results; no pipeline code changes are required for those updates.

Machine-readable evidence: [verification.json](verification.json), [live-pilot.json](live-pilot.json), [discovery-pilot.json](discovery-pilot.json), [inventory-audit.json](inventory-audit.json).

## Scope and remaining work

The initial English cleanup retained all 892 archived pages; none had translated URLs. It reduced 12,390 candidates to 2,869. Live page and sitemap discovery subsequently found additional English candidates, increasing the current inventory to 3,102.

The archive currently contains 898 pages, with 2,204 candidate pages not yet downloaded. These are candidates: redirects, removed pages or unsupported interactive content can still require classification. No manual URL review was performed or made a prerequisite.

Native exports and direct HTTP are preferred. One Playwright browser handles dynamic pages. No Firecrawl subscription, LLM, GPU or Docker is required. Runtime behavior was tested in Windows CI, not on the owner's physical Windows 11 machine. The browser defers work if system memory is low.

The pipeline preserves previous successful copies on fetch failures, journals progress, retries partial pages, enforces English scope, respects robots policy, and records unresolved outcomes. Windows line endings, case-only URL variants and trailing-slash raw-file collisions are covered by safeguards and tests.

Videos/audio remain links; hidden quiz responses and private learner state are not cloned. A passing textual-page test is not proof of a complete offline website or exhaustive discovery. The scheduled production updater is configured but its first scheduled run has not been observed. GitHub Actions uses the account's existing minutes; local runs incur no hosted scraping fee.

## Run the full population locally

From a local clone, use the Windows launcher described in [README.md](../README.md): Setup, then Populate. Populate resumes missing/partial/failed pages; Update refreshes existing pages as well. Add `-Push` to commit and push generated archive changes, using normal Git authentication. No URL review is required before running it.
