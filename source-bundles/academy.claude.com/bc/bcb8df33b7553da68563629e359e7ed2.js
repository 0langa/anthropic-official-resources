import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Routing workflows solve a common problem in AI applications: different types of user requests need different handling approaches. Instead of using a one-size-fits-all prompt, you can categorize incoming requests and route them to specialized processing pipelines."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-generic-prompts",children:"The Problem with Generic Prompts"}),`
`,(0,n.jsx)(r.p,{children:'Consider a social media marketing tool that generates video scripts from user topics. A user might enter "programming" or "surfing" as their topic, but these should produce very different types of content:'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c861b4e4c23f.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Programming topics call for educational content with clear explanations and definitions. Surfing topics work better with entertainment-focused scripts that emphasize excitement and visual appeal. A single generic prompt can't handle both effectively."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-content-categories",children:"Setting Up Content Categories"}),`
`,(0,n.jsx)(r.p,{children:"The first step is defining the different types of content your application might need to generate. You might categorize requests into genres like:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Entertainment - High-energy, culturally relevant content with trendy language"}),`
`,(0,n.jsx)(r.li,{children:"Educational - Clear, engaging explanations with relatable examples"}),`
`,(0,n.jsx)(r.li,{children:"Comedy - Sharp, unexpected content with clever observations and timing"}),`
`,(0,n.jsx)(r.li,{children:"Personal vlog - Authentic, intimate content with conversational storytelling"}),`
`,(0,n.jsx)(r.li,{children:"Reviews - Decisive, experience-based content highlighting strengths and weaknesses"}),`
`,(0,n.jsx)(r.li,{children:"Storytelling - Immersive content using vivid details and emotional connection"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b0c1eaf72ed5.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Each category gets its own specialized prompt template. For example, the educational prompt might ask Claude to "develop a clear, engaging script that transforms complex information into digestible insights using relatable examples and thought-provoking questions."'}),`
`,(0,n.jsx)(r.h2,{id:"how-routing-works-in-practice",children:"How Routing Works in Practice"}),`
`,(0,n.jsx)(r.p,{children:"The routing process happens in two steps:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Categorization"})," - Send the user's topic to Claude with a request to categorize it into one of your predefined genres"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Specialized Processing"})," - Use the category result to select the appropriate prompt template and generate content"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9e2cd80ddfae.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`For example, if a user enters "Python functions" as their topic, you'd first ask Claude to categorize it:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Categorize the topic of a video into one of the listed categories:
<topic>Python functions</topic>

<categories>
- Educational
- Entertainment  
- Comedy
- Personal vlog
- Reviews
- Storytelling
</categories>
`})}),`
`,(0,n.jsx)(r.p,{children:'Claude responds with "Educational", so you then use the educational prompt template to generate the actual script content.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d59a1066f096.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"routing-workflow-architecture",children:"Routing Workflow Architecture"}),`
`,(0,n.jsx)(r.p,{children:"A routing workflow follows this pattern:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0b78f406652d.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"User input goes to a router component first"}),`
`,(0,n.jsx)(r.li,{children:"The router categorizes the request using an initial Claude call"}),`
`,(0,n.jsx)(r.li,{children:"Based on the category, the input gets forwarded to one specific processing pipeline"}),`
`,(0,n.jsx)(r.li,{children:"Each pipeline can have its own workflow, prompts, or tools optimized for that category"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that user input only goes to one specialized pipeline, not all of them. This allows each pipeline to be highly optimized for its specific use case."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-routing",children:"When to Use Routing"}),`
`,(0,n.jsx)(r.p,{children:"Routing workflows work well when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Your application handles diverse types of requests that need different approaches"}),`
`,(0,n.jsx)(r.li,{children:"You can clearly define categories that cover your use cases"}),`
`,(0,n.jsx)(r.li,{children:"The categorization step can be handled reliably by Claude"}),`
`,(0,n.jsx)(r.li,{children:"The performance benefit of specialized processing outweighs the overhead of the routing step"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'This pattern is especially valuable for customer service bots, content generation tools, and any application where the "right" response depends heavily on understanding the type of request being made.'})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};