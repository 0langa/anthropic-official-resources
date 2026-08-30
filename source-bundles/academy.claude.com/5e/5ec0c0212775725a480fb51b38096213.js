var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Slack and Teams message sweep” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, folder names, bucket pills, bold topics, and
    drafted replies — keep them where the sentence needs them. */}

<Copy k="title">Slack and Teams message sweep</Copy>
<Copy k="subtitle">
  Reads messages from Slack, Teams, and Gmail, groups by topic, and drafts
  replies.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Connect Slack, Teams, and Gmail, then describe the sweep you want.
</Copy>
<Copy k="menu.category">Productivity</Copy>
<Copy k="prompt">
  Sweep my unread Slack DMs and mentions, my Teams activity feed, and my
  Gmail inbox from the last 24 hours. Group everything by topic, not by app.
  For each topic, tell me whether it needs a reply from me, needs me to read
  it, or is just an FYI. Draft a reply for everything in the first bucket
  and keep each draft to three sentences or fewer.
</Copy>

<Copy k="scene2.title">Cowork reads every inbox</Copy>
<Copy k="scene2.sub">
  Connectors pull live unreads and the skill groups them across apps by
  topic.
</Copy>
<Copy k="work.heading">Running {cmd} across 3 connectors</Copy>
<Copy k="step1">Slack · read 11 unread DMs and @mentions</Copy>
<Copy k="step2">Microsoft Teams · pulled 7 items from activity feed</Copy>
<Copy k="step3">Gmail · scanned 23 inbox threads from last 24h</Copy>
<Copy k="step4">
  Comparing against participants and subject lines — grouping 41 messages
  into 6 topics, sorting reply / read / FYI.
</Copy>
<Copy k="step5">Slack · drafted 3 replies under three sentences</Copy>
<Copy k="step6">Created sweep-2026-04-27.md</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read unreads from each app</Copy>
<Copy k="prog2">Group by topic, not by app</Copy>
<Copy k="prog3">Sort reply / read / FYI</Copy>
<Copy k="prog4">Draft replies ≤ 3 sentences</Copy>
<Copy k="prog5">Save sweep to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">One list, sorted by what needs you</Copy>
<Copy k="scene3.sub">
  Topics span apps; replies are drafted and waiting for an edit-and-send.
</Copy>
<Copy k="bucket.reply">Needs reply</Copy>
<Copy k="bucket.read">Read</Copy>
<Copy k="bucket.fyi">FYI</Copy>
<Copy k="res1">
  {bucket}{topic} — Priya in #finance-ops, Dan over email, same ask. {draft}
</Copy>
<Copy k="res1.topic">Q2 budget reforecast</Copy>
<Copy k="res1.draft">
  “Yes — reforecast goes to Ravi Thursday. I’ll fold the new headcount line
  in before then; flag anything else by EOD Wed.”
</Copy>
<Copy k="res2">
  {bucket}{topic} — Marcus DM’d in Slack, Elena pinged the same thread in
  Teams. {draft}
</Copy>
<Copy k="res2.topic">Northwind renewal timing</Copy>
<Copy k="res2.draft">
  “Legal has the redlines; we’re targeting signature by May 6. I’ll loop you
  both when the clean copy is back.”
</Copy>
<Copy k="res3">
  {bucket}{topic} — 6 messages in #team-offsite. Hotel block confirmed,
  agenda draft linked, no action for you yet.
</Copy>
<Copy k="res3.topic">June offsite logistics</Copy>
<Copy k="res4">
  {bucket}3 more topics — release notes, IT maintenance window, Kira’s PTO
  heads-up. Summarised in the file.
</Copy>
<Copy k="chip.name">Inbox sweep — Q2 reforecast, Northwind renewal</Copy>
<Copy k="chip.meta">Document · MD · 3 KB · saved to {folder}</Copy>

<Copy k="scene4.title">Have it waiting at 8am</Copy>
<Copy k="scene4.sub">
  Schedule the customized skill — the sweep arrives as a Slack DM before you
  open anything.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} every weekday at 8:00am against Slack, Teams, and Gmail and post
  the sweep to me as a Slack DM.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Morning message sweep</Copy>
<Copy k="card.body">
  Runs {cmd} against Slack, Teams, and Gmail and writes the topic-grouped
  list with drafts to you as a Slack DM.
</Copy>
<Copy k="card.when">Every {day} at {time}</Copy>
<Copy k="card.when.day">weekday</Copy>
<Copy k="card.when.time">8:00am</Copy>

<Copy k="end">
  Every morning, your unreads arrive sorted by topic with reply drafts
  already written.
</Copy>
`;export{e as default};