import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Your first prompt

You talk to Claude Code like you would talk to any AI assistant. When entering your prompt, here are some things that you can consider that can both protect and make things easier for you.

You can choose whether Claude auto accepts every file change it suggests or require it to ask you for explicit permission each time. With Shift plus Tab, you can cycle between both modes. In Auto Accept mode, it will automatically approve an edit or creation of a file, but still ask your permission to run commands. There isn't a right or wrong way. It's just whatever you feel the most comfortable with.

Within this shift tab menu is the plan mode. Plan mode takes your prompt and uses read-only tools to analyze your code base and do research on your suggested implementation. It will also ask you questions on items that it wants clarification on. It then returns to you a long detailed plan that it can execute on in more detail. Plan mode works great for planning complex changes or doing a safe code review. A lot of the time, you're asking Claude to do multi-step implementations towards a feature, and this is exactly what plan mode excels at.

So, why don't we give it a try? I have an application here that desperately needs a dark mode toggle. So I'm going to use Claude Code to implement this for me. So I'm in the root directory of my project. I'm going to hit the shift tab a couple times to go into plan mode. Then let's write out the prompt. My app needs a dark mode implemented across the entire app. Can you create a toggle switch on the header that allows user to toggle between light mode and dark mode? I need you to find a good contrast color that works based on my existing light theme.

And, let's let Claude plan this out. And after reviewing, I think it looks pretty good. At the end of all this, we can see explicitly what Claude did and how it came to its conclusion. And, the dark mode is looking pretty good. Awesome.

When using Claude Code, try to be as descriptive as possible with your prompt. If you want to stay in the loop at every step, you can do that. Use plan mode to let Claude get a little bit more in the nitty gritty with what you want to achieve before executing on that plan.
`;function i(t){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CodePrompt:a,LessonVideo:s}=i;return a||o("CodePrompt",!0),s||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{youtubeId:"gbetp6D7J_Q",title:"Your first prompt",transcript:r,children:(0,n.jsx)(i.p,{children:`You talk to Claude Code like you would any AI assistant. When entering your
prompt, here are some things to consider that can both protect you and make
things easier.`})}),`
`,(0,n.jsx)(i.h2,{id:"choosing-a-permission-mode",children:"Choosing a Permission Mode"}),`
`,(0,n.jsxs)(i.p,{children:["You can choose how much oversight to keep while Claude works. Press ",(0,n.jsx)(i.code,{children:"Shift + Tab"})," to cycle between modes."]}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Manual mode:"})," Claude asks permission each time it wants to edit a file or run a command."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Auto-accept mode:"})," File edits are automatically approved, but commands still require your permission."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Auto mode:"})," Claude works without permission prompts while a background safety check screens each action; when something is blocked, Claude usually finds a safer approach or asks you for the go-ahead."]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"There's no right or wrong answer — it's whatever you're comfortable with."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./03c5a203be29.jpg",alt:"Claude Code in auto-accept mode, reading files and working through a task"})}),`
`,(0,n.jsx)(i.h2,{id:"plan-mode",children:"Plan Mode"}),`
`,(0,n.jsxs)(i.p,{children:["Within the ",(0,n.jsx)(i.code,{children:"Shift + Tab"})," menu is ",(0,n.jsx)(i.strong,{children:"Plan Mode"}),". Plan mode takes your prompt and uses read-only tools to analyze your codebase and research your suggested implementation. It will ask clarifying questions along the way, then return a detailed plan it can execute."]}),`
`,(0,n.jsx)(i.p,{children:"Plan mode is great for planning complex changes or doing a safe code review. Many times you'll be asking Claude to handle multi-step implementations toward a feature, and this is exactly where Plan Mode excels."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./fb00d337c540.jpg",alt:"Claude Code with plan mode on, showing the status bar indicator"})}),`
`,(0,n.jsx)(i.h2,{id:"example-add-a-dark-mode-toggle",children:"Example: Add a Dark Mode Toggle"}),`
`,(0,n.jsxs)(i.p,{children:["Let's walk through an example. Say you have an application that needs a dark mode toggle. Open the root directory of your project and run ",(0,n.jsx)(i.code,{children:"claude"}),". Press ",(0,n.jsx)(i.code,{children:"Shift + Tab"})," a couple of times to enter Plan Mode, then write a prompt like:"]}),`
`,(0,n.jsx)(a,{children:(0,n.jsx)(i.p,{children:"My app needs a dark mode implemented across the entire app. Can you create a toggle switch on the header that allows a user to toggle between light mode and dark mode? I need you to find a good contrast color that works based on my existing light theme."})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./39b0125f002f.jpg",alt:"Entering the dark mode prompt in Claude Code with plan mode enabled"})}),`
`,(0,n.jsx)(i.p,{children:"Let Claude plan it out. After reviewing the plan, if it looks good, accept it and let Claude work through it — depending on your permission mode, it may check in with you along the way. At the end, you can see exactly what Claude did and how it reached its conclusions."}),`
`,(0,n.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsx)(i.p,{children:"When using Claude Code, try to be as descriptive as possible with your prompt. If you want to stay in the loop at every step, you can. Use Plan Mode to let Claude dig into the details of what you want to achieve before executing on any code."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};