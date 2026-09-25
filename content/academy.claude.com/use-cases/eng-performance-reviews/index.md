# Draft your reports' performance reviews

A grounded review draft with linked evidence, per report.

10 minEngineeringClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-llbosc4e.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-jig8shre.png)

Film: the user asks Claude to draft performance reviews for their reports, with every claim linked to evidence and no rating proposed. Claude reads the team's framework and each report's work, then returns drafts flagging where the manager's own judgment is needed.

**‹****›**

github.com/halyard/ledger-service/pulls?q=is%3Apr+is%3Amerged+author%3Aasorensen+merged%3A2026-01-01..2026-03-31

halyard/ledger-servicePrivate

CodeIssues*22*Pull requests*6*ActionsSecurityInsights

Filters▾

is:pr is:merged author:asorensen merged:2026-01-01..2026-03-31

LabelsMilestones**New pull request**

0 Open✓ 23 ClosedAuthor▾Label▾Reviews▾Sort▾

Ledger v2: cut over settlement writes to partitioned tablesmigrationledger-v2

#1907 by asorensen was merged on Mar 27✓ 2 approvals

14

Backfill job: idempotent retries and per-batch checksumsledger-v2

#1894 by asorensen was merged on Mar 21✓ 2 approvals

9

Settle path: batch balance lookups (p95 840 ms → 310 ms)performance

#1842 by asorensen was merged on Mar 12✓ 3 approvals

21

Dual-write shadow mode behind ledger\_v2\_shadow flagledger-v2

#1816 by asorensen was merged on Mar 4✓ 2 approvals

11

Fix: negative-zero amounts rejected by reconciliation exportbug

#1790 by asorensen was merged on Feb 24✓ 1 approvals

4

INC-217 follow-up: bound the payout retry queue and alert at 80%incident

#1761 by asorensen was merged on Feb 6✓ 2 approvals

17

Ledger v2 schema: partition settlements by merchant and monthledger-v2schema

#1733 by asorensen was merged on Jan 29✓ 3 approvals

26

Add contract tests for payouts-api ↔ ledger-servicetesting

#1712 by asorensen was merged on Jan 20✓ 1 approvals

6

Docs: ledger v2 design and rollout plan (RFC-031)docs

#1698 by asorensen was merged on Jan 13✓ 4 approvals

33

Draft your reports’ performance reviews

You have performance reviews to write for each of your reports.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

Linear

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

Reviews / 2026-Q1

Template, roster and last cycle’s reviews

Folder

eng-career-framework.pdf

Levels L3–L6

PDF

team-roster.md

5 engineers

MD

Human Resources

/comp-analysis

/performance-review

/recruiting-pipeline

How can I help you today?

**‹****›**

github.com/halyard/ledger-service/pulls?q=is%3Apr+is%3Amerged+author%3Aasorensen+merged%3A2026-01-01..2026-03-31

halyard/ledger-servicePrivate

CodeIssues*22*Pull requests*6*ActionsSecurityInsights

Filters▾

is:pr is:merged author:asorensen merged:2026-01-01..2026-03-31

LabelsMilestones**New pull request**

0 Open✓ 23 ClosedAuthor▾Label▾Reviews▾Sort▾

Ledger v2: cut over settlement writes to partitioned tablesmigrationledger-v2

#1907 by asorensen was merged on Mar 27✓ 2 approvals

14

Backfill job: idempotent retries and per-batch checksumsledger-v2

#1894 by asorensen was merged on Mar 21✓ 2 approvals

9

Settle path: batch balance lookups (p95 840 ms → 310 ms)performance

#1842 by asorensen was merged on Mar 12✓ 3 approvals

21

Dual-write shadow mode behind ledger\_v2\_shadow flagledger-v2

#1816 by asorensen was merged on Mar 4✓ 2 approvals

11

Fix: negative-zero amounts rejected by reconciliation exportbug

#1790 by asorensen was merged on Feb 24✓ 1 approvals

4

INC-217 follow-up: bound the payout retry queue and alert at 80%incident

#1761 by asorensen was merged on Feb 6✓ 2 approvals

17

Ledger v2 schema: partition settlements by merchant and monthledger-v2schema

#1733 by asorensen was merged on Jan 29✓ 3 approvals

26

Add contract tests for payouts-api ↔ ledger-servicetesting

#1712 by asorensen was merged on Jan 20✓ 1 approvals

6

Docs: ledger v2 design and rollout plan (RFC-031)docs

#1698 by asorensen was merged on Jan 13✓ 4 approvals

33

