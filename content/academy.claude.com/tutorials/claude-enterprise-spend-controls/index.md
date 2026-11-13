# Plan your spend for unified Claude

Understand and use your usage and spend data to revisit your spend controls and make the case for your spend to your stakeholders.

15 minClaude

[Open Claude](https://claude.ai/new)

![](https://academy.claude.com/assets/v1/thumbnail.light-fjqxjn9y.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-elva4z0a.png)

Unified Claude brings chat and Claude Cowork together on web, desktop, and mobile. Until now, a member of your Claude Enterprise organization chose between the two before they started working with Claude. With unified Claude they no longer make a choice, and both kinds of work can happen in the same conversation.

Chat is the back-and-forth your members already know: they ask, Claude responds, and they decide what happens next. For example, a member shares the variances they've already worked out and asks Claude to help draft a summary.

Agentic work is where Claude runs code or works with files and returns finished work to review. For example, that member points Claude to the quarter's budget and actuals, and Claude runs the variance analysis and drafts the findings as a one-page memo.

As your organization moves to unified Claude, what Claude can do for your members in a single conversation changes, so your spend may change with it. The usage and spend data available in your Claude Enterprise account can support you as you plan.

This tutorial shows you how to understand and use that data to revisit your spend controls and make the case for your spend to your stakeholders.

**By the end, you'll be able to:**

- Find the usage and spend data available to you
- Interpret that data to understand how your members work with Claude
- Identify the controls you can use to manage spend
- Run a pilot to test your plan with a small group first
- Make the case for your spend by pairing it with the work it went toward

**What you need**

- A Claude Enterprise organization on usage-based billing
- The Owner or Primary Owner role, which can change your spend controls and access all analytics. For the Analytics API, only your Primary Owner can turn it on and create the key
- Usage and spend data in your Claude Enterprise account, from how your members have used Claude so far



**Note:** Unified Claude is not yet available to organizations that use zero data retention for Claude Code (ZDR), the HIPAA-ready configuration, or customer-managed encryption keys (CMEK).

## What you're budgeting for now[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

Your current spend controls were set when chat and Cowork were separate, and a member started in one or the other. With unified Claude, every conversation starts in the same place and moves into agentic work when the task calls for it.

Pricing stays usage-based, so what you spend depends on how your members use Claude. That means you're budgeting for one mix of chat and agentic work, shaped by the tasks your members bring. Depending on the task, agentic work can use more tokens than a quick chat. Claude Enterprise admins have controls for managing this usage. Now is the time to revisit your controls with that in mind.

## What you can see, and what it tells you[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

Your Claude Enterprise account already holds usage and spend data from how your members work with Claude today. You can use it to set a baseline, so you can track how your spend changes with unified Claude. You can look at this data in Analytics and on the Usage page, or bring it into your own tools.

A good starting point is to look at what could shift after the move. For example, you can look at how much your organization spends on Claude, how that spend is spread across your members, how agentic the work is, what the spend is going toward, and whether anyone is reaching a spend limit. You'll have questions of your own too. Understanding what you can see is what lets you decide where your controls need to change, and where they don't.

Here are your data sources, grouped by where you find them.

**In Analytics**

- **[Analytics dashboard(opens in new tab)](https://support.claude.com/en/articles/12883420-view-usage-analytics-for-team-and-enterprise-plans).** The dashboard in your Claude Enterprise account, where you can see your organization's usage and spend.
- **[Spend report(opens in new tab)](https://support.claude.com/en/articles/12883420-view-usage-analytics-for-team-and-enterprise-plans).** You can export a CSV of your spend data from the analytics dashboard, for the period you choose, up to 90 days back. Each row is one member's use of one model.
- **[Smart reports(opens in new tab)](https://support.claude.com/en/articles/16893491-get-started-with-smart-reports).** Reports Claude writes about how a team uses Claude, from a sample of the team's sessions. Smart reports are off by default. They aren't designed for, and shouldn't be used for, evaluating individual performance or making employment decisions.
- **[Surveys(opens in new tab)](https://support.claude.com/en/articles/16764057-create-surveys-for-your-organization).** Short questions you create in Analytics, which your members answer inside Claude.
- **[Analytics chat(opens in new tab)](https://support.claude.com/en/articles/14729354-use-analytics-chat-to-ask-claude-about-usage).** You can ask about the same analytics in plain language and get back a chart and a short summary.

**In Organization settings**

- **[Usage page(opens in new tab)](https://support.claude.com/en/articles/11526368-how-am-i-billed-for-my-enterprise-plan).** A page where you can see your members' spend next to their spend limits.

**For your own tools**

- **[Analytics API(opens in new tab)](https://platform.claude.com/docs/en/manage-claude/analytics-api).** You can use it to bring the same analytics into your own tools as data: activity for each member by day, and, in beta, usage and cost by day, product, model, or group. Only your Primary Owner can turn it on and create the key.
- **[OpenTelemetry(opens in new tab)](https://support.claude.com/en/articles/14477985-monitor-claude-cowork-activity-with-opentelemetry).** You can stream Cowork events into the observability tools you already use. The events include each request's model, token counts, estimated cost, and duration.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Question</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Where to look</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">What it tells you</th></tr></thead><tbody><tr><td class="border-b p-sm" style="text-align:left"><strong>How much are we spending?</strong></td><td class="border-b p-sm" style="text-align:left"><strong>Analytics dashboard:</strong> total spend and spend by model, for the month, quarter, or year.<br/><br/><strong>Spend report:</strong> the product, requests, tokens, and spend in each row.</td><td class="border-b p-sm" style="text-align:left">Where you stand today, and which products and models your spend sits in.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><strong>How is spend spread across our members?</strong></td><td class="border-b p-sm" style="text-align:left"><strong>Analytics dashboard:</strong> spend concentration.<br/><br/><strong>Usage page:</strong> month-to-date spend for each member, next to their spend limit status.</td><td class="border-b p-sm" style="text-align:left">Whether spend is even across your organization or carried by a smaller number of members, and who they are.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><strong>How agentic is the work?</strong></td><td class="border-b p-sm" style="text-align:left"><strong>Analytics dashboard:</strong> How agentic is their work? (beta), a chart on the Overview page.<br/><br/><strong>Analytics API:</strong> unified Claude activity for each member, in two parts: chat, and sessions, which cover the cloud sessions where agentic work runs and the Cowork desktop app.<br/><br/><strong>OpenTelemetry:</strong> the model, token counts, estimated cost, and duration of each request in a Cowork session.</td><td class="border-b p-sm" style="text-align:left">How agentic the work is across your organization. With the Analytics API, you can also see how each member's unified Claude activity splits between chat and sessions, and how that shifts over time.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><strong>What is the spend going toward?</strong></td><td class="border-b p-sm" style="text-align:left"><strong>Smart reports:</strong> workstreams and types of output, with spend attached to each at list price.<br/><br/><strong>Surveys:</strong> what your members use Claude for, and what it's worth to them.</td><td class="border-b p-sm" style="text-align:left">What your spend is going toward, in the shape of the work itself and in your members' own words.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><strong>Is anyone reaching a spend limit?</strong></td><td class="border-b p-sm" style="text-align:left"><strong>Usage page:</strong> Blocked by a spend limit (who is blocked right now, who is near their limit, and the member-days lost this month), and time at limit (for all members, and for your top 10% by spend).</td><td class="border-b p-sm" style="text-align:left">Where your limits are working as intended, and where your most engaged members may need more headroom.</td></tr></tbody></table>

You can ask [Analytics chat(opens in new tab)](https://support.claude.com/en/articles/14729354-use-analytics-chat-to-ask-claude-about-usage) some of these in plain language. You can also bring your data into the tools you already use, with the spend report, the Analytics API, or [OpenTelemetry(opens in new tab)](https://support.claude.com/en/articles/14477985-monitor-claude-cowork-activity-with-opentelemetry), and set it beside what you know about your own teams.

### After your members move: the unified Claude line[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

Everything above works with the data you have today, and it keeps working after the move, with a few changes to know about. Once a member has unified Claude, most of their chat and Cowork usage is reported on its own line, `Chat and Cowork unified`. The Top connectors and Top skills cards don't include that line yet. How usage is counted or billed does not change. Keep this in mind when you compare spend before and after. For more on how unified Claude usage is reported, see [Set up and manage the new unified Claude experience for your Enterprise organization(opens in new tab)](https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization).

### Going further: combining sources[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

You'll have questions of your own that reach across more than one source. One way to think about combining them is to let each answer point you to the next place to look.

**Who is reaching a spend limit, and what are they working on?**

1. **Usage page**. 

   Which group spends the most time at its limit

   ↓→
2. **Smart report**. 

   Scoped to that group: what they're working on, and the spend attached to it

   ↓→
3. **Survey**. 

   Sent to that group: what the work is worth to them

   ↓→
4. **What you have**. 

   One group's time at limit, the work behind it, and their view of it, side by side

Usage page → smart report → survey → what you have

**How did things change for the same members after they moved?**

1. **Analytics API: usage and cost (beta)**. 

   Spend by day for the same members, before and after

   ↓→
2. **Analytics API: activity**. 

   How much of their unified Claude activity is chat and how much is sessions

   ↓→
3. **Analytics**. 

   How agentic is their work? (beta), for the wider view across products

   ↓→
4. **What you have**. 

   The change in spend next to the change in how they work

Usage and cost → activity → Analytics → what you have

**How does a team work with Claude today, before they move?**

1. **Spend report**. 

   Their spend, requests, tokens, and models today

   ↓→
2. **Analytics API: activity**. 

   Their conversations, files uploaded, artifacts created, and connector use by day

   ↓→
3. **Smart report**. 

   Run on chat: the kinds of output they produce, and the spend attached to each

   ↓→
4. **What you have**. 

   A starting picture of that team to set later numbers against

Spend report → activity → smart report → what you have

**How does one group's unified Claude spend relate to its mix of chat and sessions?**

1. **Analytics API: usage and cost (beta)**. 

   The group's total on the unified line, by member and day

   ↓→
2. **Analytics API: activity**. 

   The same members and days, split into chat and sessions

   ↓→
3. **OpenTelemetry**. 

   An estimated cost for each request in a cloud session

   ↓→
4. **What you have**. 

   The group's total, how their activity splits, and an estimate for the sessions within it

Usage and cost → activity → OpenTelemetry → what you have

Once you understand where your spend goes and what it's going toward, you're ready to think about how you can manage it.

## What you can control[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

You can manage spend with two kinds of controls: spend limits and model settings. With spend limits, you set how much can be spent, and by whom. With model settings, you shape how many tokens a task uses along the way. You can set spend limits by group, and model settings by [custom role(opens in new tab)](https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans).

### Spend limits[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

Choosing the amount for a spend limit is a trade-off. A lower one keeps spend close to plan and can pause members partway through work they rely on Claude for. A higher one keeps work moving and lets spend build before you've looked at what it's going toward. Usage can go slightly over a limit before it pauses. Use what you saw in your data to choose the amount for each group's spend limit.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Control</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">How it affects spend</th></tr></thead><tbody><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_4penmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/11526368-how-am-i-billed-for-my-enterprise-plan" rel="noopener" target="_blank">Organization spend limit<span class="sr-only" hidden="" id="_R_4penmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Sets the cap for what your entire organization can spend. When it's reached, usage stops for everyone until you raise it or the next billing period begins. Alerts go out at 75% and 90%.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_59enmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/13799932-manage-groups-and-group-spend-limits-on-enterprise-plans" rel="noopener" target="_blank">Group spend limit<span class="sr-only" hidden="" id="_R_59enmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Gives every member of a group the same monthly limit. It applies to each member separately, not to the group's total.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_5penmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/13799932-manage-groups-and-group-spend-limits-on-enterprise-plans" rel="noopener" target="_blank">Individual spend limit<span class="sr-only" hidden="" id="_R_5penmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Sets a monthly limit for one member. It takes precedence over any group limit.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_69enmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/17005973-manage-pooled-group-budgets-on-enterprise-plans" rel="noopener" target="_blank">Pooled group budget<span class="sr-only" hidden="" id="_R_69enmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Gives a group one shared monthly amount to draw from, alongside each member's own limit. Usage counts against both, so a member stops when their own limit or every pooled budget they can use runs out.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_6penmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://platform.claude.com/docs/en/manage-claude/spend-limits-api" rel="noopener" target="_blank">Spend limit increase requests<span class="sr-only" hidden="" id="_R_6penmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Members are notified as they near their limit and can request more once they reach it. The request comes to you.</td></tr></tbody></table>

When spend limits overlap, a member's individual spend limit applies first, then their group's. A member with neither, and no seat-type default, has no spend limit of their own, but the organization limit and any pooled budget still apply.

### Model settings[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

With model settings, the choice is who decides which model to use. Some organizations set model choice centrally, and others leave it with members as part of learning to work well with Claude. You can take either approach with your controls.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Control</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">How it affects spend</th></tr></thead><tbody><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_4pinmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/15330088-set-a-default-model-for-your-organization" rel="noopener" target="_blank"><code class="cds-inline-code [--cds-prose-code-color:currentColor]">Default model</code><span class="sr-only" hidden="" id="_R_4pinmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Sets the model new conversations start on, for your organization or for a custom role. Model choice has a direct effect on spend, and the default shapes what most members run day to day.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_59inmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/15694740-manage-model-access-for-your-organization" rel="noopener" target="_blank"><code class="cds-inline-code [--cds-prose-code-color:currentColor]">Model access</code><span class="sr-only" hidden="" id="_R_59inmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Sets which models are available at all, for your organization or for a custom role.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_5pinmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/15330088-set-a-default-model-for-your-organization" rel="noopener" target="_blank">Effort level<span class="sr-only" hidden="" id="_R_5pinmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Higher effort uses more tokens than lower effort. You can set the level new conversations start at, and cap the highest level members can select.</td></tr><tr><td class="border-b p-sm" style="text-align:left"><a aria-describedby="_R_69inmd35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization" rel="noopener" target="_blank"><code class="cds-inline-code [--cds-prose-code-color:currentColor]">Efficient mode</code><span class="sr-only" hidden="" id="_R_69inmd35mq_">(opens in new tab)</span></a></td><td class="border-b p-sm" style="text-align:left">Keeps unified Claude on Sonnet and Haiku models and starts new sessions at low effort, for your organization or for specific custom roles. Other products aren't affected.</td></tr></tbody></table>

The controls work together. Spend limits decide where usage pauses. Model settings change how quickly members get there. Spend limit increase requests give members a way to keep going.

Once you know what you can control, you can run a pilot to try a change with a small group of members before you apply it to everyone.

## Run a pilot to get your own numbers[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

You may consider running a pilot before you widen access. By giving a small set of members unified Claude first, you can analyze their usage to extrapolate numbers for your greater organization. Consider monitoring usage and gathering feedback for two weeks before expanding in waves.

Here's what you could get out of a pilot:

- **A before and after.** The same members' spend before the move, next to their spend after it.
- **The work itself.** What members start handing to Claude, and what they say about it.
- **How your limits fit.** Who nears a spend limit, who reaches one, and how requests for more reach you.
- **A control in action.** What a change to a spend limit or a model setting does before it applies to everyone.

You'll learn the most from a pilot when the pilot group looks like your organization: a mix of functions, and members who have used Cowork alongside members who haven't. Use what you want to learn to decide which sources you'll want in place before it starts.

A pilot is one way to do this. If your whole organization moves together, you have the same data and the same controls, and you read and adjust as you go. For the steps, see the [setup article(opens in new tab)](https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization) and [Set up role-based permissions on Enterprise plans(opens in new tab)](https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans).

## Make the case for your spend[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

Making the case means showing your spend and the work it went toward side by side. A number on its own tends to prompt one question, whether it can be lower. A number paired with the work prompts a more useful one, whether this is the work you want your members relying on Claude for. You can shape the conversation around three questions, whose answers you can find in the resources shared above.

- **How much are we spending?** Start everyone from the same figure. A trend says more than a total, and a view by team or function says more than an organization-wide average.
- **What is it going toward?** Tie the spend to the work: the workstreams it supports, the kinds of output it produces, and what members say it changed for them. [Smart reports(opens in new tab)](https://support.claude.com/en/articles/16893491-get-started-with-smart-reports) cover the first two, and [surveys(opens in new tab)](https://support.claude.com/en/articles/16764057-create-surveys-for-your-organization) cover the third.
- **Does this spend make sense for us?** This one is yours to answer. You know your organization's priorities, so you're the one who can say which work you want more of. The answer can differ from one team to the next, and it can change as members find new uses.

The order matters. Look at the spend, understand what it's tied to, and then decide. A decision made that way is one you can explain, whether it leads to more room for a team, less, or no change at all.

These aren't questions you answer once. As your members settle into unified Claude, the mix of work may take some time to settle, so it helps to have a specific person or team responsible for reviewing these numbers on a regular basis.

## Go deeper[](https://academy.claude.com/tutorials/claude-enterprise-spend-controls)

You can now look at your data, adjust your controls where it makes sense, and make the case for what you decide. To go deeper into any of these topics, see the resources below.

**The move to unified Claude**

- [Set up and manage the new unified Claude experience for your Enterprise organization(opens in new tab)](https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization): turning it on, rollout, how usage is reported, and `Efficient mode`
- [The unified Claude experience: what admins need to know(opens in new tab)](https://academy.claude.com/tutorials/unified-claude-experience-for-admins): an overview of cost, controls, rollout, and data retention
- [Unified Claude: end-user rollout kit(opens in new tab)](https://academy.claude.com/tutorials/claude-enterprise-end-user-rollout-kit): materials for telling your members about the move
- [Set up role-based permissions on Enterprise plans(opens in new tab)](https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans): custom roles that set which features members can access

**Seeing your usage and spend**

- [View usage analytics for Team and Enterprise plans(opens in new tab)](https://support.claude.com/en/articles/12883420-view-usage-analytics-for-team-and-enterprise-plans): the analytics dashboard and the spend report
- [How am I billed for my Enterprise plan?(opens in new tab)](https://support.claude.com/en/articles/11526368-how-am-i-billed-for-my-enterprise-plan): the Usage page and spend limits
- [Get started with smart reports(opens in new tab)](https://support.claude.com/en/articles/16893491-get-started-with-smart-reports): how they work, what they show, and how to create one
- [Create surveys for your organization(opens in new tab)](https://support.claude.com/en/articles/16764057-create-surveys-for-your-organization): asking your members short questions and reviewing the answers
- [Use analytics chat to ask Claude about usage(opens in new tab)](https://support.claude.com/en/articles/14729354-use-analytics-chat-to-ask-claude-about-usage): what you can ask, and how to review and export results

**Bringing data into your own tools**

- [Analytics API(opens in new tab)](https://platform.claude.com/docs/en/manage-claude/analytics-api): engagement, adoption, and cost data, and how to get access
- [Usage and Cost Analytics API(opens in new tab)](https://platform.claude.com/docs/en/manage-claude/usage-cost-analytics-api): token usage and cost, by model and other dimensions
- [Monitor Claude Cowork activity with OpenTelemetry(opens in new tab)](https://support.claude.com/en/articles/14477985-monitor-claude-cowork-activity-with-opentelemetry): streaming Cowork events into the observability tools you already use

**Controlling spend**

- [Manage groups and group spend limits on Enterprise plans(opens in new tab)](https://support.claude.com/en/articles/13799932-manage-groups-and-group-spend-limits-on-enterprise-plans): creating groups, setting group spend limits, and which spend limit applies
- [Manage pooled group budgets on Enterprise plans(opens in new tab)](https://support.claude.com/en/articles/17005973-manage-pooled-group-budgets-on-enterprise-plans): how pooled budgets work, and how to set and monitor them
- [Spend Limits API(opens in new tab)](https://platform.claude.com/docs/en/manage-claude/spend-limits-api): individual spend limits and spend limit increase requests
- [Set a default model for your organization(opens in new tab)](https://support.claude.com/en/articles/15330088-set-a-default-model-for-your-organization): the model and effort level new conversations start on
- [Manage model access for your organization(opens in new tab)](https://support.claude.com/en/articles/15694740-manage-model-access-for-your-organization): which models members can use, and capping the effort level

Was this helpful?
