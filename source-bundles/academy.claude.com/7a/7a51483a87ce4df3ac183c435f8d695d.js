import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Tools allow Claude to access information from the outside world, extending its capabilities beyond what it learned during training. By default, Claude only knows information from its training data and can't access current events, real-time data, or external systems. Tool use solves this limitation by creating a structured way for Claude to request and receive fresh information."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-without-tools",children:"The Problem Without Tools"}),`
`,(0,n.jsx)(r.p,{children:`When users ask Claude for current information, it hits a wall. For example, if someone asks "What's the weather in San Francisco, California?" Claude has to respond with something like "I'm sorry, but I don't have access to up-to-date weather information."`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7a5609785587.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This creates a frustrating user experience when people need real-time data that Claude could theoretically help with if it just had access to current information."}),`
`,(0,n.jsx)(r.h2,{id:"how-tool-use-works",children:"How Tool Use Works"}),`
`,(0,n.jsx)(r.p,{children:"Tool use follows a specific back-and-forth pattern between your application and Claude. Here's the complete flow:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8d6e5b5237ac.png",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Initial Request:"})," You send Claude a question along with instructions on how to get extra data from external sources"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool Request:"})," Claude analyzes the question and decides it needs additional information, then asks for specific details about what data it needs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Data Retrieval:"})," Your server runs code to fetch the requested information from external APIs or databases"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Final Response:"})," You send the retrieved data back to Claude, which then generates a complete response using both the original question and the fresh data"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"weather-example-in-practice",children:"Weather Example in Practice"}),`
`,(0,n.jsx)(r.p,{children:"Let's see how this works with the weather question. The process becomes much more specific:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b2048973b52d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When a user asks about current weather, you include details in your prompt about how to retrieve weather data. Claude recognizes it needs current information and requests weather data for the specific location. Your server then calls a weather API to get real-time conditions and sends that data back to Claude. Finally, Claude combines the fresh weather data with the user's question to provide an accurate, current response."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Real-time Information:"})," Access current data that wasn't available during Claude's training"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"External System Integration:"})," Connect Claude to databases, APIs, and other services"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Dynamic Responses:"})," Provide answers based on the most up-to-date information available"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Structured Interaction:"})," Claude knows exactly what information it needs and how to ask for it"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Tool use transforms Claude from a static knowledge base into a dynamic assistant that can work with live data and external systems. This opens up possibilities for building applications that need both AI reasoning and access to current information."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};