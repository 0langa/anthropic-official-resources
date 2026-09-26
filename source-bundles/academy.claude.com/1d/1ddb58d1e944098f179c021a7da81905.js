var e=`---
kind: widget-copy
---

{/* Film for the “Turn user interviews into findings” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Turn user interviews into findings</Copy>
<Copy k="sub">
  Your user interviews are done, and the team needs the findings this week.
</Copy>

<Copy k="line.ask">
  Using the Design plugin’s [[synthesis skill]], ask for themes, quotes tagged
  by participant, and open questions.
</Copy>
<Copy k="line.does">
  Claude reads your discussion guide and participant list first, then every
  transcript in the folder.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what it found, then gives you the [[findings document]].
</Copy>
<Copy k="line.note1">
  Each finding says how many participants showed it, with their quotes.
</Copy>
<Copy k="line.note2">
  It ends with open questions, including the one you kept open.
</Copy>
<Copy k="line.again">
  You can schedule the synthesis to rerun each evening as new transcripts
  arrive.
</Copy>
<Copy k="line.close">
  Product gets the findings this week, with every quote traceable.
</Copy>

<Copy k="attachment1.title">Research / Onboarding-Study-Q2</Copy>
<Copy k="attachment1.sub">12 transcripts and the guide</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">discussion-guide.pdf</Copy>
<Copy k="attachment2.sub">5 sections, 14 questions</Copy>
<Copy k="attachment2.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Synthesize the interview transcripts into a research findings doc. Cluster
  the observations into 5-7 themes, name each plainly, support each with 2-3
  [[verbatim quotes attributed to participant ID]], and [[end with the open
  questions]] the team still needs to answer.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">discussion-guide.pdf, 14 questions</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Onboarding study Q2, 12 participants</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">12 transcripts in Research / Onboarding-Study-Q2</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">each participant’s answers to the guide</Copy>

<Copy k="verb1">Reading the discussion guide</Copy>
<Copy k="verb2">Reading the participant roster</Copy>
<Copy k="verb3">Reading 12 transcripts</Copy>
<Copy k="verb4">Coding observations to the guide</Copy>
<Copy k="verb5">Grouping into themes</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Grouping into themes</Copy>
<Copy k="verb8">Writing the findings doc</Copy>

<Copy k="question.title">
  Do the few join-notification requests count as a finding?
</Copy>
<Copy k="question.option1">List it as an open question</Copy>
<Copy k="question.option2">Yes, report it as a finding</Copy>
<Copy k="question.answer">Not yet, list it as an open question.</Copy>

<Copy k="reply.did1">read all 12 transcripts against your guide</Copy>
<Copy k="reply.did2">grouped them into six findings</Copy>
<Copy k="reply.did3">quotes attributed by ID</Copy>
<Copy k="reply.did4">kept open as you decided</Copy>
<Copy k="reply.text">
  I read all 12 transcripts against your guide and participant list and
  grouped them into six findings, each with a participant count and quotes
  attributed by ID. Four open questions close the doc; the join notifications
  are the first, kept open as you decided.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: if new transcripts are in the study folder, fold them into
  the findings doc, note which themes moved, and keep quotes attributed by
  participant ID.
</Copy>
<Copy k="again.bubble.when">every weekday evening</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Rolling research synthesis</Copy>
<Copy k="again.card.cadence">Weekdays at 6:00 PM</Copy>
<Copy k="again.out1">
  Reads new transcripts against the guide and the roster
</Copy>
<Copy k="again.out2">
  Updates the findings doc and notes which themes moved
</Copy>
<Copy k="again.out3">Keeps every quote attributed by participant ID</Copy>
<Copy k="again.out3.em">no names</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 17b1bfd9ccb64e6a */}
<Copy k="widget.description">
  Film: a user asks Claude, through a research-synthesis skill, to turn a
  folder of interview transcripts into a findings document. Claude first reads
  the discussion guide, a participant roster, and every transcript, then
  checks with the user before deciding whether a borderline observation counts
  as a finding or should stay an open question. Claude returns a findings
  document where each theme states how many participants showed it and
  includes quotes attributed by participant ID, closing with open questions,
  including the one the user chose to keep open. The film ends by showing how
  the same synthesis can be scheduled to rerun automatically as new
  transcripts arrive, folding them into the existing findings and noting which
  themes shifted.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to synthesize interview transcripts into a
  findings document with themes, attributed quotes, and open questions,
  checking in on a borderline call. It ends showing the synthesis scheduled to
  rerun as new transcripts arrive.
</Copy>
`;export{e as default};