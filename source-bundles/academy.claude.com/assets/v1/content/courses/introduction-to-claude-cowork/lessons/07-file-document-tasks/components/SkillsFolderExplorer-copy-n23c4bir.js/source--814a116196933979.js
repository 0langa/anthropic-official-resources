var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SkillsFolderExplorer.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Skill folder names
    (meeting-recap, board-memo, variance-analysis), the file and directory
    entries (SKILL.md, assets/, …), and the SKILL.md / script previews are
    simulated data and live in the widget. */}

<Copy k="kicker">Inside a skill</Copy>
<Copy k="intro">A skill is a folder. {lead} Switch between three examples:</Copy>
<Copy k="intro.lead">What goes inside depends on the process.</Copy>
<Copy k="empty.initial">
  Click SKILL.md in the meeting-recap folder to see what it does.
</Copy>
<Copy k="empty.switch">
  Click any item in the {name} folder to see what it does.
</Copy>
<Copy k="useLabel">What you’d use it for</Copy>

<Copy k="section.mr-skill.label">The brief</Copy>
<Copy k="section.mr-skill.what">
  The simplest skill is just this one file — the instructions, with nothing
  else attached.
</Copy>
<Copy k="section.mr-skill.use">
  Lock in the recap format once. No template, no script, no examples needed —
  just the rules.
</Copy>

<Copy k="section.bm-skill.label">The brief</Copy>
<Copy k="section.bm-skill.what">
  Tells Cowork what this skill does and how to do it — written like a runbook
  for a new colleague.
</Copy>
<Copy k="section.bm-skill.use">
  Codify the unwritten rules — the section order, the question that always
  comes up — so Cowork doesn’t have to be told them every month.
</Copy>

<Copy k="section.bm-assets.label">Templates & brand</Copy>
<Copy k="section.bm-assets.what">
  The actual files Cowork reaches for — templates, brand kits, anything the
  deliverable needs to look like.
</Copy>
<Copy k="section.bm-assets.use">
  Put your team’s slide template here and decks Cowork builds with this skill
  can match it.
</Copy>

<Copy k="section.bm-references.label">Prior work</Copy>
<Copy k="section.bm-references.what">
  Your two best past memos — finished work Cowork reads to match the tone,
  length, and structure.
</Copy>
<Copy k="section.bm-references.use">
  When the easiest way to describe the bar is to show it, not write it down.
</Copy>

<Copy k="section.va-skill.label">The brief</Copy>
<Copy k="section.va-skill.what">
  Tells Cowork where the inputs live, what counts as material, and which
  script to run before writing it up.
</Copy>
<Copy k="section.va-skill.use">
  Put the team’s definition of “material” and the write-up format here once.
  Every month, Cowork applies them without being re-told.
</Copy>

<Copy k="section.va-scripts.label">Repeatable calculation</Copy>
<Copy k="section.va-scripts.what">
  A small Python script that does the same calculation, the same way, every
  time. Say “run variance for May” — Cowork pulls the right files, runs the
  script, produces the write-up.
</Copy>
<Copy k="section.va-scripts.use">
  Pin the calculation you don’t want re-derived — same numbers, same shape,
  every run. The write-up is the part Cowork drafts; the math is the part the
  script owns.
</Copy>
`;export{e as default};