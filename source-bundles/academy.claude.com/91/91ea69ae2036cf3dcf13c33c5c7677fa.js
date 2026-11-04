var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CodeParts.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. Text between backticks is
    product syntax: the widget sets it as code, and it must survive verbatim.
    \`{n}\` and \`{total}\` are numbers the widget fills in. The prompt is product
    syntax and stays in the widget. \`aria.*\` values are read aloud, so they take no backticks. */}

<Copy k="task">This is the whole new prompt. Select the line that does this job.</Copy>
<Copy k="progress">Job {n} of {total}</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="prompt.p1.job">You want the model to know when \`null\` is the right answer.</Copy>
<Copy k="prompt.p1.hint">The old prompt allowed \`null\` but never said when to use it.</Copy>
<Copy k="prompt.p1.label">When to answer null</Copy>
<Copy k="prompt.p1.body">New. The old prompt allowed \`null\` but never said when to use it, and this line does.</Copy>
<Copy k="prompt.p2.job">You want the model to find its evidence before it answers.</Copy>
<Copy k="prompt.p2.hint">One instruction asks for a quote.</Copy>
<Copy k="prompt.p2.label">Don't infer, quote first</Copy>
<Copy k="prompt.p2.body">New. The quote comes before the JSON, inside the source tags, and it has to be the sentence that establishes the risk.</Copy>
<Copy k="prompt.p3.job">You want the closing instruction to make room for the quote as well as the JSON.</Copy>
<Copy k="prompt.p3.hint">The old closing line was "Return only the JSON object, no other text."</Copy>
<Copy k="prompt.p3.label">Make room for the quote</Copy>
<Copy k="prompt.p3.body">This closing line replaces an old one, "Return only the JSON object, no other text." If you kept the old line as well, the model would get two instructions that conflict. The new line also names what to send when no risk is stated, which is the word none inside the source tags.</Copy>
<Copy k="prompt.p5.job">You want to check that the rule for reports that cover several projects is still in the prompt.</Copy>
<Copy k="prompt.p5.hint">It comes before the list of fields.</Copy>
<Copy k="prompt.p5.label">What stayed the same</Copy>
<Copy k="prompt.p5.body">The job, the rule for reports that cover several projects, the other two fields, and the place where the report goes in are all as they were.</Copy>
<Copy k="aria.code">Lines of the new extraction prompt to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 7a3e4c7a87047d5a */}
<Copy k="widget.description">
  Exercise: the full text of a revised data-extraction prompt is shown line by
  line, and the learner is given a series of jobs the prompt needs to do, such
  as telling the model when to answer null, having it quote supporting
  evidence before answering, adjusting a closing instruction to make room for
  that quote, and confirming which parts of the prompt stayed unchanged. For
  each job the learner selects the line responsible, with a hint on a wrong
  pick and an explanation once the right line is found. It teaches how small,
  targeted prompt edits address specific failure causes, such as unsupported
  answers, by grounding instructions in evidence and clarifying ambiguous
  cases rather than relying on vague wording.
</Copy>
<Copy k="widget.summary">
  Exercise: shown a revised data-extraction prompt line by line, the learner
  picks which line handles each job, like signaling when to answer null or
  quoting evidence before answering, with hints on wrong picks. It teaches how
  targeted prompt edits fix specific causes of unsupported answers.
</Copy>
`;export{e as default};