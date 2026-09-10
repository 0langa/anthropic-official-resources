import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";import{t as n}from"../../../../../designing-effective-subagents-ntkj0htc.js";var r=e();function i(e){let i={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{CodePrompt:a,LessonVideo:s}=i;return a||o("CodePrompt",!0),s||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{youtubeId:"WPxWKT_OaU4",title:"Designing effective subagents",transcript:n,children:(0,r.jsx)(i.p,{children:`Now that you know how to create subagents, let's look at the patterns that
make them actually effective. A subagent that's poorly configured will
wander, run too long, or produce output the main agent can't use. The fixes
come down to four things: writing good descriptions, defining an output
format, reporting obstacles, and limiting tool access.`})}),`
`,(0,r.jsx)(i.h2,{id:"how-subagent-config-data-gets-used",children:"How Subagent Config Data Gets Used"}),`
`,(0,r.jsx)(i.p,{children:"When you send a message to the main context window agent, the name and description of every available subagent are included in the system prompt. This is how the main agent decides which subagent to launch and when. If you want better control over when a subagent gets triggered automatically, the name and description are what you should tweak."}),`
`,(0,r.jsxs)(i.p,{children:["The description also plays a second role. When the main agent launches a subagent, it writes an input prompt to kick off the task. It uses the description as guidance for writing that prompt. So the description doesn't just control ",(0,r.jsx)(i.em,{children:"when"})," a subagent runs -- it shapes ",(0,r.jsx)(i.em,{children:"what the subagent is told to do"}),"."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./2fcc14069266.png",alt:"A subagent config file's name and description fields, with an arrow showing them flowing into the main agent's prompt input"})}),`
`,(0,r.jsx)(i.h2,{id:"writing-descriptions-that-shape-input-prompts",children:"Writing Descriptions That Shape Input Prompts"}),`
`,(0,r.jsx)(i.p,{children:`Consider a code review subagent. With a generic description, the main agent might write an input prompt like "use get diff to find the current changes." That's vague. The subagent has to figure out which files matter on its own.`}),`
`,(0,r.jsx)(i.p,{children:'If you update the description to include something like "You must tell the agent precisely which files you want it to review," the main agent will now write a much more specific input prompt that lists the actual files to review.'}),`
`,(0,r.jsx)(i.p,{children:`This same technique works across different types of subagents. For example, adding "return sources that can be cited" to a web search subagent's description causes the main agent to include that instruction when delegating the task.`}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./f4fe08b1f4b2.png",alt:"The main agent delegating to the code-quality-reviewer subagent with a specific input prompt that lists the modified file and review focus areas"})}),`
`,(0,r.jsx)(i.h2,{id:"defining-an-output-format",children:"Defining an Output Format"}),`
`,(0,r.jsx)(i.p,{children:"The single most important improvement you can make to a subagent is defining an output format in its system prompt. This does two things:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"It creates natural stopping points -- the subagent knows it's done when it has filled in each section of the format."}),`
`,(0,r.jsx)(i.li,{children:"It prevents the subagent from running too long. Without a defined output, subagents struggle to decide when enough research has been done and tend to run much longer than necessary."}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Here's an example of a structured output format for a code review subagent:"}),`
`,(0,r.jsxs)(a,{children:[(0,r.jsx)(i.p,{children:"Provide your review in a structured format:"}),(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsx)(i.li,{children:"Summary: Brief overview of what you reviewed and overall assessment"}),`
`,(0,r.jsx)(i.li,{children:"Critical Issues: Any security vulnerabilities, data integrity risks, or logic errors that must be fixed immediately"}),`
`,(0,r.jsx)(i.li,{children:"Major Issues: Quality problems, architecture misalignment, or significant performance concerns"}),`
`,(0,r.jsx)(i.li,{children:"Minor Issues: Style inconsistencies, documentation gaps, or minor optimizations"}),`
`,(0,r.jsx)(i.li,{children:"Recommendations: Suggestions for improvement, refactoring opportunities, or best practices to apply"}),`
`,(0,r.jsx)(i.li,{children:"Approval Status: Clear statement of whether the code is ready to merge/deploy or requires changes"}),`
`]})]}),`
`,(0,r.jsx)(i.p,{children:"This format gives the subagent a clear checklist to work through. Once every section is filled in, the subagent knows it can stop."}),`
`,(0,r.jsx)(i.h2,{id:"reporting-obstacles",children:"Reporting Obstacles"}),`
`,(0,r.jsx)(i.p,{children:"When a subagent discovers a workaround during its work -- like solving a dependency issue or finding that a certain command needs particular flags -- those details need to appear in the summary it returns. If they don't, the main thread has to rediscover the same solutions on its own, which wastes time and tokens."}),`
`,(0,r.jsx)(i.p,{children:"The kinds of things you want surfaced include:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Setup issues or environment quirks"}),`
`,(0,r.jsx)(i.li,{children:"Workarounds discovered during the task"}),`
`,(0,r.jsx)(i.li,{children:"Commands that needed special flags or configuration"}),`
`,(0,r.jsx)(i.li,{children:"Dependencies or imports that caused problems"}),`
`]}),`
`,(0,r.jsx)(i.p,{children:'The way to get this information is to explicitly ask for it in the output format. Adding an "Obstacles Encountered" section to your output template surfaces this information reliably.'}),`
`,(0,r.jsx)(a,{children:(0,r.jsxs)(i.ol,{start:"7",children:[`
`,(0,r.jsx)(i.li,{children:"Obstacles Encountered: Report any obstacles encountered during the review process. This can be: setup issues, workarounds discovered or environment quirks. Report commands that needed a special flag or configuration. Report dependencies or imports that caused problems."}),`
`]})}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./47a3f8e30cbe.png",alt:"The code-quality-reviewer system prompt open in an editor, highlighting the Obstacles Encountered section of the output format"})}),`
`,(0,r.jsx)(i.h2,{id:"limiting-tool-access",children:"Limiting Tool Access"}),`
`,(0,r.jsx)(i.p,{children:"Not every subagent needs access to every tool. Think about what a subagent actually needs to do, and only give it the tools required for that job. This does two things: it prevents unintended side effects, and it makes each subagent's role clearer when you have several of them."}),`
`,(0,r.jsx)(i.p,{children:"Here's how to think about tool access for common subagent types:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Research / read-only subagent"})," -- Only needs ",(0,r.jsx)(i.code,{children:"Glob"}),", ",(0,r.jsx)(i.code,{children:"Grep"}),", and ",(0,r.jsx)(i.code,{children:"Read"}),". Cannot accidentally modify files."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Code reviewer"})," -- Needs ",(0,r.jsx)(i.code,{children:"Bash"})," access to run ",(0,r.jsx)(i.code,{children:"git diff"})," and see what changed, but still doesn't need ",(0,r.jsx)(i.code,{children:"Edit"})," or ",(0,r.jsx)(i.code,{children:"Write"}),"."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Styling / code modification agent"})," -- This is where you give ",(0,r.jsx)(i.code,{children:"Edit"})," and ",(0,r.jsx)(i.code,{children:"Write"})," access, because the subagent's job is to actually change your code."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"putting-it-all-together",children:"Putting It All Together"}),`
`,(0,r.jsx)(i.p,{children:"Effective subagents share four characteristics:"}),`
`,(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Specific descriptions"})," -- The description controls when the subagent is launched and what instructions it receives. Write it to steer both."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Structured output"})," -- Define an output format in the system prompt so the subagent knows when it's done and returns information the main thread can use."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Obstacle reporting"})," -- Include a section in the output format for workarounds, quirks, and problems so the main thread doesn't have to rediscover them."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Limited tool access"})," -- Only give a subagent the tools it actually needs. Read-only for research, bash for reviewers, edit/write only for agents that should change code."]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Each of these patterns is simple on its own, but together they turn a subagent from something that vaguely tries to help into a focused, predictable worker that finishes on time and reports back clearly."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};