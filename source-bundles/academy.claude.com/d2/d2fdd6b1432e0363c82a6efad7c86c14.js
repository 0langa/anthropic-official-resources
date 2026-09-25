var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SetupPermissionsModel.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="kicker">Permissions</Copy>
<Copy k="eyebrow">The mode selector</Copy>
<Copy k="title">Cowork uses a mode selector for approvals.</Copy>
<Copy k="intro">
  Pick how Claude should handle approvals each task. A few guardrails apply
  regardless of the mode you choose.
</Copy>

<Copy k="ask.title">Ask before acting</Copy>
<Copy k="ask.desc">Claude pauses so you can approve each action.</Copy>
<Copy k="bestFor">Best for</Copy>
<Copy k="ask.bestFor">
  New tools, unfamiliar files, or anything you want to watch closely.
</Copy>
<Copy k="act.title">Act without asking</Copy>
<Copy k="act.desc">
  Claude works without pausing for approval. Faster, but riskier.
</Copy>
<Copy k="act.bestFor">
  When you’re actively supervising and working with trusted files and sites.
</Copy>

<Copy k="bothModes">In both modes</Copy>
<Copy k="deleteGuarantee">
  Cowork always asks before permanently deleting files. No exceptions.
</Copy>

<Copy k="alsoControl">You also control</Copy>
<Copy k="control.mcp.term">Connectors and MCPs</Copy>
<Copy k="control.mcp">
  {term} — which ones Claude can reach, and how often each one asks for
  permission.
</Copy>
<Copy k="control.web.term">Web access</Copy>
<Copy k="control.web">
  {term} — your org’s admin can turn web search off, and you can limit which
  sites Claude in Chrome can visit.
</Copy>
<Copy k="trustNote">
  Assess how much you trust a connector or website before extending access
  beyond Claude’s default settings.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: f1df8579ab0c277a */}
<Copy k="widget.description">
  Diagram: This visual lays out Claude Cowork's permissions model, showing two
  approval modes a user selects per task. "Ask before acting" pauses for
  approval before each action that touches the outside world (sending
  messages, sharing files), suited to new tools or unfamiliar files. "Act
  without asking" skips those pauses for faster work, intended only for
  trusted, actively supervised tasks. A guarantee spans both modes: Claude
  always asks before permanently deleting files, with no exceptions. It also
  notes additional controls beyond mode selection—managing connector and MCP
  permissions, and web access restrictions—closing with a reminder to assess
  trust before expanding default access.
</Copy>
<Copy k="widget.summary">
  Diagram: Shows Claude Cowork's two permission modes, "Ask before acting" and
  "Act without asking," plus the always-on deletion safeguard and added
  controls over connectors and web access.
</Copy>
`;export{e as default};