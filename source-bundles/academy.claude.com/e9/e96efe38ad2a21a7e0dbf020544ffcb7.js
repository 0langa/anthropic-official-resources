import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Designing effective subagents

Now that you know how to create subagents, let's look at patterns that lead to effective subagents.

First, let's get a better idea of how some of the data in the subagent config file is used. Whenever you send a message to the main context window agent, the name and description of each subagent is included in the system prompt. So if you want to better control when the main agent launches a subagent automatically, you should modify the name and description.

Next, remember that when a subagent is launched, the main agent writes an input prompt. When writing this input prompt, it uses the description as guidance. So if you want to better control when the main agent launches a subagent automatically, you should modify the name and description.

Let's consider our review subagent again. Right now, when the main agent runs the subagent, the subagent is given an input prompt telling it to use git diff to find the current changes. If we wanted the main agent to more reliably tell the subagent exactly which files to review, we would update the description: "You must tell the agent precisely which files you want it to review." Now, if we ask Claude to run the code reviewer agent, we'll see a different input.

You can also influence what the main thread tells the subagent through the description. So adding "return sources that can be cited" to a web search subagent's description causes the main thread to include that instruction when delegating the task.

The most important improvement that you can make is defining an output format in the system prompt. This creates natural stopping points for the subagent. Without a defined output format, subagents struggle to decide when enough research has been done, and they tend to run much longer than subagents are given an output format.

When a subagent discovers a workaround to some issue like solving a dependency issue or finding that a certain command needs particular flags, these details should appear in the summary. Otherwise, the main thread has to rediscover the same solutions. Obstacles encountered: any setup issues, workarounds discovered, or environment quirks, commands that needed special flags or configuration, dependencies or imports that cause problems. Explicitly asking for obstacle reporting in the output format surfaces this information.

A read-only subagent using just glob, grep, read cannot accidentally modify files. This constraint clarifies the subagent's role and prevents unintended side effects. So think about what subagents actually need to do. If it's just researching, it only needs to read files, so keep it read-only. That way it can't accidentally modify anything while exploring. A reviewer needs to run git diff to see what changed, so give it bash access, but it still doesn't need to edit files. Only give edit and write to subagents that should actually change your code, like a styling agent applying CSS updates. This also helps clarify what each subagent is for when you have several of them.

