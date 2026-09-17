import{Qp as e,em as t}from"../../../../../content-de-meta-b64hm6c1.js";import{t as n}from"../../../../../sharing-skills-ch3loj9y.js";var r=e();function i(e){let i={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"sharing-skills",children:"Sharing skills"}),`
`,(0,r.jsx)(a,{youtubeId:"OCBi3eScNLk",title:"Sharing skills",duration:"4 min",transcript:n,children:(0,r.jsx)(i.p,{children:`Skills become much more valuable when they're shared across a team or
organization. This video covers the three main distribution methods —
repository commits, plugins, and enterprise managed settings — and explains
how to configure custom subagents to use skills. You'll learn which
approach fits which scenario and how to handle an important gotcha:
subagents don't inherit skills automatically.`})}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Project skills"})," in ",(0,r.jsx)(i.code,{children:".claude/skills"})," are shared automatically through Git — anyone who clones the repo gets them"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Plugins"})," let you distribute skills across repositories via marketplaces for broader community use"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Enterprise managed settings"})," deploy skills organization-wide with the highest priority, ideal for mandatory standards and compliance"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Subagents don't automatically see your skills"})," — you must explicitly list skills in a custom agent's frontmatter ",(0,r.jsx)(i.code,{children:"skills"})," field"]}),`
`,(0,r.jsxs)(i.li,{children:["Built-in agents (Explorer, Plan, Verify) ",(0,r.jsx)(i.strong,{children:"can't access skills at all"})," — only custom subagents defined in ",(0,r.jsx)(i.code,{children:".claude/agents"})," can"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Skills become much more valuable when they're shared. A PR review skill that only you use is helpful, but that same skill shared across your entire team standardizes code review and creates a consistent experience across your organization. Let's look at the different ways you can distribute skills."}),`
`,(0,r.jsx)(i.h2,{id:"committing-skills-to-your-repository",children:"Committing Skills to Your Repository"}),`
`,(0,r.jsxs)(i.p,{children:["The simplest sharing method is committing skills directly to your repository. Place them in ",(0,r.jsx)(i.code,{children:".claude/skills"}),", and anyone who clones the repo gets those skills automatically — no extra installation needed."]}),`
`,(0,r.jsx)(i.p,{children:"When you push updates, everyone gets them on the next pull. This approach works well for:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Team coding standards"}),`
`,(0,r.jsx)(i.li,{children:"Project-specific workflows"}),`
`,(0,r.jsx)(i.li,{children:"Skills that reference your codebase structure"}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".claude"})," directory contains your agents, hooks, skills, and settings — all version-controlled and shared with the team through normal Git workflows."]}),`
`,(0,r.jsx)(i.h2,{id:"distributing-skills-through-plugins",children:"Distributing Skills Through Plugins"}),`
`,(0,r.jsxs)(i.p,{children:["Plugins are a way to extend Claude Code with custom functionality designed to be shared across teams and projects. In your plugin project, create a ",(0,r.jsx)(i.code,{children:"skills"})," directory that follows a similar file structure to the ",(0,r.jsx)(i.code,{children:".claude"})," directory — each skill gets its own folder with a ",(0,r.jsx)(i.code,{children:"SKILL.md"})," file inside."]}),`
`,(0,r.jsx)(i.p,{children:"After you distribute your plugin to a marketplace, other users can discover and install it into Claude Code for themselves."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./de5659fdb867.png",alt:""})}),`
`,(0,r.jsx)(i.p,{children:"This approach is best when your skills aren't too project-specific and can be useful to community members beyond your immediate team."}),`
`,(0,r.jsx)(i.h2,{id:"enterprise-deployment-through-managed-settings",children:"Enterprise Deployment Through Managed Settings"}),`
`,(0,r.jsx)(i.p,{children:"Administrators can deploy skills organization-wide through managed settings. Enterprise skills take the highest priority — they override personal, project, and plugin skills with the same name."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./2373313fe9e5.png",alt:""})}),`
`,(0,r.jsxs)(i.p,{children:["The managed settings file supports features like ",(0,r.jsx)(i.code,{children:"strictKnownMarketplaces"})," to control where plugins can be installed from:"]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",children:`"strictKnownMarketplaces": [
  {
    "source": "github",
    "repo": "acme-corp/approved-plugins"
  },
  {
    "source": "npm",
    "package": "@acme-corp/compliance-plugins"
  }
]
`})}),`
`,(0,r.jsxs)(i.p,{children:["This is the right choice for mandatory standards, security requirements, compliance workflows, and coding practices that ",(0,r.jsx)(i.em,{children:"must"}),' be consistent across the organization. The keyword here is "must."']}),`
`,(0,r.jsx)(i.h2,{id:"skills-and-subagents",children:"Skills and Subagents"}),`
`,(0,r.jsx)(i.p,{children:"Here's something that surprises people: subagents don't automatically see your skills. When you delegate a task to a subagent, it starts with a fresh, clean context."}),`
`,(0,r.jsx)(i.p,{children:"There are important distinctions to understand:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Built-in agents"})," (like Explorer, Plan, and Verify) can't access skills at all"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Custom subagents"})," you define ",(0,r.jsx)(i.em,{children:"can"})," use skills, but only when you explicitly list them"]}),`
`,(0,r.jsx)(i.li,{children:"Skills are loaded when the subagent starts, not on demand like in the main conversation"}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:["To create a custom subagent with skills, add an agent markdown file in ",(0,r.jsx)(i.code,{children:".claude/agents"}),". You can use the ",(0,r.jsx)(i.code,{children:"/agents"})," command in Claude Code to create one interactively:"]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./dc6b8b0e1a60.png",alt:""})}),`
`,(0,r.jsxs)(i.p,{children:["The generated agent file includes a ",(0,r.jsx)(i.code,{children:"skills"})," field that lists which skills to load. Here's what the frontmatter looks like:"]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:`---
name: frontend-security-accessibility-reviewer
description: "Use this agent when you need to review frontend code for accessibility..."
tools: Bash, Glob, Grep, Read, WebFetch, WebSearch, Skill...
model: sonnet
color: blue
skills: accessibility-audit, performance-check
---
`})}),`
`,(0,r.jsxs)(i.p,{children:["When you delegate to this subagent, it has both skills loaded and applies them to every review. First make sure the skills exist in your ",(0,r.jsx)(i.code,{children:".claude/skills"})," directory, then either create a new subagent or add the ",(0,r.jsx)(i.code,{children:"skills"})," field to an existing agent's markdown file."]}),`
`,(0,r.jsx)(i.p,{children:"This pattern works really well when:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"You want isolated task delegation with specific expertise"}),`
`,(0,r.jsx)(i.li,{children:"Different subagents need different skills (frontend reviewer vs. backend reviewer)"}),`
`,(0,r.jsx)(i.li,{children:"You want to enforce standards in delegated work without relying on prompts"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Which sharing method (repository, plugin, enterprise) makes the most sense for the skills you've been thinking about building?"}),`
`,(0,r.jsx)(i.li,{children:"Do you have workflows where custom subagents with specific skills would improve consistency in delegated work?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"In the final lesson, you'll learn how to troubleshoot common skill issues — from skills that don't trigger, to priority conflicts, to runtime errors — with a practical checklist you can reference anytime."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};