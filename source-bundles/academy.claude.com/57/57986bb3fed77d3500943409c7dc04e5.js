var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TaskLoopMidTaskSteering.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. \`steerText\` is typed into the
    composer character by character, then sent as the steering message. */}

<Copy k="kicker">Steer mid-task</Copy>

<Copy k="steerText">
  Stop on the format — use the leadership-offsite one-pager template instead.
</Copy>
<Copy k="msg.user">
  Help me draft the Q3 competitive memo for the leadership offsite.
</Copy>
<Copy k="msg.plan">
  I’ll read the analyst-call PDFs and last quarter’s memo, cross-reference
  each competitor’s pricing changes against our positioning notes, then draft
  against the Q2 board-memo template.
</Copy>
<Copy k="activity.read">Read 3 files, searched 2 folders</Copy>
<Copy k="activity.writing">Writing draft · section 2 of 4</Copy>
<Copy k="msg.switch">
  Switching templates — reusing the analysis I’ve already drafted.
</Copy>
<Copy k="activity.rewriting">
  Rewriting against the leadership-offsite one-pager · keeping content
</Copy>

<Copy k="progress">Progress</Copy>
<Copy k="doneSr">Done: {step}</Copy>
<Copy k="step1">Read source PDFs and last quarter’s memo</Copy>
<Copy k="step2">Cross-reference pricing changes</Copy>
<Copy k="step3">Outline three competitor moves</Copy>
<Copy k="step4">Drafting against Q2 board-memo template</Copy>
<Copy k="step4.updated">
  Drafting against the leadership-offsite one-pager template
</Copy>
<Copy k="step5">Review against original prompt</Copy>

<Copy k="composer.idle">Write a message… (click Send to steer mid-task)</Copy>
<Copy k="composer.sent">Click Send to steer Cowork while it works…</Copy>
<Copy k="send">Send</Copy>

<Copy k="caption">
  {lead} You can correct the plan while it’s still running — Cowork picks up
  from where it was.
</Copy>
<Copy k="caption.lead">
  You don’t need to wait for it to finish and then regenerate.
</Copy>
<Copy k="reset">Reset</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 854f5ec7d366f957 */}
<Copy k="widget.description">
  Simulation: a mock Claude Cowork interface shows a task already in progress,
  with a conversation stream beside a progress panel listing plan steps, some
  completed and one actively underway. Sending a steering message interrupts
  the in-flight step, which gets struck through and replaced, while Claude
  acknowledges the change, reuses work already done, and continues the task
  without restarting from scratch. The goal is to show that a running Cowork
  task can be corrected mid-stream rather than left to finish and regenerated.
  It reinforces the lesson's point that redirecting Claude while it works
  costs little, since the plan absorbs corrections and earlier progress
  carries forward instead of being discarded.
</Copy>
<Copy k="widget.summary">
  Simulation: a mock Cowork interface shows a task in progress, with a
  conversation stream and plan panel. Sending a steering message interrupts
  the current step, which updates without restarting, showing that running
  tasks can be corrected mid-stream.
</Copy>
`;export{e as default};