var e=`---
kind: widget-copy
---

{/* Film for the “Explain a budget variance” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`opener.cue*\` are each a word of \`sub\`: when
    that word appears, its window lifts. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Explain a budget variance</Copy>
<Copy k="sub">
  The month has closed and you need to explain what moved against budget.
</Copy>

<Copy k="line.ask">
  Using the Finance plugin’s [[variance analysis skill]], set your threshold
  and ask what moved and why.
</Copy>
<Copy k="line.does">
  Claude finds the lines over your threshold, then reads the ledger entries
  behind each one.
</Copy>
<Copy k="line.question">
  Claude finds the lines over your threshold, then reads the ledger entries
  behind each one.
</Copy>
<Copy k="line.get">
  Claude tells you what moved, then gives you the [[commentary]].
</Copy>
<Copy k="line.note1">
  Each line over your threshold gets a plain explanation.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">plain explanation</Copy>
<Copy k="line.note2">
  Anything Claude could not confirm is flagged for you to check.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">flagged</Copy>
<Copy k="line.again">
  Schedule it, and Claude saves a new draft when next month’s actuals arrive.
</Copy>
<Copy k="line.close">
  Every big change against budget is explained before anyone asks.
</Copy>

<Copy k="opener.cue1">closed</Copy>
<Copy k="opener.cue2">moved</Copy>
<Copy k="attachment1.title">FY26-Close / March</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">budget-FY26.xlsx</Copy>
<Copy k="attachment2.sub">March column</Copy>
<Copy k="attachment2.tag">XLSX</Copy>
<Copy k="attachment3.title">chart-of-accounts.pdf</Copy>
<Copy k="attachment3.sub">Account groups</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Draft March's variance commentary. Compare actuals to February and to
  budget, and for every line that moved [[more than 10% or $50K]] [[explain
  what moved and why]], for a leadership audience. Flag any driver the data
  doesn't explain.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">actuals-mar-2026.xlsx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">actuals-feb-2026.xlsx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">budget-FY26.xlsx, March column</Copy>
<Copy k="source4.verb">Checked</Copy>
<Copy k="source4.text">12 lines against both thresholds, 6 over</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">general-ledger detail for the 6 lines, March</Copy>
<Copy k="source6.verb">Read</Copy>
<Copy k="source6.text">variance-commentary-feb-2026.docx</Copy>

<Copy k="verb1">Reading actuals-mar-2026.xlsx</Copy>
<Copy k="verb2">Reading actuals-feb-2026.xlsx</Copy>
<Copy k="verb3">Reading the budget</Copy>
<Copy k="verb4">Comparing against both thresholds</Copy>
<Copy k="verb5">Reading the ledger detail</Copy>
<Copy k="verb6">Reading February’s commentary</Copy>
<Copy k="verb7">Writing the commentary</Copy>

<Copy k="reply.did1">compared March to February and budget</Copy>
<Copy k="reply.did2">each explained with its ledger driver</Copy>
<Copy k="reply.did3">whether it carries into April</Copy>
<Copy k="reply.did4">confirm with accounting</Copy>
<Copy k="reply.text">
  I compared March to February and budget across 12 lines: six moved over 10%
  or $50K, each explained with its ledger driver and whether it carries into
  April. One flag: the $36K software invoice may belong in prepaids; confirm
  with accounting.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new actuals file is in FY26-Close, run
  /variance-analysis against the prior month and budget and save the draft
  commentary there.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Monthly variance commentary</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Checks FY26-Close for a new actuals file</Copy>
<Copy k="again.out2">
  Drafts the commentary against the prior month and budget
</Copy>
<Copy k="again.out3">Saves the draft to that folder</Copy>
<Copy k="again.out3.em">with unclear drivers flagged</Copy>
`;export{e as default};