var e=`---
kind: widget-copy
---

{/* Learner-facing copy for AdoptionSignalMap.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`shape.*.label\` names a
    dashboard curve, \`kind.*\` tags it as a breadth/depth signal,
    \`bucket.*\` describes a cause bucket (\`.who\` is the short uppercase
    "who to ask" label shown when the bucket lights up), and \`q.<shape>.<bucket>\`
    is the question the widget suggests asking for that shape/cause pair.
    SCIM is a provisioning standard's name and should stay as-is. */}

<Copy k="task.lead">Pick a shape</Copy>
<Copy k="task.rest">
  a dashboard hands you — each is a breadth or a depth signal. The map
  draws it to every cause that could produce it — usually more than one.
</Copy>
<Copy k="row.name">The shape on the dashboard</Copy>
<Copy k="row.sub">Pick one</Copy>
<Copy k="shapes.aria">Signal shapes</Copy>
<Copy k="buckets.aria">Cause buckets</Copy>
<Copy k="fine">
  Illustrative, not comprehensive: shapes and causes are examples; yours
  depend on your own analyses and norms.
</Copy>

<Copy k="kind.breadth">Breadth</Copy>
<Copy k="kind.depth">Depth</Copy>
<Copy k="kind.both">Breadth + depth</Copy>

<Copy k="shape.flat.label">Flat and low from day one</Copy>
<Copy k="shape.spike.label">Spike, then decay</Copy>
<Copy k="shape.narrow.label">High total, one team carrying it</Copy>
<Copy k="shape.once.label">Many first sessions, few second</Copy>
<Copy k="shape.few.label">Heavy use, but only in a few members</Copy>
<Copy k="shape.climb.label">Steady climb everywhere</Copy>

<Copy k="bucket.access.title">Access</Copy>
<Copy k="bucket.access.sub">they can’t reach it</Copy>
<Copy k="bucket.access.who">Check your settings</Copy>
<Copy k="bucket.awareness.title">Awareness</Copy>
<Copy k="bucket.awareness.sub">they were never told, or never enabled</Copy>
<Copy k="bucket.awareness.who">Ask the group lead</Copy>
<Copy k="bucket.fit.title">Fit</Copy>
<Copy k="bucket.fit.sub">
  the surfaces and connectors don’t match their work
</Copy>
<Copy k="bucket.fit.who">Ask a member</Copy>
<Copy k="bucket.trust.title">Trust</Copy>
<Copy k="bucket.trust.sub">unsure it works, or unsure it’s allowed</Copy>
<Copy k="bucket.trust.who">Ask a member</Copy>
<Copy k="bucket.healthy.title">Healthy</Copy>
<Copy k="bucket.healthy.sub">nothing to chase</Copy>
<Copy k="bucket.healthy.who">Do</Copy>

<Copy k="q.flat.access">
  Is the product actually on for this group’s role, and did SCIM put them
  in it?
</Copy>
<Copy k="q.flat.awareness">
  Did the launch note reach this group, or only the pilot channel?
</Copy>
<Copy k="q.spike.trust">
  What did people try in week one that didn’t work?
</Copy>
<Copy k="q.spike.awareness">Has anything gone out since launch day?</Copy>
<Copy k="q.narrow.awareness">
  How did that team hear about it, and did the message stop there?
</Copy>
<Copy k="q.narrow.fit">
  What is that team using it for that the others can’t?
</Copy>
<Copy k="q.once.fit">
  What did you open it to do, and was the tool for it connected?
</Copy>
<Copy k="q.once.trust">
  Do you know what you’re allowed to put into it?
</Copy>
<Copy k="q.few.fit">
  What are the heavy users doing with it, and does that job exist on other
  desks?
</Copy>
<Copy k="q.few.trust">
  Do the rest believe it’s sanctioned for their work?
</Copy>
<Copy k="q.few.awareness">Have the heavy users shown anyone else?</Copy>
<Copy k="q.climb.healthy">
  Write down what worked here and reuse it for the next group.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: e511573aceab4c84 */}
<Copy k="widget.description">
  Exercise: the learner selects one of six dashboard usage shapes, each
  representing a breadth signal (like adoption spread across groups), a depth
  signal (like reliance per member), or both, and sees it linked to every
  plausible cause bucket that could produce it: access, awareness, fit, trust,
  or a healthy pattern needing no action. Each linked cause shows who to ask
  and what to ask. The goal is to show that a single adoption number usually
  maps to multiple possible causes, so it can't by itself reveal which cause
  is actually behind it. It reinforces reading dashboard signals as
  diagnostics pointing to where to investigate, not as proof of what's wrong,
  and that the same number can mean different things depending on context.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner picks a dashboard usage shape and sees it linked to
  every cause that could produce it, with who to ask and what to ask. It
  teaches that one adoption number usually maps to several possible causes, so
  it's a diagnostic, not proof.
</Copy>
`;export{e as default};