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
  Film: in an IT help channel, the user has told Claude once to answer
  requests first, ask for missing details and escalate to the channel owner
  what it can't resolve. Later a colleague posts, without tagging Claude, a
  question about a VPN certificate that keeps expiring, and Claude replies in
  its thread. After working through a short plan, Claude answers from the
  knowledge base: why the certificate expires and how to renew it, with the
  policy and the how-to article cited and linked. It mentions an option that
  needs the owner's approval and offers to file that request only if the
  colleague asks. It shows proactive replies that settle routine requests from
  policy and leave decisions to the owner.
</Copy>
<Copy k="widget.summary">
  Film: after a standing instruction from the user, Claude answers a
  colleague's untagged question in an IT help channel from the knowledge base,
  cites the policy and how-to article, and offers to file a request needing
  the owner's approval.
</Copy>
`;export{e as default};