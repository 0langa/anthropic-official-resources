var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WhereToAsk.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`q.<id>.srExits\` spells a
    decision's exits for screen readers; \`edge.<id>\` are the short answer
    pills on the drawn arrows; \`path.<leaf>.live\` is announced politely
    when a leaf card lights up. */}

<Copy k="title">Where to start a piece of work</Copy>
<Copy k="start">Work you want Claude to do</Copy>
<Copy k="figureAria">
  Where to start a piece of work: a decision tree from the work you want
  Claude to do, through whether it is only for you, whether it needs the
  team’s tools and whether it must be kept to specific people, to a DM, a
  public channel or a private channel
</Copy>

<Copy k="q.q1.text">Is this work only for you?</Copy>
<Copy k="q.q1.srExits">
  Yes: does it need the team’s tools? No: does it need to be kept to
  specific people?
</Copy>
<Copy k="q.q1b.text">Does it need the team’s tools?</Copy>
<Copy k="q.q1b.srExits">
  No: a DM. Yes: does it need to be kept to specific people?
</Copy>
<Copy k="q.q2.text">Does it need to be kept to specific people?</Copy>
<Copy k="q.q2.srExits">
  No: a public channel, recommended. Yes, a group: a private channel.
</Copy>

<Copy k="leaf.dm.title">DM</Copy>
<Copy k="leaf.dm.line1">Not posted to any channel</Copy>
<Copy k="leaf.dm.line2">Your own tools, always</Copy>
<Copy k="leaf.dm.line3">What Claude learns is used only in this DM</Copy>

<Copy k="leaf.pub.title">Public channel</Copy>
<Copy k="leaf.pub.tag">Recommended</Copy>
<Copy k="leaf.pub.line1">Everyone in the channel can see and continue it</Copy>
<Copy k="leaf.pub.line2">
  The team’s tools, plus your personal connectors where available
</Copy>
<Copy k="leaf.pub.line3">What Claude learns helps everyone in the channel</Copy>

<Copy k="leaf.priv.title">Private channel</Copy>
<Copy k="leaf.priv.note">or a channel with only you and Claude</Copy>
<Copy k="leaf.priv.line1">Only channel members see it</Copy>
<Copy k="leaf.priv.line2">
  This channel’s tools, plus your personal connectors where available
</Copy>
<Copy k="leaf.priv.line3">What Claude learns is used only in this channel</Copy>

<Copy k="edge.q1Yes">Yes</Copy>
<Copy k="edge.q1No">No</Copy>
<Copy k="edge.q1bNo">No</Copy>
<Copy k="edge.q1bYes">Yes</Copy>
<Copy k="edge.q2No">No</Copy>
<Copy k="edge.q2Group">Yes, a group</Copy>

<Copy k="path.dm.live">
  Path: only for you, no need for the team’s tools, DM.
</Copy>
<Copy k="path.pub.live">
  Path: not only for you, no need to keep it to specific people, public
  channel.
</Copy>
<Copy k="path.priv.live">
  Path: kept to a specific group, private channel. Reached either way: not
  only for you, or only for you and needing the team’s tools.
</Copy>
`;export{e as default};