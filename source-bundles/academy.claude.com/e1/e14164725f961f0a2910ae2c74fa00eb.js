import{Vm as e,zm as t}from"../../../content-de-meta-oe42hj2y.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Availability."})," Generally available for Claude Enterprise organizations. Admins can turn it on today for the whole organization. Or, to start with selected roles, first move other members to a custom role with it turned off and add some members to a role with ",(0,n.jsx)(r.code,{children:"Chat and Cowork unified"})," turned on. If you take no action, it turns on by default on the date in your general availability email. To opt-out for now, select ",(0,n.jsx)(r.code,{children:"Keep disabled"})," in ",(0,n.jsx)(r.code,{children:"Organization settings > Capabilities"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),`
`,(0,n.jsx)(r.p,{children:"Members no longer choose between chat and Cowork before they start. Conversations start as a chat. When a task needs to run code or work with files, Claude continues the same conversation in an isolated cloud sandbox managed by Anthropic, then returns the finished work for review."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"One conversation, two modes."})," Claude makes the call to upgrade a chat to a workspace when your task needs to do something, like run code, create or edit files, analyze a dataset, or work across connected tools. Claude usually stays in chat for questions, brainstorming, and summarizing something you paste in."]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Work moves across devices."})," Members can start a task in the desktop app and pick it up on web or mobile."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Local access stays optional."})," Through the desktop app, members can link their computers so Claude can work with local folders, local MCP servers, and applications, governed by your device policies, and by ",(0,n.jsx)(r.code,{children:"Computer access"})," for web, mobile, and scheduled tasks."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The conversation stays on record."})," Chat history, sharing, export, the Compliance API, and your data retention setting all work from the conversation."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"A sandbox for each conversation."})," Each conversation that needs one gets its own virtual machine, managed by Anthropic. After a few minutes idle, it stops and its disk is saved as an encrypted snapshot."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"cost-and-controls",children:"Cost and controls"}),`
`,(0,n.jsx)(r.h3,{id:"spend",children:"Spend"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pricing stays usage-based,"})," and the spend controls you have today apply. Depending on the task, agentic work can use more tokens than a quick chat; Claude Enterprise admins have controls for managing this usage."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Spend limits"})," can be set at the organization, group, and member level, and pooled group budgets (beta) give a group one shared monthly amount to draw from."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Your model allowlist"})," applies to unified Claude."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Efficient mode"})})," keeps unified Claude on Sonnet and Haiku models, and new sessions start on Claude Sonnet 5.5 at low effort. Turn it on for the whole organization on the ",(0,n.jsx)(r.code,{children:"Models"})," page, or for specific custom roles. Other products aren't affected."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"security-controls",children:"Security controls"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Identity carries over."})," SSO (SAML/OIDC), SCIM provisioning, and tenant restrictions apply, with no separate sign-in."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Connector policies"})," (",(0,n.jsx)(r.code,{children:"Blocked"}),", ",(0,n.jsx)(r.code,{children:"Needs approval"}),", and per-role restrictions) are enforced by Anthropic outside the sandbox, on every remote connector call. Turn off ",(0,n.jsx)(r.code,{children:"Always allow"})," to have Claude ask permission"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sharing."})," Conversations where Claude did agentic work, like running code or creating files, can be shared only when both ",(0,n.jsx)(r.code,{children:"Share chats"})," and ",(0,n.jsx)(r.code,{children:"Share cloud sessions"})," are on."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Network egress"})," is off by default for Enterprise. Choose off, package managers only, a custom list of domains, or all domains."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Approval modes."})," Turn off ",(0,n.jsx)(r.code,{children:"Skip all approvals"}),", ",(0,n.jsx)(r.code,{children:"Automatically approve"}),", and ",(0,n.jsx)(r.code,{children:"Always allow"})," so Claude asks before calling a connector or using a linked computer. Shell and file work inside the cloud sandbox doesn't ask."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.code,{children:"Computer access"})," and ",(0,n.jsx)(r.code,{children:"Trusted Devices"})]})," control whether web, mobile, and scheduled tasks can use a member's linked computer, and require members to verify each new device."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"management-and-visibility",children:"Management and visibility"}),`
`,(0,n.jsx)(r.h3,{id:"turn-on-the-unified-experience",children:"Turn on the unified experience"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Requires"})," ",(0,n.jsx)(r.code,{children:"Chat"})," and ",(0,n.jsx)(r.code,{children:"Cloud code execution and file creation"}),". ",(0,n.jsx)(r.code,{children:"Cowork"})," and ",(0,n.jsx)(r.code,{children:"Cowork in the cloud"})," don't need to be on."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Owners or Primary Owners"})," turn on ",(0,n.jsx)(r.code,{children:"Chat and Cowork unified"})," in ",(0,n.jsx)(r.code,{children:"Organization settings > Capabilities"}),", which gives it to everyone on a built-in role. To limit access, first move other members to a custom role with it turned off in ",(0,n.jsx)(r.code,{children:"Organization settings > Roles"}),". Sync role membership through SCIM to add members in waves."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Most scheduled tasks keep running with no changes."})," Tasks that use files or tools on a member's computer need that computer on and the Claude desktop app open. Session history carries over, and sessions run locally stay on that computer."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"recommended-rollout",children:"Recommended rollout"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Review."})," Share with IT, security, and procurement. Your review covers two components: Claude chat and Cowork in the cloud."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pilot"})," in a sandbox organization or with one role, after checking your egress, connector, sharing, and ",(0,n.jsx)(r.code,{children:"Computer access"})," settings."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Expand in waves"})," after two to four weeks of monitoring usage and feedback."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"usage-and-analytics",children:"Usage and analytics"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Its own line."})," Usage is reported as ",(0,n.jsx)(r.code,{children:"Chat and Cowork unified"}),". Only where it's filed changes, not how it's counted or billed."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add it in."})," When you total Chat and Cowork spend, tokens, or messages, include the unified line. For headcount, use the overall active users count."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Analytics."})," A ",(0,n.jsx)(r.code,{children:"Chat and Cowork unified"})," analytics dashboard sits under ",(0,n.jsx)(r.code,{children:"Analytics > Chat and Cowork unified"}),". New activity can take up to two days to show up."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"APIs."})," Existing keys work with the Compliance, Analytics, Cost and Usage, and Admin APIs."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"data-retention",children:"Data retention"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Conversations,"})," and the cloud sessions started in them, follow member deletion or your custom retention setting (30-day minimum), ",(0,n.jsx)(r.a,{href:"https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data",children:"per our data retention practices"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Not covered by custom retention:"})," standalone Cowork cloud sessions, scheduled task runs, Cowork history stored on a member's computer, and memory of members who have left your organization."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Important exceptions."})," Not yet available for organizations using zero data retention for Claude Code, the HIPAA-ready configuration, or customer-managed encryption keys. These organizations stay on their current configuration. On mobile, admins can't yet limit access to selected roles, but can block mobile access through your identity provider."]}),`
`,(0,n.jsx)(r.h2,{id:"learn-more",children:"Learn more"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization",children:"Set up and manage the new unified Claude experience (Help Center)"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://trust.anthropic.com/resources?s=uukz8hyx7jmdmo80lys36s&name=claude-cowork-and-unified-claude-security-best-practices",children:"Claude Cowork and unified Claude security best practices (Trust Center)"})}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};