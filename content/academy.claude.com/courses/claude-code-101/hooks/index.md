Lesson 12 of 12 · Claude Code 101Hooks

# Hooks

Lesson 126 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fclaude-code-101%2Fhooks)

Embedded media: https://www.youtube-nocookie.com/embed/IkaPHiMDazM?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Hooks

SummaryTranscript

Hooks let you run commands at specific points in Claude Code's lifecycle.
The key difference between hooks and everything else covered in this course
is that hooks are **deterministic** — they always run.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=IkaPHiMDazM)

## Why Use Hooks[](https://academy.claude.com/courses/claude-code-101/hooks)

You can tell Claude in your CLAUDE.md to run Prettier after every file edit. Most of the time it will. But sometimes it won't. A hook makes it happen every single time, no exceptions.

Common use cases include:

- Auto-formatting after file edits
- Logging all executed commands for compliance
- Blocking dangerous operations like modifying production files
- Sending yourself notifications when Claude finishes a task

## How They Work[](https://academy.claude.com/courses/claude-code-101/hooks)

Hooks are configured in your `settings.json`. You pick an event, optionally set a matcher for which tools it applies to, and provide a command to run. Some of the most common events are:

- **PreToolUse** — runs before a tool call
- **PostToolUse** — runs after a tool call completes
- **UserPromptSubmit** — runs when you submit a prompt, before Claude processes it
- **Stop** — runs when Claude finishes responding
- **Notification** — runs when Claude sends a notification

