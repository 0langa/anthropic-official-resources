var e=`---
kind: widget-copy
---

{/* Film for the “Write the sprint retro and handoff” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Write the sprint retro and handoff</Copy>
<Copy k="sub">
  The sprint has closed and you need the retro and the on-call handoff
  written.
</Copy>

<Copy k="line.ask">
  Give the [[standup skill]] the cycle and channels, and ask why things
  slipped.
</Copy>
<Copy k="line.does">
  Claude reads the cycle for what moved and the channels for why.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  Claude tells you what it found, then gives you the [[retro and handoff]].
</Copy>
<Copy k="line.note1">
  Every slipped item comes with its reason and where it was said.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">its reason</Copy>
<Copy k="line.note2">
  The next on-call gets what to watch, once you approve it.
</Copy>
<Copy k="line.again">
  You approve the post first, and can schedule both drafts for when each cycle
  closes.
</Copy>
<Copy k="line.close">
  The retro and the handoff are written from what actually happened this
  sprint.
</Copy>

<Copy k="attachment1.title">Platform / retros / 2026-sprint-08</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">sprint-07-retro.md</Copy>
<Copy k="attachment2.sub">Last retro, format to match</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">retro-template.md</Copy>
<Copy k="attachment3.sub">Team template</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Read the just-closed Linear cycle and two weeks of #team-platform and
  #oncall-platform. Write [[the sprint retro]]: shipped, [[slipped with
  reasons]], themes worth discussing. Write [[a separate on-call handoff]]:
  open alerts, toil, what to watch. Keep each to a 30-minute meeting.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">Sprint 08 cycle, 21 issues</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">#team-platform, 2 weeks</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">#oncall-platform, 2 weeks</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">Platform primary rotation, 7 incidents</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">retro-template.md and sprint-07-retro.md</Copy>

<Copy k="verb1">Reading the Sprint 08 cycle</Copy>
<Copy k="verb2">Reading #team-platform</Copy>
<Copy k="verb3">Reading #oncall-platform</Copy>
<Copy k="verb4">Reading the on-call rotation</Copy>
<Copy k="verb5">Reading the last retro</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Writing sprint-08-retro.md</Copy>
<Copy k="verb8">Writing oncall-handoff-2026-04-24.md</Copy>

<Copy k="question.title">Which of these should the retro meeting discuss?</Copy>
<Copy k="question.option1">Staging environment instability, 3 slips</Copy>
<Copy k="question.option2">Review wait time, 3-day waits</Copy>
<Copy k="question.option3">Mid-cycle scope, 3 late adds</Copy>
<Copy k="question.option4">Alert noise, already tuned</Copy>
<Copy k="question.answer">Staging instability and review wait time.</Copy>

<Copy k="reply.did1">each slipped issue has its reason</Copy>
<Copy k="reply.did2">from the channel</Copy>
<Copy k="reply.did3">handoff is separate</Copy>
<Copy k="reply.did4">drafted for you to approve</Copy>
<Copy k="reply.text">
  I read Sprint 08’s 21 issues and two weeks of #team-platform and
  #oncall-platform: 16 closed, and each slipped issue has its reason from the
  channel. Your two themes are written up as questions for Monday; Lena’s
  handoff is separate, and the #oncall-platform post is drafted for you to
  approve.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="approval.tool">Send message draft</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Draft saved in Slack for you to send</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Sprint retro and on-call handoff</Copy>
<Copy k="again.card.cadence">Fridays at 3:00 PM</Copy>
<Copy k="again.out1">Checks whether a cycle has closed since the last run</Copy>
<Copy k="again.out2">Writes both drafts to the sprint’s retro folder</Copy>
<Copy k="again.out3">Drafts the handoff post</Copy>
<Copy k="again.out3.em">for you to approve</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: c408c48b4dff1b8d */}
<Copy k="widget.description">
  Film: a scripted demo shows the user asking Claude's standup skill to read a
  just-closed sprint cycle in a tracker plus two weeks of a team channel and
  an on-call channel, then write a sprint retro and a separate on-call
  handoff. Claude reports what shipped and what slipped, giving each slipped
  item a reason and its source message, and pauses to ask the user which
  themes are worth discussing rather than deciding alone. It produces the
  retro draft and a handoff noting open alerts, toil, and what the next
  on-call rotation should watch, then asks approval before posting. It closes
  by showing the same pair of documents can be scheduled to run automatically
  whenever a cycle closes. The lesson: connecting a tracker and chat history
  lets Claude separate planned work from what actually happened and why,
  keeping human judgment on discussion-worthy decisions while automating the
  writeup.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to read a closed sprint cycle and team and
  on-call channels, then write a sprint retro and on-call handoff. Claude
  separates shipped from slipped work with reasons, asks which themes to
  discuss, and drafts both documents for approval.
</Copy>
`;export{e as default};