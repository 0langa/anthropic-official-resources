var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TutorialNav.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. One sidecar serves all three
    walkthrough lessons: widget chrome is unprefixed; each walkthrough's
    steps sit under its variant namespace (\`sampling.*\`, \`notifications.*\`,
    \`roots.*\`) as \`stepN.title\` plus the body blocks \`stepN.p1…\` — a
    \`stepN.pK\` key is a paragraph, \`stepN.pK.li1…\` the items of a list.
    Backticked spans inside a body value render as inline code and name
    identifiers from the sample project: keep them verbatim. */}

<Copy k="tour.aria">Tour step {n} of {total}</Copy>
<Copy k="tour.steps.title">Tutorial Steps</Copy>
<Copy k="tour.steps.body">
  Let's get a better sense of how to implement this feature by walking
  through a sample project.
</Copy>
<Copy k="tour.buttons.title">Navigation Controls</Copy>
<Copy k="tour.buttons.body">Use these buttons to move between tutorial steps.</Copy>
<Copy k="tour.editor.title">Code Editor</Copy>
<Copy k="tour.editor.body">
  We will be looking at a sample project. We aren't going to run this code!
  We're just taking a look to understand how it works.
</Copy>
<Copy k="tour.btn.prev">Previous</Copy>
<Copy k="tour.btn.skip">Skip</Copy>
<Copy k="tour.btn.next">Next</Copy>
<Copy k="tour.btn.finish">Finish</Copy>

<Copy k="step.heading">{n}. {title}</Copy>
<Copy k="btn.prev">← Previous</Copy>
<Copy k="btn.next">Next →</Copy>

<Copy k="files.heading">Files</Copy>
<Copy k="aria.openFiles">Open files</Copy>
<Copy k="aria.closeTab">Close {path}</Copy>
<Copy k="empty.title">No file open</Copy>
<Copy k="empty.body">
  Open a file from the explorer or navigate through the tutorial steps
</Copy>

{/* ── sampling walkthrough ── */}

<Copy k="sampling.step1.title">Initiating sampling</Copy>
<Copy k="sampling.step1.p1">
  On the server, during a tool call, run the \`create_message()\` method, passing
  in some messages that you wish to send to a language model.
</Copy>

<Copy k="sampling.step2.title">Sampling callbacks</Copy>
<Copy k="sampling.step2.p1">
  On the client, you must implement a sampling callback. It will receive a list
  of messages provided by the server.
</Copy>

<Copy k="sampling.step3.title">Message formats</Copy>
<Copy k="sampling.step3.p1">
  The list of messages provided by the server are formatted for communication
  in MCP. The individual messages aren't guaranteed to be compatible with
  whatever LLM SDK you are using.
</Copy>
<Copy k="sampling.step3.p2">
  For example, if you're using the Anthropic SDK, you'll have to write a little
  bit of conversion logic to turn the MCP messages into a format compatible
  with Anthropic's SDK.
</Copy>

<Copy k="sampling.step4.title">Returning generated text</Copy>
<Copy k="sampling.step4.p1">
  After generating text with the LLM, you'll return a \`CreateMessageResult\`,
  which contains the generated text.
</Copy>

<Copy k="sampling.step5.title">Connecting the callback</Copy>
<Copy k="sampling.step5.p1">
  Don't forget: the callback on the client needs to be passed into the
  \`ClientSession\` call.
</Copy>

<Copy k="sampling.step6.title">Getting the result</Copy>
<Copy k="sampling.step6.p1">
  After the client has generated and returned some text, it will be sent to the
  server. You can do anything with this text:
</Copy>
<Copy k="sampling.step6.p2.li1">Use it as part of a workflow in your tool</Copy>
<Copy k="sampling.step6.p2.li2">Decide to make another sampling call</Copy>
<Copy k="sampling.step6.p2.li3">Return the generated text</Copy>

{/* ── notifications walkthrough ── */}

<Copy k="notifications.step1.title">
  Tool function receives Context argument
</Copy>
<Copy k="notifications.step1.p1">
  Tool functions automatically receive 'Context' as their last argument. This
  object has methods for logging and reporting progress to the client.
</Copy>

<Copy k="notifications.step2.title">Create logs and progress with context</Copy>
<Copy k="notifications.step2.p1">
  Throughout your tool function, call the \`info()\`, \`warning()\`, \`debug()\`, or
  \`error()\` methods to log different types of messages for the client. Also
  call the \`report_progress()\` method to estimate the amount of remaining work
  for the tool call.
</Copy>

<Copy k="notifications.step3.title">Define callbacks on the client</Copy>
<Copy k="notifications.step3.p1">
  The client needs to define logging and progress callbacks, which will
  automatically be called whenever the server emits log or progress messages.
  These callbacks should try to display the provided logging and progress data
  to the user.
</Copy>

<Copy k="notifications.step4.title">
  Pass callbacks to appropriate functions
</Copy>
<Copy k="notifications.step4.p1">
  Make sure you provide the logging callback to the \`ClientSession\` and the
  progress callback to the \`call_tool()\` function.
</Copy>

{/* ── roots walkthrough ── */}

<Copy k="roots.step1.title">Defining roots</Copy>
<Copy k="roots.step1.p1">
  Ideally, a user will dictate which files/folders can be accessed by the MCP
  server.
</Copy>
<Copy k="roots.step1.p2">
  This program is set up to accept a list of CLI arguments, which are
  interpretted as paths that the user wants to allow access to.
</Copy>
<Copy k="roots.step1.p3">
  That list of paths is provided to the \`MCPClient\` down on lines 42.
</Copy>

<Copy k="roots.step2.title">Creating root objects</Copy>
<Copy k="roots.step2.p1">
  According to the MCP spec, all roots should have a URI that begins with
  \`file://\`.
</Copy>
<Copy k="roots.step2.p2">
  This function takes the list of paths of that the user provided and turns
  them into \`Root\` objects.
</Copy>

<Copy k="roots.step3.title">Roots callback</Copy>
<Copy k="roots.step3.p1">
  The client doesn't immediately provide the list of roots to the server.
  Instead, the server can make a request to the client at some future point in
  time. We make a callback that will be executed when the server requests the
  roots. The callback needs to return the list of roots inside of a
  \`ListRootsResult\` object.
</Copy>
<Copy k="roots.step3.p2">
  This callback is passed into the ClientSession down on line 58.
</Copy>

<Copy k="roots.step4.title">Using the roots</Copy>
<Copy k="roots.step4.p1">
  On to the server. The server will use the roots in two scenarios:
</Copy>
<Copy k="roots.step4.p2.li1">
  Whenever a tool attempts to access a file or folder
</Copy>
<Copy k="roots.step4.p2.li2">
  When a LLM (like Claude) needs to resolve a file or folder to a full path.
  Think of when a user says 'read the todos.txt file' - Claude needs to figure
  out where the text file is, and might do so by looking at the list of roots
</Copy>
<Copy k="roots.step4.p3">
  To handle the second case, we can either define a tool that lists out the
  roots or inject them directly in a prompt.
</Copy>

<Copy k="roots.step5.title">Accessing the roots</Copy>
<Copy k="roots.step5.p1">
  Roots are accessed by calling \`ctx.session.list_roots()\`.
</Copy>
<Copy k="roots.step5.p2">
  This sends a message back to the client, which causes it to run the
  root-listing callback.
</Copy>

<Copy k="roots.step6.title">Authorizing access</Copy>
<Copy k="roots.step6.p1">
  Remember: the MCP SDK does not attempt to limit what files or folders your
  tools attempt to read! You must implement that check yourself.
</Copy>
<Copy k="roots.step6.p2">
  Consider implementing a function like \`is_path_allowed\`, which will decide
  whether a path is accessible by comparing it to the list of roots.
</Copy>

<Copy k="roots.step7.title">Authorizing access</Copy>
<Copy k="roots.step7.p1">
  Once you've put an authorization function together - like \`is_path_allowed\` -
  use it throughout your tools to ensure the requested path is accessible.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 67766cf991c1fe12 */}
<Copy k="widget.description.notifications">
  Walkthrough: a guided tour of a sample MCP project showing how to implement
  notifications and progress reporting between server and client. Expandable
  steps pair explanations with a read-only code viewer that opens relevant
  files and highlights the referenced lines, letting the learner step forward
  and backward through the implementation. It covers how tool functions
  automatically receive a Context object with logging methods (info, warning,
  debug, error) and a report_progress method, and how the client must define
  logging and progress callbacks—passed to ClientSession and call_tool
  respectively—that display this data to the user. The goal is understanding
  how servers emit status updates and how clients receive and surface them
  during a tool call.
</Copy>
<Copy k="widget.description.roots">
  Walkthrough: a step-by-step guided tour of a sample MCP project implementing
  roots, pairing an expandable list of explanatory steps with a read-only code
  viewer that opens the relevant file and highlights the referenced lines for
  each step. It covers how a client defines which files and folders it allows
  access to, converts those paths into root objects with file:// URIs, and
  registers a callback the server can invoke later to list them. It also
  explains how a server requests roots via the session, and why the SDK itself
  enforces no access restrictions — meaning the developer must write their own
  authorization logic, such as a path-checking function, and apply it
  everywhere tools access files.
</Copy>
<Copy k="widget.description.sampling">
  Walkthrough: a guided tour through a sample MCP project's code implementing
  sampling, stepping through six stages with explanations alongside a file
  browser and read-only code viewer that highlights the relevant lines for
  each stage. It covers initiating a sampling request from a server-side tool
  call via create_message(), implementing a client-side sampling callback that
  receives MCP-formatted messages, converting those messages into a format
  compatible with an LLM SDK, returning generated text as a
  CreateMessageResult, wiring the callback into ClientSession, and handling
  the result once it's returned to the server, including using it in a
  workflow, chaining another sampling call, or returning it directly. The goal
  is understanding how servers request LLM completions through the client and
  how clients fulfill them.
</Copy>
<Copy k="widget.summary.notifications">
  Walkthrough: a stepped tour of sample MCP code showing how tool functions
  log and report progress via a Context object, and how clients define
  callbacks to display these updates, with a read-only code viewer
  highlighting relevant lines per step.
</Copy>
<Copy k="widget.summary.roots">
  Walkthrough: a guided tour of a sample MCP project pairing expandable steps
  with a read-only code viewer that highlights relevant lines, showing how
  clients define accessible roots and how servers must enforce their own
  access authorization.
</Copy>
<Copy k="widget.summary.sampling">
  Walkthrough: a step-by-step guide through a sample project's code showing
  how to implement sampling, pairing explanations with a file browser and
  highlighted code for each stage, from initiating a request to handling the
  returned result.
</Copy>
`;export{e as default};