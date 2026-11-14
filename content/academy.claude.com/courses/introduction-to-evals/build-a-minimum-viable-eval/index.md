Lesson 2 of 4 · Introduction to evalsBuild a minimum viable eval

# Build a minimum viable eval

Lesson 215 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-evals%2Fbuild-a-minimum-viable-eval)

Embedded media: https://www.youtube-nocookie.com/embed/UiC4gbDGnoU?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Build a minimum viable eval

Ask five engineers which Claude model handles a task best, and you'll get
five opinions. An eval gives you a number instead, and a useful one can
start small. This lesson builds a small eval for Meridian, a fictional
engineering consultancy.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=UiC4gbDGnoU)

*The demo in this video was recorded in August 2026. It ran on Claude Haiku 4.5, Claude Sonnet 5, and Claude Opus 5. Results will differ on newer models. Each lesson's demo is a separate eval run, so its scores and costs won't match those in other lessons.*

**An eval is a test that models take.** It has three parts: realistic inputs, the answer you expect for each, and a way to grade what each model returns. Each model runs your prompt on every input. An input together with its expected answer makes a case, and grading every case gives you a score.

Meridian's extraction prompt pulls three fields out of each monthly project report: the project ID and the schedule status, which are short values, and the top risk, which is a sentence.

Building an eval is like giving an exam, with you as the teacher and the models as the students.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">The exam</th><th class="border-b border-strong p-sm text-left font-medium">The eval</th></tr></thead><tbody><tr><td class="border-b p-sm">The teacher writes the exam and its answer key before anyone takes it.</td><td class="border-b p-sm">You write the expected answers before any model runs.</td></tr><tr><td class="border-b p-sm">A scoring machine grades the multiple-choice section from the key.</td><td class="border-b p-sm">Code compares a field with its expected answer.</td></tr><tr><td class="border-b p-sm">The essay question goes to a teaching assistant with a grading guide.</td><td class="border-b p-sm">A sentence goes to an LLM judge with a rubric.</td></tr><tr><td class="border-b p-sm">The teacher grades a few essays before trusting the assistant with the rest.</td><td class="border-b p-sm">You hand-grade a sample.</td></tr></tbody></table>

An LLM judge is a second model that checks an answer and decides whether it's right. Anything that grades an answer is called a grader, whether it's code, a model, or a person. You'll build Meridian's eval in six steps:

1. Choose a grader for each field
2. Design the set of cases
3. Write down the expected answers
4. Set up the LLM judge for the top risk
5. Run the models and grade their answers
6. Hand-grade a sample before you trust the judge

## Choose a grader for each field[](https://academy.claude.com/courses/introduction-to-evals/build-a-minimum-viable-eval)

