var e=`---
kind: widget-copy
---

{/* Film for the “Catch drift from the design system” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Catch drift from the design system</Copy>
<Copy k="sub">
  You check by eye whether shipped screens still follow the design system.
</Copy>

<Copy k="line.ask">
  With the Design plugin’s [[design system skill]], give Claude your tokens
  and ask what drifted.
</Copy>
<Copy k="line.does">
  Claude reads your tokens, library and inventory, then checks each screen and
  pull request.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what drifted and how badly, then gives you the [[drift
  report]].
</Copy>
<Copy k="line.note1">Each finding names the rule it breaks and the fix.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">the rule it breaks</Copy>
<Copy k="line.note1.at2">the fix</Copy>
<Copy k="line.note2">
  Each comment for engineering names the exact file and line.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">file and line</Copy>
<Copy k="line.again">
  You approve the pull request comment, then put the check on a twice-daily
  schedule.
</Copy>
<Copy k="line.close">
  Drift from the design system is caught before it ships, with the fix.
</Copy>

<Copy k="attachment1.title">Design QA / Sprint 42</Copy>
<Copy k="attachment1.sub">
  tokens.json, component-inventory.md, 3 screenshots
</Copy>
<Copy k="attachment1.tag">Folder</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Review the screens in this folder and open PRs labeled ui against our design
  system. List every drift from our tokens, components, spacing or interaction
  patterns, [[rate severity]], and [[suggest the compliant fix]]. Skip
  anything that already matches.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">tokens.json</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">component-inventory.md</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Tide / Web library variables</Copy>
<Copy k="source4.verb">Opened</Copy>
<Copy k="source4.text">3 screenshots in Sprint 42</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">2 open pull requests labeled ui</Copy>

<Copy k="verb1">Reading tokens.json</Copy>
<Copy k="verb2">Reading component-inventory.md</Copy>
<Copy k="verb3">Reading the Tide library variables</Copy>
<Copy k="verb4">Viewing the screenshots</Copy>
<Copy k="verb5">Reading open pull requests</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Checking each against your tokens</Copy>
<Copy k="verb8">Writing the drift report</Copy>

<Copy k="question.title">
  Flag hardcoded values even when they match a token?
</Copy>
<Copy k="question.option1">Flag them, low severity</Copy>
<Copy k="question.option2">Skip them if they match</Copy>
<Copy k="question.answer">Flag them as low severity.</Copy>

<Copy k="reply.did1">checked three screens</Copy>
<Copy k="reply.did2">nine drifts, two high</Copy>
<Copy k="reply.did3">matches and is left out</Copy>
<Copy k="reply.did4">flagged low as you asked</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="approval.tool">Create pull request review</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Review posted on harborhq/web #4821</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">UI drift check</Copy>
<Copy k="again.card.cadence">Weekdays at 10:00 AM and 4:00 PM</Copy>
<Copy k="again.out1">
  Checks open pull requests labeled ui and new screenshots in the sprint
  folder
</Copy>
<Copy k="again.out2">Adds findings to the drift report</Copy>
<Copy k="again.out3">Drafts pull request comments</Copy>
<Copy k="again.out3.em">for your approval</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 26bd81b91365c566 */}
<Copy k="widget.description">
  Film: a use-case walkthrough showing how Claude, using a design-system
  skill, checks shipped product screens and open pull requests against a
  team's design tokens, component inventory, and Figma library. The user
  points Claude at a working folder and asks it to list every drift from
  tokens, components, spacing, or interaction patterns, rate severity, and
  suggest compliant fixes, skipping anything that matches. Claude reads the
  source files, asks the user a judgment call about flagging hardcoded values
  that happen to match a token, then produces a drift report per screen and
  pull request with severity, the rule broken, and the fix, plus a draft PR
  comment pending approval. It closes by showing the check scheduled to run
  automatically. The goal is to show design QA shifting from manual eyeballing
  to a systematic, automated drift check.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to check shipped screens and open pull requests
  against a design system's tokens, components, and spacing, and Claude
  returns a severity-rated drift report with compliant fixes and a draft PR
  comment.
</Copy>
`;export{e as default};