import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching is a powerful optimization feature that makes your API requests both faster and cheaper when you're repeatedly sending the same content to Claude. Let's explore how to implement it effectively in your applications."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./16861ef78632.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-prompt-caching-works",children:"How Prompt Caching Works"}),`
`,(0,n.jsx)(r.p,{children:"When you enable prompt caching, the first request writes content to a cache with a 5-minute default lifetime, and each time the cached content is used, that window refreshes at no extra cost. If you need a longer window, you can opt into a 1-hour cache duration for an additional cost. Follow-up requests read from this cache instead of processing the same content again. This is particularly valuable when you're sending:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Large system prompts (like a 6K token coding assistant prompt)"}),`
`,(0,n.jsx)(r.li,{children:"Complex tool schemas (around 1.7K tokens for multiple tools)"}),`
`,(0,n.jsx)(r.li,{children:"Repeated message content"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that caching only helps if you're repeatedly sending identical content - but in many applications, this happens extremely frequently."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-tool-schema-caching",children:"Setting Up Tool Schema Caching"}),`
`,(0,n.jsx)(r.p,{children:"To cache your tool schemas, you need to add a cache control field to the last tool in your list. Here's the proper way to do it without modifying your original tool definitions:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if tools:
    tools_clone = tools.copy()
    last_tool = tools_clone[-1].copy()
    last_tool["cache_control"] = {"type": "ephemeral"}
    tools_clone[-1] = last_tool
    params["tools"] = tools_clone
`})}),`
`,(0,n.jsxs)(r.p,{children:["This approach creates copies of both the tools list and the last tool schema before adding the cache control field. While you could directly modify ",(0,n.jsx)(r.code,{children:'tools[-1]["cache_control"]'}),", the copying approach prevents issues if you later reorder your tools."]}),`
`,(0,n.jsx)(r.h2,{id:"system-prompt-caching",children:"System Prompt Caching"}),`
`,(0,n.jsx)(r.p,{children:"For system prompts, you need to structure them as a text block with cache control:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if system:
    params["system"] = [
        {
            "type": "text",
            "text": system,
            "cache_control": {"type": "ephemeral"}
        }
    ]
`})}),`
`,(0,n.jsx)(r.p,{children:"This converts your system prompt from a simple string into a structured format that supports caching."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-cache-behavior",children:"Understanding Cache Behavior"}),`
`,(0,n.jsx)(r.p,{children:"When you run requests with caching enabled, you'll see different usage patterns in the response:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"First request:"})," ",(0,n.jsx)(r.code,{children:"cache_creation_input_tokens=1772"})," - Claude writes to cache"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Follow-up requests:"})," ",(0,n.jsx)(r.code,{children:"cache_read_input_tokens=1772"})," - Claude reads from cache"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Changed content:"})," New cache creation tokens appear"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The cache is extremely sensitive - changing even a single character in your tools or system prompt invalidates the entire cache for that component."}),`
`,(0,n.jsx)(r.h2,{id:"cache-ordering-and-breakpoints",children:"Cache Ordering and Breakpoints"}),`
`,(0,n.jsx)(r.p,{children:"You can set multiple cache breakpoints in a single request. The order matters:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Tools (if provided)"}),`
`,(0,n.jsx)(r.li,{children:"System prompt (if provided)"}),`
`,(0,n.jsx)(r.li,{children:"Messages"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"If you change your system prompt but keep the same tools, you'll see a partial cache read (for tools) and a cache write (for the new system prompt). This granular caching means you only pay for processing the parts that actually changed."}),`
`,(0,n.jsx)(r.h2,{id:"practical-considerations",children:"Practical Considerations"}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching is most effective when you have:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Consistent tool schemas across requests"}),`
`,(0,n.jsx)(r.li,{children:"Stable system prompts"}),`
`,(0,n.jsx)(r.li,{children:"Applications that make multiple requests with similar context"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Remember that the default cache lasts 5 minutes (refreshed on each use), with a 1-hour option available at additional cost, so it's designed for applications with relatively frequent API usage rather than long-term storage."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};