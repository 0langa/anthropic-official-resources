var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WhoDoesWhat.tsx. Keys are machine identifiers:
    translate only the text between the tags.
    \`title\` heads the drawing. The \`legend\` keys explain the two marks in the
    wide drawing: a filled dot, and a dotted line to Claude's row. The \`role\`
    keys are the row names, also used as tags in the narrow list;
    \`role.withClaude\` follows the name in the tag of a person who asks Claude
    for a change and keeps the work. \`step.1\` to \`step.4\` label the steps of the
    numbered list below the drawing and must stay a few words each, because
    each sits in a narrow column. \`alt.intro\` is read by screen readers before
    the list, and \`caption\` is the sentence under the drawing. */}

<Copy k="title">Who has the work at each step</Copy>

<Copy k="legend.holds">Has the work</Copy>
<Copy k="legend.tie">Asks Claude for a change</Copy>

<Copy k="role.pm">PM</Copy>
<Copy k="role.designer">Designer</Copy>
<Copy k="role.team">Team</Copy>
<Copy k="role.engineer">Engineer</Copy>
<Copy k="role.claude">Claude</Copy>
<Copy k="role.withClaude">with Claude</Copy>

<Copy k="step.1">Describe the feature</Copy>
<Copy k="step.2">Build and refine the prototype</Copy>
<Copy k="step.3">Share for review</Copy>
<Copy k="step.4">Build in Claude Code</Copy>

<Copy k="alt.intro">Who has the work at each step, in order:</Copy>

<Copy k="caption">
  Claude does the building: the first prototype, then the feature. In between,
  the designer and the team refine and review it, and ask Claude for changes.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 07f386394d3d9c14 */}
<Copy k="widget.description">
  Diagram: who has the work at each of four steps, from a feature idea to its
  implementation. Rows are the PM, the designer, the team, the engineer and
  Claude, and one line passes between them as the work changes hands. The PM
  describes the feature. Claude builds the first prototype and the designer
  refines it, asking Claude for changes. The PM shares it for review and the
  team reviews it, also asking Claude for changes. The engineer opens it in
  Claude Code and Claude builds the feature. It teaches that Claude does the
  building, first the prototype and then the feature, while people refine and
  review in between.
</Copy>
<Copy k="widget.summary">
  Diagram: who has the work at each of four steps from idea to implementation,
  among a PM, a designer, the team, an engineer and Claude. Claude builds, and
  people refine and review in between.
</Copy>
`;export{e as default};