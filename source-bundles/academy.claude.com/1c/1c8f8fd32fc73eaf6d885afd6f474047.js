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
  Simulation: a single message to Claude in an IT help channel or a request's
  thread, sometimes with Claude's reply. The page uses it four times. In a
  request's thread, the requester accepts an option Claude offered; Claude
  files a ticket under its own name for the channel owner and replies that
  nothing changes until the owner approves. The other three, in the channel
  with no reply, tell Claude to check new requests for duplicates, answer
  those it can and route the rest to the right owner; to post a weekly summary
  of requests, including untagged posts; and to respond only when mentioned
  directly. It teaches how a channel hands work to Claude and sets when it
  responds.
</Copy>
<Copy k="widget.summary">
  Simulation: a single message to Claude in an IT help channel or thread,
  sometimes with Claude's reply. It accepts Claude's offer to file a ticket,
  or sets how Claude handles requests, a weekly summary, or mention-only
  replies.
</Copy>
`;export{e as default};