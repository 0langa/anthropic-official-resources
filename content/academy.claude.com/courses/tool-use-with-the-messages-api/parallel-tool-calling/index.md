Lesson 3 of 9 · Tool use with the Messages APIParallel tool calling: Cut the latency

# Parallel tool calling: Cut the latency

Lesson 310 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Ftool-use-with-the-messages-api%2Fparallel-tool-calling)

Embedded media: https://www.youtube-nocookie.com/embed/ZzI3hwXsnPA?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Parallel tool calling: Cut the latency

SummaryTranscript

Claude can ask for several tools in one response, and your code can run them together. The video checks a job site for Meridian, a fictional engineering consultancy. One tool call at a time takes 19.9 seconds, while parallel tool calls take 10.8.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=ZzI3hwXsnPA)

*The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (`claude-sonnet-5`). Results may differ on newer models.*

Running tool calls one at a time makes your user wait for each one in turn.

When the tools that Claude wants don't depend on each other, it can ask for them all in one response. **Claude does this by default, so your loop has to handle every tool call and send a result back for each one.**

## Three tool calls in one response[](https://academy.claude.com/courses/tool-use-with-the-messages-api/parallel-tool-calling)

**Parallel tool use means one response holds several `tool_use` blocks.**

Meridian has a Python script that checks whether a job site is ready for fieldwork. The site check needs three lookups that don't depend on each other: the project's status, the weather at the site, and the state of the permit.

Here is Claude's response to Meridian's site check, with one `tool_use` block for each tool it wants.

json

```
{
  "role": "assistant",
  "stop_reason": "tool_use",
  "content": [
    {"type": "tool_use", "id": "toolu_01", "name": "get_project_status",
     "input": {"job_number": "MEG-2026-0142"}},
    {"type": "tool_use", "id": "toolu_02", "name": "get_site_weather",
     "input": {"site": "Riverside"}},
    {"type": "tool_use", "id": "toolu_03", "name": "get_permit_state",
     "input": {"permit_id": "P-88213"}}
  ]
}
```

The response's `stop_reason` is `tool_use`, and each tool call has its own `id`.

## Run every tool call[](https://academy.claude.com/courses/tool-use-with-the-messages-api/parallel-tool-calling)

A loop written for one tool call reads only the first `tool_use` block. It sends back one result, two tool calls never get theirs, and the API rejects the request. **So collect every `tool_use` block in the response.**

python

```
calls = [b for b in resp.content if b.type == "tool_use"]
```

Next, run those tool calls at the same time. Each lookup spends most of its time waiting on another system. Give each one its own thread, and the three waits overlap instead of adding up.

python

```
with ThreadPoolExecutor() as pool:
    results = list(pool.map(run_tool, calls))
```

`run_tool` runs one tool call and returns its result, and the next two sections build it.

Running tool calls at the same time is usually safe when they only read data and don't depend on each other, like Meridian's lookups. When tools change data, or must go in a set order, it might be better to run them one after another.

## Send every result back in one message[](https://academy.claude.com/courses/tool-use-with-the-messages-api/parallel-tool-calling)

Once the three tool calls have run, Claude is waiting for their results. Each result goes back in a `tool_result` block, and its `tool_use_id` holds the `id` of the tool call it answers.

python

```
result = {"type": "tool_result", "tool_use_id": call.id}
```

**Every `tool_use` block gets one `tool_result`, and they all go in the next user message.**

python

```
messages.append({"role": "assistant", "content": resp.content})
messages.append({"role": "user", "content": results})
```

