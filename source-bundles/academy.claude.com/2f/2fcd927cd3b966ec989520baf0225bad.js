var e=`---
kind: widget-copy
---

{/* Hero demo film for the “SOX & controls documentation” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, folder and file names, control IDs and bold lead-ins
    — keep them where the sentence needs them. Matrix column headers and
    cells sit in a narrow spreadsheet grid and stay short. */}

<Copy k="title">SOX & controls documentation</Copy>
<Copy k="subtitle">
  Reads your walkthrough notes and drafts the process narrative, risk matrix,
  and flowchart.
</Copy>

<Copy k="scene1.title">Describe how the process actually runs</Copy>
<Copy k="scene1.sub">
  Point Cowork at the Controls folder and ask for the three-file package.
</Copy>
<Copy k="menu.category">Finance</Copy>
<Copy k="prompt">
  Here’s how this process actually runs, step by step. From this walkthrough,
  write the process narrative in our standard format, build the risk and
  control matrix mapping each risk to its control, owner, and frequency, and
  draw the flowchart. Flag any step where a control looks missing or a
  segregation of duties issue shows up.
</Copy>

<Copy k="scene2.title">Cowork reads the walkthrough and builds the package</Copy>
<Copy k="scene2.sub">
  The skill maps each step to a risk and control while the Progress card
  tracks the plan.
</Copy>
<Copy k="work.heading">Running {cmd} on Order-to-Cash</Copy>
<Copy k="step1">Reading walkthrough-notes-OTC.docx</Copy>
<Copy k="step2">
  Google Workspace · pulled RCM-template.xlsx from Controls library
</Copy>
<Copy k="step3">
  Microsoft 365 · read prior-year-narrative-OTC.pdf from SharePoint
</Copy>
<Copy k="step4">Comparing against prior-year controls — 11 steps mapped</Copy>
<Copy k="step5">Created OTC-narrative.docx, {rcm}, OTC-flowchart.png</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.files">3 files</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read walkthrough notes</Copy>
<Copy k="prog2">Pull template & prior-year</Copy>
<Copy k="prog3">Map risks to controls</Copy>
<Copy k="prog4">Flag SOD & control gaps</Copy>
<Copy k="prog5">Write narrative, RCM, flowchart</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The risk-control matrix, with the gap it caught</Copy>
<Copy k="scene3.sub">
  Narrative, RCM, and flowchart written to the folder — and one
  segregation-of-duties issue flagged.
</Copy>
<Copy k="rcm.title">Risk & Control Matrix · Order-to-Cash</Copy>
<Copy k="rcm.col.risk">Risk</Copy>
<Copy k="rcm.col.control">Control</Copy>
<Copy k="rcm.col.owner">Owner</Copy>
<Copy k="rcm.col.freq">Freq</Copy>
<Copy k="row1.risk">Order entered without credit check</Copy>
<Copy k="row1.control">{id} Auto credit-hold >$50K in NetSuite</Copy>
<Copy k="row1.owner">AR Manager</Copy>
<Copy k="row1.freq">Per order</Copy>
<Copy k="row2.risk">Goods ship before invoice issued</Copy>
<Copy k="row2.control">{id} Ship-confirm triggers invoice batch</Copy>
<Copy k="row2.owner">Controller</Copy>
<Copy k="row2.freq">Daily</Copy>
<Copy k="row3.risk">Cash applied to wrong customer</Copy>
<Copy k="row3.control">{id} Lockbox auto-match, exceptions queued</Copy>
<Copy k="row3.owner">Treasury</Copy>
<Copy k="row3.freq">Daily</Copy>
<Copy k="gap.risk">{lead} · Same user posts and approves AR adjustments</Copy>
<Copy k="gap.risk.lead">⚠ Step 6</Copy>
<Copy k="gap.control">No control — segregation-of-duties gap</Copy>
<Copy k="chip1.name">Order-to-Cash process narrative</Copy>
<Copy k="chip1.meta">Document · DOCX · 22 KB</Copy>
<Copy k="chip2.name">Order-to-Cash risk-control matrix</Copy>
<Copy k="chip2.meta">Spreadsheet · XLSX · 14 KB</Copy>
<Copy k="chip3.name">Order-to-Cash flowchart</Copy>
<Copy k="chip3.meta">Document · PNG · 88 KB</Copy>

<Copy k="scene4.title">Run it on every walkthrough</Copy>
<Copy k="scene4.sub">
  Customize the skill once, then schedule it — the package drafts whenever a
  process owner drops notes.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am, check {folder} for any new walkthrough file and run {cmd}
  against it and write the package to a subfolder named for the process.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Controls documentation package</Copy>
<Copy k="card.body">
  Runs {cmd} on every new walkthrough in {folder} and writes the narrative,
  matrix, and flowchart to a process subfolder.
</Copy>
<Copy k="card.when">Weekdays at 9am</Copy>

<Copy k="end">
  Every walkthrough becomes a process narrative, risk-control matrix, and
  flowchart — in your format, in under an hour.
</Copy>
`;export{e as default};