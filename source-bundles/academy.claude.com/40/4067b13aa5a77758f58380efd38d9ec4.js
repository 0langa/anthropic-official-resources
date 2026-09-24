var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FigPairing.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). The figure depicts the English admin
    console; its control labels are product syntax and live in
    _consoleLabels.ts. This file carries the figure's accessible description
    plus the generated widget description and summary. */}

<Copy k="aria">The pairing screen in the Claude Tag setup flow: the four pairing steps, a field for the one-time pairing code from Slack, and the choice of where Claude can reply when tagged</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 52b2c780b67d7b30 */}
<Copy k="widget.description">
  Illustration: the pairing screen, the first step of the Claude Tag setup
  flow in the admin console. It lists the pairing actions: add the Claude app
  to Slack, send Claude the connect message in Slack, paste the one-time
  pairing code it replies with, choose where Claude can reply when tagged,
  with the entire workspace shown as the recommended default, and pair the
  workspace. It teaches that pairing links the Claude organization to Slack
  and that Claude Tag joins the workspace like a new member with its own
  profile.
</Copy>
<Copy k="widget.summary">
  Illustration: the pairing step of the Claude Tag setup flow, where an Owner
  pastes the one-time pairing code from Slack and chooses where Claude can
  reply when tagged.
</Copy>
`;export{e as default};