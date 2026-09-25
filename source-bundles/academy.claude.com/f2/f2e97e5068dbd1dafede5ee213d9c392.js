import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Skills vs. other Claude Code features

Claude Code offers several customization options. Skills, CLAUDE.md, subagents, hooks, MCP servers. They solve different problems. Knowing when to use each prevents you from building the wrong thing. So let's run them down.

CLAUDE.md loads into every conversation, always. So if you want Claude to use TypeScript strict mode in this project, then put it in your CLAUDE.md file. Skills load on demand. When Claude matches a request, your PR review checklist doesn't need to be in the context when you're writing new code. It activates when you ask for a review. So use CLAUDE.md for project-wide standards that always apply, constraints like never modify the database schema, framework preferences, and coding style. Then use skills for task-specific expertise, knowledge that's only relevant sometimes, and detailed procedures that would clutter every conversation.

Skills add knowledge to your current conversation. When a skill activates, its instructions join the existing context. Subagents run in a separate context. They receive a task, work on it independently, and return results. They're isolated from the main conversation. Use subagents when you want to delegate a task to a separate execution context. You need different tool access than the main conversation does. You want isolation between delegated work and your main context. Use skills when you want to enhance Claude's knowledge for the current task. The expertise applies throughout a conversation.

Hooks fire on events. A hook might run a linter every time Claude saves a file, or validate input before certain tool calls. They're all event-driven, while skills, they're request-driven. They activate based on what you're asking. So use hooks for operations that should run on every file save, validation before specific tool calls, or automated side effects of Claude's actions. Then use skills for knowledge that informs how Claude handles requests, guidelines that affect Claude's reasoning.

A typical setup might include a CLAUDE.md file for always-on project standards, skills for task-specific expertise, hooks for automated operations. Each handles its own specialty. Don't force everything into skills when another option fits best. You can use multiple at a time.

Skills provide automatic task-specific expertise. CLAUDE.md is for always-on instructions. Subagents run in isolated contexts. Hooks fire on events. MCP provides external tools. Use skills when you have knowledge that Claude should apply automatically when the topic is relevant and combine them with other features for comprehensive customization.
`;function i(t){let i={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"skills-vs-other-claude-code-features",children:"Skills vs. other Claude Code features"}),`
`,(0,n.jsx)(a,{youtubeId:"IgNN4v0BJdU",title:"Skills vs. other Claude Code features",duration:"3 min",transcript:r,children:(0,n.jsx)(i.p,{children:`Claude Code offers several customization options, and choosing the wrong
one can lead to unnecessary complexity. This video breaks down when to use
skills versus CLAUDE.md, subagents, hooks, and MCP servers. You'll learn
the key differences between each option and how they complement each other
in a typical development setup.`})}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CLAUDE.md"})," loads into every conversation and is best for always-on project standards. ",(0,n.jsx)(i.strong,{children:"Skills"})," load on demand and are best for task-specific expertise"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Subagents"})," run in isolated execution contexts — use them for delegated work. ",(0,n.jsx)(i.strong,{children:"Skills"})," add knowledge to your current conversation"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Hooks"})," are event-driven (fire on file saves, tool calls). ",(0,n.jsx)(i.strong,{children:"Skills"})," are request-driven (activate based on what you're asking)"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"MCP servers"})," provide external tools and integrations — a different category entirely from skills"]}),`
`,(0,n.jsxs)(i.li,{children:["Each feature handles its own specialty — ",(0,n.jsx)(i.strong,{children:"combine them"})," rather than forcing everything into one approach"]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Claude Code offers several customization options: Skills, CLAUDE.md, subagents, hooks, and MCP servers. They solve different problems, and knowing when to use each prevents you from building the wrong thing. Let's break them down."}),`
`,(0,n.jsx)(i.h2,{id:"claudemd-vs-skills",children:"CLAUDE.md vs Skills"}),`
`,(0,n.jsx)(i.p,{children:"CLAUDE.md loads into every conversation, always. If you want Claude to use TypeScript strict mode in your project, put it in your CLAUDE.md file."}),`
`,(0,n.jsx)(i.p,{children:"Skills load on demand. When Claude matches a request to a skill, that skill's instructions join the conversation. Your PR review checklist doesn't need to be in context when you're writing new code — it activates when you ask for a review."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./5b601bf3261d.png",alt:""})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Use CLAUDE.md for:"})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Project-wide standards that always apply"}),`
`,(0,n.jsx)(i.li,{children:'Constraints like "never modify the database schema"'}),`
`,(0,n.jsx)(i.li,{children:"Framework preferences and coding style"}),`
`]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Use Skills for:"})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Task-specific expertise"}),`
`,(0,n.jsx)(i.li,{children:"Knowledge that's only relevant sometimes"}),`
`,(0,n.jsx)(i.li,{children:"Detailed procedures that would clutter every conversation"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"skills-vs-subagents",children:"Skills vs Subagents"}),`
`,(0,n.jsx)(i.p,{children:"Skills add knowledge to your current conversation. When a skill activates, its instructions join the existing context."}),`
`,(0,n.jsx)(i.p,{children:"Subagents run in a separate context. They receive a task, work on it independently, and return results. They're isolated from the main conversation."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Use Subagents when:"})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"You want to delegate a task to a separate execution context"}),`
`,(0,n.jsx)(i.li,{children:"You need different tool access than the main conversation"}),`
`,(0,n.jsx)(i.li,{children:"You want isolation between delegated work and your main context"}),`
`]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Use Skills when:"})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"You want to enhance Claude's knowledge for the current task"}),`
`,(0,n.jsx)(i.li,{children:"The expertise applies throughout a conversation"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"skills-vs-hooks",children:"Skills vs Hooks"}),`
`,(0,n.jsx)(i.p,{children:"Hooks fire on events. A hook might run a linter every time Claude saves a file, or validate input before certain tool calls. They're event-driven."}),`
`,(0,n.jsx)(i.p,{children:"Skills are request-driven. They activate based on what you're asking."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Use Hooks for:"})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Operations that should run on every file save"}),`
`,(0,n.jsx)(i.li,{children:"Validation before specific tool calls"}),`
`,(0,n.jsx)(i.li,{children:"Automated side effects of Claude's actions"}),`
`]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Use Skills for:"})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Knowledge that informs how Claude handles requests"}),`
`,(0,n.jsx)(i.li,{children:"Guidelines that affect Claude's reasoning"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"putting-it-all-together",children:"Putting It All Together"}),`
`,(0,n.jsx)(i.p,{children:"A typical setup might include:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CLAUDE.md"})," — always-on project standards"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Skills"})," — task-specific expertise that loads on demand"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Hooks"})," — automated operations triggered by events"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Subagents"})," — isolated execution contexts for delegated work"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"MCP servers"})," — external tools and integrations"]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Each handles its own specialty. Don't force everything into skills when another option fits better — and you can use multiple at a time. Skills provide automatic task-specific expertise, CLAUDE.md is for always-on instructions, subagents run in isolated contexts, hooks fire on events, and MCP provides external tools."}),`
`,(0,n.jsx)(i.p,{children:"Use skills when you have knowledge that Claude should apply automatically when the topic is relevant, and combine them with other features for comprehensive customization."}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Look at your current CLAUDE.md file. Is there anything in it that would work better as a skill (loaded only when relevant)?"}),`
`,(0,n.jsx)(i.li,{children:"Think about your team's development workflow. Which combination of Claude Code features (skills, hooks, subagents, MCP) would address your most common pain points?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"In the next lesson, you'll learn how to share skills with your team and organization — from committing them to repositories, to distributing via plugins, to enterprise-wide deployment through managed settings."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};