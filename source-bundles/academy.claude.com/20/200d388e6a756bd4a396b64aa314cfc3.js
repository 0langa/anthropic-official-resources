var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SettingPrecedence.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: slash commands, flags, setting
    keys and level names are product syntax filled in by the widget, and
    the config snippets themselves stay in the widget. */}

<Copy k="kicker">Which setting wins</Copy>
<Copy k="title">
  Turn layers on and pick a level for each to see which one takes effect.
</Copy>

<Copy k="layer.env.title">Environment variable</Copy>
<Copy k="layer.env.name">environment variable</Copy>
<Copy k="layer.env.note">
  Wins over everything below, even a running skill or subagent that sets its
  own.
</Copy>
<Copy k="layer.frontmatter.title">Skill or subagent frontmatter</Copy>
<Copy k="layer.frontmatter.name">skill or subagent frontmatter</Copy>
<Copy k="layer.frontmatter.note">
  Only while that skill or subagent is running.
</Copy>
<Copy k="layer.session.title">Set during this session</Copy>
<Copy k="layer.session.name">set during this session</Copy>
<Copy k="layer.session.note">
  What you last set in the session you are in. {effort} and {model} also save
  {low} through {xhigh} for next time; {flag} and {max} end with the session.
</Copy>
<Copy k="layer.settings.title">{key} in settings</Copy>
<Copy k="layer.settings.name">{key} in settings</Copy>
<Copy k="layer.settings.note">
  The level a new session starts at. Takes {low} through {xhigh}, not {max}.
</Copy>
<Copy k="layer.aria.level">Layer {n} level</Copy>
<Copy k="layer.aria.switch">Layer {n} on</Copy>
<Copy k="layer.off">off</Copy>

<Copy k="default.title">Model default</Copy>
<Copy k="default.note">
  What you get when nothing above is set. {cmd} resets you to it.
</Copy>
<Copy k="default.always">always on</Copy>
<Copy k="default.value">model default</Copy>

<Copy k="status.winner">In effect</Copy>
<Copy k="status.shadowed">Overridden by layer {n}</Copy>
<Copy k="status.off">Not set</Copy>

<Copy k="result.heading">Effort in effect right now</Copy>
<Copy k="result.from">resolved from layer {n}, {name}</Copy>
<Copy k="result.nothing">nothing set above</Copy>
<Copy k="ignored">{list} {label}</Copy>
<Copy k="ignored.label">ignored</Copy>
<Copy k="ignored.item">{level} from layer {n}</Copy>
<Copy k="cap">
  An organization cap, if you have one, trims the levels available at every
  layer. The order stays the same.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 9737135ed515e025 */}
<Copy k="widget.description">
  Simulation: an interactive diagram of four ways to set Claude Code's effort
  level, stacked in a fixed precedence order from top to bottom: an
  environment variable, skill or subagent frontmatter, a setting made during
  the current session, and a settings-file value, with the model default
  always active beneath them. The learner switches each layer on or off and
  picks a level for it, and the widget resolves which single layer's value
  takes effect, marking any lower layer as overridden. It teaches that when
  multiple methods set effort at once, only the setting nearest the top of
  this fixed order governs, and that an organization-wide cap can still trim
  which levels are available at every layer without changing that order.
</Copy>
<Copy k="widget.summary">
  Simulation: toggle four ways of setting Claude Code's effort level on or off
  and pick a level for each to see which one wins. Teaches that the setting
  nearest the top of a fixed order governs, overriding the rest.
</Copy>
`;export{e as default};