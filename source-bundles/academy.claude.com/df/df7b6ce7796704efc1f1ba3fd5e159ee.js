var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TellClaude.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The \`rule.<id>.say\` values are
    what the learner sends in Slack (the widget prefixes the literal
    @Claude mention); \`avatar.*\` are the one-letter avatar initials and
    should stay initials of the matching \`name.*\`. */}

<Copy k="task">
  Practice tailoring Claude’s response to a request by responding in the
  thread, and see how Claude uses memory to apply the improvements next time.
</Copy>
<Copy k="pick">Pick something to tell Claude</Copy>
<Copy k="next">Next morning</Copy>
<Copy k="restart">Start over</Copy>
<Copy k="another">Tell Claude something else</Copy>
<Copy k="close">
  To change how Claude works, tell it. Say it as a standing rule, or
  “remember for this channel”, when you want it to keep doing something. When
  a rule must apply in every thread, add it to the channel instructions.
</Copy>

<Copy k="channel">#call-prep</Copy>
<Copy k="day.today">Today</Copy>
<Copy k="day.tomorrow">Next morning</Copy>
<Copy k="typingAria">Claude is typing</Copy>

<Copy k="name.marcus">Marcus</Copy>
<Copy k="name.dana">Dana</Copy>
<Copy k="name.claude">Claude</Copy>
<Copy k="name.you">You</Copy>
<Copy k="avatar.marcus">M</Copy>
<Copy k="avatar.dana">D</Copy>
<Copy k="avatar.you">Y</Copy>

<Copy k="time.today.ask">1:10 PM</Copy>
<Copy k="time.today.reply">1:11 PM</Copy>
<Copy k="time.tomorrow.ask">9:02 AM</Copy>
<Copy k="time.tomorrow.reply">9:03 AM</Copy>
<Copy k="time.tomorrow.thanks">9:05 AM</Copy>

<Copy k="msg.marcus">prep me for the Acme renewal call at 2</Copy>
<Copy k="msg.dana">brief for the Northwind check-in at 11?</Copy>
<Copy k="msg.thanks">thanks!</Copy>
<Copy k="msg.welcome">
  You’re welcome! Want me to set a reminder to follow up before the check-in?
</Copy>
<Copy k="quietNote">Claude saw this and didn’t reply.</Copy>

<Copy k="rule.short.say">shorter, please</Copy>
<Copy k="rule.short.ack">Here’s the short version.</Copy>
<Copy k="rule.short.effect">
  “Shorter, please” fixed yesterday’s brief only. Today’s is long again
  because Claude wasn’t asked to keep doing it.
</Copy>
<Copy k="rule.five.say">
  remember for responses in this channel, keep replies in a casual tone,
  under six lines, as bullets with the blocker in bold
</Copy>
<Copy k="rule.five.ack">
  Saved to this channel’s notes. I’ll keep replies here casual, under six
  lines, as bullets with the blocker in bold. Here’s the brief again:
</Copy>
<Copy k="rule.five.memory">
  Replies: casual, under six lines, bullets, blocker in bold
</Copy>
<Copy k="rule.five.effect">
  Casual and under six lines. Claude followed what it saved to memory
  yesterday.
</Copy>
<Copy k="rule.legal.say">
  when you prep a brief here, also check #legal-review for open redlines
</Copy>
<Copy k="rule.legal.ack">
  Will do. When I prep a brief here, I’ll check #legal-review for open
  redlines. Saved to this channel’s notes.
</Copy>
<Copy k="rule.legal.memory">Briefs: check #legal-review for open redlines</Copy>
<Copy k="rule.legal.effect">
  Claude checked #legal-review because you told it where to look.
</Copy>
<Copy k="rule.thanks.say">
  no need to reply when someone just says thanks in here
</Copy>
<Copy k="rule.thanks.ack">
  Understood. I won’t reply to thank-you messages in #call-prep. Saved to
  this channel’s notes.
</Copy>
<Copy k="rule.thanks.memory">Don’t reply to thank-you messages</Copy>
<Copy k="rule.thanks.effect">
  Claude didn’t reply to Dana’s thanks. You can tell Claude when to stay
  quiet, not only what to write.
</Copy>

<Copy k="today.lead">Here’s your prep for the Acme renewal call at 2:00.</Copy>
<Copy k="today.account">
  {lead} Acme Logistics, customer since 2023, $84k ARR, renewal closes Sep
  30. They expanded from 40 to 65 seats in March.
</Copy>
<Copy k="today.account.lead">Account.</Copy>
<Copy k="today.people">
  {lead} Rosa Ortiz (RevOps) is the champion; a new CFO, Martin Hale, joined
  in July and has not met us.
</Copy>
<Copy k="today.people.lead">People.</Copy>
<Copy k="today.usage">
  {lead} Up 22% quarter over quarter, strongest in the routing module. Two
  support escalations in August, both resolved within SLA.
</Copy>
<Copy k="today.usage.lead">Usage.</Copy>
<Copy k="today.history">
  {lead} In June they floated a 2-year term for a discount; we sent pricing
  on the 18th and have not heard back.
</Copy>
<Copy k="today.history.lead">History.</Copy>
<Copy k="today.more">
  …5 more lines · talking points, history, open items (the blocker is last)
</Copy>

<Copy k="redone.five.lead">Acme renewal call at 2, quick version:</Copy>
<Copy k="redone.five.blocker">{lead} (Priya’s on it)</Copy>
<Copy k="redone.five.blocker.lead">Blocker: MSA redlines still with legal</Copy>
<Copy k="redone.five.account">
  $84k ARR, closes Sep 30 · Rosa is your champion, new CFO hasn’t met us
</Copy>
<Copy k="redone.five.usage">
  Usage up 22% this quarter; both August escalations sorted
</Copy>
<Copy k="redone.five.term">
  Worth confirming the 2-year term they floated in June
</Copy>

<Copy k="redone.short.lead">
  Acme renewal call at 2:00. $84k ARR, closes Sep 30.
</Copy>
<Copy k="redone.short.people">
  Champion: Rosa Ortiz (RevOps). New CFO, Martin Hale, joined in July.
</Copy>
<Copy k="redone.short.usage">
  Usage up 22% QoQ. Two support escalations, both resolved.
</Copy>
<Copy k="redone.short.ask">
  Ask: confirm the 2-year term they floated in June.
</Copy>
<Copy k="redone.short.open">{lead} legal redlines on the MSA. Priya owns.</Copy>
<Copy k="redone.short.open.lead">Open:</Copy>

<Copy k="tomorrow.five.lead">Northwind check-in at 11, quick version:</Copy>
<Copy k="tomorrow.five.blocker">
  {lead}, and they can’t countersign the renewal until it is
</Copy>
<Copy k="tomorrow.five.blocker.lead">
  Blocker: their security review still isn’t signed
</Copy>
<Copy k="tomorrow.five.legal">
  Checked #legal-review: one open redline (data residency)
</Copy>
<Copy k="tomorrow.five.account">
  Northwind Foods, $31k ARR, renews Oct 28 · Marco Peña (IT) is your contact
</Copy>
<Copy k="tomorrow.five.usage">Usage flat; one open ask for SSO groups</Copy>
<Copy k="tomorrow.five.signoff">Worth agreeing on a sign-off date today</Copy>

<Copy k="tomorrow.lead">
  Here’s your prep for the Northwind check-in at 11:00.
</Copy>
<Copy k="tomorrow.legal">
  Checked #legal-review first: one open redline on the data residency clause.
</Copy>
<Copy k="tomorrow.account">
  {lead} Northwind Foods, $31k ARR, renewal in November. Sponsor changed in
  August when their previous IT lead left.
</Copy>
<Copy k="tomorrow.account.lead">Account.</Copy>
<Copy k="tomorrow.people">
  {lead} Marco Peña (IT) is the day-to-day contact; procurement is new to us.
</Copy>
<Copy k="tomorrow.people.lead">People.</Copy>
<Copy k="tomorrow.usage">
  {lead} Flat quarter over quarter; one open feature request for SSO groups.
</Copy>
<Copy k="tomorrow.usage.lead">Usage.</Copy>
<Copy k="tomorrow.more">
  …4 more lines, same shape as yesterday (the blocker is last)
</Copy>

<Copy k="memoryTitle">Channel notes</Copy>
<Copy k="memoryEmpty">Nothing saved yet</Copy>
<Copy k="memoryHint">
  What Claude saved for #call-prep. To see it in Slack, ask “what do you
  remember here?” To remove one, say “forget …”.
</Copy>
<Copy k="forgetAria">Forget: {memory}</Copy>

<Copy k="promoteAsk">The team wants this style in every thread.</Copy>
<Copy k="promoteBtn">Add it to channel instructions</Copy>
<Copy k="instructionsTitle">Channel instructions</Copy>
<Copy k="promotedRule">
  Keep replies casual, under six lines, as bullets with the blocker in bold.
</Copy>
<Copy k="promoted">
  Claude reads channel instructions in every new thread, and they outrank
  memory. The memory note stays until someone asks Claude to forget it.
</Copy>
`;export{e as default};