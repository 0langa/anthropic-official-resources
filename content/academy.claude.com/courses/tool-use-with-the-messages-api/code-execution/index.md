Lesson 5 of 9 · Tool use with the Messages APICode execution: Claude runs the code it writes

# Code execution: Claude runs the code it writes

Lesson 58 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Ftool-use-with-the-messages-api%2Fcode-execution)

Embedded media: https://www.youtube-nocookie.com/embed/PQ8jjGKfP5o?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Code execution: Claude runs the code it writes

SummaryTranscript

Code execution lets Claude write Python, run it on Anthropic's side, and
answer from what it prints.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=PQ8jjGKfP5o)

*The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (`claude-sonnet-5`). Results may differ on newer models.*

Some questions need math across many files. That's a job for code.

Take Meridian, a fictional engineering consultancy. It has 12 CSV files, one for each pump station, and each file holds a year of flow readings. It wants to know whether any station ever went over its design capacity, and if so, when.

Code execution is how Claude does that job. **Claude gets a container where it can run the Python it writes and answer from what the code prints.**

## Add the tool to your request[](https://academy.claude.com/courses/tool-use-with-the-messages-api/code-execution)

Code execution is a server tool, a tool that runs on Anthropic's infrastructure. You write no handler for it, and your code sends back no `tool_result`.

**Adding code execution takes one entry in your `tools` list.** The date at the end of the entry's `type` is the tool's version, and Meridian uses `code_execution_20260120`. The current versions are [listed in the Tool reference(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference), so copy the `type` value from there.

Meridian keeps the list in a constant named `TOOLS`, and its request passes it as `tools=TOOLS`:

python

```
TOOLS = [{"type": "code_execution_20260120", "name": "code_execution"}]
```

As of October 2026, [code execution(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool) runs on the Claude API, Claude Platform on AWS, the Claude models on Google Cloud that Anthropic manages, and Microsoft Foundry deployments hosted on Anthropic.

## Put your files in the container[](https://academy.claude.com/courses/tool-use-with-the-messages-api/code-execution)

Claude's code runs in a container on Anthropic's side. Your files are still on your machine, so the container doesn't have them yet. Meridian's program gets them into the container in two steps:

1. Upload each file with the [Files API(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/files), which gives you back a file ID.
2. Put that file ID in your message, in a `container_upload` block.

**Meridian's program adds one `container_upload` block for each file, in the same message as its question.** The files are then loaded onto the container, where Claude's code can open them.

## Read Claude's answer[](https://academy.claude.com/courses/tool-use-with-the-messages-api/code-execution)

**Your code sends one request and usually gets back the finished answer.**

The API can pause a long-running turn and return a `stop_reason` of `pause_turn`. When it does, send the response's content back as an assistant message, with the same `tools`, and Claude continues.

Claude's answer for Meridian is that Station 7 went over its design capacity of 600 L/s twice, in April and May 2025. In the response, the answer comes after the commands Claude ran.

## Put the program together[](https://academy.claude.com/courses/tool-use-with-the-messages-api/code-execution)

Meridian's program below adds the tool, puts the files in the container, and reads the answer. In the program, `paths` holds the 12 CSV files as `pathlib.Path` objects, and `QUESTION` holds Meridian's question.

Exercise: given a sample Python program using Claude's code execution tool, match each described job to the line that does it. A wrong pick gets a hint, and the right line gets a short note on that step.

Select the line of the program that does this job.

Job 1 of 5

You want Claude's code to be able to open each file you uploaded.

TOOLS = [{"type": "code\_execution\_20260120", "name": "code\_execution"}]content = []for path in paths: uploaded = client.files.upload(file=path) content.append({"type": "container\_upload", "file\_id": uploaded.id})content.append({"type": "text", "text": QUESTION})messages = [{"role": "user", "content": content}]resp = client.messages.create( model="claude-sonnet-5", max\_tokens=8000, tools=TOOLS, messages=messages,)print("".join(b.text for b in resp.content if b.type == "text"))

Next jobStart over

## Key takeaways[](https://academy.claude.com/courses/tool-use-with-the-messages-api/code-execution)

- Code execution is a server tool. You add one entry to `tools`, and Claude's code runs in a container on Anthropic's side.
- You upload each file with the Files API, then put its file ID in a `container_upload` block.

Was this helpful?


## Video transcript

# Code execution: Claude runs the code it writes

Asking a model to eyeball 12 spreadsheets is a recipe for confident nonsense. Letting it write pandas and run it is arithmetic. Let's look at how code execution works. Code execution is a server-side tool. Sandboxed Python and Bash on Anthropic's infrastructure. The sandbox has no outbound network and comes with the usual analysis libraries pre-installed.

Adding it is one entry into your tools list. I'm grabbing the current type string from the tool reference, and you should too, because there are three current versions. Python state only carries between turns on code_execution_20260120 or later, and this demo relies on it.

Data goes in through the Files API. You upload it once and then reference the file with a container_upload content block in your message. The Files API is generally available, so there's no beta header to be sending here. Now, two lifecycle facts worth knowing here. The response includes a container.id that you can reuse across turns to keep that state alive. And containers go idle after a few minutes, but pass the container.id back and we restore it. Files included. Check the documentation for the current windows.

Now we have 12 CSVs here that are uploaded, one per pump station. And my prompt here is: find any month in which any station's peak flow exceeded its design capacity. Report the stations, month, and by how much.

So let's run it. So we are uploading to the Files API here, all these. And you can see that Claude is writing pandas code right here. It runs it in the sandbox. It sees the intermediate output, refines it, runs it again. And then we can see right here, it's going to emit a chart. We have matplotlib right there.

And look at this. We have a little chart made by matplotlib. Anything Claude writes to its output folder comes back as a file ID in the tool result. And my script downloads it with the Files API.

Now, the important part is that none of these intermediate dataframes even entered my prompt as JSON blobs. The model saw its own output inside of the sandbox, my context carries the question the code and what it printed, and not the raw CSV rows.

And so the answer comes back as station 7 twice, both in spring runoff months with the chart attached. As of this video, Haiku accepts the newer tool types, but that Python state doesn't carry between turns. So prefer Sonnet or Opus for this pattern and check the documentation for the current model list as things change really fast.

Code execution gives Claude a sandbox with Python, Bash, and your uploaded files. State lives in the container, so reuse the container ID across turns. Intermediate work stays in the sandbox instead of flooding your context, and pull the current type strings from the tool reference, not from this video.

Stop asking the model to be a calculator. Hand it one instead.

