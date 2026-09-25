# On-call handoff brief

Everything that happened on your shift, written before you log off.

10 minEngineeringClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-ggtsvh5v.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-ckm3olk1.png)

Film: the user asks Claude to draft an on-call handoff from pages, incident channels, escalations, and deploys, pausing to confirm whether a carried-over item is still being watched before posting the brief for approval and scheduling it for future rotations.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)PagerDuty

p99 latency > 2 s for 5 min — #5102

payments-api. Tue 25 Aug, 02:14. Resolved 03:01.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)#support-escalations

Dana Okafor, Fri 14:20

Three enterprise tenants stuck in an SSO login loop since ~14:05 — Northbeam, Askeland, Brisa Retail. Linking INC-5118.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)Deployments

auth-service v2.31.0 → production

Fri 28 Aug, 13:58. Rolled back 14:24.

handoff-2026-W34.md

Monitoring

Webhook delivery delays (INC-5087). Permanent fix not yet scheduled.

Write the on-call handoff

Your on-call shift is ending and the next person needs to know what happened.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)

PagerDuty

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

Platform / Oncall / 2026-W35

3 files

Folder

handoff-2026-W34.md

Last week’s brief

MD

handoff-template.md

Team template

MD

Engineering

/deploy-checklist

/incident-response

/standup

How can I help you today?

**‹****›**

meridian.pagerduty.com/incidents

IncidentsServicesPeopleAutomationAnalyticsIntegrationsStatus

Search

*TR*

# Incidents

on Platform On-call**+ New Incident**

Triggered*0*Acknowledged*0*Resolved*11*Any Status*11*Assigned to: Tomás Reyes×Aug 24 – Aug 31×

11 incidents · Aug 24 – Aug 31

<table><thead><tr><th class="ck"><b></b></th><th>Status</th><th>Urgency</th><th>Title</th><th>Service</th><th>Assigned to</th><th>Created <i>▼</i></th></tr></thead><tbody><tr class="r0"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u l">Low</span></td><td class="ti" style="position:relative;overflow:hidden"><a>Disk usage &gt; 80% on kafka-broker-3</a></td><td class="sv">kafka</td><td class="as">—</td><td class="cr">Mon 24 Aug, 19:32</td></tr><tr class="r1"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u h">High</span></td><td class="ti hi" style="position:relative;overflow:hidden"><a>p99 latency &gt; 2 s for 5 min — #5102</a><span class="sw"></span></td><td class="sv">payments-api</td><td class="as"><em>TR</em>Tomás Reyes</td><td class="cr">Tue 25 Aug, 02:14</td></tr><tr class="r2"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u l">Low</span></td><td class="ti" style="position:relative;overflow:hidden"><a>Disk usage &gt; 80% on kafka-broker-3</a></td><td class="sv">kafka</td><td class="as">—</td><td class="cr">Tue 25 Aug, 22:50</td></tr><tr class="r3"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u h">High</span></td><td class="ti hi" style="position:relative;overflow:hidden"><a>Consumer lag &gt; 15 min — #5109</a><span class="sw"></span></td><td class="sv">search-indexer</td><td class="as"><em>TR</em>Tomás Reyes</td><td class="cr">Wed 26 Aug, 16:40</td></tr><tr class="r4"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u h">High</span></td><td class="ti hi" style="position:relative;overflow:hidden"><a>Queue depth &gt; 50k — #5113</a><span class="sw"></span></td><td class="sv">notifications-worker</td><td class="as"><em>TR</em>Tomás Reyes</td><td class="cr">Thu 27 Aug, 11:20</td></tr><tr class="r5"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u l">Low</span></td><td class="ti" style="position:relative;overflow:hidden"><a>Disk usage &gt; 80% on kafka-broker-3</a></td><td class="sv">kafka</td><td class="as">—</td><td class="cr">Thu 27 Aug, 23:05</td></tr><tr class="r6"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u h">High</span></td><td class="ti hi" style="position:relative;overflow:hidden"><a>Login error rate &gt; 5% — #5118</a><span class="sw"></span></td><td class="sv">auth-service</td><td class="as"><em>TR</em>Tomás Reyes</td><td class="cr">Fri 28 Aug, 14:05</td></tr><tr class="r7"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u l">Low</span></td><td class="ti" style="position:relative;overflow:hidden"><a>Synthetic check failed: storefront eu-west</a></td><td class="sv">synthetics</td><td class="as">—</td><td class="cr">Sat 29 Aug, 04:10</td></tr><tr class="r8"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u l">Low</span></td><td class="ti" style="position:relative;overflow:hidden"><a>Synthetic check failed: storefront eu-west</a></td><td class="sv">synthetics</td><td class="as">—</td><td class="cr">Sat 29 Aug, 04:40</td></tr><tr class="r9"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u l">Low</span></td><td class="ti" style="position:relative;overflow:hidden"><a>Disk usage &gt; 80% on kafka-broker-3</a></td><td class="sv">kafka</td><td class="as">—</td><td class="cr">Sat 29 Aug, 21:15</td></tr><tr class="r10"><td class="ck"><b></b></td><td class="st"><span class="pl r">Resolved</span></td><td class="ur"><span class="u l">Low</span></td><td class="ti" style="position:relative;overflow:hidden"><a>Disk usage &gt; 80% on kafka-broker-3</a></td><td class="sv">kafka</td><td class="as">—</td><td class="cr">Sun 30 Aug, 18:48</td></tr></tbody></table>

