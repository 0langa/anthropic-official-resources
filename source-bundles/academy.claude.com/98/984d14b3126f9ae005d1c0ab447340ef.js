var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the Cowork plugin detail card
    illustration (see academy-web src/components/mdx/WidgetCopy.tsx). Keys
    are machine identifiers — translate ONLY the text between the tags.
    \`{name}\` tokens are runtime placeholders and must survive verbatim; the
    version number is simulated data in the widget. */}

<Copy k="name">Finance</Copy>
<Copy k="chip.update">Update</Copy>
<Copy k="chip.customize">Customize</Copy>

<Copy k="meta.source">Source</Copy>
<Copy k="meta.source.value">Marketplace ({partners})</Copy>
<Copy k="meta.source.value.partners">Anthropic & Partners</Copy>
<Copy k="meta.version">Version</Copy>
<Copy k="meta.author">Author</Copy>
<Copy k="meta.author.value">Anthropic</Copy>

<Copy k="desc">
  Streamline finance and accounting workflows, from journal entries and
  reconciliation to financial statements and variance analysis.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 04259823f343f631 */}
<Copy k="widget.description">
  Diagram: A static illustration of a plugin detail card in Claude Cowork,
  shown as it appears before starting a customize session. The card displays a
  sample role-based plugin's name, its source (Marketplace, with Anthropic and
  partners listed), its version number, and its author (Anthropic), along with
  a short description of the workflows it covers. Controls for updating the
  plugin, enabling or disabling it, and opening its customize flow sit
  alongside an overflow menu, with four blank placeholder tiles below. The
  widget orients the learner to where the customize action sits relative to
  the card's other controls, ahead of the tutorial's walkthrough of starting a
  customize session for a pre-built plugin.
</Copy>
<Copy k="widget.summary">
  Diagram: A static illustration of a plugin detail card in Claude Cowork,
  showing its name, source, version, author, and description alongside update,
  toggle, and customize controls, orienting the learner to where customization
  starts.
</Copy>
`;export{e as default};