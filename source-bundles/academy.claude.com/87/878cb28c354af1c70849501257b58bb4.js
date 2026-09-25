var e=`---
kind: widget-copy
---

{/* Learner-facing copy for YourConnectors.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. \`@Claude\` is the literal mention
    typed in Slack and must survive verbatim too; \`mention\` is the @Priya
    mention chip Claude posts. \`avatar.*\` are the one-letter avatar initials
    and should stay initials of the matching person's name. */}

<Copy k="channel">#event-prep</Copy>
<Copy k="note">Priya’s screen</Copy>

<Copy k="stageAria">
  Priya's screen in {channel}. She asks Claude to find 20 minutes tomorrow
  with Marcus and Lydia for the walkthrough prep and send the invite; her
  calendar is a connector on her own Claude account, not a team connection.
  Claude reacts with eyes. In the thread, a card marked "Only visible to you"
  that only Priya sees: "May I use your connectors to work on that request?
  I'll use them as you, including making changes. I'll only act on messages
  you post. With review, nothing your session says is posted until you
  approve it," with three buttons: Allow, Allow with review, Don't allow.
  Priya presses Allow. Then one line everyone in the channel sees: "Using
  @Priya's connectors. Connectors will only be used for their owner's
  requests." Then Claude's
  reply, visible to everyone: the prep is booked for tomorrow 10:30 to 10:50
  and the invite went out from Priya's calendar.
</Copy>

<Copy k="avatar.priya">P</Copy>
<Copy k="avatar.marcus">M</Copy>
<Copy k="avatar.lydia">L</Copy>
<Copy k="name.priya">Priya</Copy>
<Copy k="name.claude">Claude</Copy>

<Copy k="caption.ask">
  Priya’s calendar is one of her own connectors, not a team connection
</Copy>
<Copy k="caption.only">Only Priya sees this, and she decides</Copy>
<Copy k="caption.everyone">After she allows it, everyone sees this line</Copy>
<Copy k="caption.result">Claude books it as Priya. Everyone sees the reply.</Copy>

<Copy k="msg.ask">
  find 20 minutes tomorrow with Marcus and Lydia for the walkthrough prep and
  send the invite.
</Copy>

<Copy k="onlyVisible">Only visible to you</Copy>
<Copy k="mention">@Priya</Copy>
<Copy k="msg.may">May I use your connectors to work on {request}?</Copy>
<Copy k="msg.may.request">that request</Copy>

<Copy k="bullet1">I’ll use them as you, including making changes</Copy>
<Copy k="bullet2">I’ll only act on messages you post</Copy>
<Copy k="bullet3">
  With review, nothing your session says is posted until you approve it
</Copy>

<Copy k="allow">Allow</Copy>
<Copy k="allowReview">Allow with review</Copy>
<Copy k="dontAllow">Don’t allow</Copy>

<Copy k="everyoneLine">
  {lead} Connectors will only be used for their owner’s requests.
</Copy>
<Copy k="everyoneLine.lead">Using @Priya’s connectors.</Copy>

<Copy k="msg.result">
  Booked {event} for tomorrow, 10:30–10:50, with Marcus and Lydia. The invite
  went out from your calendar. Tell me if you want a different time.
</Copy>
<Copy k="msg.result.event">Walkthrough prep</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 2ca94974423fddcf */}
<Copy k="widget.description">
  Film: in a mock public channel, the user asks Claude to schedule a meeting
  and send an invite, which needs the user's own calendar connector rather
  than a team connection. Claude shows a permission prompt that only the user
  can see: it will act as them, including making changes, only on messages
  they post, and if they choose Allow with review, nothing is posted until
  they approve it. The user chooses Allow. A line everyone can see then says
  the user's connectors are in use, only for the user's own requests, and
  Claude's reply, which everyone can see, confirms the booking and the invite.
  It teaches that personal connectors act under one person's name and with
  their permission, while the result is visible to the whole channel.
</Copy>
<Copy k="widget.summary">
  Film: in a public channel, the user asks Claude to book a meeting and
  privately lets it use their calendar connector, then everyone sees a line
  saying whose connectors are in use, and Claude's reply. Personal connectors
  serve only their owner's requests.
</Copy>
`;export{e as default};