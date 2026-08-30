var e=`---
kind: widget-copy
---

{/* Copy shared by every widget in this folder: the strings the _shared.tsx
    helpers render themselves (WidgetFrame's reset control, the transcript
    Bubble's context-row chips, the typing indicator and the Pill's "done"
    check). Merged under each widget's own copy file; a widget's keys win.
    Keys are machine identifiers — translate ONLY the text between the
    tags. */}

<Copy k="shared.reset">Reset</Copy>
<Copy k="shared.chip.system">system</Copy>
<Copy k="shared.chip.tool">tool call</Copy>
<Copy k="shared.chip.toolResult">tool result</Copy>
<Copy k="shared.typing">Claude is typing</Copy>
<Copy k="shared.done">done</Copy>

{/* The context-window shell (_contextWindow.tsx, used by FillingWindow and
    Compaction): author legend labels, the token readouts around the bar
    and the composer's aria-labels. {n}, {used}, {budget} are formatted
    token counts; {label} is an author label; {tokens} is the cw.tokens
    readout; {text} is the message about to be sent. */}

<Copy k="cw.author.system">system</Copy>
<Copy k="cw.author.user">you</Copy>
<Copy k="cw.author.assistant">Claude</Copy>
<Copy k="cw.author.tool_call">tool call</Copy>
<Copy k="cw.author.tool_result">tool result</Copy>
<Copy k="cw.author.summary">summary</Copy>
<Copy k="cw.tokens">{n} tokens</Copy>
<Copy k="cw.segment">{label} · {tokens}</Copy>
<Copy k="cw.usage">{used}/{budget} tokens</Copy>
<Copy k="cw.full">full</Copy>
<Copy k="cw.bar.aria">Context window: {used} of {budget} tokens used</Copy>
<Copy k="cw.free.aria">{n} tokens free</Copy>
<Copy k="cw.free">{n} free</Copy>
<Copy k="cw.legend.aria">Tokens by author</Copy>
<Copy k="cw.composer.aria">Composer</Copy>
<Copy k="cw.sendText.aria">Send: {text}</Copy>
<Copy k="cw.send.aria">Send</Copy>
`;export{e as default};