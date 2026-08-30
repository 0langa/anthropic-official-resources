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
`;export{e as default};