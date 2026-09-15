import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"We're going to build a practical project that teaches Claude how to set reminders for future dates. This might sound simple at first, but it reveals several interesting challenges that we'll solve using custom tools."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0b1a7a20c9a0.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`The goal is straightforward: we want to be able to tell Claude "Set a reminder for my doctor's appointment. It's a week from Thursday" and have Claude respond with "OK, I will remind you." But to make this work, we need to address some limitations in how Claude handles time and reminders.`}),`
`,(0,n.jsx)(r.h2,{id:"why-this-is-challenging",children:"Why This Is Challenging"}),`
`,(0,n.jsx)(r.p,{children:"While Claude knows the current date, there are three specific problems we need to solve:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Limited time awareness:"})," Claude might know the current date, but not the exact time"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Date calculation issues:"})," Claude doesn't always handle time-based addition well, especially when looking many days into the future"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No reminder capability:"})," Claude doesn't know how to set a reminder - it has no built-in mechanism for this"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Each of these limitations represents a gap between what Claude can do naturally and what we need for our reminder system. Tools are how we bridge these gaps."}),`
`,(0,n.jsx)(r.h2,{id:"tools-we-need",children:"Tools We Need"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d1042ce4670e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"We'll create three separate tools to handle each challenge:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Get the current date time:"})," Claude needs to know the current date and time precisely"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add duration to date time:"})," Claude isn't perfect with date time addition, so we'll give it a reliable tool for this"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Set a reminder:"})," We need a way to actually set a reminder in the system"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`We'll implement these tools one at a time, starting with the simplest one. This approach lets us understand how tool calling works before building more complex functionality. By the end, Claude will be able to handle natural language requests like "remind me in a week" by combining these tools to calculate the exact time and set the reminder.`}),`
`,(0,n.jsx)(r.p,{children:"This project demonstrates a key principle of working with AI: when the model has limitations, we extend its capabilities through tools rather than trying to work around those limitations in our prompts."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};