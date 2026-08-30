var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx — the three-step "how Cowork works"
    list (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are
    machine identifiers — translate ONLY the text between the tags. \`{name}\`
    tokens are runtime placeholders and must survive verbatim: \`{done}\` and
    each phase's \`{label}\` are filled with the styled text of their sub-key.
    \`phase1…n\` is the loop Claude runs — one bullet per key. */}

<Copy k="step1.title">You delegate the work</Copy>
<Copy k="step1.body">
  Send a prompt describing the objective — what you need done and what {done}
  looks like.
</Copy>
<Copy k="step1.body.done">done</Copy>

<Copy k="step2.title">Claude takes it from there</Copy>
<Copy k="phase1">
  {label} — asks clarifying questions to make sure it's clear on your goal
</Copy>
<Copy k="phase1.label">Understand</Copy>
<Copy k="phase2">{label} — breaks the work into steps you can see in the sidebar</Copy>
<Copy k="phase2.label">Plan</Copy>
<Copy k="phase3">{label} — works across your files, tools, and the web</Copy>
<Copy k="phase3.label">Execute</Copy>
<Copy k="phase4">{label} — checks its own output for quality and accuracy</Copy>
<Copy k="phase4.label">Verify</Copy>
<Copy k="phase5">{label} — produces finished files and a summary of what it did</Copy>
<Copy k="phase5.label">Deliver</Copy>

<Copy k="step3.title">You come back to completed work</Copy>
<Copy k="step3.body">
  Finished files in your folder, actions taken in your tools, and a record of
  everything that happened.
</Copy>
`;export{e as default};