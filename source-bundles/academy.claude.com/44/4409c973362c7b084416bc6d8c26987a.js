var e=`---
kind: widget-copy
---

{/* Learner-visible copy for the ReadinessSelfCheck widget
    (an interactive exercise: control labels, on-screen labels, and one whole sentence per state or outcome).
    Keys are machine identifiers; translate ONLY the text between the tags.
    {tokens} are numbers or names the widget fills in at run time. */}

<Copy k="title">How ready is your team?</Copy>
<Copy k="sub">How strongly do you agree with the following statements? Answer for your team as it works today.</Copy>
<Copy k="scaleLabel">Agreement scale</Copy>
<Copy k="scale1">Strongly disagree</Copy>
<Copy k="scale2">Disagree</Copy>
<Copy k="scale3">Neutral</Copy>
<Copy k="scale4">Agree</Copy>
<Copy k="scale5">Strongly agree</Copy>
<Copy k="scaleLower1">strongly disagree</Copy>
<Copy k="scaleLower2">disagree</Copy>
<Copy k="scaleLower3">neutral</Copy>
<Copy k="scaleLower4">agree</Copy>
<Copy k="scaleLower5">strongly agree</Copy>
<Copy k="statements1.text">The information people and agents need is open and searchable, not kept in private documents and DMs.</Copy>
<Copy k="statements1.topic">open, searchable information</Copy>
<Copy k="statements2.text">We could write down who owns what on our team, agents included.</Copy>
<Copy k="statements2.topic">a written roster with clear owners, agents included</Copy>
<Copy k="statements3.text">Every teammate, person or agent, has the tools and access their job needs.</Copy>
<Copy k="statements3.topic">the right tools and access for each role</Copy>
<Copy k="statements4.text">Key work done by an agent can be checked with a rubric, a test, or a second agent before a person sees it.</Copy>
<Copy k="statements4.topic">a way to check agent work before a person sees it</Copy>
<Copy k="statements5.text">We have a written north star everyone on the team can point to.</Copy>
<Copy k="statements5.topic">a written north star</Copy>
<Copy k="readout.empty">Rate all five statements to build your prompt.</Copy>
<Copy k="readout.partial">{n} of 5 rated. Keep going; the prompt below fills in as you answer.</Copy>
<Copy k="readout.strong">You agree with all five. Your prompt asks Claude to help you pick a first pilot rather than fix a gap.</Copy>
<Copy k="readout.gaps1">Your lowest score is on {low}. The prompt below asks Claude to start your plan there.</Copy>
<Copy k="readout.gaps2">Your lowest scores are on {low}. The prompt below asks Claude to start your plan there.</Copy>
<Copy k="readout.tied">You rated all five areas the same. The prompt below asks Claude to help you choose where to start.</Copy>
<Copy k="promptHead">Your prompt for Claude</Copy>
<Copy k="promptIntro">I lead a team that is getting ready to work with AI agents in our shared spaces (multiplayer AI), and I want a practical plan. I just rated my team on five readiness statements, from 1 (strongly disagree) to 5 (strongly agree):</Copy>
<Copy k="promptLine">{statement} My rating: {score} ({level}).</Copy>
<Copy k="promptPending">{statement} My rating: (not answered yet).</Copy>
<Copy k="promptAskGaps">Start with where I rated my team lowest: {low}. For each of those areas, ask me two short questions about how my team works today. Ask one at a time and wait for my answers. Then give me a two-week plan with one concrete change per area, who should own it, and how we would know it worked. Keep it to one page and plain language.</Copy>
<Copy k="promptAskTied">I rated all five areas the same, so help me choose where to start. Ask me one short question per area about how my team works today, one at a time, and wait for my answers. Then tell me which one or two areas to tackle first and why, and give me a two-week plan with one concrete change per area, who should own it, and how we would know it worked. Keep it to one page and plain language.</Copy>
<Copy k="promptAskPending">Once I have rated all five, start with the areas I rated lowest. For each one, ask me two short questions about how my team works today, one at a time, then give me a two-week plan with one concrete change per area, who should own it, and how we would know it worked.</Copy>
<Copy k="promptAskStrong">All five look strong. Ask me three short questions, one at a time, to pressure-test whether that is really true day to day. Then suggest the smallest first pilot for one shared channel with one agent and one visible job, and what we should review in week one.</Copy>
<Copy k="foot">Five statements to start a conversation with your team. There's no score, and nothing you choose here is saved.</Copy>
`;export{e as default};