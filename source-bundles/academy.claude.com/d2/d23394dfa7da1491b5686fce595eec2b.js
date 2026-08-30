var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Feedback synthesis” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names — keep them where the sentence needs
    them. */}

<Copy k="title">Feedback synthesis to prioritized themes</Copy>
<Copy k="subtitle">
  Reads Slack, Zendesk, and your files, then writes a ranked brief for
  planning.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the VoC folder and name every source it should read.
</Copy>
<Copy k="prompt">
  Read everything in this folder plus the #product-feedback Slack channel
  and the open Zendesk tickets tagged feedback. Cluster what you find into 5
  to 7 themes, count how often each shows up and how severe it is, pull the
  single best verbatim for each, mark which themes already map to a Linear
  roadmap item versus net-new, and write it up as a one-page Voice of
  Customer brief I can take to roadmap review.
</Copy>

<Copy k="scene2.title">Cowork reads every source at once</Copy>
<Copy k="scene2.sub">
  Folder files, Slack, Zendesk and Linear are pulled in together; the
  Progress card tracks the plan.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Slack · read #product-feedback (218 messages, last 30d)</Copy>
<Copy k="step2">Zendesk · pulled 47 open tickets tagged “feedback”</Copy>
<Copy k="step3">
  Comparing against folder files — clustering 380 items, scoring frequency ×
  severity
</Copy>
<Copy k="step4">Linear · matched 6 themes against Q2 roadmap (12 items)</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read all feedback sources</Copy>
<Copy k="prog2">Cluster and score themes</Copy>
<Copy k="prog3">Check against roadmap</Copy>
<Copy k="prog4">Write VoC brief to folder</Copy>
<Copy k="folder.batch">· 6 files</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The one-page Voice of Customer brief</Copy>
<Copy k="scene3.sub">
  Six themes ranked by frequency and severity, the verbatim that sells each,
  and a roadmap flag.
</Copy>
<Copy k="brief.title">Voice of Customer — Q2</Copy>
<Copy k="brief.meta">380 items · 6 themes</Copy>
<Copy k="sev.high">HIGH</Copy>
<Copy k="sev.med">MED</Copy>
<Copy k="theme1.title">Permissions & sharing model</Copy>
<Copy k="theme1.flag">→ on roadmap · LIN-2847</Copy>
<Copy k="theme1.quote">
  “I genuinely cannot tell who on my team can see this board.”
</Copy>
<Copy k="theme2.title">Mobile editor lag on tablet</Copy>
<Copy k="theme2.flag">⚠ net-new</Copy>
<Copy k="theme2.quote">
  “Typing on iPad freezes for 3–4 seconds every paragraph.”
</Copy>
<Copy k="theme3.title">Export to PDF breaks tables</Copy>
<Copy k="theme3.flag">→ on roadmap · LIN-3102</Copy>
<Copy k="theme3.quote">
  “Headers disappear and tables split mid-row every time.”
</Copy>
<Copy k="theme4.title">Bulk-invite teammates from CSV</Copy>
<Copy k="theme4.flag">⚠ net-new</Copy>
<Copy k="theme4.quote">
  “Had to add 60 people one at a time before the workshop.”
</Copy>
<Copy k="brief.more">+ 2 more themes · 4 of 6 already on roadmap</Copy>
<Copy k="chip.name">Voice of Customer brief — Q2</Copy>
<Copy k="chip.meta">Document · MD · 9 KB · {folder}</Copy>

<Copy k="scene4.title">Run it ahead of every roadmap review</Copy>
<Copy k="scene4.sub">
  Customize the skill once, then schedule it — a fresh brief lands the
  Friday before planning.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} on the last Friday of every month against the voc folder plus
  live Slack and Zendesk, and write the brief there.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Monthly Voice of Customer brief</Copy>
<Copy k="card.body">
  Runs {cmd} against the quarter’s voc folder plus live Slack and Zendesk
  and writes the brief back to the folder.
</Copy>
<Copy k="card.when">On the {time}, monthly</Copy>
<Copy k="card.when.time">last Friday</Copy>

<Copy k="end">
  Every planning cycle, the feedback brief is in the folder before roadmap
  review.
</Copy>
`;export{e as default};