var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed3.tsx — "UX Lab: Apply the four
    principles" (see academy-web src/components/mdx/WidgetCopy.tsx). Keys
    are machine identifiers — translate ONLY the text between the tags.
    \`{name}\` tokens are runtime placeholders and must survive verbatim:
    prices, the order number, quantities and ETA minutes are the mock
    order's data and are filled in by the widget. The \`*.tip.*\` values are
    the hover annotations on the flawed ("bad") screens; the other mockup
    values are the depicted food-delivery app's own on-screen labels. */}

<Copy k="title">UX Lab: Apply the four principles</Copy>
<Copy k="intro">
  Each tab shows a food delivery screen with common UX problems AI generates
  by default. Hover over any element to discover what’s wrong — then click
  Show Fix to see how it should be built.
</Copy>
<Copy k="aria.tabs">UX principles</Copy>
<Copy k="principleOf">Principle {n} of {total}</Copy>
<Copy k="btn.showFix">Show Fix</Copy>
<Copy k="btn.reset">↻ Reset</Copy>

<Copy k="p.clarity.tab">Clarity</Copy>
<Copy k="p.clarity.name">Clarity</Copy>
<Copy k="p.clarity.desc">
  Every element should instantly communicate its purpose. Users shouldn’t
  have to guess what a button does or what a field means.
</Copy>
<Copy k="p.hierarchy.tab">Hierarchy</Copy>
<Copy k="p.hierarchy.name">Hierarchy</Copy>
<Copy k="p.hierarchy.desc">
  Visual weight should match information priority. The most important thing
  should look the most important.
</Copy>
<Copy k="p.accessibility.tab">Accessibility</Copy>
<Copy k="p.accessibility.name">Accessibility</Copy>
<Copy k="p.accessibility.desc">
  About 1 in 5 people has a disability — visual, cognitive, or neurological.
  AI generates for the median user. Small text, color-only signals, and
  jargon quietly exclude everyone else.
</Copy>
<Copy k="p.feedback.tab">Feedback</Copy>
<Copy k="p.feedback.name">Feedback</Copy>
<Copy k="p.feedback.desc">
  When something breaks, users need to know what happened, what to do next,
  and how to get help. A raw error code answers none of those questions.
</Copy>

{/* Shared mock-app labels */}
<Copy k="item.burger">Burger</Copy>
<Copy k="item.fries">Fries</Copy>
<Copy k="item.total">Total</Copy>
<Copy k="item.orderTotal">Order total</Copy>
<Copy k="col.item">Item</Copy>
<Copy k="col.price">Price</Copy>
<Copy k="appbar.help">Help</Copy>
<Copy k="orderNo">Order #{n}</Copy>
<Copy k="address">123 Main St, Apt 4B</Copy>

{/* Clarity */}
<Copy k="clarity.bad.tip.back">
  No destination label — users can’t tell where “back” goes
</Copy>
<Copy k="clarity.bad.tip.title">Generic title — what screen is this?</Copy>
<Copy k="clarity.bad.title">App</Copy>
<Copy k="clarity.bad.tip.menu">Unexplained icon — what does this open?</Copy>
<Copy k="clarity.bad.tip.price">No currency symbol — is this dollars?</Copy>
<Copy k="clarity.bad.tip.submit">
  Vague action — submit what? For how much?
</Copy>
<Copy k="clarity.bad.submit">Submit</Copy>
<Copy k="clarity.good.back">← Back to menu</Copy>
<Copy k="clarity.good.title">Order review</Copy>
<Copy k="clarity.good.cta">Place Order — {total}</Copy>

{/* Hierarchy */}
<Copy k="hier.bad.tip.total">
  Most critical info buried in a flat list — nothing stands out
</Copy>
<Copy k="hier.bad.total">Order total: {total}</Copy>
<Copy k="hier.bad.tip.eta">
  Same size as the order number — hard to find fast
</Copy>
<Copy k="hier.arriving">Arriving by 1:10 PM</Copy>
<Copy k="hier.breakdown">Subtotal {subtotal} + Delivery {delivery}</Copy>
<Copy k="hier.good.meta">{order} · {address}</Copy>

{/* Accessibility */}
<Copy k="a11y.bad.tip.status">
  Color only — no text label. Colorblind users cannot tell if this means
  confirmed or failed.
</Copy>
<Copy k="a11y.bad.tip.header">
  9px header text — unreadable for low vision users without screen
  magnification.
</Copy>
<Copy k="a11y.bad.tip.qty">
  “qty” is an abbreviation — creates friction for users with cognitive
  disabilities or limited literacy.
</Copy>
<Copy k="a11y.bad.qty">qty</Copy>
<Copy k="a11y.bad.tip.foot">
  9px text. “ETA” and “T&C” are jargon — neurodivergent users often need
  plain language to process confidently.
</Copy>
<Copy k="a11y.bad.foot">ETA: {mins} min · Cancellation per T&C</Copy>
<Copy k="a11y.good.status">✓ Order confirmed</Copy>
<Copy k="a11y.good.qty">Quantity</Copy>
<Copy k="a11y.good.foot">
  Arrives in approximately {mins} minutes · {cancel}
</Copy>
<Copy k="a11y.good.foot.cancel">Free cancellation — see details</Copy>

{/* Feedback */}
<Copy k="fb.title">Order Review</Copy>
<Copy k="fb.bad.tip.icon">
  No explanation — users don’t know if their order went through, failed, or
  is still pending.
</Copy>
<Copy k="fb.bad.tip.code">
  “503 Service Unavailable” is a server code. It means nothing to a user
  trying to order lunch.
</Copy>
<Copy k="fb.bad.error">Error 503</Copy>
<Copy k="fb.good.back">← Back</Copy>
<Copy k="fb.good.heading">We couldn’t place your order</Copy>
<Copy k="fb.good.body">
  Our payment system hit a snag. Your cart is saved — try again in a moment.
</Copy>
<Copy k="fb.good.retry">Try again →</Copy>
<Copy k="fb.good.trouble">Still having trouble?</Copy>
<Copy k="fb.good.support">Chat with support →</Copy>
`;export{e as default};