var e=`---
kind: widget-copy
---

{/* Learner-visible copy for the MadeOfParts widget (an animated explainer: s1, s2, … are the scene
    captions, which double as its transcript; "about" is the companion summary under the player).
    Keys are machine identifiers; translate ONLY the text between the tags.
    {tokens} are numbers or names the widget fills in at run time.
    The shared player chrome (Play, Pause, Scene {i} of {n}, …) lives in _shared.copy.mdx. */}

<Copy k="title">What a multiplayer agent is made of</Copy>
<Copy k="about">A traditional chatbot operates as you and knows what you know. A multiplayer agent has its own identity and credentials, a memory built from everyone it works with, and the context the team shares with it.</Copy>
<Copy k="s1">A traditional chatbot operates as you. It uses your credentials and permissions. It knows what you know and the tools you use.</Copy>
<Copy k="s2">Your agent knows a lot about things in your expertise but it won't know the things your colleagues are doing or the decisions they've made about how to complete team-related tasks.</Copy>
<Copy k="s3">Multiplayer AI has its own identity and credentials. Multiplayer agents operate as themselves, not on your behalf, and they can interact with many different people across time, collecting context to store in its memory along the way.</Copy>
<Copy k="s4">The agent having its own credentials allows you to give it the right permissions and the right tools. It also ensures that the agent will leave a clear record of its work so you can ensure it acts as you'd want. This allows you to coach its performance over time.</Copy>
<Copy k="s5">Every person on the team can share context with a multiplayer agent and it gets more knowledgeable as time goes along. But of course, an agent is only as smart as what you share with it.</Copy>
<Copy k="s6">In summary, for an agent to become a member of a human-agent team, it needs its own credentials, memory, and shared context.</Copy>
<Copy k="you">Ravi</Copy>
<Copy k="lead">Jordan</Copy>
<Copy k="teammate1">Mara</Copy>
<Copy k="teammate2">Sam</Copy>
<Copy k="newHire">Lee</Copy>
<Copy k="agent">Claude</Copy>
<Copy k="agentBadge">Claude · launch tracker</Copy>
<Copy k="sharedContext">#launch-room</Copy>
<Copy k="model">a model</Copy>
<Copy k="chatbotRef">a traditional chatbot</Copy>
<Copy k="ask1">Help me plan our app launch</Copy>
<Copy k="reply1">Here's a draft plan</Copy>
<Copy k="chatbotName">Chatbot</Copy>
<Copy k="asYou">signed in as Ravi</Copy>
<Copy k="yourDocs">Ravi's docs</Copy>
<Copy k="tracker">Launch tracker</Copy>
<Copy k="editedByClaude">edited by Claude</Copy>
<Copy k="editedByRavi">edited by Ravi</Copy>
<Copy k="billing">Billing</Copy>
<Copy k="notThisRole">not this role</Copy>
<Copy k="cut">Cut the referral banner</Copy>
<Copy k="maraNotes">Mara's notes</Copy>
<Copy k="dayMon">Mon</Copy>
<Copy k="dayTue">Tue</Copy>
<Copy k="dayWed">Wed</Copy>
<Copy k="dayThu">Thu</Copy>
<Copy k="dayFri">Fri</Copy>
<Copy k="mem1">Launch: the 14th</Copy>
<Copy k="mem2">Freeze: 48 hours before</Copy>
<Copy k="mem3">Mara owns feedback</Copy>
<Copy k="ctx1">Launch dates are final</Copy>
<Copy k="ctx2">Standup notes for today</Copy>
<Copy k="ctx3">Three feedback themes</Copy>
<Copy k="needCred">Its own credentials</Copy>
<Copy k="needMem">Memory</Copy>
<Copy k="needCtx">Shared context</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 04c8575f022ec33d */}
<Copy k="widget.description">
  Film: this narrated animation contrasts a traditional chatbot with a
  multiplayer agent. The chatbot operates signed in as the user, borrowing
  their credentials, and only knows what that one person knows, leaving
  colleagues' decisions and notes unread outside it. The multiplayer agent
  instead has its own identity and credentials, so work it does carries its
  own signature and opens only the tools its role permits, creating a clear,
  coachable record. Its memory starts empty and grows as different teammates
  hand it context over time, and everyone on the team can post into a shared
  space it reads from. The closing idea: a multiplayer agent needs its own
  credentials, its own memory, and shared context from the whole team, and it
  is only as capable as what the team actually shares with it.
</Copy>
<Copy k="widget.summary">
  Film: a narrated animation contrasting a traditional chatbot, which signs in
  as the user and knows only what they know, with a multiplayer agent that has
  its own identity, a memory built over time, and shared context the whole
  team contributes.
</Copy>
`;export{e as default};