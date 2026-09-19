Lesson 6 of 13 · Claude Platform 101What is thinking?

# What is thinking?

Lesson 65 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fclaude-platform-101%2Fwhat-is-thinking)

Embedded media: https://www.youtube-nocookie.com/embed/4SunBsMGRwA?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

What is thinking?

Some tasks need more than a quick answer. Claude can work through a problem
before responding — a feature called **extended thinking**. In this lesson,
we'll look at what thinking is, how it works, and when it actually
helps.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=4SunBsMGRwA)

Here's the failure mode we're trying to avoid. Ask a model a multi-step question and have it answer immediately, and it can confidently get it wrong:

![Diagram of an app sending a multi-step apples question to a model, which immediately replies with the wrong answer: you'd have 6.5 apples](https://academy.claude.com/assets/media/f5d4c633d434b2972169941e685cd3c1a049b9db48c4126de844bb8490389065.png)

## What is extended thinking?[](https://academy.claude.com/courses/claude-platform-101/what-is-thinking)

Extended thinking lets Claude reason step by step before producing a final response. When it's enabled, Claude generates internal reasoning tokens — often called a **chain of thought** — and then delivers the answer. On Claude Opus 5, the thinking text stays hidden unless your request's `thinking` setting includes `"display": "summarized"`, as the example below does. When it does, a summary of Claude's reasoning comes back in the response alongside the final text.

## Adaptive thinking on Claude Opus 5[](https://academy.claude.com/courses/claude-platform-101/what-is-thinking)

On Opus 5, thinking is **adaptive** and on by default. There's no token budget to pick: Claude decides dynamically when to think and how much.

To control how much Claude thinks, use the **effort** parameter. One gotcha: it goes inside `output_config`, not next to the `thinking` block. The levels are:

- `low`
- `medium`
- `high` (the default)
- `xhigh` (extra high)
- `max`

## When to use it (and when to skip it)[](https://academy.claude.com/courses/claude-platform-101/what-is-thinking)

Extended thinking helps with:

- Math and multi-step logic
- Code debugging
- Regulatory analysis
- Anything that involves trade-offs or comparing options

![Slide showing extended thinking use cases: math, multi-step logic, code debugging, regulatory analysis, and complex comparisons](https://academy.claude.com/assets/media/b6dff79101adfefbcca44c884b9b18a8a19e987a67cf5376756e35160d69ef53.png)

Skip it for simple classification, extraction, or boilerplate. For those tasks it just adds latency and cost without actually improving the results.

## Thinking in action[](https://academy.claude.com/courses/claude-platform-101/what-is-thinking)

Let's see it work. Here's an agent loop with one weather tool, and we'll ask Claude to plan a road trip out of San Francisco — two stops, weighing weather and drive time. That's a real trade-off, the kind of question where thinking earns its keep.

python

```
import anthropic

client = anthropic.Anthropic()

weather_tool = {
    "name": "get_weather",
    "description": "Get the current weather for a city.",
    "input_schema": {
        "type": "object",
        "properties": {
            "city": {"type": "string", "description": "City name"}
        },
        "required": ["city"],
    },
}

response = client.messages.create(
    model="claude-opus-5",
    max_tokens=16000,
    thinking={"type": "adaptive", "display": "summarized"},  # summarized = return the reasoning text
    output_config={"effort": "high"},  # low | medium | high | xhigh | max
    tools=[weather_tool],
    messages=[
        {
            "role": "user",
            "content": "Plan a road trip out of San Francisco with two stops, "
                       "weighing weather and drive time.",
        }
    ],
)
```

When you run this, the output is more interesting than usual. You'll see **thinking blocks** where Claude works through the trade-offs, followed by tool calls to check each city, and finally a text block with the actual recommendation.

The reasoning is visible — that's the whole point.

## Why this matters in production[](https://academy.claude.com/courses/claude-platform-101/what-is-thinking)

In a production app, this is the difference between an agent that finds problems one at a time and an agent that connects them. Take a compliance review app: toggling adaptive thinking on the auto-review call lets the agent reason *across* report sections — catching things like a wind load spec in section three that conflicts with the material spec elsewhere in the document.

![Compliance review app UI with a Thorough review checkbox enabled, running an auto-review that cross-references findings between report sections](https://academy.claude.com/assets/media/965c3809645179776a2e75d93d26acd5a60a03496c55ce3c69418090f3728b8d.png)

## Recap[](https://academy.claude.com/courses/claude-platform-101/what-is-thinking)

- **Extended thinking** gives Claude room to reason before it answers. On Opus 5, the response carries a summary of that reasoning only when you ask for it.
- On Opus 5, adaptive thinking is on by default — no token budget needed. Add `"display": "summarized"` to see the reasoning in the response.
- Dial the depth with the **effort** parameter inside `output_config`: `low`, `medium`, `high` (default), `xhigh`, or `max`.
- Use it for hard, trade-off-heavy problems. Skip it for simple ones — there it just costs latency and tokens.

Was this helpful?
