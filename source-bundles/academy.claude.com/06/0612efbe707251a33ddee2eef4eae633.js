var e=`---
kind: widget-copy
---

{/* Film for the “Run the performance review cycle” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Run the performance review cycle</Copy>
<Copy k="sub">
  You run the review cycle and want every manager to follow the same process.
</Copy>

<Copy k="line.ask">
  With the Human Resources plugin’s [[performance review skill]], ask Claude
  to build yours from the folder.
</Copy>
<Copy k="line.does">
  Claude reads the framework, the definitions, the template and this cycle’s
  dates first.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  Claude says what it built and gives you the [[skill]] and a test draft.
</Copy>
<Copy k="line.note1">
  Claude uses your definitions word for word and scores only your
  competencies.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">word for word</Copy>
<Copy k="line.note2">
  The draft follows your template and leaves the rating for the manager.
</Copy>
<Copy k="line.again">
  Share it with your managers so each of them follows the same steps in your
  template.
</Copy>
<Copy k="line.close">
  Every manager writes reviews the same way, in your framework.
</Copy>

<Copy k="attachment1.title">People / perf-cycle</Copy>
<Copy k="attachment1.sub">Framework, definitions, template, instructions</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">rating-definitions.docx</Copy>
<Copy k="attachment2.sub">Five ratings</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">review-template.docx</Copy>
<Copy k="attachment3.sub">Seven sections</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  [[Help me build the /performance-review skill]]. It should walk a manager
  through gathering input, scoring against our competencies, and drafting the
  review in our template, quote our rating definitions verbatim, and [[never
  invent criteria]] that aren't in the framework.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">performance-framework-2026.pdf</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">rating-definitions.docx, 5 ratings</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">review-template.docx, 7 sections</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">manager-cycle-instructions.pdf</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">H2 2026 review calendar</Copy>

<Copy k="verb1">Reading the framework</Copy>
<Copy k="verb2">Reading rating-definitions.docx</Copy>
<Copy k="verb3">Reading review-template.docx</Copy>
<Copy k="verb4">Reading the cycle instructions</Copy>
<Copy k="verb5">Reading the H2 calendar</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Writing the steps managers will follow</Copy>
<Copy k="verb8">Writing SKILL.md and one test draft</Copy>

<Copy k="question.title">
  Should the skill suggest an overall rating for managers?
</Copy>
<Copy k="question.option1">Leave it for the manager</Copy>
<Copy k="question.option2">Suggest one, marked as a suggestion</Copy>
<Copy k="question.answer">Leave it for the manager.</Copy>

<Copy k="reply.did1">built /performance-review from your framework</Copy>
<Copy k="reply.did2">your five definitions quoted exactly</Copy>
<Copy k="reply.did3">rating left blank</Copy>
<Copy k="reply.did4">ran it once on a sample</Copy>
<Copy k="reply.text">
  I built /performance-review from your framework, definitions, template and
  cycle instructions: it gathers input, scores only the six competencies with
  your five definitions quoted exactly, then fills the template, rating left
  blank. I ran it once on a sample so you can check the output.
</Copy>
<Copy k="file1.meta">Skill</Copy>
<Copy k="file2.meta">Test run</Copy>

<Copy k="again.bubble">
  {when} with our people managers, view only, so every H2 draft goes through
  it.
</Copy>
<Copy k="again.bubble.when">Share /performance-review</Copy>
<Copy k="again.underline">Share</Copy>
<Copy k="again.card.line">
  Walks a manager through input, scoring and drafting for the current cycle,
  in the People team’s template and rating language.
</Copy>
<Copy k="again.card.shared">Everyone in your organization can view</Copy>
`;export{e as default};