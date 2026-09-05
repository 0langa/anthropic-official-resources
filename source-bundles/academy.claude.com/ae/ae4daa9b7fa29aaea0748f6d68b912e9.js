var e=`---
kind: widget-copy
---

{/* Film for the “Prepare the interview debrief” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Prepare the interview debrief</Copy>
<Copy k="sub">
  Five interviewers scored a candidate, and the debrief is tomorrow.
</Copy>

<Copy k="line.ask">
  With the Human Resources plugin’s [[recruiting skill]], ask where the panel
  agrees and where it splits.
</Copy>
<Copy k="line.does">
  Claude reads every scorecard against your rubric and the interview plan for
  the role.
</Copy>
<Copy k="line.question">
  Claude reads every scorecard against your rubric and the interview plan for
  the role.
</Copy>
<Copy k="line.get">
  You get the [[debrief brief]], with what Claude found at the top.
</Copy>
<Copy k="line.note1">
  Every rating sits side by side, so splits and gaps stand out.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">side by side</Copy>
<Copy k="line.note2">
  The brief ends with questions and leaves the decision to the panel.
</Copy>
<Copy k="line.again">
  You can schedule the brief for when a candidate’s last scorecard comes in.
</Copy>
<Copy k="line.close">
  The panel sees the same evidence and makes the hiring call together.
</Copy>

<Copy k="attachment1.title">Hiring / Senior-PM-Growth / debrief</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">scorecards-export-ARivera.csv</Copy>
<Copy k="attachment2.sub">5 scorecards</Copy>
<Copy k="attachment2.tag">CSV</Copy>
<Copy k="attachment3.title">competency-rubric.pdf</Copy>
<Copy k="attachment3.sub">8 competencies at L5</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Synthesize the scorecards into the debrief brief: where the panel converged,
  where they split, which signals are [[strong versus anecdotal]], which
  competencies weren't covered, and three questions to resolve. [[Do not
  recommend hire or no-hire]]; the panel decides.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">scorecards-export-ARivera.csv, 5 scorecards</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">competency-rubric.pdf, 8 competencies at L5</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">interview-plan.docx, who covers what</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">20 ratings by competency against the plan</Copy>

<Copy k="verb1">Reading 5 scorecards</Copy>
<Copy k="verb2">Reading the competency rubric</Copy>
<Copy k="verb3">Reading the interview plan</Copy>
<Copy k="verb4">Lining up ratings by competency</Copy>
<Copy k="verb5">Checking coverage against the plan</Copy>
<Copy k="verb6">Writing the debrief brief</Copy>

<Copy k="reply.did1">lined up the five scorecards</Copy>
<Copy k="reply.did2">splits on stakeholder influence</Copy>
<Copy k="reply.did3">ends with three questions</Copy>
<Copy k="reply.did4">makes no recommendation</Copy>
<Copy k="reply.text">
  I lined up the five scorecards against the eight L5 competencies and the
  interview plan: the panel converges on four, splits on stakeholder
  influence, and nobody assessed data fluency or experiment design. The brief
  ends with three questions and, as you asked, makes no recommendation.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: for any candidate in Hiring whose last scorecard came in,
  write the debrief brief to that role’s folder, never with a recommendation.
</Copy>
<Copy k="again.bubble.when">every weekday morning</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Debrief brief when scorecards are in</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">
  Checks Hiring for candidates with every scorecard submitted
</Copy>
<Copy k="again.out2">
  Reads the scorecards against that role’s rubric and plan
</Copy>
<Copy k="again.out3">Writes the brief to the role’s debrief folder</Copy>
<Copy k="again.out3.em">never adds a recommendation</Copy>
`;export{e as default};