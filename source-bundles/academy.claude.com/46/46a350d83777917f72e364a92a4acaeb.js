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
  Simulation: a single message to Claude in the team's channel or a thread,
  sometimes with Claude's reply. The page uses it four times once the weekly
  digest is running: a teammate replies under the digest with news about an
  open item and asks Claude to flag it if it slips, and Claude adds it to the
  digest and sets a check; someone asks Claude to also read another channel,
  merged pull requests and a tracker; someone asks which routines are set up
  in the channel; and someone asks Claude to disable the digest by name. It
  teaches that anyone in the channel can steer, extend, check or stop a
  routine with a message.
</Copy>
<Copy k="widget.summary">
  Simulation: a single message to Claude in a channel or thread, sometimes
  with Claude's reply. It teaches that a standing routine can be adjusted,
  checked or stopped by describing the change in plain language.
</Copy>
`;export{e as default};