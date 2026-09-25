var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ChannelAtWork.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: \`{tag}\` is the @Claude mention
    the widget draws, \`{link}\` is a linked phrase whose text is the
    \`.link\` sub-key. Person names (Alex, Priya, Tomás, Maya, Sam, Marcus,
    Jordan, Maria, Jae, Erin), #channel names and file names are simulated
    data: keep them as they are. The \`.caption\` texts also set how long each
    beat holds on screen, so keep them caption-short. */}

<Copy k="pickTeam">Pick a team</Copy>
<Copy k="onIt">On it.</Copy>

{/* ---- Sales: an account team gets ready for a renewal call ---- */}

<Copy k="sales.tab">Sales</Copy>
<Copy k="sales.lead">An account team gets ready for a renewal call.</Copy>
<Copy k="sales.note">Public channel · CRM and warehouse connected</Copy>
<Copy k="sales.label">
  In #acme-renewal, a public channel with the CRM and the data warehouse
  connected, Alex says the renewal call is Thursday and usage has dipped;
  Priya notes the QBR thread above. Priya tags Claude: prep us for Thursday
  with the account state and open items from the CRM, what changed since the
  QBR, and three questions to ask. Claude posts its plan and works through
  it: reads the channel's Acme threads, pulls the record and open items from
  the CRM, charts usage by team from the warehouse, posts the brief. It posts
  a call brief as a document in the thread with a usage chart. Alex, without
  tagging, asks it to add the new champion and keep the brief current; Claude
  does. Tomás tells Claude to remember that every call brief ends with three
  questions; Claude saves it to the channel’s notes.
</Copy>

<Copy k="sales.context.caption">The team is already discussing it here</Copy>
<Copy k="sales.context.msg1">
  Renewal call with Acme is Thursday. Maria says their usage dipped.
</Copy>
<Copy k="sales.context.msg2">QBR notes are in the thread above.</Copy>

<Copy k="sales.ask.caption">One message hands Claude the whole job</Copy>
<Copy k="sales.ask.text">
  {tag} prep us for Thursday: Acme’s account state and open items from the
  CRM, what changed since the QBR, and three questions we should ask.
</Copy>

<Copy k="sales.plan.caption">It reads the channel and works in the team’s tools</Copy>
<Copy k="sales.plan.step1">Read this channel’s Acme threads</Copy>
<Copy k="sales.plan.step2">Pull the record and open items</Copy>
<Copy k="sales.plan.chip2">CRM</Copy>
<Copy k="sales.plan.step3">Chart usage by team, last quarter</Copy>
<Copy k="sales.plan.chip3">Warehouse</Copy>
<Copy k="sales.plan.step4">Post the brief here</Copy>

<Copy k="sales.post.caption">Back come a brief and a chart, not just a reply</Copy>
<Copy k="sales.post.text">
  Brief posted. Renewal in 71 days; usage is down over three weeks, all in
  their data team; two open items. Three questions at the end.
</Copy>
<Copy k="sales.post.out1.title">Acme renewal call brief</Copy>
<Copy k="sales.post.out1.meta">Document · in this thread</Copy>
<Copy k="sales.post.out2.title">Usage by team, last quarter</Copy>
<Copy k="sales.post.out2.meta">PNG</Copy>
<Copy k="sales.chart.label1">Data</Copy>
<Copy k="sales.chart.label2">Ops</Copy>
<Copy k="sales.chart.label3">Finance</Copy>

<Copy k="sales.steer1.caption">A colleague steers it; no new tag needed</Copy>
<Copy k="sales.steer1.text">
  Add that Jae replaced Maria as our champion, and keep this current until
  Thursday.
</Copy>
<Copy k="sales.steer1.reply">Added. I’ll update the brief as this thread changes.</Copy>

<Copy k="sales.steer2.caption">The team’s standard, saved for every brief here</Copy>
<Copy k="sales.steer2.capPhrase">The team’s standard</Copy>
<Copy k="sales.steer2.capRest">, saved to {link} for every brief here</Copy>
<Copy k="sales.steer2.capRest.link">the channel’s notes</Copy>
<Copy k="sales.steer2.text">
  {tag} remember for this channel: every call brief ends with three questions
  to ask.
</Copy>
<Copy k="sales.steer2.reply">Saved to this channel’s notes.</Copy>

{/* ---- Marketing: a campaign brief for a feature launch ---- */}

<Copy k="marketing.tab">Marketing</Copy>
<Copy k="marketing.lead">A marketing team plans the campaign for a feature launch.</Copy>
<Copy k="marketing.note">Public channel · Warehouse and CRM connected</Copy>
<Copy k="marketing.label">
  In #fall-campaign, a public channel with the data warehouse and the CRM
  connected, Priya says the scheduling feature ships mid-October and the
  brief is due this week; Sam says product's decisions are in
  #product-launches and the tone rules in #positioning. Maya tags Claude:
  draft the campaign brief from this thread, using what product decided in
  #product-launches and the tone rules in #positioning, with beta adoption by
  segment. Claude reads the thread, searches the two public channels, queries
  adoption from the warehouse, and posts the brief as a page it keeps
  current, with an adoption chart. Priya, without tagging, corrects the
  audience; Claude updates the page. Meanwhile in a new thread Sam asks
  Claude to pull the mid-market beta accounts from the CRM into a send list;
  Claude attaches a CSV.
</Copy>

<Copy k="marketing.context.caption">The decisions are spread across channels</Copy>
<Copy k="marketing.context.msg1">
  Scheduling ships mid-October. We need the campaign brief this week.
</Copy>
<Copy k="marketing.context.msg2">
  Product’s calls are in #product-launches; the tone rules PMM agreed are in
  #positioning.
</Copy>

<Copy k="marketing.ask.caption">The discussion becomes the request</Copy>
<Copy k="marketing.ask.text">
  {tag} draft the campaign brief from this thread. Use what product decided
  in #product-launches and the tone rules in #positioning, and include beta
  adoption by segment.
</Copy>

<Copy k="marketing.plan.caption">Searches public channels, queries the warehouse</Copy>
<Copy k="marketing.plan.step1">Read this thread</Copy>
<Copy k="marketing.plan.step2">Search</Copy>
<Copy k="marketing.plan.chip2">#product-launches · #positioning</Copy>
<Copy k="marketing.plan.step3">Beta adoption by segment</Copy>
<Copy k="marketing.plan.chip3">Warehouse</Copy>
<Copy k="marketing.plan.step4">Post the brief as a page</Copy>

<Copy k="marketing.post.caption">A page the whole channel can open, kept current</Copy>
<Copy k="marketing.post.capPhrase">A page the whole channel can open</Copy>
<Copy k="marketing.post.capRest">, {link}</Copy>
<Copy k="marketing.post.capRest.link">kept current</Copy>
<Copy k="marketing.post.text">
  Brief is up: audience, message, channels, timeline. Adoption is strongest
  in mid-market. I’ll keep the page current; post corrections in this thread.
</Copy>
<Copy k="marketing.post.out1.title">Fall campaign brief</Copy>
<Copy k="marketing.post.out1.meta">Page · kept current</Copy>
<Copy k="marketing.chart.label1">SMB</Copy>
<Copy k="marketing.chart.label2">Mid-market</Copy>
<Copy k="marketing.chart.label3">Enterprise</Copy>

<Copy k="marketing.steer1.caption">Corrections go in the thread</Copy>
<Copy k="marketing.steer1.text">Audience is workspace admins, not end users.</Copy>
<Copy k="marketing.steer1.reply">Updated the audience and the message sections.</Copy>

<Copy k="marketing.steer2.divider">Meanwhile · a new thread in #fall-campaign</Copy>
<Copy k="marketing.steer2.caption">A second job runs in parallel</Copy>
<Copy k="marketing.steer2.text">
  {tag} pull the mid-market accounts on the beta from the CRM into a send
  list.
</Copy>
<Copy k="marketing.steer2.reply">142 accounts, attached.</Copy>
<Copy k="marketing.steer2.out1.meta">CSV · from the CRM</Copy>

{/* ---- Finance: a spend question before budget review ---- */}

<Copy k="finance.tab">Finance</Copy>
<Copy k="finance.lead">Finance gets a spend question before budget review.</Copy>
<Copy k="finance.note">Public channel · Warehouse connected</Copy>
<Copy k="finance.label">
  In #finance, a public channel with the data warehouse connected, Marcus
  says budget review is Thursday and he needs August; Jordan says the August
  invoice is in and compute is well above July. Marcus tags Claude: why did
  cloud spend jump last month, post a chart and the two biggest drivers.
  Claude compares July and August in the billing export and posts a chart
  with the two drivers. Jordan, without tagging, says the retention change
  was planned and asks for the trend without it; Claude updates the chart.
  Marcus asks Claude to turn this into a one-page note for Thursday and to
  post the chart on the first Monday of each month; Claude attaches the note
  and confirms the routine.
</Copy>

<Copy k="finance.context.caption">A question is forming before Thursday’s review</Copy>
<Copy k="finance.context.msg1">Budget review is Thursday. I need August before then.</Copy>
<Copy k="finance.context.msg2">August invoice is in. Compute is well above July.</Copy>

<Copy k="finance.ask.caption">Ask for the answer and the form you want</Copy>
<Copy k="finance.ask.text">
  {tag} why did cloud spend jump last month? Post a chart and the two biggest
  drivers.
</Copy>

<Copy k="finance.plan.caption">Claude runs the query itself</Copy>
<Copy k="finance.plan.step1">Compare July and August in the billing export</Copy>
<Copy k="finance.plan.chip1">Warehouse</Copy>
<Copy k="finance.plan.step2">Post the chart here</Copy>

<Copy k="finance.post.caption">A chart in the thread, not a paragraph</Copy>
<Copy k="finance.post.text">
  August is up 18% on July. Two drivers: data-pipeline compute and a storage
  retention change.
</Copy>
<Copy k="finance.post.out1.title">Cloud spend by month</Copy>
<Copy k="finance.post.out1.meta">PNG</Copy>
<Copy k="finance.chart.jul">Jul</Copy>
<Copy k="finance.chart.aug">Aug</Copy>

<Copy k="finance.steer1.caption">A colleague refines it, still no tag</Copy>
<Copy k="finance.steer1.text">
  The retention change was planned. Show the trend without it.
</Copy>
<Copy k="finance.steer1.reply">
  Without it: up 13%, all pipeline compute. Chart updated above.
</Copy>

<Copy k="finance.steer2.caption">The thread becomes a note, and a routine</Copy>
<Copy k="finance.steer2.capPhrase">The thread becomes a note</Copy>
<Copy k="finance.steer2.capRest">, and a {link} (lesson 8)</Copy>
<Copy k="finance.steer2.capRest.link">routine</Copy>
<Copy k="finance.steer2.text">
  {tag} turn this into a one-page note for Thursday, and post this chart here
  on the first Monday of each month.
</Copy>
<Copy k="finance.steer2.reply">
  Note attached. Scheduled: the spend chart, first Monday of each month, in
  this channel.
</Copy>
<Copy k="finance.steer2.out1.title">August cloud spend note</Copy>
<Copy k="finance.steer2.out1.meta">Document · in this thread</Copy>
<Copy k="finance.steer2.out2.title">Monthly spend chart</Copy>
<Copy k="finance.steer2.out2.meta">Routine · first Monday</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: bbfd8e796564dfaf */}
<Copy k="widget.description">
  Film: the learner picks a sales, marketing, or finance team and watches one
  piece of work in that team's public channel. A teammate tags Claude into a
  discussion, and Claude plans the work, uses the channel's connected tools,
  such as a CRM or a data warehouse, and posts a document, a page, or a chart
  in the thread. A colleague corrects or adds to it without tagging Claude,
  and Claude updates it. Then the sales team has Claude save a standard for
  its briefs to the channel's notes, the marketing team starts a second job in
  a new thread, and the finance team asks for a one-page document and a
  monthly routine. It shows that in a public channel the whole team can see
  and steer the work, and what Claude saves to the channel's notes helps
  everyone there.
</Copy>
<Copy k="widget.summary">
  Film: pick a sales, marketing, or finance team and watch Claude take a
  request in that team's public channel, use the connected tools, post
  results, and take corrections and follow-up requests from colleagues,
  showing how a team steers shared work.
</Copy>
`;export{e as default};