**/**standup Write the on-call handoff for my shift: pages, #support-escalations and prod deploys from the last 7 days. For each item note status (resolved, monitoring, still open), a one-line cause, and what the next on-call should watch. Post it to #oncall. What does the next on-call need to know?

Reading last week’s brief0s

Read5 sources

Readhandoff-2026-W34.md and handoff-template.md

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)Read11 incidents assigned to you this week

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)Read#support-escalations and 4 incident channels

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)Read16 production deploys this week

Readrunbook-index.md

Are the webhook delivery delays fixed, or still being watched?

Fixed, mark it resolved

Still watching it

Still watching it

Still watching; the real fix ships Tuesday.

Used 5 sources41s

I read 11 pages, four incident channels, 16 deploys and last week’s brief, and wrote the week 35 handoff: 8 items, 1 still open, 3 monitoring, 4 resolved. The open item is auth-service v2.31.0 until #2287 merges, and the #oncall post is ready for you to approve.

handoff-2026-W35.md

Document

Download

**handoff-2026-W35**MD

# Platform on-call handoff · week 35

<table class="keyv"><tbody><tr><td>Rotation</td><td>24–31 Aug 2026 · Tomás Reyes → Aisha Bello, pager from Mon 31 Aug 09:00 UTC</td></tr><tr><td>Sources</td><td>PagerDuty (11 pages), #support-escalations + 4 incident channels, GitHub deploys (16), handoff-2026-W34.md</td></tr></tbody></table>

**8 items**`1 still open``3 monitoring``4 resolved`11 pages: 4 needed action (3 h 10 min), 7 self-resolved, 3 overnight · 16 deploys, 1 rolled back · 1 alert to tune

## Incidents 4, open first

<table class="inc grp"><thead><tr><th style="width:148px">Item</th><th style="width:98px">Status</th><th>Cause</th><th>Watch</th></tr></thead><tbody><tr><td><b>INC-5118</b> <code class="ch r">SEV2</code><span class="sub">auth-service login errors, Fri 14:05–14:31</span></td><td class="st"><code class="ch r">Still open</code></td><td>v2.31.0 cut SAML clock-skew tolerance from 180 s to 30 s; three enterprise SSO tenants looped. Rolled back 14:24.</td><td class="wt0">v2.31.0 is blocked in the release train until fix-forward PR #2287 merges. Do not let Tuesday’s train redeploy it. Runbook: <a>auth-service › SSO failures</a></td></tr><tr><td><b>INC-5109</b> <code class="ch y">SEV3</code><span class="sub">search-indexer lag 41 min, Wed 16:40–18:05</span></td><td class="st"><code class="ch y">Monitoring</code></td><td>v4.12.0 mapping change forced a full reindex; 6 consumers could not keep up. Scaled to 12 by hand.</td><td class="wt1">Consumers still pinned at 12 (PLAT-3388 makes it autoscale). If the lag alert fires, do not scale down.</td></tr><tr><td><b>INC-5102</b> <code class="ch r">SEV2</code><span class="sub">payments-api p99 3.4 s, Tue 02:14–03:01</span></td><td class="st"><code class="ch g">Resolved</code></td><td>Primary acquirer degraded; failed over to secondary at 02:31.</td><td class="wt2">Failover becomes automatic with v7.4.0, Mon 15:00. Acquirer maintenance Wed 3 Sep 01:00.</td></tr><tr><td><b>INC-5113</b> <code class="ch y">SEV3</code><span class="sub">notifications-worker queue 64k, Thu 11:20–11:52</span></td><td class="st"><code class="ch g">Resolved</code></td><td>Expired APNs certificate; rotated 11:41, queue drained. Nothing dropped.</td><td class="wt3">Cert expiry now alerts 14 days ahead (PLAT-3390).</td></tr></tbody></table>

## CS escalations 3

<table class="esc grp"><thead><tr><th style="width:148px">Item</th><th style="width:98px">Status</th><th>Cause</th><th>Watch</th></tr></thead><tbody><tr><td><b>ESC-2244</b> <span class="sub">Northbeam, Askeland, Brisa Retail, Fri 14:20</span></td><td class="st"><code class="ch y">Monitoring</code></td><td>INC-5118. All three signing in after the rollback.</td><td class="wtundefined">RCA promised by Wed 3 Sep; draft is in Incidents/2026-08-28-auth-sso.</td></tr><tr><td><b>ESC-2231</b> <span class="sub">Corland Health, Tue 09:40</span></td><td class="st"><code class="ch g">Resolved</code></td><td>14 duplicate captures during the INC-5102 failover; 14 refunds issued Wed.</td><td class="wtundefined">Finance reconciled Thu; closed.</td></tr><tr><td><b>ESC-2237</b> <span class="sub">Tidegate Marketplace, Wed 17:25</span></td><td class="st"><code class="ch g">Resolved</code></td><td>INC-5109; listings indexed once lag cleared at 18:05.</td><td class="wtundefined">—</td></tr></tbody></table>

## Carried from last week 1, kept per your answer

<table class="grp"><thead><tr><th style="width:148px">Item</th><th style="width:98px">Status</th><th>Cause</th><th>Watch</th></tr></thead><tbody><tr><td><b>INC-5087</b> <span class="sub">Webhook delivery delays</span></td><td class="st"><code class="ch y">Monitoring</code></td><td>No pages or escalations this week. Kept per Tomás: permanent fix webhooks-dispatcher v2.6.0 ships Tue 2 Sep.</td><td class="wtundefined">Close it next week if v2.6.0 ships clean.</td></tr></tbody></table>

## Production deploys 16

- `14 clean`
- `1 caused an incident` search-indexer v4.12.0, Wed 15:55 → INC-5109, stayed
- `1 rolled back` auth-service v2.31.0, Fri 13:58 → 14:24

**Coming Monday:** payments-api v7.4.0 at 15:00 UTC makes acquirer failover automatic; watch p99 for 30 min after.

## Noisy alert to tune

“Disk usage > 80% on kafka-broker-3” paged 5 times (Mon, Tue, Thu, Sat, Sun) and self-resolved within 10 min each time when log compaction ran; no action taken. Proposal in PLAT-3391: alert at 88% or on growth rate.

## Monday checklist for Aisha

- `Mon 15:00`payments-api v7.4.0 deploy; watch p99 for 30 min
- `before Tue`Confirm PR #2287 has merged before the release train, or pull v2.31.0 from it
- `Wed 01:00`Acquirer maintenance window
- `Wed`RCA due to Northbeam, Askeland and Brisa Retail (draft in Incidents/2026-08-28-auth-sso)

Each item has a status, so open ones are read first.

**handoff-2026-W35**MD

# Platform on-call handoff · week 35

<table class="keyv"><tbody><tr><td>Rotation</td><td>24–31 Aug 2026 · Tomás Reyes → Aisha Bello, pager from Mon 31 Aug 09:00 UTC</td></tr><tr><td>Sources</td><td>PagerDuty (11 pages), #support-escalations + 4 incident channels, GitHub deploys (16), handoff-2026-W34.md</td></tr></tbody></table>

**8 items**`1 still open``3 monitoring``4 resolved`11 pages: 4 needed action (3 h 10 min), 7 self-resolved, 3 overnight · 16 deploys, 1 rolled back · 1 alert to tune

## Incidents 4, open first

<table class="inc grp"><thead><tr><th style="width:148px">Item</th><th style="width:98px">Status</th><th>Cause</th><th>Watch</th></tr></thead><tbody><tr><td><b>INC-5118</b> <code class="ch r">SEV2</code><span class="sub">auth-service login errors, Fri 14:05–14:31</span></td><td class="st"><code class="ch r">Still open</code></td><td>v2.31.0 cut SAML clock-skew tolerance from 180 s to 30 s; three enterprise SSO tenants looped. Rolled back 14:24.</td><td class="wt0">v2.31.0 is blocked in the release train until fix-forward PR #2287 merges. Do not let Tuesday’s train redeploy it. Runbook: <a>auth-service › SSO failures</a></td></tr><tr><td><b>INC-5109</b> <code class="ch y">SEV3</code><span class="sub">search-indexer lag 41 min, Wed 16:40–18:05</span></td><td class="st"><code class="ch y">Monitoring</code></td><td>v4.12.0 mapping change forced a full reindex; 6 consumers could not keep up. Scaled to 12 by hand.</td><td class="wt1">Consumers still pinned at 12 (PLAT-3388 makes it autoscale). If the lag alert fires, do not scale down.</td></tr><tr><td><b>INC-5102</b> <code class="ch r">SEV2</code><span class="sub">payments-api p99 3.4 s, Tue 02:14–03:01</span></td><td class="st"><code class="ch g">Resolved</code></td><td>Primary acquirer degraded; failed over to secondary at 02:31.</td><td class="wt2">Failover becomes automatic with v7.4.0, Mon 15:00. Acquirer maintenance Wed 3 Sep 01:00.</td></tr><tr><td><b>INC-5113</b> <code class="ch y">SEV3</code><span class="sub">notifications-worker queue 64k, Thu 11:20–11:52</span></td><td class="st"><code class="ch g">Resolved</code></td><td>Expired APNs certificate; rotated 11:41, queue drained. Nothing dropped.</td><td class="wt3">Cert expiry now alerts 14 days ahead (PLAT-3390).</td></tr></tbody></table>

## CS escalations 3

<table class="esc grp"><thead><tr><th style="width:148px">Item</th><th style="width:98px">Status</th><th>Cause</th><th>Watch</th></tr></thead><tbody><tr><td><b>ESC-2244</b> <span class="sub">Northbeam, Askeland, Brisa Retail, Fri 14:20</span></td><td class="st"><code class="ch y">Monitoring</code></td><td>INC-5118. All three signing in after the rollback.</td><td class="wtundefined">RCA promised by Wed 3 Sep; draft is in Incidents/2026-08-28-auth-sso.</td></tr><tr><td><b>ESC-2231</b> <span class="sub">Corland Health, Tue 09:40</span></td><td class="st"><code class="ch g">Resolved</code></td><td>14 duplicate captures during the INC-5102 failover; 14 refunds issued Wed.</td><td class="wtundefined">Finance reconciled Thu; closed.</td></tr><tr><td><b>ESC-2237</b> <span class="sub">Tidegate Marketplace, Wed 17:25</span></td><td class="st"><code class="ch g">Resolved</code></td><td>INC-5109; listings indexed once lag cleared at 18:05.</td><td class="wtundefined">—</td></tr></tbody></table>

## Carried from last week 1, kept per your answer

<table class="grp"><thead><tr><th style="width:148px">Item</th><th style="width:98px">Status</th><th>Cause</th><th>Watch</th></tr></thead><tbody><tr><td><b>INC-5087</b> <span class="sub">Webhook delivery delays</span></td><td class="st"><code class="ch y">Monitoring</code></td><td>No pages or escalations this week. Kept per Tomás: permanent fix webhooks-dispatcher v2.6.0 ships Tue 2 Sep.</td><td class="wtundefined">Close it next week if v2.6.0 ships clean.</td></tr></tbody></table>

## Production deploys 16

- `14 clean`
- `1 caused an incident` search-indexer v4.12.0, Wed 15:55 → INC-5109, stayed
- `1 rolled back` auth-service v2.31.0, Fri 13:58 → 14:24

**Coming Monday:** payments-api v7.4.0 at 15:00 UTC makes acquirer failover automatic; watch p99 for 30 min after.

## Noisy alert to tune

“Disk usage > 80% on kafka-broker-3” paged 5 times (Mon, Tue, Thu, Sat, Sun) and self-resolved within 10 min each time when log compaction ran; no action taken. Proposal in PLAT-3391: alert at 88% or on growth rate.

## Monday checklist for Aisha

- `Mon 15:00`payments-api v7.4.0 deploy; watch p99 for 30 min
- `before Tue`Confirm PR #2287 has merged before the release train, or pull v2.31.0 from it
- `Wed 01:00`Acquirer maintenance window
- `Wed`RCA due to Northbeam, Askeland and Brisa Retail (draft in Incidents/2026-08-28-auth-sso)

Claude wants to use **Send message** from Slack

To **#oncall**

Week 35 handoff → Platform/Oncall/2026-W35/handoff-2026-W35.md: 1 still open (auth-service v2.31.0, blocked until PR #2287 merges; keep it off Tuesday’s train), 3 monitoring. @Aisha Bello has the pager from 09:00.

Allow onceAlways allowDeny

Posted in #oncall

**Weekly on-call handoff**Mondays at 9:00 AM

Each run

Writes the handoff from the week’s pages, escalations and deploys

Saves it to the on-call folder

Prepares the channel post*for you to approve*

Claude Academy

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)



0:03 / 0:561×

Illustration. Product screens are simplified.

Write the on-call handoff

Your on-call shift is ending and the next person needs to know what happened.

With the Engineering plugin’s standup skill, ask what’s resolved, what’s open and what to watch.

Claude reads last week’s brief first, then the week’s pages, escalations and deploys.

When something is yours to decide, Claude stops and asks.

You get the brief and a draft post, with what Claude found first.

Each item has a status, so open ones are read first.

Anything still open says what to watch and links the fix.

Claude posts only after you approve, and you can schedule the brief for every rotation change.

The next person on call starts knowing what is still open.

Write the on-call handoff for my shift: pages, #support-escalations and prod deploys from the last 7 days. For each item note status (resolved, monitoring, still open), a one-line cause, and what the next on-call should watch. Post it to #oncall. What does the next on-call need to know?

Are the webhook delivery delays fixed, or still being watched? Fixed, mark it resolved / Still watching it

I read 11 pages, four incident channels, 16 deploys and last week’s brief, and wrote the week 35 handoff: 8 items, 1 still open, 3 monitoring, 4 resolved. The open item is auth-service v2.31.0 until #2287 merges, and the #oncall post is ready for you to approve.

handoff-2026-W35.md

Skill: /standup (Engineering)

Connectors: PagerDuty, Slack, GitHub

## Set up[](https://academy.claude.com/use-cases/oncall-handoff-brief)

### Try a plugin[](https://academy.claude.com/use-cases/oncall-handoff-brief)

The Engineering plugin ships with `/standup` and other incident-and-ops skills as a starting point, already structured to summarize a shift from the alert stream. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



EngineeringStreamline engineering workflows — standups, code review, architecture decisions, incident response, and technical documentation. Works with your existing tools or standalone.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=engineering)

`/standup`Generate a standup update from recent activity.

[Run](claude://cowork/new?q=%2Fstandup)

`/incident-response`Run an incident response workflow — triage, communicate, and write postmortem.

[Run](claude://cowork/new?q=%2Fincident-response)

Show all 10 skills

### Connect your tools[](https://academy.claude.com/use-cases/oncall-handoff-brief)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)

PagerDuty

Pull every page from your shift with ack time, resolution, and the alert that fired.

[Connect](https://claude.ai/desktop/directory/pagerduty)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

Read the incident channels and #support-escalations for what CS raised during the week.

[Connect](https://claude.ai/desktop/directory/slack)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHubOptional

List every production deploy that shipped during your shift, with the change summary.

[Connect](https://claude.ai/desktop/directory/github)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/oncall-handoff-brief)

Drag the files you'll use (your handoff template, last week's brief, the runbook index) into one folder and point Cowork at it. Cowork reads the template from there and writes the brief and the watch-list back to it. [Create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from your on-call folder so the template, channel list, and severity definitions stay attached every rotation.

Platform / Oncall / 2026-W17

handoff-template.mdJan 12, 20262 KB

handoff-2026-W16.mdApr 20, 20266 KB

runbook-index.mdMar 30, 202611 KB

In Cowork’s chat bar:Platform / Oncall / 2026-W17

## The prompt[](https://academy.claude.com/use-cases/oncall-handoff-brief)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/oncall-handoff-brief)

Write the on-call handoff for my shift. Cover pages and incident channels from the last 7 days, CS escalations from #support-escalations, and production deploys. For each, note status (resolved, monitoring, still open), the one-line cause if known, and what the next on-call should watch. Write it to the on-call folder and post it to #oncall.



Platform / Oncall / 2026-W17Open in Cowork

### Why this works[](https://academy.claude.com/use-cases/oncall-handoff-brief)

Prompt

**Name every source you need.** Pages, CS escalations, and deploys are the three things that wake the next person up; naming all three means nothing falls between systems.

Prompt

**Specify the fields for each item.** That triplet is exactly what the next shift needs to triage at 2am; the brief comes back already shaped that way.

Prompt

**Say where the output should go.** The doc is saved to the folder for the record and in #oncall so the next engineer actually sees it.

Source

**Include the previous version for context.** Anything you marked "monitoring" last rotation carries forward instead of getting dropped.

### Get a better draft[](https://academy.claude.com/use-cases/oncall-handoff-brief)

Practice

**Ask for the noisy alerts.** Add "list any alert that fired more than 3 times so we can tune it" and the handoff doubles as the alert-hygiene backlog.

Practice

**Ask it to link runbooks.** Add "for anything still open, link the relevant runbook" so the next on-call has the fix one click away.

## Make Cowork work for you[](https://academy.claude.com/use-cases/oncall-handoff-brief)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /standup skill with my feedback.



Platform / OncallOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/oncall-handoff-brief)

### Run it at rotation change[](https://academy.claude.com/use-cases/oncall-handoff-brief)

Handoff happens the same hour every week. Type `/schedule` in the prompt, or open **Scheduled** in the Cowork sidebar, and the customized skill writes the brief at the end of every rotation, whether you remembered or not.

**/schedule** Every Monday at 9am, run /standup over the prior 7 days of pages, #support-escalations, and prod deploys, write the handoff to Platform/Oncall/<week>.md, and post it to #oncall.



Platform / OncallOpen in Cowork

Scheduled taskActive

Weekly on-call handoff

Runs `/standup` over the week's pages, CS escalations, and deploys, writes the brief to the on-call folder, and posts it to #oncall.

Every **Mondays at 9:00am**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/oncall-handoff-brief)

Your customized `/standup` now carries your channel list, your status labels, and your team's handoff template. Share it so every engineer in the rotation produces the same brief, and nobody starts a shift blind because the last person was too tired to write it up.



Share the skill

In Cowork, open **Skills** → `/standup` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your instructions baked in, they don't repeat Steps 1-3.

## What changes for the rotation[](https://academy.claude.com/use-cases/oncall-handoff-brief)

The handoff is written and posted with each item's status, cause, and what to watch — the next engineer starts informed instead of searching channels for context.

You did this for one rotation. The same approach covers incident postmortems, release summaries, and the weekly ops review — each one a skill in your team's plugin, run the same way every time.

[Next: Draft the incident postmortem](https://academy.claude.com/use-cases/incident-postmortem)

Was this helpful?
