var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FigAccessSummary.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). The figure depicts the English admin
    console; its control labels are product syntax and live in
    _consoleLabels.ts. This file carries the figure's accessible description
    plus the generated widget description and summary. */}

<Copy k="aria">One channel's scope in the access editor: its enable switch, then its Connectors, Repositories, and Plugins lists with the channel's own and inherited rows together, each row carrying an origin line that names the scope or bundle it came from, its custom instructions, and the access bundles attached to the channel</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 18270e2b1f356795 */}
<Copy k="widget.description">
  Illustration: Claude Tag's access editor in the admin console with one Slack
  channel's scope selected among the scopes it lists: Default Slack access,
  then each workspace and its channels. The selected channel's view holds its
  enable switch, its Connectors, Repositories, and Plugins lists, its custom
  instructions, and the access bundles attached to it. The lists show the
  channel's own and inherited rows together, and every row carries an origin
  line naming the scope or bundle it came from. It teaches that a scope's
  lists are the resolved answer to what Claude Tag can reach from that
  channel, to be read directly instead of reasoned about through inheritance.
</Copy>
<Copy k="widget.summary">
  Illustration: Claude Tag's access editor with one Slack channel selected,
  showing the channel's resolved connector, repository, and plugin lists, its
  custom instructions, and the access bundles attached to it.
</Copy>
`;export{e as default};