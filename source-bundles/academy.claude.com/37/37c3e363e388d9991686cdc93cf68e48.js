var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SetupFolderPicker.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Folder names under \`tree.*\`
    localize the way an OS would (Documents → Documentos); the simulated
    file names shown in the samples live in the widget as data. */}

<Copy k="framing">
  You’re about to ask Cowork to write the {memo}. Pick the folder it should
  work in.
</Copy>
<Copy k="framing.memo">Q3 competitive memo</Copy>
<Copy k="dialogTitle">Add folder for Cowork</Copy>
<Copy k="treeLabel">Your computer</Copy>
<Copy k="targetBadge">target</Copy>
<Copy k="emptyPrompt">Click a folder to see what comes into scope.</Copy>
<Copy k="inScope">In scope</Copy>
<Copy k="filesCount">files Cowork can read and write</Copy>
<Copy k="sampleLabel">Sample of what’s now in scope</Copy>

<Copy k="tree.home">~ (Home)</Copy>
<Copy k="tree.desktop">Desktop</Copy>
<Copy k="tree.downloads">Downloads</Copy>
<Copy k="tree.documents">Documents</Copy>
<Copy k="tree.personal">Personal</Copy>
<Copy k="tree.work">Work</Copy>
<Copy k="tree.clients">Clients</Copy>
<Copy k="tree.northwind">Northwind</Copy>
<Copy k="tree.acme">Acme</Copy>
<Copy k="tree.q3">Q3 Competitive Review</Copy>

<Copy k="callout.home">
  That’s your entire home folder. Cowork now has read and write access to all
  24,000 files in it — including Personal/ and every other client. Anything
  it saves could land anywhere in there.
</Copy>
<Copy k="callout.desktop">
  Your desktop catch-all. The competitive review materials don’t live here.
</Copy>
<Copy k="callout.downloads">
  Wrong neighborhood — the competitive review materials aren’t in Downloads
  at all.
</Copy>
<Copy k="callout.documents">
  The materials are somewhere under here — but so are your personal docs.
  Keep narrowing.
</Copy>
<Copy k="callout.personal">
  Nothing here is work. And you probably don’t want Cowork with write access
  to it.
</Copy>
<Copy k="callout.work">
  Closer — the folder you want is right here. But selecting Work gives Cowork
  write access to every client folder too.
</Copy>
<Copy k="callout.clients">
  That’s client work — not where the competitive review lives. Back up one
  level.
</Copy>
<Copy k="callout.northwind">
  That’s one client’s deliverables — not where the competitive review lives.
  Back up.
</Copy>
<Copy k="callout.acme">
  That’s one client’s deliverables — not where the competitive review lives.
  Back up.
</Copy>
<Copy k="callout.q3">
  Exactly what the task needs. Cowork reads the analyst PDFs and last
  quarter’s memo, writes the new one here, and can’t touch anything else.
</Copy>

<Copy k="endstate">
  {lead} You can always add another folder later if you need to give Cowork
  access to something outside it.
</Copy>
<Copy k="endstate.lead">
  Pick the smallest folder that holds what the task needs.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 4d2a6466e8fd7fdf */}
<Copy k="widget.description">
  Exercise: a file-tree explorer lets the learner click through nested folders
  on a simulated computer to choose where Claude Cowork should work for a
  sample writing task. Selecting any folder updates a panel showing how many
  files would come into scope, a sample of what's inside, and a short
  explanation of why that folder is or isn't a good fit. Some folders are
  unrelated to the task entirely, such as a desktop, downloads, or another
  client's files; others are related but too broad, exposing personal files or
  other clients' material to read-and-write access. The goal is to teach that
  Cowork gets read-and-write access to everything inside the chosen folder, so
  the right choice is the smallest folder that still contains everything the
  task requires.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner clicks through nested folders in a simulated file tree
  to choose where Claude Cowork should work for a sample writing task, seeing
  how many files and what content comes into scope at each level. It teaches
  picking the smallest folder that still holds everything the task needs.
</Copy>
`;export{e as default};