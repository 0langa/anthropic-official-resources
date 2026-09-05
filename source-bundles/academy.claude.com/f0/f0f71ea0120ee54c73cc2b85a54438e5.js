var e=`---
kind: widget-copy
---

{/* Learner-visible copy for the GrowTheTeam widget
    (an interactive exercise: control labels, on-screen labels, and one whole sentence per state or outcome).
    Keys are machine identifiers; translate ONLY the text between the tags.
    {tokens} are numbers or names the widget fills in at run time. */}

<Copy k="title">See the impact of siloed work as the team grows</Copy>
<Copy k="reset">Reset</Copy>
<Copy k="controlsLabel">Team settings</Copy>
<Copy k="controls.size.name">Team size</Copy>
<Copy k="controls.size.desc">People who each need the weekly meeting summary, feedback themes and announcement draft.</Copy>
<Copy k="controls.size.unit">Team of {n}</Copy>
<Copy k="controls.mode.name">How the team uses AI</Copy>
<Copy k="controls.mode.desc">Private assistants, or agents in the team's shared channel.</Copy>
<Copy k="controls.mode.options.alone">Everyone uses AI alone</Copy>
<Copy k="controls.mode.options.shared">Agents in the team's shared channel</Copy>
<Copy k="controls.weeks.name">Time</Copy>
<Copy k="controls.weeks.desc">How long the team keeps working this way.</Copy>
<Copy k="controls.weeks.options.1">1 week</Copy>
<Copy k="controls.weeks.options.4">4 weeks</Copy>
<Copy k="controls.weeks.options.12">12 weeks</Copy>
<Copy k="metrics.duplicates">Duplicate requests so far</Copy>
<Copy k="metrics.versions">Versions of the meeting summary</Copy>
<Copy k="metrics.newHireCanRead">Posts a new hire can search</Copy>
<Copy k="viz.agent">Claude</Copy>
<Copy k="viz.agent2">Claude · notes</Copy>
<Copy k="viz.room">#launch-room</Copy>
<Copy k="viz.names1">Ravi</Copy>
<Copy k="viz.names2">Mara</Copy>
<Copy k="viz.names3">Jordan</Copy>
<Copy k="viz.names4">Sam</Copy>
<Copy k="viz.names5">Lee</Copy>
<Copy k="viz.names6">Priya</Copy>
<Copy k="viz.names7">Ode</Copy>
<Copy k="viz.names8">Jun</Copy>
<Copy k="viz.summary">Meeting summary</Copy>
<Copy k="viz.details1">3 action items</Copy>
<Copy k="viz.details2">4 action items</Copy>
<Copy k="viz.details3">Owner: Mara</Copy>
<Copy k="viz.details4">Owner: ?</Copy>
<Copy k="viz.details5">Ship Friday</Copy>
<Copy k="viz.details6">Ship Monday?</Copy>
<Copy k="viz.details7">2 action items</Copy>
<Copy k="viz.details8">Owner: Sam</Copy>
<Copy k="viz.sharedCard">Meeting summary · Claude</Copy>
<Copy k="viz.readBy">read by {n}</Copy>
<Copy k="viz.posts">{n} posts</Copy>
<Copy k="viz.aria">{title}. Team of {N}, {mode}: {versions} versions of the meeting summary and {duplicates} duplicate requests so far.</Copy>
<Copy k="insights.start">Four people each ask a private assistant for the same three things every week. Drag, switch, and watch what piles up.</Copy>
<Copy k="insights.size@1">A team of one repeats nothing either way. The cost only appears when a second person asks for the same summary.</Copy>
<Copy k="insights.size.alone">Each extra person brings one more private assistant and one more version of yesterday's meeting: {N} people, {versions} summaries that almost agree.</Copy>
<Copy k="insights.size.shared">Each extra person is one more reader of the same summary in #launch-room, and there is still one version to act on.</Copy>
<Copy k="insights.mode.alone">With {N} private assistants, the meeting summary, the feedback themes and the announcement draft each got written {N} times this week.</Copy>
<Copy k="insights.mode.shared">Mara asked once in #launch-room, the team's agent answered once, and {N} people read and refined the same summary.</Copy>
<Copy k="insights.weeks.alone">After {W} the team has made {duplicates} duplicate requests, and every answer stayed in a private window a new hire cannot search.</Copy>
<Copy k="insights.weeks.shared">After {W} there are {newHireCanRead} posts in the room. A new hire reads how the launch has gone on day one.</Copy>
`;export{e as default};