var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CoworkModeMatch.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="mode.chat">Chat</Copy>
<Copy k="mode.cowork">Cowork</Copy>
<Copy k="mode.code">Code</Copy>
<Copy k="bestFor">Best for</Copy>

<Copy k="card.chat.name">Thinking with Claude</Copy>
<Copy k="card.chat.line">
  A conversation. You ask, draft, brainstorm, or think out loud—Claude
  responds in the chat window.
</Copy>
<Copy k="card.chat.best.1">Asking questions and exploring ideas</Copy>
<Copy k="card.chat.best.2">Drafting something you’ll polish yourself</Copy>
<Copy k="card.chat.best.3">Anything that fits in a single response</Copy>

<Copy k="card.cowork.name">Delegating to Claude</Copy>
<Copy k="card.cowork.line">
  A working session. Point Claude at a folder or project and your tools,
  describe an outcome—Claude plans, executes, and delivers.
</Copy>
<Copy k="card.cowork.best.1">Multi-step work across files and tools</Copy>
<Copy k="card.cowork.best.2">Producing real deliverables (docs, decks, sheets)</Copy>
<Copy k="card.cowork.best.3">Work you want to set in motion and come back to</Copy>

<Copy k="card.code.name">Building software with Claude</Copy>
<Copy k="card.code.line">
  An agentic coding tool. Claude works inside a codebase—editing files,
  running tests, making commits.
</Copy>
<Copy k="card.code.best.1">Working in a repo</Copy>
<Copy k="card.code.best.2">Building or refactoring across many source files</Copy>
<Copy k="card.code.best.3">Developer work, not document work</Copy>

<Copy k="quiz.title">Which would you reach for?</Copy>
<Copy k="quiz.intro">
  For each task, pick Chat, Cowork, or Code. We’ll tell you why.
</Copy>
<Copy k="taskCount">Task {num} of {total}</Copy>

<Copy k="task.1.text">
  "Read the five vendor PDFs in my Downloads folder, compare them on price
  and SLAs, and put the result in a spreadsheet."
</Copy>
<Copy k="task.1.explain">
  {lead} This task lives in files on your computer, has multiple steps (read
  each PDF, extract criteria, compare, format), and ends in a real
  deliverable saved back to your folder—the shape Cowork is built for, and
  the local files put it out of Chat’s reach.
</Copy>
<Copy k="task.1.explain.lead">Cowork is the right fit.</Copy>

<Copy k="task.2.text">
  "Refactor the authentication module across these five source files and run
  the test suite."
</Copy>
<Copy k="task.2.explain">
  {lead} This is software work inside a repo—editing source files, running
  tests, and likely making commits. That’s Claude Code’s home turf.
</Copy>
<Copy k="task.2.explain.lead">Code is the right fit.</Copy>

<Copy k="task.3.text">
  "Help me brainstorm tagline ideas for our new product launch—about 10
  directions, mix of playful and serious."
</Copy>
<Copy k="task.3.explain">
  {lead} You’re thinking out loud and want a list of ideas in the response
  itself. There’s no folder to read, no tool to use, and no deliverable
  beyond the ideas themselves.
</Copy>
<Copy k="task.3.explain.lead">Chat is the right fit.</Copy>

<Copy k="task.4.text">
  "Pull together a one-page brief on our Q1 results. The numbers are in a
  spreadsheet on my Desktop, and I’d like the brief saved in my Reports
  folder."
</Copy>
<Copy k="task.4.explain">
  {lead} A one-page brief sounds like something you could draft in Chat, and
  you could. But the data lives in a spreadsheet on your drive, and you want
  the deliverable saved to a folder. With Cowork, Claude reads the
  spreadsheet directly (no copy-paste, accurate numbers) and lands the brief
  where you want it. The presence of a real file and a real save location is
  the signal.
</Copy>
<Copy k="task.4.explain.lead">
  Cowork is the right fit—but this one is a closer call.
</Copy>

<Copy k="task.5.text">
  "Take a look at the customer feedback in our #product-feedback Slack
  channel from this week. What themes are emerging that I should pay
  attention to?"
</Copy>
<Copy k="task.5.explain">
  {lead} A connector being involved isn’t what makes something Cowork. The
  question is what you want delivered. Here you want insight—themes you can
  absorb in conversation, not a saved artifact. Chat can pull from
  connectors too. Reach for Cowork when there’s a deliverable that needs to
  be produced and saved somewhere; reach for Chat when the answer {em} the
  conversation.
</Copy>
<Copy k="task.5.explain.lead">
  Chat is the right fit—even though it pulls in data from a connector.
</Copy>
<Copy k="task.5.explain.em">is</Copy>

<Copy k="task.6.text">
  "Our React frontend has a bug—the analytics dashboard’s data table doesn’t
  render on mobile. Trace through the components, figure out what’s wrong,
  and push a fix."
</Copy>
<Copy k="task.6.explain">
  {lead} "Fix the dashboard" can sound like the general doing-work that
  Cowork handles, but you’re operating inside a codebase—navigating React
  components, debugging rendering, and pushing code changes. That’s what
  Code is built for. Cowork can read source files, but it’s not designed to
  work inside a repo, run a test suite, or manage Git the way Code is.
</Copy>
<Copy k="task.6.explain.lead">Code is the right fit.</Copy>

<Copy k="status.pick">Pick one to continue</Copy>
<Copy k="status.correct">Nice—that’s the right call.</Copy>
<Copy k="status.incorrect">Not quite—see the explanation above.</Copy>
<Copy k="nextTask">Next task</Copy>
<Copy k="seeResults">See results</Copy>

<Copy k="result.kicker">Done</Copy>
<Copy k="result.score">{correct} of {total} matched</Copy>
<Copy k="result.summary">
  The pattern to remember: {lead} When in doubt, ask whether the task
  touches your files or tools and ends in a real deliverable—if yes, Cowork.
</Copy>
<Copy k="result.summary.lead">
  Chat for thinking, Cowork for delegating, Code for software.
</Copy>
<Copy k="tryAgain">Try again</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: d39ec1cdbed602ac */}
<Copy k="widget.description">
  Exercise: the widget first compares three ways of working with Claude. Chat
  is for thinking with Claude: asking questions, exploring ideas, and drafting
  in a conversation. Cowork is for delegating to Claude: multi-step work
  across files and tools that ends in a real deliverable. Code is for building
  software with Claude inside a codebase, where it edits files, runs tests,
  and makes commits. The learner then reads six workplace tasks, one at a
  time, and picks Chat, Cowork, or Code for each. An explanation follows every
  choice, and the score appears at the end. The goal is to recognize which
  shape of work suits each mode.
</Copy>
<Copy k="widget.summary">
  Exercise: compares Chat, Cowork, and Code, then asks the learner to pick the
  right one for six workplace tasks, with an explanation after each choice and
  a score at the end.
</Copy>
`;export{e as default};