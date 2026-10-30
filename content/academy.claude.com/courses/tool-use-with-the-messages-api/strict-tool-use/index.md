Lesson 2 of 9 · Tool use with the Messages APIStrict tool use: Stop rejecting your own calls

# Strict tool use: Stop rejecting your own calls

Lesson 210 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Ftool-use-with-the-messages-api%2Fstrict-tool-use)

Embedded media: https://www.youtube-nocookie.com/embed/iX5OdlZnmec?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Strict tool use: Stop rejecting your own calls

SummaryTranscript

When your backend rejects a tool call that Claude itself produced, strict tool use is the fix. The video turns it on for one tool at Meridian, a fictional engineering consultancy, and runs the same 100 requests with it off and on.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=iX5OdlZnmec)

*The demo in this video was recorded in September 2026. It ran on Claude Haiku 4.5 (`claude-haiku-4-5`). Results may differ on newer models.*

Claude usually follows a tool's `input_schema`, but nothing enforces it by default. So sometimes your backend rejects a tool call Claude made, because the call's input has one of these:

- The string `"2"` instead of the integer `2`
- A missing required field

Strict tool use fixes this. **One flag, `strict: true`, makes the input Claude writes match your schema.**

At Meridian, an assistant uses the `queue_stamp_request` tool to queue drawing sets for a licensed engineer's stamp. Meridian's validator is the code that checks every tool call. With strict off, it rejects 79 of 100 requests. With strict on and the schema generated from the validator, it rejects none.

## How strict tool use works[](https://academy.claude.com/courses/tool-use-with-the-messages-api/strict-tool-use)

