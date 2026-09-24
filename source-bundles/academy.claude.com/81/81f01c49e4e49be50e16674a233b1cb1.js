var e=`---
kind: widget-copy
---

{/* Learner-visible copy for the RunLaunchWeek widget
    (an interactive exercise: control labels, on-screen labels, and one whole sentence per state or outcome).
    Keys are machine identifiers; translate ONLY the text between the tags.
    {tokens} are numbers or names the widget fills in at run time. */}

<Copy k="title">Run your own launch</Copy>
<Copy k="sub">The Lantern team has one week before their health tracker app launches, and the north star is already pinned in #launch-room. Pick who does each job, then run the week and read how each day went.</Copy>
<Copy k="reset">Reset</Copy>
<Copy k="controlsLabel">Set up the week</Copy>
<Copy k="northStar">80% of new users complete the product onboarding flow</Copy>
<Copy k="starKey">North star</Copy>
<Copy k="controls.jobs.name">Assign who does each job</Copy>
<Copy k="controls.jobs.desc">For each job: people do it by hand, Claude drafts and a person decides, or Claude owns it outright.</Copy>
<Copy k="controls.digest.name">Morning digest of app mentions</Copy>
<Copy k="controls.digest.short">Morning digest</Copy>
<Copy k="controls.themes.name">Beta feedback themes</Copy>
<Copy k="controls.themes.short">Feedback themes</Copy>
<Copy k="controls.replies.name">Replies to beta users</Copy>
<Copy k="controls.replies.short">Beta replies</Copy>
<Copy k="controls.gonogo.name">Friday go/no-go call</Copy>
<Copy k="controls.gonogo.short">Go/no-go call</Copy>
<Copy k="controls.who.people">People</Copy>
<Copy k="controls.who.drafts">Claude drafts, a person decides</Copy>
<Copy k="controls.who.claude">Claude</Copy>
<Copy k="controls.cellLabel">{job}: {who}</Copy>
<Copy k="run">Run the week</Copy>
<Copy k="running">Running the week</Copy>
<Copy k="replay">Replay</Copy>
<Copy k="days1">Mon</Copy>
<Copy k="days2">Tue</Copy>
<Copy k="days3">Wed</Copy>
<Copy k="days4">Thu</Copy>
<Copy k="days5">Fri</Copy>
<Copy k="daysLong1">Monday</Copy>
<Copy k="daysLong2">Tuesday</Copy>
<Copy k="daysLong3">Wednesday</Copy>
<Copy k="daysLong4">Thursday</Copy>
<Copy k="daysLong5">Friday</Copy>
<Copy k="cast.ravi">Ravi</Copy>
<Copy k="cast.mara">Mara</Copy>
<Copy k="cast.jordan">Jordan</Copy>
<Copy k="cast.sam">Sam</Copy>
<Copy k="board.title">How the week went in #launch-room</Copy>
<Copy k="board.label">How launch week went, Monday to Friday</Copy>
<Copy k="board.empty">Not run yet</Copy>
<Copy k="board.starJob">Toward the north star</Copy>
<Copy k="board.owners.people">{name}, by hand</Copy>
<Copy k="board.owners.call">{name} and the team</Copy>
<Copy k="board.owners.drafts">Claude → {name}</Copy>
<Copy k="board.owners.claude">Claude alone</Copy>
<Copy k="board.owners.star">Claude noticed</Copy>
<Copy k="board.owners.idle">No agent job</Copy>
<Copy k="board.legend.check">Landed well</Copy>
<Copy k="board.legend.question">Cost the team time</Copy>
<Copy k="board.legend.bang">A person had to step in</Copy>
<Copy k="board.sum.check">{n} landed well</Copy>
<Copy k="board.sum.question">{n} cost the team time</Copy>
<Copy k="board.sum.bang">{n} needed a person to step in</Copy>
<Copy k="board.sumLine">{list}.</Copy>
<Copy k="board.sumAll">All 5 landed well. Claude ran the routine job and drafted where a person's judgment was needed, and people made the launch call.</Copy>
<Copy k="board.cardLabel">{day}. {job}. {owner}. {status}: {text}</Copy>
<Copy k="cards.d_c">Claude posted the mentions at 7 each morning and flagged two bug reports for Sam before support opened.</Copy>
<Copy k="cards.d_d">The digest was ready at 7 but waited on Mara's approval and went out after standup. After weeks of clean digests, the check had nothing left to catch.</Copy>
<Copy k="cards.d_p">Mara pasted the mentions together by hand each morning, and the digest landed after lunch.</Copy>
<Copy k="cards.t_d">Claude grouped 200 comments into themes overnight. Jordan ranked the confusing sign-up step first and had a fix started by noon.</Copy>
<Copy k="cards.t_c">Claude grouped 200 comments by 8 and ranked the themes by how often each came up. The confusing sign-up step sat mid-list until Jordan reranked it on Thursday.</Copy>
<Copy k="cards.t_p">Jordan sorted 200 comments by hand. The themes were ready Thursday, two days later than the team needed them.</Copy>
<Copy k="cards.s_a">Beta completion dipped Tuesday. Because Claude knew the goal, a drop-off analysis was ready for standup and Jordan shipped a fix that day.</Copy>
<Copy k="cards.s_n">With no jobs, Claude sat idle. Tuesday's dip in beta completion went unnoticed until Mara saw it Thursday.</Copy>
<Copy k="cards.r_d">Claude drafted all five replies from the room's history. Sam fixed one date and sent them before lunch.</Copy>
<Copy k="cards.r_c">Claude answered all five users within the hour, and one reply promised a fix date nobody had agreed to. Sam had to write back to correct it.</Copy>
<Copy k="cards.r_p">Sam wrote all five replies by hand and every user heard back by Thursday. It took an afternoon, and every reply sounded like Sam.</Copy>
<Copy k="cards.g_p">The call was always the team's to make. They met at 2 with the week in front of them and called go together.</Copy>
<Copy k="cards.g_d">At 9 Claude posted a draft recommendation to go. By the meeting half the team treated it as settled, and Ravi had to reopen the question.</Copy>
<Copy k="cards.g_c">Claude announced go in #general at 9 on its own. Ravi pulled the post, and the team made the call themselves at 2.</Copy>
<Copy k="insights.start">Everything runs by hand to start. Pick who does each job, then run the week.</Copy>
<Copy k="insights.after">Read each day, then change one owner and run the week again.</Copy>
<Copy k="insights.afterAll">Every day landed well. Change an owner to see what breaks, or reset and start over.</Copy>
<Copy k="insights.digest.people">Mara assembles the digest by hand. Run the week and watch Monday.</Copy>
<Copy k="insights.digest.drafts">Claude drafts the digest and Mara approves it. Run the week and watch Monday.</Copy>
<Copy k="insights.digest.claude">Claude posts the digest on its own. Run the week and watch Monday.</Copy>
<Copy k="insights.themes.people">Jordan sorts the beta feedback by hand. Run the week and watch Tuesday.</Copy>
<Copy k="insights.themes.drafts">Claude groups the feedback and Jordan decides what matters. Run the week and watch Tuesday.</Copy>
<Copy k="insights.themes.claude">Claude handles the feedback themes alone. Run the week and watch Tuesday.</Copy>
<Copy k="insights.replies.people">Sam writes every beta reply by hand. Run the week and watch Thursday.</Copy>
<Copy k="insights.replies.drafts">Claude drafts the replies and Sam sends them. Run the week and watch Thursday.</Copy>
<Copy k="insights.replies.claude">Claude replies to beta users directly. Run the week and watch Thursday.</Copy>
<Copy k="insights.gonogo.people">People make the launch call. Run the week and watch Friday.</Copy>
<Copy k="insights.gonogo.drafts">Claude drafts the launch call for Ravi. Run the week and watch Friday.</Copy>
<Copy k="insights.gonogo.claude">Claude makes the launch call itself. Run the week and watch Friday.</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: f6fe266a46522354 */}
<Copy k="widget.description">
  Simulation: the learner assigns each of four jobs in a one-week product
  launch to one of three owners — people working by hand, Claude drafting with
  a person deciding, or Claude acting alone — then runs the week to see one
  outcome card land per weekday, each marked as landing well, costing time, or
  needing a person to step in. A north star goal is fixed and shown
  throughout. A midweek card shows whether Claude brings the team useful work
  toward the goal that nobody assigned. The exercise teaches that the right
  owner depends on the nature of each job, and that a shared goal lets an
  agent proactively contribute beyond its assigned tasks.
</Copy>
<Copy k="widget.summary">
  Simulation: assign four launch-week jobs to people, Claude drafting for a
  person to decide, or Claude alone, then run the week to see each day's
  outcome. Teaches how the right owner depends on the job, and how a shared
  goal lets Claude contribute proactively.
</Copy>
`;export{e as default};