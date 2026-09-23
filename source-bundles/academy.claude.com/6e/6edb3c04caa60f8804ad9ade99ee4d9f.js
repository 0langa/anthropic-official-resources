import{$p as e,Zp as t}from"../../../../../content-de-meta-ictkjcaa.js";import{t as n}from"../../../../../what-are-subagents-noq44qvw.js";var r=t();function i(t){let i={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{youtubeId:"jKErNxuxPXg",title:"What are subagents?",transcript:n,children:(0,r.jsx)(i.p,{children:`Subagents are specialized assistants that Claude Code can delegate tasks
to. Think of them as focused helpers: each one runs in its own conversation
context window, does its work, and returns a summary to the main thread.
The intermediate steps -- all the file reads, searches, and tool calls --
stay isolated and never clutter your main conversation.`})}),`
`,(0,r.jsx)(i.h2,{id:"why-subagents-matter",children:"Why Subagents Matter"}),`
`,(0,r.jsx)(i.p,{children:"Every time you chat with Claude Code, you're adding to the main context window. Every tool call, every file read, every search result gets stored there. That space is finite, and once it fills up, Claude starts losing track of earlier parts of the conversation."}),`
`,(0,r.jsx)(i.p,{children:"Subagents solve this by spinning up a separate context window. The subagent receives two things:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"A custom system prompt"})," from your configuration file that defines the subagent's role and behavior"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"A task description"})," written by the parent agent based on what you asked for"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"The subagent then works on its own. It reads files, runs searches, edits code -- whatever it needs to do. When it's done, only a summary comes back to your main conversation. The entire subagent conversation is then discarded."}),`
`,(0,r.jsx)(i.p,{children:"This means your main context stays clean. You get the answer without all the noise of the journey it took to find it. The tradeoff is that you lose visibility into how the subagent reached its conclusions."}),`
`,(0,r.jsx)(i.h2,{id:"a-practical-example",children:"A Practical Example"}),`
`,(0,r.jsx)(i.p,{children:"Say you're exploring an unfamiliar codebase and you want to know which service handles refunds. Without a subagent, Claude might read 15 files, run several searches, and trace through multiple function calls. All of that fills your context window, even though you only needed one fact."}),`
`,(0,r.jsx)(i.p,{children:"With a subagent, the experience is much cleaner. You ask the question, the Explore subagent spins up, does all that digging in its own context, and hands back a focused answer."}),`
`,(0,r.jsx)(i.p,{children:"Your main context window only records the question and the summary -- not the 15 files that were read along the way."}),`
`,(0,r.jsx)(i.h2,{id:"built-in-subagents",children:"Built-in Subagents"}),`
`,(0,r.jsx)(i.p,{children:"Claude Code ships with several built-in subagents you can use right away:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"General purpose subagent"})," -- for multi-step tasks that require both exploration and action"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Explore"})," -- for fast searching and navigation of codebases"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Plan"})," -- used during plan mode for research and analysis of your codebase before presenting a plan"]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"custom-subagents",children:"Custom Subagents"}),`
`,(0,r.jsx)(i.p,{children:"Beyond the built-in options, you can create your own subagents with custom system prompts and tool access. This lets you define specialized agents tailored to your workflow -- a code reviewer, a test writer, a documentation generator, or anything else you need."}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key Takeaways"}),`
`,(0,r.jsx)(i.p,{children:"Subagents give you three main benefits:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"They break work into focused pieces, letting each subagent concentrate on a specific task"}),`
`,(0,r.jsx)(i.li,{children:"They keep your main context window clean by isolating all the intermediate work"}),`
`,(0,r.jsx)(i.li,{children:"They bring back just the information you need as a concise summary"}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Whether you're using the built-in subagents or creating your own, they're a practical way to get more out of longer Claude Code sessions. The less noise in your main context, the longer and more effectively you can work."})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};