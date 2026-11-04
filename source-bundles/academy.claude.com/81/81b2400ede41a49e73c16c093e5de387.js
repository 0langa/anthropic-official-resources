var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CodeParts.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. Text between backticks is
    product syntax: the widget sets it as code, and it must survive verbatim.
    \`{n}\` and \`{total}\` are numbers the widget fills in. The code is product
    syntax and stays in the widget. \`reads.*\` and \`verdict.*\` are the widget's two variants, and \`aria.*\` values are read aloud, so they take no backticks. */}

<Copy k="progress">Job {n} of {total}</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="reads.task">This is everything Meridian's judge reads for one answer. Select the line that does this job.</Copy>
<Copy k="reads.r1.job">You want the judge to mark an answer incorrect when it turns a reassuring note into the top risk.</Copy>
<Copy k="reads.r1.hint">The rubric lists the ways for an answer to be incorrect.</Copy>
<Copy k="reads.r1.label">The rubric</Copy>
<Copy k="reads.r1.body">The rubric names the task, then lists two ways for an answer to be correct and four ways for it to be incorrect. Look at the last way to be incorrect. It's the mistake the run further down the page turns up.</Copy>
<Copy k="reads.r2.job">You want the judge to see the report the answer came from, kept apart from everything else it reads.</Copy>
<Copy k="reads.r2.hint">Each thing the judge reads sits in its own tags.</Copy>
<Copy k="reads.r2.label">The tagged inputs</Copy>
<Copy k="reads.r2.body">The prompt opens with "You grade an assistant answer against a rubric." The report, the answer, and the rubric each sit in their own tags. The words in braces are placeholders, which the function in the next box fills in for every answer.</Copy>
<Copy k="reads.r3.job">You want the judge to have a way to say it can't tell.</Copy>
<Copy k="reads.r3.hint">The prompt's closing lines settle the hard calls.</Copy>
<Copy k="reads.r3.label">How it decides</Copy>
<Copy k="reads.r3.body">These lines settle the hard calls. Only an answer that fully meets the rubric is correct. When the report alone can't settle it, the judge says \`unknown\`.</Copy>
<Copy k="verdict.task">Here's the schema the judge's verdict has to match, and the function that judges one answer. Select the line that does this job.</Copy>
<Copy k="verdict.v1.job">You want the verdict to come back with no extra fields.</Copy>
<Copy k="verdict.v1.hint">\`required\` makes sure both fields come back. Another setting keeps extra ones out.</Copy>
<Copy k="verdict.v1.label">The schema</Copy>
<Copy k="verdict.v1.body">This is a JSON schema written as a Python dict. Both fields are required, with \`explanation\` first, and \`additionalProperties\` set to \`False\` rules out any other field.</Copy>
<Copy k="verdict.v2.job">You want the verdict to be one of three words and nothing else.</Copy>
<Copy k="verdict.v2.hint">A JSON schema can list the only values a field may take.</Copy>
<Copy k="verdict.v2.label">Allowed values</Copy>
<Copy k="verdict.v2.body">These are the only values the verdict can take. The last one, \`unknown\`, lets the judge say it can't tell.</Copy>
<Copy k="verdict.v4.job">You want the API to hold the judge's response to your schema.</Copy>
<Copy k="verdict.v4.hint">The schema goes out with the request, in a setting for the output.</Copy>
<Copy k="verdict.v4.label">Where the schema goes</Copy>
<Copy k="verdict.v4.body">The schema goes in the request's \`output_config\`, under its \`format\` key, with \`type\` set to \`json_schema\`.</Copy>
<Copy k="verdict.v5.job">You want a response that was cut off partway to raise an error before your code parses it.</Copy>
<Copy k="verdict.v5.hint">\`stop_reason\` says why Claude stopped.</Copy>
<Copy k="verdict.v5.label">Checking how it ended</Copy>
<Copy k="verdict.v5.body">\`stop_reason\` says why Claude stopped, and \`end_turn\` means it finished on its own. A value of \`max_tokens\` means the response hit its length limit and was cut off partway, so its JSON is incomplete. The code raises an error for anything but \`end_turn\`, before \`json.loads\` sees broken JSON, and a cut-off case can be retried with a higher \`max_tokens\`.</Copy>
<Copy k="aria.code.reads">Lines of the rubric and the judge's prompt to choose from</Copy>
<Copy k="aria.code.verdict">Lines of the schema and the function to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: e70f11103c332a3b */}
<Copy k="widget.description.reads">
  Exercise: shows the full text an LLM judge reads for one graded answer: a
  rubric defining what counts as a correct or incorrect extracted top risk,
  and a judge prompt that wraps the report, answer, and rubric in separate
  tags before asking for an explanation and a verdict. For each of three jobs,
  the learner selects the line of code that performs it, getting a hint and
  another attempt if wrong, then a short explanation of why that line matters
  once right. It teaches how a grading rubric separates correct from incorrect
  cases, why inputs to a judge are kept in distinct tags, and how a prompt can
  let the judge answer "unknown" when the report doesn't settle the question.
</Copy>
<Copy k="widget.description.verdict">
  Exercise: shown a JSON schema for a judge's verdict and the function that
  sends one answer to the judge, the learner is given a job, such as making
  the verdict only one of a few allowed words, keeping extra fields out,
  routing the schema into the request's output settings, or catching a
  response cut off before it finished, and must select the line of code that
  does it. A wrong pick gets a hint and another try; a right pick lights the
  relevant lines and explains how that part works before moving to the next
  job. It teaches how a structured-output schema and a stop-reason check work
  together to make a judge's verdict reliably machine-readable.
</Copy>
<Copy k="widget.summary.reads">
  Exercise: shown the rubric and prompt an LLM judge reads for one answer, the
  learner selects the line that does each stated job, with hints on wrong
  tries. It teaches how a rubric separates correct from incorrect answers and
  how a judge can answer "unknown".
</Copy>
<Copy k="widget.summary.verdict">
  Exercise: given a verdict schema and the function that sends one answer to
  the judge, select the line that does a stated job, such as restricting
  allowed values or catching a cut-off response, with hints on wrong tries and
  explanations on right ones.
</Copy>
`;export{e as default};