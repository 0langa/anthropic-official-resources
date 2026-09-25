var e=`---
kind: widget-copy
---

{/* Learner-facing copy for BetterResultsFourWays.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. \`block.<key>.chip\` is the lesson
    chip shown in the card corner (e.g. "L6" for Lesson 6). */}

<Copy k="kicker">Four ways Cowork learns about you</Copy>
<Copy k="intro">
  Each one gives Cowork a different kind of knowledge. Each kind makes it
  more capable.
</Copy>
<Copy k="learnsLabel">What Cowork learns</Copy>
<Copy k="unlocksLabel">What that unlocks</Copy>

<Copy k="block.global.chip">L6</Copy>
<Copy k="block.global.name">Global instructions</Copy>
<Copy k="block.global.learns">Who you are and how you work.</Copy>
<Copy k="block.global.unlocks">
  Every task starts already calibrated to your role, your formats, and your
  preferences.
</Copy>

<Copy k="block.projects.chip">L6</Copy>
<Copy k="block.projects.name">Projects</Copy>
<Copy k="block.projects.learns">The context of one stream of work.</Copy>
<Copy k="block.projects.unlocks">
  Inside the project, Cowork works like someone already on the team, with
  access to the files, the history, and the decisions to date.
</Copy>

<Copy k="block.skills.chip">L7</Copy>
<Copy k="block.skills.name">Skills</Copy>
<Copy k="block.skills.learns">How a specific process should be done.</Copy>
<Copy k="block.skills.unlocks">
  When a matching task comes up, Cowork runs it the way your team would: your
  templates, your standards, your steps.
</Copy>

<Copy k="block.plugins.chip">L8</Copy>
<Copy k="block.plugins.name">Plugins</Copy>
<Copy k="block.plugins.learns">The expertise of your role or field.</Copy>
<Copy k="block.plugins.unlocks">
  Cowork goes from generalist to specialist, with the workflows, connectors,
  and know-how someone in your seat needs.
</Copy>

<Copy k="throughline">They’re independent and they compound. {strong}</Copy>
<Copy k="throughline.strong">
  The more Cowork knows, the more it can take off your plate.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: a5493c085930f386 */}
<Copy k="widget.description">
  Diagram: a grid of four equally weighted building blocks that make Claude
  Cowork more capable over time: global instructions, projects, skills, and
  plugins. Each block shows what Cowork learns from it and what that knowledge
  unlocks. Global instructions teach who you are and how you work, calibrating
  every task. Projects give context for one stream of work, letting Cowork act
  like a team member with access to files and history. Skills teach how a
  specific process should be done, so matching tasks follow your team's
  standards. Plugins add role or field expertise, turning Cowork from
  generalist to specialist. The closing idea is that these four are
  independent but compound: the more Cowork knows, the more it can take off
  your plate.
</Copy>
<Copy k="widget.summary">
  Diagram: a grid of four equally weighted building blocks—global
  instructions, projects, skills, and plugins—showing what Cowork learns from
  each and what that unlocks, teaching that these blocks compound to make
  Cowork more capable over time.
</Copy>
`;export{e as default};