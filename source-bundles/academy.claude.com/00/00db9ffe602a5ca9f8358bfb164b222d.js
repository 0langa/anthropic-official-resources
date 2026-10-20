var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SteerAnArtifact.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    The widget has three tabs, one per way of changing a deck (\`tab.*\`).
    \`task.<tab>\` is the one sentence under the tabs saying what to do; it
    does not change as the reader acts. \`result.*\` is the line that appears
    under the simulated window once the reader has acted (tab 1 uses
    \`result.hand\`): what happened, then a link to the next tab (\`next.*\`).
    \`ui.*\` are labels inside the simulated Claude window and follow the
    product's own wording (\`ui.claudeTag\` stays as it is in every language).
    \`chat.*\` and \`claude.*\` are the simulated conversation. \`{title}\` in
    \`ui.summon\` is a runtime placeholder and must survive verbatim. "Q3" and
    "Northwind", a made-up company, stay as they are. The deck's content is
    demo data in _deck.tsx; \`deck.chart.*\` are its charts' screen-reader
    descriptions. */}

<Copy k="aria.root">Interactive: change a deck Claude made by hand, with a comment, and by asking</Copy>
<Copy k="aria.tabs">Ways to change the deck</Copy>
<Copy k="turn.restart">Start over</Copy>

<Copy k="tab.point">Edit it yourself</Copy>
<Copy k="tab.comment">Comment to Claude</Copy>
<Copy k="tab.whole">Ask for the whole deck</Copy>

<Copy k="task.point">
  Double-click the slide heading and change a word. It saves as you type.
</Copy>
<Copy k="task.comment">
  Click Comment, click the chart, then send the comment with Send to Claude
  checked.
</Copy>
<Copy k="task.whole">
  Send the message that is already typed and watch all the slides.
</Copy>

<Copy k="next.comment">Next: leave a comment</Copy>
<Copy k="next.whole">Next: change the whole deck</Copy>

<Copy k="result.hand">Saved as you typed. For a word or a number, this is quicker than asking.</Copy>

<Copy k="result.comment.lead">Claude answered on the chart, where you asked.</Copy>
<Copy k="result.comment.note">Without Send to Claude checked, the comment is a note for people, so Claude left it alone.</Copy>
<Copy k="result.comment.retry">Try it with the box checked</Copy>

<Copy k="result.whole.lead">One request restyled every slide; the words and numbers stayed the same.</Copy>

<Copy k="chat.origin">Make a review deck for regional leadership from the Q3 numbers in our CRM.</Copy>
<Copy k="claude.built">Here’s the Q3 review as a deck. Edit it directly or tell me what to change.</Copy>
<Copy k="ui.card.meta">Claude Slides · Only you</Copy>
<Copy k="ui.card.hide">Hide</Copy>
<Copy k="ui.thinking">Thinking…</Copy>
<Copy k="ui.working">Working…</Copy>
<Copy k="ui.replyPlaceholder">Write a message…</Copy>
<Copy k="ui.send">Send message</Copy>
<Copy k="ui.share">Share</Copy>
<Copy k="ui.saving">Saving…</Copy>
<Copy k="ui.comment">Comment</Copy>
<Copy k="ui.doneCommenting">Done commenting</Copy>
<Copy k="ui.slideTitleInput">Slide heading. Type to change it.</Copy>
<Copy k="ui.chartButton">Comment on this chart</Copy>
<Copy k="ui.commentPlaceholder">Add a comment</Copy>
<Copy k="ui.claudeTag">@Claude</Copy>
<Copy k="ui.addComment">Add comment</Copy>
<Copy k="ui.sendToClaude">Send to Claude</Copy>
<Copy k="ui.summon">Comment on “{title}” sent to Claude</Copy>
<Copy k="ui.step.replied">Replied to an artifact comment</Copy>
<Copy k="ui.you">You</Copy>
<Copy k="ui.now">now</Copy>
<Copy k="ui.claude">Claude</Copy>

<Copy k="ui.commentDraft">Show this as change from last quarter, by segment.</Copy>
<Copy k="claude.commentReply">
  Changed the chart to show each segment’s change from Q2, and updated the
  note beside it to match.
</Copy>
<Copy k="ui.restyleRequest">Restyle this deck in the Northwind design system.</Copy>
<Copy k="claude.restyleReply">
  Restyled all six slides with the Northwind design system. I changed the
  colors, type styles, and chart palette, and left the content as it was.
</Copy>

<Copy k="deck.chart.revenueByMonth">Bar chart of monthly revenue against plan for July, August, and September</Copy>
<Copy k="deck.chart.revenueChange">Bar chart of the change in revenue from Q2 to Q3 by customer segment</Copy>
<Copy k="deck.chart.customers">Bar chart of new customers in Q3 by segment</Copy>
<Copy k="deck.chart.churn">Line chart of monthly churn from April to September, falling from 2.8 to 1.9 percent</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 7fda88084ddaa988 */}
<Copy k="widget.description">
  Simulation: three ways to change a deck Claude made, each tried on the same
  sample quarterly review deck in a simulated Claude window. The learner edits
  a slide heading by hand, which saves as they type; leaves a comment on a
  chart with Send to Claude checked; and sends a message in the conversation
  that asks Claude to restyle the whole deck in a design system. After each
  move, a line says what happened. It teaches that you and Claude work on the
  same artifact, and that you pick the way that fits the size of the change: a
  small fix, one part, or the whole deck.
</Copy>
<Copy k="widget.summary">
  Simulation: change a sample deck three ways, by editing a heading yourself,
  sending Claude a comment on a chart, and asking for a restyle. Each way fits
  a different size of change.
</Copy>
`;export{e as default};