import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching in Claude works by storing the computational work done on messages so it can be reused in follow-up requests. This makes requests that use cached content both cheaper and faster to execute."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8d1b4733699f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process follows a simple pattern: your initial request will write to the cache, and follow-up requests can read from the cache. The cache lives for 5 minutes, so this feature is only useful if you're repeatedly sending the same content - but this happens extremely frequently in real applications."}),`
`,(0,n.jsx)(r.h2,{id:"cache-breakpoints",children:"Cache Breakpoints"}),`
`,(0,n.jsx)(r.p,{children:"Work done on messages is not cached automatically. We have to manually add a 'cache breakpoint' to a block. Work done for everything before the breakpoint will be cached, and the cache will only be used on follow-up requests if the content up to and including the breakpoint is identical."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./906762a605b6.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you need to add cache breakpoints, you must use the longhand form for writing text blocks instead of the shorthand. Here's the difference:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Shorthand - can't add cache breakpoints
user_message = {
  "role": "user",
  "content": "Hi there!"
}

# Longhand - required for cache breakpoints
user_message = {
  "role": "user", 
  "content": [
    {
      "type": "text",
      "text": "",
      "cache_control": {
        "type": "ephemeral"
      }
    }
  ]
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"how-cache-breakpoints-work",children:"How Cache Breakpoints Work"}),`
`,(0,n.jsx)(r.p,{children:"Cache breakpoints span messages and can cache assistant messages too. When you place a breakpoint, everything up to that point gets cached. Remember, content must be identical to use the cache!"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f26074e6edac.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In a follow-up request, Claude reads the previously processed work from the cache instead of reprocessing it:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./98248c8f00b2.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"breakpoint-location",children:"Breakpoint Location"}),`
`,(0,n.jsx)(r.p,{children:"You're not restricted to text blocks! You can add cache breakpoints to system prompts and tool definitions. These are actually the most common caching opportunities since they rarely change between requests."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Tool definitions with cache breakpoint
tools = [
  add_duration_to_datetime_schema,
  get_current_datetime_schema,
  {
    "name": "set_reminder",
    "description": "Sets a reminder...",
    "input_schema": { ... },
    "cache_control": {"type": "ephemeral"}
  }
]

# System prompt with cache breakpoint  
system = [
  {
    "type": "text",
    "text": "You are a senior software...",
    "cache_control": {"type": "ephemeral"}
  }
]
`})}),`
`,(0,n.jsx)(r.h2,{id:"cache-ordering",children:"Cache Ordering"}),`
`,(0,n.jsx)(r.p,{children:"Behind the scenes, tools, system prompts, and messages get joined together in that specific order when fed into Claude. This affects how your cache breakpoints work."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4375507b36ee.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You can add up to four cache breakpoints total. If you place a breakpoint on your last tool, everything up to that tool gets cached, but the system prompt and messages won't be. This gives you fine-grained control over what gets cached based on what changes in your application."}),`
`,(0,n.jsx)(r.h2,{id:"minimum-content-length",children:"Minimum Content Length"}),`
`,(0,n.jsx)(r.p,{children:`Content must be at least 1024 tokens long to be cached (sum of all messages/blocks you're trying to cache). A simple "Hi there!" message won't meet this threshold, but if you duplicate that text 500 times, you'll have enough tokens to cache.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e49cdbe111f3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key to effective prompt caching is identifying the parts of your requests that stay consistent - usually your system prompts and tool definitions - and placing breakpoints strategically to maximize cache hits while minimizing reprocessing."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};