var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Account tracking” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    file and folder names — keep them where the sentence needs them. */}

<Copy k="title">Account tracking</Copy>
<Copy k="subtitle">
  Reads usage, tickets, and NPS each week and writes a status with two
  actions.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the account folder and ask for one health call with two
  actions.
</Copy>
<Copy k="prompt">
  Read the usage data, the open Zendesk tickets, the latest NPS responses,
  and the success plan for Northwind. Write the account health summary: call
  it red, yellow, or green with the reason in one or two sentences, then give
  me the two actions I should take this week to move it.
</Copy>

<Copy k="scene2.title">Cowork weighs the four signals</Copy>
<Copy k="scene2.sub">
  Account record, tickets, usage, and NPS — measured against the success
  plan you agreed.
</Copy>
<Copy k="work.heading">Running {cmd} for Northwind</Copy>
<Copy k="step1">
  Salesforce · pulled Northwind account record, Jun 30 renewal, $184K ARR
</Copy>
<Copy k="step2">
  Zendesk · read 3 open tickets (2 SSO, 1 billing) for Northwind
</Copy>
<Copy k="step3">Reading {usage}</Copy>
<Copy k="step4">
  Google Drive · read {nps} (38 avg, champion scored 6)
</Copy>
<Copy k="step5">Comparing against {plan} milestones</Copy>
<Copy k="step6">Created {file}</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull account record and tickets</Copy>
<Copy k="prog2">Read usage and NPS</Copy>
<Copy k="prog3">Weigh against success plan</Copy>
<Copy k="prog4">Call red / yellow / green</Copy>
<Copy k="prog5">Write health summary to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">One call, two moves</Copy>
<Copy k="scene3.sub">
  The health summary lands in the account folder — defensible status,
  actions sized for this week.
</Copy>
<Copy k="result.meta">{status} Northwind · Account health · Apr 27</Copy>
<Copy k="result.meta.status">YELLOW</Copy>
<Copy k="result.summary">
  Usage has been flat three weeks running while seat count grew 18%, two SSO
  tickets have sat open eleven days, and NPS slipped to 38 after the
  champion scored a 6. Renewal is Jun 30 — this is drifting, not broken.
</Copy>
<Copy k="result.action1">
  {n} Book a 30-minute working session with their IT lead on the two SSO
  tickets before Thursday; both block the rollout milestone in the success
  plan.
</Copy>
<Copy k="result.action1.n">1.</Copy>
<Copy k="result.action2">
  {n} Send Maria the Q2 roadmap one-pager — her NPS comment flagged “not
  seeing the items we asked for.”
</Copy>
<Copy k="result.action2.n">2.</Copy>
<Copy k="chip.name">Northwind health summary</Copy>
<Copy k="chip.meta">Document · Markdown · {folder}</Copy>

<Copy k="scene4.title">Run it across your book every week</Copy>
<Copy k="scene4.sub">
  Schedule the customized skill — every account scored Monday morning, reds
  rolled up first.
</Copy>
<Copy k="sched.prompt">
  Every Monday at 7am, run {cmd} for each account in my book and roll the
  reds into one digest.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Weekly account health</Copy>
<Copy k="card.body">
  Runs {cmd} for every account in your book and writes the summary to its
  health folder, with red accounts rolled up into one digest.
</Copy>
<Copy k="card.when">Every {time}</Copy>
<Copy k="card.when.time">Monday at 7:00 AM</Copy>

<Copy k="end">
  Every Monday, a health call and two actions are in each account folder
  before your day starts.
</Copy>
`;export{e as default};