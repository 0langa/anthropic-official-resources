Lesson 4 of 9 · Tool use with the Messages APIStreaming tool calls: No more frozen spinners

# Streaming tool calls: No more frozen spinners

Lesson 48 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Ftool-use-with-the-messages-api%2Fstreaming-tool-calls)

Embedded media: https://www.youtube-nocookie.com/embed/S1LrVAQ96nU?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Streaming tool calls: No more frozen spinners

SummaryTranscript

A streamed tool call arrives with the tool's name first and its input in pieces, so the screen can say what is happening. The video shows two versions of the screen at Meridian, a fictional engineering consultancy, side by side. One has no streaming and the other has streaming. The demo is simulated and runs at one-third speed.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=S1LrVAQ96nU)

*This video was recorded in September 2026, and its code uses Claude Sonnet 5 (`claude-sonnet-5`). Your results may differ on newer models.*

Say your user watches a spinner for eight seconds. That happens because your tool loop sends each request, waits, and gets back a finished response.

In that time Claude picks a tool and writes its input, your code runs the tool, and Claude writes the answer. Your code sees each response only once it is finished, so your UI has nothing to show while Claude writes.

Meridian has this problem today. Its support agent is written in Python and answers employees' questions about projects. When an employee asks "What's the status of the pump station job?" the screen says "thinking..." until the answer comes.

Streaming changes what that employee sees. **With streaming, your code gets the response piece by piece, before it is finished.** So Meridian's screen can say "Looking up project..." as soon as Claude picks the tool.

## What a streamed tool call looks like[](https://academy.claude.com/courses/tool-use-with-the-messages-api/streaming-tool-calls)

Where your tool loop sends its request, replace `client.messages.create(...)` with [`client.messages.stream(...)`(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/streaming). The response then arrives as a series of [server-sent events(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/streaming), small JSON messages that each have a `type`.

A response is made of content blocks, or blocks for short, with one block for each stretch of Claude's text and one for each tool call. A tool call's block has the type `tool_use`. Current models can also add thinking blocks, which this lesson's code ignores.

Picture a friend reading you a phone number over the phone. First they tell you whose number it is: "Here's the plumber's number." Then they read it out a few digits at a time, stopping wherever they like. Finally they say "That's it."

**A tool call's block arrives the way the phone number did.** One event opens it, one or more events fill it, and one event closes it. Here are the events of Meridian's tool call.

text

```
{"type": "content_block_start", "index": 0,
 "content_block": {"type": "tool_use", "id": "toolu_01",
                   "name": "lookup_project_status", "input": {}}}
{"type": "content_block_delta", "index": 0,
 "delta": {"type": "input_json_delta", "partial_json": "{\"project_"}}
{"type": "content_block_delta", "index": 0,
 "delta": {"type": "input_json_delta", "partial_json": "id\": \"MEG-2"}}
{"type": "content_block_delta", "index": 0,
 "delta": {"type": "input_json_delta", "partial_json": "026-0142\"}"}}
{"type": "content_block_stop", "index": 0}
```

## Show the chosen tool as soon as its block opens[](https://academy.claude.com/courses/tool-use-with-the-messages-api/streaming-tool-calls)

**The tool's name is in `content_block_start`, the block's first event.** When that event arrives, your code can update the status line, the one line of text your UI shows while your user waits.

Meridian keeps a small dict, `STATUS`, that maps each tool's name to words for the user, so `lookup_project_status` becomes "Looking up project..." on the screen.

## Put the streaming request together[](https://academy.claude.com/courses/tool-use-with-the-messages-api/streaming-tool-calls)

**When the stream ends, call `stream.get_final_message()` to get the finished response, the same kind of object that `client.messages.create(...)` returns.** So the rest of your tool loop stays as it was.

Here is Meridian's streaming request. `on_status` is a function you write that shows a string as the status line.

Exercise: for a Python loop handling streamed tool-call events, pick the line that does each of five jobs, like opening the stream or surfacing the chosen tool. Wrong picks get a hint. Right ones light the code and explain its role.

Select the line of the program that does this job.

Job 1 of 5

You want to call your status line function with words for the tool Claude chose.

STATUS = { "lookup\_project\_status": "Looking up project...", "get\_site\_weather": "Checking site weather...",}with client.messages.stream( model="claude-sonnet-5", max\_tokens=1024, tools=tools, messages=messages,) as stream: for event in stream: if event.type == "content\_block\_start": if event.content\_block.type == "tool\_use": on\_status(STATUS[event.content\_block.name]) resp = stream.get\_final\_message()

Next jobStart over

## Key takeaways[](https://academy.claude.com/courses/tool-use-with-the-messages-api/streaming-tool-calls)

- A streamed tool call arrives with the tool's name first, then its input in pieces.
- As soon as `content_block_start` arrives, show the chosen tool in words your user understands.
- `stream.get_final_message()` returns the finished response, so the rest of your tool loop doesn't change.

Was this helpful?


## Video transcript

# Streaming tool calls: No more frozen spinners

Your agent takes eight seconds to answer, and your user stares at a frozen spinner for all eight of them. The model was actually doing some useful work this whole time, but your UI just couldn't see it. Say a support agent is looking up a project while an employee waits. Here's how tool calls stream, and how to turn those eight silent seconds into a live status line.

Set stream: true and the response arrives as server-sent events. For plain text, you get content_block_delta events carrying text_delta chunks. Everyone's seen that part already. Tool calls stream a bit differently. A tool call starts with content_block_start. The tool name is there, but the input is empty.

The arguments arrive next, as a series of content_block_delta events carrying input_json_delta chunks. Each chunk has a partial_json string, a fragment of the input JSON. Then content_block_stop closes the block, and the message_delta at the end carries stop_reason tool_use, which is your cue to actually run the tool.

Now, taking into consideration that the fragments of the JSON split anywhere. Mid-key, mid-value, mid-escape-sequence, a chunk might be this right here, and the next might be the rest of it.

And some deltas could even be empty strings. So the rule is to accumulate partial_json fragments into a buffer of some sort. And don't parse until content_block_stop. If Claude makes several tool calls in one turn, each block has its own index. So keep one buffer per index or the fragments interleave into garbage. If you're using an official SDK, well, the messages.stream does the buffering for you and hands you an accumulated events plus a final parsed message. Knowing the raw layer still matters, though, because it's what you'll be debugging when something looks wrong on the wire.

So here's a support UI that I built with two builds side by side. Slow down three times so we can watch it. On the left here, we'll have no streaming, just a spinner. But on the right, we have streaming. You can see it says "Checking MEG-2026-0142."

My code spotted the project ID before the tool even ran. And then there's the left one. At normal speed, both take about seven and a half seconds. They both have the same wait, but on the right, I can visually simulate what's actually happening.

So I kind of get a status 1.8 seconds into the run. So here's the raw layer underneath of it. The fragments are piling up in the buffer. Once the project ID is there, that's when the status switched to checking.

Tool inputs stream as input_json_delta fragments with the name up front and the arguments trickling in. Buffer per block index, parse only at block stop, and run the tool when stop_reason says tool_use.

Let the SDK accumulate for you, but know the wire format for the day that you have to debug it. The model was never frozen. Now, your UI knows it too.

