var e=`---
kind: widget-copy
---

{/* Film for the “Recap your ad performance” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`opener.cue*\` are each a word of \`sub\`: when
    that word appears, its window lifts. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Recap your ad performance</Copy>
<Copy k="sub">
  Your weekly ad recap is due, and each platform has its own export.
</Copy>

<Copy k="line.ask">
  Using the Marketing plugin’s [[performance report skill]], ask what worked
  and what to change next.
</Copy>
<Copy k="line.does">
  Claude reads each platform’s export, the conversions file and last period’s
  deck.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude tells you what it found, then gives you the [[recap deck]].
</Copy>
<Copy k="line.note1">
  Each change names the budget moved and the result expected from it.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">budget moved</Copy>
<Copy k="line.note1.at2">result expected</Copy>
<Copy k="line.note2">
  Every number uses the one definition you chose, across every source.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">one definition</Copy>
<Copy k="line.again">
  You approve the channel post, then schedule the recap for the morning it is
  due.
</Copy>
<Copy k="line.close">
  Your weekly recap is ready, with what to change next week.
</Copy>

<Copy k="opener.cue1">platform</Copy>
<Copy k="opener.cue2">export</Copy>
<Copy k="opener.cue3">recap</Copy>
<Copy k="attachment1.title">Campaigns / Spring-Launch / performance</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">ga4-conversions.csv</Copy>
<Copy k="attachment2.sub">Purchases by source</Copy>
<Copy k="attachment2.tag">CSV</Copy>
<Copy k="attachment3.title">recap-deck-wk16.pptx</Copy>
<Copy k="attachment3.sub">Last week’s recap</Copy>
<Copy k="attachment3.tag">PPTX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Analyze this campaign's ad performance and build [[the recap deck]]: [[what
  worked, what didn't, what we change]] next time. Post a digest to
  #paid-media with the [[top three movers]], and save the joined numbers as a
  sheet.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">google-ads-export.csv, 6 campaigns</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">meta-ads-export.csv, 12 ad sets</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">ga4-conversions.csv, 1,840 purchases</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">recap-deck-wk16.pptx, last week’s numbers</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">spend to purchases by campaign tag</Copy>

<Copy k="verb1">Reading the Google Ads export</Copy>
<Copy k="verb2">Reading the Meta export</Copy>
<Copy k="verb3">Reading GA4 conversions</Copy>
<Copy k="verb4">Reading last week’s deck</Copy>
<Copy k="verb5">Joining spend to purchases</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Building the recap deck</Copy>
<Copy k="verb8">Writing the joined sheet</Copy>

<Copy k="question.title">
  Which purchase count should I use, GA4’s or Meta’s?
</Copy>
<Copy k="question.option1">GA4, and footnote Meta’s number</Copy>
<Copy k="question.option2">Each platform’s own numbers</Copy>
<Copy k="question.answer">GA4 everywhere, with Meta’s number footnoted.</Copy>

<Copy k="reply.did1">joined the Google, Meta and GA4 exports</Copy>
<Copy k="reply.did2">moves Stories and YouTube money</Copy>
<Copy k="reply.did3">for the same budget</Copy>
<Copy k="reply.did4">ready when you approve it</Copy>
<Copy k="reply.text">
  I joined the Google, Meta and GA4 exports for week 17: $48,400 bought 1,840
  purchases at $26.30 each, 10% better than week 16. Slide 7 moves Stories and
  YouTube money for the same budget; the #paid-media digest is ready when you
  approve it.
</Copy>
<Copy k="file1.meta">Presentation</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="approval.tool">Send message draft</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Draft saved in Slack for you to post</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Weekly ad performance recap</Copy>
<Copy k="again.card.cadence">Mondays at 8:00 AM</Copy>
<Copy k="again.out1">Runs /performance-report on last week’s exports</Copy>
<Copy k="again.out2">Writes the recap deck and joined sheet to the folder</Copy>
<Copy k="again.out3">Drafts the #paid-media digest</Copy>
<Copy k="again.out3.em">for you to post</Copy>
`;export{e as default};