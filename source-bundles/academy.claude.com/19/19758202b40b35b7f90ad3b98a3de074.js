import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Running multiple instances of Claude Code in parallel is one of the biggest productivity gains you can achieve. Since Claude is lightweight, you can easily spin up several copies, assign each a different task, and have them work simultaneously. This effectively gives you a team of virtual software engineers working on your project."}),`
`,(0,n.jsx)(r.h2,{id:"the-challenge-file-conflicts",children:"The Challenge: File Conflicts"}),`
`,(0,n.jsx)(r.p,{children:"The main problem with parallel instances is that they might try to modify the same files at the same time. This can lead to conflicting or invalid code since each instance isn't aware of what the others are doing."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./23c2b65a689b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The solution is to give each Claude instance its own separate workspace. Each instance works with its own copy of your project, makes changes in isolation, and then merges those changes back into your main project."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3a6bb5b1df65.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"git-worktrees",children:"Git Worktrees"}),`
`,(0,n.jsx)(r.p,{children:"Git worktrees are perfect for this workflow. If your project is already managed by Git, you can use worktrees immediately. They're like an extension of Git's branching functionality that lets you create complete copies of your project in separate directories on your machine."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./950a050ee2b0.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each worktree corresponds to a separate branch. You can have one folder for feature A and another for feature B, each containing a complete copy of your codebase. Then you run separate Claude Code instances in each worktree, working in total isolation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./536e6bef1194.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Once each Claude instance finishes its feature, you commit the work and merge it back into your main branch, just like merging any normal Git branch."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ad6aa49fddf4.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"automating-worktree-creation",children:"Automating Worktree Creation"}),`
`,(0,n.jsx)(r.p,{children:"This might sound complicated to manage, but you can delegate the entire workflow to Claude Code itself. You can write a prompt that asks Claude to:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Create a new git worktree in a specific folder"}),`
`,(0,n.jsx)(r.li,{children:"Symlink dependencies that aren't tracked by Git"}),`
`,(0,n.jsx)(r.li,{children:"Launch a new VS Code instance in that directory"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8b857191538a.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"custom-commands",children:"Custom Commands"}),`
`,(0,n.jsxs)(r.p,{children:["Rather than copying and pasting long prompts every time, you can create custom slash commands in Claude Code. Add a ",(0,n.jsx)(r.code,{children:".md"})," file to ",(0,n.jsx)(r.code,{children:".claude/commands"})," to create a custom command."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./518237ab1b5c.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The custom command can reference ",(0,n.jsx)(r.code,{children:"$ARGUMENTS"}),", which gets replaced with whatever arguments you pass to your command. For example:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/project:create_worktree feature_a"}),' creates a worktree named "feature_a"']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/project:create_worktree develop"}),' creates a worktree named "develop"']}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"parallel-development-in-action",children:"Parallel Development in Action"}),`
`,(0,n.jsx)(r.p,{children:"Here's how the complete workflow looks in practice. You can create multiple worktrees for different features:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fa078fbbc5d0.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each Claude instance works on its assigned task:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Update document tests"}),`
`,(0,n.jsx)(r.li,{children:"Add logging"}),`
`,(0,n.jsx)(r.li,{children:"Add note-taking tools"}),`
`,(0,n.jsx)(r.li,{children:"Add a subtract tool"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7100def75d32.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"merging-changes",children:"Merging Changes"}),`
`,(0,n.jsx)(r.p,{children:"When the features are complete, you can automate the merge process too. Create another custom command that tells Claude to:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Change into the worktree directory"}),`
`,(0,n.jsx)(r.li,{children:"Examine the latest commit"}),`
`,(0,n.jsx)(r.li,{children:"Change back to the root directory"}),`
`,(0,n.jsx)(r.li,{children:"Merge the worktree branch"}),`
`,(0,n.jsx)(r.li,{children:"Handle any merge conflicts automatically"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0cfd5f360ce8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude can even resolve merge conflicts automatically based on its understanding of the changes made in each branch."}),`
`,(0,n.jsx)(r.h2,{id:"results",children:"Results"}),`
`,(0,n.jsx)(r.p,{children:"This approach scales to as many parallel instances as you can manage. Instead of working on features sequentially, you can have multiple Claude instances developing different parts of your project simultaneously. It's like having your own team of developers, each working in their own isolated environment before bringing their work together."}),`
`,(0,n.jsx)(r.p,{children:"The productivity gains are substantial - you're essentially multiplying your development capacity by the number of parallel instances you run."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};