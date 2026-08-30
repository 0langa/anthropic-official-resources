Lesson 2 of 13 · Claude Platform 101Your first API call

# Your first API call

Lesson 25 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fclaude-platform-101%2Fyour-first-api-call)

Embedded media: https://www.youtube-nocookie.com/embed/j0ftK\_R5DTs?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Your first API call

Saying hi to Claude might warm your heart, but it's not really useful. In
this lesson we'll send Claude something real and get structured insight
back — in just under 20 lines of code.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=j0ftK_R5DTs)

## Get set up[](https://academy.claude.com/courses/claude-platform-101/your-first-api-call)

First, grab an **API key** from platform.claude.com. You'll need to purchase some credits beforehand.

![The Claude Console dialog showing a newly created API key with a Copy key button and a warning that the key won't be viewable again](https://academy.claude.com/assets/media/5fca342aff439c7ed5c6148fbea16fd361ff1ea636f32fd1c233fe08080b9885.png)

Take the API key and store it in a `.env.local` file so it stays out of your version control. Hardcoding keys in source files is how they end up leaked on GitHub — keep them in environment files instead.

Next, install the SDK:

`npm install @anthropic-ai/sdk`

## The anatomy of a request[](https://academy.claude.com/courses/claude-platform-101/your-first-api-call)

Every API call goes through the **`messages.create`** function. You specify three things:

- A **model** — which Claude model handles the request
- A **max tokens limit** — a cap on how long the response can be
- A list of **messages** — objects with either `user` or `assistant` roles, structured similarly to how you'd have a conversation with Claude elsewhere

Here's what that looks like in its most basic form:

typescript

```
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const msg = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2048,
  messages: [{
    role: "user",
    content: "Hello, Claude",
  }],
});
```

## A real example: reviewing buggy code[](https://academy.claude.com/courses/claude-platform-101/your-first-api-call)

Let's give Claude something a little more interesting than "hello." We'll point it at some buggy code and ask for a review. Here's the whole thing — one file, about 20 lines of code:

typescript

```
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const buggyCode = `
function add(a, b) {
  return a - b;
}
`;

const response = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2048,
  system: "You are a terse senior code reviewer. Give feedback in one paragraph.",
  messages: [
    { role: "user", content: `Review this code:\n${buggyCode}` },
  ],
});

for (const block of response.content) {
  if (block.type === "text") {
    console.log(block.text);
  }
}
```

Two things to notice here:

1. The **`system`** prompt is where you shape the persona. I want a terse senior reviewer, not a chatty one — so I just say that.
2. The **`message.content`** in the response is an **array of blocks**, not a string. For a basic text reply there's usually just one block of type `text`, but Claude can return multiple blocks — text, tool calls, thinking — so we always loop and check the type.

Run it, and Claude spots that `add` is subtracting and tells you in one paragraph. That's it. That's the whole API call.

![Terminal output from running the script: Claude responds that the function is named add but uses subtraction, and suggests changing return a - b to return a + b](https://academy.claude.com/assets/media/dce7c9afcff7179ab8479e35af39099e6f199f94e09ac965b1d5e814e80cf428.png)

## From script to product[](https://academy.claude.com/courses/claude-platform-101/your-first-api-call)

In a real product, this same `messages.create` shape is the engine behind something like a summarize endpoint. Pull a meeting transcript out of the database, hand it to Claude with a system prompt that says "extract insights and risks," save the result back on the row, and return it to the UI. It's the same call — just wrapped in a route handler.

![A meetings dashboard in a demo web app listing recorded project meetings, each with a transcript preview and a Generate summary button powered by the same API call](https://academy.claude.com/assets/media/4d065f9ff24a1b89c8e1c60748cec11485c48c40ac6134b1df0bd2de8f7ea429.png)

## Recap[](https://academy.claude.com/courses/claude-platform-101/your-first-api-call)

- Your first API call is a **`messages.create`** function with a **model**, a **token limit**, and **messages**.
- Store your API key in a `.env.local` file to keep it out of version control.
- Add a **system prompt** to shape Claude's behavior.
- The response `content` is an array of blocks — loop and check each block's `type`.
- From here, everything builds on this pattern.

Was this helpful?
