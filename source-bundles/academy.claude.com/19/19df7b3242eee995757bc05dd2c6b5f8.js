import{Nm as e,jm as t}from"../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Callout:i,ResourceWidget:o}=r;return i||a("Callout",!0),o||a("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["In ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13345190-get-started-with-cowork",children:"Claude Cowork"}),", a ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837440-use-plugins-in-cowork",children:"plugin"})," packages the ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12580051-teach-claude-your-way-of-working-using-skills",children:"skills"})," and ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp",children:"connectors"})," for a role into one install. Anthropic publishes ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/customize/plugins",children:"pre-built plugins"})," for roles like Sales, Finance, Legal, and Marketing, each with skills for that role's common workflows."]}),`
`,(0,n.jsxs)(r.p,{children:["Out of the box, those skills are generic templates. Customizing a plugin rewrites them with your team's tools, standards, and reference material, so the same skills produce work that matches how your team does it. ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/customize/plugins",children:"Browse all plugins in Cowork →"})]}),`
`,(0,n.jsxs)(r.p,{children:["If you're new to Cowork, ",(0,n.jsx)(r.a,{href:"claude://cowork/new?q=%2Fsetup-claude",children:(0,n.jsx)(r.code,{children:"/setup-claude"})})," walks you through setting up your first plugin and connectors — see ",(0,n.jsx)(r.a,{href:"/tutorials/get-started-in-claude-cowork-in-three-steps",children:"Get started in Cowork in three steps"}),"."]}),`
`,(0,n.jsx)(i,{type:"note",children:(0,n.jsxs)(r.p,{children:["Admins managing plugins for an organization, see ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization",children:"Manage Cowork plugins for your organization"}),"."]})}),`
`,(0,n.jsx)(r.h2,{id:"start-a-customize-session",children:"Start a customize session"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"In the sidebar, open"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:(0,n.jsx)(r.code,{children:"Customize"})})})," ",(0,n.jsx)(r.em,{children:"›"})," ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/customize/plugins",children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:(0,n.jsx)(r.code,{children:"Plugins"})})})}),(0,n.jsx)(r.em,{children:", select the plugin, and click"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:(0,n.jsx)(r.code,{children:"Customize"})})}),(0,n.jsx)(r.em,{children:"."})]}),`
`,(0,n.jsx)(o,{name:"Embed1"}),`
`,(0,n.jsx)(r.p,{children:"Cowork opens a session with the plugin loaded. Claude looks through your connected tools — Slack, email, Drive — for signs of which systems your team uses, then asks you questions to confirm what it found and fill in what it couldn't. Once you answer, Claude rewrites the plugin's skills to reference your tools, adds the matching connectors, and packages the result for you to install."}),`
`,(0,n.jsx)(r.p,{children:"The questions depend on the plugin and what's already in your workspace, so treat the session as a conversation — answer what's asked, and add anything else Claude should know about how your team works."}),`
`,(0,n.jsx)(r.h3,{id:"what-to-give-claude",children:"What to give Claude"}),`
`,(0,n.jsxs)(r.p,{children:["Claude will ask which tools you use, and leave room for anything else. The tool answers wire the plugin to the right connectors; the ",(0,n.jsx)(r.em,{children:"anything else"})," is where you describe how your team actually works."]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Your tools."})," Pre-built skills reference tools generically — ",(0,n.jsx)(r.em,{children:"the CRM"}),", ",(0,n.jsx)(r.em,{children:"the data warehouse"}),". Naming yours maps each skill to the right connector, so ",(0,n.jsx)(r.code,{children:"/variance-analysis"})," queries Snowflake and ",(0,n.jsx)(r.code,{children:"/call-prep"})," reads from ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/directory/salesforce-headless-360",children:"Salesforce"})," without asking. If a connector you name isn't enabled yet, Claude lists it for you to connect later."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"How your team works."})," The defaults and standards a new teammate would need to know — what you call things, what counts as done, when something gets escalated. The role examples below show what this looks like for each plugin."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Reference documents."})," Point Claude at examples of finished work — last quarter's close package, a brand guide, a redline that landed, your memo template. Claude reads them and writes the relevant patterns into the plugin's skills, so future output matches your formats."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"review-what-claude-built",children:"Review what Claude built"}),`
`,(0,n.jsx)(r.p,{children:"When the session finishes, Claude shows a summary of what changed and opens the plugin's files alongside the conversation. A plugin is a folder of plain-text instruction files, and you can click through any of them to read exactly what a skill will do."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Click"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Save plugin"})})," ",(0,n.jsx)(r.em,{children:"to install it."})," From here, editing is the same as customizing: open a session with the plugin and tell Claude what to change."]}),`
`,(0,n.jsx)(r.h3,{id:"keep-improving-it",children:"Keep improving it"}),`
`,(0,n.jsxs)(r.p,{children:["You don't need to cover everything in the first pass. Run a skill, and when you spot something to adjust — a step to add, a format to match more closely — tell Claude in the same session: ",(0,n.jsx)(r.code,{children:"add this to the plugin so it's right next time"}),". The change is written back to the skill file."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"To see what's still generic, start another"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:(0,n.jsx)(r.code,{children:"Customize"})})})," ",(0,n.jsx)(r.em,{children:"session and ask: what placeholders are left in this plugin?"})]}),`
`,(0,n.jsx)(r.h2,{id:"examples-by-role",children:"Examples by role"}),`
`,(0,n.jsx)(r.p,{children:"Each role below shows the same three inputs — tools, how the team works, reference documents — and what the plugin's skills do once they're in place."}),`
`,(0,n.jsx)(r.h4,{children:"Sales"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Connect:"})," your CRM (like ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/directory/hubspot",children:"HubSpot"})," or ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/directory/salesforce-headless-360",children:"Salesforce"}),") and call-recording tool."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Share:"})," your qualification framework, deal stages, and competitive positioning."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Reference:"})," proposals and outreach that landed well."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Result:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/call-prep"})," now produces briefs using your framework and recent call context."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/forecast"})," now weights pipeline by your stage probabilities."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Finance"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Connect:"})," your ERP or data warehouse."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Share:"})," your chart of accounts, materiality thresholds, and close calendar."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Reference:"})," last period's close package and your memo template."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Result:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/variance-analysis"})," now decomposes by your drivers and flags what crosses your thresholds."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/reconciliation"})," now produces workpapers in your format."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Legal"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Connect:"})," your document store."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Share:"})," your standard positions by clause type — what's acceptable, what's negotiated, what's escalated."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Reference:"})," past redlines and your fallback clause library."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Result:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/review-contract"})," now flags deviations against your positions with your severity labels."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/triage-nda"})," now screens against your defaults for term, jurisdiction, and carveouts."]}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Marketing"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Connect:"})," your CMS and analytics."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Share:"})," your audience segments, channel mix, and style guide."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Reference:"})," brand guidelines and past campaigns that performed."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Result:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/campaign-plan"})," now builds briefs for your audiences and channels."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/draft-content"})," now writes in your voice for your formats."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"share-with-your-team",children:"Share with your team"}),`
`,(0,n.jsxs)(r.p,{children:["The customize session ends with a packaged ",(0,n.jsx)(r.code,{children:".plugin"})," file you can pass around."]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Send the file"})," — teammates install it from ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Customize"})})," ",(0,n.jsx)(r.em,{children:"›"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Plugins"})})," ",(0,n.jsx)(r.em,{children:"›"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Add"})}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Host on GitHub"})," — push the plugin folder to a repo; teammates install from the URL and get updates when you push."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Hand it to your admin"})," — an admin can provision the plugin to a group from ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Organization settings"})})," ",(0,n.jsx)(r.em,{children:"›"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Plugins"})}),", so everyone in that department gets the same pre-configured version. See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization",children:"Manage Cowork plugins for your organization"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"things-to-note",children:"Things to note"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Plugins run in Cowork on the desktop app. The customize session edits files on your machine, so it isn't available in browser or mobile."}),`
`,(0,n.jsx)(r.li,{children:"Plugins can come from a few places: Anthropic's pre-built set, ones you install or build, and ones your organization provisions. The first two are yours to edit; organization-provisioned plugins are managed by your admin and re-sync over local changes."}),`
`,(0,n.jsxs)(r.li,{children:["Skills and connectors also exist outside plugins. A standalone skill you add from ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Customize"})})," ",(0,n.jsx)(r.em,{children:"›"})," ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Skills"})})," is available in every session, with or without a plugin."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"learn-more",children:"Learn more"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/customize-claude-cowork",children:(0,n.jsx)(r.strong,{children:"Customize Cowork for the work you do"})})," — connectors, skills, instructions, and plugins together."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/get-started-in-claude-cowork-in-three-steps",children:(0,n.jsx)(r.strong,{children:"Get started in Cowork in three steps"})})," — install your first plugin with ",(0,n.jsx)(r.code,{children:"/setup-claude"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/how-to-build-a-plugin-from-scratch-in-cowork",children:(0,n.jsx)(r.strong,{children:"Build a plugin from scratch"})})," — when the pre-built plugins don't cover your workflow."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837440-use-plugins-in-cowork",children:(0,n.jsx)(r.strong,{children:"Use plugins in Cowork"})})," — install, enable, and manage plugins."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};