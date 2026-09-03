Agent SDK

# Agent SDK overview

Copy pageCopy page

Build production AI agents with Claude Code as a library

Copy pageCopy page

An agent is an application that completes a task by planning its own steps and calling tools that read files, run commands, or edit code. The Agent SDK gives you the same tools, [agent loop](https://code.claude.com/docs/en/agent-sdk/agent-loop), and context management that power Claude Code, programmable in Python and TypeScript.

## [​](https://code.claude.com/docs/en/agent-sdk) Compare the Agent SDK to other Claude tools

The Agent SDK, the CLI, the Client SDK, and Managed Agents each fit different needs. Use the table to find the one that matches what you’re building.


<table class="m-0 min-w-full w-full max-w-none table [&amp;_th]:text-left [&amp;_td[data-numeric]]:tabular-nums [&amp;_td]:min-w-[150px]"><thead><tr><th>If you’re…</th><th>Use</th><th>Why</th></tr></thead><tbody><tr><td>Building an agent without implementing the tool loop yourself</td><td><strong>Agent SDK</strong></td><td>A library that runs the agent loop in your own process, in Python or TypeScript.</td></tr><tr><td>Doing interactive development or running one-off tasks from a terminal</td><td><a class="link" href="https://code.claude.com/docs/en/overview"><strong>Claude Code CLI</strong></a></td><td>The terminal interface, built for daily interactive use.</td></tr><tr><td>Calling the API directly and implementing the tool loop yourself</td><td><a class="link" href="https://platform.claude.com/docs/en/api/client-sdks" rel="noreferrer" target="_blank"><strong>Client SDK</strong></a></td><td>Direct access to the Anthropic API rather than to Claude Code. You implement the tool loop yourself.</td></tr><tr><td>Running long-running or asynchronous agents without managing your own sandbox or session infrastructure</td><td><a class="link" href="https://platform.claude.com/docs/en/managed-agents/overview" rel="noreferrer" target="_blank"><strong>Managed Agents</strong></a></td><td>Hosted REST API, a separate product from the Agent SDK. Anthropic runs the agent and the sandbox.</td></tr></tbody></table>

The SDK is available as a library for Python and TypeScript only. To drive the same agent loop from another language, [run the CLI as a subprocess](https://code.claude.com/docs/en/headless) with the `-p` flag and `--output-format json`.

## [​](https://code.claude.com/docs/en/agent-sdk) Capabilities

These Claude Code capabilities are available in the SDK:


<table class="m-0 min-w-full w-full max-w-none table [&amp;_th]:text-left [&amp;_td[data-numeric]]:tabular-nums [&amp;_td]:min-w-[150px]"><thead><tr><th>Capability</th><th>What it does</th><th>Learn more</th></tr></thead><tbody><tr><td>Built-in tools</td><td>Read, write, edit files, run commands, and search the web</td><td><a class="link" href="https://code.claude.com/docs/en/tools-reference">Tools reference</a></td></tr><tr><td>Hooks</td><td>Run custom code at key points in the agent lifecycle</td><td><a class="link" href="https://code.claude.com/docs/en/agent-sdk/hooks">Hooks</a></td></tr><tr><td>Subagents</td><td>Spawn specialized agents for focused subtasks</td><td><a class="link" href="https://code.claude.com/docs/en/agent-sdk/subagents">Subagents</a></td></tr><tr><td>MCP</td><td>Connect external tools and data sources via the Model Context Protocol</td><td><a class="link" href="https://code.claude.com/docs/en/agent-sdk/mcp">MCP</a></td></tr><tr><td>Permissions</td><td>Control which tools run automatically, which need approval</td><td><a class="link" href="https://code.claude.com/docs/en/agent-sdk/permissions">Permissions</a></td></tr><tr><td>Sessions</td><td>Maintain context across exchanges, resume or fork later</td><td><a class="link" href="https://code.claude.com/docs/en/agent-sdk/sessions">Sessions</a></td></tr><tr><td>Skills, commands, and memory</td><td>Load automatically from your project’s <code>.claude/</code> and from <code>~/.claude/</code>, same as Claude Code</td><td><a class="link" href="https://code.claude.com/docs/en/agent-sdk/skills">Skills</a>, <a class="link" href="https://code.claude.com/docs/en/agent-sdk/skills">Commands</a>, <a class="link" href="https://code.claude.com/docs/en/agent-sdk/modifying-system-prompts">Memory</a>, <a class="link" href="https://code.claude.com/docs/en/agent-sdk/claude-code-features">Configuration loading</a></td></tr><tr><td>Plugins</td><td>Package skills, agents, hooks, and MCP servers, and load them by local path</td><td><a class="link" href="https://code.claude.com/docs/en/agent-sdk/plugins">Plugins</a></td></tr></tbody></table>

## [​](https://code.claude.com/docs/en/agent-sdk) Get started

Follow the [Quickstart](https://code.claude.com/docs/en/agent-sdk/quickstart) to install the SDK, set your API key, and build your first agent, one that finds and fixes bugs in existing code.

Unless previously approved, Anthropic does not allow third party developers to offer claude.ai login or rate limits for their products, including agents built on the Claude Agent SDK. Use the API key authentication methods described in the [Quickstart](https://code.claude.com/docs/en/agent-sdk/quickstart) instead.

## [​](https://code.claude.com/docs/en/agent-sdk) Changelog

View the full changelog for SDK updates, bug fixes, and new features:

- **TypeScript SDK**: [view CHANGELOG.md](https://github.com/anthropics/claude-agent-sdk-typescript/blob/main/CHANGELOG.md)
- **Python SDK**: [view CHANGELOG.md](https://github.com/anthropics/claude-agent-sdk-python/blob/main/CHANGELOG.md)

## [​](https://code.claude.com/docs/en/agent-sdk) Report bugs

If you encounter bugs or issues with the Agent SDK:

- **TypeScript SDK**: [report issues on GitHub](https://github.com/anthropics/claude-agent-sdk-typescript/issues)
- **Python SDK**: [report issues on GitHub](https://github.com/anthropics/claude-agent-sdk-python/issues)

## [​](https://code.claude.com/docs/en/agent-sdk) Branding guidelines

For partners integrating the Claude Agent SDK, use of Claude branding is optional. When referencing Claude in your product:
**Allowed:**

- “Claude Agent”, preferred for dropdown menus
- “Claude”, when within a menu already labeled “Agents”
- “{YourAgentName} Powered by Claude”, if you have an existing agent name

**Not permitted:**

- “Claude Code” or “Claude Code Agent”
- Claude Code-branded ASCII art or visual elements that mimic Claude Code

Your product should maintain its own branding and not appear to be Claude Code or any Anthropic product. For questions about branding compliance, contact the Anthropic [sales team](https://www.anthropic.com/contact-sales).

## [​](https://code.claude.com/docs/en/agent-sdk) License and terms

Use of the Claude Agent SDK is governed by [Anthropic’s Commercial Terms of Service](https://www.anthropic.com/legal/commercial-terms), including when you use it to power products and services that you make available to your own customers and end users, except to the extent a specific component or dependency is covered by a different license as indicated in that component’s LICENSE file.

## [​](https://code.claude.com/docs/en/agent-sdk) Next steps

These resources cover deeper technical detail and example projects for building with the Agent SDK.

- [Quickstart](https://code.claude.com/docs/en/agent-sdk/quickstart): build your first agent that finds and fixes bugs
- [Agent loop](https://code.claude.com/docs/en/agent-sdk/agent-loop): how Claude plans, calls tools, and decides when a task is done
- [Example agents](https://github.com/anthropics/claude-agent-sdk-demos): demo apps for local development
- [TypeScript SDK](https://code.claude.com/docs/en/agent-sdk/typescript): full TypeScript API reference and examples
- [Python SDK](https://code.claude.com/docs/en/agent-sdk/python): full Python API reference and examples
- [Agent harness design](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code): how the Claude Code team uses dynamic workflows to orchestrate many subagents at once

Was this page helpful?

YesNo
