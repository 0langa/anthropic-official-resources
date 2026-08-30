var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TwoDials.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Which dial is right for each
    result, the slash commands and the effort level names are data in the
    widget; each result's text and feedback live here under
    \`symptom.<id>.*\`. */}

<Copy k="kicker">The two dials</Copy>
<Copy k="title">
  Read what came back, then turn the dial you would reach for first.
</Copy>
<Copy k="btn.prevResult">Previous result</Copy>
<Copy k="btn.nextResult">Next result</Copy>
<Copy k="cameBack">What came back · {n} of {total}</Copy>

<Copy k="dial.effort.title">Effort dial</Copy>
<Copy k="dial.effort.sub">how hard it works</Copy>
<Copy k="dial.effort.dec">Turn effort down</Copy>
<Copy k="dial.effort.inc">Turn effort up</Copy>
<Copy k="dial.effort.aria">Effort level</Copy>
<Copy k="dial.model.title">Model dial</Copy>
<Copy k="dial.model.sub">how much it knows</Copy>
<Copy k="dial.model.dec">Less capable model</Copy>
<Copy k="dial.model.inc">More capable model</Copy>
<Copy k="dial.model.aria">Model</Copy>
<Copy k="model.less">less capable</Copy>
<Copy k="model.more">more capable</Copy>

<Copy k="verdict.right">Right dial, right direction</Copy>
<Copy k="verdict.wrongDial">Wrong dial</Copy>
<Copy k="verdict.otherDirection">Right dial, wrong direction</Copy>

<Copy k="hint">
  Tap a level on either dial, or use the buttons under it. Your first turn
  counts as your answer.
</Copy>
<Copy k="btn.putBack">Put the dials back</Copy>
<Copy k="btn.retry">Put it back and try again</Copy>
<Copy k="btn.show">Show the answer</Copy>

<Copy k="symptom.stopped.text">
  Fixed most of the failing tests you pointed it at, then stopped and handed
  back a summary of the ones still failing.
</Copy>
<Copy k="symptom.stopped.line.up">
  It knew how to fix them; it stopped before it got through them all. Turn
  effort up one level and rerun the same prompt.
</Copy>
<Copy k="symptom.stopped.line.model">
  Nothing it did was wrong, only incomplete. A more capable model at the same
  effort can stop at the same place. Turn effort up first; it is the cheaper
  test.
</Copy>
<Copy k="symptom.stopped.line.down">
  Right dial, wrong way. It already stopped short; less effort only makes
  that more likely. Turn it up a level instead and rerun.
</Copy>

<Copy k="symptom.wrongIdea.text">
  Wrote a confident fix built on a wrong idea of how your retry queue works.
  You already turned effort up a level and got the same idea with a longer
  explanation.
</Copy>
<Copy k="symptom.wrongIdea.line.up">
  You have already seen this: more effort produced a longer version of the
  same mistake. That is the sign to change what it knows, not how hard it
  works.
</Copy>
<Copy k="symptom.wrongIdea.line.down">
  Less effort would most likely hand back a shorter version of the same wrong
  idea. The idea is the problem, and that lives on the other dial.
</Copy>
<Copy k="symptom.wrongIdea.line.model">
  More effort already failed to fix it, so this looks like a knowledge
  problem. Switch to a more capable model, put effort back to the default,
  and rerun.
</Copy>

<Copy k="symptom.extras.text">
  Fixed every failing test, then also refactored files you never mentioned
  and wrote a migration note.
</Copy>
<Copy k="symptom.extras.line.down">
  It knew how, and did more than you asked. The effort you set signaled a big
  job, and it matched that signal. Turn it down a level for this kind of
  task.
</Copy>
<Copy k="symptom.extras.line.up">
  Right dial, wrong way. It already did more than you asked; more effort only
  invites more of that. Turn it down a level instead and rerun.
</Copy>
<Copy k="symptom.extras.line.model">
  The work was correct, so knowledge was not the problem. The extras point at
  the effort signal; turn that down instead.
</Copy>
`;export{e as default};