var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Ask the company” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    file paths, schema and channel names — keep them where the sentence
    needs them. */}

<Copy k="aria">
  Animated demo: asking Cowork who owns the orders table, watching it search
  the wiki, code, and warehouse, and scheduling a weekly gap report
</Copy>
<Copy k="title">Ask the company</Copy>
<Copy k="subtitle">
  Reads your wiki, code, and warehouse — writes a cited answer to any
  engineer’s question.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the service catalog and ask the question any engineer
  would.
</Copy>
<Copy k="menu.category">Engineering</Copy>
<Copy k="prompt">
  Answer “what owns the orders table?” Search our wiki, code, and warehouse,
  cite the source, and name who to ask if you’re not sure.
</Copy>

<Copy k="scene2.title">Cowork searches every system</Copy>
<Copy k="scene2.sub">
  The skill checks the catalog first, then fans out to wiki, code, and
  warehouse.
</Copy>
<Copy k="work.heading">Answering across connected sources</Copy>
<Copy k="step1">Reading service-catalog.yaml</Copy>
<Copy k="step2">Searching Confluence: “orders table”</Copy>
<Copy k="step3">Reading GitHub: orders-service/CODEOWNERS</Copy>
<Copy k="step4">Querying Snowflake: {schema} schema</Copy>
<Copy k="step5">Reading team-directory.md</Copy>
<Copy k="step6">Writing cited answer</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Check the service catalog</Copy>
<Copy k="prog2">Search wiki and code</Copy>
<Copy k="prog3">Query the warehouse</Copy>
<Copy k="prog4">Find the owner</Copy>
<Copy k="prog5">Write the cited answer</Copy>

<Copy k="scene3.title">One answer, every source cited</Copy>
<Copy k="scene3.sub">
  The team, the repo, the schema doc, and who to ask — with links to each.
</Copy>
<Copy k="res1">
  {lead} is owned by the Commerce Platform team. It’s defined in {file} and
  documented on Confluence under {doc}.
</Copy>
<Copy k="res1.lead">The orders table</Copy>
<Copy k="res1.doc">Order Data Model</Copy>
<Copy k="res2">
  Snowflake shows it in the {schema} schema with 14 downstream consumers.
  CODEOWNERS lists {owner} as the reviewer for any change.
</Copy>
<Copy k="res3">
  If you need write access or a schema change, ask {who} in {channel} —
  she’s the listed owner in the team directory.
</Copy>
<Copy k="res3.who">Priya R.</Copy>
<Copy k="chip.name">Ask the company</Copy>
<Copy k="chip.meta">Saved as skill · {cmd}</Copy>

<Copy k="scene4.title">Make it learn from the gaps</Copy>
<Copy k="scene4.sub">
  Schedule a weekly report of what it couldn’t answer — the platform team
  fills them in.
</Copy>
<Copy k="sched.prompt">
  Every Friday at 4pm, list the questions {cmd} couldn’t answer this week
  and write a gap report to the folder with a suggested owner for each.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Ask-company gap report</Copy>
<Copy k="card.body">
  Lists the questions {cmd} couldn’t confidently answer, groups them by
  topic, and writes the gap report to your folder with a suggested owner for
  each.
</Copy>
<Copy k="card.when">Every {day} at {time}</Copy>
<Copy k="card.when.day">Friday</Copy>
<Copy k="card.when.time">4:00pm</Copy>

<Copy k="end">
  Every “how do I…” gets a cited answer — and the wiki stops being
  write-only.
</Copy>
`;export{e as default};