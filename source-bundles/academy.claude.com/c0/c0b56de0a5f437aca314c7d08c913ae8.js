import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";import{t as n}from"../../../../../configuration-and-multi-file-skills-5z01ujja.js";var r=e();function i(e){let i={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"configuration-and-multi-file-skills",children:"Configuration and multi-file skills"}),`
`,(0,r.jsx)(a,{youtubeId:"98KaK_rn5rQ",title:"Configuration and multi-file skills",duration:"4 min",transcript:n,children:(0,r.jsx)(i.p,{children:`This video covers the advanced techniques that make skills more powerful:
the full set of metadata fields, how to write descriptions that trigger
reliably, restricting tool access for security-sensitive workflows, and
organizing larger skills across multiple files using progressive
disclosure. You'll learn how to keep your skills efficient while still
supporting complex use cases.`})}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsxs)(i.strong,{children:[(0,r.jsx)(i.code,{children:"name"})," and ",(0,r.jsx)(i.code,{children:"description"})," are required"]})," — ",(0,r.jsx)(i.code,{children:"allowed-tools"})," and ",(0,r.jsx)(i.code,{children:"model"})," are optional but powerful additions"]}),`
`,(0,r.jsxs)(i.li,{children:["A good description ",(0,r.jsx)(i.strong,{children:"answers two questions"}),": What does the skill do? When should Claude use it?"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"allowed-tools"})})," restricts which tools Claude can use when the skill is active — useful for read-only or security-sensitive workflows"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Progressive disclosure"}),": keep SKILL.md under 500 lines and link to supporting files (references, scripts, assets) that Claude reads only when needed"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Scripts execute without loading their contents into context"})," — only the output consumes tokens, keeping context efficient"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"A basic skill works with just a name and description, but there are several advanced techniques that can make your skills much more effective in Claude Code. Let's walk through the key fields, best practices for descriptions, tool restrictions, and how to structure larger skills."}),`
`,(0,r.jsx)(i.h2,{id:"skill-metadata-fields",children:"Skill Metadata Fields"}),`
`,(0,r.jsx)(i.p,{children:"The agent skills open standard supports several fields in the SKILL.md frontmatter. Two are required, and the rest are optional:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"name"})," (required) — Identifies your skill. Use lowercase letters, numbers, and hyphens only. Maximum 64 characters. Should match your directory name."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"description"})," (required) — Tells Claude when to use the skill. Maximum 1,024 characters. This is the most important field because Claude uses it for matching."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"allowed-tools"})," (optional) — Restricts which tools Claude can use when the skill is active."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"model"})," (optional) — Specifies which Claude model to use for the skill."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"writing-effective-descriptions",children:"Writing Effective Descriptions"}),`
`,(0,r.jsx)(i.p,{children:`Be explicit with your instructions. If someone told you "your job is to help with docs," you wouldn't know what to do — and Claude thinks the same way.`}),`
`,(0,r.jsx)(i.p,{children:"A good description answers two questions:"}),`
`,(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsx)(i.li,{children:"What does the skill do?"}),`
`,(0,r.jsx)(i.li,{children:"When should Claude use it?"}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"If your skill isn't triggering when you expect it to, try adding more keywords that match how you actually phrase your requests. The description is what Claude uses to decide whether a skill is relevant, so the language matters."}),`
`,(0,r.jsx)(i.h2,{id:"restricting-tools-with-allowed-tools",children:"Restricting Tools with allowed-tools"}),`
`,(0,r.jsx)(i.p,{children:"Sometimes you want a skill that can only read files, not modify them. This is useful for security-sensitive workflows, read-only tasks, or any situation where you want guardrails."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./621465b21ab0.png",alt:""})}),`
`,(0,r.jsxs)(i.p,{children:["In this example, the ",(0,r.jsx)(i.code,{children:"allowed-tools"})," field is set to ",(0,r.jsx)(i.code,{children:"Read, Grep, Glob, Bash"}),". When this skill is active, Claude can only use those tools without asking permission — no editing, no writing."]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:`---
name: codebase-onboarding
description: Helps new developers understand the system works.
allowed-tools: Read, Grep, Glob, Bash
model: sonnet
---
`})}),`
`,(0,r.jsxs)(i.p,{children:["If you omit ",(0,r.jsx)(i.code,{children:"allowed-tools"})," entirely, the skill doesn't restrict anything. Claude uses its normal permission model."]}),`
`,(0,r.jsx)(i.h2,{id:"progressive-disclosure",children:"Progressive Disclosure"}),`
`,(0,r.jsx)(i.p,{children:"Skills share Claude's context window with your conversation. When Claude activates a skill, it loads the contents of that SKILL.md into context. But sometimes you need references, examples, or utility scripts that the skill depends on."}),`
`,(0,r.jsx)(i.p,{children:"Cramming everything into one 2,000-line file has two problems: it takes up a lot of context window space, and it's not fun to maintain."}),`
`,(0,r.jsx)(i.p,{children:"Progressive disclosure solves this. Keep essential instructions in SKILL.md and put detailed reference material in separate files that Claude reads only when needed."}),`
`,(0,r.jsx)(i.p,{children:"The open standard suggests organizing your skill directory with:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"scripts/"})," — Executable code"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"references/"})," — Additional documentation"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"assets/"})," — Images, templates, or other data files"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Then in SKILL.md, link to the supporting files with clear instructions about when to load them:"}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./eb7c2e2da1af.png",alt:""})}),`
`,(0,r.jsxs)(i.p,{children:["In this example, Claude reads ",(0,r.jsx)(i.code,{children:"architecture-guide.md"})," only when someone asks about system design. If they're asking where to add a component, it never loads that file. It's like having a table of contents in the context window rather than the entire document."]}),`
`,(0,r.jsxs)(i.p,{children:["A good rule of thumb: ",(0,r.jsx)(i.strong,{children:"keep SKILL.md under 500 lines"}),". If you're exceeding that, consider whether the content should be split into separate reference files."]}),`
`,(0,r.jsx)(i.h2,{id:"using-scripts-efficiently",children:"Using Scripts Efficiently"}),`
`,(0,r.jsxs)(i.p,{children:["Scripts in your skill directory can run without loading their contents into context. The script executes and only the output consumes tokens. The key instruction to include in your SKILL.md is to tell Claude to ",(0,r.jsx)(i.em,{children:"run"})," the script, not ",(0,r.jsx)(i.em,{children:"read"})," it."]}),`
`,(0,r.jsx)(i.p,{children:"This is particularly useful for:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Environment validation"}),`
`,(0,r.jsx)(i.li,{children:"Data transformations that need to be consistent"}),`
`,(0,r.jsx)(i.li,{children:"Operations that are more reliable as tested code than generated code"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Think about a skill you'd like to build that involves multiple files. How would you structure the SKILL.md versus supporting reference files?"}),`
`,(0,r.jsxs)(i.li,{children:["Are there workflows in your team where restricting tool access with ",(0,r.jsx)(i.code,{children:"allowed-tools"})," would add an important safety layer?"]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"In the next lesson, we'll compare skills to the other ways you can customize Claude Code — CLAUDE.md, subagents, hooks, and MCP servers — so you can choose the right tool for each situation."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};