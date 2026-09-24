var e=`---
kind: widget-copy
---

{/* Learner-visible copy for ReflectionCard.tsx: a private reflection card
    with prompts for mindsets, skills, and access, then a comparison step.
    The card takes no input and stores nothing. Keys are machine
    identifiers; translate ONLY the text between the tags. */}

<Copy k="mindsets.label">Mindsets</Copy>
<Copy k="mindsets.q1">Which of the seven mindsets do most people on this team already hold today?</Copy>
<Copy k="mindsets.q2">Which one would you work on first?</Copy>
<Copy k="skills.label">Skills</Copy>
<Copy k="skills.q1">Name one hard, recurring task the team owns.</Copy>
<Copy k="skills.q2">Does it succeed more often than it did three months ago?</Copy>
<Copy k="access.label">Access</Copy>
<Copy k="access.q1">What can everyone on this team use today?</Copy>
<Copy k="access.q2">What can only a few people use?</Copy>
<Copy k="compare.label">Then compare</Copy>
<Copy k="compare.q1">Ask three people in different roles on the team the same questions and compare their answers with yours. The places where your answers differ from theirs are where to look first.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 17f55f3d47f001d4 */}
<Copy k="widget.description">
  Exercise: private reflection prompts for one team, grouped by the lesson's
  three levers. For mindsets, the prompts ask which of the seven mindsets most
  people on the team already hold, and which one to work on first. For skills,
  they ask for one hard, recurring task the team owns, and whether it succeeds
  more often than it did three months ago. For access, they ask what everyone
  on the team can use today, and what only a few people can use. A last step
  asks the reader to put the same questions to three people in different roles
  and compare answers. Where the answers differ is where to look first.
</Copy>
<Copy k="widget.summary">
  Exercise: private reflection prompts for one team, covering mindsets,
  skills, and access, then comparing your answers with colleagues in different
  roles to spot where views diverge.
</Copy>
`;export{e as default};