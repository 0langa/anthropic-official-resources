var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SummaryOrDiff.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. File paths and code lines live
    in the .tsx and are not translated. */}

<Copy k="title">Compare Claude's summary with the diff</Copy>
<Copy k="found">{n} of {total} found</Copy>
<Copy k="intro">
  Claude completed the task and provided the summary response. Everything in
  it is true. Now compare it with the files that changed.
</Copy>
<Copy k="step1">Read Claude's summary</Copy>
<Copy k="step2">Expand each file diff to see what changed in it</Copy>
<Copy k="step3">Flag the three files that probably deserve a second look</Copy>

<Copy k="reported">Claude's summary</Copy>
<Copy k="task">
  Add input validation to the signup form: check the email format and
  require passwords of at least 8 characters, with inline error messages.
</Copy>
<Copy k="reportLead">Added input validation to the signup form.</Copy>
<Copy k="report1">Email format and password length are checked before submit</Copy>
<Copy k="report2">Inline error messages appear under each field</Copy>
<Copy k="report3">All tests pass</Copy>

<Copy k="changed">File changes: {count} files</Copy>
<Copy k="newFile">new file</Copy>
<Copy k="flag">Flag</Copy>
<Copy k="flagAria">Flag {path}</Copy>
<Copy k="flaggedAria">Flagged {path}</Copy>
<Copy k="flagged">Flagged</Copy>
<Copy k="collapsed">{count} lines of lockfile changes</Copy>

<Copy k="fb.form">This is the work you asked for. Read it, but it isn't one of the three.</Copy>
<Copy k="fb.validate">
  The validators are what you asked for. The import on the first line
  deserves a question: see package.json.
</Copy>
<Copy k="fb.validateTest">New tests for new code. The good kind of change.</Copy>
<Copy k="fb.formTest">
  Yes. One test is skipped, and the other no longer checks what was
  submitted, only that something was. That's how "all tests pass."
</Copy>
<Copy k="fb.css">Styles for the new error messages, as expected.</Copy>
<Copy k="fb.pkg">
  Yes. A new package for one email check. You didn't ask for it, so ask why
  before you keep it.
</Copy>
<Copy k="fb.lock">
  npm rewrote package-lock.json when it installed the new package. The change
  to ask about is package.json.
</Copy>
<Copy k="fb.config">
  Yes. The new constant is part of your task, but the line above it changes
  where signups are sent. Question changes you didn't ask for first.
</Copy>

<Copy k="reveal">
  Three things worth a second look: changes you didn't ask for, tests that got
  weaker, and new packages or hard-coded values. The summary was true. It just didn't describe everything that changed.
</Copy>
`;export{e as default};