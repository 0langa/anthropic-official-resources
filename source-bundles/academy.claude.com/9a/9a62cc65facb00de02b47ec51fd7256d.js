import{Qp as e,em as t}from"../../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{youtubeId:"sXonYL7kAoc",title:"Trust it: Verifying unsupervised runs",children:[(0,n.jsx)(r.p,{children:`You handed Claude a task and let it run without watching every step. Now it
says it's done. Before you ship that work, you need a way to check
something you didn't even supervise. That check is what makes hands-off
Claude Code safe to rely on.`}),(0,n.jsx)(r.p,{children:`The idea here is simple: verify in proportion to how much rope you gave the
run. If you watched the messages scroll by in a short session, a quick
glance is enough. But an unattended run, or a job that fired in continuous
integration with nobody in the loop, needs a real check. No one saw what
happened, so you have to reconstruct it after the fact.`}),(0,n.jsx)(r.p,{children:"Here's a way to picture it. The less you watched, the more you verify."})]}),`
`,(0,n.jsx)(r.h2,{id:"keep-unattended-runs-in-auto-mode",children:"Keep unattended runs in auto mode"}),`
`,(0,n.jsx)(r.p,{children:"When a run goes unattended at work, keep it in auto mode rather than bypass permissions. In auto mode, the classifier still reviews each action for danger. That's a safety net worth keeping."}),`
`,(0,n.jsx)(r.p,{children:"But be clear about what that net does and doesn't do. The classifier never judges whether the code is actually correct. It only flags dangerous actions. So your verification bar stays exactly where it was. Set that bar based on how unsupervised the run was."}),`
`,(0,n.jsx)(r.h2,{id:"start-with-the-diff-not-the-summary",children:"Start with the diff, not the summary"}),`
`,(0,n.jsx)(r.p,{children:"Don't start with Claude's summary of what it did. Start with the diff itself."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Run ",(0,n.jsx)(r.code,{children:"/code-review"})," to walk the changes and flag issues."]}),`
`,(0,n.jsxs)(r.li,{children:["Then put your own eyes on ",(0,n.jsx)(r.code,{children:"git diff"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The trap is a tidy summary that reads perfectly fine, while the actual diff touched a file you honestly didn't expect it to touch. The summary won't tell you that. The diff will."}),`
`,(0,n.jsx)(r.p,{children:"So read what changed. Read the files that were part of the plan first, then look for anything outside it. A clean write-up is not proof of clean code."}),`
`,(0,n.jsx)(r.h2,{id:"turn-tests-into-a-gate-not-a-promise",children:"Turn tests into a gate, not a promise"}),`
`,(0,n.jsx)(r.p,{children:"The real gate on an unsupervised run is whether the tests passed, and whether Claude actually ran them or only claimed that it did. Don't leave that to trust. Wire it as a hook so Claude can't skip it."}),`
`,(0,n.jsx)(r.p,{children:"A couple of hooks do the job:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"stop hook"})," that runs your tests and refuses to end the turn on a failure."]}),`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"post-tool-use hook"})," that lints and type checks after every edit."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The key detail is the exit code. A hook that exits with ",(0,n.jsx)(r.code,{children:"exit 2"})," feeds the failure straight back to Claude. Claude reads that failure and fixes it without you asking. Best of all, the check fires on every run, whether or not you remember to ask for it."]}),`
`,(0,n.jsx)(r.h2,{id:"get-a-cold-second-opinion",children:"Get a cold second opinion"}),`
`,(0,n.jsx)(r.p,{children:"The sub-agent code review you'd run before a pull request works here too. Point it at an unsupervised run."}),`
`,(0,n.jsx)(r.p,{children:"Open a fresh session or sub-agent and have it review the changed code with no memory of how the code was built. Because it has no stake in the approach, it catches the things the original run talked itself past. A second reviewer with fresh eyes finds what the author rationalized away."}),`
`,(0,n.jsx)(r.h2,{id:"putting-it-together",children:"Putting it together"}),`
`,(0,n.jsx)(r.p,{children:"Make the check as serious as the run was unsupervised:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Read the diff yourself."}),`
`,(0,n.jsx)(r.li,{children:"Turn the tests into a hook that gates the turn."}),`
`,(0,n.jsx)(r.li,{children:"Verify headless runs by their JSON result and exit code."}),`
`,(0,n.jsx)(r.li,{children:"Get a cold second opinion on anything that matters."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Do that, and "Claude did it while I wasn't looking" no longer takes faith.`})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};