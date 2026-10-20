var e=`---
kind: widget-copy
---

{/* Learner-facing copy for LiveArtifact.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    \`week.*\` is "This week", a team's priorities tracker, and the conversation
    that made it. \`title\` sits above the frame and \`takeaway\` under it. \`t1\` to
    \`t4\` are the chat turns (odd = the person, even = Claude). \`t1.file\` and
    \`t1.fileTag\` are the name and type of the file sent with the first message.
    \`t3.bold\` is the part of \`t3\` set in bold where its \`{bold}\` token stands;
    the token must survive verbatim. \`pane\` is the artifact's name in the pane
    header and on its card, and stays "This week": the tracker itself runs in
    English. \`aria\` and \`frame\` name the widget and the tracker for a screen
    reader.

    \`ui.share\` and \`card.*\` follow Claude's own wording. The other \`ui.*\`,
    \`chat.label\` and \`pane.label\` are only read aloud. */}

<Copy k="ui.user">You</Copy>
<Copy k="ui.claude">Claude</Copy>
<Copy k="ui.step">Step</Copy>
<Copy k="ui.attached">Attached file</Copy>
<Copy k="ui.share">Share</Copy>
<Copy k="ui.loading">The artifact is loading</Copy>
<Copy k="card.kind">Artifact</Copy>
<Copy k="card.onlyYou">Only you</Copy>
<Copy k="chat.label">Conversation with Claude</Copy>
<Copy k="pane.label">Artifact pane</Copy>

<Copy k="week.aria">Interactive: a conversation with Claude beside the priorities tracker it built</Copy>
<Copy k="week.title">Try the priorities tracker Claude built in this conversation</Copy>
<Copy k="week.pane">This week</Copy>
<Copy k="week.frame">This week, the working artifact</Copy>
<Copy k="week.t1">I keep my team’s weekly priorities in a doc like this one, and by Wednesday they get lost. I’d like a tracker for them.</Copy>
<Copy k="week.t1.file">This week.docx</Copy>
<Copy k="week.t1.fileTag">DOCX</Copy>
<Copy k="week.t2">Two quick questions. Who checks off priorities during the week, just you or the whole team? And should it show who owns each priority?</Copy>
<Copy k="week.t3">The whole team, and yes, show owners. {bold}</Copy>
<Copy k="week.t3.bold">Build this as an artifact.</Copy>
<Copy k="week.t4">Here it is: this week’s priorities by due day, each with an owner and a checkbox. The checkmarks don’t save yet. Want me to save them, so they’re still there tomorrow?</Copy>
<Copy k="week.takeaway">Claude built this tracker from the attached doc and the answers in the conversation.</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 40ae3469087cd62a */}
<Copy k="widget.description">
  Simulation: a short conversation with Claude beside the working priorities
  tracker it built. The user attaches a doc of the team's weekly priorities
  and asks for a tracker, Claude asks who will check priorities off and
  whether to show who owns each one, and the user answers and asks Claude to
  build it as an artifact. The turns are numbered to match the lesson's three
  steps. The tracker lists priorities by due day, each with a checkbox and the
  person who owns it, and the learner can check priorities off, add one, and
  open the finished ones. It teaches that Claude builds a custom artifact from
  what you attach and what you say in the conversation.
</Copy>
<Copy k="widget.summary">
  Simulation: a conversation with Claude beside the working priorities tracker
  it built from an attached doc and the user's answers. You can check
  priorities off or add one.
</Copy>
`;export{e as default};