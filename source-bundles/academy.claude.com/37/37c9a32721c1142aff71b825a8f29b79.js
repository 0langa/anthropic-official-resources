var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FillingWindow.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{br}\` marks a line break
    in the web-search tool result. A 1,000-token context window the
    learner fills turn by turn with a tomato-growing conversation (the
    \`beat.*\` turns: the learner's messages, Claude's replies, one tool
    call and its result) until Claude's last reply no longer fits
    (\`blocked\`). The tool-call line, token counts and author labels are
    data or shared copy (_shared.copy.mdx \`cw.*\`). */}

<Copy k="label">A 1,000-token context window</Copy>
<Copy k="replying">Claude is replying…</Copy>
<Copy k="blocked">
  Not enough room for Claude's reply (needs ~140 tokens, 128 free)
</Copy>

<Copy k="preloaded">system prompt + preloaded context</Copy>
<Copy k="beat.user1">
  I want to grow tomatoes in my backyard. Any tips for a beginner?
</Copy>
<Copy k="beat.claude1">
  Tomatoes are a great first crop. Start with transplants rather than seeds,
  give them 6–8 hours of direct sun, and water at the base. Where are you
  located?
</Copy>
<Copy k="beat.user2">
  When's the best time to plant tomato seeds in zone 7b?
</Copy>
<Copy k="beat.toolCall">tool call · web_search</Copy>
<Copy k="beat.toolResult">
  [1] almanac.com — Zone 7b: start seeds indoors 6–8 weeks before last frost
  (mid-Feb to early Mar). Transplant outdoors after Apr 15.{br}[2]
  ncsu.edu/extension — Piedmont NC last frost ≈ Apr 10–15. Harden off
  transplants one week before planting.{br}[3] burpee.com — Zone 7 tomato
  calendar: indoor sow Feb 15, transplant Apr 20–May 5.
</Copy>
<Copy k="beat.claude2">
  For zone 7b, start seeds indoors mid-February to early March — about 6–8
  weeks before your last frost (around April 15). Harden them off for a
  week, then transplant outdoors late April.
</Copy>
<Copy k="beat.user3">What about pests? And how often should I water?</Copy>
<Copy k="beat.claude3">
  For pests, watch for hornworms (handpick them) and aphids (spray with
  water). Water deeply 1–2 inches per week, in the morning, at the base.
  Mulch helps retain moisture and prevent disease splash. Stake or cage your
  plants early — they get heavy fast. Want me to put together a planting
  calendar for your zone?
</Copy>
<Copy k="beat.user4">Yes, a calendar would be great.</Copy>

<Copy k="takeaway1">
  Two things to notice. First, you're not the only author: the system prompt
  took a third of the window before your first message ever reached the
  model. And second, when the model decided to search something before
  responding, that one tool result cost about ten times as many tokens as
  the question that triggered it.
</Copy>
<Copy k="takeaway2">
  Once again, this used to mean that you'd have to start over in a whole new
  chat. But nowadays, there's a much cleverer way of dealing with
  almost-full context.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 10ccf1090b18b930 */}
<Copy k="widget.description">
  Simulation: a 1,000-token context window fills up as the learner sends a
  scripted sequence of chat turns about a simple gardening question. Each turn
  lands in a transcript and a token bar that tracks usage by author (system
  prompt, user, Claude, tool call, tool result). The system prompt already
  occupies a third of the budget before the first message is even sent, and a
  single web search result consumes far more tokens than the question that
  triggered it. The final turn can't be answered because too little room
  remains, demonstrating that context windows fill mostly with overhead the
  user never typed, not just their own messages, and that running out once
  meant restarting the conversation entirely.
</Copy>
<Copy k="widget.summary">
  Simulation: the learner sends scripted chat turns about a gardening question
  into a small context window, watching a token bar fill with system prompt,
  messages, and tool results until the last reply can't fit, showing how
  overhead crowds out typed content.
</Copy>
`;export{e as default};