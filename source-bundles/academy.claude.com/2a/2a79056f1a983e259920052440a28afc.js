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
  Film: in an escalations channel, the user once gave Claude a standing
  instruction to triage each escalation, match it against earlier tickets, tag
  the owning team, and page a person only for a P1. The ticketing integration
  then posts several escalations, each tagging Claude. Claude works through a
  short plan and gives each a severity in its own thread. It matches one to a
  past ticket, merges another into an open ticket, hands one to the account
  team, and drafts customer replies for an agent to send. When several
  customers report the same failure close together, it treats the reports as
  one P1, mentions the on-call lead, links the tickets, and leaves declaring
  an incident and replying to customers to that person. It teaches a standing
  triage job that pulls in a person only for a P1.
</Copy>
<Copy k="widget.summary">
  Film: from a standing instruction, Claude triages escalations in a support
  channel, setting severities, matching and merging tickets, tagging an owning
  team and drafting replies for an agent to send, and mentions the on-call
  lead only for a P1.
</Copy>
`;export{e as default};