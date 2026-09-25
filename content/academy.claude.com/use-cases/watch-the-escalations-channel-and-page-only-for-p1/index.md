# Triage escalations automatically and alert a person only for a P1

Set up Claude Tag to triage escalations in your channel. It can set a severity, match it to earlier tickets, route it, draft a first response, and alert a person only for a P1.

10 minOperationsClaude Tag

![](https://academy.claude.com/assets/v1/thumbnail.light-f1s0xs3j.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-cb395e2p.png)

A support team no longer needs someone reading every post in the escalations channel to catch the urgent one. Claude Tag can assess and route a message the moment it arrives, and @-mention a person only for a P1.

With your ticketing tool connected, give Claude Tag that job as a **[standing responsibility(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)**. With **[proactive replies(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds)** on for the channel, Claude triages each escalation without being tagged. It matches the escalation to earlier tickets and tags the team that owns it. It also drafts a first response for an agent to send. Anyone in the channel can correct a severity or an owner, or change when Claude alerts a person.

## Set up[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

Checklist: a setup guide covering where Claude should watch, which ticketing and paging tools to connect, and which settings like proactive replies to enable, so Claude can triage escalations and alert a person only for a P1.



**Ask in the right spot**

#

[The escalations channel(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)

Public or private. Post the instruction in the channel itself rather than in a thread, so it applies to every escalation from then on.



**Give Claude the right tools**

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2303363D'%3e%3cpath%20d='M11%207.7v13.1H.2L11%207.7Z'/%3e%3cpath%20d='M11%203.2a5.4%205.4%200%200%201-10.8%200H11Z'/%3e%3cpath%20d='M13%2016.3V3.2h10.8L13%2016.3Z'/%3e%3cpath%20d='M13%2020.8a5.4%205.4%200%200%201%2010.8%200H13Z'/%3e%3c/g%3e%3c/svg%3e)

Zendesk, Intercom or Jira Service ManagementRequired

Connected to the channel with write access, so Claude can match new escalations to earlier tickets and merge duplicates. Your admin grants it per channel.

Include `@Claude` in the escalation integration's message template so each post reaches Claude without anyone tagging it. If it can't, a person tags Claude in the escalation's thread.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2306AC38'%20d='M4.05%2017.71h4.6V24h-4.6zM16.59.32C14.75.01%2013.45%200%2011.13%200H4.05v14.19h7.24c2.05%200%203.59-.13%204.95-.96%201.5-.9%202.71-2.77%202.71-5.55%200-2.98-1.39-5.01-2.36-5.85C15.89.93%2016.59.32%2016.59.32zm-4.66%2010.39H8.65V3.55h2.87c2.96%200%204.45%201.12%204.45%203.53%200%202.59-1.62%203.63-4.04%203.63z'/%3e%3c/svg%3e)

PagerDutyOptional

If connected, Claude can check a suspected P1 against open incidents.



**Make sure Claude has the right settings**

[Respond automatically(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds) is on

Claude then replies to escalations that don't tag it.



**Make sure Claude is in the channel:** `/invite @Claude`.

**Check what tools are connected:** `@Claude what can you access from this channel?`

For help, ask your admin or visit our [troubleshooting docs(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting).

## What to ask Claude, and what it does[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

Send this once in your escalations channel. From then on, Claude sets a severity and an owner on each new escalation, in its thread, whether or not anyone tags it. Say that only a P1 should mention a person, and add your severity levels, owners and P1 contact if the channel's history does not already show them.

Here are Claude's replies to four escalations posted one Tuesday, shown together. Each went in its own escalation's thread:

Film: from a standing instruction, Claude triages escalations in a support channel, setting severities, matching and merging tickets, tagging an owning team and drafting replies for an agent to send, and mentions the on-call lead only for a P1.

#support-escalationsZYReplay

Y

Yousent once, last weekCopy

@Claude remember for this channel: classify each escalation by severity, match it against prior tickets and merge duplicates into the open ticket, tag the owning team, and page a person only if it is a P1.

Tuesday

Z

Zendesk10:12ESC-4471 · Ridgeway Partners · order exports arriving empty · @Claude

Z

Zendesk11:30ESC-4472 · Calder Foods · cannot add users · @Claude

Z

Zendesk13:15ESC-4473 · Whitlock Group · SSO group sync failing · @Claude

Z

Zendesk14:02ESC-4474 · Harlow Retail · order submission failing (ESC-4475 and ESC-4476, two more customers, followed at 14:08 and 14:13) · @Claude

👀1

ClaudeApp

✱Read each new escalation

○Match it against prior tickets and set a severity

○Tag the owning team, or page a person for a P1

○Post the triage in each escalation's thread

todos as of just now

ClaudeApp

**ESC-4471, Ridgeway Partners, "order exports arriving empty".**

P3. This matches ESC-4102 from March. Their export filter is set to a date range that has already closed. ESC-4102 The ticket stays open until the customer confirms. A draft reply for an agent is in that escalation's thread, and I have not sent it.

**ESC-4472, Calder Foods, "cannot add users".**

P3. The account is at its seat limit, so nothing is broken. ESC-4472 @account-team, this one is yours rather than engineering's, because the next step is a conversation about seats.

Show the other two escalations



Customer update, Whitlock Group (ESC-4473)Not sent

posted in the escalation's thread · an agent sends it from your support tool



Merged ESC-4473 into ESC-4388

in the connected ticketing tool · no new ticket opened



Linked ESC-4474, ESC-4475 and ESC-4476 to each other and to this thread

in the connected ticketing tool

This is an illustrative example of what Claude Tag can do.

Claude mentioned Zoe because three related reports made this a P1. It tagged the account team because the instruction says to tag the team that owns it. It merged and linked tickets in the support tool, and the drafted replies are for an agent to send.

Before an agent acts on one, open the ticket Claude matched and read the draft.

## Follow ups[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

### Correct a severity or owner, and have Claude remember it for the channel[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

Claude fixes a severity or owner from a reply in the thread, such as a reply that ESC-4472 is a P2 because the customer cannot onboard a new team. It remembers the correction for the channel when asked ([channel memory(opens in new tab)](https://claude.com/docs/claude-tag/users/memory)):

Simulation: one message to Claude in an escalations channel or thread. It teaches how people steer Claude's triage: having it remember a correction, limit when it mentions someone, summarize the queue, or reply only when tagged.

#support-escalationsY

Y

YouCopy

@Claude update your memory for this channel so this doesn't happen again.

### Tell Claude when to mention you[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

Claude mentions people only when your instructions say to. Whoever receives the P1 pages can reply under any of Claude's posts and ask to be mentioned only when a decision is needed ([decisions that come back to you(opens in new tab)](https://claude.com/docs/claude-tag/users/good-habits)). Zoe receives the P1 pages here, so she replies under one of Claude's posts:

Simulation: one message to Claude in an escalations channel or thread. It teaches how people steer Claude's triage: having it remember a correction, limit when it mentions someone, summarize the queue, or reply only when tagged.

#support-escalationsZY

Z

Zoe

@Claude remember for this channel: mention me only when a P1 needs a decision from me.

### Ask for the queue at any time[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

Claude can summarize what was posted over any period and which escalations still need a person. Replace "host-side" with the kind of escalation your team takes first.

Simulation: one message to Claude in an escalations channel or thread. It teaches how people steer Claude's triage: having it remember a correction, limit when it mentions someone, summarize the queue, or reply only when tagged.

#support-escalationsY

Y

YouCopy

@Claude what's in the escalation queue from overnight? Need the host-side ones flagged before standup.

### Have Claude reply only when tagged[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

With Respond automatically off, escalations reach Claude only when someone tags Claude in their thread, until anyone in the channel turns it back on ([quiet the whole channel(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds)).

Simulation: one message to Claude in an escalations channel or thread. It teaches how people steer Claude's triage: having it remember a correction, limit when it mentions someone, summarize the queue, or reply only when tagged.

#support-escalationsY

Y

YouCopy

@Claude only respond in this channel when someone @-mentions you directly.

## Tips[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

### Let Claude draft, and have a person send[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

Claude can write a customer reply but does not send it. Each draft waits in the escalation's thread until an agent reviews it and sends it from your support tool.

## Related resources[](https://academy.claude.com/use-cases/watch-the-escalations-channel-and-page-only-for-p1)

- Learn more in the [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.
- [Get started with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/users/getting-started): add @Claude to a channel and see what it can read there.
- [Triage requests(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/triage-requests): the Claude Tag docs page this use case is based on.

Was this helpful?
