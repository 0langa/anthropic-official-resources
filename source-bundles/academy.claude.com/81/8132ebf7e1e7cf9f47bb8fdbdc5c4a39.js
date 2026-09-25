var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the mock composer typing the
    /setup slash command (see academy-web src/components/mdx/WidgetCopy.tsx).
    Keys are machine identifiers — translate ONLY the text between the tags.
    \`{setup}\` is filled with the bold text of \`tooltip.setup\` (it echoes the
    typed command). */}

<Copy k="tooltip">
  Guided Cowork {setup} — install role-matched plugins, connect your tools,
  try a skill.
</Copy>
<Copy k="tooltip.setup">setup</Copy>
<Copy k="aria.replay">Replay animation</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: aba39d2e564e165a */}
<Copy k="widget.description">
  Film: a mock Cowork chat composer shows the user typing /setup. When the
  typing stops, a suggestion pill surfaces the matching command,
  /setup-claude, with an icon, alongside a tooltip explaining that guided
  Cowork setup installs role-matched plugins, connects tools, and lets the
  user try a skill. After a pause, the typed text commits to the full command
  name, shown highlighted in the composer. The sequence can be replayed. It
  illustrates the second of three Cowork setup steps: running a guided setup
  command that configures Cowork for the user's role before their first real
  task.
</Copy>
<Copy k="widget.summary">
  Film: the user types a slash command in the Cowork composer, revealing a
  suggestion pill and tooltip that explain guided setup, then watches it
  commit to the full command. It shows how to start guided Cowork setup for a
  role.
</Copy>
`;export{e as default};