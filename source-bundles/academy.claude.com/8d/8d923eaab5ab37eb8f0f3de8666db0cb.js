var e=`---
kind: widget-copy
---

{/* Learner-facing copy for HabitChecklist.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="title">Check the channel where your team hands Claude the most work</Copy>
<Copy k="intro">
  Answer with that one channel in mind. Each no shows one thing to try.
</Copy>
<Copy k="answeredCount">{answered} of {total} answered</Copy>

<Copy k="group.1.label">The right place</Copy>
<Copy k="group.2.label">Teaching the channel</Copy>
<Copy k="group.3.label">Tasks and ownership</Copy>

<Copy k="habit.1.question">
  We hand Claude requests here without re-explaining the background, and its
  answers use what is already in the channel or our tools.
</Copy>
<Copy k="habit.1.try">
  Ask one question with no background and see what Claude already knows.
</Copy>
<Copy k="habit.1.clause">
  look at our recent requests to you here and tell us which ones re-explained
  things you already had from the channel; suggest how we could ask more
  briefly
</Copy>

<Copy k="habit.2.question">
  Claude can use the tools this channel’s work lives in, and we have checked
  one result against the source.
</Copy>
<Copy k="habit.2.try">
  Ask what Claude can access from this channel, then have it fetch one record
  you can check.
</Copy>
<Copy k="habit.2.clause">
  list what you can access from this channel, say which of our recent tasks
  needed something you could not reach, and suggest the one connection that
  would help most
</Copy>

<Copy k="habit.3.question">
  Work the team could use happens here in the channel, not in someone’s DM.
</Copy>
<Copy k="habit.3.try">
  Take one thing you asked in a DM that the team would have used, and ask it
  in the channel instead.
</Copy>
<Copy k="habit.3.clause">
  Whether questions the whole team could use are being asked here or seem to
  be missing (for example, answers that get re-asked), and one suggestion for
  moving that work into the channel.
</Copy>

<Copy k="habit.4.question">
  When Claude gets something wrong here, the correction is saved so it does
  not happen again, and we review what it remembers now and then.
</Copy>
<Copy k="habit.4.try">
  Ask what Claude remembers here; save one pattern your team follows.
</Copy>
<Copy k="habit.4.clause">
  show us what you remember for this channel, flag anything that looks stale
  or contradictory, and suggest one correction from our recent threads that
  would be worth saving
</Copy>

<Copy k="habit.5.question">
  This channel is for one kind of work, and Claude has been told what that
  is.
</Copy>
<Copy k="habit.5.try">
  Ask Claude to draft the channel instructions, then edit and save them in
  the channel’s settings.
</Copy>
<Copy k="habit.5.clause">
  describe in two or three lines what this channel is for, based on its
  history, and draft channel instructions we could edit: what it is for, how
  to ask you for things, what belongs elsewhere
</Copy>

<Copy k="habit.6.question">
  Claude knows which messages here it should pick up without a tag, and which
  to leave alone.
</Copy>
<Copy k="habit.6.try">
  Decide on or off for this channel, then tell Claude what is worth replying
  to.
</Copy>
<Copy k="habit.6.clause">
  tell us whether you currently reply here without being tagged, and propose
  one line on which messages you should pick up and which to leave alone
</Copy>

<Copy k="habit.7.question">
  A task we used to do every week, Claude now kicks off on its own.
</Copy>
<Copy k="habit.7.try">
  Put one small weekly ask on a schedule and treat the first post as a draft.
</Copy>
<Copy k="habit.7.clause">
  list any routines running here, and propose one recurring task from what we
  ask most often, with a day, time, and format, for us to confirm
</Copy>

<Copy k="habit.8.question">
  When we hand Claude a task, we say the goal, where to look, and how we will
  check it, and we review and give feedback in the thread.
</Copy>
<Copy k="habit.8.try">
  Rewrite your last request with the goal, inputs, a check, and priorities.
</Copy>
<Copy k="habit.8.clause">
  take our last few requests and say, for each, whether it had a goal, where
  to look, and a way to check; rewrite one of them the way you would have
  liked to receive it
</Copy>

<Copy k="habit.9.question">
  Claude owns one ongoing responsibility here, toward a goal written in the
  channel, and it is clear which decisions come back to a person.
</Copy>
<Copy k="habit.9.try">
  Hand over one standing responsibility, and say what comes back to you.
</Copy>
<Copy k="habit.9.clause">
  suggest one ongoing responsibility you could own in this channel, what you
  would do without being asked, and which decisions you would bring back to
  us
</Copy>

<Copy k="yes">Yes</Copy>
<Copy k="no">No</Copy>
<Copy k="yesnoAria">{label}, question {n}</Copy>
<Copy k="questionAria">Question {n}</Copy>

<Copy k="tryLabel">Try:</Copy>
<Copy k="lessonRef">(lesson {n})</Copy>

<Copy k="resultAria">Result</Copy>
<Copy k="postHeading">Post this in the channel</Copy>
<Copy k="allYes">
  Nothing to set up. Post one line in the channel: the habit you will keep
  checking, and who checks it.
</Copy>
<Copy k="startOver">Start over</Copy>

<Copy k="figureAria">Message to post</Copy>
<Copy k="youBadge">You</Copy>
<Copy k="inChannel">in the channel you checked</Copy>
<Copy k="copy">Copy</Copy>
<Copy k="copied">Copied</Copy>

<Copy k="lead">
  we just finished the {link} on how to work with you in our workspace, and
  we’re checking our habits in this channel. For each point, look at the
  channel and answer:
</Copy>
<Copy k="lead.link">Claude Tag course</Copy>
<Copy k="close">
  Keep each answer brief and your overall response well formatted. Treat
  everything as a proposal; we’ll confirm before you save, schedule, or
  change anything.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 327c3fb34706369b */}
<Copy k="widget.description">
  Checklist: the learner picks one channel where their team hands Claude work
  and answers yes or no to nine habit questions grouped under three themes,
  choosing the right place for requests, teaching the channel what it knows
  and is for, and handling tasks and ownership clearly. Each "no" reveals a
  specific thing to try and which earlier lesson covers it. Once every
  question is answered, the widget composes a single message, built from the
  "no" answers, that the learner can copy and post to Claude in that channel
  to start addressing the gaps, framed as a proposal the team confirms before
  anything is saved or scheduled. It reinforces that these habits belong to
  the whole team, not one person.
</Copy>
<Copy k="widget.summary">
  Checklist: the learner answers yes or no to nine questions about how their
  team works with Claude in one channel. Each no suggests something to try,
  and the answers build a message to post to Claude there.
</Copy>
`;export{e as default};