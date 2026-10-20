var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SameArtifactThreePlaces.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    The widget is a still picture: three small frames, each showing the same
    artifact as a simple drawing. \`cap.<frame>\` is the one short sentence that
    goes with a frame, in reading order: \`cap.beside\` (the artifact beside a
    conversation), \`cap.saved\` (its card on the Artifacts page, among cards
    for the other kinds of artifact), \`cap.shared\` (its own page, as a
    teammate sees it, with two people and Claude shown at the top). \`line\`
    runs under all three, after a link glyph, and is the point of the picture.
    \`aria.root\` names the picture for a screen reader; the frames themselves
    are hidden from one, so the captions have to tell the story alone.

    \`ui.artifacts\` is the sidebar row inside the second frame and follows the
    product's own wording. The artifact's name is demo data in _deck.tsx.

    Room: a caption holds about 100 characters in four lines at the article's
    width; \`line\` holds about 90 on one line there and wraps on anything
    narrower. */}

<Copy k="aria.root">The same artifact in three places: beside a conversation, on the Artifacts page, and on its own page where teammates and Claude work in it</Copy>

<Copy k="cap.beside">You ask Claude, and the artifact opens beside your conversation.</Copy>
<Copy k="cap.saved">Later, you find it on the Artifacts page with everything you’ve made.</Copy>
<Copy k="cap.shared">Teammates open the link you shared and work in it with you and Claude.</Copy>

<Copy k="line">Claude hosts one page that you and your team all open.</Copy>

<Copy k="ui.artifacts">Artifacts</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 42abeaf21eafddf5 */}
<Copy k="widget.description">
  Illustration: one artifact, a slide deck, shown in the three places you meet
  it. First, you ask Claude, and the artifact opens beside your conversation.
  Later, you find it on the Artifacts page, as one card among cards for the
  other kinds of artifact you've made. Then teammates open the link you shared
  and work in it with you and Claude, on the artifact's own page. The same
  deck appears in all three frames. It teaches that an artifact is a page of
  its own with a link of its own: Claude hosts one page that you and your team
  all open.
</Copy>
<Copy k="widget.summary">
  Illustration: one artifact shown beside your conversation, on the Artifacts
  page, and on its own page where teammates and Claude work in it. Claude
  hosts one page that you all open.
</Copy>
`;export{e as default};