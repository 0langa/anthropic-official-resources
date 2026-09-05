import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";var n=t(),r=`# The explore → plan → code → commit workflow

If you take one thing away from Claude Code, let it be this workflow. Explore, plan, code, and commit. Without this, most people jump straight to asking Claude to write code, which means more course correcting later on.

The fastest way to handle step one and two is with plan mode. With plan mode, Claude can't edit files. It just reads files to gather research on how to tackle its implementation. To enter plan mode, hit shift and tab until you see the plan mode under the text input. I need to add WebP conversion to our image upload pipeline. Figure out where in the pipeline it should happen, whether we need new dependencies and how to approach it. And Claude will read relevant files, do some web searches and give you a plan of action. Make sure you review it and determine if it meets your criteria. Otherwise, you can ask it to add on or revise some areas. Perfect. And this right here is the best place to course correct because it's before any code is written. You can also use Explore without being in plan mode by just asking Claude to explore your code base.

Now, once the plan looks good, you can select approve to accept the plan and let Claude tackle all the list items it provided. You can determine if you want Claude to auto-accept the file edits or ask every single time. Claude will do its best to troubleshoot your codebase before considering the plan finished, but at times you'll need to course correct. This is the benefit of working with plan mode, because after the plan is finished, we also have the context of how it got to the results to help it guide its next decision.

In order for Claude to be confident in its results, it has to be clear on what it deems correct. When writing your plan, make this explicit. Adding tools that will help Claude complete its goals will remove a lot of back and forth. For example, if you're building web UIs, make sure you have the Claude in Chrome extension so that Claude Code can control a tab and test out the UI before deeming it finished. In your project, include a test suite that Claude can continuously validate on. Claude can even write tests for you. Before passing this off to Claude, make sure that the tests are a source of truth for you and your team to avoid any false positives. Quick tip, if you find Claude keeps running into these same issues, ask Claude to save the solution to its CLAUDE.md file.

Now, once you have tested for yourself and are happy with the results, it's time to push your code. A tip before you commit, run a subagent code reviewer to look at your code. Then you get Claude to generate a commit message for you in your style. Rinse and repeat.

If you want to be effective with Claude Code, follow the explore, plan, code, and commit workflow. Exploration will give the relevant context Claude needs for your project. Plan will create a plan of action that Claude will use to determine if they are successful. Code is the back and forth that you and Claude do before settling on the final outcomes of the plan. Commit helps you review and push your code so you can start on your next feature.
`;function i(t){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Callout:a,CodePrompt:s,LessonVideo:c}=i;return a||o("Callout",!0),s||o("CodePrompt",!0),c||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{youtubeId:"xJQuF02NAK8",title:"The explore → plan → code → commit workflow",transcript:r,children:(0,n.jsxs)(i.p,{children:[`If you take one thing away from this course, let it be this workflow:
`,(0,n.jsx)(i.strong,{children:"Explore, Plan, Code, and Commit"}),`. Without it, most people jump straight
to asking Claude to write code — which means more course-correcting later
on.`]})}),`
`,(0,n.jsx)(i.h2,{id:"explore-and-plan",children:"Explore and Plan"}),`
`,(0,n.jsxs)(i.p,{children:["The fastest way to handle these first two steps is with ",(0,n.jsx)(i.strong,{children:"Plan Mode"}),". In plan mode, Claude can't edit files — it just reads files to gather information about how it will tackle the implementation."]}),`
`,(0,n.jsxs)(i.p,{children:["To enter plan mode, press ",(0,n.jsx)(i.code,{children:"Shift + Tab"}),' until you see "Plan Mode" under the text input. Then write a prompt like:']}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./7cb40799b30a.jpg",alt:"Claude Code status bar showing plan mode on with shift+tab to cycle"})}),`
`,(0,n.jsx)(s,{children:(0,n.jsx)(i.p,{children:"I need to add WebP conversion to our image upload pipeline. Figure out where in the pipeline it should happen, whether we need new dependencies, and how to approach it."})}),`
`,(0,n.jsx)(i.p,{children:"Claude will read relevant files, run some web searches, and give you a plan of action. Review it and decide if it meets your criteria. If not, ask it to revise specific areas."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./8c9aa778ca4d.jpg",alt:"Claude Code presenting the plan with options to approve, revise areas, or ask questions"})}),`
`,(0,n.jsx)(i.p,{children:"This is the best place to course-correct because it's before any code is written. You can also run the explore subagent without being in plan mode if you just want a general summary of your codebase without intending to make changes afterward."}),`
`,(0,n.jsx)(i.h2,{id:"code",children:"Code"}),`
`,(0,n.jsx)(i.p,{children:'Once the plan looks good, select "approve" to accept it and let Claude work through the list items. Your permission mode determines how Claude proceeds: it can ask you at each step, auto-accept file edits, or run in auto mode with a background safety check screening each action.'}),`
`,(0,n.jsx)(i.p,{children:`Claude will do its best to troubleshoot before considering the plan "finished," but at times you'll need to step in. This is the benefit of working with Plan Mode — after execution, you also have the context of how you got to the results, which helps guide Claude's next decisions.`}),`
`,(0,n.jsx)(i.p,{children:"A few tips to make the coding phase smoother:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Define a success criteria."}),' For Claude to be confident in its results, it needs to be clear on what "correct" looks like. Make this explicit when writing your plan.']}),`
`]}),`
`,(0,n.jsxs)(i.li,{children:[`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Add tools."})," Tools that help Claude complete its goals remove a lot of back and forth. For example, if you're building web UIs, install the Claude in Chrome extension so Claude Code can control a browser tab and test the UI directly."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./bf3b9eb343e3.jpg",alt:"The Claude in Chrome extension page in the Chrome Web Store"})}),`
`]}),`
`,(0,n.jsxs)(i.li,{children:[`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Include a test suite."})," Give Claude a test suite it can continuously validate against. Claude can even write tests for you. Before handing this off, make sure the tests are a reliable source of truth to avoid false positives."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(a,{type:"tip",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Quick tip:"})," If you find Claude keeps running into the same issues, ask it to save the solution to its CLAUDE.md file."]})}),`
`,(0,n.jsx)(i.h2,{id:"commit",children:"Commit"}),`
`,(0,n.jsxs)(i.p,{children:["Once you've tested the changes yourself and are happy with the results, it's time to push your code. Before you commit, run a ",(0,n.jsx)(i.strong,{children:"subagent code reviewer"})," to look at your work. A subagent gets a fresh pair of eyes on the codebase — it doesn't carry the bias the main agent might have from the session."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./3d64a0570bf9.jpg",alt:"A code-reviewer subagent running in Claude Code, reading files and reviewing recent changes"})}),`
`,(0,n.jsx)(i.p,{children:"Then get Claude to generate a commit message in your style. Rinse and repeat."}),`
`,(0,n.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsx)(i.p,{children:"To be effective with Claude Code, follow the Explore, Plan, Code, and Commit workflow:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Explore"})," gives Claude the relevant context it needs for your project."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Plan"})," creates a plan of action that Claude uses to measure success."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Code"})," is the back and forth between you and Claude before settling on the final outcome."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Commit"})," helps you review and push your code so you can start on your next feature."]}),`
`]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};