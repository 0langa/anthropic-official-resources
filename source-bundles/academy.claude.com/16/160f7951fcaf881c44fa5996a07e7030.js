var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TaskLoopClarifyingQuestions.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The simulated memo FILE names
    (Q2-board-memo.docx, …) live in the widget as data. */}

<Copy k="kicker">Cowork is asking you a few things</Copy>
<Copy k="groupAria">Clarifying question {num} of {total}</Copy>
<Copy k="prevAria">Previous question</Copy>
<Copy k="nextAria">Next question</Copy>
<Copy k="closeAria">Close</Copy>
<Copy k="pager">{num} of {total}</Copy>

<Copy k="q1">I see two memos in this folder — {memoA} and {memoB}. {ask}</Copy>
<Copy k="q1.ask">Which should I match?</Copy>
<Copy k="q1.opt3">Either — they’re close enough</Copy>
<Copy k="q1.caption">
  Cowork now knows the format target. It’ll mirror that memo’s section order,
  headings, and length without you specifying them.
</Copy>
<Copy k="q1.label">Closes the format gap</Copy>

<Copy k="q2">How much of the regional breakdown should the memo cover?</Copy>
<Copy k="q2.opt1">Full regional breakdown for every competitor</Copy>
<Copy k="q2.opt2">Regional only where it changed the price</Copy>
<Copy k="q2.opt3">Product-side moves only — skip regional</Copy>
<Copy k="q2.caption">
  This is a scope call. Your answer changes which sources Cowork reads and
  how long the memo runs.
</Copy>
<Copy k="q2.label">Closes the scope gap</Copy>

<Copy k="q3">How will the leaders read this memo?</Copy>
<Copy k="q3.opt1">Pre-read the night before</Copy>
<Copy k="q3.opt2">Live in a 30-minute slot</Copy>
<Copy k="q3.opt3">Skim — one page only</Copy>
<Copy k="q3.caption">
  Audience and setting. A pre-read gets full reasoning; a 30-min slot gets
  the recommendation up top and detail in an appendix.
</Copy>
<Copy k="q3.label">Closes the audience gap</Copy>

<Copy k="q4">
  When something can’t be verified in the source PDFs, how should I handle
  it?
</Copy>
<Copy k="q4.opt1">Flag it inline as unverified</Copy>
<Copy k="q4.opt2">Move it to a footnoted appendix</Copy>
<Copy k="q4.opt3">Leave it out entirely</Copy>
<Copy k="q4.caption">
  Tells Cowork what to do when the sources are quiet on something — rather
  than guess and present a number with false confidence.
</Copy>
<Copy k="q4.label">Closes the rigor gap</Copy>

<Copy k="recommended">(Recommended)</Copy>
<Copy k="somethingElse">Something else</Copy>
<Copy k="skip">Skip</Copy>

<Copy k="hint.navigate">{keys} to navigate</Copy>
<Copy k="hint.select">{key} to select</Copy>
<Copy k="hint.select.key">Enter</Copy>
<Copy k="hint.skip">{key} to skip</Copy>
<Copy k="hint.skip.key">Esc</Copy>

<Copy k="caption.empty">Pick an answer to see what it tells Cowork.</Copy>
<Copy k="skipped.label">Skipped</Copy>
<Copy k="skipped.body">
  Cowork will use its best guess for this. Sometimes that’s fine; sometimes
  you find out at the end.
</Copy>
<Copy k="nextQuestion">Next question →</Copy>
<Copy k="done">Done →</Copy>
<Copy k="tryAgain">Try again</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 4ed8633262f1d3e0 */}
<Copy k="widget.description">
  Exercise: a simulated Claude Cowork dialog presents four clarifying
  questions Claude might ask before starting a delegated task, each offering
  multiple-choice options plus a free-text "something else" option and a skip
  option. Choosing one of a question's listed options reveals that question's
  caption, explaining the context gap it closes — covering format, scope,
  audience, and how to handle information that can't be verified in the source
  material. Skipping instead shows a caption noting that Claude will guess,
  which may or may not work out. The goal is to show why Cowork asks
  clarifying questions upfront rather than mid-task, and how answering them
  shapes the direction and quality of the finished deliverable.
</Copy>
<Copy k="widget.summary">
  Exercise: simulated clarifying questions Claude might ask before starting a
  delegated task, each with multiple-choice answers, a free-text option, and a
  skip option. Answering or skipping a question shows a caption about what
  Claude then knows or must guess, teaching why these upfront questions shape
  the finished deliverable.
</Copy>
`;export{e as default};