# Triage on-call alerts and diagnose incidents

With proactive replies on in the on-call channel, Claude Tag investigates each paging alert and posts what broke, why and a proposed fix, and the rollback waits for the on-call engineer's yes.

10 minEngineeringClaude Tag

![](https://academy.claude.com/assets/v1/thumbnail.light-frb5s2mr.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-imj2t5fx.png)

When an alert pages the on-call engineer, the first job is to find out whether it is real and what changed. The engineer reads dashboards, logs and recent deploys before deciding anything, sometimes from a phone at night.

Add Claude Tag to the on-call channel and connect monitoring, paging and the code host. With **[proactive replies(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds)** on, Claude picks up each paging alert that tags it, so no one on the team has to tag it. Give it the job and the runbook once as a **[standing responsibility(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)**, and it posts what broke, why and a proposed fix in the alert's thread. In the thread, **[anyone on the team can reply to correct it(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)**. Claude runs the rollback only after the on-call engineer approves it there. Then it opens the fix as a draft pull request.

## Set up[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

Checklist: a three-part setup guide for adding Claude to an on-call channel, covering where it works, which tools to connect, and which settings to enable. Checking items off is just a personal tracking aid and isn't saved.



**Ask in the right spot**

#

[The on-call channel(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)

The channel that receives the paging alerts. Post the instruction in the channel itself rather than in a thread, so it applies to every alert from then on.



**Give Claude the right tools**

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23632CA6'%20d='m20.43%2017.56-1.86-1.24-1.6%202.63-1.85-.53-1.73%202.7.07.71%208.92-1.63-.52-6.45zm-6.33-3.64c.46-.06.86-.13%201.35-.42.08-.32.1-.83-.04-1.43-.21-.87-.5-1.4-1.1-1.31-.6.1-.63.84-.42%201.71.12.5.33.98.54%201.28zm-2.54.4c.45-.08.96-.43%201.12-.64-.12-.18-.33-.54-.42-1.04-.32-.05-.6-.01-.92.19-.43.26-.77.86-.67%201.28.24.24.53.28.89.21zm-1.87.92c.18-.32.13-.86-.14-1.28-.19.02-.38.07-.57.18-.42.24-.86.77-.73%201.24.35.19.98.2%201.44-.14zm12.63%206.24-1.06-13.1L1.68.13.07%2019.05l8.6%201.24%201.55-2.42c-.85-.56-1.38-1.4-1.62-2.06-.42-1.14-.07-2.45.86-3.13.24-.18.5-.3.77-.37-.07-.43-.01-.93.24-1.37.42-.73%201.2-1.12%202-1.06.06-.58.36-1.13.9-1.46.86-.53%201.98-.33%202.63.44.35-.06.73-.02%201.12.14%201.21.5%201.6%201.88%201.39%202.96.5.36.86.86%201.02%201.45.33%201.21-.24%202.5-1.32%203.07l-1.37%202.25%201.84.53%201.58-2.6%202.44%201.63.63-.07zm-14.2-9.95c.14-.65.86-1.02%201.14-1.18-.33-.56-.5-1.28-.42-1.84.14-.93.93-1.5%201.63-1.43-.14-.5-.14-1.07.06-1.6.36-.93%201.32-1.36%202.14-1%20.03-.5.24-1%20.65-1.36.77-.7%201.93-.6%202.6.2.38-.2.84-.24%201.28-.07.86.33%201.28%201.32.93%202.2.43.2.77.6.93%201.1.3.93-.2%201.93-1.1%202.27.1.45.04.93-.2%201.35-.18.32-.43.55-.71.7.28.59.37%201.27.2%201.93l.5.35c.31-.55.85-.93%201.5-.98a8.53%208.53%200%200%201-.06-2.24c.2-1.84%201.36-2.56%202.35-2.45.43.05.77.24%201.02.5l.23-2.85L3.07%201.7%201.73%2017.56l5.77.83c-.12-.5-.12-1.02.04-1.5-.86-.42-1.5-1.32-1.5-2.4a2.6%202.6%200%200%201%201.28-2.24c-.24-.43-.33-.93-.2-1.43z'/%3e%3c/svg%3e)

Datadog, Grafana or Sentry, with PagerDutyRequired

Connected to the channel, so Claude can read dashboards, logs and alert state.

Include `@Claude` in the alert integration's message template so each alert reaches Claude without anyone tagging it. If it can't, a person tags Claude in the alert's thread.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHubRequired

Connected with the services' repositories, so Claude can read recent deploys and open the fix as a draft pull request.



Deploy or feature-flag toolOptional

If connected, Claude can run the runbook's rollback step when the on-call engineer approves. Without it, Claude writes the step out for a person to run.



**Make sure Claude has the right settings**

[Respond automatically(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds) is on

Claude then acts on alerts without an @-mention from a person.



**Make sure Claude is in the channel:** `/invite @Claude`.

**Check what tools are connected:** `@Claude what can you access from this channel?`

For help, ask your admin or visit our [troubleshooting docs(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting).

## What to ask Claude, and what it does[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

Send this once, as a new message in your on-call channel. Claude saves it for the channel and investigates each paging alert that tags it after that. In your own message, say who to mention when something breaks and that Claude waits for a person's approval before a rollback, and link your runbook and owner list if they are not already in the channel.

The alert integration posted the two alerts below one Tuesday morning. Nobody on the team tagged Claude. It replied in the checkout alert's thread and covered both:

Film: a replay of an on-call channel where Claude investigates paging alerts it was tagged on automatically, works through a visible plan, then replies distinguishing a benign warning from a real incident and proposing a fix, pausing for the on-call engineer's approval before any rollback.

#on-callWYReplay

Y

Yousent once, last weekCopy

@Claude remember for this channel: investigate paging alerts. On an incident, post what broke, why, and a proposed fix, and mention whoever is on call. Don't roll anything back until whoever is on call says yes.

Tuesday 6:52 AM

W

Watchline6:50 AM[Warning] batch-worker-3 disk usage 82% · WL-7730 · not paging · @Claude

W

Watchline6:52 AM[Triggered] checkout-api p95 latency above 2s · p95 4.1s (threshold 2s) · error rate 2.4% and climbing · since 6:49 · paging @Sana · @Claude

👀1

ClaudeApp

✱Read the alert, the dashboards and the last hour of deploys

○Say whether each alert needs action and who owns it

○Trace the cause and match it to the runbook

○Post what broke, why and the proposed fix in the alert's thread

todos as of just now

ClaudeApp

Two alerts since 6:50, and one needs action. The batch-worker-3 disk warning is the nightly compaction. It has peaked near 82% every night this week and clears by 7:30, so there is nothing to do. batch-worker-3 disk, 7 days

Checkout latency is real. p95 on checkout-api went from 0.4s to 4.1s at 6:49, and the error rate is 2.4% and rising. checkout-api latency Payments owns this service, with Dev as the listed owner. Sana is on call and was paged at 6:52.

**What broke:** checkout calls to tax-service are timing out, and six in ten checkout errors since 6:49 trace to those timeouts. checkout error logs

**Why:** the 6:41 deploy of tax-service v3.12 halved its connection pool from 40 to 20, so requests queue for a connection under morning traffic. It is the only production change in the hour before the alert. tax-service v3.12, pool.ts

**Proposed fix:** roll tax-service back to v3.11. That is step 2 of the checkout runbook and needs no checkout-api deploy. checkout runbook, step 2 @Sana, your call. Say yes here and I'll run the rollback step through the deploy connection.

This is an illustrative example of what Claude Tag can do.

The alert integration includes @Claude in each alert. With Respond automatically on, Claude replied without a person tagging it. It mentioned Sana because the instruction says to mention whoever is on call.

Before approving, open the linked pull request and the latency dashboard and check that the deploy came before the latency rise.

## Follow ups[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

### Approve the rollback from the thread[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

Anyone in the alert's thread can answer or correct Claude there ([reply in the thread to steer(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)). When the on-call engineer approves, Claude runs the runbook's rollback step through the channel's deploy connection and confirms the recovery. Later it posts the fix as a draft pull request with an incident summary page.

Simulation: a chat message in an on-call channel or thread showing a person's prompt to Claude and, sometimes, Claude's reply, illustrating how people request standing monitoring, approve actions, or ask for recurring reports.

#on-callWSY

S

Sana

Matches the dashboard. @Claude roll it back, I'm five minutes from a laptop.

ClaudeApp7:05 AM · updated 7:40 AM

Rolled back to v3.11 at 7:05. p95 is under 600ms again and errors are falling; I'll confirm once it holds for 15 minutes. checkout-api latency

7:40 update: it has held since 7:06, so you can close INC-240 in PagerDuty when you are ready. I opened a draft PR that restores the pool size. It also adds a load test on connection wait, so a pool change like this fails CI next time. #377 The incident summary for the 9:00 review is below. Dev, the PR is yours to review as the service owner, and it stays a draft until you do.



Rolled tax-service back to v3.11

in the connected deploy tool · runbook step 2 · on Sana's yes



#377 · Restore tax-service pool size; add connection-wait load testDraft

fernwood/tax-service · opened by Claude · CI green · linked to this thread



INC-240 · incident summary

posted in this thread at 7:40 · anyone in the channel can open it

- Timeline: 6:41 deploy, 6:49 latency, 7:05 rollback, 7:06 recovered
- Cause: connection pool halved in tax-service v3.12
- Fix: draft PR #377, owner Dev, in review

### Check the alerting dashboard on a schedule[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

A [routine(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity) can compare the alerting dashboard with its state at the last check and post the same investigation for anything new. That way, a problem that builds slowly and pages nobody is still investigated. It posts only when something changed.

Simulation: a chat message in an on-call channel or thread showing a person's prompt to Claude and, sometimes, Claude's reply, illustrating how people request standing monitoring, approve actions, or ask for recurring reports.

#on-callY

Y

YouCopy

@Claude every two hours, check the alerting dashboard against its last state. For anything new, post when it started, what changed around then, and what to look at first.

### Post the on-call handoff every Monday[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

Claude can post the handoff for the incoming on-call engineer as a [scheduled routine(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity). It builds the handoff from the week's alert threads in this channel, so the next person starts with what happened and what is still open. Keep a time zone in the message.

Simulation: a chat message in an on-call channel or thread showing a person's prompt to Claude and, sometimes, Claude's reply, illustrating how people request standing monitoring, approve actions, or ask for recurring reports.

#on-callY

Y

YouCopy

@Claude every Monday at 9am Eastern, post the on-call handoff: this week's alerts from this channel, what was resolved, and what is still open.

### Ask Claude which routines are set up in this channel[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

Claude lists a channel's routines when asked, and anyone in the channel can change or disable one by naming it ([manage standing work(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)).

Simulation: a chat message in an on-call channel or thread showing a person's prompt to Claude and, sometimes, Claude's reply, illustrating how people request standing monitoring, approve actions, or ask for recurring reports.

#on-callY

Y

YouCopy

@Claude what routines do you have set up in this channel?

## Tips[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

### Tailor Claude's proactive replies in high-volume channels[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

With proactive replies on, Claude looks at every new post in the channel. That suits a channel where each new message is an alert someone would investigate anyway. It still works in noisier threads like a busy feed of warnings or deploy notices. In this case, specify to Claude in a message which types of posts it should look into and which to ignore.

### Decide what Claude is allowed to change[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

What Claude can do in a channel's tool connection depends on the access and permissions your admin gives it there. In this channel that decides whether Claude runs the rollback step itself or writes it out for a person to run.

## Related resources[](https://academy.claude.com/use-cases/triage-on-call-alerts-and-diagnose-incidents)

- Learn more in the [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.
- [Get started with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/users/getting-started): add @Claude to a channel and see what it can read there.
- [Watch monitors and alerts(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/watch-monitors): the Claude Tag docs on watching monitors and alerts.
- [Claude on call: How Claude Tag serves as Anthropic's first responder for CI/CD failures(opens in new tab)](https://claude.com/blog/ai-ci-cd-on-call): how Anthropic's engineering team runs this in its CI on-call channel.

Was this helpful?
