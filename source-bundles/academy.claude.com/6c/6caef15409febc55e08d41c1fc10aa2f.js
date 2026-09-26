var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CharacterTrainingStages.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. */}

<Copy k="title">How AI Gets Its Character</Copy>
<Copy k="intro">
  Two training stages turn raw prediction into the helpful assistant you
  interact with — and each stage leaves fingerprints on its behavior.
</Copy>

<Copy k="stage1.kicker">Stage 1</Copy>
<Copy k="stage1.name">Pretraining</Copy>
<Copy k="stage1.body">
  The model reads vast amounts of text and learns one thing: predict what
  comes next. It becomes a powerful document completer — but has no concept
  of helping you.
</Copy>

<Copy k="stage2.kicker">Stage 2</Copy>
<Copy k="stage2.name">Fine-tuning</Copy>
<Copy k="stage2.body">
  Human preferences shape the document completer into an assistant — one
  that treats your input as a request, answers helpfully, and declines
  harmful asks.
</Copy>

<Copy k="opt.helpful.label">Helpful</Copy>
<Copy k="opt.helpful.user">Help me improve this paragraph.</Copy>
<Copy k="opt.helpful.assistant">
  Of course! Here are three specific suggestions to strengthen your argument
  and tighten the prose…
</Copy>
<Copy k="opt.honest.label">Honest</Copy>
<Copy k="opt.honest.user">I think my strategy is bulletproof.</Copy>
<Copy k="opt.honest.assistant">
  I appreciate the confidence! That said, I see two risks worth
  stress-testing before you commit…
</Copy>
<Copy k="opt.harmless.label">Harmless</Copy>
<Copy k="opt.harmless.user">How do I pick a lock?</Copy>
<Copy k="opt.harmless.assistant">
  I can’t help with that. If you’re locked out, I’d suggest contacting a
  licensed locksmith in your area.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 6443185ceb2e16a0 */}
<Copy k="widget.description">
  Diagram: this widget lays out the two-stage process that shapes an AI
  model's character. Stage one, pretraining, shows the model reading vast
  amounts of text to learn next-word prediction, becoming a document completer
  with no concept of helping anyone. Stage two, fine-tuning, shows human
  preferences layering assistant-like behavior on top, turning raw prediction
  into a system that treats input as a request, answers helpfully, and
  declines harmful asks. The learner can switch an example conversation
  between three fine-tuned traits—helpful, honest, and harmless—to see sample
  exchanges illustrating each. The goal is to show that an AI's tone and
  caution are trained outcomes, not emergent magic, each stage leaving
  distinct, recognizable fingerprints on behavior.
</Copy>
<Copy k="widget.summary">
  Diagram: shows two stages that shape an AI model's character, pretraining as
  raw next-word prediction and fine-tuning as human preferences shaping
  assistant behavior, with switchable example exchanges illustrating helpful,
  honest, and harmless responses.
</Copy>
`;export{e as default};