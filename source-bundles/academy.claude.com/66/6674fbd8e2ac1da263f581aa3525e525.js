var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ConnectorGates.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The org name and member
    names (Pluto Enterprise, Dana, Marco, …) are simulated data inside the
    widget; group names and their write-tool policies are mock-admin text
    and live here. \`{n}\` in \`count.rest\` is a runtime placeholder (the
    member total) and must survive verbatim. */}

<Copy k="ins.lead">Open or close any gate.</Copy>
<Copy k="ins.rest">
  The connector reaches a member only where every gate above them is open.
</Copy>

<Copy k="gate1.title">Gate 1</Copy>
<Copy k="gate1.who">Owner</Copy>
<Copy k="gate2.title">Gate 2</Copy>
<Copy k="gate2.who">Owner, per group</Copy>
<Copy k="gate3.title">Gate 3</Copy>
<Copy k="gate3.who.each">each member</Copy>
<Copy k="gate3.who.ema">your org, via EMA</Copy>

<Copy k="org.name">Pluto Enterprise</Copy>
<Copy k="org.sub">Customer-data warehouse connector</Copy>

<Copy k="member.1.name">Dana</Copy>
<Copy k="member.2.name">Marco</Copy>
<Copy k="member.3.name">Priya</Copy>
<Copy k="member.4.name">Sam</Copy>
<Copy k="member.5.name">Lee</Copy>
<Copy k="member.6.name">Nia</Copy>

<Copy k="group.1.name">B2B</Copy>
<Copy k="group.1.policy">Write tools: Always allow</Copy>
<Copy k="group.2.name">Payments & Trust</Copy>
<Copy k="group.2.policy">Write tools: Blocked · read-only</Copy>
<Copy k="group.3.name">Ops</Copy>
<Copy k="group.3.policy">Write tools: Needs approval</Copy>

<Copy k="gate.org.on">Added</Copy>
<Copy k="gate.org.off">Add to your team</Copy>
<Copy k="gate.open">Open</Copy>
<Copy k="gate.closed">Closed</Copy>

<Copy k="member.connect">Connect</Copy>
<Copy k="status.none">no access</Copy>
<Copy k="status.connected">connected</Copy>
<Copy k="status.byOrg">connected by org</Copy>

<Copy k="count.lead">Reaching</Copy>
<Copy k="count.rest">of {n} members</Copy>

<Copy k="ema.label">Enterprise-managed auth</Copy>
<Copy k="ema.sub">· org connects once for everyone</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: ceef6f9575fcced3 */}
<Copy k="widget.description">
  Exercise: the learner toggles three cascading access gates for a sample
  connector, scoped to an organization, its groups, and individual members,
  and observes how many of the members the connector actually reaches. Gate 1
  is the owner enabling the connector for the whole org, gate 2 is the owner
  opening it per group, and gate 3 is each member authenticating their own
  account, unless enterprise-managed authorization is switched on, in which
  case the organization connects everyone at once through its identity
  provider. A member only gains access if every gate above them is open, and a
  live counter tracks reach as gates and connections change. The exercise
  teaches that connector access cascades through these three layers, and that
  enterprise-managed authorization removes the per-member authentication step.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner toggles three cascading gates, organization, group,
  and member authentication, for a sample connector and watches how many
  members gain access. It teaches that access cascades through all three
  layers, and that enterprise-managed authorization can replace individual
  member authentication.
</Copy>
`;export{e as default};