Lesson 7 of 14 · Deploying Claude Enterprise with Confidence: The five decisions that shape your rolloutConnectors

# Connectors

Lesson 710 min

In this lessonBy the end, you’ll be able to

- Name the three gates that allow connector usage and understand how to configure what you have control over
- Explain how enterprise-managed authorization (EMA) lets you provision connector access centrally
- Explain read versus write access, and decide which connectors each group gets and at what depth

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fdeploying-claude-enterprise-with-confidence%2Fconnectors)

This is still the second of the five decisions, Access. You’ve decided which product surfaces and capabilities your groups can access; now you decide which tools and data sources Claude can reach.

## What a connector is[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

A connector gives Claude access to another application (your drive, your wiki, your ticket tracker) so members can bring their live work context into a conversation instead of pasting or uploading it in. That reach is the value and the risk at once, so connector access is controlled at three separate gates. It is also what can drive early adoption: a team that connects a tool early has live context to work with from day one, so enabling a first connector for a group is one of the higher-leverage moves in a rollout.

## The three gates[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Between any connector and a member actually using it there are three gates, and all three must be open for Claude to be able to access the connector’s data.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"><strong>Gate</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>What it controls</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>Set by</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>If it’s closed</strong></th></tr></thead><tbody><tr><td class="border-b p-sm"><strong>Organization gate</strong></td><td class="border-b p-sm">Whether the connector is available in your organization at all</td><td class="border-b p-sm">An Owner or Primary Owner</td><td class="border-b p-sm">Nobody sees the connector, regardless of role</td></tr><tr><td class="border-b p-sm"><strong>Role gate</strong></td><td class="border-b p-sm">Whether a group’s role includes the connector</td><td class="border-b p-sm">An Owner or Primary Owner</td><td class="border-b p-sm">Some groups have the connector; this member’s group doesn’t</td></tr><tr><td class="border-b p-sm"><strong>Member gate</strong></td><td class="border-b p-sm">Whether this member has connected their own account, authorizing Claude to act as them</td><td class="border-b p-sm">The member</td><td class="border-b p-sm">The connector is granted, but not usable until this member connects their account</td></tr></tbody></table>

## What you control[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Within your two gates you hold three controls:

1. The connectors you add to your organization.
2. Per-group scoping: which groups get each one.
3. Where a connector offers it, the access depth: read-only or read-write. In the product, a connector’s write and delete tools are each set to Always allow, Needs approval, or Blocked, so blocking them holds it read-only.

When accessing a connector, Claude inherits the member’s own permissions from the connected service: if a member can’t access a specific file, channel, or record in the source system, that permission boundary carries through the connector too.

Claude Code’s network reach, the allowed domains your platform lead sets in its managed settings (Lesson 6), is the same question applied to the network, so raise it in the same conversation as the connector list.

## Enterprise-managed authorization[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

By default, the third gate belongs to the member: they connect their own account, and you cannot do it for them. For most organizations that works, but it means you cannot guarantee a connector is actually live for the group you scoped it to.

Enterprise-managed authorization (EMA) closes that gap. Instead of each member connecting their own account, you provision access centrally through your organization’s identity provider: once a connector is enabled, everyone in scope gets it automatically on their first login, with permissions inherited from their existing IdP groups and roles. Offboarding runs through the IdP either way. EMA is available only for connectors whose provider has built support for it, so some connectors on your list will still go through the member gate. [Authorize MCP connectors for your entire organization(opens in new tab)](https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization) covers what EMA does, which connectors and identity providers support it, and how to set it up (MCP is the open standard connectors are built on).

## Read and write access[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Connector access comes in two levels, and they carry different amounts of risk. Read access, the lower-risk of the two, lets Claude see the system: fetch the doc, search the tracker, read the dashboard, etc. Write access lets Claude change it: file the ticket, edit the page, create a new entry, etc. Giving Claude write access means that Claude, acting as the member, can change or overwrite information (in Cowork, a member still confirms each write unless Allow “Always allow” for connector tools is on) in the connected application. That’s why write access should get a different level of sign-off: consider having the data-risk owner you named in Lesson 2 approve write grants, so the risk is managed by the person who owns it.

Connectors are the most visible change you will turn on: members notice the moment Claude can suddenly access data directly. Announce each connector as it is made available, and be clear about what does and doesn’t change for members: the connector is now available to them, but each member still chooses whether to turn it on. Route requests for new connectors through the access owner you named in Lesson 2.

