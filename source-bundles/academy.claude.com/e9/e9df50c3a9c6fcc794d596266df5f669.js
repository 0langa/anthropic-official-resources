import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{DesignPrompt:i}=r;return i||a("DesignPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"using-claude-design-for-prototypes-and-ux",children:"Using Claude Design for prototypes and UX"}),`
`,(0,n.jsx)(r.p,{children:"Claude Design by Anthropic Labs is a powerful tool for product designers and product managers who need to move fast from concept to working prototype. This guide covers workflows specific to product work – rapid prototyping, connecting your codebase for production-aware designs, iterating on features with real components, and handing off to engineering through Claude Code."}),`
`,(0,n.jsx)(r.h2,{id:"product-design-workflows",children:"Product design workflows"}),`
`,(0,n.jsx)(r.h4,{children:"Rapid feature prototyping"}),`
`,(0,n.jsx)(r.p,{children:"The most common product use case: you have a feature idea and need to make it tangible before committing engineering resources. Claude Design lets you go from concept to interactive prototype in a single conversation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Example prompts for feature prototyping:"})}),`
`,(0,n.jsx)(i,{children:"Design a new settings page for our SaaS app with sections for account, billing, notifications, and integrations. Include a sidebar nav and make each section expandable."}),`
`,(0,n.jsx)(i,{children:"Create an onboarding flow for a new user — 5 screens that walk them through connecting their data source, configuring their first dashboard, and inviting teammates."}),`
`,(0,n.jsx)(i,{children:"Prototype a search experience with filters, faceted results, and a detail panel that slides in from the right when you click a result."}),`
`,(0,n.jsx)(i,{children:"Build an approval workflow UI where managers can review, comment on, and approve or reject submitted requests in a queue."}),`
`,(0,n.jsx)(r.h4,{children:"Design reviews and stakeholder alignment"}),`
`,(0,n.jsx)(r.p,{children:"Before committing to a direction, you often need to get feedback from stakeholders who think better when they can see and interact with something. Claude Design is fast enough that you can generate 2–3 alternative approaches and present them side by side."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Example prompts:"})}),`
`,(0,n.jsx)(i,{children:"Show me three different layouts for a user profile page — one card-based, one with a left sidebar, and one with a top tab navigation."}),`
`,(0,n.jsx)(i,{children:"Create two versions of this checkout flow — one single-page and one multi-step wizard — so I can compare them in a design review."}),`
`,(0,n.jsx)(r.h4,{children:"User flow mapping"}),`
`,(0,n.jsx)(r.p,{children:"You can use Claude Design to prototype complete user flows, not just individual screens. Walk Claude through the journey and it will generate each screen in context."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Example prompt:"})}),`
`,(0,n.jsx)(i,{children:"Map out the flow for a user who wants to upgrade from a free plan to a paid plan. Start from the dashboard where they see the upgrade prompt, through the plan comparison page, payment form, confirmation, and the updated dashboard with premium features unlocked."}),`
`,(0,n.jsx)(r.h4,{children:"Internal tools and admin panels"}),`
`,(0,n.jsx)(r.p,{children:"Product teams often need internal tools quickly — admin dashboards, content moderation panels, ops workflows. These are great candidates for Claude Design because speed matters more than pixel perfection."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Example prompts:"})}),`
`,(0,n.jsx)(i,{children:"Design an admin panel for managing user accounts — searchable table with filters for plan type and status, with a detail drawer that shows account history and lets you modify permissions."}),`
`,(0,n.jsx)(i,{children:"Create a content moderation queue where reviewers can see flagged items, view context, and take action (approve, reject, escalate) with keyboard shortcuts."}),`
`,(0,n.jsx)(r.h2,{id:"connecting-your-codebase",children:"Connecting your codebase"}),`
`,(0,n.jsx)(r.p,{children:"For product teams, connecting your codebase to Claude Design is where the tool gets significantly more useful. Instead of generic prototypes, Claude generates designs using your actual components, styling, and architecture."}),`
`,(0,n.jsx)(r.h3,{id:"why-it-matters-for-product-work",children:"Why It matters for product work"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Prototypes use your real components:"}),` When Claude can see your component library, it designs with the buttons, cards, modals, and layouts that already exist in your codebase. No more "this looks great but we don't have that component" during handoff.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Architectural consistency:"})," Claude analyzes your styling patterns (CSS modules, Tailwind, styled-components, etc.), spacing scale, color system, and layout conventions. New designs stay aligned with what's already shipped."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Faster handoff:"}),' Since the prototype is already built with your real patterns, the gap between "prototype" and "shippable code" shrinks dramatically.']}),`
`,(0,n.jsx)(r.h3,{id:"how-to-connect-a-codebase",children:"How to connect a codebase"}),`
`,(0,n.jsx)(r.p,{children:"Claude Design allows you to both import from Github and attach via local directories via the Import button."}),`
`,(0,n.jsx)(r.p,{children:'Once linked, your codebase becomes part of the project context. You can reference specific components by name in your prompts — "use the ProductCard component" or "follow the same layout pattern as the settings page."'}),`
`,(0,n.jsx)(r.h3,{id:"what-claude-understands-from-your-code",children:"What Claude understands from your code"}),`
`,(0,n.jsx)(r.p,{children:"Claude analyzes your linked codebase to understand:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Component structure"})," — Your UI building blocks and how they compose together"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Styling and theming"})," — Your color system, spacing scale, typography, and CSS approach"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Framework patterns"})," — State management, hooks, data flow, and other conventions"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"File organization"})," — How you name and structure components and directories"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"performance-considerations",children:"Performance considerations"}),`
`,(0,n.jsx)(r.p,{children:"Linking very large repositories can cause lag or browser stability issues. If your codebase is a monorepo or if you’re working on a codebase with more than 100 people actively contributing, we recommend linking the specific package or directory that contains the relevant components rather than the entire repo."}),`
`,(0,n.jsx)(r.p,{children:"We’ve also noticed that Chrome doesn’t handle attaching huge file trees well. You can avoid this by attaching folders within your repo, such that you do not include the .git folder, node_modules/ folder, etc., which may contain very large numbers of files."}),`
`,(0,n.jsx)(r.h2,{id:"hand-off-to-claude-code",children:"Hand off to Claude Code"}),`
`,(0,n.jsx)(r.p,{children:"When a prototype is ready for implementation, Claude Design can hand off to Claude Code – preserving the design intent, component choices, and architectural decisions so engineers can build on your work instead of reinterpreting it."}),`
`,(0,n.jsx)(r.p,{children:"Click “Export” and “Hand off to Claude Code” to get started. By default, we bundle the project’s design files, chat, and a README which tells the model to interpret the designs for download, and give you a prompt you can paste into local Claude Code (or coding agent of your choice) that includes the bundle’s URL."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./df3615236323.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You’ll also have an option to hand off to Claude Code Web."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f6c6ac434847.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'This handoff is especially valuable when your codebase is linked, because Claude Code already understands the components and patterns the prototype was built with. As one design lead put it: "Including design intent in Claude Code handoffs has made the jump from prototype to production seamless."'}),`
`,(0,n.jsx)(r.h3,{id:"tips-for-a-clean-handoff",children:"Tips for a clean handoff"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.code,{children:"Name"})," things clearly in the prototype."]})," If you've referred to components by specific names during the design conversation, those names carry through to the handoff."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Document decisions in the chat."}),' When you make a design decision during iteration ("we went with tabs instead of a sidebar because users need to see all sections at once"), that reasoning becomes context for implementation.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Flag edge cases."})," Before handing off, ask Claude to show how the design handles empty states, error states, loading states, and different data volumes. This gives engineering a more complete picture."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"example-end-to-end-product-design-workflow",children:"Example: End-to-end product design workflow"}),`
`,(0,n.jsx)(r.p,{children:"Here's how a product team might use Claude Design from idea to implementation:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"PM writes a prompt"})," describing a new feature — e.g., a notification center with preferences, filtering, and bulk actions"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude generates an initial prototype"})," using the org's design system and linked codebase components"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Designer iterates"})," using inline comments and chat — adjusts layout, refines interactions, ensures accessibility"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"PM shares the prototype"})," with the team via a link for async design review"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Team discusses and iterates"})," — Claude generates alternative approaches for the parts that aren't working"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Design lead validates"})," that the prototype uses real components and patterns correctly"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Handoff to Claude Code"})," — the prototype, design decisions, and codebase context transfer to engineering"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Engineer uses Claude Code"})," to implement the feature, starting from the prototype rather than from scratch"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Have questions about Claude Design prototypes?"})," Reach out to your Design Team or try building a prototype yourself – most people find the workflow intuitive once they create their first one."]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};