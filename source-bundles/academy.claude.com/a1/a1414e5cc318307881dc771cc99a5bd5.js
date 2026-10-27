var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FindFunders.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{count}\` is a number of files
    and must survive verbatim. The \`caption.*\` texts are side notes about
    Kofi, in the third person. The \`activity.*\` and \`box.*\` texts are the
    product's own labels. \`ask.text\` is the person's recorded message,
    whole. Every other text (\`short.*\`, \`list.*\`, \`check.*\`, \`entry.*\`,
    \`rest.*\`, \`card.*\`) is Claude's, shown in part, word for word, from the
    recording, a run of the
    funder and grant research skill on fictional documents: whole
    sentences, bullets, sections and two columns of the table ("My read"
    and "Source") are left out, and none is reworded. The sentence that
    names a state is left out. Do not shorten or join Claude's sentences
    here. Web addresses and file names inside Claude's words stay as they
    are. The \`card.*\` texts are the three questions on Claude's card and
    their choices, as written. The recording ends on the card, so the
    walkthrough shows no answer. In the recording the person attached the
    two documents to the message, memory was off and no tool was connected.
    The picture shows the message without file tiles, then Claude reading
    the two documents. Every organization, person and web address is
    fictional. */}

<Copy k="stageAlt">
  Kofi asks Claude to find funders that fit the Reading Room, Maple Hollow's
  reading program, and to skip anyone who already funds Maple Hollow. Claude
  reads two of Kofi's documents, Maple Hollow's list of current funders and
  its program description. Then it searches the web. Parts of Claude's reply
  are shown, and other parts are left out. First, Claude says it found five
  funders and left out the three that already fund Maple Hollow. It says to
  approach the Wren and Alder Family Foundation first, because it funds
  reading programs for Maple Hollow's grades in Maple Hollow's county and
  anyone may send it a letter of inquiry. It says the funder decides who is
  eligible, so the fit is Claude's reading and not a ruling. Second, a table
  gives the short list of five, best fit first, with what each funder gives
  and its next date. The Wren and Alder Family Foundation gives up to $40,000
  for one year, and its letter of inquiry is due December 12, 2026. The
  Sycamore Region Community Foundation gives $5,000 to $25,000 and its
  application form opens January 5, 2027. Harvest Lane Grocers Community Fund
  gives $2,500 to $10,000, and its next review is January 15, 2027. The City
  of Hollow Bend gives up to $60,000, with applications due November 14, 2026.
  The Tri-County Fund for Children makes typical grants of $20,000 to $40,000,
  by invitation only. Third, Claude lists what to check before Kofi approaches
  each funder. For the Wren and Alder Family Foundation it names the page it
  read, says what the foundation looks for, and gives the foundation's four
  rules for who can apply. It says Kofi's files don't give Maple Hollow's tax
  status, how long Maple Hollow has run, or Maple Hollow's whole budget.
  Fourth, Claude says what two funders' pages don't tell it. The Harvest Lane
  page doesn't say when a request must arrive or what the money can pay for.
  The Tri-County page doesn't name its three counties, and Claude searched for
  its grantees and found none listed. Fifth, Claude asks on a card the three
  questions it still needs answered. The card shows the first of its three
  questions, which asks for Maple Hollow's whole operating budget this year.
  The choices are about $126,000, more than $126,000 but under $1 million, $1
  million or more, and not sure. The card is not answered.
</Copy>
<Copy k="caption.ask">Kofi tells Claude to skip anyone who already funds Maple Hollow</Copy>
<Copy k="caption.search">Claude reads Kofi's two documents, then searches the web</Copy>
<Copy k="caption.short">Claude starts with a summary: who to approach first, and why</Copy>
<Copy k="caption.list">Claude lists the five funders in a table, with grant amounts and dates</Copy>
<Copy k="caption.entry">Claude cites the funder's website, lists its eligibility requirements, and tells Kofi what's missing</Copy>
<Copy k="caption.rest">Claude tells Kofi which details it couldn't confirm</Copy>
<Copy k="caption.card">Claude asks Kofi three questions that the documents don't answer</Copy>

<Copy k="box.placeholder">How can I help you today?</Copy>
<Copy k="box.add">Add files</Copy>
<Copy k="box.send">Send message</Copy>
<Copy k="actions.label">Message actions</Copy>
<Copy k="ask.text">
  Can you find funders that fit the Reading Room, and skip anyone who
  already funds us? I want a short list so I can decide who to approach
  first.
</Copy>
<Copy k="activity.reading">Reading files</Copy>
<Copy k="activity.read">Read {count} files</Copy>
<Copy k="activity.readOne">Read</Copy>
<Copy k="activity.searching">Searching the web</Copy>
<Copy k="activity.searched">Searched the web</Copy>

<Copy k="short.found">
  I found five funders for the Reading Room and left out the three that
  already fund you.
</Copy>
<Copy k="short.first">
  Approach the Wren and Alder Family Foundation first.
</Copy>
<Copy k="short.why">
  It funds reading programs for your grades in your county, and anyone may
  send it a letter of inquiry.
</Copy>
<Copy k="short.reading">
  The funder decides who is eligible, so "fit" below is my reading, not a
  ruling.
</Copy>

<Copy k="list.title">Short list, best fit first</Copy>
<Copy k="list.head.funder">Funder</Copy>
<Copy k="list.head.gives">Gives</Copy>
<Copy k="list.head.date">Next date</Copy>
<Copy k="list.funder1">
  Wren and Alder Family Foundation, 2027 Family Literacy Grant
</Copy>
<Copy k="list.gives1">Up to $40,000 for one year</Copy>
<Copy k="list.date1">
  Letter of inquiry due December 12, 2026, 5 p.m. Eastern
</Copy>
<Copy k="list.funder2">
  Sycamore Region Community Foundation, Education Fund
</Copy>
<Copy k="list.gives2">$5,000 to $25,000</Copy>
<Copy k="list.date2">Opens January 5, 2027. Closes February 20, 2027</Copy>
<Copy k="list.funder3">Harvest Lane Grocers Community Fund</Copy>
<Copy k="list.gives3">$2,500 to $10,000</Copy>
<Copy k="list.date3">Next quarterly review is January 15, 2027</Copy>
<Copy k="list.funder4">
  City of Hollow Bend, 2027 Youth Partnership Grant
</Copy>
<Copy k="list.gives4">Up to $60,000</Copy>
<Copy k="list.date4">Due November 14, 2026, 4 p.m.</Copy>
<Copy k="list.funder5">Tri-County Fund for Children</Copy>
<Copy k="list.gives5">Typical grants $20,000 to $40,000</Copy>
<Copy k="list.date5">None. Invitation only</Copy>

<Copy k="check.title">What to check before you approach each one</Copy>
<Copy k="entry.name">1. Wren and Alder Family Foundation</Copy>
<Copy k="entry.source">
  (source for all of this:
  https://wrenalder.example/grants/family-literacy-2027)
</Copy>
<Copy k="entry.item1">
  It looks for fall-to-spring reading results, families brought into the
  reading, and more demand than places.
</Copy>
<Copy k="entry.item2">
  It has four rules for who can apply: a 501(c)(3) based in Maple or
  Tamarack County, a program for kindergarten to grade 5, at least three
  years running, and an operating budget under $1 million. Your files don't
  give your tax status, how long you have run, or the organization's whole
  budget.
</Copy>

<Copy k="rest.third.name">3. Harvest Lane Grocers Community Fund</Copy>
<Copy k="rest.third.source">
  (source: https://harvestlane.example/community-fund)
</Copy>
<Copy k="rest.third.item">
  The page doesn't say when a request must arrive to make the January 15
  review, or what the money can pay for.
</Copy>
<Copy k="rest.fifth.name">5. Tri-County Fund for Children</Copy>
<Copy k="rest.fifth.source">
  (source: https://tricountychildren.example/how-we-give)
</Copy>
<Copy k="rest.fifth.item">
  The page doesn't name its three counties, so I can't confirm Maple County
  is one. I searched for its grantees and found none listed.
</Copy>

<Copy k="card.intro">Three answers would settle the open points above.</Copy>
<Copy k="card.budget">
  What is the organization's whole operating budget this year?
</Copy>
<Copy k="card.budget.opt1">
  About $126,000. The Reading Room is all we do
</Copy>
<Copy k="card.budget.opt2">More than $126,000 but under $1 million</Copy>
<Copy k="card.budget.opt3">$1 million or more</Copy>
<Copy k="card.budget.opt4">Not sure</Copy>
<Copy k="card.agreement">
  Do you have a signed agreement (MOU) with the Hollow Bend School District?
</Copy>
<Copy k="card.agreement.opt1">Yes, signed and current</Copy>
<Copy k="card.agreement.opt2">
  We work with the district, but nothing is signed
</Copy>
<Copy k="card.agreement.opt3">No</Copy>
<Copy k="card.agreement.opt4">Not sure</Copy>
<Copy k="card.status">
  Is the organization a 501(c)(3) that has been running for three years or
  more?
</Copy>
<Copy k="card.status.opt1">Yes to both</Copy>
<Copy k="card.status.opt2">It is a 501(c)(3), but under three years old</Copy>
<Copy k="card.status.opt3">We work under a fiscal sponsor</Copy>
<Copy k="card.status.opt4">Not sure</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 763965360ab9cafa */}
<Copy k="widget.description">
  Walkthrough: a Claude chat where the user asks Claude to
  find funders for an organization's reading program, while excluding any
  funder that already supports it and attaching the organization's
  current-funders list and program description. Claude reads the documents,
  searches the web, then replies: a short summary naming which funder to
  approach first and why, a table ranking a short list of funders with what
  each gives and its next deadline, eligibility details and missing
  information for the top funder, and what Claude could not confirm from two
  funders' websites. The reply ends with Claude asking follow-up questions it
  still needs answered, left unanswered. It teaches how Claude researches
  funder fit, cites sources, flags unconfirmed details, and surfaces gaps a
  fundraiser should verify before approaching a funder.
</Copy>
<Copy k="widget.summary">
  Walkthrough: the user asks Claude to find funders for a reading program,
  excluding current funders. Step through Claude reading documents, searching
  the web, ranking funders with eligibility details, and flagging unconfirmed
  information before asking follow-up questions.
</Copy>
`;export{e as default};