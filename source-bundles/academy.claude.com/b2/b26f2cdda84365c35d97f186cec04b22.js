import{$f as e,Zf as t}from"../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"introduction",children:"Introduction"}),`
`,(0,n.jsx)(r.h3,{id:"what-is-claude-cowork",children:"What Is Claude Cowork?"}),`
`,(0,n.jsx)(r.p,{children:"Claude Cowork brings Claude’s agentic capabilities to Claude.ai and the Claude Desktop app, enabling multi-step knowledge work beyond coding. Rather than responding to individual prompts sequentially, Claude can tackle complex, multi-step tasks and execute them on a user’s behalf. Users delegate work and return to polished deliverables like formatted documents, organized files, synthesized research, and more."}),`
`,(0,n.jsxs)(r.p,{children:["Claude Cowork sits alongside Chat in ",(0,n.jsx)(r.a,{href:"http://claude.ai",children:"Claude.ai"}),", the API, and Claude Code in the Claude product lineup. What distinguishes it for enterprise is the combination of local file access, connectors to the tools your teams already use (e.g. Slack, Google Workspace, M365), a plugin ecosystem with repeatable workflows that organizations can curate and govern, and scheduled tasks that run on a cadence. It requires the Claude Desktop app on macOS, Windows, or Linux (where support is in beta) and is available on all Claude paid plans."]}),`
`,(0,n.jsx)(r.h3,{id:"requirements",children:"Requirements"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Desktop app:"})," Claude Cowork requires the desktop app for macOS, Windows, or Linux. Linux support (Debian and Ubuntu) is in beta, and the Cowork tab is available there alongside Chat and Code. Claude Cowork is not currently available on mobile."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude subscription:"})," Claude Cowork is available to paid Claude plans (Pro, Max, Team, and Enterprise), with some features still in research preview. Learn more ",(0,n.jsx)(r.a,{href:"https://claude.com/pricing#team-&-enterprise",children:"here"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Active internet connection:"})," Required throughout the session."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Connectors:"})," Claude Cowork is most powerful when you connect it to your favorite apps, services, and data sources via connectors."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"phase-1-technical-setup",children:"Phase 1: Technical Setup"}),`
`,(0,n.jsx)(r.p,{children:"You’re building the delegation infrastructure:  identity controls gate who can delegate work to Claude, connectors give Claude the tools to do that work, and observability lets you see what’s happening. Complete these steps to deploy Claude Cowork to your organization."}),`
`,(0,n.jsx)(r.h3,{id:"planning-prerequisites",children:"Planning & Prerequisites"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Complete these before touching any admin console. Security review can run in parallel with the other steps."})}),`
`,(0,n.jsx)(r.h4,{children:"Assemble your rollout team"}),`
`,(0,n.jsx)(r.p,{children:"Identify who you need before you start. Later steps stall if these people aren't looped in early."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Primary Owner (one per org; confirm who holds it)"}),`
`,(0,n.jsx)(r.li,{children:"DNS admin and IdP admin (already done if on Claude Enterprise)"}),`
`,(0,n.jsx)(r.li,{children:"Connector owners — one per data source (M365, Slack, Google Workspace)"}),`
`,(0,n.jsx)(r.li,{children:"MDM admin, if deploying centrally"}),`
`,(0,n.jsx)(r.li,{children:"Internal champions — identify 2–3 per department as part of your pilot group. These are the people who will drive peer adoption in Phase 2."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Plan desktop app installation"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Claude Cowork is available on both the web and the Claude Desktop app. On the Claude Desktop app, decide whether you’ll push via MDM or have users self-install, and plan comms so users know to install it before launch day. See the Claude Desktop collection for installation resources. See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10065433-installing-claude-desktop",children:"Installing Claude Desktop"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Choose your org architecture"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Decide between a single org with role-based access controls (RBAC) and groups, parent-child, or multiple parents based on how many identity providers you have and how much data isolation you need. This decision shapes every step below and is challenging to change later."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Confirm endpoint and network prerequisites"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Claude Cowork runs locally on each user's machine, with code execution sandboxed in a kernel-isolated environment. As a result, it has different infrastructure requirements than claude.ai. For an overview of how Claude Cowork differs from claude.ai, see ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13345190-get-started-with-cowork#h_bd829a921b",children:"Get started with Cowork"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Verify your fleet and network can support it — endpoint and network issues are the most common cause of deployment problems. Ensure that required domains are allowlisted, minimum OS versions are met, and any proxy or firewall rules permit Claude Cowork traffic."}),`
`,(0,n.jsx)(r.h4,{children:"Plan billing and seats"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Confirm that your ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13799932",children:"seat allocation"})," covers everyone you intend to provision via SCIM. Even on consumption-based billing, seat count gates provisioning — if SCIM tries to provision more users than you have seats, provisioning silently fails with no error."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Start your security review"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Assemble your review packet from the ",(0,n.jsx)(r.a,{href:"https://trust.anthropic.com",children:"Anthropic Trust Center"})," and the ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13364135",children:"Use Claude Cowork safely"})," article. This can run in parallel with the rest of Phase 1. Note that Audit Logs do not cover Claude Cowork yet. The Compliance API returns Claude Cowork session transcripts, in beta for Claude Enterprise organizations."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"identity-access",children:"Identity & Access"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"SSO before RBAC. Do not enforce either until both are fully configured."})}),`
`,(0,n.jsx)(r.h4,{children:"Set up identity and SSO"}),`
`,(0,n.jsx)(r.p,{children:"Identity is the foundation everything else depends on. RBAC, connectors, and deployment all reference the groups you create here."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["For existing Claude Enterprise orgs, confirm your SSO and SCIM configuration and set up IdP groups for role-based access controls . For new orgs, complete the ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/17270717-identity-management-sso-jit-scim",children:"full identity setup"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"Create IdP groups before configuring RBAC — RBAC references groups, not individual users. Nested IdP groups are not supported; only direct members sync."}),`
`,(0,n.jsx)(r.li,{children:"SSO controls who can log in; RBAC (next step) controls which Claude product surfaces they can access — including Claude Cowork."}),`
`,(0,n.jsx)(r.li,{children:"Only enforce SSO after both groups/mappings and RBAC roles are fully configured and tested. Enforcing early locks out everyone who isn’t yet provisioned, and there’s no self-service recovery."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Configure Role-based access controls"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Enable Claude Cowork at the org level, then create ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13930452",children:"custom roles"})," with the Claude Cowork entitlement and assign them to groups. See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13930458",children:"RBAC setup"})," for configuration steps."]}),`
`,(0,n.jsxs)(r.li,{children:["Roles are additive — a user in multiple groups gets the union of permissions. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13799932",children:"Spend limits"})," use the opposite rule: the most restrictive limit across a user’s groups wins."]}),`
`,(0,n.jsx)(r.li,{children:"Migrate to enforcement last. There is no in-product undo — migrating before roles are configured drops every user to zero permissions."}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"connectors-hardening",children:"Connectors & Hardening"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Configure after RBAC is in place so access controls are set before connectors go live."})}),`
`,(0,n.jsx)(r.h4,{children:"Set up connectors"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Connectors let Claude Cowork reach into the tools your teams already use — Slack, Google Workspace, M365, and more — so Claude can read, search, and act on real work data."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Connectors use a two-gate model: an admin enables the connector org-wide, then each user individually OAuths to link their account. There is no per-group connector control — enabling a connector makes it available to everyone in the org. Configure connectors in the admin console under your organization's connector settings."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Prioritize enabling the connectors that map to where your users already do their work. Users who can connect to their everyday tools from day one generate fewer support requests and onboard faster."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Set Up Plugins"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Plugins are how you curate the Claude Cowork experience for your organization. A seeded marketplace gives users high-value workflows from day one instead of starting from scratch."}),`
`,(0,n.jsxs)(r.li,{children:["Seed your private plugin marketplace if applicable. Configure distribution policies and pre-approve plugins before launch. See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837433",children:"Manage Claude Cowork plugins for your organization"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Configure security controls"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Harden your deployment by configuring network egress allowlists, mount controls, and desktop extension allowlists. These security controls are configured in the admin console under your organization's Claude Cowork settings."}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"deployment-launch",children:"Deployment & Launch"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Deploy Claude Cowork after identity, access, and connectors are all confirmed working."})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Deploy the desktop app"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Push the installer via your MDM tool or allow users to self-install. Use the MSIX installer on Windows (not .exe). See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12611117",children:"Deploy for macOS"}),", ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12622703",children:"Deploy for Windows"}),", and ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12622667",children:"Enterprise configuration"})," for managed settings."]}),`
`,(0,n.jsx)(r.li,{children:"After deployment, verify: the VM image downloads, the app launches, and the user authenticates via SSO."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Wire observability"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Set up your OTEL endpoint to export Claude Cowork session data to your SIEM or observability platform. OTEL provides real-time, event-level telemetry for Claude Cowork sessions. Test in a sandbox first if you’re running parent-child. See ",(0,n.jsx)(r.a,{href:"https://claude.com/docs/cowork/monitoring",children:"Claude Cowork monitoring & observability"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Pre-launch checklist"}),`
`,(0,n.jsx)(r.p,{children:"Before opening Claude Cowork to your pilot group, confirm:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"One user has completed a real task end-to-end"}),`
`,(0,n.jsx)(r.li,{children:"OTEL dashboards are live and receiving data"}),`
`,(0,n.jsx)(r.li,{children:"Plugin marketplace is seeded with at least the Anthropic plugins relevant to your pilot teams (if applicable)"}),`
`,(0,n.jsx)(r.li,{children:"Support channel is live and escalation paths are documented"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"phase-2-change-management-launch",children:"Phase 2: Change Management & Launch"}),`
`,(0,n.jsx)(r.p,{children:"Claude Cowork introduces a fundamentally different way of working with Claude. In Chat, users collaborate — prompting back and forth to work toward an answer together. In Claude Cowork, users delegate — they describe a task, provide context and tools, define what good looks like, and come back to finished work."}),`
`,(0,n.jsx)(r.p,{children:"An ideal Claude Cowork task produces a deliverable: a document, a financial model, a research memo, a formatted report. A successful task means the user got the output they expected, in the form they needed. This is the shift your enablement program needs to drive: from chatting to creating."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Companion guide:"})," Each phase below gives you the framework — what to think about and why it matters. For the operational detail of how to scale Claude Cowork workflow across your team, see ",(0,n.jsx)(r.a,{href:"/tutorials/scaling-workflows-with-claude-cowork-at-your-organization",children:"Scaling workflows with Claude Cowork at your organization"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"claude-cowork-analytics",children:"Claude Cowork Analytics"}),`
`,(0,n.jsx)(r.p,{children:"Before defining success metrics, know where your data lives. Claude Cowork usage data is available through two channels: the admin dashboard in claude.ai and the Analytics API. Together, they give you visibility into how your organization is adopting and using Claude Cowork — from high-level active user trends down to which skills and connectors see the most use."}),`
`,(0,n.jsx)(r.h4,{children:"Admin Dashboard"}),`
`,(0,n.jsx)(r.p,{children:"The admin dashboard (claude.ai org analytics) now includes Claude Cowork alongside Chat and Claude Code. Below is an overview of what you’ll be able to see for Claude Cowork."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Active users:"})," The time-series chart gains a Claude Cowork filter, so you can track daily, weekly, and monthly active users alongside your other Claude products."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Cowork overview card:"})," Shows total sessions and actions across the org for any date range, providing a quick read on overall engagement."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Data latency:"})," Dashboard data refreshes on a T+1 schedule (yesterday's data is available today)."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12883420",children:"View usage analytics for Team and Enterprise plans"})," for more details."]}),`
`,(0,n.jsx)(r.h4,{children:"Analytics API"}),`
`,(0,n.jsx)(r.p,{children:"The Analytics API (Enterprise plan only) provides programmatic access to Claude Cowork usage data, aggregated per day. Claude Cowork adds the following metrics:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Per-user daily activity:"})," Distinct sessions started, tool actions completed, dispatch turns (autonomous background work — Claude Cowork-exclusive), messages sent, skill invocations (total and distinct), and connector invocations (total and distinct)."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Org-wide summaries:"})," Claude Cowork DAU, WAU, and MAU counts alongside existing Chat and Claude Code figures, so you can compare adoption across products."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skill and connector rankings:"})," Each entry now shows how many Claude Cowork sessions invoked it, so you can see which tools your Claude Cowork users actually reach for."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["For the full endpoint specification, query parameters, and response schemas, see the ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/15330651-claude-enterprise-admin-api-reference-guide",children:"Claude Enterprise Admin API reference guide"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"define-success-metrics",children:"Define Success Metrics"}),`
`,(0,n.jsx)(r.p,{children:"The metrics that prove your rollout is working answer three questions — and the answers should improve week over week."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Are people using it?"}),`: You're looking for the gap between "has access" and "has delegated a task."`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"How deeply?:"})," You're looking for whether users are actually completing work or just chatting."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Is it paying off?:"})," You’re looking beyond “time saved,” and whether Cowork is being used for work that matters"]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"1. Are people using it?"}),(0,n.jsx)(r.th,{children:"2. How deeply?"}),(0,n.jsx)(r.th,{children:"3. Is it paying off?"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Activation rate (logged in / licensed)"}),(0,n.jsx)(r.td,{children:"Sessions per active user"}),(0,n.jsx)(r.td,{children:"Hours re-allocated per week (self-reported)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Weekly actives by cohort"}),(0,n.jsx)(r.td,{children:"Advanced-feature uptake (connectors, skills, plugins)"}),(0,n.jsx)(r.td,{children:"Named wins per cohort"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Return rate (week-2 retention)"}),(0,n.jsx)(r.td,{children:"Champion-to-user touchpoints"}),(0,n.jsx)(r.td,{children:"Workflows now running on Claude"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Days from training to first real task"}),(0,n.jsx)(r.td,{children:"Help-session participation"}),(0,n.jsx)(r.td,{children:"Cost-to-value comparison"})]})]})]}),`
`,(0,n.jsx)(r.p,{children:"Value is the hardest column to fill because the easiest metric to reach for — time saved — misses the biggest source of impact: work that wasn’t happening before. Anchor value measurement on three questions:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"What new work is getting done that wasn’t feasible before?"}),`
`,(0,n.jsx)(r.li,{children:"What business outcome is tied to the new work?"}),`
`,(0,n.jsx)(r.li,{children:"Where time is being reclaimed, what’s it going toward?"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Run period user surveys anchored to specific workflows."}),`
`,(0,n.jsx)(r.p,{children:"If any column is underperforming, look left first. Low value almost always traces back to an engagement or adoption problem upstream."}),`
`,(0,n.jsx)(r.h3,{id:"identify-enable-champions",children:"Identify & Enable Champions"}),`
`,(0,n.jsx)(r.p,{children:"Champions are enthusiastic adopters who can help drive peer adoption across their teams.  Identify internal champions in each department as part of your pilot group and equip them early so they can support their teams from day one. Look for people already experimenting with AI tools or who volunteered for the pilot."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Select 2–3 champions per department or team"}),`
`,(0,n.jsx)(r.li,{children:"Give champions early access so they build fluency before launch."}),`
`,(0,n.jsx)(r.li,{children:"Equip champions with key talking points on the differences between Claude Cowork and Chat, who to contact for help, and how to report issues."}),`
`,(0,n.jsx)(r.li,{children:"Create a dedicated communication channel for champions to share wins, tips, and common questions,"}),`
`,(0,n.jsx)(r.li,{children:"Recognize and reward champion contributions"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"launch-communications",children:"Launch Communications"}),`
`,(0,n.jsx)(r.p,{children:"Stage your communications so users know what’s coming, why it matters, and where to go for help. Claude Cowork is accessed from the Claude desktop app and works with your files, tools, and browser — it's a different experience from claude.ai and your messaging should set that expectation."}),`
`,(0,n.jsx)(r.p,{children:"Every message should reinforce the delegation model: Claude Cowork produces deliverables, not just answers. Users describe a task, provide context and tools, define what good looks like, and come back to finished work."}),`
`,(0,n.jsx)(r.h4,{children:"Pre-launch (2 weeks before)"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Send a message from leadership explaining what Claude Cowork is, why the org is adopting it, and what users can expect. Emphasize that Claude Cowork is for delegating real work — not just chat."}),`
`,(0,n.jsx)(r.li,{children:"Share the training schedule and point users to self-service resources. Let them know who their department champion is."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Launch day"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Send the onboarding guide with install instructions (or confirm the app is already pushed via MDM)."}),`
`,(0,n.jsx)(r.li,{children:"Announce the support channel and office hours schedule."}),`
`,(0,n.jsx)(r.li,{children:"Have champions available in their departments to help with first-time setup and answer questions."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Post-launch (week 1)"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Share early usage tips and quick wins. Highlight specific tasks users have successfully delegated — emphasize the deliverable they received, not just that they used Cowork."}),`
`,(0,n.jsx)(r.li,{children:"Surface early success stories from champions or pilot users."}),`
`,(0,n.jsx)(r.li,{children:"Send a reminder about training resources and the support channel."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Ongoing"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Share regular tips and feature spotlights (e.g., new plugins, scheduled task patterns, Chrome workflows)."}),`
`,(0,n.jsx)(r.li,{children:"Announce when new connectors are approved and live. Many connectors require a two-gate authentication system (admin + user). Share directions to authenticate if the connector requires individual OAuth setup."}),`
`,(0,n.jsx)(r.li,{children:"Publish monthly usage updates to leadership using the metrics defined above."}),`
`,(0,n.jsx)(r.li,{children:"Run quarterly reviews to assess adoption progress and recalibrate targets."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"phase-3-enablement-training",children:"Phase 3: Enablement & Training"}),`
`,(0,n.jsx)(r.p,{children:"Without enablement, users may treat Claude Cowork as indistinguishable from Chat. Your enablement program needs to build the muscle for delegation — describing a task, providing context and tools, and coming back to finished work."}),`
`,(0,n.jsx)(r.h3,{id:"structured-training-programs",children:"Structured Training Programs"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"All-Staff 101 sessions:"})," 30–60 minute workshops where every attendee completes a real delegation-style task before the session ends. The task should produce a deliverable — not just a chat response. Cover the interface and file access in the context of completing that task, not as standalone steps."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Department-level enablement:"})," Customized sessions with exec sponsors, focused on workflows relevant to each team. Each session should center on a real task from the team’s actual work — not a demo walkthrough. Equip teams with ready-to-customize workflow templates and the skills and plugins relevant to their function."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Office hours:"})," Weekly or biweekly drop-in sessions where users bring real work and get hands-on help from champions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"LMS integration:"})," Package training into trackable courses to monitor completion rates across departments and identify teams that need additional support."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"self-service-resources",children:"Self-Service Resources"}),`
`,(0,n.jsx)(r.h4,{children:"For end users"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/courses/introduction-to-claude-cowork",children:"Introduction to Claude Cowork"})," — self-paced end-user course covering getting started, agents, and plugins."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13345190",children:"Get started with Claude Cowork"})," — Set up Claude Cowork, select folders, and complete your first task."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13364135",children:"Use Claude Cowork safely"})," — Safety model, guardrails, and responsible use guidance for Claude Cowork."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837440",children:"Use plugins in Claude Cowork"})," — Plugin ecosystem, marketplace, and how to install and use plugins."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"For admins"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13455879",children:"Use Claude Cowork on team and enterprise plans"})," — Enterprise-specific setup, licensing, and admin controls for Claude Cowork."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837433",children:"Manage plugins for your organization"})," — Marketplace setup, distribution policies, and plugin governance for admins."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"General AI literacy"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/",children:"Claude Academy"})," — interactive courses on AI fundamentals and prompt engineering."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/collections/ai-fluency",children:"AI Fluency Course"})," — broader AI literacy for users new to working with AI."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",children:"Prompt Engineering Guide"})," — techniques for getting better results from Claude."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com",children:"Help Center"})," — comprehensive documentation and FAQs."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"claude-cowork-features-to-cover",children:"Claude Cowork Features to Cover"}),`
`,(0,n.jsx)(r.p,{children:"These are the key capabilities users should understand."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14128542",children:(0,n.jsx)(r.strong,{children:"File access"})}),": Select which folders Claude Cowork can read from and write to. Finished work is delivered directly back to those folders."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164",children:(0,n.jsx)(r.strong,{children:"Connectors"})}),": Connect your apps and services so Claude can retrieve data and take actions within them."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12512180",children:(0,n.jsx)(r.strong,{children:"Skills"})}),": Instruction sets that Claude loads dynamically to improve performance on specialized tasks."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837440",children:(0,n.jsx)(r.strong,{children:"Plugins and marketplace"})}),": Plugin bundles that package skills, connectors, and subagents together. Available through your organization's private marketplace."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13854387",children:(0,n.jsx)(r.strong,{children:"Scheduled tasks"})}),": Tasks that run on-demand or automatically on a cadence of your choosing."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14116274",children:(0,n.jsx)(r.strong,{children:"Projects"})}),": Group related tasks into workspaces with their own files, context, and memory."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12012173",children:(0,n.jsx)(r.strong,{children:"Claude in Chrome"})}),": Use Claude’s capabilities directly in your browser."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"internal-support-channels",children:"Internal Support Channels"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Create a dedicated communications channel for Claude Cowork questions, tips, and troubleshooting. Champions should be active here daily during the first month."}),`
`,(0,n.jsx)(r.li,{children:"Run weekly office hours with champions where users can bring real tasks and get live help."}),`
`,(0,n.jsx)(r.li,{children:"Integrate with your IT helpdesk so Claude Cowork issues route to the right team — separate from general claude.ai support if possible. Ensure admins go live with clear escalation paths so users know exactly where to go if something breaks or to request access or more usage."}),`
`,(0,n.jsx)(r.li,{children:"Stand up monthly user groups for knowledge sharing — teams that have built useful skills or plugins present to the broader org."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"phase-4-scaling-adoption",children:"Phase 4: Scaling Adoption"}),`
`,(0,n.jsx)(r.p,{children:"Your pilot validated the approach. Scaling means replicating it — expanding to new teams, demonstrating business impact, and putting governance in place that grows with usage."}),`
`,(0,n.jsx)(r.h3,{id:"expanding-across-teams",children:"Expanding Across Teams"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Prioritize teams whose work regularly produces deliverables — reports, analyses, decks, formatted documents — and who already work in tools with available connectors in claude.ai."}),`
`,(0,n.jsx)(r.li,{children:"For each new team: identify 2–3 high-value delegation workflows, appoint a local champion, and deliver tailored onboarding using the department-level enablement sessions from Phase 3."}),`
`,(0,n.jsx)(r.li,{children:"Expanding means adding RBAC groups progressively and enabling additional connectors per team’s needs."}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"measuring-impact",children:"Measuring Impact"}),`
`,(0,n.jsx)(r.p,{children:"In Phase 2, you defined metrics across three columns: are people using it?, how deeply?, and is it paying off? At this stage, shift emphasis to the third section. Focus on outcomes that matter to leadership:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Pair quantitative data with qualitative examples such as short case studies from team leads illustrating real impact."}),`
`,(0,n.jsx)(r.li,{children:"Establish a regular reporting cadence (e.g., quarterly business reviews) to keep stakeholders informed."}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"governance",children:"Governance"}),`
`,(0,n.jsx)(r.p,{children:"As usage grows, your governance needs grow with it. Start with the org-level controls you configured in Phase 1, then refine as you observe what teams build. Today, some governance happens in-product and some requires manual processes outside of Claude Cowork. Plan for both"}),`
`,(0,n.jsx)(r.h4,{children:"What you can govern in-product today"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Connector access:"})," Org-wide on/off. When you enable a new connector, it’s available to everyone — plan your rollout communications accordingly."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Spend controls:"})," Group-based spend limits with most-restrictive precedence. An org-level cap overrides individual seat limits."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Plugin marketplace:"})," Curate which plugins appear in your organization's marketplace. Configure distribution policies, pre-approve plugins, and use group-level overrides to control availability per team. Works with SCIM groups."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"RBAC:"})," Control who can access Claude Cowork, Claude Code, and other product surfaces via custom roles assigned to groups."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"What requires manual governance today"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skill review and approval:"})," There is no in-product workflow for submitting, reviewing, and approving skills. If you want governance over skill creation, you’ll need to build a process outside of Claude Cowork — for example, a request form, a review committee, and a shared directory of approved skills."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Per-group connector access:"})," Connectors are currently org-wide (on/off). If you need different teams to have access to different connectors, this requires multiple orgs or a manual policy layer."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Peer-to-peer and peer-to-org sharing controls:"})," Sharing is currently an org-level toggle (on/off), not per-group."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Ongoing governance practices"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Maintain an allowlist of approved connectors, routing new requests through your standard change management process."}),`
`,(0,n.jsx)(r.li,{children:"Run quarterly curation reviews to archive stale skills and promote high-value workflows to official plugins. Champions can drive this process."}),`
`,(0,n.jsx)(r.li,{children:"Review data policies and audit cadences at each stage of rollout as the user base expands."}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"capability-governance",children:"Capability Governance"}),`
`,(0,n.jsx)(r.h4,{children:"Go live with the full platform"}),`
`,(0,n.jsx)(r.p,{children:"Claude Cowork’s value comes from capabilities working together — file access, connectors, skills, and code execution combine to produce finished work. As you scale, evaluate these additional capabilities as governance decisions, not just feature toggles:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Memory:"})," Enables Claude Cowork to retain context across sessions. Evaluate what level of persistent context fits your data policies."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Network egress (web search):"})," Controls what Claude Cowork can reach when researching or verifying information. Your network and data policies should drive this."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Office agents (Claude across apps):"})," Lets Claude work across applications. Consider whether your teams’ workflows cross application boundaries."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"building-a-lasting-program",children:"Building a Lasting Program"}),`
`,(0,n.jsx)(r.p,{children:"Scaling Claude Cowork isn’t a launch, it’s an ongoing program. The organizations that see compounding value are the ones that treat adoption as a discipline: continuously surfacing new use cases, curating the best workflows into reusable skills, and connecting what teams learn back into the enablement program."}),`
`,(0,n.jsxs)(r.p,{children:["For the full operational playbook — program ownership models, champion councils, quarterly review cadences, and long-term sustaining frameworks — see ",(0,n.jsx)(r.a,{href:"/tutorials/scaling-workflows-with-claude-cowork-at-your-organization",children:"Scaling workflows with Claude Cowork at your organization"}),"."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};