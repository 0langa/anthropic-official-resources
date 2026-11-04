Lesson 1 of 4 · Introduction to evalsWhen to use what model

# When to use what model

Lesson 110 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-evals%2Fwhen-to-use-what-model)

Embedded media: https://www.youtube-nocookie.com/embed/FWtxyIlkIGc?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

When to use what model

Claude's models differ in capability, speed, and cost, and you don't have to
guess which one suits your task, because you can measure it. This lesson
shows how, following Meridian, a fictional engineering consultancy that uses
one prompt to pull three fields out of 50 project reports.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=FWtxyIlkIGc)

*The demo in this video was recorded in August 2026. It ran on Claude Haiku 4.5, Claude Sonnet 5, and Claude Opus 5. Results will differ on newer models. Each lesson's demo is a separate eval run, so its scores and costs won't match those in other lessons.*

When you pick a Claude model for a task, you probably go on instinct, or on a colleague's word. Claude's models really do differ in [capability, speed, and cost(opens in new tab)](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model), but no published comparison has ever seen your specific prompt, so none of them can tell you how a model will do on your task. **The way to choose is to measure how often each model gets your task right, and only then to look at what each one costs.**

It's a lot like buying a ladder to reach the top of a wall. Before you look at prices, you find out how high the wall is, because a ladder that's too short is useless at any price. Guessing won't tell you which ladders reach, so you measure them, and of those that reach, you buy the cheapest. A taller wall needs a longer ladder, and that's the right one to buy even though it costs more.

With models, that measuring is done by an eval, which is a set of cases you run every model on. Each case is one input your prompt will see and the answer you expect back, and a person writes that answer from the input before any model runs. Each run then gets a score for how many cases the model got right.

This lesson follows Meridian. Each month it gets 50 project reports in Markdown, and one prompt pulls three fields out of each: the project ID, the schedule status, and the top risk. Its cases are one month's 50 reports, and what it doesn't know yet is which model should run that prompt.

Meridian works it out in five steps, which you can follow with your own prompt:

1. Decide how accurate a model must be
2. Score each model on the same cases
3. Work out what one call costs
4. Compare models by what each completed task costs
5. Pick the model with the accuracy you need at the lowest cost

## Decide how accurate a model must be[](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)

This is the height of the wall, and you settle it before you look at what anything costs. Your accuracy floor is the share of cases a model has to get right before you'd ship it. **To set the floor, work out what one wrong answer costs you, because the more it costs, the higher your floor should be.**

For Meridian, a wrong answer means someone has to check that report by hand, which takes about 5 minutes. Its engineers can absorb 5 of those checks a month, and since 5 of 50 is 10%, Meridian's floor is 90%.

A different task can push the floor much higher. Say one wrong answer costs $1,000, perhaps because it reached a client. Then the floor goes to 100%, and what the model costs hardly matters.

## Score each model on the same cases[](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)

A floor is just a number until you measure models against it. **Run every model on the same cases with the same prompt, so that the model is the only thing that changes from one run to the next.** Meridian ran its 50 reports through one prompt on three models: Claude Haiku 4.5, Claude Sonnet 5, and Claude Opus 5.

A script of Meridian's checks each field against the expected answer. The project ID and the schedule status must match exactly, but the top risk is a sentence, so the script compares it more loosely and allows slight changes in wording. Each case is one task, which for Meridian means one report to pull three fields from. A model completes the task only when it gets all three fields right.

Of the 50 cases, 30 are typical reports, 10 cover several projects at once, and 10 have no risk section. The table breaks each model's score down by those three kinds.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Model</th><th class="border-b border-strong p-sm text-left font-medium">Typical</th><th class="border-b border-strong p-sm text-left font-medium">Multi-project</th><th class="border-b border-strong p-sm text-left font-medium">Missing risk</th><th class="border-b border-strong p-sm text-left font-medium">Overall</th></tr></thead><tbody><tr><td class="border-b p-sm">Haiku 4.5</td><td class="border-b p-sm">90%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">50%</td><td class="border-b p-sm">84%</td></tr><tr><td class="border-b p-sm">Sonnet 5</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td></tr><tr><td class="border-b p-sm">Opus 5</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td><td class="border-b p-sm">100%</td></tr></tbody></table>

*Share of cases each model got right, by kind of report, with the same prompt and a floor of 90%*

Sonnet 5 and Opus 5 both got all 50 right. Haiku 4.5 got 42 of 50, which is 84%, so on this task and with this prompt it doesn't clear the floor.

## Work out what one call costs[](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)

Now that two models have cleared the floor, cost comes in. You're billed by the token, a piece of the text that models process, and every response from the Messages API includes a `usage` block that holds the exact token counts you're billed for. The example below is an illustration, a Sonnet 5 call about the size of one of Meridian's, with 780 input tokens and 41 output tokens.

