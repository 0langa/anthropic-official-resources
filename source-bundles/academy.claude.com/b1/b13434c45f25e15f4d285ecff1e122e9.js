var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsToc.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.
    \`title\` heads the list and names it for screen readers. The \`item\` keys
    are the eight jump links, in page order. Each repeats a section heading of
    the page without its number, so translate it as that heading is
    translated. */}

<Copy k="title">In this guide</Copy>

<Copy k="item.what">What a design system is</Copy>
<Copy k="item.changes">What changes when Claude has your design system</Copy>
<Copy k="item.before">Before you start</Copy>
<Copy k="item.create">Create a design system</Copy>
<Copy k="item.look">Look through the page, and leave notes for Claude</Copy>
<Copy k="item.builds">How Claude uses it when it builds</Copy>
<Copy k="item.share">Share it with your organization</Copy>
<Copy k="item.daily">Use it day to day</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 943a2be1f094104e */}
<Copy k="widget.description">
  Table of contents: a numbered list of jump links to the eight sections of
  this guide to design systems in Claude, so a returning reader can skip to
  the part they need. In order, the sections are: what a design system is,
  what changes when Claude has your design system, before you start, create a
  design system, look through the page and leave notes for Claude, how Claude
  uses it when it builds, share it with your organization, and use it day to
  day.
</Copy>
<Copy k="widget.summary">
  Table of contents: jump links to the guide's eight sections, from what a
  design system is, through creating one and sharing it with your
  organization, to using it day to day.
</Copy>
`;export{e as default};