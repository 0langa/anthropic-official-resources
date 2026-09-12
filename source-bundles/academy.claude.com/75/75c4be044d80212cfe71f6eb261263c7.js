import{em as e,nm as t}from"../../../../../content-de-meta-ifw6afqc.js";import{t as n}from"../../../../../troubleshooting-skills-gvesvji1.js";var r=e();function i(e){let i={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"troubleshooting-skills",children:"Troubleshooting skills"}),`
`,(0,r.jsx)(a,{youtubeId:"YBa1cwaG7is",title:"Troubleshooting skills",duration:"4 min",transcript:n,children:(0,r.jsxs)(i.p,{children:[`When skills don't work as expected, the problem usually falls into a few
predictable categories. This video walks through each one — from skills
that don't trigger to priority conflicts to runtime failures — and gives
you a systematic troubleshooting approach. You'll also learn about the
skills validator tool and how to use `,(0,r.jsx)(i.code,{children:"claude --debug"}),` to diagnose loading
issues.`]})}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:["Start with the ",(0,r.jsx)(i.strong,{children:"skills validator tool"})," — it catches structural problems before you spend time debugging other things"]}),`
`,(0,r.jsxs)(i.li,{children:["If a skill ",(0,r.jsx)(i.strong,{children:"doesn't trigger"}),", the cause is almost always the description — add trigger phrases that match how you actually phrase requests"]}),`
`,(0,r.jsxs)(i.li,{children:["If a skill ",(0,r.jsx)(i.strong,{children:"doesn't load"}),", check that ",(0,r.jsx)(i.code,{children:"SKILL.md"})," is inside a named directory (not at the skills root) and the file name is exactly ",(0,r.jsx)(i.code,{children:"SKILL.md"})]}),`
`,(0,r.jsxs)(i.li,{children:["If the ",(0,r.jsx)(i.strong,{children:"wrong skill gets used"}),", your descriptions are too similar — make them more distinct"]}),`
`,(0,r.jsxs)(i.li,{children:["For ",(0,r.jsx)(i.strong,{children:"runtime errors"}),", check dependencies, file permissions (",(0,r.jsx)(i.code,{children:"chmod +x"}),"), and path separators (use forward slashes everywhere)"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"When skills don't work, the problem usually falls into one of a few categories: the skill doesn't trigger, doesn't load, has conflicts, or fails at runtime. The good news is that most fixes are pretty straightforward."}),`
`,(0,r.jsx)(i.h2,{id:"use-the-skills-validator",children:"Use the Skills Validator"}),`
`,(0,r.jsxs)(i.p,{children:["The first thing to try is the agent skills verifier command. Installation steps vary by operating system, but using ",(0,r.jsx)(i.code,{children:"uv"})," is the easiest way to get it set up quickly."]}),`
`,(0,r.jsx)(i.p,{children:"Once installed, either navigate to your skill directory or run the command from anywhere. The validator will catch structural problems before you spend time debugging other things."}),`
`,(0,r.jsx)(i.h2,{id:"skill-doesnt-trigger",children:"Skill Doesn't Trigger"}),`
`,(0,r.jsx)(i.p,{children:"Your skill exists and passes validation, but Claude isn't using it when you expect. The cause is almost always the description."}),`
`,(0,r.jsx)(i.p,{children:"Claude uses semantic matching, so your request needs to overlap with the description's meaning. If there's not enough overlap, no match. Here's what to do:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Check your description against how you're actually phrasing requests"}),`
`,(0,r.jsx)(i.li,{children:"Add trigger phrases users would actually say"}),`
`,(0,r.jsx)(i.li,{children:'Test with variations like "help me profile this," "why is this slow?", "make this faster"'}),`
`,(0,r.jsx)(i.li,{children:"If any variation fails to trigger, add those keywords to your description"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"skill-doesnt-load",children:"Skill Doesn't Load"}),`
`,(0,r.jsx)(i.p,{children:`If your skill doesn't appear when you ask Claude "what skills are available," check these structural requirements:`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file must be inside a named directory, not at the skills root"]}),`
`,(0,r.jsxs)(i.li,{children:["The file name must be exactly ",(0,r.jsx)(i.code,{children:"SKILL.md"}),' — all caps on "SKILL", lowercase "md"']}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:["Run ",(0,r.jsx)(i.code,{children:"claude --debug"})," to see loading errors. Look for messages mentioning your skill name. Sometimes this alone will point you straight to the problem."]}),`
`,(0,r.jsx)(i.h2,{id:"wrong-skill-gets-used",children:"Wrong Skill Gets Used"}),`
`,(0,r.jsx)(i.p,{children:"If Claude uses the wrong skill or seems confused between skills, your descriptions are probably too similar. Make them distinct. Being as specific as possible doesn't just help Claude decide when to use your skill — it also prevents conflicts with other similar-sounding skills."}),`
`,(0,r.jsx)(i.h2,{id:"skill-priority-conflicts",children:"Skill Priority Conflicts"}),`
`,(0,r.jsx)(i.p,{children:"If your personal skill is being ignored, an enterprise or higher-priority skill might have the same name."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./75bd17ace918.png",alt:"The skill priority hierarchy — Enterprise highlighted above Personal, Project, and Plugins — alongside the managed-settings.json file name"})}),`
`,(0,r.jsx)(i.p,{children:`For example, if there's an enterprise "code-review" skill and you also have a personal "code-review" skill, the enterprise one wins every time. Your options:`}),`
`,(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsx)(i.li,{children:"Rename your skill to something more distinct (this is usually the easier path)"}),`
`,(0,r.jsx)(i.li,{children:"Talk to your admin about the enterprise skill"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"plugin-skills-not-appearing",children:"Plugin Skills Not Appearing"}),`
`,(0,r.jsx)(i.p,{children:"Installed a plugin but can't see its skills? Clear the cache, restart Claude Code, and reinstall."}),`
`,(0,r.jsx)(i.p,{children:"If skills still don't appear after that, the plugin structure might be wrong. This is when the validator tool really earns its keep."}),`
`,(0,r.jsx)(i.h2,{id:"runtime-errors",children:"Runtime Errors"}),`
`,(0,r.jsx)(i.p,{children:"The skill loads but fails during execution. A few common causes:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Missing dependencies:"})," If your skill uses external packages, they must be installed. Add dependency info to your skill description so Claude knows what's needed."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Permission issues:"})," Scripts need execute permission. Run ",(0,r.jsx)(i.code,{children:"chmod +x"})," on any scripts your skill references."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Path separators:"})," Use forward slashes everywhere, even on Windows."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"quick-troubleshooting-checklist",children:"Quick Troubleshooting Checklist"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Not triggering?"})," Improve your description and add trigger phrases."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Not loading?"})," Check your path, file name, and YAML syntax."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Wrong skill used?"})," Make descriptions more distinct from each other."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Being shadowed?"})," Check the priority hierarchy and rename if needed."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Plugin skills missing?"})," Clear cache and reinstall."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Runtime failure?"})," Check dependencies, permissions, and paths."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Have you encountered any of these troubleshooting scenarios in your own work? Which fix would have saved you the most time?"}),`
`,(0,r.jsx)(i.li,{children:"How would you set up a process to validate skills before sharing them with your team?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"course-wrap-up",children:"Course wrap-up"}),`
`,(0,r.jsx)(i.p,{children:"Congratulations on completing Introduction to Agent Skills! You've learned how to create, configure, share, and troubleshoot skills in Claude Code. As you start building skills for your own workflows, remember that the best skills come from real pain points — start with the instructions you find yourself repeating most often."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};