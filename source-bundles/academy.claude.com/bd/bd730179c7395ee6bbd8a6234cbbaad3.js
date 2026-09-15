import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{CodeCommand:i,LessonVideo:o}=r;return i||a("CodeCommand",!0),o||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o,{youtubeId:"RWH3Z0ROCVc",title:"Steering long sessions",children:[(0,n.jsx)(r.p,{children:`Prompting Claude to knock out a quick task is easy. You ask, it works, you
check the result. But long tasks are a different game. Refactoring across a
dozen files or building out a new feature can take hours. And the more you
have to steer Claude along the way, the longer it drags on.`}),(0,n.jsx)(r.p,{children:`The good news is that you have a lot of tools to help Claude during these
long sessions. It really comes down to two habits: scope the work before
Claude starts, and steer it while it runs. Let's walk through both.`})]}),`
`,(0,n.jsx)(r.h2,{id:"scope-the-work-first-with-plan-mode",children:"Scope the work first with plan mode"}),`
`,(0,n.jsx)(r.p,{children:"Before Claude writes a single line, get it to lay out a plan. In plan mode, Claude does its research in read-only mode. It reads the code, figures out what needs to change, and hands you a plan to review."}),`
`,(0,n.jsx)(r.p,{children:"When you get that plan, actually read it. Don't skim it. The more thorough the plan, the fewer surprises you'll hit once Claude starts executing. If something's off or missing, just ask Claude to add it where you want. Iterating on a plan is much faster than letting Claude run and hoping for the best, then cleaning up the mess."}),`
`,(0,n.jsx)(r.h2,{id:"steer-while-claude-works",children:"Steer while Claude works"}),`
`,(0,n.jsx)(r.p,{children:"Once Claude is running, you have a few ways to keep it pointed in the right direction. The first is compaction."}),`
`,(0,n.jsx)(r.h3,{id:"compact",children:"Compact"}),`
`,(0,n.jsx)(r.p,{children:"Compact summarizes your conversation, uses that summary as the new context, and deletes the old messages. This frees up your context window so Claude can keep going. The risk is that something important gets dropped in the summary, and Claude drifts off course."}),`
`,(0,n.jsxs)(r.p,{children:["So don't just run ",(0,n.jsx)(r.code,{children:"/compact"})," on its own. Add instructions after the command to tell Claude how to summarize. For example, if you finished debugging a while back and now you only care about some API changes, say so:"]}),`
`,(0,n.jsx)(i,{children:"/compact Focus on the --version flag implementation"}),`
`,(0,n.jsx)(r.p,{children:"Anything you write after the command shapes what the summary keeps. That's your steering wheel for context."}),`
`,(0,n.jsx)(r.h3,{id:"rewind",children:"Rewind"}),`
`,(0,n.jsx)(r.p,{children:"When Claude heads down the wrong path, you don't have to prompt your way back out. Rewind takes you to your last checkpoint. Every user prompt creates a checkpoint you can revert to. To open the menu, double tap escape on an empty prompt."}),`
`,(0,n.jsx)(r.p,{children:"From the rewind menu you get a few options:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Restore code and conversation"})," - roll back both together."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Restore conversation"})," - roll back just the chat."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Restore code"})," - roll back just the files."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Summarize from here"})," - summarizes everything after the checkpoint. Great if you had a side conversation and just want to free up some space."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Summarize up to here"})," - summarizes everything before the checkpoint. Great when you had a long setup phase you want to compress, but you want to keep the implementation parts intact."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"let-claude-run-more-autonomously",children:"Let Claude run more autonomously"}),`
`,(0,n.jsx)(r.p,{children:"Everything so far assumes you're hands-on, watching and correcting. If you want something more autonomous, there's goal and loop."}),`
`,(0,n.jsx)(r.h3,{id:"goal",children:"Goal"}),`
`,(0,n.jsx)(r.p,{children:`Goal sets a completion condition. You describe what "done" looks like, and Claude keeps working across turns until a fast evaluator confirms those conditions are met. It won't just stop the first time it thinks it's finished.`}),`
`,(0,n.jsx)(r.p,{children:"For example:"}),`
`,(0,n.jsx)(i,{children:"/goal all tests in src/billing pass, and the type checker reports zero errors"}),`
`,(0,n.jsxs)(r.p,{children:["To cancel it, run ",(0,n.jsx)(r.code,{children:"/goal clear"}),". One important constraint: the evaluator only reads the transcript. So your condition has to be checkable from the output Claude actually produces, like the results of a test run."]}),`
`,(0,n.jsx)(r.h3,{id:"loop",children:"Loop"}),`
`,(0,n.jsx)(r.p,{children:"Loop runs a prompt on an interval between turns, either fixed or self-paced. Use it to pull something external, like a CI run or a deploy, and act when the state changes."}),`
`,(0,n.jsx)(r.p,{children:"To stop a loop, just press escape."}),`
`,(0,n.jsx)(r.h2,{id:"run-parallel-work-with-worktrees",children:"Run parallel work with worktrees"}),`
`,(0,n.jsx)(r.p,{children:"The steering metaphor so far assumes one steering wheel in one car. But when you're running multiple agents on the same codebase, you don't want two steering wheels in one car. That's unsafe. Two Claude sessions fighting over the same files leads to conflicts."}),`
`,(0,n.jsx)(r.p,{children:"That's where worktrees come in. Instead of sessions stepping on each other, each one gets its own independent file tree."}),`
`,(0,n.jsx)(r.p,{children:"Because each agent has its own tree, they can't clobber each other's changes. When a session exits, a clean worktree is automatically removed."}),`
`,(0,n.jsxs)(r.p,{children:["There's one helpful file to know about. A ",(0,n.jsx)(r.code,{children:".worktreeinclude"})," file at the repo root lists git-ignored files to copy into each worktree. This is useful for things like an environment variable file or a local config that you need in every worktree but don't want to commit to version control."]}),`
`,(0,n.jsx)(r.h2,{id:"putting-it-together",children:"Putting it together"}),`
`,(0,n.jsx)(r.p,{children:"Handling long Claude Code sessions comes down to a handful of habits:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Scope your work first, then steer."}),`
`,(0,n.jsx)(r.li,{children:"Direct your compaction so the summary keeps what matters."}),`
`,(0,n.jsx)(r.li,{children:"Use the rewind menu to course correct when Claude drifts."}),`
`,(0,n.jsx)(r.li,{children:'Set a goal when you can describe "done" better than you can describe the steps.'}),`
`,(0,n.jsx)(r.li,{children:"Run parallel work in worktrees."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Do that, and you can trust a long run without babysitting every step of it."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};