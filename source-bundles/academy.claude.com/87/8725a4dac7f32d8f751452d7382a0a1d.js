var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed3.tsx — the cash-flow reconciliation chat
    (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. The diagram's dollar
    amounts live in the widget as data. \`note.<id>.line1…n\` are hand-written
    margin notes and \`rule1…n\` the rule box, each key drawn as one line (the
    drawing cannot wrap text): translate line by line — the number of lines
    is fixed — and keep each line about as short as the English. */}

<Copy k="user">
  I keep memorizing that depreciation gets added back on the cash flow
  statement, but I don't get why. Show me what's actually happening between
  net income and the operating section — I want to see the connection, not
  just the rule.
</Copy>

<Copy k="p1">
  The cash flow statement's operating section is a {recon} — a bridge between
  two numbers. That makes it inherently spatial: there's a starting point (net
  income), an endpoint (cash), and every line in between is a correction with
  a specific source. Text explanations force you to hold the income statement,
  the balance sheet, and the cash flow statement in your head simultaneously.
  A marked-up visual lets you {see} the arrows between them.
</Copy>
<Copy k="p1.recon">reconciliation</Copy>
<Copy k="p1.see">see</Copy>

<Copy k="p2">
  Every adjustment line answers the same question: {question} Stop memorizing
  signs — ask "did this help or hurt my bank balance compared to what the
  income statement claims?" and the sign follows automatically.
</Copy>
<Copy k="p2.question">
  did accrual accounting get ahead of (or behind) the actual cash?
</Copy>

<Copy k="aria.visual">
  Income statement linked to cash from operations with annotations
</Copy>

<Copy k="is.title">Income statement (accrual)</Copy>
<Copy k="is.revenue">Revenue</Copy>
<Copy k="is.cogs">COGS</Copy>
<Copy k="is.dep">Depreciation</Copy>
<Copy k="is.other">Other expenses</Copy>
<Copy k="netIncome">Net income</Copy>

<Copy k="cf.title">Cash from operating activities</Copy>
<Copy k="cf.adjust">Adjustments to reconcile to cash:</Copy>
<Copy k="cf.dep">+ Depreciation</Copy>
<Copy k="cf.ar">− Increase in A/R</Copy>
<Copy k="cf.inv">− Increase in inventory</Copy>
<Copy k="cf.ap">+ Increase in A/P</Copy>
<Copy k="cf.total">Net cash from operations</Copy>

<Copy k="ask.dep">
  Explain why depreciation is considered a non-cash expense in more detail
</Copy>
<Copy k="ask.ar">
  Walk me through an example where A/R decreases instead of increases
</Copy>
<Copy k="ask.ap">
  Why is accounts payable going up good for cash but bad long-term?
</Copy>

<Copy k="note.step.line1">step 1: start with</Copy>
<Copy k="note.step.line2">accrual profit</Copy>
<Copy k="note.dep.line1">this $3k reduced</Copy>
<Copy k="note.dep.line2">profit on paper</Copy>
<Copy k="note.dep.line3">but NO cash moved.</Copy>
<Copy k="note.addBack.line1">ADD BACK to undo</Copy>
<Copy k="note.addBack.line2">the subtraction.</Copy>
<Copy k="note.ar.line1">A/R ↑ $4k means:</Copy>
<Copy k="note.ar.line2">$4k of that $50k</Copy>
<Copy k="note.ar.line3">revenue is still an</Copy>
<Copy k="note.ar.line4">IOU, not cash.</Copy>
<Copy k="note.subtract.line1">Net income overstates</Copy>
<Copy k="note.subtract.line2">cash. SUBTRACT.</Copy>
<Copy k="note.ap.line1">A/P ↑ $1.5k: expense</Copy>
<Copy k="note.ap.line2">booked, bill not paid.</Copy>
<Copy k="note.ap.line3">Cash still here. ADD.</Copy>
<Copy k="note.mirror.line1">(mirror of A/R)</Copy>
<Copy k="note.sum.line1">accrual $12k →</Copy>
<Copy k="note.sum.line2">actual cash $10.5k</Copy>

<Copy k="rule.title">The only rule you need</Copy>
<Copy k="rule1">
  Non-cash expense (depreciation, amortization, stock comp) → always ADD BACK
</Copy>
<Copy k="rule2">
  Operating ASSET (A/R, inventory, prepaid) goes UP → SUBTRACT (cash tied up)
</Copy>
<Copy k="rule3">
  Operating LIABILITY (A/P, accrued wages) goes UP → ADD (cash still in
  pocket)
</Copy>

`;export{e as default};