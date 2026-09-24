var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ValueLensWorksheet.tsx — the "Your Work Through
    the Lens" exercise worksheet (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{n}\`, \`{name}\`, \`{dim}\`,
    \`{rating}\`, \`{why}\` and \`{date}\` tokens are runtime placeholders and
    must survive verbatim. */}

<Copy k="part1.title">Part I: Map three works</Copy>
<Copy k="part1.sub">
  Choose three recent pieces from different parts of your practice, for
  example a client piece, a personal piece, and a commercial or promotional
  piece. Rate each dimension High, Medium, or Low, and say why in one
  specific sentence.
</Copy>

<Copy k="col.work">Work</Copy>
<Copy k="dim.exp">Expression</Copy>
<Copy k="dim.conn">Connection</Copy>
<Copy k="dim.dist">Distinctiveness</Copy>

<Copy k="rate.h.abbr">H</Copy>
<Copy k="rate.h.name">High</Copy>
<Copy k="rate.m.abbr">M</Copy>
<Copy k="rate.m.name">Medium</Copy>
<Copy k="rate.l.abbr">L</Copy>
<Copy k="rate.l.name">Low</Copy>

<Copy k="ph.work">Name the piece</Copy>
<Copy k="ph.why">why, specific to this work</Copy>
<Copy k="removeRow">Remove this work</Copy>
<Copy k="addRow">+ Add a work</Copy>

<Copy k="aria.work">Work {n}: name the piece</Copy>
<Copy k="aria.rateGroup">{dim} rating for work {n}</Copy>
<Copy k="aria.why">{dim}: why, for work {n}</Copy>

<Copy k="part2.title">Part II: Hunt one mismatch</Copy>
<Copy k="part2.sub">
  Name one specific place where what you care about and what your audience
  or market cares about are not the same. Does the mismatch change how you
  would use AI in that work?
</Copy>
<Copy k="ph.mismatch">The mismatch, and whether it changes your AI use...</Copy>

<Copy k="part3.title">Part III: Rehearse one trade-off</Copy>
<Copy k="part3.sub">
  Pick one of your pieces. If you had pushed one dimension harder, which
  other dimension would have paid for it, and how?
</Copy>
<Copy k="ph.tradeoff">Push one dimension; name which one pays, and how...</Copy>

<Copy k="copyBtn">Copy my answers</Copy>
<Copy k="copyDone">Copied</Copy>
<Copy k="dlBtn">Download as HTML</Copy>
<Copy k="dlDone">Downloaded</Copy>
<Copy k="saved">Saved</Copy>
<Copy k="saveFail">Autosave unavailable</Copy>
<Copy k="note">
  Your answers save in this browser only. They are not stored in Academy and
  do not move to another device. Use Copy my answers, or Download as HTML to
  save a styled copy, to keep them in your own files.
</Copy>
<Copy k="dlUnsupported">
  Download is not supported in this browser. Use the Copy button instead.
</Copy>

<Copy k="export.title">Your Work Through the Lens</Copy>
<Copy k="export.workN">Work {n}: {name}</Copy>
<Copy k="export.dimLine">{dim} [{rating}]: {why}</Copy>
<Copy k="export.noWorks">(no works added yet)</Copy>
<Copy k="export.unnamed">(unnamed)</Copy>
<Copy k="export.noRating">(no rating)</Copy>
<Copy k="export.noReason">(no reason given)</Copy>
<Copy k="export.notAnswered">(not yet answered)</Copy>
<Copy k="export.part2Label">Part II: One mismatch</Copy>
<Copy k="export.part3Label">Part III: One trade-off</Copy>

<Copy k="baked.kicker">AI Fluency for creative work</Copy>
<Copy k="baked.stamp">Your responses, exported {date}</Copy>
<Copy k="baked.footer">
  These are your own responses. They are not stored in Academy.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: dd89f66db57b9cf8 */}
<Copy k="widget.description">
  Exercise: a three-part worksheet applies the Creative Value Lens to the
  learner's own work. In Part I, the learner enters three recent pieces from
  different parts of their practice and rates each on Expression, Connection,
  and Distinctiveness as High, Medium, or Low, giving a specific reason for
  each rating. Part II asks the learner to name one place where their own
  priorities and their audience's or market's priorities diverge, and whether
  that changes how they'd use AI. Part III has them pick one piece and reason
  through a trade-off: pushing one dimension harder and naming which other
  dimension would pay for it. Answers autosave locally and can be copied or
  downloaded; the exercise reinforces that the three dimensions interact and
  that mismatches and trade-offs are worth identifying explicitly.
</Copy>
<Copy k="widget.summary">
  Exercise: a worksheet where the learner rates three of their own works on
  Expression, Connection, and Distinctiveness, then names a mismatch with
  audience priorities and rehearses a trade-off between dimensions.
</Copy>
`;export{e as default};