There are three ways to grade an answer. The rule is to [pick the quickest method that's also reliable and scales(opens in new tab)](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests).

1. **Code-based grading.** Your code checks that an answer matches its expected answer exactly, or that it contains a key phrase. It's the quickest and most reliable way, and it scales to any number of cases.
2. **LLM judge.** The judge fits answers where two different sentences can both be right. It's also quick, flexible, and scalable.
3. **Human grading.** A person reads each answer, which gives the best quality but is slow and costly, so it comes last. People are still the right graders for specialized, high-stakes work and for answers that come down to judgment.

**Use code for every field it can check exactly, and give the judge only what's left.** Here's how that plays out for Meridian's three fields on one of its cases, report r032.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Field</th><th class="border-b border-strong p-sm text-left font-medium">Expected answer in r032</th><th class="border-b border-strong p-sm text-left font-medium">Grader, and why</th></tr></thead><tbody><tr><td class="border-b p-sm"><code class="cds-inline-code">project_id</code></td><td class="border-b p-sm">MER-2524</td><td class="border-b p-sm">Code, with an exact match, because an ID is either right or wrong</td></tr><tr><td class="border-b p-sm"><code class="cds-inline-code">schedule_status</code></td><td class="border-b p-sm">delayed</td><td class="border-b p-sm">Code, with an exact match, because the field can only be <code class="cds-inline-code">on_track</code>, <code class="cds-inline-code">at_risk</code>, or <code class="cds-inline-code">delayed</code></td></tr><tr><td class="border-b p-sm"><code class="cds-inline-code">top_risk</code></td><td class="border-b p-sm">Utility relocation by the gas company is running four weeks behind their committed schedule.</td><td class="border-b p-sm">The judge, because there are many ways to put the same risk into words</td></tr></tbody></table>

When a report names no risk, though, the expected `top_risk` answer is `null`, JSON's empty value. Code can check that with an exact match.

## Design the set of cases[](https://academy.claude.com/courses/introduction-to-evals/build-a-minimum-viable-eval)

Four rules shape the whole set of cases. They build on the [eval design principles(opens in new tab)](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) in the docs.

1. **Make cases task-specific.** Build them from your own real reports, because sample data only shows how a model does on samples.
2. **Automate the grading.** You'll run the set again and again, so the everyday grading has to work without a person.
3. **Favor volume over polish.** For the same effort, many cases graded automatically tell you more than a few graded carefully by hand.
4. **Stratify your edge cases.** An edge case is an unusual input that production still sends, such as a scanned report. Give each kind about the share of cases it has in production, so if scanned reports are 5% of what arrives, make them about 5% of the set.

**Above all, the mix of cases should look like what production sends you.** Teams often take volume to mean hundreds of cases, but [a set of 20 to 50 simple ones is a great start(opens in new tab)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

Meridian settled on 50 cases. Thirty are typical reports, 10 cover several projects, and 10 are missing-risk cases, which means reports with no risk section. Both unusual kinds reach Meridian often enough that it wants them covered.

## Write down the expected answers[](https://academy.claude.com/courses/introduction-to-evals/build-a-minimum-viable-eval)

Cases whose expected answers a person has written down are called a labeled set. **Write each expected answer yourself, from the report, before any model runs.** The code grader compares the models' answers against them.

Meridian keeps its labeled set in one file, `golden.json`, with one record for each case. A record holds the case's `id`, its `category`, and the expected answer for each field. The `category` is `typical`, `multi_project`, or `missing_risk`.

## Set up the LLM judge for the top risk[](https://academy.claude.com/courses/introduction-to-evals/build-a-minimum-viable-eval)

The `top_risk` field holds a sentence. Code can't tell whether two different sentences name the same risk, so this field goes to the judge. It's the essay question, and like the teaching assistant, the judge needs a grading guide.

That guide is a rubric, a written set of rules for what counts as correct and what counts as incorrect. [It should be detailed and clear(opens in new tab)](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests).

The judge's prompt holds the report, the answer, and the rubric. [Each goes in its own XML tags(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), so the judge is less likely to mix them up. Your expected answer isn't in the prompt, because the judge decides from the report itself. That way an answer doesn't lose credit just for wording the risk differently from you. Keep your expected answer anyway, since it's your record of the right answer when you grade a sample by hand.

Exercise: shown the rubric and prompt an LLM judge reads for one answer, the learner selects the line that does each stated job, with hints on wrong tries. It teaches how a rubric separates correct from incorrect answers and how a judge can answer "unknown".

This is everything Meridian's judge reads for one answer. Select the line that does this job.

Job 1 of 3

You want the judge to have a way to say it can't tell.

RUBRIC = """The system extracts the "top risk" from a Meridianmonthly project report.An answer is CORRECT if:- the report states a top risk and the answer faithfully captures that risk, OR- the report states no risk anywhere (no Risks section, no risk statement) and the answer is null.An answer is INCORRECT if:- it states a risk that does not appear in the report (an invented risk), OR- it returns null when the report clearly states a top risk, OR- it captures the wrong risk (e.g. a secondary watch item or a risk from a different project), OR- it presents a routine or explicitly-reassuring note as if it were the top risk."""JUDGE\_PROMPT = """You grade an assistant answer against a rubric.<report>{report}</report><answer>top\_risk: {answer}</answer><rubric>{rubric}</rubric>An answer is correct only if it fully meets the rubric.If you cannot determine correctness from the report alone,use the verdict 'unknown'.Give a short explanation, then the verdict."""

Next jobStart over

The judge's decision on one answer is called its verdict. **A verdict is only useful if it comes back in a shape your code can count.** [Structured outputs(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) give you that. You send a JSON schema with the request, and the response has to match it. A JSON schema describes which fields the JSON may hold and what can go in each one.

Meridian's schema has two fields, `explanation` and `verdict`. The verdict must be `correct`, `incorrect`, or `unknown`. The explanation is a short account of why the judge decided as it did, so it's what you read when you want to know what went wrong with an answer.

The value that matters most is `unknown`. It gives the judge [a way out(opens in new tab)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), an option to say it can't tell. Without it, the judge has to guess between the other two whenever it isn't sure.

Exercise: given a verdict schema and the function that sends one answer to the judge, select the line that does a stated job, such as restricting allowed values or catching a cut-off response, with hints on wrong tries and explanations on right ones.

Here's the schema the judge's verdict has to match, and the function that judges one answer. Select the line that does this job.

Job 1 of 4

You want the API to hold the judge's response to your schema.

JUDGE\_MODEL = "claude-opus-5"JUDGE\_SCHEMA = { "type": "object", "properties": { "explanation": {"type": "string"}, "verdict": { "type": "string", "enum": ["correct", "incorrect", "unknown"], }, }, "required": ["explanation", "verdict"], "additionalProperties": False,}def judge\_one(client, report: str, answer) -> dict: prompt = JUDGE\_PROMPT.format( report=report, answer=json.dumps(answer), rubric=RUBRIC ) response = client.messages.create( model=JUDGE\_MODEL, max\_tokens=1024, output\_config={ "format": {"type": "json\_schema", "schema": JUDGE\_SCHEMA}, }, messages=[{"role": "user", "content": prompt}], ) if response.stop\_reason != "end\_turn": raise RuntimeError(f"judge stopped early: {response.stop\_reason}") text = next(b.text for b in response.content if b.type == "text") return json.loads(text)

Next jobStart over

## Run the models and grade their answers[](https://academy.claude.com/courses/introduction-to-evals/build-a-minimum-viable-eval)

Before anything can be graded, you need answers. Run your prompt on every case with each model you're testing, and save every answer to a file. Meridian ran its extraction prompt on all 50 cases with Claude Haiku 4.5, Claude Sonnet 5, and Claude Opus 5.

**Test the judge once, on cases code can also grade, to see whether the two graders agree.** Meridian's first judge run took only the 10 missing-risk cases, which came to 30 answers across the three models. Their expected answer is `null`, so code could grade them too. Save each verdict next to its answer, so you can check the judge by hand later.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Model</th><th class="border-b border-strong p-sm text-left font-medium">Correct</th><th class="border-b border-strong p-sm text-left font-medium">Incorrect</th><th class="border-b border-strong p-sm text-left font-medium">Unknown</th><th class="border-b border-strong p-sm text-left font-medium">Agrees with code grader</th></tr></thead><tbody><tr><td class="border-b p-sm">Haiku 4.5</td><td class="border-b p-sm">5</td><td class="border-b p-sm">5</td><td class="border-b p-sm">0</td><td class="border-b p-sm">10/10</td></tr><tr><td class="border-b p-sm">Sonnet 5</td><td class="border-b p-sm">10</td><td class="border-b p-sm">0</td><td class="border-b p-sm">0</td><td class="border-b p-sm">10/10</td></tr><tr><td class="border-b p-sm">Opus 5</td><td class="border-b p-sm">10</td><td class="border-b p-sm">0</td><td class="border-b p-sm">0</td><td class="border-b p-sm">10/10</td></tr></tbody></table>

*The judge's first run, on the 10 missing-risk cases, where code could grade too.*

For reports with no risk section, Meridian now has a number for each model where it used to have opinions.

Haiku 4.5's five incorrect answers are all the same kind of mistake, and case r045 shows one.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">In case r045</th><th class="border-b border-strong p-sm text-left font-medium">Text</th></tr></thead><tbody><tr><td class="border-b p-sm">What the report says about a county permit renewal</td><td class="border-b p-sm">"the team does not anticipate any issues with the renewal."</td></tr><tr><td class="border-b p-sm">Haiku 4.5's answer</td><td class="border-b p-sm">"County permit renewal window opens next quarter and could impact project continuity if not completed timely."</td></tr><tr><td class="border-b p-sm">The judge's explanation</td><td class="border-b p-sm">"The answer converts this explicitly-reassuring routine note into a top risk, which the rubric says is incorrect. The correct answer would have been null."</td></tr></tbody></table>

The judge's explanation names the kind of mistake the answer made. That mistake comes from the extraction prompt, which never says what to do when a report names no risk.

## Hand-grade a sample before you trust the judge[](https://academy.claude.com/courses/introduction-to-evals/build-a-minimum-viable-eval)

The judge agreed with code on all 30 answers, but code could check those anyway. The judge's real job is grading free text, where code can't help. **Before you give it that job, [test that it's reliable(opens in new tab)](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests).** Two practices help.

1. **Grade a sample yourself.** Grade a handful of saved answers by hand and compare your grades with the judge's verdicts, because [a judge should agree closely with human experts(opens in new tab)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents). Where you and the judge disagree, make the rubric clearer and run it again.
2. **Use a judge that didn't write the answers.** It's [generally best to grade with a different model from the one that wrote the output(opens in new tab)](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests).

## The bottom line[](https://academy.claude.com/courses/introduction-to-evals/build-a-minimum-viable-eval)

1. Grade with code where an exact check works, with a judge where two different sentences can both be right, and with people where it comes down to judgment.
2. Write the expected answers down before any model runs, and build a set of cases that looks like production.
3. Give the judge a rubric, a schema its verdict has to match, and the option to say `unknown`.
4. Grade a sample of the judge's work by hand before you trust it.

Was this helpful?
