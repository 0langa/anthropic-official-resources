var e=`---
kind: widget-copy
---

{/* Learner-facing copy for LoopsInMotion.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="prog.cap">Your map: {placed} of {total} placed</Copy>

<Copy k="intro.kicker">Before you start</Copy>
{/* \`{innerLoop}\`/\`{outerLoop}\` render bold, \`{innerPair}\`/\`{outerPair}\` italic. */}
<Copy k="intro.lead">
  Quick reminders. The {innerLoop} is {innerPair}: describing the behaviors
  and outputs you want and evaluating what comes back. The {outerLoop} is
  {outerPair}: defining goals, deciding how work should be distributed and
  owning the result. Fluent AI use involves constant engagements at both
  levels of decision making.
</Copy>
<Copy k="intro.lead.innerLoop">inner loop</Copy>
<Copy k="intro.lead.innerPair">Description ↔ Discernment</Copy>
<Copy k="intro.lead.outerLoop">outer loop</Copy>
<Copy k="intro.lead.outerPair">Delegation ↔ Diligence</Copy>

<Copy k="btn.start">Start →</Copy>
<Copy k="btn.back">← Back</Copy>
<Copy k="btn.next">Next →</Copy>
<Copy k="btn.check">Check</Copy>
<Copy k="btn.map">See your map →</Copy>
<Copy k="btn.restart">Start over</Copy>

<Copy k="kicker.move">Move {n} of {total}</Copy>
<Copy k="ask.single">Which competency is this?</Copy>
<Copy k="ask.multi">
  Which competencies are at work here? Select all that apply.
</Copy>

<Copy k="opt.description">Inner Loop (Description)</Copy>
<Copy k="opt.discernment">Inner Loop (Discernment)</Copy>
<Copy k="opt.delegation">Outer Loop (Delegation)</Copy>
<Copy k="opt.diligence">Outer Loop (Diligence)</Copy>

<Copy k="q1.move">
  Maya decides AI can help her explore page-layout options at the thumbnail
  stage, but that all final line art stays hand-drawn.
</Copy>
<Copy k="q1.ok">
  Right. Outer Loop, Delegation. Deciding what to hand off and what stays
  hers opens the outer loop.
</Copy>
<Copy k="q1.no">
  This is the Outer Loop: Delegation. Deciding what to hand off, and what
  stays hers, is where the outer loop begins. It isn't describing a request
  yet (that comes next).
</Copy>

<Copy k="q2.move">
  She asks for five thumbnail layouts: “panel-heavy, quiet pacing, no splash
  pages.”
</Copy>
<Copy k="q2.ok">
  Right. Inner Loop, Description. Turning her vision into specific terms the
  model can act on.
</Copy>
<Copy k="q2.no">
  This is the Inner Loop: Description, turning her vision into specific
  terms the model can act on. The handoff decision (Delegation) already
  happened in Move 1.
</Copy>

<Copy k="q3.move">
  She reads the outputs and rejects three for defaulting to action-comic
  pacing that doesn't fit her book, keeping only the ones that match her
  slice-of-life rhythm.
</Copy>
<Copy k="q3.ok">
  Right. Inner Loop, Discernment. Judging what came back against her own
  standards. (Her next, sharper prompt would swing back to Description, and
  that's the loop cycling.)
</Copy>
<Copy k="q3.no">
  This is the Inner Loop: Discernment, judging the model's output against
  her standards. Diligence is about owning the final product, which comes
  later.
</Copy>

<Copy k="q4.move">
  She notices the tool keeps steering her toward a nine-panel grid, and
  stops to ask whether that structure is her idea or the tool's framing.
</Copy>
<Copy k="q4.ok">
  Right — both, and not Description. Judging whether the grid actually fits
  her book is inner-loop Discernment; in the same beat it reopens an
  outer-loop Delegation question, whether this decision should be the
  tool's at all. One moment can engage both loops, and that interdependence
  is the point.
</Copy>
<Copy k="q4.no">
  Look again. She isn't writing a prompt here, so this isn't Description.
  She's judging the tool's influence on the output (inner-loop Discernment)
  and, in the same moment, reopening the outer-loop Delegation decision
  about what to hand off. Select both of those.
</Copy>

<Copy k="q5.move">
  She drafts a short process note for her newsletter describing exactly
  where AI was involved.
</Copy>
<Copy k="q5.ok">
  Right. Outer Loop, Diligence. Being transparent about where AI was
  involved is part of owning the result.
</Copy>
<Copy k="q5.no">
  This is the Outer Loop: Diligence. She's not describing a request to the
  model here. She's disclosing AI's role, which is how she takes
  responsibility for the finished work.
</Copy>

<Copy k="q6.move">
  Before sending files to the printer, she checks the finished pages against
  her standards one last time and signs off.
</Copy>
<Copy k="q6.ok">
  Right. Outer Loop, Diligence. The final check and sign-off closes the loop
  she opened in Move 1.
</Copy>
<Copy k="q6.no">
  Close, but this is the Outer Loop: Diligence, not Discernment. Discernment
  judges the model's output mid-process; this is the final sign-off where
  she takes responsibility for the whole finished piece.
</Copy>

<Copy k="reveal.kicker">Maya's project, mapped</Copy>
<Copy k="reveal.band">Outer loop: runs around the whole project</Copy>

<Copy k="reveal.row1.tag">Delegation</Copy>
<Copy k="reveal.row1.txt">
  Sets the boundary: AI for thumbnails, final art stays hers.
</Copy>
<Copy k="reveal.row2.tag">Description</Copy>
<Copy k="reveal.row2.txt">Asks for five specific layouts.</Copy>
<Copy k="reveal.row3.tag">Discernment</Copy>
<Copy k="reveal.row3.txt">
  Rejects the layouts that don't fit her rhythm, keeps the ones that do.
</Copy>
<Copy k="reveal.row4.tag">Both loops</Copy>
<Copy k="reveal.row4.txt">
  “Is the nine-panel grid my idea or the tool's?” — inner-loop judgment
  reopening an outer-loop decision.
</Copy>
<Copy k="reveal.row5.tag">Diligence</Copy>
<Copy k="reveal.row5.txt">Discloses where AI was used.</Copy>
<Copy k="reveal.row6.tag">Diligence</Copy>
<Copy k="reveal.row6.txt">
  Checks against her standards and signs off.
</Copy>

{/* \`{brackets}\` and \`{nested}\` render bold. */}
<Copy k="reveal.note">
  Notice the shape: the outer loop {brackets} the project (Delegation opens
  it, Diligence closes it), while the inner loop sits {nested} the work. The
  two hand off to each other constantly, and some moments sit in both at
  once.
</Copy>
<Copy k="reveal.note.brackets">brackets</Copy>
<Copy k="reveal.note.nested">nested inside</Copy>

<Copy k="reveal.takeaway">
  The two loops are interdependent, not separate. Some moments engage both
  at once — like Maya asking whether the grid is her idea or the tool's.
  Fluent AI use means moving constantly between them.
</Copy>
`;export{e as default};