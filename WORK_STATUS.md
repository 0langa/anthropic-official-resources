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

## Next safe action

Commit and push cycle 1. Wait for remote CI, fast-forward any CI-generated report commit, then run a one-hour browser-enabled sync batch.
