var e=`---
kind: widget-copy
---

{/* Film for the “Check what a new regulation requires” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`prompt\` ends with \`opener.question\`, word
    for word. \`reply.did*\` are the phrases of the reply the film marks, in
    reading order: keep each one verbatim in \`reply.text\`. \`again.underline\`
    must be a word that appears in \`line.again\`. Company, people, file and
    channel names and the figures are simulated data: keep them as they are. */}

<Copy k="title">Check what a new regulation requires</Copy>
<Copy k="sub">
  A new regulation is out and you need to know what applies to you.
</Copy>

<Copy k="line.ask">
  With the Regulatory Legal plugin’s [[policy skill]], ask what applies and
  why, and what’s due when.
</Copy>
<Copy k="line.does">
  Claude lists what the rule requires, then checks each requirement against
  your product descriptions and policies.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude says what applies and why, and gives you the [[brief]] and action
  table.
</Copy>
<Copy k="line.note1">
  Claude says what applies to each of your products, and why.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">what applies</Copy>
<Copy k="line.note1.at2">and why</Copy>
<Copy k="line.note2">
  Each rule that applies becomes a task with an owner and date.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">an owner and date</Copy>
<Copy k="line.again">
  You can schedule the same brief for every new rule dropped into a watch
  folder.
</Copy>
<Copy k="line.close">
  You know which parts of the new rule apply, what to change, and by when.
</Copy>

<Copy k="opener.question">Which parts of this apply to us, and by when?</Copy>
<Copy k="attachment1.title">Regulatory / EU-AI-Act</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">eu-ai-act-final-text.pdf</Copy>
<Copy k="attachment2.sub">144 pages</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">product-descriptions.docx</Copy>
<Copy k="attachment3.sub">3 products</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Read this regulation against our product descriptions and current policies.
  Draft the compliance brief: what changed from the prior rule, [[which
  provisions apply to us and why]], and for each [[what we must do and by
  when]]. Save it to the folder for product and compliance leads. Which parts
  of this apply to us, and by when?
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">eu-ai-act-final-text.pdf, 113 articles, 13 annexes</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">product-descriptions.docx, 3 products</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">current-privacy-and-ai-policies.pdf, 4 policies</Copy>
<Copy k="source4.verb">Searched</Copy>
<Copy k="source4.text">AI systems inventory.xlsx on SharePoint</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">EUR-Lex text and application dates</Copy>
<Copy k="source6.verb">Checked</Copy>
<Copy k="source6.text">38 requirements to 3 products and 4 policies</Copy>

<Copy k="verb1">Reading eu-ai-act-final-text.pdf</Copy>
<Copy k="verb2">Reading product-descriptions.docx</Copy>
<Copy k="verb3">Reading the policy bundle</Copy>
<Copy k="verb4">Finding the AI systems inventory</Copy>
<Copy k="verb5">Checking EUR-Lex for application dates</Copy>
<Copy k="verb6">Mapping 38 requirements</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Mapping requirements to products</Copy>
<Copy k="verb9">Writing the brief</Copy>

<Copy k="question.title">
  Will the new ranking model in v5 launch in the EU?
</Copy>
<Copy k="question.option1">Yes, all regions on 17 November</Copy>
<Copy k="question.option2">No, the EU stays on v4</Copy>
<Copy k="question.answer">Yes, every region on 17 November.</Copy>

<Copy k="reply.did1">checked the Regulation’s 38 requirements</Copy>
<Copy k="reply.did2">against your three products and four policies</Copy>
<Copy k="reply.did3">Two calls are flagged for counsel</Copy>
<Copy k="reply.did4">12 dated actions carry owners</Copy>
<Copy k="reply.text">
  I checked the Regulation’s 38 requirements against your three products and
  four policies: 17 apply to Helios, 14 to Match as high-risk once v5 ships to
  EU customers on 17 November. Two calls are flagged for counsel, and 12 dated
  actions carry owners and the policy section each changes.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new file is in Regulatory / Watch, run the same brief
  against our product descriptions and policies and save it to a subfolder
  named for the rule.
</Copy>
<Copy k="again.bubble.when">every weekday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">New-regulation applicability brief</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">Checks Regulatory / Watch for new files</Copy>
<Copy k="again.out2">
  Writes the brief and the action table to a subfolder for the rule
</Copy>
<Copy k="again.out3">Flags uncertain calls</Copy>
<Copy k="again.out3.em">for counsel to review</Copy>
`;export{e as default};