With `strict: true`, the API first compiles your JSON Schema into a grammar. **A grammar is a set of rules that says which tokens may come next at each point in the input.** Then, each time Claude picks the next token of the tool call, it can pick only a token that the grammar allows. This is called [grammar-constrained sampling(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use).

![The schema says revision is an integer, and Claude has written up to "revision":. Without strict, five next tokens can be picked: 3, "3", three, 3.0, and null. With strict: true, only 3 can be picked and the other four are crossed out.](https://academy.claude.com/assets/media/796f0b3bedcc2d444dfcce85e2ddf7bee88b74effaf958d100a2756b9df2c429.png)

*With `strict: true`, only tokens your schema allows can be picked, so an integer field gets an integer.*

This is Meridian's tool definition, cut down. Strict needs two of its lines, the flag and a setting the flag requires.

json

```
{
  "name": "queue_stamp_request",
  "description": "Queues a drawing set for a professional engineer's stamp.",
  "strict": true,
  "input_schema": {
    "type": "object",
    "properties": {
      "drawing_set_id": {"type": "string"},
      "revision": {"type": "integer"}
    },
    "required": ["drawing_set_id", "revision"],
    "additionalProperties": false
  }
}
```

- `"strict": true` is the flag. It sits at the top level, beside `name`, `description`, and `input_schema`, outside the schema.
- `"additionalProperties": false` is the setting. It means the input can't carry a field the schema doesn't name, and strict requires it on every object.

## Build the schema from your validator[](https://academy.claude.com/courses/tool-use-with-the-messages-api/strict-tool-use)

Strict tool use makes the input Claude writes match your schema, so the schema must say what your validator says. When you write the schema by hand, the two drift apart. **A tool call can then match the schema and still be rejected.** At Meridian, a handwritten schema made the license number a plain string with no pattern. So `"PE 46196"` passed the schema and failed the validator, which requires `PE-` and five digits.

Write the rules once, in your validator, and generate the schema from it. In Python the validator is usually a Pydantic class. In TypeScript it's usually written with Zod.

Below is Meridian's Pydantic class, `StampRequest`, with the code that uses it, then the schema that `StampRequest.model_json_schema()` returns. Each `# ...` stands for code not shown, and the schema shows only the license number.

python

```
class StampRequest(BaseModel):
    model_config = {"extra": "forbid"}
    # ...
    pe_license_number: str | None = Field(pattern=r"^PE-\d{5}$")
    # ...
stamp_tool = {
    # ...
    "input_schema": StampRequest.model_json_schema(),
    "strict": True,
}
stamp_request = StampRequest.model_validate(call.input)
```

json

```
{
  "additionalProperties": false,
  "properties": {
    "pe_license_number": {
      "anyOf": [
        {"pattern": "^PE-\\d{5}$", "type": "string"},
        {"type": "null"}
      ],
      "title": "Pe License Number"
    }
  }
}
```

- `"extra": "forbid"` becomes `"additionalProperties": false`, the setting strict requires.
- `str | None` becomes `anyOf`, so the license number is a string with that `pattern`, or null.
- `model_validate()` checks `call.input`, the input Claude wrote, against the same class.

## Compare the runs with strict off and on[](https://academy.claude.com/courses/tool-use-with-the-messages-api/strict-tool-use)

Meridian's test sends 100 plain-language stamp requests to Claude Haiku 4.5 with the `queue_stamp_request` tool, and `StampRequest` validates every tool call. The same 100 requests run twice, first with a handwritten schema and strict off, then with the generated schema and strict on.

Replay both runs below.

Simulation: replays a recorded test of sending 100 stamp-request tool calls with a handwritten definition and strict off, then a generated schema with strict on, revealing how many the validator rejected each time. It teaches that a schema generated from your validator plus strict tool use matches Claude's calls to your backend's format.

This replays Meridian's two recorded runs. Nothing is sent to Claude.

Send the requests with strict off. Then turn strict on and send them again.

Request

model

`claude-haiku-4-5`

tool\_choice

`{"type": "any"}`

messages

One stamp request per tool call, 100 tool calls in the run

tools

strictOff

It adds `strict: true` and replaces the schema with the one generated from the Pydantic class.

{

"name": "queue\_stamp\_request",

"input\_schema": {

"properties": {

…

"pe\_license\_number": {

"type": "string",

"description": "Stamping engineer's license number."

}

},

…

},

…

}

Each "…" line stands for parts of the definition not shown.

The backend validator wants `pe_license_number` to match `^PE-\d{5}$`.

Send 100 requestsStart over

No strict

Not sent yet

`strict: true`

Not sent yet

**The schema's `pattern` says what format is allowed, and strict makes Claude keep to it.**

Strict controls the input's shape but can't supply a fact the request never gave. Of the 100 requests, 28 never mention a license. The generated schema allows null for the license number, and all 28 came back null.

## Limits of strict tool use[](https://academy.claude.com/courses/tool-use-with-the-messages-api/strict-tool-use)

Six things to know, as of October 2026:

1. **Keep protected health information (PHI) out.** Compiled schemas don't get the same PHI protections as prompts and responses, so leave PHI out of property names, `enum` values, `const` values, and `pattern` expressions.
2. **Bounds aren't supported.** A request whose schema uses `minimum`, `maximum`, `minLength`, or `maxLength` returns a 400 error. Check bounds in a validator function, such as Pydantic's `@field_validator`, and state them in the field's description.
3. **Limits add up across tools.** One request can hold at most [20 strict tools(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/structured-outputs). Across those tools, it can hold at most 24 optional parameters. It can also hold at most 16 parameters that use `anyOf` or a type array, which is what a nullable field like `str | None` generates.
4. **Input can still fail to match the schema.** This happens after a refusal, when a response is cut off at `max_tokens`, or when an `enum` or `const` string comes back in different capitalization.
5. **Some models reject a forced tool call.** Setting `tool_choice` to `any` or `tool` forces a tool call. That returns a 400 error on Claude Opus 5.5, Claude Sonnet 5.5, Claude Fable 5.1, and Claude Mythos 5.1. On those models, leave `tool_choice` on `auto`, its default.
6. **Programmatic tool calling can't use strict tools.** In programmatic tool calling, Claude writes code that calls your tools. Lesson 8 covers it.

## Key takeaways[](https://academy.claude.com/courses/tool-use-with-the-messages-api/strict-tool-use)

- `strict: true` makes tool input match your schema, except after a refusal or a cut-off response, or when an `enum` or `const` string changes case.
- Generate the schema from your validator, such as a Pydantic class.
- Keep bounds out of the schema, and count tools, optional parameters, and nullable parameters across the whole request.

Was this helpful?


## Video transcript

# Strict tool use: Stop rejecting your own calls

If your backend ever rejected a tool call the model itself produced, well, this is the fix. With strict: true on a tool, the API constrains sampling to your schema's grammar, so Claude cannot emit invalid input. Not "usually valid," just simply cannot. A string where an integer belongs is no longer in the space of things that the model can produce. The schema needs additionalProperties: false, and the cleanest way to keep the API and your backend agreeing is to generate the schema from the same source of truth that your validator uses.

So this could be Pydantic in Python, Zod in TypeScript, etc. Structured outputs are generally available, so the standard path needs no beta header. A schema and a backend that drifts apart is exactly what you'll see in a minute.

The backend wants PE license numbers, and the tool file never says so. Keep the schema itself simple. Put numeric bounds and soft constraints in the field descriptions instead. If you use the SDK's Structured Output Helpers, they make that move for you.

If you need Claude to definitely call one of your tools, well, pair strict with tool_choice, type "any". Together, they mean a tool will be called, and its input will be valid. One caveat though is that the newest models drop forced tool choice. So on Claude Fable 5.1, that pairing returns a 400. It still works on Opus 5 and earlier. Where forced tool choice isn't supported, leave tool_choice on auto and keep strict: true and ask for the tool in your prompt. Make sure you check out the documentation just for the up-to-date specs.

So here's the stamp request tool without strict. The license number is just a string, nothing about the format. So I'm going to run 100 submissions through it and look at the license number. Every rejection is that one field.

So you can see right here "PE 46196" with the space right there. You have just the numbers alone, 71057, and then a couple of unknowns, 79 out of 100 rejected. Here's the definition that the strict run sends.

Okay, we have strict: true right here. And we can see that the license number here can be null. All right, so we have the same 100 requests, but this time with strict: true right here. Let's try it.

And you can see right here that we got zero rejections. That's what grammar constraint means. Strict controls the shape, not the truth. So 28 requests had no license right here. And you can see that all 28 came back null. So none were invented. So that's the whole trick. The API now guarantees the shape of every single call. And the only thing that your validator still checks is the business rules.

Now, four things to know before you ship this. Compiled grammars sit on their own cache, separate from message content for about a day. So keep sensitive data like PHI out of property names, enums, and regex patterns. Numeric bounds like minimum and maximum aren't part of the grammar, so write them into the description yourself. That's why this schema stays simple and why you still validate client-side. Schema limits interact across tools. Four strict tools with six optional parameters each hits the 24-parameter ceiling even though no single tool looks complex.

Past the compiled grammar limits, the API returns a 400 that says "Schema is too complex for compilation." If you're seeing that error right now, split your strict tools across requests or trim optional parameters. And JSON outputs refuse to combine with document citations. Enable citations on a document you provide. Add JSON output and the API returns a 400. Web search is different though. In my test, it ran fine with JSON output, but the JSON came back without any citations. So you'll lose the receipts.

strict: true makes invalid tool input impossible. Generate the schema from Pydantic or Zod. Keep it simple and put soft constraints in descriptions. Watch for interacting limits across tools. And remember that document citations and JSON outputs don't mix. Your backend has a validator. With strict, Claude can't produce input that fails it.

