var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EducatorBuiltTools.tsx — the educator-built
    tools gallery (see academy-web src/components/mdx/WidgetCopy.tsx). Keys
    are machine identifiers — translate ONLY the text between the tags. The
    rows are the \`tool<n>\` run: \`.name\`, \`.what\` (what it does), \`.problem\`
    (problem it solves). */}

<Copy k="col.tool">Tool</Copy>
<Copy k="col.what">What it does</Copy>
<Copy k="col.problem">Problem it solves</Copy>

<Copy k="tool1.name">Your Future Career</Copy>
<Copy k="tool1.what">
  Helps students connect their interests to potential careers.
</Copy>
<Copy k="tool1.problem">
  One counselor for the whole school; needed more career-connected learning.
</Copy>

<Copy k="tool2.name">Fun Friday Planner</Copy>
<Copy k="tool2.what">
  Helps teachers, admins, and parents plan engaging Fridays.
</Copy>
<Copy k="tool2.problem">Friday was the lowest-attendance day of the week.</Copy>

<Copy k="tool3.name">Lyrics to Learning</Copy>
<Copy k="tool3.what">
  Generates ELA lessons (rhyming, vocab, storytelling) built around hip-hop.
</Copy>
<Copy k="tool3.problem">
  A teacher wanted to bring their passion into lesson planning.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 36569ab51629a0d8 */}
<Copy k="widget.description">
  Gallery: a reference table of tools built by educators through an AI
  educator development program, organized in three columns: the tool's name,
  what it does, and the classroom or school problem it was built to solve.
  Each entry shows a distinct project, such as one supporting career
  exploration, one aiding schedule or engagement planning, and one blending a
  teacher's personal interest into lesson design. The goal is to show
  concrete, varied examples of educators using AI to build something original
  rather than just complete a task, offering inspiration before learners
  attempt their own exercise of designing a tool to solve a problem in their
  own teaching practice.
</Copy>
<Copy k="widget.summary">
  Gallery: a three-column table listing tools educators built through an AI
  educator development program, naming each tool, what it does, and the
  classroom problem it addresses, offering inspiration before designing one's
  own tool.
</Copy>
`;export{e as default};