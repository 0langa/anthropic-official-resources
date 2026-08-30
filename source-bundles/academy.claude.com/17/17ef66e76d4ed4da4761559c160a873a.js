var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Offer process” use case. Scene text is typed on
    screen character by character, so keep sentences natural at any length;
    {tokens} are filled by the widget with its simulated commands, file
    names, and bold highlights — keep them where the sentence needs them. */}

<Copy k="title">Offer process</Copy>
<Copy k="subtitle">
  Cowork reads candidate details and your template, then drafts the email,
  offer, and deck.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the role’s offers folder and describe the package you need.
</Copy>
<Copy k="menu.category">Human Resources</Copy>
<Copy k="prompt">
  Put together the offer package for our finalist. Use the candidate details
  and our offer template to fill out the offer fields for my review, draft a
  warm email to the candidate that sets up the call, and build a short HTML
  presentation I can screenshare on the offer call covering the role, the
  numbers, and why we’re excited about them.
</Copy>

<Copy k="scene2.title">Cowork assembles the package</Copy>
<Copy k="scene2.sub">
  Candidate summary, template, and comp from the folder, letter staged in
  DocuSign.
</Copy>
<Copy k="work.heading">Working on offer package</Copy>
<Copy k="step1">Google Drive · read candidate-summary-ARivera.pdf</Copy>
<Copy k="step2">
  Google Drive · read offer-letter-template and benefits-overview-2026
</Copy>
<Copy k="step3">
  Filling offer fields against approved L5 comp · drafting candidate email
</Copy>
<Copy k="step4">
  DocuSign · staged offer-ARivera.docx envelope (draft, not sent)
</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read candidate summary from folder</Copy>
<Copy k="prog2">Read template and approved comp</Copy>
<Copy k="prog3">Fill offer and draft email</Copy>
<Copy k="prog4">Stage letter for signature</Copy>
<Copy k="prog5">Build offer-call deck</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">Ready for the offer call</Copy>
<Copy k="scene3.sub">
  A screenshare deck with the role, the numbers, and why you’re excited —
  plus the filled offer and email draft in the folder.
</Copy>
<Copy k="deck.kicker">Offer · Senior Product Manager, Growth</Copy>
<Copy k="deck.title">Welcome, Ana Rivera</Copy>
{/* Labels over the four offer figures; the currency amounts come from the
    widget, {n} is the equity share count. */}
<Copy k="num1">Base</Copy>
<Copy k="num2">Equity</Copy>
<Copy k="num2.value">{n} RSUs</Copy>
<Copy k="num3">Sign-on</Copy>
<Copy k="num4">Target start</Copy>
<Copy k="num4.value">May 18, 2026</Copy>
<Copy k="deck.why">Why we’re excited</Copy>
<Copy k="why1">
  Ran activation experiments at Harbor that lifted day-7 retention 6 points
</Copy>
<Copy k="why2">Led a four-PM growth pod — the same remit this role carries</Copy>
<Copy k="why3">
  Panel called out sharp product judgment and clear written narratives
</Copy>
<Copy k="deck.page">1 / 6 · {file}</Copy>
<Copy k="chip1.name">Offer letter — A. Rivera</Copy>
<Copy k="chip1.sub">Document · DOCX · filled, for review</Copy>
<Copy k="chip2.name">Candidate email — A. Rivera</Copy>
<Copy k="chip2.sub">Document · Draft · sets up the call</Copy>

<Copy k="scene4.title">Make it run on every finalist</Copy>
<Copy k="scene4.sub">
  Customize the skill once, then trigger it whenever a candidate reaches
  Offer.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am. Check the hiring folder for candidates who moved to Offer
  overnight, run {cmd} for each, and write the package to the role’s offers
  folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Offer package on stage change</Copy>
<Copy k="card.body">
  Runs {cmd} each weekday morning for any candidate who moved to Offer
  overnight and writes the email, filled offer, and deck to the role’s offers
  folder.
</Copy>
<Copy k="card.when">
  Weekdays at {time} · checks the hiring folder for new {stage} candidates
</Copy>
<Copy k="card.when.time">9am</Copy>
<Copy k="card.when.stage">Offer-stage</Copy>

<Copy k="end">
  Every finalist gets a complete offer package the moment they reach the
  Offer stage.
</Copy>
`;export{e as default};