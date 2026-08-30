var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Pipeline reviews” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    file and folder names — keep them where the sentence needs them. */}

<Copy k="title">Pipeline Reviews</Copy>
<Copy k="subtitle">
  Reads your deal export and Salesforce, then writes the review doc for
  Monday.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the weekly pipeline folder and describe the review you
  need.
</Copy>
<Copy k="prompt">
  Read this week’s pipeline export and the open opps in Salesforce. Score
  each one on stage hygiene, whether there’s a real next step, and how long
  it’s sat in stage. Flag the at-risk deals and say why in one line each,
  then write the manager-ready review doc I can walk through in our Monday
  pipeline meeting.
</Copy>

<Copy k="scene2.title">Cowork scores every opp</Copy>
<Copy k="scene2.sub">
  It reads the export, pulls live opps from Salesforce, and scores each one
  against your stage criteria.
</Copy>
<Copy k="work.heading">Working on pipeline review</Copy>
<Copy k="step1">Reading {exportFile}</Copy>
<Copy k="step2">Salesforce · pulled 27 open opps for the West team</Copy>
<Copy k="step3">Reading {criteria}</Copy>
<Copy k="step4">Comparing against stage criteria and W16 review</Copy>
<Copy k="step5">Google Sheets · wrote scored-pipeline-W17 with 27 rows</Copy>
<Copy k="step6">Created {reviewDoc}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read this week’s export</Copy>
<Copy k="prog2">Pull open opps from Salesforce</Copy>
<Copy k="prog3">Score hygiene, next step, age</Copy>
<Copy k="prog4">Write scored sheet</Copy>
<Copy k="prog5">Write review doc to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The manager-ready review doc</Copy>
<Copy k="scene3.sub">
  At-risk deals flagged with the one-line why, plus the forecast roll-up —
  saved to the weekly folder.
</Copy>
<Copy k="doc.title">Pipeline Review — W17</Copy>
<Copy k="doc.meta">3 at-risk · 27 open</Copy>
<Copy k="risk1">
  {name}{deal} — 38 days in stage with no next step on the calendar;
  champion went quiet after the Apr 14 pricing call.
</Copy>
<Copy k="risk1.name">Northwind Logistics</Copy>
<Copy k="risk1.deal">$142K · Proposal</Copy>
<Copy k="risk2">
  {name}{deal} — stage says Negotiation but legal hasn’t returned redlines
  and the close date has slipped twice; pull back to Best Case.
</Copy>
<Copy k="risk2.name">Aperture Health</Copy>
<Copy k="risk2.deal">$86K · Negotiation</Copy>
<Copy k="risk3">
  {name}{deal} — only next step is “follow up” with no date, and the budget
  holder still isn’t identified after three calls.
</Copy>
<Copy k="risk3.name">Meridian Retail</Copy>
<Copy k="risk3.deal">$64K · Discovery</Copy>
<Copy k="forecast">
  {lead} Commit holds at $1.24M. Best Case drops $210K vs W16 on the
  Aperture pull-back. 12 of 27 opps score clean on all three checks.
</Copy>
<Copy k="forecast.lead">Forecast.</Copy>
<Copy k="chip.name">Monday pipeline review</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB · {folder}</Copy>

<Copy k="scene4.title">Make it run before every Monday meeting</Copy>
<Copy k="scene4.sub">
  Save your version as {cmd}, then schedule it — the doc is waiting before
  the meeting starts.
</Copy>
<Copy k="sched.prompt">
  Every Monday at 8am, run {cmd} against the current Salesforce pipeline
  and write the scored sheet and review doc to a new weekly folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Monday pipeline review</Copy>
<Copy k="card.body">
  Runs {cmd} against the current Salesforce pipeline and writes the scored
  sheet and review doc to a weekly folder.
</Copy>
<Copy k="card.when">Every {time}</Copy>
<Copy k="card.when.time">Monday at 8:00 AM</Copy>

<Copy k="end">
  Every Monday, the pipeline is scored, at-risk deals are flagged, and the
  review doc is waiting.
</Copy>
`;export{e as default};