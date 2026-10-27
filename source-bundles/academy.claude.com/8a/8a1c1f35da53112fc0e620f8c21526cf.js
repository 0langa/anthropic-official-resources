import{Vm as e,zm as t}from"../../../content-de-meta-oe42hj2y.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Callout:i}=r;return i||a("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./208f73d86850.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Claude Security is a capability built into ",(0,n.jsx)(r.a,{href:"http://Claude.ai",children:"Claude.ai"}),", which continuously watches your codebases for security vulnerabilities, tracks each finding until it is fixed, and suggests targeted software patches for you to review, allowing you and your team to find and fix security issues that traditional methods often miss. It is a beta feature available to Claude Enterprise accounts."]}),`
`,(0,n.jsx)(r.p,{children:"Most engineering teams don’t have the reviewer-hours and skills to identify sophisticated vulnerabilities across every change, and many issues are easy to miss without a security-focused mindset. Claude Security helps close that gap: it scans your codebase, surfaces the issues that actually matter, and proposes patches that you or your team can review and apply. Claude Security is powered by our full family of models, including Claude Mythos, with no Cyber Verification Program access required."}),`
`,(0,n.jsx)(r.p,{children:"This guide covers everything you need to set up Claude Security, create your first Project, review findings, and find tips for ongoing use."}),`
`,(0,n.jsx)(r.h2,{id:"prerequisites",children:(0,n.jsx)(r.strong,{children:"Prerequisites"})}),`
`,(0,n.jsx)(r.p,{children:"Before you can use Claude Security, the following requirements must be in place:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Eligible plans:"})," Your organization must have an active Claude Enterprise account."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Access to your repositories"}),":",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["For repositories on GitHub, your administrator must have installed the ",(0,n.jsx)(r.a,{href:"https://github.com/apps/claude",children:"Claude GitHub App"})," and granted it access to the repositories you wish to scan, and each person who adds a repository must connect their own GitHub account to Claude. This is the same Claude GitHub App used for Claude Code in the cloud."]}),`
`,(0,n.jsx)(r.li,{children:"For GitHub Enterprise Server, the app must be installed on your GHES instance, and that instance must already be connected to Claude Code in the cloud."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.li,{children:"For repositories hosted on other Git providers (e.g. GitLab, BitBucket, etc.), you need the repository’s address and an auth token."}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Permission to create Projects:"})," Admins can decide what RBAC roles can create Claude Security projects."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User Seats:"})," Each person who uses Claude Security needs a seat that includes Claude Code (",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan",children:"which seats do"}),")."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Code in the cloud (optional):"})," Lets users run suggested fixes with ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/claude-code-on-the-web",children:"Claude Code in the cloud"}),". Without it, they copy a prompt into their own Claude Code."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setup",children:(0,n.jsx)(r.strong,{children:"Setup"})}),`
`,(0,n.jsx)(r.p,{children:"If your organization already uses Claude Code in the cloud, most of the setup is already complete. Here is what you need to confirm:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Check billing."})," Scans are charged at direct token cost, with no additional platform fee. If your plan has Standard and Premium seats, turn on usage credits first (",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12005970-manage-usage-credits-for-team-and-seat-based-enterprise-plans",children:"how"}),"). On other Enterprise plans, see ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11526368-how-am-i-billed-for-my-enterprise-plan",children:"How am I billed for my Enterprise plan?"}),". Costs scale with the size of your repositories and how often they change, so set spend limits that align with your expected usage. After Claude Security is enabled, you can also set a separate spend limit for the feature."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Give Claude access to your GitHub repositories."})," Install the ",(0,n.jsx)(r.a,{href:"https://github.com/apps/claude",children:"Claude GitHub App"})," on the repositories you want to scan (on a GitHub organization, an owner of that organization may need to approve it), and turn on the ",(0,n.jsx)(r.strong,{children:"GitHub connector"})," in Organization settings > Connectors. For GitHub Enterprise Server, follow the ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/github-enterprise-server",children:"GitHub Enterprise Server guide"}),". For repositories hosted on other Git servers, create an auth token for the repositories you plan to add."]}),`
`,(0,n.jsxs)(r.li,{children:["Enable the ",(0,n.jsx)(r.strong,{children:"Claude Security"})," feature in the admin console: ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/claude-security",children:"http://claude.ai/admin-settings/claude-security"})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Configure access and capabilities."})," Admins can decide what RBAC roles can create projects and who can view, triage, or manage all projects by configuring the capabilities in custom roles."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Enable Claude Code in the cloud (optional)."})," This allows users to run fixes in the cloud. It is optional otherwise."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Each person who uses Claude Security also connects their own GitHub account to Claude (",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14661296-use-claude-security#h_8db96825dc",children:"how to check"}),")."]}),`
`,(0,n.jsx)(r.h2,{id:"creating-a-project",children:(0,n.jsx)(r.strong,{children:"Creating a Project"})}),`
`,(0,n.jsx)(r.p,{children:"Once Claude Security is enabled, creating a Project is straightforward:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Navigate to Claude Security through Claude.ai."})," Go to ",(0,n.jsx)(r.a,{href:"http://claude.ai",children:"claude.ai"})," and click on the Security icon on the left sidebar, or ",(0,n.jsx)(r.a,{href:"http://claude.ai/security",children:"claude.ai/security"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Click “New project” and give it a name."})," A Project is the unit of access control and billing."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add repositories."})," Connect up to eight repositories from GitHub or other Git providers. For each repository, you can optionally set a branch, a folder scope, and excluded folders."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add what the code can’t show (optional)."})," Tell Claude how your code is deployed, who can reach it, and which risks you’ve accepted, as notes or as documents such as architecture docs. You can edit these later."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Create the Project."})," Click “Create project”. Claude reads the code, writes a threat model, and runs a deep baseline scan. Depending on the size of the repositories, the baseline scan may take several minutes or hours, and you can leave the page while it runs."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Review findings."})," Findings appear on the Project’s Findings tab as Claude reports them with details including vulnerability type, severity, affected file and line, and a description of the issue."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Afterwards, Claude checks for new commits and continuously scans for vulnerabilities."}),`
`,(0,n.jsx)(r.h2,{id:"reviewing-and-acting-on-findings",children:(0,n.jsx)(r.strong,{children:"Reviewing and Acting on Findings"})}),`
`,(0,n.jsx)(r.p,{children:"A Project’s Findings tab lists its open findings. You have several options for each finding:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Review details."})," Each finding includes a description of the vulnerability, the affected code locations, the evidence and reasoning behind it, and a suggested fix. You can also ask Claude about a finding in the Project’s chat."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Start a fix."})," Click “Fix” on a finding to open Claude Code and fix that specific vulnerability."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Triage a finding."})," Mark it as fixed, or dismiss it as a false positive, an accepted risk, a duplicate, or for another reason."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Track fixes."})," Claude checks open findings against the code that changed and marks them fixed when the fix lands. A finding marked fixed reopens automatically if Claude later finds the issue again."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Export findings."})," To export findings into your own tracking and notification systems, use the Claude Security API, the Claude Security connector, or webhooks."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Findings are categorized by severity to help you prioritize your remediation efforts. We recommend starting with the highest-severity items and working through the list."}),`
`,(0,n.jsx)(r.h2,{id:"operationalizing-the-tool-for-ongoing-use",children:(0,n.jsx)(r.strong,{children:"Tips for ongoing use"})}),`
`,(0,n.jsx)(r.p,{children:"These tips make ongoing use easier."}),`
`,(0,n.jsx)(r.h3,{id:"set-up-projects",children:(0,n.jsx)(r.strong,{children:"Set up Projects"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Group related repositories in one Project:"})," Create one Project per service or team so findings stay attributable and reviewers don’t have to wade through results that belong to someone else. Put repositories that work together, such as a backend and its client app, in the same Project so Claude can trace issues across them. A Project holds up to eight repositories from GitHub or other Git providers."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Scope large repositories:"})," For large repositories and monorepos, set a folder scope on each repository and exclude the folders you don’t need covered. A narrower scope increases determinism and focuses Claude’s attention. Claude can still trace logic and pull context from across the broader codebase, excluded folders included, as needed."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add what the code can’t show:"})," Tell Claude how your code is deployed, who can reach it, and which risks you’ve accepted. Claude keeps this in each Project’s threat model and uses it to decide what to flag and how to rate it. To read and edit the threat model or add documents such as architecture docs, open the Project’s Knowledge tab. People with the Full role can edit them."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"triage-and-collaborate",children:(0,n.jsx)(r.strong,{children:"Triage and collaborate"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add a reason and a note when you triage:"})," When you triage a finding, pick the reason and add a triage note to create an audit trail and give future reviewers context. Claude reads the notes on dismissed findings too, and uses them for the Project. Each finding also keeps a History of who changed it and when, for audit and compliance."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Share Projects with teammates:"})," In a Project, click Share to give specific members a role:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Full:"})," manage findings, settings, and who has access"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Triage:"})," view findings, update their status, and start fixes"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"View:"})," just stay informed"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You can also share a Project with your whole org."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"connect-your-tools",children:(0,n.jsx)(r.strong,{children:"Connect your tools"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pull findings into your systems with the API:"})," Create a personal access token in Claude Security settings. Then use the Claude Security API to pull findings into your ticketing, vulnerability management, and reporting tools, and to resolve them from there, so triage and status live alongside everything else the team uses."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Fix and resolve in one session with the connector:"})," With the Claude Security connector, engineers can pull up a finding in Claude or Claude Code, fix it, and resolve it in the same session."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Alert your team with webhooks:"})," Create webhooks in Claude Security settings to push new-finding events into your own systems in real time. Wire them into tools like Slack or Jira so triage can start without anyone having to check the dashboard."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"manage-cost-and-access",children:(0,n.jsx)(r.strong,{children:"Manage cost and access"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Track each Project’s cost:"})," In a Project’s settings, open Usage to see its cost for the month to date and per day."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Roll out to more teams with custom roles:"})," Admins can use ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans",children:"custom roles"})," to decide which RBAC roles can create Projects and who can view, triage, or manage all Projects."]}),`
`]}),`
`,(0,n.jsx)(i,{type:"note",children:(0,n.jsxs)(r.p,{children:["For more information and FAQ, please visit our ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14661296-use-claude-security",children:"support center."})]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};