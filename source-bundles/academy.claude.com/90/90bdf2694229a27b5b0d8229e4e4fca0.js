var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PropertyCollisionArena.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="title">When Properties Collide</Copy>
<Copy k="intro">
  Most real-world AI failures are two properties meeting at the same time.
</Copy>
<Copy k="idle">
  drag two properties near each other to see what happens when they collide
</Copy>
<Copy k="pair">{a} + {b}</Copy>
<Copy k="fixLabel">Fix →</Copy>

<Copy k="node.aria">
  {name}: {short}. Drag, or use the arrow keys, to move this property near
  another one.
</Copy>
<Copy k="node.ntp.name">Next Token Prediction</Copy>
<Copy k="node.ntp.short">Generates what sounds right</Copy>
<Copy k="node.know.name">Knowledge</Copy>
<Copy k="node.know.short">Knows what it was trained on</Copy>
<Copy k="node.mem.name">Working Memory</Copy>
<Copy k="node.mem.short">Attends to what's nearby</Copy>
<Copy k="node.steer.name">Steerability</Copy>
<Copy k="node.steer.short">Follows the loudest instruction</Copy>

<Copy k="collision.know-ntp.failure">Hallucinated citations</Copy>
<Copy k="collision.know-ntp.desc">
  The model generates citation-shaped text — plausible titles,
  real-sounding journals — but there's a knowledge gap underneath. It can't
  tell the difference between what it knows and what it's fabricating.
</Copy>
<Copy k="collision.know-ntp.fix">
  Verify specifics independently, or use source grounding so the model
  retrieves real documents.
</Copy>

<Copy k="collision.mem-steer.failure">Long-conversation drift</Copy>
<Copy k="collision.mem-steer.desc">
  Your early constraints fade as the conversation grows. Steerability
  follows whatever instructions are most salient now — so later messages
  quietly overwrite the earlier ones.
</Copy>
<Copy k="collision.mem-steer.fix">
  Re-supply critical context, or start fresh with essentials up front.
</Copy>

<Copy k="collision.ntp-steer.failure">Confidently wrong reasoning</Copy>
<Copy k="collision.ntp-steer.desc">
  Next Token Prediction generates fluent, confident-sounding chains of
  logic. Steerability dutifully follows your complex prompt step by step.
  But small errors compound — and the confident tone never wavers.
</Copy>
<Copy k="collision.ntp-steer.fix">
  Use visible reasoning to catch drift early, or offload precise steps to
  code execution.
</Copy>

<Copy k="collision.mem-ntp.failure">Context-poisoned generation</Copy>
<Copy k="collision.mem-ntp.desc">
  Working Memory surfaces whatever context is nearby. Next Token Prediction
  then builds fluently on top of it — even if that context contains errors,
  outdated info, or misleading framing.
</Copy>
<Copy k="collision.mem-ntp.fix">
  Curate what's in context carefully. Bad input in the window produces
  confident bad output.
</Copy>

<Copy k="collision.know-steer.failure">Agreeable bad premises</Copy>
<Copy k="collision.know-steer.desc">
  You state something incorrect in your prompt. The model's Knowledge might
  "know" better, but Steerability defaults to following your framing —
  especially if you sound confident.
</Copy>
<Copy k="collision.know-steer.fix">
  Explicitly invite pushback: "Tell me if my assumption is wrong."
</Copy>

<Copy k="collision.know-mem.failure">Stale context vs. trained knowledge</Copy>
<Copy k="collision.know-mem.desc">
  Your Working Memory supplies a document that contradicts what Knowledge
  learned in training. The model may blend both — producing answers that
  are neither faithful to your source nor to its training.
</Copy>
<Copy k="collision.know-mem.fix">
  Be explicit about which source takes priority: "Use only the attached
  document" or "Use your training."
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 44b16841236d8b54 */}
<Copy k="widget.description">
  Simulation: an arena holds four draggable nodes representing core AI
  properties: Next Token Prediction (generates what sounds right), Knowledge
  (what it was trained on), Working Memory (attends to what's nearby), and
  Steerability (follows the loudest instruction). Dragging any two nodes close
  together triggers a card naming the specific failure mode their interaction
  produces, with a short explanation and a targeted fix. Different pairings
  surface different failures, such as fabricated citations, drift over long
  conversations, compounding reasoning errors, or context conflicts. The goal
  is to internalize that most real AI failures come from two properties
  interacting rather than one malfunctioning alone, and that correctly naming
  the pair at play points directly to the appropriate fix.
</Copy>
<Copy k="widget.summary">
  Simulation: drag any two of four AI property nodes, such as Next Token
  Prediction and Knowledge, close together to reveal the failure mode their
  interaction causes and a targeted fix, showing that most AI failures come
  from two properties colliding.
</Copy>
`;export{e as default};