var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FigAccessSummary.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). The figure depicts the English admin
    console; its control labels are product syntax and live in
    _consoleLabels.ts. This file carries the figure's accessible description
    plus the generated widget description and summary. */}

<Copy k="aria">One channel's page in the Claude Tag admin settings, on its General tab: its enable switch, its Respond automatically switch, its model and its channel instructions, then its Claude's access table, which lists a bundle with the items it brings and each item outside a bundle, with its type and where it comes from</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 27cabe6314dde0ef */}
<Copy k="widget.description">
  Illustration: a Slack channel's settings page in the Claude Tag admin
  console, showing the General tab and the Claude's access table. The General
  tab has the channel's enable switch, Respond automatically, its model
  setting, and its channel instructions. The Claude's access table lists
  everything reaching that channel: a bundle shown as one row with the
  connectors, repositories, plugins, or skills it brings listed beneath it,
  plus items added individually, each labeled by type and by an Inheritance
  column showing where it was added or inherited from. It teaches that a
  channel's access table is a resolved, combined view of its own and
  inherited access, meant to be read directly rather than worked out by
  reasoning about inheritance.
</Copy>
<Copy k="widget.summary">
  Illustration: a Slack channel's settings page, showing its General tab and
  Claude's access table, which lists a bundle's contents and individually
  added items with their type and where each comes from. It teaches that this
  table is a resolved view to read directly, not a result to reason out from
  inheritance rules.
</Copy>
`;export{e as default};