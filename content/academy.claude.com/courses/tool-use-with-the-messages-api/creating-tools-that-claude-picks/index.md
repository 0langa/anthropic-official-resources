Lesson 1 of 9 · Tool use with the Messages APICreating tools that Claude picks

# Creating tools that Claude picks

Lesson 19 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Ftool-use-with-the-messages-api%2Fcreating-tools-that-claude-picks)

Embedded media: https://www.youtube-nocookie.com/embed/GqHhQGou3sE?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Creating tools that Claude picks

SummaryTranscript

When Claude picks the wrong tool, look first at the tool's definition. The video follows Meridian, a fictional engineering consultancy. Meridian rewrites its tool definitions and runs the same 30 questions before and after the rewrite.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=GqHhQGou3sE)

*The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (`claude-sonnet-5`). Results may differ on newer models.*

Say your tool loop works, and then one of these happens:

- Claude calls the wrong tool.
- It makes three tool calls for one fact.
- It passes `0142` where your code wants `MEG-2026-0142`.

Claude never receives the function that runs your tool. It sees only the definition you send and the results you return. **So when Claude misuses a tool, look at the definition first.**

Meridian has an internal assistant for employees' questions about projects, permits, and billing. Rewriting its tool definitions raised its score from 14 to 26 of 30 test questions, on the same model.

## What Claude sees of your tool[](https://academy.claude.com/courses/tool-use-with-the-messages-api/creating-tools-that-claude-picks)

**A tool definition is a block of JSON that tells Claude a tool exists.** You send it in the `tools` list of each request.

Here is the rewritten definition of Meridian's project tool. It has four parts.

json

```
{
  "name": "lookup_project_status",
  "description": "Returns current facts about a single Meridian …",
  "input_schema": {
    "type": "object",
    "properties": {
      "project_id": {
        "type": "string",
        "description": "Full Meridian job number in the format MEG-YYYY-NNNN, e.g. MEG-2026-0142."
      },
      "fields": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": ["phase", "status", "lead", "hours", "deadline", "site", "client"]
        },
        "description": "Which fields to return. Omit to return everything."
      }
    },
    "required": ["project_id"]
  },
  "input_examples": [
    {"project_id": "MEG-2026-0142", "fields": ["phase", "status"]},
    {"project_id": "MEG-2025-0417", "fields": ["lead", "hours"]},
    {"project_id": "MEG-2024-0233"}
  ]
}
```

- `name` is what Claude calls the tool by.
- `description` is plain text that you write and Claude reads. It's cut short here and shown in full in the next section.
- `input_schema` lists the tool's parameters in JSON Schema, each with a name, a type, and its own description. `required` says which ones must be given.
- `input_examples` is optional. It shows Claude what a good input looks like, such as a full job number. Each example must be valid against `input_schema`, or the API returns a 400 error.

Claude decides whether to make a tool call by reading the user's request and each tool's description.

## Write a detailed description[](https://academy.claude.com/courses/tool-use-with-the-messages-api/creating-tools-that-claude-picks)

**Of the four parts, the description does the most.**

Aim for at least three to four sentences, more if the tool is complex. Cover four things:

1. What the tool does
2. When to use it, and when not to
3. What each parameter means
4. What it doesn't return

Here is Meridian's full description:

text

```
Returns current facts about a single Meridian project: phase,
schedule status, project lead, hours budgeted and consumed,
deadline, site city, and client. Use this only when the user asks
about a specific project by name or job number; if only a partial
number is given (e.g. 'the 0142 job'), normalize it to the full
MEG-YYYY-NNNN format before calling. Pass the fields parameter to
fetch just the fields the question needs instead of the whole
record. This tool does not return permit or invoicing information.
Use get_permit_status or get_billing_summary for those.
```

