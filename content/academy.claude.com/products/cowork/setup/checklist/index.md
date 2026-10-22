# Setup checklist

Get the fundamentals in place so your team can start using Cowork. Your progress saves in this browser.

0 of 18 complete

### Plan

0 / 2

1. 

   Prepare for rollout

   Finish phase 1 of the administrator guide, the technical setup, before you invite anyone.

   [Read the guide](https://academy.claude.com/tutorials/claude-cowork-enterprise-administrator-guide)
2. 

   Govern scaled workflows

   Learn how skills, plugins, and connectors get authored and shared.

   [Read the playbook](https://academy.claude.com/tutorials/scaling-workflows-with-claude-cowork-at-your-organization)

### Access control

0 / 6

1. 

   Before you turn on single sign-on (SSO) or provisioning

   Understand parent organizations, merging organizations, and what happens to people’s existing accounts before you require SSO.

   [Read first (opens in new tab)](https://support.claude.com/en/articles/10276682-important-considerations-before-enabling-single-sign-on-sso-and-jit-scim-provisioning)
2. 

   Verify your domain and connect SSO

   Verify your domain, then connect your identity provider (like Okta, Entra, or Google) so your members sign in with single sign-on. On Enterprise plans, claiming the domain, which migrates existing personal accounts into your organization, is an optional, separate step that comes after single sign-on is enforced and provisioning is live, and it can’t be undone.

   [Set up SSO (opens in new tab)](https://support.claude.com/en/articles/13132885-set-up-single-sign-on-sso)
3. 

   Set up provisioning

   Choose just-in-time (JIT) provisioning, which creates accounts at first sign-in, or directory sync (SCIM, Enterprise plans), which also removes them automatically when you unassign people in your identity provider.

   [Set up provisioning (opens in new tab)](https://support.claude.com/en/articles/13133195-set-up-jit-or-scim-provisioning)
4. 

   Learn how directory sync works

   See how people and groups sync from your identity provider to your organization: what syncs, how often, and what happens when someone changes teams.

   [Read the guide (opens in new tab)](https://support.claude.com/en/articles/14499648-how-scim-sync-works-for-enterprise-organizations)
5. 

   Assign roles to groups

   Assign custom roles to groups to decide which features and connectors each group can use.

   [Set up roles (opens in new tab)](https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans)
6. 

   Create custom roles

   Define your own roles, like billing owner or read-only auditor, when the built-in roles don’t fit.

   [Manage roles (opens in new tab)](https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans)

### Spend controls

0 / 2

1. 

   Set initial spend controls

   Put guardrails on cost from day one. On usage-based Enterprise plans, set a per-user monthly spend limit for each group.

   [Configure limits (opens in new tab)](https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans)
2. 

   Read the Enterprise consumption guide

   How Cowork consumption is measured and billed, what drives spend, and how to size limits for your pilot and rollout cohorts.

   [Read the guide (opens in new tab)](https://support.claude.com/en/articles/14782391-claude-enterprise-consumption-guide)

### Connectors

0 / 2

1. 

   Add connectors for your team

   Turn on connectors for the tools your teams already use, like Google Drive, Slack, GitHub, and Jira. Start with read-only access, then expand.

   [Manage connectors (opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)
2. 

   Build custom connectors

   Connect Cowork to your internal systems. Wrap an internal API or data source as a connector your whole organization can use.

   [Build a connector (opens in new tab)](https://claude.com/docs/connectors/building)

### Desktop deployment

0 / 2

1. 

   Install the Claude desktop app

   Cowork needs the desktop app open to work with local files and local connectors, and to use a browser during a task. It can also run on the web and mobile, in beta: that’s on by default for Team plans; on Enterprise plans an owner turns it on and then grants it to groups through custom roles, and it isn’t available with the HIPAA configuration applied.

   [Read the install guide (opens in new tab)](https://support.claude.com/en/articles/10065433-install-claude-desktop)
2. 

   Configure Claude for Mac and Windows

   Use managed policies to control updates, extensions, local MCP servers, and the folders Cowork can reach.

   [Set up managed settings (opens in new tab)](https://support.claude.com/en/articles/12622667-enterprise-configuration-for-claude-desktop)

### Monitoring and analytics

0 / 4

1. 

   View usage analytics

   Track assigned seats, active members, and Cowork sessions across your organization.

   [Read the guide (opens in new tab)](https://support.claude.com/en/articles/12883420-view-usage-analytics-for-team-and-enterprise-plans)
2. 

   Usage limit best practices

   Share habits that help people get more from their usage limits, like planning conversations and batching related questions.

   [Read best practices (opens in new tab)](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)
3. 

   Pull engagement data via the Analytics API

   Query adoption and engagement data programmatically so you can pipe it into your own BI tools and dashboards.

   [Read the API reference (opens in new tab)](https://support.claude.com/en/articles/13694757-get-started-with-the-claude-enterprise-analytics-api)
4. 

   Monitor Cowork with OpenTelemetry

   Stream Cowork events, like prompts, tool calls, file access, and approval decisions, to your monitoring tools with OpenTelemetry.

   [Set up OpenTelemetry (opens in new tab)](https://support.claude.com/en/articles/14477985-monitor-claude-cowork-activity-with-opentelemetry)
