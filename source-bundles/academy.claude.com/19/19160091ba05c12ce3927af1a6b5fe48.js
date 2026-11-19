var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EffortMenu.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: the level names (Low … Max) are
    product syntax filled in by the widget. The submenu's name comes from the
    folder's _shared.copy.mdx (\`effort.label\`). */}

<Copy k="aria">
  The Effort submenu in Claude's model menu. Header: {header} Options:
  {low}, {medium}, {high}, {extra}, {max}.
</Copy>
<Copy k="header">
  Higher effort means more thorough responses, but takes longer and uses your
  limits faster.
</Copy>
<Copy k="caption">
  To change effort in Claude, open the model menu in the composer, then
  choose {menu}. Changes apply starting with Claude's next response. The levels
  vary by model.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 4e6ece8dad4c089e */}
<Copy k="widget.description">
  Diagram: a static mock-up of the Effort submenu found in Claude's model
  menu, showing the five selectable levels in order: Low, Medium, High, Extra,
  and Max. A header line notes that higher effort means more thorough responses
  but takes longer and uses limits faster. The caption explains that effort is
  changed by opening the model menu in the composer and choosing Effort, that
  the change applies starting with Claude's next response, and that the levels
  available vary by model. It teaches learners where and how to adjust effort
  in Claude.
</Copy>
<Copy k="widget.summary">
  Diagram: a mock-up of Claude's Effort submenu, showing its five levels
  from Low to Max and a note that higher effort means more thorough responses
  that take longer and use limits faster. It teaches where and how to change
  effort in the composer's model menu.
</Copy>
`;export{e as default};