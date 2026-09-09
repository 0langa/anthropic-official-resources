import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";import{t as n}from"../../../../../the-explore-plan-code-commit-workflow-nd43ti8w.js";var r=e();function i(e){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Callout:a,CodePrompt:s,LessonVideo:c}=i;return a||o("Callout",!0),s||o("CodePrompt",!0),c||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{youtubeId:"xJQuF02NAK8",title:"The explore → plan → code → commit workflow",transcript:n,children:(0,r.jsxs)(i.p,{children:[`If you take one thing away from this course, let it be this workflow:
`,(0,r.jsx)(i.strong,{children:"Explore, Plan, Code, and Commit"}),`. Without it, most people jump straight
to asking Claude to write code — which means more course-correcting later
on.`]})}),`
`,(0,r.jsx)(i.h2,{id:"explore-and-plan",children:"Explore and Plan"}),`
`,(0,r.jsxs)(i.p,{children:["The fastest way to handle these first two steps is with ",(0,r.jsx)(i.strong,{children:"Plan Mode"}),". In plan mode, Claude can't edit files — it just reads files to gather information about how it will tackle the implementation."]}),`
`,(0,r.jsxs)(i.p,{children:["To enter plan mode, press ",(0,r.jsx)(i.code,{children:"Shift + Tab"}),' until you see "Plan Mode" under the text input. Then write a prompt like:']}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./7cb40799b30a.jpg",alt:"Claude Code status bar showing plan mode on with shift+tab to cycle"})}),`
`,(0,r.jsx)(s,{children:(0,r.jsx)(i.p,{children:"I need to add WebP conversion to our image upload pipeline. Figure out where in the pipeline it should happen, whether we need new dependencies, and how to approach it."})}),`
`,(0,r.jsx)(i.p,{children:"Claude will read relevant files, run some web searches, and give you a plan of action. Review it and decide if it meets your criteria. If not, ask it to revise specific areas."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./8c9aa778ca4d.jpg",alt:"Claude Code presenting the plan with options to approve, revise areas, or ask questions"})}),`
`,(0,r.jsx)(i.p,{children:"This is the best place to course-correct because it's before any code is written. You can also run the explore subagent without being in plan mode if you just want a general summary of your codebase without intending to make changes afterward."}),`
`,(0,r.jsx)(i.h2,{id:"code",children:"Code"}),`
`,(0,r.jsx)(i.p,{children:'Once the plan looks good, select "approve" to accept it and let Claude work through the list items. Your permission mode determines how Claude proceeds: it can ask you at each step, auto-accept file edits, or run in auto mode with a background safety check screening each action.'}),`
`,(0,r.jsx)(i.p,{children:`Claude will do its best to troubleshoot before considering the plan "finished," but at times you'll need to step in. This is the benefit of working with Plan Mode — after execution, you also have the context of how you got to the results, which helps guide Claude's next decisions.`}),`
`,(0,r.jsx)(i.p,{children:"A few tips to make the coding phase smoother:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Define a success criteria."}),' For Claude to be confident in its results, it needs to be clear on what "correct" looks like. Make this explicit when writing your plan.']}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Add tools."})," Tools that help Claude complete its goals remove a lot of back and forth. For example, if you're building web UIs, install the Claude in Chrome extension so Claude Code can control a browser tab and test the UI directly."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./bf3b9eb343e3.jpg",alt:"The Claude in Chrome extension page in the Chrome Web Store"})}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Include a test suite."})," Give Claude a test suite it can continuously validate against. Claude can even write tests for you. Before handing this off, make sure the tests are a reliable source of truth to avoid false positives."]}),`
`]}),`
`]}),`
`,(0,r.jsx)(a,{type:"tip",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Quick tip:"})," If you find Claude keeps running into the same issues, ask it to save the solution to its CLAUDE.md file."]})}),`
`,(0,r.jsx)(i.h2,{id:"commit",children:"Commit"}),`
`,(0,r.jsxs)(i.p,{children:["Once you've tested the changes yourself and are happy with the results, it's time to push your code. Before you commit, run a ",(0,r.jsx)(i.strong,{children:"subagent code reviewer"})," to look at your work. A subagent gets a fresh pair of eyes on the codebase — it doesn't carry the bias the main agent might have from the session."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./3d64a0570bf9.jpg",alt:"A code-reviewer subagent running in Claude Code, reading files and reviewing recent changes"})}),`
`,(0,r.jsx)(i.p,{children:"Then get Claude to generate a commit message in your style. Rinse and repeat."}),`
`,(0,r.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,r.jsx)(i.p,{children:"To be effective with Claude Code, follow the Explore, Plan, Code, and Commit workflow:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Explore"})," gives Claude the relevant context it needs for your project."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Plan"})," creates a plan of action that Claude uses to measure success."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Code"})," is the back and forth between you and Claude before settling on the final outcome."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Commit"})," helps you review and push your code so you can start on your next feature."]}),`
`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};