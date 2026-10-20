var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PresenterView.tsx. Keys are machine identifiers:
    translate only the text between the tags. \`{n}\`, \`{total}\` and \`{title}\`
    are runtime placeholders and must survive verbatim.
    \`alt\` is the sentence a screen reader hears before the window. The \`ui\`
    keys are labels inside the simulated presenter window, in the product's
    own wording.
    The clock reading, the slide titles and the speaker script are demo data
    and live in the code. */}

<Copy k="alt">
  A picture of the presenter view, a separate dark window titled Speaker notes.
  On the left are a clock with Pause and Reset, the slide the audience sees, and
  small previews of the previous and next slides. On the right are the speaker
  notes for this slide, written as a script.
</Copy>

<Copy k="ui.windowTitle">
  Speaker notes · {n} / {total}
</Copy>
<Copy k="ui.pause">Pause</Copy>
<Copy k="ui.reset">Reset</Copy>
<Copy k="ui.slideCount">
  Slide {n} / {total}
</Copy>
<Copy k="ui.previousLabel">Previous · {title}</Copy>
<Copy k="ui.nextLabel">Next · {title}</Copy>
<Copy k="ui.notesHead">Speaker notes</Copy>
<Copy k="ui.edit">Edit</Copy>
<Copy k="ui.nextCompact">Next: {title}</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 86f46fc83ef3095c */}
<Copy k="widget.description">
  Illustration: the presenter view that Present with speaker notes opens,
  drawn as a separate window titled Speaker notes. It holds a clock with Pause
  and Reset, a slide count, the slide the audience sees, small previews of the
  previous and next slides, and the speaker notes for the current slide,
  written as a script to read from. The example is a slide from a sample
  quarterly review deck. It teaches what you get when you present from Claude
  once a deck has notes: your script, the time and the next slide sit in a
  second window, and the notes never appear on the slide itself.
</Copy>
<Copy k="widget.summary">
  Illustration: the presenter view, a second window with a clock, the current
  slide, previews of the previous and next slides, and your speaker notes
  written as a script.
</Copy>
`;export{e as default};