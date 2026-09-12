Lesson 14 of 14 · Deploying Claude Enterprise with Confidence: The five decisions that shape your rolloutWhen a new product arrives

# When a new product arrives

Lesson 147 min

In this lessonBy the end, you’ll be able to

- Explain which parts of your configuration carry over to a new product automatically
- Walk the three questions you re-run for the arrival of any new Claude surface
- Answer the three questions on a surface you don’t use yet

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fdeploying-claude-enterprise-with-confidence%2Fwhen-a-new-product-arrives)

New products arrive regularly, and you may find yourself facing these decisions once again. This lesson walks through the process for a new arrival: what carries over on its own, and the three questions you re-run per product.

## What carries over[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/when-a-new-product-arrives)

Most of your structure carries over unchanged, because it reflects your objectives, not the state of the products. That covers:

- Your organization boundary (Lesson 4)
- Your groups and roles (Lesson 5)
- Your governance posture (Lesson 8)
- Your caps (Lesson 9)
- Your visibility pieces (Lesson 11)

Re-check those settings against anything new about the surface: the carry-over is the typical outcome, not a guarantee.

The edge case is a genuinely new kind of product, one that works somewhere your controls do not currently look; it can add a question of its own, the way agent surfaces added task-scoping to spend guidance. The three questions below cover everything else.

## The three questions[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/when-a-new-product-arrives)

- **Who gets it?** This is the Lesson 6 decision, replayed: consider which groups’ daily work calls for it, and in what phase.
- **What does it carry?** Does it bring settings or connectors of its own, so those earlier lessons re-run for it, or will it require more specific grants?
- **Does it move risk?** Does it give Claude a new kind of reach: into a new class of data, or with a new degree of autonomy, or in front of new people? If it does, the risk owner should be consulted.

## Pluto’s latest arrival: Claude Tag[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/when-a-new-product-arrives)

Pluto is considering a rollout of Claude Tag, a new way for teams to work with Claude inside Slack, in beta on the Team and Enterprise plans.

- **Setup and use**: a Primary Owner or Owner grants Claude access to selected channels and connects it to the tools, data, and codebases they choose; members then tag @Claude in the channel to delegate tasks while they focus on other work, and Claude builds context from the channels it’s in.
- **In a channel**: Claude Tag works under its own identity rather than as the person who tagged it, with the access attached to that channel’s scope, so everyone in the channel gets the same capability.
- **In direct messages and the assistant panel**: Claude carries the member’s own account capabilities, and the usage counts against the member’s own seat and its limits rather than the Claude Tag balance.

Pluto is four months into its Claude Enterprise rollout and ran Claude Tag through the three questions:

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"><strong>Question</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>What Pluto decided</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>How it relates to Pluto’s objectives</strong></th></tr></thead><tbody><tr><td class="border-b p-sm"><strong>Who gets it?</strong></td><td class="border-b p-sm">Granted through Member Access (role-based, like any other surface), with Claude’s channel access chosen channel by channel, to the units whose work already runs in Slack threads</td><td class="border-b p-sm">The surface goes where the groups’ daily work already happens, not to every channel by default</td></tr><tr><td class="border-b p-sm"><strong>What does it carry?</strong></td><td class="border-b p-sm">Configured fresh for the channels that got it, because it is channel-scoped and inherits little from the per-member setup (model access and the role capability still apply); usage is billed to the organization rather than to individual seats and carries its own limits, organization-wide and per channel, with admin alerts at 75% and 95%, so the spend owner set those alongside the existing caps</td><td class="border-b p-sm">Channel-scoped access is new, so the earlier per-member grants can’t cover it; organization-level billing keeps it on the spend owner’s review rather than under member caps</td></tr><tr><td class="border-b p-sm"><strong>Does it move risk?</strong></td><td class="border-b p-sm">Yes: as the beta stands, Claude carries the channel’s access no matter who is talking to it, so Pluto kept the default that blocks Claude in channels with a guest present and kept Claude Tag off for Payments &amp; Trust, its regulated group, the same tighter posture it holds elsewhere; the risk owner signed the choice</td><td class="border-b p-sm">Guest channels put people outside the organization in front of Claude’s channel-scoped access — the kind of new reach that goes to the risk owner</td></tr></tbody></table>

The interactive widget below runs Claude Tag through the three questions at Pluto and shows which of Pluto’s existing decisions reopen while the rest carry over.

Claude Tag arrives at Pluto: Claude inside Slack, scoped to a channel rather than a member. **Change any of the three answers** and watch which of the five decisions reopen.

The three questions

1 · Who gets it?The role decision, like any surfaceSome groups firstEvery group

2 · Does it carry its own settings?Configuration that inherits little from the per-member setup: model access and the Claude Tag in Slack role capability still applyYes, its ownNo, on/off only

3 · Does it change any group’s risk?New reach: new data, new autonomy, new peopleYes, for a groupNo

Pluto’s five decisions

1Structure & IdentityCarries over

Claude Tag lives inside the organization and groups already defined; nothing here reopens for a new surface.

2AccessReopens

A role grant, group by group: the units already working in Slack threads first, the rest phased. The group whose risk moved gets its connector answers rechecked for this surface.

3GovernanceReopens

Payments & Trust stays off Claude Tag entirely — the same tighter posture it holds elsewhere — and Pluto kept the default that blocks Claude in channels with a guest present (the Allow Claude to respond to guests setting, default Restrict); the risk owner signed the choice.

4SpendReopens

Channel-scoped settings inherit little from the per-member setup; Claude Tag carries its own limits, organization-wide and per channel, with admin alerts at 75% and 95%, so the spend owner set those.

5VisibilityCarries over

Its events flow to the destinations already configured. Confirm this new surface is inside their scope, once.

Claude Tag at Pluto: **3** reopen, 2 carry over. One admin session, not a rebuild.

Carries-over is the common case, not a promise: a genuinely new kind of surface can still add a question of its own.

## Set up resources[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/when-a-new-product-arrives)

To learn more about Claude Tag and where to go when a new surface rolls out, you can start with the resources below.

- **[What is Claude Tag?(opens in new tab)](https://support.claude.com/en/articles/15594475-what-is-claude-tag)**: what the surface does and the admin controls it ships with.
- **[Work with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/overview)**: the product overview in the docs: what the surface does, how admin-governed access works, and the entry point to the rest of the Claude Tag documentation.
- **[Set up Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/admins/setup-overview)**: the admin setup overview and the entry point to the full Claude Tag admin set: per-channel access, restrictions, spend limits, and migration.
- **[Manage model access for your organization(opens in new tab)](https://support.claude.com/en/articles/15694740-manage-model-access-for-your-organization)**: the organization-wide and per-role model settings a new surface inherits.
- **[Capabilities (Team and Enterprise plans)(opens in new tab)](https://support.claude.com/en/collections/9811414-capabilities)**: the collection where a new product’s article lands when it arrives.

## Lesson activity[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/when-a-new-product-arrives)

Pick one Claude surface your organization does not use today, and run the three questions in your companion. If your organization already uses every surface, review the interactive above for what the next one will ask of you.

→ Record this in the work-along companion, section Lesson 14.

## Downloads

- 

  ### Work-along companion (Word)

  The editable Word version of the rollout plan you fill in lesson by lesson.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-bk4suxux.docx)
- 

  ### Work-along companion (PDF)

  The same rollout plan as a fillable PDF.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-c5lkvz0n.pdf)

## What’s next[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/when-a-new-product-arrives)

The course closes with a short quiz that checks the concepts have landed. Your completed companion, not a score, is the evidence you’re ready.

Was this helpful?
