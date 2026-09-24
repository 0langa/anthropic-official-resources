import{Qp as e,em as t}from"../../../../../content-de-meta-ll4flgq0.js";import{t as n}from"../../../../../context-management-hiqf95ih.js";var r=e();function i(e){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{youtubeId:"eW3oTyfeWZ0",title:"Context management",transcript:n,children:(0,r.jsx)(i.p,{children:`Context is Claude's working memory. Every file it reads, every command it
runs, every message you send — it all takes up space in the context window.`})}),`
`,(0,r.jsx)(i.h2,{id:"what-is-the-context-window",children:"What is the Context Window?"}),`
`,(0,r.jsx)(i.p,{children:"Think of the context window as the amount of space Claude can hold in its memory. Whenever you enter a prompt, Claude reads a file, runs a tool call, or receives a tool call result, it's all adding to the context window. Since there's a finite amount of space, it becomes important to optimize how you use it."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./0b452da83b59.jpg",alt:"Diagram showing the context window as a grid of tokens — some taken, most available"})}),`
`,(0,r.jsx)(i.h2,{id:"what-happens-when-context-fills-up",children:"What Happens When Context Fills Up"}),`
`,(0,r.jsxs)(i.p,{children:["When you approach the limit, the context window is automatically ",(0,r.jsx)(i.strong,{children:"compacted"}),". Compaction summarizes important details and removes unnecessary tool call results to free up space. Note that this process can potentially lose details."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./9511065cfe21.jpg",alt:"Claude Code showing 'Compacting conversation...' as it summarizes the context"})}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./a1539801b08e.jpg",alt:"Claude Code displaying a compact summary of the previous conversation including key technical concepts and files"})}),`
`,(0,r.jsx)(i.h2,{id:"commands",children:"Commands"}),`
`,(0,r.jsxs)(i.p,{children:["You can run compaction manually with the ",(0,r.jsx)(i.code,{children:"/compact"})," command. This compacts everything up to that point. It's handy when you want to free up context space while keeping a memory of what you previously worked on."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./d348719608e1.jpg",alt:"The /compact command in Claude Code's autocomplete menu"})}),`
`,(0,r.jsxs)(i.p,{children:["If you want to completely start from scratch with no memory of the previous session, run ",(0,r.jsx)(i.code,{children:"/clear"}),". This removes everything."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./93098b21ae01.jpg",alt:"Running /clear in Claude Code to start a fresh session"})}),`
`,(0,r.jsxs)(i.p,{children:["To check the state of your context, run the ",(0,r.jsx)(i.code,{children:"/context"})," command. You'll get a high-level overview of your context size, the categories taking up the most space, and a visual graphic showing the breakdown."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./d0b6a1d0ad4a.jpg",alt:"Output of the /context command showing context usage breakdown with a visual bar chart"})}),`
`,(0,r.jsx)(i.h2,{id:"when-to-use-which",children:"When to Use Which"}),`
`,(0,r.jsx)(i.p,{children:"A general rule of thumb:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsxs)(i.strong,{children:["Use ",(0,r.jsx)(i.code,{children:"/compact"})]})," when you're working on a specific feature and running up against the context limit but need to continue. Keeping the context relevant to your current feature is important."]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsxs)(i.strong,{children:["Use ",(0,r.jsx)(i.code,{children:"/clear"})]})," when you want to start a new feature. You don't want the previous conversation to introduce bias into something new. For things you want Claude to remember across sessions, put them in your CLAUDE.md file so it doesn't have to rediscover things from scratch."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./c31ad4239bea.jpg",alt:"A CLAUDE.md file with commands, important notes, and architecture sections"})}),`
`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"tips-for-saving-context-space",children:"Tips for Saving Context Space"}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Be specific."})," A vague prompt might seem smaller, but it actually costs more context in the long run. Without clear instructions, Claude is forced to explore your codebase more and do its own reasoning — which takes up far more context space than a detailed prompt would."]}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Manage your MCP servers."}),` MCP servers load all of their available tools into context by default, even when you're not using them. If you have servers configured for things unrelated to the current project, consider turning them off. You can also try "Skills," which work similarly to MCP servers but don't load everything into context upfront.`]}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Use subagents."}),' Subagents run in parallel with your main agent but have a completely separate context window. For tasks where you only need the answer — like "where are the authentication endpoints located?" — a subagent does the work and returns just a summary to your main agent, keeping your primary context clean.']}),`
`,(0,r.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,r.jsxs)(i.p,{children:["Managing context within Claude Code is crucial. Use ",(0,r.jsx)(i.code,{children:"/compact"})," to summarize long sessions and ",(0,r.jsx)(i.code,{children:"/clear"})," to start fresh. To use your context window effectively: be specific with your prompts, check what's consuming your current context, and use subagents to delegate tasks where you only need the result."]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};