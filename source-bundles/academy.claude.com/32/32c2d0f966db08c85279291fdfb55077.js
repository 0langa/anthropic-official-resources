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

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1bef59d7df0da129 */}
<Copy k="widget.description">
  Diagram: Side-by-side comparison of two ways to place a key instruction
  within an AI context window, illustrating the serial position effect in long
  prompts. One arrangement shows a system prompt followed by many chat
  messages with a critical instruction buried in the middle before the latest
  user message, labeled a dangerous pattern. The other shows the same system
  prompt and chat history but with the key instruction stated immediately up
  front and repeated again after the latest user message, labeled a safer
  pattern. The goal is to show that instructions placed at the start and end
  of a context window get more attention than ones buried in the middle,
  teaching the practical rule to state critical constraints early and restate
  them near the end rather than relying on the model to weigh all context
  equally.
</Copy>
<Copy k="widget.summary">
  Diagram: Compares two context window layouts, one burying a key instruction
  mid-conversation and one stating it up front and repeating it at the end,
  showing why placement affects how reliably AI models attend to instructions.
</Copy>
`;export{e as default};