var e=`---
kind: widget-copy
---

{/* Learner-facing copy for GovernancePostures.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. "Pluto", "Payments & Trust"
    are the course's fictional company and group names and should stay as
    names. The \`who.*\` keys are stage-owner roles shown under the stage
    headers; the \`by.*\` keys are Skill provenance lines; the \`lbl.*\` keys
    are the outcome shown in the stopped/flagged cell for each posture.
    The Skill names themselves (notes-formatter etc.) are data in the
    widget, not copy. */}

<Copy k="task.lead">Switch the posture</Copy>
<Copy k="task.rest">
  and watch where the review gate sits and which Skill it stops.
</Copy>

<Copy k="chips.aria">Governance posture</Copy>
<Copy k="chip.hybrid">Open build, reviewed spread · Pluto (most groups)</Copy>
<Copy k="chip.appfirst">Approve-first · Payments & Trust</Copy>
<Copy k="chip.central">Centralized</Copy>
<Copy k="chip.open">Fully open</Copy>

<Copy k="corner">Skill</Copy>
<Copy k="stage.build">Build</Copy>
<Copy k="stage.vet">Vet</Copy>
<Copy k="stage.promote">Promote</Copy>
<Copy k="stage.spread">Spread</Copy>
<Copy k="gate.label">Review gate</Copy>

<Copy k="who.staffed">Staffed team</Copy>
<Copy k="who.any">Any member</Copy>
<Copy k="who.reviewer">Named reviewer</Copy>
<Copy k="who.owner">Skill owner</Copy>

<Copy k="by.staffed">built by staffed team</Copy>
<Copy k="by.member">built by a member</Copy>
<Copy k="by.request">member request</Copy>
<Copy k="note.regulated">reaches regulated data</Copy>

<Copy k="lbl.central">Not built · only the staffed team builds</Copy>
<Copy k="lbl.hybrid">Sent back for changes</Copy>
<Copy k="lbl.appfirst">Held until approved</Copy>
<Copy k="lbl.open">Spread unreviewed</Copy>

<Copy k="key.passed">Passed this stage</Copy>
<Copy k="key.stopped">Stopped at the gate</Copy>
<Copy k="key.never">Never reached</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1ea4d86784bc6d72 */}
<Copy k="widget.description">
  Exercise: a skill moves through four stages, build, vet, promote, and
  spread, while the learner switches among four governance postures (open
  build with reviewed spread, approve-first, centralized, and fully open).
  Each posture repositions a review gate over a different stage, changes who
  is allowed to act at each stage (staffed team, any member, a named reviewer,
  or the skill owner), and recolors sample skills' progress to show which pass
  a stage, which get stopped at the gate, or which spread without review. The
  goal is to show that a governance posture is really a combination of
  distribution settings controlling who builds, shares, and approves
  customizations, and that stricter postures trade speed for review while
  looser ones trade review for velocity.
</Copy>
<Copy k="widget.summary">
  Exercise: switch among four governance postures to see where a review gate
  lands across build, vet, promote, and spread stages, who may act at each,
  and which sample skills pass, stop, or spread unreviewed, showing how
  posture trades speed for review.
</Copy>
`;export{e as default};