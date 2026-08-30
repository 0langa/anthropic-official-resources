var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Forecast & scenario modeling” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, file and folder names — keep them where the
    sentence needs them. */}

<Copy k="title">Forecast & scenario modeling</Copy>
<Copy k="subtitle">
  Reads your financial data and model, runs three cases, and writes the
  planning memo.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the planning folder and describe the scenarios you need.
</Copy>
<Copy k="prompt">
  Pull the latest actuals into the driver model, extend it through the next
  four quarters, and run base, upside, and downside scenarios. For each
  scenario list the assumptions you changed and by how much, then write a
  one-page memo explaining what drives the difference between them in plain
  English for the leadership review.
</Copy>

<Copy k="scene2.title">Cowork rebases the model</Copy>
<Copy k="scene2.sub">
  It pulls actuals from NetSuite, extends the driver model, and runs all
  three cases in one pass.
</Copy>
<Copy k="work.heading">Working on {cmd}</Copy>
<Copy k="step1">NetSuite · pulled Q1 close actuals (847 GL lines)</Copy>
<Copy k="step2">Reading {model}</Copy>
<Copy k="step3">Reading {plan}</Copy>
<Copy k="step4">
  Comparing against headcount plan — running base, upside, downside
</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull actuals from NetSuite</Copy>
<Copy k="prog2">Read driver model and plan</Copy>
<Copy k="prog3">Run three scenarios</Copy>
<Copy k="prog4">Draft the assumptions memo</Copy>
<Copy k="prog5">Write outputs to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The assumptions memo, ready for the room</Copy>
<Copy k="scene3.sub">
  Three scenarios side by side with the drivers that move each one — written
  from your model.
</Copy>
<Copy k="result1">
  {lead} — ARR ends FY27 at $48.2M (+18%). Holds net retention at 112%,
  ramps the 14 AE hires in the headcount plan on schedule, and keeps pricing
  flat.
</Copy>
<Copy k="result1.lead">Base case</Copy>
<Copy k="result2">
  {lead} — $52.6M (+28%). New packaging lifts pipeline conversion two points
  from Q3 and EMEA expansion pulls forward one quarter. Adds $4.4M over
  base, nearly all second-half new logo.
</Copy>
<Copy k="result2.lead">Upside</Copy>
<Copy k="result3">
  {lead} — $44.1M (+8%). Models both at-risk enterprise renewals churning
  ($2.3M) and a hiring freeze through Q3, cutting ramped capacity by six
  reps in the back half.
</Copy>
<Copy k="result3.lead">Downside</Copy>
<Copy k="chip1.name">FY27 forecast — three scenarios</Copy>
<Copy k="chip1.meta">Spreadsheet · XLSX · 248 KB · 3 scenario tabs</Copy>
<Copy k="chip2.name">Forecast assumptions memo</Copy>
<Copy k="chip2.meta">Document · DOCX · 22 KB</Copy>

<Copy k="scene4.title">Make it run every month</Copy>
<Copy k="scene4.sub">
  Schedule it once and the re-forecast rebases on actuals on the same day
  each cycle.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} on the 5th business day of each month against the latest closed
  actuals.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Monthly re-forecast</Copy>
<Copy k="card.body">
  Runs {cmd} against the latest closed actuals and writes the refreshed
  model, three scenarios, and assumptions memo to {folder}.
</Copy>
<Copy k="card.when">On the {time}, monthly</Copy>
<Copy k="card.when.time">5th business day</Copy>

<Copy k="end">
  Every month, three scenarios and the assumptions memo are in the folder.
</Copy>
`;export{e as default};