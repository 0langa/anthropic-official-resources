import{Gp as e,qp as t}from"../../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:["Important Note: Tool version strings can for all model versions can be found here: ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/text-editor-tool",children:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/text-editor-tool"})]})}),`
`,(0,n.jsx)(r.p,{children:"Claude comes with one built-in tool that you don't need to create from scratch: the text editor tool. This tool gives Claude the ability to work with files and directories just like you would in a standard text editor."}),`
`,(0,n.jsx)(r.h2,{id:"what-the-text-editor-tool-can-do",children:"What the Text Editor Tool Can Do"}),`
`,(0,n.jsx)(r.p,{children:"The text editor tool provides Claude with a comprehensive set of file manipulation capabilities:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"View file or directory contents"}),`
`,(0,n.jsx)(r.li,{children:"View specific ranges of lines in a file"}),`
`,(0,n.jsx)(r.li,{children:"Replace text in a file"}),`
`,(0,n.jsx)(r.li,{children:"Create new files"}),`
`,(0,n.jsx)(r.li,{children:"Insert text at specific lines in a file"}),`
`,(0,n.jsx)(r.li,{children:"Undo recent edits to files"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e93b28d26689.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This dramatically expands Claude's abilities and essentially gives it the power to act as a software engineer right out of the gate."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-implementation-requirements",children:"Understanding the Implementation Requirements"}),`
`,(0,n.jsx)(r.p,{children:"Here's where things get a bit confusing: while the tool schema is built into Claude, you still need to provide the actual implementation. Think of it this way - Claude knows how to ask for file operations, but you need to write the code that actually performs those operations."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6587d7fcc540.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you use custom tools, you typically write both the JSON schema and the function implementation. With the text editor tool, Claude provides the schema knowledge, but you must write functions to handle Claude's requests to create files, read directories, replace text, and so on."}),`
`,(0,n.jsx)(r.h2,{id:"schema-versions",children:"Schema Versions"}),`
`,(0,n.jsx)(r.p,{children:"You do need to include a small schema stub when using the text editor tool, and the exact schema depends on which Claude model you're using:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def get_text_edit_schema(model):
    if model.startswith("claude-3-7-sonnet"):
        return {
            "type": "text_editor_20250124",
            "name": "str_replace_editor",
        }
    elif model.startswith("claude-3-5-sonnet"):
        return {
            "type": "text_editor_20241022", 
            "name": "str_replace_editor",
        }
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9829572f7b02.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude automatically expands this small schema into a much larger, detailed specification that includes all the parameters and operations available."}),`
`,(0,n.jsx)(r.h2,{id:"practical-example",children:"Practical Example"}),`
`,(0,n.jsx)(r.p,{children:"Let's see the text editor tool in action. When you ask Claude to work with files, it will use the tool to read, modify, and create files as needed."}),`
`,(0,n.jsx)(r.p,{children:'For example, if you ask Claude to "Open the ./main.py file and summarize its contents", Claude will:'}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Use the text editor tool to view the file"}),`
`,(0,n.jsx)(r.li,{children:"Read the contents"}),`
`,(0,n.jsx)(r.li,{children:"Provide you with a summary"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'You can take this further and ask Claude to modify files. For instance: "Open the ./main.py file and write out a function to calculate pi to the 5th digit. Then create a ./test.py file to test your implementation."'}),`
`,(0,n.jsx)(r.p,{children:"Claude will:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"View the existing main.py file"}),`
`,(0,n.jsx)(r.li,{children:"Replace its contents with a new implementation including the pi calculation function"}),`
`,(0,n.jsx)(r.li,{children:"Create a new test.py file with appropriate unit tests"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"why-use-the-text-editor-tool",children:"Why Use the Text Editor Tool?"}),`
`,(0,n.jsx)(r.p,{children:"You might wonder why this tool exists when modern code editors already have AI assistants built in. The text editor tool becomes valuable in scenarios where:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You're building applications that need to programmatically edit files"}),`
`,(0,n.jsx)(r.li,{children:"You're working in environments without access to full-featured code editors"}),`
`,(0,n.jsx)(r.li,{children:"You want to integrate file editing capabilities directly into your Claude-powered applications"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Essentially, the text editor tool lets you replicate much of the functionality of a fancy AI-powered code editor within your own applications, giving Claude the ability to be a true coding assistant that can read, write, and modify files on your file system."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};