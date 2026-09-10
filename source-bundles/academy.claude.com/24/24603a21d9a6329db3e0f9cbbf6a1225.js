import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Computer use in Claude works exactly like regular tool use - it's built on the same foundation you're already familiar with. The key difference is that instead of calling a weather API or database function, Claude is making requests to control a computer interface."}),`
`,(0,n.jsx)(r.h2,{id:"tool-use-refresher",children:"Tool Use Refresher"}),`
`,(0,n.jsx)(r.p,{children:"Before diving into computer use, let's quickly review how standard tool use works. When you want Claude to use a tool, you send a request that includes both a user message and a tool schema. The tool schema describes the additional functionality you want to expose to Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f4d077c8292d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's the typical flow:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"You send Claude a question along with available tool schemas"}),`
`,(0,n.jsx)(r.li,{children:"Claude analyzes the request and decides it needs to use a tool"}),`
`,(0,n.jsx)(r.li,{children:"Claude responds with a tool use request containing the tool name and required inputs"}),`
`,(0,n.jsx)(r.li,{children:"Your server executes the tool function and returns the result"}),`
`,(0,n.jsx)(r.li,{children:"You send the tool result back to Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d9d83a605631.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["For example, if you ask about weather in San Francisco, Claude might call a ",(0,n.jsx)(r.code,{children:"get_weather"})," function with the location parameter, your server fetches the weather data, and you return the result to Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b58e95288655.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"computer-use-same-flow-different-tool",children:"Computer Use: Same Flow, Different Tool"}),`
`,(0,n.jsx)(r.p,{children:'Computer use follows this exact same pattern. The difference is in what the "tool" actually does - instead of fetching weather data, it simulates computer interactions like mouse clicks and keyboard input.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7c359ef8d771.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you enable computer use, you send Claude a special tool schema that gets automatically expanded behind the scenes. What starts as a simple schema on your end becomes a comprehensive interface that tells Claude it can perform actions like:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Mouse movements and clicks"}),`
`,(0,n.jsx)(r.li,{children:"Keyboard input and key combinations"}),`
`,(0,n.jsx)(r.li,{children:"Taking screenshots"}),`
`,(0,n.jsx)(r.li,{children:"Scrolling and other interface interactions"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3cb7af73c4a2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The tool schema you send is minimal, but it automatically converts into a detailed specification that includes all the computer interaction capabilities Claude needs."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./106668c3e02c.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-technical-implementation",children:"The Technical Implementation"}),`
`,(0,n.jsx)(r.p,{children:"To make computer use work, you need a computing environment that can programmatically execute the actions Claude requests. The reference implementation uses a Docker container running Firefox, along with code that can simulate keypresses and mouse movements."}),`
`,(0,n.jsx)(r.p,{children:"When Claude decides to interact with the computer, it sends a tool use request just like any other tool. Your server receives this request and executes the corresponding action in the containerized environment - whether that's clicking a button, typing text, or taking a screenshot."}),`
`,(0,n.jsx)(r.p,{children:"The important thing to understand is that Claude isn't directly controlling a computer. It's making tool requests, and your infrastructure translates those requests into actual computer interactions."}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting Started"}),`
`,(0,n.jsx)(r.p,{children:"You don't need to build this infrastructure from scratch. Anthropic provides a reference implementation that handles all the complex parts for you."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e8bf08060641.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"To set up computer use, you need:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"A Docker runtime installed on your system"}),`
`,(0,n.jsx)(r.li,{children:'An AWS profile configured locally (usually "default")'}),`
`,(0,n.jsx)(r.li,{children:"The reference implementation from the Anthropic quickstarts repository"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Once you have these prerequisites, you can start the Docker container with a single command. This gives you access to the same interface shown in the demonstrations - a chat interface on the left where you can talk to Claude, and a browser environment on the right where Claude can interact with web pages and applications."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./95ea027141ba.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The setup process is straightforward, and the full setup guide is available in the Anthropic quickstarts repository on GitHub. This reference implementation provides everything you need to start experimenting with Claude's computer use capabilities in a safe, contained environment."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};