import{Mm as e,Pm as t}from"../../../../content-de-meta-nu71vghv.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching is a feature that speeds up Claude's responses and reduces the cost of text generation by reusing computational work from previous requests. To understand how this works, let's first look at what normally happens inside Claude during a typical request."}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-normally-processes-requests",children:"How Claude Normally Processes Requests"}),`
`,(0,n.jsx)(r.p,{children:"When you send a message to Claude, a lot happens behind the scenes before you get a response back. Claude doesn't just immediately start generating text - it first does extensive work on your input message."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0b475b8de7b1.png",alt:'A usual request: our server sends Claude one user message, "Summarize this long text:" plus a text placeholder.'})}),`
`,(0,n.jsx)(r.p,{children:"Here's what Claude does with your message:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Tokenize the prompt"}),`
`,(0,n.jsx)(r.li,{children:"Create embeddings for each token"}),`
`,(0,n.jsx)(r.li,{children:"Add context based on surrounding text"}),`
`,(0,n.jsx)(r.li,{children:"Generate output text"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a89e1005631d.png",alt:"Diagram marking the first three of Claude's four steps as work done on the input message only, before it returns a summary."})}),`
`,(0,n.jsx)(r.p,{children:"All of this preprocessing work happens before Claude generates any actual response. Once Claude finishes processing your request and sends back the response, it throws away all the computational work it just did."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b31f901cebc4.png",alt:'The four processing steps selected inside the Claude box, ready to be dragged into an empty dashed box labeled "Trash".'})}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-throwing-away-work",children:"The Problem with Throwing Away Work"}),`
`,(0,n.jsx)(r.p,{children:"This creates an inefficiency when you're having conversations with Claude. Let's say you make a follow-up request that includes the same message from earlier, plus Claude's previous response, plus a new message to continue the conversation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c42f17f540a9.png",alt:`Follow up request with the same "Summarize this long text" message, Claude's summary, then "The summary needs more focus on".`})}),`
`,(0,n.jsx)(r.p,{children:'When Claude sees that original message again, it has to redo all the same computational work it just threw away moments earlier. Claude essentially thinks: "I just processed this exact message and did all this work, then threw it away. Now I have to do it all over again."'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./23a082b372fe.png",alt:'In the follow-up request, Claude points back to the repeated first user message "Summarize this long text" it just processed.'})}),`
`,(0,n.jsx)(r.h2,{id:"how-prompt-caching-solves-this",children:"How Prompt Caching Solves This"}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching addresses this inefficiency by saving the computational work instead of discarding it. Here's how it works:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./48e26c950efb.png",alt:"Initial request passing through Claude's four steps to a summary reply, next to an empty Trash box and empty Cache box."})}),`
`,(0,n.jsx)(r.p,{children:"When Claude processes your initial request, instead of throwing away all the preprocessing work, it stores that work in a cache. The cache acts like a lookup table that maps specific input messages to their corresponding computational results."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9919962f137b.png",alt:'Cache entry pairing the user message starting "Summarize this long text" with the three preprocessing steps to reuse.'})}),`
`,(0,n.jsx)(r.p,{children:"When you make a follow-up request that includes the same content, Claude can check its cache and reuse the previous work instead of starting from scratch."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits-and-limitations",children:"Key Benefits and Limitations"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c6e44e4688cb.png",alt:'Claude writes the work done on the prompt "Please summarize this" to the cache, then reads it on the follow-up request.'})}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching offers several advantages:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Requests that use cached content are cheaper and faster to execute"}),`
`,(0,n.jsx)(r.li,{children:"Initial request will write to the cache"}),`
`,(0,n.jsx)(r.li,{children:"Follow up requests can read from the cache"}),`
`,(0,n.jsx)(r.li,{children:"Cache lives for 5 minutes"}),`
`,(0,n.jsx)(r.li,{children:"Only useful if you're repeatedly sending the same content (but this happens extremely frequently)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The cache has a 5-minute lifespan, so it's most beneficial for conversations or workflows where you're making multiple requests with overlapping content within a short timeframe. This pattern is actually very common in real applications - think about chatbots, document analysis tools, or any system that maintains conversation context."}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching is particularly valuable because many AI applications do repeatedly send the same content. Whether it's system prompts, conversation history, or large documents being analyzed, the same text often appears across multiple requests in a session."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};