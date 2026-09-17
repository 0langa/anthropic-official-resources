import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Tools allow Claude to access information from the outside world, solving one of its key limitations. By default, Claude only has access to information it was trained on, which means it can't provide current information like today's weather or recent news."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7692955293ff.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`When a user asks "What's the weather in San Francisco, California?" Claude will typically respond with "I'm sorry, but I don't have access to up-to-date weather information." Tools fix this problem by creating a bridge between Claude and external data sources.`}),`
`,(0,n.jsx)(r.h2,{id:"how-tool-use-works",children:"How Tool Use Works"}),`
`,(0,n.jsx)(r.p,{children:"The tool use process follows a specific flow that involves multiple back-and-forth communications between your server and Claude:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8d6e5b5237ac.png",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Initial Request:"})," You send Claude a question along with instructions on how to get extra data"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool Request:"})," Claude analyzes the question and asks for specific external data it needs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Data Retrieval:"})," Your server runs code to fetch the requested information"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Final Response:"})," Claude uses the external data to provide a complete, informed answer"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"weather-example-in-practice",children:"Weather Example in Practice"}),`
`,(0,n.jsx)(r.p,{children:"Here's how the tool use flow works for a weather query:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4e315ccb2014.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When a user asks about weather, you include details on how to retrieve current weather data in your initial request to Claude. Claude recognizes it needs current weather information and asks your server to get it. Your server calls a weather API, retrieves the live data, and sends it back to Claude. Finally, Claude combines the original question with the fresh weather data to provide an accurate, current response."}),`
`,(0,n.jsx)(r.h2,{id:"implementation-challenges",children:"Implementation Challenges"}),`
`,(0,n.jsx)(r.p,{children:"Tool use can feel confusing because there's a disconnect between the logical flow and how you actually write the code. The implementation doesn't follow the same order as the conceptual steps:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ce61ec2a1c32.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In practice, you often need to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Write the tool function first"}),`
`,(0,n.jsx)(r.li,{children:"Create a JSON schema specification"}),`
`,(0,n.jsx)(r.li,{children:"Handle the ToolUse and ToolResult parts"}),`
`,(0,n.jsx)(r.li,{children:"Include the schema with your request"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This jumping around between different parts of the implementation is why tool use initially seems complex. The key is understanding that each step in the logical flow requires specific code components that you'll build in a different order than they execute."}),`
`,(0,n.jsx)(r.p,{children:"In the following videos, we'll implement tool use step by step, frequently referencing this flow diagram to keep track of which piece we're currently building."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};