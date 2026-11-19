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
`,(0,n.jsxs)(r.p,{children:["Drag the files you'll use (the scorecard export or pasted feedback, the role's competency rubric, the interview plan) into one folder on your machine, then ",(0,n.jsx)(r.a,{href:"/tutorials/navigating-the-claude-desktop-app#folders",children:"give Claude access to it"})," in the Claude desktop app. Claude reads from the folder and writes the debrief brief back to it. If you run debriefs every week, ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",children:"create a project"})," from the role folder so the rubric and instructions stay attached."]}),`
`,(0,n.jsx)(l,{name:"Hiring / Senior-PM-Growth / debrief",files:[{name:"scorecards-export-ARivera.csv",kind:"csv",date:"Apr 29, 2026",size:"28 KB"},{name:"competency-rubric.pdf",kind:"pdf",date:"Feb 10, 2026",size:"142 KB"},{name:"interview-plan.docx",kind:"doc",date:"Feb 10, 2026",size:"36 KB"}]}),`
`,(0,n.jsx)(r.h2,{id:"2-the-prompt",children:"2. The prompt"}),`
`,(0,n.jsx)(r.h3,{id:"copy-this-into-claude",children:"Copy this into Claude"}),`
`,(0,n.jsx)(s,{folder:"Hiring / Senior-PM-Growth / debrief",children:(0,n.jsxs)(r.p,{children:["Synthesize ",(0,n.jsx)(d,{id:"d",children:"the interviewer scorecards"})," into the debrief brief: where the panel converged, where they split, which signals are ",(0,n.jsx)(d,{id:"b",children:"strong versus anecdotal"}),", ",(0,n.jsx)(d,{id:"c",children:"which competencies weren't covered"}),", and the three questions to resolve in the debrief. ",(0,n.jsx)(d,{id:"a",children:"Do not recommend hire or no-hire"}),"; that decision belongs to the panel."]})}),`
`,(0,n.jsx)(r.h3,{id:"why-this-works",children:"Why this works"}),`
`,(0,n.jsx)(f,{mark:"a",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"State what not to do."}),` "Do not recommend hire or no-hire" is in the
prompt because Claude does not make hiring decisions; the brief organizes
the evidence so the people in the room can.`]})})}),`
`,(0,n.jsx)(f,{mark:"b",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask it to weigh the evidence."}),` Asking which signals are "strong versus
anecdotal" forces the brief to weight a pattern across four scorecards
differently from one interviewer's aside.`]})})}),`
`,(0,n.jsx)(f,{mark:"c",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask for what's missing."}),` "Which competencies weren't covered" checks the
scorecards against the rubric in the folder so the panel knows where it's
deciding without evidence.`]})})}),`
`,(0,n.jsx)(f,{mark:"d",children:(0,n.jsx)(m,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Include your criteria with the data."}),` The scorecards, the competency
rubric, and the interview plan sit in the working folder, so convergence and
gaps are measured against the bar you set for this role.`]})})}),`
`,(0,n.jsx)(r.h3,{id:"get-a-better-draft",children:"Get a better draft"}),`
`,(0,n.jsx)(m,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add an example to match."}),` Drop an example you like into the folder and
Claude matches your structure and voice.`]})}),`
`,(0,n.jsx)(m,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask it to flag uncertainty."}),` Add "flag anything you're not confident about"
so you know where to look first when you review the draft.`]})}),`
`,(0,n.jsx)(r.h2,{id:"3-make-claude-work-for-you",children:"3. Make Claude work for you"}),`
`,(0,n.jsx)(r.p,{children:"Tell Claude your own rules for this task, such as how many interviewers must agree to count as convergence, then save what you've done as a skill of your own. A few minutes of conversation and it runs with your standards from then on."}),`
`,(0,n.jsx)(s,{folder:"Hiring / Senior-PM-Growth / debrief",children:(0,n.jsx)(r.p,{children:`Make what we've done in this task so far into a skill called
/interview-debrief.`})}),`
`,(0,n.jsx)(r.p,{children:"Review the skill, and save it if Claude hasn't already."}),`
`,(0,n.jsxs)(i,{type:"tip",children:[(0,n.jsx)(r.strong,{children:"Tip:"})," tell Claude to edit the skill for you."]}),`
`,(0,n.jsx)(r.h2,{id:"4-make-it-repeatable",children:"4. Make it repeatable"}),`
`,(0,n.jsx)(r.h3,{id:"run-it-when-the-last-scorecard-is-in",children:"Run it when the last scorecard is in"}),`
`,(0,n.jsxs)(r.p,{children:["The brief should be waiting before the debrief starts. Ask Claude to set up a scheduled task, or open ",(0,n.jsx)(r.strong,{children:"Scheduled"})," in the sidebar, and ",(0,n.jsx)(r.code,{children:"/interview-debrief"})," runs every weekday morning. Give Claude access to the whole Hiring folder, and Claude checks it for candidates with all scorecards submitted and runs the skill on each."]}),`
`,(0,n.jsx)(s,{folder:"Hiring",children:(0,n.jsx)(r.p,{children:`Set up a scheduled task for weekdays at 9am: check the hiring folder for candidates with all
scorecards in, run /interview-debrief on each, and write the brief to
Hiring/<role>/debrief.`})}),`
`,(0,n.jsx)(c,{name:"Debrief brief when scorecards are in",cadence:"Weekdays at 9am · checks the hiring folder for complete scorecard sets",children:(0,n.jsxs)(r.p,{children:["Runs ",(0,n.jsx)(r.code,{children:"/interview-debrief"}),` each weekday morning on any candidate with all
scorecards in the hiring folder and writes the brief to that role's debrief
folder.`]})}),`
`,(0,n.jsx)(r.p,{children:"To use a folder on your computer during a scheduled task, keep your computer on and awake with the Claude desktop app open so Claude can access it."}),`
`,(0,n.jsx)(r.h2,{id:"5-share-with-your-teammates",children:"5. Share with your teammates"}),`
`,(0,n.jsxs)(r.p,{children:["Your ",(0,n.jsx)(r.code,{children:"/interview-debrief"})," skill now carries your rubric, your convergence threshold, and the rule that the decision stays with humans. Share it so every hiring manager and recruiter walks into debrief with the same brief, and the panel spends its time on the open questions instead of re-reading scorecards."]}),`
`,(0,n.jsx)(i,{type:"note",title:"Share the skill",children:(0,n.jsxs)(r.p,{children:["You can share a skill you created. In ",(0,n.jsx)(r.a,{href:"https://claude.ai/customize/skills/yours",children:"your skills"}),", open the ",(0,n.jsx)(r.strong,{children:"..."}),`
menu next to `,(0,n.jsx)(r.code,{children:"/interview-debrief"}),", select ",(0,n.jsx)(r.strong,{children:"Share"}),`, and pick your hiring
managers and recruiters. For your whole organization, open the skill and
select `,(0,n.jsx)(r.strong,{children:"Publish to org"}),`, if your admin allows. They get the skill with your
rubric and guardrails baked in, so they don't have to build it again.`]})}),`
`,(0,n.jsx)(r.h2,{id:"going-forward",children:"Going forward"}),`
`,(0,n.jsx)(u,{title:"Now set up in Claude",tools:[{slug:"google-drive"}],folder:"Hiring / Senior-PM-Growth / debrief",next:{label:"Offer process",slug:"offer-process"},children:(0,n.jsx)(r.p,{children:`Interviewer feedback is organized into one brief before the meeting, so the
panel starts from the same summary and uses the time to decide instead of
re-reading scorecards.`})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["Callout","Connectors","CoworkPrompt","CoworkScheduled","CoworkWorkingFolder","CoworkWrapUp","Mark","MarkHighlight","ResourceWidget","Tip"];export{i as default};