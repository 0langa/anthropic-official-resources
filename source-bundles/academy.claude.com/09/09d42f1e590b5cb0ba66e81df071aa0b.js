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
  Simulation: a single message to Claude Tag in an account's channel or a
  sales channel, shown without a reply. The page uses it four times. In a
  thread in the account's channel, one asks Claude to update its channel
  memory so a corrected mistake does not recur. In a sales channel with the
  same CRM connection, the others ask for a pipeline digest every Monday, ask
  which deals are stuck at a stage and for how long, and ask for a brief
  before a call that combines account history, recent activity and channel
  discussion. It teaches that Claude can remember corrections for a channel,
  post on a schedule, and answer questions from the CRM record and the
  channel's discussion.
</Copy>
<Copy k="widget.summary">
  Simulation: a single message to Claude Tag about deals, shown without a
  reply. It asks Claude to remember a correction for the channel, post a
  weekly pipeline digest, list deals stuck at a stage, or brief the user
  before a call.
</Copy>
`;export{e as default};