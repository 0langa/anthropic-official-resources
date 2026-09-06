var e=`---
kind: widget-copy
---

{/* Film for the “Write a PRD from a problem statement” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Write a PRD from a problem statement</Copy>
<Copy k="sub">You have a one-page problem statement and need a full PRD.</Copy>

<Copy k="line.ask">
  With the Product Management plugin’s [[spec skill]], have Claude interview
  you first and name your template.
</Copy>
<Copy k="line.does">
  Claude reads the template, your example and the open requests before it asks
  anything.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what it assumed, then gives you the [[PRD]].
</Copy>
<Copy k="line.note1">
  Goals and non-goals come from your answers, in your template’s sections.
</Copy>
<Copy k="line.note2">
  Each open question has an owner, and Claude’s assumptions are marked.
</Copy>
<Copy k="line.close">
  Design review starts from a full PRD with the open questions marked.
</Copy>

<Copy k="attachment1.title">Product / prds</Copy>
<Copy k="attachment1.sub">Template and one past PRD</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">prd-template.docx</Copy>
<Copy k="attachment2.sub">Nine sections</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">PRD-bulk-export.docx</Copy>
<Copy k="attachment3.sub">Depth to match</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Write a PRD for the saved-views problem. [[Interview me first]]: who hits
  it, the constraints, how we'd measure success. Draft in prd-template.docx,
  call out goals and non-goals, match the depth of PRD-bulk-export.docx, and
  [[flag every open question for design review]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">prd-template.docx, 9 sections</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">PRD-bulk-export.docx, depth reference</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">14 issues labeled saved-views</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">Saved views discovery notes, 6 interviews</Copy>

<Copy k="verb1">Reading prd-template.docx</Copy>
<Copy k="verb2">Reading PRD-bulk-export.docx</Copy>
<Copy k="verb3">Reading the saved-views requests</Copy>
<Copy k="verb4">Reading discovery notes</Copy>
<Copy k="verb5">Interviewing you</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Turning answers into goals and requirements</Copy>
<Copy k="verb8">Writing saved-views-prd.docx</Copy>

<Copy k="question.title">Who should the first version be built for?</Copy>
<Copy k="question.option1">Support leads rebuilding filters (9 requests)</Copy>
<Copy k="question.option2">Admins wanting one team view (3)</Copy>
<Copy k="question.option3">Analysts exporting filtered lists (2)</Copy>
<Copy k="question.answer">Support leads.</Copy>

<Copy k="reply.did1">asked you about users, constraints and success</Copy>
<Copy k="reply.did2">drafted the PRD in prd-template.docx</Copy>
<Copy k="reply.did3">Five open questions go to design review</Copy>
<Copy k="reply.did4">two are answers I assumed</Copy>
<Copy k="reply.text">
  I read the 14 requests, asked you about users, constraints and success, and
  drafted the PRD in prd-template.docx at the bulk-export depth: four goals,
  three non-goals, nine requirements. Five open questions go to design review;
  two are answers I assumed, so check those first.
</Copy>
<Copy k="file1.meta">Document</Copy>
`;export{e as default};