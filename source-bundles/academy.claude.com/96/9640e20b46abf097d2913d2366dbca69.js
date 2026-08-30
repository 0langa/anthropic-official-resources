var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Write the design doc or RFC” use case. Scene text
    is typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, folder names, and bold lead-ins — keep them where the sentence
    needs them. */}

<Copy k="title">Write the design doc or RFC</Copy>
<Copy k="subtitle">
  Reads your template and prior RFCs, writes a structured proposal with
  approaches and trade-offs filled in.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the RFC folder and describe the proposal you need drafted.
</Copy>
<Copy k="menu.category">Engineering</Copy>
<Copy k="prompt">
  Write a design doc for moving our event pipeline from batch to streaming.
  Look up prior art, then draft it in our RFC template with approaches,
  trade-offs, and open questions.
</Copy>

<Copy k="scene2.title">Cowork looks up prior art</Copy>
<Copy k="scene2.sub">
  The skill reads your template and searches your wiki while the Progress
  card tracks the plan.
</Copy>
<Copy k="work.heading">Working on system design doc</Copy>
<Copy k="step1">Reading rfc-template.md</Copy>
<Copy k="step2">Reading notes-streaming-migration.md</Copy>
<Copy k="step3">Searching Confluence for prior RFCs</Copy>
<Copy k="step4">Reading GitHub: event-pipeline ADRs</Copy>
<Copy k="step5">Comparing approaches</Copy>
<Copy k="step6">Writing 0087-streaming-events.md</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read template and notes</Copy>
<Copy k="prog2">Find prior art in Confluence</Copy>
<Copy k="prog3">Read architecture in GitHub</Copy>
<Copy k="prog4">Compare approaches</Copy>
<Copy k="prog5">Write RFC draft to folder</Copy>

<Copy k="scene3.title">A structured first draft</Copy>
<Copy k="scene3.sub">
  Problem, approaches, and trade-offs filled in from your prior RFCs — ready
  for you to add the judgment call.
</Copy>
<Copy k="brief1">
  {lead} The nightly batch adds four to six hours of latency before events
  reach analytics. Three downstream teams need sub-minute freshness, and the
  batch window is already running close to capacity.
</Copy>
<Copy k="brief1.lead">Problem.</Copy>
<Copy k="brief2">
  {lead} Mature, matches the pattern in RFC-0072, and the platform team
  already runs a Kafka cluster. Adds a stateful service we’d own and
  operate.
</Copy>
<Copy k="brief2.lead">Approach A — Kafka + Flink.</Copy>
<Copy k="brief3">
  {lead} Faster to ship and no new infrastructure to run. Ties us to one
  provider and the shard limits flagged in RFC-0061 would cap throughput.
</Copy>
<Copy k="brief3.lead">Approach B — managed stream.</Copy>
<Copy k="chip.name">RFC 0087 — Streaming events</Copy>
<Copy k="chip.meta">Document · MD · 9 KB</Copy>

<Copy k="scene4.title">Run it on every one-pager</Copy>
<Copy k="scene4.sub">
  Customize the skill once, then schedule it — every new one-pager becomes a
  structured draft.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am, check {folder}/inbox for new one-pagers and run {cmd}
  on each, writing the draft to a numbered RFC folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">RFC inbox to draft</Copy>
<Copy k="card.body">
  Runs {cmd} on new one-pagers in {folder}/inbox and writes a structured
  draft to a numbered RFC folder.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">9:00am</Copy>

<Copy k="end">
  Every one-pager becomes a structured RFC before architecture review.
</Copy>
`;export{e as default};