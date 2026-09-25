var e=`---
kind: widget-copy
---

{/* Film for the “Turn scattered threads into a design spec” use case.
    \`line.*\` are the one sentence shown per chapter; a phrase in [[double
    brackets]] is the part the film underlines — keep the brackets around the
    equivalent words. \`prompt\` is typed on screen. \`prompt\` ends with
    \`opener.question\`, word for word. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Turn scattered threads into a design spec</Copy>
<Copy k="sub">
  Your design decisions are scattered across threads, and you need one spec.
</Copy>

<Copy k="line.ask">
  Give the [[handoff skill]] your section order, and ask where each decision
  came from.
</Copy>
<Copy k="line.does">
  Claude reads the project channel, the files in your folder and the
  requirements draft.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  You get the [[spec]], with what Claude read and quoted at the top.
</Copy>
<Copy k="line.note1">Each decision quotes the message it came from.</Copy>
<Copy k="line.note2">
  Where sources disagree, both are quoted as an open question.
</Copy>
<Copy k="line.again">
  On a weekday schedule, Claude re-reads the channel and lists decisions that
  changed overnight.
</Copy>
<Copy k="line.close">
  Your team reviews one spec instead of rereading every thread.
</Copy>

<Copy k="opener.question">What did we already decide on checkout?</Copy>
<Copy k="attachment1.title">Design / Checkout-Redesign</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">kickoff-notes.docx</Copy>
<Copy k="attachment2.sub">14 Apr kickoff</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">spec-template.docx</Copy>
<Copy k="attachment3.sub">Team template</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Assemble everything in this folder, #checkout-redesign and the Checkout PRD
  draft in Notion into a single design spec: problem, goals, constraints,
  proposed solution, open questions, out of scope. [[Quote the source for any
  decision]] already made and [[flag anything contradictory]]. What did we
  already decide on checkout?
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">#checkout-redesign</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">kickoff-notes.docx</Copy>
<Copy k="source3.verb">Opened</Copy>
<Copy k="source3.text">current-flow-screens.png</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">Checkout PRD (draft)</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">spec-template.docx</Copy>

<Copy k="verb1">Reading #checkout-redesign</Copy>
<Copy k="verb2">Reading kickoff-notes.docx</Copy>
<Copy k="verb3">Viewing current-flow-screens.png</Copy>
<Copy k="verb4">Reading the PRD draft in Notion</Copy>
<Copy k="verb5">Reading spec-template.docx</Copy>
<Copy k="verb6">Matching decisions to sources</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Matching decisions to sources</Copy>
<Copy k="verb9">Writing the spec</Copy>

<Copy k="question.title">
  Did the April thread actually decide on guest checkout?
</Copy>
<Copy k="question.option1">No, list it as open</Copy>
<Copy k="question.option2">Yes, record it as decided</Copy>
<Copy k="question.answer">No, list it as an open question.</Copy>

<Copy k="reply.did1">wrote the spec in your section order</Copy>
<Copy k="reply.did2">six decisions quoted with who and where</Copy>
<Copy k="reply.did3">one conflict flagged</Copy>
<Copy k="reply.did4">two things I could not confirm</Copy>
<Copy k="reply.text">
  I read #checkout-redesign, the kickoff notes, the screenshots and the PRD
  draft and wrote the spec in your section order: six decisions quoted with
  who and where, one conflict flagged. Guest checkout is under Open questions
  with both sources quoted, beside two things I could not confirm.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when} until the review: re-read the channel and the folder, update
  the spec, and list decisions that changed at the top.
</Copy>
<Copy k="again.bubble.when">every weekday at 8am</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Spec freshness pass</Copy>
<Copy k="again.card.cadence">Weekdays at 8:00 AM</Copy>
<Copy k="again.out1">Re-reads #checkout-redesign and the project folder</Copy>
<Copy k="again.out2">
  Updates the spec and lists changed decisions at the top
</Copy>
<Copy k="again.out3">Re-checks the open questions</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: edea2ee38c65c339 */}
<Copy k="widget.description">
  Film: the user asks Claude to assemble scattered design discussion, a
  requirements draft, and reference screenshots into a single design spec,
  structured as problem, goals, constraints, proposed solution, open
  questions, and out of scope. Claude reads a team chat channel, a kickoff
  document, a screenshot, and a PRD draft, then checks with the user before
  treating an ambiguous, disputed point as settled rather than guessing. The
  resulting spec quotes the source message behind each decision and lists
  points where sources conflict as open questions rather than resolving them
  silently. The film closes by showing the same task set up to re-run on a
  recurring schedule, re-reading the channel and surfacing decisions that
  changed, so the spec stays current without the team re-reading every thread
  themselves.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to assemble scattered chat threads, a kickoff
  document, screenshots, and a requirements draft into one design spec,
  quoting sources and flagging conflicts as open questions, then schedules it
  to re-run regularly.
</Copy>
`;export{e as default};