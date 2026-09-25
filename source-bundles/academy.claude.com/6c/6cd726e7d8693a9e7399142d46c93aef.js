var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TaskLoopPromptBuilder.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Each fragment has a \`.chip\`
    (selector label) and a \`.text\` (spliced into the assembled prompt
    sentence). */}

<Copy k="kicker">Build the prompt</Copy>

<Copy k="row.del">Deliverable</Copy>
<Copy k="row.inp">Inputs</Copy>
<Copy k="row.nua">Nuance</Copy>

<Copy k="frag.del-memo.chip">four-page memo</Copy>
<Copy k="frag.del-memo.text">a four-page memo</Copy>
<Copy k="frag.del-slide.chip">slide for the QBR</Copy>
<Copy k="frag.del-slide.text">a single slide for the QBR</Copy>
<Copy k="frag.del-list.chip">ranked list with notes</Copy>
<Copy k="frag.del-list.text">a ranked list with notes</Copy>

<Copy k="frag.inp-folder.chip">Q3 Competitive Review folder</Copy>
<Copy k="frag.inp-folder.text">the Q3 Competitive Review folder</Copy>
<Copy k="frag.inp-format.chip">last quarter’s memo as format reference</Copy>
<Copy k="frag.inp-format.text">last quarter’s memo as format reference</Copy>
<Copy k="frag.inp-pdfs.chip">analyst-call PDFs only</Copy>
<Copy k="frag.inp-pdfs.text">the analyst-call PDFs</Copy>

<Copy k="frag.nua-aud.chip">
  for the executive team at the leadership offsite — help them decide on the
  new pricing tier
</Copy>
<Copy k="frag.nua-aud.text">
  the audience is the leadership offsite deciding on a new pricing tier
</Copy>
<Copy k="frag.nua-rec.chip">lead with the recommendation</Copy>
<Copy k="frag.nua-rec.text">lead with the recommendation</Copy>
<Copy k="frag.nua-flag.chip">flag anything we can’t verify</Copy>
<Copy k="frag.nua-flag.text">flag anything we can’t verify</Copy>

{/* The assembled prompt is ONE sentence whose shape depends on which rows
    are filled: {del} is the deliverable clause (prompt.del, or the
    placeholder while none is picked), {inputs} and {nuances} are the
    joined chip texts. Reorder clauses freely per language. */}
<Copy k="prompt.del">Write me {deliverable}</Copy>
<Copy k="prompt.delPlaceholder">[deliverable]</Copy>
<Copy k="prompt.frame.inp">{del} using {inputs}</Copy>
<Copy k="prompt.frame.nua">{del} — {nuances}</Copy>
<Copy k="prompt.frame.inpNua">{del} using {inputs} — {nuances}</Copy>

<Copy k="composer.empty">Write a message…</Copy>

{/* Quote glyphs and terminal punctuation around the assembled prompt —
    localize with the sentence (e.g. CJK brackets). */}
<Copy k="composer.wrap">“{body}.”</Copy>
<Copy k="composer.ask">Ask</Copy>

<Copy k="verdict">
  {lead} — deliverable, inputs, and the context Cowork can’t guess.
</Copy>
<Copy k="verdict.lead">That’s a complete delegation</Copy>
<Copy k="footNote">
  Leave a row empty and Cowork will usually ask you for it.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: ba000ac9f96345a3 */}
<Copy k="widget.description">
  Exercise: the learner builds a Cowork delegation prompt by selecting chips
  across three rows: Deliverable (one choice), Inputs (multiple choices), and
  Nuance (multiple choices). A composer area assembles the selections live
  into a single prompt sentence, showing how each choice slots into the
  phrasing. Once all three rows have at least one selection, a confirmation
  line marks the prompt as a complete delegation. The exercise teaches that an
  effective Cowork prompt names the deliverable, the inputs Claude should use,
  and any nuance or context Claude can't infer on its own, and that leaving
  any of these out typically means Cowork will ask a clarifying question
  before starting work.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner selects chips for deliverable, inputs, and nuance,
  watching a composer assemble them live into one delegation prompt, with a
  confirmation once all three are filled. It teaches what makes a complete
  Cowork prompt.
</Copy>
`;export{e as default};