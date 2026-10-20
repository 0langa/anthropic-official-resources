var e=`---
kind: widget-copy
---

{/* Learner-facing copy for RefineOnArtboards.tsx. Keys are machine identifiers:
    translate only the text between the tags. \`{n}\` and \`{total}\` are runtime
    placeholders and must survive verbatim.
    \`progress\`, \`next\` and \`startOver\` are the exercise's own controls. The
    \`step1\`, \`step2\` and \`step3\` keys are the task line: first what to do, then
    what just happened. The \`mark\` keys are the exercise's own pointers over
    the window, telling the reader what to click next. The \`ui\` and \`panel\`
    keys are labels inside the simulated Claude window, in the product's own
    wording; \`ui.claudeTag\` stays as it is in every language. \`comment.text\` is
    the comment the reader sends and \`claude.reply\` is Claude's simulated
    answer. The \`aria\` keys name what the reader clicks.
    The editor's other labels are in the folder's shared copy file. The
    notification center is demo data and lives in the code. */}

<Copy k="progress">
  {n} of {total}
</Copy>
<Copy k="next">Next</Copy>
<Copy k="startOver">Start over</Copy>

<Copy k="step1.task">Click the row of filters on the first artboard.</Copy>
<Copy k="step1.selected">
  In Properties on the right, find Gap and type a new number. Try 24.
</Copy>
<Copy k="step1.done">
  The filters moved as you typed. Changes in Properties save as you go.
</Copy>
<Copy k="step2.task">
  The Approvals filter is selected. Use the arrows above it to move it before
  Mentions. In the product you drag it.
</Copy>
<Copy k="step2.done">
  Approvals took its new place in the row, and the other filters moved over.
</Copy>
<Copy k="step3.task">
  Comments are on. Click the list on the first artboard.
</Copy>
<Copy k="step3.draft">Send it with the arrow.</Copy>
<Copy k="step3.working">Claude is working on it.</Copy>
<Copy k="step3.done">
  Claude added an Empty state artboard beside the others and kept the spacing
  and filter order you set by hand.
</Copy>

<Copy k="mark.row">Click this row</Copy>
<Copy k="mark.gap">Type a number here</Copy>

<Copy k="ui.addComment">Add a comment</Copy>
<Copy k="ui.claudeTag">@Claude</Copy>
<Copy k="ui.sendToClaude">Send to Claude</Copy>
<Copy k="ui.yourComment">Your comment</Copy>
<Copy k="ui.now">now</Copy>
<Copy k="ui.claude">Claude</Copy>
<Copy k="ui.working">Working…</Copy>
<Copy k="ui.sentToast">Sent to Claude.</Copy>

<Copy k="panel.text">Text</Copy>
<Copy k="panel.textStyle">Text style</Copy>
<Copy k="panel.styleButton">Button</Copy>
<Copy k="panel.color">Color</Copy>

<Copy k="comment.text">
  Add an empty state for when there are no notifications
</Copy>
<Copy k="claude.reply">
  I added an Empty state artboard next to Split view. It shows the Approvals
  filter with nothing waiting: a short message, when you were last caught up,
  and a button back to all notifications.
</Copy>

<Copy k="aria.pick.filters">Select the row of filters</Copy>
<Copy k="aria.deselect">Empty canvas: click to deselect</Copy>
<Copy k="aria.dir.row">Left to right</Copy>
<Copy k="aria.dir.column">Top to bottom</Copy>
<Copy k="aria.commentList">Comment on the list</Copy>
<Copy k="aria.moveLeft">Move Approvals left</Copy>
<Copy k="aria.moveRight">Move Approvals right</Copy>
<Copy k="aria.moveUp">Move Approvals up</Copy>
<Copy k="aria.moveDown">Move Approvals down</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 9f6c578debc7107f */}
<Copy k="widget.description">
  Exercise: refine a sample notification center on the Claude Design canvas in
  three steps. First the learner selects a row of filters on an artboard and
  types a new gap value in Properties. Next they move one filter to a new
  place in the row, with arrow buttons that stand in for dragging in the
  product. Last, with comments on, they pick the list and send Claude a
  comment asking for an empty state. It teaches how to change a design by
  hand, with changes saved as you make them, and how to comment on one element
  with Send to Claude checked, so Claude makes the change and replies in the
  comment thread.
</Copy>
<Copy k="widget.summary">
  Exercise: refine a sample design on its artboards by changing spacing in
  Properties, moving an element, and sending Claude a comment. It teaches
  changing a design by hand and by comment.
</Copy>
`;export{e as default};