import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Agents represent a shift from the structured workflows we've explored earlier. While workflows excel when you know the exact steps needed to complete a task, agents shine when the path forward isn't clear. Instead of defining a rigid sequence, you give Claude a goal and a set of tools, then let it figure out how to combine those tools to achieve the objective."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./16fa49815352.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This flexibility makes agents attractive for developers. You can build an agent once, ensure it works reasonably well, and then deploy it to handle a wide variety of tasks. However, this approach comes with significant drawbacks around reliability and cost that we'll explore later."}),`
`,(0,n.jsx)(r.h2,{id:"how-tools-make-the-agent",children:"How Tools Make the Agent"}),`
`,(0,n.jsx)(r.p,{children:"The real power of agents lies in their ability to combine simple tools in unexpected ways. Consider a basic set of datetime tools we covered earlier in the course:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7fd7b08522e7.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"get_current_datetime"})," - Returns the current date and time"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})," - Adds time to a given date"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"set_reminder"})," - Creates a reminder for a specific time"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Each tool is simple on its own, but Claude can combine them to handle diverse requests:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./984ba3cc574a.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[`For "What's the time?", Claude simply calls `,(0,n.jsx)(r.code,{children:"get_current_datetime"}),'. For "What day of the week is it in 11 days?", it chains ',(0,n.jsx)(r.code,{children:"get_current_datetime"})," followed by ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"}),'. More complex requests like "Set a reminder to go to the gym next Wednesday" require all three tools in sequence.']}),`
`,(0,n.jsxs)(r.p,{children:['Claude can even recognize when it needs additional information. When asked "When does my 90-day warranty expire?", it first asks the user when they obtained the warranty, then uses that information with ',(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})," to calculate the expiration date."]}),`
`,(0,n.jsx)(r.h2,{id:"tools-should-be-abstract",children:"Tools Should Be Abstract"}),`
`,(0,n.jsx)(r.p,{children:"The key insight for building effective agents is providing reasonably abstract tools rather than hyper-specialized ones. Claude Code demonstrates this principle perfectly."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0870204ddda3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude Code has access to generic, flexible tools:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"bash"})," - Run commands"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"glob"})," - Find files"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"grep"})," - Search file contents"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"read"})," - Read a file"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"write"})," - Create a file"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"edit"})," - Edit a file"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"webfetch"})," - Fetch a URL"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Notice what Claude Code doesn't have - specialized tools like "Refactor" or "Run Tests" or "Install Dependencies". Instead, it figures out how to accomplish these tasks by combining the basic tools available. To install dependencies, it reads project files to understand the configuration, then uses bash to run the appropriate installation commands.`}),`
`,(0,n.jsx)(r.h2,{id:"best-practice-provide-reasonably-abstract-tools",children:"Best Practice: Provide Reasonably Abstract Tools"}),`
`,(0,n.jsx)(r.p,{children:"When building agents, focus on tools that Claude can combine creatively rather than tools that solve one specific problem. Consider a social media video creation agent:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./315b4d5b327f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Effective tools for this agent might include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"bash"})," - Provides access to FFMPEG for video processing"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"generate_image"})," - Creates images from text prompts"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"text_to_speech"})," - Converts text to audio"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"post_media"})," - Publishes content to social media"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'This tool set enables both simple and complex interactions. A user might request "Create and post a video on Python programming," and the agent handles everything automatically. Alternatively, the interaction could be more collaborative:'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./246eea9097e9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'The user might say "I want you to make a video on Python, but first I want to pick out an initial image for the video." The agent can generate a sample image, show it to the user for approval, then proceed with video creation once confirmed.'}),`
`,(0,n.jsx)(r.p,{children:"This flexibility emerges naturally from providing the right level of abstraction in your tools. Each tool should be general enough to be useful in multiple contexts, but specific enough to accomplish meaningful work when combined with others."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};