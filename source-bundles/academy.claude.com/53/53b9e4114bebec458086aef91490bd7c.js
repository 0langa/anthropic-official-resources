var e=`---
kind: widget-copy
---

{/* Film for the “Write the design doc or RFC” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Write the design doc or RFC</Copy>
<Copy k="sub">
  You need to turn rough notes into a design doc your team can review.
</Copy>

<Copy k="line.ask">
  Using the Engineering plugin’s [[system design skill]], ask for prior art
  and trade-offs before the draft.
</Copy>
<Copy k="line.does">
  Claude reads your notes and template, then searches the wiki and code for
  earlier decisions.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude tells you what it found, then gives you the [[draft RFC]].
</Copy>
<Copy k="line.note1">
  Each approach is weighed against the others and links to earlier proposals.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">weighed</Copy>
<Copy k="line.note2">
  The parts you kept are titled and empty for reviewers to see.
</Copy>
<Copy k="line.again">
  You can schedule the same draft for every new notes file in the inbox
  folder.
</Copy>
<Copy k="line.close">
  Your team gets a complete design doc and reviews the decision, not the
  writing.
</Copy>

<Copy k="attachment1.title">RFCs / 0087-streaming-events</Copy>
<Copy k="attachment1.sub">Template, notes, pipeline diagram</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">notes-streaming-migration.md</Copy>
<Copy k="attachment2.sub">Eleven bullets</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">rfc-template.md</Copy>
<Copy k="attachment3.sub">Nine sections</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  RFC for moving our event pipeline to streaming. [[Look up prior art and
  constraints]], then draft in our template with two or three approaches and
  trade-offs, a recommendation and open questions. I'll [[fill in the parts
  only I know]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">rfc-template.md and notes-streaming-migration.md</Copy>
<Copy k="source2.verb">Searched</Copy>
<Copy k="source2.text">event pipeline and streaming, 3 pages</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">event-loader and kafka-config repos</Copy>
<Copy k="source4.verb">Opened</Copy>
<Copy k="source4.text">current-pipeline-diagram.png</Copy>

<Copy k="verb1">Reading the template and your notes</Copy>
<Copy k="verb2">Searching Confluence</Copy>
<Copy k="verb3">Reading event-loader and kafka-config</Copy>
<Copy k="verb4">Viewing the pipeline diagram</Copy>
<Copy k="verb5">Comparing approaches</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Comparing three approaches</Copy>
<Copy k="verb8">Writing 0087-streaming-events.md</Copy>

<Copy k="question.title">
  Draft the rollout sections for you, or leave them empty?
</Copy>
<Copy k="question.option1">Leave them for me</Copy>
<Copy k="question.option2">Draft something I’ll correct</Copy>
<Copy k="question.answer">Leave them for me.</Copy>

<Copy k="reply.did1">searched Confluence and the two repos</Copy>
<Copy k="reply.did2">three approaches and trade-offs</Copy>
<Copy k="reply.did3">titled and left for you</Copy>
<Copy k="reply.did4">three open questions are listed</Copy>
<Copy k="reply.text">
  I read your notes and template, searched Confluence and the two repos for
  prior art, and drafted RFC-0087 with three approaches and trade-offs, citing
  RFC-0072, RFC-0061 and ADR-019. Recommendation is A, phased; Rollout plan
  and Operational impact are titled and left for you, and three open questions
  are listed.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  {when}: if there is a new notes file in RFCs / inbox, look up prior art and
  draft it in rfc-template.md the same way, my sections left empty.
</Copy>
<Copy k="again.bubble.when">Weekdays at 9am</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">RFC inbox drafts</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">Checks RFCs / inbox for new notes files</Copy>
<Copy k="again.out2">Looks up prior art in Confluence and GitHub</Copy>
<Copy k="again.out3">Writes a numbered draft in the template</Copy>
<Copy k="again.out3.em">your sections left empty</Copy>
`;export{e as default};