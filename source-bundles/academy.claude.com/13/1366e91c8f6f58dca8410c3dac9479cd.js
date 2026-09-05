import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Computer use is a powerful feature that lets Claude interact directly with desktop environments, essentially giving it the ability to control a computer like a human would. This opens up entirely new possibilities for automation, testing, and complex workflows that go beyond simple text generation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4b5ec9792d69.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"what-computer-use-can-do",children:"What Computer Use Can Do"}),`
`,(0,n.jsx)(r.p,{children:"Instead of just describing what to do or generating code, Claude can actually perform tasks by:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Taking screenshots to see what's on screen"}),`
`,(0,n.jsx)(r.li,{children:"Clicking buttons and links"}),`
`,(0,n.jsx)(r.li,{children:"Typing text into forms and applications"}),`
`,(0,n.jsx)(r.li,{children:"Navigating between different applications and browser tabs"}),`
`,(0,n.jsx)(r.li,{children:"Following multi-step processes that require visual feedback"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This makes it particularly valuable for tasks like quality assurance testing, where you need to interact with a user interface and verify that everything works as expected."}),`
`,(0,n.jsx)(r.h2,{id:"real-world-example-automated-qa-testing",children:"Real-World Example: Automated QA Testing"}),`
`,(0,n.jsxs)(r.p,{children:["Here's a practical scenario that shows the power of computer use. Imagine you've built a React component with an autocomplete feature - users can type ",(0,n.jsx)(r.code,{children:"@"})," to mention files or resources. The component seems to work fine at first glance, but you want to thoroughly test it for edge cases."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c476223dcd1d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Rather than manually testing every scenario yourself, you can set up Claude with computer use to handle the QA process. You provide Claude with specific test cases to run:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:'Verify that typing "Did you read @" displays autocomplete options'}),`
`,(0,n.jsx)(r.li,{children:"Test that pressing Enter properly adds a mention to the text area"}),`
`,(0,n.jsx)(r.li,{children:"Check that pressing backspace after adding mentions shows the autocomplete list in the correct position"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./550676db0431.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude will systematically work through each test case, taking screenshots, interacting with the interface, and documenting what happens. In this example, Claude discovered that while the first two tests passed, the third one failed - the autocomplete dropdown was appearing in the wrong location when users pressed backspace."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7644029498ff.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-the-testing-process-works",children:"How the Testing Process Works"}),`
`,(0,n.jsx)(r.p,{children:"When you give Claude a testing task, it follows a structured approach:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Opens a browser and navigates to your application"}),`
`,(0,n.jsx)(r.li,{children:"Executes each test case step by step"}),`
`,(0,n.jsx)(r.li,{children:"Takes screenshots to verify visual behavior"}),`
`,(0,n.jsx)(r.li,{children:"Refreshes the page between tests to ensure clean state"}),`
`,(0,n.jsx)(r.li,{children:"Documents results with specific details about what passed or failed"}),`
`,(0,n.jsx)(r.li,{children:"Provides a summary report with actionable findings"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key advantage is that Claude can catch issues you might miss during manual testing, and it can run the same tests consistently every time you make changes to your code."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-computer-use",children:"Setting Up Computer Use"}),`
`,(0,n.jsx)(r.p,{children:"Computer use runs in an isolated environment for security. The typical setup involves:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A Docker container running a desktop environment"}),`
`,(0,n.jsx)(r.li,{children:"A browser instance that Claude can control"}),`
`,(0,n.jsx)(r.li,{children:"A chat interface where you give Claude instructions"}),`
`,(0,n.jsx)(r.li,{children:"Complete isolation from your main system"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This isolation is crucial because it means Claude can interact with applications and websites without any risk to your personal data or system security."}),`
`,(0,n.jsx)(r.h2,{id:"best-practices-for-computer-use",children:"Best Practices for Computer Use"}),`
`,(0,n.jsx)(r.p,{children:"When working with computer use, keep these guidelines in mind:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Be specific about what you want Claude to test or accomplish"}),`
`,(0,n.jsx)(r.li,{children:"Provide clear success criteria for each task"}),`
`,(0,n.jsx)(r.li,{children:"Break complex workflows into smaller, manageable steps"}),`
`,(0,n.jsx)(r.li,{children:"Always run computer use in isolated environments"}),`
`,(0,n.jsx)(r.li,{children:"Review Claude's findings and verify important results manually"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Computer use represents a significant step forward in AI capabilities, moving from generating text about tasks to actually performing them. Whether you're doing QA testing, automating repetitive workflows, or exploring complex applications, it can save substantial time while providing consistent, documented results."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};