![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d225588ad176f7c4aafd_abc884c723daea810d2e986455358281a2f94102-1000x1000.svg)

# Agent Harness Design: 3 Patterns for Harnessing Claude's Intelligence

*Building applications that balance intelligence, latency, and cost.*

- Category

  [Agents](https://claude.com/blog/category/agents)
- Product

  [Claude Platform](https://claude.com/platform/api)
- Date

  April 2, 2026
- Reading time

  5

  min
- Share

  [Copy link](https://claude.com/blog/harnessing-claudes-intelligence)

  https://claude.com/blog/harnessing-claudes-intelligence

One of Anthropic’s co-founders, Chris Olah, [says](https://www.darioamodei.com/post/the-urgency-of-interpretability) that generative AI systems like Claude are grown more than they are built. Researchers set the conditions to direct growth, but the exact structure or capabilities that emerge aren’t always predictable.

This creates a challenge for building with Claude: [agent harnesses encode assumptions](https://www.anthropic.com/engineering/harness-design-long-running-apps) about what Claude can’t do on its own, but those assumptions grow stale as Claude gets more capable.

An agent harness is the software scaffolding around a model: the loop, tools, context management, and guardrails that turn raw intelligence into a working agent. [Agent harness design](https://claude.com/blog/harnessing-claudes-intelligence) is the practice of deciding what belongs in that scaffolding and, as models improve, what you can take out.

In this article, we share three patterns that teams should use when building applications that keep pace with Claude’s evolving intelligence while balancing latency and cost: use what it already knows, ask what you can stop doing, and carefully set boundaries with the agent harness.

### **1. Lean on the model, not the harness: use what Claude knows**

We suggest building applications using tools that Claude understands well.

In late 2024, Claude 3.5 Sonnet reached 49% on SWE-bench Verified—then [state of the art](https://www.anthropic.com/engineering/swe-bench-sonnet)—with only a [bash tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool) and a [text editor tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/text-editor-tool) for viewing, creating, and editing files. Claude Code is grounded in these same tools. [Bash](https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool) wasn’t designed for building agents, but it's a tool that Claude *knows* how to use and gets better at using over time.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69cd8747994e07042a959518_image2.png)

*Scores on the SWE-bench Verified benchmark across Claude model versions highlight its evolution.*

We've seen Claude compose these general tools into patterns that solve different problems. For instance, [Agent Skills](https://agentskills.io/home), [programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling), and [the memory tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) are all built from the bash and text editor tools.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69cd8835161641fba4aa1def_image4.png)

*Programmatic tool calling, skills, and memory are compositions of our bash and text editor tools.*

### **2. Strip your agent harness down: ask what you can stop doing**

[Agent harnesses encode assumptions](https://www.anthropic.com/engineering/harness-design-long-running-apps) about what Claude can’t do on its own. As Claude gets more capable, those assumptions should be tested.

**Let Claude orchestrate its own actions**

A common assumption is that every tool result should flow back through Claude’s [context window](https://platform.claude.com/docs/en/build-with-claude/context-windows) to inform the next action. Processing tool results in tokens can be slow, costly, and unnecessary if it only needs to be passed to the next tool or if Claude only cares about a small slice of the output.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69cd889c76e6e17dbe4ff4b9_image7.png)

*Claude calls tools, which are executed in an environment.*

Consider reading a large table to reason about a single column: the whole table lands in context and Claude pays the token cost for every row it doesn't need. It’s possible to tackle this in tool design, using [hard-coded filters](https://platform.claude.com/docs/en/about-claude/models/migration-guide). But this does not address the fact that the agent harness is making an *orchestration decision* that Claude is better positioned to make.

Giving Claude a [code execution](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool) tool (e.g., [bash tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool) or [language-specific REPL](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)) addresses this: it allows Claude to write code to express tool calls and the logic between them. Rather than the harness deciding that every tool call result is processed as tokens, Claude decides what results to pass through, filter, or pipe into the next call without touching the context window. Only the output of code execution reaches Claude’s context window.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69cd891f5b4d2dea57b008d1_image6.png)

*Claude can write code that expresses tool calls and the logic between them.*

The orchestration decision moves from the harness to the model. Since code is a general way for Claude to orchestrate actions, a strong coding model is also a strong *general* agent. Claude shows strong performance [on non-coding evals](https://claude.com/blog/improved-web-search-with-dynamic-filtering) using this pattern: on BrowseComp, a [benchmark](https://arxiv.org/abs/2504.12516) that tests the ability of agents to browse the web, giving Opus 4.6 the ability to filter its own tool outputs brought accuracy from 45.3% to 61.6%.

**Let Claude manage its own context**

Task-specific context steers Claude’s use of general tools like bash and the text editor tool. A common assumption is that [system prompts](https://platform.claude.com/docs/en/release-notes/system-prompts) should be hand-crafted with task-specific instructions. The problem is that pre-loading prompts with instructions does not scale across many tasks: every token added depletes [Claude’s attention budget](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) and it is wasteful to pre-load context with rarely used instructions.

Giving Claude the ability to access [skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) addresses this: the YAML frontmatter of each skill is a short description pre-loaded into the context window, providing an overview of the skill contents. The full skill can be progressively disclosed by Claude calling a read file tool if a task calls for it.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69cd895f7f04456cccf7b7e0_image3.png)

*Claude can use skills to progressively disclose task-relevant context.*

While skills give Claude the freedom to assemble its own context window, [context editing](https://platform.claude.com/docs/en/build-with-claude/context-editing) is the inverse, providing a way to selectively remove context that’s become stale or irrelevant, such as old tool results or thinking blocks.

With [subagents](https://code.claude.com/docs/en/sub-agents), Claude is getting better at knowing when to fork into a fresh context window to isolate work on a specific task. [With Opus 4.6](https://www-cdn.anthropic.com/0dd865075ad3132672ee0ab40b05a53f14cf5288.pdf), the ability to spawn subagents improved results on BrowseComp by 2.8% over the best single-agent runs.

**Let Claude persist its own context**

Long-running agents can exceed the limit of a single [context window](https://platform.claude.com/docs/en/build-with-claude/context-windows). A common assumption is that memory systems should rely on retrieval infrastructure around the model. Much of our work has focused on giving Claude simple ways to *choose for itself* what content to persist.

For example, [compaction](https://platform.claude.com/docs/en/build-with-claude/compaction) lets Claude summarize its past context in order to maintain continuity on long-horizon tasks. Over several releases, Claude has gotten better at choosing what to remember. [On BrowseComp](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf), for example, an agentic search task, Sonnet 4.5 stayed flat at 43% regardless of the compaction budget we gave it. Yet Opus 4.5 scaled to 68% and Opus 4.6 reached 84% with the same setup.

A [memory folder](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) is another approach, allowing Claude to write context to files and later read them as needed. We’ve seen Claude use this for agentic search. On BrowseComp-Plus, giving Sonnet 4.5 a memory folder [lifted accuracy from 60.4% to 67.2%](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf).

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69cd89bfccdc7c50beb40e0d_image5.png)

*Claude can persist context to a memory folder.*

[Long-horizon games](https://www.youtube.com/watch?v=CXhYDOvgpuU), such as Pokémon, are an example of Claude’s improved ability to use a memory folder. Sonnet 3.5 treated memory as a transcript, writing down what non-player characters (NPCs) said rather than what mattered. After 14,000 steps it had 31 files—including two near-duplicates about caterpillar Pokémon—and was still in the second town:

```
caterpie_weedle_info:
- Caterpie and Weedle are both caterpillar Pokémon.
- Caterpie is a caterpillar Pokémon that does not have poison.
- Weedle is a caterpillar Pokémon that does have poison.
- This information is crucial for future encounters and battles.
- If our Pokémon get poisoned, we should seek healing at a Pokémon
  Center as soon as possible.
```

Later models wrote tactical notes. Opus 4.6, at the same step count, had 10 files organized into directories, three gym badges, and a learnings file distilled from its own failures:

```
/gameplay/learnings.md:
- Bellsprout Sleep+Wrap combo: KO FAST with BITE before Sleep
  Powder lands. Don't let it set up!
- Gen 1 Bag Limit: 20 items max. Toss unneeded TMs before dungeons.
- Spin tile mazes: Different entry y-positions lead to DIFFERENT
  destinations. Try ALL entries and chain through multiple pockets.
- B1F y=16 wall CONFIRMED SOLID at ALL x=9-28 (step 14557)
```

### **3. Set boundaries carefully in your harness design**

Agent harnesses provide structure around Claude to enforce UX, cost, or security.

**Design context to maximize cache hits**

The [Messages API](https://platform.claude.com/docs/en/build-with-claude/working-with-messages) is stateless. Claude cannot see the conversation history of prior turns. This means that the agent harness needs to package new context alongside all past actions, tool descriptions, and instructions for Claude at each turn.

Prompts can be cached based on set [breakpoints](https://platform.claude.com/docs/en/build-with-claude/prompt-caching). In other words, the Claude API writes context up until a breakpoint to the cache and checks whether the context matches any prior cache entries.

Since cached tokens [are 10% the cost](https://platform.claude.com/docs/en/about-claude/pricing) of base input tokens, here are a few principles in the agent harness help maximize cache hits:

<table>
<thead>
<tr>
<th scope="col">Principle</th>
<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Static first, dynamic last</td>
<td>Order requests so that stable content (system prompt, tools) come first.</td>
</tr>
<tr>
<td>Messages for updates</td>
<td>Append a <code>&lt;system-reminder&gt;</code> in messages instead of editing the prompt.</td>
</tr>
<tr>
<td>Don't change models</td>
<td>Avoid switching models during a session. Caches are model-specific; switching breaks them. If you need a cheaper model, use a subagent.</td>
</tr>
<tr>
<td>Carefully manage tools</td>
<td>Tools sit in the cached prefix. Adding or removing one invalidates it. For dynamic discovery, use <strong>tool search</strong>, which appends without breaking cache.</td>
</tr>
<tr>
<td>Update breakpoints</td>
<td>For multi-turn applications (e.g., agents), move the breakpoint to the latest message in order to keep the cache up-to-date. Use <strong>auto-caching</strong> for this.</td>
</tr>
</tbody>
</table>

**Use declarative tools for UX, observability, or security boundaries**

Claude doesn't necessarily know an application's security boundary or UX surface. Claude emits tool calls, which are handled by the harness. A bash tool gives Claude broad programmatic leverage to perform actions, but it gives the harness only a command string—the same shape for every action. Promoting actions to dedicated tools gives the harness an action-specific hook with typed arguments it can intercept, gate, render, or audit.

Actions that require a security boundary are natural candidates for dedicated tools. Reversibility is often a good criterion, and hard-to-reverse actions such as external API calls can be gated by user confirmation. Write tools like `edit` can include a staleness check so Claude doesn't overwrite a file that changed since it was last read.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69cd8ebecb4a73207c8b2ffc_image1.png)

*Dedicated tools can be used for actions based upon security, UX, or observability considerations.*

Tools are also useful when an action needs to be presented to a user. For example, they can be rendered as a modal to display a question clearly to the user, give the user multiple options, or block the agent loop until a user provides feedback.

Finally, tools are useful for observability. When the action is a typed tool, the harness gets structured arguments it can log, trace, and replay.

The decision to promote actions to tools should be continually re-evaluated. For example, Claude Code's [auto-mode](https://www.anthropic.com/engineering/claude-code-auto-mode) (in research mode at the time of publication) provides a security boundary around the bash tool: it has a second Claude read the command string and judge whether it's safe. This pattern can *limit* the need for dedicated tools, and should only be used for tasks where users trust the general direction. Dedicated tools can still earn their place for certain high-stakes actions.

### The future of agent harness design

The frontier of Claude’s intelligence is always changing. Assumptions about what Claude can’t do need to be re-tested with each step change in its capability.

We see this pattern repeat itself. In an [agent we built for long-horizon tasks](https://www.anthropic.com/engineering/harness-design-long-running-apps), Sonnet 4.5 would wrap up prematurely as it sensed the context limit approaching. We added resets to clear the context window in order to address this "context anxiety." With Opus 4.5, the behavior was gone. The context resets we built to compensate had become dead weight in the agent harness.

Removing this dead weight is important [because it can bottleneck](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) Claude’s performance. Over time, the structure or boundaries in our applications should be pruned based the question: *what can I stop doing?*

*To use all tools and patterns discussed here, check out* [*our claude-api skill*](https://github.com/anthropics/skills/tree/main/skills/claude-api)*.*

### Acknowledgements

Written by Lance Martin, member of technical staff on the Claude Platform team. Special thanks to Thariq Shihipar, Barry Zhang, Mike Lambert, David Hershey, and Daliang Li for helpful discussion on the topics covered. Thanks to Lydia Hallie, Lexi Ross, Katelyn Lesse, Andy Schumeister, Rebecca Hiscott, Jake Eaton, Pedram Navid, and Molly Vorwerck for their editorial review and feedback.

No items found.

[Prev](https://claude.com/blog/harnessing-claudes-intelligence)Prev

0/5

[Next](https://claude.com/blog/harnessing-claudes-intelligence)Next

eBook

##

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

Embedded media:

FAQ

No items found.

## Related posts

Explore more product news and best practices for teams building with Claude.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d225485fe31f1ed2d9a1_db28a79c9f4492b8471009d4c20e900f234ece48-1000x1000.svg)

Aug 26, 2026

### How Warp builds self-improving agents on Claude

Agents

[How Warp builds self-improving agents on Claude](https://claude.com/blog/harnessing-claudes-intelligence)How Warp builds self-improving agents on Claude

[How Warp builds self-improving agents on Claude](https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude)How Warp builds self-improving agents on Claude

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d2238ce207f9b2011d3f_e44a6b53398f189b9fd0d4f70516db614ac84db3-1000x1000.svg)

Aug 13, 2026

### Self-service data analytics in Slack: how Anthropic deploys Claude Tag for ad-hoc questions

Agents

[Self-service data analytics in Slack: how Anthropic deploys Claude Tag for ad-hoc questions](https://claude.com/blog/harnessing-claudes-intelligence)Self-service data analytics in Slack: how Anthropic deploys Claude Tag for ad-hoc questions

[Self-service data analytics in Slack: how Anthropic deploys Claude Tag for ad-hoc questions](https://claude.com/blog/self-service-data-analytics-in-slack-how-anthropic-deploys-claude-tag-for-ad-hoc-questions)Self-service data analytics in Slack: how Anthropic deploys Claude Tag for ad-hoc questions

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6a0112e18cdd7f0b92d19e40_Hand-BuildingBricks.svg)

Jul 24, 2026

### The new rules of context engineering for Claude 5 generation models

Claude Code

[The new rules of context engineering for Claude 5 generation models](https://claude.com/blog/harnessing-claudes-intelligence) The new rules of context engineering for Claude 5 generation models

[The new rules of context engineering for Claude 5 generation models](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models) The new rules of context engineering for Claude 5 generation models

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/692f76874e94e489958af8ba_Object-CodeMagnifier.svg)

Aug 20, 2026

### How monday.com transformed its platform into an agent-first product where humans and agents collaborate

Agents

[How monday.com transformed its platform into an agent-first product where humans and agents collaborate](https://claude.com/blog/harnessing-claudes-intelligence)How monday.com transformed its platform into an agent-first product where humans and agents collaborate

[How monday.com transformed its platform into an agent-first product where humans and agents collaborate](https://claude.com/blog/how-monday-com-transformed-its-platform-into-an-agent-first-product-where-humans-and-agents-collaborate)How monday.com transformed its platform into an agent-first product where humans and agents collaborate

## Transform how your organization operates with Claude

See pricing

[See pricing](https://claude.com/pricing)See pricing

Contact sales

[Contact sales](https://claude.com/contact-sales)Contact sales

Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

[Subscribe](https://claude.com/blog/harnessing-claudes-intelligence)Subscribe

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.

Thank you! You’re subscribed.

Sorry, there was a problem with your submission, please try again later.
