var e=`---
kind: widget-copy
---

{/* Copy shared by ReviewOutput.tsx and TriageFindings.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx: a folder's _shared.copy.mdx merges
    under each widget's own copy file). Translate ONLY the text between the
    tags. */}

<Copy k="tag.correctness">correctness</Copy>
<Copy k="tag.style">style</Copy>
<Copy k="f1.summary">
  A test was skipped and an assertion weakened; a form that submits empty
  values would still pass.
</Copy>
<Copy k="f2.summary">
  isValidEmail doesn't trim leading or trailing spaces, so an address pasted
  with a stray space is rejected.
</Copy>
<Copy k="f3.summary">
  API_URL is hard-coded to localhost:3000; a production build would send
  signups to a development address.
</Copy>
<Copy k="f4.summary">
  Error text uses a hex color instead of the project's --color-danger
  variable.
</Copy>
`;export{e as default};