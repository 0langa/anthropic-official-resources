Lesson 5 of 6 · Introduction to agent skillsSharing skills

# Sharing skills

Lesson 515 min

In this lessonBy the end, you’ll be able to

- Share skills with your team by committing them to a Git repository
- Distribute skills across projects through plugins and marketplaces
- Deploy skills organization-wide using enterprise managed settings
- Configure custom subagents to use specific skills

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fintroduction-to-agent-skills%2Fsharing-skills)

## Sharing skills[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

Embedded media: https://www.youtube-nocookie.com/embed/OCBi3eScNLk?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Sharing skills · 4 min

SummaryTranscript

Skills become much more valuable when they're shared across a team or
organization. This video covers the three main distribution methods —
repository commits, plugins, and enterprise managed settings — and explains
how to configure custom subagents to use skills. You'll learn which
approach fits which scenario and how to handle an important gotcha:
subagents don't inherit skills automatically.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=OCBi3eScNLk)

## Key takeaways[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

- **Project skills** in `.claude/skills` are shared automatically through Git — anyone who clones the repo gets them
- **Plugins** let you distribute skills across repositories via marketplaces for broader community use
- **Enterprise managed settings** deploy skills organization-wide with the highest priority, ideal for mandatory standards and compliance
- **Subagents don't automatically see your skills** — you must explicitly list skills in a custom agent's frontmatter `skills` field
- Built-in agents (Explorer, Plan, Verify) **can't access skills at all** — only custom subagents defined in `.claude/agents` can

Skills become much more valuable when they're shared. A PR review skill that only you use is helpful, but that same skill shared across your entire team standardizes code review and creates a consistent experience across your organization. Let's look at the different ways you can distribute skills.

## Committing Skills to Your Repository[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

The simplest sharing method is committing skills directly to your repository. Place them in `.claude/skills`, and anyone who clones the repo gets those skills automatically — no extra installation needed.

When you push updates, everyone gets them on the next pull. This approach works well for:

- Team coding standards
- Project-specific workflows
- Skills that reference your codebase structure

The `.claude` directory contains your agents, hooks, skills, and settings — all version-controlled and shared with the team through normal Git workflows.

## Distributing Skills Through Plugins[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

Plugins are a way to extend Claude Code with custom functionality designed to be shared across teams and projects. In your plugin project, create a `skills` directory that follows a similar file structure to the `.claude` directory — each skill gets its own folder with a `SKILL.md` file inside.

After you distribute your plugin to a marketplace, other users can discover and install it into Claude Code for themselves.

