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
  Checklist: an interactive setup list for giving Claude a standing
  responsibility in an IT help channel, with items the learner can mark done
  (ticks aren't saved). It covers where Claude works (the channel, replying in
  threads without being tagged), which tools to connect (a knowledge base such
  as Confluence, Notion, or Google Drive, and a ticketing system such as Jira
  Service Management, ServiceNow, or Freshservice, marked required, plus an
  optional identity or device management connector like Okta or Jamf), and
  which settings to enable (such as proactive replies). It teaches that
  answering routine requests well depends on connecting the right knowledge
  and ticketing sources and turning on the right behaviors, while decisions
  still route to the responsible owner.
</Copy>
<Copy k="widget.summary">
  Checklist: the setup for giving Claude a standing responsibility in an IT
  help channel, covering where to post the instruction, the required knowledge
  base and ticketing tools, Okta or Jamf as an optional tool, and turning on
  Respond automatically.
</Copy>
`;export{e as default};