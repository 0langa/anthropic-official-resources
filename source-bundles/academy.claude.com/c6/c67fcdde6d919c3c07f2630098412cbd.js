var e=`---
kind: widget-copy
---

{/* Copy for WorkMap.tsx. \`work.s<time>c<clarity>.<n>\` are one spot's examples, one map
    dot each, numbered from 1 with no gaps. Only screen readers get \`fit.<n>\`. */}

<Copy k="time.q">How long would it take you without AI?</Copy>
<Copy k="time.1">Minutes</Copy>
<Copy k="time.2">About an hour</Copy>
<Copy k="time.3">An afternoon to a day</Copy>
<Copy k="time.4">Several days</Copy>

<Copy k="clarity.q">How clear is the correct output?</Copy>
<Copy k="clarity.1">Clearly defined outputs</Copy>
<Copy k="clarity.2">Clear goal, a few choices</Copy>
<Copy k="clarity.3">Judgment throughout</Copy>
<Copy k="clarity.4">Open question</Copy>

<Copy k="suit">Models that may suit it</Copy>
<Copy k="model.fable">Fable</Copy>
<Copy k="model.opus">Opus</Copy>
<Copy k="model.sonnet">Sonnet</Copy>
<Copy k="model.haiku">Haiku</Copy>

<Copy k="fit.2">{model}: a close fit</Copy>
<Copy k="fit.1">{model}: a partial fit</Copy>
<Copy k="fit.0">{model}: not a fit</Copy>

<Copy k="examples">Examples of work like this</Copy>

<Copy k="work.s1c1.1">Field extraction</Copy>
<Copy k="work.s1c1.2">First-pass reads</Copy>
<Copy k="work.s1c1.3">Knowledge-base Q&A</Copy>

<Copy k="work.s1c2.1">Short spreadsheet edits</Copy>

<Copy k="work.s1c3.1">Nuanced writing</Copy>

<Copy k="work.s2c1.1">Template-bound documents</Copy>

<Copy k="work.s2c2.1">Scoped analysis</Copy>
<Copy k="work.s2c2.2">One-pagers and diagrams</Copy>

<Copy k="work.s2c3.1">Financial research</Copy>
<Copy k="work.s2c3.2">Everyday engineering</Copy>

<Copy k="work.s2c4.1">Novel and ambiguous problems</Copy>

<Copy k="work.s3c2.1">Slide generation</Copy>
<Copy k="work.s3c2.2">FP&A packs</Copy>

<Copy k="work.s3c3.1">Contract redlining</Copy>
<Copy k="work.s3c3.2">Full reports, sheets, decks</Copy>
<Copy k="work.s3c3.3">Complex analysis</Copy>

<Copy k="work.s3c4.1">Exhaustive market analysis</Copy>
<Copy k="work.s3c4.2">Deep research</Copy>
<Copy k="work.s3c4.3">Architecture planning</Copy>

<Copy k="work.s4c1.1">Code migrations with clear targets</Copy>

<Copy k="work.s4c2.1">Banking decks and merger-style models</Copy>

<Copy k="work.s4c3.1">Investment research and diligence</Copy>
<Copy k="work.s4c3.2">Regulatory submissions</Copy>
<Copy k="work.s4c3.3">Deal-critical analysis</Copy>

<Copy k="work.s4c4.1">Major refactors</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 81b0692c23f0e6b0 */}
<Copy k="widget.description">
  Explorer: a two-axis map for gauging which Claude model suits a piece of work.
  Learners set two sliders: how long the task would take without AI, from
  minutes to several days, and how clear the correct output is, from clearly
  defined outputs to an open question. Each combination highlights which models
  (Haiku, Sonnet, Opus, Fable) suit that kind of work most closely, and shows
  example tasks for that spot. The goal is to build intuition that longer,
  less-defined work tends to favor more capable models, while quick,
  well-defined work can suit lighter ones, though it's framed as an
  illustration, not a rule, since other factors like stakes and verifiability
  also matter.
</Copy>
<Copy k="widget.summary">
  Explorer: set how long a task would take without AI and how clear the correct
  output is, to see example tasks and which Claude models suit them. Longer,
  less-defined work tends to favor more capable models.
</Copy>
`;export{e as default};