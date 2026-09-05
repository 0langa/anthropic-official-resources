# Draft the incident postmortem

Timeline, root cause, and action items from the incident channel.

10 minEngineeringClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-fnbe9wym.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-nsjpa7is.png)

Draft the incident postmortem

The incident is over and you need to write the postmortem.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

PagerDuty

2026-04-22 checkout 5xx

3 files

Folder

postmortem-template.md

Team template

MD

Engineering

/debug

/deploy-checklist

/incident-response

How can I help you today?

M

Meridian

Channels

# eng-announce

# payments-sre

# inc-2026-04-22-checkout-5xx

# support-escalations

Direct messages

Marco Alvarez

Priya Nair

**# inc-2026-04-22-checkout-5xx**14 members

PagerDutyAPP*14:07*

**Triggered** #48213 checkout-service: HTTP 5xx rate 8.4% (threshold 5% for 3 min). Assigned to Priya Nair. Acknowledged 14:09

PN

Priya Nair*14:12*

Looking. 5xx on roughly 24% of checkout requests, p95 at 9.2 s, all `PoolTimeoutError: could not acquire connection within 8000 ms`. The dashboard link in the runbook 404s, using the service overview.

MA

Marco Alvarez*14:15*

Taking IC. Calling it SEV2: checkout is degraded, not down. @Dana Kim can you put a notice on the status page?

PN

Priya Nair*14:21*

Orders DB looks healthy and its connection count is flat, so this is on our side of the pool. What changed on checkout-service since 13:30?

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

deploy-botAPP*14:22*

checkout-service, last 2 production deploys: `13:31` release 2026.04.22-r3 (canary 13:05, prod 13:31, clean) and `14:02` config cfg-7f3c “pool sizing for canary profile” (prod, no canary stage)

MA

Marco Alvarez*14:26*

r3 sat on canary for 26 minutes with no errors. cfg-7f3c went straight to prod and touches pool sizing. Revert the config first; if that doesn’t move the graph we roll back r3.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

deploy-botAPP*14:41*

checkout-service: revert of cfg-7f3c deployed to production (3/3 regions)

PN

Priya Nair*14:44*

Pool is recovering. 5xx down to 3% and dropping, p95 back under 1 s.

PagerDutyAPP*14:49*

**Resolved** #48213 checkout-service: HTTP 5xx rate 0.2%, below threshold for 5 min. Open for 42 min.

MA

Marco Alvarez*14:56*

Resolved as of 14:49. On Priya’s graph the errors start climbing at 14:04, three minutes before the page, so impact starts at 14:04 or 14:07 depending on how we count. Review is Thursday, I own the doc.

DK

Dana Kim*15:20*

Status page set to resolved. Final support count is 62 tickets, all tagged INC-48213. Peak on the shared graph was 31% at 14:16 if you need it for the doc.

Message #inc-2026-04-22-checkout-5xx

