var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the Chat / Cowork / Code
    comparison table (see academy-web src/components/mdx/WidgetCopy.tsx).
    Keys are machine identifiers — translate ONLY the text between the
    tags. Rows are the run \`row<n>\` (label + one cell per mode); a cell's
    \`{name}\` tokens are runtime placeholders for its bold lead-in
    (\`{lead}\`) or a link, whose text is the sub-key of the same name —
    tokens must survive verbatim. */}

<Copy k="aspect">Aspect</Copy>
<Copy k="mode.chat">Chat</Copy>
<Copy k="mode.cowork">Cowork</Copy>
<Copy k="mode.code">Code</Copy>

<Copy k="row1.label">Best for</Copy>
<Copy k="row1.chat">
  {lead} exploring ideas, iterative drafting, quick answers, learning through
  dialogue
</Copy>
<Copy k="row1.chat.lead">A conversation you steer turn by turn:</Copy>
<Copy k="row1.cowork">
  {lead} research, analysis, file organization, finished documents and
  deliverables
</Copy>
<Copy k="row1.cowork.lead">Complex, multi-step work you delegate:</Copy>
<Copy k="row1.code">{lead} writing, testing, running, and deploying code</Copy>
<Copy k="row1.code.lead">Building software:</Copy>

<Copy k="row2.label">Where it runs</Copy>
<Copy k="row2.chat">Web, desktop, and mobile</Copy>
<Copy k="row2.cowork">
  Desktop (macOS, Windows, and Linux beta), plus web and mobile as
  cloud-hosted tasks roll out
</Copy>
<Copy k="row2.code">
  Terminal, the desktop app, and {web} — sessions run locally or in the
  cloud
</Copy>
<Copy k="row2.code.web">the web</Copy>

<Copy k="row3.label">Key features</Copy>
<Copy k="row3.chat">{quickEntry}, dictation, projects, artifacts</Copy>
<Copy k="row3.chat.quickEntry">Quick entry</Copy>
<Copy k="row3.cowork">
  Work from local folders, {projects}, {plugins}, subagents, {scheduled}
  that can run even when your devices are offline
</Copy>
<Copy k="row3.cowork.projects">projects</Copy>
<Copy k="row3.cowork.plugins">plugins</Copy>
<Copy k="row3.cowork.scheduled">scheduled tasks</Copy>
<Copy k="row3.code">
  {modes}, visual diffs, git integration, {checkpoints}, local and cloud
  environments
</Copy>
<Copy k="row3.code.modes">Plan and Auto modes</Copy>
<Copy k="row3.code.checkpoints">checkpoints</Copy>

<Copy k="row4.label">Tools and extensions</Copy>
<Copy k="row4.chat">{connectors}, {skills}, {chrome}</Copy>
<Copy k="row4.chat.connectors">Connectors</Copy>
<Copy k="row4.chat.skills">Skills</Copy>
<Copy k="row4.chat.chrome">Claude in Chrome</Copy>
<Copy k="row4.cowork">
  {connectors} (local and remote), {skills}, {chrome}, {plugins}
</Copy>
<Copy k="row4.cowork.connectors">Connectors</Copy>
<Copy k="row4.cowork.skills">Skills</Copy>
<Copy k="row4.cowork.chrome">Claude in Chrome</Copy>
<Copy k="row4.cowork.plugins">Plugins</Copy>
<Copy k="row4.code">{mcp}, {skills}, {chrome}, {codePlugins}, {hooks}</Copy>
<Copy k="row4.code.mcp">Connectors</Copy>
<Copy k="row4.code.skills">Skills</Copy>
<Copy k="row4.code.chrome">Claude in Chrome</Copy>
<Copy k="row4.code.codePlugins">Plugins</Copy>
<Copy k="row4.code.hooks">Hooks</Copy>

<Copy k="note">
  On the latest app versions, Chat and Cowork share one Home: chats, tasks,
  projects, and artifacts live in one sidebar, and you can start either from
  the same place. Claude Code sessions and projects stay separate.
</Copy>
`;export{e as default};