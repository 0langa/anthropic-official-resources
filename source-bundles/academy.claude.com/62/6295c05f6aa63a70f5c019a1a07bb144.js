var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SteerADeck.tsx. Keys are machine identifiers:
    translate only the text between the tags. \`{n}\` and \`{total}\` are runtime
    placeholders and must survive verbatim.
    \`step.progress\` is the step count. The \`task\` keys are the one instruction
    for each step, and the \`caption\` keys are the result line that replaces it
    when the step is finished. The \`action\` keys are the page's own button.
    The \`aria\` keys name the two controls the reader uses on the slide, and
    \`mark.chart\` is the page's own marker over the chart in step 2. The \`ui\`
    keys are labels inside the simulated Claude window, in the product's own
    wording; \`ui.claudeTag\` stays as it is in every language. The \`chat\` and
    \`claude\` keys are the simulated request and Claude's replies.
    The company and the figures in the deck are demo data and live in the
    code. */}

<Copy k="step.progress">
  {n} of {total}
</Copy>

<Copy k="task.hand">Double-click the slide’s title and type over it.</Copy>
<Copy k="task.comment">
  Comments are on. Click the chart, then send the comment.
</Copy>
<Copy k="task.ask">Send the request that is waiting in the message box.</Copy>

<Copy k="caption.hand.done">
  Saved. The thumbnail under the slide already shows your new title.
</Copy>
<Copy k="caption.comment.done">
  Claude changed the chart you pointed at and replied in the thread.
</Copy>
<Copy k="caption.end">
  One request in the conversation changed the whole deck.
</Copy>

<Copy k="action.next">Next</Copy>
<Copy k="action.restart">Start over</Copy>

<Copy k="aria.title">
  Slide title. Double-click it or press Enter, then type to change it.
</Copy>
<Copy k="aria.chart">Comment on the revenue chart</Copy>
<Copy k="mark.chart">Click the chart</Copy>

<Copy k="ui.saving">Saving…</Copy>
<Copy k="ui.commentAria">Add a comment</Copy>
<Copy k="ui.claudeTag">@Claude</Copy>
<Copy k="ui.commentDraft">
  Show this as change from last quarter, by segment
</Copy>
<Copy k="ui.sendToClaude">Send to Claude</Copy>
<Copy k="ui.working">Working…</Copy>
<Copy k="ui.claude">Claude</Copy>
<Copy k="ui.now">now</Copy>
<Copy k="ui.pin">Your comment</Copy>
<Copy k="ui.composerPlaceholder">Write a message…</Copy>

<Copy k="chat.last">
  Here’s the Q3 review as a six-slide deck, with one chart per slide and the
  source under each. Edit it directly, or tell me what to change.
</Copy>
<Copy k="chat.ask">
  Cut this to a three-slide version for the executive summary.
</Copy>
<Copy k="chat.reply">
  Done. It’s now three slides: the result against plan, the two risks to Q4, and
  the Q4 commitments.
</Copy>
<Copy k="claude.commentReply">
  Changed the chart to show each segment’s change from Q2, and updated the note
  beside it to match.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 478daa578fbf5255 */}
<Copy k="widget.description">
  Exercise: change one sample deck in three ways, one step at a time, in a
  simulated Claude Slides window. First the learner retypes a slide's title by
  hand. Next, with comments on, they pick the chart on the slide and send
  Claude a comment asking for a different view of the data. Last, they send a
  request in the conversation beside the deck for a shorter version. It
  teaches which way suits which change: edit by hand to change a slide
  yourself, saved as you make the change, comment to change one part of a
  slide, with Claude replying in the comment thread, and ask in the
  conversation to change the whole deck.
</Copy>
<Copy k="widget.summary">
  Exercise: change one sample deck by hand, with a comment to Claude, and by
  asking in the conversation, to learn which way suits which change.
</Copy>
`;export{e as default};