# Getting good at Claude: A research-backed curriculum

What research shows about how people get better at working with Claude, and a curriculum model you can adapt for your organization.

6 min

![](https://academy.claude.com/assets/v1/thumbnail.light-fibnfxv4.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-ov8b09q9.png)

When we launched the [AI Fluency Index(opens in new tab)](https://www.anthropic.com/research/AI-fluency-index), we wanted to understand how people get better at working with Claude over time. The early data came from Chat, and it told a consistent story: fluency develops along two tracks that behave very differently. Some skills grow naturally with practice, and others require deliberate, repeated teaching. That finding shaped how we think about onboarding and in-product learning, and it gave organizations a starting point for building their own Claude training.

Since then, we've extended the Index to Claude Code and Claude Cowork, bringing the total to over 50,000 conversations across the 11 behavioral AI fluency indicators. Fluency has a shared structure across all three surfaces, but each product has its own entry point. What "getting good at Claude" looks like depends on which Claude you're using, and if you're responsible for helping a team build fluency, that distinction matters for what you teach first.

![](https://academy.claude.com/assets/media/8ddecb99082f17f100033c0b2d7a5e5817fca1d2c66fe08fe9c64f753c1fb51b.png)

This piece walks through what we found and offers a simple curriculum model you can adapt for your organization.

## Each product has a signature move[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

Each Claude surface rewards a different behavior at the start. We call this the signature move: the gateway behavior that, when present, lifts the other fluency indicators most reliably.

In Chat, the signature move is **iterating**. Users who refine through follow-up turns show stronger fluency on every other dimension we measure, and users who send one message and leave show almost no critical evaluation at all. Iteration creates the space where other skills develop.

In Claude Code and Claude Cowork, the signature move is **clarifying the goal**. Both agentic surfaces reward users who state what they want clearly before Claude starts working. Users who clarify the goal also specify format more often, set interaction style more deliberately, and break down tasks more effectively. Goal clarity clusters with the full range of Description behaviors in a way that iteration doesn't on these surfaces.

For anyone building Claude training for their organization, the implication is that onboarding should teach the signature move first. A Chat curriculum that doesn't establish iteration early will struggle to build anything on top of it. A Claude Code or Claude Cowork curriculum that doesn't establish goal clarity will produce users who hand off vague requests and then wonder why the output missed the mark.

## The Description spectrum develops with practice[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

After the signature move, learners advance along what we call the Description spectrum: the range of options available for shaping what Claude gives you. The spectrum is organized by durability, or how long the feature affects your interactions with Claude. At the basic end, shaping happens in the moment and affects one response. You iterate, you add context, you upload a file. At the advanced end, shaping happens in configuration and affects every response that follows without as much effort from you. You set up a Project, you write a CLAUDE.md, you schedule a workflow.

The encouraging finding here is that Description skills appear to grow organically and non-linearly with time and exposure. Users who've been around longer provide examples more often, set interaction style more deliberately, and communicate tone expectations more clearly. People who keep using Claude find their way to these skills on their own, so if your training time is limited, simply exposing people to different types of Description they can practice with Claude should prove fruitful.

## The Discernment spiral has to be taught[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

Discernment, the set of behaviors around evaluating what Claude gives you back, develops very differently. It doesn't grow with tenure. It doesn't transfer from feature familiarity.

Part of this is explained by a shift in how verification happens. When Claude edits a file or produces a report, users can see what it did. They review the diff, run the test, skim the output. This observational verification is real, and our indicators don't fully capture it because you don't type "is this right?" when you can simply look. But observation only catches errors you can see. It misses wrong assumptions, missing context, and plausible-but-false claims. A diff that compiles can still encode the wrong approach, and a report that reads cleanly can still cite the wrong source.

Also, as tasks that were formerly done by early career employees are increasingly automated by Claude, intentional programs to teach people “what good looks like” will be required.

If your training time is limited, Discernment is where to concentrate it.

## A simple curriculum model[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

Put simply, the teaching sequence is:

1. **Teach the signature move first**
2. **Advance along the Description spectrum**
3. **Revisit Discernment at every step**

Every product learning experience, whether it's a formal module or a quick team session, should reinforce the product's signature move, introduce learner-relevant features, and close with a Discernment check. Building in a "now question it" step is what keeps critical evaluation in the loop.

The tables below map this model to each product. Use them as a starting point for your own curriculum, adapting the features and checks to match what your team actually uses.

### Chat[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

Signature move: **iterate**. Refining through follow-up turns.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Durability level</th><th class="border-b border-strong p-sm text-left font-medium">Features</th><th class="border-b border-strong p-sm text-left font-medium">Teaching approach</th><th class="border-b border-strong p-sm text-left font-medium">Discernment check</th></tr></thead><tbody><tr><td class="border-b p-sm">Basic</td><td class="border-b p-sm">Iteration, model selection, file uploads, web search</td><td class="border-b p-sm">Show, then let people explore with their own tasks</td><td class="border-b p-sm">Is this response actually usable, or does it need another turn?</td></tr><tr><td class="border-b p-sm">Middle</td><td class="border-b p-sm">Artifacts, extended thinking, connectors</td><td class="border-b p-sm">Pair creation with format specification; position thinking as "when you want Claude to think harder"</td><td class="border-b p-sm">Read the thinking. Does the reasoning hold, or did Claude just sound confident?</td></tr><tr><td class="border-b p-sm">Lasting</td><td class="border-b p-sm">Projects, custom instructions, memory</td><td class="border-b p-sm">Show how a well-set-up Project changes every conversation in it</td><td class="border-b p-sm">Is your Project feeding Claude the right context, or just more context?</td></tr></tbody></table>

### Claude Code[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

Signature move: **clarify the goal**. Stating what you want before Claude starts running.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Durability level</th><th class="border-b border-strong p-sm text-left font-medium">Features</th><th class="border-b border-strong p-sm text-left font-medium">Teaching approach</th><th class="border-b border-strong p-sm text-left font-medium">Discernment check</th></tr></thead><tbody><tr><td class="border-b p-sm">Basic</td><td class="border-b p-sm">Prompt clarity, file references, model selection</td><td class="border-b p-sm">One clear goal, one agentic run, then review</td><td class="border-b p-sm">Before you accept the diff, ask Claude what it assumed</td></tr><tr><td class="border-b p-sm">Middle</td><td class="border-b p-sm">Skills, slash commands, MCPs</td><td class="border-b p-sm">Shape a repeatable capability</td><td class="border-b p-sm">Test the capability on a case it might get wrong</td></tr><tr><td class="border-b p-sm">Lasting</td><td class="border-b p-sm">CLAUDE.md, hooks, subagents</td><td class="border-b p-sm">Shape every session in the repo</td><td class="border-b p-sm">Audit your configuration. Is Claude using it the way you expect?</td></tr></tbody></table>

### Claude Cowork[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

Signature move: **clarify the goal**. Writing a brief that names what you need before Claude executes.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Durability level</th><th class="border-b border-strong p-sm text-left font-medium">Features</th><th class="border-b border-strong p-sm text-left font-medium">Teaching approach</th><th class="border-b border-strong p-sm text-left font-medium">Discernment check</th></tr></thead><tbody><tr><td class="border-b p-sm">Basic</td><td class="border-b p-sm">The initial prompt, model selection, embedded questions, output review</td><td class="border-b p-sm">Write a self-contained prompt; check what you got back</td><td class="border-b p-sm">Before you use this, ask: what would make it wrong?</td></tr><tr><td class="border-b p-sm">Middle</td><td class="border-b p-sm">Connectors, plugins, skills</td><td class="border-b p-sm">Shape a repeatable fetch-or-produce pattern</td><td class="border-b p-sm">Did the connector pull what you actually needed, or just what was easy to find?</td></tr><tr><td class="border-b p-sm">Lasting</td><td class="border-b p-sm">Scheduled workflows, multi-step automations</td><td class="border-b p-sm">Shape work that runs without you</td><td class="border-b p-sm">When did you last verify this workflow still produces good work?</td></tr></tbody></table>

## Where to go from here[](https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum)

The AI Fluency Index continues to track these patterns monthly, and we'll keep publishing what we learn as the products evolve and the dataset grows. If you're building Claude training for your organization and want to ground it in this research, the [AI Fluency framework and courseware(opens in new tab)](https://academy.claude.com/collections/ai-fluency) are freely available, and you can [sign up for the AI Fluency newsletter(opens in new tab)](https://academy.claude.com/collections/ai-fluency) to get notified about new research on AI fluency.

We're particularly interested in hearing from teams experimenting with Discernment instruction on agentic surfaces, since that's where the data suggests the biggest gap between what users do naturally and what good practice requires. If you're running something along those lines, we'd love to learn from it.

Was this helpful?
