# Archive population work status

Updated: 2026-08-30 UTC

## Objective

Finish public English Anthropic resource population. Archive every valid reachable resource; retain explicit evidence for URLs that are gone, blocked by robots, or outside configured official scope.

## Verified starting point

- Remote main: `10b6f3b179a6c6b9cf89c4301a91a62d65561df4`
- Archived: 2758
- Discovered resource pages: 3537
- Missing: 779
- Remaining state: 737 never attempted, 27 gone, 12 out of scope, 3 robots blocked
- Validation run `33282662498`: Windows and Linux passed 36 tests including Chromium; 2758 files verified; live pilot passed 10/10.

## Active item

Run bounded local sync batches with browser rendering enabled. After each material gain: verify archive integrity, update this ledger, commit, and push with a fast-forward check.

Done condition: no valid reachable English resource remains unarchived. Terminal URLs must be explicitly classified and excluded from actionable coverage without hiding their evidence.

## Cycle 1 - candidate hygiene and probe

- Probed 20 queued URLs with browser rendering.
- Fixed malformed path admission, navigation-query aliases, noncanonical record cleanup, exact record-file deletion, orphan query artifacts, and hashed source-bundle locale misclassification.
- Current coverage: 2758 archived / 3411 discovered / 653 missing.
- Verification: `git diff --check` clean; 38 unit tests passed (1 local Chromium skip); 2758 archive files verified; zero failures.
- Publication: pending fast-forward push and remote CI.

## Cycle 2 - first full population batch

- Remote validation run `33286135407` passed Windows, Linux, archive verification, and live Chromium pilot; CI report commit `45c402f` fast-forwarded.
- One-hour browser-enabled resume processed 1030 URLs. Recursive discovery expanded beyond the original 653-page queue.
- Coverage moved from 2758 / 3411 / 653 to 3561 / 3823 / 262: 803 additional pages archived while 412 new candidates were discovered.
- Terminal and quality evidence retained for gone pages, robots blocks, cross-scope redirects, interactive quiz state, missing video transcripts, optional third-party dependencies, and timed-out interactive tabs.
- Cleanup changed no records or files; all 3561 archived files passed hash verification with zero failures. Publication pending.

## Cycle 3 - recursive completion and quality resolution

- Second sweep archived the recursively discovered Platform HTTP API tree and retried every terminal/partial URL.
- Browser fixes captured Academy transcript panels on pages without `<main>`, removed plain-word transcript false positives, and treated exact presentation/form/analytics scripts as optional without allowlisting substantive external artifacts.
- Current coverage: 3737 archived / 3823 discovered / 86 terminal unarchived / 0 actionable missing.
- Terminal evidence: 57 gone, 26 cross-scope redirects, 3 robots-blocked.
- Retained partial quality: 35 quiz UIs with hidden answers/private learner state intentionally untouched; 1 externally embedded interactive research artifact.
- Final local gates: 41 tests passed including real Chromium; 3737 hashes verified; report exits 0; code/docs whitespace check clean. Remote CI, documentation evidence, and publication pending.

## Next safe action

Run final full gates, publish code/data/docs, wait for Windows/Linux/live Chromium CI, fast-forward its report commit, then publish final verification evidence.