## Pluto’s connectors[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Pluto added its drive and its wiki for every group, read-only, and added the ticket tracker read-write for Engineering, whose workflow files tickets all day, with the risk owner’s sign-off on the write grant. Payments-eng (kept out of Engineering in Lesson 5) stays read-only, and a connector whose data sits outside its remit is left off that group entirely — the tighter posture Payments & Trust takes throughout.

The interactive widget below runs Pluto’s three gates for a single connector: open or close any gate and watch who controls it and what each member experiences.

**Open or close any gate.** The connector reaches a member only where every gate above them is open.

Gate 1Owner

Pluto EnterpriseCustomer-data warehouse connectorAdded

Gate 2Owner, per group

B2BWrite tools: Always allowOpen

Payments & TrustWrite tools: Blocked · read-onlyOpen

OpsWrite tools: Needs approvalClosed

Gate 3each member

D

Dana

connected

M

Marco

Connect

P

Priya

Connect

S

Sam

Connect

L

Lee

no access

N

Nia

no access

Reaching **1** of 6 membersEnterprise-managed auth · org connects once for everyone

## 1 · Your decision[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Which connectors does each group get, and at what depth: read-only or read-write, per tool?

## 2 · The choices you can make[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Connector access is ultimately a judgment call about risk: for each connector, ask which group’s work needs write access every week.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"><strong>The choice</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>When you’d choose it</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>What it means and the impact it has</strong></th></tr></thead><tbody><tr><td class="border-b p-sm"><strong>Read-only, scoped to the groups whose work lives in that system</strong></td><td class="border-b p-sm">Most organizations land here unless the situation below applies.</td><td class="border-b p-sm">Read access is immediately useful: fetch and search create real value on their own. This avoids the question of what Claude is allowed to change in your systems while your organization learns what members actually do with the reach. The common pattern is that write comes later, once a workflow has demonstrated the need and the risk owner has signed off.</td></tr><tr><td class="border-b p-sm"><strong>Write, phased in with sign-off</strong></td><td class="border-b p-sm">A group’s workflow clearly needs Claude writing into the system (filing tickets, updating pages), and its risk owner is comfortable with it.</td><td class="border-b p-sm">The group starts read-only like everyone else, then gets write once the need has shown itself and the risk owner has signed off. Claude can then change that system on members’ behalf, with the risk sitting with the owner who accepted it.</td></tr></tbody></table>

## 3 · If you change this later[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Connector settings are freely reversible: the connectors you’ve added, each group’s scoping, and read-only versus read-write all move in your organization settings. Widening costs members nothing. Narrowing, however, ought to be handled with care: revoking write access or removing a connector breaks the workflows members built on it. It is best practice to announce any access changes so members are aware of them.

## Set up resources[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

When you’ve made the call, set up your organization’s connectors. The connectors you add and each group’s connector scoping live with your groups and their role assignments in Organization settings, and, where you use EMA, that is where the member gate becomes yours to stand up centrally as well.

- **[Use connectors to extend Claude’s capabilities(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)**: what a connector is and does from the member side: the thing you are gating.
- **[Get started with custom connectors using remote MCP(opens in new tab)](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)**: how a custom connector is built and added, so you know what you are approving.
- **[Authorize MCP connectors for your entire organization(opens in new tab)](https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization)**: enterprise-managed authorization — what it does, which connectors and identity providers support it, and how to set it up.
- **[Enterprise-managed authorization (MCP documentation)(opens in new tab)](https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization)**: the standard behind EMA.
- **[Configure the sandboxed Bash tool(opens in new tab)](https://code.claude.com/docs/en/sandboxing)**: Claude Code’s network reach: the sandbox’s allowed domains in its managed settings, which your platform lead owns.

## Lesson activity[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

Fill the connector table in your companion: connector, who gets it, and depth (read-only or read-write).

**What to bring your risk owner:** every row with write access: the workflow that needs it, the group that carries it, and the read-versus-write risk framing from the section above.

→ Record this in the work-along companion, section Lesson 7.

## Downloads

- 

  ### Work-along companion (Word)

  The editable Word version of the rollout plan you fill in lesson by lesson.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-bk4suxux.docx)
- 

  ### Work-along companion (PDF)

  The same rollout plan as a fillable PDF.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-c5lkvz0n.pdf)

## What’s next[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/connectors)

The next module, Governance, turns inward to how freely members customize Claude itself: the skills they build, how those skills are shared, and the organization instructions that shape Claude for everyone, along with the governance posture that covers all three.

Was this helpful?
