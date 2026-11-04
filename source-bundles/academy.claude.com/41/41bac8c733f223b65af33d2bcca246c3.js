var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DecidingSentence.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Each task is four sentences,
    \`task<N>.s<M>\`, read as one short story. What each sentence counts as,
    and which \`why.*\` line a tap on it shows, is the TASKS table in the
    widget. */}

<Copy k="label">Tap what decides it, then pick</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="count">Task {n} of {total}</Copy>
<Copy k="count.end">All four revealed</Copy>
<Copy k="aria.story">Task {n}: tap the sentence that decides it</Copy>
<Copy k="tapIt">Tap the sentence that decides it. Then pick.</Copy>
<Copy k="opt.remote">Remote Control</Copy>
<Copy k="opt.cloud">Cloud session</Copy>
<Copy k="reveal">Reveal</Copy>
<Copy k="hint.both">Tap a sentence and pick an option first.</Copy>
<Copy k="hint.tap">Tap a sentence first.</Copy>
<Copy k="hint.pick">Now pick an option.</Copy>
<Copy k="hint.change">You can still change either.</Copy>

<Copy k="task1.s1">Claude is two hours into a refactor in your terminal.</Copy>
<Copy k="task1.s2">About half the files are left.</Copy>
<Copy k="task1.s3">You have to leave for the evening.</Copy>
<Copy k="task1.s4">Your laptop can stay on at your desk.</Copy>
<Copy k="task1.why">
  Remote Control fits. From the terminal, you can't push an existing session
  to the cloud.
</Copy>

<Copy k="task2.s1">You want a dependency upgraded across a repo on GitHub.</Copy>
<Copy k="task2.s2">Your last commit is pushed.</Copy>
<Copy k="task2.s3">
  Your flight boards in 10 minutes, and your laptop goes in your bag.
</Copy>
<Copy k="task2.s4">You'd like to check on the upgrade when you land.</Copy>
<Copy k="task2.why">
  A cloud session fits. It keeps running after you close your laptop.
</Copy>

<Copy k="task3.s1">Claude has to test a data migration script.</Copy>
<Copy k="task3.s2">
  The script reads a database that runs only on your laptop.
</Copy>
<Copy k="task3.s3">The test takes about three hours.</Copy>
<Copy k="task3.s4">You're leaving the laptop plugged in and awake.</Copy>
<Copy k="task3.why">
  Remote Control fits. Your full local environment stays available.
</Copy>

<Copy k="task4.s1">You have three bug fixes to make in one GitHub repo.</Copy>
<Copy k="task4.s2">None of them depends on another.</Copy>
<Copy k="task4.s3">You'll read the results in the morning.</Copy>
<Copy k="task4.s4">You want all three worked on at the same time.</Copy>
<Copy k="task4.why">
  A cloud session fits. Each task gets its own session and branch, with no
  worktrees to manage. Remote Control can run several too, but you'd set that
  up yourself.
</Copy>

<Copy k="why.both">That is true with either option, so it decides nothing.</Copy>
<Copy k="why.sideBySide">
  That lets them run side by side, but it doesn't say where.
</Copy>
<Copy k="why.staysOn">
  Remote Control needs your computer to stay on. That alone doesn't rule out a
  cloud session.
</Copy>
<Copy k="why.onGitHub">
  A cloud session clones from GitHub. That alone doesn't rule out Remote
  Control.
</Copy>
<Copy k="why.pushed">
  A cloud session sees only what you've pushed. That alone doesn't rule out
  Remote Control.
</Copy>

<Copy k="label.yours">Your tap</Copy>
<Copy k="label.decides">Decides it</Copy>
<Copy k="label.both">Your tap · decides it</Copy>
<Copy k="label.near">Your tap · helps</Copy>
<Copy k="label.helps">Helps</Copy>
<Copy k="lead.miss">Your tap.</Copy>
<Copy k="lead.near">Your tap helps.</Copy>
<Copy k="yourPick">Your pick</Copy>
<Copy k="pick.right">Your pick fits.</Copy>
<Copy k="pick.wrong">Your pick doesn't fit.</Copy>
<Copy k="answer">What fits</Copy>
<Copy k="next">Next task</Copy>
<Copy k="next.last">See all four</Copy>

<Copy k="fact1">Work already under way in your terminal</Copy>
<Copy k="fact2">A laptop that has to close</Copy>
<Copy k="fact3">A database that runs only on your laptop</Copy>
<Copy k="fact4">Three tasks at the same time</Copy>
<Copy k="tap.match">Your tap matched</Copy>
<Copy k="tap.near">Your tap helped</Copy>
<Copy k="tap.miss">Your tap did not match</Copy>
<Copy k="verdict.one">{n} of your {m} taps matches.</Copy>
<Copy k="verdict.many">{n} of your {m} taps match.</Copy>
<Copy k="verdict.one.near.one">
  {n} of your {m} taps matches, and {k} more helps.
</Copy>
<Copy k="verdict.one.near.many">
  {n} of your {m} taps matches, and {k} more help.
</Copy>
<Copy k="verdict.many.near.one">
  {n} of your {m} taps match, and {k} more helps.
</Copy>
<Copy k="verdict.many.near.many">
  {n} of your {m} taps match, and {k} more help.
</Copy>
<Copy k="picks">You picked the option that fits in {n} of {m}.</Copy>
<Copy k="closing">Each of these facts points to one option.</Copy>

{/* Written by hand from this widget's copy. After you edit its copy, run
    \`node apps/academy/scripts/describe-widgets.ts\` at the repository root. described-from: 331ef78275ac2ebc */}
<Copy k="widget.description">
  Practice: this widget shows four long tasks one at a time, each as a story
  of four sentences. The learner taps the sentence that decides the choice,
  picks Remote Control or Cloud session, and presses Reveal. The story is then
  marked in place: the sentence that decides it, any sentence that helps, and
  the learner's tap. The pick sits beside what fits, with one line of why.
  After the fourth task it lists the four deciding facts and says how many
  taps matched, how many helped, and in how many tasks the pick fit.
</Copy>
<Copy k="widget.summary">
  Practice: tap the sentence that decides each of four long tasks, then pick
  Remote Control or a cloud session.
</Copy>
`;export{e as default};