var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WhatChanges.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The simulated avatar initials
    live in the widget as data. */}

<Copy k="row.specialist.title">Claude can access all your team’s context</Copy>
<Copy k="row.specialist.lead">to start as a specialist in your work.</Copy>
<Copy k="row.specialist.visual">
  Threads, decisions, files and your team’s tools all flow into Claude
</Copy>
<Copy k="row.specialist.point1">
  Claude reads the channel history, files, and connected tools, so you don’t
  have to brief it with as much information.
</Copy>
<Copy k="row.specialist.point2">
  Claude learns from your context and feedback over time to get better at
  the job.
</Copy>
<Copy k="row.specialist.caption">Claude starts briefed from prior context</Copy>

<Copy k="chip.threads">every thread</Copy>
<Copy k="chip.decisions">decisions</Copy>
<Copy k="chip.files">files</Copy>
<Copy k="chip.tools">your team’s tools</Copy>

<Copy k="row.multiplayer.title">Claude becomes multiplayer,</Copy>
<Copy k="row.multiplayer.lead">
  with the whole team able to collaborate.
</Copy>
<Copy k="row.multiplayer.visual">
  You and two colleagues write into one thread; Claude works there, and each
  person’s reply steers what it does next
</Copy>
<Copy k="row.multiplayer.point1">
  Since Claude is working directly in the channel, anyone in the channel can
  add context or {link}.
</Copy>
<Copy k="row.multiplayer.point1.link">redirect the work</Copy>
<Copy k="row.multiplayer.point2">
  Anyone can pick up work where you left off, and new colleagues can start
  working with Claude immediately.
</Copy>
<Copy k="row.multiplayer.caption">
  your team works with Claude across the workspace, in parallel
</Copy>

<Copy k="row.unattended.title">
  Claude keeps working after you close your laptop
</Copy>
<Copy k="row.unattended.lead">and asks in the thread when it needs you.</Copy>
<Copy k="row.unattended.visual">
  A timeline: you hand Claude a task and log off; Claude keeps working, asks
  in the thread when it needs a decision, a colleague answers, and you pick
  it back up later
</Copy>
<Copy k="row.unattended.point1">
  It {link}, not on your device, so a task continues while you are away and
  you pick it up from any device.
</Copy>
<Copy k="row.unattended.point1.link">runs remotely</Copy>
<Copy k="row.unattended.point2">
  It posts progress in the thread and asks there when it needs a decision.
  That is what makes long tasks {tasks}, scheduled work {scheduled} and
  untagged replies {untagged} possible.
</Copy>
<Copy k="row.unattended.point2.tasks">(lesson 9)</Copy>
<Copy k="row.unattended.point2.scheduled">(lesson 8)</Copy>
<Copy k="row.unattended.point2.untagged">(lesson 7)</Copy>
<Copy k="row.unattended.caption">
  Claude keeps working on a task even when you’re offline
</Copy>

<Copy k="keeps.you">you</Copy>
<Copy k="keeps.claude">Claude</Copy>
<Copy k="keeps.teammate">teammate</Copy>
<Copy k="keeps.task">task</Copy>
<Copy k="keeps.away">away</Copy>
<Copy k="keeps.signoff">you sign off</Copy>
<Copy k="keeps.asks">asks a teammate</Copy>
<Copy k="keeps.back">back</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 1553ccf288ae2a2f */}
<Copy k="widget.description">
  Diagram: three rows explain what is different when Claude is a member of a
  team's Slack channel, compared with a chat with Claude on your own. The
  first shows the channel's threads, decisions, files, and the team's tools
  flowing into Claude, so it starts already briefed and improves from context
  and feedback. The second shows several people writing into one thread where
  Claude works: anyone in the channel can add context or redirect the work,
  and anyone can pick up where another left off. The third shows a task
  continuing after you sign off: Claude runs remotely, posts progress, asks a
  teammate in the thread when it needs a decision, and you pick the task back
  up later.
</Copy>
<Copy k="widget.summary">
  Diagram: three rows show how Claude as a Slack channel member differs from a
  chat with Claude on your own: it starts briefed on the team's context, the
  whole team can steer one thread, and it keeps working after you sign off.
</Copy>
`;export{e as default};