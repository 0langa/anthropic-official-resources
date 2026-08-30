var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Reconcile headcount” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands and folder names — keep them where the sentence needs them. */}

<Copy k="title">Reconcile headcount</Copy>
<Copy k="subtitle">
  Reads your roster, plan, and payroll, writes a by-cost-center list of
  every head that doesn’t tie.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the headcount folder and describe the tie-out you need.
</Copy>
<Copy k="menu.kind">Finance</Copy>
<Copy k="prompt">
  Reconcile March headcount across the Workday roster, the FY26 plan, and
  payroll in the GL. List every break by cost center and write it to the
  close folder.
</Copy>

<Copy k="scene2.title">Cowork reads all three sources</Copy>
<Copy k="scene2.sub">
  The skill matches roster, plan, and payroll by employee while the Progress
  card tracks the plan.
</Copy>
<Copy k="work.heading">Working on headcount reconciliation</Copy>
<Copy k="step1">Reading workday-roster-2026-03-31.xlsx</Copy>
<Copy k="step2">Reading FY26-headcount-plan-v4.xlsx</Copy>
<Copy k="step3">Reading NetSuite — March payroll postings</Copy>
<Copy k="step4">Reading cost-center-map.csv</Copy>
<Copy k="step5">Matching by cost center and employee ID</Copy>
<Copy k="step6">Writing headcount-recon-mar.xlsx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read roster, plan, and payroll</Copy>
<Copy k="prog2">Apply cost-center map</Copy>
<Copy k="prog3">Match by employee ID</Copy>
<Copy k="prog4">Categorize every break</Copy>
<Copy k="prog5">Write recon to folder</Copy>

<Copy k="scene3.title">The break list, categorized</Copy>
<Copy k="scene3.sub">
  Every head that doesn’t tie, grouped by cost center with the reason and
  dollar impact.
</Copy>
<Copy k="result1">
  {lead} — 3 hires not in plan ($612K annualized). Two backfills approved
  off-cycle in February; one transfer from CC 4130 not yet reflected in the
  plan file.
</Copy>
<Copy k="result1.lead">Engineering (CC 4120)</Copy>
<Copy k="result2">
  {lead} — 4 budgeted heads still open ($720K under plan). Two AE reqs in
  final round; two SDR reqs paused pending the territory redesign.
</Copy>
<Copy k="result2.lead">Sales (CC 5200)</Copy>
<Copy k="result3">
  {lead} — 2 contractors coded as FTE in the roster ($184K). Both are 1099
  in payroll; Workday employment type needs correcting before the next
  export.
</Copy>
<Copy k="result3.lead">G&A (CC 7100)</Copy>
<Copy k="chip.name">March headcount reconciliation</Copy>
<Copy k="chip.meta">Spreadsheet · XLSX · 42 KB</Copy>

<Copy k="scene4.title">Make it run every close</Copy>
<Copy k="scene4.sub">
  Once your break categories are dialed in, schedule it — the recon lands on
  the same day every month.
</Copy>
<Copy k="sched.prompt">
  On the 2nd business day of each month, reconcile headcount across the
  newest roster, plan, and payroll register and write to this folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Monthly headcount reconciliation</Copy>
<Copy k="card.body">
  Runs {cmd} against the newest roster and payroll in {folder} and writes
  the categorized break list to the folder.
</Copy>
<Copy k="card.when">On the {time}, monthly</Copy>
<Copy k="card.when.time">2nd business day</Copy>

<Copy k="end">
  Every close, HR’s number and Finance’s number tie before anyone has to
  ask.
</Copy>
`;export{e as default};