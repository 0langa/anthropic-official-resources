var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ThinkingPartnerSorter.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Which bucket each request
    belongs to is data in the widget; the request text and explanations
    live here under \`item.<id>.*\` (\`right\`/\`miss\` are the lead-ins for a
    correct/missed sort and carry the shared explanation as \`{why}\`). */}

<Copy k="kicker">Sort six requests</Copy>
<Copy k="title">Which of these needs a thinking partner?</Copy>
<Copy k="intro">
  People new to Claude often type into it the way they'd type into a search
  box. Here are six real requests. For each one, decide: could a search box
  handle it, or does it need Claude working through it with you? A couple
  are closer calls than they look.
</Copy>

<Copy k="progress.request">Request {n} of {total}</Copy>
<Copy k="progress.sorted">{count} of {total} sorted</Copy>
<Copy k="quoted">“{text}”</Copy>

<Copy k="ask">Search box, or thinking partner?</Copy>
<Copy k="opt.s.label">Search box</Copy>
<Copy k="opt.s.body">A search box could handle this</Copy>
<Copy k="opt.p.label">Thinking partner</Copy>
<Copy k="opt.p.body">This needs Claude working with me</Copy>

<Copy k="chip.s">Search-box territory</Copy>
<Copy k="chip.p">Thinking-partner work</Copy>
<Copy k="chip.trap">Thinking-partner work—typed like a search</Copy>
<Copy k="hand.s">The version that would need Claude</Copy>
<Copy k="hand.p">Same need, handed to Claude</Copy>

<Copy k="hint.pick">Pick one to see the answer.</Copy>
<Copy k="btn.next">Next request</Copy>
<Copy k="btn.seeAll">See all six side by side</Copy>
<Copy k="btn.restart">Sort again</Copy>

<Copy k="item.rate.text">
  What's the exchange rate from US dollars to euros today?
</Copy>
<Copy k="item.rate.right">Right. {why}</Copy>
<Copy k="item.rate.miss">
  Claude will happily answer it—but this one doesn't need a partner. {why}
</Copy>
<Copy k="item.rate.why">
  One live fact from one authoritative source. This is a search box's home
  ground—nothing about you or your work changes the answer, so there's
  nothing extra for a thinking partner to bring.
</Copy>

<Copy k="item.draft.text">
  Rewrite my update below so the delay reads as a decision, not an apology.
</Copy>
<Copy k="item.draft.sub">(with your three-paragraph draft pasted underneath)</Copy>
<Copy k="item.draft.right">Right—this is the real thing. {why}</Copy>
<Copy k="item.draft.miss">Not quite—this one needs you in it. {why}</Copy>
<Copy k="item.draft.why">
  The work here is your draft plus a judgment about tone. Claude reads what
  you wrote, keeps your facts, and reframes the delivery—and if the first
  pass comes back too blunt, you say so and it adjusts. A search box would
  hand you an article about writing announcements.
</Copy>

<Copy k="item.qbr.text">
  best structure for a quarterly business review presentation
</Copy>
<Copy k="item.qbr.right">Right—and here's why it fools people: {why}</Copy>
<Copy k="item.qbr.miss">Fair—read literally, that is a search. {why}</Copy>
<Copy k="item.qbr.why">
  Typed like that, it is a search—and you'd get ten generic templates that
  don't know your quarter. That's how most people type it, which is exactly
  why the results disappoint.
</Copy>
<Copy k="item.qbr.hand">
  Here's last quarter's review and the two slides leadership pushed back on.
  Restructure the story for this quarter.
</Copy>

<Copy k="item.complaint.text">
  I've pasted a customer's complaint thread below. Help me work out what
  they're actually asking for before I reply.
</Copy>
<Copy k="item.complaint.right">Right. {why}</Copy>
<Copy k="item.complaint.miss">Not quite—this one needs you in it. {why}</Copy>
<Copy k="item.complaint.why">
  There's no page to look up. The answer comes from reading the thread you
  brought and reasoning about it—and from you correcting the first read:
  “no, they're not after a refund, they want a firm date.” That
  back-and-forth is the whole job.
</Copy>

<Copy k="item.po.text">
  What's the difference between a purchase order and an invoice?
</Copy>
<Copy k="item.po.right">Right, as typed. {why}</Copy>
<Copy k="item.po.miss">Close—as typed, it doesn't need you yet. {why}</Copy>
<Copy k="item.po.why">
  It's a definition—a search box or Claude gives you the same clean answer,
  and none of it is about you. It becomes thinking-partner work the moment
  your situation enters it.
</Copy>
<Copy k="item.po.hand">
  A vendor sent us an invoice with no PO attached. Given how our team handles
  approvals, what should we do next?
</Copy>

<Copy k="item.days.text">
  How many working days are there between March 3 and March 24?
</Copy>
<Copy k="item.days.right">Right. {why}</Copy>
<Copy k="item.days.miss">
  Claude will take it—but there's nothing here for a partner to do. {why}
</Copy>
<Copy k="item.days.why">
  Claude will answer this in one line—and so will a calendar or a search box.
  There's nothing of yours in the question, so there's nothing for a thinking
  partner to add. Not every request needs one.
</Copy>

<Copy k="final.title">The six, side by side</Copy>
<Copy k="final.body">
  The line was never the topic—reviews, invoices, exchange rates could all be
  typed into a search box. What separates the two columns is whether the
  answer needs {you} in it: your draft, your last deck, your read on the
  customer. A search box takes a question. Claude takes the situation.
</Copy>
<Copy k="final.body.you">you</Copy>
<Copy k="col.s">A search box handles these</Copy>
<Copy k="col.p">These need Claude—and you</Copy>
<Copy k="summary.all">
  You sorted all six the way the lesson would. The two that trip most people
  are the review structure and the invoice question—same need, typed as a
  query or handed over as a situation.
</Copy>
<Copy k="summary.some">
  You'd have sorted {count} of {total} this way going in. The ones that trip
  most people are the review structure and the invoice question—same need,
  typed as a query or handed over as a situation.
</Copy>
`;export{e as default};