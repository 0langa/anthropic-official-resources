var e=`---
kind: widget-copy
---

{/* Learner-visible copy for the BuildATeammate widget
    (an interactive exercise: control labels, on-screen labels, and one whole sentence per state or outcome).
    Keys are machine identifiers; translate ONLY the text between the tags.
    {tokens} are numbers or names the widget fills in at run time. */}

<Copy k="title">Take a capability away</Copy>
<Copy k="sub">The Lantern team's agent, one week before the health tracker app launches.</Copy>
<Copy k="reset">Switch everything back on</Copy>
<Copy k="resetAria">Reset: switch all three capabilities back on</Copy>
<Copy k="capsLabel">Three capabilities</Copy>
<Copy k="weekLabel">The launch week</Copy>
<Copy k="controls.cred.name">Its own identity and credentials</Copy>
<Copy k="controls.cred.desc">It works under its own name and sign-in, with keys that fit its job.</Copy>
<Copy k="controls.mem.name">Shared memory</Copy>
<Copy k="controls.mem.desc">It keeps what it learns from everyone on the team between conversations.</Copy>
<Copy k="controls.ctx.name">Shared context</Copy>
<Copy k="controls.ctx.desc">It reads what the team writes in #launch-room without being told.</Copy>
<Copy k="went.ok">Went well:</Copy>
<Copy k="went.bad">Went wrong:</Copy>
<Copy k="days.mon.day">Mon</Copy>
<Copy k="days.mon.title">Ravi asks for a launch checklist</Copy>
<Copy k="days.mon.pass">Drafted in two minutes. Any chatbot can do this.</Copy>
<Copy k="days.tue.day">Tue</Copy>
<Copy k="days.tue.title">Mara asks it to update the checklist</Copy>
<Copy k="days.tue.pass">It remembers the 14th and the freeze rule. Done in one message.</Copy>
<Copy k="days.tue.fail">It asks which launch this is. Mara re-explains for ten minutes.</Copy>
<Copy k="days.tue.cause">Missing: shared memory</Copy>
<Copy k="days.wed.day">Wed</Copy>
<Copy k="days.wed.title">Jordan writes in #launch-room: the referral banner is cut</Copy>
<Copy k="days.wed.pass">It read the decision in the room. Thursday's plan drops the referral tasks on its own.</Copy>
<Copy k="days.wed.fail">It never saw the cut. It keeps scheduling referral work nobody will do.</Copy>
<Copy k="days.wed.cause">Missing: shared context</Copy>
<Copy k="days.thu.day">Thu</Copy>
<Copy k="days.thu.title">The agent reaches for the billing folder</Copy>
<Copy k="days.thu.pass">Its keys stop at its job, and a launch tracker has no key to billing. It stops there.</Copy>
<Copy k="days.thu.fail">It can open everything Ravi can open, billing included. Nobody decided that.</Copy>
<Copy k="days.thu.cause">Missing: its own credentials</Copy>
<Copy k="days.fri.day">Fri</Copy>
<Copy k="days.fri.title">The weekly digest goes to the whole team</Copy>
<Copy k="days.fri.pass">It has the date and the freeze rule right, and nobody re-explained anything.</Copy>
<Copy k="days.fri.fail">The digest went out wrong. It forgot the freeze.</Copy>
<Copy k="days.fri.cause">Missing: shared memory</Copy>
<Copy k="verdict.teammate">An effective human-agent team</Copy>
<Copy k="verdict.chatbot">With all three off, this is the chatbot you use today: a model plus your conversation. Helpful on Monday, and four surprises by Friday.</Copy>
<Copy k="verdict.other">{surprises} surprises this week. Each card names the capability that was missing.</Copy>
<Copy k="verdict.one">1 surprise this week. The card names the capability that was missing.</Copy>
<Copy k="insights.start">Everything is on and the week runs clean. Switch a capability off and watch which days go wrong.</Copy>
<Copy k="insights.cred.off">Thursday goes wrong. It works under Ravi's sign-in, so it can open anything Ravi can open.</Copy>
<Copy k="insights.cred.on">Thursday clears up. It works under its own name again, and its keys stop at its job.</Copy>
<Copy k="insights.mem.off">Tuesday and Friday go wrong. Every conversation starts from zero, for everyone on the team.</Copy>
<Copy k="insights.mem.on">Memory is back. Mara stops re-explaining the launch, and the digest keeps the freeze rule.</Copy>
<Copy k="insights.ctx.off">Wednesday goes wrong. It sees only what someone pastes in, so Jordan's cut never reaches it.</Copy>
<Copy k="insights.ctx.on">It reads #launch-room again. Jordan's cut is written there, so the plan drops the referral work on its own.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: e5e63d1941ee4285 */}
<Copy k="widget.description">
  Simulation: a fictional multiplayer agent starts a launch week with three
  capabilities switched on: its own identity and credentials, shared memory,
  and shared context. Toggling any capability off reveals which days of that
  week go wrong and names the missing capability as the cause, while a summary
  line tallies how many surprises occurred. Turning all three off shows the
  agent behaving like an ordinary single-player chatbot, helpful at first but
  increasingly unreliable. The goal is to make concrete why these three
  capabilities matter for effective human-agent teamwork, showing how losing
  each one causes specific, identifiable team breakdowns like repeated
  re-explaining, missed decisions, or inappropriate access, rather than just
  describing the capabilities abstractly.
</Copy>
<Copy k="widget.summary">
  Simulation: toggle a multiplayer agent's identity and credentials, shared
  memory, and shared context on or off to see which days of its launch week
  break down, each failure naming the missing capability.
</Copy>
`;export{e as default};