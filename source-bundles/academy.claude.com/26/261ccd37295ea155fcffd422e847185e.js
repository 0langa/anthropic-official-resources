var e=`---
kind: widget-copy
---

{/* Film for the “Research an account before a call” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Research an account before a call</Copy>
<Copy k="sub">
  You have a customer call tomorrow and need a one-page brief on the account.
</Copy>

<Copy k="line.ask">
  Using the Sales plugin’s [[account research skill]], name your sources and
  ask for call openers.
</Copy>
<Copy k="line.does">
  Claude reads where you left off in the CRM first, then the filing, news and
  executive posts.
</Copy>
<Copy k="line.question">
  Claude reads where you left off in the CRM first, then the filing, news and
  executive posts.
</Copy>
<Copy k="line.get">
  Claude tells you what it read and found, then gives you the [[one-page
  brief]].
</Copy>
<Copy k="line.note1">
  Each change is dated and sourced, so you can check it first.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">dated and sourced</Copy>
<Copy k="line.note2">
  Each opener ties to something recent and to where you left off.
</Copy>
<Copy k="line.again">
  You can schedule it weekly so the next briefs are ready before your
  prospecting block.
</Copy>
<Copy k="line.close">
  You walk into the call knowing what changed and what to ask.
</Copy>

<Copy k="attachment1.title">Accounts / Northwind</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">last-call-notes.docx</Copy>
<Copy k="attachment2.sub">12 Mar call</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">northwind-10K-FY25.pdf</Copy>
<Copy k="attachment3.sub">Annual report</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Build a one-page brief on Northwind. Pull from Salesforce, news, the 10-K,
  exec LinkedIn posts, and our call notes. Cover what they do, what's changed
  in the last quarter, [[where we fit]], and [[three openers for the first
  call]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">Northwind Traders account and activity</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">last-call-notes.docx and account-plan.docx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">northwind-10K-FY25.pdf</Copy>
<Copy k="source4.verb">Searched</Copy>
<Copy k="source4.text">Northwind Traders news since June</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">LinkedIn posts by Northwind executives</Copy>

<Copy k="verb1">Reading the Salesforce account</Copy>
<Copy k="verb2">Reading the call notes</Copy>
<Copy k="verb3">Reading the 10-K</Copy>
<Copy k="verb4">Searching the web</Copy>
<Copy k="verb5">Reading executive posts</Copy>
<Copy k="verb6">Writing the brief</Copy>

<Copy k="reply.did1">read the account in Salesforce</Copy>
<Copy k="reply.did2">news and executive posts since June</Copy>
<Copy k="reply.did3">five dated changes and three openers</Copy>
<Copy k="reply.did4">could not confirm is flagged</Copy>
<Copy k="reply.text">
  I read the account in Salesforce, your call notes, the 10-K, and news and
  executive posts since June, and wrote the one-page brief: five dated changes
  and three openers. One thing I could not confirm is flagged: whether the
  planning budget now sits with the new COO.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when} on the next five accounts in my target list and save each
  brief to its folder under Accounts.
</Copy>
<Copy k="again.bubble.when">every Monday at 7am</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Weekly account briefs</Copy>
<Copy k="again.card.cadence">Mondays at 7:00 AM</Copy>
<Copy k="again.out1">Reads Salesforce and each account folder</Copy>
<Copy k="again.out2">Searches news and executive posts</Copy>
<Copy k="again.out3">Writes one brief per account</Copy>
<Copy k="again.out3.em">for the next five on your list</Copy>
`;export{e as default};