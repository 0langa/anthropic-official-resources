var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed5.tsx — the timed distance-vs-speed graph
    quiz (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are
    machine identifiers — translate ONLY the text between the tags. \`{name}\`
    tokens are runtime placeholders and must survive verbatim: \`{km}\` and
    \`{rate}\` are numbers read off the graph. \`opt.A…D\` are the four answer options. */}

<Copy k="user">
  I keep getting distance-vs-speed graph questions wrong on tests. Give me one
  practice question that targets that confusion — something I'll want to
  answer fast and then find out where my instinct was off.
</Copy>
<Copy k="intro">
  One minute on the clock — answer the way you would on a test, then we'll
  unpack what it was doing.
</Copy>

<Copy k="aria.visual">
  Distance over time graph with multiple-choice question
</Copy>
<Copy k="kicker">Practice · Q1</Copy>

<Copy k="q">
  The graph shows the {total} a cyclist has traveled over 50 minutes. During
  which 10-minute interval was the cyclist traveling {fastest}?
</Copy>
<Copy k="q.total">total distance</Copy>
<Copy k="q.fastest">fastest</Copy>

<Copy k="opt.A.label">0–10 minutes</Copy>
<Copy k="opt.A.explain">
  Steepest segment = biggest rise per 10 min. Speed is slope, not height.
</Copy>
<Copy k="opt.B.label">10–20 minutes</Copy>
<Copy k="opt.B.explain">Less steep than 0–10. Still climbing, just slower.</Copy>
<Copy k="opt.C.label">30–40 minutes</Copy>
<Copy k="opt.C.explain">
  Nearly flat — distance barely changes. Speed is almost zero. Slowest
  interval.
</Copy>
<Copy k="opt.D.label">40–50 minutes</Copy>
<Copy k="opt.D.explain">
  Graph is highest here — but that means most total distance, not fastest.
  You read value instead of slope.
</Copy>

<Copy k="btn.check">Check answer</Copy>
<Copy k="nudge">Pick one first</Copy>

<Copy k="fb.correct">Correct. You read the slope.</Copy>
<Copy k="fb.trap">
  You read the height, not the slope. This is the thing biting you.
</Copy>
<Copy k="fb.wrong">Not quite — compare how steep each segment is.</Copy>

<Copy k="teach.title">What the test was doing</Copy>
<Copy k="teach.p1">
  The question asked about {speed} (a rate) but the y-axis plots {distance} (a
  cumulative amount). When the axis is a total, {slope}, not in how high the
  curve sits.
</Copy>
<Copy k="teach.p1.speed">speed</Copy>
<Copy k="teach.p1.distance">distance</Copy>
<Copy k="teach.p1.slope">rate lives in the slope</Copy>
<Copy k="teach.p2">
  This swap recurs everywhere: total revenue vs. growth, total downloads vs.
  daily downloads, water level vs. fill rate. Different labels, same trick.
</Copy>
<Copy k="mode.height">Show heights</Copy>
<Copy k="mode.slope">Show slopes</Copy>
<Copy k="teach.hint">Click any dot on the curve to inspect that interval.</Copy>

<Copy k="ask.another.btn">Another, same trap →</Copy>
<Copy k="ask.another.prompt">
  Give me another question with the same kind of trap but a different
  context, like money or population
</Copy>
<Copy k="ask.checklist.btn">Checklist →</Copy>
<Copy k="ask.checklist.prompt">
  What should I actually DO when I see a graph question to avoid this? A quick
  checklist
</Copy>

<Copy k="axis.time">time (min)</Copy>
<Copy k="axis.km">km</Copy>
<Copy k="overlay.height">height = {km} km total (not speed)</Copy>
<Copy k="overlay.slope">{km} km / 10 min = {rate} km/h</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: d3192b08582f7063 */}
<Copy k="widget.description">
  Quiz: a timed multiple-choice question built around a distance-versus-time
  line graph for a cyclist's journey, asking the learner to identify the
  fastest 10-minute interval. After picking an answer and checking it, every
  option's reasoning is revealed, showing why each interval is or isn't
  correct, with explicit feedback if the learner mistook the graph's height
  for its steepness. A teach-back panel follows, where two buttons switch the
  graph between heights and slopes, and selecting a point picks which interval
  is shown. The goal is to teach that when a graph's axis shows a cumulative
  total, the rate (speed) is read from the slope, not from how high the curve
  sits — a distinction that recurs across totals-versus-rates problems
  generally.
</Copy>
<Copy k="widget.summary">
  Quiz: a timed multiple-choice question on a distance-versus-time graph asks
  which interval was fastest, then reveals reasoning for each option and lets
  the learner toggle between viewing heights and slopes, teaching that rate is
  read from slope, not height.
</Copy>
`;export{e as default};