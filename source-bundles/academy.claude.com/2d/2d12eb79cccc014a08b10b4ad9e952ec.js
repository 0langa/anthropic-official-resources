var e=`---
kind: widget-copy
---

{/* Film for the “Draft your reports’ performance reviews” use case. \`line.*\`
    are the one sentence shown per chapter; a phrase in [[double brackets]] is
    the part the film underlines — keep the brackets around the equivalent
    words. \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Draft your reports’ performance reviews</Copy>
<Copy k="sub">
  You have performance reviews to write for each of your reports.
</Copy>

<Copy k="line.ask">
  Ask the [[performance review skill]] for a draft per report, every claim
  linked, and no rating.
</Copy>
<Copy k="line.does">
  Claude reads your framework and last cycle’s reviews, then each report’s
  pull requests, projects and threads.
</Copy>
<Copy k="line.question">
  Claude reads your framework and last cycle’s reviews, then each report’s
  pull requests, projects and threads.
</Copy>
<Copy k="line.get">
  Claude tells you what it read, then gives you a [[draft per report]].
</Copy>
<Copy k="line.note1">Every claim links to the work behind it.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">the work behind it</Copy>
<Copy k="line.note2">The rating is left blank for you to write.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">left blank</Copy>
<Copy k="line.again">
  You can schedule it so the drafts are ready when each new cycle’s folder
  appears.
</Copy>
<Copy k="line.close">
  You start each review from the evidence and write the rating yourself.
</Copy>

<Copy k="attachment1.title">Reviews / 2026-Q1</Copy>
<Copy k="attachment1.sub">Template, roster and last cycle’s reviews</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">eng-career-framework.pdf</Copy>
<Copy k="attachment2.sub">Levels L3–L6</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">team-roster.md</Copy>
<Copy k="attachment3.sub">5 engineers</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  For each engineer in team-roster.md, draft their Q1 review in our framework
  with [[evidence linked for every claim]], from this quarter's work and last
  review's growth areas. Flag where I need my own judgment and [[do not write
  the rating]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">team-roster.md, 5 engineers</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">eng-career-framework.pdf</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">2025-Q4, 5 prior reviews</Copy>
<Copy k="source4.verb">Searched</Copy>
<Copy k="source4.text">87 merged pull requests and their reviews</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">9 projects shipped this quarter</Copy>
<Copy k="source6.verb">Searched</Copy>
<Copy k="source6.text">#payments-platform and #incidents</Copy>

<Copy k="verb1">Reading team-roster.md</Copy>
<Copy k="verb2">Reading eng-career-framework.pdf</Copy>
<Copy k="verb3">Reading last cycle’s reviews</Copy>
<Copy k="verb4">Searching merged pull requests by author</Copy>
<Copy k="verb5">Reading Linear projects and cycles</Copy>
<Copy k="verb6">Searching Slack threads</Copy>
<Copy k="verb7">Writing 5 drafts</Copy>

<Copy k="reply.did1">drafted five reviews</Copy>
<Copy k="reply.did2">under the framework’s four competencies</Copy>
<Copy k="reply.did3">every claim linked to its source</Copy>
<Copy k="reply.did4">Ratings are blank for you</Copy>
<Copy k="reply.text">
  I drafted five reviews from 87 pull requests, 9 Linear projects and 31 Slack
  threads, each under the framework’s four competencies with every claim
  linked to its source. Ratings are blank for you, and seven places are marked
  “Needs your judgment”; Anika’s draft has two.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new quarter folder is in Reviews, draft that cycle’s
  reviews the same way, ratings left blank.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Quarterly review drafts</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Checks Reviews for a new quarter folder</Copy>
<Copy k="again.out2">
  Pulls each report’s quarter from GitHub, Linear and Slack
</Copy>
<Copy k="again.out3">Writes one draft per report</Copy>
<Copy k="again.out3.em">ratings left blank</Copy>
`;export{e as default};