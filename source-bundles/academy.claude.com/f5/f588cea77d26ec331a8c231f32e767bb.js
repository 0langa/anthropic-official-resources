import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Subagents

Subagents are specialized assistants that Claude Code can delegate tasks to. Each subagent runs in its own conversation context window with a custom system prompt that you define. When finished, it returns a summary to the main thread while all the intermediate work stays isolated.

One of the main advantages of subagents is that they help manage context window usage. When you chat with Claude Code, you're adding context to the main context window. Every tool call and its results gets stored in this main context window. And so when Claude uses a subagent, a separate window starts. The subagent receives two inputs: a custom system prompt from your configuration file, and a task description written by the parent or parent agent based on what you ask for.

The subagent then works autonomously. When it reads files, edits files, or uses tools, none of these will appear in the main conversation. Just a summary is returned back. The entire subagent conversation then gets completely discarded.

Consider a task like investigating how the payment system works in an unfamiliar code base. Maybe you're trying to use Claude Code to figure out which service handles refunds. Well, without a subagent, Claude might read 15 files, run several searches, and trace through multiple function calls. All of that context fills your context window even if you only needed one single fact: which service handles refunds. With a subagent, you get the answer without the journey. The subagent explores, discovers the answer, and returns a focused summary keeping your main context clean. But the main window loses visibility into how the subagent reaches its conclusions and what it discovered along the way.

Claude Code includes several built-in subagents that you can use immediately, like the general purpose subagent—use for multi-step tasks that require both exploration and action. The explore subagent—use for fast searching of code bases. The plan subagent—use during plan mode for research and analysis of your code base before presenting a plan. And you can also create your own subagents with custom system prompts and tool access.

Subagents let Claude Code break work into focused pieces, keep your main context window clean, and bring back just what you need. Whether you're using the built-in ones or creating your own, they're a practical way to get more out of longer Claude Code sessions.
`;function i(t){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:a,LessonVideo:s}=i;return a||o("CodeCommand",!0),s||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{youtubeId:"jKErNxuxPXg",title:"Subagents",transcript:r,children:(0,n.jsx)(i.p,{children:`Claude can delegate tasks to subagents that break them down and run
component tasks in parallel, improving your context management. Each
subagent operates in its own isolated context window.`})}),`
`,(0,n.jsx)(i.h2,{id:"how-it-works",children:"How It Works"}),`
`,(0,n.jsx)(i.p,{children:"Managing context in Claude Code is important. A lot of the context window gets consumed by things like tool calls exploring your codebase or running web searches for research. What Claude discovers during that exploration isn't always relevant to the main feature you're developing."}),`
`,(0,n.jsx)(i.p,{children:'This is where subagents come in. Claude spawns a subagent to handle a task like "explore this codebase for me." The subagent runs in parallel with its own context window, does all the exploration work, and once finished, summarizes its findings and returns that summary back to Claude.'}),`
`,(0,n.jsx)(i.p,{children:"The result: you get the answer you were looking for, without the entire journey it took to get there cluttering your main context."}),`
`,(0,n.jsx)(i.h2,{id:"creating-your-own-subagent",children:"Creating Your Own Subagent"}),`
`,(0,n.jsx)(i.p,{children:"Subagents are defined in Markdown files with YAML frontmatter. The easiest way to get started is to let Claude generate one for you. Run:"}),`
`,(0,n.jsx)(a,{children:"/agents"}),`
`,(0,n.jsx)(i.p,{children:`Then select "Create new agent." You'll walk through steps including choosing the scope of the agent, defining its purpose, selecting the tools it has access to, and even picking a color for it.`}),`
`,(0,n.jsx)(i.p,{children:"Claude will generate a name, description, and prompt for the subagent. This also tells Claude when to call the subagent based on the prompts you give it."}),`
`,(0,n.jsx)(i.h2,{id:"further-customization",children:"Further Customization"}),`
`,(0,n.jsx)(i.p,{children:"Subagents can be customized further. Here are some highlights:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Persistent memory"})," lets your subagent retain memory across conversations. This is great if you're using it consistently on the same projects."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Preload skills"})," into subagents by adding the ",(0,n.jsx)(i.code,{children:"skills"})," key and listing skills by name. Note that unlike skills in your main conversation, the entire skill is loaded into context here."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsx)(i.p,{children:"Keeping your context window clean is one of the best ways to stay productive with Claude Code. With subagents, you can run an agent in the background to handle the heavy lifting and return just the answer to your main context window."}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Want to go deeper?"})," Check out our dedicated course: ",(0,n.jsx)(i.a,{href:"/courses/introduction-to-subagents",children:"Introduction to subagents"})]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};