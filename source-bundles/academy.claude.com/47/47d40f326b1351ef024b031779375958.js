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
  Film: in a bug report's thread, the user asks Claude Tag to reproduce the
  bug in a named repository, fix it and open a draft pull request, and says
  the work is done when CI passes and the pull request links back to the
  thread. Claude posts a plan it ticks off as it works, then replies that it
  reproduced the bug, names the cause, and reports the fix, a new test and the
  CI result. It attaches the draft pull request and cites the report, the
  changed file and the pull request. The pull request stays a draft until a
  person marks it ready. Claude works under its own GitHub account, so branch
  protection and review still apply.
</Copy>
<Copy k="widget.summary">
  Film: in a bug report's thread, the user asks Claude Tag to reproduce and
  fix the bug, and Claude works through a plan, then posts the cause, the fix
  and a test, and a draft pull request for a person to review.
</Copy>
`;export{e as default};