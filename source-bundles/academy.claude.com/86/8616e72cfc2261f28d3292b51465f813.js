var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DesignToBuild.tsx. Keys are machine identifiers:
    translate only the text between the tags. \`{thing}\` is a runtime
    placeholder and must survive verbatim; its text is the key that ends in
    \`.thing\` and is shown in bold.
    \`alt1\`, \`alt2\` and \`alt3\` are the text alternative read by screen readers,
    in the order the drawing is read. The \`lane.session\` and \`lane.elsewhere\`
    keys are the two lanes: a heading, the design card, then the actions the
    reader takes. \`or\` sits between the lanes when they stack. The \`has\` keys
    are the card the lanes lead to, and \`result\` is the last card.
    "Claude Code", "Share" and "edit access" follow the product's wording. */}

<Copy k="alt1">
  If you designed in Claude Code, the design is already in a Claude Code
  session. Stay in the session and ask Claude to build it.
</Copy>
<Copy k="alt2">
  If you designed somewhere else, the design is in a conversation. Share it with
  edit access, then paste its link in a Claude Code session.
</Copy>
<Copy k="alt3">
  From either start, Claude Code has the artboards, the components in them, and
  the repository. The result is a branch with the feature built.
</Copy>

<Copy k="lane.session.title">You designed in Claude Code</Copy>
<Copy k="lane.session.node">{thing} in a Claude Code session</Copy>
<Copy k="lane.session.node.thing">The design,</Copy>
<Copy k="lane.session.step1">
  Stay in the session and ask Claude to build it
</Copy>

<Copy k="lane.elsewhere.title">You designed somewhere else</Copy>
<Copy k="lane.elsewhere.node">{thing} in a conversation</Copy>
<Copy k="lane.elsewhere.node.thing">The design,</Copy>
<Copy k="lane.elsewhere.step1">Share it with edit access</Copy>
<Copy k="lane.elsewhere.step2">Paste its link in a Claude Code session</Copy>

<Copy k="or">or</Copy>

<Copy k="has.title">Claude Code has</Copy>
<Copy k="has.artboards">The artboards</Copy>
<Copy k="has.components">The components in them</Copy>
<Copy k="has.repo">The repository</Copy>

<Copy k="result">A branch with the feature built</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: d97c9a8ce89e1b00 */}
<Copy k="widget.description">
  Diagram: two routes from a Claude Design prototype to the build in Claude
  Code, which lead to the same result. If you designed in Claude Code, the
  design is already in a Claude Code session, so you stay in the session and
  ask Claude to build it. If you designed somewhere else, the design is in a
  conversation, so you share it with edit access and paste its link in a
  Claude Code session. From either start, Claude Code has the artboards, the
  components in them and the repository, and the result is a branch with the
  feature built. It teaches that the build starts from the actual design, not
  from a screenshot.
</Copy>
<Copy k="widget.summary">
  Diagram: two routes from a design to the build in Claude Code. Stay in the
  Claude Code session that made it, or share it with edit access and paste its
  link.
</Copy>
`;export{e as default};