![A band at the top shows Claude's one response with three tool calls: toolu_01 get_project_status, toolu_02 get_site_weather, and toolu_03 get_permit_state. Below, the left panel, marked with a check, shows one user message holding all three tool results. The right panel, marked with a cross, shows three user messages holding one result each.](https://academy.claude.com/assets/media/9ffcb87244d16acc0b59bf6580a6cc9995ad6a916d17cb1f92187d1d0c94ea28.png)

*One user message with all three results keeps Claude calling tools in parallel.*

If your loop sends each result in its own message instead, the conversation reads as if Claude had asked for one tool at a time. That is a common reason Claude makes fewer parallel tool calls.

## Return an error result for a bad tool call[](https://academy.claude.com/courses/tool-use-with-the-messages-api/parallel-tool-calling)

Running three tool calls at once means one can fail while the other two succeed. If your code raises an exception and nothing catches it, your loop stops, and the two good results are lost with it.

**So send the failure back as a result.** It's an ordinary `tool_result` with the error message as its `content`, plus `is_error: true`. The message should say what went wrong and what Claude should try next.

python

```
try:
    result["content"] = HANDLERS[call.name](**call.input)
except Exception as exc:
    result["content"] = f"{call.name} failed: {exc}"
    result["is_error"] = True
```

`HANDLERS` is a dict from tool names to the Python functions that do each tool's work. Each function returns a string, because a `tool_result`'s `content` is a string or a list of content blocks.

## Put the loop together[](https://academy.claude.com/courses/tool-use-with-the-messages-api/parallel-tool-calling)

The snippets above fit into Meridian's loop below. The script has already set up `client`, `tools`, `prompt`, and `HANDLERS`.

Exercise: given a short Python loop that runs Claude's tool calls in parallel, the learner picks the line that does each stated job, with hints on wrong picks and explanations on right ones.

Select the line of the program that does this job.

Job 1 of 5

Claude asks for all three lookups in one response, and you want the loop to pick up every tool call in it.

from concurrent.futures import ThreadPoolExecutordef run\_tool(call): result = {"type": "tool\_result", "tool\_use\_id": call.id} try: result["content"] = HANDLERS[call.name](\*\*call.input) except Exception as exc: result["content"] = f"{call.name} failed: {exc}" result["is\_error"] = True return resultmessages = [{"role": "user", "content": prompt}]while True: resp = client.messages.create( model="claude-sonnet-5", max\_tokens=1024, tools=tools, messages=messages, ) if resp.stop\_reason != "tool\_use": break calls = [b for b in resp.content if b.type == "tool\_use"] with ThreadPoolExecutor() as pool: results = list(pool.map(run\_tool, calls)) messages.append({"role": "assistant", "content": resp.content}) messages.append({"role": "user", "content": results})

Next jobStart over

## Key takeaways[](https://academy.claude.com/courses/tool-use-with-the-messages-api/parallel-tool-calling)

- Run every tool call in a response, and run them at the same time when they don't depend on each other.
- Send back one `tool_result` for each tool call, and put them all in one user message.
- Don't send each result in its own message, because that reduces parallel tool use.
- Send a failure back as a result with `is_error: true`, so one bad tool call doesn't stop the loop.

Was this helpful?


## Video transcript

# Parallel tool calling: Cut the latency

Most agents accidentally switch off their biggest latency win. When tools don't depend on each other, how can we just run them all at the same time? Say our agent checks whether a job site is ready: project status, weather, and permit state. Three lookups that don't depend on one another.

Claude 4 and later can emit multiple tool_use blocks in a single turn by default. Three independent lookups become one model turn with three tool calls, and your handler runs them concurrently. But a couple things that people get wrong here. First, the off switch. disable_parallel_tool_use lives inside tool_choice, not at the top level. So passing it at the top level just errors out. Second, and this one quietly ruins agents, return all the tool results in a single user message. If you split them across messages, well, Claude learns from the conversation shape that tools come back one at a time, and it starts serializing calls that could have run together.

A system prompt nudge helps too. Something along the lines of: "For maximum efficiency, whenever you need multiple independent operations, invoke all relevant tools simultaneously." Okay, so why don't we race it? 3.4 seconds. 7.3 seconds. 11.8. We have the same site-readiness questions.

All right, there we go. So that's sequential where Claude calls project status. Wait, calls weather. Wait, calls permit. Wait. And you can see right here, we got like 20 seconds there.

It has to do one round trip per call. Then we have parallel. Let's see how fast that takes. Okay. So turn one is doing all three right here. And there you go. 10 seconds. So we halved our time right here.

So you can see here that we have three tool_use blocks that are happening right here. They're all happening at the exact same time. And all three results go back to the one message.

If you don't need any custom batching logic or anything like that, well, you can use the Tool Runner over here instead, which will handle this entire tool use loop for you.

Dependent side effects should run in sequence. And that's your call to make in your loop, not the model's. If step two only makes sense after step one succeeds, well, run them in order. And if you skip a call because an earlier one failed, well, still return a tool_result for it with is_error: true. Because Claude needs to know that the call just didn't happen.

Claude can call multiple tools per turn, and your job is to not accidentally train it out of the habit. Keep disable_parallel_tool_use inside tool_choice. Return all results in one message. Run dependent side effects sequentially by choice. And reach for the Tool Runner when you don't need a custom loop. One parameter, one message-shape rule, and a query that used to wait on three calls in a row now only waits on the slowest one.

