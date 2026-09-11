Lesson 1 of 14 · The AI-Native SDLC PlaybookIntroduction

# Introduction

Lesson 16 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-native-sdlc-playbook%2Fintroduction)

Organizations have started using AI to write code at a speed unthinkable one year ago, yet the processes around the code haven't changed at the same pace.

Many engineering teams still have the same approval gates, reviews, handoffs, and policies, stalling productivity gains made by using agentic coding solutions like Claude Code.

## The traditional SDLC[](https://academy.claude.com/courses/ai-native-sdlc-playbook/introduction)

The software development lifecycle (SDLC) is the process that takes software from idea to production. Most organizations run some version of the same six stages, covering planning, design, building, testing, deploying, and maintaining software. Traditionally, each stage is a discrete phase owned by a different role. Product managers write requirements, technical architects turn them into designs, engineers build the designs, QA teams at regulated enterprises verify the software, release teams ship it, and operations monitors what is running. Work moves between the phases through documents, tickets, and sign-offs.

The traditional software development lifecycle (SDLC) is process-heavy to ensure accountability and control at each step. However, the traditional SDLC was designed to maximize efficiency in an era where the most time-consuming and expensive stage was writing and implementing code, which is no longer the case. Product requirements documents (PRDs), estimation rituals, and product security reviews all existed to force alignment during what could be weeks, months, or quarters of development work.

The traditional SDLC also features controls that assume every step is performed by humans. The organizations generating the most value have rebuilt their process around what agentic AI can now do, while ensuring that humans stay in the loop. In this guide, we walk through several of our Applied AI team's best practices for integrating Claude internally across each stage of the SDLC to accelerate development and make processes run faster, inspired by working with our customers.

## When code is no longer the bottleneck[](https://academy.claude.com/courses/ai-native-sdlc-playbook/introduction)

When code is no longer the bottleneck and the build phase runs faster than the traditional SDLC allows for, three things become true:

1. The bottleneck moves to the stages on either side of the build phase: mainly plan, review/test, and deploy, which still run at human speed.
2. The controls stop matching reality and become intractable. Reviewing each line by hand made sense when a person had written it, but it can't keep up once agents write most of the diff.
3. Governance costs increase because exceptions still route through meetings and committees that meet weekly or monthly.

