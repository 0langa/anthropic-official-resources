import{em as e,nm as t}from"../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Callout:i,CoworkPrompt:o,StepCadence:s,StepRoadmap:c,Video:l}=r;return i||a("Callout",!0),o||a("CoworkPrompt",!0),s||a("StepCadence",!0),c||a("StepRoadmap",!0),l||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{youtubeId:"EPUg9pmfPk0",title:"Using Claude Cowork for legal: answer fast questions on past decisions"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Watch the full workflow in the video, then follow the steps below to set it up yourself."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"In the video"})," — Mark, a product lawyer, gets a Slack message from a product manager: does a feature change reopen a review he wrote in January? He has a few minutes and none of the context he had when he wrote the memo. A scheduled task had already sorted his morning; a skill pulls the prior decision; he verifies the source line before he replies."]}),`
`,(0,n.jsx)(c,{title:"Follow along to set up",steps:[{href:"#step-1-set-up-the-brief-skill",label:"Set up the brief skill",cadence:"Set up once"},{href:"#step-2-schedule-the-morning-brief",label:"Schedule the morning brief",cadence:"Set up once"},{href:"#step-3-run-a-brief-on-a-question",label:"Run a brief on a question",cadence:"Per question"},{href:"#step-4-verify-before-you-sign",label:"Verify before you sign",cadence:"Per question"},{href:"#step-5-reply-and-close-the-loop",label:"Reply and close the loop",cadence:"Per question"}]}),`
`,(0,n.jsxs)(i,{type:"note",children:[(0,n.jsxs)(r.p,{children:["If you haven’t set up Cowork yet, start with ",(0,n.jsx)(r.a,{href:"/tutorials/get-started-in-claude-cowork-in-three-steps",children:"Get started in three steps"}),", then ",(0,n.jsx)(r.a,{href:"/tutorials/customize-claude-cowork",children:"Customize Cowork"})," for connectors and skills."]}),(0,n.jsxs)(r.p,{children:["To dive deeper into Claude Cowork, take the full ",(0,n.jsx)(r.a,{href:"/courses/introduction-to-claude-cowork",children:"Intro to Claude Cowork course"}),"."]})]}),`
`,(0,n.jsx)(r.h2,{id:"step-1-set-up-the-brief-skill",children:"Step 1: Set up the brief skill"}),`
`,(0,n.jsx)(s,{children:"Set up once"}),`
`,(0,n.jsxs)(r.p,{children:["Everything in this workflow runs on one skill — ",(0,n.jsx)(r.code,{children:"/brief"}),". It knows where your past decisions live, how your reviews are structured, and writes back what was concluded with a citation for every claim."]}),`
`,(0,n.jsxs)(r.p,{children:["You’ll use it two ways: a ",(0,n.jsx)(r.strong,{children:"daily"})," mode that sorts your morning in step 2, and a ",(0,n.jsx)(r.strong,{children:"topic"})," mode that answers a specific question in step 3. The ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/customize/plugins/new?marketplace=https%3A%2F%2Fgithub.com%2Fanthropics%2Fknowledge-work-plugins&plugin=legal",children:"Legal plugin"})," ships with ",(0,n.jsx)(r.code,{children:"/brief"})," already built. You install it, point it at your sources, and tell Claude to tailor it to your team."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Install and set it up:"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"In Customize → Plugins"}),", open the ",(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/customize/plugins/new?marketplace=https%3A%2F%2Fgithub.com%2Fanthropics%2Fknowledge-work-plugins&plugin=legal",children:"Legal plugin"})," and install it — it comes with the ",(0,n.jsx)(r.code,{children:"/brief"})," skill, built on how a working legal team uses it."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"In Customize → Connectors"}),", connect the tools the skill draws on — your inbox, calendar, task tracker, chat, and wherever your reviews and decisions are stored. The skill reads across all of them."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"In the Cowork chat bar"}),", pick a working folder Claude can read, edit, and save to, so every brief lands somewhere you can find it later."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["With the plugin installed and your sources connected, tell Claude to tailor ",(0,n.jsx)(r.code,{children:"/brief"})," to your team — where your decisions live, how your reviews are structured, and the format you read fastest:"]}),`
`,(0,n.jsx)(o,{folder:"Working folder",children:(0,n.jsx)(r.p,{children:"Customize the /brief skill from the Legal plugin for my team. Our reviews and past decisions live in [where our reviews are stored] — set up the daily memo and the topic brief around how my reviews are structured and the format I read fastest."})}),`
`,(0,n.jsx)(r.p,{children:"Claude walks you through your document store and templates, then rewrites the skill to match. Run it on a question you already know the answer to, check the citations, and tell Claude to fix anything it got wrong."}),`
`,(0,n.jsx)(r.h2,{id:"step-2-schedule-the-morning-brief",children:"Step 2: Schedule the morning brief"}),`
`,(0,n.jsx)(s,{children:"Set up once"}),`
`,(0,n.jsxs)(r.p,{children:["Put the ",(0,n.jsx)(r.code,{children:"/brief"})," skill from step 1 on a morning schedule, so it runs on its own and you don’t type the same prompt every day. At the time you set in the scheduled task, it reads your inbox, tracker, and chat and leaves one short memo: what’s due today, what’s new, what’s urgent. You open Cowork to a sorted list instead of a full inbox to triage."]}),`
`,(0,n.jsxs)(r.p,{children:["There are two ways to create it: type ",(0,n.jsx)(r.code,{children:"/schedule"})," in any task, or open ",(0,n.jsx)(r.strong,{children:"Scheduled"})," in the sidebar and add a new one."]}),`
`,(0,n.jsx)(r.p,{children:"Here’s the prompt to set it up — replace the blanks with your own:"}),`
`,(0,n.jsx)(o,{folder:"Working folder",children:(0,n.jsx)(r.p,{children:"/schedule Every [weekday at 8am], read my [Gmail, issue tracker, and Slack] and run /brief in daily mode to write a memo: what's due today, what's new, and what's urgent."})}),`
`,(0,n.jsx)(r.h2,{id:"step-3-run-a-brief-on-a-question",children:"Step 3: Run a brief on a question"}),`
`,(0,n.jsx)(s,{children:"Per question"}),`
`,(0,n.jsxs)(r.p,{children:["In step 2 you put ",(0,n.jsx)(r.code,{children:"/brief"})," on a schedule for the daily memo. The other way to use it is on demand: when a specific question lands, you run ",(0,n.jsx)(r.code,{children:"/brief"})," on that one question and get a cited answer back in minutes. In the video, the question is whether a feature change reopens a review from January."]}),`
`,(0,n.jsx)(r.p,{children:"It’s the same skill, so it already knows where your reviews live — your prompt only has to carry the question:"}),`
`,(0,n.jsx)(o,{folder:"Reviews",children:(0,n.jsx)(r.p,{children:"/brief does [the new request] change our conclusion on [the prior review]?"})}),`
`,(0,n.jsx)(r.p,{children:"The brief comes back short and organized: what you’d decided before, what’s different now, and where the two don’t line up. Every point links to the exact source it came from, so you can check it yourself — which is the next step."}),`
`,(0,n.jsx)(r.h2,{id:"step-4-verify-before-you-sign",children:"Step 4: Verify before you sign"}),`
`,(0,n.jsx)(s,{children:"Per question"}),`
`,(0,n.jsx)(r.p,{children:"Step 3 gave you the brief: the question answered quickly, with every claim cited back to its source. Before you act on it, read the source behind the finding you’ll rely on. You’re the one signing the reply."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"To check the part that matters:"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Find what the question reopens"})," — the brief lists the parts of your prior review it affects."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Click the citation on the claim you’re relying on"})," — every claim links back to its source section."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Read the line in the source"})," — check that the brief quoted it correctly."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Make your call"})," — the answer is yours to sign once you’ve read the source yourself."]}),`
`]}),`
`,(0,n.jsxs)(i,{type:"tip",title:"Where your judgment applies",children:[(0,n.jsxs)(r.p,{children:["Claude did the prep, but the call is yours. Reading the source line yourself is how you apply your judgment before your name goes on the answer. That habit is what the AI Fluency framework calls ",(0,n.jsx)(r.strong,{children:"discernment"}),"."]}),(0,n.jsxs)(r.p,{children:["More on the habit: ",(0,n.jsx)(r.a,{href:"/tutorials/the-4-ds-of-ai-fluency-behavioral-indicators",children:"The 4 Ds of AI Fluency"})," · ",(0,n.jsx)(r.a,{href:"/courses/ai-fluency-framework-foundations",children:"the Framework and Foundations course"})]})]}),`
`,(0,n.jsx)(r.h2,{id:"step-5-reply-and-close-the-loop",children:"Step 5: Reply and close the loop"}),`
`,(0,n.jsx)(s,{children:"Per question"}),`
`,(0,n.jsx)(r.p,{children:"Once you’ve verified the answer, finish the rest of the work — the part that happens in your other tools. Through connectors to your messaging and project-management tools, Claude can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Reply to your teammate"})," — with a messaging connector (Gmail, Slack), Claude drafts the response right in the tool you’d send it from."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Close out the request"})," — with a task-tracker connector (Jira, Linear, Asana), Claude posts your decision, links the source, and marks the ticket done."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude asks before it sends or changes anything. You can do both in one prompt:"}),`
`,(0,n.jsx)(o,{folder:"Working folder",children:(0,n.jsx)(r.p,{children:"Draft a reply to [the product manager] in [your messaging tool] — my view: [your call on the question]. Then close the ticket in [your task tracker]: post my decision and the brief's list of what the question reopens, link the source review, and mark it done."})}),`
`,(0,n.jsx)(r.h2,{id:"make-it-yours",children:"Make it yours"}),`
`,(0,n.jsx)(r.p,{children:"This setup isn’t legal-specific and can work for any role that fields fast questions about past decisions:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Support and escalations"})," — what did we tell this customer last time, and what’s changed since?"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Compliance and risk"})," — which assessments does this change reopen?"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Finance"})," — what assumptions did we approve in the last forecast, and does the new request hold to them?"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Engineering on-call"})," — what did we decide about this system’s failure modes, and does the new alert fit a known one?"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"The setup is the same every time:"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Get a skill that knows where your decisions are recorded and how you read them — from a plugin you tailor, or one you describe to Claude."}),`
`,(0,n.jsx)(r.li,{children:"Schedule it so the day is sorted before you start it."}),`
`,(0,n.jsx)(r.li,{children:"Run a brief on the question; verify the source line before you sign."}),`
`,(0,n.jsx)(r.li,{children:"Close the loop with a connector so the decision lands where your team can find it."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"learn-more",children:"Learn more"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/courses/introduction-to-claude-cowork",children:(0,n.jsx)(r.strong,{children:"Claude Cowork 101"})}),". Take the full Cowork course to dive deeper into the product."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/customize-claude-cowork",children:(0,n.jsx)(r.strong,{children:"Customize Cowork"})}),". Learn how to set up connectors, skills, and instructions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/courses/ai-fluency-framework-foundations",children:(0,n.jsx)(r.strong,{children:"AI Fluency: Framework and Foundations"})}),". Take the full AI fluency course to work towards effective, efficient, and ethical AI use."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/tutorials/the-4-ds-of-ai-fluency-behavioral-indicators",children:(0,n.jsx)(r.strong,{children:"The 4 Ds of AI Fluency"})}),". Learn practical skills and mental models behind building AI fluency."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13364135-use-cowork-safely",children:(0,n.jsx)(r.strong,{children:"Use Cowork safely"})}),". Understand access, approvals, and what Claude can see."]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};