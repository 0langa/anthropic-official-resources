var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PerModelScale.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Row geometry and the effort
    level names on each dial are data in the widget. */}

<Copy k="kicker">The same levels on three models</Copy>
<Copy k="title">Hold one task still and see where each model finishes it.</Copy>
<Copy k="intro">
  The level names match across models, but each scale is tuned to its own
  model, so the level where this task gets done moves: a more capable model
  may finish it lower on the dial. Change models, and you find your level
  again from the default.
</Copy>
<Copy k="aria.figure">
  Three model rows, from less capable to most capable, share one axis: further
  left is likelier to stop short of the task, further right is likelier to do
  more than asked, and a dashed line marks the task done. Every row carries
  the same dial of level names, and the dial sits further right on a more
  capable model, so the done line crosses near the top of the dial on the
  less capable model and lower on the dial on the more capable ones.
  Illustrative, not measured.
</Copy>
<Copy k="line.title">One task, fixed</Copy>
<Copy k="line.sub">same prompt, same bar for done, on every row</Copy>

<Copy k="row.less.label">A less capable model</Copy>
<Copy k="row.less.caption">might not finish it until the top of its dial</Copy>
<Copy k="row.more.label">A more capable model</Copy>
<Copy k="row.more.caption">might finish it partway up its dial</Copy>
<Copy k="row.most.label">The most capable model</Copy>
<Copy k="row.most.caption">
  might finish it low on its dial, with levels to spare
</Copy>

<Copy k="axis">
  ← likelier to stop short · likelier to do more than asked →
</Copy>
<Copy k="note">Illustrative, not measured</Copy>
`;export{e as default};