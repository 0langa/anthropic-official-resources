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
  Checklist: the setup for asking Claude Tag about deals and accounts, in two
  items to tick off. Where: the account or deal channel, public or private,
  with the CRM connection, asking either as a new message or in the thread
  where the deal is being discussed. Tools: Salesforce or HubSpot, required,
  connected to the channel read-only so Claude can answer from the current
  record. With this in place, Claude answers from the CRM record and what the
  team has said in the channel, and the same connection can support a brief
  before a call or a weekly pipeline review.
</Copy>
<Copy k="widget.summary">
  Checklist: what to set up before asking Claude Tag about deals: the account
  or deal channel, and Salesforce or HubSpot, required, connected to that
  channel read-only.
</Copy>
`;export{e as default};