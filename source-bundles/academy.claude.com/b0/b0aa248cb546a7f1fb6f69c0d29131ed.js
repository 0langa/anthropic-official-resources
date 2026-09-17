import{Qp as e,em as t}from"../../../../../content-de-meta-b64hm6c1.js";import{t as n}from"../../../../../installing-claude-code-4c7nf3eb.js";var r=e();function i(e){let i={code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...t(),...e.components},{CodeCommand:a,LessonVideo:s}=i;return a||o("CodeCommand",!0),s||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{youtubeId:"0kILa02vKuI",title:"Installing Claude Code",transcript:n,children:(0,r.jsx)(i.p,{children:`Claude Code is simple to install whether you want to use it in your
terminal, on the web, or in your IDE.`})}),`
`,(0,r.jsx)(i.h2,{id:"terminal",children:"Terminal"}),`
`,(0,r.jsxs)(i.p,{children:["On ",(0,r.jsx)(i.strong,{children:"macOS, Linux, or WSL"}),", use the curl command to install it in one go. If you prefer Homebrew, you can also use ",(0,r.jsx)(i.code,{children:"brew install"}),", but note that this method doesn't support auto-updates."]}),`
`,(0,r.jsxs)(i.p,{children:["On ",(0,r.jsx)(i.strong,{children:"Windows"}),", there are a few options. In PowerShell, use the ",(0,r.jsx)(i.code,{children:"Invoke-RestMethod"})," command. In CMD, use the curl command. There's also a winget command available, though like Homebrew, it won't auto-update."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./1d77aec52405.jpg",alt:"Terminal showing Claude Code successfully installed via curl"})}),`
`,(0,r.jsxs)(i.p,{children:["After installation, you should be able to run the ",(0,r.jsx)(i.code,{children:"claude"})," command. If not, restart your terminal. Navigate to your project directory and run:"]}),`
`,(0,r.jsx)(a,{children:"claude"}),`
`,(0,r.jsx)(i.p,{children:"You'll go through some initial setup steps like choosing your color theme and signing in with your Claude account (Pro, Max, or Enterprise) or using an API key. If your organization has a Claude Enterprise account, be sure to select that option."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./600079678676.jpg",alt:"Claude Code login method selection: subscription, API, or third-party platform"})}),`
`,(0,r.jsxs)(i.p,{children:["Whatever directory you run ",(0,r.jsx)(i.code,{children:"claude"})," in, it will have access to that directory and all of its subfolders."]}),`
`,(0,r.jsx)(i.h2,{id:"visual-studio-code",children:"Visual Studio Code"}),`
`,(0,r.jsx)(i.p,{children:'Open your Extensions panel and search for "Claude Code." Look for the extension by Anthropic with the blue verification check. Hit install.'}),`
`,(0,r.jsxs)(i.p,{children:["After installation, you may need to restart VS Code. Once it's running, open the command palette with ",(0,r.jsx)(i.code,{children:"Ctrl/Cmd + Shift + P"}),` and search for "Claude Code Open in New Tab." You can also click the Claude logo if it's visible in your sidebar.`]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./1a09d51136d3.jpg",alt:"Claude Code extension page in VS Code marketplace"})}),`
`,(0,r.jsx)(i.p,{children:"The VS Code extension provides a very similar experience to the terminal. You can also opt out of the UI and use the terminal experience directly in your settings."}),`
`,(0,r.jsx)(i.h2,{id:"jetbrains",children:"JetBrains"}),`
`,(0,r.jsx)(i.p,{children:"Install the Claude Code plugin from the JetBrains Marketplace. After installation, restart your IDE. When you reopen it, you'll see the Claude logo. Clicking it opens a pane with the terminal experience that works alongside your editor."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./a7656728ab6c.jpg",alt:"Claude Code plugin in the JetBrains Marketplace"})}),`
`,(0,r.jsx)(i.h2,{id:"desktop",children:"Desktop"}),`
`,(0,r.jsx)(i.p,{children:`After installing and signing into Claude Desktop, you'll see a toggle at the top labeled "Code." The look and feel is similar to the chat side of things, but it lets you work in a specific folder, change permissions, and even work in a cloud environment.`}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./dbd3386c65f2.jpg",alt:"Claude Desktop Code view showing recent project folders"})}),`
`,(0,r.jsx)(i.h2,{id:"web",children:"Web"}),`
`,(0,r.jsxs)(i.p,{children:["On the web, access Claude Code by going to ",(0,r.jsx)(i.code,{children:"claude.ai/code"}),`, or by clicking the "Code" label in the sidebar of the chat app. This works similarly to the desktop app, but you're restricted to GitHub repositories.`]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./3c3609161934.jpg",alt:"Claude Code on the web at claude.ai/code with repository selection"})}),`
`,(0,r.jsx)(i.h2,{id:"which-one-should-i-use",children:"Which One Should I Use?"}),`
`,(0,r.jsxs)(i.p,{children:["If you want to stay on the cutting edge, the ",(0,r.jsx)(i.strong,{children:"terminal"})," is your best bet — features ship there first. The IDE integrations offer a nearly identical experience if you prefer Claude Code to feel more intertwined with your code editor."]}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Desktop"})," is great for letting Claude run in the background while you handle other tasks."]}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Claude Code on the web"})," is a solid option if you want to remotely work on projects through a GitHub repository."]}),`
`,(0,r.jsx)(i.p,{children:"However you want to use Claude Code is up to you."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};