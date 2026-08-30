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
`;export{e as default};