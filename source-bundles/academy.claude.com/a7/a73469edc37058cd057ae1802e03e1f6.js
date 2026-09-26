import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building AI-powered applications, you'll often need to choose between two different architectural approaches: workflows and agents. Each has distinct advantages and trade-offs that make them suitable for different scenarios."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a55b1534d0e7.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"what-are-workflows",children:"What Are Workflows?"}),`
`,(0,n.jsx)(r.p,{children:"Workflows are a predefined series of calls to Claude designed to solve a known problem or set of problems. You use workflows when you can picture the flow of steps ahead of time - essentially when you know the exact sequence needed to complete a task."}),`
`,(0,n.jsx)(r.p,{children:"Think of workflows as breaking down a big task into much smaller, more specific subtasks. Each step focuses on a single area, which allows Claude to work more precisely."}),`
`,(0,n.jsx)(r.h2,{id:"what-are-agents",children:"What Are Agents?"}),`
`,(0,n.jsx)(r.p,{children:"With agents, Claude gets a set of basic tools and is expected to formulate a plan to use these tools to complete a task. Unlike workflows, you don't know exactly what tasks will be provided, so the system needs to be more adaptive."}),`
`,(0,n.jsx)(r.p,{children:"Agents can creatively figure out how to handle a wide variety of challenges by combining tools in unexpected ways."}),`
`,(0,n.jsx)(r.h2,{id:"benefits-of-workflows",children:"Benefits of Workflows"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude can focus on one subtask at a time, generally leading to higher accuracy"}),`
`,(0,n.jsx)(r.li,{children:"Far easier to evaluate and test, since you know each exact step"}),`
`,(0,n.jsx)(r.li,{children:"More predictable and reliable execution"}),`
`,(0,n.jsx)(r.li,{children:"Better suited for solving specific, well-defined problems"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"benefits-of-agents",children:"Benefits of Agents"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Allow for more flexible user experience"}),`
`,(0,n.jsx)(r.li,{children:"Far more flexible task completion - Claude can combine tools in unexpected ways to complete a wide variety of tasks"}),`
`,(0,n.jsx)(r.li,{children:"Can handle novel situations that weren't anticipated during development"}),`
`,(0,n.jsx)(r.li,{children:"Can ask users for additional input when needed"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"downsides-of-workflows",children:"Downsides of Workflows"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Far less flexible - dedicated to solving specific types of tasks"}),`
`,(0,n.jsx)(r.li,{children:"Generally more constrained user experience - you need to know the exact inputs to the flow"}),`
`,(0,n.jsx)(r.li,{children:"Require more upfront planning and design work"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"downsides-of-agents",children:"Downsides of Agents"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Lower successful task completion rate compared to workflows"}),`
`,(0,n.jsx)(r.li,{children:"More challenging to instrument, test, and evaluate since you often don't know what series of steps an agent will execute"}),`
`,(0,n.jsx)(r.li,{children:"Less predictable behavior"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-each-approach",children:"When to Use Each Approach"}),`
`,(0,n.jsx)(r.p,{children:"Your primary goal as an engineer is to solve problems reliably. Users probably don't care that you've built a fancy agent - they want a product that works consistently."}),`
`,(0,n.jsx)(r.p,{children:"The general recommendation is to always focus on implementing workflows where possible, and only resort to agents when they are truly required. Workflows provide the reliability and predictability that most production applications need, while agents offer flexibility for scenarios where the exact requirements can't be predetermined."}),`
`,(0,n.jsx)(r.p,{children:"Consider workflows when you have well-defined processes and agents when you need to handle unpredictable, varied user requests that require creative problem-solving."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};