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
  Simulation: a single message to Claude in an engineering channel for bugs or
  a report's thread, sometimes with Claude's reply. The page uses it five
  times. In a report's thread, the code's owner asks for a different approach,
  and Claude replies that it updated the fix and test in the same pull
  request. In the channel, someone asks Claude to watch a pull request's CI
  and tag them only on a failure; Claude posts the result with the pull
  request attached. The other three set a standing instruction to try
  reproducing new reports, ask what Claude remembers and which routines it
  has, and ask for a diagnosis only. It teaches ways to steer Claude and set
  how far it goes.
</Copy>
<Copy k="widget.summary">
  Simulation: a single message to Claude in an engineering channel for bugs or
  a report's thread, sometimes with Claude's reply. It asks Claude to change
  its approach, follow a pull request's CI, try reproducing new reports, say
  what it remembers, or diagnose without fixing.
</Copy>
`;export{e as default};