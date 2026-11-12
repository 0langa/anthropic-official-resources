var e=`---
kind: widget-copy
---

{/* Copy for CostPerTask.tsx. Translate only the text between the tags.
    \`*.turns\` and \`aria\` repeat the widget's turn counts: edit them together. */}

<Copy k="aria">
  Two small charts. On a clearly defined task, both models finish in one turn
  and the less capable model costs less. On a long or ambiguous task, the less
  capable model takes six turns and the more capable model takes two, so the
  more capable model costs less.
</Copy>

<Copy k="row.less">Less capable model</Copy>
<Copy k="row.more">More capable model</Copy>
<Copy k="tag">Costs less</Copy>
<Copy k="caption">Illustrative</Copy>

<Copy k="clear.title">A clearly defined task</Copy>
<Copy k="clear.less.turns">1 turn</Copy>
<Copy k="clear.more.turns">1 turn</Copy>

<Copy k="long.title">A long or ambiguous task</Copy>
<Copy k="long.less.turns">6 turns</Copy>
<Copy k="long.more.turns">2 turns</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: f70f1a797446673d */}
<Copy k="widget.description">
  Diagram: two small charts compare how a less capable model and a more capable
  model handle different kinds of work. On a clearly defined task, both models
  finish in a single turn, so the less capable model costs less overall. On a
  long or ambiguous task, the less capable model needs many turns to get there
  while the more capable model finishes in far fewer turns, making it the
  cheaper option overall despite costing more per token. The goal is to show
  that total cost depends on turns needed to finish, not just per-token price,
  reinforcing why a more capable model can be more economical for harder,
  less-defined work.
</Copy>
<Copy k="widget.summary">
  Diagram: why a more capable model can cost less per task on long or ambiguous
  work.
</Copy>
`;export{e as default};