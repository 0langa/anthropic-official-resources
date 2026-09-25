var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MemoryInAction.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. \`@Claude\` is the literal mention
    typed in Slack and must survive verbatim too. \`avatar.*\` are the
    one-letter avatar initials and should stay initials of the matching
    \`name.*\`. \`caption.reuse.rest\` continues \`caption.reuse.phrase\` as one
    sentence, so keep its leading punctuation. */}

<Copy k="channel">#analytics</Copy>
<Copy k="note">Public channel</Copy>

<Copy k="stageAria">
  In {channel}, a public channel, Sam asks Claude for last week's active
  customers and Claude answers 412, counting logins. Priya corrects the
  definition in the thread and Claude revises to 287: a correction in the
  thread fixes that thread. Priya then asks Claude to remember the definition
  for the channel, and Claude saves it to the channel’s notes, where anyone in
  the channel can read and update them. Two weeks later, in a new thread in
  {channel}, Dana asks for active customers by region and Claude reuses the
  saved definition: the channel’s notes carry to every later thread in the
  channel.
</Copy>

<Copy k="avatar.sam">S</Copy>
<Copy k="avatar.priya">P</Copy>
<Copy k="avatar.dana">D</Copy>
<Copy k="name.sam">Sam</Copy>
<Copy k="name.priya">Priya</Copy>
<Copy k="name.dana">Dana</Copy>
<Copy k="name.claude">Claude</Copy>

<Copy k="msg.ask">how many active customers did we have last week?</Copy>
<Copy k="msg.first">
  412 active customers, counting any account with a login last week.
</Copy>
<Copy k="msg.correct">
  Active means at least one paid seat used that week, not a login. That
  makes it 287.
</Copy>
<Copy k="msg.corrected">Corrected: 287 active customers.</Copy>
<Copy k="msg.remember">
  remember for this channel: an active customer has used at least one paid
  seat that week.
</Copy>
<Copy k="msg.saved">Saved to this channel’s notes.</Copy>

<Copy k="caption.corrected">A correction in the thread fixes this thread</Copy>
<Copy k="caption.card">Saved for the channel, for everyone here</Copy>
<Copy k="caption.reuse.phrase">Reused here</Copy>
<Copy k="caption.reuse.rest">: channel notes carry to every later thread</Copy>

<Copy k="memoryTitle">Channel notes · {channel}</Copy>
<Copy k="memoryEntry">Active customer: at least one paid seat used that week.</Copy>

<Copy k="divider">Two weeks later · {channel}, a new thread</Copy>
<Copy k="msg.ask2">active customers this month, by region?</Copy>
<Copy k="msg.reuse">
  Using the definition saved for {channel} (at least one paid seat used): 301
  this month.
</Copy>
<Copy k="msg.regions">EMEA 118 · AMER 142 · APAC 41</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: bc8e9ef9586fabae */}
<Copy k="widget.description">
  Film: in a mock public channel, a colleague asks Claude a question about a
  business metric and Claude answers. A second colleague corrects the
  definition Claude used, and Claude posts a corrected answer: a correction in
  the thread fixes that thread. The same colleague then asks Claude to
  remember the definition for the channel, and Claude saves it to the
  channel's notes, which anyone in the channel can read and update. Later, in
  a new thread in the same channel, another colleague asks a related question
  and Claude answers with the saved definition. It teaches that asking Claude
  to remember something for the channel saves it to channel notes, which carry
  to every later thread in that channel.
</Copy>
<Copy k="widget.summary">
  Film: in a public channel, a correction given in a thread fixes that thread,
  and asking Claude to remember it for the channel saves it to channel notes,
  which Claude reuses in a later thread.
</Copy>
`;export{e as default};