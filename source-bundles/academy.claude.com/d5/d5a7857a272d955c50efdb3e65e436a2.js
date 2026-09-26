import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Workflows and agents are strategies for handling user tasks that can't be completed by Claude in a single request. You've actually been creating both throughout this course - when you used tools and let Claude figure out how to complete tasks, that was an agent."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-workflows-vs-agents",children:"When to Use Workflows vs Agents"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6db9874df97b.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The decision comes down to how well you understand the task:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Use workflows"})," when you can picture the exact flow or steps that Claude should go through to solve a problem, or when your app's UX constrains users to a set of tasks"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Use agents"})," when you're not sure exactly what task or task parameters you'll give to Claude"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Workflows are a series of calls to Claude meant to solve a specific problem through a predetermined series of steps. Agents give Claude a goal and a set of tools, expecting Claude to figure out how to complete the goal through the provided tools."}),`
`,(0,n.jsx)(r.h2,{id:"example-image-to-cad-workflow",children:"Example: Image to CAD Workflow"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./475ec94686fa.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Let's look at a practical workflow example. Imagine building a web app where users drag and drop an image of a metal part, and you create a STEP file (an industry standard for 3D models) from it."}),`
`,(0,n.jsx)(r.p,{children:"Since we have a pretty good idea of exactly what to do when a user supplies an image file, and we can easily write all of this out with code as a predefined series of steps, this makes a perfect workflow candidate."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6e905a34d6fd.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how the workflow breaks down:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Feed an image into Claude, asking it to describe the object"}),`
`,(0,n.jsx)(r.li,{children:"Based on the description, ask Claude to use the CadQuery library to model the object"}),`
`,(0,n.jsx)(r.li,{children:"Create a rendering"}),`
`,(0,n.jsx)(r.li,{children:"Ask Claude to grade the rendering against the original image. If there are issues, fix them"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"the-evaluator-optimizer-pattern",children:"The Evaluator-Optimizer Pattern"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6d5990ee3240.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This modeling workflow is an example of an evaluator-optimizer pattern. Here's how it works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Producer"}),": Takes input and creates output (Claude using CadQuery to model the part and create a rendering)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Grader"}),": Evaluates the output against some criteria"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Feedback loop"}),": If the grader doesn't accept the output, feedback goes back to the producer for improvement"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Iteration"}),": The cycle repeats until the grader accepts the output"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"why-learn-workflow-patterns",children:"Why Learn Workflow Patterns"}),`
`,(0,n.jsx)(r.p,{children:"The goal of identifying different workflows is to give you a set of repeatable recipes for implementing your own features. The Evaluator-Optimizer is one workflow pattern that has worked well for other engineers - consider using it in your own app!"}),`
`,(0,n.jsx)(r.p,{children:"Remember, identifying workflows doesn't inherently do anything for us - we still have to write the actual code to implement them. But these patterns have proven successful for many engineers, so they're worth understanding and applying to your own projects."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};