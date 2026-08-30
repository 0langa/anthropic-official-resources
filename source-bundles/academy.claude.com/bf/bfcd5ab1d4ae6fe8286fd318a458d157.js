import{Hf as e,Wf as t}from"../../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:'Roots are a way to grant MCP servers access to specific files and folders on your local machine. Think of them as a permission system that says "Hey, MCP server, you can access these files" - but they do much more than just grant permission.'}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-roots-solve",children:"The Problem Roots Solve"}),`
`,(0,n.jsx)(r.p,{children:"Without roots, you'd run into a common issue. Imagine you have an MCP server with a video conversion tool that takes a file path and converts an MP4 to MOV format."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./66d3ffe272f2.png",alt:`Diagram titled "If roots didn't exist...": an MCP server exposes a convert_video tool that converts a .mp4 video file to .mov and requires a path to a video file on the local machine`})}),`
`,(0,n.jsx)(r.p,{children:`When a user asks Claude to "convert biking.mp4 to mov format", Claude would call the tool with just the filename. But here's the problem - Claude has no way to search through your entire file system to find where that file actually lives.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4afa0dcda9ac.png",alt:`A chat where the user says "Convert biking.mp4 to mov format" next to a local filesystem tree with Movies, Documents, and Photos folders; biking.mp4 is highlighted deep inside Movies/Sports, a location Claude can't see`})}),`
`,(0,n.jsx)(r.p,{children:"Your file system might be complex with files scattered across different directories. The user knows the biking.mp4 file is in their Movies folder, but Claude doesn't have that context."}),`
`,(0,n.jsx)(r.p,{children:"You could solve this by requiring users to always provide full paths, but that's not very user-friendly. Nobody wants to type out complete file paths every time."}),`
`,(0,n.jsx)(r.h2,{id:"roots-in-action",children:"Roots in Action"}),`
`,(0,n.jsx)(r.p,{children:"Here's how the workflow changes with roots:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"User asks to convert a video file"}),`
`,(0,n.jsxs)(r.li,{children:["Claude calls ",(0,n.jsx)(r.code,{children:"list_roots"})," to see what directories it can access"]}),`
`,(0,n.jsxs)(r.li,{children:["Claude calls ",(0,n.jsx)(r.code,{children:"read_dir"})," on accessible directories to find the file"]}),`
`,(0,n.jsx)(r.li,{children:"Once found, Claude calls the conversion tool with the full path"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'This happens automatically - users can still just say "convert biking.mp4" without providing full paths.'}),`
`,(0,n.jsx)(r.h2,{id:"security-and-boundaries",children:"Security and Boundaries"}),`
`,(0,n.jsx)(r.p,{children:"Roots also provide security by limiting access. If you only grant access to your Desktop folder, the MCP server cannot access files in other locations like Documents or Downloads."}),`
`,(0,n.jsx)(r.p,{children:"When Claude tries to access a file outside the approved roots, it gets an error and can inform the user that the file isn't accessible from the current server configuration."}),`
`,(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,(0,n.jsxs)(r.p,{children:["The MCP SDK doesn't automatically enforce root restrictions - you need to implement this yourself. A typical pattern is to create a helper function like ",(0,n.jsx)(r.code,{children:"is_path_allowed()"})," that:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Takes a requested file path"}),`
`,(0,n.jsx)(r.li,{children:"Gets the list of approved roots"}),`
`,(0,n.jsx)(r.li,{children:"Checks if the requested path falls within one of those roots"}),`
`,(0,n.jsx)(r.li,{children:"Returns true/false for access permission"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You then call this function in any tool that accesses files or directories before performing the actual file operation."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User-friendly"})," - Users don't need to provide full file paths"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Focused search"})," - Claude only looks in approved directories, making file discovery faster"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Security"})," - Prevents accidental access to sensitive files outside approved areas"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Flexibility"})," - You can provide roots through tools or inject them directly into prompts"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Roots make MCP servers both more powerful and more secure by giving Claude the context it needs to find files while maintaining clear boundaries around what it can access."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};