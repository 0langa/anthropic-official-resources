var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed4.tsx — the "Working Memory" property card (see
    academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. */}

<Copy k="video">Watch the lesson · 6 min</Copy>

<Copy k="enables1">Rapid in-session adaptation to {your} docs, data, and constraints</Copy>
<Copy k="enables2">Coherent work across long threads while space remains</Copy>
<Copy k="enables3">Precise grounding in supplied material</Copy>
<Copy k="enables1.your">your</Copy>

<Copy k="fails1">Hard length limits — a cliff, not a gradient</Copy>
<Copy k="fails2">“Lost in the middle” — buried details get less attention</Copy>
<Copy k="fails3">No persistent memory by default; corrections don't carry over</Copy>

<Copy k="pill.memory">Memory</Copy>
<Copy k="pill.projects">Projects</Copy>
<Copy k="pill.compaction">Context compaction</Copy>
<Copy k="pill.attachments">File & artifact attachments</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: c2ebf7abafe16c0b */}
<Copy k="widget.description">
  Summary card: this widget profiles Working Memory, the property of AI
  covering what a model is actively attending to within its fixed-size context
  window. It lists what this enables: rapid adaptation to material given in
  the session, coherent work across long threads while space remains, and
  precise grounding in supplied content. It also lists characteristic failure
  modes: hard length limits that cut off abruptly rather than degrading
  gradually, a "lost in the middle" effect where buried details get less
  attention, and no persistent memory by default, so corrections don't carry
  over between sessions. It names related Claude features (memory, projects,
  context compaction, file and artifact attachments) that extend this limit,
  and links to a short video lesson. The goal is understanding context as a
  finite, leverageable resource with a cliff-edge limit.
</Copy>
<Copy k="widget.summary">
  Summary card: profiles Working Memory, the AI property governing what fits
  in a model's fixed context window, listing what it enables, where it fails,
  and Claude features that extend this limit, plus a linked video lesson.
</Copy>
`;export{e as default};