var e=`---
kind: widget-copy
---

{/* Shared window chrome (You/Claude, the bar, copy control, output cards)
    lives in _shared.copy.mdx. */}

<Copy k="eyes.label">Claude reacted with eyes: it has started</Copy>
<Copy k="replay">Replay</Copy>
<Copy k="plan.asOf">todos as of {time}</Copy>
<Copy k="plan.justNow">just now</Copy>
<Copy k="fold.more">Show full reply</Copy>
<Copy k="facts.title">What happened here</Copy>
<Copy k="footer">This is an illustrative example of what Claude Tag can do.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 15cf96057e412af5 */}
<Copy k="widget.description">
  Film: a mocked chat window shows a team channel where the user sets up a
  standing routine with Claude Tag, then later shows the weekly digest Claude
  posts automatically. It depicts Claude's working plan ticking through steps
  (gathering threads and checking the connected tracker) before posting a
  reply organized into sections like decided items, open items, and items
  waiting on someone, each citing the thread or ticket it came from. The goal
  is to show how a one-time scheduled instruction turns into a recurring,
  sourced status update that anyone in the channel can correct by replying,
  before a lead forwards it, illustrating delegation with clear boundaries and
  ongoing oversight.
</Copy>
<Copy k="widget.summary">
  Film: a mocked channel shows setting up a standing routine with Claude Tag,
  then Claude's plan ticking through gathering threads and tracker tickets
  before posting a sourced weekly digest anyone can correct by replying.
</Copy>
`;export{e as default};