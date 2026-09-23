import{$p as e,Zp as t}from"../../../../../content-de-meta-ictkjcaa.js";import{t as n}from"../../../../../creating-a-subagent-mgd46u2y.js";var r=t();function i(t){let i={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{youtubeId:"arD6qEWa2Xc",title:"Creating a subagent",transcript:n,children:(0,r.jsx)(i.p,{children:`Claude Code comes with built-in subagents, but you can also create your
own. Custom subagents specialize in specific tasks -- like reviewing code,
writing tests, or checking documentation. They are defined as markdown
files with YAML frontmatter that tell Claude when to use the subagent and
how the subagent should behave.`})}),`
`,(0,r.jsx)(i.h2,{id:"creating-a-subagent",children:"Creating a Subagent"}),`
`,(0,r.jsxs)(i.p,{children:["The easiest way to create a subagent is with the ",(0,r.jsx)(i.code,{children:"/agents"})," slash command. This opens the main interface for managing your subagents. From there, select ",(0,r.jsx)(i.strong,{children:"Create new agent"}),"."]}),`
`,(0,r.jsx)(i.p,{children:"You will first be asked to choose the scope of your subagent:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Project-level"})," -- available only in the current project"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"User-level"})," -- shared across all projects on your machine"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Next, you can choose how to create it. You can write the configuration manually, but the recommended approach is to let Claude generate it for you. Just describe what you want the subagent to do, and Claude will produce a name, description, and system prompt based on your input."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./a82911f1b12d.png",alt:'The /agents create-new-agent flow in Claude Code, with "Generate with Claude (recommended)" and "Manual configuration" as creation methods'})}),`
`,(0,r.jsx)(i.h2,{id:"customizing-tools",children:"Customizing Tools"}),`
`,(0,r.jsx)(i.p,{children:"During creation, you get the chance to customize which tools the subagent can access. The tool categories include:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Read-only tools"}),`
`,(0,r.jsx)(i.li,{children:"Edit tools"}),`
`,(0,r.jsx)(i.li,{children:"Execution tools"}),`
`,(0,r.jsx)(i.li,{children:"MCP tools"}),`
`,(0,r.jsx)(i.li,{children:"Other tools"}),`
`]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./f9660a7b9f48.png",alt:'The "Select tools" step of agent creation, with checkboxes for All tools, Read-only tools, Edit tools, Execution tools, MCP tools, and Other tools'})}),`
`,(0,r.jsx)(i.p,{children:"Think about what your subagent actually needs. A code reviewer probably does not need edit tools -- it should read and analyze code, not change it. However, you might want to keep execution tools enabled so it can more easily identify pending changes."}),`
`,(0,r.jsx)(i.h2,{id:"choosing-a-model-and-color",children:"Choosing a Model and Color"}),`
`,(0,r.jsx)(i.p,{children:"After configuring tools, you select which Claude model powers the subagent. Your options are:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Haiku"})," -- best for fast, lightweight tasks"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Sonnet"})," -- a good middle ground between speed and depth"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Opus"})," -- best for complex analysis"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Inherit"})," -- uses whatever model your main conversation is running"]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:"Finally, you pick a color. This shows up in the UI so you can quickly tell which subagent is active. It is a small touch, but it helps when you have multiple subagents running."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./7683fa4f4173.png",alt:'The "Choose background color" step of agent creation, showing a list of colors and a preview of the code-quality-reviewer name highlighted in cyan'})}),`
`,(0,r.jsx)(i.h2,{id:"the-config-file",children:"The Config File"}),`
`,(0,r.jsxs)(i.p,{children:["Once creation is complete, the subagent config file is saved into your project (typically at ",(0,r.jsx)(i.code,{children:".claude/agents/your-agent-name.md"}),"). Here is what a typical subagent config looks like:"]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-markdown",children:`---
name: code-quality-reviewer
description: Use this agent when you need to review recently written or modified code for quality, security, and best practice compliance.
tools: Bash, Glob, Grep, Read, WebFetch, WebSearch
model: sonnet
color: purple
---

You are an expert code reviewer specializing in quality assurance, security best practices, and
adherence to project standards. Your role is to thoroughly examine recently written or modified code
and identify issues that could impact reliability, security, maintainability, or performance.
`})}),`
`,(0,r.jsx)(i.p,{children:"Let's break down each field:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"name"})})," -- A unique identifier for the subagent. This is how you reference it, either by asking Claude directly or by typing ",(0,r.jsx)(i.code,{children:"@agent code-quality-reviewer"})," in your message."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"description"})})," -- Controls when Claude decides to use the subagent. This must be a single line (use escaped newline characters ",(0,r.jsx)(i.code,{children:"\\n"})," if you need breaks). You can include example conversations here to help Claude understand when delegation is appropriate."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"tools"})})," -- Lists which tools the subagent can access. This matches whatever you selected during generation, but you can edit the list here at any time."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"model"})})," -- Specifies which Claude model to use: ",(0,r.jsx)(i.code,{children:"sonnet"}),", ",(0,r.jsx)(i.code,{children:"opus"}),", ",(0,r.jsx)(i.code,{children:"haiku"}),", or ",(0,r.jsx)(i.code,{children:"inherit"}),"."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"color"})})," -- The UI color for identifying the subagent."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"system-prompts",children:"System Prompts"}),`
`,(0,r.jsx)(i.p,{children:"The body of the markdown file (everything below the YAML frontmatter) is the system prompt. This is where you give the subagent its instructions: what it should focus on, how it should analyze things, and how it should report findings back to the main agent."}),`
`,(0,r.jsx)(i.p,{children:"A well-written system prompt is the difference between a useful subagent and one that misses the point. Be specific about what the subagent should look for and how it should structure its output."}),`
`,(0,r.jsx)(i.h2,{id:"making-claude-use-your-subagent-automatically",children:"Making Claude Use Your Subagent Automatically"}),`
`,(0,r.jsxs)(i.p,{children:["If you want Claude to delegate tasks to the subagent without you explicitly asking, include the word ",(0,r.jsx)(i.strong,{children:'"proactively"'})," in the description field. For example:"]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:`description: Proactively suggest running this agent after major code changes...
`})}),`
`,(0,r.jsx)(i.p,{children:"You can also add example conversations to the description to help Claude understand specific scenarios where the subagent should be used. The more concrete your examples, the better Claude gets at knowing when to delegate."}),`
`,(0,r.jsx)(i.h2,{id:"testing-your-subagent",children:"Testing Your Subagent"}),`
`,(0,r.jsx)(i.p,{children:"After creating your subagent, test it by making some code changes and asking Claude to review them."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./85a257e79af4.png",alt:"A code editor with a FastAPI project open and Claude Code in a side panel, asked to use the code-reviewer subagent to review recent changes"})}),`
`,(0,r.jsx)(i.p,{children:"If the subagent is not being used when you expect it to be, go back and check the description. Adding more specific examples and trigger scenarios helps Claude understand when to delegate work to your subagent."})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};