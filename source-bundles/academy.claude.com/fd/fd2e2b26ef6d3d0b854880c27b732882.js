var e=`---
kind: widget-copy
---

{/* Learner-visible copy for the SuperSuitToSharedRoom widget (an animated explainer: s1, s2, … are the scene
    captions, which double as its transcript; "about" is the companion summary under the player).
    Keys are machine identifiers; translate ONLY the text between the tags.
    {tokens} are numbers or names the widget fills in at run time.
    The shared player chrome (Play, Pause, Scene {i} of {n}, …) lives in _shared.copy.mdx. */}

<Copy k="title">From super suit to shared room</Copy>
<Copy k="about">Multiplayer AI is like being on the best team you've ever been on: humans and agents working in one shared space.</Copy>
<Copy k="s1">Most of us met AI as a chatbot assistant. We chatted one-on-one to create work products. It's a single-player experience.</Copy>
<Copy k="s2">Using single-player AI is like putting on an “AI super suit” at work. It helps you get more done on the individual tasks you're assigned.</Copy>
<Copy k="s3">When everyone on your team is using single-player AI, information can get siloed. Four people ask for similar work and learnings are not shared across the agents.</Copy>
<Copy k="s4">This is inefficient and everyone is operating off of slightly different information. This is parallel work, not team work.</Copy>
<Copy k="s5">Multiplayer AI is different. It's like being on the best team you've ever been on. Humans and agents operate in a shared space together.</Copy>
<Copy k="s6">For example, Mara asks once and Claude answers once, then everyone benefits and gets to read the same response, refining it together.</Copy>
<Copy k="s7">What the team writes in the room becomes institutional knowledge that the team and the company can build on.</Copy>
<Copy k="s8">Multiplayer AI accelerates alignment, and every piece of work an agent completes benefits the entire team's expertise.</Copy>
<Copy k="ravi">Ravi</Copy>
<Copy k="mara">Mara</Copy>
<Copy k="jordan">Jordan</Copy>
<Copy k="sam">Sam</Copy>
<Copy k="lee">Lee · new</Copy>
<Copy k="assistant">AI assistant</Copy>
<Copy k="you">You</Copy>
<Copy k="theAI">The AI</Copy>
<Copy k="agent">Claude</Copy>
<Copy k="agent2">Claude · notes</Copy>
<Copy k="room">#launch-room</Copy>
<Copy k="company">the company</Copy>
<Copy k="singlePlayer">Single-player AI</Copy>
<Copy k="parallel">Parallel work</Copy>
<Copy k="multiPlayer">Multiplayer AI</Copy>
<Copy k="ask">Yesterday's meeting?</Copy>
<Copy k="summary">Summary</Copy>
<Copy k="details1">3 action items</Copy>
<Copy k="details2">4 action items</Copy>
<Copy k="details3">Owner: Mara</Copy>
<Copy k="details4">Owner: Jordan</Copy>
<Copy k="ask1">Draft my launch update?</Copy>
<Copy k="ans1">Here's a first draft.</Copy>
<Copy k="ans">Summary of yesterday's meeting</Copy>
<Copy k="ansV2">Summary v2, owners added</Copy>
<Copy k="seen">seen by 4</Copy>
<Copy k="reply">1 reply from Sam</Copy>
<Copy k="wrote1">Launch plan, draft one</Copy>
<Copy k="wrote2">Decision log started</Copy>
<Copy k="close1">Multiplayer AI keeps the team aligned.</Copy>
<Copy k="close2">Every agent's work draws on the team's expertise.</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 6640c7f3e4d72900 */}
<Copy k="widget.description">
  Film: an eight-scene animated explainer contrasting single-player and
  multiplayer AI on a team. It opens with one user chatting privately with an
  AI assistant, shown as an "AI super suit" that makes that individual faster.
  It then shows four teammates each sealed in their own private chat, asking
  their assistants the same kind of question and getting back slightly
  different, non-matching write-ups — parallel work rather than teamwork. The
  scene shifts to a shared room where one person asks once, the assistant
  answers once, everyone reads and refines that single answer together, and
  what gets written becomes a shared record that a new team member can read
  immediately. The goal is to show that single-player AI boosts individual
  speed but silos information, while multiplayer AI keeps a team aligned and
  turns agent work into shared, reusable knowledge.
</Copy>
<Copy k="widget.summary">
  Film: an eight-scene animated explainer that plays on its own, contrasting a
  user working privately with an AI assistant against a team sharing one room
  with Claude. It shows siloed, mismatched answers versus one shared answer
  everyone reads, refines, and reuses as team knowledge.
</Copy>
`;export{e as default};