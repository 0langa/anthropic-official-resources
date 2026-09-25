var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the four-property overview tiles
    (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. */}

<Copy k="tile.ntp.name">Next Token Prediction</Copy>
<Copy k="tile.ntp.q">Where do AI answers come from?</Copy>
<Copy k="tile.knowledge.name">Knowledge</Copy>
<Copy k="tile.knowledge.q">What does AI actually know?</Copy>
<Copy k="tile.memory.name">Working Memory</Copy>
<Copy k="tile.memory.q">What is AI paying attention to?</Copy>
<Copy k="tile.steer.name">Steerability</Copy>
<Copy k="tile.steer.q">How much am I in control?</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 8ff678e5436800e2 */}
<Copy k="widget.description">
  Overview: a set of four linked tiles introduces the tutorial's core
  framework for understanding AI capabilities and limitations. Each tile names
  one property and poses the question it answers: Next Token Prediction (where
  do AI answers come from?), Knowledge (what does AI actually know?), Working
  Memory (what is AI paying attention to?), and Steerability (how much am I in
  control?). Selecting a tile jumps to that section of the lesson. The goal is
  to give learners a map of the four properties before they read the details,
  framing AI behavior as generated word-by-word, bounded by training data and
  a knowledge cutoff, limited by a fixed context window, and guided but not
  perfectly controlled by instructions.
</Copy>
<Copy k="widget.summary">
  Diagram: Four linked tiles introduce the tutorial's core framework, naming
  next token prediction, knowledge, working memory, and steerability, each
  posing its guiding question and linking to that section.
</Copy>
`;export{e as default};