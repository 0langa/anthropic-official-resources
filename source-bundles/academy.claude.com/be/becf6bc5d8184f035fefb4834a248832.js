var e=`---
kind: widget-copy
---

{/* Shared window chrome (You/Claude, the bar, copy control, output cards)
    lives in _shared.copy.mdx. */}

<Copy k="eyes.label">Claude reacted with eyes: it has started</Copy>
<Copy k="replay">Replay</Copy>
<Copy k="plan.asOf">todos as of {time}</Copy>
<Copy k="plan.justNow">just now</Copy>
<Copy k="fold.more">Show full reply</Copy>
<Copy k="facts.title">What happened here</Copy>
<Copy k="footer">This is an illustrative example of what Claude Tag can do.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 15cf96057e412af5 */}
<Copy k="widget.description">
  Film: in a direct message with Claude Tag, the user sends one standing
  instruction: every weekday morning, post prep for each of that day's
  meetings. Claude works through a short plan, reading the meeting and
  attendees from the calendar, finding the last email with each attendee and
  related Slack threads, and listing open items and documents, then posts a
  prep note for a quarterly review with a customer. The note gives the
  attendees, the last exchange with the customer, the open items the user
  still owes, the documents, and one question to ask, citing the calendar,
  emails and documents it used. It teaches that a routine set up once keeps
  posting prep only the user can read.
</Copy>
<Copy k="widget.summary">
  Film: in a direct message, the user sets up a weekday routine once, and
  Claude Tag posts a meeting prep note with attendees, open items, documents
  and a question to ask, citing its calendar, email and document sources.
</Copy>
`;export{e as default};