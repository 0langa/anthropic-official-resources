var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ContextFixes.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Three predict-then-reveal
    cards: the learner reads a user question (\`card<n>.question\`, card 2
    with a pasted line of context above it, card 3 with an attached
    handbook), predicts whether the model gets it right, then the model's
    reply (\`card<n>.answer\`) streams in, followed by feedback and a bridge
    sentence. In card 1's reply \`{em}\` is the italic phrase under
    \`card1.answer.em\`; in card 2, \`{network}\` / \`{password}\` are the
    mock wifi network name and password (data in the widget). In the
    feedback lines \`{choice}\` is the learner's own prediction
    (\`predict.*\`), italicised. */}

<Copy k="label">Predict the reply</Copy>
<Copy k="tabs.aria">Examples</Copy>

<Copy k="card1.label">Without context</Copy>
<Copy k="card1.question">
  What's the guest wifi password at our Lakeside office?
</Copy>
<Copy k="card1.answer">
  I don't have access to {em}, so I can't tell you that one. Your IT team or
  office manager should be able to help.
</Copy>
<Copy k="card1.answer.em">your office's wifi details</Copy>
<Copy k="card1.bridge">
  A private detail like this was never in the training data, so the best the
  model can honestly do is say it doesn't know. There are two ways to get a
  useful answer instead, and both are just {em}.
</Copy>
<Copy k="card1.bridge.em">context</Copy>

<Copy k="card2.label">Contrived context</Copy>
<Copy k="card2.context">
  From the office wiki: Lakeside guest wifi - network {network}, password
  {password}.
</Copy>
<Copy k="card2.question">
  What's the guest wifi password at our Lakeside office?
</Copy>
<Copy k="card2.answer">
  The guest network at Lakeside is {network}, and the password is
  {password}.
</Copy>
<Copy k="card2.bridge">
  This is a bit contrived, because if you already know the answer, you
  wouldn't both {provide} and {request} a model. But it's the same logic
  that governs the next example.
</Copy>
<Copy k="card2.bridge.provide">provide it to</Copy>
<Copy k="card2.bridge.request">request it from</Copy>

<Copy k="card3.label">Authentic context</Copy>
<Copy k="card3.question">
  Can I expense a monitor for my work from home setup?
</Copy>
<Copy k="card3.answer">
  Yes - the handbook's home-office section says the work-from-home stipend
  covers a monitor.
</Copy>

<Copy k="ask">Will the model get this right?</Copy>
<Copy k="predict.yes">yes</Copy>
<Copy k="predict.no">no</Copy>
<Copy k="predict.idk">not sure</Copy>
<Copy k="feedback.right">You said {choice}. You were right.</Copy>
<Copy k="feedback.wrong">You said {choice}. Not quite.</Copy>
<Copy k="feedback.neutral">You said {choice}. Let's see.</Copy>
<Copy k="next">next question</Copy>
<Copy k="status">{done} / {total} predicted</Copy>
`;export{e as default};