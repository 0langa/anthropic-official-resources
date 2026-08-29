Lesson 9 of 12 · Claude Code 101Subagents

# Subagents

Lesson 96 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fclaude-code-101%2Fsubagents)

Embedded media: https://www.youtube-nocookie.com/embed/jKErNxuxPXg?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Subagents

SummaryTranscript

Claude can delegate tasks to subagents that break them down and run
component tasks in parallel, improving your context management. Each
subagent operates in its own isolated context window.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=jKErNxuxPXg)

## How It Works[](https://academy.claude.com/courses/claude-code-101/subagents)

Managing context in Claude Code is important. A lot of the context window gets consumed by things like tool calls exploring your codebase or running web searches for research. What Claude discovers during that exploration isn't always relevant to the main feature you're developing.

This is where subagents come in. Claude spawns a subagent to handle a task like "explore this codebase for me." The subagent runs in parallel with its own context window, does all the exploration work, and once finished, summarizes its findings and returns that summary back to Claude.

The result: you get the answer you were looking for, without the entire journey it took to get there cluttering your main context.

## Creating Your Own Subagent[](https://academy.claude.com/courses/claude-code-101/subagents)

Subagents are defined in Markdown files with YAML frontmatter. The easiest way to get started is to let Claude generate one for you. Run:

`/agents`

Then select "Create new agent." You'll walk through steps including choosing the scope of the agent, defining its purpose, selecting the tools it has access to, and even picking a color for it.

Claude will generate a name, description, and prompt for the subagent. This also tells Claude when to call the subagent based on the prompts you give it.

## Further Customization[](https://academy.claude.com/courses/claude-code-101/subagents)

Subagents can be customized further. Here are some highlights:

- **Persistent memory** lets your subagent retain memory across conversations. This is great if you're using it consistently on the same projects.
- **Preload skills** into subagents by adding the `skills` key and listing skills by name. Note that unlike skills in your main conversation, the entire skill is loaded into context here.

## Recap[](https://academy.claude.com/courses/claude-code-101/subagents)

Keeping your context window clean is one of the best ways to stay productive with Claude Code. With subagents, you can run an agent in the background to handle the heavy lifting and return just the answer to your main context window.

**Want to go deeper?** Check out our dedicated course: [Introduction to subagents(opens in new tab)](https://academy.claude.com/courses/introduction-to-subagents)

Was this helpful?


## Transcript

Lesson 9 of 12 · Claude Code 101Subagents

# Subagents

Lesson 96 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fclaude-code-101%2Fsubagents)

Embedded media: https://www.youtube-nocookie.com/embed/jKErNxuxPXg?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Subagents

SummaryTranscript

Subagents are specialized assistants that Claude Code can delegate tasks to. Each subagent runs in its own conversation context window with a custom system prompt that you define. When finished, it returns a summary to the main thread while all the intermediate work stays isolated.

One of the main advantages of subagents is that they help manage context window usage. When you chat with Claude Code, you're adding context to the main context window. Every tool call and its results gets stored in this main context window. And so when Claude uses a subagent, a separate window starts. The subagent receives two inputs: a custom system prompt from your configuration file, and a task description written by the parent or parent agent based on what you ask for.

The subagent then works autonomously. When it reads files, edits files, or uses tools, none of these will appear in the main conversation. Just a summary is returned back. The entire subagent conversation then gets completely discarded.

Consider a task like investigating how the payment system works in an unfamiliar code base. Maybe you're trying to use Claude Code to figure out which service handles refunds. Well, without a subagent, Claude might read 15 files, run several searches, and trace through multiple function calls. All of that context fills your context window even if you only needed one single fact: which service handles refunds. With a subagent, you get the answer without the journey. The subagent explores, discovers the answer, and returns a focused summary keeping your main context clean. But the main window loses visibility into how the subagent reaches its conclusions and what it discovered along the way.

Claude Code includes several built-in subagents that you can use immediately, like the general purpose subagent—use for multi-step tasks that require both exploration and action. The explore subagent—use for fast searching of code bases. The plan subagent—use during plan mode for research and analysis of your code base before presenting a plan. And you can also create your own subagents with custom system prompts and tool access.

Subagents let Claude Code break work into focused pieces, keep your main context window clean, and bring back just what you need. Whether you're using the built-in ones or creating your own, they're a practical way to get more out of longer Claude Code sessions.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=jKErNxuxPXg)

## How It Works[](https://academy.claude.com/courses/claude-code-101/subagents)

Managing context in Claude Code is important. A lot of the context window gets consumed by things like tool calls exploring your codebase or running web searches for research. What Claude discovers during that exploration isn't always relevant to the main feature you're developing.

This is where subagents come in. Claude spawns a subagent to handle a task like "explore this codebase for me." The subagent runs in parallel with its own context window, does all the exploration work, and once finished, summarizes its findings and returns that summary back to Claude.

The result: you get the answer you were looking for, without the entire journey it took to get there cluttering your main context.

## Creating Your Own Subagent[](https://academy.claude.com/courses/claude-code-101/subagents)

Subagents are defined in Markdown files with YAML frontmatter. The easiest way to get started is to let Claude generate one for you. Run:

`/agents`

Then select "Create new agent." You'll walk through steps including choosing the scope of the agent, defining its purpose, selecting the tools it has access to, and even picking a color for it.

Claude will generate a name, description, and prompt for the subagent. This also tells Claude when to call the subagent based on the prompts you give it.

## Further Customization[](https://academy.claude.com/courses/claude-code-101/subagents)

Subagents can be customized further. Here are some highlights:

- **Persistent memory** lets your subagent retain memory across conversations. This is great if you're using it consistently on the same projects.
- **Preload skills** into subagents by adding the `skills` key and listing skills by name. Note that unlike skills in your main conversation, the entire skill is loaded into context here.

## Recap[](https://academy.claude.com/courses/claude-code-101/subagents)

Keeping your context window clean is one of the best ways to stay productive with Claude Code. With subagents, you can run an agent in the background to handle the heavy lifting and return just the answer to your main context window.

**Want to go deeper?** Check out our dedicated course: [Introduction to subagents(opens in new tab)](https://academy.claude.com/courses/introduction-to-subagents)

Was this helpful?
