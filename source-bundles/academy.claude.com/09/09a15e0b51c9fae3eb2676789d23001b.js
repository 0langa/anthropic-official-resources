var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DmUseCases.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`@Claude\` is the literal
    mention typed in Slack and must survive verbatim. The \`case<n>.prompt\`
    values are messages the learner copies and sends; channel names inside
    them (#acme-renewal, #launch-q3, …) are simulated Slack channels and
    must survive verbatim. */}

<Copy k="groupAria">
  Three things a DM with Claude is good for, each with the message you
  would send
</Copy>
<Copy k="copyAria">Copy this message</Copy>

<Copy k="case1.title">Walk into a meeting prepared</Copy>
<Copy k="case1.step1">Pulls what the account channel decided this month</Copy>
<Copy k="case1.step2">
  Scans your recent email with their team and your calendar for the week
</Copy>
<Copy k="case1.step3">Prepares the open questions to walk in with</Copy>
<Copy k="case1.prompt">
  Pull what #acme-renewal decided this month, my recent emails with their
  team, and my calendar for the week, and tell me the open questions I
  should walk in with.
</Copy>

<Copy k="case2.title">Draft an update from your own work and the team’s</Copy>
<Copy k="case2.step1">
  Searches the project channels for what shipped and what is blocked
</Copy>
<Copy k="case2.step2">Checks it against your sent email and calendar</Copy>
<Copy k="case2.step3">
  Writes the update in your voice, for you to review before it goes anywhere
</Copy>
<Copy k="case2.prompt">
  Search #launch-q3 and #design-review for what shipped and what is blocked
  this week, check it against my sent email and calendar, and draft Friday’s
  stakeholder update in my voice, flagging anything the channels disagree on.
</Copy>

<Copy k="case3.title">Start every day with a brief</Copy>
<Copy k="case3.step1">Reads the channels you follow each morning</Copy>
<Copy k="case3.step2">Lists what is waiting on you and what changed</Copy>
<Copy k="case3.step3">
  Drafts the replies you owe, so you post them in one step
</Copy>
<Copy k="case3.prompt">
  Every weekday at 8am, read the channels I follow and send me a brief here:
  what is waiting on me in order of urgency, what changed that affects my
  work, and a draft for any reply I owe.
</Copy>
<Copy k="case3.note">You set this one up in Try it, below.</Copy>
`;export{e as default};