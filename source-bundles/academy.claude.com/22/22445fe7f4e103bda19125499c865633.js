import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# How Claude Code works

We know that Claude Code is different from usual chat applications, but how does it work? Claude Code is best explained through the agentic loop.

You enter a prompt into Claude Code. Claude Code will then gather context required to complete your prompt. It does so by interacting with the model which will return text or a tool call that Claude Code can execute. Then it takes action. For example, editing a file or running a command. Finally, it verifies those results and determines if they achieve what your prompt set out to do in the first place. If they do, then Claude finishes and waits for the next prompt. And if they don't, Claude goes back and runs the loop again until the results are complete and verifiable. Throughout this loop, you're able to add context, interrupt it, or steer the model to help guide it towards your end goal.

Claude has a context window, which determines how much of your conversation, file contents, command outputs, and more, it can store and look back on. Once you reach that limit, Claude Code compacts your conversation, which automatically determines what it can take out of the context window and what it can summarize in order to bring the context window back down.

Tools are the backbone of how agents work. Currently, most AI assistants are simply input text and output text. Nothing in between. Tools let Claude Code and other agents determine when to execute code to get closer to a task. This could be Read File Tool or Search Web Tool, for example. Claude Code uses semantic searching to determine when to call a tool and get the output of it.

Claude Code also has permission modes. Default behavior is that it has to ask explicit permission before editing a file or running a shell command. You can use Shift and Tab to toggle between different modes. Auto Accept edits files without asking but still asks for commands. Plan Mode uses read-only tools to help compile a plan of action before starting. It's worth being cautious when skipping permissions. Giving Claude Code free rein to run commands means a mistake could be harder to catch before it even happens.

Claude Code works by combining different agentic concepts, an agentic loop, a managed context window, tools, and configurable permissions into your terminal. It can read your code base, take action, and verify its own work, and that makes it fundamentally different from a chat window.
`;function i(t){let i={em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{youtubeId:"6bs5b4FltCU",title:"How Claude Code works",transcript:r,children:(0,n.jsx)(i.p,{children:`Claude Code is different from typical chat applications. Understanding how
it works under the hood will help you use it more effectively.`})}),`
`,(0,n.jsx)(i.h2,{id:"the-agentic-loop",children:"The Agentic Loop"}),`
`,(0,n.jsxs)(i.p,{children:["Claude Code is best explained through the ",(0,n.jsx)(i.strong,{children:"agentic loop"}),":"]}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsx)(i.li,{children:"You enter a prompt into Claude Code."}),`
`,(0,n.jsx)(i.li,{children:"Claude gathers the context it needs by interacting with the model, which returns text or a tool call that Claude Code can execute."}),`
`,(0,n.jsx)(i.li,{children:"It takes action — for example, editing a file or running a command."}),`
`,(0,n.jsx)(i.li,{children:"It verifies the results and determines whether they achieve what your prompt set out to do."}),`
`,(0,n.jsx)(i.li,{children:"If they do, Claude finishes and waits for the next prompt. If they don't, it loops back and tries again until the results are complete and verifiable."}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Throughout this loop, you can add context, interrupt, or steer the model to help guide it toward your goal."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./141ad1329bac.jpg",alt:"Diagram of the agentic loop: Your prompt flows into the loop of Gather context, Take action, and Verify results, with the ability to interrupt, steer, or add context at any point"})}),`
`,(0,n.jsx)(i.h2,{id:"context",children:"Context"}),`
`,(0,n.jsxs)(i.p,{children:["Claude has a ",(0,n.jsx)(i.strong,{children:"context window"})," that determines how much of your conversation, file contents, command outputs, and more it can store and reference. Once you reach that limit, Claude Code compacts your conversation — automatically determining what it can remove or summarize to bring the context window back down to a usable size."]}),`
`,(0,n.jsx)(i.h2,{id:"tools",children:"Tools"}),`
`,(0,n.jsxs)(i.p,{children:["Tools are the backbone of how agents work. Most AI assistants simply take text in and return text out. Tools let Claude Code determine ",(0,n.jsx)(i.em,{children:"when"})," to execute code to get closer to completing a task. This could be a file-reading tool, a web search tool, or any number of other capabilities. Claude Code uses semantic understanding to determine when to call a tool and how to use the output."]}),`
`,(0,n.jsx)(i.h2,{id:"permissions",children:"Permissions"}),`
`,(0,n.jsx)(i.p,{children:"Claude Code has several permission modes:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Manual:"})," Claude asks for explicit permission before editing a file or running a shell command."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Auto-accept:"})," Files are edited without asking, but commands still require approval."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Plan mode:"})," Uses read-only tools to compile a plan of action before starting any work."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Auto mode:"})," Claude works without permission prompts while a classifier checks each action in the background, targeted at blocking actions that are irreversible, destructive, or aimed outside your environment. When something is blocked, Claude usually finds a safer approach or asks you for the go-ahead."]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Which mode a new session starts in depends on your plan and settings."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./8d2d1170d15c.jpg",alt:"Claude Code asking for permission before running a bash command"})}),`
`,(0,n.jsx)(i.p,{children:"All of this can be configured in your settings file. Be cautious when skipping permissions — giving Claude Code free rein to run commands means a mistake could be harder to catch before it happens."}),`
`,(0,n.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsx)(i.p,{children:"Claude Code combines several agentic concepts: an agentic loop, a managed context window, tools, and configurable permissions — all inside your terminal. It can read your codebase, take action, and verify its own work. That's what makes it fundamentally different from a chat window."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};