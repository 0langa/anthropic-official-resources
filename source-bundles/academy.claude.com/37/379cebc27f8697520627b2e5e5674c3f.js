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
  Simulation: a single message to Claude in an on-call channel or an alert's
  thread, sometimes with Claude's reply. The page uses it four times. In an
  alert's thread, the on-call engineer approves a proposed rollback, and
  Claude replies that it ran the runbook's rollback step and confirmed
  recovery, then posts a draft pull request with the fix and an incident
  summary. The other three, sent in the channel without a reply, set a routine
  that checks the alerting dashboard on a schedule, ask for a weekly on-call
  handoff, and ask which routines are set up. It teaches how people approve
  Claude's actions in a thread and set up and check its recurring work in a
  channel.
</Copy>
<Copy k="widget.summary">
  Simulation: a chat message in an on-call channel or thread showing a
  person's prompt to Claude and, sometimes, Claude's reply, illustrating how
  people request standing monitoring, approve actions, or ask for recurring
  reports.
</Copy>
`;export{e as default};