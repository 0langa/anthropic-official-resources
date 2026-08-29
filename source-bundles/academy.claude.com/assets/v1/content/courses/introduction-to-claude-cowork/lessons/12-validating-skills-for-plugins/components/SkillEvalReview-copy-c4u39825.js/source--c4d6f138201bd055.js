var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SkillEvalReview.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The simulated notes file name in
    case 1's prompt lives in the widget as data. */}

<Copy k="kicker">Read an eval</Copy>
<Copy k="intro">
  An eval is just two outputs side by side, with a few rules of what “good”
  looks like. {lead} — and tell Claude what to change.
</Copy>
<Copy k="intro.lead">Your job is to pick which one you’d actually send</Copy>

<Copy k="nav.prevAria">Previous case</Copy>
<Copy k="nav.nextAria">Next case</Copy>
<Copy k="nav.count">{current} of {total}</Copy>
<Copy k="nav.dotAria">Case {num}</Copy>

<Copy k="col.skill">With skill</Copy>
<Copy k="col.base">Without skill</Copy>
<Copy k="promptLabel">Prompt</Copy>
<Copy k="houseRules">House rules</Copy>
<Copy k="mark.pass">Pass:</Copy>
<Copy k="mark.fail">Fail:</Copy>
<Copy k="sendButton">I’d send this one</Copy>
<Copy k="whichSend">Which one would you send?</Copy>
<Copy k="feedbackLabel">One thing you’d tell Claude to change</Copy>
<Copy k="closer">
  {lead} When it’s your skill, Claude takes your picks and feedback and
  revises it for you.
</Copy>
<Copy k="closer.lead">That’s a full eval round.</Copy>

<Copy k="outh.decisions">Decisions</Copy>
<Copy k="outh.actions">Action items</Copy>
<Copy k="outh.questions">Open questions</Copy>

<Copy k="assert.decisions">Leads with decisions</Copy>
<Copy k="assert.owners">Every action item has an owner and a date</Copy>
<Copy k="assert.questions">Open questions called out</Copy>
<Copy k="assert.words">Under 150 words</Copy>
<Copy k="assert.headline">Headline in the first three lines</Copy>
<Copy k="note.orFlagged">(or flagged)</Copy>
<Copy k="note.overCount">(164)</Copy>
<Copy k="note.inventedOwner">(invented an owner)</Copy>
<Copy k="note.buried">(buried in prose)</Copy>
<Copy k="note.headlineLate">(date pushed to line 5)</Copy>

<Copy k="case1.tag">Typical case</Copy>
<Copy k="case1.title">Recap a regular team sync</Copy>
<Copy k="case1.prompt">
  Write the recap for today’s product sync. Notes are in {file}.
</Copy>
<Copy k="case1.placeholder">e.g. tighten the open questions section</Copy>
<Copy k="case1.skill.outputTitle">Product sync — recap</Copy>
<Copy k="case1.skill.d1">
  Ship the new onboarding flow to 10% of new sign-ups starting Monday.
</Copy>
<Copy k="case1.skill.d2">Pause the in-app tour redesign until after launch.</Copy>
<Copy k="case1.skill.a1">Maya — finalize the rollout plan by Fri May 9.</Copy>
<Copy k="case1.skill.a2">
  Devon — instrument the new flow for activation rate by Wed May 7.
</Copy>
<Copy k="case1.skill.a3">Priya — draft the announcement post by Mon May 12.</Copy>
<Copy k="case1.skill.q1">
  Do we need legal sign-off on the new copy before 10%?
</Copy>
<Copy k="case1.base.outputTitle">Product sync recap</Copy>
<Copy k="case1.base.p1">
  The team had a productive discussion about the new onboarding flow this
  morning. After reviewing the latest mockups, the group decided to move
  ahead with a 10% rollout starting next Monday. The in-app tour redesign
  came up but the consensus was to revisit it after launch.
