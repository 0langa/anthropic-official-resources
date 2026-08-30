var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MemorySketch.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The two panels are a Tuesday
    conversation where a preference is saved to memory and a Thursday
    conversation where that memory note is loaded back into context. */}

<Copy k="label">Written memory</Copy>
<Copy k="memoryLine">"Prefers short, bulleted team updates."</Copy>

<Copy k="tue.label">Conversation 1 · Tuesday</Copy>
<Copy k="tue.you">Keep updates to my team short and bulleted, please.</Copy>
<Copy k="tue.claude">
  Done. That sounds like a standing preference, so I'm writing it down.
</Copy>

<Copy k="thu.label">Conversation 2 · Thursday</Copy>
<Copy k="thu.loaded">loaded with memory in context</Copy>
<Copy k="thu.you">Email this week's update to my team.</Copy>
<Copy k="thu.claude">Sent - short and bulleted, the way you like it.</Copy>

<Copy k="memoryFile">memory file</Copy>
<Copy k="saved">saved to memory</Copy>
<Copy k="nap">nap</Copy>
`;export{e as default};