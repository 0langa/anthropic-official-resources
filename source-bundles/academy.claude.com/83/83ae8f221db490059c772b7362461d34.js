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
  Film: in an on-call channel, the user once told Claude to investigate paging
  alerts, mention whoever is on call, and roll nothing back until that person
  says yes. The alert integration then posts a warning that does not page and
  an alert that does, both tagging Claude. Claude works through a short plan
  and replies in the alert's thread: the warning needs no action, but the
  other alert is a real incident. It explains what broke, traces the cause to
  a recent deploy, and proposes the runbook's rollback, citing the dashboards,
  logs, pull request and runbook it checked. It mentions the on-call engineer
  and waits for their yes. It teaches standing monitoring that investigates on
  its own and leaves the risky step to a person.
</Copy>
<Copy k="widget.summary">
  Film: a replay of an on-call channel where Claude investigates paging alerts
  it was tagged on automatically, works through a visible plan, then replies
  distinguishing a benign warning from a real incident and proposing a fix,
  pausing for the on-call engineer's approval before any rollback.
</Copy>
`;export{e as default};