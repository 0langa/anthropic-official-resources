import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{youtubeId:"IS6larFJBK8",title:"Permission modes",children:[(0,n.jsx)(r.p,{children:`Permission modes let you decide once what Claude is allowed to run without
stopping to ask you. Instead of approving every action one prompt at a
time, you pick a mode that matches the job and let Claude work at the level
of trust you're comfortable with.`}),(0,n.jsx)(r.p,{children:`You've already met a few of these modes. Every time you hit shift-tab, you
cycle through them: manual, accept edits, and plan. Those cover the
everyday, hands-on work. The rest of the modes are where hands-off Claude
Code really lives, and the one to reach for there is auto.`})]}),`
`,(0,n.jsx)(r.h2,{id:"the-six-permission-modes",children:"The six permission modes"}),`
`,(0,n.jsx)(r.p,{children:"Here's the full set. Each mode draws a different line between what runs freely and what needs your sign-off."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Manual"})," reads only, without prompting. Everything else asks first."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Accept edits"})," runs reads, file edits, and common file system bash commands without asking. This is for iterating on code that you review after the fact."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Plan"})," reads only. It researches and proposes changes without editing anything."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Auto"})," accepts everything, with a separate classifier model reviewing each action before it runs."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Don't ask"})," allows only pre-approved tools. Everything else is auto-denied with no prompt."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Bypass permissions"})," skips all checks. This is the equivalent of the dangerously-skip-permissions flag. Only run it inside an isolated container or virtual machine."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"cycling-with-shift-tab",children:"Cycling with shift-tab"}),`
`,(0,n.jsx)(r.p,{children:"You don't need to memorize a command for each mode. Press shift-tab to cycle through the everyday ones: manual, accept edits, plan, and auto. The status bar at the bottom always shows which mode you're currently in, so you can glance down and know exactly what Claude is allowed to do."}),`
`,(0,n.jsx)(r.h2,{id:"how-auto-mode-works",children:"How auto mode works"}),`
`,(0,n.jsx)(r.p,{children:"Auto is the hands-off mode. Claude runs on its own, but before each action executes, a separate classifier model reviews it. The classifier guards intent. It's watching for moves that escalate beyond what you actually asked for."}),`
`,(0,n.jsx)(r.p,{children:"Here's the kind of thing it's designed to block:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Production deploys and migrations"}),`
`,(0,n.jsx)(r.li,{children:"Force pushing, or piping downloaded code straight into a shell"}),`
`,(0,n.jsx)(r.li,{children:"Sending sensitive data to external endpoints"}),`
`,(0,n.jsx)(r.li,{children:"Destroying files that exist for the session"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"And it waves through the everyday work: local edits in your project, installing dependencies from your lock file, read-only requests, and pushing to your own branch."}),`
`,(0,n.jsx)(r.h2,{id:"what-the-classifier-cant-do",children:"What the classifier can't do"}),`
`,(0,n.jsx)(r.p,{children:"The classifier checks intent, not correctness. It won't catch whether the code actually works. So if you ask Claude to refactor authentication and it writes broken authentication, the classifier waves it through, because broken isn't dangerous."}),`
`,(0,n.jsx)(r.p,{children:"That's why you pair auto mode with a stop hook that runs your tests. The two work together:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Auto mode watches what Claude is ",(0,n.jsx)(r.em,{children:"trying"})," to do while it runs."]}),`
`,(0,n.jsx)(r.li,{children:"The stop hook confirms the code actually runs once Claude finishes."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"One guards intent before each action, the other guards correctness after. Auto mode's guardrails are still evolving, so check the docs for the current block and allow lists."}),`
`,(0,n.jsx)(r.h2,{id:"dont-ask-for-unattended-runs",children:"Don't ask, for unattended runs"}),`
`,(0,n.jsx)(r.p,{children:"Don't ask is the right move whenever no human is around to approve prompts: CI pipelines, scheduled jobs, overnight batches. Only pre-approved tools are allowed, and anything off that list gets auto-denied with no prompt. That's the whole point. Your pipeline keeps moving instead of hanging on an approval no one is there to give."}),`
`,(0,n.jsx)(r.h2,{id:"match-the-mode-to-the-job",children:"Match the mode to the job"}),`
`,(0,n.jsx)(r.p,{children:"There are several permission modes, and you reach the everyday ones by cycling shift-tab. To sum it up:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Auto"})," is the hands-off mode. The classifier checks intent before each action, and a stop hook checks correctness after."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Don't ask"})," covers unattended pipelines where no one is there to approve."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Bypass permissions"})," belongs only inside isolated containers and VMs."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Pick the mode that fits what you're doing, and let Claude run at that level."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};