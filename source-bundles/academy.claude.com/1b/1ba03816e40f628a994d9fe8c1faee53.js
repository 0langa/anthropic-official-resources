var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — "The Builder's Toolkit" stepper
    (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. */}

<Copy k="title">The Builder’s Toolkit</Copy>
<Copy k="intro">
  Click any capability to see where AI fits in your build process.
</Copy>
<Copy k="marker">▼ AI is strongest here</Copy>
<Copy k="stepOf">Step {n} of {total}</Copy>

<Copy k="aria.dot">{name} (step {n} of {total})</Copy>
<Copy k="aria.prev">Previous: {name}</Copy>
<Copy k="aria.next">Next: {name}</Copy>

<Copy k="badge.weak">AI weak</Copy>
<Copy k="badge.moderate">AI moderate</Copy>
<Copy k="badge.strong">AI strong</Copy>

<Copy k="step.empathy.name">Empathy</Copy>
<Copy k="step.empathy.desc">
  Understanding who you’re building for. AI can surface data and personas —
  it can’t feel the gap.
</Copy>
<Copy k="step.design.name">Design</Copy>
<Copy k="step.design.desc">
  Translating user needs into an experience worth having. AI generates
  patterns quickly; you bring taste and context.
</Copy>
<Copy k="step.architecture.name">Architecture</Copy>
<Copy k="step.architecture.desc">
  Structuring a system that holds up under real conditions. AI knows common
  patterns; your constraints are yours to specify.
</Copy>
<Copy k="step.implementation.name">Implementation</Copy>
<Copy k="step.implementation.desc">
  Write, debug, and iterate on code. This is where AI genuinely excels —
  delegate freely here.
</Copy>
<Copy k="step.judgment.name">Judgment</Copy>
<Copy k="step.judgment.desc">
  Deciding what’s right, good enough, and worth shipping. AI can list
  options; it can’t own the call.
</Copy>
<Copy k="step.shipping.name">Shipping</Copy>
<Copy k="step.shipping.desc">
  Getting it in front of users and iterating. AI automates steps;
  responsibility is yours.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 0eb1a829c7bf13f8 */}
<Copy k="widget.description">
  Explorer: a clickable six-step walkthrough of "The Builder's Toolkit," a
  model of the software build process covering empathy, design, architecture,
  implementation, judgment, and shipping. Selecting a step reveals a
  description of that stage and rates how well AI currently handles it: weak,
  moderate, or strong. Implementation is marked as AI's strongest area, while
  empathy and judgment are marked weak, with design, architecture, and
  shipping falling in between. The goal is to show learners that AI's
  usefulness varies across the build process, so delegation decisions should
  depend on which stage they're in rather than applying AI uniformly
  everywhere.
</Copy>
<Copy k="widget.summary">
  Explorer: a clickable six-step walkthrough of the build process, from
  empathy through shipping, showing how strongly AI handles each stage so
  learners can see that delegation should vary by stage rather than apply
  uniformly.
</Copy>
`;export{e as default};