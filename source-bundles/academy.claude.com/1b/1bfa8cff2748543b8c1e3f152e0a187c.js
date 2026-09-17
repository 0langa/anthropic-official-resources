import{Qp as e,em as t}from"../../../../../content-de-meta-b64hm6c1.js";import{t as n}from"../../../../../working-with-skills-pffsctt7.js";var r=e();function i(e){let i={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...e.components},{LessonVideo:a,PromptExampleList:s}=i;return a||o("LessonVideo",!0),s||o("PromptExampleList",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"what-are-skills",children:"What are Skills?"}),`
`,(0,r.jsx)(i.p,{children:"Skills are folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized tasks. Think of them as expertise packages—they teach Claude how to complete specific tasks in a repeatable way."}),`
`,(0,r.jsx)(i.p,{children:"You've already seen Skills at work if you've used Claude to create Excel spreadsheets, PowerPoint presentations, Word documents, or PDFs. Those file creation capabilities are powered by Skills running behind the scenes. But Skills go far beyond document creation. Custom Skills can codify entire repeatable workflows — a quarterly variance analysis methodology, a brand voice review process, or a compliance checklist — so Claude follows the same rigorous steps every time."}),`
`,(0,r.jsx)(i.h2,{id:"types-of-skills",children:"Types of Skills"}),`
`,(0,r.jsx)(i.p,{children:"There are two categories of Skills you'll encounter:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Anthropic Skills"})," are created and maintained by Anthropic. These include enhanced document creation capabilities for Excel, Word, PowerPoint, and PDF files. Claude invokes them automatically when relevant, so you don't need to do anything special to use them."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Custom Skills"})," are ones you or your organization create for specialized workflows and domain-specific tasks. For example, you might create a skill that applies your company's brand guidelines to presentations, structures meeting notes in a specific format, or executes your organization's data analysis workflows."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"enabling-skills",children:"Enabling Skills"}),`
`,(0,r.jsx)(i.p,{children:"Skills are available on all plans. To use Skills, you'll need to have Code execution and file creation enabled, since Skills require Claude's secure sandboxed computing environment to function."}),`
`,(0,r.jsx)(i.p,{children:"Here's how to enable Skills:"}),`
`,(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:["Navigate to ",(0,r.jsx)(i.strong,{children:"Settings > Capabilities"})]}),`
`,(0,r.jsxs)(i.li,{children:["Ensure that ",(0,r.jsx)(i.strong,{children:"Code execution and file creation"})," is toggled on"]}),`
`,(0,r.jsxs)(i.li,{children:["Scroll to the ",(0,r.jsx)(i.strong,{children:"Skills"})," section"]}),`
`,(0,r.jsx)(i.li,{children:"Toggle individual skills on or off as needed"}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:["For ",(0,r.jsx)(i.strong,{children:"Enterprise plans"}),", organization Owners must first enable both Code execution and Skills in Admin settings before individual members can access them."]}),`
`,(0,r.jsxs)(i.p,{children:["For ",(0,r.jsx)(i.strong,{children:"Team plans"}),", this feature is enabled by default at the organization level."]}),`
`,(0,r.jsx)(i.p,{children:"Once enabled, you'll see available Skills listed in your settings, including Anthropic's built-in Skills and any custom Skills you've uploaded."}),`
`,(0,r.jsx)(i.h2,{id:"using-skills-in-practice",children:"Using Skills in practice"}),`
`,(0,r.jsx)(i.p,{children:"The beauty of Skills is that you typically don't need to think about them—Claude handles skill selection automatically based on your request. Here are some examples of prompts that would invoke Skills:"}),`
`,(0,r.jsx)(s,{surface:"chat",prompts:["Create an Excel spreadsheet tracking monthly expenses with formulas for totals","Turn this meeting notes document into a PowerPoint presentation","Generate a PDF report summarizing this data","Build a financial model in Excel with scenario analysis"]}),`
`,(0,r.jsx)(i.p,{children:`When Claude uses a Skill, you'll see it mentioned in Claude's chain of thought as it works. The output will be a downloadable file you can save to your computer or directly to Google Drive. (On paid plans where Claude Slides and Claude Docs are enabled, asking for a deck or a document can create an artifact instead — one you keep working on with Claude, then export when you're done. The "Creating with artifacts" lesson covers how the two differ.)`}),`
`,(0,r.jsx)(i.h2,{id:"file-execution",children:"File execution"}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Claude works with you on slides, spreadsheets, and contract redlines"})}),`
`,(0,r.jsx)(a,{youtubeId:"LpGpwhORWr0",title:"Claude works with you on slides, spreadsheets, and contract redlines",transcript:n}),`
`,(0,r.jsxs)(i.p,{children:["This same capability means that Claude can work with ",(0,r.jsx)(i.strong,{children:"your actual files"})," (within a contained environment) to create updated versions of your files (note: when you upload a file in Chat, Claude creates a new version rather than editing your original in place). Upload slides, spreadsheets, contracts, (or any .xlsx, .pptx, .docx, or .pdf files) and watch as Claude creates slides, performs analyses, and adds suggested edits. When Claude is done, you can download these files or open them in Drive."]}),`
`,(0,r.jsx)(i.p,{children:"Note: To use these capabilities you'll need to give Claude access to external data sources. Simply toggle Allow limited network access on when prompted:"}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./f1d96f79e3a8.png",alt:'Claude requesting permission to access external data, with the "Allow limited network access" toggle turned on'})}),`
`,(0,r.jsx)(i.h3,{id:"security-considerations",children:"Security considerations"}),`
`,(0,r.jsx)(i.p,{children:"Because Skills can include executable code, it's important to use them thoughtfully:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Only install custom Skills from trusted sources"}),`
`,(0,r.jsx)(i.li,{children:"Anthropic's built-in Skills are tested and maintained by Anthropic"}),`
`,(0,r.jsx)(i.li,{children:"Custom Skills you upload are private to your individual account"}),`
`,(0,r.jsx)(i.li,{children:"If you're installing a custom Skill from an external source, review its contents before use to understand what it does."}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"creating-custom-skills",children:"Creating custom skills"}),`
`,(0,r.jsx)(i.p,{children:"While Anthropic's built-in Skills cover common document creation tasks, the real power of Skills comes from creating your own. Custom Skills let you teach Claude your specific workflows, brand guidelines, and ways of working—so Claude can apply that knowledge automatically whenever it's relevant."}),`
`,(0,r.jsx)(i.p,{children:"The easiest way to create a custom Skill is through conversation with Claude itself. You don't need to write code or manually create files—Claude handles the technical structure for you."}),`
`,(0,r.jsx)(i.p,{children:"Here's how to create a Skill through conversation:"}),`
`,(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Start a new chat"}),' and tell Claude what you want to create. For example: "I want to create a skill for writing quarterly business reviews" or "I need a skill that applies our brand guidelines to presentations."']}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Answer Claude's questions."})," Claude will interview you about your workflow, asking things like: What should this skill do? What makes good output for this type of work? Can you give examples of when you'd use this skill?"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Upload reference materials"})," if you have them. Templates, style guides, brand assets, or examples of work you're proud of all help Claude understand exactly what you're looking for."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Save your skill."})," When finished, Claude generates a file containing your properly structured skill. All you have to do is save it and the skill will be ready for Claude to use."]}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"See your skills."})," Find the Customize tab in the left sidebar. There you can see all of the skills that are available to you and even edit the skills you use manually or by chatting with Claude."]}),`
`,(0,r.jsx)(i.p,{children:"Your custom Skill will appear in your Skills list alongside Anthropic's built-in Skills. From that point forward, Claude will automatically invoke it whenever you work on relevant tasks—no manual triggering needed. You can improve your skills with iteration — ask Claude to edit a skill and it will update the files for you."}),`
`,(0,r.jsx)(i.h2,{id:"skills-vs-projects",children:"Skills vs. Projects"}),`
`,(0,r.jsxs)(i.p,{children:["You might be wondering—if both skills and projects can be used to give more context to Claude, when should I use each? Think of it this way: ",(0,r.jsx)(i.strong,{children:"projects store knowledge, skills perform tasks"}),"."]}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Projects"})," are knowledge hubs. They hold the reference materials Claude needs to understand your work—project specs, meeting notes, research documents. When you upload files to a project, Claude draws on that information across every conversation within that project."]}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Skills"})," are procedural machines. They encode ",(0,r.jsx)(i.em,{children:"how"})," Claude should execute a task—the specific steps, order of operations, and methodology you want followed every time. Skills shine when you have repeatable workflows you want Claude to run consistently."]}),`
`,(0,r.jsxs)(i.p,{children:[`The two features complement each other. A skill can reference knowledge stored in a project—your "customer call prep" skill might pull from customer profiles uploaded to a project's knowledge base. The project provides the `,(0,r.jsx)(i.em,{children:"what"})," (information), the skill provides the ",(0,r.jsx)(i.em,{children:"how"})," (process)."]}),`
`,(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{}),(0,r.jsx)(i.th,{children:"Projects"}),(0,r.jsx)(i.th,{children:"Skills"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.strong,{children:"Purpose"})}),(0,r.jsx)(i.td,{children:"Store knowledge Claude references"}),(0,r.jsx)(i.td,{children:"Define processes Claude executes"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.strong,{children:"Best for"})}),(0,r.jsx)(i.td,{children:"Long-term context, reference materials, team collaboration"}),(0,r.jsx)(i.td,{children:"Repeatable workflows, multi-step tasks, consistent methodology"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.strong,{children:"Example"})}),(0,r.jsx)(i.td,{children:"Customer hub, research buddy, feedback generator"}),(0,r.jsx)(i.td,{children:"Process guidelines (like brand or legal), Blog drafting, PDF creation"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.strong,{children:"Persistence"})}),(0,r.jsx)(i.td,{children:"Knowledge available across all chats in the project"}),(0,r.jsx)(i.td,{children:"Instructions applied when the skill is invoked"})]})]})]}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsx)(i.p,{children:"Before moving on, consider:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"What types of documents do you create regularly that could benefit from Claude's built-in Skills?"}),`
`,(0,r.jsx)(i.li,{children:"Are there repetitive workflows in your work that might be good candidates for custom Skills?"}),`
`,(0,r.jsx)(i.li,{children:"How might Skills change the way you think about document creation and data analysis?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"In the next set of lessons, you'll start to expand Claude's reach with connectors. These powerful tools make information gathering seamless, and can give Claude the ability to perform actions right inside the tools where your work is happening."}),`
`,(0,r.jsxs)(i.p,{children:["For more information on Skills, including how to create your own custom Skills, visit the ",(0,r.jsx)(i.a,{href:"https://support.claude.com/en/articles/12512176-what-are-skills",children:"Anthropic Help Center"}),"."]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};