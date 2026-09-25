var e=`---
kind: widget-copy
---

{/* Film for the “Build forecast scenarios” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Build forecast scenarios</Copy>
<Copy k="sub">
  Leadership asks for three forecast cases and the reasons behind each one.
</Copy>

<Copy k="line.ask">
  Name your three cases for the [[financial statements skill]] and say which
  assumptions change.
</Copy>
<Copy k="line.does">
  Claude reads the closed actuals first, then your model, hiring plan and last
  memo.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  You get the [[workbook]] and a memo, with what Claude changed at the top.
</Copy>
<Copy k="line.note1">The cases differ only in the assumptions you named.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">assumptions you named</Copy>
<Copy k="line.note2">The memo says which assumption drives each gap.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">which assumption</Copy>
<Copy k="line.again">
  You can put it on a schedule, and Claude runs the cases again whenever new
  actuals close.
</Copy>
<Copy k="line.close">
  Leadership sees three cases on one model, with your reasons attached.
</Copy>

<Copy k="attachment1.title">Planning / FY-forecast</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">driver-model-FY27.xlsx</Copy>
<Copy k="attachment2.sub">Driver model</Copy>
<Copy k="attachment2.tag">XLSX</Copy>
<Copy k="attachment3.title">assumptions-Q1.docx</Copy>
<Copy k="attachment3.sub">Last quarter’s memo</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Pull the latest actuals into the driver model, extend it four quarters, and
  run [[base, upside, and downside scenarios]]. For each, list [[which
  assumptions changed and by how much]], then write [[a one-page memo]]
  explaining what drives the difference.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">netsuite-actuals-Q2-FY27.csv</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">driver-model-FY27.xlsx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">headcount-plan.xlsx</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">assumptions-Q1.docx</Copy>

<Copy k="verb1">Reading the Q2 close export</Copy>
<Copy k="verb2">Reading driver-model-FY27.xlsx</Copy>
<Copy k="verb3">Reading headcount-plan.xlsx</Copy>
<Copy k="verb4">Reading assumptions-Q1.docx</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Running the three cases</Copy>
<Copy k="verb7">Writing the memo</Copy>

<Copy k="question.title">
  Which assumptions should change between the three cases?
</Copy>
<Copy k="question.option1">Win rate, churn and hiring pace</Copy>
<Copy k="question.option2">All six, including pricing and expansion</Copy>
<Copy k="question.answer">Win rate, churn and hiring pace only.</Copy>

<Copy k="reply.did1">rebased the model on the Q2 close</Copy>
<Copy k="reply.did2">ran base, upside and downside</Copy>
<Copy k="reply.did3">The memo sizes each changed assumption</Copy>
<Copy k="reply.did4">in last quarter’s format</Copy>
<Copy k="reply.text">
  I rebased the model on the Q2 close ($40.0M opening ARR) and ran base,
  upside and downside four quarters out: they end $7.0M apart, differing only
  in win rate, churn and hiring. The memo sizes each changed assumption, in
  last quarter’s format.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: if newly closed actuals are in Planning / FY-forecast, roll
  the model forward, rerun the three cases on the drivers we chose and save
  the memo beside it.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Monthly re-forecast</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Rolls the driver model forward on the new close</Copy>
<Copy k="again.out2">
  Reruns base, upside and downside on your chosen drivers
</Copy>
<Copy k="again.out3">Saves the memo beside the model</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: ef007fb7ff8a6bf4 */}
<Copy k="widget.description">
  Film: the user asks Claude to pull the latest ledger actuals into a
  financial driver model, extend it several quarters forward, and run base,
  upside, and downside scenarios, then explain the differences in a one-page
  memo. Claude reads the actuals, the existing model, a headcount plan, and a
  prior memo, then pauses to confirm which assumptions should vary between
  cases before running them and drafting the memo in the same format as
  before. The output is an updated workbook with three scenarios on one driver
  model and a memo showing what changed and why. It teaches that Claude can
  rebase a forecast on new actuals, isolate which assumptions drive scenario
  differences, ask before deciding judgment calls, and be scheduled to rerun
  automatically as new actuals close.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to rebase a driver model on new actuals and run
  base, upside, and downside scenarios. Claude reads supporting documents,
  pauses to confirm which assumptions vary, then returns an updated workbook
  and memo, runnable again on a schedule.
</Copy>
`;export{e as default};