Lesson 3 of 4 · Introduction to evalsIterate the prompt before you upgrade the model

# Iterate the prompt before you upgrade the model

Lesson 310 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-evals%2Fiterate-the-prompt-before-you-upgrade-the-model)

Embedded media: https://www.youtube-nocookie.com/embed/4czF\_ac02ic?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Iterate the prompt before you upgrade the model

When a model scores below your accuracy floor, read its failures and fix the
prompt before you pay for a bigger model. Then rerun the same cases. This
lifts the cheapest of three Claude models Meridian tested from 84% to 100%.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=4czF_ac02ic)

*The demo in this video was recorded in August 2026. It ran on Claude Haiku 4.5, Claude Sonnet 5, and Claude Opus 5. Results will differ on newer models. Each lesson's demo is a separate eval run, so its scores and costs won't match those in other lessons.*

**A low eval score says a model got too many cases wrong, but not whether the model or your prompt is to blame.**

Check the prompt first, because a bigger model raises the price of every request you send after the switch. Changing the prompt takes a few minutes, and you can test the change right away.

Meridian, a fictional engineering consultancy, has one prompt that pulls three fields out of each monthly project report: the project ID, the schedule status, and the top risk. Its eval is a test of 50 cases, each a report paired with its expected answer.

Claude Sonnet 5 and Claude Opus 5 got all 50 right. Claude Haiku 4.5 costs the least of the three, but it got only 84%, short of the accuracy floor, which is the 90% Meridian requires before it uses a model.

Before Meridian spends more on a bigger model, it works through five steps:

1. Read the failed cases and find what they share.
2. Choose fixes for the unsupported answers.
3. Write the changes into the prompt.
4. Rerun all 50 cases on all three models.
5. Check every column, then decide on an upgrade.

## Read the failed cases and find what they share[](https://academy.claude.com/courses/introduction-to-evals/iterate-the-prompt-before-you-upgrade-the-model)

**Sort the failed cases by the kind of report each one is and by the field it got wrong.** A score counts the failures but can't explain them. [Reading what failed shows you what went wrong and why(opens in new tab)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), and that's how you learn whether to blame the model or the prompt.

Meridian's 50 cases are 30 typical reports, 10 that cover several projects, and 10 missing-risk cases, where the report has no risk section. The table shows how Haiku 4.5 did with the old prompt, the one Meridian started with.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Kind of report</th><th class="border-b border-strong p-sm text-left font-medium">Cases</th><th class="border-b border-strong p-sm text-left font-medium">Failed</th><th class="border-b border-strong p-sm text-left font-medium">Field that failed</th></tr></thead><tbody><tr><td class="border-b p-sm">Typical</td><td class="border-b p-sm">30</td><td class="border-b p-sm">3</td><td class="border-b p-sm"><code class="cds-inline-code [--cds-prose-code-color:currentColor]">schedule_status</code></td></tr><tr><td class="border-b p-sm">Multi-project</td><td class="border-b p-sm">10</td><td class="border-b p-sm">0</td><td class="border-b p-sm"></td></tr><tr><td class="border-b p-sm">Missing risk</td><td class="border-b p-sm">10</td><td class="border-b p-sm">5</td><td class="border-b p-sm"><code class="cds-inline-code [--cds-prose-code-color:currentColor]">top_risk</code></td></tr></tbody></table>

*Haiku 4.5 with the old prompt failed 8 of the 50 cases.*

Five of the eight failures are missing-risk cases, all on `top_risk`. Each should have come back `null`, but the model wrote a sentence naming a risk every time. Case r045 is one of them.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"></th><th class="border-b border-strong p-sm text-left font-medium">Case r045</th></tr></thead><tbody><tr><td class="border-b p-sm">What the report says of the permit</td><td class="border-b p-sm">"the team does not anticipate any issues with the renewal."</td></tr><tr><td class="border-b p-sm">Expected answer</td><td class="border-b p-sm"><code class="cds-inline-code [--cds-prose-code-color:currentColor]">null</code></td></tr><tr><td class="border-b p-sm">The answer that came back</td><td class="border-b p-sm">"County permit renewal window opens next quarter and could impact project continuity if not completed timely."</td></tr></tbody></table>

The permit gets only a routine note, and the report itself says there's no trouble expected, yet the model picked it as the top risk.

The old prompt's `top_risk` line ended in "or null", which allowed `null` but never told the model when it applies. When failures cluster on one kind of report and one field, they usually share a cause, and here the prompt left something out.

## Choose fixes for the unsupported answers[](https://academy.claude.com/courses/introduction-to-evals/iterate-the-prompt-before-you-upgrade-the-model)

**Pick your fixes from five standard ways to make unsupported answers rarer.** An unsupported answer, one the document doesn't back up, is also called a hallucination. The first three ways below are [basic steps that make hallucinations rarer(opens in new tab)](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations).

1. **Let it say "I don't know."** Tell the model what to return when the document doesn't hold the answer, which for Meridian is `null`.
2. **Quote before answering.** Have the model pull out the sentence that supports its answer first, and then answer from that sentence.
3. **Cite back to the document.** After the model answers, have it find a quote that supports each claim and take back any claim it can't support. A person can then check every claim that's left.
4. **Add a verification pass.** Send a second request whose job is to [check the answer the first request gave(opens in new tab)](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations).
5. **Restrict outside knowledge.** Tell the model to answer from the document alone and to leave out what it learned in training.

Meridian uses the first two, because the first fills exactly the gap that step 1 found. The second makes every answer match a sentence in the report. Both take only a line or two added to the prompt Meridian already has.

