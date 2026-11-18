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
  Checklist: the setup for a meeting-prep and weekly-recap routine in a direct
  message with Claude Tag, in two items to tick off. Where: the learner's own
  DM with Claude, which uses their own Claude account; teammates can't see it,
  and any routine set up there is theirs. Connectors, required: Google
  Calendar, Gmail and Google Drive, or Microsoft 365, added to the learner's
  own Claude account so Claude can use them in the DM; if they can't add one,
  they ask an Owner of their Claude organization to
  enable it. Slack threads need nothing connected, because Claude finds
  threads with an attendee by searching the workspace's public channels.
</Copy>
<Copy k="widget.summary">
  Checklist: what to set up for meeting prep and a weekly recap in a direct
  message with Claude Tag: the DM itself, and the learner's own calendar,
  email and document connectors, which are required. Slack threads need
  nothing connected.
</Copy>
`;export{e as default};