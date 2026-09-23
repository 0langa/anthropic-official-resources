var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TwoChannels.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. \`@Claude\` is the literal mention
    typed in Slack and must survive verbatim too. \`avatar.you\` is the
    one-letter avatar initial and should stay the initial of \`name.you\`.
    File names (Q3-plan.xlsx) are simulated data — keep them verbatim. */}

<Copy k="question">why is EMEA gross margin 3 points under plan this month?</Copy>
<Copy k="avatar.you">Y</Copy>
<Copy k="name.you">You</Copy>
<Copy k="name.claude">Claude</Copy>
<Copy k="worksFrom">Claude works from</Copy>
<Copy k="channelAria">{name}, {connected}</Copy>

<Copy k="channel1.name">#fpa-monthly</Copy>
<Copy k="channel1.connected">Warehouse connected</Copy>
<Copy k="channel1.source1">Warehouse: margin by region</Copy>
<Copy k="channel1.source2">The team’s past margin threads</Copy>
<Copy k="channel1.source3">Q3-plan.xlsx, pinned here</Copy>
<Copy k="channel1.source4">Channel note: “explain gaps as a bridge”</Copy>
<Copy k="channel1.reply">
  EMEA is 61.2% against a 64.1% plan. The gap is mostly FX hedging booked
  into COGS since July (−1.6 pts, per Priya’s thread), freight over plan
  (−0.9, vs Q3-plan.xlsx), and mix (−0.4). Not pricing. Sources linked;
  want the same bridge for AMER?
</Copy>

<Copy k="channel2.name">#general</Copy>
<Copy k="channel2.source1">No warehouse here</Copy>
<Copy k="channel2.source2">No plan file or channel notes here</Copy>
<Copy k="channel2.reply">
  The warehouse and the plan aren’t connected here. Ask in {channel}, where
  they are, and I can break the gap down there.
</Copy>
`;export{e as default};