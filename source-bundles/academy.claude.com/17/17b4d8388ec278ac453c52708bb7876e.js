var e=`---
kind: widget-copy
---

{/* Copy for AdjustMap.tsx. Translate only the text between the tags.
    In \`move.<direction>\`, \`{action}\` shows \`move.<direction>.action\` in bold. */}

<Copy k="group.more">When the result misses the mark</Copy>
<Copy k="move.right">
  {action} if instructions get missed, or long work wraps up before it's
  finished. Watch whether Claude follows your instructions and attempts the task
  more thoroughly.
</Copy>
<Copy k="move.right.action">Raise effort</Copy>
<Copy k="move.up">
  {action} if Claude has all the pertinent context, you've raised effort, and
  the result still isn't at the quality you need. Start the effort at the
  default and adjust up and down as you need to.
</Copy>
<Copy k="move.up.action">Switch to a larger model</Copy>

<Copy k="group.less">When you're getting more than you need</Copy>
<Copy k="move.left">
  {action} if responses become more verbose without improving the quality, or
  the scope expands past what you asked for. Then see if these problems are
  fixed.
</Copy>
<Copy k="move.left.action">Lower effort</Copy>
<Copy k="move.down">
  {action} if results stay at the quality you need after you've lowered effort,
  and you still want quicker responses. Compare the results before you rely on
  it.
</Copy>
<Copy k="move.down.action">Try a less capable model</Copy>

<Copy k="axis.model">Model</Copy>
<Copy k="axis.model.note">how capable</Copy>
<Copy k="axis.effort">Effort</Copy>
<Copy k="axis.effort.note">how thorough</Copy>

<Copy k="tile.here">Opus</Copy>
<Copy k="tile.start">Start</Copy>
<Copy k="tile.up">Fable</Copy>
<Copy k="tile.down">Sonnet</Copy>
<Copy k="tile.left">Low</Copy>
<Copy k="tile.right">High</Copy>

<Copy k="caption">Illustrative</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 62fab0e2112fe8ae */}
<Copy k="widget.description">
  Diagram: A two-axis map shows how to adjust Claude's model and effort from a
  starting point, with effort (low to high) on one axis and model capability
  (a less capable model up to a more capable one) on the other. Each direction
  pairs with guidance: raise effort when instructions get missed or work feels
  unfinished; switch to a more capable model if quality still falls short
  after raising effort; lower effort if responses get verbose without
  improving; try a less capable model if quality holds after lowering effort
  and you want faster results. It teaches that effort and model are separate
  levers, and that effort should usually be adjusted before switching models.
</Copy>
<Copy k="widget.summary">
  Diagram: starting from Opus, when to raise or lower effort, or switch up to
  Fable or down to Sonnet, based on what you notice. Change effort first.
</Copy>
`;export{e as default};