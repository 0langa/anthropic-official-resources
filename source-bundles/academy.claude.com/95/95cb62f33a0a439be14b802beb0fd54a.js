import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude Code isn't just a tool for writing code - it's designed to work alongside you throughout every phase of a software project. Think of it as another engineer on your team who can handle everything from initial setup to deployment and support."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./75870c12a77b.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-init-command",children:"The /init Command"}),`
`,(0,n.jsxs)(r.p,{children:["When you start working with Claude Code on a project, the first thing you'll want to do is run the ",(0,n.jsx)(r.code,{children:"/init"})," command. This tells Claude to scan your entire codebase and understand your project's structure, dependencies, coding style, and architecture."]}),`
`,(0,n.jsxs)(r.p,{children:["Claude summarizes everything it learns in a special file called ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),". This file automatically gets included as context in all future conversations, so Claude remembers important details about your project."]}),`
`,(0,n.jsx)(r.p,{children:"You can have multiple CLAUDE.md files for different scopes:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Project"})," - Shared between all engineers working on the project"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Local"})," - Your personal notes that aren't checked into git"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User"})," - Used across all your projects"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["When running ",(0,n.jsx)(r.code,{children:"/init"}),", you can add special directions for areas you want Claude to focus on. The generated file will include build commands, coding guidelines, and project-specific patterns that Claude should follow."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8c58fa208419.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["You can also quickly add notes to your CLAUDE.md file using the ",(0,n.jsx)(r.code,{children:"#"})," command. For example, typing ",(0,n.jsx)(r.code,{children:"# Always use descriptive variable names"})," will prompt you to add this guideline to your project, local, or user memory."]}),`
`,(0,n.jsx)(r.h2,{id:"common-workflows",children:"Common Workflows"}),`
`,(0,n.jsx)(r.p,{children:"Claude works best when you approach it as an effort multiplier. The more context and structure you provide, the better results you'll get. Here's the most effective workflow:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./36bb6cefda97.jpg",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"step-1-feed-context-into-claude",children:"Step 1: Feed Context into Claude"}),`
`,(0,n.jsx)(r.p,{children:"Before asking Claude to build something, identify files in your codebase that are relevant to the feature you want to create. Ask Claude to read and analyze these files first. This gives Claude examples of your coding patterns and existing functionality it can build upon."}),`
`,(0,n.jsx)(r.h3,{id:"step-2-tell-claude-to-plan-a-solution",children:"Step 2: Tell Claude to Plan a Solution"}),`
`,(0,n.jsx)(r.p,{children:"Instead of jumping straight to implementation, ask Claude to think through the problem and create a plan. Tell Claude specifically not to write any code yet - just focus on the approach and steps needed."}),`
`,(0,n.jsx)(r.h3,{id:"step-3-ask-claude-to-implement-the-solution",children:"Step 3: Ask Claude to Implement the Solution"}),`
`,(0,n.jsx)(r.p,{children:"Once you have a solid plan, ask Claude to implement it. Claude will write code based on the context and planning work you've already done together."}),`
`,(0,n.jsx)(r.h2,{id:"test-driven-development-workflow",children:"Test-Driven Development Workflow"}),`
`,(0,n.jsx)(r.p,{children:"For even better results, you can use a test-driven approach:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./782fe3ea4ddc.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Feed context into Claude"})," - Same as before, show Claude relevant files"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude to think of test cases"})," - Have Claude brainstorm what tests would validate your new feature"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude to implement those tests"})," - Select the most relevant tests and have Claude write them"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude to write code that passes the tests"})," - Claude will iterate on the implementation until all tests pass"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This approach often produces more robust code because Claude has clear success criteria to work toward."}),`
`,(0,n.jsx)(r.h2,{id:"practical-example",children:"Practical Example"}),`
`,(0,n.jsx)(r.p,{children:"Here's how these workflows look in practice. Let's say you want to add a document conversion tool to an existing project:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`// First, ask Claude to read relevant files
> Read the math.py and document.py files

// Then ask for planning (not implementation)
> Plan to implement document_path_to_markdown tool:
1. Create a function that:
   - Takes a file path parameter
   - Validates the file exists  
   - Determines file type from extension
   - Reads binary data from file
   - Leverages existing binary_document_to_markdown function
   - Returns markdown string
2. Add appropriate documentation
3. Register the tool with MCP server
4. Add tests

// Finally, ask for implementation
> Implement the plan
`})}),`
`,(0,n.jsx)(r.p,{children:"Claude will then create the function, update the necessary files, write tests, and even run the test suite to verify everything works correctly."}),`
`,(0,n.jsx)(r.h2,{id:"additional-commands",children:"Additional Commands"}),`
`,(0,n.jsx)(r.p,{children:"Claude Code includes several helpful commands:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/clear"})," - Clears conversation history and resets context"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/init"})," - Scans codebase and creates CLAUDE.md documentation"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"#"})," - Adds notes to your CLAUDE.md file"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude can also handle routine development tasks like staging and committing changes to git, running tests, and managing dependencies. Instead of switching between your editor and terminal, you can ask Claude to handle these tasks while you focus on the bigger picture."}),`
`,(0,n.jsx)(r.p,{children:"The key to success with Claude Code is remembering that it's designed to be a collaborative partner, not just a code generator. The more context and structure you provide, the more effectively Claude can help you build and maintain your projects."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};