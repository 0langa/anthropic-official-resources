var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FiveDecisionsMap.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The \`dep.*\` entries split
    each "what depends on it" sentence into a bold lead and its rest; the
    \`caution.*\` entries pair a setting name with its cost line, and the
    lesson numbers they cite are data in the widget. \`{n}\` in
    \`label.lesson\` is a runtime placeholder and must survive verbatim. */}

<Copy k="task.lead">Click a decision</Copy>
<Copy k="task.rest">
  to see the question it asks, what depends on it, and what to watch out
  for.
</Copy>
<Copy k="keyline">
  marks a setting that is costly to change later. Everything else you can
  adjust.
</Copy>

<Copy k="node.topology">Structure & Identity</Copy>
<Copy k="node.connectors">Access</Copy>
<Copy k="node.posture">Governance</Copy>
<Copy k="node.spend">Spend</Copy>
<Copy k="node.visibility">Visibility</Copy>

<Copy k="detail.aria">Decision detail</Copy>
<Copy k="label.question">The question</Copy>
<Copy k="label.depends">What depends on it</Copy>
<Copy k="label.caution">Costly to change later</Copy>
<Copy k="label.lesson">Lesson {n}</Copy>

<Copy k="q.topology">
  How many organizations do you run, and which groups live inside them?
</Copy>
<Copy k="readout.topology">
  Structure & Identity is the root. The other four inherit the groups it
  defines.
</Copy>
<Copy k="dep.topology.lead">
  Access, Governance, Spend, and Visibility — all four.
</Copy>
<Copy k="dep.topology.rest">
  Change the structure and every decision below re-attaches.
</Copy>
<Copy k="caution.topology.1.setting">Organization topology</Copy>
<Copy k="caution.topology.1.cost">
  Merging or splitting organizations later means re-provisioning every
  affected member.
</Copy>
<Copy k="caution.topology.2.setting">Domain claiming</Copy>
<Copy k="caution.topology.2.cost">
  The one truly irreversible setting: once on, it can’t be turned off.
</Copy>
<Copy k="caution.topology.3.setting">Group structure</Copy>
<Copy k="caution.topology.3.cost">
  Changing a live mapping changes access for every affected member;
  reversing it is a second mass change, not an undo.
</Copy>

<Copy k="q.connectors">
  Which surfaces (the places members use Claude) and connectors does each
  group get?
</Copy>
<Copy k="readout.connectors">
  Access inherits its groups from Structure & Identity. Visibility reports
  on it.
</Copy>
<Copy k="dep.connectors.lead">Visibility</Copy>
<Copy k="dep.connectors.rest">
  reports what each group connects and uses. Nothing else depends on it.
</Copy>

<Copy k="q.posture">
  Who can build and share customizations, and how freely?
</Copy>
<Copy k="readout.posture">
  Governance inherits its groups from Structure & Identity. Visibility
  reports on it.
</Copy>
<Copy k="dep.posture.lead">Visibility</Copy>
<Copy k="dep.posture.rest">
  reports on what gets built and shared. Nothing else depends on it.
</Copy>

<Copy k="q.spend">Where do caps sit, and who owns the escalation?</Copy>
<Copy k="readout.spend">
  Spend inherits its groups from Structure & Identity. Visibility reports
  on it.
</Copy>
<Copy k="dep.spend.lead">Visibility</Copy>
<Copy k="dep.spend.rest">
  reports usage against these limits. Nothing else depends on it.
</Copy>

<Copy k="q.visibility">
  What can you measure, and how long is data kept?
</Copy>
<Copy k="readout.visibility">
  Visibility is the final read. It reports on all four, and nothing depends
  on it.
</Copy>
<Copy k="dep.visibility.lead">Nothing.</Copy>
<Copy k="dep.visibility.rest">The cascade ends here.</Copy>
<Copy k="caution.visibility.1.setting">Data retention</Copy>
<Copy k="caution.visibility.1.cost">
  The setting moves freely, but shortening the window deletes history you
  can’t recover.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 8122512828600ce3 */}
<Copy k="widget.description">
  Explorer: an interactive dependency map of the five decisions behind a
  Claude Enterprise rollout: Structure & Identity, Access, Governance, Spend,
  and Visibility. Selecting a decision shows the question it asks, which other
  decisions depend on it, and, where the widget marks them, which of its
  settings are costly to reverse later. Structure & Identity defines the
  groups that the other four decisions inherit. Access, Governance, and Spend
  build on those groups, and Visibility reports on all of them, with nothing
  depending on it. Selecting a decision highlights what flows downstream from
  it and marks the upstream decisions it inherits from. The goal is to see how
  the decisions scope one another in sequence, and which settings deserve
  extra care before committing.
</Copy>
<Copy k="widget.summary">
  Explorer: an interactive dependency map of the five decisions in a Claude
  Enterprise rollout. Selecting a decision reveals its question, which
  decisions depend on it, and, for some decisions, which settings are costly
  to reverse later.
</Copy>
`;export{e as default};