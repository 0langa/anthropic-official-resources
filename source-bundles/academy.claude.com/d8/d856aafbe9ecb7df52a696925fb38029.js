import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching is a feature that speeds up Claude's responses and reduces the cost of text generation by reusing computational work from previous requests. Instead of throwing away all the processing work after each request, Claude can save and reuse it when you send similar content again."}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-normally-processes-requests",children:"How Claude Normally Processes Requests"}),`
`,(0,n.jsx)(r.p,{children:"To understand prompt caching, let's first look at what happens during a typical request without caching enabled."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f34cfa8bf918.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you send a message to Claude, it doesn't immediately start generating a response. Instead, Claude does a tremendous amount of preprocessing work on your input:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2c5fc9b8ab85.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Tokenizes the prompt into smaller pieces"}),`
`,(0,n.jsx)(r.li,{children:"Creates embeddings for each token"}),`
`,(0,n.jsx)(r.li,{children:"Adds context based on surrounding text"}),`
`,(0,n.jsx)(r.li,{children:"Only then generates the actual output text"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"After sending you the response, Claude throws away all this computational work - the tokenization, embeddings, and context analysis all get discarded."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c5670ac3a856.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-discarding-work",children:"The Problem with Discarding Work"}),`
`,(0,n.jsx)(r.p,{children:"This becomes inefficient when you make follow-up requests that include the same content. For example, in a conversation where you're asking Claude to refine a summary of the same long text:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./162ab5f5fd0c.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Claude has to repeat all the same preprocessing work on content it just analyzed moments ago. As Claude might think to itself: "I just processed that message and threw away all the work I did - I could have reused it!"'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3e5343f6f094.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-prompt-caching-solves-this",children:"How Prompt Caching Solves This"}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching changes this workflow by saving the preprocessing work instead of discarding it:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c53467e87036.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`When you make an initial request, Claude performs all the usual preprocessing but stores the results in a cache instead of throwing them away. The cache acts like a lookup table that says "If I ever see this message again, I'll reuse this work I already did."`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4bbeab1fdbfa.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits-and-limitations",children:"Key Benefits and Limitations"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./78e580715d88.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching offers several advantages:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Faster responses:"})," Requests using cached content execute more quickly"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lower costs:"})," You pay less for the cached portions of your requests"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Automatic optimization:"})," The initial request writes to the cache, follow-up requests read from it"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"However, there are important limitations to keep in mind:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cache duration:"})," By default, cached content lives for 5 minutes, and each reuse refreshes that timer at no extra cost. You can optionally extend the lifetime to 1 hour, which carries a higher cache-write price."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Limited use cases:"})," Only beneficial when you're repeatedly sending the same content"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"High frequency requirement:"})," Most effective when the same content appears extremely frequently in your requests"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching works best for scenarios like document analysis workflows, where you're asking multiple questions about the same large document, or iterative editing tasks where the base content remains constant while you refine specific aspects."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};