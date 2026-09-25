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
  Simulation: a single message to Claude in a project channel or a thread
  after Claude has posted notes and filed tickets from a call, sometimes with
  Claude's reply. The page uses it four times. In the notes' thread, a
  teammate replies that an action item belongs to someone else, and Claude
  reassigns that ticket in the tracker and updates the notes page to match.
  The other three, with no reply, ask in the thread for a one-page decision
  doc and one more ticket for the owner discussed, and ask in the channel for
  Claude to respond only when mentioned directly. It teaches that anyone in
  the thread can correct Claude with a plain reply, and how to ask for more.
</Copy>
<Copy k="widget.summary">
  Simulation: a single message to Claude after it turned a call into notes and
  tickets, sometimes with Claude's reply. It corrects an action item's owner,
  asks for a decision doc or another ticket, or limits Claude to replying when
  tagged.
</Copy>
`;export{e as default};