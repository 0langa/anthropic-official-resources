var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DecisionAttentionFlags.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`fn.*\` are the built-in
    function chips; \`opt.<question>.<value>\` are answer chips;
    \`reason.*\` are the flag explanations; \`text.*\` build the plain-text
    summary the learner copies for their companion. Runtime placeholders
    — \`{n}\`, \`{name}\`, \`{label}\`, \`{value}\`, \`{list}\` — must survive
    verbatim in their values. */}

<Copy k="task.lead">Answer about your organization.</Copy>
<Copy k="task.rest">
  Each answer lands on the five decisions below; the ones your answers
  raise the stakes on get flagged, with the reason.
</Copy>

<Copy k="q.fn.label">Which functions are in your first wave?</Copy>
<Copy k="q.fn.hint">
  Pick every one that applies. Add any the list is missing.
</Copy>
<Copy k="fn.engineering">Engineering</Copy>
<Copy k="fn.product">Product</Copy>
<Copy k="fn.design">Design</Copy>
<Copy k="fn.data">Data / Analytics</Copy>
<Copy k="fn.it">IT / Security</Copy>
<Copy k="fn.operations">Operations</Copy>
<Copy k="fn.sales">Sales</Copy>
<Copy k="fn.marketing">Marketing</Copy>
<Copy k="fn.support">Customer Support</Copy>
<Copy k="fn.finance">Finance</Copy>
<Copy k="fn.legal">Legal</Copy>
<Copy k="fn.hr">HR / People</Copy>
<Copy k="fn.executive">Executive</Copy>
<Copy k="addField.placeholder">Add a function</Copy>
<Copy k="addField.aria">Add a function the list is missing</Copy>
<Copy k="addField.button">Add</Copy>
<Copy k="writein.removeAria">{name}, remove</Copy>

<Copy k="q.risk.label">
  Is there a named person who answers for data risk (security, compliance,
  or legal)?
</Copy>
<Copy k="opt.risk.y">Yes</Copy>
<Copy k="opt.risk.n">No</Copy>
<Copy k="opt.risk.u">Not sure</Copy>

<Copy k="q.idp.label">Who runs your identity provider and provisioning?</Copy>
<Copy k="opt.idp.me">Me or my team</Copy>
<Copy k="opt.idp.other">Another team</Copy>
<Copy k="opt.idp.none">Nobody named yet</Copy>

<Copy k="q.reg.label">Does any function handle regulated data or work?</Copy>
<Copy k="q.reg.hint">Anything a mandate like HIPAA or SOC 2 covers.</Copy>
<Copy k="opt.reg.y">Yes</Copy>
<Copy k="opt.reg.n">No</Copy>

<Copy k="q.budget.label">
  Is there a named budget owner who can commit spend for this rollout?
</Copy>
<Copy k="opt.budget.y">Yes</Copy>
<Copy k="opt.budget.n">No</Copy>

<Copy k="q.ctr.label">
  One enterprise contract and one identity provider, or more than one?
</Copy>
<Copy k="opt.ctr.one">One of each</Copy>
<Copy k="opt.ctr.many">More than one</Copy>

<Copy k="panel.title">Your five decisions</Copy>
<Copy k="tally.empty">Answer to see them resolve</Copy>
<Copy k="tally.partial">{n} of 5 resolved so far</Copy>
<Copy k="tally.flaggedRest">of your five need extra attention</Copy>
<Copy k="pill.flag">Extra attention</Copy>
<Copy k="pill.pending">Answer above</Copy>
<Copy k="calm">Nothing in your answers complicates this one.</Copy>

<Copy k="dec.structure.name">Structure & Identity</Copy>
<Copy k="dec.access.name">Access (surfaces and connectors)</Copy>
<Copy k="dec.governance.name">Governance (customization)</Copy>
<Copy k="dec.spend.name">Spend</Copy>
<Copy k="dec.visibility.name">Visibility</Copy>

<Copy k="reason.structure.ctr">
  Several contracts, or identity providers that can’t be joined, mean more
  than one organization, and that wall shapes every group inside it.
</Copy>
<Copy k="reason.structure.idp">
  Nobody is named on identity and provisioning yet, and the group structure
  gets built with that person.
</Copy>
<Copy k="reason.structure.reg">
  Regulated work needs a boundary narrower than a department, so the
  structure can’t just mirror the org chart.
</Copy>
<Copy k="reason.access.reg">
  The regulated function’s connector grants, especially anything that
  writes back, take a sign-off the others don’t.
</Copy>
<Copy k="reason.access.fn">
  Four or more functions with different daily work in one wave, so surfaces
  and connectors get set per group, not once for everyone.
</Copy>
<Copy k="reason.governance.risk">
  No one is named for data risk yet, so the customization posture has no
  security voice to consult.
</Copy>
<Copy k="reason.spend.budget">
  No one is named who can commit budget yet, so the spend ceiling has no
  owner to defend it.
</Copy>
<Copy k="reason.visibility.risk">
  No one is named for data risk yet, so retention and audit have no owner
  to sign off.
</Copy>
<Copy k="reason.visibility.reg">
  Regulated data may set the retention window and audit posture for you, so
  confirm the mandate before choosing.
</Copy>

<Copy k="btn.copy">Copy for your companion</Copy>
<Copy k="status.copied">
  Copied — paste into your companion, Lesson 2.
</Copy>
<Copy k="status.fallback">Press Ctrl+C (Cmd+C on Mac) to copy</Copy>
<Copy k="fb.aria">Your attention list, ready to copy</Copy>

<Copy k="text.header">
  LESSON 2 · INTAKE: WHICH DECISIONS NEED EXTRA ATTENTION
</Copy>
<Copy k="text.answers">Your answers</Copy>
<Copy k="text.line">{label}: {value}</Copy>
<Copy k="qlbl.fn">Functions in the first wave</Copy>
<Copy k="qlbl.risk">Named data-risk owner</Copy>
<Copy k="qlbl.idp">Identity and provisioning</Copy>
<Copy k="qlbl.reg">Regulated function</Copy>
<Copy k="qlbl.budget">Named budget owner</Copy>
<Copy k="qlbl.ctr">Contracts and identity providers</Copy>
<Copy k="text.nonePicked">none picked</Copy>
<Copy k="text.extra">Extra attention</Copy>
<Copy k="text.noneFlagged">None flagged by your answers.</Copy>
<Copy k="text.notFlagged">Not flagged: {list}</Copy>
<Copy k="text.none">none</Copy>
`;export{e as default};