var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx — the fillable learner workbook (see
    academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim; a token's bold text
    is the sub-key of the same name. Runs (\`guard.rule<n>\`, \`warm.item<n>\`,
    \`a1.check<n>\`, \`a2.task<n>\`) are the inventory — adding an item is a
    copy-only change. \`baked.*\` appear only in the downloaded copy. */}

<Copy k="title">Learner workbook</Copy>
<Copy k="sub">
  Your hands-on companion to the AI Fluency workshop. Work through it as we
  go, or on your own afterward. Your answers stay in your browser. When you
  are done, use the buttons at the bottom to save a copy to keep, print, or
  share.
</Copy>
<Copy k="placeholder">Type here...</Copy>

<Copy k="guard.eyebrow">Before you start</Copy>
<Copy k="guard.h">Three guardrails</Copy>
<Copy k="guard.rule1">
  {lead} You do not have to be a tech expert to use AI well.
</Copy>
<Copy k="guard.rule1.lead">No prior knowledge needed.</Copy>
<Copy k="guard.rule2">{lead} Check what is allowed before you begin.</Copy>
<Copy k="guard.rule2.lead">Use your district’s approved tool.</Copy>
<Copy k="guard.rule3">{lead} No names, IDs, or personal details, ever.</Copy>
<Copy k="guard.rule3.lead">Never enter anything that identifies a student.</Copy>

<Copy k="warm.eyebrow">Warm up</Copy>
<Copy k="warm.h">Have you ever...?</Copy>
<Copy k="warm.p">
  Check any that ring true. The goal is awareness, not perfection.
</Copy>
<Copy k="warm.item1">Used an AI tool to write a quiz or lesson plan</Copy>
<Copy k="warm.item2">
  Felt unsure whether an AI-generated resource was accurate
</Copy>
<Copy k="warm.item3">Wondered if students are submitting AI-written work</Copy>
<Copy k="warm.item4">Copied AI output without reviewing it</Copy>
<Copy k="warm.item5">Wanted to use AI but did not know where to start</Copy>
<Copy k="warm.moment.label">One AI moment I want to get better at</Copy>

<Copy k="fw.eyebrow">The 4D Framework</Copy>
<Copy k="fw.h">The 4Ds at a glance</Copy>
<Copy k="fw.p">
  Two loops. The inner loop is how you work with AI. The outer loop is
  whether, and how much, you should.
</Copy>
<Copy k="fw.description.h">Description</Copy>
<Copy k="fw.description.p">
  Tell AI what you need. A strong prompt has five parts: {parts}
</Copy>
<Copy k="fw.description.p.parts">Role, Task, Context, Format, Constraint.</Copy>
<Copy k="fw.discernment.h">Discernment</Copy>
<Copy k="fw.discernment.p">
  Judge what comes back. Run {check}: Correct, Human, Equitable,
  Curriculum-aligned, Kid-safe.
</Copy>
<Copy k="fw.discernment.p.check">CHECK</Copy>
<Copy k="fw.delegation.h">Delegation</Copy>
<Copy k="fw.delegation.p">
  Decide what to hand to AI, and what to keep because doing the work is the
  point.
</Copy>
<Copy k="fw.diligence.h">Diligence</Copy>
<Copy k="fw.diligence.p">
  Own whatever comes out. Verify it, and disclose where it matters. Your name
  is on it.
</Copy>

<Copy k="a1.eyebrow">Activity 1 · Inner loop</Copy>
<Copy k="a1.h">Describe it, then CHECK it</Copy>
<Copy k="a1.p">
  Pick a real, low-stakes task. Build a strong prompt, try it in your
  approved tool, then judge the result.
</Copy>
<Copy k="a1.task.label">The task</Copy>
<Copy k="a1.task.placeholder">
  e.g., a first-draft rubric for a 5th-grade essay
</Copy>
<Copy k="a1.role.label">Role (who should AI be?)</Copy>
<Copy k="a1.what.label">Task (what should it do?)</Copy>
<Copy k="a1.context.label">Context (what should it know?)</Copy>
<Copy k="a1.format.label">Format (what should it look like?)</Copy>
<Copy k="a1.constraint.label">Constraint (what are the limits?)</Copy>
<Copy k="a1.check.label">Now run CHECK on the output</Copy>
<Copy k="a1.check1">{letter}orrect</Copy>
<Copy k="a1.check1.letter">C</Copy>
<Copy k="a1.check2">{letter}uman</Copy>
<Copy k="a1.check2.letter">H</Copy>
<Copy k="a1.check3">{letter}quitable</Copy>
<Copy k="a1.check3.letter">E</Copy>
<Copy k="a1.check4">{letter}urriculum-aligned</Copy>
<Copy k="a1.check4.letter">C</Copy>
<Copy k="a1.check5">{letter}id-safe</Copy>
<Copy k="a1.check5.letter">K</Copy>
<Copy k="a1.change.label">What would you change before using it?</Copy>

<Copy k="a2.eyebrow">Activity 2 · Outer loop</Copy>
<Copy k="a2.h">The delegation matrix</Copy>
<Copy k="a2.p">
  Sort each task by {impact} and {risk}. Tap a task to select it, then tap
  the box where it belongs. Tap a placed task to pick it up again.
</Copy>
<Copy k="a2.p.impact">impact</Copy>
<Copy k="a2.p.risk">AI risk</Copy>
<Copy k="a2.tray.aria">Unsorted tasks</Copy>
<Copy k="a2.task1">Writing a first-draft rubric</Copy>
<Copy k="a2.task2">Drafting a classroom newsletter</Copy>
<Copy k="a2.task3">Identifying students who need extra support</Copy>
<Copy k="a2.task4">Giving feedback on an essay draft</Copy>
<Copy k="a2.task5">Building relationships with students</Copy>
<Copy k="a2.task6">Planning a hard conversation</Copy>
<Copy k="a2.quad.aria">{title}: {sub}</Copy>
<Copy k="a2.quad.full.title">Delegate fully</Copy>
<Copy k="a2.quad.full.sub">High impact, low AI risk</Copy>
<Copy k="a2.quad.review.title">Delegate with review</Copy>
<Copy k="a2.quad.review.sub">High impact, high AI risk</Copy>
<Copy k="a2.quad.occasional.title">Delegate occasionally</Copy>
<Copy k="a2.quad.occasional.sub">Low impact, low AI risk</Copy>
<Copy k="a2.quad.human.title">Keep human</Copy>
<Copy k="a2.quad.human.sub">Low impact, high AI risk</Copy>

<Copy k="a3.eyebrow">Activity 3 · Outer loop</Copy>
<Copy k="a3.h">Run the gates on a real task</Copy>
<Copy k="a3.p">
  Before you open the tool, decide what to delegate. After, decide how you
  will own the result.
</Copy>
<Copy k="a3.task.label">The task</Copy>
<Copy k="a3.delegation.label">
  Delegation: what AI will touch, what stays yours
</Copy>
<Copy k="a3.diligence.label">
  Diligence: how you’ll verify and disclose it
</Copy>

<Copy k="commit.eyebrow">Commit and close</Copy>
<Copy k="commit.h">One real task in the next week</Copy>
<Copy k="commit.p">
  Make it real, not hypothetical. Name one task you will bring AI into this
  week, using the loops you just practiced.
</Copy>
<Copy k="commit.week.label">This week I will...</Copy>
<Copy k="commit.leaving.label">
  How am I leaving the room? (comfortable teaching it / learned something new
  / still unsure)
</Copy>

<Copy k="dl.p">
  Save your work. Download a copy to keep, print, or share with your
  learners.
</Copy>
<Copy k="dl.html">Download as HTML</Copy>
<Copy k="dl.pdf">Download as PDF</Copy>

<Copy k="baked.brand">AFT x Anthropic</Copy>
<Copy k="baked.program">AI Fluency for pK-12 · Train the Trainer</Copy>
<Copy k="baked.docTitle">AI Fluency Learner Workbook</Copy>
`;export{e as default};