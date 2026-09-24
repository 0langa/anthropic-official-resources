import{Qp as e,em as t}from"../../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"rJOmCMeYTuo",title:"Verification skills",children:(0,n.jsx)(r.p,{children:`As your project grows, you start noticing the same work happening over and
over. You already know skills are a good way to automate repeated work. In
this lesson we look at one specific job that skills are great for:
verifying your own work. If there's one skill worth building first, this
is it.`})}),`
`,(0,n.jsx)(r.h2,{id:"why-a-verification-skill-is-the-one-to-build-first",children:"Why a verification skill is the one to build first"}),`
`,(0,n.jsx)(r.p,{children:"Think about how you normally check Claude's work. You ask it to refactor something, it finishes, and then you have to remember to double-check it. Maybe you ask it to run the tests. Maybe you read the diff yourself. The problem is that the checking depends on you remembering to ask for it. Skip that step once and bad code slips through."}),`
`,(0,n.jsx)(r.p,{children:"A verification skill removes that dependency. Here's the shape of it. You ask Claude to refactor something. When it finishes, the change matches the skill's description, so the skill fires on its own. From there it:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Runs the test suite."}),`
`,(0,n.jsx)(r.li,{children:"Reads the diff."}),`
`,(0,n.jsx)(r.li,{children:"Checks that no test was weakened just to make things pass."}),`
`,(0,n.jsx)(r.li,{children:"Reports pass or fail, with the evidence attached."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The whole flow runs without you asking. The description on the skill is what triggers it, and once triggered it walks the same steps every time."}),`
`,(0,n.jsx)(r.p,{children:`Notice the last check in that chain. It's not enough to run the tests and see green. A test can be quietly loosened so it passes no matter what. So the skill reads the diff and confirms tests weren't weakened. "Done" isn't "the code looks right" from reading the diff alone. Done is the gates being run and observed, with the results stated explicitly.`}),`
`,(0,n.jsx)(r.p,{children:"This same shape carries any procedure your team repeats. A release checklist. A migration recipe. A pre-PR check. The rule of thumb: if you've typed the same multi-step instruction twice, that's a skill."}),`
`,(0,n.jsx)(r.h2,{id:"a-skill-folder-can-hold-more-than-instructions",children:"A skill folder can hold more than instructions"}),`
`,(0,n.jsxs)(r.p,{children:["A skill isn't just a single ",(0,n.jsx)(r.code,{children:"SKILL.md"})," file. The folder around it can carry other things, and this is what makes skills useful for verification."]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Drop a ",(0,n.jsx)(r.code,{children:"reference.md"})," next to ",(0,n.jsx)(r.code,{children:"SKILL.md"})," for detailed material, then link to it from ",(0,n.jsx)(r.code,{children:"SKILL.md"}),". Claude reads it only when it needs that depth. Your main file stays short."]}),`
`,(0,n.jsxs)(r.li,{children:["Put scripts in the folder too. Claude executes them rather than loading their contents into context. That means a skill can carry its own tooling, like a ",(0,n.jsx)(r.code,{children:"check.sh"})," that runs all the gates."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The takeaway: keep ",(0,n.jsx)(r.code,{children:"SKILL.md"})," itself lean. Push the heavy material (the long explanations and the executable scripts) into side files. The lean file describes what to do. The side files hold the depth and the tools."]}),`
`,(0,n.jsx)(r.h2,{id:"which-instruction-surface-owns-which-rule",children:"Which instruction surface owns which rule"}),`
`,(0,n.jsx)(r.p,{children:"By now you've got three places to put instructions, and it's easy to mix them up. Here's a quick way to keep them straight."}),`
`,(0,n.jsxs)(r.p,{children:["Conventions that apply all the time, things like naming rules or where files go, belong in your ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," file. Procedures and reference material tied to a particular kind of task belong in a skill."]}),`
`,(0,n.jsxs)(r.p,{children:["There's a third case. A rule that Claude must not be able to skip belongs in a hook, not in either of the above. That's because ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," and skills are both instructions that Claude follows, while a hook is code that actually runs. If skipping the rule isn't acceptable, don't leave it up to instruction-following."]}),`
`,(0,n.jsx)(r.h2,{id:"the-recap",children:"The recap"}),`
`,(0,n.jsxs)(r.p,{children:["A skill is a folder with a ",(0,n.jsx)(r.code,{children:"SKILL.md"})," inside it: a name, a description that triggers it, and the procedure itself. Only the descriptions load into context until a skill is needed, so there's little cost to packaging every procedure you repeat."]}),`
`,(0,n.jsxs)(r.p,{children:["Start with verification. Build the skill, check it into your project's ",(0,n.jsx)(r.code,{children:".claude/skills"}),", and now the whole team inherits the same move. Everyone's work gets checked the same way, automatically, without anyone having to remember to ask."]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};