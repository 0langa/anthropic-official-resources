var e=`---
kind: widget-copy
---

{/* Film for the “Write in my voice” use case. \`line.*\` are the one sentence
    shown per chapter; a phrase in [[double brackets]] is the part the film
    underlines — keep the brackets around the equivalent words. \`prompt\` is
    typed on screen. \`reply.did*\` are the phrases of the reply the film marks,
    in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Write in my voice</Copy>
<Copy k="sub">
  You want every draft Claude writes for you to sound like you.
</Copy>

<Copy k="line.ask">
  Ask a short, open question about your tone, and point Claude at [[mail you
  actually sent]].
</Copy>
<Copy k="line.does">
  Claude reads your sent mail and messages, then compares how you open, close
  and sign off.
</Copy>
<Copy k="line.get">
  Claude tells you what it read, then gives you the [[profile]] in the reply.
</Copy>
<Copy k="line.note1">
  Each habit comes with lines you actually sent, so you can check.
</Copy>
<Copy k="line.note2">What Claude is unsure about is said, not guessed.</Copy>
<Copy k="line.again">
  Correct what it got wrong, then save it as a skill every draft uses.
</Copy>
<Copy k="line.close">
  Drafts Claude writes for you sound like you from the first line.
</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  [[Read my sent messages]] and tell me about my [[tone and writing style]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">Sent, last 90 days: 412 emails</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">your messages in 23 channels: 1,847</Copy>
<Copy k="source3.verb">Checked</Copy>
<Copy k="source3.text">how you open, close, phrase and sign off</Copy>

<Copy k="verb1">Reading your sent mail</Copy>
<Copy k="verb2">Reading your Slack messages</Copy>
<Copy k="verb3">Comparing how you open and close</Copy>
<Copy k="verb4">Writing your voice profile</Copy>

<Copy k="reply.did1">read 412 sent emails</Copy>
<Copy k="reply.did2">each habit below has a count</Copy>
<Copy k="reply.did3">the lines it came from</Copy>
<Copy k="reply.did4">tell me what I got wrong</Copy>

<Copy k="again.bubble">
  Two fixes: I do say “team” with clients, just not internally, and don’t copy
  the “Thanks!” habit into drafts. Then save this as a {when} and use it for
  anything you draft for me.
</Copy>
<Copy k="again.bubble.when">skill called my-voice</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Drafts mail and messages the way you write them: the ask first, short
  sentences, “Folks” internally, signed — S. Your two rules are on top.
</Copy>
<Copy k="again.card.shared">Only you</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 18870bfb4f302769 */}
<Copy k="widget.description">
  Film: a use-case walkthrough showing how to get Claude to write in a
  person's own voice. The user asks Claude to read their sent emails and Slack
  messages and describe their tone and writing style. Claude reads the
  connected mail and messages, then reports back how the user typically opens
  and closes messages, their sentence length and phrasing habits, and how they
  sign off, citing real examples as evidence for each habit and flagging
  points it's unsure about rather than guessing. The user can correct
  inaccuracies and save the corrected profile as a reusable skill, so future
  drafts Claude writes automatically match their voice from the start. It
  teaches that personalization works best when grounded in evidence and open
  to correction.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to read their sent emails and Slack messages and
  describe their tone, and Claude reports back writing habits with cited
  examples, flagging uncertainty, then saves a corrected profile as a reusable
  skill for future drafts.
</Copy>
`;export{e as default};