These are just a few of the events you can hook into — Claude Code supports many more. See the [hooks reference(opens in new tab)](https://code.claude.com/docs/en/hooks) for the full list.

You configure them through the `/hooks` command inside Claude Code, or by editing `settings.json` directly.

![The settings.json file inside the .claude directory with hooks configuration](https://academy.claude.com/assets/media/de2ac2dab9f24bb445af53ec3f2dbb17f4399fb472247165532f814f350126d5.jpg)

## A Practical Example[](https://academy.claude.com/courses/claude-code-101/hooks)

The most common hook: auto-formatting after edits. Set a **PostToolUse** hook with a matcher of `"Edit|MultiEdit|Write"` so it fires whenever Claude modifies a file. The command checks the file extension and runs the appropriate formatter — Prettier for TypeScript, gofmt for Go, whatever your project uses.

## Blocking with PreToolUse[](https://academy.claude.com/courses/claude-code-101/hooks)

PreToolUse hooks can **block tool calls** before they execute. Your hook receives the tool name and input as JSON on stdin. The exit code determines the behavior:

- **Exit code 0** — proceed normally.
- **Exit code 2** — block the action. The stderr message gets fed back to Claude as feedback so it knows why it was blocked and can adjust.
- **Any other exit code** — a non-blocking error that gets shown to you but doesn't stop anything.

This is how you enforce hard rules. Block writes to a production config directory. Block bash commands that contain `rm -rf`. Block commits to main. Whatever your team needs to be *guaranteed*, not suggested.

![A settings.json file showing PreToolUse and PostToolUse hooks with matchers and commands](https://academy.claude.com/assets/media/6749d1e1eb639dbc9d9532162c45f182aa63b60e4c6fc633e1d32f7780324234.jpg)

## Sharing Hooks with Your Team[](https://academy.claude.com/courses/claude-code-101/hooks)

Hooks configured in `.claude/settings.json` are project-level and can be checked into your repo. This means your entire team gets the same hooks automatically. Use the `CLAUDE_PROJECT_DIR` environment variable in your commands to reference scripts stored in your project, so they work regardless of Claude's current working directory.

## Recap[](https://academy.claude.com/courses/claude-code-101/hooks)

Hooks give you deterministic control over Claude Code's behavior. Use PostToolUse for auto-formatting and logging. Use PreToolUse to block dangerous operations. Configure them with `/hooks` or in `settings.json`. And check them into your repo so your team gets them too.

If something needs to happen every time without fail, don't put it in a prompt. Put it in a hook.

Was this helpful?


## Transcript

Lesson 12 of 12 · Claude Code 101Hooks

# Hooks

Lesson 126 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fclaude-code-101%2Fhooks)

Embedded media: https://www.youtube-nocookie.com/embed/IkaPHiMDazM?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Hooks

SummaryTranscript

Hooks let you run commands at different points in Claude Code's life cycle. The key difference between hooks and everything else we've covered is that hooks are deterministic. They always run. So put it this way: you can tell Claude in your CLAUDE.md file to run Prettier after every file edit, and most of the time it will do that, but sometimes it won't. It's not perfect. But a hook makes it happen every single time with no exceptions.

Use cases could include auto-formatting after file edits, logging all executed commands for compliance, blocking dangerous operations like modifying production files, and sending yourself notifications when Claude finishes a task.

Hooks are configured in your settings.json file. You pick an event, optionally set a matcher for which tools it applies to, and provide a command to run. User prompt submit runs when you submit a prompt before Claude processes it. Pre-tool use runs before a tool call. Post-tool use runs after a tool call completes. Notification runs when Claude sends a notification. And stop runs when Claude finishes responding.

The most common hook: auto-formatting after edits. You set a post-tool use hook with a matcher of edit or multi-edit, right? So it fires whenever Claude modifies a file. The command checks the file extension and runs the appropriate formatter. This could be Prettier for TypeScript, go format for Go, Ruff for Python, whatever your project uses.

Pre-tool use hooks can block tool calls before they execute. So your hook receives a tool name and input as JSON on STDIN. If it exits with code 2, the action is blocked, and the STDERR message gets fed back to Claude as feedback, so Claude knows why it was blocked and can adjust. Exit code 0 means proceed, exit code 2 means block. This is how you enforce hard rules. Block writes to a production config directory, block bash commands that contain rm -rf, block commits to main, whatever your team needs to be guaranteed, not suggested.

Hooks configured in .claude/settings.json are project level and can be checked into your repo. This means that your entire team gets the same hooks automatically. Use the CLAUDE\_PROJECT\_DIR environment variable in your commands to reference scripts stored in your project so they work regardless of Claude's current working directory.

Hooks give you deterministic control over Claude Code behavior. Use post-tool use for auto-formatting and logging. Use pre-tool use to block dangerous operations. Configure them in /hooks or in settings.json and check them into your repository so your team gets them too. If something needs to happen every time without fail, don't put it in a prompt. Put it in a hook.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=IkaPHiMDazM)

## Why Use Hooks[](https://academy.claude.com/courses/claude-code-101/hooks)

You can tell Claude in your CLAUDE.md to run Prettier after every file edit. Most of the time it will. But sometimes it won't. A hook makes it happen every single time, no exceptions.

Common use cases include:

- Auto-formatting after file edits
- Logging all executed commands for compliance
- Blocking dangerous operations like modifying production files
- Sending yourself notifications when Claude finishes a task

## How They Work[](https://academy.claude.com/courses/claude-code-101/hooks)

Hooks are configured in your `settings.json`. You pick an event, optionally set a matcher for which tools it applies to, and provide a command to run. Some of the most common events are:

- **PreToolUse** — runs before a tool call
- **PostToolUse** — runs after a tool call completes
- **UserPromptSubmit** — runs when you submit a prompt, before Claude processes it
- **Stop** — runs when Claude finishes responding
- **Notification** — runs when Claude sends a notification

These are just a few of the events you can hook into — Claude Code supports many more. See the [hooks reference(opens in new tab)](https://code.claude.com/docs/en/hooks) for the full list.

You configure them through the `/hooks` command inside Claude Code, or by editing `settings.json` directly.

![The settings.json file inside the .claude directory with hooks configuration](https://academy.claude.com/assets/media/de2ac2dab9f24bb445af53ec3f2dbb17f4399fb472247165532f814f350126d5.jpg)

## A Practical Example[](https://academy.claude.com/courses/claude-code-101/hooks)

The most common hook: auto-formatting after edits. Set a **PostToolUse** hook with a matcher of `"Edit|MultiEdit|Write"` so it fires whenever Claude modifies a file. The command checks the file extension and runs the appropriate formatter — Prettier for TypeScript, gofmt for Go, whatever your project uses.

## Blocking with PreToolUse[](https://academy.claude.com/courses/claude-code-101/hooks)

PreToolUse hooks can **block tool calls** before they execute. Your hook receives the tool name and input as JSON on stdin. The exit code determines the behavior:

- **Exit code 0** — proceed normally.
- **Exit code 2** — block the action. The stderr message gets fed back to Claude as feedback so it knows why it was blocked and can adjust.
- **Any other exit code** — a non-blocking error that gets shown to you but doesn't stop anything.

This is how you enforce hard rules. Block writes to a production config directory. Block bash commands that contain `rm -rf`. Block commits to main. Whatever your team needs to be *guaranteed*, not suggested.

![A settings.json file showing PreToolUse and PostToolUse hooks with matchers and commands](https://academy.claude.com/assets/media/6749d1e1eb639dbc9d9532162c45f182aa63b60e4c6fc633e1d32f7780324234.jpg)

## Sharing Hooks with Your Team[](https://academy.claude.com/courses/claude-code-101/hooks)

Hooks configured in `.claude/settings.json` are project-level and can be checked into your repo. This means your entire team gets the same hooks automatically. Use the `CLAUDE_PROJECT_DIR` environment variable in your commands to reference scripts stored in your project, so they work regardless of Claude's current working directory.

## Recap[](https://academy.claude.com/courses/claude-code-101/hooks)

Hooks give you deterministic control over Claude Code's behavior. Use PostToolUse for auto-formatting and logging. Use PreToolUse to block dangerous operations. Configure them with `/hooks` or in `settings.json`. And check them into your repo so your team gets them too.

If something needs to happen every time without fail, don't put it in a prompt. Put it in a hook.

Was this helpful?
