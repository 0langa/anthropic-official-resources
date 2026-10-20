var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ShareWithYourTeam.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    The widget is one small still picture. On the left, the Share sheet with two
    teammates just added. On the right, the artifact's own page once it is
    shared: the two teammates and Claude shown at the top, one teammate's
    selection on the slide, and the other's comment to Claude with Claude's
    reply under it. An arrow joins them. The picture is hidden from a screen
    reader, so \`aria.root\` has to say what it shows.

    \`lab.share\` sits over the sheet. {share} is drawn as the Share button
    itself, with \`ui.share\` on it, so write the sentence around the button and
    keep {share}. \`lab.together\` sits over the shared page.

    \`ui.*\` are labels inside the picture and follow the product's own wording.
    The artifact's name is demo data in _deck.tsx.

    Room: \`lab.share\` holds about 24 characters beside the button on one line,
    \`lab.together\` about 60. */}

<Copy k="aria.root">Sharing an artifact: you click Share and add two teammates, then they open the same page and work on it with you and Claude. One teammate has the heading selected, and the other has left a comment for Claude, with Claude’s reply under it</Copy>

<Copy k="lab.share">Click {share} and add teammates</Copy>
<Copy k="lab.together">Your team works on the same page with you and Claude</Copy>

<Copy k="ui.share">Share</Copy>
<Copy k="ui.add">Add people</Copy>
<Copy k="ui.invite">Invite</Copy>
<Copy k="ui.atClaude">@Claude</Copy>
<Copy k="ui.claude">Claude</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: afb6022e6ad24dc1 */}
<Copy k="widget.description">
  Illustration: sharing an artifact, in two parts joined by an arrow. In the
  first, you open Share and add two teammates in the Share sheet. In the
  second, the artifact's own page is open once it is shared. Claude and both
  teammates are shown as present, one teammate has the slide's heading
  selected, and the other has left a comment that mentions Claude, with
  Claude's reply in the same thread. It teaches that after you share an
  artifact, your team opens the same page and works on it with you and Claude,
  by editing it and by commenting.
</Copy>
<Copy k="widget.summary">
  Illustration: you open Share and add teammates, then they work on the same
  page with you and Claude. One teammate selects a heading, and another leaves
  Claude a comment.
</Copy>
`;export{e as default};