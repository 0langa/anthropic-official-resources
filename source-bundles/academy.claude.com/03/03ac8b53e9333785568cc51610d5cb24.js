var e=`---
kind: widget-copy
---

{/* Film for the “Morning and evening briefs” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Daily bookends</Copy>
<Copy k="sub">You want to start the day knowing what needs you first.</Copy>

<Copy k="line.ask">
  Name the [[sections you want]], and ask for the wrap tonight.
</Copy>
<Copy k="line.does">
  Claude reads today’s calendar, new mail, your mentions, your tracker and
  yesterday’s page.
</Copy>
<Copy k="line.question">
  Claude reads today’s calendar, new mail, your mentions, your tracker and
  yesterday’s page.
</Copy>
<Copy k="line.get">
  Claude tells you what is due and waiting, then gives you [[today’s page]].
</Copy>
<Copy k="line.note1">
  Claude names three things to do first and where each came from.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">three things</Copy>
<Copy k="line.note2">
  What slipped yesterday is carried in from last night’s wrap.
</Copy>
<Copy k="line.again">
  Schedule both runs, and each workday starts and ends on one page.
</Copy>
<Copy k="line.close">You start and end each day knowing what needs you.</Copy>

<Copy k="attachment1.title">Daily</Copy>
<Copy k="attachment1.sub">2 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">2026-04-27.md</Copy>
<Copy k="attachment2.sub">Yesterday’s page</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">priorities.md</Copy>
<Copy k="attachment3.sub">This quarter</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Run my morning briefing: what's on fire, what's due, who's waiting on me,
  and [[the three things to do first]]. Keep it under a page. Tonight I'll come
  back for the wrap: done, slipped, and [[what tomorrow opens with]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">today, 6 meetings</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">mail since yesterday’s wrap, 11 threads</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">your mentions and DMs, 8</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">issues assigned to you or blocked on you, 5</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">2026-04-27.md, yesterday’s wrap</Copy>

<Copy k="verb1">Reading today’s calendar</Copy>
<Copy k="verb2">Reading new mail</Copy>
<Copy k="verb3">Reading your mentions</Copy>
<Copy k="verb4">Reading Linear</Copy>
<Copy k="verb5">Reading yesterday’s wrap</Copy>
<Copy k="verb6">Writing today’s page</Copy>

<Copy k="reply.did1">read today’s six meetings</Copy>
<Copy k="reply.did2">into Tuesday’s page</Copy>
<Copy k="reply.did3">three to do first</Copy>
<Copy k="reply.did4">carried from last night’s wrap</Copy>
<Copy k="reply.text">
  I read today’s six meetings, 11 mail threads, 8 mentions, 5 issues and last
  night’s wrap into Tuesday’s page: two on fire, three due, three people
  waiting, three to do first. The incident goes first, and two items are
  carried from last night’s wrap.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">Run the morning briefing {when}, both into {file}.</Copy>
<Copy k="again.bubble.when">
  every weekday at 8:00am and the wrap at 6:00pm
</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Daily bookends</Copy>
<Copy k="again.card.cadence">Weekdays at 8:00 AM and 6:00 PM</Copy>
<Copy k="again.out1">Writes today’s page with three things to do first</Copy>
<Copy k="again.out2">Appends the evening wrap to the same page</Copy>
<Copy k="again.out3">Carries what slipped into tomorrow’s opener</Copy>
<Copy k="again.out3.em">for you to decide</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: ff50010d8d88eff2 */}
<Copy k="widget.description">
  Film: a self-playing walkthrough showing how to set up a daily morning
  briefing and evening wrap with Claude. The user names the sections they want
  and asks for a briefing kept under a page, plus an evening wrap later.
  Claude reads the day's calendar, new mail, mentions, tracker issues, and the
  previous wrap, then produces a page naming what's on fire, what's due, who's
  waiting, and the three things to do first, with anything carried over from
  the night before flagged. The film then shows scheduling both runs on a
  recurring weekday cadence, so each workday opens and closes on one connected
  page, with unresolved carryovers left for the user to decide rather than
  resolved automatically. It illustrates using connectors across calendar,
  mail, chat, and issue-tracking tools for recurring status synthesis.
</Copy>
<Copy k="widget.summary">
  Film: a self-playing walkthrough where the user asks Claude for a morning
  briefing and evening wrap, and Claude reads calendar, mail, mentions, and
  tracker issues to produce a page naming what's on fire, due, and to do
  first, then schedules both runs daily.
</Copy>
`;export{e as default};