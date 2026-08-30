var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TagTheTells.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags; {name} tokens are runtime
    placeholders and must survive verbatim. The simulated Cowork reply is
    two paragraphs, reply.p1 and reply.p2: their {t1}…{t6} tokens are the
    six clickable phrases, whose text is the matching reply.pN.tN key, so a
    translation may reorder the clauses freely as long as every token
    survives. {phrase} is one of those phrases; {source} is one of the
    source.* labels; {result} is "correct" or "missed". */}

<Copy k="label">Tracing context</Copy>
<Copy k="caption">
  The six highlighted phrases in this Cowork reply came from a prepended
  source. Click each phrase and identify the most likely source.
</Copy>
<Copy k="tip">
  Tip: click a dotted phrase to open the source picker. You can change your
  answer by clicking the phrase again.
</Copy>
<Copy k="surface">Cowork</Copy>
<Copy k="prompt">
  When's the venue walkthrough for the summit? And can you let the team know
  I'll be joining remotely?
</Copy>
<Copy k="replyingTo">replying to: “{prompt}”</Copy>
<Copy k="reply.aria">
  Claude’s reply. Click a highlighted phrase to tag its source.
</Copy>

<Copy k="reply.p1">{t1} the venue walkthrough is {t2} {t3}, and {t4}.</Copy>
<Copy k="reply.p1.t1">Short version:</Copy>
<Copy k="reply.p1.t2">Thursday at 2:00 pm</Copy>
<Copy k="reply.p1.t3">(Pacific)</Copy>
<Copy k="reply.p1.t4">Dana has already accepted</Copy>
<Copy k="reply.p2">
  {t5} to say you'll be joining remotely - I'd {t6}, unless you'd rather
  choose the recipients yourself. Want me to go ahead?
</Copy>
<Copy k="reply.p2.t5">I can email the team</Copy>
<Copy k="reply.p2.t6">copy Dana, since she gets your Friday recaps</Copy>

<Copy k="source.user-prefs">User Preferences</Copy>
<Copy k="source.tool-result">Tool Result</Copy>
<Copy k="source.tool-list">Tool List</Copy>
<Copy k="source.memory">Written Memory</Copy>

<Copy k="explain.t1">
  Your preferences ask for concise answers, so Claude leads with the short
  version.
</Copy>
<Copy k="explain.t2">
  Claude can't know your schedule from training. It called
  calendar_list_events, and the day and time came back in the tool result.
</Copy>
<Copy k="explain.t3">
  Your preferences say you're in the Pacific timezone, so Claude labels the
  time that way.
</Copy>
<Copy k="explain.t4">
  Also from the calendar tool result, which included the attendee list. You
  didn't ask about Dana; Claude mentioned her because the information was
  right there.
</Copy>
<Copy k="explain.t5">
  Claude offers this because email_send is in its tool list. Without that
  tool loaded, it wouldn't offer to send anything.
</Copy>
<Copy k="explain.t6">
  From written memory: the note that you send Dana a recap every Friday.
  Without it, Claude would have had to ask who to copy.
</Copy>

{/* Threshold messages after the reveal, by minimum score. */}
<Copy k="score.6">Perfect read. You're thinking like a context archaeologist.</Copy>
<Copy k="score.4">Good work — this is a tricky exercise.</Copy>
<Copy k="score.2">
  A productive surprise. The sources can be surprising, so it's great that
  you're thinking about them.
</Copy>
<Copy k="score.0">
  Almost none of this came from where you thought! That's the point of this
  exercise.
</Copy>

{/* A phrase button's accessible name as it gets tagged and graded. */}
<Copy k="phrase.aria.tagged">{phrase}, tagged {source}</Copy>
<Copy k="phrase.aria.graded">{phrase}, tagged {source}, {result}</Copy>
<Copy k="phrase.aria.missedUntagged">{phrase}, missed</Copy>
<Copy k="correct">correct</Copy>
<Copy k="missed">missed</Copy>

<Copy k="picker.aria">Tagging: {phrase}</Copy>
<Copy k="picker.question">Where did this come from?</Copy>
<Copy k="quoted">“{phrase}”</Copy>
<Copy k="progress">{n} of {total} tagged</Copy>
<Copy k="revealAnswers">Reveal answers</Copy>
<Copy k="score">You got {correct} of {total} right.</Copy>
<Copy k="youTagged">You tagged it: {source}</Copy>
<Copy k="tryAgain">Try again</Copy>
`;export{e as default};