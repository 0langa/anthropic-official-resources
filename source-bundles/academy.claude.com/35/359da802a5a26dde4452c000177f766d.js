import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";import{t as n}from"../../../../../hooks-nddhpfrf.js";var r=e();function i(e){let i={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{youtubeId:"IkaPHiMDazM",title:"Hooks",transcript:n,children:(0,r.jsxs)(i.p,{children:[`Hooks let you run commands at specific points in Claude Code's lifecycle.
The key difference between hooks and everything else covered in this course
is that hooks are `,(0,r.jsx)(i.strong,{children:"deterministic"})," — they always run."]})}),`
`,(0,r.jsx)(i.h2,{id:"why-use-hooks",children:"Why Use Hooks"}),`
`,(0,r.jsx)(i.p,{children:"You can tell Claude in your CLAUDE.md to run Prettier after every file edit. Most of the time it will. But sometimes it won't. A hook makes it happen every single time, no exceptions."}),`
`,(0,r.jsx)(i.p,{children:"Common use cases include:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Auto-formatting after file edits"}),`
`,(0,r.jsx)(i.li,{children:"Logging all executed commands for compliance"}),`
`,(0,r.jsx)(i.li,{children:"Blocking dangerous operations like modifying production files"}),`
`,(0,r.jsx)(i.li,{children:"Sending yourself notifications when Claude finishes a task"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"how-they-work",children:"How They Work"}),`
`,(0,r.jsxs)(i.p,{children:["Hooks are configured in your ",(0,r.jsx)(i.code,{children:"settings.json"}),". You pick an event, optionally set a matcher for which tools it applies to, and provide a command to run. Some of the most common events are:"]}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"PreToolUse"})," — runs before a tool call"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"PostToolUse"})," — runs after a tool call completes"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"UserPromptSubmit"})," — runs when you submit a prompt, before Claude processes it"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Stop"})," — runs when Claude finishes responding"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Notification"})," — runs when Claude sends a notification"]}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:["These are just a few of the events you can hook into — Claude Code supports many more. See the ",(0,r.jsx)(i.a,{href:"https://code.claude.com/docs/en/hooks",children:"hooks reference"})," for the full list."]}),`
`,(0,r.jsxs)(i.p,{children:["You configure them through the ",(0,r.jsx)(i.code,{children:"/hooks"})," command inside Claude Code, or by editing ",(0,r.jsx)(i.code,{children:"settings.json"})," directly."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./de2ac2dab9f2.jpg",alt:"The settings.json file inside the .claude directory with hooks configuration"})}),`
`,(0,r.jsx)(i.h2,{id:"a-practical-example",children:"A Practical Example"}),`
`,(0,r.jsxs)(i.p,{children:["The most common hook: auto-formatting after edits. Set a ",(0,r.jsx)(i.strong,{children:"PostToolUse"})," hook with a matcher of ",(0,r.jsx)(i.code,{children:'"Edit|MultiEdit|Write"'})," so it fires whenever Claude modifies a file. The command checks the file extension and runs the appropriate formatter — Prettier for TypeScript, gofmt for Go, whatever your project uses."]}),`
`,(0,r.jsx)(i.h2,{id:"blocking-with-pretooluse",children:"Blocking with PreToolUse"}),`
`,(0,r.jsxs)(i.p,{children:["PreToolUse hooks can ",(0,r.jsx)(i.strong,{children:"block tool calls"})," before they execute. Your hook receives the tool name and input as JSON on stdin. The exit code determines the behavior:"]}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Exit code 0"})," — proceed normally."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Exit code 2"})," — block the action. The stderr message gets fed back to Claude as feedback so it knows why it was blocked and can adjust."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Any other exit code"})," — a non-blocking error that gets shown to you but doesn't stop anything."]}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:["This is how you enforce hard rules. Block writes to a production config directory. Block bash commands that contain ",(0,r.jsx)(i.code,{children:"rm -rf"}),". Block commits to main. Whatever your team needs to be ",(0,r.jsx)(i.em,{children:"guaranteed"}),", not suggested."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./6749d1e1eb63.jpg",alt:"A settings.json file showing PreToolUse and PostToolUse hooks with matchers and commands"})}),`
`,(0,r.jsx)(i.h2,{id:"sharing-hooks-with-your-team",children:"Sharing Hooks with Your Team"}),`
`,(0,r.jsxs)(i.p,{children:["Hooks configured in ",(0,r.jsx)(i.code,{children:".claude/settings.json"})," are project-level and can be checked into your repo. This means your entire team gets the same hooks automatically. Use the ",(0,r.jsx)(i.code,{children:"CLAUDE_PROJECT_DIR"})," environment variable in your commands to reference scripts stored in your project, so they work regardless of Claude's current working directory."]}),`
`,(0,r.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,r.jsxs)(i.p,{children:["Hooks give you deterministic control over Claude Code's behavior. Use PostToolUse for auto-formatting and logging. Use PreToolUse to block dangerous operations. Configure them with ",(0,r.jsx)(i.code,{children:"/hooks"})," or in ",(0,r.jsx)(i.code,{children:"settings.json"}),". And check them into your repo so your team gets them too."]}),`
`,(0,r.jsx)(i.p,{children:"If something needs to happen every time without fail, don't put it in a prompt. Put it in a hook."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};