![Two rows of software lifecycle stages. Before agents: Plan, Design, a long Build block, Test, Deploy, Maintain, every stage at human speed. After agents: the same stages with Build collapsed to a sliver and the freed width marked 'cycle time reclaimed'; Plan and Design are labelled requirements, Test is labelled review, Deploy is labelled release.](https://academy.claude.com/assets/v1/fig-bottleneck-moved-kfhak6zu.png)

*The bottleneck moved: build collapses to agent speed while the stages around it still run at human speed.*

Let's use a security bottleneck as an example. Security teams are sized for human output, so when agents multiply code output, either the review queue builds or code ships under-reviewed. A regulated organization can't accept either outcome, so its security and policy checks have to keep pace with the agents.

To better realize the productivity gains of and secure agentic AI, the traditional SDLC lifecycle requires the same level of transformation as the implementation phase has undergone.

## What is an AI-native SDLC?[](https://academy.claude.com/courses/ai-native-sdlc-playbook/introduction)

The AI-native SDLC is a reimagined process that combines the old control objectives with new enforcement. Instead of a linear flow, the process becomes a loop, and AI is embedded at each point. The AI-native SDLC promotes automated handover and triggering of subsequent plays, helping to address the manual and clunky nature of handoff between the phases of the traditional SDLC.

![Left: the traditional lifecycle as a straight line, Plan to Design to Build to Test to Deploy to Maintain. Right: the same six stages arranged as a continuous loop around Claude, with arrows running clockwise from Plan back to Plan.](https://academy.claude.com/assets/v1/fig-line-vs-loop-ij67hlkm.png)

*The traditional linear SDLC (left) and the AI-native continuous loop (right), with humans positioned above the loop instigating, directing, and governing.*

## The shifts[](https://academy.claude.com/courses/ai-native-sdlc-playbook/introduction)

The table below highlights the ends of the spectrum between traditional SDLC and AI-native SDLC, supported by Claude. Most organizations sit somewhere between the two columns.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Stage</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Traditional SDLC</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">AI-native SDLC</th></tr></thead><tbody><tr><td class="border-b p-sm" style="text-align:left">Plan</td><td class="border-b p-sm" style="text-align:left">Requirements gathered by committee, distilled through workshops and sign-offs, written up by hand</td><td class="border-b p-sm" style="text-align:left">Claude synthesizes pain points straight from the sources and captures them within <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">intent.md</code>, which is human readable and machine actionable</td></tr><tr><td class="border-b p-sm" style="text-align:left">Design</td><td class="border-b p-sm" style="text-align:left">Spec written by analysts, parsed by designers</td><td class="border-b p-sm" style="text-align:left">Requirements and design compressed into one working session with an agent, guided by standards encoded as skills, versioned in Git</td></tr><tr><td class="border-b p-sm" style="text-align:left">Build</td><td class="border-b p-sm" style="text-align:left">Tests and code are handwritten, and documentation is written after the main development happens</td><td class="border-b p-sm" style="text-align:left">Tests and code are generated by AI, and institutional knowledge is maintained as versioned machine-readable <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">CLAUDE.md</code> files and skills</td></tr><tr><td class="border-b p-sm" style="text-align:left">Test</td><td class="border-b p-sm" style="text-align:left">QA gates at stage boundaries</td><td class="border-b p-sm" style="text-align:left">Continuous evals woven through implementation</td></tr><tr><td class="border-b p-sm" style="text-align:left">Deploy</td><td class="border-b p-sm" style="text-align:left">Humans review every line of code, and governance occurs in review cycles, often inconsistently</td><td class="border-b p-sm" style="text-align:left">Layers of agentic review with human review reserved for regulated and critical code. Governance is enforced as the AI acts, with hooks as approval gates</td></tr><tr><td class="border-b p-sm" style="text-align:left">Maintain</td><td class="border-b p-sm" style="text-align:left">Humans watch production for bugs</td><td class="border-b p-sm" style="text-align:left">Agents monitor live deployments. Any breached control band is diagnosed and written back into the loop as a new <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">intent.md</code></td></tr></tbody></table>

What ties the AI-native column together is the committed artifact. Each stage ends by writing one to version control (including `intent.md`, `spec.md`, `plan.md`, the diff and its tests, the PR with its review findings, and the incident record), and the next stage begins by reading it. For the early stages, `.md` files are the predominant artifact because a product owner and an agent can both read and act on the same file. From Build onward, the artifact is code and its records. The chain of commits is also the audit trail: who asked for what, what the agent produced, and who approved it.

Humans remain accountable for every decision that requires judgment. In the agentic SDLC world, the human attention shifts along with the artifacts that must be reviewed.

## How the plays work[](https://academy.claude.com/courses/ai-native-sdlc-playbook/introduction)

The plays are the core of the playbook and are grouped into six non-linear stages (Plan, Design, Build, Test, Deploy, Maintain), which together cover the complete lifecycle.

Each play covers:

- What changes
- Getting started
- Concrete steps for implementation
- Governance considerations
- How you measure whether it worked

The plays are modular, and organizations may choose to prioritize transforming different stages at different times based on their unique needs. Each play names its dependencies under "Prerequisites," which the dependency graph further illustrates.

A stage ends by committing an artifact with the commit initiating the next stage. An accepted `intent.md` triggers the requirements and design pass, an approved `spec.md` triggers plan mode, a merged PR triggers the pipeline, and a breached control band in production writes the next `intent.md`, and so the loop continues.

At first, you prompt each step by hand, with the end state being a loop in which each accepted artifact fires the next gate. Human attention concentrates at the gates, reviewing what the agent flagged rather than starting each stage from scratch.

![Dependency graph of the twelve plays in five rows. Row 1, no prerequisites: Capture intent, CLAUDE.md, Skills, Feedback loop, Hooks, Plan mode. Row 2: Subagents (needs CLAUDE.md; the feedback loop helps), Evals (needs CLAUDE.md and the feedback loop). Row 3: Requirements and design (needs Capture intent and Skills), PR review (needs Evals and Subagents; Skills help). Row 4: CI/CD (needs PR review and Hooks). Row 5: Closing the loop (needs CI/CD and Capture intent). CLAUDE.md helps Skills but is not required.](https://academy.claude.com/assets/v1/fig-play-dependency-graph-li0n7bnt.png)

*The play dependency graph. Plays in the top row have no prerequisites; a solid arrow points to the plays that build on it, a dotted arrow means it helps but is not required.*

Was this helpful?
