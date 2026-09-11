import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude Code isn't just a tool for writing code - it's designed to be your coding partner throughout an entire project lifecycle. From initial setup to deployment and maintenance, Claude can help with every step of software development."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a7b4baf081b4.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-init-command",children:"The /init Command"}),`
`,(0,n.jsxs)(r.p,{children:["When starting with a new project, the ",(0,n.jsx)(r.code,{children:"/init"})," command is your first step. Claude Code will scan your codebase, noting project structure, dependencies, commands, and coding patterns. The findings get summarized in a ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," file that Claude automatically reads in future conversations."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./022421e70b70.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You can have multiple CLAUDE.md files for different scopes:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Project"})," - checked into git, shared between engineers"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Local"})," - not checked into git, your particular notes to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User"})," - used across all projects"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["When running ",(0,n.jsx)(r.code,{children:"/init"}),", you can add special directions for areas you want Claude to focus on. You can also use the ",(0,n.jsx)(r.code,{children:"#"})," shortcut to add quick notes that get appended to your CLAUDE.md file."]}),`
`,(0,n.jsx)(r.h2,{id:"common-workflows",children:"Common Workflows"}),`
`,(0,n.jsx)(r.p,{children:"Claude works best as an effort multiplier. The more context and structure you provide, the better results you'll get. Here are two effective approaches:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4f24df4e60bf.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"planning-first-workflow",children:"Planning-First Workflow"}),`
`,(0,n.jsx)(r.p,{children:"This three-step approach works well for complex features:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Feed context into Claude"})," - Find files relevant to your feature and ask Claude to read them"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tell Claude to plan a solution"})," - Describe what you want built, but specifically ask Claude not to write code yet"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude to implement the solution"})," - Once you have a solid plan, Claude can write code based on the context and planning it already completed"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For example, when building a document conversion tool, you might first ask Claude to examine existing tool examples and helper functions. Then ask it to plan out the implementation steps. Finally, request the actual code implementation."}),`
`,(0,n.jsx)(r.h3,{id:"test-driven-development-workflow",children:"Test-Driven Development Workflow"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./69c44a8412c3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This approach requires more upfront effort but dramatically increases Claude's effectiveness:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Feed context into Claude"})," - Share relevant files for your feature"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude to think of test cases"})," - Tell Claude specifically not to write any code yet"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude to implement those tests"})," - Select only the tests that look relevant to your feature"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask Claude to write code that passes the tests"})," - Claude will iterate on a solution until the tests pass"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This workflow helps ensure your code is robust and handles edge cases you might not have considered initially."}),`
`,(0,n.jsx)(r.h2,{id:"practical-tips",children:"Practical Tips"}),`
`,(0,n.jsx)(r.p,{children:"Claude can handle routine development tasks beyond just writing code. You can ask it to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Set up project environments and install dependencies"}),`
`,(0,n.jsx)(r.li,{children:"Stage and commit changes with descriptive commit messages"}),`
`,(0,n.jsx)(r.li,{children:"Run test suites and interpret results"}),`
`,(0,n.jsxs)(r.li,{children:["Clear conversation history with ",(0,n.jsx)(r.code,{children:"/clear"})," to reset context"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Remember that Claude Code reads your CLAUDE.md file automatically, so any coding standards, project-specific notes, or architectural decisions you document there will influence all future interactions. This makes Claude increasingly effective as it learns more about your project's patterns and requirements."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};