**/**performance-review For each engineer in team-roster.md, draft their Q1 review in our framework with evidence linked for every claim, from this quarter's work and last review's growth areas. Flag where I need my own judgment and do not write the rating.

Reading team-roster.md0s

Read6 sources

Readteam-roster.md, 5 engineers

Readeng-career-framework.pdf

Read2025-Q4, 5 prior reviews

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)Searched87 merged pull requests and their reviews

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)Read9 projects shipped this quarter

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)Searched#payments-platform and #incidents

Used 6 sources34s

I drafted five reviews from 87 pull requests, 9 Linear projects and 31 Slack threads, each under the framework’s four competencies with every claim linked to its source. Ratings are blank for you, and seven places are marked “Needs your judgment”; Anika’s draft has two.

anika-sorensen-2026-Q1.md

Document

Download

devraj-pillai-2026-Q1.md

Document

Download

**anika-sorensen-2026-Q1**MDSaved to Reviews / 2026-Q1 / drafts

# Q1 2026 review · Anika Sørensen

<table class="keyv"><tbody><tr><td>Role</td><td>Software Engineer L4, Payments Platform</td></tr><tr><td>Draft</td><td>Manager draft prepared 2 Apr 2026 · rating not proposed · 2 judgment calls marked</td></tr><tr><td>Sources</td><td>GitHub (halyard/ledger-service, halyard/payouts-api), Linear (Payments Platform), Slack (#payments-platform, #incidents), 2025-Q4 review</td></tr></tbody></table>

## Summary

Anika led the Ledger v2 migration from design (RFC-031) through cutover, shipping it on 27 March inside the cycle. She merged 23 pull requests across ledger-service and payouts-api, gave 41 reviews, and owned the follow-up to INC-217. The two open questions for you are whether the migration meets the L5 system-design expectation and how to weigh her review load.

## System design and ownership competency 1 of 4

Wrote and drove RFC-031 (Ledger v2: partition settlements by merchant and month), incorporating 33 review comments from four reviewers before approval #1698. Sequenced the rollout as schema → shadow dual-write → backfill → cutover #1733 #1816 #1894 #1907, with the shadow flag catching one checksum mismatch before cutover Slack · #payments-platform · 18 Mar. The Linear project *Ledger v2 migration* closed 27 Mar, two days before cycle end, with 14 of 14 issues done Linear · Ledger v2 migration. The settle-path change reduced p95 balance lookup from 840 ms to 310 ms as reported in the PR’s benchmark #1842.

Framework reference: L4 “designs components within a service”; L5 “owns a cross-service design end to end”. See Needs your judgment, item 1.

## Delivery and code quality competency 2 of 4

23 pull requests merged (team range 14–23), none reverted. The backfill job shipped with idempotent retries and per-batch checksums #1894; contract tests now cover payouts-api ↔ ledger-service #1712; the negative-zero reconciliation bug was fixed with a regression test the same week it was reported #1790.

## Operational ownership competency 3 of 4

Owned the INC-217 follow-up: bounded the payout retry queue and added the 80% alert #1761 Slack · #incidents · 4 Feb; no repeat of the incident since. Two on-call weeks this quarter, both handoffs written on time Linear · Payments on-call.

## Collaboration and code review competency 4 of 4

41 reviews given this quarter (team median 24); 58% of ledger-service reviews had Anika as sole approver GitHub · reviews by asorensen. Unblocked the payouts-api contract-test failure for Marcus within the day #1712 Slack · #payments-platform · 20 Jan.

## Progress on last cycle’s growth areas

1. *Own a cross-service design end to end*: RFC-031 and the migration are direct evidence; see Needs your judgment.
2. *Spread review ownership in ledger-service*: review count rose from 36 to 41 and sole-approver share moved from 64% to 58%; partial.

## Suggested growth areas for Q2

- Hand primary review of two ledger-service areas to Lena and Kofi; stay as second reviewer.
- Write the payouts-api side of the next cross-service change herself rather than pairing it out.

## Rating

**Rating:** Left for you. The framework’s rating definitions are on p. 9 of eng-career-framework.pdf; this draft does not propose one.

## Needs your judgment 2

1. Whether Ledger v2 counts as “owns a cross-service design end to end” (L5) or a large within-service design (L4). Evidence either way: it changed two services’ write paths #1816 #1907, but the payouts-api changes were reviewed and merged by Devraj payouts-api #644.
2. How to read the review load: 41 reviews is the team’s highest and unblocked others quickly, and last cycle’s growth area asked for the sole-approver share to fall further than it did.

Every claim links to the work behind it.

The rating is left blank for you to write.

Run this every Monday: if a new quarter folder is in Reviews, draft that cycle’s reviews the same way, ratings left blank.

**Quarterly review drafts**Mondays at 9:00 AM

Each run

Checks Reviews for a new quarter folder

Pulls each report’s quarter from GitHub, Linear and Slack

Writes one draft per report*ratings left blank*

Claude Academy



0:03 / 0:561×

Illustration. Product screens are simplified.

Draft your reports’ performance reviews

You have performance reviews to write for each of your reports.

Ask the performance review skill for a draft per report, every claim linked, and no rating.

Claude reads your framework and last cycle’s reviews, then each report’s pull requests, projects and threads.

Claude reads your framework and last cycle’s reviews, then each report’s pull requests, projects and threads.

Claude tells you what it read, then gives you a draft per report.

Every claim links to the work behind it.

The rating is left blank for you to write.

You can schedule it so the drafts are ready when each new cycle’s folder appears.

You start each review from the evidence and write the rating yourself.

For each engineer in team-roster.md, draft their Q1 review in our framework with evidence linked for every claim, from this quarter's work and last review's growth areas. Flag where I need my own judgment and do not write the rating.

I drafted five reviews from 87 pull requests, 9 Linear projects and 31 Slack threads, each under the framework’s four competencies with every claim linked to its source. Ratings are blank for you, and seven places are marked “Needs your judgment”; Anika’s draft has two.

anika-sorensen-2026-Q1.md, devraj-pillai-2026-Q1.md

Skill: /performance-review (Human Resources)

Connectors: GitHub, Linear, Slack

## Set up[](https://academy.claude.com/use-cases/eng-performance-reviews)

### Try a plugin[](https://academy.claude.com/use-cases/eng-performance-reviews)

The Human Resources plugin ships with `/performance-review` as a starting point, already structured to gather a report's work for the period and draft the review against your framework. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



Human ResourcesStreamline people operations — recruiting, onboarding, performance reviews, compensation analysis, and policy guidance. Maintain compliance and keep your team running smoothly.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=human-resources)

`/performance-review`Structure a performance review with self-assessment, manager template, and calibration prep.

[Run](claude://cowork/new?q=%2Fperformance-review)

`/people-report`Generate headcount, attrition, diversity, or org health reports.

[Run](claude://cowork/new?q=%2Fpeople-report)

Show all 9 skills

### Connect your tools[](https://academy.claude.com/use-cases/eng-performance-reviews)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

Pull each report's merged PRs, reviews given, and incidents responded to over the period.

[Connect](https://claude.ai/desktop/directory/github)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

Surface the threads where they led, unblocked a teammate, or drove a decision.

[Connect](https://claude.ai/desktop/directory/slack)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

LinearOptional

List the projects and epics they shipped and the cycle outcomes they owned.

[Connect](https://claude.ai/desktop/directory/linear)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/eng-performance-reviews)

Drag the files you'll use (your career framework, the review template, last cycle's reviews, your team roster) into one folder and point Cowork at it. Cowork reads the framework from there and writes one draft per report back to it. [Create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from that folder so your framework and your writing voice stay attached.

Reviews / 2026-Q1

eng-career-framework.pdfJan 12, 2026220 KB

review-template.mdJan 12, 20262 KB

team-roster.mdApr 1, 20261 KB

In Cowork’s chat bar:Reviews / 2026-Q1

## The prompt[](https://academy.claude.com/use-cases/eng-performance-reviews)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/eng-performance-reviews)

I'm writing quarterly reviews for my reports. For each engineer in my team list, draft the review in our framework with evidence linked for every claim, drawing on their work this quarter and their last review's growth areas. Flag where I need to add my own judgment; do not write the rating.



Reviews / 2026-Q1Open in Cowork

### Why this works[](https://academy.claude.com/use-cases/eng-performance-reviews)

Prompt

**Require evidence for every claim.** The draft is defensible in calibration; nothing rests on vibes.

Prompt

**Include prior context to show progress.** The review tracks progress, not just a snapshot of this quarter.

Prompt

**Keep judgment calls yours.** Saying the rating is yours to make tells Claude where its job ends. The draft gathers and organizes the evidence, then stops.

Source

**Give it your review framework.** Every draft maps to your levels and your competencies, not a generic ladder.

### Get a better draft[](https://academy.claude.com/use-cases/eng-performance-reviews)

Practice

**Add an example to match.** Drop an example you like into the folder and Cowork matches your structure and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Cowork work for you[](https://academy.claude.com/use-cases/eng-performance-reviews)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /performance-review skill with my feedback.



ReviewsOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/eng-performance-reviews)

### Run it at the start of every cycle[](https://academy.claude.com/use-cases/eng-performance-reviews)

The evidence packet should be ready before review season opens. Type `/schedule` or open **Scheduled** in the Cowork sidebar, and the customized skill builds the drafts as soon as the quarter folder appears.

**/schedule** Every Monday at 9am, if a new quarter folder exists under Reviews, run /performance-review for everyone in team-roster.md and write each draft to Reviews/<quarter>/<name>.md.



ReviewsOpen in Cowork

Scheduled taskActive

Quarterly review drafts

When a new quarter folder appears, runs `/performance-review` for each report against GitHub, Linear, and Slack and writes evidence-linked drafts to the cycle folder.

Every **Monday at 9:00am**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/eng-performance-reviews)

Your customized `/performance-review` now carries your career framework, your evidence sources, and your tone. Share it so every manager in the org drafts against the same ladder, and calibration compares apples to apples.



Share the skill

In Cowork, open **Skills** → `/performance-review` → **Share** and pick your peer managers (or your whole workspace, if your admin allows). They get the skill with your framework baked in, so they don't repeat Steps 1-3.

## What changes for review season[](https://academy.claude.com/use-cases/eng-performance-reviews)

Each report has a review draft with evidence linked for every claim and the places that need your judgment clearly marked. Your time goes to the assessment and the conversation, not to gathering what they shipped.

You did this for one review cycle. The same approach covers promotion packets, calibration prep, and peer-feedback summaries — each one becomes a skill your team runs the same way.

[Next: Draft the incident postmortem](https://academy.claude.com/use-cases/incident-postmortem)

Was this helpful?
