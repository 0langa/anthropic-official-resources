var e=`---
kind: widget-copy
---

{/* Learner-facing copy for OrgCountTriggers.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Runtime placeholders must
    survive verbatim: \`{n}\` (a count), \`{a}\` \`{b}\` \`{c}\` (list items),
    \`{name}\` and \`{triggers}\` (a part the learner typed and its trigger
    list), \`{list}\` (an assembled list). The \`trigger.*\` values are short
    noun phrases that get composed into sentences via \`list.two\` /
    \`list.three\`. The \`payload.*\` lines are learner-visible — they form
    the text placed on the clipboard by "Copy for your companion". */}

<Copy k="task.lead">One organization is the default.</Copy>
<Copy k="task.bold">
  Name any part of your company that hits a trigger
</Copy>
<Copy k="task.rest">— each one becomes its own organization.</Copy>

<Copy k="q.billing.label">
  Must sign its own contract with Anthropic
</Copy>
<Copy k="q.billing.hint">
  a separate legal agreement, not a cost center
</Copy>
<Copy k="q.billing.placeholder">
  e.g. AcquiredCo — type and press Enter
</Copy>
<Copy k="q.billing.aria">Parts that sign their own contract</Copy>

<Copy k="q.idp.label">
  Identity provider can’t join your main sign-in
</Copy>
<Copy k="q.idp.hint">a separate tenant that won’t federate</Copy>
<Copy k="q.idp.placeholder">e.g. a subsidiary on its own Okta</Copy>
<Copy k="q.idp.aria">Parts on a separate identity provider</Copy>

<Copy k="q.regwall.label">
  Must be provably walled off from the rest
</Copy>
<Copy k="q.regwall.hint">
  a regulator or contract demands a wall, not tighter settings
</Copy>
<Copy k="q.regwall.placeholder">e.g. a regulated subsidiary</Copy>
<Copy k="q.regwall.aria">Parts that must be provably isolated</Copy>

<Copy k="chip.removeAria">{name}, remove</Copy>

<Copy k="obox.main.k">Primary organization</Copy>
<Copy k="obox.main.name">Your organization</Copy>
<Copy k="obox.main.note">
  everything that doesn’t need its own wall
</Copy>
<Copy k="obox.split.k">Separate organization</Copy>

<Copy k="trigger.billing">own contract</Copy>
<Copy k="trigger.idp">separate identity provider</Copy>
<Copy k="trigger.regwall">regulatory wall</Copy>

<Copy k="list.two">{a} and {b}</Copy>
<Copy k="list.three">{a}, {b}, and {c}</Copy>

<Copy k="pill.singular">organization</Copy>
<Copy k="pill.plural">organizations</Copy>

<Copy k="action.copy">Copy for your companion</Copy>
<Copy k="action.copied">Copied</Copy>
<Copy k="fallback.aria">Your answer, ready to copy</Copy>

<Copy k="payload.count">How many organizations: {n}</Copy>
<Copy k="payload.wall">Where the wall goes: {list}</Copy>
<Copy k="payload.wall.none">nowhere — no part hits a trigger</Copy>
<Copy k="payload.part">{name} ({triggers})</Copy>
<Copy k="payload.billing">Own contract: {list}</Copy>
<Copy k="payload.idp">Separate identity provider: {list}</Copy>
<Copy k="payload.regwall">Regulatory wall: {list}</Copy>
<Copy k="payload.none">none</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 629386ce17f23973 */}
<Copy k="widget.description">
  Exercise: the learner names parts of their company that hit any of three
  split triggers for Claude Enterprise organizations: needing its own contract
  with Anthropic, running a separate identity provider that can't federate
  with the main sign-in, or requiring a provable regulatory or contractual
  data wall. Each distinct part named becomes its own "separate organization"
  alongside the primary one, and a running tally shows the total organization
  count updating as entries are added or removed. A final step assembles the
  learner's inputs into text they can copy into their rollout plan. It teaches
  that one organization is the default, and that only these three triggers,
  not finer internal controls, justify splitting into multiple organizations.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner names company parts that hit three organization-split
  triggers—separate contract, non-federating identity provider, or required
  data wall—while a tally and copyable summary update, teaching that only
  these triggers justify multiple organizations.
</Copy>
`;export{e as default};