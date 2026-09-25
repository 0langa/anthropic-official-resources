var e=`---
kind: widget-copy
---

{/* Film for the “Catch up on unread messages” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in the reply.
    \`reply.bullet*\` are the three lines of the reply; {tag}, {read} and {fyi}
    are the coloured labels (\`reply.tag.*\`), {topic} is \`reply.bullet1.topic\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Catch up on unread messages</Copy>
<Copy k="sub">
  You come back to a pile of unread messages across chat and mail.
</Copy>

<Copy k="line.ask">
  Run the [[start skill]] and ask for your unreads grouped by topic, with
  short draft replies.
</Copy>
<Copy k="line.does">
  Claude reads what is unread in each connected app, then merges messages
  about one thing.
</Copy>
<Copy k="line.question">
  Claude reads what is unread in each connected app, then merges messages
  about one thing.
</Copy>
<Copy k="line.get">
  Claude tells you what needs you, then gives you [[the replies]] to send.
</Copy>
<Copy k="line.note1">
  Messages about one thing become one item, so you reply once.
</Copy>
<Copy k="line.note2">
  Drafts wait for your approval, and only you send them.
</Copy>
<Copy k="line.again">
  Approve each draft, then [[schedule]] the sweep for weekday mornings.
</Copy>
<Copy k="line.close">
  You start the day knowing what needs a reply, with drafts ready.
</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Sweep my unread Slack DMs and mentions, Teams activity and Gmail since
  yesterday. [[Group everything by topic, not by app.]] Say whether each topic
  [[needs a reply, reading, or is FYI]], and draft replies of three sentences
  or fewer.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">unread DMs and mentions: 14</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Teams activity since yesterday: 9</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">unread inbox threads: 18</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">41 messages into 7 topics</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">4 replies, none sent</Copy>

<Copy k="verb1">Reading Slack</Copy>
<Copy k="verb2">Reading Teams activity</Copy>
<Copy k="verb3">Reading Gmail</Copy>
<Copy k="verb4">Grouping by topic</Copy>
<Copy k="verb5">Drafting replies</Copy>
<Copy k="verb6">Writing the sorted list</Copy>

<Copy k="reply.tag.reply">Needs reply</Copy>
<Copy k="reply.tag.read">Read</Copy>
<Copy k="reply.tag.fyi">FYI</Copy>
<Copy k="reply.bullet1">
  {tag}{topic}: Dan’s email, Priya’s DM, Finance’s ping, one item.
</Copy>
<Copy k="reply.bullet1.topic">Brightwave quote, 12% up</Copy>
<Copy k="reply.bullet2">
  {read}Kestrel’s security questionnaire; the Fairmont recap. {fyi}June
  offsite; nine notifications.
</Copy>
<Copy k="reply.bullet3">
  Four drafts are saved for your approval; nothing is sent.
</Copy>
<Copy k="reply.did1">Needs reply</Copy>
<Copy k="reply.did2">one item</Copy>
<Copy k="reply.did3">saved for your approval</Copy>
<Copy k="reply.did4">nothing is sent</Copy>

<Copy k="approval.tool">Create draft</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Saved to Gmail drafts, not sent</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Morning message sweep</Copy>
<Copy k="again.card.cadence">Weekdays at 8:00 AM</Copy>
<Copy k="again.out1">
  Groups what is unread in Slack, Teams and Gmail by topic
</Copy>
<Copy k="again.out2">Saves reply drafts in Slack and Gmail</Copy>
<Copy k="again.out2.em">nothing sent</Copy>
<Copy k="again.out3">Sends you the list as a direct message</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: df1b42c5e57ab3d8 */}
<Copy k="widget.description">
  Film: a self-playing walkthrough of using Claude to sweep unread messages
  across Slack, Microsoft Teams, and Gmail. The user runs a skill asking for
  unreads grouped by topic rather than by app, with short draft replies
  included. Claude reads what's unread in each connected app, merges messages
  about the same subject into one item per topic, and labels each topic as
  needing a reply, needing reading, or FYI. Draft replies are saved in the
  relevant app for the user's review; Claude never sends them, only the user
  can. The film also shows setting the sweep to run automatically on a
  recurring schedule. It teaches that cross-app inbox triage works best
  organized by topic, with drafting kept separate from sending.
</Copy>
<Copy k="widget.summary">
  Film: a self-playing walkthrough of Claude sweeping unread Slack, Teams, and
  Gmail messages, grouping them by topic, and saving draft replies for the
  user to review and send. It teaches topic-based triage across apps, with
  drafting kept separate from sending.
</Copy>
`;export{e as default};