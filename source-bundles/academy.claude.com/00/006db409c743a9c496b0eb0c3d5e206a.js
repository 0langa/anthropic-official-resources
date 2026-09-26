import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building AI applications, you'll often need different approaches for different types of user requests. A routing workflow solves this by categorizing user input first, then directing it to specialized processing pipelines."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-one-size-fits-all-prompts",children:"The Problem with One-Size-Fits-All Prompts"}),`
`,(0,n.jsx)(r.p,{children:`Consider a social media marketing tool that generates video scripts from user topics. If someone enters "programming" versus "surfing", you'd want very different outputs:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Programming topic"})," - Educational script with clear definitions, examples, and structured explanations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Surfing topic"})," - Entertainment-focused script with engaging hooks and trendy language, not technical definitions"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1580d7544598.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Using the same generic prompt for both topics would produce mediocre results that don't match the content's natural style."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-content-categories",children:"Setting Up Content Categories"}),`
`,(0,n.jsx)(r.p,{children:"Start by defining the different types of content your application might need to handle. For video scripts, you might use categories like:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Entertainment"}),`
`,(0,n.jsx)(r.li,{children:"Educational"}),`
`,(0,n.jsx)(r.li,{children:"Comedy"}),`
`,(0,n.jsx)(r.li,{children:"Personal vlog"}),`
`,(0,n.jsx)(r.li,{children:"Reviews"}),`
`,(0,n.jsx)(r.li,{children:"Storytelling"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1fa6e445c825.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"creating-specialized-prompts",children:"Creating Specialized Prompts"}),`
`,(0,n.jsx)(r.p,{children:"For each category, write a specific prompt that captures the right tone and approach. Here's what the educational prompt might look like:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"Develop a clear, engaging script about [TOPIC] that transforms complex information into digestible insights using relatable examples and thought-provoking questions."})}),`
`,(0,n.jsx)(r.p,{children:"Compare that to an entertainment prompt:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"Write a high-energy, culturally-relevant script about [TOPIC] using trendy language and engaging hooks that balance entertainment value with insider insights."})}),`
`,(0,n.jsx)(r.h2,{id:"the-two-step-process",children:"The Two-Step Process"}),`
`,(0,n.jsx)(r.p,{children:"A routing workflow uses two separate calls to Claude:"}),`
`,(0,n.jsx)(r.h3,{id:"step-1-categorization",children:"Step 1: Categorization"}),`
`,(0,n.jsx)(r.p,{children:"Send the user's topic to Claude with a categorization prompt asking it to classify the content type."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bb151a9f0e4b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'For example, "Python functions" would likely be categorized as "Educational".'}),`
`,(0,n.jsx)(r.h3,{id:"step-2-specialized-processing",children:"Step 2: Specialized Processing"}),`
`,(0,n.jsx)(r.p,{children:"Based on Claude's categorization, use the appropriate specialized prompt to generate the actual content."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8568c4c90e85.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"routing-workflow-architecture",children:"Routing Workflow Architecture"}),`
`,(0,n.jsx)(r.p,{children:"The general pattern looks like this:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2f9761cde059.png",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"User provides input"}),`
`,(0,n.jsx)(r.li,{children:"Router (usually Claude) categorizes the request"}),`
`,(0,n.jsx)(r.li,{children:"Input gets forwarded to exactly one specialized pipeline"}),`
`,(0,n.jsx)(r.li,{children:"Each pipeline has its own workflow, prompts, or tools"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Better output quality"})," - Each category gets prompts designed for that specific use case"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Specialized tools"})," - Different categories can use different APIs, databases, or processing steps"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Scalable design"})," - Easy to add new categories without affecting existing ones"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cost efficiency"})," - Only run the processing that's actually needed"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-routing",children:"When to Use Routing"}),`
`,(0,n.jsx)(r.p,{children:"Routing workflows work best when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Your application handles distinctly different types of requests"}),`
`,(0,n.jsx)(r.li,{children:"Different request types need different processing approaches"}),`
`,(0,n.jsx)(r.li,{children:"You want to optimize for quality over simplicity"}),`
`,(0,n.jsx)(r.li,{children:"You can clearly define 3-10 meaningful categories"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The upfront complexity of building multiple specialized pipelines pays off with significantly better results than trying to handle everything with a single generic approach."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};