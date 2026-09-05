var e=`---
kind: widget-copy
---

{/* Film for the “Build an ‘Ask the company’ agent” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`prompt\` ends with \`opener.question\`, word
    for word. \`reply.did*\` are the phrases of the reply the film marks, in
    reading order: keep each one verbatim in \`reply.text\`. \`again.underline\`
    must be a word that appears in \`line.again\`. Company, people, file and
    channel names and the figures are simulated data: keep them as they are. */}

<Copy k="title">Build an ‘Ask the company’ agent</Copy>
<Copy k="sub">
  Your team keeps asking who owns what, and the answers are scattered.
</Copy>

<Copy k="line.ask">
  Ask the [[documentation skill]] one real question, with each source cited
  and an owner named.
</Copy>
<Copy k="line.does">
  Claude checks each place in turn: your reference files, the wiki, the code
  and the warehouse.
</Copy>
<Copy k="line.question">
  Claude checks each place in turn: your reference files, the wiki, the code
  and the warehouse.
</Copy>
<Copy k="line.get">
  You get the answer and the owner, with [[each source]] linked.
</Copy>
<Copy k="line.note1">
  The answer names the owner and links every source it used.
</Copy>
<Copy k="line.note2">
  Any source opens to the exact line behind the answer.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">exact line</Copy>
<Copy k="line.again">
  When the answer is right, ask Claude to save it as a skill the whole team
  can run.
</Copy>
<Copy k="line.close">
  Anyone on the team can ask who owns something and see the proof.
</Copy>

<Copy k="opener.question">Who owns the orders table?</Copy>
<Copy k="attachment1.title">Platform / ask-company</Copy>
<Copy k="attachment1.sub">2 reference files</Copy>
<Copy k="attachment1.tag">Folder</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Search our wiki, code and warehouse, [[cite the source]] for each part, and
  if you're not sure, [[tell me who to ask]]. Who owns the orders table?
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">service-catalog.yaml</Copy>
<Copy k="source2.verb">Searched</Copy>
<Copy k="source2.text">Confluence for “orders table”</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">orders-service / CODEOWNERS</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">COMMERCE.PUBLIC.ORDERS</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">team-directory.md</Copy>

<Copy k="verb1">Reading service-catalog.yaml</Copy>
<Copy k="verb2">Searching Confluence</Copy>
<Copy k="verb3">Reading CODEOWNERS</Copy>
<Copy k="verb4">Describing the orders table</Copy>
<Copy k="verb5">Reading team-directory.md</Copy>
<Copy k="verb6">Writing the answer</Copy>

<Copy k="reply.did1">traced the orders table</Copy>
<Copy k="reply.did2">the wiki, the code and the warehouse</Copy>
<Copy k="reply.did3">the five sources agree</Copy>
<Copy k="reply.did4">listed as data owner</Copy>

<Copy k="again.bubble">
  Make what we’ve done here into a {when} called ask-the-company.
</Copy>
<Copy k="again.bubble.when">shared skill</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Answers engineering questions from the wiki, code and warehouse, and names
  an owner when unsure.
</Copy>
<Copy k="again.card.shared">Everyone in your organization can view</Copy>
`;export{e as default};