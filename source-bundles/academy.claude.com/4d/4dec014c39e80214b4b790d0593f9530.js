var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EffortByTaskShape.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Each row resolves as
    \`row.<id>.*\`; the effort to start from resolves as \`effort.<level>\` in
    the table and \`badge.<level>\` in the phone cards (\`effort.default\` comes
    from the folder's _shared.copy.mdx). */}

<Copy k="col.shape">Task shape</Copy>
<Copy k="col.example">Example</Copy>
<Copy k="col.why">Why</Copy>

<Copy k="effort.lower">Lower</Copy>
<Copy k="effort.higher">Higher</Copy>
<Copy k="badge.lower">Lower effort</Copy>
<Copy k="badge.default">Default effort</Copy>
<Copy k="badge.higher">Higher effort</Copy>

<Copy k="row.clear.shape">Clear, well-specified</Copy>
<Copy k="row.clear.example">
  Turn a transcript into three bullets; extract names from ten emails
</Copy>
<Copy k="row.clear.why">
  You know what the answer should say. You can verify it in one read. Extra
  thinking adds cost without improving the answer.
</Copy>

<Copy k="row.bounded.shape">Pattern-finding, bounded</Copy>
<Copy k="row.bounded.example">
  Identify feedback themes across six reviews; find common complaints in
  interviews
</Copy>
<Copy k="row.bounded.why">
  Real thinking needed, but everything Claude needs is in the material.
  Default gives enough room without wasting your limit.
</Copy>

<Copy k="row.open.shape">Open-ended, exploratory</Copy>
<Copy k="row.open.example">
  Figure out why three different customer types churned; plan a launch across
  five teams with unclear dependencies
</Copy>
<Copy k="row.open.why">
  You don't know the answer yet. Claude needs room to explore angles and check
  assumptions.
</Copy>

<Copy k="row.stakes.shape">High-stakes, most strategic, or hard to verify</Copy>
<Copy k="row.stakes.example">
  Reviewing important code before shipping; analysis you're publishing; legal
  decisions
</Copy>
<Copy k="row.stakes.why">
  Error is costly. Higher effort means Claude checks more before you see it.
  You still verify, but start from a more rigorous place.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 42fbc2b32c2d757d */}
<Copy k="widget.description">
  Reference table: choosing Claude's effort setting by the shape of a task.
  Four task shapes are listed, each with a sample task, a starting effort
  level, and the reasoning behind it. Clear, well-specified tasks suit lower
  effort since the answer is easy to verify and extra thinking adds cost
  without benefit. Bounded pattern-finding tasks suit default effort, giving
  enough room without wasting usage limit. Open-ended, exploratory tasks and
  high-stakes or hard-to-verify tasks both call for higher effort, since
  Claude needs room to explore unknowns or to check its work more thoroughly
  before the learner reviews it. The goal is matching effort to what a task
  actually demands rather than applying one setting to everything.
</Copy>
<Copy k="widget.summary">
  Reference table: four task shapes, each with a sample task, a starting
  effort level, and the reasoning, showing how to match effort to what a task
  actually demands.
</Copy>
`;export{e as default};