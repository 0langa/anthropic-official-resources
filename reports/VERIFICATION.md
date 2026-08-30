# Pipeline verification — 2026-08-30 UTC

Every currently discovered, allowed, reachable English resource has an archived record. This is **actionable population complete**, not certification of exhaustive discovery or a 1:1 website replica.

## Verified results

| Check | Result |
| --- | --- |
| Windows unit/integration tests | 41 passed, including real Chromium |
| Linux unit/integration tests | 41 passed, including real Chromium |
| PowerShell launcher | Parse and actual Verify-mode execution passed in Windows CI |
| Live textual-page pilot | 10/10 passed across Platform, Claude Code, Academy, support, cookbook, engineering, research and Claude blog |
| Academy transcript | Substantial newly captured transcript text asserted, beyond checking for a Transcript label |
| Published inventory | 3,823 discovered pages; 3,737 archived; zero actionable missing |
| Terminal URL evidence | 86 unarchived: 57 gone, 26 outside configured resource scope, 3 robots-blocked |
| Retained partial evidence | 36 archived: 35 public quiz UIs plus 1 external interactive research embed |
| Merged archive integrity | 3,737 page hashes verified; zero failures |

[Successful CI run](https://github.com/0langa/anthropic-official-resources/actions/runs/33290964023) tested population commit `1db60fe09779241538752b494566dac3118bab6a` on Windows and Linux, ran real Chromium on both, verified retained content, and published live-pilot evidence in commit `7eafb6e`.

Machine-readable evidence: [verification.json](verification.json), [live-pilot.json](live-pilot.json), [discovery-pilot.json](discovery-pilot.json), [inventory-audit.json](inventory-audit.json).

## Scope and limits

Current coverage is 3,737 archived records from 3,823 discovered resource URLs. `inventory/actionable-missing-urls.txt` is empty. The other 86 URLs have explicit terminal evidence in `inventory/terminal-urls.json`; they are not silently counted as complete.

Discovery combines official public indexes, exports and hyperlinks. It cannot prove that unlinked pages do not exist. Native Markdown/MDX and extracted Markdown preserve useful textual content but do not clone application behavior or provide an atomic point-in-time copy.

Native exports and direct HTTP are preferred. One Playwright browser handles dynamic pages. No Firecrawl subscription, LLM, GPU or Docker is required. Runtime behavior was tested in Windows CI, not on the owner's physical Windows 11 machine. The browser defers work if system memory is low.

The pipeline preserves previous successful copies on fetch failures, journals progress, retries partial pages, enforces English scope, respects robots policy, and records unresolved outcomes. Windows line endings, case-only URL variants and trailing-slash raw-file collisions are covered by safeguards and tests.

Videos/audio remain links. Hidden quiz responses and private learner state are not accessed. One Attack Navigator page retains its public wrapper while its cross-scope interactive embed remains external. GitHub Actions uses the account's existing minutes; local runs incur no hosted scraping fee.

## Maintain the population locally

From a local clone, use the Windows launcher described in [README.md](../README.md). `Populate` resumes newly missing, partial and failed pages; `Update` refreshes existing pages as well. Add `-Push` to commit and push generated archive changes using normal Git authentication.
