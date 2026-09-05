var e=`---
kind: widget-copy
---

{/* Film for the “Write a legal research memo” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`opener.mark\` is the phrase highlighted in
    the opening window and must match its text. \`reply.did*\` are the phrases
    of the reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Write a legal research memo</Copy>
<Copy k="sub">
  A colleague has emailed you a legal question and needs a cited memo.
</Copy>

<Copy k="line.ask">
  Name the research service and memo sections for the [[drafting skill]], with
  every proposition cited.
</Copy>
<Copy k="line.does">
  Claude reads the request and your prior memos, then searches the research
  service for authority.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what it searched and cited, then gives you the [[research
  memo]].
</Copy>
<Copy k="line.note1">Every claim is cited to where Claude found it.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">cited</Copy>
<Copy k="line.note2">
  What Claude could not support is listed as open, not guessed.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">could not support</Copy>
<Copy k="line.note2.at2">listed as open</Copy>
<Copy k="line.again">
  Save the run as a skill with your format and jurisdictions, then share it
  with the team.
</Copy>
<Copy k="line.close">
  Your colleague gets a cited memo, after you have checked each source.
</Copy>

<Copy k="opener.mark">tell me where we stand by Thursday</Copy>
<Copy k="attachment1.title">Research / Norwell-Indemnity-Tender</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">research-request-and-facts.docx</Copy>
<Copy k="attachment2.sub">Maya’s question and the facts</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">memo-template-house-format.docx</Copy>
<Copy k="attachment3.sub">House format</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Research this question. Surface case law and regulatory guidance via Thomson
  Reuters and draft a research memo: question presented, short answer,
  [[discussion grouped by authority]], and open issues. [[Cite every
  proposition]] to the source you relied on.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">4 files in Research / Norwell-Indemnity-Tender</Copy>
<Copy k="source2.verb">Searched</Copy>
<Copy k="source2.text">2 prior memos on indemnity tenders</Copy>
<Copy k="source3.verb">Searched</Copy>
<Copy k="source3.text">duty to defend: 8 authorities</Copy>
<Copy k="source4.verb">Searched</Copy>
<Copy k="source4.text">anti-indemnity statute: 2 results</Copy>

<Copy k="verb1">Reading the matter folder</Copy>
<Copy k="verb2">Finding prior memos</Copy>
<Copy k="verb3">Searching the research service</Copy>
<Copy k="verb4">Searching the research service</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Grouping the authorities</Copy>
<Copy k="verb7">Writing the memo</Copy>

<Copy k="question.title">
  Search the web where your research service has nothing?
</Copy>
<Copy k="question.option1">No, list it as open</Copy>
<Copy k="question.option2">Yes, and tag it to verify</Copy>
<Copy k="question.answer">No, list it as an open issue.</Copy>

<Copy k="reply.did1">drafted the memo in your house format</Copy>
<Copy k="reply.did2">every proposition is cited</Copy>
<Copy k="reply.did3">none from model knowledge</Copy>
<Copy k="reply.did4">Four open issues are listed</Copy>
<Copy k="reply.text">
  I searched CoCounsel and two prior memos in iManage and drafted the memo in
  your house format: every proposition is cited and tagged by source, ten from
  CoCounsel, none from model knowledge. Four open issues are listed; the
  anti-indemnity point stays open as you asked.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Make what we’ve done in this task into a {when}, with my house format,
  citation style and jurisdictions built in.
</Copy>
<Copy k="again.bubble.when">skill called /research-memo</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Drafts a cited research memo in the house format from a request in the
  folder, and lists unsupported points as open issues.
</Copy>
<Copy k="again.card.shared">Your legal team can view</Copy>
`;export{e as default};