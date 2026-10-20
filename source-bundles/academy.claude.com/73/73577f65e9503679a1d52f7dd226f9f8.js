var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsWaysIn.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.
    \`label\` describes the picture for screen readers. The \`page\` keys are the
    starter text of a new, empty design system page, in Claude's own wording:
    its heading, its helper line, the placeholder Principles section with two
    example rules, and the question over the three cards. The \`card.github\`,
    \`card.connect\` and \`card.upload\` keys are the three cards, each a title
    and one line, also in Claude's wording. \`caption\` is the line under the
    figure. */}

<Copy k="label">
  A new, empty design system page. Under its starter text is the question Not
  sure where to start? and three cards: Sync from GitHub, Build from connectors,
  Upload brand files.
</Copy>

<Copy k="page.heading">Your design system…</Copy>
<Copy k="page.helper">
  This page is yours to edit. Click anywhere and write what this system is for,
  the rules it follows, and how to use its tokens and components — Claude reads
  it before it designs anything.
</Copy>
<Copy k="page.principles">Principles</Copy>
<Copy k="page.rule1">A short rule the whole system follows</Copy>
<Copy k="page.rule2">Another one — keep each to a line</Copy>
<Copy k="page.prompt">Not sure where to start?</Copy>

<Copy k="card.github.title">Sync from GitHub</Copy>
<Copy k="card.github.body">
  Point Claude at a repository; it imports tokens and components from code.
</Copy>
<Copy k="card.connect.title">Build from connectors</Copy>
<Copy k="card.connect.body">
  Claude builds from your connected tools, or asks you a few questions first.
</Copy>
<Copy k="card.upload.title">Upload brand files</Copy>
<Copy k="card.upload.body">
  Drop in logos, fonts, guidelines and token files; Claude drafts from them.
</Copy>

<Copy k="caption">
  All three fill in the same page. You can start with one and add from another
  later.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: a056ed4bd4622de7 */}
<Copy k="widget.description">
  Illustration: a new, empty design system page in Claude and the three ways
  to fill it in. The page opens with starter text saying that it is yours to
  edit and that Claude reads it before it designs, and with a placeholder
  Principles section. It then asks Not sure where to start? and offers three
  cards. Sync from GitHub imports tokens and components from a repository's
  code. Build from connectors builds from your connected tools, or asks you a
  few questions first. Upload brand files drafts from logos, fonts, guidelines
  and token files. All three fill in the same page, so you can start with one
  and add from another later.
</Copy>
<Copy k="widget.summary">
  Illustration: a new, empty design system page with three cards for filling
  it in, Sync from GitHub, Build from connectors and Upload brand files. All
  three fill in the same page.
</Copy>
`;export{e as default};