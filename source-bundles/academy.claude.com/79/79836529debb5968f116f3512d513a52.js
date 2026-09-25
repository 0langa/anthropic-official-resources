var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx — the three-step "how Cowork works"
    list (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are
    machine identifiers — translate ONLY the text between the tags. \`{name}\`
    tokens are runtime placeholders and must survive verbatim: \`{done}\` and
    each phase's \`{label}\` are filled with the styled text of their sub-key.
    \`phase1…n\` is the loop Claude runs — one bullet per key. */}

<Copy k="step1.title">You delegate the work</Copy>
<Copy k="step1.body">
  Send a prompt describing the objective — what you need done and what {done}
  looks like.
</Copy>
<Copy k="step1.body.done">done</Copy>

<Copy k="step2.title">Claude takes it from there</Copy>
<Copy k="phase1">
  {label} — asks clarifying questions to make sure it's clear on your goal
</Copy>
<Copy k="phase1.label">Understand</Copy>
<Copy k="phase2">{label} — breaks the work into steps you can see in the sidebar</Copy>
<Copy k="phase2.label">Plan</Copy>
<Copy k="phase3">{label} — works across your files, tools, and the web</Copy>
<Copy k="phase3.label">Execute</Copy>
<Copy k="phase4">{label} — checks its own output for quality and accuracy</Copy>
<Copy k="phase4.label">Verify</Copy>
<Copy k="phase5">{label} — produces finished files and a summary of what it did</Copy>
<Copy k="phase5.label">Deliver</Copy>

<Copy k="step3.title">You come back to completed work</Copy>
<Copy k="step3.body">
  Finished files in your folder, actions taken in your tools, and a record of
  everything that happened.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: ced42195871f1ce0 */}
<Copy k="widget.description">
  Diagram: a three-step outline of how a Claude Cowork task runs. First, the
  user delegates by sending a prompt that describes the objective and what
  done looks like. Second, Claude works through a five-phase loop: Understand
  (asks clarifying questions about the goal), Plan (breaks work into visible
  steps), Execute (works across files, tools, and the web), Verify (checks its
  own output), and Deliver (produces finished files and a summary). Third, the
  user returns to completed work — finished files, actions taken in tools, and
  a record of what happened. It teaches that Cowork is a delegate-and-review
  workflow rather than a turn-by-turn conversation.
</Copy>
<Copy k="widget.summary">
  Diagram: a three-step outline of how a Claude Cowork task runs, from
  delegating a goal through Claude's understand-plan-execute-verify-deliver
  loop to receiving finished work, illustrating Cowork's delegate-and-review
  workflow.
</Copy>
`;export{e as default};