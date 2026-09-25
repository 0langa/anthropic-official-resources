var e=`---
kind: widget-copy
---

{/* Film for the “Check what still blocks the launch” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`prompt\` ends with \`opener.question\`, word
    for word. \`reply.did*\` are the phrases of the reply the film marks, in
    reading order: keep each one verbatim in \`reply.text\`. \`again.underline\`
    must be a word that appears in \`line.again\`. Company, people, file and
    channel names and the figures are simulated data: keep them as they are. */}

<Copy k="title">Check what still blocks the launch</Copy>
<Copy k="sub">
  Your launch is close and you need to know what is still blocked.
</Copy>

<Copy k="line.ask">
  Using the Product Management plugin’s [[stakeholder update skill]], ask for
  a checklist with owners and blockers.
</Copy>
<Copy k="line.does">
  Claude reads the plan documents, the tracker and the launch channel, then
  checks your past retros.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what is blocking, then gives you the [[readiness
  checklist]].
</Copy>
<Copy k="line.note1">Every checklist line has a status and an owner.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">a status</Copy>
<Copy k="line.note1.at2">an owner</Copy>
<Copy k="line.note2">Claude names what must clear; you make the call.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">names what</Copy>
<Copy k="line.note2.at2">must clear</Copy>
<Copy k="line.again">
  You can schedule it each morning of launch week, so standup has the current
  checklist.
</Copy>
<Copy k="line.close">
  Each morning you know what is still blocking the launch.
</Copy>

<Copy k="opener.question">Are we ready to ship on Thursday?</Copy>
<Copy k="attachment1.title">Launches / saved-views</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">launch-checklist-template.md</Copy>
<Copy k="attachment2.sub">Team template</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">PRD-saved-views-v1.3.docx</Copy>
<Copy k="attachment3.sub">Signed off 12 Aug</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Sweep launch readiness for saved views across the PRD, Linear,
  #launch-saved-views and the GTM brief. Give me the checklist from our
  template with [[status and owner per item]], a [[red/yellow/green call with
  blockers named]], and anything our last two retros flagged. Are we ready to
  ship on Thursday?
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">the PRD and the checklist template</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Saved views GA, 18 issues</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Saved views GTM brief, edited yesterday</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">#launch-saved-views, last 14 days</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">the last 2 launch retros in the folder</Copy>

<Copy k="verb1">Reading the PRD</Copy>
<Copy k="verb2">Reading the Linear project</Copy>
<Copy k="verb3">Reading the GTM brief</Copy>
<Copy k="verb4">Reading #launch-saved-views</Copy>
<Copy k="verb5">Comparing past retros</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Scoring each checklist line</Copy>
<Copy k="verb8">Writing the readiness doc</Copy>

<Copy k="question.title">
  Is the filter migration really done without a rollback plan?
</Copy>
<Copy k="question.option1">Open until a rollback plan exists</Copy>
<Copy k="question.option2">Done, and note the discussion</Copy>
<Copy k="question.answer">Open until a rollback plan exists.</Copy>

<Copy k="reply.did1">filled the checklist</Copy>
<Copy k="reply.did2">in progress with owners</Copy>
<Copy k="reply.did3">Overall it is Yellow</Copy>
<Copy k="reply.did4">the migration stays open</Copy>
<Copy k="reply.text">
  I read the PRD, 18 Linear issues, #launch-saved-views, the GTM brief and
  your two retros and filled the checklist: 7 of 12 lines green, 3 in progress
  with owners, 2 blocking Thursday. Overall it is Yellow: the reds are
  help-center articles and plan availability, and the migration stays open
  until the rollback runbook exists, as you said.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Every {when}, run this sweep and save {file} to Launches/saved-views with
  color changes since yesterday at the top.
</Copy>
<Copy k="again.bubble.when">weekday at 8am through Sep 3</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Launch readiness, saved views</Copy>
<Copy k="again.card.cadence">Weekdays at 8:00 AM</Copy>
<Copy k="again.out1">
  Runs the sweep across the folder, the project, the channel and the brief
</Copy>
<Copy k="again.out2">Writes the dated checklist to the launch folder</Copy>
<Copy k="again.out3">Lists color changes since yesterday first</Copy>
<Copy k="again.out3.em">for standup</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: dab2aaea2e4111b4 */}
<Copy k="widget.description">
  Film: a use-case walkthrough showing how Cowork checks launch readiness for
  a product feature. The user asks, via a stakeholder-update skill, for a
  checklist with owners and blockers. Claude reads the PRD, the issue tracker,
  the launch Slack channel, the GTM brief, and past launch retros, then pauses
  to confirm with the user a judgment call that is the user's to make rather
  than deciding it alone. It returns a checklist where every line has a status
  and an owner, along with a red/yellow/green overall call that names which
  blockers must clear before shipping, leaving the final go/no-go decision to
  the user. The film also shows scheduling the same sweep to run automatically
  each morning of launch week, so the checklist stays current for standup. It
  teaches that readiness reviews benefit from synthesizing multiple systems,
  separating status-tracking from decision-making, and automating recurring
  checks.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to sweep launch readiness across a PRD, issue
  tracker, Slack channel, and GTM brief, producing a checklist with status and
  owner per line and a red/yellow/green call naming blockers, then scheduling
  it to run daily.
</Copy>
`;export{e as default};