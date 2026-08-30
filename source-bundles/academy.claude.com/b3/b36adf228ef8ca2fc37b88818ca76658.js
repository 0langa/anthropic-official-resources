var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ContextPlacementPatterns.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="dangerous.title">❌ Dangerous pattern</Copy>
<Copy k="safer.title">✓ Safer pattern</Copy>

<Copy k="block.system">System prompt</Copy>
<Copy k="block.chat">Chat message {n}</Copy>
<Copy k="block.ellipsis">...</Copy>
<Copy k="block.buried">⚠ Key instruction buried here</Copy>
<Copy k="block.user">Latest user message</Copy>
<Copy k="block.upFront">★ Key instruction (up front)</Copy>
<Copy k="block.repeated">★ Key instruction (repeated)</Copy>
`;export{e as default};