var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EffortMenu.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: the level names (Low … Max) are
    product syntax filled in by the widget. The submenu's name and its
    Default badge come from the folder's _shared.copy.mdx
    (\`effort.label\` / \`effort.default\`). */}

<Copy k="aria">
  The Effort submenu in the claude.ai model menu. Header: {header} Options:
  {low}, {medium}, {high} (marked Default and currently selected), {max}.
</Copy>
<Copy k="header">
  Higher effort means more thorough responses, but takes longer and uses your
  limits faster.
</Copy>
<Copy k="caption">
  Where it lives in claude.ai: open the model menu in the composer, then
  {menu}. Your pick applies to the conversation.
</Copy>
`;export{e as default};