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
<Copy k="j1.job">You want search results to come only from the official sites Meridian can stand behind.</Copy>
<Copy k="j1.hint">The tool's entry lists the only sites searches may use.</Copy>
<Copy k="j2.job">You want to choose which version of the web search tool Claude gets.</Copy>
<Copy k="j2.hint">The version is set by one field in the tool's entry.</Copy>
<Copy k="j3.job">You want Claude to be able to search on this request.</Copy>
<Copy k="j3.hint">The tool's entry only defines the tool, so look for the argument that hands the tool list to the request.</Copy>
<Copy k="j4.job">Claude's reply comes in several pieces with searches in between, and you want to read it whole.</Copy>
<Copy k="j4.hint">The answer can span several \`text\` blocks, and the program joins them.</Copy>
<Copy k="j5.job">You want to see the address of every page a search returned.</Copy>
<Copy k="j5.hint">Each search result carries the page's title and address in two fields.</Copy>
<Copy k="right">Right line.</Copy>
<Copy k="next">Next job</Copy>
<Copy k="done">You found the line for every job. On the first try, you picked the right line for {n} of {total} jobs.</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="program.p1.label">Send the request with the tool</Copy>
<Copy k="program.p1.body">\`tools=TOOLS\` gives Claude the web search tool for this request. The passage and the question go together in one user message.</Copy>
<Copy k="program.p2.label">Name the sites</Copy>
<Copy k="program.p2.body">The four bare domains go in the tool's own entry in \`TOOLS\`.</Copy>
<Copy k="program.p3.label">Pick the version</Copy>
<Copy k="program.p3.body">The entry's \`type\` picks the version of the tool. On Claude 4.6 and later models, this version filters by default, so no other line is needed.</Copy>
<Copy k="program.p4a.label">Join the answer</Copy>
<Copy k="program.p4a.body">\`answer\` joins the \`text\` blocks.</Copy>
<Copy k="program.p4b.label">Print the sources</Copy>
<Copy k="program.p4b.body">The loop prints each result's \`title\` and \`url\`. The \`isinstance\` check skips a search that failed.</Copy>
<Copy k="aria.code">Program lines to choose from</Copy>
<Copy k="aria.wrong">Wrong line.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 7a0906dd1bcee66b */}
<Copy k="widget.description">
  Exercise: a displayed Python program uses the web search tool, and for each
  of five jobs in turn the learner picks the line of code that performs it.
  Jobs include restricting search results to named official domains,
  choosing the version of the web search tool, making the tool available on
  the request, joining Claude's answer across multiple text blocks that may
  be interspersed with searches, and printing each search result's title and
  URL from the tool's result blocks. A wrong pick gets a hint and another
  try, and the right line highlights the related code and explains its role.
  The goal is to connect each step of using the web search tool to the
  actual code that implements it.
</Copy>
<Copy k="widget.summary">
  Exercise: given a displayed Python program using the web search tool, pick
  the line that performs each of five jobs, such as restricting results to
  named domains or choosing the tool's version. A wrong pick gets a hint, and
  the right line gets a short note.
</Copy>
`;export{e as default};