Lesson 2 of 4 · Introduction to subagentsCreating a subagent

# Creating a subagent

Lesson 210 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fintroduction-to-subagents%2Fcreating-a-subagent)

Embedded media: https://www.youtube-nocookie.com/embed/arD6qEWa2Xc?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Creating a subagent

SummaryTranscript

Claude Code comes with built-in subagents, but you can also create your
own. Custom subagents specialize in specific tasks -- like reviewing code,
writing tests, or checking documentation. They are defined as markdown
files with YAML frontmatter that tell Claude when to use the subagent and
how the subagent should behave.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=arD6qEWa2Xc)

## Creating a Subagent[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

The easiest way to create a subagent is with the `/agents` slash command. This opens the main interface for managing your subagents. From there, select **Create new agent**.

You will first be asked to choose the scope of your subagent:

- **Project-level** -- available only in the current project
- **User-level** -- shared across all projects on your machine

Next, you can choose how to create it. You can write the configuration manually, but the recommended approach is to let Claude generate it for you. Just describe what you want the subagent to do, and Claude will produce a name, description, and system prompt based on your input.

![The /agents create-new-agent flow in Claude Code, with "Generate with Claude (recommended)" and "Manual configuration" as creation methods](https://academy.claude.com/assets/media/a82911f1b12df018d76a39f0b345bbfc036fd606e14b9483bedcaa0728bad8eb.png)

## Customizing Tools[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

During creation, you get the chance to customize which tools the subagent can access. The tool categories include:

- Read-only tools
- Edit tools
- Execution tools
- MCP tools
- Other tools

![The "Select tools" step of agent creation, with checkboxes for All tools, Read-only tools, Edit tools, Execution tools, MCP tools, and Other tools](https://academy.claude.com/assets/media/f9660a7b9f4877a691c9b1ebc6c941bc05ab26915887b78c170e02608d9ed0c5.png)

Think about what your subagent actually needs. A code reviewer probably does not need edit tools -- it should read and analyze code, not change it. However, you might want to keep execution tools enabled so it can more easily identify pending changes.

## Choosing a Model and Color[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

After configuring tools, you select which Claude model powers the subagent. Your options are:

- **Haiku** -- best for fast, lightweight tasks
- **Sonnet** -- a good middle ground between speed and depth
- **Opus** -- best for complex analysis
- **Inherit** -- uses whatever model your main conversation is running

Finally, you pick a color. This shows up in the UI so you can quickly tell which subagent is active. It is a small touch, but it helps when you have multiple subagents running.

![The "Choose background color" step of agent creation, showing a list of colors and a preview of the code-quality-reviewer name highlighted in cyan](https://academy.claude.com/assets/media/7683fa4f41735f99fdbe5f735f7d2e274aeef6157cf040b76f2e5e5ce7e36e0d.png)

## The Config File[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

Once creation is complete, the subagent config file is saved into your project (typically at `.claude/agents/your-agent-name.md`). Here is what a typical subagent config looks like:

markdown

```
---
name: code-quality-reviewer
description: Use this agent when you need to review recently written or modified code for quality, security, and best practice compliance.
tools: Bash, Glob, Grep, Read, WebFetch, WebSearch
model: sonnet
color: purple
---

You are an expert code reviewer specializing in quality assurance, security best practices, and
adherence to project standards. Your role is to thoroughly examine recently written or modified code
and identify issues that could impact reliability, security, maintainability, or performance.
```

Let's break down each field:

- **`name`** -- A unique identifier for the subagent. This is how you reference it, either by asking Claude directly or by typing `@agent code-quality-reviewer` in your message.
- **`description`** -- Controls when Claude decides to use the subagent. This must be a single line (use escaped newline characters `\n` if you need breaks). You can include example conversations here to help Claude understand when delegation is appropriate.
- **`tools`** -- Lists which tools the subagent can access. This matches whatever you selected during generation, but you can edit the list here at any time.
- **`model`** -- Specifies which Claude model to use: `sonnet`, `opus`, `haiku`, or `inherit`.
- **`color`** -- The UI color for identifying the subagent.

## System Prompts[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

The body of the markdown file (everything below the YAML frontmatter) is the system prompt. This is where you give the subagent its instructions: what it should focus on, how it should analyze things, and how it should report findings back to the main agent.

A well-written system prompt is the difference between a useful subagent and one that misses the point. Be specific about what the subagent should look for and how it should structure its output.

## Making Claude Use Your Subagent Automatically[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

If you want Claude to delegate tasks to the subagent without you explicitly asking, include the word **"proactively"** in the description field. For example:

yaml

```
description: Proactively suggest running this agent after major code changes...
```

You can also add example conversations to the description to help Claude understand specific scenarios where the subagent should be used. The more concrete your examples, the better Claude gets at knowing when to delegate.

## Testing Your Subagent[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

After creating your subagent, test it by making some code changes and asking Claude to review them.

![A code editor with a FastAPI project open and Claude Code in a side panel, asked to use the code-reviewer subagent to review recent changes](https://academy.claude.com/assets/media/85a257e79af4d77a19515d552f217afbeb33ff0438cc0924a0df31dcbb35c605.png)

If the subagent is not being used when you expect it to be, go back and check the description. Adding more specific examples and trigger scenarios helps Claude understand when to delegate work to your subagent.

Was this helpful?


## Transcript

Lesson 2 of 4 · Introduction to subagentsCreating a subagent

# Creating a subagent

Lesson 210 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fintroduction-to-subagents%2Fcreating-a-subagent)

Embedded media: https://www.youtube-nocookie.com/embed/arD6qEWa2Xc?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Creating a subagent

SummaryTranscript

In the previous video, we covered what subagents are and how they work. Claude Code includes built-in subagents, but you can also create your own subagents as specialized in certain tasks.

Custom subagents are markdown files with YAML front matter. These markdown files contain configuration that helps Claude understand when to use this subagent and provides directions to the subagent itself. Now the easiest way to create a subagent is with the /agents command. This panel is the main interface for managing your subagents.

Once here, select Create New Agent. You'll then be asked if you want to create a subagent for the current project or a subagent that will be shared between all of the projects on your machine. Next, you can create a subagent manually, but we recommend using Claude Code to automatically generate it for you.

Our first subagent will be a code reviewer. I'll ask Claude to make a subagent that reviews code quality and security issues. Claude will use your input to generate a name, description, and system prompt for the subagent. We'll see those in a moment, but before we do, we get the opportunity to customize the tools that this subagent has access to.

Now given that our subagent is only responsible for reviewing code, you might decide to disallow tools for editing. But I'll leave an execution to allow the subagent to more easily identify pending changes. Next you'll be prompted to select the model that powers the subagent. And finally, a color. This color is used in the UI to help you better identify the subagent. And it also just adds a little bit of personal flair.

Now at the summary window, we see that the subagent config file will be saved into my current project at this path. Now let's open up that file to get a better idea of what's going on.

The name field is a unique identifier. This is how you reference the subagent either by asking Claude directly or using @agent code quality reviewer in your message. The description controls when Claude decides to use the subagent. The description must be on a single line. Notice that there are escaped new line characters in there. If you want Claude to use the subagent automatically more often, add in the word proactively to the description. You can also add example conversations to help Claude understand when it should be using the subagent.

The tools field lists which tools the subagent can access. The list of tools will match the tools we granted access to during the agent generation. But you can further edit the list of tools in this file if you want.

The model field specifies which Claude model to use. Sonnet, Opus, Haiku, or Inherit. Use Haiku for fast tasks. Opus for complex analysis. And Sonnet if you need something between the two. Inherit will use the same model as your main conversation.

The body of the file contains the system prompt that is given to the subagent. The system prompt will provide guidance to the subagent, helping it understand how to complete its task and how it should return information back to the main agent.

Now, for the fun part, after creating your subagent, test it by making some code changes and asking Claude to review them. If the subagent isn't being used when you expect, check your description. Adding more specific examples helps Claude understand when to delegate.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=arD6qEWa2Xc)

## Creating a Subagent[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

The easiest way to create a subagent is with the `/agents` slash command. This opens the main interface for managing your subagents. From there, select **Create new agent**.

You will first be asked to choose the scope of your subagent:

- **Project-level** -- available only in the current project
- **User-level** -- shared across all projects on your machine

Next, you can choose how to create it. You can write the configuration manually, but the recommended approach is to let Claude generate it for you. Just describe what you want the subagent to do, and Claude will produce a name, description, and system prompt based on your input.

![The /agents create-new-agent flow in Claude Code, with "Generate with Claude (recommended)" and "Manual configuration" as creation methods](https://academy.claude.com/assets/media/a82911f1b12df018d76a39f0b345bbfc036fd606e14b9483bedcaa0728bad8eb.png)

## Customizing Tools[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

During creation, you get the chance to customize which tools the subagent can access. The tool categories include:

- Read-only tools
- Edit tools
- Execution tools
- MCP tools
- Other tools

![The "Select tools" step of agent creation, with checkboxes for All tools, Read-only tools, Edit tools, Execution tools, MCP tools, and Other tools](https://academy.claude.com/assets/media/f9660a7b9f4877a691c9b1ebc6c941bc05ab26915887b78c170e02608d9ed0c5.png)

Think about what your subagent actually needs. A code reviewer probably does not need edit tools -- it should read and analyze code, not change it. However, you might want to keep execution tools enabled so it can more easily identify pending changes.

## Choosing a Model and Color[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

After configuring tools, you select which Claude model powers the subagent. Your options are:

- **Haiku** -- best for fast, lightweight tasks
- **Sonnet** -- a good middle ground between speed and depth
- **Opus** -- best for complex analysis
- **Inherit** -- uses whatever model your main conversation is running

Finally, you pick a color. This shows up in the UI so you can quickly tell which subagent is active. It is a small touch, but it helps when you have multiple subagents running.

![The "Choose background color" step of agent creation, showing a list of colors and a preview of the code-quality-reviewer name highlighted in cyan](https://academy.claude.com/assets/media/7683fa4f41735f99fdbe5f735f7d2e274aeef6157cf040b76f2e5e5ce7e36e0d.png)

## The Config File[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

Once creation is complete, the subagent config file is saved into your project (typically at `.claude/agents/your-agent-name.md`). Here is what a typical subagent config looks like:

markdown

```
---
name: code-quality-reviewer
description: Use this agent when you need to review recently written or modified code for quality, security, and best practice compliance.
tools: Bash, Glob, Grep, Read, WebFetch, WebSearch
model: sonnet
color: purple
---

You are an expert code reviewer specializing in quality assurance, security best practices, and
adherence to project standards. Your role is to thoroughly examine recently written or modified code
and identify issues that could impact reliability, security, maintainability, or performance.
```

Let's break down each field:

- **`name`** -- A unique identifier for the subagent. This is how you reference it, either by asking Claude directly or by typing `@agent code-quality-reviewer` in your message.
- **`description`** -- Controls when Claude decides to use the subagent. This must be a single line (use escaped newline characters `\n` if you need breaks). You can include example conversations here to help Claude understand when delegation is appropriate.
- **`tools`** -- Lists which tools the subagent can access. This matches whatever you selected during generation, but you can edit the list here at any time.
- **`model`** -- Specifies which Claude model to use: `sonnet`, `opus`, `haiku`, or `inherit`.
- **`color`** -- The UI color for identifying the subagent.

## System Prompts[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

The body of the markdown file (everything below the YAML frontmatter) is the system prompt. This is where you give the subagent its instructions: what it should focus on, how it should analyze things, and how it should report findings back to the main agent.

A well-written system prompt is the difference between a useful subagent and one that misses the point. Be specific about what the subagent should look for and how it should structure its output.

## Making Claude Use Your Subagent Automatically[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

If you want Claude to delegate tasks to the subagent without you explicitly asking, include the word **"proactively"** in the description field. For example:

yaml

```
description: Proactively suggest running this agent after major code changes...
```

You can also add example conversations to the description to help Claude understand specific scenarios where the subagent should be used. The more concrete your examples, the better Claude gets at knowing when to delegate.

## Testing Your Subagent[](https://academy.claude.com/courses/introduction-to-subagents/creating-a-subagent)

After creating your subagent, test it by making some code changes and asking Claude to review them.

![A code editor with a FastAPI project open and Claude Code in a side panel, asked to use the code-reviewer subagent to review recent changes](https://academy.claude.com/assets/media/85a257e79af4d77a19515d552f217afbeb33ff0438cc0924a0df31dcbb35c605.png)

If the subagent is not being used when you expect it to be, go back and check the description. Adding more specific examples and trigger scenarios helps Claude understand when to delegate work to your subagent.

Was this helpful?
