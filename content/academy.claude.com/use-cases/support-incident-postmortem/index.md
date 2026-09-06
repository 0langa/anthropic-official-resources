# Support incident postmortem

The customer-facing postmortem, drafted from the war room before anyone forgets.

10 minOperationsClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-ekdkz1b1.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-dwsje4gy.png)

Views+ Add

Search tickets

*EB*

**Views***↻*

Your unsolved tickets*8*

Unassigned tickets*29*

All unsolved tickets*84*

Pending tickets*12*

Recently solved tickets*40*

More ›

## Unassigned tickets

**29** tickets**Play****▾**

<table><thead><tr><th class="ck"><b></b></th><th class="st">Status</th><th class="sub">Subject</th><th class="rqn">Requester</th><th class="rq">Updated <i>▼</i></th><th class="pr">Priority</th></tr></thead><tbody><tr class="r0 nw" style="opacity: 0; transform: translateY(0px);"><td class="ck"><b></b></td><td class="st"><span class="zs n"><i></i>New</span></td><td class="sub">Every export erroring out — is this on your end?</td><td class="rqn"><b>Dana Whitfield</b><span class="org">Corbel Freight</span></td><td class="rq">2:31 PM</td><td class="pr high"><i></i>High</td></tr><tr class="r1 nw" style="opacity: 0; transform: translateY(-44px);"><td class="ck"><b></b></td><td class="st"><span class="zs n"><i></i>New</span></td><td class="sub">URGENT: CSV download returns error 500</td><td class="rqn"><b>Priyanka Desai</b><span class="org">Larch &amp; Vale</span></td><td class="rq">2:29 PM</td><td class="pr urgent"><i></i>Urgent</td></tr><tr class="r2 nw" style="opacity: 0; transform: translateY(-88px);"><td class="ck"><b></b></td><td class="st"><span class="zs n"><i></i>New</span></td><td class="sub">Scheduled export didn’t run at 2pm</td><td class="rqn"><b>Tom Becker</b><span class="org">Ridgeway Foods</span></td><td class="rq">2:27 PM</td><td class="pr normal"><i></i>Normal</td></tr><tr class="r3 nw" style="opacity: 0; transform: translateY(-132px);"><td class="ck"><b></b></td><td class="st"><span class="zs n"><i></i>New</span></td><td class="sub">Export stuck on “Preparing…”</td><td class="rqn"><b>Hannah Cole</b><span class="org">Brightwater Utilities</span></td><td class="rq">2:24 PM</td><td class="pr high"><i></i>High</td></tr><tr class="r4 nw" style="opacity: 0; transform: translateY(-176px);"><td class="ck"><b></b></td><td class="st"><span class="zs n"><i></i>New</span></td><td class="sub">Re: weekly finance export missing</td><td class="rqn"><b>Marcus Lindqvist</b><span class="org">Fjordline AS</span></td><td class="rq">2:22 PM</td><td class="pr normal"><i></i>Normal</td></tr><tr class="r5 nw" style="opacity: 0; transform: translateY(-220px);"><td class="ck"><b></b></td><td class="st"><span class="zs n"><i></i>New</span></td><td class="sub">Can’t export dashboard to Excel</td><td class="rqn"><b>Sofia Marin</b><span class="org">Atlas BioLabs</span></td><td class="rq">2:19 PM</td><td class="pr normal"><i></i>Normal</td></tr><tr class="r6" style="opacity: 1; transform: translateY(-264px);"><td class="ck"><b></b></td><td class="st"><span class="zs o"><i></i>Open</span></td><td class="sub">2pm warehouse export never arrived, retry gives 500</td><td class="rqn"><b>Luis Ortega</b><span class="org">Pinegrove Health</span></td><td class="rq">2:17 PM</td><td class="pr high"><i></i>High</td></tr><tr class="r7" style="opacity: 1; transform: translateY(-264px);"><td class="ck"><b></b></td><td class="st"><span class="zs o"><i></i>Open</span></td><td class="sub">Exports failing for all users on our account</td><td class="rqn"><b>Grace Nakamura</b><span class="org">Kite &amp; Key Learning</span></td><td class="rq">2:14 PM</td><td class="pr high"><i></i>High</td></tr><tr class="r8" style="opacity: 1; transform: translateY(-264px);"><td class="ck"><b></b></td><td class="st"><span class="zs o"><i></i>Open</span></td><td class="sub">Error when downloading report</td><td class="rqn"><b>Ben Adeyemi</b><span class="org">Northgate Logistics</span></td><td class="rq">2:11 PM</td><td class="pr normal"><i></i>Normal</td></tr><tr class="r9" style="opacity: 1; transform: translateY(-264px);"><td class="ck"><b></b></td><td class="st"><span class="zs o"><i></i>Open</span></td><td class="sub">Export to CSV error</td><td class="rqn"><b>Rachel Stern</b><span class="org">Meridian Dental Group</span></td><td class="rq">2:09 PM</td><td class="pr normal"><i></i>Normal</td></tr><tr class="r10" style="opacity: 1; transform: translateY(-264px);"><td class="ck"><b></b></td><td class="st"><span class="zs o"><i></i>Open</span></td><td class="sub">SSO login loop for one user</td><td class="rqn"><b>Ahmed Saleh</b><span class="org">Quarry Capital</span></td><td class="rq">1:52 PM</td><td class="pr high"><i></i>High</td></tr><tr class="r11" style="opacity: 1; transform: translateY(-264px);"><td class="ck"><b></b></td><td class="st"><span class="zs o"><i></i>Open</span></td><td class="sub">Question about April invoice</td><td class="rqn"><b>Joanne Park</b><span class="org">Willow &amp; Ash</span></td><td class="rq">1:20 PM</td><td class="pr normal"><i></i>Normal</td></tr></tbody></table>

