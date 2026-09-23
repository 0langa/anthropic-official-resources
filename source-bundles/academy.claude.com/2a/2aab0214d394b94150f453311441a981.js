import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Callout:i,CoworkPrompt:o,StepCadence:s,StepRoadmap:c,Video:l}=r;return i||a("Callout",!0),o||a("CoworkPrompt",!0),s||a("StepCadence",!0),c||a("StepRoadmap",!0),l||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{youtubeId:"lsufr1i6ACY",title:"Using Claude Cowork for marketing ops: run a weekly review that preps itself"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Watch the full workflow in the video, then follow the steps below to set it up yourself."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"In the video"})," — Ian, who works in marketing ops, runs his weekly metrics review: a detailed doc for the team and a one-slide summary for leadership. A skill he wrote does the gathering, a scheduled task runs it without him, and he steers the narrative on Monday morning."]}),`
`,(0,n.jsx)(c,{title:"Follow along to set up",steps:[{href:"#step-1-build-the-prep-skill",label:"Build the prep skill",cadence:"Set up once"},{href:"#step-2-schedule-the-prep-run",label:"Schedule the prep run",cadence:"Set up once"},{href:"#step-3-run-the-weekly-review",label:"Run the weekly review",cadence:"Every week"},{href:"#step-4-save-what-you-learned-into-the-skill",label:"Save what you learned into the skill",cadence:"Every week"}]}),`
`,(0,n.jsxs)(i,{type:"note",children:[(0,n.jsxs)(r.p,{children:["If you haven’t set up Cowork yet, start with ",(0,n.jsx)(r.a,{href:"/tutorials/get-started-in-claude-cowork-in-three-steps",children:"Get started in three steps"}),", then ",(0,n.jsx)(r.a,{href:"/tutorials/customize-claude-cowork",children:"Customize Cowork"})," for connectors and skills."]}),(0,n.jsxs)(r.p,{children:["To dive deeper into Claude Cowork, take the full ",(0,n.jsx)(r.a,{href:"/courses/introduction-to-claude-cowork",children:"Intro to Claude Cowork course"}),"."]})]}),`
`,(0,n.jsx)(r.h2,{id:"step-1-build-the-prep-skill",children:"Step 1: Build the prep skill"}),`
`,(0,n.jsx)(s,{children:"Set up once"}),`
`,(0,n.jsx)(r.p,{children:"The report is the last thing Claude writes in the video. Before that comes the gathering: the same information is scattered across your email, calendar, and project tracker, and every week Claude pulls it together into a rough first draft for you to review and finish in Cowork."}),`
`,(0,n.jsx)(r.p,{children:"That information gathering process is the same every week, no matter what the report says. So you build it into a prep skill once. The prep skill tells Claude what data to pull, where to find it, and how to lay out the starting draft."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"To set it up:"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Start a new task in Cowork."}),`
`,(0,n.jsx)(r.li,{children:"Describe your weekly report — the data sources, the format, and the questions a reader would ask of it."}),`
`,(0,n.jsx)(r.li,{children:"Ask Claude to write it as a skill."}),`
`,(0,n.jsx)(r.li,{children:"Run it once on a real week, read the file, and add anything it missed."}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["To start now, open Claude and describe the report you want to prepare — Claude writes the skill as a plain-text file you can open from ",(0,n.jsx)(r.code,{children:"Customize → Skills"})," to read or change any time:"]}),`
`,(0,n.jsx)(o,{folder:"Working folder",children:(0,n.jsx)(r.p,{children:"Help me build a skill that prepares my [weekly metrics review]. Walk me through what to pull, where to find it, what the draft should look like, and when to pause and ask — then write it as a skill."})}),`
`,(0,n.jsx)(r.h2,{id:"step-2-schedule-the-prep-run",children:"Step 2: Schedule the prep run"}),`
`,(0,n.jsx)(s,{children:"Set up once"}),`
`,(0,n.jsx)(r.p,{children:"Now put the prep skill you built in step 1 on a schedule, so it runs on its own and the data is ready when you start."}),`
`,(0,n.jsxs)(r.p,{children:["There are two ways to create it: type ",(0,n.jsx)(r.code,{children:"/schedule"})," in any task, or open ",(0,n.jsx)(r.code,{children:"Scheduled"})," in the sidebar and add a new one."]}),`
`,(0,n.jsx)(r.p,{children:"Here’s the prompt to set it up — replace the blanks with your own:"}),`
`,(0,n.jsx)(o,{folder:"Working folder",children:(0,n.jsx)(r.p,{children:"/schedule Every [Sunday around 5pm], run the prep step of [your weekly review skill]. Read last week's review, pull the data from [your warehouse], and write a starting draft to [your working folder]."})}),`
`,(0,n.jsx)(r.h2,{id:"step-3-run-the-weekly-review",children:"Step 3: Run the weekly review"}),`
`,(0,n.jsx)(s,{children:"Every week"}),`
`,(0,n.jsx)(r.p,{children:"The scheduled task from step 2 already ran the prep: the data is pulled together into a doc in a folder you chose on your desktop, a starting draft is written, and Claude has named a few possible focus areas."}),`
`,(0,n.jsxs)(r.p,{children:["Ask ",(0,n.jsx)(r.em,{children:'"How did the prep go?"'})," and Claude walks you through what it pulled and what it couldn’t resolve. From there it’s a short back-and-forth to continue building the full report:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pick the focus:"})," from what it found, Claude offers a few candidates for the report’s focus. Which one fits this week is your call."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Answer what it flags:"})," a good prep skill asks for clarification instead of guessing. In the video the segment structure changed, so Claude raises one question before it continues."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Approve the outline, then expand:"})," check the metrics table and main points first. Once they read right, tell Claude to expand, and it fills in the detail without changing what you approved."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"From there, you can tell Claude to turn the weekly review into any format you need, or finish the work in your other tools:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Any format:"})," the finalized doc, a one-slide summary for leadership, or whatever cut you need"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Finished in your tools:"})," the summary message posted to your team’s channel, the follow-ups created as tasks in your tracker"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Anything that sends or shares waits for your yes."}),`
`,(0,n.jsxs)(i,{type:"tip",title:"Where your judgment applies",children:[(0,n.jsxs)(r.p,{children:["Claude pulls the numbers, but the call is yours: the focus, what the review says, what goes out. Weighing that is what the AI Fluency framework calls ",(0,n.jsx)(r.strong,{children:"discernment"})," — applying your own judgment to what Claude produced."]}),(0,n.jsxs)(r.p,{children:["More on the habit: ",(0,n.jsx)(r.a,{href:"/tutorials/the-4-ds-of-ai-fluency-behavioral-indicators",children:"The 4 Ds of AI Fluency"}),", or ",(0,n.jsx)(r.a,{href:"/courses/ai-fluency-framework-foundations",children:"the Framework and Foundations course"})]})]}),`
`,(0,n.jsx)(r.h2,{id:"step-4-save-what-you-learned-into-the-skill",children:"Step 4: Save what you learned into the skill"}),`
`,(0,n.jsx)(s,{children:"Every week"}),`
`,(0,n.jsx)(r.p,{children:"Running the review, you made corrections — a number fixed, a table simplified, a section redirected — and each one is something the skill can learn from. The skill is your process written down, so before you close Cowork, ask Claude to fold those corrections back in:"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude before you close Cowork:"})," ",(0,n.jsx)(r.em,{children:'"What did we learn this week that should go into the skill for next week?"'})]}),`
`,(0,n.jsx)(r.p,{children:"Claude reads back through the work you just did, names what you changed and why, and writes it into the skill. Next week the prep already knows your preferences, your format, and your sources — you don’t re-instruct it on the same things."}),`
`,(0,n.jsx)(r.p,{children:"Because a skill is a plain-text file in a folder, you can share it. Anyone on the team can run the same review and pick up the same improvements."}),`
`,(0,n.jsx)(r.h2,{id:"make-it-yours",children:"Make it yours"}),`
`,(0,n.jsx)(r.p,{children:"This workflow fits any recurring report where the prep is the same every cycle:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sales pipeline review"})," — pipeline by stage, slipped deals, weekly delta"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Financial close"})," — variance to plan, open items, the explainers"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Product metrics rollup"})," — usage by segment, feature adoption, what changed"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Board prep"})," — the same numbers, one altitude up"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"The setup is the same every time:"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Start a task in Cowork and describe the report — what it covers, where the data comes from, what the format looks like, when Claude should pause and ask."}),`
`,(0,n.jsx)(r.li,{children:"Add a prep mode the scheduled task can run on its own — pull the numbers, write a starting draft, stop."}),`
`,(0,n.jsx)(r.li,{children:"Schedule it for before your workday starts."}),`
`,(0,n.jsx)(r.li,{children:"Keep read-only tools always allowed; anything that sends or changes data waits for you."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"When you arrive, the data is there and the candidates are named. The focus call is still yours."}),`
`,(0,n.jsx)(r.h2,{id:"learn-more",children:"Learn more"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/courses/introduction-to-claude-cowork",children:"Claude Cowork 101"}),". The full Cowork course to go deeper into the product."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/customize-claude-cowork",children:"Customize Cowork"}),". How to set up connectors, skills, and instructions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/courses/ai-fluency-framework-foundations",children:"AI Fluency: Framework and Foundations"}),". The full AI fluency course for effective, efficient, and ethical AI use."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/the-4-ds-of-ai-fluency-behavioral-indicators",children:"The 4 Ds of AI Fluency"}),". The practical skills and mental models behind building AI fluency."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13364135-use-cowork-safely",children:"Use Cowork safely"}),". Access, approvals, and what Claude can see."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};