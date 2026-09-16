import{Gp as e,qp as t}from"../../../../../content-de-meta-jwql3rqc.js";import{t as n}from"../../../../../using-subagents-effectively-cdv2jbid.js";var r=e();function i(e){let i={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{youtubeId:"n5LoKZ8Oa-A",title:"Using subagents effectively",transcript:n,children:(0,r.jsx)(i.p,{children:`You know how to create subagents and design them well. Now the question is:
when do they actually help, and when do they get in the way? The difference
comes down to one thing -- whether the intermediate work matters to your
main thread.`})}),`
`,(0,r.jsx)(i.h2,{id:"when-subagents-shine",children:"When subagents shine"}),`
`,(0,r.jsx)(i.p,{children:"Subagents work best when the exploration is separate from the execution. If each step in a task depends on what the previous step discovered, you want that work in your main thread. But if you just need an answer and don't care about the journey, delegate it."}),`
`,(0,r.jsx)(i.p,{children:"Subagents excel at tasks where:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"You need a result, not a play-by-play of how it was found"}),`
`,(0,r.jsx)(i.li,{children:"The exploratory work would clutter your main thread's context"}),`
`,(0,r.jsx)(i.li,{children:"The task benefits from a fresh perspective or a custom system prompt"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"research-tasks",children:"Research tasks"}),`
`,(0,r.jsxs)(i.p,{children:["Research is the classic subagent use case. Consider investigating how authentication works in an unfamiliar codebase. Your main thread needs to know ",(0,r.jsx)(i.em,{children:"where"})," the JWT is validated, but it doesn't need to see every file that was searched along the way."]}),`
`,(0,r.jsx)(i.p,{children:"A research subagent can read dozens of files, trace through function calls, and explore different code paths. All that exploration stays in the subagent's context. Your main thread receives a clean summary like:"}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:`JWT validation happens in middleware/auth.js line 42,
called from the Express router in route/api.js
`})}),`
`,(0,r.jsx)(i.p,{children:"The subagent did the heavy lifting. Your main thread gets exactly what it needs to move forward."}),`
`,(0,r.jsx)(i.h2,{id:"code-reviews",children:"Code Reviews"}),`
`,(0,r.jsx)(i.p,{children:"Claude reviews code more effectively when the code is presented as being authored by someone else. If you built a feature over many turns with your main thread, asking that same thread to review it often produces weak feedback. Claude was involved in creating it, so it has trouble seeing it with fresh eyes."}),`
`,(0,r.jsxs)(i.p,{children:["A reviewer subagent sees the changes in a separate context. It runs ",(0,r.jsx)(i.code,{children:"git diff"}),", reads the modified files, and applies its specialized review criteria without the history of how the code was written. This separation also lets you encode project-specific review standards in the subagent's system prompt, ensuring consistent review criteria across the team."]}),`
`,(0,r.jsx)(i.h2,{id:"custom-system-prompts",children:"Custom System Prompts"}),`
`,(0,r.jsx)(i.p,{children:"Claude Code's default system prompt emphasizes concise, code-focused responses. That works great for coding, but not for everything."}),`
`,(0,r.jsx)(i.p,{children:"Here are two cases where a custom system prompt makes the subagent genuinely better than the main thread:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Copywriting subagent"})," -- Give it instructions about tone, audience, and style. Claude Code's default prompt tends toward concise technical writing, which really isn't what you want for a landing page or email campaign. A copywriting subagent can have completely different instructions about voice and structure."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Styling subagent"})," -- Point it at your design system files. When the subagent runs, those files load into its context automatically, so it knows your color variables, spacing conventions, and component patterns before it even starts writing any CSS."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"when-subagents-hurt",children:"When Subagents Hurt"}),`
`,(0,r.jsx)(i.p,{children:"The overhead of launching a subagent -- losing visibility into its work and compressing its findings into a summary -- only makes sense when the subagent does something the main thread can't. There are three common anti-patterns to watch out for."}),`
`,(0,r.jsx)(i.h3,{id:"expert-claims",children:"Expert Claims"}),`
`,(0,r.jsx)(i.p,{children:`Subagents that claim expertise rarely help. Prompts like "you are a Python expert" or "you are a Kubernetes specialist" add no value because Claude already has that knowledge. There's nothing a so-called expert subagent can do that your main thread can't do directly.`}),`
`,(0,r.jsx)(i.h3,{id:"sequential-pipelines",children:"Sequential Pipelines"}),`
`,(0,r.jsx)(i.p,{children:"Sequential subagent pipelines create problems. Consider a three-agent flow: one to reproduce a bug, one to debug it, and one to fix it. Pipelines work when tasks are truly independent. They fail when each step depends on discoveries from the previous step -- and bug fixing almost always does. Information gets lost in the handoff between agents."}),`
`,(0,r.jsx)(i.h3,{id:"test-runners",children:"Test Runners"}),`
`,(0,r.jsx)(i.p,{children:'Test runner subagents tend to hide information you need. When tests fail, you want the full output to diagnose issues. A subagent that returns "tests failed" forces you to create additional debug scripts to get details that would have been visible in direct output. Testing has shown that the test runner pattern performed worse among all configurations.'}),`
`,(0,r.jsx)(i.h2,{id:"the-decision-rule",children:"The Decision Rule"}),`
`,(0,r.jsxs)(i.p,{children:["When you're deciding whether to use a subagent, ask yourself one question: ",(0,r.jsx)(i.strong,{children:"does the intermediate work matter?"})]}),`
`,(0,r.jsx)(i.p,{children:"If the answer is no -- you just need the final result -- delegate it to a subagent. If the answer is yes -- you need to see and react to what's happening along the way -- keep it in your main thread."}),`
`,(0,r.jsx)(i.p,{children:"Use subagents for:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Research and exploration"}),`
`,(0,r.jsx)(i.li,{children:"Code reviews"}),`
`,(0,r.jsx)(i.li,{children:"Tasks that need a custom system prompt"}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Avoid subagents for:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`"Expert" personas that don't add real capability`}),`
`,(0,r.jsx)(i.li,{children:"Multi-step pipelines where each step depends on the last"}),`
`,(0,r.jsx)(i.li,{children:"Running tests where you need full output for debugging"}),`
`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};