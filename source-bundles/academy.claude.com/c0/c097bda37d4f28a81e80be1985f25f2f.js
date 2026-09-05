var e=`---
kind: widget-copy
---

{/* Film for the “Write the on-call handoff” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`prompt\` ends with \`opener.question\`, word
    for word. \`reply.did*\` are the phrases of the reply the film marks, in
    reading order: keep each one verbatim in \`reply.text\`. \`again.underline\`
    must be a word that appears in \`line.again\`. Company, people, file and
    channel names and the figures are simulated data: keep them as they are. */}

<Copy k="title">Write the on-call handoff</Copy>
<Copy k="sub">
  Your on-call shift is ending and the next person needs to know what
  happened.
</Copy>

<Copy k="line.ask">
  With the Engineering plugin’s [[standup skill]], ask what’s resolved, what’s
  open and what to watch.
</Copy>
<Copy k="line.does">
  Claude reads last week’s brief first, then the week’s pages, escalations and
  deploys.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  You get the [[brief]] and a draft post, with what Claude found first.
</Copy>
<Copy k="line.note1">Each item has a status, so open ones are read first.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">a status</Copy>
<Copy k="line.note2">
  Anything still open says what to watch and links the fix.
</Copy>
<Copy k="line.again">
  Claude posts only after you approve, and you can schedule the brief for
  every rotation change.
</Copy>
<Copy k="line.close">
  The next person on call starts knowing what is still open.
</Copy>

<Copy k="opener.question">What does the next on-call need to know?</Copy>
<Copy k="attachment1.title">Platform / Oncall / 2026-W35</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">handoff-2026-W34.md</Copy>
<Copy k="attachment2.sub">Last week’s brief</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">handoff-template.md</Copy>
<Copy k="attachment3.sub">Team template</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Write the on-call handoff for my shift: pages, #support-escalations and prod
  deploys from the last 7 days. For each item note status (resolved,
  monitoring, still open), [[a one-line cause]], and [[what the next on-call
  should watch]]. Post it to #oncall. What does the next on-call need to know?
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">handoff-2026-W34.md and handoff-template.md</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">11 incidents assigned to you this week</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">#support-escalations and 4 incident channels</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">16 production deploys this week</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">runbook-index.md</Copy>

<Copy k="verb1">Reading last week’s brief</Copy>
<Copy k="verb2">Reading this week’s incidents</Copy>
<Copy k="verb3">Reading #support-escalations</Copy>
<Copy k="verb4">Reading production deploys</Copy>
<Copy k="verb5">Reading runbook-index.md</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Setting a status per item</Copy>
<Copy k="verb8">Writing handoff-2026-W35.md</Copy>

<Copy k="question.title">
  Are the webhook delivery delays fixed, or still being watched?
</Copy>
<Copy k="question.option1">Fixed, mark it resolved</Copy>
<Copy k="question.option2">Still watching it</Copy>
<Copy k="question.answer">Still watching; the real fix ships Tuesday.</Copy>

<Copy k="reply.did1">read 11 pages, four incident channels</Copy>
<Copy k="reply.did2">and last week’s brief</Copy>
<Copy k="reply.did3">wrote the week 35 handoff</Copy>
<Copy k="reply.did4">ready for you to approve</Copy>
<Copy k="reply.text">
  I read 11 pages, four incident channels, 16 deploys and last week’s brief,
  and wrote the week 35 handoff: 8 items, 1 still open, 3 monitoring, 4
  resolved. The open item is auth-service v2.31.0 until #2287 merges, and the
  #oncall post is ready for you to approve.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="approval.tool">Send message</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Posted in #oncall</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Weekly on-call handoff</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">
  Writes the handoff from the week’s pages, escalations and deploys
</Copy>
<Copy k="again.out2">Saves it to the on-call folder</Copy>
<Copy k="again.out3">Prepares the channel post</Copy>
<Copy k="again.out3.em">for you to approve</Copy>
`;export{e as default};