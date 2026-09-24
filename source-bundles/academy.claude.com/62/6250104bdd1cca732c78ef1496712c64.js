var e=`---
kind: widget-copy
---

{/* Learner-facing copy for LetterVsSpiritScenarios.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim; \`{br}\` marks a line break inside
    a simulated message body — keep \`{br}\` between paragraphs; the count may
    change. Which artifact is an email, Slack message or status doc — and
    which bullet is highlighted — is structure in the widget; every word the
    learner reads is here. */}

<Copy k="title">Letter vs. Spirit</Copy>
<Copy k="intro">
  Instructions are honored via pattern-matching, not understanding. There’s
  always room between your words and your intent.
</Copy>
<Copy k="tab.summary">Summary</Copy>

<Copy k="label.from">From:</Copy>
<Copy k="label.to">To:</Copy>
<Copy k="label.subject">Subject:</Copy>
<Copy k="slack.header">{sender} · {time}</Copy>

<Copy k="step.literal">Claude’s response:</Copy>
<Copy k="step.improved">With the goal stated:</Copy>
<Copy k="reveal.title">The real goal</Copy>
<Copy k="btn.literal">See the literal result →</Copy>
<Copy k="btn.reveal">Reveal the real goal →</Copy>
<Copy k="btn.improved">See the improved version →</Copy>
<Copy k="btn.beat">The takeaway →</Copy>
<Copy k="btn.next">Next scenario →</Copy>
<Copy k="btn.summary">See the summary →</Copy>

{/* Scenario: shorter */}
<Copy k="s.shorter.tab">Make it shorter</Copy>
<Copy k="s.shorter.setup">
  Your colleague forwards you this email and asks you to "make it shorter."
</Copy>
<Copy k="s.shorter.orig.from">Jordan Reyes</Copy>
<Copy k="s.shorter.orig.to">Marcus Chen</Copy>
<Copy k="s.shorter.orig.subject">Following up on Q2 roadmap</Copy>
<Copy k="s.shorter.orig.body">
  Hope your week is going well! I wanted to circle back on the Q2 roadmap
  discussion from last Tuesday. The team has been digging into the three
  proposed directions and we've landed on a recommendation, though there are
  some tradeoffs worth flagging. We think the platform consolidation path
  makes the most sense given the resourcing constraints, but it does mean
  pushing the mobile redesign to Q3. Would love to get your sign-off before we
  finalize with the broader team on Friday. Happy to hop on a call if that's
  easier.
</Copy>
<Copy k="s.shorter.literal.from">Jordan Reyes</Copy>
<Copy k="s.shorter.literal.to">Marcus Chen</Copy>
<Copy k="s.shorter.literal.subject">Following up on Q2 roadmap</Copy>
<Copy k="s.shorter.literal.body">
  I wanted to circle back on the Q2 roadmap discussion. The team recommends
  the platform consolidation path given resourcing, though it pushes mobile
  redesign to Q3. Would love your sign-off before we finalize Friday. Happy to
  hop on a call.
</Copy>
<Copy k="s.shorter.literal.note">
  6 sentences → 4 sentences. Instruction honored.
</Copy>
<Copy k="s.shorter.goal">
  Marcus is a skip-level exec who skims. The real goal was to surface the
  decision-ask in the first line.
</Copy>
<Copy k="s.shorter.miss">
  Shorter helped — but the sign-off request is still buried in sentence three.
  A skimmer reads "circle back on roadmap," files it as FYI, and moves on.
</Copy>
<Copy k="s.shorter.improved.from">Jordan Reyes</Copy>
<Copy k="s.shorter.improved.to">Marcus Chen</Copy>
<Copy k="s.shorter.improved.subject">Need sign-off: Q2 roadmap by Friday</Copy>
<Copy k="s.shorter.improved.body">
  Need your sign-off on the Q2 roadmap by Friday. We're recommending platform
  consolidation (pushes mobile to Q3) — details below or happy to hop on a
  call.
</Copy>
<Copy k="s.shorter.improved.note">
  2 sentences. Ask first. Subject line does work too.
</Copy>
<Copy k="s.shorter.beat">
  Same instruction, different intent. The model can only see the words.
</Copy>

{/* Scenario: professional */}
<Copy k="s.professional.tab">Make it more professional</Copy>
<Copy k="s.professional.setup">
  Your colleague sends you this Slack message and asks you to "make it more
  professional."
</Copy>
<Copy k="s.professional.orig.sender">alex</Copy>
<Copy k="s.professional.orig.time">2:47 PM</Copy>
<Copy k="s.professional.orig.body">
  hey! so the migration is basicaly done 🎉{br}{br}just waiting on the DNS to
  propagate which should be ~2 hrs. i'll ping when its live.{br}{br}also lol
  someone on the old server left a cron job that emails "good morning" to
  everyone at 6am, i killed it, you're welcome
</Copy>
<Copy k="s.professional.literal.sender">alex</Copy>
<Copy k="s.professional.literal.time">2:47 PM</Copy>
<Copy k="s.professional.literal.body">
  Hello,{br}{br}The migration is essentially complete. We are currently
  waiting on DNS propagation, which should take approximately two hours. I
  will notify you once it is live.{br}{br}Additionally, I identified and
  removed an outdated scheduled task on the legacy server that was sending
  automated morning emails.
</Copy>
<Copy k="s.professional.literal.note">
  Typo fixed. Joke removed. Contractions expanded. Instruction honored.
</Copy>
<Copy k="s.professional.goal">
  This is going to a client as an email update. "Professional" needed to mean
  audience and channel, not just tone.
</Copy>
<Copy k="s.professional.miss">
  The tone is polished — but there's no subject line, no greeting by name, no
  sign-off, and no context for what "the migration" refers to. It still reads
  like a Slack message in a suit.
</Copy>
<Copy k="s.professional.improved.from">Alex Park</Copy>
<Copy k="s.professional.improved.to">Sarah Okonkwo</Copy>
<Copy k="s.professional.improved.subject">
  Migration complete — DNS propagating now
</Copy>
<Copy k="s.professional.improved.body">
  Hi Sarah,{br}{br}Quick update on the server migration for acme.com: the
  cutover is complete and we're in the final DNS propagation window (roughly 2
  hours). I'll send confirmation once the new environment is fully
  live.{br}{br}No action needed on your end. I also cleaned up a legacy
  scheduled task during the process.{br}{br}Best,{br}Alex
</Copy>
<Copy k="s.professional.improved.note">
  Subject line. Greeting. Context. Sign-off. Now it's an email.
</Copy>
<Copy k="s.professional.beat">
  The model interpreted "professional" as tone. You meant audience and
  channel.
</Copy>

{/* Scenario: detail */}
<Copy k="s.detail.tab">Add more detail</Copy>
<Copy k="s.detail.setup">
  Your colleague shares this status update and asks you to "add more detail."
</Copy>
<Copy k="s.detail.orig.title">PROJECT MERIDIAN — WEEKLY STATUS</Copy>
<Copy k="s.detail.orig.bullet.progress.label">Progress</Copy>
<Copy k="s.detail.orig.bullet.progress.text">on track for March 28 launch</Copy>
<Copy k="s.detail.orig.bullet.blockers.label">Blockers</Copy>
<Copy k="s.detail.orig.bullet.blockers.text">none currently</Copy>
<Copy k="s.detail.orig.bullet.risks.label">Risks</Copy>
<Copy k="s.detail.orig.bullet.risks.text">some</Copy>
<Copy k="s.detail.literal.title">PROJECT MERIDIAN — WEEKLY STATUS</Copy>
<Copy k="s.detail.literal.bullet.progress.label">Progress</Copy>
<Copy k="s.detail.literal.bullet.progress.text">
  The team continues to make strong progress toward the March 28 launch date.
  This week we completed the authentication flow, finalized the onboarding
  copy, and began QA on the payments integration. Morale is high and velocity
  has been consistent with our sprint estimates.
</Copy>
<Copy k="s.detail.literal.bullet.blockers.label">Blockers</Copy>
<Copy k="s.detail.literal.bullet.blockers.text">
  There are no active blockers at this time. The design dependency we flagged
  last week was resolved on Tuesday when the updated assets were delivered.
  The team has everything needed to continue executing.
</Copy>
<Copy k="s.detail.literal.bullet.risks.label">Risks</Copy>
<Copy k="s.detail.literal.bullet.risks.text">
  There are some risks associated with the project that we are monitoring. The
  external vendor API has shown intermittent latency during load testing.
  Additionally, two team members have upcoming PTO that overlaps with the
  final QA week.
</Copy>
<Copy k="s.detail.literal.note">
  Every bullet expanded into a paragraph. Instruction honored.
</Copy>
<Copy k="s.detail.goal">
  A stakeholder needs to decide whether to escalate the risks. They need
  specifics and a recommendation — not more words everywhere.
</Copy>
<Copy k="s.detail.miss">
  Progress and Blockers got padded with noise. Risks got some detail but no
  severity, no numbers, and no recommendation. The signal is diluted, not
  sharpened.
</Copy>
<Copy k="s.detail.improved.title">PROJECT MERIDIAN — WEEKLY STATUS</Copy>
<Copy k="s.detail.improved.bullet.progress.label">Progress</Copy>
<Copy k="s.detail.improved.bullet.progress.text">
  on track for March 28 launch
</Copy>
<Copy k="s.detail.improved.bullet.blockers.label">Blockers</Copy>
<Copy k="s.detail.improved.bullet.blockers.text">none currently</Copy>
<Copy k="s.detail.improved.bullet.risks.label">Risks — needs decision</Copy>
<Copy k="s.detail.improved.bullet.risks.text">
  Vendor API latency spiking under load (p95 at 3s in testing). If it persists
  into next week, recommend escalating to their enterprise support or scoping
  a fallback — hard data by Wednesday. Separately: two engineers have
  overlapping PTO during final QA week. Manageable, but flagging now.
</Copy>
<Copy k="s.detail.improved.note">
  Two bullets stayed terse. Only risks expanded — with numbers and a
  recommendation.
</Copy>
<Copy k="s.detail.beat">You asked for quantity. You needed targeting.</Copy>

<Copy k="summary.title">
  Every instruction has a gap between letter and spirit. You close it by
  stating the goal.
</Copy>
<Copy k="summary.card1.ask">"Make it shorter"</Copy>
<Copy k="summary.card1.lesson">You meant: surface the ask for a skimmer.</Copy>
<Copy k="summary.card2.ask">"Make it more professional"</Copy>
<Copy k="summary.card2.lesson">
  You meant: reframe for a different audience and channel.
</Copy>
<Copy k="summary.card3.ask">"Add more detail"</Copy>
<Copy k="summary.card3.lesson">
  You meant: expand only what drives a decision.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 591af27dbd697551 */}
<Copy k="widget.description">
  Exercise: the learner steps through three workplace scenarios where someone
  gives Claude a vague editing instruction, such as "make it shorter," "make
  it more professional," or "add more detail," applied to a sample message or
  document. For each, the learner reveals Claude's literal, pattern-matched
  response, then an explanation of the underlying goal that response missed,
  then an improved version that states the actual goal explicitly, and a short
  takeaway. A closing summary recaps all three gaps between instruction and
  intent. The exercise teaches that Claude follows the literal wording of
  instructions rather than inferring unstated intent, so closing that gap
  requires stating the real goal directly rather than relying on vague
  phrasing.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner steps through three workplace scenarios with vague
  editing instructions, revealing Claude's literal response, the missed
  underlying goal, and an improved version stating that goal explicitly,
  showing why unstated intent gets lost.
</Copy>
`;export{e as default};