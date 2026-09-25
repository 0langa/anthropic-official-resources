var e=`---
kind: widget-copy
---

{/* Film for the “Turn survey results into an action plan” use case. \`line.*\`
    are the one sentence shown per chapter; a phrase in [[double brackets]] is
    the part the film underlines — keep the brackets around the equivalent
    words. \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Turn survey results into an action plan</Copy>
<Copy k="sub">
  Your engagement survey results are in and leadership needs themes and
  actions.
</Copy>

<Copy k="line.ask">
  Ask the [[org planning skill]] to rank themes by people, not comments, and
  keep quotes anonymous.
</Copy>
<Copy k="line.does">
  Claude reads every comment and your roster, so themes break down by team and
  tenure.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude tells you what it found, then gives you the [[brief and sheet]].
</Copy>
<Copy k="line.note1">Themes are ranked by how many people raised them.</Copy>
<Copy k="line.note2">Each theme ends with a draft plan a leader can own.</Copy>
<Copy k="line.again">
  You can schedule the same brief for each new survey export in the folder.
</Copy>
<Copy k="line.close">
  Leadership sees what people raised most and a plan for each theme.
</Copy>

<Copy k="attachment1.title">People / engagement-Q2</Copy>
<Copy k="attachment1.sub">2 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">engagement-q2-export.csv</Copy>
<Copy k="attachment2.sub">803 comments</Copy>
<Copy k="attachment2.tag">CSV</Copy>
<Copy k="attachment3.title">org-roster-apr.csv</Copy>
<Copy k="attachment3.sub">612 people</Copy>
<Copy k="attachment3.tag">CSV</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Theme the open-text responses, segment by team and tenure, and [[separate
  loud-minority comments from broad signal]]. Write a one-page People brief:
  top three themes with quotes and a draft 30-day action plan each. [[Never
  attribute a quote to an individual.]]
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">engagement-q2-export.csv</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">org-roster-apr.csv</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Q1 people brief</Copy>

<Copy k="verb1">Reading 803 comments</Copy>
<Copy k="verb2">Reading org-roster-apr.csv</Copy>
<Copy k="verb3">Reading the Q1 people brief</Copy>
<Copy k="verb4">Grouping comments into themes</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Counting people, not comments</Copy>
<Copy k="verb7">Writing the brief</Copy>

<Copy k="question.title">
  Call out the office-days comments only one group raised?
</Copy>
<Copy k="question.option1">Yes, as one group’s concern</Copy>
<Copy k="question.option2">No, leave it in the list</Copy>
<Copy k="question.answer">Yes, call it out as one group’s concern.</Copy>

<Copy k="reply.did1">coded the 803 comments</Copy>
<Copy k="reply.did2">ranked them by people</Copy>
<Copy k="reply.did3">called out separately, as you chose</Copy>
<Copy k="reply.did4">a 30-day plan and an owner</Copy>
<Copy k="reply.text">
  I coded the 803 comments from 441 people into eight themes against your
  roster and ranked them by people: time with managers leads with 168. Office
  days is called out separately, as you chose, and each theme ends with a
  30-day plan and an owner.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new survey export is in People / engagement, code it
  the same way and write the brief and coding sheet to that quarter’s folder.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Engagement survey brief</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Codes the new comments and ranks themes by people</Copy>
<Copy k="again.out2">Applies your anonymity rules</Copy>
<Copy k="again.out3">
  Writes the brief and coding sheet to that quarter’s folder
</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 52f2e5fb8f93fc72 */}
<Copy k="widget.description">
  Film: a use-case walkthrough showing how Cowork turns raw engagement-survey
  exports into an action plan. The user asks an org-planning skill to theme
  open-text survey comments, segmenting by team and tenure using a roster,
  while keeping quotes anonymous and separating loud-minority comments from
  broad signal. Claude reads the comment export, the roster, and a prior
  brief, then pauses to ask the user a judgment call about how to treat a
  comment pattern raised by only one group. It returns a brief ranking themes
  by how many people raised them (not comment volume), with quotes and a draft
  30-day plan and owner per theme, plus the underlying coded spreadsheet. The
  film closes by showing how the same brief can be scheduled to run
  automatically on each new survey export.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to theme open-text survey comments by team and
  tenure, ranking by people raised rather than comment count, and separating
  loud-minority views from broad signal. Claude pauses to ask a judgment call,
  then delivers an anonymized brief with quotes and a 30-day plan per theme.
</Copy>
`;export{e as default};