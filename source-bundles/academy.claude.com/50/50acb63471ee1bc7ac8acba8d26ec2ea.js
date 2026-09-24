var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PredictBox.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. One sidecar serves all four
    lesson variants: shared chrome is unprefixed; each variant's scenario
    and property text sits under its namespace (\`ntp.*\` next-token
    prediction, \`know.*\` knowledge, \`wm.*\` working memory, \`steer.*\`
    steerability). */}

<Copy k="kicker.before">Before you read</Copy>
{/* \`{task}\` is the variant's \`<ns>.task\` value, rendered bold. */}
<Copy k="predictQ">
  You ask AI to {task}. How closely do you need to check the result? Pick a
  spot on the continuum, then lock in your guess.
</Copy>
<Copy k="capability">Capability</Copy>
<Copy k="limitation">Limitation</Copy>
<Copy k="aria.stops">How closely should you check the result?</Copy>

<Copy k="stop.trust">Trust it</Copy>
<Copy k="stop.spot">Spot-check</Copy>
<Copy k="stop.details">Check details</Copy>
<Copy k="stop.verify">Verify carefully</Copy>
<Copy k="stop.risk">High risk</Copy>

<Copy k="marker.yours">Your guess</Copy>
<Copy k="marker.typical">Typical</Copy>

<Copy k="panel.enables">What this enables</Copy>
<Copy k="panel.fails">Where it characteristically fails</Copy>
<Copy k="panel.products">Product features that push the edge out</Copy>

<Copy k="hint">
  Pick a stop, then lock in your guess. The lesson opens up once you do.
</Copy>
<Copy k="btn.lock">Lock in my guess</Copy>
<Copy k="btn.locked">Guess locked: {label}</Copy>

<Copy k="check.title">Check your intuition</Copy>
<Copy k="check.yours">You picked: {label}</Copy>
<Copy k="check.typical">Most learners pick: {label}</Copy>
<Copy k="check.match">
  Spot on. Your intuition matches where most learners place this.
</Copy>
<Copy k="check.mismatch">
  You picked {yours}; most learners pick {typical}. Worth re-reading the
  capability and limitation zones above with this gap in mind.
</Copy>
<Copy k="check.readOn">Read on to learn more.</Copy>

{/* ── Next token prediction ── */}

<Copy k="ntp.task">summarize a long report</Copy>
<Copy k="ntp.why">
  Summarizing is a well-worn pattern the model has seen millions of times,
  so it usually lands cleanly. Spot-check for invented specifics.
</Copy>
<Copy k="ntp.name">Next Token Prediction</Copy>
<Copy k="ntp.question">Where do AI answers come from?</Copy>
<Copy k="ntp.capZone">
  Well-worn paths: summarize, reformat, explain common concepts
</Copy>
<Copy k="ntp.limZone">
  Novel territory, sparse patterns, “true vs. sounds true”
</Copy>
<Copy k="ntp.enable1">
  Fluent, natural-sounding text in virtually any style or format
</Copy>
<Copy k="ntp.enable2">Rapid synthesis of ideas across distant fields</Copy>
<Copy k="ntp.enable3">
  Strong performance on tasks resembling what the model has seen before
</Copy>
<Copy k="ntp.enable4">
  Coherent continuation of any thread (a story, an argument, a block of
  code)
</Copy>
<Copy k="ntp.fail1">
  {term}: the plausible continuation isn’t always the true one
</Copy>
<Copy k="ntp.fail1.term">Hallucination</Copy>
<Copy k="ntp.fail2">
  {term}: fills gaps with plausible material rather than flagging them
</Copy>
<Copy k="ntp.fail2.term">Confabulation</Copy>
<Copy k="ntp.fail3">
  {term}: sampling means the same prompt can yield different outputs
</Copy>
<Copy k="ntp.fail3.term">Inconsistency</Copy>
<Copy k="ntp.fail4">{term}: smooth prose can wrap a guess</Copy>
<Copy k="ntp.fail4.term">Misplaced confidence</Copy>
<Copy k="ntp.product1">{term}: trace what’s backed vs. generated</Copy>
<Copy k="ntp.product1.term">Citations & source grounding</Copy>
<Copy k="ntp.product2">{term}: the model flags its own shakiness</Copy>
<Copy k="ntp.product2.term">Uncertainty signaling</Copy>
<Copy k="ntp.product3">
  {term}: narrow the space where fabrication sneaks in
</Copy>
<Copy k="ntp.product3.term">Constrained generation / skills</Copy>

{/* ── Knowledge ── */}

<Copy k="know.task">explain a news event from last week</Copy>
<Copy k="know.why">
  Last week's news is after the training cutoff, so the model is working
  from guesses unless it has web search.
</Copy>
<Copy k="know.name">Knowledge</Copy>
<Copy k="know.question">What does AI actually know?</Copy>
<Copy k="know.capZone">
  Frequent, recent-in-training, consistent: mainstream topics, popular
  languages
</Copy>
<Copy k="know.limZone">
  Rare, post-cutoff, niche, local, or contested topics
</Copy>
<Copy k="know.enable1">Extraordinarily broad general knowledge</Copy>
<Copy k="know.enable2">Deep competence in well-represented domains</Copy>
<Copy k="know.enable3">
  Connections across fields (embeddings: related concepts cluster together)
</Copy>
<Copy k="know.fail1">{term}: nothing after training ended is there</Copy>
<Copy k="know.fail1.term">Knowledge cutoff</Copy>
<Copy k="know.fail2">{term}: true-at-training-time isn’t true-now</Copy>
<Copy k="know.fail2.term">Staleness</Copy>
<Copy k="know.fail3">
  {term}: niche domains and local knowledge suffer
</Copy>
<Copy k="know.fail3.term">Uneven coverage</Copy>
<Copy k="know.fail4">
  {term}: defaults reflect the training data’s blind spots
</Copy>
<Copy k="know.fail4.term">Inherited bias</Copy>
<Copy k="know.fail5">
  {term}: “I read this somewhere” isn’t a citation
</Copy>
<Copy k="know.fail5.term">Source amnesia</Copy>
<Copy k="know.product1">
  {term}: works around the cutoff for time-sensitive questions
</Copy>
<Copy k="know.product1.term">Web search</Copy>
<Copy k="know.product2">{term}: draw on material never trained on</Copy>
<Copy k="know.product2.term">Retrieval (RAG) / MCPs</Copy>
<Copy k="know.product3">
  {term}: call out to real calculators, databases, APIs
</Copy>
<Copy k="know.product3.term">Tool use</Copy>
<Copy k="know.product4">{term}: you know what to double-check</Copy>
<Copy k="know.product4.term">Explicit cutoff disclosure</Copy>

{/* ── Working memory ── */}

<Copy k="wm.task">review a 50-page contract</Copy>
<Copy k="wm.why">
  A 50-page contract pushes against the context window. Key clauses in the
  middle can get less attention than the start and end.
</Copy>
<Copy k="wm.name">Working Memory</Copy>
<Copy k="wm.question">What is the AI paying attention to right now?</Copy>
<Copy k="wm.capZone">
  Material fits comfortably, session is current, you supply relevant context
</Copy>
<Copy k="wm.limZone">
  Very long docs/conversations, expecting cross-session continuity (the
  cliff)
</Copy>
<Copy k="wm.enable1">
  Rapid in-session adaptation (style guides, samples apply immediately)
</Copy>
<Copy k="wm.enable2">
  Works with {your} material: your docs, your constraints
</Copy>
<Copy k="wm.enable2.your">your</Copy>
<Copy k="wm.enable3">Precision through specificity. Context is leverage.</Copy>
<Copy k="wm.fail1">{term}: silent truncation when exceeded</Copy>
<Copy k="wm.fail1.term">Hard length limits</Copy>
<Copy k="wm.fail2">
  {term}: attention isn’t uniform across the window
</Copy>
<Copy k="wm.fail2.term">Lost in the middle</Copy>
<Copy k="wm.fail3">{term}: each session starts from zero</Copy>
<Copy k="wm.fail3.term">No persistent memory by default</Copy>
<Copy k="wm.fail4">
  {term}: corrections don’t change the model, only the context
</Copy>
<Copy k="wm.fail4.term">No learning from you</Copy>
<Copy k="wm.product1">{term}: persists facts across sessions</Copy>
<Copy k="wm.product1.term">Memory</Copy>
<Copy k="wm.product2">{term}: condenses old turns to free room</Copy>
<Copy k="wm.product2.term">Compaction / summarization</Copy>
<Copy k="wm.product3">{term}: standing docs reliably in context</Copy>
<Copy k="wm.product3.term">Projects / workspaces</Copy>
<Copy k="wm.product4">{term}: minimize context use until needed</Copy>
<Copy k="wm.product4.term">Skills</Copy>
<Copy k="wm.product5">{term}: push the cliff further out</Copy>
<Copy k="wm.product5.term">Larger context windows</Copy>

{/* ── Steerability ── */}

<Copy k="steer.task">write exactly 100 words, no more</Copy>
<Copy k="steer.why">
  Format and length instructions are exactly what fine-tuning optimized for.
  The model follows them closely, though exact counts can drift by a word or
  two.
</Copy>
<Copy k="steer.name">Steerability</Copy>
<Copy k="steer.question">How much am I in control?</Copy>
<Copy k="steer.capZone">
  Short, concrete, verifiable instructions (“respond as a table,” “under 100
  words”)
</Copy>
<Copy k="steer.limZone">
  Long reasoning chains, abstract asks, native precision
</Copy>
<Copy k="steer.enable1">
  Precise control over format, style, length, and tone
</Copy>
<Copy k="steer.enable2">
  Role-setting: adopt a persona or expertise framing and hold it
</Copy>
<Copy k="steer.enable3">
  Multi-step task execution following a clear process
</Copy>
<Copy k="steer.enable4">
  Iterative refinement (“make it shorter,” “more specific here”)
</Copy>
<Copy k="steer.fail1">
  {term}: small errors compound over long chains
</Copy>
<Copy k="steer.fail1.term">Reasoning drift</Copy>
<Copy k="steer.fail2">
  {term}: instruction satisfied literally, intent missed
</Copy>
<Copy k="steer.fail2.term">Letter over spirit</Copy>
<Copy k="steer.fail3">
  {term}: unwanted/unsafe instructions in documents can be followed too
</Copy>
<Copy k="steer.fail3.term">Prompt injection</Copy>
<Copy k="steer.product1">
  {term}: standing directions that don’t dilute
</Copy>
<Copy k="steer.product1.term">System prompts / custom instructions</Copy>
<Copy k="steer.product2">
  {term}: offload math to an actual interpreter
</Copy>
<Copy k="steer.product2.term">Code execution</Copy>
<Copy k="steer.product3">
  {term}: catch drift at step two, not the final answer
</Copy>
<Copy k="steer.product3.term">Visible reasoning</Copy>
<Copy k="steer.product4">
  {term}: cut down on letter-over-spirit wandering
</Copy>
<Copy k="steer.product4.term">Structured output modes</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 324f410d4e60b590 */}
<Copy k="widget.description.knowledge">
  Exercise: the learner considers a scenario where AI is asked to explain a
  recent news event, and places a guess on a five-point continuum from "trust
  it" to "high risk," indicating how closely the result would need checking.
  After locking in a guess, the widget reveals where most learners typically
  place this scenario, along with the capability zone (frequent, recent,
  consistent topics) versus the limitation zone (rare, post-cutoff, niche, or
  contested topics), characteristic knowledge failures like staleness and
  source amnesia, and product features such as web search and retrieval that
  address these gaps. The goal is to calibrate intuition about where an AI
  model's knowledge is reliable versus thin, tied to its fixed training
  cutoff.
</Copy>
<Copy k="widget.description.next-token-prediction">
  Exercise: the learner considers a scenario where AI is asked to summarize a
  long report, then places a guess on a five-point continuum from "trust it"
  to "high risk," indicating how closely the result should be checked. Locking
  in the guess reveals where most learners typically place this task, along
  with zone labels contrasting well-worn patterns (summarizing, reformatting,
  common explanations) against novel or sparse territory where "true" and
  "sounds true" diverge. It also surfaces what next token prediction enables,
  where it characteristically fails (hallucination, confabulation,
  inconsistency, misplaced confidence), and product features, such as
  citations and uncertainty signaling, that push this limitation further out.
  The goal is building calibrated intuition for when AI output needs
  verification.
</Copy>
<Copy k="widget.description.steerability">
  Exercise: for a scenario involving giving AI a strict word-count
  instruction, the learner places a guess on a five-point continuum from
  "trust it" to "high risk," indicating how closely they'd need to check the
  result, then locks it in to reveal where most learners place it and why.
  After locking, it shows what steerability enables (precise control over
  format, style, tone, and role; multi-step execution; iterative refinement),
  where it characteristically fails (reasoning drift over long chains,
  following instructions literally while missing intent, and vulnerability to
  embedded instructions like prompt injection), and which product
  features—system prompts, code execution, visible reasoning, structured
  output modes—help close the gap between instruction and intent.
</Copy>
<Copy k="widget.description.working-memory">
  Exercise: the learner considers a scenario involving asking AI to review a
  long contract, then places a guess on a five-point continuum from "trust it"
  to "high risk," indicating how closely the result would need checking.
  Locking in the guess reveals where most learners typically place this
  scenario, along with explanations of what working memory (the context
  window) enables, where it characteristically fails, and which product
  features (such as memory, compaction, projects, or larger context windows)
  push the limitation further out. The goal is to calibrate intuition about
  the context window as a fixed-size, cliff-edged constraint on what the AI
  can attend to, rather than a gradual limitation, and to connect this to
  strategies for structuring context effectively.
</Copy>
<Copy k="widget.summary.knowledge">
  Exercise: given a scenario where AI explains a recent news event, place a
  guess on a five-point continuum from trusting the result to treating it as
  high risk, then compare it to typical learner placements and explore why AI
  knowledge has limits.
</Copy>
<Copy k="widget.summary.next-token-prediction">
  Exercise: the learner picks a spot on a five-point continuum showing how
  closely to check AI's output for a summarization task, then locks in a guess
  to reveal where most learners place it. It builds calibrated intuition for
  when next token prediction needs verification.
</Copy>
<Copy k="widget.summary.steerability">
  Exercise: for a scenario with a strict word-count instruction, the learner
  places a guess on a five-point continuum from "trust it" to "high risk,"
  then locks it in to see where most learners land and why, revealing
  steerability's strengths, failure patterns, and mitigating product features.
</Copy>
<Copy k="widget.summary.working-memory">
  Exercise: given a scenario about reviewing a long contract, the learner
  places a guess on a continuum from trusting AI's output to treating it as
  high risk, then locks it in to reveal typical placement and explanations of
  the context window's capabilities and limits.
</Copy>
`;export{e as default};