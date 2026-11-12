var e=`---
kind: widget-copy
---

{/* Copy for ModelCards.tsx. Translate only the text between the tags.
    \`*.menu\` is copied from the Claude apps' model menu. */}

<Copy k="start">Start here</Copy>
<Copy k="label.excels">Excels at</Copy>
<Copy k="label.know">Good to know</Copy>

<Copy k="fable.name">Fable</Copy>
<Copy k="fable.usage">Heaviest usage</Copy>
<Copy k="fable.menu">For your toughest challenges</Copy>
<Copy k="fable.line">
  Fable is best for ambitious, long-running work: your largest, most important
  projects.
</Copy>
<Copy k="fable.excels">
  Hard, open-ended problems, deep investigation across large amounts of
  material, and long work with fewer check-ins.
</Copy>
<Copy k="fable.know">
  On some plans Fable uses your limit faster than the other models. On others it
  runs on usage credits instead.
</Copy>

<Copy k="opus.name">Opus</Copy>
<Copy k="opus.usage">Heavy usage</Copy>
<Copy k="opus.menu">For complex work and everyday tasks</Copy>
<Copy k="opus.line">
  Opus is the strongest daily driver for complex coding and knowledge work.
</Copy>
<Copy k="opus.excels">
  Building production-ready code and complex analyses that require strong
  judgment.
</Copy>
<Copy k="opus.know">
  If you're not sure which model to pick, start with Opus. Opus uses more of
  your usage limit than Sonnet, but often finishes harder work in fewer turns.
</Copy>

<Copy k="sonnet.name">Sonnet</Copy>
<Copy k="sonnet.usage">Moderate usage</Copy>
<Copy k="sonnet.menu">Most efficient for simpler tasks</Copy>
<Copy k="sonnet.line">
  Sonnet is a versatile model that balances capability, speed, and cost.
</Copy>
<Copy k="sonnet.excels">
  Most everyday work, like creating polished documents, slides, and
  spreadsheets.
</Copy>
<Copy k="sonnet.know">
  Sonnet answers faster and uses less of your usage limit than Opus, with some
  tradeoff in quality on harder work.
</Copy>

<Copy k="haiku.name">Haiku</Copy>
<Copy k="haiku.usage">Lightest usage</Copy>
<Copy k="haiku.menu">Fastest for quick answers</Copy>
<Copy k="haiku.line">
  Haiku is designed for high-volume, cost-sensitive work. It's built mainly for
  people developing their own products with Claude.
</Copy>
<Copy k="haiku.excels">
  Quick and repetitive workloads (like summaries, compactions, database queries,
  and classification requests).
</Copy>
<Copy k="haiku.know">
  Haiku isn't as effective for complex work, and isn't recommended as a default.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: de120746d5ebcf36 */}
<Copy k="widget.description">
  Reference: the four Claude models in the order the model menu shows them:
  Fable, Opus, Sonnet, and Haiku, with Opus marked as the place to start. For
  each model it gives how much of your usage limit it uses, what it is for, what
  it excels at, and a "good to know" note. Fable suits ambitious, long-running,
  open-ended work; Opus is a daily driver for complex coding and knowledge work;
  Sonnet balances capability, speed, and cost for everyday tasks; Haiku is the
  fastest and lightest, suited to high-volume, repetitive work but weaker on
  complex tasks. It teaches that models trade off capability, speed, and how
  much of your limit they use, so learners can match a model to their task.
</Copy>
<Copy k="widget.summary">
  Reference: the four Claude models in the model menu, Fable, Opus, Sonnet, and
  Haiku, each with what it is for, what it excels at, and a "good to know" note.
  Opus is marked as the place to start.
</Copy>
`;export{e as default};