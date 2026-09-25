Lesson 3 of 11 · Introduction to Claude TagClaude in a public channel

# Claude in a public channel

Lesson 315 min

In this lessonBy the end, you’ll be able to

- Describe how colleagues build on work in a public channel
- Explain how what Claude learns in a public channel is shared with everyone in it
- Have Claude use one connected tool and check the result

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-claude-tag%2Fclaude-in-a-public-channel)

If you want Claude to use your team's tools, on work others can see, correct, and continue, ask Claude in a public channel. What Claude learns there helps everyone in the channel, so when more than one place would do, choose this one.

## What you can do in a public channel[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

In a public channel, Claude has access to your team's tools and can be shaped by anyone there, through that channel's instructions and corrections.

A few key things change from a DM:

Reference list: what changes when Claude works in a public channel rather than a DM, in three groups: how colleagues work with it together, which team tools and personal connectors it can use, and what it keeps in channel notes and workspace notes.

### Collaboration: who is in the work

- In a public channel, **colleagues can work together with Claude**. Tag Claude into an ongoing discussion and steer it together, or pick up where someone left off.
- In the same channel, **several people can work with Claude in parallel**. Each new thread is its own piece of work, so many can run at once.
- And **Claude does not have to wait for an @-mention**. With [untagged replies](https://claude.com/docs/claude-tag/users/when-claude-responds) on, Claude can be assigned a job in the channel and contribute on its own (lesson 7).

### Tool connections: what Claude can reach

- In channels, **Claude can reach your team’s tools**. On top of the channel’s history and discussions, Claude can read and work in the [tools connected to the channel](https://claude.com/docs/claude-tag/concepts/glossary), so a task can finish in the thread where it was asked.
- **Claude can also use your own connectors, for your requests**. When a request you make needs a connector from your own Claude account, Claude asks for permission to use your tools, then uses them under your name, only for your request. You can also have Claude show you each response before it posts to the channel.

### Memory: how Claude learns and improves

- In channels, **your team’s standards become Claude’s standards**. Claude keeps memory notes for each channel, called channel notes. Decisions and corrections Claude saves go there and improve Claude’s judgment in that channel’s later work.
- **What every channel should know goes in workspace notes**. From a public channel, Claude can also save a [workspace note](https://claude.com/docs/claude-tag/users/memory), such as an organization-wide naming rule. Claude can use workspace notes in every channel of the workspace, so Claude is designed to save there only what no channel would mind everyone in the workspace reading.

In the illustration below, pick a team to watch one piece of work run in its channel: the request, the tools Claude reaches, the artifacts it posts back, and the team steering it.

Film: pick a sales, marketing, or finance team and watch Claude take a request in that team's public channel, use the connected tools, post results, and take corrections and follow-up requests from colleagues, showing how a team steers shared work.

SalesMarketingFinance

An account team gets ready for a renewal call.

#acme-renewalPublic channel · CRM and warehouse connected

APT

Replay

A

AlexRenewal call with Acme is Thursday. Maria says their usage dipped.

P

PriyaQBR notes are in the thread above.

The team is already discussing it here

P

Priya@Claude prep us for Thursday: Acme’s account state and open items from the CRM, what changed since the QBR, and three questions we should ask.

One message hands Claude the whole job

ClaudeOn it.

- Read this channel’s Acme threads
- Pull the record and open itemsCRM
- Chart usage by team, last quarterWarehouse
- Post the brief here

It reads the channel and works in the team’s tools

ClaudeBrief posted. Renewal in 71 days; usage is down over three weeks, all in their data team; two open items. Three questions at the end.

Acme renewal call briefDocument · in this threadUsage by team, last quarterPNG

Data

Ops

Finance

Back come a brief and a chart, not just a reply

A

AlexAdd that Jae replaced Maria as our champion, and keep this current until Thursday.

A colleague steers it; no new tag needed

ClaudeAdded. I’ll update the brief as this thread changes.

T

Tomás@Claude remember for this channel: every call brief ends with three questions to ask.

The team’s standard, saved to [the channel’s notes](https://claude.com/docs/claude-tag/users/memory) for every brief here

ClaudeSaved to this channel’s notes.

Replay

## What Claude can use in a public channel[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

On top of what it can do anywhere ([lesson 1(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/tag-claude-and-see-what-happens)), Claude can see this channel's full history, including messages from before Claude was added, and use any tools connected to this channel. [Whoever sets Claude Tag up(opens in new tab)](https://claude.com/docs/claude-tag/admins/attach-to-scope) decides which tools each channel is connected to, and those tools work the same for everyone who asks there. By default you do not need a Claude account to tag Claude in a channel; the work is covered by the organization.

### What connections add[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

A channel can be connected to tools your team already uses, like GitHub, Google Drive, your CRM, or the team calendar; [whoever manages Claude Tag for the channel(opens in new tab)](https://claude.com/docs/claude-tag/admins/add-connections) sets these up. These are called [connections(opens in new tab)](https://claude.com/docs/claude-tag/concepts/glossary). With them, Claude can move straight from the discussion to the work. With the right tools connected in a channel, Claude can:

- **Sales:** pull the account from the CRM before a call
- **Data:** run the warehouse query that answers the question in the thread
- **Support:** draft the reply on a support ticket
- **Engineering:** open the pull request for the fix the team just agreed on

In these tools Claude acts as itself, under its own account, with the access the channel was given. Connections open up a different set of use cases for each channel type and job function; the [use-case library(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases) has examples for each.

### Your own connectors, for your requests[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

Claude can also use the [personal connectors(opens in new tab)](https://claude.ai/customize/connectors) you have set up in your own Claude account, like your calendar, inbox, or issue tracker, when a request you make in the channel needs them, where it's available to your organization. Ask `@Claude add Thursday's launch review to my calendar` in the team channel, and it can do that for you.

In those tools Claude works under your name, the same as in a DM. Claude shows you a prompt that only you can see before it uses your personal connectors in a channel:

- **Allow:** Claude posts its responses directly. It first checks each response and holds any that look sensitive for you to review. The check can miss things.
- **Allow with review:** Claude shows you every response to approve before it posts.
- **Don't allow:** Claude does not use your connectors for this request.

On the Enterprise plan, an Owner of your Claude organization can remove one of the two Allow choices. What Claude posts back is visible to everyone in the channel, like any other reply.

Film: in a public channel, the user asks Claude to book a meeting and privately lets it use their calendar connector, then everyone sees a line saying whose connectors are in use, and Claude's reply. Personal connectors serve only their owner's requests.

#event-prepPriya’s screen

PML

Replay

P

Priya@Claude find 20 minutes tomorrow with Marcus and Lydia for the walkthrough prep and send the invite.👀1

Priya’s calendar is one of her own connectors, not a team connection

Only visible to you

Claude@Priya May I use your connectors to work on that request?

- I’ll use them as you, including making changes
- I’ll only act on messages you post
- With review, nothing your session says is posted until you approve it

AllowAllow with reviewDon’t allow

Only Priya sees this, and she decides

⌁**Using @Priya’s connectors.** Connectors will only be used for their owner’s requests.

After she allows it, everyone sees this line

ClaudeBooked **Walkthrough prep** for tomorrow, 10:30–10:50, with Marcus and Lydia. The invite went out from your calendar. Tell me if you want a different time.

Claude books it as Priya. Everyone sees the reply.

Replay

## Protecting your privacy and data[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

### Whose access Claude is using[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

In a channel, Claude works with one of two kinds of access. In the team's connections it has [its own account(opens in new tab)](https://claude.com/docs/claude-tag/concepts/agent-identity) and acts as itself, so the team can see who did what. In your connectors it acts under your name, and only for you.

- **In a team connection, Claude can do only what Claude's own account in that tool allows:** your admin sets up that account, and anything Claude does there appears under Claude's account, not your name.
- **Anyone in the channel can use a team connection with the level of access Claude's account is set to:** for example, if that account can make changes in your issue tracker, anyone here can ask Claude to update a ticket; if it can only read, Claude can look tickets up but not change them. [How channel access works(opens in new tab)](https://claude.com/docs/claude-tag/concepts/agent-identity) has more.
- **Your personal connectors serve only your requests:** Claude acts under your name in those tools, including making changes, and no one else in the thread can direct that work.
- **You can stop a task that is using your connectors:** select **Stop** under Claude's message saying it is going to use your connectors.
- **No reach into anyone else's private channels or DMs:** Claude cannot read them from here.



Check your own setup

Ask in the channel: `@Claude what can you access from here?` lists the tools connected to this channel.

Everyone in the channel sees the work, so restricted information belongs in a private channel ([lesson 4(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-private-channel)) and work only you should see in a DM ([lesson 2(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-dm)).

## Try it[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

### Have Claude fetch one real record

In your workspace, in the channel where your work happens · 10 minutes

1. Ask `@Claude what can you access from this channel?`
2. Pick one tool or data source from its list. If a tool you need is missing, ask whoever manages Claude Tag for the channel to connect it.
3. Have Claude fetch one real item from it. Change the underlined parts to match your channel, then copy it in:

   Exercise: the learner builds a message asking Claude to pull one real record from a tool connected to the channel and link each item to its source. It teaches asking for links so the result can be checked.

   Y

   @Claude using Tool in this channelthe connected CRMthe connected CRMthe connected ticketing toolthe connected data warehousethe connected project trackerthe connected drive, pull What to pullthe open opportunities and next steps forthe open opportunities and next steps forthe last five activities logged on Acme Logistics. Link each item to where it lives so I can check it.

   Underlined parts are yours to change.Copy message
4. Open that item at its source and compare: is Claude's version current, is anything missing that you can see there, and did it say where each figure came from? If something is off, say so in the thread and watch it correct itself.
5. If a colleague is around, you can also ask them to reply in the thread with one correction and watch Claude take it; that is the part a DM cannot do.

**Done when:** you've compared what Claude retrieved against the source, and told it about anything that didn't match.



The **Configure** link under any Claude reply [opens a page that lists this channel's connections(opens in new tab)](https://claude.com/docs/claude-tag/users/good-habits) too.

## Before you move on[](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-public-channel)

**Key takeaway:** in a channel the work is the team's: others steer it, the team's tools are in reach, and what Claude learns helps everyone in the channel.

**After practicing:** You will have had Claude fetch one real record from a connected tool and checked it against the source, and you will know what this channel can access.

Was this helpful?


## 
Marketing

#fall-campaignPublic channel · Warehouse and CRM connected

MPS

Replay

P

PriyaScheduling ships mid-October. We need the campaign brief this week.

S

SamProduct’s calls are in #product-launches; the tone rules PMM agreed are in #positioning.

The decisions are spread across channels

M

Maya@Claude draft the campaign brief from this thread. Use what product decided in #product-launches and the tone rules in #positioning, and include beta adoption by segment.

The discussion becomes the request

ClaudeOn it.

- Read this thread
- Search#product-launches · #positioning
- Beta adoption by segmentWarehouse
- Post the brief as a page

Searches public channels, queries the warehouse

ClaudeBrief is up: audience, message, channels, timeline. Adoption is strongest in mid-market. I’ll keep the page current; post corrections in this thread.

Fall campaign briefPage · kept current

SMB

Mid-market

Enterprise

A page the whole channel can open, [kept current](https://claude.com/docs/claude-tag/concepts/how-it-works)

P

PriyaAudience is workspace admins, not end users.

Corrections go in the thread

ClaudeUpdated the audience and the message sections.

Meanwhile · a new thread in #fall-campaign

S

Sam@Claude pull the mid-market accounts on the beta from the CRM into a send list.

A second job runs in parallel

Claude142 accounts, attached.

midmarket-beta-accounts.csvCSV · from the CRM

Replay


## 
Finance

#financePublic channel · Warehouse connected

MJA

Replay

M

MarcusBudget review is Thursday. I need August before then.

J

JordanAugust invoice is in. Compute is well above July.

A question is forming before Thursday’s review

M

Marcus@Claude why did cloud spend jump last month? Post a chart and the two biggest drivers.

Ask for the answer and the form you want

ClaudeOn it.

- Compare July and August in the billing exportWarehouse
- Post the chart here

Claude runs the query itself

ClaudeAugust is up 18% on July. Two drivers: data-pipeline compute and a storage retention change.

Cloud spend by monthPNGJulAug

A chart in the thread, not a paragraph

J

JordanThe retention change was planned. Show the trend without it.

A colleague refines it, still no tag

ClaudeWithout it: up 13%, all pipeline compute. Chart updated above.

M

Marcus@Claude turn this into a one-page note for Thursday, and post this chart here on the first Monday of each month.

The thread becomes a note, and a [routine](https://claude.com/docs/claude-tag/users/proactivity) (lesson 8)

ClaudeNote attached. Scheduled: the spend chart, first Monday of each month, in this channel.

August cloud spend noteDocument · in this threadMonthly spend chartRoutine · first Monday

Replay
