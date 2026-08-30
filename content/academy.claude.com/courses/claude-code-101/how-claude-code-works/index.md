Lesson 2 of 12 · Claude Code 101How Claude Code works

# How Claude Code works

Lesson 25 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fclaude-code-101%2Fhow-claude-code-works)

Embedded media: https://www.youtube-nocookie.com/embed/6bs5b4FltCU?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

How Claude Code works

SummaryTranscript

Claude Code is different from typical chat applications. Understanding how
it works under the hood will help you use it more effectively.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=6bs5b4FltCU)

## The Agentic Loop[](https://academy.claude.com/courses/claude-code-101/how-claude-code-works)

Claude Code is best explained through the **agentic loop**:

1. You enter a prompt into Claude Code.
2. Claude gathers the context it needs by interacting with the model, which returns text or a tool call that Claude Code can execute.
3. It takes action — for example, editing a file or running a command.
4. It verifies the results and determines whether they achieve what your prompt set out to do.
5. If they do, Claude finishes and waits for the next prompt. If they don't, it loops back and tries again until the results are complete and verifiable.

Throughout this loop, you can add context, interrupt, or steer the model to help guide it toward your goal.

![Diagram of the agentic loop: Your prompt flows into the loop of Gather context, Take action, and Verify results, with the ability to interrupt, steer, or add context at any point](https://academy.claude.com/assets/media/141ad1329bacde1d351f9078f8b1aeafecea0340c110721031060f1b11ec46a1.jpg)

## Context[](https://academy.claude.com/courses/claude-code-101/how-claude-code-works)

Claude has a **context window** that determines how much of your conversation, file contents, command outputs, and more it can store and reference. Once you reach that limit, Claude Code compacts your conversation — automatically determining what it can remove or summarize to bring the context window back down to a usable size.

## Tools[](https://academy.claude.com/courses/claude-code-101/how-claude-code-works)

Tools are the backbone of how agents work. Most AI assistants simply take text in and return text out. Tools let Claude Code determine *when* to execute code to get closer to completing a task. This could be a file-reading tool, a web search tool, or any number of other capabilities. Claude Code uses semantic understanding to determine when to call a tool and how to use the output.

## Permissions[](https://academy.claude.com/courses/claude-code-101/how-claude-code-works)

Claude Code has several permission modes:

- **Manual:** Claude asks for explicit permission before editing a file or running a shell command.
- **Auto-accept:** Files are edited without asking, but commands still require approval.
- **Plan mode:** Uses read-only tools to compile a plan of action before starting any work.
- **Auto mode:** Claude works without permission prompts while a classifier checks each action in the background, targeted at blocking actions that are irreversible, destructive, or aimed outside your environment. When something is blocked, Claude usually finds a safer approach or asks you for the go-ahead.

Which mode a new session starts in depends on your plan and settings.

![Claude Code asking for permission before running a bash command](https://academy.claude.com/assets/media/8d2d1170d15c7ba9eed77d9ec83eec23486de420931ab4901a67b771f9cbb4b7.jpg)

All of this can be configured in your settings file. Be cautious when skipping permissions — giving Claude Code free rein to run commands means a mistake could be harder to catch before it happens.

## Recap[](https://academy.claude.com/courses/claude-code-101/how-claude-code-works)

Claude Code combines several agentic concepts: an agentic loop, a managed context window, tools, and configurable permissions — all inside your terminal. It can read your codebase, take action, and verify its own work. That's what makes it fundamentally different from a chat window.

Was this helpful?


## Transcript

We know that Claude Code is different from usual chat applications, but how does it work? Claude Code is best explained through the agentic loop.

You enter a prompt into Claude Code. Claude Code will then gather context required to complete your prompt. It does so by interacting with the model which will return text or a tool call that Claude Code can execute. Then it takes action. For example, editing a file or running a command. Finally, it verifies those results and determines if they achieve what your prompt set out to do in the first place. If they do, then Claude finishes and waits for the next prompt. And if they don't, Claude goes back and runs the loop again until the results are complete and verifiable. Throughout this loop, you're able to add context, interrupt it, or steer the model to help guide it towards your end goal.

Claude has a context window, which determines how much of your conversation, file contents, command outputs, and more, it can store and look back on. Once you reach that limit, Claude Code compacts your conversation, which automatically determines what it can take out of the context window and what it can summarize in order to bring the context window back down.

Tools are the backbone of how agents work. Currently, most AI assistants are simply input text and output text. Nothing in between. Tools let Claude Code and other agents determine when to execute code to get closer to a task. This could be Read File Tool or Search Web Tool, for example. Claude Code uses semantic searching to determine when to call a tool and get the output of it.

Claude Code also has permission modes. Default behavior is that it has to ask explicit permission before editing a file or running a shell command. You can use Shift and Tab to toggle between different modes. Auto Accept edits files without asking but still asks for commands. Plan Mode uses read-only tools to help compile a plan of action before starting. It's worth being cautious when skipping permissions. Giving Claude Code free rein to run commands means a mistake could be harder to catch before it even happens.

Claude Code works by combining different agentic concepts, an agentic loop, a managed context window, tools, and configurable permissions into your terminal. It can read your code base, take action, and verify its own work, and that makes it fundamentally different from a chat window.


## Video transcript

# How Claude Code works

We know that Claude Code is different from usual chat applications, but how does it work? Claude Code is best explained through the agentic loop.

You enter a prompt into Claude Code. Claude Code will then gather context required to complete your prompt. It does so by interacting with the model which will return text or a tool call that Claude Code can execute. Then it takes action. For example, editing a file or running a command. Finally, it verifies those results and determines if they achieve what your prompt set out to do in the first place. If they do, then Claude finishes and waits for the next prompt. And if they don't, Claude goes back and runs the loop again until the results are complete and verifiable. Throughout this loop, you're able to add context, interrupt it, or steer the model to help guide it towards your end goal.

Claude has a context window, which determines how much of your conversation, file contents, command outputs, and more, it can store and look back on. Once you reach that limit, Claude Code compacts your conversation, which automatically determines what it can take out of the context window and what it can summarize in order to bring the context window back down.

Tools are the backbone of how agents work. Currently, most AI assistants are simply input text and output text. Nothing in between. Tools let Claude Code and other agents determine when to execute code to get closer to a task. This could be Read File Tool or Search Web Tool, for example. Claude Code uses semantic searching to determine when to call a tool and get the output of it.

Claude Code also has permission modes. Default behavior is that it has to ask explicit permission before editing a file or running a shell command. You can use Shift and Tab to toggle between different modes. Auto Accept edits files without asking but still asks for commands. Plan Mode uses read-only tools to help compile a plan of action before starting. It's worth being cautious when skipping permissions. Giving Claude Code free rein to run commands means a mistake could be harder to catch before it even happens.

Claude Code works by combining different agentic concepts, an agentic loop, a managed context window, tools, and configurable permissions into your terminal. It can read your code base, take action, and verify its own work, and that makes it fundamentally different from a chat window.

