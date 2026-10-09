# Working at the frontier: How Hebbia builds AI for financial diligence that can't miss a detail

Hebbia builds research and diligence software for financial professionals, and tests every new model against finance evals tied to expert outcomes. In testing, Claude Fable 5 posted the biggest accuracy gain its research team has recorded, and tracked complex queries that prior models kept dropping.

- Category[Best practices](https://claude.com/resources/best-practices)
- DateJuly 13, 2026
- Reading time8 min
- ShareCopy link

Embedded media: https://www.youtube-nocookie.com/embed/vYO9kUu-aC8?enablejsapi=1&rel=0&playsinline=1&modestbranding=1

Hebbia is an AI platform built for the rigor of institutional finance, serving more than a third of the top 50 asset managers along with tier-1 investment banks and law firms. Divya Mehta, the company's founding product manager, spends roughly half her time with its largest investment banking, private equity, and credit customers.

Those customers make decisions based on analyses that span thousands of dense documents, where a wrong number can change the outcome of an entire deal.

## How Hebbia holds the line on accuracy

A banker or investor weighing an opportunity has to work through all the data that could impact the decision, including the company's public filings, its credit agreements, internal documents, and structured data like information from a CRM. Hebbia's meta-prompting turns plain-language requests into prompts, and then Claude runs each step of the analysis across hundreds of documents. Each answer lands in its own cell on a grid in Hebbia's Matrix, enabling full transparency, traceability, and steerability.

Keeping those answers accurate at scale is the work of Hebbia's applied AI research team, led by Adithya Ramanathan. For Ramanathan, the point of that work is finding signals: getting a model to draw on the right data, in the right context, and surface what a customer wants to know.

"When you're connecting it to the right data and putting it in the right ecosystem," Ramanathan says, "that's when you get the alpha that finance professionals actually chase."

Getting there means running every new model through Hebbia's finance-specific benchmark, head to head against the model it would replace, and expanding what the benchmark measures with each release to keep pace as models improve. The benchmark is built to be hard on purpose.

"The bar is extremely high, and our customers hold us to that extremely high bar—and rightfully so," Mehta says. "At the end of the day, they're making investment decisions at a very large scale based on the analysis and final work product built in Hebbia."

![](https://assets.claude.com/89ea204c3b0753eca5f0b4a8e3b694f87b6f0492.jpg)

The team at Hebbia runs every new Claude model through finance-specific benchmarks that run head-to-head against the model it would replace.

## Clearing Hebbia's evals by the widest margin yet

Joe Renner, a researcher on the applied AI team, runs each new Claude model against that benchmark, with a battery of tests replicating key finance knowledge worker use cases. One such test covers question answering and citation finding over financial documents. Another test runs through Hebbia's agent system, with the tools its chat product uses, on the kind of open-ended, multi-source analysis a customer actually does.

Claude Fable 5 cleared both by the widest margin Renner had measured. On the question-answering and citation test, it posted about a 20% relative gain in accuracy over financial documents, the best he had seen from any new model. Citation match held roughly steady—Renner believes the gain comes from the model better understanding the evidence it finds.

"It comes down to two seemingly fundamental qualities: the ability to find the right information from a dense data set, and then synthesize it correctly," Divya says. "These seem like fundamental model capabilities, but they have massive impact when we think about finance and research workflows." On the agent run, it held every part of a multi-part request at once, answering all of them and citing each answer back to its source.

Claude Fable 5 also showed more reach. On open-ended analysis, it reasoned from a wider cross-section of the data and arrived at conclusions the team thought were worth a closer look. Renner traces that to how the model holds a long task together: it keeps every part of a request in view, prompts its own sub-agents and tools so the right facts come back, and grounds each claim in the source rather than inferring it.

## Setting a new standard for deal diligence with Claude Fable 5

The information that gives customers an edge usually sits in unstructured, proprietary documents.

Those have been harder to analyze at scale than the structured, quantitative data finance already models well. Hebbia built Matrix to make that qualitative work systematic, and every model generation widens what it can take on.

That might be a data room with thousands of documents, where the work is finding the relevant signal, citing it, and drafting each section of an investment memo. Or it might be analyzing every document tied to a credit deal (the credit agreement, amendments, side letters, each running hundreds of dense technical pages) and extracting the full covenant package, financial terms and operating restrictions alike, from that unstructured mass.

"These are actually the types of documents that Anthropic models have always done really well at," Mehta says.

With earlier Sonnet and Opus models, Matrix could already pull out and synthesize a credit agreement's covenants—the dense protections a lender writes in for itself. With Claude Fable 5, Hebbia is reaching for the rest of the job: the multi-step analysis on top of those covenants, comparing them against live monitoring data, flagging risks, all the way to a first draft of the covenant review and an internal memo. That review is something credit firms used to pay outside teams a great deal to produce by hand.

![](https://assets.claude.com/675280af0230cbc453d91b56ebfd4040588920ec.jpg)

Claude Fable 5 enables Matrix, Hebbia's AI platform built for financial professionals, to take on longer-running, multi-step tasks like synthesizing credit agreement coven

## What's next

Now that models like Claude Fable 5 can carry this work end to end, the comparison is the specialist hours it replaces.

Before AI, when a managing director needed a deck to pitch a CEO, it would take a junior banker 2-3 days to learn the company, pull financials, and build slides. In the pre-Opus days, the timeline to produce a first draft compressed by 12 to 24 hours, and with earlier Opus models on Hebbia, Mehta says, it dropped even further, taking about a day to run end-to-end. Hebbia has since codified the whole job into a Matrix that gathers the data across sources in a set of deterministic agentic steps, does the analysis, and builds the final deck, financial model, and internal research in a couple of minutes, so the banker can spend the time on which buyers to pursue and how to position them. Claude Fable 5 tightens it further, she says.

Decomposing the work into steps still matters, "no matter how brilliant the model is," because firms want control over which documents feed the analysis and how each step is built. So Hebbia is adopting the Claude Agent SDK to compose these jobs as smaller, repeatable, checked steps rather than a single model run.

"Compressing the deal lifecycle has a massive impact on a firm's ability to compete for those investments," Mehta says. She hears it in customer conversations. Two or three years ago the questions were defensive, about hallucinations and whether the math was right. "Today, those conversations have changed completely. They're: how can I automate more of my workflow? How do I sequence more steps together? How can I generate ten, fifteen, twenty slide decks in one click with high fidelity and consistency?"

**Get started with [Claude Fable 5.](https://www.anthropic.com/claude/fable)**

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 7, 2026

### Automating eval design and hillclimbing with Claude

Principles for designing evals and hillclimbing against them without fooling yourself, and how the claude-api skill's build-eval and hillclimb commands put them to work.

Claude Platform

(opens in new tab)](https://claude.dev/blog/automating-eval-design-and-hillclimbing/)[ArticleOct 6, 2026

### Claude Code in the cloud: a field guide to cloud sessions

What changes when Claude Code runs on its own machine, the workflows where that pays off, and how to connect GitHub on the first try.

Claude Code

(opens in new tab)](https://claude.dev/blog/claude-code-in-the-cloud/)[ArticleOct 5, 2026

### How Cresta turned CX expertise into an agent builder on the Claude Agent SDK

See how Cresta built Conductor, an agent that builds other agents, on the Claude Agent SDK, and how the team evaluates it with every new Claude model.

Claude Platform](https://claude.com/resources/articles/how-cresta-turned-cx-expertise-into-an-agent-builder-on-the-claude-agent-sdk)[ArticleOct 1, 2026

### Getting started with Claude Code mods

Claude Code

(opens in new tab)](https://claude.dev/blog/getting-started-with-claude-code-mods/)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
