var e=`---
kind: widget-copy
---

{/* Film for the “Triage incoming NDAs” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Triage incoming NDAs</Copy>
<Copy k="sub">
  NDAs keep coming in, and only the unusual ones need a lawyer’s time.
</Copy>

<Copy k="line.ask">
  Using the Commercial Legal plugin’s [[review skill]], give Claude the folder
  and ask for exceptions only.
</Copy>
<Copy k="line.does">
  Claude reads your playbook first, then checks every agreement against each
  position.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  Claude tells you what it checked, then gives you the [[triage sheet]].
</Copy>
<Copy k="line.note1">
  Each document gets one verdict, so the routine ones clear immediately.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">one verdict</Copy>
<Copy k="line.note1.at2">routine ones</Copy>
<Copy k="line.note2">Each exception points to the exact clause to read.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">exact clause</Copy>
<Copy k="line.again">
  You can put the same check on a schedule for new files in the folder.
</Copy>
<Copy k="line.close">
  Routine NDAs clear quickly, and you only read the unusual ones.
</Copy>

<Copy k="attachment1.title">Intake</Copy>
<Copy k="attachment1.sub">40 PDFs</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">nda-playbook.pdf</Copy>
<Copy k="attachment2.sub">12 positions</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">standard-mutual-nda.docx</Copy>
<Copy k="attachment3.sub">Our form</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Triage every NDA in Intake [[against our NDA playbook]]. For each criterion,
  mark whether the paper meets our standard. If everything passes, mark it
  cleared for signature; otherwise [[list only the exceptions]] with a
  one-line reason each, in one sheet.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">nda-playbook.pdf</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">standard-mutual-nda.docx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">NDAs / Intake — 40 PDFs</Copy>
<Copy k="source4.verb">Checked</Copy>
<Copy k="source4.text">each agreement against 12 positions</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">nda-triage.xlsx</Copy>

<Copy k="verb1">Reading nda-playbook.pdf</Copy>
<Copy k="verb2">Reading standard-mutual-nda.docx</Copy>
<Copy k="verb3">Reading the Intake folder</Copy>
<Copy k="verb4">Checking each agreement</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Checking each agreement</Copy>
<Copy k="verb7">Writing the triage sheet</Copy>

<Copy k="question.title">
  Flag residuals clauses for a lawyer, or accept narrow ones?
</Copy>
<Copy k="question.option1">Flag them for a lawyer</Copy>
<Copy k="question.option2">Accept if limited to unaided memory</Copy>
<Copy k="question.answer">Flag them for a lawyer.</Copy>

<Copy k="reply.did1">checked the 40 NDAs in Intake</Copy>
<Copy k="reply.did2">against the 12 positions in your playbook</Copy>
<Copy k="reply.did3">cleared for signature</Copy>
<Copy k="reply.did4">Each exception is one line</Copy>
<Copy k="reply.text">
  I checked the 40 NDAs in Intake against the 12 positions in your playbook:
  31 are cleared for signature, 7 need counsel on a clause, and 2 should not
  be signed. Each exception is one line with its clause and the playbook
  section.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">PDF</Copy>

<Copy k="again.bubble">
  Run this {when} on new files in Intake and post the exceptions for counsel.
</Copy>
<Copy k="again.bubble.when">every weekday morning</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">NDA intake triage</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">Adds new NDAs to the triage sheet</Copy>
<Copy k="again.out2">Drafts the exceptions post for counsel</Copy>
<Copy k="again.out2.em">for you to review</Copy>
`;export{e as default};