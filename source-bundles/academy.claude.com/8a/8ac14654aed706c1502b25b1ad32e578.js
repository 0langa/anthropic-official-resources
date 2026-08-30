import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching in Claude works by storing the computational work done on your messages so it can be reused in follow-up requests. This makes subsequent requests both faster and cheaper to execute, but only when you're repeatedly sending identical content."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5f73b85b4032.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process is straightforward: your initial request writes processing work to the cache, and follow-up requests can read from that cache instead of reprocessing the same content. By default, the cache lives for 5 minutes, so this feature is only useful if you're repeatedly sending the same content within that timeframe. If you need longer, a 1-hour cache duration is also available at a higher cache-write price."}),`
`,(0,n.jsx)(r.h2,{id:"cache-breakpoints",children:"Cache Breakpoints"}),`
`,(0,n.jsx)(r.p,{children:"Caching isn't enabled automatically - you need to manually add cache breakpoints to specific blocks in your messages. Here's how it works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Work done on messages is ",(0,n.jsx)(r.strong,{children:"not cached automatically"})]}),`
`,(0,n.jsx)(r.li,{children:"You must manually add a 'cache breakpoint' to a block"}),`
`,(0,n.jsxs)(r.li,{children:["Work done for everything ",(0,n.jsx)(r.strong,{children:"before"})," the breakpoint will be cached"]}),`
`,(0,n.jsx)(r.li,{children:"Cache will only be used on follow-up requests if the content up to and including the breakpoint is identical"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2779a78a7771.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"To add a cache breakpoint, you need to use the longhand form for writing text blocks instead of the shorthand:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./97c071649fbc.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The shorthand form doesn't provide a place to add the cache control field, so you must use the expanded format with the ",(0,n.jsx)(r.code,{children:"cache_control"})," field set to ",(0,n.jsx)(r.code,{children:'{"type": "ephemeral"}'}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"how-cache-breakpoints-work",children:"How Cache Breakpoints Work"}),`
`,(0,n.jsx)(r.p,{children:"When you place a cache breakpoint in a message, Claude caches all the processing work up to and including that breakpoint. Content after the breakpoint is processed normally without caching."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9d5e67fff198.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'For the cache to be useful in follow-up requests, the content must be identical up to the breakpoint. Even small changes like adding the word "please" will invalidate the cache and force Claude to reprocess everything.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bfeefd9e4074.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"cross-message-caching",children:"Cross-Message Caching"}),`
`,(0,n.jsx)(r.p,{children:"Cache breakpoints can span across multiple messages and message types. If you place a breakpoint in a later message, all previous messages (user, assistant, etc.) will be included in the cached content."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a93fd8ec510e.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This is particularly useful for conversations where you want to cache the entire context up to a certain point."}),`
`,(0,n.jsx)(r.h2,{id:"system-prompts-and-tools",children:"System Prompts and Tools"}),`
`,(0,n.jsx)(r.p,{children:"You're not limited to text blocks - cache breakpoints can be added to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"System prompts"}),`
`,(0,n.jsx)(r.li,{children:"Tool definitions"}),`
`,(0,n.jsx)(r.li,{children:"Image blocks"}),`
`,(0,n.jsx)(r.li,{children:"Tool use and tool result blocks"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cd81704d36d8.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"System prompts and tool definitions are excellent candidates for caching since they rarely change between requests. This is often where you'll get the most benefit from prompt caching."}),`
`,(0,n.jsx)(r.h2,{id:"cache-ordering",children:"Cache Ordering"}),`
`,(0,n.jsx)(r.p,{children:"Behind the scenes, Claude processes your request components in a specific order: tools first, then system prompt, then messages. Understanding this order helps you place breakpoints effectively."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./28440d7825fc.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You can add up to four cache breakpoints total. For example, you might cache your tools, then add another breakpoint partway through your conversation history. This gives you flexibility in what gets cached when different parts of your request change."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./800aa4c461a1.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"minimum-content-length",children:"Minimum Content Length"}),`
`,(0,n.jsx)(r.p,{children:"There's a minimum threshold for caching: content must be at least 1024 tokens long to be cached. This is the sum of all messages and blocks you're trying to cache, not individual blocks."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b76bb4d709ad.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`A simple "Hi there!" message won't meet this threshold, but if you duplicate that content 500 times (or have a genuinely long prompt), it will exceed 1024 tokens and be eligible for caching.`}),`
`,(0,n.jsx)(r.p,{children:"The key to effective prompt caching is identifying which parts of your requests stay consistent across multiple calls and placing breakpoints strategically to maximize reuse while minimizing cache invalidation."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};