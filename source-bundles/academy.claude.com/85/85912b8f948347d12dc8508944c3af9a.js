var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Explain a variance” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands and folder names — keep them where the sentence needs them. */}

<Copy k="title">Explain a variance</Copy>
<Copy k="subtitle">
  Reads your actuals and budget, writes an explanation for each line that
  moved.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the close folder and describe the comparison you need.
</Copy>
<Copy k="menu.category">Finance</Copy>
<Copy k="prompt">
  Compare this month’s actuals to last month and to budget. For every line
  with a material variance, write two or three sentences I can drop into the
  monthly review.
</Copy>

<Copy k="scene2.title">Cowork reads both periods</Copy>
<Copy k="scene2.sub">
  The skill compares each line and the Progress card tracks the plan as it
  runs.
</Copy>
<Copy k="work.heading">Working on variance analysis</Copy>
<Copy k="step1">Reading actuals-mar-2026.xlsx</Copy>
<Copy k="step2">Reading actuals-feb-2026.xlsx</Copy>
<Copy k="step3">Reading budget-FY26.xlsx</Copy>
<Copy k="step4">Comparing periods</Copy>
<Copy k="step5">Writing variance-narrative-mar.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read this period’s actuals</Copy>
<Copy k="prog2">Read prior period and budget</Copy>
<Copy k="prog3">Compare each line</Copy>
<Copy k="prog4">Draft commentary</Copy>
<Copy k="prog5">Write narrative to folder</Copy>

<Copy k="scene3.title">Review-ready commentary</Copy>
<Copy k="scene3.sub">
  Every material variance explained, written from the numbers, saved back to
  the folder.
</Copy>
<Copy k="result1">
  {lead} came in $84K over budget and $61K above February. The new ingest
  pipeline went live mid-month and doubled compute hours; reserved-instance
  coverage hasn’t caught up yet.
</Copy>
<Copy k="result1.lead">Cloud infrastructure</Copy>
<Copy k="result2">
  {lead} ran $42K under budget. Two open roles converted to full-time in
  February, so the line shifts to payroll going forward rather than
  reflecting a real saving.
</Copy>
<Copy k="result2.lead">Contractor spend</Copy>
<Copy k="result3">
  {lead} finished $38K below plan. The Q1 brand campaign slipped to April —
  the spend moves with it, no change to the full-year number.
</Copy>
<Copy k="result3.lead">Marketing programs</Copy>
<Copy k="chip.name">March variance narrative</Copy>
<Copy k="chip.meta">Document · DOCX · 18 KB</Copy>

<Copy k="scene4.title">Make it run every close</Copy>
<Copy k="scene4.sub">
  Customize the threshold once, then schedule it — the narrative lands on
  the same day every month.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} on the 3rd business day of each month against the newest actuals
  file.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Monthly variance narrative</Copy>
<Copy k="card.body">
  Runs {cmd} against the latest actuals in {folder} and writes the draft to
  the same folder.
</Copy>
<Copy k="card.when">On the {time}, monthly</Copy>
<Copy k="card.when.time">3rd business day</Copy>

<Copy k="end">
  Every close, the variance narrative is in your folder before the review.
</Copy>
`;export{e as default};