var e=`---
kind: widget-copy
---

{/* Film for the “Document your SOX controls” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Document your SOX controls</Copy>
<Copy k="sub">
  Audit needs your process documented and you only have walkthrough notes.
</Copy>

<Copy k="line.ask">
  With the Finance plugin’s [[SOX testing skill]], say how the process runs
  and ask for gaps.
</Copy>
<Copy k="line.does">
  Claude reads your notes, template and last year’s documents, then maps each
  step to a control.
</Copy>
<Copy k="line.question">
  Claude reads your notes, template and last year’s documents, then maps each
  step to a control.
</Copy>
<Copy k="line.get">
  Claude tells you what it flagged, then gives you the [[matrix and
  narrative]].
</Copy>
<Copy k="line.note1">
  Steps with a missing or weak control are flagged in the matrix.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">missing or weak</Copy>
<Copy k="line.note2">
  The narrative uses the same step numbers, so the files agree.
</Copy>
<Copy k="line.again">
  On a schedule, Claude drafts the package for each new walkthrough added to
  the folder.
</Copy>
<Copy k="line.close">
  The auditors get complete documentation, with the gaps already flagged for
  you.
</Copy>

<Copy k="attachment1.title">Controls / Order-to-Cash</Copy>
<Copy k="attachment1.sub">4 items</Copy>
<Copy k="attachment1.tag">Folder</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Here's how the process runs. Write the process narrative [[in our standard
  format]], build [[the RCM]] with each risk's control, owner and frequency,
  and draw the flowchart. [[Flag any step missing a control]] or where duties
  aren't segregated.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">walkthrough-notes-OTC.docx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">RCM-template.xlsx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">prior-year-narrative-OTC.pdf</Copy>
<Copy k="source4.verb">Opened</Copy>
<Copy k="source4.text">FY25 RCM and the IA controls library</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">system-screenshots, 6 images</Copy>
<Copy k="source6.verb">Checked</Copy>
<Copy k="source6.text">11 steps to risks and controls</Copy>

<Copy k="verb1">Reading walkthrough-notes-OTC.docx</Copy>
<Copy k="verb2">Reading RCM-template.xlsx</Copy>
<Copy k="verb3">Reading last year’s narrative</Copy>
<Copy k="verb4">Opening the FY25 matrix</Copy>
<Copy k="verb5">Reading the system screenshots</Copy>
<Copy k="verb6">Mapping steps to risks and controls</Copy>
<Copy k="verb7">Writing the narrative</Copy>
<Copy k="verb8">Building the matrix</Copy>

<Copy k="reply.did1">mapped your walkthrough’s 11 steps</Copy>
<Copy k="reply.did2">wrote the narrative and the matrix</Copy>
<Copy k="reply.did3">under the same OTC-C references</Copy>
<Copy k="reply.did4">flagged as gaps before internal audit</Copy>
<Copy k="reply.text">
  I mapped your walkthrough’s 11 steps to 12 controls and wrote the narrative
  and the matrix under the same OTC-C references, with the flowchart as
  Appendix A. Three steps are flagged as gaps before internal audit: OTC-C09,
  OTC-C10 and a proposed OTC-C12.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: if there is a new walkthrough file in Controls, run
  /sox-testing on it and write the narrative, matrix and flowchart to a
  subfolder named for the process.
</Copy>
<Copy k="again.bubble.when">every weekday morning</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Controls documentation package</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">
  Drafts the narrative, matrix and flowchart for each new walkthrough
</Copy>
<Copy k="again.out2">Lists the flagged gaps at the top of the reply</Copy>
<Copy k="again.out2.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 14e9a78ff2e74363 */}
<Copy k="widget.description">
  Film: a walkthrough of using Claude to turn a plain-English process
  walkthrough into SOX audit documentation. The user shares how an
  order-to-cash process actually runs, along with walkthrough notes, a
  risk-control-matrix template, and a prior-year narrative, then asks Claude
  to write the narrative in the organization's standard format, build a
  risk-control matrix mapping each risk to its control, owner, and frequency,
  draw a flowchart, and flag any step with a missing control or a
  segregation-of-duties issue. Claude reads the source documents, maps each
  process step to a control, and returns a completed matrix and narrative
  using matching references so the two documents agree, with flagged gaps
  called out for review. The film also shows the task set up to run
  automatically whenever a new walkthrough is added, producing the same
  documentation package on a recurring schedule.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to turn a process walkthrough into a risk-control
  matrix and narrative, mapping each step to a control and flagging gaps, then
  sets up the same documentation to run on a recurring schedule.
</Copy>
`;export{e as default};