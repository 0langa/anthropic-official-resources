import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching is a powerful optimization feature that makes requests cheaper and faster when you're repeatedly sending the same content to Claude. The initial request writes to the cache, and follow-up requests can read from it. The cache lives for 5 minutes and is extremely useful since many applications send identical tool schemas, system prompts, or message histories repeatedly."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8268dec9cc1f.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-prompt-caching-works",children:"How Prompt Caching Works"}),`
`,(0,n.jsx)(r.p,{children:"When you mark content for caching, Claude processes it once and stores the result. Subsequent requests that include the exact same content can skip the processing step and read directly from the cache. This only works if the cached content is identical - even a single character change invalidates the cache."}),`
`,(0,n.jsx)(r.p,{children:"You can set multiple cache breakpoints in a single request. The caching order follows this sequence:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Tool schemas"}),`
`,(0,n.jsx)(r.li,{children:"System prompt"}),`
`,(0,n.jsx)(r.li,{children:"Message history"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-tool-schema-caching",children:"Setting Up Tool Schema Caching"}),`
`,(0,n.jsxs)(r.p,{children:["To cache tool schemas, you need to add a ",(0,n.jsx)(r.code,{children:"cache_control"})," field to the last tool in your list. Here's the proper way to do it without modifying your original tool schemas:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if tools:
    tools_clone = tools.copy()
    last_tool = tools_clone[-1].copy()
    last_tool["cache_control"] = {"type": "ephemeral"}
    tools_clone[-1] = last_tool
    params["tools"] = tools_clone
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach creates copies of both the tools list and the last tool schema before adding the cache control field. This prevents accidentally modifying your original tool definitions, which could cause issues if you reorder tools later."}),`
`,(0,n.jsx)(r.h2,{id:"system-prompt-caching",children:"System Prompt Caching"}),`
`,(0,n.jsx)(r.p,{children:"For system prompts, you need to structure the system parameter as a list with a text block that includes the cache control field:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if system:
    params["system"] = [
        {
            "type": "text",
            "text": system,
            "cache_control": {"type": "ephemeral"}
        }
    ]
`})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-cache-behavior",children:"Understanding Cache Behavior"}),`
`,(0,n.jsxs)(r.p,{children:["When you make your first request with cacheable content, you'll see ",(0,n.jsx)(r.code,{children:"cache_creation_input_tokens"})," in the usage field. This shows how many tokens Claude wrote to the cache. On subsequent requests with identical content, you'll see ",(0,n.jsx)(r.code,{children:"cache_read_input_tokens"})," instead."]}),`
`,(0,n.jsx)(r.p,{children:"If you have both cached and new content in the same request, you might see both cache reads and cache writes. For example, if you keep the same tool schemas but change the system prompt, you'll read the tools from cache while writing the new system prompt to cache."}),`
`,(0,n.jsx)(r.h2,{id:"cache-invalidation",children:"Cache Invalidation"}),`
`,(0,n.jsx)(r.p,{children:"The cache is extremely sensitive to changes. Modifying even a single character in your tool schema description, system prompt, or any cached content will invalidate that cache entry. When this happens, Claude treats it as completely new content and creates a fresh cache entry."}),`
`,(0,n.jsx)(r.p,{children:"This sensitivity means you should be thoughtful about what you cache. Tool schemas and system prompts that remain stable across many requests are ideal candidates. Dynamic content that changes frequently won't benefit from caching."}),`
`,(0,n.jsx)(r.h2,{id:"practical-implementation",children:"Practical Implementation"}),`
`,(0,n.jsx)(r.p,{children:"In practice, you'll want to build caching into your chat functions by default. Most applications use the same tool schemas and system prompts across multiple requests, making them perfect for caching. The performance and cost benefits are significant when you're making many requests with similar content."}),`
`,(0,n.jsx)(r.p,{children:"Remember that caching is most valuable when you're repeatedly sending the same content. Since this happens extremely frequently in real applications - especially with tool schemas and system prompts - implementing caching early in your development process will pay dividends as your application scales."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};