</Copy>
<Copy k="case1.base.p2">
  Maya offered to finalize the rollout plan and Devon mentioned he’d look at
  the instrumentation. Priya is going to draft something for the
  announcement. There was also some back and forth about whether legal needs
  to weigh in on the new copy — the team didn’t reach a conclusion on that.
</Copy>
<Copy k="case1.base.p3">Overall {miss}.</Copy>
<Copy k="case1.base.p3.miss">a productive meeting with clear next steps</Copy>

<Copy k="case2.tag">Messy input</Copy>
<Copy k="case2.title">Recap a stand-up from rough, partly pasted-in notes</Copy>
<Copy k="case2.prompt">
  Recap the marketing stand-up — notes are pretty rough, half of it is just
  pasted Slack messages.
</Copy>
<Copy k="case2.placeholder">e.g. drop the inline note about the unclear owner</Copy>
<Copy k="case2.skill.outputTitle">Marketing stand-up — recap</Copy>
<Copy k="case2.skill.d1">
  Move the webinar from May 14 to May 21 to avoid the customer-conference
  overlap.
</Copy>
<Copy k="case2.skill.a1">
  Jordan — update the registration page and re-send invites by Mon May 5.
</Copy>
<Copy k="case2.skill.a2">
  {flag} — rework the email cadence around the new date by Wed May 7.
</Copy>
<Copy k="case2.skill.a2.flag">(owner unclear — confirm with Priya?)</Copy>
<Copy k="case2.skill.q1">
  Do we need to notify partners who promoted the original date?
</Copy>
<Copy k="case2.skill.q2">
  Who’s on point for the rescheduled day-of logistics?
</Copy>
<Copy k="case2.base.outputTitle">Marketing stand-up</Copy>
<Copy k="case2.base.p1">
  The team agreed to push the webinar from May 14 to May 21 because the
  customer conference is the same week. Jordan will update the landing page
  and re-send invites.
</Copy>
<Copy k="case2.base.p2">
  {miss} The team also discussed how to handle the partners who already
  promoted the original date and the day-of logistics for the new date.
</Copy>
<Copy k="case2.base.p2.miss">
  Priya will rework the email cadence around the new date.
</Copy>
<Copy k="case2.base.p3">Good progress — everyone’s aligned on the move.</Copy>

<Copy k="case3.tag">Style vs. substance</Copy>
<Copy k="case3.title">Recap for an exec who reads only the first three lines</Copy>
<Copy k="case3.prompt">
  Recap for the exec check-in — keep it brief, they only read the first
  three lines.
</Copy>
<Copy k="case3.placeholder">e.g. put the launch date in the first line</Copy>
<Copy k="case3.skill.outputTitle">Exec check-in — recap</Copy>
<Copy k="case3.skill.d1">
  Move the launch from May 28 to {flag} to absorb the QA delay.
</Copy>
<Copy k="case3.skill.d1.flag">June 12</Copy>
<Copy k="case3.skill.d2">
  Hold the customer-comms plan until the new date is locked.
</Copy>
<Copy k="case3.skill.a1">Sam — circulate the revised launch plan by Mon May 5.</Copy>
<Copy k="case3.skill.q1">
  Does the new date affect the Q2 number we committed to?
</Copy>
<Copy k="case3.base.outputTitle">Exec check-in</Copy>
<Copy k="case3.base.p1">
  {hit} — QA needs another two weeks for the new auth flow, and shipping on
  May 28 would land us with a partial release.
</Copy>
<Copy k="case3.base.p1.hit">Launch moved to June 12</Copy>
<Copy k="case3.base.p2">
  Customer comms are on hold until the date is locked. Sam will circulate
  the revised plan by Monday May 5.
</Copy>
<Copy k="case3.base.p3">{miss} — flagged for finance to confirm.</Copy>
<Copy k="case3.base.p3.miss">
  Open: does the new date affect the Q2 commit?
</Copy>
`;export{e as default};