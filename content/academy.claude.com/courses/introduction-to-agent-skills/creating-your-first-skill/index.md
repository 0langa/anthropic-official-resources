Lesson 2 of 6 · Introduction to agent skillsCreating your first skill

# Creating your first skill

Lesson 210 min

In this lessonBy the end, you’ll be able to

- Create a skill from scratch with proper frontmatter structure
- Test and verify that a skill loads correctly in Claude Code
- Explain how Claude Code matches incoming requests to available skills
- Describe the skill priority hierarchy (Enterprise, Personal, Project, Plugins)

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fintroduction-to-agent-skills%2Fcreating-your-first-skill)

## Creating your first skill[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

Embedded media: https://www.youtube-nocookie.com/embed/Wx6\_vjFFyHM?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Creating your first skill · 4 min

SummaryTranscript

This video walks through building a skill from scratch — a personal PR
description skill that works across all your projects. You'll see exactly
how to structure the SKILL.md file, test it, and understand how Claude Code
discovers and matches skills to your requests. The video also covers the
priority hierarchy that determines which skill wins when names conflict.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=Wx6_vjFFyHM)

## Key takeaways[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

- A skill is a **directory containing a `SKILL.md` file** with metadata (name, description) in frontmatter and instructions below
- Claude loads **only skill names and descriptions at startup**, then matches incoming requests against those descriptions using semantic matching
- You get a **confirmation prompt** before Claude loads the full skill content into context
- Priority for name conflicts: **Enterprise → Personal → Project → Plugins**
- To update a skill, edit its `SKILL.md`. To remove one, delete its directory. **Always restart Claude Code** for changes to take effect

Let's walk through creating a skill from scratch, then look at how Claude Code actually loads and matches skills behind the scenes.

## Creating a Skill[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

We'll build a personal skill that teaches Claude how to write PR descriptions in a consistent format. Since it's a personal skill, it lives in your home directory and works across all your projects.

First, create a directory for your skill inside the skills folder. The directory name should match your skill name:

`mkdir -p ~/.claude/skills/pr-description`

Then create a `SKILL.md` file inside that directory. The file has two parts separated by frontmatter dashes:

markdown

```
---
name: pr-description
description: Writes pull request descriptions. Use when creating a PR, writing a PR, or when the user asks to summarize changes for a pull request.
---

When writing a PR description:

1. Run `git diff main...HEAD` to see all changes on this branch
2. Write a description following this format:

## What
One sentence explaining what this PR does.

## Why
Brief context on why this change is needed

## Changes
- Bullet points of specific changes made
- Group related changes together
- Mention any files deleted or renamed
```

The **name** identifies your skill. The **description** tells Claude when to use it — this is the matching criteria. Everything after the second set of dashes is the instructions Claude follows when the skill is activated.