**/**incident-response From #inc-2026-04-22-checkout-5xx and the PagerDuty timeline, reconstruct what happened with timestamps, then draft the postmortem in our template: impact, root cause, contributing factors, and action items with an owner on each. Be blameless. Draft a channel note linking it.

Reading #inc-2026-04-22-checkout-5xx0s

Read4 sources

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)Read#inc-2026-04-22-checkout-5xx

ReadIncident #48213 timeline

Readpostmortem-template.md

Readerror-rate-graph.png

When did the incident start: first errors or the alert?

14:04, first errors on the graph

14:07, when the alert fired

14:04, first errors on the graph

14:04, from the first errors.

Used 4 sources44s

I rebuilt the incident from the channel and the PagerDuty timeline as 13 timestamped entries, counted impact from 14:04, and gave all five action items an owner and a date. Two numbers I am unsure of are under Open questions, and the channel note waits for your approval.

checkout-5xx-postmortem-2026-04-22.md

Document

Download

inc-48213-action-items.csv

Spreadsheet

Download

**checkout-5xx-postmortem-2026-04-22.md**MDSaved to Incidents / 2026-04-22-checkout-5xx

# Postmortem: checkout 5xx errors, 22 April 2026

**SEV2***Incident* #48213*Impact window* `14:04–14:49` UTC (45 min)*Detected* by alert at `14:07`*Incident commander* Marco Alvarez*Status* Draft for review Thu 24 Apr*Template* Blameless format v3

## Summary

A config change shrank checkout-service’s database connection pool far below afternoon load. About a quarter of checkouts failed for 45 minutes until it was reverted.

## Customer impact

- **4,350 of ~18,900** checkout requests returned 5xx (23%, peak 31% at 14:16)
- **~310 orders** not completed, about $18,000 at $58 average order value
- **62 support tickets** tagged INC-48213; ~1,870 signed-in customers affected

## Timeline (UTC) 13 entries · shaded rows are the impact window

<table class="tl"><tbody><tr><th style="width:58px">Time</th><th>Event</th><th style="width:118px">Source</th></tr><tr><td>14:02</td><td>Config change cfg-7f3c deployed to production, no canary stage</td><td>deploy-bot</td></tr><tr class="iw"><td>14:04</td><td>5xx rate begins climbing</td><td>error-rate graph</td></tr><tr class="iw"><td>14:07</td><td>Alert #48213 triggers at 8.4% 5xx</td><td>PagerDuty</td></tr><tr class="iw"><td>14:09</td><td>On-call acknowledges</td><td>PagerDuty</td></tr><tr class="iw"><td>14:12</td><td>Errors identified as pool timeouts; runbook dashboard link broken</td><td>channel</td></tr><tr class="iw"><td>14:15</td><td>Incident commander assigned, SEV2 declared, status page requested</td><td>channel</td></tr><tr class="iw"><td>14:16</td><td>Peak error rate 31%</td><td>error-rate graph</td></tr><tr class="iw"><td>14:22</td><td>Recent deploys listed; cfg-7f3c identified as untested on canary</td><td>deploy-bot</td></tr><tr class="iw"><td>14:26</td><td>Decision: revert cfg-7f3c before considering a release rollback</td><td>channel</td></tr><tr class="iw"><td>14:41</td><td>Revert live in all three regions</td><td>deploy-bot</td></tr><tr class="iw"><td>14:44</td><td>5xx at 3% and falling</td><td>channel</td></tr><tr class="iw"><td>14:49</td><td>Alert resolves; end of impact window</td><td>PagerDuty</td></tr><tr><td>15:20</td><td>Status page resolved; 62 tickets counted</td><td>channel</td></tr></tbody></table>

## Root cause

cfg-7f3c set `db.pool.max` to 20 connections per instance, a value meant for the canary profile. The canary and production profiles read the same key, so production picked it up at 14:02. At ~420 requests a minute the pool was exhausted within two minutes; requests waited the full 8-second acquire timeout and returned 5xx until the revert at 14:41 let the pool refill.

## Contributing factors

1. Config changes deploy without the canary stage that releases use.
2. The pool-saturation alert exists on the orders database but not on checkout-service, so detection waited for the 5xx alert.
3. The runbook’s dashboard link pointed at a retired dashboard.
4. An 8 s acquire timeout turns pool pressure into slow failures rather than fast ones.

## What went well

- The alert fired within three minutes of first errors.
- The deploy-bot listing made the untested change obvious within 15 minutes of the page.
- Reverting first avoided an unnecessary release rollback.

## Action items 5, each with an owner and a date

<table class="ai"><tbody><tr><th style="width:20px">#</th><th>Action</th><th style="width:150px">Owner</th><th style="width:58px">Due</th><th style="width:82px">Addresses</th></tr><tr><td>1</td><td>Send config changes through the same canary stage as releases</td><td>Marco Alvarez (Platform)</td><td>6 May</td><td><span class="pill k">Factor 1</span></td></tr><tr><td>2</td><td>Add a pool-saturation alert on checkout-service at 80% for 2 min</td><td>Priya Nair (SRE)</td><td>29 Apr</td><td><span class="pill k">Factor 2</span></td></tr><tr><td>3</td><td>Split canary and production pool settings into separate keys</td><td>Luis Romero (Checkout)</td><td>13 May</td><td><span class="pill b">Root cause</span></td></tr><tr><td>4</td><td>Fix runbook dashboard links and add a weekly link check</td><td>Dana Kim (On-call tooling)</td><td>25 Apr</td><td><span class="pill k">Factor 3</span></td></tr><tr><td>5</td><td>Lower the acquire timeout and fail fast when the pool is saturated</td><td>Luis Romero (Checkout)</td><td>20 May</td><td><span class="pill k">Factor 4</span></td></tr></tbody></table>

## Open questions

- “Orders not completed” assumes no retries after 14:49; confirm against next-day orders before the review.
- The 1,870 customer count covers signed-in sessions only; guest checkouts are not in the logs I had.

Every timeline entry comes from a message or an alert.

Every action item already has an owner and a date.

Claude wants to use **Send message draft** from Slack

To **#inc-2026-04-22-checkout-5xx**

Postmortem draft for INC-48213: checkout-5xx-postmortem-2026-04-22.md in the incident folder. Impact 14:04–14:49 UTC, root cause cfg-7f3c pool setting, five action items with owners; please comment in the doc before Thursday’s review.

Allow onceAlways allowDeny

Draft saved in Slack for you to send

**Postmortem first draft**Weekdays at 6:00 PM

Each run

Drafts a postmortem for each resolved incident

Saves it to the incident folder*for review*

Claude Academy



0:03 / 0:561×

Illustration. Product screens are simplified.

Draft the incident postmortem

The incident is over and you need to write the postmortem.

Using the Engineering plugin’s incident response skill, ask for a timestamped sequence and owned action items.

Claude reads the channel, the alert timeline and your template.

When something is yours to decide, Claude stops and asks.

Claude says what it rebuilt and gives you the postmortem and a draft note.

Every timeline entry comes from a message or an alert.

Every action item already has an owner and a date.

You approve the channel note first, and can schedule a first draft after every incident.

The postmortem is written from what actually happened, ready to review.

From #inc-2026-04-22-checkout-5xx and the PagerDuty timeline, reconstruct what happened with timestamps, then draft the postmortem in our template: impact, root cause, contributing factors, and action items with an owner on each. Be blameless. Draft a channel note linking it.

When did the incident start: first errors or the alert? 14:04, first errors on the graph / 14:07, when the alert fired

I rebuilt the incident from the channel and the PagerDuty timeline as 13 timestamped entries, counted impact from 14:04, and gave all five action items an owner and a date. Two numbers I am unsure of are under Open questions, and the channel note waits for your approval.

checkout-5xx-postmortem-2026-04-22.md, inc-48213-action-items.csv

Skill: /incident-response (Engineering)

Connectors: Slack, PagerDuty

## Set up[](https://academy.claude.com/use-cases/incident-postmortem)

### Try a plugin[](https://academy.claude.com/use-cases/incident-postmortem)

The Engineering plugin ships with `/incident-response` and other incident-and-ops skills as a starting point, already structured to walk an incident channel and reconstruct a timeline. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



EngineeringStreamline engineering workflows — standups, code review, architecture decisions, incident response, and technical documentation. Works with your existing tools or standalone.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=engineering)

`/incident-response`Run an incident response workflow — triage, communicate, and write postmortem.

[Run](claude://cowork/new?q=%2Fincident-response)

`/standup`Generate a standup update from recent activity.

[Run](claude://cowork/new?q=%2Fstandup)

Show all 10 skills

### Connect your tools[](https://academy.claude.com/use-cases/incident-postmortem)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

Read the incident channel end to end and pull every timestamp, decision, and status update.

[Connect](https://claude.ai/desktop/directory/slack)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)

PagerDuty

Pull the alert timeline, who was paged, and when the incident was acknowledged and resolved.

[Connect](https://claude.ai/desktop/directory/pagerduty)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23632CA6'%20d='m20.43%2017.56-1.86-1.24-1.6%202.63-1.85-.53-1.73%202.7.07.71%208.92-1.63-.52-6.45zm-6.33-3.64c.46-.06.86-.13%201.35-.42.08-.32.1-.83-.04-1.43-.21-.87-.5-1.4-1.1-1.31-.6.1-.63.84-.42%201.71.12.5.33.98.54%201.28zm-2.54.4c.45-.08.96-.43%201.12-.64-.12-.18-.33-.54-.42-1.04-.32-.05-.6-.01-.92.19-.43.26-.77.86-.67%201.28.24.24.53.28.89.21zm-1.87.92c.18-.32.13-.86-.14-1.28-.19.02-.38.07-.57.18-.42.24-.86.77-.73%201.24.35.19.98.2%201.44-.14zm12.63%206.24-1.06-13.1L1.68.13.07%2019.05l8.6%201.24%201.55-2.42c-.85-.56-1.38-1.4-1.62-2.06-.42-1.14-.07-2.45.86-3.13.24-.18.5-.3.77-.37-.07-.43-.01-.93.24-1.37.42-.73%201.2-1.12%202-1.06.06-.58.36-1.13.9-1.46.86-.53%201.98-.33%202.63.44.35-.06.73-.02%201.12.14%201.21.5%201.6%201.88%201.39%202.96.5.36.86.86%201.02%201.45.33%201.21-.24%202.5-1.32%203.07l-1.37%202.25%201.84.53%201.58-2.6%202.44%201.63.63-.07zm-14.2-9.95c.14-.65.86-1.02%201.14-1.18-.33-.56-.5-1.28-.42-1.84.14-.93.93-1.5%201.63-1.43-.14-.5-.14-1.07.06-1.6.36-.93%201.32-1.36%202.14-1%20.03-.5.24-1%20.65-1.36.77-.7%201.93-.6%202.6.2.38-.2.84-.24%201.28-.07.86.33%201.28%201.32.93%202.2.43.2.77.6.93%201.1.3.93-.2%201.93-1.1%202.27.1.45.04.93-.2%201.35-.18.32-.43.55-.71.7.28.59.37%201.27.2%201.93l.5.35c.31-.55.85-.93%201.5-.98a8.53%208.53%200%200%201-.06-2.24c.2-1.84%201.36-2.56%202.35-2.45.43.05.77.24%201.02.5l.23-2.85L3.07%201.7%201.73%2017.56l5.77.83c-.12-.5-.12-1.02.04-1.5-.86-.42-1.5-1.32-1.5-2.4a2.6%202.6%200%200%201%201.28-2.24c-.24-.43-.33-.93-.2-1.43z'/%3e%3c/svg%3e)

DatadogOptional

Attach the error-rate and latency graphs for the impact window.

[Connect](https://claude.ai/desktop/directory/datadog)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/incident-postmortem)

Drag the files you'll use (your postmortem template, the runbook, any log exports or graph screenshots) into one folder and point Cowork at it. Cowork reads the template from there and writes the draft, the timeline, and the action-item tracker back to it. [Create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from your incidents folder so your template, severity definitions, and blameless-language guide stay attached.

Incidents / 2026-04-22-checkout-5xx

postmortem-template.mdJan 9, 20263 KB

checkout-service-logs.txtApr 22, 20261.4 MB

error-rate-graph.pngApr 22, 202688 KB

In Cowork’s chat bar:Incidents / 2026-04-22-checkout-5xx

## The prompt[](https://academy.claude.com/use-cases/incident-postmortem)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/incident-postmortem)

From #inc-2026-04-22-checkout-5xx, reconstruct the sequence of events with timestamps, write the customer impact summary, identify the root cause and contributing factors, and draft the postmortem in our template with owners on every action item. Be blameless: describe what the system did, not who made a mistake.



Incidents / 2026-04-22-checkout-5xxOpen in Cowork

### Why this works[](https://academy.claude.com/use-cases/incident-postmortem)

Prompt

**Reconstruct, don't summarize.** Asking for the timestamped sequence means the timeline is built from evidence, not memory.

Prompt

**Separate root cause from contributing factors.** Forces a real causal chain instead of a single scapegoat line.

Prompt

**State the tone you want.** Language stays on system behavior; the doc survives review.

Source

**Provide your template as context.** Output drops straight into your sections, your severity scale, your action-item format.

### Get a better draft[](https://academy.claude.com/use-cases/incident-postmortem)

Practice

**Add an example to match.** Drop an example you like into the folder and Cowork matches your structure and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Cowork work for you[](https://academy.claude.com/use-cases/incident-postmortem)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /incident-response skill with my feedback.



IncidentsOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/incident-postmortem)

### Run it when the incident closes[](https://academy.claude.com/use-cases/incident-postmortem)

The draft should exist before the review meeting is scheduled. Type `/schedule` in the prompt, or open **Scheduled** in the Cowork sidebar, and the customized skill watches for resolved incidents and writes the first draft into the matching folder.

**/schedule** Every weekday at 6pm, check PagerDuty for incidents resolved in the last 24 hours, run /incident-response on each one, and write the draft to Incidents/<incident-id>/incident-response-draft.md.



IncidentsOpen in Cowork

Scheduled taskActive

Postmortem first draft

Daily at 6pm, finds incidents resolved in the last 24h, runs `/incident-response` against the channel and timeline, and writes the draft to the incident folder.

Every **weekdays at 6:00pm**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/incident-postmortem)

Your customized `/incident-response` now carries your template, your severity definitions, and your blameless-language rules. Share it so every on-call engineer writes the doc the same way, and the review meeting starts at "is this right" instead of "who's writing this up."



Share the skill

In Cowork, open **Skills** → `/incident-response` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your template and tone baked in, so they don't repeat Steps 1-3.

## What changes for incident review[](https://academy.claude.com/use-cases/incident-postmortem)

You have a postmortem drafted from the incident record, with an owner on every action item — ready to review instead of write.

You did this for one incident. The same approach covers on-call handoffs, runbook updates, and sprint retros — each one a skill your team runs the same way.

[Next: Sprint retro and on-call handoff](https://academy.claude.com/use-cases/sprint-retro-handoff)

Was this helpful?
