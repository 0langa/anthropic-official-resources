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

{/* The screen-reader text TokenChips (Tokenizer.tsx, also rendered by
    OverUnder) announces for a leading-space marker inside a token chip. */}
<Copy k="shared.space">space</Copy>
`;export{e as default};