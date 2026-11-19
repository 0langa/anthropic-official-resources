var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the Cowork plugin detail card
    illustration (see academy-web src/components/mdx/WidgetCopy.tsx). Keys
    are machine identifiers — translate ONLY the text between the tags. */}

<Copy k="name">Finance</Copy>
<Copy k="meta.source.value.partners">Anthropic & Partners</Copy>

<Copy k="menu.edit">Edit with Claude</Copy>
<Copy k="menu.remove">Remove</Copy>

<Copy k="desc">
  Streamline finance and accounting workflows, from journal entries and
  reconciliation to financial statements and variance analysis.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 778632e4789e01f3 */}
<Copy k="widget.description">
  Illustration: a plugin's detail card in Claude with its menu open. The card
  shows the plugin's name, the catalog it comes from, a short description of
  its workflows, and blank placeholder tiles. The menu lists "Edit with
  Claude," which is highlighted, a blank row, and "Remove." The learner sees
  which option starts a customize session for a pre-built plugin. In that
  session, Claude rewrites the plugin's generic skills to use the team's
  tools, standards, and reference material.
</Copy>
<Copy k="widget.summary">
  Illustration: a plugin's detail card in Claude with its menu open and "Edit
  with Claude" highlighted. That option starts a customize session for a
  pre-built plugin.
</Copy>
`;export{e as default};