var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ContextGlobalInstructions.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Each role's brief renders one
    \`role.<key>.line<n>\` per line (the widget joins them with real line
    breaks) — keep the lines separate. */}

<Copy k="kicker">Global instructions</Copy>
<Copy k="rolesAria">Role examples</Copy>

<Copy k="panelTitle">Instructions for Claude</Copy>
<Copy k="panelDesc">
  Claude will keep these in mind across chats and Cowork within {guidelines}.
  {learnMore}
</Copy>
<Copy k="panelDesc.guidelines">Anthropic’s guidelines</Copy>
<Copy k="panelDesc.learnMore">Learn more</Copy>
<Copy k="placeholder">
  e.g. when learning new concepts, I find analogies particularly helpful
</Copy>
<Copy k="getsYou">What this gets you</Copy>

<Copy k="role.pm.label">Product Manager</Copy>
<Copy k="role.pm.line1">
  I lead product for a 200-person B2B SaaS company in late-stage growth.
</Copy>
<Copy k="role.pm.line2">
  My team ships PRDs, launch briefs, and quarterly roadmaps.
</Copy>
<Copy k="role.pm.line3">
  Default to crisp, decision-oriented writing — lead with the user problem
  before the solution.
</Copy>
<Copy k="role.pm.line4">When citing a metric, name the source doc.</Copy>
<Copy k="role.pm.line5">
  Always flag assumptions I should pressure-test before sharing.
</Copy>
<Copy k="role.pm.bullet1">
  Defaults to PRD and brief formats without you specifying.
</Copy>
<Copy k="role.pm.bullet2">
  Leads with the user problem before the solution.
</Copy>
<Copy k="role.pm.bullet3">Cites the source doc for any metric.</Copy>

<Copy k="role.fin.label">Finance</Copy>
<Copy k="role.fin.line1">
  I run FP&A at a 1,000-person company. We report monthly to the exec team
  and quarterly to the board.
</Copy>
<Copy k="role.fin.line2">
  Variance materiality threshold is 5% — flag anything above without being
  asked.
</Copy>
<Copy k="role.fin.line3">
  All board memos use the in-house template (Variance / Forecast / Risks /
  Asks, in that order).
</Copy>
<Copy k="role.fin.line4">Always show the calculation, not just the result.</Copy>
<Copy k="role.fin.line5">
  Never round currency below thousands without flagging it.
</Copy>
<Copy k="role.fin.bullet1">Defaults to the board-memo template.</Copy>
<Copy k="role.fin.bullet2">Flags any variance >5% without being asked.</Copy>
<Copy k="role.fin.bullet3">Shows working for every number.</Copy>

<Copy k="role.leg.label">Legal</Copy>
<Copy k="role.leg.line1">
  I’m in-house counsel at a B2B SaaS company. I review SaaS, vendor, and NDA
  contracts.
</Copy>
<Copy k="role.leg.line2">
  Apply the house redline playbook: surface indemnity,
  limitation-of-liability, and termination clauses first.
</Copy>
<Copy k="role.leg.line3">
  Use our standard redline conventions (insertions underlined, deletions
  struck through, comments in margin).
</Copy>
<Copy k="role.leg.line4">
  Never produce final language for external use — every output ends “draft —
  needs your review before sending.”
</Copy>
<Copy k="role.leg.bullet1">Applies the house redline style.</Copy>
<Copy k="role.leg.bullet2">
  Surfaces indemnity and limitation clauses first.
</Copy>
<Copy k="role.leg.bullet3">
  Always ends “draft — needs your review before sending.”
</Copy>
`;export{e as default};