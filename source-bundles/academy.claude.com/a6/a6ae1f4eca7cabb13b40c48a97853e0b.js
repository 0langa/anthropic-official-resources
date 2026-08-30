var e=`---
kind: widget-copy
---

{/* Hero demo film for the “My voice skill” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated skill
    command, file and folder names — keep them where the sentence needs
    them. */}

<Copy k="title">My voice skill</Copy>
<Copy k="subtitle">
  Reads your sent Gmail and Slack, writes a one-page profile of how you
  write.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Connect Gmail and Slack, then describe the profile you want and where to
  save it.
</Copy>
<Copy k="prompt">
  Read my Gmail sent folder and my Slack messages from the last 90 days.
  Write a one-page profile of how I write: tone, sentence length, how I open
  and close, the structures I lean on, the phrases and tics I repeat, and
  the things I clearly avoid. Be specific and quote real examples. Then save
  it as a personal skill called {cmd} so every draft you write for me from
  now on uses it.
</Copy>

<Copy k="scene2.title">Cowork reads what you’ve already sent</Copy>
<Copy k="scene2.sub">
  Gmail and Slack are the corpus; the Progress card tracks the plan as it
  runs.
</Copy>
<Copy k="work.heading">Building your voice profile</Copy>
<Copy k="step1">Gmail · read 412 sent emails from the last 90 days</Copy>
<Copy k="step2">Slack · read 1,847 messages across 23 channels</Copy>
<Copy k="step3">Google Drive · pulled {doc}</Copy>
<Copy k="step4">Comparing tone, openers, sign-offs, repeated phrases</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done · saved as personal skill {cmd}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read sent mail</Copy>
<Copy k="prog2">Read Slack and Drive</Copy>
<Copy k="prog3">Profile the patterns</Copy>
<Copy k="prog4">Write the profile</Copy>
<Copy k="prog5">Save as {cmd}</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">A one-page profile of how you write</Copy>
<Copy k="scene3.sub">
  Every observation backed by a line you actually sent — saved as a skill so
  future drafts load it first.
</Copy>
<Copy k="trait1">
  {lead} — you lead with the ask, context second. 78% of your emails open
  with a verb: “Can you…”, “Quick one —”, “Heads up:”. You never open with
  “Hope you’re well.”
</Copy>
<Copy k="trait1.lead">Openers</Copy>
<Copy k="trait2">
  {lead} — direct and warm, never formal. “Let’s just ship it and see”
  appears six times; “happy to be wrong here” four times when you’re pushing
  back.
</Copy>
<Copy k="trait2.lead">Tone</Copy>
<Copy k="trait3">
  {lead} — “folks” not “team” (41 vs 0). Em-dashes over semicolons. Slack
  asks open with “quick q —” almost every time.
</Copy>
<Copy k="trait3.lead">Word choice</Copy>
<Copy k="trait4">
  {lead} — first initial only on internal mail; “thanks!” with the
  exclamation on external. No “Best,” ever.
</Copy>
<Copy k="trait4.lead">Sign-off</Copy>
<Copy k="trait5">
  {lead} — never “per my last email”, never bullet lists under three items,
  never the passive voice in an opener.
</Copy>
<Copy k="trait5.lead">Avoids</Copy>
<Copy k="chip.meta">
  Saved as skill · Personal skill · Saved to Customize → Skills
</Copy>

<Copy k="scene4.title">Refresh it as your writing shifts</Copy>
<Copy k="scene4.sub">
  Schedule a monthly re-read so the profile keeps up — your hand-added rules
  stay intact.
</Copy>
<Copy k="sched.prompt">
  On the first of every month, re-read my sent mail and Slack from the last
  90 days and update {cmd}, keeping every rule I added by hand.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Refresh {cmd}</Copy>
<Copy k="card.body">
  Runs {cmd} against the last 90 days of sent mail and Slack and writes the
  merged profile back to the skill, preserving your hand-added rules.
</Copy>
<Copy k="card.when">{freq} on the 1st</Copy>
<Copy k="card.when.freq">Monthly</Copy>

<Copy k="end">
  Every draft Cowork writes from now on picks up your tone, your structures,
  your sign-off.
</Copy>
`;export{e as default};