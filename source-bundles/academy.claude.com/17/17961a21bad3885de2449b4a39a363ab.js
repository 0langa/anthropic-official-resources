import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";import{t as n}from"../../../../../the-claude-md-file-d325fc8u.js";var r=e();function i(e){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{youtubeId:"O0FGCxkHM-U",title:"The CLAUDE.md file",transcript:n,children:(0,r.jsx)(i.p,{children:`One of the most useful features in Claude Code is the CLAUDE.md file. It
gives Claude Code persistent memory about your project.`})}),`
`,(0,r.jsx)(i.h2,{id:"the-problem-it-solves",children:"The Problem It Solves"}),`
`,(0,r.jsx)(i.p,{children:"When you open Claude Code without a CLAUDE.md file, it starts fresh every time. It has to re-explore your codebase, figure out what dependencies are needed, and understand what features are already implemented. Sometimes it makes assumptions, which makes it harder to steer Claude in the right direction."}),`
`,(0,r.jsx)(i.p,{children:"CLAUDE.md solves this. It's a Markdown file you add to the root of your project, and Claude Code reads it automatically every time you start a session. Think of it as an onboarding script for your codebase. The contents of the CLAUDE.md file are appended to your prompt."}),`
`,(0,r.jsx)(i.h2,{id:"an-example",children:"An Example"}),`
`,(0,r.jsx)(i.p,{children:"Here's what a typical CLAUDE.md file looks like:"}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-markdown",children:`# Project

This is a Next.js 15 app using the App Router, Tailwind, and Drizzle ORM.

# Commands
- Dev server: \`pnpm dev\`
- Run tests: \`pnpm test\`
- Lint: \`pnpm lint\`

# Code Style
- Use 2-space indentation
- Prefer named exports
- All API routes go in app/api/
- Use server actions instead of API routes where possible
`})}),`
`,(0,r.jsx)(i.p,{children:"It's straightforward. Now if you ask Claude Code to create a React component, it already knows to use Tailwind for styling and to follow your code conventions."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./3bc0b82a5595.jpg",alt:"A CLAUDE.md file open in VS Code showing project info, commands, and code style rules"})}),`
`,(0,r.jsx)(i.h2,{id:"claudemd-is-for-teams",children:"CLAUDE.md is for Teams"}),`
`,(0,r.jsx)(i.p,{children:"You can (and should) commit your CLAUDE.md to version control so your team benefits from it. There's actually a hierarchy of memory files depending on who they're for:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Project-level CLAUDE.md"})," lives in the root directory of your project. Shared with the team."]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"User-level CLAUDE.md"})," lives in your configuration folder. This one is just for you and applies across all your projects. Put your personal preferences here."]}),`
`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"tips",children:"Tips"}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Save corrections to memory."})," If you find yourself correcting Claude repeatedly — like telling it to always use server actions instead of API routes — explicitly ask Claude to save that rule to memory. Next time you open the project, it'll know."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./aa738f148200.jpg",alt:"Asking Claude to save a rule to the CLAUDE.md file — always use server actions instead of API routes"})}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Reference project docs."})," If you have documentation in your project that you want Claude to reference, use the ",(0,r.jsx)(i.code,{children:"@"})," symbol with the file path:"]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-markdown",children:`## README.md

Please read if you need more info: @README.md
`})}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Start without one."})," We recommend starting a project without a CLAUDE.md file so you can see where you constantly have to course-correct the model. This keeps your CLAUDE.md compact and focused on only the necessary information. When you're ready, run ",(0,r.jsx)(i.code,{children:"/init"})," to have Claude generate one for you."]}),`
`,(0,r.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,r.jsx)(i.p,{children:"The difference between a frustrating Claude Code session and a productive one often comes down to context — and the CLAUDE.md file is how you provide that context. Start with your stack, your preferences, and your commands, then build from there as you go."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};