![](https://academy.claude.com/assets/media/de5659fdb86772a1528fe14df72a785694c848f4e93e5047ff4ce0f448fe874f.png)

This approach is best when your skills aren't too project-specific and can be useful to community members beyond your immediate team.

## Enterprise Deployment Through Managed Settings[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

Administrators can deploy skills organization-wide through managed settings. Enterprise skills take the highest priority — they override personal, project, and plugin skills with the same name.

![](https://academy.claude.com/assets/media/2373313fe9e584333d54a9b2fced74895f23601919dfee21fc676e9f61ab2d74.png)

The managed settings file supports features like `strictKnownMarketplaces` to control where plugins can be installed from:

json

```
"strictKnownMarketplaces": [
  {
    "source": "github",
    "repo": "acme-corp/approved-plugins"
  },
  {
    "source": "npm",
    "package": "@acme-corp/compliance-plugins"
  }
]
```

This is the right choice for mandatory standards, security requirements, compliance workflows, and coding practices that *must* be consistent across the organization. The keyword here is "must."

## Skills and Subagents[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

Here's something that surprises people: subagents don't automatically see your skills. When you delegate a task to a subagent, it starts with a fresh, clean context.

There are important distinctions to understand:

- **Built-in agents** (like Explorer, Plan, and Verify) can't access skills at all
- **Custom subagents** you define *can* use skills, but only when you explicitly list them
- Skills are loaded when the subagent starts, not on demand like in the main conversation

To create a custom subagent with skills, add an agent markdown file in `.claude/agents`. You can use the `/agents` command in Claude Code to create one interactively:

![](https://academy.claude.com/assets/media/dc6b8b0e1a6076788a757058dc8e5af5ef8de682b5e2102d7ff72e6c774d845e.png)

The generated agent file includes a `skills` field that lists which skills to load. Here's what the frontmatter looks like:

yaml

```
---
name: frontend-security-accessibility-reviewer
description: "Use this agent when you need to review frontend code for accessibility..."
tools: Bash, Glob, Grep, Read, WebFetch, WebSearch, Skill...
model: sonnet
color: blue
skills: accessibility-audit, performance-check
---
```

When you delegate to this subagent, it has both skills loaded and applies them to every review. First make sure the skills exist in your `.claude/skills` directory, then either create a new subagent or add the `skills` field to an existing agent's markdown file.

This pattern works really well when:

- You want isolated task delegation with specific expertise
- Different subagents need different skills (frontend reviewer vs. backend reviewer)
- You want to enforce standards in delegated work without relying on prompts

## Lesson reflection[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

- Which sharing method (repository, plugin, enterprise) makes the most sense for the skills you've been thinking about building?
- Do you have workflows where custom subagents with specific skills would improve consistency in delegated work?

## What's next[](https://academy.claude.com/courses/introduction-to-agent-skills/sharing-skills)

In the final lesson, you'll learn how to troubleshoot common skill issues — from skills that don't trigger, to priority conflicts, to runtime errors — with a practical checklist you can reference anytime.

Was this helpful?


## Transcript

Skills become more valuable when shared. A PR review skill that only you use is helpful. The same skill shared across your team standardizes code review and provides a consistent experience amongst your organization, which is much better. Here are ways you can share your skills.

Now, the simplest sharing method is committing skills to your repository. Place them in .claude/skills. Anyone who clones a repository gets these skills automatically. No extra installation. It's just what you're doing already. When you push updates, everyone gets them on the next pull. This works well for team coding standards, project-specific workflows, skills that reference your codebase structure.

Another way you can distribute your skills is through plugins. Think of plugins as ways to extend Claude Code with custom functionality, but designed to be shared across teams and projects. In your plugin project, create a directory called skills. This will then follow a similar file structure to the .claude directory in our project with the name of the skill with a SKILL.md file. And after you distribute your plugin to a marketplace, other users can download it into Claude Code for themselves to use. This is best if your skills have functionality that isn't too project-specific and can be used by community members.

Administrators can deploy skills organization-wide through managed settings. Enterprise skills take highest priority. Like we discussed before, they override personal project and plugin skills with the same name. This is for mandatory standards, security requirements, compliance workflows, coding practices that must be consistent across the organization. Keyword must.

Here's something that surprises people. Subagents don't automatically see your skills. Yeah. When you delegate a task to a subagent, it starts with a fresh, clean context. Built-in agents like the Explore, Plan, and Verify can't access skills at all. Only custom subagents you define can use them, and only when you explicitly list them.

To create a custom subagent with skills, add an agent.md file in .claude/agents. The skills field lists which skills to load. These skills are loaded when the subagent starts, not on demand like in the main conversation. So take that into consideration. First ensure these skills exist. Okay, it exists. Then create the subagent using the Claude Code subagent creator. If you have a subagent that you want to add these skills to already, just go to the existing agent.md file. Then after that, create the skills field and add your skills. When you delegate to the subagent, it has both skills loaded and applies them to every single review.

Now, this pattern works really well when you want isolated task delegation with specific expertise. Different subagents need different skills, front-end reviewer versus back-end reviewer. You want to enforce standards in delegated work without relying on prompts. Only list skills that are always relevant to the subagent's purpose.

Share skills through project directories for team access, plugins for cross-repository distribution, or enterprise deployment for organization-wide standards. Subagents don't inherit skills automatically, so list them explicitly in the subagent's skills field. Built-in agents can't access skills. Only custom subagents can in your .claude/agents. Skills load when the subagent starts, so only list skills that are always relevant to its purpose.
