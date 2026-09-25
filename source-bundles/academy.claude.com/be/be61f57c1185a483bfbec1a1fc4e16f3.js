var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Compaction.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{br}\` marks a line break
    in Claude's calendar reply. A full context window holding a tomato-
    growing conversation (the \`pre.*\` turns: the learner's messages,
    Claude's replies and a web-search tool result); pressing Compact
    replaces it with one \`summary\`, after which the blocked reply
    (\`after\`) fits. The tool-call line, token counts and author labels
    are data or shared copy (_shared.copy.mdx \`cw.*\`). */}

<Copy k="label">The same window, full</Copy>
<Copy k="error">
  Claude's calendar reply needs about 140 tokens, but only 128 remain. The
  context window is full.
</Copy>
<Copy k="compact">Compact</Copy>

<Copy k="preloaded">system prompt + preloaded context</Copy>
<Copy k="pre.user1">
  I want to grow tomatoes in my backyard. Any tips for a beginner?
</Copy>
<Copy k="pre.claude1">
  Tomatoes are a great first crop. Start with transplants rather than seeds,
  give them 6–8 hours of direct sun, and water at the base. Where are you
  located?
</Copy>
<Copy k="pre.user2">
  When's the best time to plant tomato seeds in zone 7b?
</Copy>
<Copy k="pre.toolResult">
  [1] almanac.com: Zone 7b, start seeds indoors 6–8 weeks before last frost.
  [2] ncsu.edu/extension: Piedmont NC last frost ≈ Apr 10–15. [3]
  burpee.com: Zone 7 tomato calendar, indoor sow Feb 15.
</Copy>
<Copy k="pre.claude2">
  For zone 7b, start seeds indoors mid-February to early March, about 6–8
  weeks before your last frost (around April 15). Harden them off for a
  week, then transplant outdoors late April.
</Copy>
<Copy k="pre.user3">What about pests? And how often should I water?</Copy>
<Copy k="pre.claude3">
  For pests, watch for hornworms (handpick them) and aphids (spray with
  water). Water deeply 1–2 inches per week, in the morning, at the base.
  Mulch helps retain moisture and prevent disease splash. Stake or cage your
  plants early. Want me to put together a planting calendar for your zone?
</Copy>
<Copy k="pre.user4">Yes, a calendar would be great.</Copy>

<Copy k="summary">
  Summary: User is a beginner growing tomatoes in zone 7b. Recommended
  transplants, 6–8 hrs sun, base watering. Researched planting timeline (sow
  indoors mid-Feb, transplant late April). Discussed pest control and
  watering. User wants a planting calendar — pending.
</Copy>
<Copy k="after">
  Here's a zone 7b tomato calendar:{br}· Feb 15 – Mar 7: start seeds
  indoors{br}· Apr 8 – 15: harden off transplants{br}· Apr 20 – May 5: plant
  out; stake or cage now{br}· May – Sep: water 1–2 in. a week at the base;
  check for hornworms{br}· Jul – Sep: harvest{br}Want reminders for any of
  these?
</Copy>

<Copy k="takeaway">
  Compaction is a lossy reset, not infinite memory. The summary keeps the
  gist and drops the texture, and you can't always predict which texture
  mattered. If a detail you shared earlier didn't make it into the summary,
  it is no longer in context. From where you sit, that looks like the model
  forgetting something you told it.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1e87205e8232107a */}
<Copy k="widget.description">
  Simulation: a context window sits full, blocking Claude's next reply because
  no room remains. Pressing a compact control replaces the entire prior
  conversation with one short summary, freeing most of the window, and the
  blocked reply then plays out successfully in that freed space. A token bar
  tracks usage by message type (system, user, assistant, tool call, tool
  result, summary) against a fixed budget throughout. The widget demonstrates
  how compaction lets a conversation continue past its context limit, and its
  closing takeaway stresses that compaction is a lossy reset rather than
  infinite memory: a summary preserves the gist but can drop details, which
  can make Claude seem to forget something said earlier.
</Copy>
<Copy k="widget.summary">
  Simulation: a full context window blocks Claude's reply until pressing
  Compact replaces the prior conversation with one short summary, freeing
  space so the reply completes. It shows how compaction extends a conversation
  past its limit, though summarizing can lose details.
</Copy>
`;export{e as default};