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
  Simulation: a single message to Claude, in the escalations channel or a
  thread, shown without a reply. The page uses it four times after Claude has
  triaged escalations: asking Claude to update its channel memory after a
  correction so the mistake is not repeated; the person who receives P1 pages
  asking to be mentioned only when a P1 needs their decision; asking what is
  in the escalation queue from overnight; and telling Claude to respond only
  when someone mentions it directly. It teaches that anyone in the channel can
  correct Claude, change when it alerts a person, ask for the queue, or quiet
  it.
</Copy>
<Copy k="widget.summary">
  Simulation: one message to Claude in an escalations channel or thread. It
  teaches how people steer Claude's triage: having it remember a correction,
  limit when it mentions someone, summarize the queue, or reply only when
  tagged.
</Copy>
`;export{e as default};