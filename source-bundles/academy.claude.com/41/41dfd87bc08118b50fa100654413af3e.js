var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EmbeddingSpaceExplorer.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The plotted positions, the
    example vectors and the emoji markers are the widget's dataset and stay
    in code; source names, axis labels and every caption are here. */}

<Copy k="title">Visualizing 1024D Space</Copy>
<Copy k="subtitle">How multidimensional “nearness” works</Copy>

<Copy k="problem.title">The Problem with Strings</Copy>
<Copy k="problem.p1">
  Search “car” and you’ll find every document containing the word “car.” You
  won’t find “automobile.” Or “vehicle.” Or “my Civic needs new brakes.”
</Copy>
<Copy k="problem.p2">
  For decades, that was search, returning results based on string similarity
  rather than meaning. Google continuously made incremental improvements with
  engineering: Synonym dictionaries mapped “car” to “automobile,” Stemming
  rules connected “running” to “run,” and click-pattern mining surfaced that
  people who search “NYC apartments” want the same results as “Manhattan
  rentals.” The connections between non-matching strings had to be mapped
  more or less by hand.
</Copy>
<Copy k="problem.p3">
  {embeddings} challenged all of this with the idea that {meaning} could be a
  {place}. By converting text into coordinates, similar concepts end up near
  each other. This mapping of semantic space isn’t manual, but rather
  {emergent} from training data.
</Copy>
<Copy k="problem.p3.embeddings">Embeddings</Copy>
<Copy k="problem.p3.meaning">meaning</Copy>
<Copy k="problem.p3.place">place</Copy>
<Copy k="problem.p3.emergent">emergent</Copy>

<Copy k="encode.title">Encoding</Copy>
<Copy k="encode.p1">Let’s start with a simplified example.</Copy>
<Copy k="encode.p2">
  Imagine you were to score every document in a corpus of knowledge on two
  dimensions: how much it relates to dinosaurs, and how much it relates to
  roller coasters. Documents about similar topics would end up near each
  other.
</Copy>
<Copy k="encode.p3">
  Let’s start with just three sources. Place each of these where you think
  they belong.
</Copy>
<Copy k="encode.aria.place">Place "{name}" on the plot</Copy>
<Copy k="encode.hint">click to place selected item</Copy>
<Copy k="encode.sources">Sources</Copy>
<Copy k="encode.coords">({x}%, {y}%)</Copy>
<Copy k="encode.select">click to select</Copy>
<Copy k="encode.p4">
  You’ve just mapped meaning in 2D space, plotting our collection of items
  based on what they’re about.
</Copy>

<Copy k="src.dino.name">A children's book about dinosaurs</Copy>
<Copy k="src.coaster.name">The Velocicoaster web page</Copy>
<Copy k="src.ency.name">An entire encyclopedia</Copy>

<Copy k="plot.min">not at all</Copy>
<Copy k="plot.max">very</Copy>
<Copy k="axis.x">How much does this relate to {term}? →</Copy>
<Copy k="axis.x.term">dinosaurs</Copy>
<Copy k="axis.y">How much does this relate to {term}? →</Copy>
<Copy k="axis.y.term">roller coasters</Copy>

<Copy k="retrieval.title">Retrieval</Copy>
<Copy k="retrieval.p1">Now let’s search this space.</Copy>
<Copy k="retrieval.p2">
  Plot a question on the same graph with the same axes. By mapping your
  question with the same logic you used to map sources, you can be sure that
  the nearest items will be the most relevant. Bonus feature: Use the slider
  to control how many get retrieved.
</Copy>
<Copy k="retrieval.k">Sources to retrieve (k):</Copy>
<Copy k="retrieval.aria.place">Place the question on the plot</Copy>
<Copy k="retrieval.hint">click to place the question</Copy>
<Copy k="retrieval.qLabel">Question</Copy>
<Copy k="retrieval.question">
  “What’s the best dinosaur-themed roller coaster?”
</Copy>
<Copy k="retrieval.qHint">click graph to place</Copy>
<Copy k="retrieval.p3">
  That’s {term} in a nutshell. We plot the question and find the nearest k
  items. Instead of keyword matching or synonym tables, we use
  multi-dimensional proximity.
</Copy>
<Copy k="retrieval.p3.term">similarity search</Copy>
<Copy k="retrieval.p4">
  Two axes is a start. But two dimensions can only capture two concepts. The
  real world has more than two topics, so we need more {term}.
</Copy>
<Copy k="retrieval.p4.term">dimensions</Copy>

<Copy k="dims.title">More Dimensions</Copy>
<Copy k="dims.p1">What if we added a third axis? Let’s use {term}.</Copy>
<Copy k="dims.p1.term">biology</Copy>
<Copy k="dims.p2">
  The children’s book scores high (species, habitats, diets). The
  encyclopedia covers some. The Velocicoaster page barely mentions it.
</Copy>
<Copy k="dims.drag">Drag to rotate.</Copy>
<Copy k="scene.aria">
  Rotatable 3D plot of the dinosaur book, the Velocicoaster page, and the
  encyclopedia on dinosaurs, coasters, and biology axes. Drag or use arrow
  keys to rotate.
