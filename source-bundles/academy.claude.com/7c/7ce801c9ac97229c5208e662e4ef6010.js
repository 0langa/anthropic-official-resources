var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ReachClaude.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Strings drawn inside the
    pictures are the product's own UI and stay in the component. */}

<Copy k="tabsAria">Ways to reach Claude</Copy>
<Copy k="tab.type">Type</Copy>
<Copy k="tab.speak">Speak</Copy>
<Copy k="tab.menu">Menu bar</Copy>

<Copy k="aria.type">
  Press the Option key twice to bring up the quick entry bar: a field reading
  What can I help you with today?, a New Chat selector and a Send button
</Copy>
<Copy k="aria.speak">
  Press Caps Lock and speak; a waveform shows Claude is listening, with Caps
  Lock to stop. Your words then appear in the quick entry bar.
</Copy>
<Copy k="aria.menubar">
  The Mac menu bar with the Claude icon beside Wi-Fi, battery, search, Control
  Center and the clock
</Copy>
<Copy k="aria.menu">Clicking the Claude icon opens the quick entry bar</Copy>

<Copy k="caption">Edit these shortcuts in {settings}.</Copy>
<Copy k="caption.settings">Settings</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 1f505b26d5ce6991 */}
<Copy k="widget.description">
  Diagram: three views show how to bring up quick entry, the small Claude
  window in the desktop app, on a Mac. In the Type view, pressing the Option
  key twice opens the quick entry bar, with a field for a question. In the
  Speak view, pressing Caps Lock starts a listening waveform, and the spoken
  words then appear in the same bar. In the Menu bar view, the Claude icon
  sits among the standard icons of a Mac menu bar, and selecting it opens the
  bar. Together the views teach that on a Mac, Claude can be brought up over
  whatever app is open, by keyboard, voice, or the menu bar icon.
</Copy>
<Copy k="widget.summary">
  Diagram: three views show how to bring up Claude's quick entry window over
  any app on a Mac, by pressing Option twice, speaking after pressing Caps
  Lock, or selecting the Claude icon in the menu bar.
</Copy>
`;export{e as default};