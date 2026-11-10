var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SimplestFirst.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Which tiles each run shows
    lives in the .tsx. */}

<Copy k="aria">Try four feature ideas on three ways to build them</Copy>
<Copy k="count">Idea {n} of {total}</Copy>
<Copy k="startOver">Start over</Copy>

<Copy k="steps.aria">Choose how to build this idea</Copy>
<Copy k="step.one">Single request</Copy>
<Copy k="step.flow">Workflow</Copy>
<Copy k="step.agent">Agent</Copy>
<Copy k="tag.pick">Page's pick</Copy>
<Copy k="lead.pick">Page's pick.</Copy>
<Copy k="btn.pick">Show the page's pick</Copy>
<Copy k="btn.next">Next idea</Copy>
<Copy k="btn.last">See all four</Copy>

<Copy k="run.aria">What happens with this option</Copy>
<Copy k="node.request">Request</Copy>
<Copy k="node.first">First request</Copy>
<Copy k="node.unknown">Next step?</Copy>
<Copy k="node.claude">Claude picks</Copy>
<Copy k="node.tool">Uses tools</Copy>
<Copy k="end.result">Result</Copy>
<Copy k="end.short">Falls short</Copy>
<Copy k="end.nofit">No fixed steps</Copy>
<Copy k="end.wait">Longer wait</Copy>
<Copy k="end.cost">Costs more</Copy>
<Copy k="end.undo">Can't undo</Copy>
<Copy k="end.person">Rest: a person</Copy>
<Copy k="end.up">Move up</Copy>

<Copy k="transcript.name">Transcript</Copy>
<Copy k="transcript.text">
  Turn an hour-long meeting transcript into five bullet points for people who
  missed it.
</Copy>
<Copy k="transcript.one">
  One request turns the transcript into five bullet points.
</Copy>
<Copy k="transcript.flow">
  Two requests for one summary make people wait longer.
</Copy>
<Copy k="transcript.agent">
  Claude picks its own steps for the summary, and that costs more.
</Copy>
<Copy k="transcript.pick">
  The summary is the result, and no test shows it falls short.
</Copy>

<Copy k="bug.name">Bug fix</Copy>
<Copy k="bug.text">
  Find and fix a bug in a big codebase. Clues decide where to look next. One
  request still fails your test. Tests and review check a fix.
</Copy>
<Copy k="bug.look">Searches code</Copy>
<Copy k="bug.tests">Tests, review</Copy>
<Copy k="bug.one">In your test, one request falls short on this bug.</Copy>
<Copy k="bug.flow">The next step depends on what the first one finds.</Copy>
<Copy k="bug.agent">
  Claude picks each next step from the clues, at a higher cost.
</Copy>
<Copy k="bug.pick">
  You can't list the steps, and tests and review can catch mistakes.
</Copy>

<Copy k="product.name">Product copy</Copy>
<Copy k="product.text">
  Write a product description, check it against your style rules, then translate
  it. One request still fails your test.
</Copy>
<Copy k="product.write">Write</Copy>
<Copy k="product.check">Check style</Copy>
<Copy k="product.translate">Translate</Copy>
<Copy k="product.one">One request for all three falls short in your test.</Copy>
<Copy k="product.flow">
  One request per step trades a longer wait for accuracy.
</Copy>
<Copy k="product.agent">
  You know the steps, yet Claude picks its own, which costs more.
</Copy>
<Copy k="product.pick">
  One request falls short, and you can list the three steps.
</Copy>

<Copy k="disk.name">Disk alert</Copy>
<Copy k="disk.text">
  Disk alert: free up server space. One request still fails your test. Only some
  alerts have known checks. Deletes get no review or undo.
</Copy>
<Copy k="disk.listed">Known checks</Copy>
<Copy k="disk.checks">Runs checks</Copy>
<Copy k="disk.delete">Deletes files</Copy>
<Copy k="disk.one">In your test, one request falls short on this alert.</Copy>
<Copy k="disk.flow">
  Code takes alerts with known checks, and a person takes the rest.
</Copy>
<Copy k="disk.agent">
  No one reviews a delete, and a wrong one can't be undone.
</Copy>
<Copy k="disk.pick">
  Deletes get no review or undo, so stay with a workflow.
</Copy>

<Copy k="all.text">This is the page's pick for each idea.</Copy>
<Copy k="all.test">Test it</Copy>
<Copy k="rule">
  Move up only when a test fails, and to an agent only if mistakes can be
  caught.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 205c01d164887321 */}
<Copy k="widget.description">
  An ungraded sandbox: four feature ideas, one at a time, each on a card.
  Three steps rise from Single request to Workflow to Agent. The learner puts
  the idea on any step, in any order. A small picture plays the run: one
  request and its result, a fixed chain of steps, or a loop in which Claude
  picks the next step. It ends at a mark such as Result, Falls short, Longer
  wait, Costs more, or Can't undo, with one line under it as its caption. A
  button shows the step the page would pick, with the page's reason. The last
  screen rests the four ideas on those steps and draws the closing rule. No
  answer is marked, and no score is kept.
</Copy>
<Copy k="widget.summary">
  Try it: put four feature ideas on a single request, a workflow, or an agent,
  and watch what happens to each. Nothing is graded.
</Copy>
`;export{e as default};