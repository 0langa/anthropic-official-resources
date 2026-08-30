var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx — "The Five Lenses of Discernment"
    tab explorer (see academy-web src/components/mdx/WidgetCopy.tsx). Keys
    are machine identifiers — translate ONLY the text between the tags. */}

<Copy k="title">The Five Lenses of Discernment</Copy>
<Copy k="intro">
  Lens 1 is easy to test — run it and see. By Lens 5, you’re making judgment
  calls AI can’t make for you.
</Copy>
<Copy k="aria.tabs">Lenses</Copy>
<Copy k="failureLabel">Common AI failure</Copy>

<Copy k="lens.functional.short">Lens 1</Copy>
<Copy k="lens.functional.name">Functional Integrity</Copy>
<Copy k="lens.functional.question">Does it work?</Copy>
<Copy k="lens.functional.check">
  Produces correct output for real inputs, not just test data
</Copy>
<Copy k="lens.functional.failure">
  Code that passes unit tests but breaks on real data the prompt never
  covered
</Copy>

<Copy k="lens.production.short">Lens 2</Copy>
<Copy k="lens.production.name">Production Readiness</Copy>
<Copy k="lens.production.question">Does it work well?</Copy>
<Copy k="lens.production.check">
  Handles concurrent users without race conditions
</Copy>
<Copy k="lens.production.failure">
  Smooth in dev, broken under load or behind a real infrastructure stack
</Copy>

<Copy k="lens.fit.short">Lens 3</Copy>
<Copy k="lens.fit.name">Problem Fit</Copy>
<Copy k="lens.fit.question">Is it the right thing?</Copy>
<Copy k="lens.fit.check">
  Solves the user’s actual need, not just the literal spec you wrote
</Copy>
<Copy k="lens.fit.failure">
  Technically complete feature that addresses the prompt but misses the
  underlying need
</Copy>

<Copy k="lens.experience.short">Lens 4</Copy>
<Copy k="lens.experience.name">Experience Quality</Copy>
<Copy k="lens.experience.question">Is it good?</Copy>
<Copy k="lens.experience.check">
  Users can complete the core task without help or instruction
</Copy>
<Copy k="lens.experience.failure">
  Generic UI patterns that technically work but feel uninvested — confused
  or frustrated users
</Copy>

<Copy k="lens.impact.short">Lens 5</Copy>
<Copy k="lens.impact.name">Responsible Impact</Copy>
<Copy k="lens.impact.question">Is it responsible?</Copy>
<Copy k="lens.impact.check">
  Transparent about AI’s role — doesn’t present generated content as
  verified fact
</Copy>
<Copy k="lens.impact.failure">
  AI-generated content presented as authoritative, or a demographic left out
  by default
</Copy>
`;export{e as default};