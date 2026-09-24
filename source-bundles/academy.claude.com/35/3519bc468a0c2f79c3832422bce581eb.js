import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Important Note: Up-to-date tool ID's for the text editor tool can be found in the AWS documentation here:"})," ",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-anthropic-claude-messages-tool-use.html#model-parameters-anthropic-anthropic-defined-tools",children:(0,n.jsx)(r.strong,{children:"https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-anthropic-claude-messages-tool-use.html#model-parameters-anthropic-anthropic-defined-tools"})})]}),`
`,(0,n.jsx)(r.p,{children:"The Text Editor Tool is Claude's built-in capability that gives it file system access and text editing abilities. Unlike other tools where you write both the schema and implementation, Claude already knows how to request text editor operations - you just need to handle those requests."}),`
`,(0,n.jsx)(r.h2,{id:"what-the-text-editor-tool-does",children:"What the Text Editor Tool Does"}),`
`,(0,n.jsx)(r.p,{children:"This tool gives Claude the ability to work with files and directories like a software engineer would:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"View file or directory contents"}),`
`,(0,n.jsx)(r.li,{children:"View specific ranges of lines in a file"}),`
`,(0,n.jsx)(r.li,{children:"Replace text in files"}),`
`,(0,n.jsx)(r.li,{children:"Create new files"}),`
`,(0,n.jsx)(r.li,{children:"Insert text at specific line numbers"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-it-works",children:"How It Works"}),`
`,(0,n.jsx)(r.p,{children:"The Text Editor Tool is different from custom tools because only the JSON schema is built into Claude. You still need to provide the actual implementation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bdd9c2ad3349.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you create custom tools, you write both sides - the schema that tells Claude about the tool, and the function that actually does the work. With the Text Editor Tool, Claude already has the schema, but you must write functions to handle Claude's requests to view, edit, or create files."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-tool",children:"Setting Up the Tool"}),`
`,(0,n.jsx)(r.p,{children:"To use the Text Editor Tool, you need to provide the tool version that matches your model:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# For Claude 4 and later models
text_editor = "text_editor_20250728"

# For earlier Claude models
text_editor = "text_editor_20250124"
`})}),`
`,(0,n.jsxs)(r.p,{children:["The rest of this lesson uses the Claude 4 and later version; with ",(0,n.jsx)(r.code,{children:"text_editor_20250124"})," the tool name is ",(0,n.jsx)(r.code,{children:"str_replace_editor"})," instead, and an ",(0,n.jsx)(r.code,{children:"undo_edit"})," command also exists."]}),`
`,(0,n.jsx)(r.p,{children:"You'll also need to modify your chat function to accept the text editor parameter and include it in the model configuration."}),`
`,(0,n.jsx)(r.h2,{id:"tool-commands",children:"Tool Commands"}),`
`,(0,n.jsx)(r.p,{children:"When Claude wants to use the text editor, it sends back tool use requests with specific commands:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./613a033d723b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Your implementation needs to handle all four commands: view, str_replace, create, and insert. Here's the basic structure for processing these requests:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tool(tool_name, tool_input):
    if tool_name == "str_replace_based_edit_tool":
        command = tool_input.get("command", "")
        if command == "view":
            path = tool_input.get("path", "")
            return text_editor_tool.view(path)
        elif command == "str_replace":
            path = tool_input.get("path", "")
            old_str = tool_input.get("old_str", "")
            new_str = tool_input.get("new_str", "")
            return text_editor_tool.str_replace(path, old_str, new_str)
        # ... handle other commands
`})}),`
`,(0,n.jsx)(r.h2,{id:"example-file-analysis",children:"Example: File Analysis"}),`
`,(0,n.jsx)(r.p,{children:`Here's how the tool works in practice. When you ask Claude to "Write a one sentence description of the code in the ./main.py file", this happens:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a78ad2fdb433.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Claude sends a tool use request with ",(0,n.jsx)(r.code,{children:'{"command": "view", "path": "./main.py"}'}),". Your server uses the TextEditorTool class to read the file and returns the contents. Claude then provides its analysis based on the code it read."]}),`
`,(0,n.jsx)(r.h2,{id:"practical-applications",children:"Practical Applications"}),`
`,(0,n.jsx)(r.p,{children:"The Text Editor Tool essentially turns Claude into a code assistant that can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Read existing code and provide analysis"}),`
`,(0,n.jsx)(r.li,{children:"Create new files and functions"}),`
`,(0,n.jsx)(r.li,{children:"Modify existing code"}),`
`,(0,n.jsx)(r.li,{children:"Set up test files"}),`
`,(0,n.jsx)(r.li,{children:"Refactor code across multiple files"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'For example, you could ask Claude to "write a function to calculate pi to the 5th digit in main.py, then create a test.py file to test it." Claude will read the existing file, add the new function, create the test file, and write comprehensive tests - all automatically using the text editor commands.'}),`
`,(0,n.jsx)(r.p,{children:"This makes it possible to build AI-powered development tools similar to modern code editors with integrated AI features, where you can ask for code changes and have them implemented directly in your file system."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};