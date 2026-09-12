import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"We're going to build a CLI-based chatbot that demonstrates how MCP clients and servers work together. This hands-on project will give you practical experience with both sides of the MCP architecture."}),`
`,(0,n.jsx)(r.h2,{id:"what-were-building",children:"What We're Building"}),`
`,(0,n.jsx)(r.p,{children:"Our chatbot will allow users to interact with a collection of documents through natural language. The system consists of two main components:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"An MCP client that handles user interactions and communicates with Claude"}),`
`,(0,n.jsx)(r.li,{children:"An MCP server that provides tools for reading and updating documents"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./64226d5d22db.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The server will expose two tools to Claude:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Tool to read a document's contents"}),`
`,(0,n.jsx)(r.li,{children:"Tool to update a document's contents"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"All documents are stored in memory for simplicity - they include files like document.pdf, spreadsheet.xlsx, report.txt, and spec.md."}),`
`,(0,n.jsx)(r.h2,{id:"important-architecture-note",children:"Important Architecture Note"}),`
`,(0,n.jsx)(r.p,{children:"In real-world projects, you typically implement either an MCP client or an MCP server, not both. You might build:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Just an MCP server to expose your service's capabilities to AI models"}),`
`,(0,n.jsx)(r.li,{children:"Just an MCP client to connect to existing MCP servers built by other developers"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./255c982da243.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"We're building both components in this project purely for educational purposes - to understand how they communicate and work together."}),`
`,(0,n.jsx)(r.h2,{id:"project-setup",children:"Project Setup"}),`
`,(0,n.jsx)(r.p,{children:"Download the CLI_project.zip file attached to this video and extract it to your preferred development directory. Open your code editor in the project folder."}),`
`,(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),`
`,(0,n.jsx)(r.p,{children:"The project includes a README.md file with detailed setup instructions. You'll need to:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Add your Anthropic API key to the .env file"}),`
`,(0,n.jsx)(r.li,{children:"Install dependencies using either UV (recommended) or pip"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./81b4c8f43982.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The .env file should contain:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`ANTHROPIC_API_KEY="your-api-key-here"
`})}),`
`,(0,n.jsx)(r.h2,{id:"running-the-project",children:"Running the Project"}),`
`,(0,n.jsx)(r.p,{children:"Once setup is complete, navigate to your project directory in the terminal and run:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`# If using UV (recommended)
uv run main.py

# If using standard Python
python main.py
`})}),`
`,(0,n.jsx)(r.p,{children:`You should see a chat prompt appear. Test it by asking a simple question like "what's 1+1?" to verify everything is working correctly.`}),`
`,(0,n.jsx)(r.p,{children:"The starter project already includes basic chat functionality with Claude. In the following videos, we'll add MCP server capabilities and document management features to create a fully functional document-aware chatbot."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};