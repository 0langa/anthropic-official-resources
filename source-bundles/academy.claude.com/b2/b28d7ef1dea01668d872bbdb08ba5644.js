import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching is a feature that speeds up Claude's responses and reduces the cost of text generation by reusing computational work from previous requests. Instead of throwing away all the processing work after each request, Claude can save and reuse it when you send similar content again."}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-normally-processes-requests",children:"How Claude Normally Processes Requests"}),`
`,(0,n.jsx)(r.p,{children:"To understand prompt caching, let's first look at what happens during a typical request without caching enabled."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f670a1e4bee7.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you send a message to Claude, it doesn't immediately start generating a response. Instead, Claude performs extensive preprocessing work on your input:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6a0ffdf4274c.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Tokenizes the prompt (breaks text into smaller units)"}),`
`,(0,n.jsx)(r.li,{children:"Creates embeddings for each token (mathematical representations)"}),`
`,(0,n.jsx)(r.li,{children:"Adds context based on surrounding text"}),`
`,(0,n.jsx)(r.li,{children:"Only then generates the actual output text"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a9af83a25065.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"After sending you the response, Claude discards all this computational work. Everything gets thrown away, and Claude declares itself ready for the next request."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-repeated-content",children:"The Problem with Repeated Content"}),`
`,(0,n.jsx)(r.p,{children:"Here's where things get inefficient. Imagine you're having a conversation with Claude, so your follow-up request includes:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./119df7860755.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The same original user message from before"}),`
`,(0,n.jsx)(r.li,{children:"Claude's previous response"}),`
`,(0,n.jsx)(r.li,{children:"Your new follow-up message"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./23a082b372fe.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Claude has to reprocess that original message all over again, even though it just analyzed the exact same content moments earlier. As Claude might think: "I just processed that message and threw away all the work I did. I could have reused it!"'}),`
`,(0,n.jsx)(r.h2,{id:"how-prompt-caching-solves-this",children:"How Prompt Caching Solves This"}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching changes this wasteful process. Instead of discarding the preprocessing work, Claude saves it in a cache."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./eaa63fb826af.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Initial request:"})," Claude processes your message and writes the computational work to a cache"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Follow-up requests:"})," When Claude sees the same content again, it reads the previously processed work from the cache instead of starting over"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cfa29c6ccc3b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`The cache acts like a lookup table: "If I ever see this message again, I'll reuse this work I already did."`}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits-and-limitations",children:"Key Benefits and Limitations"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5f97d3d94b77.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching offers several advantages:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Faster responses:"})," Requests using cached content execute more quickly"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lower costs:"})," You pay less for processing that reuses cached work"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Automatic optimization:"})," The initial request writes to cache, follow-up requests read from it"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"However, there are important limitations to keep in mind:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Short lifespan:"})," Cache only lives for 5 minutes"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Exact matches required:"})," Only useful when you're repeatedly sending the same content"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Common use case:"})," This happens extremely frequently in conversational applications and document analysis workflows"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching is particularly valuable for applications where users frequently reference the same documents, continue conversations, or iterate on similar prompts within a short timeframe."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};