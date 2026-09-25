var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WhatYoullLearn.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The objectives are the
    numbered \`objective<n>\` run: add or drop one here and the card follows. */}

<Copy k="title">What you’ll learn</Copy>
<Copy k="objective1">What effort controls and how it affects token usage</Copy>
<Copy k="objective2">Why cost per task differs from cost per token</Copy>
<Copy k="objective3">
  Why lowering effort on a frontier model often beats switching to a cheaper
  model
</Copy>
<Copy k="objective4">How to choose effort for different types of work</Copy>
<Copy k="objective5">How to calibrate effort settings to your own tasks</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 6e20aea424352d5f */}
<Copy k="widget.description">
  Checklist: A list of five learning objectives opens the tutorial on
  selecting the right effort setting in Claude Cowork and Chat. It previews
  that the lesson will explain what effort controls and how it affects token
  usage, why cost per task differs from cost per token, why lowering effort on
  a frontier model often beats switching to a cheaper model, how to choose
  effort for different types of work, and how to calibrate effort settings to
  one's own tasks. Its goal is to orient the learner before the material,
  framing effort as a behavioral control over how thoroughly Claude works a
  task, and linking that choice to usage limits and cost tradeoffs covered
  later in the tutorial.
</Copy>
<Copy k="widget.summary">
  Checklist: Lists five learning objectives opening the tutorial, previewing
  what effort controls, how it affects cost and usage, and how to calibrate it
  for different tasks.
</Copy>
`;export{e as default};