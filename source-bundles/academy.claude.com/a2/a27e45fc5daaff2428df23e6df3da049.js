var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed5.tsx — the "Steerability" property card (see
    academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. */}

<Copy k="video">Watch the lesson · 5 min</Copy>

<Copy k="enables1">Precise control over format, style, length, and tone</Copy>
<Copy k="enables2">Role-setting and persona</Copy>
<Copy k="enables3">Multi-step execution and iterative refinement</Copy>

<Copy k="fails1">Reasoning drift — small errors compound over long chains</Copy>
<Copy k="fails2">Letter-over-spirit — instruction honored, intent missed</Copy>
<Copy k="fails3">Prompt injection — other text in context can steer it too</Copy>

<Copy k="pill.system">System prompts / custom instructions</Copy>
<Copy k="pill.thinking">Extended (visible) thinking</Copy>
<Copy k="pill.code">Code execution</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 972a30e857f231d4 */}
<Copy k="widget.description">
  Summary card: Steerability, one of four properties of AI, describes how the
  model follows instructions by continuing a pattern rather than truly
  understanding intent. It lists what this enables, including precise control
  over format, style, length, and tone, role-setting and persona, and
  multi-step execution with iterative refinement. It also lists characteristic
  failure modes: reasoning drift where small errors compound over long chains,
  letter-over-spirit responses where instructions are honored but intent is
  missed, and prompt injection where other text in context can steer the model
  unintentionally. It names Claude features that extend steerability's reach:
  system prompts and custom instructions, extended visible thinking, and code
  execution. A linked video offers further explanation.
</Copy>
<Copy k="widget.summary">
  Summary card: outlines steerability, explaining how an AI model follows
  instructions by continuing a pattern rather than grasping intent, listing
  what this enables, where it typically fails, and which features extend its
  reach, with a linked video.
</Copy>
`;export{e as default};