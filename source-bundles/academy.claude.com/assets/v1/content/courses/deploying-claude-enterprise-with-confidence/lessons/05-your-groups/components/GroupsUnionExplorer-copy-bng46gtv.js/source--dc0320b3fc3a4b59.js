var e=`---
kind: widget-copy
---

{/* Learner-facing copy for GroupsUnionExplorer.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. "Engineering",
    "payments-eng", and "Dana" are the example group and member names
    this scenario is built around; keep them recognizable across the
    keys that mention them. \`venn.b.line1\`/\`venn.b.line2\` are the two
    typeset lines of one label ("Payments & Trust") at fixed positions
    in the diagram — split the translation across them the same way.
    \`cnt.grants\` and \`cnt.distinct\` follow a bolded number rendered by
    the widget ("5 grants", "… 7 distinct"). */}

<Copy k="task.intro">
  Dana is an engineer on Payments & Trust, so she’s in both groups.
</Copy>
<Copy k="task.lead">Click a region</Copy>
<Copy k="task.rest">to see what a member placed there gets.</Copy>

<Copy k="venn.aria">Two overlapping groups. Choose a region.</Copy>
<Copy k="venn.a.label">Engineering</Copy>
<Copy k="venn.a.sub">broad</Copy>
<Copy k="venn.b.line1">Payments &</Copy>
<Copy k="venn.b.line2">Trust</Copy>
<Copy k="venn.b.sub1">payments-eng</Copy>
<Copy k="venn.b.sub2">locked down</Copy>
<Copy k="venn.both">in both</Copy>
<Copy k="tok.label">Dana</Copy>

<Copy k="region.a.aria">Engineering only</Copy>
<Copy k="region.b.aria">payments-eng only</Copy>
<Copy k="region.ab.aria">In both groups</Copy>

<Copy k="who.a">Engineering only</Copy>
<Copy k="who.b">payments-eng only</Copy>
<Copy k="who.ab">Both groups — Dana</Copy>
<Copy k="cnt.grants">grants</Copy>
<Copy k="cnt.distinct">distinct</Copy>

<Copy k="chip.chat">Chat</Copy>
<Copy k="chip.uploads">File uploads</Copy>
<Copy k="chip.code">Claude Code</Copy>
<Copy k="chip.github">GitHub connector</Copy>
<Copy k="chip.search">Web search</Copy>
<Copy k="chip.ledger">Ledger tool (read-only)</Copy>
<Copy k="chip.projects">Shared Projects</Copy>

<Copy k="legend.e">Engineering grants it</Copy>
<Copy k="legend.p">payments-eng grants it</Copy>

<Copy k="rule">
  The union only adds. payments-eng removes nothing Engineering granted.
</Copy>
`;export{e as default};