## Write the changes into the prompt[](https://academy.claude.com/courses/introduction-to-evals/iterate-the-prompt-before-you-upgrade-the-model)

**State in the prompt when `null` is the right answer, and ask for the quote ahead of the answer.** The box below holds the new prompt, which is Meridian's prompt with both changes made. Find the line that does each job, and a note says what changed.

Exercise: shown a revised data-extraction prompt line by line, the learner picks which line handles each job, like signaling when to answer null or quoting evidence before answering, with hints on wrong picks. It teaches how targeted prompt edits fix specific causes of unsupported answers.

This is the whole new prompt. Select the line that does this job.

Job 1 of 4

You want the model to find its evidence before it answers.

You are extracting structured data from a Meridianmonthly project report.If the report covers multiple projects, extract from the primaryengagement (the first project presented).Return a JSON object with exactly these fields:- "project\_id": the project identifier (e.g. "MER-1234")- "schedule\_status": one of "on\_track", "at\_risk", "delayed"- "top\_risk": the top risk for the period, as a single sentenceIf the report does not state the top risk, output top\_risk: null.Do not infer. Quote the sentence that establishes the top riskinside <source>...</source> tags before emitting JSON.Return the <source> tags (or <source>none</source> when no risk is stated),then the JSON object, and no other text.Report:{{report}}

Next jobStart over

Take case r045 again. The model now has to point to a sentence that shows a risk, and the report's own words show none: "the team does not anticipate any issues with the renewal." When a report holds no sentence like that, the new prompt says what to return: `<source>none</source>`, then `null`.

Your code has one new job too. Since the quote now comes first in the response, the whole text is no longer valid JSON, and `json.loads` on it fails. Parse only what follows the closing `</source>` tag.

python

```
answer = json.loads(text.split("</source>")[-1])
```

## Rerun all 50 cases on all three models[](https://academy.claude.com/courses/introduction-to-evals/iterate-the-prompt-before-you-upgrade-the-model)

**Rerun the eval with the new prompt, keeping the same 50 cases and the same three models.**

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"></th><th class="border-b border-strong p-sm text-left font-medium">Typical</th><th class="border-b border-strong p-sm text-left font-medium">Multi-project</th><th class="border-b border-strong p-sm text-left font-medium">Missing risk</th><th class="border-b border-strong p-sm text-left font-medium">Overall</th></tr></thead><tbody><tr><td class="border-b p-sm">Old prompt</td><td class="border-b p-sm">90%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">50%</td><td class="border-b p-sm">84%</td></tr><tr><td class="border-b p-sm">New prompt</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td></tr></tbody></table>

*The share of cases Haiku 4.5 got right, with the old prompt and with the new prompt.*

None of the five unsupported answers came back, and Haiku 4.5 now scores above the accuracy floor.

In the next table, run cost is the price of one model's pass through all 50 cases, and cost per completed task divides that by the number of correct answers.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Model</th><th class="border-b border-strong p-sm text-left font-medium">Typical</th><th class="border-b border-strong p-sm text-left font-medium">Multi-project</th><th class="border-b border-strong p-sm text-left font-medium">Missing risk</th><th class="border-b border-strong p-sm text-left font-medium">Overall</th><th class="border-b border-strong p-sm text-left font-medium">Run cost</th><th class="border-b border-strong p-sm text-left font-medium">Cost per completed task</th></tr></thead><tbody><tr><td class="border-b p-sm">Haiku 4.5</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">$0.0468</td><td class="border-b p-sm"><strong>$0.0009</strong></td></tr><tr><td class="border-b p-sm">Sonnet 5</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">$0.1250</td><td class="border-b p-sm">$0.0025</td></tr><tr><td class="border-b p-sm">Opus 5</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">$0.3040</td><td class="border-b p-sm">$0.0061</td></tr></tbody></table>

*All three models with the new prompt across 50 cases, against a 90% accuracy floor, at August 2026 standard prices. See [current prices(opens in new tab)](https://claude.com/pricing).*

Every model now clears the floor, so you choose on cost per completed task, and Haiku 4.5's is the lowest.

## Check every column, then decide on an upgrade[](https://academy.claude.com/courses/introduction-to-evals/iterate-the-prompt-before-you-upgrade-the-model)

**Look at every column in both runs, not only the one you set out to fix.** A change that helps one kind of case can break another, so [check for that after every change(opens in new tab)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

Count the unsupported answers and any correct answers that turned wrong. Meridian lost none of its correct answers.

The three typical cases that failed on `schedule_status` passed this time, though no change touched that field's line. A model can answer the same case differently from one run to the next, so [run every setup two or more times before you trust a score(opens in new tab)](https://github.com/anthropics/claude-cookbooks/blob/main/cost_optimization/cost_optimization.ipynb).

Keep changing the prompt and rerunning while the score moves. When it stops moving short of your accuracy floor, [the model lacks a capability, and that's when to upgrade(opens in new tab)](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model).

## The bottom line[](https://academy.claude.com/courses/introduction-to-evals/iterate-the-prompt-before-you-upgrade-the-model)

1. Start by reading the failed cases, grouped by the kind of report each one is and the field it got wrong.
2. Fix what the prompt leaves out by saying what to return when the document holds no answer and by asking for the quote first.
3. Rerun the same cases two or more times, and check that unsupported answers drop while no correct answer turns wrong.
4. Upgrade to a bigger model only once prompt changes stop moving the score.

Was this helpful?
