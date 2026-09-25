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
  Checklist: what to set up before Claude Tag can investigate alerts in an
  on-call channel, in three items that can be ticked off, though the ticks are
  not saved. First, where to ask: the on-call channel that receives the paging
  alerts, with the instruction posted in the channel rather than in a thread
  so it covers every later alert. Second, the tools: a monitoring tool such as
  Datadog, Grafana or Sentry with PagerDuty, and GitHub, both required, so
  Claude can read dashboards, logs, alerts and deploys and open a draft pull
  request, plus an optional deploy or feature-flag tool for running an
  approved rollback. Third, one setting: Respond automatically, so Claude acts
  on alerts without a person tagging it.
</Copy>
<Copy k="widget.summary">
  Checklist: a three-part setup guide for adding Claude to an on-call channel,
  covering where it works, which tools to connect, and which settings to
  enable. Checking items off is just a personal tracking aid and isn't saved.
</Copy>
`;export{e as default};