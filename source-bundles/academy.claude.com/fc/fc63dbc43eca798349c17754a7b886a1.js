import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building AI-powered applications, you'll need to choose between two main architectural patterns: workflows and agents. Each has distinct advantages and trade-offs that make them suitable for different scenarios."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a3bd1241321d.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"workflows",children:"Workflows"}),`
`,(0,n.jsx)(r.p,{children:"Workflows are a predefined series of calls to Claude designed to solve a known problem or set of problems. Think of them as a recipe - you know exactly what ingredients you need and what steps to follow."}),`
`,(0,n.jsx)(r.p,{children:"You'll want to use workflows when you can picture the flow of steps ahead of time. The key insight is breaking down a big task into much smaller, more specific subtasks."}),`
`,(0,n.jsx)(r.h3,{id:"benefits-of-workflows",children:"Benefits of Workflows"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude can focus on one subtask at a time, generally leading to higher accuracy"}),`
`,(0,n.jsx)(r.li,{children:"Far easier to evaluate and test, since you know each exact step"}),`
`,(0,n.jsx)(r.li,{children:"More predictable and reliable execution"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"downsides-of-workflows",children:"Downsides of Workflows"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Far less flexible - dedicated to solving specific types of tasks"}),`
`,(0,n.jsx)(r.li,{children:"Generally more constrained user experience - you need to know the exact inputs to the flow"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"agents",children:"Agents"}),`
`,(0,n.jsx)(r.p,{children:"With agents, Claude is given a set of basic tools and we expect it to formulate a plan to use these tools to complete a task. Instead of following a predetermined path, Claude creatively figures out how to handle challenges."}),`
`,(0,n.jsx)(r.h3,{id:"benefits-of-agents",children:"Benefits of Agents"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Allow for more flexible user experience"}),`
`,(0,n.jsx)(r.li,{children:"Far more flexible task completion - Claude can combine tools in unexpected ways to complete a wide variety of tasks"}),`
`,(0,n.jsx)(r.li,{children:"Can create their own inputs based on user queries and ask for more input when needed"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"downsides-of-agents",children:"Downsides of Agents"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Lower successful task completion rate compared to workflows"}),`
`,(0,n.jsx)(r.li,{children:"More challenging to instrument, test, and evaluate since you often don't know what series of steps the agent will execute"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"choosing-the-right-approach",children:"Choosing the Right Approach"}),`
`,(0,n.jsx)(r.p,{children:"While agents are really interesting from a technical perspective, remember that your primary goal as an engineer is to solve problems reliably. Users probably don't care that you've built a fancy agent - they want a product that works 100% of the time."}),`
`,(0,n.jsx)(r.p,{children:"The general recommendation is to always focus on implementing workflows where possible, and only resort to agents when they are truly required. Workflows give you the predictability and reliability that most production applications need, while agents provide flexibility for scenarios where the exact solution path can't be predetermined."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};