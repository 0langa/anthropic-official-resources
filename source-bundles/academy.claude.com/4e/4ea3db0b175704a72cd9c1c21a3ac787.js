var e=`---
kind: widget-copy
---

<Copy k="required">Required</Copy>
<Copy k="optional">Optional</Copy>
<Copy k="mark.done">Mark "{title}" as done</Copy>
<Copy k="mark.notDone">Mark "{title}" as not done</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: bf4a8cd25d41b9da */}
<Copy k="widget.description">
  Checklist: the setup for asking Claude Tag for a chart of a metric from the
  data warehouse, with two items the learner can tick off (ticks are not
  saved). The first says where to ask: in the thread where the number is being
  discussed, in any channel, public or private, that has the warehouse
  connection. The second names the tool to give Claude: BigQuery or Snowflake,
  required, connected to the channel read-only so Claude can run the query. It
  teaches that the place to ask is the thread where the number is discussed,
  and that the channel needs a read-only warehouse connection first.
</Copy>
<Copy k="widget.summary">
  Checklist: two setup items for charting a metric with Claude Tag, which are
  to ask in the thread where the number is discussed, in a channel with the
  warehouse connection, and to connect BigQuery or Snowflake to the channel
  read-only.
</Copy>
`;export{e as default};