Lesson 8 of 9 · Tool use with the Messages APICut the cost of tool-heavy workflows

# Cut the cost of tool-heavy workflows

Lesson 815 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Ftool-use-with-the-messages-api%2Fcut-the-cost-of-tool-heavy-workflows)

Embedded media: https://www.youtube-nocookie.com/embed/gccCX7-qkvk?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Cut the cost of tool-heavy workflows

SummaryTranscript

An agent that uses tools sends everything again on every request.
Programmatic tool calling and prompt caching each cut a different part of
its cost.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=gccCX7-qkvk)

*The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (`claude-sonnet-5`). Results may differ on newer models.*

**An agent that uses tools sends everything again on every request, so its cost grows with each tool call.** Each request carries the tool definitions, the system prompt, the question, and every tool result so far. Those are its input tokens, and each one is billed.

Programmatic tool calling and prompt caching both cut that cost.

Meridian is a fictional engineering consultancy with 40 engineers. Its agent got one question: Which engineers were under 70% utilization in June 2026? The agent had two tools. `list_employees` returns the roster, and `get_employee_hours` returns one engineer's timesheet.

Answering that question took the agent 42 requests and 1,124,799 input tokens. The whole run cost $2.29 in tokens.

## Measure the input tokens in each request[](https://academy.claude.com/courses/tool-use-with-the-messages-api/cut-the-cost-of-tool-heavy-workflows)

**Print `usage.input_tokens` each time a response comes back, because those counts show you where the cost is.**

python

```
resp = client.messages.create(...)
print(resp.usage.input_tokens, "input tokens")
```

Meridian's agent runs a classic loop, where each response asks for one tool call. Here are two of its counts.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Request</th><th class="border-b border-strong p-sm text-left font-medium">What it carries</th><th class="border-b border-strong p-sm text-left font-medium">Input tokens</th></tr></thead><tbody><tr><td class="border-b p-sm">Request 1</td><td class="border-b p-sm">Tool definitions, system prompt, and question</td><td class="border-b p-sm">606</td></tr><tr><td class="border-b p-sm">Request 37</td><td class="border-b p-sm">The same, plus 36 earlier tool results</td><td class="border-b p-sm">47,905</td></tr></tbody></table>

Request 1 carries only what every request sends. Later requests add tool calls and their results. Compare the two counts to see which part grew.

## Keep tool results out of what Claude reads[](https://academy.claude.com/courses/tool-use-with-the-messages-api/cut-the-cost-of-tool-heavy-workflows)

