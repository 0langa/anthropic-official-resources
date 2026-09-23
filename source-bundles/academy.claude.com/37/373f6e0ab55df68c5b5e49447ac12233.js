var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TuneJob.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Message timestamps and the
    simulated incident id (INC-2291) live in the widget as data. */}

<Copy k="channel">#support-oncall</Copy>

<Copy k="title">Tune Claude’s proactive replies</Copy>
<Copy k="setup">
  Claude was added to {channel} yesterday with automatic replies on. Here is
  its first morning. The team wants to keep automatic replies and tune three
  things.
</Copy>
<Copy k="ask">
  One message at a time: see what Claude did, pick what you would do about it.
  Your picks build the message that tells Claude its job here.
</Copy>
<Copy k="msgLabel">Claude’s job in this channel, as you build it</Copy>
<Copy k="msgEmpty">Nothing yet.</Copy>
<Copy k="after">Claude’s proactive replies after the team’s feedback</Copy>
<Copy k="close">
  Automatic replies decide whether Claude may speak. What it says, what it
  skips, and what it does when it isn’t sure come from what the team tells it
  about the job.
</Copy>

{/* The three issues, one per morning message; \`line\` is the bullet the
    right pick adds to the job message the learner builds. */}
<Copy k="issue.quiet.title">
  Claude didn’t respond to a question the team wanted it to answer.
</Copy>
<Copy k="issue.quiet.opt.tag.label">Tag Claude under Maya’s message</Copy>
<Copy k="issue.quiet.opt.tag.why">
  Works once. The next question like it waits again.
</Copy>
<Copy k="issue.quiet.opt.tell.label">
  Tell Claude that on-call and escalation questions are its to answer here,
  with the runbook linked
</Copy>
<Copy k="issue.quiet.opt.tell.why">
  Now Claude knows this kind of question is its job in this channel.
</Copy>
<Copy k="issue.quiet.opt.toggle.label">
  Turn automatic replies off and on again
</Copy>
<Copy k="issue.quiet.opt.toggle.why">
  The switch controls whether Claude may reply, not what it should reply to.
</Copy>
<Copy k="issue.quiet.line">
  answer on-call and escalation questions here, and link the runbook page
</Copy>

<Copy k="issue.noise.title">Claude responded when a reply wasn’t needed.</Copy>
<Copy k="issue.noise.opt.off.label">Turn automatic replies off</Copy>
<Copy k="issue.noise.opt.off.why">
  Stops this reply, and every useful one too.
</Copy>
<Copy k="issue.noise.opt.tell.label">
  Tell Claude to leave standup updates alone
</Copy>
<Copy k="issue.noise.opt.tell.why">
  One sentence removes this kind of reply and keeps the rest.
</Copy>
<Copy k="issue.noise.opt.move.label">
  Ask Sam to post standup somewhere else
</Copy>
<Copy k="issue.noise.opt.move.why">
  Moves the team around Claude instead of telling Claude its job.
</Copy>
<Copy k="issue.noise.line">leave standup updates alone</Copy>

<Copy k="issue.how.title">
  Claude responded, but not the way the team handles this.
</Copy>
<Copy k="issue.how.opt.self.label">Reply yourself with who’s on call</Copy>
<Copy k="issue.how.opt.self.why">
  Fixes it once. Next time Claude does the same thing.
</Copy>
<Copy k="issue.how.opt.priya.label">
  Tell Claude to tag @Priya on every customer issue
</Copy>
<Copy k="issue.how.opt.priya.why">
  One person gets every ping, including the ones Claude could have handled.
</Copy>
<Copy k="issue.how.opt.tell.label">
  Tell Claude the team’s move: name who’s on call and link the incident; if it
  can’t tell who owns it, ask once, then tag @Priya
</Copy>
<Copy k="issue.how.opt.tell.why">
  Claude gets the team’s move for this case, and a person to hand to when it
  can’t tell.
</Copy>
<Copy k="issue.how.line">
  when a customer is blocked, name who’s on call and link the incident; if you
  can’t tell who owns it, ask once, then tag @Priya
</Copy>

{/* The morning's messages and Claude's replies. In \`post.quiet.after\`,
    {link} is the underlined runbook reference; in \`post.how.after\` it is
    the simulated incident id the widget fills in. */}
<Copy k="post.quiet.who">Maya</Copy>
<Copy k="post.quiet.letter">M</Copy>
<Copy k="post.quiet.text">
  What’s the escalation path for a P1 after hours?
</Copy>
<Copy k="post.quiet.after">
  Page the secondary on-call; after 15 minutes it goes to the eng manager.
  {link}
</Copy>
<Copy k="post.quiet.after.link">Runbook › After hours</Copy>

<Copy k="post.noise.who">Sam</Copy>
<Copy k="post.noise.letter">S</Copy>
<Copy k="post.noise.text">
  standup: finishing the Q3 deck today, no blockers
</Copy>
<Copy k="post.noise.before">
  Nice progress, Sam. Want me to pull support numbers for the deck?
</Copy>

<Copy k="post.how.who">Luis</Copy>
<Copy k="post.how.letter">L</Copy>
<Copy k="post.how.text">
  Northwind can’t log in since last night’s deploy. Who’s on it?
</Copy>
<Copy k="post.how.before">
  Sorry to hear that. Can you share the error they see?
</Copy>
<Copy k="post.how.after">
  Amira is on call today. This matches {link} (SSO failing since the 22:40
  deploy). Amira, Northwind is the third report.
</Copy>

<Copy k="name.claude">Claude</Copy>
<Copy k="you.letter">Y</Copy>
<Copy k="reply.none">No reply.</Copy>
<Copy k="reply.fixedNone">Claude left this alone.</Copy>
<Copy k="issueMark">Issue {n}</Copy>
<Copy k="progress.aria">Message {current} of {total}</Copy>
<Copy k="progress.count">{current} of {total}</Copy>
<Copy k="opt.yes">Yes.</Copy>
<Copy k="opt.no">Not this.</Copy>
<Copy k="next">Next message</Copy>
<Copy k="seeMorning">See the morning again</Copy>
<Copy k="startOver">Start over</Copy>
<Copy k="morning.label">the same morning, with the job set</Copy>

{/* The job message the learner's picks build; {mention} is the styled
    @Claude mention the widget renders. */}
<Copy k="jobIntro">{mention} remember for this channel:</Copy>
`;export{e as default};