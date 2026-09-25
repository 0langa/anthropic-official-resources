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
  Simulation: a single message the user sends in their direct message with
  Claude Tag, where the @-mention is optional, sometimes with Claude's reply.
  The page uses it four times: setting up a routine that posts the user's week
  each Monday morning, with meetings, deadlines, and what is most likely to
  slip and why; asking Claude to block calendar time, and Claude replies that
  it has; setting up a Friday routine that drafts a recap of the week to
  forward, with Claude's draft marked not sent and visible only to the user;
  and asking which routines Claude has set up in the DM. It teaches that
  Claude changes the calendar only when asked and drafts the recap without
  sending it.
</Copy>
<Copy k="widget.summary">
  Simulation: a single message to Claude Tag in the user's DM, sometimes with
  Claude's reply. It sets up a Monday routine or an unsent Friday recap, asks
  Claude to block calendar time, or asks which routines exist.
</Copy>
`;export{e as default};