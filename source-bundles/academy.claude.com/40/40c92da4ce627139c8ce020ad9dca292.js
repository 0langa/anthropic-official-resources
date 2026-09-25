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
  Checklist: a setup guide for giving Claude Tag a standing job of triaging
  escalations in a channel and paging a person only for a P1. Each checklist
  item covers one setup task: where Claude should watch, such as the
  escalations channel itself; which tools to connect, distinguishing a
  required ticketing system (Zendesk, Intercom, or Jira Service Management)
  from an optional paging tool (PagerDuty); and which settings to enable, such
  as proactive replies so Claude responds without being tagged. Items can be
  checked off as done, though progress isn't saved. It teaches learners the
  concrete prerequisites, connectors, and toggles needed before Claude can
  autonomously triage, route, and escalate incoming support messages.
</Copy>
<Copy k="widget.summary">
  Checklist: a setup guide covering where Claude should watch, which ticketing
  and paging tools to connect, and which settings like proactive replies to
  enable, so Claude can triage escalations and alert a person only for a P1.
</Copy>
`;export{e as default};