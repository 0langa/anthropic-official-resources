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
<Copy k="j1.job">Claude asks for all three lookups in one response, and you want the loop to pick up every tool call in it.</Copy>
<Copy k="j1.hint">Each tool call is a separate \`tool_use\` block in the response.</Copy>
<Copy k="j2.job">You want the three lookups to wait at the same time instead of one after another.</Copy>
<Copy k="j2.hint">Each tool call gets a thread of its own, so the waits overlap.</Copy>
<Copy k="j3.job">You want Claude to know which tool call each result answers.</Copy>
<Copy k="j3.hint">Each result carries back the \`id\` of the tool call it answers.</Copy>
<Copy k="j4.job">When the weather lookup goes wrong, you want a flag that tells Claude so.</Copy>
<Copy k="j4.hint">A field other than \`content\` marks the result as an error.</Copy>
<Copy k="j5.job">You want all three results to go back to Claude together.</Copy>
<Copy k="j5.hint">Every result goes in one user message, after Claude's response.</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="program.l2.label">Collect every tool call</Copy>
<Copy k="program.l2.body">\`calls\` holds every \`tool_use\` block in the response. If your loop reads only the first block, this is the line to change.</Copy>
<Copy k="program.l3.label">Run them at the same time</Copy>
<Copy k="program.l3.body">\`ThreadPoolExecutor\` comes from Python's standard library and gives each tool call its own thread. \`pool.map\` calls \`run_tool\`, the function at the top, once for each tool call. It returns the results in the order of the tool calls.</Copy>
<Copy k="program.l4a.label">Match the tool call</Copy>
<Copy k="program.l4a.body">The result starts with the tool call's \`id\` in \`tool_use_id\`.</Copy>
<Copy k="program.l4b.label">Return an error result</Copy>
<Copy k="program.l4b.body">Unknown tool names, wrong inputs, and failing services all land in \`except\`. There the exception's text becomes the \`content\`, and \`is_error\` is set.</Copy>
<Copy k="program.l5.label">Send one user message</Copy>
<Copy k="program.l5.body">Claude's response goes into the conversation first, followed by all the results in one user message. Then \`while True\` loops back, and the next request sends the longer conversation.</Copy>
<Copy k="aria.code">Program lines to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 6be8bbd0b76a32e8 */}
<Copy k="widget.description">
  Exercise: the learner studies a short Python program that runs several tool
  calls from Claude at once and sends their results back, then is given a
  series of jobs describing something the code must accomplish, such as
  collecting every tool call from a response, running them concurrently,
  matching each result to its tool call, marking a failed call as an error, or
  sending all results back in a single message. For each job, the learner
  picks the line of code responsible. A wrong pick gives a hint and another
  try. A right pick highlights the relevant lines and explains what they do.
  The exercise reinforces how parallel tool calling should be structured:
  gather all tool-use blocks, run independent ones simultaneously, preserve
  the id linking each result to its call, handle errors without halting the
  loop, and return all results together in one user message.
</Copy>
<Copy k="widget.summary">
  Exercise: given a short Python loop that runs Claude's tool calls in
  parallel, the learner picks the line that does each stated job, with hints
  on wrong picks and explanations on right ones.
</Copy>
`;export{e as default};