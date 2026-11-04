var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CodeParts.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. Text between backticks is
    product syntax: the widget sets it as code, and it must survive verbatim.
    \`{n}\` and \`{total}\` are numbers the widget fills in. The workflow file is
    product syntax and stays in the widget. \`aria.*\` values are read aloud, so they take no backticks. */}

<Copy k="task">This is Meridian's workflow file. Select the line that does this job.</Copy>
<Copy k="progress">Job {n} of {total}</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="workflow.w1.job">You want every pull request to start the workflow.</Copy>
<Copy k="workflow.w1.hint">A workflow's \`on:\` key says what starts it.</Copy>
<Copy k="workflow.w1.label">Run on every pull request</Copy>
<Copy k="workflow.w1.body">Nothing sits under \`pull_request:\`, so every pull request starts the workflow. Leave it that way once the check is required, because a workflow skipped by a path filter leaves its check pending, blocking the merge.</Copy>
<Copy k="workflow.w2.job">You want the machine to have everything the eval depends on before the eval runs.</Copy>
<Copy k="workflow.w2.hint">The eval's dependencies are listed in \`requirements.txt\`.</Copy>
<Copy k="workflow.w2.label">The job and its set-up</Copy>
<Copy k="workflow.w2.body">The workflow has one job, which runs on a fresh Linux machine. That job gets a copy of the code, sets up Python, and adds everything the eval depends on.</Copy>
<Copy k="workflow.w3.job">You want to run only the ten smoke cases and save the results.</Copy>
<Copy k="workflow.w3.hint">The eval script takes the suite's name as a flag.</Copy>
<Copy k="workflow.w3.label">Run the smoke suite</Copy>
<Copy k="workflow.w3.body">The step "Run the smoke suite" picks the ten cases with \`--suite smoke\`, saves results to \`ci-results.json\`, and reads the API key from the repository's secrets. A failed case is just a result, not a fault, so the script finishes cleanly anyway. An error here points to a real problem, like a missing key.</Copy>
<Copy k="workflow.w4.job">You want the results scored against the threshold.</Copy>
<Copy k="workflow.w4.hint">The threshold is in \`ci/report.py\`.</Copy>
<Copy k="workflow.w4.label">Score the run</Copy>
<Copy k="workflow.w4.body">The 88% threshold is in \`ci/report.py\`, not this file. The step "Score the run" runs it to score the results, write \`comment.md\`, and report whether the run passed, and the final step reads that through this step's \`id\`.</Copy>
<Copy k="workflow.w5.job">You want the workflow to be allowed to comment on the pull request.</Copy>
<Copy k="workflow.w5.hint">The file grants what the job may do under \`permissions\`.</Copy>
<Copy k="workflow.w5.label">Post the results</Copy>
<Copy k="workflow.w5.body">The step "Post the results on the PR" uses the \`gh\` command to add \`comment.md\` to the pull request as a comment. That only works because the file grants \`pull-requests: write\` under \`permissions\`.</Copy>
<Copy k="workflow.w6.job">You want a score below the threshold to fail the check.</Copy>
<Copy k="workflow.w6.hint">A step that exits with an error fails its job.</Copy>
<Copy k="workflow.w6.label">Gate the merge</Copy>
<Copy k="workflow.w6.body">The step "Gate the merge" is skipped unless the scoring step reported a fail. Its \`exit 1\` fails the job, and a failed job shows up as a failed check.</Copy>
<Copy k="aria.code">Lines of Meridian's workflow file to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: af77d273ef2dc241 */}
<Copy k="widget.description">
  Exercise: a sample continuous-integration workflow file is shown line by
  line, and the learner works through a series of jobs the workflow must
  perform, selecting the line responsible for each one. A wrong choice gives a
  hint and another attempt; a correct choice highlights the relevant line or
  block and explains what it does, before moving to the next job. The jobs
  cover what triggers the workflow, setting up dependencies, running a limited
  eval suite, scoring results against a threshold, posting results as a
  comment, and failing the check when the score falls short. It teaches how a
  CI workflow file is structured and how each part maps to a practical task in
  running and gating an eval.
</Copy>
<Copy k="widget.summary">
  Exercise: given a CI workflow file line by line, the learner selects
  which line performs each stated job, with hints on wrong picks and
  explanations once right. It teaches how a workflow file's parts map to tasks
  like triggering, running, scoring, and gating an eval.
</Copy>
`;export{e as default};