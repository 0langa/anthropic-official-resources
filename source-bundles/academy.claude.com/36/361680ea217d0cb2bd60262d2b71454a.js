var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CoworkTaskAnatomy.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The \`prompt\` pattern's four
    tokens are the clickable phrases (\`prompt.<token>\`); the simulated file
    name shown in the deliverable chip lives in the widget as data. */}

<Copy k="kicker">Anatomy of a Cowork task</Copy>

<Copy k="prompt">
  What did we decide about pricing last quarter? Look across {folder},
  {connectors} — {multistep} and {deliverable}.
</Copy>
<Copy k="prompt.folder">the meeting notes in the Q3 Sales folder</Copy>
<Copy k="prompt.connectors">
  my emails from the sales team, the leadership Slack, and the proposal decks
</Copy>
<Copy k="prompt.multistep">pull it all together</Copy>
<Copy k="prompt.deliverable">
  write me a one-page summary I can send to the exec team
</Copy>

<Copy k="composer.ask">Ask</Copy>

<Copy k="hint">
  Click any underlined part of the prompt to see why this is Cowork’s kind
  of work.
</Copy>
<Copy k="helper.all">All four — see the throughline below.</Copy>
<Copy k="helper.progress">{count} of {total} — keep going.</Copy>
<Copy k="progress.aria">Progress</Copy>

<Copy k="note.folder.label">Local files</Copy>
<Copy k="note.folder.text">
  A folder on your computer, via the desktop app. Cowork reads and writes
  the files directly — no uploading or downloading.
</Copy>
<Copy k="note.connectors.label">Multiple tools</Copy>
<Copy k="note.connectors.text">
  Three different tools, one ask. Cowork orchestrates across your connectors
  in a single run instead of you querying each one separately and stitching
  the results yourself.
</Copy>
<Copy k="note.multistep.label">Multiple steps</Copy>
<Copy k="note.multistep.text">
  A multi-step job — read, cross-reference, synthesize. Cowork plans the
  steps, works through them, and keeps going while you do something else.
</Copy>
<Copy k="note.deliverable.label">A real deliverable</Copy>
<Copy k="note.deliverable.text">
  A finished file, not a reply. It lands in your folder as a real .docx you
  can attach and send.
</Copy>

<Copy k="chip.folder">Q3 Sales/</Copy>
<Copy k="chip.gmail">Gmail</Copy>
<Copy k="chip.slack">Slack</Copy>
<Copy k="chip.drive">Drive</Copy>

<Copy k="todo.1">Read Q3 Sales folder</Copy>
<Copy k="todo.2">Pull from Gmail, Slack, Drive</Copy>
<Copy k="todo.3">Cross-reference decisions</Copy>
<Copy k="todo.4">Draft the summary</Copy>

<Copy k="closing">
  {lead} — that’s the shape of work Cowork takes off your plate.
</Copy>
<Copy k="closing.lead">
  Local files, multiple tools, multiple steps, a real deliverable
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 5757757a9005f53c */}
<Copy k="widget.description">
  Explorer: a sample Cowork prompt asks Claude what was decided about pricing
  last quarter. It points Claude at meeting notes in a local folder and at
  email, messaging, and shared decks, and it asks for a one-page summary for
  the executive team. Four phrases in the prompt each open a note on one trait
  of Cowork's kind of work. Local files: Cowork reads and writes them
  directly, with no uploading. Multiple tools: Cowork works across connectors
  in one run. Multiple steps: Cowork plans the steps and works through them. A
  real deliverable: a finished file, not a reply. Once all four notes are
  open, the widget names that combination as the shape of work Cowork takes
  off your plate.
</Copy>
<Copy k="widget.summary">
  Explorer: a sample Cowork prompt with four phrases to open. Each phrase
  explains one trait of Cowork's kind of work: local files, multiple tools,
  multiple steps, and a real deliverable.
</Copy>
`;export{e as default};