Explain an outage to customers

After an outage, your customers need a clear account of what happened.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2303363D'%3e%3cpath%20d='M11%207.7v13.1H.2L11%207.7Z'/%3e%3cpath%20d='M11%203.2a5.4%205.4%200%200%201-10.8%200H11Z'/%3e%3cpath%20d='M13%2016.3V3.2h10.8L13%2016.3Z'/%3e%3cpath%20d='M13%2020.8a5.4%205.4%200%200%201%2010.8%200H13Z'/%3e%3c/g%3e%3c/svg%3e)

Zendesk

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

Support / Incidents / INC-4417

3 files

Folder

customer-postmortem-template.md

Team template

MD

tickets-2026-04-24.csv

Ticket export

CSV

Operations

/change-request

/runbook

/status-report

How can I help you today?

SEvery export erroring out — is this on your end?#29432+ Add

Search tickets

*EB*

Corbel FreightDana WhitfieldS Ticket #29432›› Apps

Requester

*DW*Dana Whitfield

Assignee

Erin Blake

Followers

—

Tags

exportsinc\_4417sev2enterprise

Type

Incident

Priority

High

## Every export erroring out — is this on your end?

Via email

*DW*

**Dana Whitfield**Fri 24 Apr, 2:31 PM

Hi team — every export we try is erroring out, scheduled and manual. Is this on your end or ours? We have a board pack due at 4 and the finance dashboard is the source.  
  
Screenshot attached (export-error.png).

*EB*

**Erin Blake**Internal note2:36 PM

Linked to INC-4417. Macro “Known issue — exports” sent.

*EB*

**Erin Blake**3:58 PM

Hi Dana — exports are working again as of 3:38 PM and your 2:00 PM scheduled export was re-delivered at 4:06. A written review will follow from your account owner early next week.

Public replyInternal note

Apply macro*▾***Submit as Solved**

*DW*

**Dana Whitfield**Corbel Freight

Emaildana.whitfield@corbelfreight.com

Local time**Mon 9:12 AM PDT**

Language**English**

Org notes**Enterprise, export SLA 99.9%**

**Interactions**

S

Every export erroring out — is this on your end?Fri 2:31 PM

S

Add a viewer seat for our auditor9 Apr

S

Scheduled export timezone2 Mar

