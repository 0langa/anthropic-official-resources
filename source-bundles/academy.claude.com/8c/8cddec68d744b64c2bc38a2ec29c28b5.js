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

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: a3e8b9541fed6ea3 */}
<Copy k="widget.description">
  Diagram: a depiction of the Effort submenu found in the claude.ai model
  menu, shared by Chat and Cowork. It shows the menu row labeled Effort
  collapsed to the current selection, then the opened submenu with its
  explanatory header noting that higher effort means more thorough responses
  but takes longer and uses usage limits faster. The submenu lists four
  levels, Low, Medium, High, and Max, with High marked as the default and
  shown as currently selected, and Max flagged with an info hint. The caption
  notes that the chosen effort level applies to the conversation, reinforcing
  that effort is a per-conversation setting accessible from the composer's
  model menu.
</Copy>
<Copy k="widget.summary">
  Diagram: shows the Effort submenu in the claude.ai model menu, with its four
  levels and a header noting that higher effort means more thorough but
  slower, limit-hungry responses; the chosen level applies to the
  conversation.
</Copy>
`;export{e as default};