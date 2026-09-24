var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DecisionRippleMap.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`task.rest\` is concatenated
    directly after the bold \`task.lead\` with no space, so it begins with
    its punctuation. \`chip.*\` is the change a learner can pick, \`note.*\`
    is what happens where it starts, \`ripple.<start>.<target>\` is what it
    does to each decision it reaches, and \`verdict.*\` sums up the
    footprint. B2B, payments-eng, and Engineering are example group names
    from the course scenario. \`{n}\` in \`count.of\` is a runtime placeholder
    and must survive verbatim. */}

<Copy k="task.lead">Pick a change</Copy>
<Copy k="task.rest">
  , one per decision. The map marks where it starts and each decision it
  ripples to.
</Copy>
<Copy k="chips.aria">Pick a change</Copy>

<Copy k="node.topology">Structure & Identity</Copy>
<Copy k="node.access">Access</Copy>
<Copy k="node.governance">Governance</Copy>
<Copy k="node.spend">Spend</Copy>
<Copy k="node.visibility">Visibility</Copy>

<Copy k="desc.topology">Groups and who sits in them</Copy>
<Copy k="desc.access">Surfaces and connectors</Copy>
<Copy k="desc.governance">Customization posture</Copy>
<Copy k="desc.spend">Caps and overrides</Copy>
<Copy k="desc.visibility">Reporting, audit, retention</Copy>

<Copy k="label.starts">Starts here</Copy>
<Copy k="label.ripples">Ripples here</Copy>
<Copy k="label.reaches">Reaches</Copy>
<Copy k="legend.starts">starts</Copy>
<Copy k="legend.ripples">ripples to</Copy>
<Copy k="count.pick">pick a change</Copy>
<Copy k="count.of">of {n}</Copy>

<Copy k="chip.topology">Move a member from B2B into payments-eng</Copy>
<Copy k="note.topology">
  Their group changes, and their role changes with it.
</Copy>
<Copy k="ripple.topology.access">
  Their surfaces and connectors switch to payments-eng’s: read-only
  connectors, Claude Code held back.
</Copy>
<Copy k="ripple.topology.governance">
  They now build under payments-eng’s approve-first posture.
</Copy>
<Copy k="ripple.topology.spend">
  They inherit payments-eng’s per-member cap, not B2B’s.
</Copy>
<Copy k="ripple.topology.visibility">
  Audit records the move and each setting that shifted with it.
</Copy>
<Copy k="verdict.topology">
  The widest footprint: a root change carries every setting attached to
  the group.
</Copy>

<Copy k="chip.access">Add a connector with write tools for B2B</Copy>
<Copy k="note.access">
  Claude can now act on that tool for B2B’s members, not only read it.
</Copy>
<Copy k="ripple.access.visibility">
  Audit logs the grant; the Compliance API captures the chats where Claude
  uses it.
</Copy>
<Copy k="verdict.access">
  Contained: the grant, plus its record. Nothing else moves.
</Copy>

<Copy k="chip.governance">Loosen the posture: reviewed to fully open</Copy>
<Copy k="note.governance">
  Customizations now spread across groups without a review step.
</Copy>
<Copy k="ripple.governance.visibility">
  Adoption reporting shows customizations spreading to every group.
</Copy>
<Copy k="verdict.governance">
  Contained: the posture, plus what reporting reads about the spread.
</Copy>

<Copy k="chip.spend">Lower the Engineering group’s cap</Copy>
<Copy k="note.spend">
  Each Engineering member hits the lower limit sooner; new usage pauses
  there and requests route to your Admins and Owners.
</Copy>
<Copy k="ripple.spend.visibility">
  Usage reporting shows the pauses and the increase requests.
</Copy>
<Copy k="verdict.spend">
  Contained: the cap, plus the pauses reporting shows.
</Copy>

<Copy k="chip.visibility">Turn the Compliance API on</Copy>
<Copy k="note.visibility">
  Records conversation content for review. It reads the other four; it
  changes nothing they do.
</Copy>
<Copy k="verdict.visibility">
  No ripple: it reads the map, it does not run it.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: d1386d7055f05e55 */}
<Copy k="widget.description">
  Exercise: a map of the five deployment decisions (Structure & Identity,
  Access, Governance, Spend, Visibility) as connected nodes, with Structure &
  Identity feeding Access, Governance, and Spend, which all feed Visibility.
  The learner picks one sample change to a single decision and watches it
  highlight where the change starts and which downstream decisions it ripples
  into, filling a reach meter showing how many of the five decisions are
  affected, plus a short verdict on the change's footprint. Trying each of the
  five changes reveals that some changes stay contained to one or two
  decisions while others cascade widely, teaching that a decision's position
  in the dependency map determines how far its effects spread, and that
  Visibility only reads the other decisions rather than triggering further
  ripples itself.
</Copy>
<Copy k="widget.summary">
  Exercise: pick a sample change to one of five connected deployment decisions
  and watch the map highlight which decisions it ripples into, filling a reach
  meter and verdict. Teaches that a decision's position in the dependency map
  determines how far its effects spread.
</Copy>
`;export{e as default};