**/**status-report Draft the customer-facing incident review for INC-4417 from #inc-4417, tickets in the impact window and the last day's deploys. Quantify customers impacted and for how long, quote them directly, and use our template with remediation owners.

Reading #inc-4417-export-failures0s

Read4 sources

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)Read#inc-4417-export-failures

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2303363D'%3e%3cpath%20d='M11%207.7v13.1H.2L11%207.7Z'/%3e%3cpath%20d='M11%203.2a5.4%205.4%200%200%201-10.8%200H11Z'/%3e%3cpath%20d='M13%2016.3V3.2h10.8L13%2016.3Z'/%3e%3cpath%20d='M13%2020.8a5.4%205.4%200%200%201%2010.8%200H13Z'/%3e%3c/g%3e%3c/svg%3e)Searchedtickets tagged inc\_4417

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)Listedexport-service deploys since Thursday

Readcustomer-postmortem-template.md

How much should customers be told about the cause?

Plain cause, no internal detail

Impact and fix only, no cause

Plain cause, no internal detail

State the cause plainly, without internal detail.

Used 4 sources43s

I read #inc-4417-export-failures, the 38 tickets tagged inc\_4417 and the day’s deploys, and drafted the customer review in your template: 212 accounts had failed exports for 96 minutes. The cause is worded plainly, as you chose, and the customer quotes sit in an internal appendix to delete before sending.

INC-4417-customer-review.md

Document

Download

INC-4417-affected-accounts.xlsx

Spreadsheet

Download

**INC-4417-customer-review.md**MDSaved to Support / Incidents / INC-4417

Incident review · Reference INC-4417

# Export failures on 24 April 2026

<table class="meta-tbl hd"><tbody><tr><td>From</td><td>Halyard Support, for affected customers · send via account owner</td></tr><tr><td>Draft</td><td>v1, 27 April 2026 · review by Tue 28 April · Erin Blake</td></tr></tbody></table>

## Summary

On Friday 24 April, exports from Halyard failed for some customers for 96 minutes. The cause was a change we released that afternoon; we reversed it, all scheduled exports were re-delivered the same day, and no data was lost.

## What happened

At 1:47 PM we released a change to how large exports are generated. From 2:02 PM, exports of more than about 5,000 rows failed with an error instead of downloading, and scheduled exports of that size did not send. We identified the change as the cause at 2:58 PM, reversed it at 3:31 PM and confirmed exports were working at 3:38 PM.

## How this affected customers

Between 2:02 and 3:38 PM Pacific (**96 minutes**), **212 accounts** had at least one export fail: **742 downloads** started by users and **1,204 scheduled exports**. Scheduled exports re-ran automatically once service recovered and were all delivered by 4:20 PM; downloads had to be retried. Dashboards, data collection and sign-in were not affected, and no data was lost or exposed.

## What we are doing about it

<table class="act"><tbody><tr><th>Action</th><th style="width:138px">Owner</th><th style="width:118px">By</th></tr><tr><td>Add large-export cases to the checks every release must pass</td><td>Platform engineering</td><td>8 May 2026</td></tr><tr><td>Retry a failed scheduled export automatically and email the owner if it still fails</td><td>Exports team</td><td>29 May 2026</td></tr><tr><td>Post to the status page within 15 minutes of a confirmed customer-facing problem (this time it took 24)</td><td>Support</td><td>In place from 27 Apr</td></tr><tr><td>Apply service credits automatically, no request needed</td><td>Billing</td><td>May invoice</td></tr></tbody></table>

## Timeline, 24 April (Pacific Time)

<table class="tl"><tbody><tr><th style="width:82px">Time</th><th>Event</th></tr><tr><td>1:47 PM</td><td>Change to large-export generation released</td></tr><tr><td>2:02 PM</td><td>First failed export</td></tr><tr><td>2:09 PM</td><td>First customer report (#29418)</td></tr><tr><td>2:21 PM</td><td>Incident opened</td></tr><tr><td>2:26 PM</td><td>Status page updated: investigating</td></tr><tr><td>2:58 PM</td><td>Cause identified</td></tr><tr><td>3:31 PM</td><td>Change reversed</td></tr><tr><td>3:38 PM</td><td>Exports confirmed working</td></tr><tr><td>3:52 PM</td><td>Status page resolved</td></tr><tr><td>4:20 PM</td><td>All scheduled exports re-delivered</td></tr></tbody></table>

## Service credits

Accounts on an Enterprise agreement with the 99.9% export availability commitment (44 affected accounts) receive a 10% credit on the May invoice. The month’s allowance is 43 minutes and this incident ran 96.

## Questions

Reply to your account owner or to support@halyard.io and reference INC-4417.

## Internal appendix delete before sending

**Tickets.** 38 from 31 accounts between 2:09 and 3:36 PM, against about 5 an hour normally; 9 from Enterprise accounts. All 31 are in the 212 from the export-service log.

### What customers said

> “Every export we try is erroring out — is this on your end or ours? We have a board pack due at 4.”Dana Whitfield, Corbel Freight · #29432, 2:31 PM

> “Scheduled 2pm export to our warehouse never arrived, and a manual retry gives a 500.”Luis Ortega, Pinegrove Health · #29423, 2:17 PM

> “Third time this quarter something breaks on a Friday afternoon. We need to know what you’re changing before you change it.”Amara Okafor, Tessellate Labs · #29447, 3:04 PM

**Suspect change.** halyard/export-service PR #2871 “Stream large exports through the chunked writer”, merged 1:31 PM, deployed 1:47 PM, 15 minutes before the first failure; reverted by #2874 at 3:31 PM. The other four deploys in the prior 24 hours touched web-app and billing-worker only.

**Remediation owners.** Joel Park (Platform), Nadia Rahman (Exports), Erin Blake (Support), Chris Mwangi (Billing).

**Not sure about.** The 212 count is from the export-service log Joel posted at 3:50 PM; accounts that only saw the error banner without starting an export are not in it.

Affected accounts and duration are counted from the record.

Claude keeps internal detail apart from what the customer reads.

Run this every weekday at 9am: for each #inc- channel marked resolved in the last 24 hours, run /incident-review and write the customer-facing draft to that incident’s folder.

**Customer incident-review draft**Weekdays at 9:00 AM

Each run

Checks for incident channels resolved in the last day

Runs /incident-review on each

Writes the customer draft to that incident’s folder*for you to edit and send*

Claude Academy



0:03 / 0:561×

Illustration. Product screens are simplified.

Explain an outage to customers

After an outage, your customers need a clear account of what happened.

Ask the status report skill for a review written for customers, with the impact counted.

Claude reads the incident channel, the tickets opened during the outage and the recent deploys.

Claude checks with you before it decides anything that is your call.

Claude tells you what it counted, then gives you the review and sheet.

Affected accounts and duration are counted from the record.

Claude keeps internal detail apart from what the customer reads.

On a weekday schedule, Claude drafts the review for each war room closed the day before.

Customers get a clear account of the outage, drafted from the tickets.

Draft the customer-facing incident review for INC-4417 from #inc-4417, tickets in the impact window and the last day's deploys. Quantify customers impacted and for how long, quote them directly, and use our template with remediation owners.

How much should customers be told about the cause? Plain cause, no internal detail / Impact and fix only, no cause

I read #inc-4417-export-failures, the 38 tickets tagged inc\_4417 and the day’s deploys, and drafted the customer review in your template: 212 accounts had failed exports for 96 minutes. The cause is worded plainly, as you chose, and the customer quotes sit in an internal appendix to delete before sending.

INC-4417-customer-review.md, INC-4417-affected-accounts.xlsx

Skill: /status-report (Operations)

Connectors: Slack, Zendesk, GitHub

## Set up[](https://academy.claude.com/use-cases/support-incident-postmortem)

### Try a plugin[](https://academy.claude.com/use-cases/support-incident-postmortem)

The Operations plugin ships with `/runbook` and `/status-report` as a starting point, already structured to walk a war room and frame the customer impact. In Step 3 you'll save your own version as `/incident-review`. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



OperationsOptimize business operations — vendor management, process documentation, change management, capacity planning, and compliance tracking. Keep your organization running efficiently.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=operations)

`/runbook`Create or update an operational runbook for a recurring task or procedure.

[Run](claude://cowork/new?q=%2Frunbook)

`/status-report`Generate a status report with KPIs, risks, and action items.

[Run](claude://cowork/new?q=%2Fstatus-report)

Show all 9 skills

### Connect your tools[](https://academy.claude.com/use-cases/support-incident-postmortem)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

Read the war-room channel end to end and pull every status update, decision, and timestamp.

[Connect](https://claude.ai/desktop/directory/slack)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2303363D'%3e%3cpath%20d='M11%207.7v13.1H.2L11%207.7Z'/%3e%3cpath%20d='M11%203.2a5.4%205.4%200%200%201-10.8%200H11Z'/%3e%3cpath%20d='M13%2016.3V3.2h10.8L13%2016.3Z'/%3e%3cpath%20d='M13%2020.8a5.4%205.4%200%200%201%2010.8%200H13Z'/%3e%3c/g%3e%3c/svg%3e)

Zendesk

Pull every ticket opened during the impact window, with the customer's own words.

Custom connector

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHubOptional

List the deploys and merged changes in the 24 hours before the incident started.

[Connect](https://claude.ai/desktop/directory/github)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/support-incident-postmortem)

Drag the files you'll use (your customer-postmortem template, an export of the war room, the ticket CSV) into one folder and point Cowork at it. Cowork reads the template from there and writes the draft, the impacted-customer list, and the remediation tracker back to it. [Create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from your incident-reviews folder so the template, tone guide, and SLA definitions stay attached.

Support / Incidents / INC-4417

customer-postmortem-template.mdFeb 3, 20263 KB

tickets-2026-04-24.csvApr 25, 202662 KB

war-room-export.txtApr 25, 2026340 KB

In Cowork’s chat bar:Support / Incidents / INC-4417

## The prompt[](https://academy.claude.com/use-cases/support-incident-postmortem)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/support-incident-postmortem)

Draft the customer-facing incident review for INC-4417. Pull the war-room thread, tickets from the impact window, deploys from the prior 24 hours, and direct customer quotes. Reconstruct the timeline, quantify how many customers were impacted and for how long, and write the first cut in our template with recommended remediation owners.



Support / Incidents / INC-4417Open in Cowork

### Why this works[](https://academy.claude.com/use-cases/support-incident-postmortem)

Prompt

**Name the audience up front.** The register changes; this is the doc your CSMs forward, not the engineering retro.

Prompt

**Quantify the impact.** "How many, for how long" forces a number you can put in the SLA-credit conversation.

Prompt

**Ask for direct quotes.** The affected-customer voice is the part leadership pays attention to; ask for it explicitly.

Prompt

**Set a time range.** Tickets and deploys are bounded by the incident timestamps, so the suspect list is short and relevant.

### Get a better draft[](https://academy.claude.com/use-cases/support-incident-postmortem)

Practice

**Separate internal from external.** Add "write an internal appendix with the suspect deploys; keep the customer doc to impact and remediation" so one run produces both.

Practice

**Add an example to match.** Drop a past review you were proud of in the folder and Cowork matches the structure and the apology tone your brand uses.

## Make Cowork work for you[](https://academy.claude.com/use-cases/support-incident-postmortem)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /incident-review skill with my feedback.



Support / IncidentsOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/support-incident-postmortem)

### Run it when the war room closes[](https://academy.claude.com/use-cases/support-incident-postmortem)

The customer doc should exist before the first CSM asks for it. Type `/schedule` in the prompt, or open **Scheduled** in the Cowork sidebar, and the customized skill watches for closed war rooms and writes the first cut.

**/schedule** Every weekday at 9am, check for any #inc- channel marked resolved in the last 24 hours, run /incident-review on it, and write the draft to Support/Incidents/<incident-id>/customer-review.md.



Support / IncidentsOpen in Cowork

Scheduled taskActive

Customer incident-review draft

Daily at 9am, finds war rooms resolved in the last 24h, runs `/incident-review` on each, and writes the customer-facing draft to the incident folder.

Every **weekdays at 9:00am**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/support-incident-postmortem)

Your customized `/incident-review` now carries your template, your tone guide, and your SLA-credit language. Share it so every incident gets the same customer doc, whichever support lead was on shift.



Share the skill

In Cowork, open **Skills** → `/incident-review` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your instructions baked in, they don't repeat Steps 1-3.

## What changes after an incident[](https://academy.claude.com/use-cases/support-incident-postmortem)

The customer-facing incident review is drafted from the source record with impact quantified and remediation assigned — ready to edit and send rather than write from scratch.

You did this for one incident. The same approach covers internal retros, status-page updates, and SLA-credit summaries — each one becomes a skill your team runs the same way.

[Next: Turn the thread into a decision doc(opens in new tab)](https://academy.claude.com/use-cases/thread-to-decision)

Was this helpful?
