var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed3.tsx — the "Knowledge" property card (see
    academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. */}

<Copy k="video">Watch the lesson · 5 min</Copy>

<Copy k="enables1">Extraordinarily broad general knowledge</Copy>
<Copy k="enables2">Deep competence in well-represented domains</Copy>
<Copy k="enables3">Unexpected connections across fields</Copy>

<Copy k="fails1">Knowledge cutoff & staleness — true-then isn't true-now</Copy>
<Copy k="fails2">Uneven coverage of niche, local, or recent topics</Copy>
<Copy k="fails3">Source amnesia — “I read this somewhere” isn't a citation</Copy>

<Copy k="pill.search">Web search</Copy>
<Copy k="pill.retrieval">Retrieval (RAG / connectors)</Copy>
<Copy k="pill.tools">Tool use for real-time data</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 314781b725b7791b */}
<Copy k="widget.description">
  Summary card: this widget profiles "Knowledge," one of four core properties
  of AI, covering what a model knows and where that knowledge comes from. It
  links to a short video lesson, then lists what this property enables — broad
  general knowledge, strong competence in well-represented domains, and
  unexpected cross-field connections — against where it characteristically
  fails: a fixed knowledge cutoff making once-true facts stale, uneven
  coverage of niche, local, or recent topics, and "source amnesia," where the
  model can't actually cite where information came from. It also names Claude
  features that extend this boundary: web search, retrieval (RAG or
  connectors), and tool use for real-time data. The goal is to teach that a
  model's knowledge is frozen at training time and must be supplemented
  externally for current or obscure information.
</Copy>
<Copy k="widget.summary">
  Summary card: profiles the "Knowledge" property of AI, linking a short video
  and listing what broad training knowledge enables versus where it fails,
  like stale cutoffs and uneven coverage, plus Claude features like search and
  retrieval that extend it.
</Copy>
`;export{e as default};