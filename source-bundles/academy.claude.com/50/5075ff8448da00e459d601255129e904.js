var e=`---
kind: widget-copy
---

{/* Film for the “Score competitor flows against your own” use case. \`line.*\`
    are the one sentence shown per chapter; a phrase in [[double brackets]] is
    the part the film underlines — keep the brackets around the equivalent
    words. \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Score competitor flows against your own</Copy>
<Copy k="sub">
  You want to compare a competitor’s sign-up flow with your own, step by step.
</Copy>

<Copy k="line.ask">
  With the Design plugin’s [[critique skill]], ask for rubric scores, a
  comparison, and patterns to adopt.
</Copy>
<Copy k="line.does">
  Claude reads your rubric, opens your current screens in your design tool,
  then reads every screenshot.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  Claude says what it found and gives you the [[scorecard]] and the teardown.
</Copy>
<Copy k="line.note1">
  Every score uses one rubric and shows the gap to your product.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">the gap</Copy>
<Copy k="line.note2">
  Each pattern points to the screenshot and the score behind it.
</Copy>
<Copy k="line.again">
  You can schedule a rescore each week for new screenshots in the folder.
</Copy>
<Copy k="line.close">
  You know where competitors are ahead of you and what to borrow.
</Copy>

<Copy k="attachment1.title">Competitive / Teardown-Q2</Copy>
<Copy k="attachment1.sub">24 screenshots and the rubric</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">heuristic-rubric.pdf</Copy>
<Copy k="attachment2.sub">13 heuristics, 0–4 scale</Copy>
<Copy k="attachment2.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Score each onboarding screen in this folder against Nielsen's ten heuristics
  plus our three custom ones, note where each competitor is [[stronger or
  weaker than us]], and end with the [[three patterns worth stealing]] and the
  three to avoid.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">heuristic-rubric.pdf, 13 heuristics</Copy>
<Copy k="source2.verb">Opened</Copy>
<Copy k="source2.text">Onboarding file, two versions of the flow</Copy>
<Copy k="source3.verb">Opened</Copy>
<Copy k="source3.text">24 screenshots, 3 products</Copy>
<Copy k="source4.verb">Checked</Copy>
<Copy k="source4.text">32 screens on 13 heuristics</Copy>

<Copy k="verb1">Reading the rubric</Copy>
<Copy k="verb2">Opening your Onboarding file</Copy>
<Copy k="verb3">Viewing 24 screenshots</Copy>
<Copy k="verb4">Scoring screens on 13 heuristics</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Reading 8 frames of Shipped v4.2</Copy>
<Copy k="verb7">Comparing each product with yours</Copy>
<Copy k="verb8">Writing the scorecard and teardown</Copy>

<Copy k="question.title">
  Compare competitors against your live onboarding or the redesign?
</Copy>
<Copy k="question.option1">Shipped v4.2, live today</Copy>
<Copy k="question.option2">The redesign, still in progress</Copy>
<Copy k="question.answer">The shipped version, v4.2.</Copy>

<Copy k="reply.did1">scored the 24 competitor screenshots</Copy>
<Copy k="reply.did2">against your 13 heuristics</Copy>
<Copy k="reply.did3">three patterns to adopt</Copy>
<Copy k="reply.did4">each pointing to its screenshot</Copy>
<Copy k="reply.text">
  I scored the 24 competitor screenshots and 8 frames of Shipped v4.2 against
  your 13 heuristics: you lead on five and trail on eight, furthest behind on
  progress visibility. The teardown ends with three patterns to adopt and
  three to avoid, each pointing to its screenshot and scores.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: score any new screenshots in Teardown-Q2 on the same rubric
  against Shipped v4.2, update the scorecard and the teardown, and flag any
  heuristic where a competitor moved ahead of us.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Weekly competitive rescore</Copy>
<Copy k="again.card.cadence">Mondays at 10:00 AM</Copy>
<Copy k="again.out1">
  Scores new screenshots on your rubric against the same baseline
</Copy>
<Copy k="again.out2">Updates the scorecard and the teardown doc</Copy>
<Copy k="again.out3">Flags any heuristic where a competitor moved ahead</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 5d8494efc796ff33 */}
<Copy k="widget.description">
  Film: this walkthrough shows the user asking Claude, via a design-critique
  skill, to score competitor onboarding screenshots and their own current flow
  against a shared usability rubric (Nielsen's ten heuristics plus three
  custom ones). Claude reads the rubric, opens the team's own design file,
  reviews every competitor screenshot, asks a clarifying question when a
  judgment call is needed rather than guessing, then returns a scorecard and a
  written teardown with per-heuristic gaps, citing the exact screenshot and
  score behind each finding, plus patterns worth adopting or avoiding. It
  closes by showing how the same comparison can be scheduled to rerun
  automatically as new screenshots arrive, keeping the competitive picture
  current.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to score competitor onboarding screenshots and
  their own flow against a shared usability rubric, resolving judgment calls
  by asking rather than guessing, then returns a scored teardown with cited
  evidence and patterns to adopt or avoid, schedulable to rerun automatically.
</Copy>
`;export{e as default};