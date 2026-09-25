var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the Chat vs Cowork side-by-side
    animation (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are
    machine identifiers — translate ONLY the text between the tags. \`{dot}\`
    is a decorative separator dot the widget draws; keep it between the two
    halves of each footer line. */}

<Copy k="chat.title">Chat</Copy>
<Copy k="chat.sub">You drive every step</Copy>
<Copy k="chat.ask">You ask</Copy>
<Copy k="chat.followUp">You follow up</Copy>
<Copy k="chat.refine">You refine</Copy>
<Copy k="chat.foot">Serial {dot} you assemble the output</Copy>

<Copy k="cowork.title">Cowork</Copy>
<Copy k="cowork.sub">You delegate, it delivers</Copy>
<Copy k="cowork.goal">You give a goal</Copy>
<Copy k="branch.read">Read files</Copy>
<Copy k="branch.search">Search Drive</Copy>
<Copy k="branch.draft">Draft report</Copy>
<Copy k="cowork.done">Finished work</Copy>
<Copy k="cowork.ready">Ready in folder</Copy>
<Copy k="cowork.foot">Parallel {dot} it assembles the output</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 0960a0e007c67689 */}
<Copy k="widget.description">
  Diagram: a side-by-side animated comparison of Chat and Cowork workflows.
  The Chat pane shows a serial thread where the user asks, follows up, and
  refines across several turns while Claude replies each time, captioned
  "Serial — you assemble the output." The Cowork pane shows the user giving a
  single goal, which fans out into three parallel branches of work (reading
  files, searching a drive, drafting a report), converging into one finished
  file, captioned "Parallel — it assembles the output." The goal is to
  illustrate the core difference between the two modes: Chat requires the
  user's continuous involvement turn by turn, while Cowork lets the user
  delegate a goal and receive a completed result after work happens across
  multiple sources in parallel.
</Copy>
<Copy k="widget.summary">
  Diagram: an animated side-by-side comparison showing Chat as a serial
  back-and-forth conversation versus Cowork as a single goal that fans into
  parallel work and returns one finished result.
</Copy>
`;export{e as default};