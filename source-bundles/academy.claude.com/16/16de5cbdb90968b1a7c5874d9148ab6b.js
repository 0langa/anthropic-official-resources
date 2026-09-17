var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx: a still of the claude.ai chat box
    holding one example prompt with a meeting transcript attached, its +
    menu (add files, connectors, skills and so on), the Output menu and the
    model picker, plus two teaching bands under it — a numbered legend of
    what the prompt gives Claude and four control pills that each explain
    one control in two bullets and a link (rows of the + menu explain
    themselves in one sentence). Keys are machine identifiers; translate
    ONLY the text between the tags. \`{lead}\` is the bolded opening words of
    a sentence, given by the sub-key that follows; \`{model}\` is a Claude
    model name filled in by the widget. Menu labels (Connectors, Skills,
    Research, Web search, Memory, Slides, Design, Artifact, Effort …) are
    claude.ai interface labels: match the product's own wording in the
    target language. Model names (Sonnet, Opus, Fable) stay in English. The
    file name, the DOCX tag, the ⌘U shortcut and the picker's model names
    are data in the widget and do not appear here. */}

<Copy k="prompt.part1">
  I missed this morning’s planning meeting. The transcript is attached.
</Copy>
<Copy k="prompt.part2">
  Tell me what was decided, what’s now mine to do, and what I should follow
  up on before tomorrow’s standup.
</Copy>
<Copy k="prompt.part3">Keep it to a few bullets I can read between calls.</Copy>

<Copy k="add.aria">Add files, connectors, and more</Copy>

<Copy k="addMenu.files">Add files or photos</Copy>
<Copy k="addMenu.folder">Add folder</Copy>
<Copy k="addMenu.record-skill">Record a skill</Copy>
<Copy k="addMenu.skills">Skills</Copy>
<Copy k="addMenu.tools">Connectors</Copy>
<Copy k="addMenu.design-system">Design system</Copy>
<Copy k="addMenu.plugins">Plugins</Copy>
<Copy k="addMenu.research">Research</Copy>
<Copy k="addMenu.web-search">Web search</Copy>
<Copy k="addMenu.memory">Memory</Copy>

<Copy k="conn.browse">Browse connectors</Copy>
<Copy k="conn.manage">Manage connectors</Copy>
<Copy k="conn.cat.drive">Drive</Copy>
<Copy k="conn.cat.email">Email</Copy>
<Copy k="conn.cat.calendar">Calendar</Copy>
<Copy k="conn.cat.messaging">Messaging</Copy>
<Copy k="conn.cat.crm">CRM</Copy>

<Copy k="output.docs">Docs</Copy>
<Copy k="output.slides">Slides</Copy>
<Copy k="output.design">Design</Copy>
<Copy k="output.artifact">Artifact</Copy>
<Copy k="output.artifact.suffix">Let Claude pick the format</Copy>

<Copy k="model.fable.desc">For your toughest challenges</Copy>
<Copy k="model.opus.desc">Most capable for ambitious work</Copy>
<Copy k="model.sonnet.desc">Most efficient for everyday tasks</Copy>
<Copy k="model.haiku.desc">Fastest for quick answers</Copy>
<Copy k="model.effort">Effort</Copy>

<Copy k="chin.project">Project</Copy>
<Copy k="chin.output">Output</Copy>
<Copy k="chin.model">Model</Copy>
<Copy k="chin.modelAria">Model: {model}</Copy>

<Copy k="legend.title">What this prompt gives Claude</Copy>
<Copy k="legend.item1">
  {lead} What the work is for: here, a meeting you missed.
</Copy>
<Copy k="legend.item1.lead">Context.</Copy>
<Copy k="legend.item2">
  {lead} What you want back: the decisions, your action items, what to
  follow up.
</Copy>
<Copy k="legend.item2.lead">The task.</Copy>
<Copy k="legend.item3">
  {lead} How long and in what shape: a few bullets.
</Copy>
<Copy k="legend.item3.lead">The format.</Copy>
<Copy k="legend.item4">
  {lead} The transcript is attached, so Claude works from the actual content.
</Copy>
<Copy k="legend.item4.lead">The material.</Copy>

<Copy k="controls.title">A few controls to start with</Copy>
<Copy k="controls.pill.files">Add files</Copy>
<Copy k="controls.pill.tools">Connect your tools</Copy>
<Copy k="controls.pill.output">Output</Copy>
<Copy k="controls.pill.model">Model</Copy>
<Copy k="controls.default">
  Select a control to see where it is and what it does.
</Copy>

<Copy k="controls.files.b1">
  Attach documents, spreadsheets, images or PDFs and Claude works from what
  is in them.
</Copy>
<Copy k="controls.files.b2">
  In the desktop app, point Claude at a folder and it reads, edits and saves
  files there directly.
</Copy>
<Copy k="controls.files.link">Navigating the Claude desktop app</Copy>

<Copy k="controls.tools.b1">
  Connectors let Claude read and act in the apps you already use: email,
  calendar, drive, chat, your CRM.
</Copy>
<Copy k="controls.tools.b2">
  Turn one on once under Connectors and every conversation can search it,
  quote it and, where allowed, write back.
</Copy>
<Copy k="controls.tools.link">Browse the connector directory</Copy>

<Copy k="controls.output.b1">
  Say up front what Claude should make: a document, a deck or a design.
</Copy>
<Copy k="controls.output.b2">
  Leave it on Artifact and Claude picks the format; either way you can edit,
  share and export it.
</Copy>
<Copy k="controls.output.link">More on artifacts</Copy>

<Copy k="controls.model.b1">
  Sonnet handles most everyday work; move up to Opus or Fable for long,
  complex or high-stakes tasks.
</Copy>
<Copy k="controls.model.b2">
  Effort sets how long Claude thinks before answering; raise it when the
  first answer is too shallow.
</Copy>
<Copy k="controls.model.link">Choosing the right Claude model</Copy>

<Copy k="controls.txt.folder">
  {lead} hand Claude a whole folder to read from and save into. Desktop app
  only.
</Copy>
<Copy k="controls.txt.folder.lead">Add folder:</Copy>

<Copy k="controls.txt.record-skill">
  {lead} do a task once while Claude watches your screen and it keeps the
  steps as a skill. Desktop app only.
</Copy>
<Copy k="controls.txt.record-skill.lead">Record a skill:</Copy>

<Copy k="controls.txt.skills">
  {lead} saved instructions for work you do the same way every time.
</Copy>
<Copy k="controls.txt.skills.lead">Skills:</Copy>

<Copy k="controls.txt.design-system">
  {lead} your colours, type and components, applied to every deck and design
  Claude makes.
</Copy>
<Copy k="controls.txt.design-system.lead">Design system:</Copy>

<Copy k="controls.txt.plugins">
  {lead} bundles of skills and connectors for a kind of work, often set up
  by your team.
</Copy>
<Copy k="controls.txt.plugins.lead">Plugins:</Copy>

<Copy k="controls.txt.research">
  {lead} many searches over several minutes, returned as one cited brief.
</Copy>
<Copy k="controls.txt.research.lead">Research:</Copy>

<Copy k="controls.txt.web-search">
  {lead} on by default; turn it off when the answer should come only from
  your documents.
</Copy>
<Copy k="controls.txt.web-search.lead">Web search:</Copy>

<Copy k="controls.txt.memory">
  {lead} on by default; Claude draws on what it knows about you and your
  work.
</Copy>
<Copy k="controls.txt.memory.lead">Memory:</Copy>
`;export{e as default};