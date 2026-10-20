var e=`---
kind: widget-copy
---

{/* Learner-facing copy for BeforeItBuilds.tsx. Keys are machine identifiers:
    translate only the text between the tags. \`{n}\` and \`{total}\` are runtime
    placeholders and must survive verbatim.
    \`chat.user\` is the request. The \`claude\` keys are Claude's simulated
    replies: its assumptions, the sentence that opens the outline, the look,
    and the closing line that names the placeholder. \`ui.pager\` is the slide
    counter under the slide, in the product's own format. \`aria.conversation\`
    names the scrolling conversation, and \`aria.slide\` is what a screen reader
    hears before the slide. The \`callout\` keys are the two labels under the
    window, tied to the numbered rings.
    The outline's slide titles, the file name and everything on the slide are
    demo data and live in the code. */}

<Copy k="chat.user">
  Make a deck for Thursday’s leadership review from the attached strategy memo.
</Copy>

<Copy k="claude.assume">
  I’m assuming this is for the regional leadership group, that you have about 20
  minutes, and that the memo’s Q3 figures are final as of the October 2 close.
</Copy>
<Copy k="claude.idea">
  Here’s the outline. The main idea is that Q3 beat plan, and that Q4 depends on
  the enterprise renewals and the support backlog.
</Copy>
<Copy k="claude.look">
  For the look: an off-white page, dark text and one accent color. One chart per
  slide.
</Copy>
<Copy k="claude.done">
  Here’s the deck, six slides. One figure is a placeholder: the Q4 target on
  slide 6. I didn’t have it.
</Copy>

<Copy k="ui.pager">
  {n} / {total}
</Copy>

<Copy k="aria.conversation">
  The conversation with Claude. Scroll to read all of it.
</Copy>
<Copy k="aria.slide">
  Slide 6 of the finished deck, open beside the conversation:
</Copy>

<Copy k="callout.plan.lead">Claude may share its plan first</Copy>
<Copy k="callout.placeholder.lead">
  Claude may leave a placeholder for a missing fact
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 8784bd035356f426 */}
<Copy k="widget.description">
  Illustration: a sample conversation in which Claude shares its plan before
  it builds a deck, with the finished deck open beside it. The request is
  short: make a deck for a leadership review from an attached strategy memo.
  Claude replies with its assumptions about the audience, the time available
  and the figures, then an outline and the look it plans to use. Its closing
  message says one figure is a placeholder because it didn't have it, and the
  open slide shows that figure as a bracketed blank. It teaches that Claude
  may share its plan first and may leave a visible placeholder for a missing
  fact, so you know what to check.
</Copy>
<Copy k="widget.summary">
  Illustration: a sample conversation where Claude shares its assumptions and
  outline before building a deck, then leaves a visible placeholder on a slide
  for a figure it didn't have.
</Copy>
`;export{e as default};