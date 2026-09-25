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
  Film: in a thread where teammates are debating two dips in a metric, the
  user asks Claude Tag to chart it by week for the last quarter and explain
  the dips. Claude posts a short plan and ticks off its steps. Its reply says
  whether the dips are real and ties each to an event, citing an earlier
  message in the thread and an announcement from another channel, and attaches
  a bar chart and the SQL query. It offers to rerun the query if the team
  counts the metric differently. The film shows that anyone in the channel can
  get a warehouse number without writing SQL, and that the attached query
  shows how it was counted.
</Copy>
<Copy k="widget.summary">
  Film: a chat-window recreation shows the user asking Claude Tag about a
  metric in an ongoing thread, and Claude reads earlier messages, works
  through a plan, then replies with an explanation, chart, and query, citing
  the messages it used.
</Copy>
`;export{e as default};