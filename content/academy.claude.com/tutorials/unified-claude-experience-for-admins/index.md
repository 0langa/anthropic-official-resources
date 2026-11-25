# The unified Claude experience: what admins need to know

Chat and Cowork merge together into one Claude experience on web, desktop, and mobile.

5 minClaude

[Open Claude](https://claude.ai/new)

![](https://academy.claude.com/assets/v1/thumbnail.light-gfbzb7mm.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-llbi0hsh.png)

**Availability.** Available on Team and Enterprise plans. Owners and Primary Owners can turn it on for the whole organization. On Enterprise plans, to start with selected roles, first move other members to a custom role with it turned off and add some members to a role with `Chat and Cowork unified` turned on. Then turn it on for the organization in `Organization settings > Capabilities`. In the list of roles that opens, every eligible custom role starts selected, so clear the role with it turned off and any other role that shouldn't have it. On Enterprise plans, if no admin had turned it on or off for your organization, it turned on by default on November 16, 2026. Where `Chat` or `Cloud code execution and file creation` was off, it turns on as soon as both are on. Role settings didn't change on November 16, so members on a custom role get it only if that role includes `Chat and Cowork unified`. On December 8, 2026, if your Enterprise organization is still on by default, unified Claude turns on for custom roles that include `Chat` and `Cloud code execution and file creation`, even if an admin turned it off for that role. You can turn it off again by role after that. If an admin has turned it on or off for your organization, that choice stays, and nothing changes on December 8. On Team plans, if you take no action, it turns on by default on the date in your general availability email. To keep it off, select `Keep disabled` in `Organization settings > Capabilities` before then. Owners and Primary Owners can turn `Chat and Cowork unified` off at any time in `Organization settings > Capabilities`.

## Overview[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

Members no longer choose between chat and Cowork before they start. Conversations start as a chat. When a task needs to run code or work with files, Claude continues the same conversation in an isolated cloud sandbox managed by Anthropic, then returns the finished work for review.

**One conversation, two modes.** Claude makes the call to upgrade a chat to a workspace when your task needs to do something, like run code, create or edit files, analyze a dataset, or work across connected tools. Claude usually stays in chat for questions, brainstorming, and summarizing something you paste in.

- **Work moves across devices.** Members can start a task in the desktop app and pick it up on web or mobile.
- **Local access stays optional.** Through the desktop app, members can link their computers so Claude can work with local folders, local MCP servers, and applications, governed by your device policies, and by `Computer access` for web, mobile, and scheduled tasks.
- **The conversation stays on record.** Chat history, sharing, export, the Compliance API, and your data retention setting all work from the conversation.
- **A sandbox for each conversation.** Each conversation that needs one gets its own virtual machine, managed by Anthropic. After a few minutes idle, it stops and its disk is saved as an encrypted snapshot.

## Cost and controls[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

### Spend[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

- **Pricing stays usage-based** on usage-based Enterprise plans, and the spend controls you have today apply. Depending on the task, agentic work can use more tokens than a quick chat; Claude Enterprise admins have controls for managing this usage.
- **Spend limits** on Enterprise plans can be set at the organization, group, and member level, and pooled group budgets give a group one shared monthly amount to draw from.
- **On Team plans,** each seat comes with included usage, and agentic work can use more of it than a quick chat. If you've turned on usage credits, work beyond the included usage is billed at standard API rates, so your costs may increase; if not, members wait for their usage limit to reset. In `Organization settings > Usage`, Owners and Primary Owners can set a monthly limit on usage-credit spend for the whole organization and, where available, for individual members.
- **Your model allowlist** applies to unified Claude.
- **`Efficient mode`** on Enterprise plans keeps unified Claude on Sonnet and Haiku models, and new sessions start on Claude Sonnet 5.5 at low effort. Turn it on for the whole organization on the `Models` page, or for specific custom roles. Other products aren't affected.

### Security controls[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

- **Identity carries over.** SSO (SAML/OIDC), SCIM provisioning, and tenant restrictions apply, with no separate sign-in.
- **Connector policies** (`Blocked`, `Needs approval`, and per-role restrictions) are enforced by Anthropic outside the sandbox, on every remote connector call. Turn off `Always allow` to have Claude ask permission
- **Sharing.** Conversations where Claude did agentic work, like running code or creating files, can be shared only when both `Share chats` and `Share cloud sessions` are on.
- **Network egress** is off by default for Enterprise. Choose off, package managers only, a custom list of domains, or all domains.
- **Approval modes.** Turn off `Skip all approvals`, `Automatically approve`, and `Always allow` so Claude asks before calling a connector or using a linked computer. Shell and file work inside the cloud sandbox doesn't ask.
- **`Computer access` and `Trusted Devices`** control whether web, mobile, and scheduled tasks can use a member's linked computer, and require members to verify each new device.

## Management and visibility[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

### Turn on the unified experience[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

- **Requires** `Chat` and `Cloud code execution and file creation`. `Cowork` and `Cowork in the cloud` don't need to be on. Keep `Cowork` on for a role while its members still want to continue earlier Cowork tasks that ran on their computers: with `Cowork` off, those tasks open read-only and scheduled tasks on those computers stop. Before you turn `Cowork` off for a role, ask its members to run `/export` in those tasks.
- **Owners or Primary Owners** turn on `Chat and Cowork unified` in `Organization settings > Capabilities`, which gives it to everyone on a built-in role. To limit access on Enterprise plans, first move other members to a custom role with it turned off in `Organization settings > Roles`. Sync role membership through SCIM to add members in waves.
- **A list of roles opens when you turn it on,** if you have eligible custom roles. Every eligible custom role starts selected, including roles where you turned it off. A role missing either `Chat` or `Cloud code execution and file creation` shows grayed out, not selected. Clear each role where you turned it off, and any other role that shouldn't have it, then confirm. Built-in roles and roles set to `All capabilities` or `All generally available` can't be cleared, so their members get it too unless you move them first.
- **Most scheduled tasks keep running with no changes.** Tasks that use files or tools on a member's computer need that computer on and the Claude desktop app open. Session history carries over, and sessions run locally stay on that computer.

### Recommended rollout[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

1. **Review.** Share with IT, security, and procurement. Your review covers two components: Claude chat and Cowork in the cloud.
2. **Pilot** in a sandbox organization or with one role, after checking your egress, connector, sharing, and `Computer access` settings.
3. **Expand in waves** after two to four weeks of monitoring usage and feedback.

### Usage and analytics[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

- **Its own line.** Usage is reported as `Chat and Cowork unified`. Only where it's filed changes, not how it's counted or billed.
- **Add it in.** When you total Chat and Cowork spend, tokens, or messages, include the unified line. For headcount, use the overall active users count.
- **Analytics.** A `Chat and Cowork unified` analytics dashboard sits under `Analytics > Chat and Cowork unified`. New activity can take up to two days to show up.
- **APIs.** Existing keys work with the Compliance, Analytics, Cost and Usage, and Admin APIs.

### Data retention[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

- **Conversations,** and the cloud sessions started in them, follow member deletion or your custom retention setting (30-day minimum), [per our data retention practices(opens in new tab)](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data).
- **Not covered by custom retention:** standalone Cowork cloud sessions, scheduled task runs, Cowork history stored on a member's computer, and memory of members who have left your organization.

**Important exceptions.** Not yet available for organizations using zero data retention for Claude Code, the HIPAA-ready configuration, or customer-managed encryption keys. These organizations stay on their current configuration. On mobile, admins can't yet limit access to selected roles, but can block mobile access through your identity provider.

## Learn more[](https://academy.claude.com/tutorials/unified-claude-experience-for-admins)

- [Set up and manage the new unified Claude experience for your Enterprise organization (Help Center)(opens in new tab)](https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization)
- [Set up and manage the new unified Claude experience for your Team organization (Help Center)(opens in new tab)](https://support.claude.com/en/articles/18342806-set-up-and-manage-the-new-unified-claude-experience-for-your-team-organization)
- [Claude Cowork and unified Claude security best practices (Trust Center)(opens in new tab)](https://trust.anthropic.com/resources?s=uukz8hyx7jmdmo80lys36s&name=claude-cowork-and-unified-claude-security-best-practices)

Was this helpful?