json

```
"usage": {
  "input_tokens": 780,
  "output_tokens": 41
}
```

Read those counts from `usage` for each model rather than estimating them from your text. A model's tokenizer is the part that splits text into tokens, and not every model uses the same one. So the same text can come to a different number of tokens on different models. Sonnet 5 and Opus 5 use [a newer tokenizer that produces approximately 30% more tokens for the same text(opens in new tab)](https://platform.claude.com/docs/en/about-claude/pricing), and Haiku 4.5 uses the previous one.

Input tokens and output tokens have separate rates, each given per million tokens. The table shows the three models' rates as listed in August 2026, which is when Meridian ran the eval, and [Claude's pricing page(opens in new tab)](https://claude.com/pricing) has the rates that apply today.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Model</th><th class="border-b border-strong p-sm text-left font-medium">Input</th><th class="border-b border-strong p-sm text-left font-medium">Output</th></tr></thead><tbody><tr><td class="border-b p-sm">Haiku 4.5</td><td class="border-b p-sm">$1</td><td class="border-b p-sm">$5</td></tr><tr><td class="border-b p-sm">Sonnet 5</td><td class="border-b p-sm">$2</td><td class="border-b p-sm">$10</td></tr><tr><td class="border-b p-sm">Opus 5</td><td class="border-b p-sm">$5</td><td class="border-b p-sm">$25</td></tr></tbody></table>

*Each model's rate per million input and output tokens, as listed in August 2026*

**A call's cost is its input tokens times the input rate, plus its output tokens times the output rate.** The example is a Sonnet 5 call, so it uses Sonnet 5's rates from that table.

text

```
780 input tokens  × $2 per million  = $0.0016
 41 output tokens × $10 per million = $0.0004
                              total = $0.0020
```

## Compare models by what each completed task costs[](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)

Add up what every call in a run costs, and the total is called the run cost. **Divide the run cost by the number of tasks the model completed, and you get the cost per completed task, which is the figure you [compare models on(opens in new tab)](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence).**

You divide by completed tasks, not by calls. That's because every call is billed, even one that gets the task wrong. So a model's wrong answers add to the cost of each task that same model does complete.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Model</th><th class="border-b border-strong p-sm text-left font-medium">Completed</th><th class="border-b border-strong p-sm text-left font-medium">Run cost</th><th class="border-b border-strong p-sm text-left font-medium">Cost per completed task</th></tr></thead><tbody><tr><td class="border-b p-sm">Haiku 4.5</td><td class="border-b p-sm">42 of 50</td><td class="border-b p-sm">$0.0380</td><td class="border-b p-sm">$0.0009</td></tr><tr><td class="border-b p-sm">Sonnet 5</td><td class="border-b p-sm">50 of 50</td><td class="border-b p-sm">$0.0984</td><td class="border-b p-sm">$0.0020</td></tr><tr><td class="border-b p-sm">Opus 5</td><td class="border-b p-sm">50 of 50</td><td class="border-b p-sm">$0.2323</td><td class="border-b p-sm">$0.0046</td></tr></tbody></table>

*Run cost and cost per completed task for the 50 cases, at the rates listed in August 2026*

## Pick the model with the accuracy you need at the lowest cost[](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)

**Your floor settles which models are candidates, and of those you pick the one whose cost per completed task is lowest.** Sonnet 5 and Opus 5 both got 50 of 50, at $0.0020 and $0.0046 per completed task, so on this task Meridian picks Sonnet 5. Haiku 4.5's $0.0009 is the lowest figure in the table, but it isn't a candidate, because it doesn't clear the floor.

On a harder task, the most capable model might be the only one that clears the floor, and then it's the right choice. Each result is also tied to the prompt and the cases the eval used. Change the prompt or the cases, and the right model can change too, so run the eval again whenever you change either one.

This eval doesn't measure latency. If your users wait for the answers, time the responses on your own cases, just as you scored them here.

## Lower the cost of running the eval[](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)

Those five steps give you a model, and there's one more way to lower what the eval itself costs. Nobody waits on an eval's answers, so you can send it through the [Batch API(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/batch-processing), which processes requests asynchronously. **The Batch API runs the same models at [half the price on input and output tokens(opens in new tab)](https://platform.claude.com/docs/en/about-claude/pricing).**

When you compare models, don't mix batch rates and standard rates in one comparison. Work out every model's cost at batch rates, or every model's cost at standard rates.

## The bottom line[](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)

1. Set your accuracy floor first, from what a wrong answer would cost you.
2. Give every model the same cases, and drop any model that doesn't clear the floor.
3. Take each call's cost from its `usage` block, then divide the run cost by the number of tasks the model completed.
4. Of the candidates that clear the floor, pick the one whose cost per completed task is lowest.

Was this helpful?
