# Write the sprint retro and on-call handoff

What shipped, what slipped, and what the next on-call needs to know.

10 minEngineeringClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-ko3ehgyx.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-lth7yta3.png)

Write the sprint retro and handoff

The sprint has closed and you need the retro and the on-call handoff written.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

Linear

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)

PagerDuty

Platform / retros / 2026-sprint-08

3 files

Folder

sprint-07-retro.md

Last retro, format to match

MD

retro-template.md

Team template

MD

Engineering

/incident-response

/standup

/tech-debt

How can I help you today?

M

Meridian

Channels

# eng-announce

# payments-sre

# team-platform

# support-escalations

Direct messages

Marco Alvarez

Priya Nair

**# team-platform**9 members

JP

June Park*Tue 14 Apr, 10:12*

staging-2 is refusing deploys again, same `etcd leader changed` loop as last sprint. Anyone else blocked?

DO

Dev Okafor*10:20*

Yes. I can’t run the 5× load test for PLT-419 anywhere else, prod-shaped data only exists there.

AS

Amir Sadeghi*16:45*

staging-2 back after a node recycle. Root cause still unknown. Lost most of Tuesday to it.

TR

Tomas Rieder*Wed 15 Apr, 09:31*

Ingest v2 is at 25% traffic and clean. Holding the full cutover (PLT-423) until Dev’s load test passes, don’t want both risks in one week.

JP

June Park*Mon 20 Apr, 11:02*

The self-serve staging RFC (PLT-442) has been in review since Thursday with no comments. Can two people take it today? It is literally the fix for last week.

RL

Rosa Lindqvist*11:10*

Taking it, and adding review latency to the retro list. Third time this quarter something sat 3+ days.

AS

Amir Sadeghi*Thu 23 Apr, 14:06*

DBRE moved the Postgres primary cutover window to Tue Apr 28, 22:00 UTC after yesterday’s change freeze. PLT-434 slips to next sprint; replica has been on 15 for a week with no issues.

JP

June Park*15:30*

staging-2 flapped again during the gateway repro (PLT-437). I have the fix but can’t prove it. Lost most of Thursday to it too.

DO

Dev Okafor*17:48*

Load test finally ran: rate limiter holds at 5×, p99 41 ms. Too late to cut ingest over before the cycle closes, first thing Monday.

Message #team-platform

