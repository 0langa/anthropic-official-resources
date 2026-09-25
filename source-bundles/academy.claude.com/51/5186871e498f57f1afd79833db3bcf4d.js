var e=`---
kind: widget-copy
---

{/* Film for the “Prepare for the pipeline review” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Prepare for the pipeline review</Copy>
<Copy k="sub">
  You need to know which open deals are at risk before the pipeline review.
</Copy>

<Copy k="line.ask">
  With the Sales plugin’s [[pipeline review skill]], give your manager’s
  checks and ask for reasons.
</Copy>
<Copy k="line.does">
  Claude reads your stage definitions first, then pulls each open deal and its
  activity from the CRM.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you how the deals scored, then gives you the [[sheet and
  review]].
</Copy>
<Copy k="line.note1">
  Every deal is scored on the checks your manager uses.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">the checks</Copy>
<Copy k="line.note1.at2">scored</Copy>
<Copy k="line.note2">
  Each flagged deal gets one line you can take to the meeting.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">one line</Copy>
<Copy k="line.again">
  Schedule it, and the scored sheet and review are in the folder before each
  meeting.
</Copy>
<Copy k="line.close">
  You walk into the pipeline review knowing which deals need attention.
</Copy>

<Copy k="attachment1.title">Pipeline / 2026-W36</Copy>
<Copy k="attachment1.sub">2 reference files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">stage-exit-criteria.pdf</Copy>
<Copy k="attachment2.sub">Your four stage definitions</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">review-doc-W35.docx</Copy>
<Copy k="attachment3.sub">Last week’s format</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Score each open opp on stage hygiene, [[whether there's a real next step]],
  and how long it's sat in stage. Flag the at-risk deals and [[say why in one
  line each]], then write [[the manager-ready review doc]] for our Monday
  pipeline meeting.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">stage-exit-criteria.pdf</Copy>
<Copy k="source2.verb">Queried</Copy>
<Copy k="source2.text">My Open Pipeline, Q3: 24 open opportunities</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">activity history and contact roles for each</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">review-doc-W35.docx</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">each opportunity on your three checks</Copy>

<Copy k="verb1">Reading stage-exit-criteria.pdf</Copy>
<Copy k="verb2">Pulling the open pipeline from Salesforce</Copy>
<Copy k="verb3">Reading activity and contact roles</Copy>
<Copy k="verb4">Reading last week’s review</Copy>
<Copy k="verb5">Scoring each opportunity</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Writing the scored sheet</Copy>
<Copy k="verb8">Writing the review</Copy>

<Copy k="question.title">
  Downgrade Aperture Health from Commit to Best Case?
</Copy>
<Copy k="question.option1">Yes, move to Best Case</Copy>
<Copy k="question.option2">No, keep in Commit, flag it</Copy>
<Copy k="question.answer">Yes, move it to Best Case.</Copy>

<Copy k="reply.did1">scored the 24 open opportunities</Copy>
<Copy k="reply.did2">against your four stage definitions</Copy>
<Copy k="reply.did3">each with a one-line reason</Copy>
<Copy k="reply.did4">nothing changed in Salesforce</Copy>
<Copy k="reply.text">
  I scored the 24 open opportunities against your four stage definitions on
  three checks: 12 pass, 7 are on watch and 5 are at risk, each with a
  one-line reason. The review follows last week’s format, Aperture Health
  counts as Best Case as you decided, and nothing changed in Salesforce.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: pull my open pipeline from Salesforce, score it with
  /pipeline-review against stage-exit-criteria.pdf, and write the sheet and
  review to a new week folder under Pipeline.
</Copy>
<Copy k="again.bubble.when">every Monday at 8am</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Monday pipeline review</Copy>
<Copy k="again.card.cadence">Mondays at 8:00 AM</Copy>
<Copy k="again.out1">Pulls open opportunities from Salesforce</Copy>
<Copy k="again.out2">Scores them against stage-exit-criteria.pdf</Copy>
<Copy k="again.out3">
  Writes the scored sheet and review to a new week folder
</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 205762c43c4a8ec8 */}
<Copy k="widget.description">
  Film: the user asks Claude, via a pipeline-review skill, to score every open
  opportunity in a CRM against a manager's stage-exit criteria, checking stage
  hygiene, whether there's a real next step, and how long each deal has sat in
  its stage. Claude reads the criteria document, pulls the open pipeline and
  activity history, checks with the user before reclassifying a forecast
  category that's the user's call, then flags at-risk and watch-list deals
  with a one-line reason each. It delivers a scored spreadsheet and a
  manager-ready review document, with nothing altered in the CRM itself, and
  shows the task being scheduled to run automatically before future meetings.
  It teaches how Claude can combine CRM data with defined criteria to surface
  deal risk and prepare recurring forecast reviews.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to score open CRM opportunities against
  stage-exit criteria, flag at-risk deals with reasons, and produce a review
  document, then schedules it to run automatically before future meetings.
</Copy>
`;export{e as default};