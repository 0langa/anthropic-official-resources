var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CapabilitiesLimitationsFramework.tsx (see
    academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. */}

<Copy k="title">AI Capabilities and Limitations Framework</Copy>
<Copy k="intro">
  Four properties that shape what AI can and can’t do for you. Each sits on
  a spectrum — the further right, the more you should verify and
  compensate.
</Copy>
<Copy k="capability">Capability</Copy>
<Copy k="limitation">Limitation</Copy>

<Copy k="prop.ntp.name">Next Token Prediction</Copy>
<Copy k="prop.ntp.question">Where do AI answers come from?</Copy>
<Copy k="prop.ntp.cap">
  Well-worn paths: summarize, reformat, explain common concepts
</Copy>
<Copy k="prop.ntp.lim">
  Novel territory, sparse patterns, "true vs. sounds true"
</Copy>

<Copy k="prop.know.name">Knowledge</Copy>
<Copy k="prop.know.question">What does AI actually know?</Copy>
<Copy k="prop.know.cap">
  Frequent, recent-in-training, consistent: mainstream topics, popular
  languages
</Copy>
<Copy k="prop.know.lim">
  Rare, post-cutoff, niche, local, or contested topics
</Copy>

<Copy k="prop.wm.name">Working Memory</Copy>
<Copy k="prop.wm.question">What is the AI paying attention to right now?</Copy>
<Copy k="prop.wm.cap">
  Material fits comfortably, session is current, you supply relevant context
</Copy>
<Copy k="prop.wm.lim">
  Very long docs/conversations, expecting cross-session continuity (the
  cliff)
</Copy>

<Copy k="prop.steer.name">Steerability</Copy>
<Copy k="prop.steer.question">How much am I in control?</Copy>
<Copy k="prop.steer.cap">
  Short, concrete, verifiable instructions ("respond as a table," "under 100
  words")
</Copy>
<Copy k="prop.steer.lim">
  Long reasoning chains, abstract asks, native precision
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: a4a33a793acf2f40 */}
<Copy k="widget.description">
  Diagram: A reference card laying out the AI Capabilities and Limitations
  Framework, showing four properties of generative AI as spectrums running
  from capability to limitation. The properties are Next Token Prediction
  (where answers come from), Knowledge (what the AI actually knows), Working
  Memory (what it's attending to right now), and Steerability (how much
  control the user has). Each property shows a guiding question plus examples
  of what sits toward the capability end versus the limitation end. The goal
  is to teach that AI isn't uniformly reliable or unreliable, but predictably
  strong and weak along these four continuums, so learners can locate a given
  task on each spectrum and calibrate trust and verification accordingly
  rather than trusting or distrusting AI wholesale.
</Copy>
<Copy k="widget.summary">
  Diagram: A reference card showing four properties of generative AI—Next
  Token Prediction, Knowledge, Working Memory, and Steerability—each on a
  spectrum from capability to limitation, teaching calibrated trust rather
  than blanket reliance.
</Copy>
`;export{e as default};