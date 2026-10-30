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
<Copy k="j1.job">A newer version of the tool is out, and you want the program to use it.</Copy>
<Copy k="j1.hint">The version is the date at the end of the tool's \`type\`.</Copy>
<Copy k="j2.job">You want to send each CSV file on your machine to Anthropic and get back an ID for it.</Copy>
<Copy k="j2.hint">The Files API takes the file and gives you back a file ID.</Copy>
<Copy k="j3.job">You want Claude's code to be able to open each file you uploaded.</Copy>
<Copy k="j3.hint">Each file ID goes in its own block in the message.</Copy>
<Copy k="j4.job">You want Claude to see what Meridian is asking in the same message as the files.</Copy>
<Copy k="j4.hint">Meridian's program adds the question as a \`text\` block after the files.</Copy>
<Copy k="j5.job">You want to show Claude's finished answer, not the commands it ran on the way.</Copy>
<Copy k="j5.hint">In the response, the answer comes after the commands Claude ran.</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="program.p1.label">Add the tool</Copy>
<Copy k="program.p1.body">\`TOOLS\` holds the one entry, and the request sends it. The date at the end of its \`type\` is the tool's version.</Copy>
<Copy k="program.p2a.label">Upload each file</Copy>
<Copy k="program.p2a.body">Each upload returns a file ID.</Copy>
<Copy k="program.p2b.label">Name each file</Copy>
<Copy k="program.p2b.body">Each file ID goes into its own \`container_upload\` block.</Copy>
<Copy k="program.p2c.label">Add the question</Copy>
<Copy k="program.p2c.body">Meridian's program adds the question last, in the same message.</Copy>
<Copy k="program.p3.label">Read the answer</Copy>
<Copy k="program.p3.body">This request usually gets back the finished answer, which comes after the commands Claude ran.</Copy>
<Copy k="aria.code">Program lines to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: a505ce87ff39d069 */}
<Copy k="widget.description">
  Exercise: the learner works through a sample Python program that uses
  Claude's code execution tool, matching each of five described jobs to the
  line of code that performs it. Jobs include moving the code execution tool
  to a newer version, uploading files to get file IDs, naming an uploaded file
  in a container_upload block, adding the request's question to the same
  message, and reading the finished answer from the response. Picking a wrong
  line gives a hint and another try; the right line highlights the relevant
  code step and explains what it does. The exercise reinforces the lesson's
  three-part flow for code execution: declare the tool, load files into
  Claude's container, then read the answer from the response.
</Copy>
<Copy k="widget.summary">
  Exercise: given a sample Python program using Claude's code execution tool,
  match each described job to the line that does it. A wrong pick gets a hint,
  and the right line gets a short note on that step.
</Copy>
`;export{e as default};