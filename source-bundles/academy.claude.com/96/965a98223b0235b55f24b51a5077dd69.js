import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"We're going to build a CLI-based chatbot to better understand how MCP clients and servers work together. This hands-on project will give you practical experience with both sides of the MCP architecture."}),`
`,(0,n.jsx)(r.p,{children:"When the setup is done, you should be able to do two things: say what the client does and what the server does, and tell whether a reply came through a tool or straight from the model."}),`
`,(0,n.jsx)(r.h2,{id:"what-were-building",children:"What We're Building"}),`
`,(0,n.jsx)(r.p,{children:"Our chatbot will allow users to interact with a collection of documents through a command-line interface. The system consists of two main components:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"An MCP client that handles user interactions"}),`
`,(0,n.jsx)(r.li,{children:"A custom MCP server that manages document operations"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d0ad72fc54e4.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The server will provide two essential tools: one for reading document contents and another for updating them. All documents will be stored in memory for simplicity - no database required."}),`
`,(0,n.jsx)(r.h2,{id:"important-architecture-note",children:"Important Architecture Note"}),`
`,(0,n.jsx)(r.p,{children:"In real-world projects, you typically implement either an MCP client or an MCP server, not both. You might create:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"An MCP server to expose your service to other developers"}),`
`,(0,n.jsx)(r.li,{children:"An MCP client to connect to existing MCP servers"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7bfe22eedd2e.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"We're building both components in this project purely for educational purposes - to understand how they communicate and work together."}),`
`,(0,n.jsx)(r.h2,{id:"project-setup",children:"Project Setup"}),`
`,(0,n.jsxs)(r.p,{children:["Download the ",(0,n.jsx)(r.code,{children:"cli_project.zip"})," file attached to this lesson and extract it to your preferred development directory. Open your code editor in the project folder."]}),`
`,(0,n.jsx)(r.p,{children:"The project includes a comprehensive README file with setup instructions. Follow these steps:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Add your Anthropic API key to the ",(0,n.jsx)(r.code,{children:".env"})," file"]}),`
`,(0,n.jsx)(r.li,{children:"Install dependencies using either UV (recommended) or pip"}),`
`,(0,n.jsx)(r.li,{children:"Run the starter application to verify everything works"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"running-the-application",children:"Running the Application"}),`
`,(0,n.jsxs)(r.p,{children:["Navigate to your project directory in the terminal. You'll see the main project files including ",(0,n.jsx)(r.code,{children:"main.py"}),", ",(0,n.jsx)(r.code,{children:"mcp_client.py"}),", and ",(0,n.jsx)(r.code,{children:"mcp_server.py"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"To start the application, use one of these commands:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`# If using UV (recommended)
uv run main.py

# If using standard Python
python main.py
`})}),`
`,(0,n.jsx)(r.p,{children:"When the application starts successfully, you'll see a chat prompt."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Check the baseline yourself."}),` Type a question you can verify on sight, like "what's 1+1?". Don't settle for a reply appearing: confirm the answer is actually 2. A correct reply proves your API key, dependencies, and chat loop all work.`]}),`
`,(0,n.jsx)(r.p,{children:`Then type a second question, something like "what do the documents say?". Whatever comes back, it can't have come from the document tools, because you haven't built them yet. The reply is the model answering on its own. Notice which component will own that work once it exists: the server manages document operations, and the client handles your side of the conversation.`}),`
`,(0,n.jsx)(r.p,{children:"The habit behind this check: match how carefully you verify to the cost of being wrong. A broken setup here costs you every later lesson built on top of it; checking costs two questions."}),`
`,(0,n.jsx)(r.h2,{id:"a-check-worth-keeping",children:"A check worth keeping"}),`
`,(0,n.jsx)(r.p,{children:"The behavior to carry beyond this project: every time you add a new layer to an API project, whether a tool, a data source, or an MCP server, ask the running system one question whose answer you already know before you build the next layer. A baseline you have verified is the only baseline you can debug against."}),`
`,(0,n.jsx)(r.p,{children:"With the basic setup complete, we're ready to start implementing MCP features and exploring how clients and servers communicate through the Model Context Protocol."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};