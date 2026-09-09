import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{CodeCommand:i,LessonVideo:o}=r;return i||a("CodeCommand",!0),o||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o,{youtubeId:"DJNaTOFIQPs",title:"Plugins",children:[(0,n.jsxs)(r.p,{children:[`A setup you trust is worth a lot more once your whole team is running it.
The problem is moving it around. You build a great `,(0,n.jsx)(r.code,{children:".claude"}),` directory with
skills, subagents, and hooks, and then what? Everyone copies and pastes
files between machines and hopes they stay in sync. Plugins fix that. A
plugin is how Claude Code packages a setup and moves it from one person to
the next.`]}),(0,n.jsx)(r.p,{children:`There are two sides to this, and we'll cover both. First, using plugins
that other people publish. Second, packaging your own once you've built
something worth sharing.`})]}),`
`,(0,n.jsx)(r.h2,{id:"what-a-plugin-is",children:"What a plugin is"}),`
`,(0,n.jsxs)(r.p,{children:["A plugin is one installable unit. It bundles everything you'd otherwise share by hand: skills, subagents, hooks, and MCP server configs, plus the longer tail of stuff like language server protocol servers, background monitors, themes, and a slice of ",(0,n.jsx)(r.code,{children:"settings.json"}),". One version, one install."]}),`
`,(0,n.jsx)(r.p,{children:"Where the plugin lives decides how you install it. Inside a session, you can install one directly by name:"}),`
`,(0,n.jsx)(i,{children:"/plugin install github@claude-plugins-official"}),`
`,(0,n.jsxs)(r.p,{children:["Here's what that looks like. Claude Code installs it and tells you to run ",(0,n.jsx)(r.code,{children:"/reload-plugins"})," to apply the change."]}),`
`,(0,n.jsx)(r.h2,{id:"adding-a-marketplace-for-your-team",children:"Adding a marketplace for your team"}),`
`,(0,n.jsx)(r.p,{children:"For a team, the better move is to add a private marketplace once. A marketplace is a shared source that plugins resolve through:"}),`
`,(0,n.jsx)(i,{children:"/plugin marketplace add your-org/claude-plugins"}),`
`,(0,n.jsx)(r.p,{children:"Call it whatever you want. Once it's added, every install after that resolves through it. You get centralized discovery, version tracking, and updates in one place instead of scattered across everyone's laptop."}),`
`,(0,n.jsx)(r.p,{children:"You can browse what's available from the Discover tab. It lists the plugins on your marketplaces so you can search and pick."}),`
`,(0,n.jsx)(r.h2,{id:"read-before-you-install",children:"Read before you install"}),`
`,(0,n.jsx)(r.p,{children:"Here's the part that matters most. A plugin runs code on your machine, with your privileges. Its hooks fire on every matching tool call. So if you install a plugin for its skills, you also get its PreToolUse and Stop hooks whether you read them or not."}),`
`,(0,n.jsx)(r.p,{children:"Think about what that means. A community plugin could ship a Stop hook that calls out to a network endpoint every time, and nothing in your configuration would warn you about it. That's not a reason to avoid plugins. It's a reason to look first."}),`
`,(0,n.jsx)(r.p,{children:"Before you install, check the plugin's details. Claude Code shows you what it will install and estimates the context cost, along with a plain warning that Anthropic doesn't control what's inside third-party plugins."}),`
`,(0,n.jsx)(r.p,{children:"Two things worth knowing about where plugins come from:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The in-app submission form posts to the community marketplace after Anthropic's automated review."}),`
`,(0,n.jsx)(r.li,{children:"The official marketplace is curated on its own separate track."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"But reviewed isn't the same as trusted. Automated review catches some things, not everything. So the rule stands: install plugins and add marketplaces only from sources you truly trust, and check what a plugin actually does before turning it on."}),`
`,(0,n.jsx)(r.h2,{id:"components-run-alongside-yours",children:"Components run alongside yours"}),`
`,(0,n.jsx)(r.p,{children:"A plugin doesn't overwrite your configuration. Its components run alongside your own. That's mostly good, but it has consequences you should understand."}),`
`,(0,n.jsx)(r.p,{children:"Hooks stack. A plugin's PreToolUse hook and your own PreToolUse hook both fire on every tool call. Neither replaces the other. This is exactly why you read the details first."}),`
`,(0,n.jsxs)(r.p,{children:["Skills, agents, and commands are namespaced under the plugin name, so they never clash with yours. A plugin can also ship a ",(0,n.jsx)(r.code,{children:"settings.json"})," file, but only a narrow one. Claude Code honors just two keys from it: the agent and subagent status line keys."]}),`
`,(0,n.jsx)(r.p,{children:"That agent key is worth a pause. Setting it promotes one of the plugin's subagents to the main thread, along with its system prompt, tool restrictions, and model. In other words, enabling the plugin can change how Claude Code behaves by default. That's one of the main reasons to look before you even turn it on."}),`
`,(0,n.jsx)(r.p,{children:"Once a plugin is installed you can see everything it added, manage it, and uninstall it from the plugin panel."}),`
`,(0,n.jsx)(r.h2,{id:"packaging-your-own-plugin",children:"Packaging your own plugin"}),`
`,(0,n.jsxs)(r.p,{children:["Now the other side. Once you've built a ",(0,n.jsx)(r.code,{children:".claude"})," directory that works, don't make your team copy and paste it between machines. Package it instead."]}),`
`,(0,n.jsxs)(r.p,{children:["The good news is you don't have to restructure anything. A plugin uses the same ",(0,n.jsx)(r.code,{children:".claude"})," shape you already use:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"One folder per skill."}),`
`,(0,n.jsxs)(r.li,{children:["One markdown file per subagent under ",(0,n.jsx)(r.code,{children:"agents"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"hooks/hooks.json"})," and ",(0,n.jsx)(r.code,{children:".mcp.json"}),", at the plugin root."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The directory structure does most of the work. Claude Code discovers components by convention."}),`
`,(0,n.jsx)(r.h2,{id:"the-manifest",children:"The manifest"}),`
`,(0,n.jsxs)(r.p,{children:["On top of that, there's an optional manifest. It lives at ",(0,n.jsx)(r.code,{children:".claude-plugin/plugin.json"})," and holds the name, version, description, and author:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "name": "svg-splitter-review",
  "version": "0.1.0",
  "description": "Reviews the SVG Splitter repo",
  "author": {
    "name": "Lewis Menelaws"
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"The manifest is optional. Leave it out and Claude Code still discovers your components by directory convention. But a couple of details are worth knowing:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Name is the only required field."})," It namespaces your skills as ",(0,n.jsx)(r.code,{children:"company-name:skill-name"}),", which keeps them from colliding with anyone else's."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Version it like any other dependency."})," That's what makes updates and version tracking work across your team."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"the-takeaway",children:"The takeaway"}),`
`,(0,n.jsx)(r.p,{children:"Two simple rules cover most of this:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"When you use plugins, read before you install. A plugin runs code with your privileges, so look at its hooks, agents, and MCP servers first."}),`
`,(0,n.jsxs)(r.li,{children:["When you build one, package your ",(0,n.jsx)(r.code,{children:".claude"})," the moment it works. One manifest, one install."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"That's the whole point. One installable unit, and the setup you trust reaches your entire team."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};