import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"jZQ6b_vVHRc",title:"Context management",children:(0,n.jsxs)(r.p,{children:["Every request you send Claude has a ",(0,n.jsx)(r.strong,{children:"context window"}),`. A million tokens
sounds like a lot, but it runs out faster than you think once you're
shipping a real agent. That's where `,(0,n.jsx)(r.strong,{children:"context management"}),` comes in: it's
how you stay inside the window without losing what matters.`]})}),`
`,(0,n.jsx)(r.h2,{id:"what-counts-as-context",children:"What counts as context"}),`
`,(0,n.jsxs)(r.p,{children:["Context is ",(0,n.jsx)(r.strong,{children:"everything Claude sees on a given turn"}),":"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The system prompt"}),`
`,(0,n.jsx)(r.li,{children:"The message history"}),`
`,(0,n.jsx)(r.li,{children:"Tool definitions and tool results"}),`
`,(0,n.jsx)(r.li,{children:"Attached files and skills"}),`
`,(0,n.jsx)(r.li,{children:"Thinking blocks"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6e4fa7b0efca.png",alt:"Diagram of the five components of context: system prompt, message history, tools, files and skills, and thinking blocks"})}),`
`,(0,n.jsx)(r.p,{children:"It's the input to every single API call. You pay for it on the way in, and you pay for it on the way out. And once the window is full, the request fails."}),`
`,(0,n.jsxs)(r.p,{children:["So the goal isn't to fit everything in. The goal is to ",(0,n.jsx)(r.strong,{children:"fit the right things in"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["Anthropic publishes ",(0,n.jsx)(r.strong,{children:"four patterns"})," for managing context in long-running agents. Three are first-class API features, and one is a design pattern."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c695ae0725c9.png",alt:"Diagram of the four patterns for managing context: just-in-time context, compaction, caching, and memory"})}),`
`,(0,n.jsx)(r.h2,{id:"pattern-1-just-in-time-context",children:"Pattern 1: Just-in-time context"}),`
`,(0,n.jsxs)(r.p,{children:["Don't load everything upfront. Load what the agent needs ",(0,n.jsx)(r.em,{children:"now"}),", and let it pull more in via tools when it asks."]}),`
`,(0,n.jsxs)(r.p,{children:["Think of a compliance review agent. It doesn't get the entire building code book stuffed into its system prompt — it calls a ",(0,n.jsx)(r.code,{children:"lookup_building_code"})," tool when it needs a specific section. This is the design pattern of the four: nothing special in the API, just a deliberate choice about what you load and when."]}),`
`,(0,n.jsx)(r.h2,{id:"pattern-2-server-side-compaction",children:"Pattern 2: Server-side compaction"}),`
`,(0,n.jsxs)(r.p,{children:["When a conversation runs long, Anthropic's ",(0,n.jsx)(r.strong,{children:"server-side compaction"})," summarizes old turns into a single block. You opt in by adding a ",(0,n.jsx)(r.code,{children:"context_management"})," key to your request, holding an edit with a type:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response = client.beta.messages.create(
    betas=["compact-2026-01-12"],
    model="claude-opus-5",
    max_tokens=1024,
    context_management={
        "edits": [
            {"type": "compact_20260112"}
        ]
    },
    messages=messages,
)
`})}),`
`,(0,n.jsx)(r.p,{children:"The API auto-summarizes when the input crosses the trigger threshold. You don't have to track conversation length yourself."}),`
`,(0,n.jsx)(r.h2,{id:"pattern-3-prompt-caching",children:"Pattern 3: Prompt caching"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Prompt caching"})," lets you mark the stable parts of a request — the system prompt, the tool definitions, a long document — and reuse them across calls at a fraction of the cost."]}),`
`,(0,n.jsx)(r.p,{children:"The math matters more than it looks. If your system prompt is 4,000 tokens and you call it 100 times an hour, caching is the difference between a usable bill and a phone call from finance."}),`
`,(0,n.jsx)(r.h2,{id:"pattern-4-the-memory-tool",children:"Pattern 4: The memory tool"}),`
`,(0,n.jsxs)(r.p,{children:["Some context needs to survive ",(0,n.jsx)(r.em,{children:"across sessions"}),": user preferences, the agent's running notes, what was decided last week. The recommended primitive for this is the ",(0,n.jsx)(r.strong,{children:"memory tool"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude reads and writes to a memory directory via tool calls."}),`
`,(0,n.jsx)(r.li,{children:"You implement the storage backend client-side — a file system, a database, an encrypted store, whatever you want."}),`
`,(0,n.jsx)(r.li,{children:"Anthropic auto-injects a system instruction telling Claude to check the memory directory before starting work."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4b337b39379c.png",alt:"A memory directory viewed in the browser, with folders for incidents and saas-pricing and a saved incident note from a previous session"})}),`
`,(0,n.jsx)(r.h2,{id:"layering-the-patterns",children:"Layering the patterns"}),`
`,(0,n.jsxs)(r.p,{children:["In a production app, you'll usually layer all four at once. The compliance review agent caches its system prompt and tool definitions, and pulls building code sections in just in time via ",(0,n.jsx)(r.code,{children:"lookup_building_code"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["Each pattern handles a different failure mode: ",(0,n.jsx)(r.strong,{children:"cost"}),", ",(0,n.jsx)(r.strong,{children:"window size"}),", ",(0,n.jsx)(r.strong,{children:"statelessness"}),". Pick the ones that match what's breaking for you."]}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Context is everything Claude sees on a turn — and it isn't free or infinite. Once the window fills, the request fails."}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Just-in-time context"}),": load what's needed now, let tools pull in the rest. This is the design pattern of the four."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Server-side compaction"}),": add a ",(0,n.jsx)(r.code,{children:"context_management"})," key, and the API summarizes old turns automatically when input crosses the trigger threshold."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prompt caching"}),": mark stable parts of the request and reuse them across calls at a fraction of the cost."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The memory tool"}),": Claude reads and writes a memory directory via tool calls; you own the storage backend, so context survives across sessions."]}),`
`,(0,n.jsx)(r.li,{children:"Four patterns, one goal. Wire them up by hand, or use Claude managed agents, which ship with caching and compaction on by default."}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};