With [programmatic tool calling(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling), Claude writes a script that calls your tools, and the code execution tool runs it in a container. **Only what the script prints reaches Claude.** Meridian's 40 timesheets stay with the script, and Claude gets its short printout.

**Check your tools and your model first.** As of October 2026, programmatic tool calling [doesn't support tools marked `strict: true`(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling). It also doesn't support `disable_parallel_tool_use`, the `tool_choice` setting that limits Claude to one tool call in each response. `tool_choice` can't force Claude to call a tool from the script.

Claude Haiku 4.5 doesn't support the feature. The feature runs on the Claude API, Claude Platform on AWS, and Microsoft Foundry deployments hosted on Anthropic.

Turning on programmatic tool calling takes four changes.

1. **Add the code execution tool to your `tools` list.**
2. **Mark the tools the script may call.** Give each one an `allowed_callers` field that names the code execution tool at [version `code_execution_20260120` or later(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference).
3. **Send the container's ID back.** Read it from each response that stops for a tool call, and send it with the request that returns your tool results.
4. **Describe each tool's result.** Say in the description what shape it takes, because the script has to parse it. Here's Meridian's description for `get_employee_hours`.

`Returns one engineer's hours for the month as JSON: {"name": str, "billable_hours": float, "utilization": float 0-1}`

Here's Meridian's loop after these changes.

python

```
CODE_EXECUTION = "code_execution_20260120"
TOOLS = [
    {"type": CODE_EXECUTION, "name": "code_execution"},
    {**LIST_EMPLOYEES, "allowed_callers": [CODE_EXECUTION]},
    {**GET_EMPLOYEE_HOURS, "allowed_callers": [CODE_EXECUTION]},
]

messages = [{"role": "user", "content": QUESTION}]
container = None
while True:
    resp = client.messages.create(
        model="claude-sonnet-5", max_tokens=4096,
        tools=TOOLS, messages=messages, container=container,
    )
    print(resp.usage.input_tokens, "input tokens")
    if resp.stop_reason not in ("tool_use", "pause_turn"):
        break
    container = resp.container.id
    messages.append({"role": "assistant", "content": resp.content})
    if resp.stop_reason == "tool_use":
        messages.append({"role": "user", "content": run_tools(resp)})
print("".join(b.text for b in resp.content if b.type == "text"))
```

- `LIST_EMPLOYEES` and `GET_EMPLOYEE_HOURS` are Meridian's tool definitions.
- Your own `run_tools` runs each tool call and returns the results.
- On `pause_turn`, the loop sends the response back and continues.

When the script calls a tool, the response's `stop_reason` is `"tool_use"`. Your code runs the tool, and the result goes to the script, not to Claude. The script can run tools in parallel, so one response can hold more than one tool call.

Here's the same question answered both ways.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Run</th><th class="border-b border-strong p-sm text-left font-medium">Requests</th><th class="border-b border-strong p-sm text-left font-medium">Tool calls</th><th class="border-b border-strong p-sm text-left font-medium">Input tokens</th><th class="border-b border-strong p-sm text-left font-medium">Token cost</th></tr></thead><tbody><tr><td class="border-b p-sm">Classic loop</td><td class="border-b p-sm">42</td><td class="border-b p-sm">41</td><td class="border-b p-sm">1,124,799</td><td class="border-b p-sm">$2.29</td></tr><tr><td class="border-b p-sm">Programmatic tool calling</td><td class="border-b p-sm">3</td><td class="border-b p-sm">41</td><td class="border-b p-sm">28,486</td><td class="border-b p-sm">$0.0667</td></tr></tbody></table>

*Both runs used the same question, the same tools, and `claude-sonnet-5`. Costs use [prices as of September 2026(opens in new tab)](https://claude.com/pricing), and code execution time is billed separately from tokens.*

Programmatic tool calling fits lookups that don't depend on each other. It helps little when Claude has to reason over each result before it makes the next tool call.

## Cache tool definitions that repeat[](https://academy.claude.com/courses/tool-use-with-the-messages-api/cut-the-cost-of-tool-heavy-workflows)

With prompt caching, the API stores the prefix of your request, the part up to a cache point you mark. Reading that prefix again costs far less.

A second Meridian agent has 14 tools, and their definitions come to 3,305 tokens that every request sends again.

**Mark the cache point by putting `cache_control` on the last tool, and the whole list is cached.** That takes one line:

python

```
TOOLS[-1]["cache_control"] = {"type": "ephemeral"}
```

On Claude Sonnet 5, reading the prefix costs [a tenth of the normal input price(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching). Writing it costs 1.25 times the normal input price.

The cached prefix lasts five minutes by default, and each use renews it. For requests further apart, add `"ttl": "1h"` to `cache_control` to keep it for an hour. Writing a one-hour cache costs [twice the normal input price(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching).

Meridian ran the same eight questions with the cache and without it. Its total input cost fell from $0.0554 to $0.0154.

With [automatic caching(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), you put one `cache_control` field at the top level of the request, and the API places the cache point for you.

Watch for three things once caching is on:

1. Change any tool definition and you lose the whole cache.
2. On Sonnet 5, a cached prefix has to be at least 1,024 tokens. When it's shorter, nothing is cached and no error says so.
3. With caching on, `input_tokens` leaves out the cached prefix, so a request's true total is `input_tokens`, `cache_read_input_tokens`, and `cache_creation_input_tokens` added together.

## Combine the features where they fit[](https://academy.claude.com/courses/tool-use-with-the-messages-api/cut-the-cost-of-tool-heavy-workflows)

Add them in this order.

1. **Start with caching.** It takes one line.
2. **Test programmatic tool calling.** Run some of your usual traffic with and without `allowed_callers`, then compare each run's billed input tokens.

For each of the two Meridian requests below, find the part that holds most of the input tokens, then pick the feature that cuts it.

Exercise: bars on two cards show how input tokens split by source, for one recorded request late in a long agent run and an average request from another agent's run. Pick whether programmatic tool calling, prompt caching, or neither saves the most, with feedback.

The numbers come from Meridian's recorded runs in September 2026. Nothing on this page calls Claude.

The bars on each card split a Meridian agent's input tokens by where they come from. Read the bars, then answer the question under them.

The classic loop, request 37 of 42

47,905 input tokens

In the classic loop each response asks for one tool call, and every timesheet is sent again with every later request. The tool calls don't depend on each other.

- Sent with every request: tool definitions, system prompt, and question606 (1%)
- Added by earlier requests47,299 (99%)

Request 1 held only what every request sends, and that came to 606 tokens.

Which feature saves the most on this request's input tokens?

Programmatic tool callingPrompt cachingNeither

A Meridian agent with 14 tools, an average request

3,461 input tokens

All 14 tool definitions go out with every request.

- Tool definitions3,305 (95%)
- System prompt and question156 (5%)

The tool definitions come to 3,305 tokens.

Which feature saves the most on this request's input tokens?

Programmatic tool callingPrompt cachingNeither

Clear picks

## Key takeaways[](https://academy.claude.com/courses/tool-use-with-the-messages-api/cut-the-cost-of-tool-heavy-workflows)

- Every request sends everything again, so you pay for old tool results over and over.
- Print `usage.input_tokens` each time a response comes back, so you know which part of the request costs the most.
- Start with caching. Add `cache_control` to the last tool in your list.
- When your tool calls don't depend on each other, set up programmatic tool calling with the code execution tool and `allowed_callers`. Send the container's ID with every later request.

Was this helpful?


## Video transcript

# Cut the cost of tool-heavy workflows

Your agent works, then traffic arrives and the bill becomes the bug. Here's how you can cut the cost of tool-heavy workflows. Answering the utilization question the normal way means dozens of model turns. Call get_employee_hours for one engineer, get a timesheet back into context, call again, again, again, again, again. Every intermediate result lands in the context window, and you pay for all of it on every subsequent turn.

The model reads kilobytes of timesheets to produce one short list. Programmatic tool calling flips it. Claude writes a Python script inside the code execution sandbox, and that script calls your tools in a loop. The intermediate results flow through the script, not the context window. So only the final output reaches the model.

The setup is your normal tool definition plus one field: allowed_callers, which points at the code execution tool. Current identifier in the tool reference. Make sure that you document each tool's output JSON shape in this description, because Claude's script is going to json.loads your result, and it can only parse what it knows the shape of.

So let's run this normal loop first, the classic way. 40 engineers, 40 tool calls, and 40 timesheets accumulating in context. Now watch the input token counter climb. On every turn as the conversation rereads itself.

Yeah, look at that. The classic run miscounts the roster, but both runs land on the same six names. Now, programmatically, Claude writes one script. It loops over the engineers. It calls a tool. It filters below the threshold and prints just that short list right here.

The script runs in the sandbox and 40 results flow through it. And the model sees six names. One, two, three, four, five, six. But the token counter barely moves. Now, while a programmatic call is paused waiting on one of your tool results, include the container ID on the follow-up request and know that a pending call times out after a few minutes.

Cool. So we got this token cost right here. Let's go ahead and open it. And you can see right here that our classic loop takes way more input tokens by an order of magnitude versus the programmatic one. The saving is this big because the 40 lookups don't depend on each other. When each call needs Claude to reason over the last result, programmatic calling helps a lot less.

Now prompt caching can work on your tools. Your tool definitions are re-sent on every request and a 14-tool agent re-pays for them every single time. So put cache_control on the last tool in the list and the whole tools prefix caches. One thing though is that the cache invalidates through the tools, system, messages prefix in that order. So rewriting any tool definition busts the hit. So we have one line of code here. Watch the before-and-after input cost across eight real queries.

Programmatic tool calling routes intermediate results through a sandbox script, so the model only sees the final answer. Document your output shapes, carry the container ID while paused, and cache your tool definitions with one cache_control line.

The bill was the bug, but these two knobs are the patch.

