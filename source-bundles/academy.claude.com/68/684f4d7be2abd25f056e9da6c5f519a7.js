import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt caching in Claude works by storing the computational work done on messages so it can be reused in follow-up requests. This makes subsequent requests both cheaper and faster to execute, but only when you're repeatedly sending the same content."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./097732ecdd54.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process follows a two-phase pattern: the initial request writes to the cache, and follow-up requests can read from it. The cache only lives for 5 minutes, so this feature is most useful when you're sending the same content repeatedly within a short timeframe."}),`
`,(0,n.jsx)(r.h2,{id:"cache-points",children:"Cache Points"}),`
`,(0,n.jsx)(r.p,{children:"Prompt caching isn't enabled automatically - you need to manually add cache point message parts to control what gets cached. Cache points tell Claude to cache all the work done for everything before that point in your message."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a5cae96fc1ad.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how you add a cache point to a user message:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`user_message = {
  "role": "user",
  "content": [
    {"text": ""},
    {"cachePoint": {"type": "default"}}
  ]
}
`})}),`
`,(0,n.jsx)(r.p,{children:"The key rule is that work done for everything before the cache point will be cached, but anything after the cache point won't be stored in the cache."}),`
`,(0,n.jsx)(r.h2,{id:"how-cache-points-work",children:"How Cache Points Work"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c5fbe6101c59.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you make an initial request with a cache point, Claude processes all the content and stores the work done up to that cache point. On follow-up requests, if the content before the cache point is identical, Claude reads the previously processed work from cache instead of reprocessing it."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6c453da9b6bf.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'The cache will only be used if the content before the cache point is completely identical. Even small changes like adding "Please" to the beginning of your prompt will prevent cache usage, forcing Claude to process everything from scratch.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9a7504d0101b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"caching-across-messages",children:"Caching Across Messages"}),`
`,(0,n.jsx)(r.p,{children:"Cache points can span multiple messages and even include assistant messages. This means you can cache entire conversation histories up to a certain point."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./af18cf98e698.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For example, you might have a conversation with a user message, assistant response, and another user message, with a cache point at the end. All the processing work for that entire conversation thread gets cached and can be reused."}),`
`,(0,n.jsx)(r.h2,{id:"minimum-content-length",children:"Minimum Content Length"}),`
`,(0,n.jsx)(r.p,{children:"Content must be at least 1024 tokens long to be cached. This is the sum of all messages and parts you're trying to cache before the cache point."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d0ef1cc4dc93.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`A simple "Hi there!" message won't meet the 1024 token minimum, so nothing gets cached. But if you repeat "Hi there!" 500 times, that would exceed 1024 tokens and qualify for caching.`}),`
`,(0,n.jsx)(r.h2,{id:"cache-point-locations",children:"Cache Point Locations"}),`
`,(0,n.jsx)(r.p,{children:"Cache points aren't restricted to user messages. You can add them to system prompts and tool definitions, which are actually the most common caching opportunities."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b0cbe00c8457.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For tool definitions:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`tools = [
  {"toolSpec": add_duration_to_datetime_schema},
  {"toolSpec": get_current_datetime_schema},
  {"cachePoint": {"type": "default"}}
]
`})}),`
`,(0,n.jsx)(r.p,{children:"For system prompts:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`system = [
  {"text": "You are a senior software..."},
  {"cachePoint": {"type": "default"}}
]
`})}),`
`,(0,n.jsx)(r.p,{children:"These are the most valuable caching opportunities because system prompts and tool lists rarely change between requests, making them perfect candidates for caching."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};