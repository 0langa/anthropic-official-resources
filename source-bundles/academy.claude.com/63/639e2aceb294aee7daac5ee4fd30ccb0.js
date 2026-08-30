var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Competitive teardown and heuristic audit” use
    case. Scene text is typed on screen character by character, so keep
    sentences natural at any length; {tokens} are filled by the widget with
    its simulated commands and folder names — keep them where the sentence
    needs them. */}

<Copy k="title">Competitive teardown and heuristic audit</Copy>
<Copy k="subtitle">
  Reads competitor screenshots and your rubric, writes a scored teardown
  with patterns to steal.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the teardown folder and describe the audit you need.
</Copy>
<Copy k="menu.category">Design</Copy>
<Copy k="prompt">
  Score each competitor screen against our heuristic rubric, note where
  they’re stronger or weaker than us, and end with three patterns worth
  stealing and three to avoid.
</Copy>

<Copy k="scene2.title">Cowork walks every screen</Copy>
<Copy k="scene2.sub">
  The skill scores each screenshot against your rubric and the Progress
  card tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Working on heuristic audit</Copy>
<Copy k="step1">Reading heuristic-rubric.pdf</Copy>
<Copy k="step2">Reading competitor-a-onboarding.png</Copy>
<Copy k="step3">Reading competitor-b-checkout.png</Copy>
<Copy k="step4">Reading Figma · our current onboarding</Copy>
<Copy k="step5">Scoring against 13 heuristics</Copy>
<Copy k="step6">Writing teardown-scorecard.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read rubric and screenshots</Copy>
<Copy k="prog2">Pull our own screens from Figma</Copy>
<Copy k="prog3">Score each screen</Copy>
<Copy k="prog4">Compare us vs competitors</Copy>
<Copy k="prog5">Write teardown to folder</Copy>

<Copy k="scene3.title">Scored teardown, ready to share</Copy>
<Copy k="scene3.sub">
  Every screen scored against your rubric, compared to your own product,
  with the steal-or-avoid list at the end.
</Copy>
<Copy k="result1">
  {lead} scores 4/5 on visibility of system status — their progress dots
  are clearer than ours — but 2/5 on error prevention; there’s no confirm
  step before the workspace name locks.
</Copy>
<Copy k="result1.lead">Competitor A onboarding</Copy>
<Copy k="result2">
  {lead} beats us on recognition over recall (saved payment methods
  surface inline) and matches us on consistency. Their empty-cart state is
  weaker: no recovery path back to browse.
</Copy>
<Copy k="result2.lead">Competitor B checkout</Copy>
<Copy k="result3">
  {steal} the inline progress dots, the saved-method picker, the one-line
  error copy. {avoid} their modal-on-modal settings, the unlabelled icon
  row, the auto-advancing carousel.
</Copy>
<Copy k="result3.steal">Worth stealing:</Copy>
<Copy k="result3.avoid">Avoid:</Copy>
<Copy k="chip.name">Q2 competitive teardown</Copy>
<Copy k="chip.meta">Document · DOCX · 42 KB</Copy>

<Copy k="scene4.title">Re-score every Monday</Copy>
<Copy k="scene4.sub">
  Schedule the customized skill — drop new screenshots in the folder and
  the teardown updates itself.
</Copy>
<Copy k="sched.prompt">
  Mondays at 10am, re-run {cmd} on any new screenshots in {folder} and
  flag where a competitor overtook us.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Weekly competitive re-score</Copy>
<Copy k="card.body">
  Runs {cmd} against new screenshots in {folder} and flags any heuristic
  where a competitor overtook us.
</Copy>
<Copy k="card.when">Mondays at {time}, weekly</Copy>
<Copy k="card.when.time">10 am</Copy>

<Copy k="end">
  Every Monday, the competitive scorecard is current before the design
  review.
</Copy>
`;export{e as default};