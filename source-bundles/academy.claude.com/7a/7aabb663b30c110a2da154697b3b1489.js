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
<Copy k="j1.job">You want to change how the request is sent, while keeping the same settings your old request used.</Copy>
<Copy k="j1.hint">An SDK helper opens the stream and takes your old request's settings.</Copy>
<Copy k="j2.job">You want your code to act only when a block opens, and not when it fills or closes.</Copy>
<Copy k="j2.hint">Every event has a \`type\`, and one of those types opens a block.</Copy>
<Copy k="j3.job">You want the status line left alone when a block of Claude's text opens.</Copy>
<Copy k="j3.hint">A tool call's block and a text block have different types.</Copy>
<Copy k="j4.job">You want to call your status line function with words for the tool Claude chose.</Copy>
<Copy k="j4.hint">\`on_status\` is the function that shows a string as the status line.</Copy>
<Copy k="j5.job">You want the rest of your loop to carry on as before, with the same kind of object \`create\` gave it.</Copy>
<Copy k="j5.hint">When the stream ends, the helper returns the finished response.</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="program.l1.label">Open the stream</Copy>
<Copy k="program.l1.body">The helper takes the same settings as your old request. The \`for\` loop then receives one event at a time.</Copy>
<Copy k="program.l2.label">Catch the block opening</Copy>
<Copy k="program.l2.body">This event opens a block, and it's the first thing to arrive for that block.</Copy>
<Copy k="program.l3.label">Let text blocks pass</Copy>
<Copy k="program.l3.body">A block of Claude's text opens the same way, and this check lets it pass without touching the status line.</Copy>
<Copy k="program.l4.label">Show the chosen tool</Copy>
<Copy k="program.l4.body">When a \`tool_use\` block opens, \`STATUS\` turns its name into words, and \`on_status\` shows them to the user.</Copy>
<Copy k="program.l5.label">Get the finished response</Copy>
<Copy k="program.l5.body">\`resp\` is what \`create\` used to return. From here your loop carries on as before.</Copy>
<Copy k="aria.code">Program lines to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 97d4d18ec3e815bf */}
<Copy k="widget.description">
  Exercise: presents a Python code sample that opens a streamed request, loops
  over streaming events, checks event types, and extracts a tool's name to
  update a status line before getting the final response. For each of five
  jobs in turn, the learner picks which line of the code performs that job,
  such as opening the stream with the same settings as before, catching only
  the event that opens a content block, letting text blocks pass without
  affecting the status line, showing the user which tool Claude chose, or
  retrieving the finished response once streaming ends. Wrong picks give a
  hint and another try. A correct pick lights the relevant code and explains
  its role. The exercise reinforces how streamed tool calls arrive as discrete
  events and how to surface the tool choice to the user as soon as it's known.
</Copy>
<Copy k="widget.summary">
  Exercise: for a Python loop handling streamed tool-call events, pick the
  line that does each of five jobs, like opening the stream or surfacing the
  chosen tool. Wrong picks get a hint. Right ones light the code and explain
  its role.
</Copy>
`;export{e as default};