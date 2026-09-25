var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WorkedExample.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The replay script (timings,
    tool names, file names, launch commands, level names) is data in the
    widget; the tool result lines (\`result.<id>\`), closing lines, teasers
    and summaries (\`run.<level>.*\`) live here. */}

<Copy k="kicker">One prompt at three levels</Copy>
<Copy k="badge">Simulated replay</Copy>
<Copy k="prompt">Write a script that converts a CSV file to JSON. …</Copy>
<Copy k="title">“{prompt}”</Copy>
<Copy k="aria.tabs">Effort level to replay</Copy>
<Copy k="tab.playing">playing…</Copy>
<Copy k="tab.paused">paused</Copy>

<Copy k="term.aria">Simulated Claude Code session for {launch}, {status}</Copy>
<Copy k="term.status.idle">not started</Copy>
<Copy k="term.status.playing">playing</Copy>
<Copy k="term.status.paused">paused</Copy>
<Copy k="term.status.done">done</Copy>
<Copy k="term.idle">
  Press Play this level to watch a simulated session. The 8× speed or Skip to
  end shortens the long one.
</Copy>
<Copy k="term.more">… more edit-and-rerun rounds, collapsed here</Copy>
<Copy k="term.working">Working… {elapsed}</Copy>
<Copy k="term.elapsed">({s}s · simulated)</Copy>

<Copy k="counter.elapsed">Elapsed (simulated)</Copy>
<Copy k="counter.calls">Tool calls</Copy>
<Copy k="counter.lines">Lines written</Copy>
<Copy k="counters.note">
  Modeled on a real session at each level; illustrative, not a benchmark, and
  your runs will differ. Bars scale to the max run.
</Copy>
<Copy k="timeline.label">Session timeline · each tick is a tool call</Copy>
<Copy k="timeline.clock">{now} / {total}</Copy>
<Copy k="timeline.aria">{now} of {total}</Copy>

<Copy k="btn.play">Play this level</Copy>
<Copy k="btn.pause">Pause</Copy>
<Copy k="btn.skip">Skip to end</Copy>
<Copy k="btn.resume">Resume</Copy>
<Copy k="btn.again">Play again</Copy>
<Copy k="speed.aria">Playback speed</Copy>
<Copy k="speed.option">{x}×</Copy>
<Copy k="speed.label">playback speed</Copy>

<Copy k="runs.title">Runs so far</Copy>
<Copy k="runs.allDone">
  Same working converter every time. Only the amount of work differs.
</Copy>
<Copy k="runs.pending">
  Play each level to fill this in. Every level ends with a working converter.
</Copy>
<Copy k="compare.elapsed">Elapsed</Copy>
<Copy k="compare.notPlayed">not played</Copy>

<Copy k="result.wrote">Wrote {n} lines to {file}</Copy>
<Copy k="result.ran">Wrote {file} ({n} records)</Copy>
<Copy k="result.tests">all passed</Copy>
<Copy k="result.infer">Added type inference for numbers, booleans, dates</Copy>

<Copy k="run.low.closing">Done. Run it with {code}</Copy>
<Copy k="run.low.teaser">writes it, stops</Copy>
<Copy k="run.low.summary">Wrote the script and stopped. You run it yourself.</Copy>

<Copy k="run.default.closing">
  Converted. Output is in {code}; handles quoted fields and empty cells.
</Copy>
<Copy k="run.default.teaser">writes it, runs it</Copy>
<Copy k="run.default.summary">
  Wrote it, ran it once on the sample, reported back.
</Copy>

<Copy k="run.max.closing">
  Done: CLI flags, type inference, streaming for large files, and a passing
  test suite.
</Copy>
<Copy k="run.max.teaser">builds a whole tool</Copy>
<Copy k="run.max.summary">
  Built a small CLI tool with a test suite. Nobody asked for one.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 016575f6d37e3f68 */}
<Copy k="widget.description">
  Simulation: a replayable Claude Code session runs the same prompt, a script
  that converts a CSV file to JSON, three times on one model, at low, default,
  and max effort. The learner can play, pause, skip, or speed up each
  simulated transcript, and counters track elapsed time, tool calls, and lines
  written. At low, Claude writes the script and stops without running it. At
  the default, it writes the script, runs it once on the sample, and reports
  back. At max, it builds a small command-line tool with a test suite that
  nobody asked for, over many more rounds. A comparison panel shows that every
  level ends with a working converter and only the amount of work differs,
  which is the difference the learner pays for.
</Copy>
<Copy k="widget.summary">
  Simulation: replay the same coding prompt at low, default, and max effort,
  watching a simulated terminal transcript, tool calls, and lines written
  accumulate. Counters and a comparison panel show that every level finishes
  the task, differing only in how much work goes into it.
</Copy>
`;export{e as default};