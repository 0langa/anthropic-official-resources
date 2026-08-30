var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Renewal risk audit” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated command
    and schedule day — keep them where the sentence needs them. */}

<Copy k="title">Renewal risk audit</Copy>
<Copy k="subtitle">
  Reads CRM, usage, and call sentiment — writes a live risk board for every
  renewing account.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the renewal folder and describe the audit you want.
</Copy>
<Copy k="menu.kind">Sales</Copy>
<Copy k="prompt">
  Audit my Q3 renewal book — score every account renewing in the next 90
  days red/yellow/green on usage trend, sentiment, and open exec
  commitments, and publish a live artifact.
</Copy>

<Copy k="scene2.title">Cowork pulls every signal</Copy>
<Copy k="scene2.sub">
  The skill joins CRM, usage, and call sentiment, and the Progress card
  tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Working on renewal risk audit</Copy>
<Copy k="step1">Reading Salesforce — Q3 renewal book</Copy>
<Copy k="step2">Reading usage-90d-by-account.csv</Copy>
<Copy k="step3">Reading Gong — recent call sentiment</Copy>
<Copy k="step4">Reading exec-commitments-open.md</Copy>
<Copy k="step5">Scoring 47 accounts on renewal risk</Copy>
<Copy k="step6">Publishing live artifact</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull renewal book from CRM</Copy>
<Copy k="prog2">Join usage and sentiment</Copy>
<Copy k="prog3">Check open commitments</Copy>
<Copy k="prog4">Score every account</Copy>
<Copy k="prog5">Publish live artifact</Copy>

<Copy k="scene3.title">A scored book, ready to share</Copy>
<Copy k="scene3.sub">
  Every account scored with the signal that drove it, published as a live
  link for leadership.
</Copy>
<Copy k="result1">
  {lead} Usage dropped 38% over 60 days and the SSO commitment from the
  February QBR is still open. $240K renews June 12; owner is Priya.
</Copy>
<Copy k="result1.lead">Northwind Analytics — Red.</Copy>
<Copy k="result2">
  {lead} Usage flat, sentiment positive on the last Gong call, but two P1
  Zendesk tickets open over 14 days. $180K renews July 3.
</Copy>
<Copy k="result2.lead">Meridian Health — Yellow.</Copy>
<Copy k="result3">
  {lead} Usage up 22%, champion expanding to a second team, no open asks.
  $95K renews July 28.
</Copy>
<Copy k="result3.lead">Crescent Logistics — Green.</Copy>
<Copy k="chip.name">Q3 renewal risk board</Copy>
<Copy k="chip.meta">Document · Live artifact · 47 accounts</Copy>

<Copy k="scene4.title">Make it run every Monday</Copy>
<Copy k="scene4.sub">
  Customize the rubric once, then schedule it — the board refreshes before
  every forecast call.
</Copy>
<Copy k="sched.prompt">
  Every Monday at 7am, rerun the renewal risk audit on the current 90-day
  book, refresh the live artifact, and DM me any account that moved to red.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Weekly renewal risk audit</Copy>
<Copy k="card.body">
  Runs {cmd} against the current 90-day book, refreshes the live artifact,
  and DMs new reds.
</Copy>
<Copy k="card.when">{day} at 7:00am</Copy>
<Copy k="card.when.day">Mondays</Copy>

<Copy k="end">
  Every Monday, the renewal board is scored and live before the forecast
  call.
</Copy>
`;export{e as default};