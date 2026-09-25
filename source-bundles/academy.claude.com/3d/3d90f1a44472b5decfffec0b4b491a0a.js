var e=`---
kind: widget-copy
---

{/* Learner-facing copy for BriefDiagnose.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="title">What did the request leave out?</Copy>
<Copy k="lead">
  Each case shows a request, Claude’s reply, and where the result fell short.
  Pick the part of the brief that would have changed it.
</Copy>

<Copy k="part.goal">What it’s for</Copy>
<Copy k="part.inputs">Where to look, and an example</Copy>
<Copy k="part.check">A way to check it</Copy>
<Copy k="part.back">What comes back to you</Copy>

<Copy k="case.vendors.request">
  compare the three status-page vendors in this thread. Use the pricing PDFs
  Sam posted and lay it out like last year’s CDN comparison. Link every
  figure to its source, and post it here for me to take into the review.
</Copy>
<Copy k="case.vendors.reply">
  Here’s the comparison in last year’s layout, every figure linked to its
  source. All three are solid options depending on your priorities.
</Copy>
<Copy k="case.vendors.file">status-page-vendors · comparison table</Copy>
<Copy k="case.vendors.symptom">
  The table is accurate and well laid out, but it doesn’t recommend one. The
  team still has to work out which vendor to pick before Friday.
</Copy>
<Copy k="case.vendors.why">
  Claude didn’t know a decision depended on this, so it described the options
  instead of recommending one.
</Copy>
<Copy k="case.vendors.fix">
  We pick one at Friday’s review, and I need a recommendation I can defend to
  finance.
</Copy>

<Copy k="case.update.request">
  draft this week’s update for the steering group so they can approve the new
  timeline. Flag anything you’re unsure of, and leave the send to me.
</Copy>
<Copy k="case.update.reply">
  Draft below, built from the tracker: timeline moves two weeks, three
  workstreams on track, one at risk. I wasn’t sure about the vendor date,
  flagged inline. Ready for you to send.
</Copy>
<Copy k="case.update.file">steering-update-draft</Copy>
<Copy k="case.update.symptom">
  It left out two things the channel discussed on Tuesday, and it doesn’t
  follow the format the steering group is used to.
</Copy>
<Copy k="case.update.why">
  The request didn’t say to use this channel’s threads as well as the
  tracker, or point to an earlier update as the format to follow.
</Copy>
<Copy k="case.update.fix">
  Work from this channel’s threads since Monday and the tracker; use last
  week’s update (pinned) as the template.
</Copy>

<Copy k="case.renewals.request">
  so we can plan Q4 coverage, pull every account renewing next quarter from
  the CRM with owner and ARR, in the same sheet format as last quarter’s
  list, and post it here so I can assign owners.
</Copy>
<Copy k="case.renewals.reply">
  46 accounts renewing next quarter, with owner and ARR, in last quarter’s
  format.
</Copy>
<Copy k="case.renewals.file">q4-renewals.xlsx · 46 rows</Copy>
<Copy k="case.renewals.symptom">
  Three large renewals were missing because their close dates were blank in
  the CRM. Nothing in the reply said anything had been skipped, so nobody
  noticed for a week.
</Copy>
<Copy k="case.renewals.why">
  The request gave no way to check completeness, such as a count by segment
  or a list of records Claude left out and why.
</Copy>
<Copy k="case.renewals.fix">
  Include the total by segment and list any accounts you excluded or couldn’t
  classify, with the reason.
</Copy>

<Copy k="avatar.you">Y</Copy>
<Copy k="name.claude">Claude</Copy>
<Copy k="fellShort">Where Claude fell short</Copy>
<Copy k="missingLabel">Missing:</Copy>
<Copy k="caseAria">Case {n}: what was missing</Copy>
<Copy k="right">Yes.</Copy>
<Copy k="wrong">Not this.</Copy>
<Copy k="wrongLine">
  The request already covers “{part}”. Read where Claude fell short again.
</Copy>
<Copy k="fixLabel">Add to the request</Copy>

<Copy k="caseCount">Case {current} of {total}</Copy>
<Copy k="nextCase">Next case</Copy>
<Copy k="firstTry.all">Three for three on the first try.</Copy>
<Copy k="firstTry.some">{count} of 3 on the first try.</Copy>
<Copy k="startOver">Start over</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: bedb2cd7928e148f */}
<Copy k="widget.description">
  Exercise: across three workplace cases, the widget shows a request to
  Claude, Claude's reply with a file it attached, and a note on where the
  result fell short. For each case, the learner picks which part of a
  well-formed request was missing: the goal it's for, the inputs and an
  example to work from, a way to check the result, or what comes back to you.
  A wrong pick is told that the request already covers that part. The right
  pick explains what Claude lacked and shows what to add to the request. The
  goal is to recognize how an incomplete request, even when Claude executes it
  accurately, can still miss what the requester needed.
</Copy>
<Copy k="widget.summary">
  Exercise: across three workplace cases, the learner reviews a request to
  Claude, its reply, and where the result fell short, then picks which missing
  part of the brief would have fixed it.
</Copy>
`;export{e as default};