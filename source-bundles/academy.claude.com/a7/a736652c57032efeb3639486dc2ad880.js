var e=`---
kind: widget-copy
---

{/* Film for the “Find existing patterns before you design” use case. \`line.*\`
    are the one sentence shown per chapter; a phrase in [[double brackets]] is
    the part the film underlines — keep the brackets around the equivalent
    words. \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Find existing patterns before you design</Copy>
<Copy k="sub">
  You are about to design something the product may already have.
</Copy>

<Copy k="line.ask">
  Using the Design plugin’s [[handoff skill]], name the pattern and ask for
  each owner and usage.
</Copy>
<Copy k="line.does">
  Claude checks your inventory first, then searches the library, the code and
  usage data.
</Copy>
<Copy k="line.question">
  Claude checks your inventory first, then searches the library, the code and
  usage data.
</Copy>
<Copy k="line.get">
  You get the [[audit]] and a recommendation, with what Claude found at the
  top.
</Copy>
<Copy k="line.note1">
  Every instance sits side by side with its owner, component and usage.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">side by side</Copy>
<Copy k="line.note2">
  Claude names one to reuse, and why the others do not fit.
</Copy>
<Copy k="line.again">
  Save it as a skill so any designer runs the same check by naming a pattern.
</Copy>
<Copy k="line.close">
  You design knowing what already exists and who owns it.
</Copy>

<Copy k="attachment1.title">Design-system / Audits / inline-filter</Copy>
<Copy k="attachment1.sub">Inventory, ownership, screenshot, usage export</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">component-inventory.md</Copy>
<Copy k="attachment2.sub">38 components</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">search-results-current.png</Copy>
<Copy k="attachment3.sub">The surface to design</Copy>
<Copy k="attachment3.tag">PNG</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Before I propose an inline-filter pattern for search results, find [[every
  surface using something similar]]: chips, segmented controls, dropdown
  filters, faceted sidebars. For each, note which team owns it and how it
  performed. [[Tell me which to reuse and why.]]
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">component-inventory.md, 38 components</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">surface-ownership.csv, 22 surfaces</Copy>
<Copy k="source3.verb">Opened</Copy>
<Copy k="source3.text">search-results-current.png</Copy>
<Copy k="source4.verb">Searched</Copy>
<Copy k="source4.text">filter and facet components in the library</Copy>
<Copy k="source5.verb">Searched</Copy>
<Copy k="source5.text">product code using those components</Copy>
<Copy k="source6.verb">Read</Copy>
<Copy k="source6.text">filter-usage-90d.csv</Copy>

<Copy k="verb1">Reading component-inventory.md</Copy>
<Copy k="verb2">Reading surface-ownership.csv</Copy>
<Copy k="verb3">Viewing the search results screenshot</Copy>
<Copy k="verb4">Searching the Figma library</Copy>
<Copy k="verb5">Searching orchard/web</Copy>
<Copy k="verb6">Reading filter-usage-90d.csv</Copy>
<Copy k="verb7">Writing inline-filter-audit.md</Copy>

<Copy k="reply.did1">searched the library</Copy>
<Copy k="reply.did2">90 days of usage</Copy>
<Copy k="reply.did3">five surfaces that already filter inline</Copy>
<Copy k="reply.did4">Reuse FilterChip / Group from Saved items</Copy>
<Copy k="reply.text">
  I searched the library, the orchard/web code and 90 days of usage for your
  four variants and found five surfaces that already filter inline: four use
  library components, one is hand-built. Reuse FilterChip / Group from Saved
  items: the only multi-select of the five, in the library and the code, and
  second most used.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Save this as a {when} called pattern-audit: give it a pattern name and it
  writes the same side-by-side to Design-system / Audits.
</Copy>
<Copy k="again.bubble.when">shared skill</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Give it a pattern name. Finds every existing instance in the library, the
  codebase and usage data, and writes the side-by-side with a reuse
  recommendation.
</Copy>
<Copy k="again.card.shared">Everyone in your organization can view</Copy>
`;export{e as default};