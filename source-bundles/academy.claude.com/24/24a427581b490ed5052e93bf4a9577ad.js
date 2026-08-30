var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Draft the incident postmortem” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, channel name, and bold lead-ins — keep them where
    the sentence needs them. */}

<Copy k="title">Draft the incident postmortem</Copy>
<Copy k="subtitle">
  Reads the incident channel and alerts, writes the blameless postmortem with
  timeline and owned action items.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the incident channel and describe the postmortem you need.
</Copy>
<Copy k="menu.category">Engineering</Copy>
<Copy k="prompt">
  From {channel}, reconstruct the timeline, write the customer impact and
  root cause, and draft the blameless postmortem in our template with owners
  on every action item.
</Copy>

<Copy k="scene2.title">Cowork reads the channel and alerts</Copy>
<Copy k="scene2.sub">
  The skill walks the incident timeline and the Progress card tracks the plan
  as it runs.
</Copy>
<Copy k="work.heading">Working on incident postmortem</Copy>
<Copy k="step1">Reading {channel}</Copy>
<Copy k="step2">Reading PagerDuty alert timeline</Copy>
<Copy k="step3">Reading postmortem-template.md</Copy>
<Copy k="step4">Reconstructing sequence of events</Copy>
<Copy k="step5">Writing incident-postmortem.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the incident channel</Copy>
<Copy k="prog2">Pull alerts and template</Copy>
<Copy k="prog3">Reconstruct the timeline</Copy>
<Copy k="prog4">Identify root cause</Copy>
<Copy k="prog5">Write postmortem to folder</Copy>

<Copy k="scene3.title">Review-ready postmortem</Copy>
<Copy k="scene3.sub">
  Timeline reconstructed, root cause identified, action items owned — saved
  back to the incident folder.
</Copy>
<Copy k="brief1">
  {lead} 14:07–14:49 UTC, checkout returned 5xx on roughly one in four
  requests. About 1,800 customers saw the error page and 340 carts were
  abandoned during the window.
</Copy>
<Copy k="brief1.lead">Impact.</Copy>
<Copy k="brief2">
  {lead} The 14:02 config push lowered the connection-pool ceiling on the
  checkout service. Under normal afternoon load the pool exhausted within
  five minutes and requests queued until the change was reverted.
</Copy>
<Copy k="brief2.lead">Root cause.</Copy>
<Copy k="brief3">
  {lead} Add a pre-merge check on pool-size config (owner: Platform). Move
  the pool-exhaustion alert to the checkout service (owner: SRE). Refresh the
  runbook dashboard links (owner: on-call).
</Copy>
<Copy k="brief3.lead">Action items.</Copy>
<Copy k="chip.name">Checkout 5xx postmortem</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB</Copy>

<Copy k="scene4.title">Make it run after every incident</Copy>
<Copy k="scene4.sub">
  Schedule it once — the draft is in the folder before anyone books the
  review.
</Copy>
<Copy k="sched.prompt">
  Every weekday at 6pm, check PagerDuty for incidents resolved in the last 24
  hours and run {cmd} on each, writing the draft to its folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Postmortem first draft</Copy>
<Copy k="card.body">
  Runs {cmd} on each incident resolved that day and writes the draft to the
  matching incident folder.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">6:00pm</Copy>

<Copy k="end">
  After every incident, the postmortem draft is in the folder before the
  review.
</Copy>
`;export{e as default};