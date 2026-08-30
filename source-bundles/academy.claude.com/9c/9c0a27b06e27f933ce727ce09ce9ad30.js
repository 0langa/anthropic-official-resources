var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Brand guidelines skill” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated skill
    command, design-token and file names — keep them where the sentence
    needs them. */}

<Copy k="title">Encode the brand as a skill</Copy>
<Copy k="subtitle">
  Reads your brand guidelines and design tokens, writes a shared skill that
  keeps every team on-brand.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the brand folder and describe the skill you want it to
  build.
</Copy>
<Copy k="prompt">
  Turn the brand docs in this folder into a shared skill called {cmd}. The
  skill should enforce our color tokens, typography, spacing, and voice
  rules on any content or UI it generates, and refuse off-brand patterns
  with a short reason.
</Copy>

<Copy k="scene2.title">Cowork reads the brand system</Copy>
<Copy k="scene2.sub">
  Guidelines, tokens, and the Figma library become one set of rules; the
  Progress card tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Building the {cmd} skill</Copy>
<Copy k="step1">Reading brand-guidelines-2026.pdf</Copy>
<Copy k="step2">Notion · pulled voice-and-tone and brand pages</Copy>
<Copy k="step3">Figma · read 84 variables, 12 type styles, 46 components</Copy>
<Copy k="step4">Reading {file}</Copy>
<Copy k="step5">Distilling color, type, spacing, and voice into rules</Copy>
<Copy k="step6">Done · saved as shared skill {cmd}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the brand guidelines</Copy>
<Copy k="prog2">Read tokens and Figma library</Copy>
<Copy k="prog3">Distill the rules</Copy>
<Copy k="prog4">Write the skill</Copy>
<Copy k="prog5">Save as {cmd}</Copy>

<Copy k="scene3.title">A skill that enforces your system</Copy>
<Copy k="scene3.sub">
  Color, type, spacing, and voice encoded as rules — shared so every team’s
  Claude loads it first.
</Copy>
<Copy k="rule1">
  {lead} — only the 9 brand tokens in {file}. Primary actions use
  {token}; never raw hex. Refuse anything outside the palette and name the
  closest token.
</Copy>
<Copy k="rule1.lead">Color</Copy>
<Copy k="rule2">
  {lead} — Söhne for UI, Tiempos for headlines. Body 16/24, caption 13/18.
  Spacing on the 4px grid only; refuse off-grid values.
</Copy>
<Copy k="rule2.lead">Type and spacing</Copy>
<Copy k="rule3">
  {lead} — confident, plain, first person plural. No exclamation marks in
  product UI. Never “leverage”, “utilize”, “seamless”, or “world-class”.
</Copy>
<Copy k="rule3.lead">Voice</Copy>
<Copy k="chip.meta">Saved as skill · Shared with workspace</Copy>

<Copy k="scene4.title">Re-sync it as the brand evolves</Copy>
<Copy k="scene4.sub">
  Schedule a weekly rebuild from the source folder and library — the skill
  stays current without a ticket.
</Copy>
<Copy k="sched.prompt">
  Mondays at 9am, re-read this folder and the Figma library and rebuild
  {cmd}, posting a short changelog of what changed.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Brand skill re-sync</Copy>
<Copy k="card.body">
  Re-reads the guidelines folder and Figma library, rebuilds {cmd}, and
  posts a short changelog of what now enforces differently.
</Copy>
<Copy k="card.when">{day} at 9 am</Copy>
<Copy k="card.when.day">Mondays</Copy>

<Copy k="end">
  Every team’s Claude output — copy, mockups, decks — lands on-brand by
  default instead of by review.
</Copy>
`;export{e as default};