var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Metrics deep-dive to narrative” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, file and folder names, and bold lead-ins — keep
    them where the sentence needs them. */}

<Copy k="title">Metrics deep-dive to narrative</Copy>
<Copy k="subtitle">
  Reads your analytics data and the changelog, then writes the
  what-happened-and-why with charts.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the week’s metrics folder and describe the analysis you
  need.
</Copy>
<Copy k="menu.category">Product Management</Copy>
<Copy k="prompt">
  Look at this week’s activation funnel export. Find the anomaly, segment by
  plan, platform, and signup source until you’ve isolated what’s driving it,
  check it against what shipped in the changelog and Linear over the same
  window, and write the “what happened and why” narrative with the two
  charts that prove it.
</Copy>

<Copy k="scene2.title">Cowork hunts the anomaly</Copy>
<Copy k="scene2.sub">
  Segments the funnel, checks what shipped in the same window, and the
  Progress card tracks the plan.
</Copy>
<Copy k="work.heading">Working on metrics narrative</Copy>
<Copy k="step1">Reading {funnel}</Copy>
<Copy k="step2">
  Amplitude · segmented day-1 activation by plan × platform × source
</Copy>
<Copy k="step3">
  Comparing against wk16 — iOS × paid-social explains 86% of the drop
</Copy>
<Copy k="step4">Linear · pulled 9 issues shipped Apr 20-24 in Growth</Copy>
<Copy k="step5">Reading {changelog}</Copy>
<Copy k="step6">Created {file} + 2 charts</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the funnel export</Copy>
<Copy k="prog2">Segment to the driver</Copy>
<Copy k="prog3">Compare to last week</Copy>
<Copy k="prog4">Check what shipped</Copy>
<Copy k="prog5">Write narrative + charts</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The what-happened-and-why</Copy>
<Copy k="scene3.sub">
  Anomaly found, driver isolated to one segment, tied to the ship — with the
  two charts that prove it.
</Copy>
<Copy k="narr1">
  {lead} (38.2% → 32.9%). The drop is concentrated in iOS × paid-social
  signups — that cohort fell 31% while every other plan/platform/source cell
  stayed within ±2%.
</Copy>
<Copy k="narr1.lead">Day-1 activation fell 14% WoW</Copy>
<Copy k="narr2">
  {lead}, the new tracking-permissions prompt that shipped Tue Apr 21. The
  prompt fires before first project creation, and 42% of paid-social iOS
  users bounce at it — they never reach the activation event.
</Copy>
<Copy k="narr2.lead">It lines up with GROW-1847</Copy>
<Copy k="narr3">
  {lead} move the prompt behind first project. Charts: {chart1} shows the
  isolation; {chart2} shows the new drop-off step.
</Copy>
<Copy k="narr3.lead">Recommended:</Copy>
<Copy k="chip.name">iOS paid-social activation narrative</Copy>
<Copy k="chip.meta">Document · MD · 6 KB · + 2 PNG charts</Copy>

<Copy k="scene4.title">Make it run every Monday</Copy>
<Copy k="scene4.sub">
  Schedule the customized skill — the narrative is written before standup.
</Copy>
<Copy k="sched.prompt">
  Every Monday at 7am, run {cmd} for the prior week and write the narrative
  + charts to {path}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Weekly metrics narrative</Copy>
<Copy k="card.body">
  Every Monday — runs {cmd} against the prior week’s Amplitude + Linear data
  and writes the narrative and charts to {path}.
</Copy>
<Copy k="card.when">Every {day} at 7:00am</Copy>
<Copy k="card.when.day">Monday</Copy>

<Copy k="end">
  Every Monday the “what happened and why” is already in the folder before
  standup.
</Copy>
`;export{e as default};