![](https://academy.claude.com/assets/media/23910a9d33eb5eb92d7e4c7852549dc9df48dfc6eb7338eb1850cf2c49e0ff55.png)

## Testing Your Skill[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

Claude Code loads skills at startup, so restart your session after creating one. You can verify it's available by checking the available skills list.

![](https://academy.claude.com/assets/media/d0528266edd1bb7977cdc3b270c851e43b1242dc0c8b83b45bb153181412358d.png)

You should see your skill listed. To test it, make some changes on a branch and say something like "write a PR description for my changes." Claude will indicate it's using the PR description skill, check your diff, and write a description following your template — same format every time.

## How Skill Matching Works[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

When Claude Code starts, it scans four locations for skills but only loads the **name and description** — not the full content. This is an important detail.

When you send a request, Claude compares your message against the descriptions of all available skills. For example, "explain what this function does" would match a skill described as "explain code with visual diagrams" because the intent overlaps.

Once a match is found, Claude asks you to confirm loading the skill. This confirmation step keeps you aware of what context Claude is pulling in. After you confirm, Claude reads the complete `SKILL.md` file and follows its instructions.

![](https://academy.claude.com/assets/media/96c5355edb53bd0b8a74489bea21a53ba1738adb785e1be23192b19e9cf92553.png)

## Skill Priority[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

If you clone a repository that has a skill with the same name as one of your personal skills, which one wins? There's a clear priority order:

1. **Enterprise** — managed settings, highest priority
2. **Personal** — your home directory (`~/.claude/skills`)
3. **Project** — the `.claude/skills` directory inside a repository
4. **Plugins** — installed plugins, lowest priority

This lets organizations enforce standards through enterprise skills while still allowing individual customization. If your company has an enterprise "code-review" skill and you create a personal "code-review" skill with the same name, the enterprise version takes precedence.

To avoid conflicts, use descriptive names. Instead of just "review," use something like "frontend-review" or "backend-review."

## Updating and Removing Skills[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

To update a skill, edit its `SKILL.md` file. To remove one, delete its directory. Restart Claude Code after any changes for them to take effect.

## Lesson reflection[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

- What's one task in your daily workflow that you could turn into a skill right now? What would the description look like?
- How might the priority hierarchy affect your team's skill management strategy? Would you rely more on personal or project-level skills?

## What's next[](https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill)

In the next lesson, you'll learn about advanced configuration options including metadata fields, tool restrictions with `allowed-tools`, and how to structure larger skills using progressive disclosure and multi-file organization.

Was this helpful?


## Transcript

So let's create a skill. This skill will teach Claude how we would like it to explain code using visual diagrams and analogies. Then we'll look at what happens under the hood when Claude uses it.

First, let's create a directory for your skill. We're going to be making a personal skill so it'll live in many projects. So it will go in your home directory. Take into consideration that we're creating a directory with the skill name inside of the skills directory.

Now create the skill. The name identifies your skill. The description tells Claude when to use it. This is the matching criteria. And then everything after the second dashes is the instructions that Claude follows.

Claude Code loads skills at startup, so restart your session. Then verify it's available. You should see PR description in the list. Now test it. Make some changes on a branch and say, write a PR description for my changes. Claude will then show you that it's using the PR description skill. After that, it'll check your diff and write a description following your template. Same format every single time.

When Claude Code starts, it scans four locations for skills. Enterprise paths, your personal Claude skills, the project's Claude skills, and installed plugins. It loads only the name and description of each skill, not the full content. This is important later. When you send a request, Claude compares it to the descriptions of your skills. Explain what this function does matches a skill described as explain code with visual diagrams, because the intent overlaps. It will then ask you to confirm loading up the skill. This confirmation step keeps you aware of what context Claude is using. After you confirm, Claude reads the complete file and follows its instructions.

Now let's say you clone a Git repository and have an overlapping skill name. Well, which one wins? Here's the priority list. The highest is Enterprise, which lives in the managed settings. Two is the personal, which lives in your root directory configuration like we're doing right now. Three is the project, which is the .claude directory inside of your repository. And the lowest is the plugins, where you store your plugins that you got online. This lets organizations enforce standards while allowing individual customization through differently named skills. If your company has an enterprise code review skill, and you create a personal code review skill, the enterprise version of that takes precedence. To avoid conflicts, use descriptive names. Instead of review, use frontend PR review or security review.

To update a skill, edit its SKILL.md file. Simple. To remove one, delete its directory. Restart Claude Code after changes for them to take effect.

Creating a skill means making a directory with a SKILL.md file containing metadata and instructions. Claude loads skill names and descriptions at startup, matches incoming requests against those descriptions, and asks for confirmation before loading the full content. Priority rules handle name conflicts. Enterprise overrides personal. Personal overrides project. Project overrides plugins. Edit the SKILL.md file to update a skill and restart Claude Code for changes to take effect.


## Video transcript

# Creating your first skill

So let's create a skill. This skill will teach Claude how we would like it to explain code using visual diagrams and analogies. Then we'll look at what happens under the hood when Claude uses it.

First, let's create a directory for your skill. We're going to be making a personal skill so it'll live in many projects. So it will go in your home directory. Take into consideration that we're creating a directory with the skill name inside of the skills directory.

Now create the skill. The name identifies your skill. The description tells Claude when to use it. This is the matching criteria. And then everything after the second dashes is the instructions that Claude follows.

Claude Code loads skills at startup, so restart your session. Then verify it's available. You should see PR description in the list. Now test it. Make some changes on a branch and say, write a PR description for my changes. Claude will then show you that it's using the PR description skill. After that, it'll check your diff and write a description following your template. Same format every single time.

When Claude Code starts, it scans four locations for skills. Enterprise paths, your personal Claude skills, the project's Claude skills, and installed plugins. It loads only the name and description of each skill, not the full content. This is important later. When you send a request, Claude compares it to the descriptions of your skills. Explain what this function does matches a skill described as explain code with visual diagrams, because the intent overlaps. It will then ask you to confirm loading up the skill. This confirmation step keeps you aware of what context Claude is using. After you confirm, Claude reads the complete file and follows its instructions.

Now let's say you clone a Git repository and have an overlapping skill name. Well, which one wins? Here's the priority list. The highest is Enterprise, which lives in the managed settings. Two is the personal, which lives in your root directory configuration like we're doing right now. Three is the project, which is the .claude directory inside of your repository. And the lowest is the plugins, where you store your plugins that you got online. This lets organizations enforce standards while allowing individual customization through differently named skills. If your company has an enterprise code review skill, and you create a personal code review skill, the enterprise version of that takes precedence. To avoid conflicts, use descriptive names. Instead of review, use frontend PR review or security review.

To update a skill, edit its SKILL.md file. Simple. To remove one, delete its directory. Restart Claude Code after changes for them to take effect.

Creating a skill means making a directory with a SKILL.md file containing metadata and instructions. Claude loads skill names and descriptions at startup, matches incoming requests against those descriptions, and asks for confirmation before loading the full content. Priority rules handle name conflicts. Enterprise overrides personal. Personal overrides project. Project overrides plugins. Edit the SKILL.md file to update a skill and restart Claude Code for changes to take effect.

