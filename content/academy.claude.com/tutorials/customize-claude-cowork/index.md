# Customize Claude

The set up that makes Claude specific to your work or team.

7 minClaude

[Open Claude](https://claude.ai/new)

![](https://academy.claude.com/assets/v1/thumbnail.light-elo1j6u1.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-bl2sp83f.png)

[Claude(opens in new tab)](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) runs full tasks across your files and tools. Customizing it once means every task after that starts with your systems connected and your team's process already in place. For the quickstart, see [Get started in three steps(opens in new tab)](https://academy.claude.com/tutorials/get-started-in-claude-cowork-in-three-steps).

## Level 1: Your context and tools[](https://academy.claude.com/tutorials/customize-claude-cowork)

### **Connectors**[](https://academy.claude.com/tutorials/customize-claude-cowork)

[Connectors(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) plug Claude into the systems where your work already is — Slack, [Salesforce(opens in new tab)](https://claude.ai/desktop/directory/salesforce-headless-360), Microsoft 365, Jira, your company's internal tools — giving it the context to understand a task and the ability to act on it. With a connector enabled, Claude can read your data *and* write back: update a ticket, draft a reply, post to a channel, save a file.

[Add a connector(opens in new tab)](https://claude.ai/desktop/customize/connectors) for each tool you want Claude to use. Authorize once; Claude can then use that tool in any conversation.



**Permissions.** For enterprise users, your admin controls which connectors are available, including Claude in Chrome, and whether each has read-only or write authorization. You can adjust which tools are enabled for a given conversation in the chat bar. [More on connector permissions.(opens in new tab)](https://support.claude.com/en/collections/15399129-connectors)

### **Instructions**[](https://academy.claude.com/tutorials/customize-claude-cowork)

Instructions are standing rules you write for how Claude should work — tone, formatting, which sources to check first, conventions to follow. You set them at two levels, and your organization may add a third:

**1. Instructions for Claude** apply to every task you run. *To edit them, open Settings and search for **instructions**. If a separate field named **Global instructions** is also listed, use that one for Cowork tasks.*

**2. Project instructions** apply only inside that Project, on top of the ones above. *Edit them on the* [*Project's*(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) *page, under Instructions.*

**3. Organization instructions:** On Team and Enterprise plans, an owner of your organization may also set org-wide guidance that applies across your conversations, tasks, and Code alongside your own instructions.

Instructions apply to every task — they're like the background rules Claude follows regardless of what you're working on. A Skill is for one specific kind of task, loads only when relevant, and can be shared with teammates. General rules go in Instructions; a repeatable process goes in a Skill.

## Level 2: Capture your process[](https://academy.claude.com/tutorials/customize-claude-cowork)

### **Skills**[](https://academy.claude.com/tutorials/customize-claude-cowork)

[Skills(opens in new tab)](https://support.claude.com/en/articles/12512176-what-are-skills) are instruction files for Claude to complete specific tasks in a repeatable way. Use skills to encode your personal best practices — as well as your team's expertise — into a repeatable set of instructions.

[To use a skill(opens in new tab)](https://support.claude.com/en/articles/12512180-use-skills-in-claude), name it directly (`/skill-name`) or describe the task in plain language. Claude can recognize when a skill applies and load it.

You can also [create a skill(opens in new tab)](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) with Claude in a prompt. Run through a workflow the way you normally would. At the end of the work, ask Claude:

Package what we just did into a skill.



Open in Claude

The built-in skill-creator captures the steps, templates, and source locations so the next run is one prompt. [Create your first skill(opens in new tab)](https://claude.ai/new?q=Walk%20me%20through%20creating%20my%20first%20Skill.%20Ask%20me%20about%20a%20task%20I%20repeat%20every%20week%2C%20then%20help%20me%20capture%20it.).

## Level 3: Bundle and share[](https://academy.claude.com/tutorials/customize-claude-cowork)

### **Plugins**[](https://academy.claude.com/tutorials/customize-claude-cowork)

[Plugins(opens in new tab)](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork) bundle skills and connectors so teammates have what they need to get started.

Diagram: an equation graphic showing Connectors plus Skills equals Plugins, with each labeled as access to systems, best practices for work, and both in a single package.

**Connectors**Access to your systems and tools

+

**Skills**Best practices for the work

=

**Plugins**Both, in a single package

#### **Example plugins**

Anthropic publishes ready-made plugins for common roles, each pairing the connectors that role relies on with skills for its core workflows:

- [**Sales**(opens in new tab)](https://github.com/anthropics/knowledge-work-plugins/tree/main/sales) — HubSpot, Close, Clay, ZoomInfo, and Fireflies (plus Slack), with skills for account research, call prep, pipeline reviews, and competitive battle cards.
- [**Product**(opens in new tab)](https://github.com/anthropics/knowledge-work-plugins/tree/main/product-management) — Atlassian (Jira and Confluence), Linear, Notion, and Slack, with skills for feedback clustering, PRD writing, sprint updates, and competitive teardowns.
- [**Legal**(opens in new tab)](https://github.com/anthropics/knowledge-work-plugins/tree/main/legal) — Box, Egnyte, DocuSign, Slack, and Atlassian, with skills for contract review, NDA triage, signature requests, and vendor checks.
- [**Operations**(opens in new tab)](https://github.com/anthropics/knowledge-work-plugins/tree/main/operations) — Jira, Asana, and Notion, with skills for vendor reviews, process documentation, change requests, and capacity planning.

[Browse more plugins(opens in new tab)](https://claude.ai/desktop/customize/plugins), or ask Claude to bundle your own connectors and skills into a custom plugin to share with your team. [Ask Claude to find plugins for your role(opens in new tab)](https://claude.ai/new?q=Show%20me%20the%20plugins%20available%20for%20my%20role%20and%20help%20me%20pick%20one%20to%20install.).

## Where to go from here[](https://academy.claude.com/tutorials/customize-claude-cowork)

Most people start with connectors and Instructions, write a skill after running the same task a few times, and share it once a teammate asks how to set theirs up the same way. Plugins are how your admin distributes the org's standard set across roles.

Once you're set up, additional features can take you further:

- **Scheduled tasks** run a prompt at a set time, with access to everything you've connected — so a Skill you've written can run every weekday at 9am without you starting it. Ask Claude in any conversation to set one up. [More on scheduled tasks(opens in new tab)](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork).
- **Artifacts** are dashboards, trackers, and comparison views that stay in the sidebar between sessions. Open one any time and ask Claude to refresh it with current data from your connectors. [More on artifacts(opens in new tab)](https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them).

For more on working with Claude:

- [Building plugins from scratch(opens in new tab)](https://academy.claude.com/tutorials/how-to-build-a-plugin-from-scratch-in-cowork) — when the ready-made plugins don't have what you need.

Was this helpful?
