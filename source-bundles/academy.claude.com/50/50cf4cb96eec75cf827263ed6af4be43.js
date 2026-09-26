import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Hooks

Hooks let you run commands at different points in Claude Code's life cycle. The key difference between hooks and everything else we've covered is that hooks are deterministic. They always run. So put it this way: you can tell Claude in your CLAUDE.md file to run Prettier after every file edit, and most of the time it will do that, but sometimes it won't. It's not perfect. But a hook makes it happen every single time with no exceptions.

Use cases could include auto-formatting after file edits, logging all executed commands for compliance, blocking dangerous operations like modifying production files, and sending yourself notifications when Claude finishes a task.

Hooks are configured in your settings.json file. You pick an event, optionally set a matcher for which tools it applies to, and provide a command to run. User prompt submit runs when you submit a prompt before Claude processes it. Pre-tool use runs before a tool call. Post-tool use runs after a tool call completes. Notification runs when Claude sends a notification. And stop runs when Claude finishes responding.

The most common hook: auto-formatting after edits. You set a post-tool use hook with a matcher of edit or multi-edit, right? So it fires whenever Claude modifies a file. The command checks the file extension and runs the appropriate formatter. This could be Prettier for TypeScript, go format for Go, Ruff for Python, whatever your project uses.

Pre-tool use hooks can block tool calls before they execute. So your hook receives a tool name and input as JSON on STDIN. If it exits with code 2, the action is blocked, and the STDERR message gets fed back to Claude as feedback, so Claude knows why it was blocked and can adjust. Exit code 0 means proceed, exit code 2 means block. This is how you enforce hard rules. Block writes to a production config directory, block bash commands that contain rm -rf, block commits to main, whatever your team needs to be guaranteed, not suggested.

Hooks configured in .claude/settings.json are project level and can be checked into your repo. This means that your entire team gets the same hooks automatically. Use the CLAUDE_PROJECT_DIR environment variable in your commands to reference scripts stored in your project so they work regardless of Claude's current working directory.

Hooks give you deterministic control over Claude Code behavior. Use post-tool use for auto-formatting and logging. Use pre-tool use to block dangerous operations. Configure them in /hooks or in settings.json and check them into your repository so your team gets them too. If something needs to happen every time without fail, don't put it in a prompt. Put it in a hook.
`;function i(t){let i={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{youtubeId:"IkaPHiMDazM",title:"Hooks",transcript:r,children:(0,n.jsxs)(i.p,{children:[`Hooks let you run commands at specific points in Claude Code's lifecycle.
The key difference between hooks and everything else covered in this course
is that hooks are `,(0,n.jsx)(i.strong,{children:"deterministic"})," — they always run."]})}),`
`,(0,n.jsx)(i.h2,{id:"why-use-hooks",children:"Why Use Hooks"}),`
`,(0,n.jsx)(i.p,{children:"You can tell Claude in your CLAUDE.md to run Prettier after every file edit. Most of the time it will. But sometimes it won't. A hook makes it happen every single time, no exceptions."}),`
`,(0,n.jsx)(i.p,{children:"Common use cases include:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Auto-formatting after file edits"}),`
`,(0,n.jsx)(i.li,{children:"Logging all executed commands for compliance"}),`
`,(0,n.jsx)(i.li,{children:"Blocking dangerous operations like modifying production files"}),`
`,(0,n.jsx)(i.li,{children:"Sending yourself notifications when Claude finishes a task"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"how-they-work",children:"How They Work"}),`
`,(0,n.jsxs)(i.p,{children:["Hooks are configured in your ",(0,n.jsx)(i.code,{children:"settings.json"}),". You pick an event, optionally set a matcher for which tools it applies to, and provide a command to run. Some of the most common events are:"]}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"PreToolUse"})," — runs before a tool call"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"PostToolUse"})," — runs after a tool call completes"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"UserPromptSubmit"})," — runs when you submit a prompt, before Claude processes it"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Stop"})," — runs when Claude finishes responding"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Notification"})," — runs when Claude sends a notification"]}),`
`]}),`
`,(0,n.jsxs)(i.p,{children:["These are just a few of the events you can hook into — Claude Code supports many more. See the ",(0,n.jsx)(i.a,{href:"https://code.claude.com/docs/en/hooks",children:"hooks reference"})," for the full list."]}),`
`,(0,n.jsxs)(i.p,{children:["You configure them through the ",(0,n.jsx)(i.code,{children:"/hooks"})," command inside Claude Code, or by editing ",(0,n.jsx)(i.code,{children:"settings.json"})," directly."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./de2ac2dab9f2.jpg",alt:"The settings.json file inside the .claude directory with hooks configuration"})}),`
`,(0,n.jsx)(i.h2,{id:"a-practical-example",children:"A Practical Example"}),`
`,(0,n.jsxs)(i.p,{children:["The most common hook: auto-formatting after edits. Set a ",(0,n.jsx)(i.strong,{children:"PostToolUse"})," hook with a matcher of ",(0,n.jsx)(i.code,{children:'"Edit|MultiEdit|Write"'})," so it fires whenever Claude modifies a file. The command checks the file extension and runs the appropriate formatter — Prettier for TypeScript, gofmt for Go, whatever your project uses."]}),`
`,(0,n.jsx)(i.h2,{id:"blocking-with-pretooluse",children:"Blocking with PreToolUse"}),`
`,(0,n.jsxs)(i.p,{children:["PreToolUse hooks can ",(0,n.jsx)(i.strong,{children:"block tool calls"})," before they execute. Your hook receives the tool name and input as JSON on stdin. The exit code determines the behavior:"]}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Exit code 0"})," — proceed normally."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Exit code 2"})," — block the action. The stderr message gets fed back to Claude as feedback so it knows why it was blocked and can adjust."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Any other exit code"})," — a non-blocking error that gets shown to you but doesn't stop anything."]}),`
`]}),`
`,(0,n.jsxs)(i.p,{children:["This is how you enforce hard rules. Block writes to a production config directory. Block bash commands that contain ",(0,n.jsx)(i.code,{children:"rm -rf"}),". Block commits to main. Whatever your team needs to be ",(0,n.jsx)(i.em,{children:"guaranteed"}),", not suggested."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./6749d1e1eb63.jpg",alt:"A settings.json file showing PreToolUse and PostToolUse hooks with matchers and commands"})}),`
`,(0,n.jsx)(i.h2,{id:"sharing-hooks-with-your-team",children:"Sharing Hooks with Your Team"}),`
`,(0,n.jsxs)(i.p,{children:["Hooks configured in ",(0,n.jsx)(i.code,{children:".claude/settings.json"})," are project-level and can be checked into your repo. This means your entire team gets the same hooks automatically. Use the ",(0,n.jsx)(i.code,{children:"CLAUDE_PROJECT_DIR"})," environment variable in your commands to reference scripts stored in your project, so they work regardless of Claude's current working directory."]}),`
`,(0,n.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(i.p,{children:["Hooks give you deterministic control over Claude Code's behavior. Use PostToolUse for auto-formatting and logging. Use PreToolUse to block dangerous operations. Configure them with ",(0,n.jsx)(i.code,{children:"/hooks"})," or in ",(0,n.jsx)(i.code,{children:"settings.json"}),". And check them into your repo so your team gets them too."]}),`
`,(0,n.jsx)(i.p,{children:"If something needs to happen every time without fail, don't put it in a prompt. Put it in a hook."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};