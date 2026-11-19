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
  Ask Claude to [[rank themes by people]], not comments, and keep quotes
  anonymous.
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
  days is called out separately, as you chose, and each of the top three ends with a
  30-day plan and an owner.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new survey export is in the People folder, code it
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
    repository root. Run it again after you edit its copy. described-from: 3bfe2532155436b9 */}
<Copy k="widget.description">
  Film: the user asks Claude to turn a raw engagement-survey export into a
  leadership brief, instructing it to rank themes by how many people raised
  them (not by comment count), segment by team and tenure using the org
  roster, and keep quotes anonymous. Claude reads the survey comments, the
  roster, and a prior brief, groups comments into themes, and pauses to ask
  whether a theme raised by only one group should be called out separately
  rather than folded into the main ranking. Claude then explains what it found
  and delivers a one-page brief with top themes, anonymized supporting quotes,
  and a draft 30-day action plan with an owner for each, plus the underlying
  coding sheet. It closes by showing how the same brief can be scheduled to
  run automatically whenever a new survey export arrives.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to turn a raw engagement survey export into a
  leadership brief, ranking themes by people and segmenting by team and
  tenure. Claude pauses to ask about a borderline theme, then delivers the
  brief with action plans, and shows how to schedule it for future surveys.
</Copy>
`;export{e as default};