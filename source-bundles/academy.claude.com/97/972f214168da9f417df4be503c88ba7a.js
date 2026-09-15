import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";import{t as n}from"../../../../../subagents-h9646g0l.js";var r=e();function i(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{CodeCommand:a,LessonVideo:s}=i;return a||o("CodeCommand",!0),s||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{youtubeId:"jKErNxuxPXg",title:"Subagents",transcript:n,children:(0,r.jsx)(i.p,{children:`Claude can delegate tasks to subagents that break them down and run
component tasks in parallel, improving your context management. Each
subagent operates in its own isolated context window.`})}),`
`,(0,r.jsx)(i.h2,{id:"how-it-works",children:"How It Works"}),`
`,(0,r.jsx)(i.p,{children:"Managing context in Claude Code is important. A lot of the context window gets consumed by things like tool calls exploring your codebase or running web searches for research. What Claude discovers during that exploration isn't always relevant to the main feature you're developing."}),`
`,(0,r.jsx)(i.p,{children:'This is where subagents come in. Claude spawns a subagent to handle a task like "explore this codebase for me." The subagent runs in parallel with its own context window, does all the exploration work, and once finished, summarizes its findings and returns that summary back to Claude.'}),`
`,(0,r.jsx)(i.p,{children:"The result: you get the answer you were looking for, without the entire journey it took to get there cluttering your main context."}),`
`,(0,r.jsx)(i.h2,{id:"creating-your-own-subagent",children:"Creating Your Own Subagent"}),`
`,(0,r.jsx)(i.p,{children:"Subagents are defined in Markdown files with YAML frontmatter. The easiest way to get started is to let Claude generate one for you. Run:"}),`
`,(0,r.jsx)(a,{children:"/agents"}),`
`,(0,r.jsx)(i.p,{children:`Then select "Create new agent." You'll walk through steps including choosing the scope of the agent, defining its purpose, selecting the tools it has access to, and even picking a color for it.`}),`
`,(0,r.jsx)(i.p,{children:"Claude will generate a name, description, and prompt for the subagent. This also tells Claude when to call the subagent based on the prompts you give it."}),`
`,(0,r.jsx)(i.h2,{id:"further-customization",children:"Further Customization"}),`
`,(0,r.jsx)(i.p,{children:"Subagents can be customized further. Here are some highlights:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Persistent memory"})," lets your subagent retain memory across conversations. This is great if you're using it consistently on the same projects."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Preload skills"})," into subagents by adding the ",(0,r.jsx)(i.code,{children:"skills"})," key and listing skills by name. Note that unlike skills in your main conversation, the entire skill is loaded into context here."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,r.jsx)(i.p,{children:"Keeping your context window clean is one of the best ways to stay productive with Claude Code. With subagents, you can run an agent in the background to handle the heavy lifting and return just the answer to your main context window."}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Want to go deeper?"})," Check out our dedicated course: ",(0,r.jsx)(i.a,{href:"/courses/introduction-to-subagents",children:"Introduction to subagents"})]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};