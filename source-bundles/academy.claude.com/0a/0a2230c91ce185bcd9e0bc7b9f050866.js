var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Answer the ad-hoc data question” use case.
    Scene text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, channel and folder names — keep them where the
    sentence needs them. */}

<Copy k="title">Answer the ad-hoc data question</Copy>
<Copy k="subtitle">
  Reads your warehouse model, runs the SQL, and writes back the
  plain-English answer.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Paste the stakeholder’s question and point Cowork at your warehouse
  model.
</Copy>
<Copy k="menu.kind">Data</Copy>
<Copy k="prompt">
  “Why is gross margin down in EMEA this quarter?” Write the SQL, run it
  against the warehouse, and tell me what’s driving the move. Then give me a
  chart spec for the dashboard.
</Copy>

<Copy k="scene2.title">Cowork writes and runs the query</Copy>
<Copy k="scene2.sub">
  It reads your schema, runs the SQL on the warehouse, and decomposes the
  number.
</Copy>
<Copy k="work.heading">Working on the margin question</Copy>
<Copy k="step1">Reading finance-schema.sql</Copy>
<Copy k="step2">Reading metrics-library.md</Copy>
<Copy k="step3">Running query on Databricks</Copy>
<Copy k="step4">Decomposing margin by segment</Copy>
<Copy k="step5">Writing emea-margin-answer.md</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.rows">4,218 rows</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the warehouse model</Copy>
<Copy k="prog2">Write and run the SQL</Copy>
<Copy k="prog3">Find what’s driving the number</Copy>
<Copy k="prog4">Draft the chart spec</Copy>
<Copy k="prog5">Write answer to folder</Copy>

<Copy k="scene3.title">The answer, with the SQL behind it</Copy>
<Copy k="scene3.sub">
  What’s driving the move, in plain English, plus the chart spec to make it
  self-serve.
</Copy>
<Copy k="result1">
  {lead} dropped 3.2 points quarter-over-quarter, from 61.4% to 58.2%.
  Two-thirds of the decline is the UK; Germany and France are roughly flat.
</Copy>
<Copy k="result1.lead">EMEA gross margin</Copy>
<Copy k="result2">
  {lead} Hardware share of UK revenue went from 18% to 31% after the March
  bundle promo, and hardware runs ~40 points below SaaS on margin — the
  blend pulled the regional number down.
</Copy>
<Copy k="result2.lead">The driver is product mix.</Copy>
<Copy k="result3">
  {lead} stacked bar, EMEA margin by product line, quarterly. Add it to the
  regional dashboard and this question answers itself next quarter.
</Copy>
<Copy k="result3.lead">Chart spec:</Copy>
<Copy k="chip.name">EMEA margin — answer + query</Copy>
<Copy k="chip.meta">Document · MD · 4 KB</Copy>

<Copy k="scene4.title">Put the request queue on autopilot</Copy>
<Copy k="scene4.sub">
  Schedule it to watch the analytics channel and draft every answer before
  you’ve read the question.
</Copy>
<Copy k="sched.prompt">
  Every hour, check {channel} for new questions and run {cmd} on each.
  Write the draft answer to {folder}/Inbox for me to review.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Ad-hoc analytics inbox</Copy>
<Copy k="card.body">
  Reads new questions in {channel}, runs {cmd} against the warehouse, and
  writes a draft answer to the Inbox folder for review.
</Copy>
<Copy k="card.when">Every {time} on weekdays</Copy>
<Copy k="card.when.time">hour</Copy>

<Copy k="end">
  Every question in the analytics queue has a draft answer waiting before
  you’ve opened a query editor.
</Copy>
`;export{e as default};