So effective subagents use structured output, report obstacles, have specific descriptions, and limit tool access.
`;function i(t){let i={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CodePrompt:a,LessonVideo:s}=i;return a||o("CodePrompt",!0),s||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{youtubeId:"WPxWKT_OaU4",title:"Designing effective subagents",transcript:r,children:(0,n.jsx)(i.p,{children:`Now that you know how to create subagents, let's look at the patterns that
make them actually effective. A subagent that's poorly configured will
wander, run too long, or produce output the main agent can't use. The fixes
come down to four things: writing good descriptions, defining an output
format, reporting obstacles, and limiting tool access.`})}),`
`,(0,n.jsx)(i.h2,{id:"how-subagent-config-data-gets-used",children:"How Subagent Config Data Gets Used"}),`
`,(0,n.jsx)(i.p,{children:"When you send a message to the main context window agent, the name and description of every available subagent are included in the system prompt. This is how the main agent decides which subagent to launch and when. If you want better control over when a subagent gets triggered automatically, the name and description are what you should tweak."}),`
`,(0,n.jsxs)(i.p,{children:["The description also plays a second role. When the main agent launches a subagent, it writes an input prompt to kick off the task. It uses the description as guidance for writing that prompt. So the description doesn't just control ",(0,n.jsx)(i.em,{children:"when"})," a subagent runs -- it shapes ",(0,n.jsx)(i.em,{children:"what the subagent is told to do"}),"."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./2fcc14069266.png",alt:"A subagent config file's name and description fields, with an arrow showing them flowing into the main agent's prompt input"})}),`
`,(0,n.jsx)(i.h2,{id:"writing-descriptions-that-shape-input-prompts",children:"Writing Descriptions That Shape Input Prompts"}),`
`,(0,n.jsx)(i.p,{children:`Consider a code review subagent. With a generic description, the main agent might write an input prompt like "use get diff to find the current changes." That's vague. The subagent has to figure out which files matter on its own.`}),`
`,(0,n.jsx)(i.p,{children:'If you update the description to include something like "You must tell the agent precisely which files you want it to review," the main agent will now write a much more specific input prompt that lists the actual files to review.'}),`
`,(0,n.jsx)(i.p,{children:`This same technique works across different types of subagents. For example, adding "return sources that can be cited" to a web search subagent's description causes the main agent to include that instruction when delegating the task.`}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./f4fe08b1f4b2.png",alt:"The main agent delegating to the code-quality-reviewer subagent with a specific input prompt that lists the modified file and review focus areas"})}),`
`,(0,n.jsx)(i.h2,{id:"defining-an-output-format",children:"Defining an Output Format"}),`
`,(0,n.jsx)(i.p,{children:"The single most important improvement you can make to a subagent is defining an output format in its system prompt. This does two things:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"It creates natural stopping points -- the subagent knows it's done when it has filled in each section of the format."}),`
`,(0,n.jsx)(i.li,{children:"It prevents the subagent from running too long. Without a defined output, subagents struggle to decide when enough research has been done and tend to run much longer than necessary."}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Here's an example of a structured output format for a code review subagent:"}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsx)(i.p,{children:"Provide your review in a structured format:"}),(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsx)(i.li,{children:"Summary: Brief overview of what you reviewed and overall assessment"}),`
`,(0,n.jsx)(i.li,{children:"Critical Issues: Any security vulnerabilities, data integrity risks, or logic errors that must be fixed immediately"}),`
`,(0,n.jsx)(i.li,{children:"Major Issues: Quality problems, architecture misalignment, or significant performance concerns"}),`
`,(0,n.jsx)(i.li,{children:"Minor Issues: Style inconsistencies, documentation gaps, or minor optimizations"}),`
`,(0,n.jsx)(i.li,{children:"Recommendations: Suggestions for improvement, refactoring opportunities, or best practices to apply"}),`
`,(0,n.jsx)(i.li,{children:"Approval Status: Clear statement of whether the code is ready to merge/deploy or requires changes"}),`
`]})]}),`
`,(0,n.jsx)(i.p,{children:"This format gives the subagent a clear checklist to work through. Once every section is filled in, the subagent knows it can stop."}),`
`,(0,n.jsx)(i.h2,{id:"reporting-obstacles",children:"Reporting Obstacles"}),`
`,(0,n.jsx)(i.p,{children:"When a subagent discovers a workaround during its work -- like solving a dependency issue or finding that a certain command needs particular flags -- those details need to appear in the summary it returns. If they don't, the main thread has to rediscover the same solutions on its own, which wastes time and tokens."}),`
`,(0,n.jsx)(i.p,{children:"The kinds of things you want surfaced include:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Setup issues or environment quirks"}),`
`,(0,n.jsx)(i.li,{children:"Workarounds discovered during the task"}),`
`,(0,n.jsx)(i.li,{children:"Commands that needed special flags or configuration"}),`
`,(0,n.jsx)(i.li,{children:"Dependencies or imports that caused problems"}),`
`]}),`
`,(0,n.jsx)(i.p,{children:'The way to get this information is to explicitly ask for it in the output format. Adding an "Obstacles Encountered" section to your output template surfaces this information reliably.'}),`
`,(0,n.jsx)(a,{children:(0,n.jsxs)(i.ol,{start:"7",children:[`
`,(0,n.jsx)(i.li,{children:"Obstacles Encountered: Report any obstacles encountered during the review process. This can be: setup issues, workarounds discovered or environment quirks. Report commands that needed a special flag or configuration. Report dependencies or imports that caused problems."}),`
`]})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./47a3f8e30cbe.png",alt:"The code-quality-reviewer system prompt open in an editor, highlighting the Obstacles Encountered section of the output format"})}),`
`,(0,n.jsx)(i.h2,{id:"limiting-tool-access",children:"Limiting Tool Access"}),`
`,(0,n.jsx)(i.p,{children:"Not every subagent needs access to every tool. Think about what a subagent actually needs to do, and only give it the tools required for that job. This does two things: it prevents unintended side effects, and it makes each subagent's role clearer when you have several of them."}),`
`,(0,n.jsx)(i.p,{children:"Here's how to think about tool access for common subagent types:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Research / read-only subagent"})," -- Only needs ",(0,n.jsx)(i.code,{children:"Glob"}),", ",(0,n.jsx)(i.code,{children:"Grep"}),", and ",(0,n.jsx)(i.code,{children:"Read"}),". Cannot accidentally modify files."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Code reviewer"})," -- Needs ",(0,n.jsx)(i.code,{children:"Bash"})," access to run ",(0,n.jsx)(i.code,{children:"git diff"})," and see what changed, but still doesn't need ",(0,n.jsx)(i.code,{children:"Edit"})," or ",(0,n.jsx)(i.code,{children:"Write"}),"."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Styling / code modification agent"})," -- This is where you give ",(0,n.jsx)(i.code,{children:"Edit"})," and ",(0,n.jsx)(i.code,{children:"Write"})," access, because the subagent's job is to actually change your code."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"putting-it-all-together",children:"Putting It All Together"}),`
`,(0,n.jsx)(i.p,{children:"Effective subagents share four characteristics:"}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Specific descriptions"})," -- The description controls when the subagent is launched and what instructions it receives. Write it to steer both."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Structured output"})," -- Define an output format in the system prompt so the subagent knows when it's done and returns information the main thread can use."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Obstacle reporting"})," -- Include a section in the output format for workarounds, quirks, and problems so the main thread doesn't have to rediscover them."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Limited tool access"})," -- Only give a subagent the tools it actually needs. Read-only for research, bash for reviewers, edit/write only for agents that should change code."]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Each of these patterns is simple on its own, but together they turn a subagent from something that vaguely tries to help into a focused, predictable worker that finishes on time and reports back clearly."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};