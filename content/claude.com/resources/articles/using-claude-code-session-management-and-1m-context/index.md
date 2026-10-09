# Using Claude Code: session management and 1M context

How you manage sessions, context, and compaction in Claude Code shapes your results more than you might expect. Here's a practical guide to making the right call at every turn.

- Category[Best practices](https://claude.com/resources/best-practices)
- ProductClaude Code
- DateApril 15, 2026
- Reading time8 min
- ShareCopy link

We released **`/usage`**, a new slash command to help you understand your usage with Claude Code. This feature was informed by a number of conversations with customers.

What came up again and again in these calls is that there is a lot of variance in how users manage their sessions, especially with our new update to 1 million context in Claude Code.

Do you only use one session or two sessions that you keep open in a terminal? Do you start a new session with every prompt? When do you use [compact](https://platform.claude.com/docs/en/build-with-claude/compaction), rewind or [subagents](https://code.claude.com/docs/en/sub-agents)? What causes a bad compact or bad session?

There’s a surprising amount of detail here that can really shape your experience with [Claude Code](https://claude.com/product/claude-code) and almost all of it comes from [managing your context window](https://code.claude.com/docs/en/how-claude-code-works).

## **A quick primer on context, compaction and context rot**

![](https://assets.claude.com/a1d3f4d3841b7718b168df873db833f08031b21d.png)

The context window is everything the model can "see" at once when generating its next response. It includes your system prompt, the conversation so far, every tool call and its output, and every file that's been read. Claude Code has a context window of one million tokens.

Unfortunately, using context has a slight impact on performance, which is often called context rot. Context rot is the observation that model performance degrades as context grows because attention gets spread across more tokens, and older, irrelevant content starts to distract from the current task.

Context windows are a hard cutoff, so when you’re nearing the end of the context window, the task you’ve been working on is automatically summarized into a smaller description and the model continues the work in a new context window. We call this compaction. You can also trigger compaction yourself.

![](https://assets.claude.com/be22be7e25198ecb717775fadf1e0d3ec41446a2.png)

## **Every turn as a branching point**

Say you've just asked Claude to do something and it's finished—you’ve now got some information in context (tool calls, tool outputs, your instructions) and you have a surprising number of options for what to do next:

- **Continue** — send another message in the same session
- **`/rewind` (esc esc)** — jump back to a previous message and try again from there
- **`/clear`** — start a new session, usually with a brief you've distilled from what you just learned
- **Compact** — summarize the session so far and keep going on top of the summary
- **Subagents** — delegate the next chunk of work to an agent with its own clean context, and only pull its result back in

While the most natural course is just to continue, the other four options exist to help manage your context.

![](https://assets.claude.com/0f096c1128f26b656d8bd4ca2355f35ac17456d6.png)

## **When to start a new session**

When do you keep a long running session vs starting a new one? Our general rule of thumb is when you start a new task, you should also start a new session.

While 1M context windows mean that you can now do longer tasks more reliably, for example building a full-stack app from scratch, context rot may occur.

Sometimes you may do related tasks where some of the context is still necessary, but not always. For example, writing the documentation for a feature you just implemented. While you could start a new session, Claude would have to reread the files that you just implemented, which would be slower and more expensive.

## **Rewinding instead of correcting**

![](https://assets.claude.com/0e0460fbf4e1894b2ab552db722fa50709125f14.png)

In Claude Code, double-tapping Esc (or running `/rewind`) lets you jump back to any previous message and re-prompt from there. The messages after that point are dropped from the context.

Rewind is often the better approach to correction. For example, Claude reads five files, tries an approach, and it doesn't work. Your instinct may be to type "that didn't work, try X instead." But the better move may be to rewind to just after the file reads, and re-prompt with what you learned. "Don't use approach A, the foo module doesn't expose that—go straight to B."

You can also use *“summarize from here”* or the `/rewind` slash command to have Claude summarize its learnings and create a handoff message, kind of like a message to the previous iteration of Claude from its future self that tried something and it didn’t work.

## **Compacting vs. launching a fresh session**

Once a session gets long, you have two ways to shed extraneous context: `/compact` or `/clear` (and start fresh). They feel similar but behave very differently.

**Compact** asks the model to summarize the conversation so far, then replaces the history with that summary. It's lossy, but you didn't have to write anything yourself and Claude might be more thorough in including important learnings or files. You can also steer it by passing instructions (`/compact focus on the auth refactor, drop the test debugging`).

![](https://assets.claude.com/45cde22d0d024defb3e6276ade31d5bc1bf9834c.png)

With `/clear` *you* write down what matters ("we're refactoring the auth middleware, the constraint is X, the files that matter are A and B, we've ruled out approach Y") and start clean. It's more work, but the resulting context is what you decided was relevant.

## **What causes a bad autocompact?**

If you run a lot of long-running sessions, you might have noticed times in which compacting might be particularly bad. In this case we’ve often found that bad compacts can happen when the model can’t predict the direction your work is going.

In the example above, autocompact fires after a long debugging session and summarizes the investigation and your next message is "now fix that other warning we saw in bar.ts."

But because the session was focused on debugging, the other warning might have been dropped from the summary.

This is particularly difficult, because due to context rot, the model is at its least intelligent point when compacting. With one million context, you have more time to /compact proactively with a description of what you want to do.

## **Subagents and fresh context windows**

[Subagents](https://claude.com/resources/articles/subagents-in-claude-code) tend to work well when you know in advance that a chunk of work will produce a lot of intermediate output you won't need again.

When Claude spawns a subagent via the Agent tool, that subagent gets its own fresh context window. It can do as much work as it needs to, and then synthesize its results so only the final report comes back to the parent.

![](https://assets.claude.com/0cd3a7b2e6fce665631f1c77a10eb6de8d0c1a08.png)

The mental test we use at Anthropic: *will I need this tool output again, or just the conclusion?*

While Claude Code will automatically call subagents, you may want to tell it to explicitly do this. For example, you may want to tell it to:

- “Spin up a subagent to verify the result of this work based on the following spec file”
- “Spin off a subagent to read through this other codebase and summarize how it implemented the auth flow, then implement it yourself in the same way”
- “Spin off a subagent to write the docs on this feature based on my git changes”

**Putting it together**

To help you choose which context management feature to use, we put together this helpful table that outlines common situations, what tool to reach for, and why.

<table class="DataTable-module-scss-module__1wNx5a__table"><thead><tr><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Situation</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Consider reaching for</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Why</span></th></tr></thead><tbody><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Same task, context is still relevant</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Continue</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Everything in the window is still load-bearing; don't pay to rebuild it.</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Claude went down a wrong path</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Rewind (double-Esc)</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Keep the useful file reads, drop the failed attempt, re-prompt with what you learned.</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Mid-task but the session is bloated with stale debugging/exploration</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">/compact &lt;hint&gt;</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Low effort; Claude decides what mattered. Steer it with instructions if needed.</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Starting a genuinely new task</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">/clear</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Zero rot; you control exactly what carries forward.</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Next step will generate lots of output you'll only need the conclusion from (codebase search, verification, doc writing)</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Subagent</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Intermediate tool noise stays in the child's context; only the result comes back.</span></td></tr></tbody></table>

We look forward to seeing what you build.

‍

*Get started with [Claude Code](https://claude.com/product/claude-code) today.*

***About the author:** Thariq Shihipar is a member of technical staff at Anthropic, working on Claude Code.*

‍

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 7, 2026

### Automating eval design and hillclimbing with Claude

Principles for designing evals and hillclimbing against them without fooling yourself, and how the claude-api skill's build-eval and hillclimb commands put them to work.

Claude Platform

(opens in new tab)](https://claude.dev/blog/automating-eval-design-and-hillclimbing/)[ArticleOct 6, 2026

### Claude Code in the cloud: a field guide to cloud sessions

What changes when Claude Code runs on its own machine, the workflows where that pays off, and how to connect GitHub on the first try.

Claude Code

(opens in new tab)](https://claude.dev/blog/claude-code-in-the-cloud/)[ArticleOct 5, 2026

### How Cresta turned CX expertise into an agent builder on the Claude Agent SDK

See how Cresta built Conductor, an agent that builds other agents, on the Claude Agent SDK, and how the team evaluates it with every new Claude model.

Claude Platform](https://claude.com/resources/articles/how-cresta-turned-cx-expertise-into-an-agent-builder-on-the-claude-agent-sdk)[ArticleOct 1, 2026

### Getting started with Claude Code mods

Claude Code

(opens in new tab)](https://claude.dev/blog/getting-started-with-claude-code-mods/)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
