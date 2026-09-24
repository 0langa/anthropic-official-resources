var e=`---
kind: widget-copy
---

{/* Learner-visible copy for the FiveQuestions widget (an animated explainer: s1, s2, … are the scene
    captions, which double as its transcript; "about" is the companion summary under the player).
    Keys are machine identifiers; translate ONLY the text between the tags.
    {tokens} are numbers or names the widget fills in at run time.
    The shared player chrome (Play, Pause, Scene {i} of {n}, …) lives in _shared.copy.mdx. */}

<Copy k="title">Five questions to assess your team's readiness for multiplayer AI</Copy>
<Copy k="about">A short readiness check to run before you bring multiplayer AI to your team, and why each question matters.</Copy>
<Copy k="s1">Before you implement multiplayer AI, it's good to consider how ready your team is. Here are five questions to get started.</Copy>
<Copy k="s2">One. Is what people and agents need open and searchable? If most of your team's work lives in private documents and DMs, it will be hard for agents to stay up to date.</Copy>
<Copy k="s3">Two. Can you write down who owns what, agents included? Without clear roles, work can be duplicated.</Copy>
<Copy k="s4">Three. Does every teammate have the tools for the job? An agent without access does thin work, guesses, or makes mistakes.</Copy>
<Copy k="s5">Four. Can key work done by an agent be checked before a person sees it? A rubric, a test, or a second agent reviewing can reduce the amount of time required to finalize an agent's work.</Copy>
<Copy k="s6">Five. Is there a north star everyone can point to? Without a clear goal, it's hard for humans and agents to be proactive about what's needed next.</Copy>
<Copy k="agent">Claude</Copy>
<Copy k="ravi">Ravi</Copy>
<Copy k="listHead">Multiplayer AI readiness</Copy>
<Copy k="nums1">1</Copy>
<Copy k="nums2">2</Copy>
<Copy k="nums3">3</Copy>
<Copy k="nums4">4</Copy>
<Copy k="nums5">5</Copy>
<Copy k="items1">Open and searchable</Copy>
<Copy k="items2">Clear owners, agents included</Copy>
<Copy k="items3">The right tools for every teammate</Copy>
<Copy k="items4">A check before a person sees the work</Copy>
<Copy k="items5">A north star everyone can point to</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: da75e950daee3cd2 */}
<Copy k="widget.description">
  Film: a narrated animation builds a five-item "multiplayer AI readiness"
  checklist, ticking off one item at a time with a literal illustration for
  each. It covers whether team information is open and searchable rather than
  stuck in private documents and messages, whether ownership is written down
  including for agents, whether every teammate (agents included) has the tools
  needed for their work, whether an agent's key work gets checked by a rubric,
  test, or second reviewer before a person sees it, and whether the team has a
  shared written goal everyone can point to. The goal is to help a team
  self-assess its readiness before introducing multiplayer AI, using these
  five questions as a diagnostic checklist for planning a successful rollout.
</Copy>
<Copy k="widget.summary">
  Film: a narrated animation builds a five-item checklist for assessing a
  team's readiness for multiplayer AI, illustrating each question as its row
  ticks off, from open information to a shared written goal.
</Copy>
`;export{e as default};