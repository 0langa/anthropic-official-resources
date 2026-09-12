import{em as e,nm as t}from"../../../../../content-de-meta-ifw6afqc.js";import{t as n}from"../../../../../what-are-skills-j3b8qb75.js";var r=e();function i(e){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"what-are-skills",children:"What are skills?"}),`
`,(0,r.jsx)(a,{youtubeId:"bjdBVZa66oU",title:"What are skills?",duration:"3 min",transcript:n,children:(0,r.jsx)(i.p,{children:`This video introduces skills — reusable markdown files that teach Claude
Code how to handle specific tasks automatically. Instead of repeating
instructions every time you ask Claude to review a PR or write a commit
message, you write a skill once and Claude applies it whenever the task
comes up. The video covers what skills are, where they live, and how they
compare to other Claude Code customization options.`})}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Skills are folders of instructions"})," that Claude Code can discover and use to handle tasks more accurately. Each skill lives in a ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file with a name and description in its frontmatter"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Claude uses the description to match skills to requests."})," When you ask Claude to do something, it compares your request against available skill descriptions and activates the ones that match"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Personal skills"})," go in ",(0,r.jsx)(i.code,{children:"~/.claude/skills"})," and follow you across all projects. ",(0,r.jsx)(i.strong,{children:"Project skills"})," go in ",(0,r.jsx)(i.code,{children:".claude/skills"})," inside a repository and are shared with anyone who clones it"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Skills load on demand"})," — unlike CLAUDE.md (which loads into every conversation) or slash commands (which require explicit invocation), skills activate automatically when Claude recognizes the situation"]}),`
`,(0,r.jsxs)(i.li,{children:["If you find yourself ",(0,r.jsx)(i.strong,{children:"explaining the same thing to Claude repeatedly"}),", that's a skill waiting to be written"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Every time you explain your team's coding standards to Claude, you're repeating yourself. Every PR review, you re-describe how you want feedback structured. Every commit message, you remind Claude of your preferred format. Skills fix this."}),`
`,(0,r.jsx)(i.p,{children:"A skill is a markdown file that teaches Claude how to do something once. Claude then applies that knowledge automatically whenever it's relevant."}),`
`,(0,r.jsx)(i.h2,{id:"what-skills-are",children:"What Skills Are"}),`
`,(0,r.jsxs)(i.p,{children:["Skills are folders of instructions and resources that Claude Code can discover and use to handle tasks more accurately. Each skill lives in a ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file with a name and description in its frontmatter."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./8be14e8288bb.png",alt:""})}),`
`,(0,r.jsx)(i.p,{children:"The description is how Claude decides whether to use the skill. When you ask Claude to review a PR, it matches your request against available skill descriptions and finds the relevant one. Claude reads your request, compares it to all available skill descriptions, and activates the ones that match."}),`
`,(0,r.jsx)(i.p,{children:"Here's what a skill's frontmatter looks like:"}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:`---
name: pr-review
description: Reviews pull requests for code quality. Use when reviewing PRs or checking code changes.
---
`})}),`
`,(0,r.jsx)(i.p,{children:"Below the frontmatter, you write the actual instructions — your review checklist, formatting preferences, or whatever Claude needs to know for that task."}),`
`,(0,r.jsx)(i.h2,{id:"where-skills-live",children:"Where Skills Live"}),`
`,(0,r.jsx)(i.p,{children:"You can store skills in different places depending on who needs them:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Personal skills"})," go in ",(0,r.jsx)(i.code,{children:"~/.claude/skills"})," (your home directory). These follow you across all your projects — your commit message style, your documentation format, how you like code explained."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Project skills"})," go in ",(0,r.jsx)(i.code,{children:".claude/skills"})," inside the root directory of your repository. Anyone who clones the repo gets these skills automatically. This is where team standards live, like your company's brand guidelines, preferred fonts, and colors for web design."]}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:["On Windows, personal skills live in ",(0,r.jsx)(i.code,{children:"C:/Users/<your-user>/.claude/skills"}),"."]}),`
`,(0,r.jsx)(i.p,{children:"Project skills get committed to version control alongside your code, so the whole team shares them."}),`
`,(0,r.jsx)(i.h2,{id:"skills-vs-claudemd-vs-slash-commands",children:"Skills vs. CLAUDE.md vs. Slash Commands"}),`
`,(0,r.jsx)(i.p,{children:"Claude Code has several ways to customize behavior. Skills are unique because they're automatic and task-specific. Here's how they compare:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"CLAUDE.md"})," files load into every conversation. If you want Claude to always use TypeScript's strict mode, that goes in CLAUDE.md."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Skills"})," load on demand when they match your request. Claude only loads the name and description initially, so they don't fill up your entire context window. Your PR review checklist doesn't need to be in context when you're debugging — it loads when you actually ask for a review."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Slash commands"})," require you to explicitly type them. Skills don't. Claude applies them when it recognizes the situation."]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"When Claude matches a skill to your request, you'll see it load in the terminal:"}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./40cd804fb581.png",alt:""})}),`
`,(0,r.jsx)(i.h2,{id:"when-to-use-skills",children:"When to Use Skills"}),`
`,(0,r.jsx)(i.p,{children:"Skills work best for specialized knowledge that applies to specific tasks:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Code review standards your team follows"}),`
`,(0,r.jsx)(i.li,{children:"Commit message formats you prefer"}),`
`,(0,r.jsx)(i.li,{children:"Brand guidelines for your organization"}),`
`,(0,r.jsx)(i.li,{children:"Documentation templates for specific types of docs"}),`
`,(0,r.jsx)(i.li,{children:"Debugging checklists for particular frameworks"}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"The rule of thumb is simple: if you find yourself explaining the same thing to Claude repeatedly, that's a skill waiting to be written."}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Think about your most recent interactions with Claude Code. Which instructions did you find yourself repeating? How might a skill have saved you time?"}),`
`,(0,r.jsx)(i.li,{children:"Consider your team's workflow. Which standards or processes would benefit most from being encoded as skills?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"In the next lesson, you'll create your first skill from scratch and learn how Claude Code discovers, matches, and loads skills behind the scenes."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};