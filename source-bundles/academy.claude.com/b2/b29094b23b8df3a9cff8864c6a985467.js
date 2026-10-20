var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ArtifactExample.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    The widget is mounted three times: \`review\`, \`content\` and \`decide\`. Each
    has an \`.ask\`, the message you send Claude, and a \`.name\`, the artifact's
    name in the pane's header. The name stays as it is: the picture under it is
    in English and shows the same name.

    \`decide.file1\` to \`decide.file3\` name the files sent with that message, and
    \`decide.fileTag\` is their type.

    \`ui.share\` follows Claude's own wording. Only read aloud: \`aria\`, which
    names the widget; \`ui.you\`, said before the message; and \`ui.attached\`,
    said before each file's name. */}

<Copy k="aria">Example: a message to Claude beside the artifact it built</Copy>
<Copy k="ui.you">You ask Claude</Copy>
<Copy k="ui.attached">Attached file</Copy>
<Copy k="ui.share">Share</Copy>

<Copy k="review.ask">Build a page where teams submit drafts, Claude checks each one against my voice rules, and I approve it or send it back.</Copy>
<Copy k="review.name">Copy desk</Copy>

<Copy k="content.ask">Build a page where I paste an update once and Claude writes the email, in-app banner, and social post in our tone.</Copy>
<Copy k="content.name">One update, three channels</Copy>

<Copy k="decide.ask">Build a page that compares these quotes, lets me set what matters most, and recommends one I can defend.</Copy>
<Copy k="decide.name">Help me pick</Copy>
<Copy k="decide.file1">Vendor A quote.pdf</Copy>
<Copy k="decide.file2">Vendor B quote.pdf</Copy>
<Copy k="decide.file3">Vendor C quote.pdf</Copy>
<Copy k="decide.fileTag">PDF</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 4e38e9914db3410a */}
<Copy k="widget.description.content">
  Illustration: an example of a custom artifact that produces content, shown
  as a message to Claude beside the artifact Claude built. The message asks
  for a page where you paste an update once and Claude writes the email, the
  in-app banner, and the social post in your team's tone. The artifact pane
  holds a picture of the result, where one pasted update becomes an email, an
  in-app banner, and a post. It offers an idea for a first custom artifact: a
  page where Claude transforms your update for different channels.
</Copy>
<Copy k="widget.description.decide">
  Illustration: an example of a custom artifact for analysis and decision
  support, shown as a message to Claude beside the artifact Claude built. The
  message comes with vendors' quotes attached as PDF files. It asks for a page
  that compares the quotes, lets you set what matters most, and recommends one
  you can defend. The artifact pane holds a picture of the result: the quotes
  compared, weighted, and turned into a recommendation. It offers an idea for
  a first custom artifact: give Claude your context, like your files, and see
  your options laid out side by side.
</Copy>
<Copy k="widget.description.review">
  Illustration: an example of a custom artifact that reviews and checks work,
  shown as a message to Claude beside the artifact Claude built. The message
  asks for a page where teams submit drafts, Claude checks each one against
  your voice rules, and you approve it or send it back. The artifact pane
  holds a picture of the result: an inbox of other teams' drafts, each checked
  by Claude against those rules. It offers an idea for a first custom
  artifact: a submission portal where Claude checks each draft against your
  voice and writing standards.
</Copy>
<Copy k="widget.summary.content">
  Illustration: a message to Claude beside the artifact it built, a page where
  one pasted update becomes an email, an in-app banner, and a social post.
</Copy>
<Copy k="widget.summary.decide">
  Illustration: a message to Claude with vendors' quotes attached, beside the
  artifact it built, a page that compares the quotes, weighs them, and
  recommends one.
</Copy>
<Copy k="widget.summary.review">
  Illustration: a message to Claude beside the artifact it built, a page where
  teams submit drafts and Claude checks each one against your voice rules.
</Copy>
`;export{e as default};