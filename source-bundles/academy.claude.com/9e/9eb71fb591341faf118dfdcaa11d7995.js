var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EffortPickerDemo.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: slash commands, the level names
    and the folder path are product syntax filled in by the widget. The
    session header's model placeholder and effort readout come from the
    folder's _shared.copy.mdx (\`session.model\` / \`session.effort\`). */}

<Copy k="kicker">The {cmd} picker and the session header</Copy>
<Copy k="title">
  Set the level with {cmd}, then confirm it in the session header.
</Copy>

<Copy k="picker.aria">
  Claude Code terminal showing the {cmd} picker with {level} selected
</Copy>
<Copy k="picker.heading">Effort</Copy>
<Copy k="picker.sub">how hard the model works on each turn</Copy>
<Copy k="picker.desc">Fewer tokens and tool calls. Hands back sooner.</Copy>
<Copy k="picker.keys">← → to adjust · Enter to confirm · Esc to cancel</Copy>
<Copy k="caption1.title">The picker.</Copy>
<Copy k="caption1.body">
  The level you are on is highlighted, and the dim line under the scale
  describes it. That line changes as you move along the scale; Enter keeps
  the level you stop on.
</Copy>

<Copy k="header.aria">Claude Code session header: {line}</Copy>
<Copy k="header.session">{model} {effort}</Copy>
<Copy k="header.welcome">Welcome to Claude Code!</Copy>
<Copy k="header.help">{help} for help, {status} for your current setup</Copy>
<Copy k="header.cwd">cwd: {path}</Copy>
<Copy k="header.shortcuts">? for shortcuts</Copy>
<Copy k="header.status">effort: {level}</Copy>
<Copy k="caption2.title">The session header.</Copy>
<Copy k="caption2.body">
  After you confirm, the level appears next to the model name at the top of
  the session, and the footer shows it briefly at startup and again whenever
  it changes.
</Copy>

<Copy k="note">
  Simplified. “{model}” and the folder are placeholders; the levels offered
  and exact wording depend on your model and Claude Code version.
</Copy>
`;export{e as default};