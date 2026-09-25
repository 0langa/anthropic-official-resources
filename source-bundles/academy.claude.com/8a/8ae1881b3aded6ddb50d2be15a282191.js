var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ThreeTasks.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim; \`{br}\` marks a line break in
    the terminal mock. Which effort and reason are right, the slash
    commands and the level names are data in the widget; the prompt,
    reasons and consequences live here under \`task.<id>.*\`. The terminal
    header's model placeholder and effort readout come from the folder's
    _shared.copy.mdx (\`session.model\` / \`session.effort\`). */}

<Copy k="kicker">
  Three tasks · same model, each in a fresh session at the default effort
</Copy>
<Copy k="title">
  Before you press Enter: which way would you move the effort, and why?
</Copy>
<Copy k="task.label">The task</Copy>
<Copy k="task.count">{n} of {total}</Copy>
<Copy k="btn.prevTask">Previous task</Copy>
<Copy k="btn.nextTask">Next task</Copy>

<Copy k="term.aria">
  Claude Code session, {model}, {readout}. Prompt: {prompt}
</Copy>
<Copy k="term.brand">Claude Code</Copy>
<Copy k="term.header">{model} · {readout}</Copy>

<Copy k="step.effort.label">Effort</Copy>
<Copy k="step.effort.sub">relative to the default</Copy>
<Copy k="step.effort.aria">Effort, relative to the default</Copy>
<Copy k="step.reason.label">Reason</Copy>
<Copy k="step.reason.aria">Reason</Copy>

<Copy k="effort.down.label">Turn it down</Copy>
<Copy k="effort.default.label">Leave it at the default</Copy>
<Copy k="effort.default.readout">default effort</Copy>
<Copy k="effort.up.label">Turn it up</Copy>

<Copy k="btn.check">Check my answer</Copy>
<Copy k="hint">Pick an effort setting and a reason first.</Copy>
<Copy k="result.both">Right setting, right reason.</Copy>
<Copy k="result.setting">Right setting. Have another look at the reason.</Copy>
<Copy k="result.neither">Not quite. Here is what that setting would do.</Copy>
<Copy k="result.what">{lead} {consequence}</Copy>
<Copy k="result.what.lead">What happens:</Copy>
<Copy k="btn.change">Change my answer</Copy>

<Copy k="task.docstring.prompt">Write a docstring for this function.</Copy>
<Copy k="task.docstring.reason1.text">
  You can describe it exactly and check the result in one read.
</Copy>
<Copy k="task.docstring.reason1.explain">
  Nothing about it needs a big spend of reading or checking.
</Copy>
<Copy k="task.docstring.reason2.text">
  A docstring needs the whole module read first, so give it more effort.
</Copy>
<Copy k="task.docstring.reason2.explain">
  It does not; the function is in front of it. Reading the whole module is
  the extra work you would be paying for.
</Copy>
<Copy k="task.docstring.reason3.text">
  It is quick, so the setting does not matter either way.
</Copy>
<Copy k="task.docstring.reason3.explain">
  Quick for you is not the same as cheap for the model; the setting still
  shapes how much it reads and re-checks before handing back one line.
</Copy>
<Copy k="task.docstring.result.down">
  Set lower, it should still read the function, write the line, and hand back,
  only sooner.
</Copy>
<Copy k="task.docstring.result.default">
  It finishes either way. At the default you may pay for reading and
  re-checking that a one-line docstring never needed.
</Copy>
<Copy k="task.docstring.result.up">
  You signal that a docstring is a big job, and it will likely treat it like
  one: more reading, more checking, a longer wait for the same line.
</Copy>
<Copy k="task.docstring.note">
  One level down first. Go lower next time if the quality holds.
</Copy>

<Copy k="task.tests.prompt">
  These three tests are failing. Find out why,{br}propose a fix, and explain
  why it is a good fix.
</Copy>
<Copy k="task.tests.reason1.text">
  Several failures at once is a lot to untangle, so give it more.
</Copy>
<Copy k="task.tests.reason1.explain">
  More items is not more complexity. Each one is a read, a fix, and a test run
  you can verify, which is everyday debugging.
</Copy>
<Copy k="task.tests.reason2.text">
  Some reading and reasoning, verifiable by running the tests; not extreme in
  either direction.
</Copy>
<Copy k="task.tests.reason2.explain">
  And running the tests tells you whether the fix worked, so there is no
  extra self-checking to buy.
</Copy>
<Copy k="task.tests.reason3.text">
  Debugging is open-ended, so more effort is the safe choice.
</Copy>
<Copy k="task.tests.reason3.explain">
  More is not free: likely the same fix after a longer wait and a bigger
  bill. Start at the default and turn up only if it comes back unfinished.
</Copy>
<Copy k="task.tests.result.down">
  Reading the tests and running them are part of the job. Set lower, it is
  likely to stop after the first plausible fix and hand the rest back.
</Copy>
<Copy k="task.tests.result.default">
  A read, a fix, a test run to verify. That is the everyday case the default
  is tuned for; nothing to change.
</Copy>
<Copy k="task.tests.result.up">
  It would likely land the same fix after more reading and re-checking, with
  a longer explanation and a longer wait for it.
</Copy>

<Copy k="task.history.prompt">
  Find every commit that touched this piece of{br}functionality in the last
  six months, summarize{br}them, and rank them from largest impact
  to{br}smallest.
</Copy>
<Copy k="task.history.reason1.text">
  Git history is structured, so this is mostly lookup.
</Copy>
<Copy k="task.history.reason1.explain">
  Finding the commits is lookup. Summarizing and ranking them by impact is
  reading and judgment, and that is where the effort goes.
</Copy>
<Copy k="task.history.reason2.text">
  It is one prompt with a clear deliverable, so the default should cover it.
</Copy>
<Copy k="task.history.reason2.explain">
  Clear is not the same as small. Reading that much history and judging
  impact is more work than the default tends to spend.
</Copy>
<Copy k="task.history.reason3.text">
  Lots to read, ranking takes judgment, and you cannot check the answer at a
  glance.
</Copy>
<Copy k="task.history.reason3.explain">All three point the same way: up.</Copy>
<Copy k="task.history.result.down">
  It has months of history to read and a ranking to justify. Set lower, it is
  likely to read less of it and hand back a thinner list with a ranking it
  did not re-check.
</Copy>
<Copy k="task.history.result.default">
  It may finish, and it may look fine, which is the catch: at the default it
  tends to read and re-check an everyday amount, and you would not spot a
  thin ranking by eye. This is the case turning up is for.
</Copy>
<Copy k="task.history.result.up">
  Turned up, it tends to read the history widely, weigh the commits against
  each other, and re-check the ranking before it hands back. Slower and
  costlier, and worth it here.
</Copy>
<Copy k="task.history.note">
  One level up first. Reach for {level} only if it still comes back thin.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 352d28adb7bf5f1d */}
<Copy k="widget.description">
  Quiz: for each of three sample coding tasks shown as a prompt in a mock
  terminal session, the learner chooses whether to move the model's effort
  level down, leave it at the default, or turn it up, then picks the reasoning
  that justifies that choice. Checking the answer reveals whether the setting
  and reason were right, explains why, and describes the likely consequence of
  running the task at the chosen effort level, and, after the right setting on
  a task that needs a change, the slash command that makes it. The exercise
  reinforces matching effort to a task's actual complexity, judging factors
  like how verifiable or reading-heavy a task is, rather than relying on the
  default for everything.
</Copy>
<Copy k="widget.summary">
  Quiz: for each of three sample coding tasks shown in a mock terminal
  session, choose whether to raise, lower, or keep the default effort level
  and justify the choice, then check your answer for an explanation and likely
  consequence.
</Copy>
`;export{e as default};