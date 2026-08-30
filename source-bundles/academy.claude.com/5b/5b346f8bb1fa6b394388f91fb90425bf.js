var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ConnectorReachBuilder.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Each source's name, the sentence
    it appends to the request, and its explanation sit under
    \`source.<id>.*\`; \`count.<n>\` is the status line for n sources on. */}

<Copy k="kicker">Try it</Copy>
<Copy k="title">Connect a source, ask for more</Copy>
<Copy k="intro">
  Below is a request Claude can already handle—everything it needs is in the
  words you typed. Nothing else is connected yet. {lead} each connection lets
  you ask for something that lives outside your message.
</Copy>
<Copy k="intro.lead">Turn on a source and watch the request grow:</Copy>

<Copy k="label.request">Your request to Claude</Copy>
<Copy k="baseRequest">
  Draft a short status update on the budget project for my manager.
</Copy>

<Copy k="count.0">
  One sentence—that's a complete request. Claude drafts it from your words
  alone.
</Copy>
<Copy k="count.1">
  Two sentences now. The second one asks for something you couldn't have
  gotten from your typing alone.
</Copy>
<Copy k="count.2">
  Three sentences. Same request underneath—you're just able to ask for more
  of it.
</Copy>
<Copy k="count.3">
  Four sentences, all yours to send. Everything past the first is reach the
  connections gave you.
</Copy>

<Copy k="label.toggle">Turn a source on or off</Copy>
<Copy k="state.on">connected</Copy>
<Copy k="state.off">not connected</Copy>
<Copy k="sameRequest">
  Same request underneath the whole time. What changes is what you’re able to
  ask it to draw on.
</Copy>

<Copy k="source.storage.name">Cloud storage</Copy>
<Copy k="source.storage.seg">
  Pull this quarter's actual numbers from the budget spreadsheet.
</Copy>
<Copy k="source.storage.why">
  The numbers live in a file, not in your message. With Cloud storage
  connected, you can point Claude at that file.
</Copy>
<Copy k="source.email.name">Email</Copy>
<Copy k="source.email.seg">
  Note the two questions finance raised over email last week, and how we're
  answering them.
</Copy>
<Copy k="source.email.why">
  That thread is in your inbox. Connect Email and the request can reach it.
</Copy>
<Copy k="source.chat.name">Team chat</Copy>
<Copy k="source.chat.seg">
  Match the tone the team has been using in the project channel this week.
</Copy>
<Copy k="source.chat.why">
  Tone comes from a conversation you didn't paste in. With Team chat
  connected, you can ask Claude to read it.
</Copy>

<Copy k="label.why">What each connection lets you ask for</Copy>
<Copy k="why.none">
  Right now: only what’s in your message. Turn a source on to add to it.
</Copy>
<Copy k="why.line">{lead} {why}</Copy>
<Copy k="why.lead">{name}:</Copy>

<Copy k="takeaway">
  {lead} You wrote every clause; each connection only added somewhere the
  request could point. Turn a source off and that part of the request has
  nowhere to go—so it comes back out.
</Copy>
<Copy k="takeaway.lead">Claude didn’t go looking on its own.</Copy>

<Copy k="btn.reset">Turn everything off</Copy>
`;export{e as default};