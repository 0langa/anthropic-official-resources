Lesson 5 of 9 · Claude Code in actionHooks

# Hooks

Lesson 57 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fclaude-code-in-action%2Fhooks)

Embedded media: https://www.youtube-nocookie.com/embed/1m0huCacWPs?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Hooks

A rule in CLAUDE.md is only a request, so Claude usually follows it but can
skip it. On a long run you're not watching, "usually" isn't good enough. A hook closes that
gap. It's code that runs at a fixed point in Claude's loop, so Claude
can't skip it.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=1m0huCacWPs)

## How a hook works[](https://academy.claude.com/courses/claude-code-in-action/hooks)

Suppose you want to check Claude's shell commands for secrets before they run. A hook does that with three parts:

1. **An event** sets when the hook runs, here right before a tool call.
2. **A matcher** narrows the event, here to Bash and Monitor, two tools that run shell commands.
3. **A command** does the work, here a script that looks for secrets.

All three go in a settings file. Add this block to your project's `.claude/settings.json`:

json

```
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|Monitor",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/redact-secrets.sh",
            "args": []
          }
        ]
      }
    ]
  }
}
```

Monitor runs commands in the background. The matcher names it because a hook that matches only `Bash` can't rewrite [Monitor commands(opens in new tab)](https://code.claude.com/docs/en/hooks).

When the event fires, Claude Code sends your script the details as JSON on standard input. The script answers with an exit code or by printing JSON, and that answer decides what happens next. You'll write this script once you've seen both kinds of answer.

Run `/hooks` to check that the hook is registered. To narrow a tool hook to one command, add a field such as `"if": "Bash(curl *)"` next to `command`. Leave `if` off this hook, or Monitor commands run with the secret still in them.

## Pick the event[](https://academy.claude.com/courses/claude-code-in-action/hooks)