</Copy>
<Copy k="axis3d.dino">Dinosaurs</Copy>
<Copy k="axis3d.coaster">Coasters</Copy>
<Copy k="axis3d.bio">Biology</Copy>
<Copy k="dims.p3">
  Three dimensions, three coordinates per document. The Velocicoaster page is
  now {coord3} instead of {coord2}.
</Copy>
<Copy k="dims.p4">Now try to picture a fourth axis.</Copy>
<Copy k="dims.p5">
  Since I only exist in 3 dimensions, I personally can’t 😔 but that actually
  doesn’t matter! Each new dimension just adds another coordinate to each
  point and another squared term to the distance formula. The spatial
  representation stops working at 4D, but the math keeps working.
</Copy>
<Copy k="dims.p6">
  We’re going to have to push well past 4D, because real {term} use around a
  thousand dimensions. Each document and each query becomes a point in that
  thousand-dimensional space. “Find the nearest documents” still means the
  same thing it meant on the 2D graph. It’s just a longer distance
  calculation.
</Copy>
<Copy k="dims.p6.term">embedding models</Copy>

<Copy k="unlabeled.title">Unlabeled Axes</Copy>
<Copy k="unlabeled.p1">
  We chose the axes: dinosaurs, roller coasters, biology. But who determines
  which 1,024 topics make it into a real embedding model?
</Copy>
<Copy k="unlabeled.p2">
  In point of fact, no one decides. The meaning of each axis is emergent
  (meaning it just shows up in training), and more of a black box. You can’t
  look at dimension 847 and say “that’s the dinosaur axis.” The dimensions
  don’t correspond to anything a human could name.
</Copy>
<Copy k="unlabeled.p3">
  This makes the space harder to reason about. We can’t interrogate dimension
  847 to understand why two texts landed near each other, or why something we
  expected to be close ended up far away.
</Copy>

<Copy k="coords.title">Text as Coordinates</Copy>
<Copy k="coords.p1">
  So who assigns the coordinates? An {term}. Any string in, a fixed-length
  list of numbers out.
</Copy>
<Copy k="coords.p1.term">embedding model</Copy>
<Copy k="conv.text">Text</Copy>
<Copy k="conv.embedding">Embedding</Copy>
<Copy k="conv.count">1,024 values</Copy>
<Copy k="conv.ex1">“work from home”</Copy>
<Copy k="conv.ex2">
  “Employees may work remotely up to two days per week with manager
  approval.”
</Copy>
<Copy k="coords.p2">
  The output is always the same length (1,024 values in our specific case,
  since we’re using VoyageAI’s embeddings model) and this is true whether the
  input is three words or three paragraphs. One chunk of text corresponds to
  one point in space. The embedding model reads the text and outputs a single
  {term}.
</Copy>
<Copy k="coords.p2.term">vector</Copy>
<Copy k="coords.p3">
  The math-eyed among you will recognize that “vector” and “coordinate set”
  aren’t actually interchangeable, but for our purposes, it’s appropriate to
  think of the vector as the address where this text lives relative to
  everything else.
</Copy>

<Copy k="sim.title">Similarity</Copy>
<Copy k="sim.p1">
  “Nearest” on our 2D graph meant straight-line distance. In practice,
  similarity search uses {term} instead. Cosine similarity is just another
  measure of how similar two pieces of text are, based on the direction their
  vectors point rather than how far apart they sit.
</Copy>
<Copy k="sim.p1.term">cosine similarity</Copy>
<Copy k="sim.p2">
  Try it yourself! Pick two sources to see their cosine similarity.
</Copy>
<Copy k="sim.colA">Source A</Copy>
<Copy k="sim.colB">Source B</Copy>
<Copy k="item.question.name">Best dinosaur roller coaster?</Copy>
<Copy k="item.dino.name">Children's dinosaur book</Copy>
<Copy k="item.coaster.name">Velocicoaster web page</Copy>
<Copy k="item.ency.name">Encyclopedia</Copy>
<Copy k="sim.cosine">Cosine similarity</Copy>
<Copy k="sim.scale.min">-1 opposite</Copy>
<Copy k="sim.scale.mid">0 unrelated</Copy>
<Copy k="sim.scale.max">1 identical</Copy>
<Copy k="sim.p3">
  Try comparing the Velocicoaster page to the dinosaur book — their vectors
  point in very different directions. The encyclopedia lands somewhere in
  between everything, which fits, since it’s a jack of all trades but a
  master of none.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: c0648925afc26509 */}
<Copy k="widget.description">
  Explorer: a multi-part walkthrough of how embeddings represent meaning as
  coordinates in space. The learner places sample documents on a
  two-dimensional plot based on how much each relates to two topics, then
  plots a query on that same plot to see nearest-neighbor retrieval with an
  adjustable number of results. A rotatable 3D scene adds a third topic axis
  to show how extra dimensions just add coordinates, explaining that real
  embedding models use around a thousand dimensions with axes that aren't
  human-nameable. A final tool lets the learner compare two sample texts'
  vectors to see their cosine similarity score. The throughline: similarity
  search finds meaning-based proximity rather than keyword matches.
</Copy>
<Copy k="widget.summary">
  Explorer: a multi-part walkthrough where the learner places sample documents
  on a 2D meaning plot, then retrieves nearest neighbors, rotates a 3D scene
  with an added axis, and compares vectors for cosine similarity, illustrating
  how embeddings represent meaning as spatial proximity rather than keyword
  matches.
</Copy>
`;export{e as default};