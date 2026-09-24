import{Qp as e,em as t}from"../../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"Zq_c7xMbxto",title:"Building with Claude Code",children:(0,n.jsxs)(r.p,{children:[`Writing code that calls the Claude API by hand works fine, but there's an
even faster path: have Claude write it for you. In this lesson, we'll use
`,(0,n.jsx)(r.strong,{children:"Claude Code"}),` to fill in an API integration from a stubbed-out
file — using the same primitives you've learned throughout this course.`]})}),`
`,(0,n.jsx)(r.h2,{id:"starting-from-a-stub",children:"Starting from a stub"}),`
`,(0,n.jsx)(r.p,{children:"The project is simple: a TypeScript file that gets weather. It contains two stubs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"getWeather"})," — accepts a city and returns the temperature and conditions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"run"})," — a function that should use the ",(0,n.jsx)(r.strong,{children:"tool runner"})," and the Claude TypeScript SDK."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The tool runner is the piece that handles tool calling and the agent loop for you, so you don't have to wire that up manually."}),`
`,(0,n.jsx)(r.h2,{id:"the-claude-api-skill",children:"The Claude API skill"}),`
`,(0,n.jsxs)(r.p,{children:["Claude Code comes with a built-in skill called ",(0,n.jsx)(r.strong,{children:"Claude API"}),". You can invoke it directly with ",(0,n.jsx)(r.code,{children:"/claude-api"}),", or Claude Code will invoke it automatically when it detects that you're using the TypeScript SDK."]}),`
`,(0,n.jsx)(r.h2,{id:"one-prompt-working-code",children:"One prompt, working code"}),`
`,(0,n.jsx)(r.p,{children:"Open the project folder in your terminal and launch Claude Code."}),`
`,(0,n.jsx)(r.p,{children:"From there, it takes a single prompt. A good prompt does three things:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["It ",(0,n.jsx)(r.strong,{children:"names the file"})," you want changed."]}),`
`,(0,n.jsxs)(r.li,{children:["It ",(0,n.jsx)(r.strong,{children:"names the pattern"})," you want used."]}),`
`,(0,n.jsxs)(r.li,{children:["It ",(0,n.jsx)(r.strong,{children:"names the end state"})," you expect."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Claude Code then fills in ",(0,n.jsx)(r.code,{children:"getWeather"})," and ",(0,n.jsx)(r.code,{children:"run"})," against the types, appends a call at the bottom of the file, executes the script, and reports the output. If something errors out, it reads the error message and patches the code in place."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f2ca0214e453.png",alt:"Claude Code in the terminal reading weather.ts and the tool runner file after receiving the prompt"})}),`
`,(0,n.jsx)(r.h2,{id:"what-claude-code-produced",children:"What Claude Code produced"}),`
`,(0,n.jsxs)(r.p,{children:["In this run, Claude Code created a ",(0,n.jsx)(r.strong,{children:"Zod tool"})," that parsed the input and returned the output based on the city type. It also created the tool runner and the ",(0,n.jsx)(r.code,{children:"run"})," function we asked for, and printed the final results of the agent loop."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b9ee543b720c.png",alt:"Claude Code generating the weather code in the terminal, with the betaZodTool import and hardcoded city data visible"})}),`
`,(0,n.jsx)(r.h2,{id:"the-pattern-to-remember",children:"The pattern to remember"}),`
`,(0,n.jsx)(r.p,{children:"Most of what you write against the Claude API has a familiar shape:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Define a tool."}),`
`,(0,n.jsx)(r.li,{children:"Hand it to a runner."}),`
`,(0,n.jsx)(r.li,{children:"Return the result."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You don't need to type that from memory every single time. Instead, stub the file, hand it to Claude Code, and just review the diff."}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Code"})," is an agent that edits files and runs commands inside your terminal."]}),`
`,(0,n.jsxs)(r.li,{children:["The built-in ",(0,n.jsx)(r.strong,{children:"Claude API"})," skill loads automatically when Claude Code detects the TypeScript SDK, or you can invoke it with ",(0,n.jsx)(r.code,{children:"/claude-api"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"Give it a prompt that names the file, the pattern, and the end state — it writes the code, runs it, and fixes errors in place."}),`
`,(0,n.jsx)(r.li,{children:"Claude API code follows a familiar shape: define a tool, hand it to a runner, return the result. Stub it, delegate it, review the diff."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};