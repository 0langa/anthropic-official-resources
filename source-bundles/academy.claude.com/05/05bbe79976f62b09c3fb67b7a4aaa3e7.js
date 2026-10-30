var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CodeParts.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. Text between backticks is
    product syntax: the widget sets it as code, and it must survive verbatim.
    \`{n}\` and \`{total}\` are numbers the widget fills in. The code is product
    syntax and stays in the widget. \`aria.*\` values are read aloud, so they take no backticks. */}

<Copy k="task">Select the line of the program that does this job.</Copy>
<Copy k="progress">Job {n} of {total}</Copy>
<Copy k="j1.job">You want Meridian's toolset to build on the SDK's computer toolset, so Meridian writes only the actions.</Copy>
<Copy k="j1.hint">A subclass names the class it builds on in its first line.</Copy>
<Copy k="j2.job">When Claude asks for an action at a point on the screen, you want it to happen in PlotDesk.</Copy>
<Copy k="j2.hint">Claude only asks for the click, and your program carries it out.</Copy>
<Copy k="j3.job">You want a person to approve every click and every piece of typing before it happens.</Copy>
<Copy k="j3.hint">Before every action, the SDK runs \`confirm\`, which can ask the operator.</Copy>
<Copy k="j4.job">You want screenshots to go ahead without waiting for a person.</Copy>
<Copy k="j4.hint">\`context.member\` holds the name of the action Claude asked for.</Copy>
<Copy k="j5.job">You want the SDK to take care of the whole loop, sending requests and carrying out actions for as long as Claude asks.</Copy>
<Copy k="j5.hint">Tool Runner, an SDK helper, loops until Claude replies without a tool call.</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="program.p1.label">Subclass the toolset</Copy>
<Copy k="program.p1.body">\`PlotDeskToolset\` is a subclass of the SDK's computer toolset class. Its \`__init__\` stores \`backend\` and passes every other option, \`confirm\` included, to the SDK's class.</Copy>
<Copy k="program.p2.label">Write three actions</Copy>
<Copy k="program.p2.body">\`left_click\` and \`type\` hand their input to \`backend\`. Those two methods return nothing, so the SDK sends Claude a short confirmation for them, \`Clicked.\` or \`Typed.\` The \`screenshot\` method asks \`backend\` for the image as base64 text, which is how an image travels inside JSON, and wraps it in the SDK's \`BetaScreenshotResult\`. \`context\` carries the tool call itself, and Meridian's methods don't need it.</Copy>
<Copy k="program.p3a.label">Send actions to the operator</Copy>
<Copy k="program.p3a.body">\`confirm\`, passed in as \`confirm=confirm\`, gets a context object, and the function's last line sends the action to the operator with its input.</Copy>
<Copy k="program.p3b.label">Let screenshots through</Copy>
<Copy k="program.p3b.body">\`context.member\` holds the action's name. Screenshots are approved without asking anyone.</Copy>
<Copy k="program.p4.label">Run it</Copy>
<Copy k="program.p4.body">The \`with\` block closes the toolset once the run is over. \`until_done\` returns Claude's final response from \`tool_runner\`, and the program's last line prints its text.</Copy>
<Copy k="aria.code">Program lines to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: f7834000f0660159 */}
<Copy k="widget.description">
  Exercise: the learner studies a sample Python program that subclasses the
  SDK's computer toolset to drive a desktop application, then works through
  five jobs in turn, each describing something the program must do, and picks
  the line that accomplishes it. A wrong pick gives a hint and another try. A
  right pick highlights the relevant lines and explains that part of the
  program before moving to the next job. It reinforces how the computer
  toolset is structured: subclassing to implement actions, carrying out the
  actions Claude asks for through your own program, using a confirm function
  to route actions to a human operator except for screenshots, and using an
  SDK helper to run the full request-and-action loop until Claude finishes.
</Copy>
<Copy k="widget.summary">
  Exercise: given a sample program that subclasses the SDK's computer toolset,
  the learner picks the line matching each of five jobs. A wrong pick gets a
  hint, and the right line gets a short note on that part of the program.
</Copy>
`;export{e as default};