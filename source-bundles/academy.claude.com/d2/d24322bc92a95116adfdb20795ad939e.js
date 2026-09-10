import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building applications with Claude, you'll often encounter tasks that can't be completed in a single request. This is where workflows and agents come in - they're strategies for handling complex, multi-step processes."}),`
`,(0,n.jsx)(r.p,{children:"You've actually been using these concepts throughout this course. Remember when we used tools and let Claude figure out how to complete tasks? That was an agent in action."}),`
`,(0,n.jsx)(r.h2,{id:"choosing-between-workflows-and-agents",children:"Choosing Between Workflows and Agents"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5a8594e2bfd9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The decision comes down to how well you understand the task:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Use workflows"})," when you can picture the exact flow or steps that Claude should go through to solve a problem, or when your app's UX constrains users to a set of tasks"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Use agents"})," when you're not sure exactly what task or task parameters you'll give to Claude"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Workflows are series of calls to Claude meant to solve a specific problem through a predetermined series of steps. Agents give Claude a goal and a set of tools, expecting Claude to figure out how to complete the goal through the provided tools."}),`
`,(0,n.jsx)(r.h2,{id:"a-real-world-workflow-example",children:"A Real-World Workflow Example"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./dae5c080943b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Let's look at a practical example: building an "Image to CAD" application. Users drag and drop an image of a metal part, and the app creates a STEP file (an industry standard for 3D models).`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0715058392b2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how we might break this down into workflow steps:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Feed the image into Claude, asking it to describe the object in detail"}),`
`,(0,n.jsx)(r.li,{children:"Based on the description, ask Claude to use the CadQuery library to model the object"}),`
`,(0,n.jsx)(r.li,{children:"Create a rendering of the 3D model"}),`
`,(0,n.jsx)(r.li,{children:"Ask Claude to grade the rendering against the original image. If there are issues, fix them and repeat"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This is a perfect workflow scenario because we have a pretty good idea of exactly what to do when a user supplies an image file, and we can easily write all of this out with code as a predefined series of steps."}),`
`,(0,n.jsx)(r.h2,{id:"the-evaluator-optimizer-pattern",children:"The Evaluator-Optimizer Pattern"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e314a2900b33.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The CAD example demonstrates a common workflow pattern called the evaluator-optimizer:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Producer"}),": Takes input and creates output (Claude using CadQuery to model and render)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Grader"}),": Evaluates the output against criteria"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Feedback loop"}),": If the grader rejects the output, feedback goes back to the producer for improvement"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Acceptance"}),": The cycle continues until the grader accepts the output"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"why-learn-workflow-patterns",children:"Why Learn Workflow Patterns?"}),`
`,(0,n.jsx)(r.p,{children:"Identifying different workflows gives you a set of repeatable recipes for implementing your own features. The evaluator-optimizer is one workflow pattern that has worked well for other engineers - consider using it in your own applications!"}),`
`,(0,n.jsx)(r.p,{children:"Remember, workflows don't implement themselves. You still need to write the actual code. But having these proven patterns as starting points can save you significant time and help you avoid common pitfalls that others have already solved."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};