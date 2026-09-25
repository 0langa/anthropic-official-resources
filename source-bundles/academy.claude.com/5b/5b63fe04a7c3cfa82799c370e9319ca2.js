var e=`---
kind: widget-copy
---

{/* Shared window chrome (You/Claude, the bar, copy control, output cards)
    lives in _shared.copy.mdx. */}

<Copy k="eyes.label">Claude reacted with eyes: it has started</Copy>
<Copy k="replay">Replay</Copy>
<Copy k="plan.asOf">todos as of {time}</Copy>
<Copy k="plan.justNow">just now</Copy>
<Copy k="fold.more">Show full reply</Copy>
<Copy k="facts.title">What happened here</Copy>
<Copy k="footer">This is an illustrative example of what Claude Tag can do.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 15cf96057e412af5 */}
<Copy k="widget.description">
  Film: a chat window shows a sales team asking Claude, connected read-only to
  a CRM, for the status of an account's deal in the account's own channel.
  Claude replies in the thread so everyone sees the same answer, organizing it
  into recent activity, open items, and a next step, with inline citation
  links marking which details came from the CRM record versus from messages
  teammates posted in the channel. A closing line notes that anything not yet
  logged in the CRM only appears because someone mentioned it in the channel.
  It teaches that Claude Tag blends system-of-record data with team
  conversation, and that readers should still check the record's last-updated
  time before relying on or forwarding the answer.
</Copy>
<Copy k="widget.summary">
  Film: a chat window shows a sales team asking Claude, connected read-only to
  a CRM, about a deal's status, with Claude replying in the thread with
  activity, open items, and a next step, citing whether each detail came from
  the record or the channel.
</Copy>
`;export{e as default};