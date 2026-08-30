var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Pattern consistency audit” use case. Scene text
    is typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, folder, file and component names — keep them where the
    sentence needs them. */}

<Copy k="title">Pattern consistency audit</Copy>
<Copy k="subtitle">
  Searches Figma, the codebase, and analytics for every existing instance,
  then tells you which pattern to reuse.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at your design-system folder and name the pattern you’re
  about to propose.
</Copy>
<Copy k="menu.category">Design</Copy>
<Copy k="prompt">
  Before I propose a new inline-filter pattern, find every surface already
  using something similar — chips, segmented controls, dropdown filters.
  Tell me which one to reuse and why.
</Copy>

<Copy k="scene2.title">Cowork searches every source</Copy>
<Copy k="scene2.sub">
  Figma libraries, the codebase, and analytics — the Progress card tracks
  the plan as each source is checked.
</Copy>
<Copy k="work.heading">Working on pattern audit</Copy>
<Copy k="step1">Reading component-inventory.md</Copy>
<Copy k="step2">Searching Figma libraries for filter patterns</Copy>
<Copy k="step3">Searching GitHub for {chip} usages</Copy>
<Copy k="step4">Pulling Amplitude engagement per surface</Copy>
<Copy k="step5">Writing {file}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read component inventory</Copy>
<Copy k="prog2">Find existing instances</Copy>
<Copy k="prog3">Pull engagement per surface</Copy>
<Copy k="prog4">Compare and rank patterns</Copy>
<Copy k="prog5">Write reuse recommendation</Copy>

<Copy k="scene3.title">A reuse call, backed by data</Copy>
<Copy k="scene3.sub">
  Every existing instance with owner and engagement, plus which one to
  extend instead of inventing a sixth.
</Copy>
<Copy k="result1">
  {lead} Owned by Personalization. Ships in the design system as {chip}, 11%
  engagement. Recommended: extend this for inline filtering on search
  results.
</Copy>
<Copy k="result1.lead">Filter chips — Saved items.</Copy>
<Copy k="result2">
  {lead} Owned by Discovery. Highest engagement at 18% but heavy for an
  inline context; reuse only if results need multi-facet drill-down.
</Copy>
<Copy k="result2.lead">Faceted sidebar — Browse.</Copy>
<Copy k="result3">
  {lead} Owned by Commerce. Single-select only; would need a new
  multi-select variant, so it’s a diverge not a reuse.
</Copy>
<Copy k="result3.lead">Segmented control — Orders.</Copy>
<Copy k="chip.meta">Document · MD · 24 KB</Copy>

<Copy k="scene4.title">Make it the default first step</Copy>
<Copy k="scene4.sub">
  Save it as a skill the whole design org calls before any new pattern
  enters review.
</Copy>
<Copy k="sched.prompt">
  Save this as {cmd} — take a pattern name, search Figma, the codebase, and
  Amplitude, and write the side-by-side to {folder}.
</Copy>
<Copy k="card.status">Skill saved</Copy>
<Copy k="card.body">
  Takes a pattern name, searches Figma, GitHub, and Amplitude for existing
  instances, and writes the side-by-side to {folder}.
</Copy>
<Copy k="card.shared">Shared with {team} workspace</Copy>
<Copy k="card.shared.team">Design</Copy>

<Copy k="end">
  Every new pattern arrives at crit with the inventory of what already
  exists.
</Copy>
`;export{e as default};