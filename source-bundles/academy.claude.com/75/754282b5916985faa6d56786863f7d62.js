var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EffortVsModel.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The chart's positions are
    schematic data in the widget; each labelled point resolves as
    \`point.<id>.{name,effort}\` here. */}

<Copy k="kicker">Two levers for what a task costs</Copy>
<Copy k="title">
  Lowering effort gives up a little capability. Switching to an older model
  gives up much more.
</Copy>
<Copy k="aria">
  Chart of capability against what a task costs. A frontier model at high
  effort sits top right. Lowering its effort to medium moves it left to lower
  cost with a small capability loss. Switching to an older model at maximum
  effort lands at a similar cost with a large capability loss. The gap between
  the two lower-cost points is the capability kept by lowering effort instead
  of switching models.
</Copy>

<Copy k="axis.capability">Capability</Copy>
<Copy k="axis.cost">What a task costs →</Copy>

<Copy k="point.frontierHigh.name">Frontier model</Copy>
<Copy k="point.frontierHigh.effort">high effort</Copy>
<Copy k="point.frontierMedium.name">Frontier model</Copy>
<Copy k="point.frontierMedium.effort">medium effort</Copy>
<Copy k="point.olderMax.name">Older model</Copy>
<Copy k="point.olderMax.effort">maximum effort</Copy>

<Copy k="move.lower">Lower effort: a small capability loss</Copy>
<Copy k="move.switch">Switch models: a large capability loss</Copy>
<Copy k="kept">capability kept by lowering effort instead</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 138e5be00619b1fb */}
<Copy k="widget.description">
  Diagram: a schematic chart plots capability against what a task costs for
  three positions. A frontier model at high effort sits at high capability and
  high cost. Two moves lead away from it: lowering that same model's effort to
  medium, which shifts it to lower cost with only a small capability loss; and
  switching to an older model run at maximum effort, which reaches a similar
  lower cost but with a much larger capability loss. The gap between the two
  lower-cost points represents the capability kept by lowering effort rather
  than switching models. The chart illustrates that, at the same lower cost,
  lowering effort keeps more capability than switching to an older model.
</Copy>
<Copy k="widget.summary">
  Diagram: a chart plots capability against task cost. At the same lower cost,
  lowering a frontier model's effort keeps more capability than switching to
  an older model at maximum effort.
</Copy>
`;export{e as default};