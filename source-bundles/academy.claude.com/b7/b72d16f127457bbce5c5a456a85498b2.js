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
  Checklist: a setup guide for a weekly status routine in Claude Tag, in two
  items that can be ticked off, though the ticks are not saved. The first is
  where to ask: the team's channel, sending the setup message as a new message
  there so the digest appears where the team already works. The second lists
  the tools: Linear or Jira, required, so Claude can check the tickets linked
  in the channel's threads and the team's plan, and GitHub, optional, so
  Claude can list the week's merged pull requests. It teaches what must be in
  place before Claude can post a weekly digest built from the channel's
  threads and the tracker.
</Copy>
<Copy k="widget.summary">
  Checklist: a two-item setup guide for a weekly status routine, covering
  where to send the setup message and which tools to connect, a required
  tracker and optional GitHub, before Claude posts a weekly digest.
</Copy>
`;export{e as default};