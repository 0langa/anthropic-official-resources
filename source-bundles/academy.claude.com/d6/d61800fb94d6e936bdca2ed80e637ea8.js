var e=`---
kind: widget-copy
---

{/* Copy shared by the widgets in this folder. It merges under each widget's own
    copy file, so these labels are translated once. Keys are machine
    identifiers: translate only the text between the tags. \`{n}\` and \`{title}\`
    are runtime placeholders and must survive verbatim.
    \`chat.request\` is the simulated request the deck was made from. The \`ui\`
    keys are labels inside the simulated Claude window, in the product's own
    wording: the deck's card in the conversation, the Share button, the text
    style of a slide's title, and the accessible names of the thumbnail strip
    and of each thumbnail. */}

<Copy k="chat.request">
  Pull Q3 revenue, new customers and churn for my accounts from our CRM and make
  a quarterly review deck for regional leadership. Keep it to one chart per
  slide.
</Copy>

<Copy k="ui.kindSlides">Claude Slides</Copy>
<Copy k="ui.onlyYou">Only you</Copy>
<Copy k="ui.hide">Hide</Copy>
<Copy k="ui.share">Share</Copy>
<Copy k="ui.textStyle">Heading 2</Copy>
<Copy k="ui.slides">Slides</Copy>
<Copy k="ui.slideN">
  Slide {n}: {title}
</Copy>
`;export{e as default};