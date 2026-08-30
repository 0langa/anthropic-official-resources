var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SurfaceRolloutSteps.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The group names are Pluto's
    fictional business units; "payments-eng" is an internal group slug and
    the Claude surface names in col.* are product names. The cap.* entries
    split each step caption into a bold lead and its rest (cap.0 has no
    lead). \`{n}\` in tip.why and switch.lesson is a runtime placeholder for
    a lesson cross-reference and must survive verbatim. */}

<Copy k="task.lead">Step through Pluto’s plan</Copy>
<Copy k="task.rest">
  and watch which surfaces switch on for which groups.
</Copy>

<Copy k="head.group">Group</Copy>
<Copy k="col.chat">Chat</Copy>
<Copy k="col.cowork">Claude Cowork</Copy>
<Copy k="col.code">Claude Code</Copy>
<Copy k="col.m365">Claude for Microsoft 365</Copy>

<Copy k="group.retail.name">Retail</Copy>
<Copy k="group.retail.sub">business unit</Copy>
<Copy k="group.b2b.name">B2B</Copy>
<Copy k="group.b2b.sub">business unit</Copy>
<Copy k="group.payments.name">Payments & Trust</Copy>
<Copy k="group.payments.sub">regulated business unit</Copy>
<Copy k="group.platform.name">Platform</Copy>
<Copy k="group.platform.sub">business unit</Copy>
<Copy k="group.ops.name">Ops</Copy>
<Copy k="group.ops.sub">business unit</Copy>
<Copy k="group.engineering.name">Engineering</Copy>
<Copy k="group.engineering.sub">cross-unit group</Copy>
<Copy k="group.paymentsEng.name">payments-eng</Copy>
<Copy k="group.paymentsEng.sub">Engineering carve-out</Copy>

<Copy k="cell.on">on</Copy>
<Copy k="cell.off">off</Copy>
<Copy k="cell.blocked.aria">Blocked</Copy>
<Copy k="tip.why">
  Not an Access setting. Pluto wants regulated code sessions recorded
  first — a Visibility decision made in Lesson {n}.
</Copy>

<Copy k="key.on">On</Copy>
<Copy k="key.off">Off</Copy>
<Copy k="key.blocked">Blocked — hover for why</Copy>

<Copy k="cap.0">Everything starts off.</Copy>
<Copy k="cap.1.lead">Broad surfaces first:</Copy>
<Copy k="cap.1.rest">Chat and Claude Cowork, every group.</Copy>
<Copy k="cap.2.lead">Specialized surfaces</Copy>
<Copy k="cap.2.rest">only where the work calls for them.</Copy>
<Copy k="cap.3.lead">One won’t turn on.</Copy>
<Copy k="cap.3.rest">Hover the lock to see why.</Copy>
<Copy k="cap.unblocked.lead">Now it turns on</Copy>
<Copy k="cap.unblocked.rest">
  — the block lived in a different decision.
</Copy>

<Copy k="switch.label">Visibility reporting in place</Copy>
<Copy k="switch.lesson">(Lesson {n})</Copy>

<Copy k="btn.back">Back</Copy>
<Copy k="btn.next">Next</Copy>
`;export{e as default};