import{$p as e,Zp as t}from"../../../../../content-de-meta-ee5tgx76.js";import{t as n}from"../../../../../creating-your-first-skill-mwrumbmw.js";var r=t();function i(t){let i={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:a,LessonVideo:s}=i;return a||o("CodeCommand",!0),s||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"creating-your-first-skill",children:"Creating your first skill"}),`
`,(0,r.jsx)(s,{youtubeId:"Wx6_vjFFyHM",title:"Creating your first skill",duration:"4 min",transcript:n,children:(0,r.jsx)(i.p,{children:`This video walks through building a skill from scratch — a personal PR
description skill that works across all your projects. You'll see exactly
how to structure the SKILL.md file, test it, and understand how Claude Code
discovers and matches skills to your requests. The video also covers the
priority hierarchy that determines which skill wins when names conflict.`})}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:["A skill is a ",(0,r.jsxs)(i.strong,{children:["directory containing a ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file"]})," with metadata (name, description) in frontmatter and instructions below"]}),`
`,(0,r.jsxs)(i.li,{children:["Claude loads ",(0,r.jsx)(i.strong,{children:"only skill names and descriptions at startup"}),", then matches incoming requests against those descriptions using semantic matching"]}),`
`,(0,r.jsxs)(i.li,{children:["You get a ",(0,r.jsx)(i.strong,{children:"confirmation prompt"})," before Claude loads the full skill content into context"]}),`
`,(0,r.jsxs)(i.li,{children:["Priority for name conflicts: ",(0,r.jsx)(i.strong,{children:"Enterprise → Personal → Project → Plugins"})]}),`
`,(0,r.jsxs)(i.li,{children:["To update a skill, edit its ",(0,r.jsx)(i.code,{children:"SKILL.md"}),". To remove one, delete its directory. ",(0,r.jsx)(i.strong,{children:"Always restart Claude Code"})," for changes to take effect"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Let's walk through creating a skill from scratch, then look at how Claude Code actually loads and matches skills behind the scenes."}),`
`,(0,r.jsx)(i.h2,{id:"creating-a-skill",children:"Creating a Skill"}),`
`,(0,r.jsx)(i.p,{children:"We'll build a personal skill that teaches Claude how to write PR descriptions in a consistent format. Since it's a personal skill, it lives in your home directory and works across all your projects."}),`
`,(0,r.jsx)(i.p,{children:"First, create a directory for your skill inside the skills folder. The directory name should match your skill name:"}),`
`,(0,r.jsx)(a,{children:"mkdir -p ~/.claude/skills/pr-description"}),`
`,(0,r.jsxs)(i.p,{children:["Then create a ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file inside that directory. The file has two parts separated by frontmatter dashes:"]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-markdown",children:`---
name: pr-description
description: Writes pull request descriptions. Use when creating a PR, writing a PR, or when the user asks to summarize changes for a pull request.
---

When writing a PR description:

1. Run \`git diff main...HEAD\` to see all changes on this branch
2. Write a description following this format:

## What
One sentence explaining what this PR does.

## Why
Brief context on why this change is needed

## Changes
- Bullet points of specific changes made
- Group related changes together
- Mention any files deleted or renamed
`})}),`
`,(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.strong,{children:"name"})," identifies your skill. The ",(0,r.jsx)(i.strong,{children:"description"})," tells Claude when to use it — this is the matching criteria. Everything after the second set of dashes is the instructions Claude follows when the skill is activated."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./23910a9d33eb.png",alt:""})}),`
`,(0,r.jsx)(i.h2,{id:"testing-your-skill",children:"Testing Your Skill"}),`
`,(0,r.jsx)(i.p,{children:"Claude Code loads skills at startup, so restart your session after creating one. You can verify it's available by checking the available skills list."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./d0528266edd1.png",alt:""})}),`
`,(0,r.jsx)(i.p,{children:`You should see your skill listed. To test it, make some changes on a branch and say something like "write a PR description for my changes." Claude will indicate it's using the PR description skill, check your diff, and write a description following your template — same format every time.`}),`
`,(0,r.jsx)(i.h2,{id:"how-skill-matching-works",children:"How Skill Matching Works"}),`
`,(0,r.jsxs)(i.p,{children:["When Claude Code starts, it scans four locations for skills but only loads the ",(0,r.jsx)(i.strong,{children:"name and description"})," — not the full content. This is an important detail."]}),`
`,(0,r.jsx)(i.p,{children:'When you send a request, Claude compares your message against the descriptions of all available skills. For example, "explain what this function does" would match a skill described as "explain code with visual diagrams" because the intent overlaps.'}),`
`,(0,r.jsxs)(i.p,{children:["Once a match is found, Claude asks you to confirm loading the skill. This confirmation step keeps you aware of what context Claude is pulling in. After you confirm, Claude reads the complete ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file and follows its instructions."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./96c5355edb53.png",alt:""})}),`
`,(0,r.jsx)(i.h2,{id:"skill-priority",children:"Skill Priority"}),`
`,(0,r.jsx)(i.p,{children:"If you clone a repository that has a skill with the same name as one of your personal skills, which one wins? There's a clear priority order:"}),`
`,(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Enterprise"})," — managed settings, highest priority"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Personal"})," — your home directory (",(0,r.jsx)(i.code,{children:"~/.claude/skills"}),")"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Project"})," — the ",(0,r.jsx)(i.code,{children:".claude/skills"})," directory inside a repository"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Plugins"})," — installed plugins, lowest priority"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:'This lets organizations enforce standards through enterprise skills while still allowing individual customization. If your company has an enterprise "code-review" skill and you create a personal "code-review" skill with the same name, the enterprise version takes precedence.'}),`
`,(0,r.jsx)(i.p,{children:'To avoid conflicts, use descriptive names. Instead of just "review," use something like "frontend-review" or "backend-review."'}),`
`,(0,r.jsx)(i.h2,{id:"updating-and-removing-skills",children:"Updating and Removing Skills"}),`
`,(0,r.jsxs)(i.p,{children:["To update a skill, edit its ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file. To remove one, delete its directory. Restart Claude Code after any changes for them to take effect."]}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"What's one task in your daily workflow that you could turn into a skill right now? What would the description look like?"}),`
`,(0,r.jsx)(i.li,{children:"How might the priority hierarchy affect your team's skill management strategy? Would you rely more on personal or project-level skills?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsxs)(i.p,{children:["In the next lesson, you'll learn about advanced configuration options including metadata fields, tool restrictions with ",(0,r.jsx)(i.code,{children:"allowed-tools"}),", and how to structure larger skills using progressive disclosure and multi-file organization."]})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};