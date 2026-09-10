import{em as e,nm as t}from"../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...e.components},{Callout:i}=r;return i||a("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Deployment, Configuration, and Adoption Playbook"})}),`
`,(0,n.jsx)(r.p,{children:"This guide walks you through the four phases of a successful Claude Enterprise deployment: Technical Setup, Change Management & Launch, Enablement & Training, and Scaling Adoption. It also covers Claude.ai and Claude Code access controls, configuration options, and seat management."}),`
`,(0,n.jsx)(r.h2,{id:"phase-1-technical-setup",children:"Phase 1: Technical Setup"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Complete these technical configuration steps before launching Claude to your organization."})}),`
`,(0,n.jsx)(r.h3,{id:"authentication-access",children:"Authentication & Access"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Follow these steps to configure SSO:"})}),`
`,(0,n.jsxs)(r.p,{children:["Claude Enterprise supports SAML 2.0 and OIDC (OpenID Connect) for single sign-on (SSO). See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13132885-setting-up-single-sign-on-sso",children:"Setting Up SSO"})," for detailed configuration steps."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Test SSO:"})," Configure with a small pilot group before broad rollout."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Enable domain capture:"})," Automatically route users from your domain to your workspace. See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10276682-important-considerations-before-enabling-single-sign-on-sso-and-jit-scim-provisioning",children:"Domain Capture Setup"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Enforce SSO:"})," Require SSO for all access once configuration is validated."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"user-provisioning-options",children:"User Provisioning Options"}),`
`,(0,n.jsxs)(r.p,{children:["Choose your provisioning method based on your organization's needs. See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13133195-setting-up-jit-or-scim-provisioning",children:"User Provisioning Overview"})," for setup instructions."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"SCIM (recommended):"})," System for Cross-domain Identity Management enables automatic sync from your identity provider (IdP). See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13133195-setting-up-jit-or-scim-provisioning",children:"SCIM Setup Guide"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Just-in-Time (JIT):"})," Users are created upon first SSO login. Simple to set up but offers less control over access."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Manual:"})," Admin-managed invitations via the ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13133750-managing-members-on-team-and-enterprise-plans",children:"Admin Console"}),". Best for small, controlled pilots."]}),`
`]}),`
`,(0,n.jsxs)(i,{type:"note",children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Example: Phased Rollout with SCIM"})}),(0,n.jsx)(r.p,{children:"Many organizations use SCIM for a phased rollout approach:"}),(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Start with a pilot group of 50-100 users synced via SCIM"}),`
`,(0,n.jsx)(r.li,{children:"Monitor adoption and gather feedback for 2–4 weeks"}),`
`,(0,n.jsx)(r.li,{children:"Gradually expand SCIM groups to include additional departments"}),`
`,(0,n.jsx)(r.li,{children:"Enable organization-wide access once processes are established"}),`
`]})]}),`
`,(0,n.jsx)(r.h3,{id:"security-compliance",children:"Security & Compliance"}),`
`,(0,n.jsx)(r.p,{children:"Claude Enterprise includes robust security and compliance features designed for enterprise environments:"}),`
`,(0,n.jsxs)(r.p,{children:["Review security details at the ",(0,n.jsx)(r.a,{href:"https://trust.anthropic.com",children:"Anthropic Trust Center"})," and in the ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan",children:"Enterprise Plan Overview"}),"."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Data retention:"})," Conversations are retained per your policy and exportable via the ",(0,n.jsx)(r.a,{href:"https://trust.anthropic.com/",children:"Compliance API"})," and ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9970975-how-to-access-audit-logs",children:"Audit Logs"}),", which also provide full activity logging for security monitoring."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No model training:"})," Your organization's data is not used to train Claude models by default."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Role-based access:"})," Primary Owner, Owner, and Member roles provide granular permissions. See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9267276-roles-and-permissions",children:"Member Roles Guide"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"pre-launch-checklist",children:"Pre-Launch Checklist"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Important considerations before setting up Identity Management — ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10276682-important-considerations-before-enabling-single-sign-on-sso-and-jit-scim-provisioning",children:"Important Considerations"})]}),`
`,(0,n.jsxs)(r.li,{children:["SSO configured and tested — ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13132885-setting-up-single-sign-on-sso",children:"Setting Up SSO"})]}),`
`,(0,n.jsxs)(r.li,{children:["User provisioning configured — ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13133195-setting-up-jit-or-scim-provisioning",children:"Provisioning Guide"})]}),`
`,(0,n.jsx)(r.li,{children:"Security review completed with IT and information security teams"}),`
`,(0,n.jsx)(r.li,{children:"Data retention policies documented"}),`
`,(0,n.jsxs)(r.li,{children:["Compliance API and Audit log access configured — ",(0,n.jsx)(r.a,{href:"https://trust.anthropic.com/",children:"Trust Center"})," and ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9970975-how-to-access-audit-logs",children:"Audit Logs"})]}),`
`,(0,n.jsxs)(r.li,{children:["Set up Connectors — ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-pre-built-web-connectors-using-remote-mcp",children:"Information on Connectors"})]}),`
`,(0,n.jsxs)(r.li,{children:["Admin roles assigned — ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9267276-roles-and-permissions",children:"Member Roles"})]}),`
`,(0,n.jsx)(r.li,{children:"Claude Code seat configuration completed (see next section)"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"claude-code-access-seat-configuration",children:"Claude Code Access & Seat Configuration"}),`
`,(0,n.jsx)(r.h4,{children:"Understanding Claude Enterprise Seat Types for Claude Code"}),`
`,(0,n.jsx)(r.p,{children:"Claude Enterprise offers different seat types depending on your pricing model. The following table summarizes the options and their Claude Code access implications:"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Pricing Model"}),(0,n.jsx)(r.th,{children:"Seat Type"}),(0,n.jsx)(r.th,{children:"Claude Code Access"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Seat-Based (Legacy)"}),(0,n.jsx)(r.td,{children:"Standard"}),(0,n.jsx)(r.td,{children:"No"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Seat-Based (Legacy)"}),(0,n.jsx)(r.td,{children:"Premium"}),(0,n.jsx)(r.td,{children:"Yes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Usage-Based"}),(0,n.jsx)(r.td,{children:"Chat"}),(0,n.jsx)(r.td,{children:"No"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Usage-Based"}),(0,n.jsx)(r.td,{children:"Chat + Code"}),(0,n.jsx)(r.td,{children:"Yes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Usage-Based"}),(0,n.jsx)(r.td,{children:"Claude Enterprise"}),(0,n.jsx)(r.td,{children:"Yes"})]})]})]}),`
`,(0,n.jsx)(r.h4,{children:"Admin Steps to Enable Claude Code"}),`
`,(0,n.jsx)(r.p,{children:"Follow these steps to enable Claude Code access for your users:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Navigate to Settings > Organization > Members"})," in your Claude Enterprise admin console."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"For legacy seat-based plans:"})," Purchase Premium seats and assign them to users who need Claude Code access. Only Primary Owners/Owners can manage seat assignments."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"For usage-based plans:"})," Assign seats to users who need Claude Code. Configure spend limits as needed (defaults to $0). ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11526368-how-am-i-billed-for-my-enterprise-plan#h_f7838fc97d",children:"See information here on setting spend limits."})]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"User Authentication for Claude Code"}),`
`,(0,n.jsx)(r.p,{children:"Share the following steps with end users to connect Claude Code to their enterprise account:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Install Claude Code:"})," Run the command below that corresponds to your operating system to install Claude Code.",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"macOS / Linux / WSL:"})," ",(0,n.jsx)(r.code,{children:"curl -fsSL https://claude.ai/install.sh | bash"})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Windows (PowerShell):"})," ",(0,n.jsx)(r.code,{children:"irm https://claude.ai/install.ps1 | iex"})]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Start Claude Code:"}),' Type "claude" in your terminal.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Select login method:"}),' Choose "Claude account with subscription".']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Authenticate via Enterprise SSO"})," with your corporate credentials."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Your seat subscription will be linked to Claude Code"})," automatically upon successful authentication."]}),`
`]}),`
`,(0,n.jsxs)(i,{type:"note",children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Troubleshooting"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["If already logged in via a different account, run ",(0,n.jsx)(r.code,{children:"/logout"})," first, then ",(0,n.jsx)(r.code,{children:"/login"})]}),`
`,(0,n.jsxs)(r.li,{children:['Run "claude update" if not seeing the enterprise auth option',`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Restart terminal after updates"}),`
`,(0,n.jsxs)(r.li,{children:["Console API key users switching to access via Claude Enterprise seats: Run ",(0,n.jsx)(r.code,{children:"/logout"}),", then ",(0,n.jsx)(r.code,{children:"/login"}),' and select "Claude account with subscription"']}),`
`]}),`
`]}),`
`]})]}),`
`,(0,n.jsx)(r.h4,{children:"Admin Monitoring for Claude Code"}),`
`,(0,n.jsx)(r.p,{children:"Monitor and manage Claude Code usage across your organization:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Analytics > Claude Code to view usage analytics"}),`
`,(0,n.jsx)(r.li,{children:"Monitor usage across all surfaces (Claude.ai + Claude Code)"}),`
`]}),`
`,(0,n.jsxs)(i,{type:"note",children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Important"})}),(0,n.jsx)(r.p,{children:"Claude Code access requires a Premium seat (legacy model), or a Chat + Code or Claude Enterprise seat (usage-based model). Standard and Chat-only seats do NOT include Claude Code access."}),(0,n.jsx)(r.p,{children:"For organizations migrating from Console/API-based Claude Code access, users must re-authenticate via Enterprise SSO to link their subscription."})]}),`
`,(0,n.jsx)(r.h2,{id:"phase-2-change-management-launch",children:"Phase 2: Change Management & Launch"}),`
`,(0,n.jsx)(r.p,{children:"A successful Claude deployment requires thoughtful change management to drive adoption and demonstrate value."}),`
`,(0,n.jsx)(r.h3,{id:"define-success-metrics",children:"Define Success Metrics"}),`
`,(0,n.jsx)(r.p,{children:"Establish clear metrics to measure the success of your Claude deployment:"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Metric Category"}),(0,n.jsx)(r.th,{children:"Metric"}),(0,n.jsx)(r.th,{children:"Target"}),(0,n.jsx)(r.th,{children:"Measurement Method"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Activity"}),(0,n.jsx)(r.td,{children:"Weekly Active Users"}),(0,n.jsx)(r.td,{children:"70% of licensed seats"}),(0,n.jsx)(r.td,{children:"Admin Dashboard"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Activity"}),(0,n.jsx)(r.td,{children:"Messages per User per Week"}),(0,n.jsx)(r.td,{children:"25+ messages"}),(0,n.jsx)(r.td,{children:"Usage Analytics"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Activity"}),(0,n.jsx)(r.td,{children:"Feature Adoption (Projects, Artifacts)"}),(0,n.jsx)(r.td,{children:"40% of active users"}),(0,n.jsx)(r.td,{children:"Feature Analytics"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Impact"}),(0,n.jsx)(r.td,{children:"Time Saved per User per Week"}),(0,n.jsx)(r.td,{children:"3+ hours"}),(0,n.jsx)(r.td,{children:"User Survey"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Impact"}),(0,n.jsx)(r.td,{children:"User Satisfaction Score"}),(0,n.jsx)(r.td,{children:"4.0+ / 5.0"}),(0,n.jsx)(r.td,{children:"Quarterly Survey"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Impact"}),(0,n.jsx)(r.td,{children:"Tasks Augmented by Claude"}),(0,n.jsx)(r.td,{children:"5+ per week"}),(0,n.jsx)(r.td,{children:"User Self-Report"})]})]})]}),`
`,(0,n.jsx)(r.h3,{id:"identify-enable-champions",children:"Identify & Enable Champions"}),`
`,(0,n.jsx)(r.p,{children:"Champions are enthusiastic early adopters who can help drive adoption across their teams:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Select 2–3 champions per department or team"}),`
`,(0,n.jsx)(r.li,{children:"Provide champions with early access and advanced training"}),`
`,(0,n.jsx)(r.li,{children:"Equip champions with talking points and demo guidance"}),`
`,(0,n.jsx)(r.li,{children:"Create a champions Slack channel or Teams group for peer support"}),`
`,(0,n.jsx)(r.li,{children:"Recognize and reward champion contributions to adoption"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"launch-communications",children:"Launch Communications"}),`
`,(0,n.jsx)(r.p,{children:"Plan a multi-channel communication strategy for your launch:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pre-Launch (2 weeks before):"})," Communications highlighting benefits and use cases"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Launch Day:"})," Executive announcement, getting started guide, training schedule"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Post-Launch (Week 1):"})," Tips and tricks, success stories from pilot users"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ongoing:"})," Weekly tips, monthly newsletters, quarterly business reviews"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"phase-3-enablement-training",children:"Phase 3: Enablement & Training"}),`
`,(0,n.jsx)(r.p,{children:"Provide comprehensive training resources to help users get the most from Claude."}),`
`,(0,n.jsx)(r.h3,{id:"structured-training-programs",children:"Structured Training Programs"}),`
`,(0,n.jsx)(r.p,{children:"Deploying Claude is a technical milestone, but adoption depends on whether people know how to use it effectively. A structured training program ensures users move past initial curiosity into productive, habitual use — and reduces the support burden on your IT and champion teams."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"All-Staff 101 Sessions:"})," Workshops (30–60 min) covering the basics — navigating the interface, writing effective prompts, and using core features like Projects and Artifacts. Run at launch and repeat for new hire cohorts."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Department-Level Enablement:"})," Targeted sessions built around each team's actual workflows, with an executive sponsor to signal leadership support. Partner with team leads to identify high-value use cases and provide ready-to-use prompt templates. Schedule a follow-up 2–4 weeks later to address questions from real usage."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Office Hours:"})," Weekly or biweekly drop-in sessions where users bring real work and get hands-on help from champions. Especially valuable in the first 30–60 days."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"LMS Integration:"})," If your organization uses an LMS, package Claude training into trackable courses to monitor enablement coverage and tie completion to access or feature rollout milestones."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"self-service-learning-resources",children:"Self-Service Learning Resources"}),`
`,(0,n.jsx)(r.p,{children:"Direct users to these Anthropic-provided learning resources:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/",children:"Claude Academy"})," — Interactive courses covering Claude fundamentals, prompt engineering, and advanced features"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case",children:"Use Case Library"})," — Curated examples of Claude applications across different business functions"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com",children:"Help Center"})," — Comprehensive documentation and FAQs on Claude Enterprise"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/home",children:"Docs Site"})," — Comprehensive support for Claude Code and API use"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"feature-specific-guides",children:"Feature-Specific Guides"}),`
`,(0,n.jsx)(r.p,{children:"Ensure users understand key enterprise features:"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9517075-what-are-projects",children:(0,n.jsx)(r.strong,{children:"Projects"})}),(0,n.jsx)(r.strong,{children:":"})," Organize conversations by topic, client, or workflow. Projects maintain context across conversations and can be shared with team members."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them",children:(0,n.jsx)(r.strong,{children:"Artifacts"})}),(0,n.jsx)(r.strong,{children:":"})," Create and iterate on documents, code, analyses, and visualizations within conversations. Artifacts can be exported and shared."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12512176-what-are-skills",children:(0,n.jsx)(r.strong,{children:"Skills"})}),(0,n.jsx)(r.strong,{children:":"})," Skills are folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized tasks."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12489464-using-enterprise-search",children:(0,n.jsx)(r.strong,{children:"Enterprise Search"})}),(0,n.jsx)(r.strong,{children:":"})," Connect internal knowledge bases and documents to Claude for organization-specific answers. Supports various file formats and integrations."]}),`
`,(0,n.jsx)(r.h3,{id:"claude-code-training-resources",children:"Claude Code Training Resources"}),`
`,(0,n.jsx)(r.p,{children:"Provide these resources to help users get started with Claude Code:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/overview",children:"Quick Start Guide"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/courses/claude-code-in-action",children:"Claude Code Walkthrough"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=6eBSHbLKuN0",children:"Mastering Claude Code in 30 minutes"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/",children:"Claude Code — DeepLearning.ai Short Course"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.anthropic.com/engineering/claude-code-best-practices",children:"Claude Code Best Practices"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=DAQJvGjlgVM",children:"Building and Prototyping with Claude Code"})}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"internal-support-channels",children:"Internal Support Channels"}),`
`,(0,n.jsx)(r.p,{children:"Establish ongoing support infrastructure for your Claude users:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Dedicated Slack/Teams channel for Claude questions and tips"}),`
`,(0,n.jsx)(r.li,{children:"Weekly office hours with champions or power users"}),`
`,(0,n.jsx)(r.li,{children:"IT helpdesk integration for access and technical issues"}),`
`,(0,n.jsx)(r.li,{children:"Monthly user group meetings to share best practices"}),`
`,(0,n.jsx)(r.li,{children:"Dedicated Claude Code support channel for developer-specific questions"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"phase-4-scaling-adoption",children:"Phase 4: Scaling Adoption"}),`
`,(0,n.jsx)(r.p,{children:"After initial deployment, focus on expanding usage, building internal ownership, and demonstrating sustained value across the organization."}),`
`,(0,n.jsx)(r.h3,{id:"expanding-across-teams",children:"Expanding Across Teams"}),`
`,(0,n.jsx)(r.p,{children:"Prioritize teams with strong use case fit and willing champions. For each new team:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Conduct a brief needs assessment to identify high-value workflows"}),`
`,(0,n.jsx)(r.li,{children:"Provision seats (including Claude Code for developer teams) and deliver tailored onboarding"}),`
`,(0,n.jsx)(r.li,{children:"Appoint a local champion to drive adoption and share early wins across the organization"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"measuring-impact",children:"Measuring Impact"}),`
`,(0,n.jsx)(r.p,{children:"Shift from tracking activity metrics to demonstrating business value. Focus on outcomes that matter to leadership:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Track adoption (active users, department penetration, feature usage) via the Admin dashboards and API"}),`
`,(0,n.jsx)(r.li,{children:"Measure productivity gains (hours saved, tasks augmented) through periodic user surveys"}),`
`,(0,n.jsx)(r.li,{children:"Pair quantitative data with qualitative examples – short case studies from team leads illustrating real impact"}),`
`,(0,n.jsx)(r.li,{children:"Establish a regular reporting cadence (e.g., quarterly business reviews) to keep stakeholders informed"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"feature-rollout-governance",children:"Feature Rollout & Governance"}),`
`,(0,n.jsx)(r.p,{children:"Introduce advanced capabilities gradually so teams can build confidence without feeling overwhelmed. A natural progression might move from core features (Projects, Artifacts, Connectors) to intelligence features (Enterprise Search, Research) to integrations (Claude Code, Skills) and finally to automation (Cowork, custom connectors)."}),`
`,(0,n.jsx)(r.p,{children:"As usage grows, revisit your governance posture:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Review data retention policies, audit log cadences, and project visibility defaults"}),`
`,(0,n.jsx)(r.li,{children:"Maintain an allowlist of approved connectors and extensions, routing new requests through your standard IT governance process"}),`
`,(0,n.jsx)(r.li,{children:"Configure usage guardrails to manage consumption as the user base expands"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"sustaining-momentum",children:"Sustaining Momentum"}),`
`,(0,n.jsx)(r.p,{children:"Long-term success depends on building internal ownership and feedback loops:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Designate a program owner and consider forming a lightweight Center of Excellence to curate prompts, Skills, and playbooks"}),`
`,(0,n.jsx)(r.li,{children:"Run periodic user surveys, champion roundtables, and usage analytics reviews to surface what's working and what needs attention"}),`
`,(0,n.jsx)(r.li,{children:"Refresh training materials quarterly to reflect new features and lessons learned"}),`
`,(0,n.jsx)(r.li,{children:"Incorporate Claude onboarding into your standard new hire orientation"}),`
`,(0,n.jsxs)(r.li,{children:["At each phase of rollout, consider a brief retrospective:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"What use cases emerged?"}),`
`,(0,n.jsx)(r.li,{children:"What barriers remain?"}),`
`,(0,n.jsx)(r.li,{children:"What should change for the next phase?"}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"appendix-resource-directory",children:"Appendix: Resource Directory"}),`
`,(0,n.jsx)(r.p,{children:"A comprehensive directory of support, training, and enablement resources for Claude Enterprise administrators and end users."}),`
`,(0,n.jsx)(r.h3,{id:"getting-started",children:"Getting Started"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Essential resources for new deployments and first-time users:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/8114491-getting-started-with-claude",children:"Getting started with Claude"})," — First steps, basic navigation, and starting your first conversation"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/7996845-what-are-some-things-i-can-use-claude-for",children:"What are some things I can use Claude for?"})," — Common use cases including writing, analysis, coding, research, and creative tasks"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan",children:"What is the Enterprise plan?"})," — Enterprise features including SSO, SCIM, audit logs, custom retention, and dedicated support"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12138966-release-notes",children:"Release Notes"})," — Chronological log of new features, improvements, and changes across all Claude products"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9015913-how-to-get-support",children:"How to get support"})," — Contacting Anthropic support, submitting tickets, and self-service resources"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"training-enablement",children:"Training & Enablement"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Resources to upskill your organization on Claude:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/",children:"Claude Academy"})," — Self-paced courses on prompt engineering, Claude features, and best practices"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",children:"Prompt Engineering Guide"})," — Comprehensive documentation on advanced prompt engineering techniques"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/7996853-introduction-to-prompt-design",children:"Introduction to Prompt Design"})," — Foundational prompt engineering principles"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com",children:"Claude Enterprise Help Center"})," — Central hub for all Claude help articles and documentation"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://www.anthropic.com/customers",children:"Use Case Library"})," — Real-world examples of how organizations use Claude"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"identity-access-management",children:"Identity & Access Management"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/17270717-identity-management-sso-jit-scim",children:"Identity Management"})," — SSO setup (SAML 2.0 / OIDC), JIT and SCIM provisioning, and IdP migration"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13200993-restrict-access-to-claude-with-ip-allowlisting",children:"Restrict access with IP allowlisting"})," — Network-level access control by restricting Claude to approved IP ranges"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13198485-enforce-network-level-access-control-with-tenant-restrictions",children:"Enforce Tenant Restrictions"})," — Prevent users from accessing unauthorized Claude organizations from your network"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13163631-configuring-session-security-settings",children:"Configuring session security settings"})," — Session timeout, re-authentication, and session management policies"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"user-seat-management",children:"User & Seat Management"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13133750-managing-members-on-team-and-enterprise-plans",children:"Managing members on Team and Enterprise plans"})," — Inviting, removing, and managing user roles from the admin console"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9267276-roles-and-permissions",children:"Roles and Permissions"})," — Owner, Admin, and Member permission levels"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13393991-purchasing-and-managing-seats-on-enterprise-plans",children:"Purchasing and managing seats"})," — Seat allocation, scaling, and license management"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13566435-find-and-join-a-team-or-enterprise-organization",children:"Find and join your organization"})," — How end users discover and join their company's Claude organization"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9267400-can-individuals-with-pro-or-max-plan-accounts-migrate-them-to-team-or-enterprise-plan-organizations",children:"Migrating individual accounts to Enterprise"})," — Migration paths and data handling when transitioning plan types"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12053672-what-happens-to-a-user-s-data-when-they-are-removed-from-a-team-or-enterprise-organization",children:"What happens to a user's data when removed?"})," — Data retention and cleanup policies when removing users"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"governance-compliance",children:"Governance & Compliance"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13346720-how-can-i-export-my-organization-s-data",children:"Exporting organization data"})," — Bulk data export for compliance, migration, or backup"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12883420-usage-analytics-for-team-and-enterprise-plans",children:"Usage analytics"})," — Dashboard for tracking adoption, usage patterns, and seat utilization"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9970975-how-to-access-audit-logs",children:"Audit logs"})," — Track user activity, conversations, and admin changes"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10440198-custom-data-retention-controls-for-enterprise-plans",children:"Custom Data Retention Controls"})," — Configure retention windows from 1 day to indefinite"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13015708-how-can-i-access-the-compliance-api",children:"Compliance API"})," — Programmatic access for DLP, eDiscovery, and regulatory needs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13296973-hipaa-ready-enterprise-plans",children:"HIPAA-ready Enterprise plans"})," — HIPAA compliance capabilities, BAA availability, and healthcare configuration"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers",children:"Business Associate Agreements (BAA)"})," — How to request and execute a BAA with Anthropic"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://trust.anthropic.com",children:"Security & Compliance Overview (Trust Center)"})," — Certifications (SOC 2 Type II, CSA STAR), pen test reports, and compliance documentation"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"billing-usage",children:"Billing & Usage"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11526368-how-am-i-billed-for-my-enterprise-plan",children:"Enterprise billing"})," — Billing structure, invoicing, and payment options"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12005970-extra-usage-for-team-and-seat-based-enterprise-plans",children:"Extra usage controls"})," — Overage pricing and usage guardrails for organizational plans"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9797557-usage-limit-best-practices",children:"Usage limits and best practices"})," — Tips for staying within limits and optimizing conversation efficiency"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"admin-controls",children:"Admin Controls"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9519189-project-visibility-and-sharing",children:"Project visibility and sharing"})," — Admin controls for project sharing policies"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9927533-how-can-i-disable-public-projects",children:"Disabling public projects"})," — Restrict project sharing to internal-only"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10504844-managing-user-feedback-settings-on-team-and-enterprise-plans",children:"Managing user feedback settings"})," — Configure whether user feedback is shared with Anthropic"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13455879-cowork-for-team-and-enterprise-plans",children:"Cowork for Enterprise"})," — Enabling and configuring Cowork mode for your organization"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13663666-visual-and-interactive-content-for-team-and-enterprise-plans",children:"Visual and interactive content controls"})," — Admin controls for visual content generation features"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"projects-knowledge-management",children:"Projects & Knowledge Management"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9517075-what-are-projects",children:"What are projects?"})," — Persistent workspaces for grouping conversations, uploading reference files, and setting custom instructions"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects",children:"How can I create and manage projects?"})," — Creating projects and organizing them across different roles and workflows"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects",children:"RAG for projects"})," — How Claude searches uploaded project files for grounded, accurate responses"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context",children:"Chat search and memory"})," — Search past conversations and let Claude remember key details across sessions"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"content-creation-artifacts",children:"Content Creation & Artifacts"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them",children:"What are artifacts?"})," — Interactive content blocks for code, documents, websites, and visualizations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude",children:"Create and edit files with Claude"})," — Generate Word docs, spreadsheets, presentations, and other file types"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13641943-visual-and-interactive-content",children:"Visual and interactive content"})," — Charts, diagrams, interactive web apps, and visual outputs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/8241126-uploading-files-to-claude",children:"Uploading files to Claude"})," — Supported file types, size limits, and best practices"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"research-reasoning",children:"Research & Reasoning"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11088861-using-research-on-claude",children:"Using Research"})," — Deep research mode that searches the web and synthesizes findings into comprehensive reports"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10684626-enabling-and-using-web-search",children:"Web search"})," — Real-time web search to supplement Claude's knowledge with current information"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10574485-using-extended-thinking",children:"Extended thinking"})," — Step-by-step reasoning for complex problems"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research",children:"When to use search vs. thinking vs. Research"})," — Decision guide for choosing the right tool"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"skills-customization",children:"Skills & Customization"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12512176-what-are-skills",children:"What are Skills?"})," — Reusable instruction sets that teach Claude specialized workflows and domain expertise"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12512198-how-to-create-custom-skills",children:"How to create custom Skills"})," — Build skills through natural conversation or manual configuration"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13119606-provisioning-and-managing-skills-for-your-organization",children:"Provisioning Skills for your organization"})," — Deploy skills across teams and manage the organizational skills catalog"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"cowork-desktop-agent",children:"Cowork & Desktop Agent"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13345190-getting-started-with-cowork",children:"Getting started with Cowork"})," — Desktop agent mode where Claude creates files, runs code, and automates workflows"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13364135-using-cowork-safely",children:"Using Cowork safely"})," — Safety guidelines and sandboxing details"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"personalization",children:"Personalization"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features",children:"Personalization features"})," — Memory, preferred name, and options that shape Claude's responses"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features",children:"Custom styles"})," — Create and apply response styles (concise, detailed, formal, casual, etc.)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language",children:"Language preferences"})," — Multilingual support and language settings"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"enterprise-search-data",children:"Enterprise Search & Data"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12489464-using-enterprise-search",children:"Using Enterprise Search"})," — Search across connected organizational data sources within Claude"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"integration-overview",children:"Integration Overview"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11725091-when-to-use-desktop-and-web-connectors",children:"When to use desktop vs. web connectors"})," — Comparison of web-based (Remote MCP) and desktop connector architectures"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13454812-using-interactive-connectors-in-claude",children:"Interactive Connectors"})," — Connectors that let Claude take actions (not just read data) in external tools"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"pre-built-connectors",children:"Pre-Built Connectors"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Ready-to-use integrations with popular enterprise tools:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10166901-using-the-google-drive-integration",children:"Google Drive"})," — Access, search, and reference Google Drive files in conversations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10167454-using-the-github-integration",children:"GitHub"})," — Browse repos, review PRs, search code, and manage issues"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11506255-getting-started-with-claude-in-slack",children:"Slack"})," — Install and use the Claude Slack app in your workspace"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12542951-enabling-and-using-the-microsoft-365-connector",children:"Microsoft 365"})," — Connect Outlook, OneDrive, Teams, and other M365 services"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide",children:"Microsoft 365 Security Guide"})," — Data handling, permissions, and security architecture for the M365 connector"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-pre-built-web-connectors-using-remote-mcp",children:"All pre-built web connectors"})," — Full list of available pre-built connectors using Remote MCP"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"custom-connectors",children:"Custom Connectors"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Build your own connectors for proprietary or specialized tools:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://claude.com/docs/connectors/building",children:"Building custom connectors"})," — Technical guide for developing and deploying Remote MCP server connectors"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://claude.com/docs/connectors/building/mcpb",children:"Building desktop extensions with MCPB"})," — MCPB tooling for installable desktop extensions"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"desktop-browser",children:"Desktop & Browser"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/16163169-claude-desktop",children:"Claude Desktop"})," — Installation, enterprise deployment (Windows/macOS via MDM), managed configuration, and extension allowlists"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/18031491-claude-in-chrome",children:"Claude in Chrome"})," — Browser extension setup, permissions, admin controls, safety best practices, and troubleshooting"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"mobile",children:"Mobile"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/9387080-claude-mobile-apps",children:"Claude Mobile Apps"})," — iOS and Android installation, voice mode, dictation, widgets, and shortcuts"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"productivity-suites",children:"Productivity Suites"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12650343-using-claude-in-excel",children:"Claude in Excel"})," — AI-powered formulas, data analysis, and chart creation within Excel"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13521390-using-claude-in-powerpoint",children:"Claude in PowerPoint"})," — Generate and edit slide decks directly inside PowerPoint"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"developer-tools",children:"Developer Tools"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12293051-using-claude-in-xcode",children:"Claude in Xcode"})," — Code completion, debugging, and refactoring in Apple's Xcode IDE"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12864745-using-claude-in-microsoft-foundry",children:"Claude in Microsoft Foundry"})," — Access Claude models through Microsoft's AI Foundry platform"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"claude-code-setup-configuration",children:"Claude Code Setup & Configuration"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/14445694-claude-code",children:"Claude Code"})," — Team/Enterprise setup, model configuration, security reviews, and usage analytics"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11845131-using-claude-code-with-your-team-or-enterprise-plan",children:"Using Claude Code with Team or Enterprise Plan"})," — Configuration and deployment for organizational plans"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12157520-claude-code-usage-analytics",children:"Claude Code Usage Analytics"})," — Track adoption and usage across your organization"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12386420-claude-code-faq",children:"Claude Code Troubleshooting"})," — Common issues, fixes, and debugging steps"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"claude-code-training",children:"Claude Code Training"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/courses/claude-code-in-action",children:"Claude Academy — Claude Code in Action"})," — Self-paced course on Claude Code workflows"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"function-specific-guides",children:"Function-Specific Guides"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Share these guides with team leads to accelerate adoption in their departments:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=engineering",children:"Claude for Engineering Teams"})," — Code review, debugging, architecture, and technical workflows"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=marketing",children:"Claude for Marketing Teams"})," — Content creation, campaign analysis, and brand voice"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=sales",children:"Claude for Sales Teams"})," — Outreach drafting, research, and pipeline management"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=product",children:"Claude for Product Management"})," — PRDs, competitive analysis, and user research synthesis"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=hr",children:"Claude for Human Resources"})," — Policy drafting, interview prep, and employee communications"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"industry-solutions",children:"Industry Solutions"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Specialized resources and connectors for regulated and vertical industries:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/getting-started-with-claude-for-financial-services",children:"Claude for Financial Services"})," — Getting started, workflows, prompting strategies, skills, and market data connectors (FactSet, S&P Global, Moody's, Morningstar, PitchBook, LSEG, Aiera, Daloopa)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/getting-started-with-claude-for-life-sciences",children:"Claude for Life Sciences"})," — Getting started plus connectors for BioRender, PubMed, Benchling, Synapse.org, 10x Genomics, and Scholar Gateway"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/12630177-claude-for-education",children:"Claude for Education"})," — Admin deployment guide, Canvas LTI integration, FERPA-compliant data controls, and end-user FAQs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/getting-started-with-claude-for-nonprofits",children:"Claude for Nonprofits"})," — Getting started plus connectors for Benevity, Blackbaud, and Candid"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"privacy-data-handling",children:"Privacy & Data Handling"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10035659-where-can-i-learn-more-about-anthropic-s-privacy-practices",children:"Privacy practices"})," — How Anthropic handles user data, model training, and privacy controls"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations",children:"Who can view my conversations?"})," — Data visibility, access controls, and conversation privacy by plan type"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9265372-who-owns-and-manages-the-data-of-my-team",children:"Data ownership for teams"})," — Data ownership policies for organizational plans"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller",children:"Data Processor vs. Controller"})," — GDPR role clarification for Anthropic's data handling"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9796617-can-you-delete-data-that-i-sent-via-team-and-enterprise-plans",children:"Data deletion for Enterprise"})," — Data deletion requests and processes for organizational plans"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/7996862-how-do-i-view-and-sign-your-data-processing-addendum-dpa",children:"Data Processing Addendum (DPA)"})," — Self-service DPA signing for GDPR compliance"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/collections/4078535-safeguards",children:"Safeguards"})," — Usage policy, safeguard appeals, agent guidelines, content reporting, and vulnerability reporting"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"troubleshooting",children:"Troubleshooting"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Common issues and resolution guides:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12466728-understanding-claude-error-messages",children:"Understanding error messages"})," — Decode common error messages and their solutions"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on",children:"Incorrect or misleading responses"})," — Understanding hallucinations and how to get more accurate answers"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9205721-why-am-i-receiving-an-output-blocked-by-content-filtering-policy-error",children:"Content filtering errors"})," — Why outputs may be blocked and how to adjust your approach"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"video-tutorials",children:"Video Tutorials"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Share these video walkthroughs with your team for visual, hands-on learning."})}),`
`,(0,n.jsx)(r.h4,{children:"Getting Started Videos"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12997377-getting-started-with-claude-ai",children:"Getting started with Claude.ai"})," — Interface walkthrough, first conversation, and key features"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/use-artifacts-to-visualize-and-create-ai-apps-without-ever-writing-a-line-of-code",children:"Intro to Artifacts"})," — Creating and using artifacts in conversations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9945648-intro-to-projects",children:"Intro to Projects"})," — Setting up and managing projects"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13123742-intro-to-connectors",children:"Intro to Connectors"})," — Connecting external tools and data sources"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11106443-using-research",children:"Using Research"})," — Demo of deep research capabilities"]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Feature Deep Dives"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11817150-connect-your-tools-to-unlock-a-smarter-more-capable-ai-companion",children:"Connect your tools for a smarter AI companion"})," — Setting up integrations for enhanced capabilities"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12143746-create-and-edit-files-with-claude-to-eliminate-hours-of-busy-work",children:"Create and edit files to eliminate busy work"})," — Document automation with Claude's file creation features"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11649438-prototype-ai-powered-apps-with-claude-artifacts",children:"Prototype AI apps with artifacts"})," — Building functional app prototypes using artifacts"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12580051-teach-claude-your-way-of-working-using-skills",children:"Teach Claude your way of working using skills"})," — Creating and applying skills for consistent outputs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation",children:"Create a skill through conversation"})," — Building skills via natural conversation"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome",children:"Claude in Chrome"})," — Walkthrough of the Claude in Chrome extension"]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Integration Tutorials"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10167454-use-the-github-integration",children:"Using the GitHub integration"})," — GitHub connector setup and usage"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10166901-using-the-google-drive-integration",children:"Using the Google Docs integration"})," — Working with Google Docs in Claude"]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Function & Industry Videos"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=engineering",children:"Claude for Engineering"})," — Code review, debugging, architecture, and technical workflows"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=marketing",children:"Claude for Marketing"})," — Content creation, campaign analysis, and brand voice"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=sales",children:"Claude for Sales"})," — Outreach drafting, research, and pipeline management"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=product",children:"Claude for Product Management"})," — PRDs, competitive analysis, and user research synthesis"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/all?kind=use-case&department=hr",children:"Claude for Human Resources"})," — Policy drafting, interview prep, and employee communications"]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};