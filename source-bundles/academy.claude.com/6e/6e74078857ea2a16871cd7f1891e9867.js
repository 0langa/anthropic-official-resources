var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MarkovTextYourFriend.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The Markov training messages,
    the chat corpus and the words the model predicts are the widget's
    dataset and stay in code (English); every caption around them is here.
    \`approach.*.mapsTo\` values are sampling-parameter notation shown in
    monospace — keep \`temperature\`, \`top-k\`, \`top-p\` and the symbols. */}

<Copy k="title">Text Your Friend Markov</Copy>
<Copy k="subtitle">The 100% interpretable next-token generator</Copy>

<Copy k="startOver">↻ start over</Copy>
<Copy k="pct">{n}%</Copy>
<Copy k="quoted">"{text}"</Copy>

<Copy k="phone.title">Send a Text</Copy>
<Copy k="phone.p1">
  Long ago, my friends and I would play this game where you'd grab your
  phone and craft a message to a friend using only the recommended next
  words. Maybe you did this too.
</Copy>
<Copy k="phone.p2">
  Here's a simulator that was "trained" on a bit of content. Have a play!
</Copy>
<Copy k="phone.incoming">hey does anyone know how to fix the build</Copy>
<Copy k="phone.empty">No predictions — end of chain</Copy>
<Copy k="phone.p3">
  We talked about this as if it were a "Me-bot". We knew it was recommending
  words based on our individual usage patterns, and we could see our voices
  in our personalized recommendations.
</Copy>
<Copy k="phone.p4">
  At the time, we were happy to dismiss it as tech magic. I don't think we
  realized how simple the algorithm might be.
</Copy>
<Copy k="phone.p5">Keep reading if you want to build one with me :)</Copy>

<Copy k="train.title">"Training" Your Model</Copy>
<Copy k="train.p1">
  Let's train on a handful of messages. All we need to do is tally the
  connections between words. Let's do this one message at a time.
</Copy>
<Copy k="train.num">{n}.</Copy>
<Copy k="train.add">+ Add message {n}</Copy>
<Copy k="train.done">All messages added</Copy>
<Copy k="train.matrixTitle">The Transition Matrix</Copy>
<Copy k="train.matrixEmpty">
  Add messages above to start building the matrix.
</Copy>
<Copy k="train.p2">
  This finished map of connections between words is called a {term}.
  Normalize each row and you get a probability distribution of what comes
  next.
</Copy>
<Copy k="train.p2.term">frequency table</Copy>
<Copy k="train.p3">
  The act of picking a next word based on what you have so far is called
  {term}. We use that same term for this process with modern language models
  like Claude.
</Copy>
<Copy k="train.p3.term">sampling</Copy>

<Copy k="sample.title">Do Some Sampling</Copy>
<Copy k="sample.p1">
  Using the same matrix based on 5 texts, go ahead and have a more informed
  play at our game. We'll show you the probabilities.
</Copy>
<Copy k="sample.empty">End of chain — no more predictions available.</Copy>
<Copy k="sample.p2">
  The highlighted row is your current context. Pick a word from the
  available choices to continue.
</Copy>

<Copy k="scale.title">Scale it up</Copy>
<Copy k="scale.p1">
  Five messages gave us a tiny matrix and a handful of predictions. What
  happens with more data?
</Copy>
<Copy k="scale.plus.one">+ 1 message</Copy>
<Copy k="scale.plus.ten">+ 10</Copy>
<Copy k="scale.plus.fifty">+ 50</Copy>
<Copy k="scale.plus.all">All {total}</Copy>
<Copy k="stat.messages">messages</Copy>
<Copy k="stat.uniqueWords">unique words</Copy>
<Copy k="stat.contexts">contexts</Copy>
<Copy k="stat.transitions">transitions</Copy>
<Copy k="stat.maxNext">max options</Copy>
<Copy k="scale.after">After {picker}:</Copy>
<Copy k="scale.aria.context">Context word</Copy>
<Copy k="scale.empty">No predictions for this context</Copy>

<Copy k="knobs.title">The knobs</Copy>
<Copy k="knobs.p1">
  When you were sampling, you could see probabilities, but you also used
  your instincts about which words "felt right."
</Copy>
<Copy k="knobs.p2">
  If you had to write {code} to make those choices instead of using your
  gut, {question}
</Copy>
<Copy k="knobs.p2.code">code</Copy>
<Copy k="knobs.p2.question">
  what encoded rule do you think would create the best result?
</Copy>

<Copy k="approach.greedy.label">Always pick the highest-probability word</Copy>
<Copy k="approach.greedy.mapsTo">temperature → 0 OR top-k where k = 1</Copy>
<Copy k="approach.faithful.label">
  Pick semi-randomly, according to probabilities
</Copy>
<Copy k="approach.faithful.mapsTo">temperature = 1 (default)</Copy>
<Copy k="approach.boost.label">
  Pick according to probabilities, but also boost the most likely choices
</Copy>
<Copy k="approach.boost.mapsTo">temperature < 1</Copy>
<Copy k="approach.threshold.label">
  Ignore anything below a certain probability threshold
</Copy>
<Copy k="approach.threshold.mapsTo">top-p</Copy>
<Copy k="approach.topn.label">Only consider the top N options</Copy>
<Copy k="approach.topn.mapsTo">top-k</Copy>
<Copy k="approach.goblin.label">
  Goblin mode — ignore the probabilities and pick something random
</Copy>
<Copy k="approach.goblin.mapsTo">temperature → ∞ (maximum randomness)</Copy>

<Copy k="knobs.reveal">Show me the knobs</Copy>
<Copy k="knobs.revealed.p1">
  Awesome. Play with the knobs below to see how sampling parameters impact a
  language model's choices. Then check how your intuitions mapped.
</Copy>
<Copy k="knobs.revealed.p2">
  Developers use parameters like {temperature} and {tail} to improve
  sampling after the probabilities are generated.
</Copy>
<Copy k="knobs.revealed.p2.temperature">temperature</Copy>
<Copy k="knobs.revealed.p2.tail">tail trimming</Copy>
<Copy k="knobs.after">After "{word}":</Copy>
<Copy k="knobs.empty">End of chain.</Copy>
<Copy k="knobs.trimmed">—</Copy>

<Copy k="temp.label">Temperature</Copy>
<Copy k="temp.min">focused</Copy>
<Copy k="temp.max">random</Copy>
<Copy k="temp.explain.lowest">
  Heavily favoring the most likely word — predictable, repetitive.
</Copy>
<Copy k="temp.explain.low">Boosting likely choices — coherent but safe.</Copy>
<Copy k="temp.explain.mid">Sampling faithfully from the distribution.</Copy>
<Copy k="temp.explain.high">
  Flattening the distribution — more surprise, less focus.
</Copy>
<Copy k="temp.explain.highest">
  Near-uniform — chaotic, unpredictable output.
</Copy>

<Copy k="tail.label">Tail trimming</Copy>
<Copy k="tail.intro">Remove unlikely words entirely before sampling.</Copy>
<Copy k="tail.none">None</Copy>
<Copy k="tail.topk">Top-k</Copy>
<Copy k="tail.topp">Top-p</Copy>
<Copy k="topk.label">Top words</Copy>
<Copy k="topk.explain">Only the {n} most likely words survive.</Copy>
<Copy k="topp.label">Probability mass</Copy>
<Copy k="topp.explain">
  Keep the smallest set of words whose probabilities sum to {pct}.
</Copy>
<Copy k="topp.note">
  Unlike top-k, this adapts to confidence — when the model is sure, fewer
  words survive. When uncertain, more do.
</Copy>

<Copy k="knobs.generate">Generate</Copy>
<Copy k="knobs.reset">reset</Copy>
<Copy k="knobs.p3">
  If you made a choice earlier, you intuitively selected one of these
  approaches.
</Copy>
<Copy k="reflect.toggle">How did my instinct map to these parameters?</Copy>
<Copy k="reflect.pick">{lead} {choice}</Copy>
<Copy k="reflect.pick.lead">Your pick:</Copy>
<Copy k="reflect.maps">{lead} {params}</Copy>
<Copy k="reflect.maps.lead">Maps to:</Copy>

<Copy k="bridge.title">The bridge</Copy>
<Copy k="bridge.p1">
  The sampling strategies you just used are more or less the same sampling
  constraints that developers pass to Claude. For LLMs, a few things differ.
</Copy>
<Copy k="bridge.col.markov">Markov chain</Copy>
<Copy k="bridge.col.llm">LLM</Copy>
<Copy k="bridge.step1">Read context</Copy>
<Copy k="bridge.step2">Compute distribution</Copy>
<Copy k="bridge.step3">Sample next token</Copy>
<Copy k="bridge.same">same process</Copy>
<Copy k="bridge.markov.context">last word: {word}</Copy>
<Copy k="bridge.llm.context">entire conversation so far</Copy>
<Copy k="bridge.markov.compute">look up one row in a table</Copy>
<Copy k="bridge.llm.compute">
  forward pass through billions of parameters — attention, embeddings,
  feedforward layers, residual connections, layer norms...
</Copy>
<Copy k="bridge.p2">
  The Markov table lookup is a really simple and explainable operation. A
  forward pass through a neural network is quite a bit more complex. But in
  either case, the output is the same: a probability distribution of likely
  next words or tokens.
</Copy>
<Copy k="bridge.p3">
  While sampling is the same, training is radically different. The
  exponential wall from before (vocabulary{power} rows) doesn't apply. LLMs
  trade the explainability of simply tallying words for far more context and
  far greater capabilities.
</Copy>

<Copy k="history.title">100-year-old Tech</Copy>
<Copy k="history.p1">"Is this real tech?" Great question, reader.</Copy>
<Copy k="history.p2">
  Markov published this idea in 1906. A century later in 2010, n-gram models
  like this were powering next-word prediction on your phone (SwiftKey, then
  Apple's QuickType). Around 2015, neural networks — first RNNs, then
  transformers in 2017 — began to replace the table lookup approach with a
  learned function, and the rest is... well, it's what we're working on now.
</Copy>
`;export{e as default};