var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx — the Finder folder → Cowork
    composer mock (see academy-web src/components/mdx/WidgetCopy.tsx). Keys
    are machine identifiers — translate ONLY the text between the tags. The
    file names live in the widget as data; \`folder\` is the folder's name
    (shown in the window title and the folder chip) and \`file.*.date\` are
    the "date modified" cells. */}

<Copy k="folder">Q2-Planning</Copy>
<Copy k="file.xlsx.date">Yesterday</Copy>
<Copy k="file.docx.date">Apr 18</Copy>
<Copy k="file.pdf.date">Apr 18</Copy>
<Copy k="file.reference.date">Apr 12</Copy>
<Copy k="placeholder">Describe what you need</Copy>
<Copy k="aria.replay">Replay</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 4e406db1bb50cd7d */}
<Copy k="widget.description">
  Diagram: a two-part illustration showing how to give Claude Cowork a place
  to work. The first part shows a folder on the computer containing a handful
  of files of different types. An arrow points down to the second part, a
  Cowork chat composer with that same folder attached as the selected working
  location. It conveys that once a folder is set as the working location,
  Cowork reads the relevant files inside it as context and saves finished work
  back into that folder as real files the user can open, share, or keep
  editing, rather than leaving output trapped in the conversation.
</Copy>
<Copy k="widget.summary">
  Diagram: shows a computer folder containing several files with an arrow
  leading into a Cowork chat composer that has the same folder attached,
  illustrating how setting a working folder lets Cowork read its contents and
  save finished work back into it.
</Copy>
`;export{e as default};