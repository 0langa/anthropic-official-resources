var e=`---
kind: widget-copy
---

{/* Learner-facing copy for NewSurfaceReopens.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The \`r.*\` entries are
    single sentences the widget joins with spaces to build each decision's
    reason line, so each must stand alone. \`task.bold\` is the emphasized
    fragment of the intro sentence. \`{keep}\` in the \`sum.tail.*\` entries is
    a runtime placeholder (the count of decisions that carry over) and must
    survive verbatim; the reopen count is rendered separately before it. */}

<Copy k="task.intro">
  Claude Tag arrives at Pluto: Claude inside Slack, scoped to a channel
  rather than a member.
</Copy>
<Copy k="task.bold">Change any of the three answers</Copy>
<Copy k="task.rest">and watch which of the five decisions reopen.</Copy>

<Copy k="questions.title">The three questions</Copy>

<Copy k="q.who.title">Who gets it?</Copy>
<Copy k="q.who.hint">The role decision, like any surface</Copy>
<Copy k="q.set.title">Does it carry its own settings?</Copy>
<Copy k="q.set.hint">
  Configuration that inherits little from the per-member setup: model
  access and the Claude Tag in Slack role capability still apply
</Copy>
<Copy k="q.risk.title">Does it change any group’s risk?</Copy>
<Copy k="q.risk.hint">New reach: new data, new autonomy, new people</Copy>

<Copy k="aria.who">Who gets it</Copy>
<Copy k="aria.set">Carries own settings</Copy>
<Copy k="aria.risk">Changes a group’s risk</Copy>

<Copy k="opt.who.some">Some groups first</Copy>
<Copy k="opt.who.all">Every group</Copy>
<Copy k="opt.set.yes">Yes, its own</Copy>
<Copy k="opt.set.no">No, on/off only</Copy>
<Copy k="opt.risk.yes">Yes, for a group</Copy>
<Copy k="opt.risk.no">No</Copy>

<Copy k="decisions.title">Pluto’s five decisions</Copy>

<Copy k="name.structure">Structure & Identity</Copy>
<Copy k="name.access">Access</Copy>
<Copy k="name.governance">Governance</Copy>
<Copy k="name.spend">Spend</Copy>
<Copy k="name.visibility">Visibility</Copy>

<Copy k="tag.re">Reopens</Copy>
<Copy k="tag.keep">Carries over</Copy>

<Copy k="r.structure">
  Claude Tag lives inside the organization and groups already defined; nothing
  here reopens for a new surface.
</Copy>
<Copy k="r.access.all">A role grant to every group’s role.</Copy>
<Copy k="r.access.some">
  A role grant, group by group: the units already working in Slack threads
  first, the rest phased.
</Copy>
<Copy k="r.access.risk">
  The group whose risk moved gets its connector answers rechecked for this
  surface.
</Copy>
<Copy k="r.governance.re">
  Payments & Trust stays off Claude Tag entirely — the same tighter posture it
  holds elsewhere — and Pluto kept the default that blocks Claude in
  channels with a guest present (the Allow Claude to respond to guests
  setting, default Restrict); the risk owner signed the choice.
</Copy>
<Copy k="r.governance.keep">
  No group’s risk moved, so how freely members build and share stays as
  set.
</Copy>
<Copy k="r.spend.re">
  Channel-scoped settings inherit little from the per-member setup; Claude
  Tag carries its own limits, organization-wide and per channel, with
  admin alerts at 75% and 95%, so the spend owner set those.
</Copy>
<Copy k="r.spend.keep">
  It rides existing caps and defaults; nothing new to configure for spend.
</Copy>
<Copy k="r.visibility.base">
  Its events flow to the destinations already configured.
</Copy>
<Copy k="r.visibility.confirm">
  Confirm this new surface is inside their scope, once.
</Copy>

<Copy k="sum.lead.pluto">Claude Tag at Pluto:</Copy>
<Copy k="sum.lead.other">With those answers:</Copy>
<Copy k="sum.tail.one">reopens, {keep} carry over.</Copy>
<Copy k="sum.tail.many">reopen, {keep} carry over.</Copy>
<Copy k="sum.pluto.note">One admin session, not a rebuild.</Copy>

<Copy k="fine">
  Carries-over is the common case, not a promise: a genuinely new kind of
  surface can still add a question of its own.
</Copy>
`;export{e as default};