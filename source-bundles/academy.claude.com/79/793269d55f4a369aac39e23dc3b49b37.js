var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ConfigurePage.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The simulated channel name,
    service names/hosts, and allowed-domain entries live in the widget as
    data. */}

<Copy k="crumb.configure">Configure</Copy>
<Copy k="hint">Click the tabs, or any dot</Copy>
<Copy k="title">Configure Claude for {channel}</Copy>
<Copy k="intro">
  Anyone in this Slack channel can adjust how Claude behaves here.
</Copy>
<Copy k="tablistAria">Configure tabs</Copy>

<Copy k="tab.general">General</Copy>
<Copy k="tab.tools">Tools and access</Copy>
<Copy k="tab.routines">Routines</Copy>

<Copy k="tipLabel.page">About this page</Copy>
<Copy k="tipLabel.respond">About Respond automatically</Copy>
<Copy k="tipLabel.instructions">About channel instructions</Copy>
<Copy k="tipLabel.connections">About connections</Copy>
<Copy k="tipLabel.domains">About allowed domains</Copy>
<Copy k="tipLabel.routines">About routines</Copy>

<Copy k="tip.page">
  Each channel has its own page. It opens from the Configure link under any
  Claude reply, for full channel members signed in to your organization’s
  Claude account.
</Copy>
<Copy k="tip.respond">
  Untagged replies, on or off for this channel (lesson 7). Members can
  usually change it; an admin can lock it.
</Copy>
<Copy k="tip.instructions">
  Read at the start of every new thread here, and they outrank memory
  (lesson 6). Edit, save, then test in a fresh thread. Read-only if your
  admin locked member edits.
</Copy>
<Copy k="tip.connections">
  What Claude can reach from this channel (lesson 3). Everyone in the
  channel can see this list; your admins add to it (and channel managers,
  where your organization allows).
</Copy>
<Copy k="tip.domains">
  Websites Claude may open from this channel. Inherited entries come from
  your workspace or organization defaults.
</Copy>
<Copy k="tip.routines">
  The channel’s scheduled work (lesson 8), visible to everyone here. Change
  or stop one by talking to Claude in the channel.
</Copy>

<Copy k="respond.title">Respond automatically</Copy>
<Copy k="respond.desc">
  When off, Claude replies here only when @-mentioned. Anyone in the channel
  can also change this by asking Claude in Slack.
</Copy>
<Copy k="respond.on.aria">On</Copy>

<Copy k="instructions.title">Channel instructions</Copy>
<Copy k="instructions.example">
  Answer as this team’s on-call helper. For any P1, link the runbook and
  name who is on call. Keep replies under six lines.
</Copy>
<Copy k="instructions.foot">
  Added to Claude’s instructions for every new session in this channel,
  alongside any instructions set by your organization’s admins.
</Copy>
<Copy k="instructions.save">Save</Copy>

<Copy k="connections.title">Connections</Copy>
<Copy k="connections.foot">
  Services Claude can reach for sessions in this channel. Set by your
  organization’s admins.
</Copy>

<Copy k="domains.title">Allowed domains</Copy>
<Copy k="domains.foot">
  Domains Claude can reach for sessions in this channel. Inherited entries
  come from your workspace or organization defaults.
</Copy>
<Copy k="domains.inherited">Inherited</Copy>

<Copy k="routines.title">Routines</Copy>
<Copy k="routines.foot">
  Scheduled work Claude runs in this channel. Manage routines from Slack
  with {command} or by directly chatting with Claude in the channel.
</Copy>
<Copy k="routines.colName">Name</Copy>
<Copy k="routines.colSchedule">Schedule</Copy>
<Copy k="routines.colStatus">Status</Copy>
<Copy k="routines.colLast">Last run</Copy>

<Copy k="routine.digest.name">Weekly escalations digest</Copy>
<Copy k="routine.digest.schedule">Mondays · 9:00 AM ET</Copy>
<Copy k="routine.digest.last">Aug 31</Copy>
<Copy k="routine.sweep.name">Stale ticket sweep</Copy>
<Copy k="routine.sweep.schedule">Weekdays · 5:00 PM ET</Copy>
<Copy k="routine.sweep.last">Aug 28</Copy>

<Copy k="status.active">Active</Copy>
<Copy k="status.paused">Paused</Copy>
`;export{e as default};