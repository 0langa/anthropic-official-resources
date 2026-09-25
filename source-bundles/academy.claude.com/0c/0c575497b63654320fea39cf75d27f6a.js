var e=`---
kind: widget-copy
---

{/* The window chrome this widget shares with UseCaseThread (the bar,
    You/Claude headers, the copy control, output cards) lives in
    _shared.copy.mdx, which merges under this file. appBadge is repeated
    here because a sidecar must parse to at least one <Copy> block
    (validate-translations flags an empty map as broken grammar). */}

<Copy k="appBadge">App</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: fc6a82daf312d99a */}
<Copy k="widget.description">
  Simulation: a single message to Claude in a team channel or a thread, shown
  without a reply. The page uses it four times after Claude has charted a
  metric: in a thread where a metric's counting was corrected, asking Claude
  to update its channel memory so the mistake does not recur; asking it to
  post key metrics as a chart every weekday morning with a short summary of
  anything unusual; asking which routines it has set up in the channel; and,
  in a channel without a warehouse connection, asking for a weekly chart of
  request volume and first-reply wait times. It teaches how to make a
  correction stick, set up and check routines, and chart numbers posted in a
  channel.
</Copy>
<Copy k="widget.summary">
  Simulation: a single message to Claude in a team channel or thread, shown
  without a reply. It asks Claude to remember a metric correction, post key
  metrics every weekday, list its routines, or chart request volume without a
  warehouse connection.
</Copy>
`;export{e as default};