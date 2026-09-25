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
  Checklist: the setup for having Claude Tag fix a reported bug and open a
  draft pull request, with two items the learner can tick off (ticks are not
  saved). The first says where to ask: in the bug report's thread, in any
  channel that has the GitHub connection, and Claude uses the report and its
  reproduction steps. The second lists the tools: GitHub, required, connected
  to the channel with the repository the bug is in, and Datadog or Sentry,
  optional, which lets Claude read the error behind the report. It teaches
  that Claude needs the report and access to the repository before it can
  reproduce and fix the bug.
</Copy>
<Copy k="widget.summary">
  Checklist: two setup items for having Claude Tag fix a reported bug, which
  are to ask in the bug report's thread and to connect GitHub with the bug's
  repository, with Datadog or Sentry as an optional way to read the error.
</Copy>
`;export{e as default};