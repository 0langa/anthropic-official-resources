var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MemberGroupRole.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Maya, Priya, and Platform
    are example names; Chat, Cowork, and Claude Code are product surface
    names — keep them consistent between the \`member.*\` / \`grant.*\` /
    \`group.*\` / \`role.*\` entries and the \`note.*\` sentences that mention
    them. \`{n}\` in \`rest.label\` is a runtime placeholder and must survive
    verbatim. \`note.off.rest\` deliberately begins with a comma — it joins
    directly onto the bold \`note.off.lead\` with no space. */}

<Copy k="members.title">Members</Copy>
<Copy k="members.desc">
  People join a group two ways: synced from your identity provider (SCIM),
  or added by an admin.
</Copy>

<Copy k="arrow.join">join</Copy>

<Copy k="group.eyebrow">Group</Copy>
<Copy k="group.name">Platform</Copy>

<Copy k="member.1.initial">M</Copy>
<Copy k="member.1.name">Maya</Copy>
<Copy k="member.1.how">via SCIM sync</Copy>
<Copy k="member.2.initial">P</Copy>
<Copy k="member.2.name">Priya</Copy>
<Copy k="member.2.how">added by an admin</Copy>

<Copy k="rest.label">{n} more, via SCIM sync</Copy>

<Copy k="foot.label">They can use</Copy>
<Copy k="foot.none">nothing yet</Copy>
<Copy k="grant.1">Chat</Copy>
<Copy k="grant.2">Cowork</Copy>
<Copy k="grant.3">Claude Code</Copy>

<Copy k="link.off">not applied yet</Copy>
<Copy k="link.on">applied to the group</Copy>

<Copy k="role.title">Role</Copy>
<Copy k="role.desc.lead">Carries the permissions:</Copy>
<Copy k="role.desc.perms">Chat · Cowork · Claude Code</Copy>
<Copy k="role.applyLabel">Apply to Platform</Copy>

<Copy k="note.off.lead">
  Platform’s seven members are all on the Custom role
</Copy>
<Copy k="note.off.rest">
  , so without a role grant the group just holds people: none of them can
  use anything yet.
</Copy>
<Copy k="note.off.prompt">Flip the role on.</Copy>
<Copy k="note.on.lead">
  The role is what gives the group its power.
</Copy>
<Copy k="note.on.rest">
  All seven members — Maya, Priya, everyone — can now use Chat, Cowork, and
  Claude Code. Nobody was set up individually.
</Copy>
`;export{e as default};