![Meridian's tool description, with each stretch tinted by which of the four things it covers.](https://academy.claude.com/assets/media/e0b09ed3565b678a0ab4bdd0209c8799d35dbc966ad9d2e7a752198942b98c4a.png)

*Meridian's description covers all four things a good description needs.*

Saying when to use the tool, and when not to, helps Claude avoid calling the wrong one. Meridian's description limits the tool to questions about one project. For permits and billing, it names the tools to use.

## Combine overlapping tools into one[](https://academy.claude.com/courses/tool-use-with-the-messages-api/creating-tools-that-claude-picks)

A good description can't help much when several tools do nearly the same job.

Meridian's first set had six thin tools, each with a one-line description. Four of them returned one project fact each. Those four overlapped, so Claude had to guess which ones a question needed.

**The fix is to combine the four into one tool, `lookup_project_status`, with a `fields` parameter that says which facts to return.** The other two, for permits and billing, do different jobs, so they stay. Six tools become three.

## Measure the change with an eval[](https://academy.claude.com/courses/tool-use-with-the-messages-api/creating-tools-that-claude-picks)

**An eval is a fixed set of test questions with known right answers, run against Claude and scored.** It shows whether the new definitions are better.

Meridian's eval checks whether Claude calls the right tools. It has 30 questions an employee would ask, each labeled with the right tool calls. Meridian ran the 30 questions twice on `claude-sonnet-5`, once with each set of tools.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Set of tools</th><th class="border-b border-strong p-sm text-left font-medium">Number of tools</th><th class="border-b border-strong p-sm text-left font-medium">Score</th></tr></thead><tbody><tr><td class="border-b p-sm">Thin</td><td class="border-b p-sm">6</td><td class="border-b p-sm">14/30 (47%)</td></tr><tr><td class="border-b p-sm">Consolidated</td><td class="border-b p-sm">3</td><td class="border-b p-sm"><strong>26/30 (87%)</strong></td></tr></tbody></table>

## Fix only the part at fault[](https://academy.claude.com/courses/tool-use-with-the-messages-api/creating-tools-that-claude-picks)

**To fix one failure, find the part of the definition that's at fault, change only that part, and rerun your eval.**

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">What Claude does wrong</th><th class="border-b border-strong p-sm text-left font-medium">Part to change</th><th class="border-b border-strong p-sm text-left font-medium">What to do</th></tr></thead><tbody><tr><td class="border-b p-sm">Calls the wrong tool, or more tools than the question needs</td><td class="border-b p-sm">The description</td><td class="border-b p-sm">Say what each tool does and when to use it. Combine tools that overlap.</td></tr><tr><td class="border-b p-sm">Passes a value of the wrong type or format</td><td class="border-b p-sm">The schema and the examples</td><td class="border-b p-sm">Give the format in the parameter's own <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">description</code>. Add <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">input_examples</code>.</td></tr></tbody></table>

[Troubleshooting tool use(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/troubleshooting-tool-use) lists more symptoms and fixes.

## Key takeaways[](https://academy.claude.com/courses/tool-use-with-the-messages-api/creating-tools-that-claude-picks)

- Write descriptions of at least three to four sentences, and say when not to use the tool.
- Combine overlapping tools into one tool with parameters.
- Measure changes with an eval.
- To fix one failure, change only the part at fault.

Was this helpful?


## Video transcript

# Creating tools that Claude picks

The most common reason "Claude misused my tool" is the description. This video shows you how to write tool definitions that Claude selects correctly and how to prove it with a before-and-after evaluation.

Claude picks tools by reading your descriptions, so a one-line description is a one-line argument for using it. Write about 3-4 sentences at the minimum, what the tool returns, when to use it, when not to, and what the edge cases might look like. Single-sentence descriptions degrade selections in evaluations. So let's look at this definition. It says what comes back. It names the trigger: "only when the user asks about a specific project by name or job number." It gives the job number format and says what the tool does not return.

That last sentence keeps Claude from calling it for invoice questions, for example. Five thin tools compete with each other. One lookup_project_status with a fields parameter beats get_project_phase, get_project_hours, get_project_lead, and whatever siblings they might have. And the docs recommend an action parameter over splitting each verb into its own tool. Namespaces help once the surface grows. So github_list_prs, slack_send_message. Past what namespacing can manage, say 50-plus tools whose definitions eat the context window, the tool search tool loads definitions on demand. For nested or format-sensitive inputs, add input_examples. The API validates them against your schema and they cost about 20 to 200 tokens.

So I got a 30-case selection evaluation: 30 questions an employee would ask, each labeled with the tool that should fire. So our first run here uses the tall, thin tool surface. The thin surface is six one-line tools, one per field.

And you can see here that the selection accuracy is pretty mediocre and the misses cluster where two thin tools overlap. Same 30 questions, same model. The only change is the tool definitions.

Now the consolidated version with the fuller descriptions with the same 30 cases that we just ran before. And we can see that our accuracy is climbing a lot. And the overlap misses disappear because there's not really any overlap left to miss.

We have one more knob that we can tune. Your error messages are prompts too. "Error 404" teaches Claude nothing. "Job number not found, verify format" teaches it exactly what to fix, and it usually self-corrects on the next call.

Write descriptions of three to four sentences that say what the tool returns, when to use it, and when not to. Consolidate thin tools into one with parameters. Add input_examples for tricky formats and return errors that tell Claude how to fix the call. Your tool definitions are prompts, so write them like it.

