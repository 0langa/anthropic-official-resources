var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Clickable prototype” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names — keep them where the sentence needs
    them. */}

<Copy k="title">Clickable prototype from real components</Copy>
<Copy k="subtitle">
  Reads your spec and component library, writes a clickable HTML prototype
  you can open in a browser.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the prototype folder and describe the flow you want
  clickable.
</Copy>
<Copy k="menu.category">Design</Copy>
<Copy k="prompt">
  Build a clickable HTML prototype of this flow using only components from
  our design system. Wire up the navigation and write it to {file}.
</Copy>

<Copy k="scene2.title">Cowork reads your real library</Copy>
<Copy k="scene2.sub">
  The skill pulls the spec and published components, then builds each
  screen from real parts.
</Copy>
<Copy k="work.heading">Working on clickable prototype</Copy>
<Copy k="step1">Reading invite-flow-spec.docx</Copy>
<Copy k="step2">Reading Figma — published components</Copy>
<Copy k="step3">Reading design-system.css + tokens.json</Copy>
<Copy k="step4">Building 4 screens with wired navigation</Copy>
<Copy k="step5">Writing {file}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the flow spec</Copy>
<Copy k="prog2">Load component library</Copy>
<Copy k="prog3">Build each screen</Copy>
<Copy k="prog4">Wire the navigation</Copy>
<Copy k="prog5">Write prototype to folder</Copy>

<Copy k="scene3.title">A prototype you can click through</Copy>
<Copy k="scene3.sub">
  Real components, wired navigation, realistic data — written back to the
  folder.
</Copy>
<Copy k="res1">
  {lead} from the spec — invite list, compose modal, role picker, and
  confirmation. Every element is a component from your published library;
  nothing was invented.
</Copy>
<Copy k="res1.lead">4 screens built</Copy>
<Copy k="res2">
  {lead} Send Invite opens the compose modal, picking a role advances to
  confirmation, and the back link returns to the list with state intact.
</Copy>
<Copy k="res2.lead">Navigation is wired.</Copy>
<Copy k="res3">
  Filled with {lead} — names, emails, and role labels that read like the
  product. Open it in a browser and click through.
</Copy>
<Copy k="res3.lead">realistic placeholder data</Copy>
<Copy k="chip.meta">Document · HTML · 38 KB</Copy>

<Copy k="scene4.title">Rebuild it whenever the spec moves</Copy>
<Copy k="scene4.sub">
  Schedule the skill and the prototype rebuilds from the folder each
  morning, no request needed.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 7am, re-run {cmd} against this folder and rebuild {file} with
  a bumped version stamp.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Daily prototype rebuild</Copy>
<Copy k="card.body">
  Runs {cmd} against {folder} and rebuilds the clickable HTML with a bumped
  version stamp.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">7 am</Copy>

<Copy k="end">
  Every morning, the clickable prototype matches whatever’s in the spec —
  ready to put in front of users.
</Copy>
`;export{e as default};