The event comes first because it decides what your hook can change. **Only a hook that runs before an action can stop it.** Claude Code has around 30 events, and the [hooks reference(opens in new tab)](https://code.claude.com/docs/en/hooks) lists them all. These are the ones you'll use most:

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">To do this</th><th class="border-b border-strong p-sm text-left font-medium">Use</th><th class="border-b border-strong p-sm text-left font-medium">It fires</th></tr></thead><tbody><tr><td class="border-b p-sm">Stop or change a tool call</td><td class="border-b p-sm">PreToolUse</td><td class="border-b p-sm">Before a tool call</td></tr><tr><td class="border-b p-sm">Format or lint after an edit</td><td class="border-b p-sm">PostToolUse</td><td class="border-b p-sm">After a tool call succeeds</td></tr><tr><td class="border-b p-sm">Keep Claude working until a check passes</td><td class="border-b p-sm">Stop</td><td class="border-b p-sm">When Claude wants to end its turn</td></tr><tr><td class="border-b p-sm">Do the same for a subagent</td><td class="border-b p-sm">SubagentStop</td><td class="border-b p-sm">When a subagent finishes</td></tr><tr><td class="border-b p-sm">Set up the environment or add context</td><td class="border-b p-sm">SessionStart</td><td class="border-b p-sm">When a session starts</td></tr><tr><td class="border-b p-sm">See which instructions Claude loaded</td><td class="border-b p-sm">InstructionsLoaded</td><td class="border-b p-sm">When a CLAUDE.md or rule file loads</td></tr><tr><td class="border-b p-sm">Act around compaction</td><td class="border-b p-sm">PreCompact, PostCompact</td><td class="border-b p-sm">Before and after compaction</td></tr></tbody></table>

SessionStart also fires on other starts, such as after a compaction. Use the `startup` matcher if you only want fresh ones.

## Block with an exit code[](https://academy.claude.com/courses/claude-code-in-action/hooks)

The simplest answer a script can give is its exit code. **To block an action, exit 2.** Exit 1 feels like an error, but it doesn't block, so Claude runs the command anyway.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Exit code</th><th class="border-b border-strong p-sm text-left font-medium">What happens</th></tr></thead><tbody><tr><td class="border-b p-sm">0</td><td class="border-b p-sm">Success, and Claude Code reads any JSON you printed</td></tr><tr><td class="border-b p-sm">2</td><td class="border-b p-sm">The action is blocked, on events that can block</td></tr><tr><td class="border-b p-sm">Anything else</td><td class="border-b p-sm">The action goes ahead by default</td></tr></tbody></table>

What exit 2 does depends on when the event fires:

- On PreToolUse, the tool call doesn't run, and Claude reads your standard error as the reason.
- On Stop, Claude keeps working and reads your standard error, so use it to say what's left to do.
- On PostToolUse, the tool already ran, so nothing stops. Claude still reads your standard error.
- On SessionStart and Notification, nothing is blocked. SessionStart shows your standard error to you only, and Notification ignores it.

## Allow, deny, or ask with JSON[](https://academy.claude.com/courses/claude-code-in-action/hooks)

An exit code can only block or not block. For a finer answer, have a PreToolUse hook print JSON and exit 0. The `permissionDecision` field carries your answer:

- `allow` lets the call through.
- `deny` stops the call.
- `ask` hands the decision to you.

This answer stops a push to main and tells Claude what to do instead:

json

```
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Don't push to main. Open a pull request instead."
  }
}
```

JSON also lets you rewrite a call by adding `updatedInput`. With `ask`, you see the rewritten call and approve it. With `allow`, it runs without a prompt:

json

```
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "updatedInput": {
      "command": "..."
    }
  }
}
```

**`updatedInput` replaces the whole input object, so include the fields you aren't changing.** Any field you leave out is lost.

## Build the guardrail[](https://academy.claude.com/courses/claude-code-in-action/hooks)

Rewriting is what the secrets check needs. When Claude is about to run a command with a live key in it, you could deny the call. Or you can swap the key for a placeholder, so the command runs without the secret.

Save this as `.claude/hooks/redact-secrets.sh`, the script your settings file points to. It needs `jq`, and you make it executable with `chmod +x`:

bash

```
#!/bin/bash
# Replaces live-looking keys before the command runs.
jq 'if (.tool_input.command // "" | test("sk_live_\\w+")) then {
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "ask",
    permissionDecisionReason: "Replaced a live key with a placeholder",
    updatedInput: (.tool_input | .command |= gsub("sk_live_\\w+"; "REDACTED"))
  }
} else empty end'
```

The script reads the command from `tool_input.command` in the JSON it receives. If it finds `sk_live_`, it swaps the key for `REDACTED` and keeps the other fields. If it finds nothing, it prints nothing, so the call goes on as usual.

It returns `ask`, so you approve each rewritten command. Returning `allow` would skip that prompt for every command the pattern matches.

**A hook that fails usually doesn't block.** If the path is wrong or `jq` is missing, the call goes on with the key still in it. So test it by asking Claude to run `echo sk_live_test123`, and check that the prompt shows `REDACTED`. Then commit the script and the settings file together so your team gets both.

You can make this hook [block when it fails(opens in new tab)](https://code.claude.com/docs/en/hooks). That blocks every Bash and Monitor call for anyone who can't run the script.

## Keep context after a compact[](https://academy.claude.com/courses/claude-code-in-action/hooks)

Hooks can also give Claude information. Compacting a long conversation drops a lot of detail, so Claude can lose track of your files. **To put that back, use SessionStart with the `compact` matcher.** The plain text it prints goes into Claude's context, while PostCompact's output doesn't. This hook lists your uncommitted changes:

json

```
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "compact",
        "hooks": [{ "type": "command", "command": "git status --short" }]
      }
    ]
  }
}
```

UserPromptSubmit and UserPromptExpansion add plain text to context the same way. Most other events ignore it.

## Key takeaways[](https://academy.claude.com/courses/claude-code-in-action/hooks)

- Put a rule in a hook when it must hold on a run you aren't watching.
- Guard tools with PreToolUse, gate the end of a turn with Stop, and restore context with SessionStart.
- Exit 2 to block, because exit 1 lets the action through.

Was this helpful?
