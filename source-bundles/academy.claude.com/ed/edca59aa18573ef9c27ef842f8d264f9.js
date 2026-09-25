var e=`---
kind: widget-copy
---

{/* Film for the “Prepare for next week’s meetings” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Prepare for next week’s meetings</Copy>
<Copy k="sub">
  Your calendar for next week is full and nothing is prepared yet.
</Copy>

<Copy k="line.ask">
  Tell the [[start skill]] where to look per meeting, and ask which ones need
  you most.
</Copy>
<Copy k="line.does">
  Claude reads each meeting on the calendar, then the threads, mail and files
  behind it.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you which meetings need you most, then gives you the
  [[week-ahead brief]].
</Copy>
<Copy k="line.note1">
  Meetings that need preparation come first, with the reason.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">come first</Copy>
<Copy k="line.note2">
  Each meeting lists the last discussion and what you owe.
</Copy>
<Copy k="line.again">
  Schedule it for the weekend and the brief is in the folder before the week
  starts.
</Copy>
<Copy k="line.close">
  You start the week prepared for every meeting on your calendar.
</Copy>

<Copy k="attachment1.title">Planning / Week-of-2026-04-27</Copy>
<Copy k="attachment1.sub">2 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">open-items-carryover.md</Copy>
<Copy k="attachment2.sub">What you owe</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">week-ahead-example.md</Copy>
<Copy k="attachment3.sub">Format to match</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Read next week's calendar. For each meeting pull our last meeting, related
  Slack threads, docs in the invite and what I owe them. Draft [[a short
  agenda for each]], and [[flag the three to prep for]], and write [[one
  week-ahead doc]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">next week: 11 meetings and their attachments</Copy>
<Copy k="source2.verb">Searched</Copy>
<Copy k="source2.text">threads with next week’s attendees</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">3 open mail threads with attendees</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">open-items-carryover.md</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">week-ahead-example.md</Copy>

<Copy k="verb1">Reading next week’s calendar</Copy>
<Copy k="verb2">Searching Slack</Copy>
<Copy k="verb3">Reading mail threads</Copy>
<Copy k="verb4">Reading open-items-carryover.md</Copy>
<Copy k="verb5">Reading the example brief</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Ranking the meetings</Copy>
<Copy k="verb8">Writing the week-ahead brief</Copy>

<Copy k="question.title">How much should I write for recurring meetings?</Copy>
<Copy k="question.option1">One line each unless something’s open</Copy>
<Copy k="question.option2">A full agenda for every meeting</Copy>
<Copy k="question.answer">One line each unless something’s open.</Copy>

<Copy k="reply.did1">read next week’s 11 meetings</Copy>
<Copy k="reply.did2">the related threads and mail</Copy>
<Copy k="reply.did3">wrote one brief</Copy>
<Copy k="reply.did4">the three to prepare for first</Copy>
<Copy k="reply.text">
  I read next week’s 11 meetings, the related threads and mail and what you
  owe, and wrote one brief: six full agendas, five one-liners, and the three
  to prepare for first. Northwind’s Thursday renewal needs the most time:
  Priya’s Friday redlines are still unread.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when} and write it to a new Week-of folder under Planning.
</Copy>
<Copy k="again.bubble.when">every Sunday at 5pm</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Week-ahead chief of staff</Copy>
<Copy k="again.card.cadence">Sundays at 5:00 PM</Copy>
<Copy k="again.out1">Creates a new Week-of folder under Planning</Copy>
<Copy k="again.out2">Writes the brief with an agenda per meeting</Copy>
<Copy k="again.out3">Puts the meetings to prepare for at the top</Copy>
<Copy k="again.out3.em">with what you owe at the end</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: e17cd10372f53265 */}
<Copy k="widget.description">
  Film: a use-case walkthrough showing how Cowork prepares someone for a full
  week of meetings. The user asks a skill to read next week's calendar, then
  pull the Slack threads, emails, and files behind each meeting, plus any
  outstanding items owed to attendees. Claude checks with the user on how much
  detail recurring meetings need, then produces one week-ahead document: a
  short agenda for each meeting, the handful flagged as needing the most
  preparation with reasons why, and a list of open items owed to others. The
  film closes by showing how the same task can be scheduled to run
  automatically every week, landing a fresh brief in a planning folder before
  the week begins. It teaches how calendar, chat, and mail data can be
  combined into a single prioritized prep document.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to read next week's calendar, gather Slack,
  email, and file context behind each meeting, and flag outstanding items owed
  to others. Claude produces one prioritized week-ahead brief and shows how to
  schedule it weekly.
</Copy>
`;export{e as default};