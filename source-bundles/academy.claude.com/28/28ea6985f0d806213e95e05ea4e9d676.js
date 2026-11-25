var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FigOneClaude.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). The figure depicts the English app, so
    the greeting and the words in the message boxes stay in FigOneClaude.tsx.
    \`{name}\` tokens are runtime placeholders and stay as they are. */}

<Copy k="aria">Before: "{before}" A message box with a switch for Chat and Cowork. After: "{after}" The same message box with no switch. Both screens greet an invented person, Alex.</Copy>
<Copy k="before.tag">Before</Copy>
<Copy k="before.line">Pick Chat or Cowork before you start.</Copy>
<Copy k="after.tag">After</Copy>
<Copy k="after.line">One Claude. Nothing to pick first.</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 28bf5d23c48ba5d5 */}
<Copy k="widget.description">
  Illustration: a before-and-after comparison of Claude's start screen showing
  how Chat and Cowork became one unified experience. The "before" view shows a
  start screen with a switch to pick between Chat and Cowork before starting a
  conversation. The "after" view shows the same start screen with that switch
  removed, reflecting that there is now nothing to choose before starting.
  Both show the same basic greeting and message box layout, with an invented
  user name used only for illustration. The goal is to show end users what
  visually changes on the start screen once the unified experience rolls out:
  the separate Chat/Cowork choice disappears, and every conversation begins
  the same way.
</Copy>
<Copy k="widget.summary">
  Illustration: a before-and-after view of Claude's start screen, showing a
  switch to pick Chat or Cowork beforehand, then the same screen with that
  switch removed since every conversation now starts the same way.
</Copy>
`;export{e as default};