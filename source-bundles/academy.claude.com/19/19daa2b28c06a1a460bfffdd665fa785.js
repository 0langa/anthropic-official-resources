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

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: a2865f256a6ef1c3 */}
<Copy k="widget.description">
  Diagram: three rows represent a less capable, a more capable, and the most
  capable model, each showing the same dial of effort levels (low, medium,
  high, xhigh, max). A single fixed dashed line represents one task held
  constant, crossing each row's dial at a different point: near the top of the
  less capable model's dial, partway up the more capable model's, and low on
  the most capable model's, with levels to spare. The axis runs from likelier
  to stop short of the task to likelier to do more than asked. The point is
  that level names stay consistent across models, but the same level
  represents different amounts of work depending on the model's capability, so
  switching models means re-finding the right effort level from that model's
  default rather than reusing the old setting.
</Copy>
<Copy k="widget.summary">
  Diagram: three rows show the same dial of effort levels for a less capable,
  more capable, and most capable model, with one fixed task line crossing each
  at a different point, teaching that effort levels mean different amounts of
  work per model.
</Copy>
`;export{e as default};