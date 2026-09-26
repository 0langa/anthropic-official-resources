import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Context management

Context is Claude's working memory. Every file it reads, every command it runs, every message you send, it all takes up space in the context window.

Think of the context window as the amount of space that Claude can hold in its memory. Whenever you enter a prompt, Claude reads a file, runs a tool call, gets a tool call result. This is adding on to the context window. And since there's only a finite amount you can put in the context window, it becomes extremely important to optimize this as much as possible.

Now, when you approach this limit, the context window is automatically compacted. Compaction will summarize important details and remove the unnecessary tool call results and free up a lot of space in your context window. Do note, though, that this could potentially lose details in your previous conversation. You can run the compaction manually as well with the /compact command. This will compact everything that you've done up to that point, which could be handy if you want to clear up context space, but also have a memory of what you previously worked on. If you want to completely start from scratch without memory of what was previously worked on, you can also run /clear, and that will remove everything starting from scratch.

To check the state of your context, run the /context command. Here, you'll get a big picture of how large your context size is, the different categories that are taking up the most context, and a graphic showing you all of this.

A general rule of thumb is when you're working on a specific feature and are going over the context window but need to continue, then compact. Keeping the context relevant for this feature is important when continuing development. If you have finished the plan and want to start on a new feature, then clear. You don't want the previous conversation to present bias in anything new that you want to create. For things that you do want Claude to remember in other sessions, put it in the CLAUDE.md file. That way, it doesn't have to rediscover things from scratch all over again.

Be specific. The irony behind writing a smaller prompt is that in the long run, it will take up more context. Without being explicit, Claude is forced to look around your codebase more and do its own thinking, which takes up a lot more context window space than if you were just a little bit more clear with a sentence or two.

MCP servers load all of the tools available into context by default. So if you have a lot of MCP servers for things that are unrelated to the project, it might be worth turning them off. You can also try out skills, which works similarly to MCP servers, but doesn't put the entire thing into context, saving you space.

Subagents run in parallel with your main agent but have a completely separate context window. So for tasks that require an answer without the journey, like where is the authentication endpoint located, you can have the subagent do the work and return just a summary to your main agent.

Managing context within Claude Code is crucial. Use /compact to summarize long sessions and /clear to start fresh. To use your context window effectively, be specific with what you want. Check what's using your current context window and use subagents to delegate tasks you only need the answer for.
`;function i(t){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{youtubeId:"eW3oTyfeWZ0",title:"Context management",transcript:r,children:(0,n.jsx)(i.p,{children:`Context is Claude's working memory. Every file it reads, every command it
runs, every message you send — it all takes up space in the context window.`})}),`
`,(0,n.jsx)(i.h2,{id:"what-is-the-context-window",children:"What is the Context Window?"}),`
`,(0,n.jsx)(i.p,{children:"Think of the context window as the amount of space Claude can hold in its memory. Whenever you enter a prompt, Claude reads a file, runs a tool call, or receives a tool call result, it's all adding to the context window. Since there's a finite amount of space, it becomes important to optimize how you use it."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./0b452da83b59.jpg",alt:"Diagram showing the context window as a grid of tokens — some taken, most available"})}),`
`,(0,n.jsx)(i.h2,{id:"what-happens-when-context-fills-up",children:"What Happens When Context Fills Up"}),`
`,(0,n.jsxs)(i.p,{children:["When you approach the limit, the context window is automatically ",(0,n.jsx)(i.strong,{children:"compacted"}),". Compaction summarizes important details and removes unnecessary tool call results to free up space. Note that this process can potentially lose details."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./9511065cfe21.jpg",alt:"Claude Code showing 'Compacting conversation...' as it summarizes the context"})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./a1539801b08e.jpg",alt:"Claude Code displaying a compact summary of the previous conversation including key technical concepts and files"})}),`
`,(0,n.jsx)(i.h2,{id:"commands",children:"Commands"}),`
`,(0,n.jsxs)(i.p,{children:["You can run compaction manually with the ",(0,n.jsx)(i.code,{children:"/compact"})," command. This compacts everything up to that point. It's handy when you want to free up context space while keeping a memory of what you previously worked on."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./d348719608e1.jpg",alt:"The /compact command in Claude Code's autocomplete menu"})}),`
`,(0,n.jsxs)(i.p,{children:["If you want to completely start from scratch with no memory of the previous session, run ",(0,n.jsx)(i.code,{children:"/clear"}),". This removes everything."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./93098b21ae01.jpg",alt:"Running /clear in Claude Code to start a fresh session"})}),`
`,(0,n.jsxs)(i.p,{children:["To check the state of your context, run the ",(0,n.jsx)(i.code,{children:"/context"})," command. You'll get a high-level overview of your context size, the categories taking up the most space, and a visual graphic showing the breakdown."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./d0b6a1d0ad4a.jpg",alt:"Output of the /context command showing context usage breakdown with a visual bar chart"})}),`
`,(0,n.jsx)(i.h2,{id:"when-to-use-which",children:"When to Use Which"}),`
`,(0,n.jsx)(i.p,{children:"A general rule of thumb:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["Use ",(0,n.jsx)(i.code,{children:"/compact"})]})," when you're working on a specific feature and running up against the context limit but need to continue. Keeping the context relevant to your current feature is important."]}),`
`]}),`
`,(0,n.jsxs)(i.li,{children:[`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["Use ",(0,n.jsx)(i.code,{children:"/clear"})]})," when you want to start a new feature. You don't want the previous conversation to introduce bias into something new. For things you want Claude to remember across sessions, put them in your CLAUDE.md file so it doesn't have to rediscover things from scratch."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./c31ad4239bea.jpg",alt:"A CLAUDE.md file with commands, important notes, and architecture sections"})}),`
`]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"tips-for-saving-context-space",children:"Tips for Saving Context Space"}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Be specific."})," A vague prompt might seem smaller, but it actually costs more context in the long run. Without clear instructions, Claude is forced to explore your codebase more and do its own reasoning — which takes up far more context space than a detailed prompt would."]}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Manage your MCP servers."}),` MCP servers load all of their available tools into context by default, even when you're not using them. If you have servers configured for things unrelated to the current project, consider turning them off. You can also try "Skills," which work similarly to MCP servers but don't load everything into context upfront.`]}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Use subagents."}),' Subagents run in parallel with your main agent but have a completely separate context window. For tasks where you only need the answer — like "where are the authentication endpoints located?" — a subagent does the work and returns just a summary to your main agent, keeping your primary context clean.']}),`
`,(0,n.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(i.p,{children:["Managing context within Claude Code is crucial. Use ",(0,n.jsx)(i.code,{children:"/compact"})," to summarize long sessions and ",(0,n.jsx)(i.code,{children:"/clear"})," to start fresh. To use your context window effectively: be specific with your prompts, check what's consuming your current context, and use subagents to delegate tasks where you only need the result."]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};