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

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 19d3ea42774c6382 */}
<Copy k="widget.description">
  Diagram: A static side-by-side sketch illustrates how written memory lets
  Claude carry information across separate conversations. In the first
  conversation, the user states a standing preference, and Claude visibly
  saves it as a memory note. A divider marks a gap between sessions. In the
  second conversation, a fresh chat window, that same memory note is
  automatically loaded into context before the user's first message, and
  Claude applies the remembered preference without being told again. The
  sketch illustrates that written memory works by Claude writing notes during
  one conversation and having a later conversation read those notes back in at
  the start, making a hard-limited context window feel continuous across
  sessions.
</Copy>
<Copy k="widget.summary">
  Diagram: A static side-by-side sketch shows a stated preference saved as a
  memory note in one conversation, then automatically loaded into a fresh
  conversation's context before the next message, so Claude applies it
  unprompted.
</Copy>
`;export{e as default};