**/**standup Read the just-closed Linear cycle and two weeks of #team-platform and #oncall-platform. Write the sprint retro: shipped, slipped with reasons, themes worth discussing. Write a separate on-call handoff: open alerts, toil, what to watch. Keep each to a 30-minute meeting.

Reading the Sprint 08 cycle0s

Read5 sources

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)ReadSprint 08 cycle, 21 issues

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)Read#team-platform, 2 weeks

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)Read#oncall-platform, 2 weeks

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)ReadPlatform primary rotation, 7 incidents

Readretro-template.md and sprint-07-retro.md

Which of these should the retro meeting discuss?

Staging environment instability, 3 slips

Review wait time, 3-day waits

Mid-cycle scope, 3 late adds

Alert noise, already tuned

Submit

Staging environment instability, 3 slips

Staging instability and review wait time.

Used 5 sources49s

I read Sprint 08’s 21 issues and two weeks of #team-platform and #oncall-platform: 16 closed, and each slipped issue has its reason from the channel. Your two themes are written up as questions for Monday; Lena’s handoff is separate, and the #oncall-platform post is drafted for you to approve.

sprint-08-retro.md

Document

Download

oncall-handoff-2026-04-24.md

Document

Download

**sprint-08-retro**MD

# Sprint 08 retro · Platform

<table class="keyv"><tbody><tr><td>Cycle</td><td>Apr 13–24, 2026 · draft for Monday’s retro (30 min)</td></tr><tr><td>Sources</td><td>Linear Sprint 08, #team-platform and #oncall-platform · format from sprint-07-retro.md</td></tr></tbody></table>

**16 of 21 shipped**`14 of 18 planned``2 of 3 added mid-cycle``5 carried to Sprint 09`Both cycle goals landed behind flags · 3 of the 5 slips trace to staging-2 · status shown is at cycle close

## Went well

- **Auth-service rate limiting** shipped behind its flag: limiter, per-tenant config, 429 handling `PLT-412 · 415 · 418`
- **Ingest worker v2** at 25% traffic and clean: consumer, DLQ and replay, dashboards, and the OOM hotfix shipped within a day `PLT-421 · 422 · 425 · 444`
- **Upkeep kept moving**: scheduler migration, staging certs, PG15 replica, flaky-test quarantine, queue-depth runbook, dependency bumps, IAM review
- **Load test passed at 5×**, p99 41 ms, once staging-2 held on the 23rd `#team-platform · Dev · Apr 23`

## Slipped 5, each with the reason and where it was said

<table class="slip grp"><thead><tr><th style="width:158px">Issue</th><th>Reason</th><th style="width:140px">Source</th></tr></thead><tbody><tr><td><b>PLT-419</b><span class="sub">Load test at 5× in staging</span><code class="ch y">In progress</code></td><td class="rs">staging-2 was down Apr 14 and flapped Apr 23; the test needs prod-shaped data that only lives there. Ran late on the 23rd, passed.</td><td class="sr"><span class="sub" style="margin:0;color:rgba(20,20,19,.7)">#team-platform, Dev, Apr 14 and 23</span></td></tr><tr><td><b>PLT-423</b><span class="sub">Ingest v2 full cutover</span><code class="ch y">In review</code></td><td class="rs">Held deliberately until the load test passed: “don’t want both risks in one week.” Cutover Mon Apr 27.</td><td class="sr"><span class="sub" style="margin:0;color:rgba(20,20,19,.7)">#team-platform, Tomas, Apr 15</span></td></tr><tr><td><b>PLT-437</b><span class="sub">Un-quarantine gateway tests</span><code class="ch y">In progress</code></td><td class="rs">Fix written; staging instability made the repro impossible to confirm.</td><td class="sr"><span class="sub" style="margin:0;color:rgba(20,20,19,.7)">#team-platform, June, Apr 23</span></td></tr><tr><td><b>PLT-434</b><span class="sub">Postgres primary cutover</span><code class="ch">Todo</code></td><td class="rs">DBRE moved the window to Apr 28 after the Apr 22 change freeze. Not in the team’s control; replica healthy on 15.</td><td class="sr"><span class="sub" style="margin:0;color:rgba(20,20,19,.7)">#team-platform, Amir, Apr 23</span></td></tr><tr><td><b>PLT-442</b><span class="sub">Self-serve staging RFC</span><code class="ch y">In review</code></td><td class="rs">Sat four days without a reviewer; picked up Apr 20, second round still open.</td><td class="sr"><span class="sub" style="margin:0;color:rgba(20,20,19,.7)">Linear activity; #team-platform, June and Rosa, Apr 20</span></td></tr></tbody></table>

## To discuss Monday you picked two of four themes

1. **Staging environment instability**Behind 3 of the 5 slipped issues and roughly two engineer-days lost (“lost most of Tuesday to it”). The proposed fix is already written (PLT-442).*For the room*Fund it as a Sprint 09 goal, or keep patching staging-2?
2. **Review wait time**PLT-442 waited four days for a reviewer; the third 3-day-plus wait this quarter.*For the room*A review rota, or a two-reviewers-within-a-day norm for RFCs?

## Proposed actions to confirm in the meeting

- Make self-serve staging (PLT-442) a Sprint 09 goalRosa · decide Monday
- Agree an RFC review norm and write it into the team pageteam · Monday
- Cut ingest v2 over to full trafficTomas · Mon Apr 27`PLT-423`
- Postgres primary cutover with DBREAmir · Tue Apr 28, 22:00 UTC`PLT-434`

Noted, not on the agenda: mid-cycle scope (3 added, 2 on-call driven and small); alert noise (moved to the on-call handoff; already tuned). Not sure about: the two engineer-days estimate is inferred from message timestamps, not logged time.

Every slipped item comes with its reason and where it was said.

**oncall-handoff-2026-04-24**MD

# On-call handoff · Platform primary

<table class="keyv"><tbody><tr><td>Handover</td><td>Dev Okafor → Lena Marsh · rotation Apr 13–24 → Apr 27–May 8</td></tr><tr><td>Sources</td><td>PagerDuty (7 incidents), #oncall-platform, Linear</td></tr></tbody></table>

## Open right now

`No active incidents` `1 low-urgency alert, acknowledged`Prod wildcard cert expires May 9; renewal is PLT-447, Amir, due Apr 30.

## Pages this rotation 7 total, 2 off-hours (02:14 Apr 16, 03:40 Apr 19)

<table class="grp pgs"><thead><tr><th>Alert</th><th style="width:58px">Pages</th><th>Done about it</th></tr></thead><tbody><tr><td><b>Disk pressure on ingest nodes</b><span class="sub">Apr 14–17</span></td><td>5</td><td>Threshold raised and auto-prune added Apr 17 (PLT-430); none since</td></tr><tr><td><b>Ingest worker OOM on a large batch</b><span class="sub">Apr 19, 03:40</span></td><td>1</td><td>Hotfix PLT-444 shipped Apr 20</td></tr><tr><td><b>Export job timeouts, Northwind</b><span class="sub">Apr 21</span></td><td>1</td><td>Batch size lowered (PLT-446)</td></tr></tbody></table>

Toil outside pages: about 3 h (two manual DLQ replays, one access request).

## Watch this rotation

- `Mon Apr 27`**Ingest v2 goes to full traffic** (PLT-423). Watch consumer lag and DLQ depth for the first 24 h; rollback is the `INGEST_V2_PERCENT` flag.
- `Tue Apr 28, 22:00 UTC`**Postgres primary cutover**, 22:00–23:00 (DBRE runs it; PLT-434). Expect a read-only window of about five minutes; the status page note is pre-drafted.
- `if it spikes`**Queue depth on events.raw** spiked twice without paging (Apr 20 14:10, Apr 23 09:55). Runbook is new (PLT-438); consider lowering the threshold from 50k to 30k.
- `Mon 06:00 UTC`**Northwind’s export** runs Mondays; first run on the smaller batch size is Apr 27.
- `all rotation`**staging-2 is unstable** (see retro); do not read a failed staging deploy as a real failure without a second look.

Quiet hours agreed: none this rotation (the PG cutover is in-hours for DBRE).

Claude wants to use **Send message draft** from Slack

To **#oncall-platform**

Handoff Apr 27–May 8 is in oncall-handoff-2026-04-24.md: no active incidents, one ack’d cert alert (PLT-447, due Apr 30). Watch: ingest v2 cutover Mon, Postgres primary cutover Tue 22:00 UTC.

Allow onceAlways allowDeny

Draft saved in Slack for you to send

**Sprint retro and on-call handoff**Fridays at 3:00 PM

Each run

Checks whether a cycle has closed since the last run

Writes both drafts to the sprint’s retro folder

Drafts the handoff post*for you to approve*

Claude Academy



0:03 / 0:561×

Illustration. Product screens are simplified.

Write the sprint retro and handoff

The sprint has closed and you need the retro and the on-call handoff written.

Give the standup skill the cycle and channels, and ask why things slipped.

Claude reads the cycle for what moved and the channels for why.

Wherever a decision is yours to make, Claude asks instead of guessing.

Claude tells you what it found, then gives you the retro and handoff.

Every slipped item comes with its reason and where it was said.

The next on-call gets what to watch, once you approve it.

You approve the post first, and can schedule both drafts for when each cycle closes.

The retro and the handoff are written from what actually happened this sprint.

Read the just-closed Linear cycle and two weeks of #team-platform and #oncall-platform. Write the sprint retro: shipped, slipped with reasons, themes worth discussing. Write a separate on-call handoff: open alerts, toil, what to watch. Keep each to a 30-minute meeting.

Which of these should the retro meeting discuss? Staging environment instability, 3 slips / Review wait time, 3-day waits / Mid-cycle scope, 3 late adds / Alert noise, already tuned

I read Sprint 08’s 21 issues and two weeks of #team-platform and #oncall-platform: 16 closed, and each slipped issue has its reason from the channel. Your two themes are written up as questions for Monday; Lena’s handoff is separate, and the #oncall-platform post is drafted for you to approve.

sprint-08-retro.md, oncall-handoff-2026-04-24.md

Skill: /standup (Engineering)

Connectors: Linear, Slack, PagerDuty

## Set up[](https://academy.claude.com/use-cases/sprint-retro-handoff)

### Try a plugin[](https://academy.claude.com/use-cases/sprint-retro-handoff)

The Engineering plugin ships with `/tech-debt` and `/standup` already structured to read a closed cycle and a channel window and split the output into discussion themes versus operational watch-fors. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



Engineering9 skills for postmortems, design docs, on-call handoffs, and cost reviews

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=engineering)

`/tech-debt`Draft the sprint retro from the closed cycle and team channel

[Run](claude://cowork/new?q=%2Ftech-debt)

`/standup`Write the on-call handoff from the week's alerts and pages

[Run](claude://cowork/new?q=%2Fstandup)

Show all 10 skills

### Connect your tools[](https://academy.claude.com/use-cases/sprint-retro-handoff)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

Linear

Read the closed cycle: what was planned, what shipped, what carried over and why.

[Connect](https://claude.ai/desktop/directory/linear)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

Pull the team and on-call channels for the context the tickets don't capture: the why-it-slipped and the 2am page.

[Connect](https://claude.ai/desktop/directory/slack)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)

PagerDutyOptional

List every page in the rotation so toil is counted, not estimated.

[Connect](https://claude.ai/desktop/directory/pagerduty)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/sprint-retro-handoff)

Keep your retro template, the running action-items list, and last sprint's retro in one folder. Cowork reads the format from there and writes both docs back so the retro and the handoff live next to their predecessors. [Create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from the folder so your team's definition of "shipped" and the discussion-prompt style carry over every cycle.

Platform / retros / 2026-sprint-08

retro-template.mdJan 6, 20262 KB

sprint-07-retro.mdApr 13, 20266 KB

retro-action-items.mdApr 13, 20263 KB

In Cowork’s chat bar:Platform / retros / 2026-sprint-08

## The prompt[](https://academy.claude.com/use-cases/sprint-retro-handoff)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/sprint-retro-handoff)

Read the just-closed Linear cycle and two weeks of #team-platform and #oncall-platform. Write the sprint retro (shipped, slipped with reasons, themes worth discussing) and a separate on-call handoff (open alerts, toil, what the next rotation should watch). Pull quotes where they help. Keep each section to what's discussable in a 30-minute meeting.



Platform / retros / 2026-sprint-08Open in Cowork

### Why this works[](https://academy.claude.com/use-cases/sprint-retro-handoff)

Prompt

**Ask for the reason behind each item.** The retro is about why, not the list. Asking forces the synthesis.

Prompt

**Split outputs that serve different purposes.** One is a conversation, one is operational. Mixing them buries both.

Prompt

**Set a length limit.** A length budget kills the exhaustive list and surfaces what's worth talking about.

Source

**Combine complementary sources.** Tickets say what moved; Slack says why. The pair is the whole story.

### Get a better draft[](https://academy.claude.com/use-cases/sprint-retro-handoff)

Practice

**Add an example to match.** Drop an example you like into the folder and Cowork matches your structure and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Cowork work for you[](https://academy.claude.com/use-cases/sprint-retro-handoff)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /tech-debt skill with my feedback.



Platform / retrosOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/sprint-retro-handoff)

### Run it when the cycle closes[](https://academy.claude.com/use-cases/sprint-retro-handoff)

Retro prep shouldn't be the TPM's Friday afternoon. Type `/schedule` in the prompt, or open **Scheduled** in the Cowork sidebar, and the customized skill drafts both docs the moment the cycle ends.

**/schedule** Every Friday at 3pm, run /tech-debt on the cycle that just closed and /standup on the last two weeks, write both to Platform/retros/<sprint>/, and post the handoff to #oncall-platform.



Platform / retrosOpen in Cowork

Scheduled taskActive

Sprint retro + on-call handoff

At cycle close, runs `/tech-debt` and `/standup`, writes both to the dated retro folder, and posts the handoff to the on-call channel.

Every **Friday at 3:00pm**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/sprint-retro-handoff)

Your customized `/tech-debt` now knows your tracker, your channels, your template, and what counts as a theme versus a status update. Share it so every squad runs the same retro prep and on-call handoffs read the same way org-wide.



Share the skill

In Cowork, open **Skills** → `/tech-debt` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your template and channel defaults baked in, so they don't repeat Steps 1-3.

## What changes for retro day[](https://academy.claude.com/use-cases/sprint-retro-handoff)

The sprint retro and on-call handoff are drafted from the closed cycle and channel history — ready to review and edit instead of write from scratch.

You did this for one sprint. The same approach covers incident postmortems, release notes, and the weekly status summary — each one becomes a skill your team runs the same way.

[Next: Draft the incident postmortem](https://academy.claude.com/use-cases/incident-postmortem)

Was this helpful?
