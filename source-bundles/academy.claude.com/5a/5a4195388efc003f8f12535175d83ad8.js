import{Qp as e,em as t}from"../../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"RfeC02NmLqs",title:"What is the Claude Platform?",children:(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"Claude Platform"}),` is Anthropic's infrastructure for building with
Claude programmatically. Instead of chatting with Claude in a browser, you
send structured requests from your code and get structured responses back,
with control over every detail: which model to use, how many tokens to
spend, what tools Claude can use, and what system instructions it follows.`]})}),`
`,(0,n.jsx)(r.p,{children:"Concretely, the platform is made up of a few pieces:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"REST API"})," you can call from any language"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"SDKs"})," for different programming languages"]}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Command line interfaces"})}),`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"console"})," where you manage API keys, monitor usage, deploy managed agents, and test prompts"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"the-three-layers-of-the-platform",children:"The three layers of the platform"}),`
`,(0,n.jsx)(r.p,{children:"A useful way to picture the platform is as three layers stacked on top of each other."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Primitives"})," — the API building blocks tuned to Claude. This is the Messages API, tool use, files, web search, code execution, MCP servers, and skills. These are the pieces you actually call from your code."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"})," — what you need to build and scale agentic systems past a prototype. Managed agents, retries, queues, observability — the plumbing that keeps things running when one Claude call becomes a thousand."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Controls"})," — the tools for running those systems in production, like dashboards and evals. These are the dials your team uses once it's live."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./eb137b7370ba.png",alt:"Diagram of the Claude Platform's three layers: Primitives (Messages API, tool use, files, web search, code execution, MCP), Infrastructure (managed agents, retries, queues, observability, prompt caching, memory), and Controls (dashboards, evaluations, workspaces, usage and spend limits, request logs)"})}),`
`,(0,n.jsxs)(r.p,{children:["The shorthand: ",(0,n.jsx)(r.strong,{children:"build with primitives, scale on infrastructure, run with control."})]}),`
`,(0,n.jsx)(r.p,{children:"You can see this structure reflected in the Claude Console itself — it's where the infrastructure and control layers live, with sections for building, managing agents, and analytics."}),`
`,(0,n.jsx)(r.h2,{id:"a-real-example-drafting-help-desk-replies",children:"A real example: drafting help desk replies"}),`
`,(0,n.jsx)(r.p,{children:"Say you manage a basic help desk app, and you've been asked to add a feature: draft a reply based on the contents of a ticket, following your team's tone and guidelines. You want to wire this up to a button in the UI."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b6a91e1009b7.png",alt:"A help desk app showing an open support ticket about a duplicate charge, with a Draft reply with Claude button above an empty reply box"})}),`
`,(0,n.jsxs)(r.p,{children:["This is a perfect use case for the ",(0,n.jsx)(r.strong,{children:"Messages API"}),". The flow looks like this:"]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Define a client"}),`
`,(0,n.jsx)(r.li,{children:"Retrieve the ticket the chat refers to"}),`
`,(0,n.jsxs)(r.li,{children:["Call ",(0,n.jsx)(r.code,{children:"messages.create"})]}),`
`,(0,n.jsx)(r.li,{children:"Return the response to the button to render"}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-haiku-4-5",   # Haiku: a good fit for a simple drafting task
    max_tokens=1024,
    system=TONE_AND_GUIDELINES,
    messages=[
        {"role": "user", "content": ticket_content}
    ],
)

draft = response.content
`})}),`
`,(0,n.jsx)(r.p,{children:"Each parameter does a specific job:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"model"})," — which model handles the request. Here that's ",(0,n.jsx)(r.strong,{children:"Haiku"}),", since drafting a reply is a simple task."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"max_tokens"})," — caps how long Claude's response can be."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"system"})," — the system prompt, where you define the role Claude plays. The relevant tone and guidelines go here."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"messages"})," — an array of objects. The ",(0,n.jsx)(r.code,{children:"user"})," role tells Claude this is user input; the ticket content goes there."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Then you retrieve the response and return it to the button to render. Done."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./04983e838f3c.png",alt:"The help desk app's reply box populated with a Claude-drafted refund response, with Discard and Send reply buttons and a note to review and edit before sending"})}),`
`,(0,n.jsx)(r.h2,{id:"from-ask-claude-a-question-to-claude-is-part-of-my-product",children:'From "ask Claude a question" to "Claude is part of my product"'}),`
`,(0,n.jsx)(r.p,{children:"Notice what happened in that example: you're not building a chatbot from scratch. You're adding Claude into a product that already exists, and the API is how you wire it in."}),`
`,(0,n.jsxs)(r.p,{children:["That's the core idea. The Claude Platform is your API-level access to Claude's models, tools, and infrastructure. It's how you go from ",(0,n.jsx)(r.em,{children:"ask Claude a question"})," to ",(0,n.jsx)(r.em,{children:"Claude is part of my product"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["And when your product needs agents, the platform doesn't just hand you the model. With ",(0,n.jsx)(r.strong,{children:"managed agents"}),", it runs them for you."]}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The Claude Platform is Anthropic's infrastructure for building with Claude programmatically: a REST API, SDKs, CLIs, and a console for keys, usage, managed agents, and prompt testing."}),`
`,(0,n.jsxs)(r.li,{children:["Think of it as three layers: ",(0,n.jsx)(r.strong,{children:"primitives"})," (Messages API, tool use, files, web search, code execution, MCP servers, skills), ",(0,n.jsx)(r.strong,{children:"infrastructure"})," (managed agents, retries, queues, observability), and ",(0,n.jsx)(r.strong,{children:"controls"})," (dashboards, evals)."]}),`
`,(0,n.jsx)(r.li,{children:"The shorthand: build with primitives, scale on infrastructure, run with control."}),`
`,(0,n.jsxs)(r.li,{children:["A single ",(0,n.jsx)(r.code,{children:"messages.create"})," call gives you full control over the model, response length, system prompt, and user input — enough to wire Claude into an existing feature like drafting help desk replies."]}),`
`,(0,n.jsx)(r.li,{children:"The platform takes you from asking Claude questions to making Claude part of your product — and with managed agents, it can run your agents for you."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};