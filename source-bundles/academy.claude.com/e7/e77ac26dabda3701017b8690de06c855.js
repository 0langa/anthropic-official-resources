var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Reconcile and draft the journal entries” use
    case. Scene text is typed on screen character by character, so keep
    sentences natural at any length; {tokens} are filled by the widget with
    its simulated command and folder names — keep them where the sentence
    needs them. */}

<Copy k="title">Reconcile and draft the journal entries</Copy>
<Copy k="subtitle">
  Reads both subledgers and the FX sheet, writes the recon workbook and the
  JE draft.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the intercompany folder and describe the recon you need.
</Copy>
<Copy k="menu.kind">Finance</Copy>
<Copy k="prompt">
  Reconcile the March intercompany balances across both subledgers.
  Normalize FX, fuzzy-match by amount and reference, sort breaks into
  timing, rounding, and true. Draft the JEs and write the workbook here.
</Copy>
<Copy k="scene1.folder">{folder} / March</Copy>

<Copy k="scene2.title">Cowork matches both sides</Copy>
<Copy k="scene2.sub">
  The skill normalizes FX, matches across ledgers, and the Progress card
  tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Working on intercompany reconciliation</Copy>
<Copy k="step1">Reading subledger-US-mar.xlsx</Copy>
<Copy k="step2">Reading subledger-EMEA-mar.xlsx</Copy>
<Copy k="step3">Reading fx-rates-mar-2026.xlsx</Copy>
<Copy k="step4">Reading NetSuite — GL intercompany detail</Copy>
<Copy k="step5">Matching across ledgers</Copy>
<Copy k="step6">Writing recon-workbook-mar.xlsx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read both subledger exports</Copy>
<Copy k="prog2">Normalize FX to USD</Copy>
<Copy k="prog3">Match and classify breaks</Copy>
<Copy k="prog4">Draft journal entries</Copy>
<Copy k="prog5">Write workbook to folder</Copy>

<Copy k="scene3.title">Review-ready journal entries</Copy>
<Copy k="scene3.sub">
  Breaks classified, JEs drafted with memo and support, written back to the
  close folder.
</Copy>
<Copy k="result1">
  {lead} after matching 412 line pairs across both entities. 18 timing
  differences and 7 rounding items under $25 are tagged and excluded from
  posting.
</Copy>
<Copy k="result1.lead">3 true breaks</Copy>
<Copy k="result2">
  {lead} · Dr Intercompany Receivable $14,280 / Cr Service Revenue $14,280.
  EMEA invoice 8812 booked in March; US side posts April. Support:
  subledger-EMEA row 144.
</Copy>
<Copy k="result2.lead">JE-0327</Copy>
<Copy k="result3">
  {lead} · Dr FX Gain/Loss $1,960 / Cr Intercompany Payable $1,960. Booked
  at 1.0842 vs month-end 1.0871. Support: fx-rates-mar-2026.
</Copy>
<Copy k="result3.lead">JE-0328</Copy>
<Copy k="chip.name">Intercompany recon — March</Copy>
<Copy k="chip.meta">Spreadsheet · XLSX · 64 KB</Copy>

<Copy k="scene4.title">Make it run every close</Copy>
<Copy k="scene4.sub">
  Customize the match logic once, then schedule it — the workbook and JE
  draft land on the same day every month.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} on the 2nd business day of each month against the newest
  subledger exports.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Intercompany recon and JE draft</Copy>
<Copy k="card.body">
  Runs {cmd} against the newest subledger exports in {folder} and writes the
  workbook and JE draft to the folder.
</Copy>
<Copy k="card.when">On the {time}, monthly</Copy>
<Copy k="card.when.time">2nd business day</Copy>

<Copy k="end">
  Every close, the recon workbook and JE draft are in your folder before the
  review.
</Copy>
`;export{e as default};