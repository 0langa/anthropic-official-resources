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
`;export{e as default};