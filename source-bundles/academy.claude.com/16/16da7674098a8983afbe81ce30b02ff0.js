var e=`---
kind: widget-copy
---

{/* Hero demo film for the “On-call handoff brief” use case. Scene text is
    typed on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    release tags, and bold lead-ins — keep them where the sentence needs
    them. */}

<Copy k="title">On-call handoff brief</Copy>
<Copy k="subtitle">
  Reads your pages, incident channels, and deploys, writes the handoff and
  posts it to the channel.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the on-call folder and describe the handoff you need.
</Copy>
<Copy k="menu.category">Engineering</Copy>
<Copy k="prompt">
  Write the on-call handoff for my shift. Cover pages, incident channels, CS
  escalations, and prod deploys from the last 7 days. Note status and what
  to watch, then post to #oncall.
</Copy>

<Copy k="scene2.title">Cowork reads your shift</Copy>
<Copy k="scene2.sub">
  The skill pulls pages, escalations, and deploys, and the Progress card
  tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Working on on-call handoff</Copy>
<Copy k="step1">Reading PagerDuty — pages last 7 days</Copy>
<Copy k="step2">Reading Slack — #support-escalations</Copy>
<Copy k="step3">Reading GitHub — production deploys</Copy>
<Copy k="step4">Reading handoff-template.md</Copy>
<Copy k="step5">Writing handoff-2026-W17.md</Copy>
<Copy k="step6">Posting to #oncall</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull pages and incidents</Copy>
<Copy k="prog2">Read escalations and deploys</Copy>
<Copy k="prog3">Match to the template</Copy>
<Copy k="prog4">Write the handoff brief</Copy>
<Copy k="prog5">Post to #oncall</Copy>

<Copy k="scene3.title">The brief the next shift reads</Copy>
<Copy k="scene3.sub">
  Every page, escalation, and deploy with status and a watch-this note,
  written to the folder and posted.
</Copy>
<Copy k="brief1">
  {lead} — Resolved. Bad config push Tue 14:02, rolled back in 11 minutes.
  Watch: error rate stayed slightly elevated through Wednesday.
</Copy>
<Copy k="brief1.lead">INC-4821 · API gateway 5xx spike</Copy>
<Copy k="brief2">
  {lead} — Monitoring. Queue depth has been normal since Thursday, but two
  enterprise accounts are still tracking it in #support-escalations.
</Copy>
<Copy k="brief2.lead">CS-1203 · Webhook delivery delays</Copy>
<Copy k="brief3">
  {lead} — 14 to production this week. Flagging {rollback} (the rollback)
  and {billing}, which touches the invoice-retry path.
</Copy>
<Copy k="brief3.lead">Deploys</Copy>
<Copy k="chip.name">On-call handoff — Week 17</Copy>
<Copy k="chip.meta">Document · MD · 6 KB</Copy>

<Copy k="scene4.title">Make it run every rotation</Copy>
<Copy k="scene4.sub">
  Customize the channel list once, then schedule it — the handoff posts the
  same hour every week.
</Copy>
<Copy k="sched.prompt">
  Every Monday at 9am, run {cmd} over the prior week and post the handoff to
  #oncall.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Weekly on-call handoff</Copy>
<Copy k="card.body">
  Runs {cmd} over the week’s pages, escalations, and deploys, writes the
  brief to the on-call folder, and posts it to #oncall.
</Copy>
<Copy k="card.when">{day} at 9:00am</Copy>
<Copy k="card.when.day">Mondays</Copy>

<Copy k="end">
  Every rotation, the handoff is in #oncall before you close your laptop.
</Copy>
`;export{e as default};