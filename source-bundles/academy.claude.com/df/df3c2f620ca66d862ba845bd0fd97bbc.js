import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...e(),...t.components},{Callout:i,Connectors:o,CoworkPluginCard:s,CoworkPrompt:c,CoworkScheduled:l,CoworkWorkingFolder:u,CoworkWrapUp:d,Mark:f,MarkHighlight:p,ResourceWidget:m,Tip:h}=r;return i||a("Callout",!0),o||a("Connectors",!0),s||a("CoworkPluginCard",!0),c||a("CoworkPrompt",!0),l||a("CoworkScheduled",!0),u||a("CoworkWorkingFolder",!0),d||a("CoworkWrapUp",!0),f||a("Mark",!0),p||a("MarkHighlight",!0),m||a("ResourceWidget",!0),h||a("Tip",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{name:"Embed1"}),`
`,(0,n.jsx)(r.h2,{id:"1-set-up",children:"1. Set up"}),`
`,(0,n.jsx)(r.h3,{id:"try-a-plugin",children:"Try a plugin"}),`
`,(0,n.jsxs)(r.p,{children:["The Human Resources plugin ships with ",(0,n.jsx)(r.code,{children:"/recruiting-pipeline"})," and other recruiting skills as a starting point, already structured to ask the intake questions in order and write to a spec template. If your admin manages plugins and it's not available yet, skip this; nothing below requires it."]}),`
`,(0,n.jsx)(s,{slug:"human-resources",subtitle:"9 skills for recruiting, onboarding, performance reviews, comp analysis, and org health reporting",featured:{"recruiting-pipeline":"Run the hiring-manager intake and produce a complete role specification","interview-prep":"Draft the external job description from an approved role spec"},showRun:!0}),`
`,(0,n.jsx)(r.h3,{id:"connect-your-tools",children:"Connect your tools"}),`
`,(0,n.jsxs)(r.p,{children:["Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access",children:"Learn about tool access"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.strong,{children:"Customize → Connectors"})," in Cowork to set up."]}),`
`,(0,n.jsx)(o,{items:[{slug:"google-drive"},{slug:"slack"},{slug:"microsoft-365"}]}),`
`,(0,n.jsx)(i,{type:"tip",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Want to try this task before setting anything up?"}),` Add your files to a
working folder, point Cowork at the folder, and start with the prompt.`]})}),`
`,(0,n.jsx)(r.h3,{id:"set-your-working-folder",children:"Set your working folder"}),`
`,(0,n.jsxs)(r.p,{children:["Drag the files you'll use (your role spec template, the leveling guide, the team charter) into one folder on your machine, then point Cowork at it. Cowork reads from it during the intake and writes the finished spec back to it. If you open roles regularly, ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",children:"create a Cowork project"})," from the parent Hiring folder so your templates and instructions stay attached."]}),`
`,(0,n.jsx)(u,{name:"Hiring / Senior-PM-Growth",files:[{name:"role-spec-template.docx",kind:"doc",date:"Jan 9, 2026",size:"42 KB"},{name:"leveling-guide-2026.pdf",kind:"pdf",date:"Feb 2, 2026",size:"318 KB"},{name:"growth-team-charter.docx",kind:"doc",date:"Mar 18, 2026",size:"61 KB"}]}),`
`,(0,n.jsx)(r.h2,{id:"2-the-prompt",children:"2. The prompt"}),`
`,(0,n.jsx)(r.h3,{id:"copy-this-into-claude-cowork",children:"Copy this into Claude Cowork"}),`
`,(0,n.jsx)(c,{folder:"Hiring / Senior-PM-Growth",children:(0,n.jsxs)(r.p,{children:["I'm opening a new role on my team. ",(0,n.jsx)(f,{id:"a",children:"Walk me through the intake"}),": what this person will own, the must-have versus nice-to-have skills, the level and reporting line, and what good looks like at 90 days. ",(0,n.jsx)(f,{id:"b",children:"Push back where I'm vague"}),". Then write the role spec in ",(0,n.jsx)(f,{id:"d",children:"our standard format"})," and list ",(0,n.jsx)(f,{id:"c",children:"what's still open for the recruiter"}),"."]})}),`
`,(0,n.jsx)(r.h3,{id:"why-this-works",children:"Why this works"}),`
`,(0,n.jsx)(p,{mark:"a",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask to be interviewed before it drafts."}),` "Walk me through the intake"
makes the conversation the deliverable, so the spec is built from your
answers rather than guessed from a job title.`]})})}),`
`,(0,n.jsx)(p,{mark:"b",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Give permission to push back."}),` "Push back where I'm vague" gives Cowork
permission to do what a good recruiter does: notice when "strong
communicator" needs to become a testable signal.`]})})}),`
`,(0,n.jsx)(p,{mark:"c",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"List open questions separately."}),` Asking for "what's still open for the
recruiter" keeps undecided comp bands or location flex out of the spec and
on a short list for the live sync.`]})})}),`
`,(0,n.jsx)(p,{mark:"d",children:(0,n.jsx)(h,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Put your templates in the working folder."}),` Your spec template and
leveling guide sit in the working folder, so "our standard format" and the
level definition mean the same thing for every manager who runs this.`]})})}),`
`,(0,n.jsx)(r.h3,{id:"get-a-better-draft",children:"Get a better draft"}),`
`,(0,n.jsx)(h,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add an example to match."}),` Drop an example you like into the folder and
Cowork matches your structure and voice.`]})}),`
`,(0,n.jsx)(h,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask it to flag uncertainty."}),` Add "flag anything you're not confident about"
so you know where to look first when you review the draft.`]})}),`
`,(0,n.jsx)(r.h2,{id:"3-make-cowork-work-for-you",children:"3. Make Cowork work for you"}),`
`,(0,n.jsx)(r.p,{children:"A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on."}),`
`,(0,n.jsx)(c,{folder:"Hiring",children:(0,n.jsx)(r.p,{children:`Make what we've done in this task so far into a skill, or edit the
/recruiting-pipeline skill with my feedback.`})}),`
`,(0,n.jsxs)(i,{type:"tip",children:[(0,n.jsx)(r.strong,{children:"Tip:"})," tell Claude to edit the skill for you."]}),`
`,(0,n.jsx)(r.h2,{id:"4-make-it-repeatable",children:"4. Make it repeatable"}),`
`,(0,n.jsx)(r.h3,{id:"run-it-whenever-a-headcount-is-approved",children:"Run it whenever a headcount is approved"}),`
`,(0,n.jsxs)(r.p,{children:["A new req gets approved, the intake should be waiting for the hiring manager. Type ",(0,n.jsx)(r.code,{children:"/schedule"})," in the prompt, or open ",(0,n.jsx)(r.strong,{children:"Scheduled"})," in the Cowork sidebar, and the customized skill starts the conversation whenever a new role folder appears under Hiring."]}),`
`,(0,n.jsx)(c,{folder:"Hiring",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"/schedule"}),` Weekdays at 9am, check Hiring for any new subfolder, run
/recruiting-pipeline in each one, and save the intake transcript and finished
role spec there.`]})}),`
`,(0,n.jsx)(l,{name:"New role intake",cadence:"Weekdays at 9am",children:(0,n.jsxs)(r.p,{children:["Runs ",(0,n.jsx)(r.code,{children:"/recruiting-pipeline"}),` in every new subfolder under Hiring and writes the
intake transcript and finished spec to that role's folder.`]})}),`
`,(0,n.jsx)(r.h2,{id:"5-share-with-your-teammates",children:"5. Share with your teammates"}),`
`,(0,n.jsxs)(r.p,{children:["Your customized ",(0,n.jsx)(r.code,{children:"/recruiting-pipeline"})," now carries your intake questions, your leveling guide, and your spec template. Share it so every hiring manager runs the same intake, and recruiting receives a complete spec before the first call instead of after it."]}),`
`,(0,n.jsx)(i,{type:"note",title:"Share the skill",children:(0,n.jsxs)(r.p,{children:["In Cowork, open ",(0,n.jsx)(r.strong,{children:"Skills"})," → ",(0,n.jsx)(r.code,{children:"/recruiting-pipeline"})," → ",(0,n.jsx)(r.strong,{children:"Share"}),` and pick your
hiring managers (or your whole workspace, if your admin allows). They get the
skill with your intake and templates baked in, so they don't repeat Steps 1-3.`]})}),`
`,(0,n.jsx)(r.h2,{id:"going-forward",children:"Going forward"}),`
`,(0,n.jsx)(d,{title:"Now in your Cowork",plugins:[{slug:"human-resources"}],tools:[{slug:"google-drive"}],folder:"Hiring",next:{label:"Interview debrief synthesis",slug:"interview-debrief"},children:(0,n.jsx)(r.p,{children:"Every role you open gets the same structured intake and a complete spec in your standard format, with open questions listed for the recruiter — ready before the first call."})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};