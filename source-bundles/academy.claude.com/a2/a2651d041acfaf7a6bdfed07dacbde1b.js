var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ResearchOrNot.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Which destination is correct and
    which prompt is stronger are data in the widget; the question, option
    and explanation text lives here under \`q.<id>.*\` and \`move.<id>.*\`. */}

<Copy k="kicker">Try it</Copy>
<Copy k="title">Research or not?</Copy>
<Copy k="part">Part {n} of {total} · {name}</Copy>
<Copy k="part.route">Route the question</Copy>
<Copy k="part.upgrade">Upgrade the prompt</Copy>
<Copy k="questionCount">Question {n} of {total}</Copy>
<Copy k="quoted">“{text}”</Copy>

<Copy k="dest.research">Research</Copy>
<Copy k="dest.websearch">Quick web search</Copy>
<Copy k="dest.thinking">Thinking</Copy>
<Copy k="dest.enterprise">Enterprise search</Copy>

<Copy k="status.ask">Where would you send it?</Copy>
<Copy k="status.right">Right call.</Copy>
<Copy k="status.close">Close—the reason is above.</Copy>
<Copy k="btn.nextQ">Next question</Copy>
<Copy k="btn.toUpgrade">Next: upgrade a prompt</Copy>
<Copy k="btn.nextMove">Second move</Copy>
<Copy k="btn.finish">Finish</Copy>
<Copy k="btn.restart">Try again</Copy>

<Copy k="q.payroll.text">
  Compare the three payroll providers we're considering—pricing,
  implementation time, and support quality—and give me sources I can check.
</Copy>
<Copy k="q.payroll.explain">
  {lead} This is a comparative analysis that needs information from multiple
  sources, synthesized into one answer, with citations you can verify—all
  four of the signals that point to Research. A single search can’t compare
  three vendors on three criteria.
</Copy>
<Copy k="q.payroll.explain.lead">Research.</Copy>

<Copy k="q.stock.text">
  I'm prepping the quarterly investor update—what's our biggest competitor's
  current stock price?
</Copy>
<Copy k="q.stock.explain">
  {lead} The investor update sounds big, but the question itself is a single
  fact with one authoritative source. When you need a quick, specific answer
  and speed matters more than comprehensiveness, web search is the right
  size—Research would spend its effort gathering breadth this question
  doesn’t need.
</Copy>
<Copy k="q.stock.explain.lead">Quick web search.</Copy>

<Copy k="q.sql.text">
  This SQL query keeps returning duplicate rows and I can't see why. Walk
  through the logic and find the bug.
</Copy>
<Copy k="q.sql.explain">
  {lead} Everything needed to answer is already in the question—the answer
  comes from reasoning carefully through the query’s logic, not from
  gathering outside information. Code debugging, math, and logical analysis
  are Thinking’s home ground.
</Copy>
<Copy k="q.sql.explain.lead">Thinking.</Copy>

<Copy k="q.offsite.text">
  Plan our 20-person team offsite: compare two or three city options with
  venues, rough costs, and travel logistics.
</Copy>
<Copy k="q.offsite.explain">
  {lead} Planning a complex project like an offsite means pulling together
  many sources—venues, prices, logistics—and synthesizing them into something
  you can act on. That’s thorough-investigation territory, the kind of work
  that would otherwise take hours by hand.
</Copy>
<Copy k="q.offsite.explain.lead">Research.</Copy>

<Copy k="q.policy.text">
  What's our travel reimbursement policy for international trips?
</Copy>
<Copy k="q.policy.explain">
  {lead} The answer lives in your organization’s own documents, not on the
  public web—this is a company-specific question, and company knowledge is
  exactly what enterprise search draws from. Research investigates the
  outside world; your policies live inside.
</Copy>
<Copy k="q.policy.explain.lead">Enterprise search.</Copy>

<Copy k="upgrade.intro">
  You routed {correct} of {total} correctly. Now take the payroll
  comparison—the kind of question Research is for—and make the prompt worth
  the run. {prompt}
</Copy>
<Copy k="move.feedback">{verdict} {explain}</Copy>
<Copy k="verdict.right">That’s the stronger one.</Copy>
<Copy k="verdict.other">The other one does more work.</Copy>

<Copy k="move.goal.prompt">
  First move—the goal. Both versions are specific and both ask for sources.
  Which one steers the report better?
</Copy>
<Copy k="move.goal.a">
  Research the payroll provider market: the leading vendors, their
  reputations, and where the market is heading. Include sources I can check.
</Copy>
<Copy k="move.goal.b">
  Compare payroll providers that could serve our 200-person company: pricing,
  implementation time, and support quality. Include sources I can check.
</Copy>
<Copy k="move.goal.explain">
  {lead} Both prompts are polished and nearly the same length—but the first
  scopes to the payroll market, so Research writes an industry overview. The
  second scopes to the choice you’re actually making: which provider fits a
  200-person company, judged on the three criteria you’ll weigh. A report can
  only aim at the decision if the prompt names it.
</Copy>
<Copy k="move.goal.explain.lead">Scope to your decision, not the topic.</Copy>

<Copy k="move.line.prompt">
  Second move—one more line before you send it. Which addition does more
  work?
</Copy>
<Copy k="move.line.a">
  Prioritize vendor pricing pages and customer reviews from the last twelve
  months—payroll pricing changes fast, and we’ll need to verify anything we
  act on.
</Copy>
<Copy k="move.line.b">
  Also cover each provider’s company history, leadership team, and market
  reputation, so the comparison feels complete and well-rounded.
</Copy>
<Copy k="move.line.explain">
  {lead} The history-and-leadership line reads thorough, but none of it feeds
  the decision—breadth you won’t use dilutes the report you will. Naming
  which sources count and how recent they must be changes what Research
  gathers: current, verifiable pricing instead of stale summaries. More
  sections isn’t more signal.
</Copy>
<Copy k="move.line.explain.lead">Constrain the sources and the timeframe.</Copy>

<Copy k="summary">The pattern to remember: {rule}</Copy>
<Copy k="summary.rule">
  multi-source synthesis goes to Research; single facts go to web search;
  pure reasoning goes to Thinking; company questions go to enterprise search.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 2d38e8cc7d50f022 */}
<Copy k="widget.description">
  Exercise: a two-part trainer on choosing the right tool for a task. In part
  one, the learner reads sample questions in a chat composer and routes each
  to Research, quick web search, Thinking, or enterprise search, getting
  feedback on whether multi-source synthesis, a single fact, pure reasoning,
  or company-specific knowledge was the right fit. In part two, the learner
  compares two candidate versions of a Research prompt across two revisions
  and picks the stronger one, with feedback explaining what separates an
  effective Research prompt from a weaker one. It closes with a summary rule
  tying task type to the right tool, reinforcing when to reach for Research
  versus its alternatives.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner routes sample questions to Research, quick web search,
  Thinking, or enterprise search, then compares two versions of a Research
  prompt to pick the stronger one, learning what distinguishes each tool and
  an effective Research prompt.
</Copy>
`;export{e as default};