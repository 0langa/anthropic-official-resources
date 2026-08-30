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
`;export{e as default};