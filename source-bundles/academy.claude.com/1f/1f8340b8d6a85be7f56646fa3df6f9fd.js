var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WhatFillsTheTurn.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate only the text between the tags. Words in curly braces are
    placeholders the widget fills at runtime. Keep them exactly as written.
    Token counts and shares are data in the widget, formatted for the
    reader's locale. The figures quoted inside feedback lines are the same
    rounded figures the bars show. */}

<Copy k="replay">The numbers come from Meridian's recorded runs in September 2026. Nothing on this page calls Claude.</Copy>
<Copy k="task">The bars on each card split a Meridian agent's input tokens by where they come from. Read the bars, then answer the question under them.</Copy>
<Copy k="ask">Which feature saves the most on this request's input tokens?</Copy>
<Copy k="groupAria">Feature choices for card {n}</Copy>
<Copy k="opt.ptc">Programmatic tool calling</Copy>
<Copy k="opt.cache">Prompt caching</Copy>
<Copy k="opt.neither">Neither</Copy>
<Copy k="total">{count} input tokens</Copy>
<Copy k="amount">{tokens} ({share})</Copy>
<Copy k="reset">Clear picks</Copy>
<Copy k="seg.fixed">Sent with every request: tool definitions, system prompt, and question</Copy>
<Copy k="seg.added">Added by earlier requests</Copy>
<Copy k="seg.defs">Tool definitions</Copy>
<Copy k="seg.rest">System prompt and question</Copy>
<Copy k="t1.where">The classic loop, request 37 of 42</Copy>
<Copy k="t1.note">In the classic loop each response asks for one tool call, and every timesheet is sent again with every later request. The tool calls don't depend on each other.</Copy>
<Copy k="t1.how">Request 1 held only what every request sends, and that came to 606 tokens.</Copy>
<Copy k="t1.ptc">Right. Programmatic tool calling keeps the 99% away from Claude.</Copy>
<Copy k="t1.cache">A cache point on the last tool covers only the tool definitions in the 1%, and they're too short to cache. Caching the earlier tool results too would still bill them at a tenth of the normal input price on Claude Sonnet 5. Programmatic tool calling keeps the 99% out.</Copy>
<Copy k="t1.neither">The 99% came from lookups that don't depend on each other, so programmatic tool calling fits.</Copy>
<Copy k="t2.where">A Meridian agent with 14 tools, an average request</Copy>
<Copy k="t2.note">All 14 tool definitions go out with every request.</Copy>
<Copy k="t2.how">The tool definitions come to 3,305 tokens.</Copy>
<Copy k="t2.cache">Right, because tool definitions are 95% of this request.</Copy>
<Copy k="t2.ptc">This request has no tool results to keep out.</Copy>
<Copy k="t2.neither">The 95% repeats on every request, so caching it cuts the cost.</Copy>
<Copy k="closing">Each request had one part that held most of its input tokens. The feature that cuts that part saves the most.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 04e6f4c662f0f706 */}
<Copy k="widget.description">
  Exercise: two cards each show, as bars, how a tool-using agent's input
  tokens split between parts such as tool definitions, system prompt and
  question, and tokens added by earlier requests. The first card is one
  recorded request from late in a long run. The second is an average request
  from another agent's recorded run, not a single request. For each card the
  learner picks which feature, programmatic tool calling, prompt caching, or
  neither, would save the most, then gets feedback explaining why that pick
  fits or doesn't. It teaches that a request's token cost is dominated by one
  part, that this part differs between requests, and that identifying the
  dominant part determines which cost-saving feature helps most.
</Copy>
<Copy k="widget.summary">
  Exercise: bars on two cards show how input tokens split by source, for one
  recorded request late in a long agent run and an average request from
  another agent's run. Pick whether programmatic tool calling, prompt caching,
  or neither saves the most, with feedback.
</Copy>
`;export{e as default};