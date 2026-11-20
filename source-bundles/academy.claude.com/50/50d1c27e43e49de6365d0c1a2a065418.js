import{n as e,r as t}from"../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...e(),...t.components},{Callout:i,Connectors:o,CoworkPrompt:s,CoworkScheduled:c,CoworkWorkingFolder:l,CoworkWrapUp:u,Mark:d,MarkHighlight:f,ResourceWidget:p,Tip:m}=r;return i||a("Callout",!0),o||a("Connectors",!0),s||a("CoworkPrompt",!0),c||a("CoworkScheduled",!0),l||a("CoworkWorkingFolder",!0),u||a("CoworkWrapUp",!0),d||a("Mark",!0),f||a("MarkHighlight",!0),p||a("ResourceWidget",!0),m||a("Tip",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{name:"Embed1"}),`
`,(0,n.jsx)(r.h2,{id:"1-set-up",children:"1. Set up"}),`
`,(0,n.jsx)(r.h3,{id:"connect-your-tools",children:"Connect your tools"}),`
`,(0,n.jsxs)(r.p,{children:["Claude is more powerful when it works directly with your systems. You control permissions and access. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access",children:"Learn about tool access"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/customize/connectors",children:"Add a connector"})," for each tool you want Claude to use."]}),`
`,(0,n.jsx)(o,{items:[{slug:"google-drive"},{slug:"slack"},{slug:"microsoft-365"}]}),`
`,(0,n.jsx)(i,{type:"tip",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Want to try this task before setting anything up?"}),` Drag in your files, or
give Claude access to a folder in the Claude desktop app. Then start with the
prompt.`]})}),`
`,(0,n.jsx)(r.h3,{id:"set-your-working-folder",children:"Set your working folder"}),`
`,(0,n.jsxs)(r.p,{children:["Drag the files you'll use (your role spec template, the leveling guide, the team charter) into one folder on your machine, then ",(0,n.jsx)(r.a,{href:"/tutorials/navigating-the-claude-desktop-app#folders",children:"give Claude access to it"})," in the Claude desktop app. Claude reads from the folder during the intake and writes the finished spec back to it. If you open roles regularly, ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",children:"create a project"})," from the parent Hiring folder so your templates and instructions stay attached."]}),`
`,(0,n.jsx)(l,{name:"Hiring / Senior-PM-Growth",files:[{name:"role-spec-template.docx",kind:"doc",date:"Jan 9, 2026",size:"42 KB"},{name:"leveling-guide-2026.pdf",kind:"pdf",date:"Feb 2, 2026",size:"318 KB"},{name:"growth-team-charter.docx",kind:"doc",date:"Mar 18, 2026",size:"61 KB"}]}),`
`,(0,n.jsx)(r.h2,{id:"2-the-prompt",children:"2. The prompt"}),`
`,(0,n.jsx)(r.h3,{id:"copy-this-into-claude",children:"Copy this into Claude"}),`
`,(0,n.jsx)(s,{folder:"Hiring / Senior-PM-Growth",children:(0,n.jsxs)(r.p,{children:["I'm opening a new role on my team. ",(0,n.jsx)(d,{id:"a",children:"Walk me through the intake"}),": what this person will own, the must-have versus nice-to-have skills, the level and reporting line, and what good looks like at 90 days. ",(0,n.jsx)(d,{id:"b",children:"Push back where I'm vague"}),". Then write the role spec in ",(0,n.jsx)(d,{id:"d",children:"our standard format"})," and list ",(0,n.jsx)(d,{id:"c",children:"what's still open for the recruiter"}),"."]})}),`
`,(0,n.jsx)(r.h3,{id:"why-this-works",children:"Why this works"}),`
`,(0,n.jsx)(f,{mark:"a",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask to be interviewed before it drafts."}),` "Walk me through the intake"
makes the conversation the deliverable, so the spec is built from your
answers rather than guessed from a job title.`]})})}),`
`,(0,n.jsx)(f,{mark:"b",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Give permission to push back."}),` "Push back where I'm vague" gives Claude
permission to do what a good recruiter does: notice when "strong
communicator" needs to become a testable signal.`]})})}),`
`,(0,n.jsx)(f,{mark:"c",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"List open questions separately."}),` Asking for "what's still open for the
recruiter" keeps undecided comp bands or location flex out of the spec and
on a short list for the live sync.`]})})}),`
`,(0,n.jsx)(f,{mark:"d",children:(0,n.jsx)(m,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Put your templates in the working folder."}),` Your spec template and
leveling guide sit in the working folder, so "our standard format" and the
level definition mean the same thing for every manager who runs this.`]})})}),`
`,(0,n.jsx)(r.h3,{id:"get-a-better-draft",children:"Get a better draft"}),`
`,(0,n.jsx)(m,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add an example to match."}),` Drop an example you like into the folder and
Claude matches your structure and voice.`]})}),`
`,(0,n.jsx)(m,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask it to flag uncertainty."}),` Add "flag anything you're not confident about"
so you know where to look first when you review the draft.`]})}),`
`,(0,n.jsx)(r.h2,{id:"3-make-claude-work-for-you",children:"3. Make Claude work for you"}),`
`,(0,n.jsx)(r.p,{children:"Tell Claude your own rules for this task, such as your intake questions and how you apply your leveling guide, then save what you've done as a skill of your own. A few minutes of conversation and it runs with your standards from then on."}),`
`,(0,n.jsx)(s,{folder:"Hiring",children:(0,n.jsx)(r.p,{children:"Make what we've done in this task so far into a skill called /role-intake."})}),`
`,(0,n.jsx)(r.p,{children:"Review the skill, and save it if Claude hasn't already."}),`
`,(0,n.jsxs)(i,{type:"tip",children:[(0,n.jsx)(r.strong,{children:"Tip:"})," tell Claude to edit the skill for you."]}),`
`,(0,n.jsx)(r.h2,{id:"4-make-it-repeatable",children:"4. Make it repeatable"}),`
`,(0,n.jsx)(r.h3,{id:"run-it-whenever-a-headcount-is-approved",children:"Run it whenever a headcount is approved"}),`
`,(0,n.jsxs)(r.p,{children:["When a new role is approved, the intake should be waiting for the hiring manager. Ask Claude to set up a scheduled task, or open ",(0,n.jsx)(r.strong,{children:"Scheduled"})," in the sidebar, and ",(0,n.jsx)(r.code,{children:"/role-intake"})," runs each weekday morning in any new role folder you add under Hiring."]}),`
`,(0,n.jsx)(s,{folder:"Hiring",children:(0,n.jsx)(r.p,{children:`Set up a scheduled task for weekdays at 9am: check Hiring for any new subfolder, run
/role-intake in each one, and save the intake questions there
so the intake is ready to start.`})}),`
`,(0,n.jsx)(c,{name:"New role intake",cadence:"Weekdays at 9am",children:(0,n.jsxs)(r.p,{children:["Runs ",(0,n.jsx)(r.code,{children:"/role-intake"}),` in every new subfolder under Hiring and writes the
intake questions to that role's folder.`]})}),`
`,(0,n.jsx)(r.p,{children:"To use a folder on your computer during a scheduled task, keep your computer on and awake with the Claude desktop app open so Claude can access it."}),`
`,(0,n.jsx)(r.h2,{id:"5-share-with-your-teammates",children:"5. Share with your teammates"}),`
`,(0,n.jsxs)(r.p,{children:["Your ",(0,n.jsx)(r.code,{children:"/role-intake"})," skill now carries your intake questions, your leveling guide, and your spec template. Share it so every hiring manager runs the same intake, and recruiting receives a complete spec before the first call instead of after it."]}),`
`,(0,n.jsx)(i,{type:"note",title:"Share the skill",children:(0,n.jsxs)(r.p,{children:["You can share a skill you created. In ",(0,n.jsx)(r.a,{href:"https://claude.ai/customize/skills/yours",children:"your skills"}),", open the ",(0,n.jsx)(r.strong,{children:"..."}),`
menu next to `,(0,n.jsx)(r.code,{children:"/role-intake"}),", select ",(0,n.jsx)(r.strong,{children:"Share"}),`, and pick your hiring
managers. For your whole organization, open the skill and select
`,(0,n.jsx)(r.strong,{children:"Publish to org"}),`, if your admin allows. Your teammates get the skill with your intake
and templates baked in, so they don't have to build it again.`]})}),`
`,(0,n.jsx)(r.h2,{id:"going-forward",children:"Going forward"}),`
`,(0,n.jsx)(u,{title:"Now set up in Claude",tools:[{slug:"google-drive"}],folder:"Hiring",next:{label:"Interview debrief synthesis",slug:"interview-debrief"},children:(0,n.jsx)(r.p,{children:"Every role you open gets the same structured intake and a complete spec in your standard format, with open questions listed for the recruiter — ready before the first call."})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["Callout","Connectors","CoworkPrompt","CoworkScheduled","CoworkWorkingFolder","CoworkWrapUp","Mark","MarkHighlight","ResourceWidget","Tip"];export{i as default};