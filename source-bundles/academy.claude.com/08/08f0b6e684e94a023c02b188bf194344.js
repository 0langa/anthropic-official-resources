var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EverythingInOnePlace.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    The widget is one small still picture: four places you can start an
    artifact, an arrow, and the Artifacts page holding one small card for each
    kind of artifact. The picture is hidden from a screen reader, so
    \`aria.root\` has to say what it shows.

    \`from.*\` are the four places, in the words the section above the picture
    uses. \`ui.artifacts\` is the page's name in the product's sidebar.

    Room: a place's name holds about 14 characters on one line. */}

<Copy k="aria.root">Wherever you start an artifact (web, desktop app, mobile app, or Claude Code), it is saved on the Artifacts page with the rest of what you’ve made</Copy>

<Copy k="from.web">Web</Copy>
<Copy k="from.desktop">Desktop app</Copy>
<Copy k="from.mobile">Mobile app</Copy>
<Copy k="from.code">Claude Code</Copy>

<Copy k="ui.artifacts">Artifacts</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 43136fc1e7135d28 */}
<Copy k="widget.description">
  Diagram: the four places where you can start an artifact (the web, the
  desktop app, the mobile app, and Claude Code) all lead to the Artifacts
  page. The page holds one small card for each of the six kinds of artifact: a
  doc, a deck, a design, a dashboard, an animation, and a custom artifact. It
  teaches that wherever you start an artifact, it is saved on the Artifacts
  page with the rest of what you've made, so you can open each one again from
  that one page.
</Copy>
<Copy k="widget.summary">
  Diagram: artifacts started on the web, in the desktop app, in the mobile
  app, or in Claude Code are all saved on the Artifacts page, with the rest of
  what you've made.
</Copy>
`;export{e as default};