Lesson 4 of 6 · Introduction to agent skillsSkills vs. other Claude Code features

# Skills vs. other Claude Code features

Lesson 46 min

In this lessonBy the end, you’ll be able to

- Compare skills to CLAUDE.md, subagents, hooks, and MCP servers
- Choose the right Claude Code customization feature for a given use case
- Design a complementary setup that combines multiple features effectively

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fintroduction-to-agent-skills%2Fskills-vs-other-claude-code-features)

## Skills vs. other Claude Code features[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

Embedded media: https://www.youtube-nocookie.com/embed/IgNN4v0BJdU?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Skills vs. other Claude Code features · 3 min

SummaryTranscript

Claude Code offers several customization options, and choosing the wrong
one can lead to unnecessary complexity. This video breaks down when to use
skills versus CLAUDE.md, subagents, hooks, and MCP servers. You'll learn
the key differences between each option and how they complement each other
in a typical development setup.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=IgNN4v0BJdU)

## Key takeaways[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

- **CLAUDE.md** loads into every conversation and is best for always-on project standards. **Skills** load on demand and are best for task-specific expertise
- **Subagents** run in isolated execution contexts — use them for delegated work. **Skills** add knowledge to your current conversation
- **Hooks** are event-driven (fire on file saves, tool calls). **Skills** are request-driven (activate based on what you're asking)
- **MCP servers** provide external tools and integrations — a different category entirely from skills
- Each feature handles its own specialty — **combine them** rather than forcing everything into one approach

Claude Code offers several customization options: Skills, CLAUDE.md, subagents, hooks, and MCP servers. They solve different problems, and knowing when to use each prevents you from building the wrong thing. Let's break them down.

## CLAUDE.md vs Skills[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

CLAUDE.md loads into every conversation, always. If you want Claude to use TypeScript strict mode in your project, put it in your CLAUDE.md file.

Skills load on demand. When Claude matches a request to a skill, that skill's instructions join the conversation. Your PR review checklist doesn't need to be in context when you're writing new code — it activates when you ask for a review.

![](https://academy.claude.com/assets/media/5b601bf3261dea9cac381a074d1319512d2a169f1b45d847197a86fab9c106f6.png)

**Use CLAUDE.md for:**

- Project-wide standards that always apply
- Constraints like "never modify the database schema"
- Framework preferences and coding style

**Use Skills for:**

- Task-specific expertise
- Knowledge that's only relevant sometimes
- Detailed procedures that would clutter every conversation

## Skills vs Subagents[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

Skills add knowledge to your current conversation. When a skill activates, its instructions join the existing context.

Subagents run in a separate context. They receive a task, work on it independently, and return results. They're isolated from the main conversation.

**Use Subagents when:**

- You want to delegate a task to a separate execution context
- You need different tool access than the main conversation
- You want isolation between delegated work and your main context

**Use Skills when:**

- You want to enhance Claude's knowledge for the current task
- The expertise applies throughout a conversation

## Skills vs Hooks[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

Hooks fire on events. A hook might run a linter every time Claude saves a file, or validate input before certain tool calls. They're event-driven.

Skills are request-driven. They activate based on what you're asking.

**Use Hooks for:**

- Operations that should run on every file save
- Validation before specific tool calls
- Automated side effects of Claude's actions

**Use Skills for:**

- Knowledge that informs how Claude handles requests
- Guidelines that affect Claude's reasoning

## Putting It All Together[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

A typical setup might include:

- **CLAUDE.md** — always-on project standards
- **Skills** — task-specific expertise that loads on demand
- **Hooks** — automated operations triggered by events
- **Subagents** — isolated execution contexts for delegated work
- **MCP servers** — external tools and integrations

Each handles its own specialty. Don't force everything into skills when another option fits better — and you can use multiple at a time. Skills provide automatic task-specific expertise, CLAUDE.md is for always-on instructions, subagents run in isolated contexts, hooks fire on events, and MCP provides external tools.

Use skills when you have knowledge that Claude should apply automatically when the topic is relevant, and combine them with other features for comprehensive customization.

## Lesson reflection[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

- Look at your current CLAUDE.md file. Is there anything in it that would work better as a skill (loaded only when relevant)?
- Think about your team's development workflow. Which combination of Claude Code features (skills, hooks, subagents, MCP) would address your most common pain points?

## What's next[](https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features)

In the next lesson, you'll learn how to share skills with your team and organization — from committing them to repositories, to distributing via plugins, to enterprise-wide deployment through managed settings.

Was this helpful?


## Transcript

Claude Code offers several customization options. Skills, CLAUDE.md, subagents, hooks, MCP servers. They solve different problems. Knowing when to use each prevents you from building the wrong thing. So let's run them down.

CLAUDE.md loads into every conversation, always. So if you want Claude to use TypeScript strict mode in this project, then put it in your CLAUDE.md file. Skills load on demand. When Claude matches a request, your PR review checklist doesn't need to be in the context when you're writing new code. It activates when you ask for a review. So use CLAUDE.md for project-wide standards that always apply, constraints like never modify the database schema, framework preferences, and coding style. Then use skills for task-specific expertise, knowledge that's only relevant sometimes, and detailed procedures that would clutter every conversation.

Skills add knowledge to your current conversation. When a skill activates, its instructions join the existing context. Subagents run in a separate context. They receive a task, work on it independently, and return results. They're isolated from the main conversation. Use subagents when you want to delegate a task to a separate execution context. You need different tool access than the main conversation does. You want isolation between delegated work and your main context. Use skills when you want to enhance Claude's knowledge for the current task. The expertise applies throughout a conversation.

Hooks fire on events. A hook might run a linter every time Claude saves a file, or validate input before certain tool calls. They're all event-driven, while skills, they're request-driven. They activate based on what you're asking. So use hooks for operations that should run on every file save, validation before specific tool calls, or automated side effects of Claude's actions. Then use skills for knowledge that informs how Claude handles requests, guidelines that affect Claude's reasoning.

A typical setup might include a CLAUDE.md file for always-on project standards, skills for task-specific expertise, hooks for automated operations. Each handles its own specialty. Don't force everything into skills when another option fits best. You can use multiple at a time.

Skills provide automatic task-specific expertise. CLAUDE.md is for always-on instructions. Subagents run in isolated contexts. Hooks fire on events. MCP provides external tools. Use skills when you have knowledge that Claude should apply automatically when the topic is relevant and combine them with other features for comprehensive customization.
