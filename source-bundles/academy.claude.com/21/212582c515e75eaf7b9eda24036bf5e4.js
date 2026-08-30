var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Performance review administrator” use case.
    Scene text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated command, folder, channel and file names, and bold lead-ins —
    keep them where the sentence needs them. */}

<Copy k="aria">
  Animated demo: asking Cowork to build a {cmd} skill from your performance
  framework, watching it read the cycle documents and save the skill, and
  scheduling the kickoff for every review cycle
</Copy>
<Copy k="title">Performance review administrator</Copy>
<Copy k="subtitle">
  Reads your framework and review instructions, then builds a skill every
  manager runs.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at your perf-cycle folder and describe the skill you want every
  manager to run.
</Copy>
<Copy k="prompt">
  Help me build the {cmd} skill for our managers. Read our performance
  framework and the cycle instructions in this folder, then write a skill that
  walks a manager through gathering input, scoring against our competencies,
  and drafting the review in our template. The skill should quote our rating
  definitions verbatim and never invent criteria that aren’t in the framework.
</Copy>

<Copy k="scene2.title">Cowork builds the skill from your framework</Copy>
<Copy k="scene2.sub">
  It reads the cycle documents, checks the competency framework, and writes
  the steps managers will follow.
</Copy>
<Copy k="work.heading">Building {cmd} skill</Copy>
<Copy k="step1">Reading {framework}</Copy>
<Copy k="step2">Reading {rating} and {template}</Copy>
<Copy k="step3">
  Google Drive · matched 6 competencies and the 5-point rating scale
</Copy>
<Copy k="step4">
  Comparing against manager-cycle-instructions.pdf — gather input, score, then
  draft in template.
</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read framework and definitions</Copy>
<Copy k="prog2">Match competencies to the framework</Copy>
<Copy k="prog3">Write the skill steps</Copy>
<Copy k="prog4">Save {cmd} to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">A published skill every manager runs</Copy>
<Copy k="scene3.sub">
  Your framework, your rating language, your template — encoded once and
  shared across the org.
</Copy>
<Copy k="doc.status">Skill saved</Copy>
<Copy k="res1">
  {lead} — reads the report’s H1 goals and peer feedback from the review
  folder, then asks the manager for two specific examples per competency.
</Copy>
<Copy k="res1.lead">Gather input</Copy>
<Copy k="res2">
  {lead} — walks all 6 competencies on your 5-point scale, quoting {rating}
  verbatim. Never invents criteria.
</Copy>
<Copy k="res2.lead">Score against the framework</Copy>
<Copy k="res3">
  {lead} — fills {template} section by section and flags where the manager
  should add their own observation before submitting.
</Copy>
<Copy k="res3.lead">Draft the review</Copy>
<Copy k="chip.name">Performance review — manager guide</Copy>
<Copy k="chip.meta">Saved as skill · Skill · Carries {framework}</Copy>
<Copy k="chip.share">Share</Copy>

<Copy k="scene4.title">Kick off every cycle automatically</Copy>
<Copy k="scene4.sub">
  The skill refreshes from the latest framework and the manager note goes out
  — same day, every half.
</Copy>
<Copy k="sched.prompt">
  On the first Monday of each review cycle, refresh {cmd} from {folder} and
  post the kickoff note to {channel}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Perf cycle kickoff</Copy>
<Copy k="card.body">
  Refreshes {cmd} from {folder} and posts the manager kickoff note to
  {channel} when each review cycle opens.
</Copy>
<Copy k="card.when">On the {day} of each review cycle</Copy>
<Copy k="card.when.day">first Monday</Copy>

<Copy k="end">
  Every manager runs the same review, on your framework — so every rating
  means the same thing.
</Copy>
`;export{e as default};