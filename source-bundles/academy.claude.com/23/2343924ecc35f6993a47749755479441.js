import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"We're going to build a practical project that teaches Claude how to set reminders for future dates. This might sound simple at first, but it reveals several interesting challenges that we'll solve using custom tools."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0b1a7a20c9a0.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`The goal is to have a conversation like this: you tell Claude "Set a reminder for my doctor's appointment. It's a week from Thursday," and Claude responds "OK, I will remind you." To make this work, we need to understand why this is actually harder than it looks.`}),`
`,(0,n.jsx)(r.h2,{id:"why-this-is-challenging",children:"Why This Is Challenging"}),`
`,(0,n.jsx)(r.p,{children:"Claude has some built-in knowledge about dates and times, but it also has some significant limitations:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude might know the current date, but not the exact time"}),`
`,(0,n.jsx)(r.li,{children:"Claude doesn't always handle time-based addition well, especially if looking many days into the future"}),`
`,(0,n.jsx)(r.li,{children:"Claude doesn't know how to set a reminder!"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5794a6fc8bd5.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`These limitations mean that even a simple request like "set a reminder for 24 hours from now" becomes problematic. Claude doesn't know what "24 hours from now" actually means without knowing the current time. And even if it could calculate the right date, it has no mechanism to actually create a reminder.`}),`
`,(0,n.jsx)(r.h2,{id:"tools-we-need",children:"Tools We Need"}),`
`,(0,n.jsx)(r.p,{children:"To solve these problems, we'll create three custom tools that work together:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d1042ce4670e.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"get-the-current-date-time",children:"Get the Current Date Time"}),`
`,(0,n.jsx)(r.p,{children:'This is our starting tool - it gives Claude access to both the current date and the exact time. This solves the problem of Claude not knowing when "now" actually is.'}),`
`,(0,n.jsx)(r.h2,{id:"add-duration-to-date-time",children:"Add Duration to Date Time"}),`
`,(0,n.jsx)(r.p,{children:'This tool handles the math of adding time periods to dates. Instead of relying on Claude to correctly calculate "what date is 379 days from January 13th, 1973," we give it a reliable tool that can handle these calculations accurately.'}),`
`,(0,n.jsx)(r.h2,{id:"set-a-reminder",children:"Set a Reminder"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we need a way for Claude to actually create reminders. This tool will provide the mechanism that Claude lacks for setting up future notifications."}),`
`,(0,n.jsx)(r.p,{children:"We'll implement these tools one at a time, starting with the datetime tool to understand how tool calling works, then building up to the more complex functionality. By the end, Claude will be able to handle natural language requests about setting reminders and convert them into actual scheduled notifications."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};