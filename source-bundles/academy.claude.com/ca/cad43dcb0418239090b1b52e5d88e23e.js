var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PrerequisitesBoard.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The \`p.*\` entries pair each
    prerequisite's name with its why-line; the must-do flags are data in
    the widget. The \`payload.*\` entries are assembled into the text the
    "Copy for your companion" button places on the clipboard —
    \`payload.checked\` / \`payload.unchecked\` are checkbox markers and
    should normally stay as-is. \`{n}\` and \`{list}\` are runtime
    placeholders and must survive verbatim. */}

<Copy k="task.lead">Mark each prerequisite</Copy>
<Copy k="task.rest">
  in place or not yet. Four are must-dos before you set up groups; the
  other two can run in parallel.
</Copy>
<Copy k="grid.aria">Six prerequisites</Copy>
<Copy k="kind.must">Must-do</Copy>
<Copy k="btn.yes">In place</Copy>
<Copy k="btn.no">Not yet</Copy>

<Copy k="p.admins.name">
  At least two Owners assigned directly by name (with IdP role mappings:
  in the group mapped to Owner)
</Copy>
<Copy k="p.admins.why">
  Your lockout insurance: a bad group sync can’t lock your team out of the
  settings that fix it.
</Copy>
<Copy k="p.idp.name">
  Identity provider connection configured and single sign-on enforced
</Copy>
<Copy k="p.idp.why">
  Claude reads groups from your IdP; no connection, no sync.
</Copy>
<Copy k="p.scim.name">
  Provisioning app set up in your identity provider
</Copy>
<Copy k="p.scim.why">
  The IdP side of the sync; without it, groups don’t push.
</Copy>
<Copy k="p.domain.name">Domain verified and claiming on</Copy>
<Copy k="p.domain.why">
  Until claiming is on, members on your domain can sign up outside your
  organization.
</Copy>
<Copy k="p.naming.name">Naming convention for your Claude groups</Copy>
<Copy k="p.naming.why">
  Easy to agree before groups exist; renaming later just needs a resync.
</Copy>
<Copy k="p.billing.name">Billing owner identified</Copy>
<Copy k="p.billing.why">
  Needed for the contract and the spend decisions, not for structure.
</Copy>

<Copy k="verdict.wait">Mark the four must-dos to read the verdict.</Copy>
<Copy k="verdict.blocked.one">Not ready — {n} must-do open</Copy>
<Copy k="verdict.blocked.many">Not ready — {n} must-dos open</Copy>
<Copy k="verdict.ready">Ready to set up groups</Copy>
<Copy k="verdict.readyOpen">still open, won’t block: {list}</Copy>

<Copy k="copy.button">Copy for your companion</Copy>
<Copy k="copy.done">Copied</Copy>
<Copy k="fb.aria">Your six, ready to copy</Copy>

<Copy k="payload.title">Prerequisites check</Copy>
<Copy k="payload.checked">[x]</Copy>
<Copy k="payload.unchecked">[ ]</Copy>
<Copy k="payload.mustTag">(must-do)</Copy>
<Copy k="payload.notReady">Verdict: not ready — {list}</Copy>
<Copy k="payload.ready">Verdict: ready to set up groups</Copy>
`;export{e as default};