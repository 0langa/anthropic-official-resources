var e=`---
kind: widget-copy
---

{/* Film for the “Reconcile headcount” use case. \`line.*\` are the one sentence
    shown per chapter; a phrase in [[double brackets]] is the part the film
    underlines — keep the brackets around the equivalent words. \`prompt\` is
    typed on screen. \`opener.cue*\` are each a word of \`sub\`: when that word
    appears, its window lifts. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Reconcile headcount</Copy>
<Copy k="sub">
  You need one headcount number, and your systems each say something
  different.
</Copy>

<Copy k="line.ask">
  Give the [[close skill]] your sources and say how to match people across
  them.
</Copy>
<Copy k="line.does">
  Claude reads the roster, the plan and the payroll register, then applies
  your cost-center map.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  You get the [[reconciliation workbook]], with what Claude matched at the
  top.
</Copy>
<Copy k="line.note1">
  Your three sources sit side by side, matched the way you said.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">three sources</Copy>
<Copy k="line.note1.at2">matched</Copy>
<Copy k="line.note2">
  Each difference gets one of your types, a cost and an owner.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">your types</Copy>
<Copy k="line.note2.at2">a cost</Copy>
<Copy k="line.again">
  Schedule it, and the same match runs on each new roster export at close.
</Copy>
<Copy k="line.close">
  Finance and HR agree on one number and why the others differ.
</Copy>

<Copy k="opener.cue1">headcount</Copy>
<Copy k="opener.cue2">systems</Copy>
<Copy k="opener.cue3">different</Copy>
<Copy k="attachment1.title">FY26-Close / Headcount / March</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">cost-center-map.csv</Copy>
<Copy k="attachment2.sub">8 cost centers</Copy>
<Copy k="attachment2.tag">CSV</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Reconcile March headcount across the Workday roster, the FY26 plan and GL
  payroll. [[Match by cost center and employee ID]], and [[list every
  difference by cost center]]: unplanned hires, open budgeted heads, roster
  with no payroll, contractors coded as FTE.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">workday-roster-2026-03-31.xlsx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">FY26-headcount-plan-v4.xlsx, March plan 298</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">payroll-register-mar.xlsx, 295 paid</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">cost-center-map.csv, 8 cost centers</Copy>

<Copy k="verb1">Reading the roster export</Copy>
<Copy k="verb2">Reading the plan</Copy>
<Copy k="verb3">Reading the payroll register</Copy>
<Copy k="verb4">Reading the cost-center map</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Matching by cost center and employee ID</Copy>
<Copy k="verb7">Writing the reconciliation</Copy>

<Copy k="question.title">Should I count contractors in the headcount?</Copy>
<Copy k="question.option1">Employees only, list contractors separately</Copy>
<Copy k="question.option2">Everyone on the roster</Copy>
<Copy k="question.answer">Employees only; list contractors separately.</Copy>

<Copy k="reply.did1">by cost center and employee ID</Copy>
<Copy k="reply.did2">explain the whole difference</Copy>
<Copy k="reply.did3">listed separately as you asked</Copy>
<Copy k="reply.did4">a suggested owner</Copy>
<Copy k="reply.text">
  I matched the roster, the plan and March payroll by cost center and employee
  ID: 299 on the roster, 298 in plan, 295 paid, and 15 breaks explain the
  whole difference. Contractors are listed separately as you asked; each break
  has an employee ID, annualized cost against plan and a suggested owner.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new Workday export is in FY26-Close / Headcount,
  reconcile it against the FY26 plan and the payroll register and write the
  by-cost-center recon there.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Monthly headcount reconciliation</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">
  Matches the newest roster export to plan and payroll by employee ID
</Copy>
<Copy k="again.out2">Flags breaks that are new since the last recon</Copy>
<Copy k="again.out3">Writes the workbook to the folder</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 81280d4013a0849a */}
<Copy k="widget.description">
  Film: a self-playing demonstration of using Claude to reconcile headcount
  across three disagreeing systems: an HRIS roster export, an approved
  headcount plan, and a payroll register. The user asks Claude to match people
  by cost center and employee ID and list every discrepancy. Claude reads each
  source, asks the user a judgment call about whether contractors should count
  toward headcount, then returns a reconciliation workbook showing the three
  sources side by side with matches at the top and every difference
  categorized by type, with a dollar impact and a suggested owner, so that
  together they fully explain the gap between sources. The film closes by
  showing how the same reconciliation can be scheduled to rerun automatically
  on each new roster export at close. It illustrates using an AI assistant to
  unify conflicting headcount data, classify variances, and produce a
  recurring, auditable reconciliation that finance and HR can agree on.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to reconcile headcount across a roster, an
  approved plan, and a payroll register, matching by cost center and employee
  ID. Claude asks a judgment question, then returns a categorized
  reconciliation workbook that can rerun automatically at each close.
</Copy>
`;export{e as default};