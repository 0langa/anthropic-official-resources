var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Design spec from scattered threads” use case.
    Scene text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands and channel names — keep them where the sentence
    needs them. */}

<Copy k="title">Design spec from scattered threads</Copy>
<Copy k="subtitle">
  Reads the threads, notes, and screenshots — writes one structured spec
  with every decision sourced.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the project folder and describe the spec you need.
</Copy>
<Copy k="menu.category">Design</Copy>
<Copy k="prompt">
  Assemble everything in this folder into one design spec — problem, goals,
  constraints, proposed solution, open questions. Quote sources for
  decisions and flag contradictions.
</Copy>

<Copy k="scene2.title">Cowork reads every source</Copy>
<Copy k="scene2.sub">
  The skill reconciles channel, notes, and screenshots and tracks the plan
  as it runs.
</Copy>
<Copy k="work.heading">Working on design spec</Copy>
<Copy k="step1">Slack · reading {channel} (3 weeks)</Copy>
<Copy k="step2">Reading kickoff-notes.docx</Copy>
<Copy k="step3">Reading current-flow-screens.png</Copy>
<Copy k="step4">Notion · reading Checkout PRD draft</Copy>
<Copy k="step5">Reconciling decisions across sources</Copy>
<Copy k="step6">Writing checkout-design-spec.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read Slack and meeting notes</Copy>
<Copy k="prog2">Read screenshots and Notion</Copy>
<Copy k="prog3">Reconcile decisions</Copy>
<Copy k="prog4">Flag contradictions</Copy>
<Copy k="prog5">Write spec to folder</Copy>

<Copy k="scene3.title">One review-ready spec</Copy>
<Copy k="scene3.sub">
  Every section in order, decisions sourced, contradictions flagged, saved
  back to the folder.
</Copy>
<Copy k="result1">
  {lead} Mobile cart abandonment is at 68%. Three weeks of Slack and the
  kickoff notes agree the address form is the drop-off — six required
  fields before any progress signal.
</Copy>
<Copy k="result1.lead">Problem.</Copy>
<Copy k="result2">
  {lead} Single-page checkout with inline validation and a persistent order
  summary. Decided in {channel} on Apr 22; the PRD draft and Figma frames
  match.
</Copy>
<Copy k="result2.lead">Proposed solution.</Copy>
<Copy k="result3">
  {lead} Guest checkout vs. required account — the Apr 24 Slack thread and
  the kickoff notes contradict each other. Needs a call before review.
</Copy>
<Copy k="result3.lead">Open question.</Copy>
<Copy k="chip.name">Checkout design spec</Copy>
<Copy k="chip.meta">Document · DOCX · 31 KB</Copy>

<Copy k="scene4.title">Make it run before every review</Copy>
<Copy k="scene4.sub">
  Schedule it once — the spec already reflects last night’s thread when you
  sit down.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 8am, re-read {channel} and this folder, re-run {cmd}, and
  list any decisions that changed.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Spec freshness pass</Copy>
<Copy k="card.body">
  Runs {cmd} against {channel} and the project folder, updating the spec
  and listing decisions that changed overnight.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">8 am</Copy>

<Copy k="end">
  Every morning, the spec already reflects last night’s thread.
</Copy>
`;export{e as default};