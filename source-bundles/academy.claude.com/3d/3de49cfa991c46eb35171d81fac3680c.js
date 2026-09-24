import{Qp as e,em as t}from"../../../../../content-de-meta-ll4flgq0.js";import{t as n}from"../../../../../working-memory-knbg1a19.js";var r=e();function i(e){let i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"how-the-context-window-affects-generative-ai-outputs",children:"How the context window affects generative AI outputs"}),`
`,(0,r.jsx)(c,{youtubeId:"QJjt4wF4iHM",title:"Working Memory",duration:"6 min",transcript:n,children:(0,r.jsx)(i.p,{children:`Everything the AI is paying attention to lives inside a fixed-size workspace
called the context window. It can attend to what's in there. It can't attend
to anything outside it. That constraint is hard-edged in a way the other
properties aren't: things work until they don't.`})}),`
`,(0,r.jsx)(i.h2,{id:"the-context-window-ais-working-memory",children:"The context window: AI's working memory"}),`
`,(0,r.jsx)(l,{name:"PredictBox",variant:"working-memory",title:"Working Memory — interactive exercise"}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Working Memory"})," is the fact that the AI model has a fixed context window that it can attend to.",`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Capability zone:"})," your material fits comfortably, the session is current, you're supplying relevant context."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Limitation zone:"})," very long documents or conversations, expecting continuity across sessions, burying critical info in the middle of long input."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"This property has a cliff"})," rather than a gradient. Silent truncation is the failure mode, and you won't always be warned."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"The model doesn't learn from your corrections."})," It only responds to what's currently in context."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Memory features, compaction, projects, larger windows, and multi-agent workflows"})," all exist to push this cliff further out."]}),`
`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"4D connection:"})," Working Memory is what Description acts on. Knowing how the window works tells you how to structure context, when to front-load, and when to start fresh."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,r.jsx)(s,{children:(0,r.jsxs)(a,{title:"The Before-and-After",note:"Why? Context is leverage. The same task, with the right context supplied, can go from a mediocre first draft to something genuinely useful. This exercise makes that concrete.",children:[(0,r.jsx)(i.p,{children:`Pick a task from your Lesson 1 list that benefits from context only you hold: a style guide, a past example of good work, a set of constraints specific to your role or audience. Write down in two or three lines what "good" looks like for this task's output, described clearly enough that a stranger could evaluate it.`}),(0,r.jsx)(i.p,{children:"Now run three probes:"}),(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 1: Cold start vs. context."}),' Ask for your task with zero context. Just the bare request. Save the output. Then start a fresh conversation and run the same task, this time supplying your style guide, past example, or constraints upfront. Compare both outputs against your "good" definition. Measure the gap.']}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 2: Lost in the middle."})," Take a longer document (or paste together a few paragraphs of reference material). Bury one specific, important instruction in the middle of it. Ask a question whose correct answer depends on that buried instruction. Did the AI catch it? Now move that instruction to the very top and ask again. Compare."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 3: The blank slate."})," Have a short exchange where you teach the AI something specific about your work context, or correct it on something it got wrong. Then open a brand-new conversation and ask a question that assumes it remembers what you taught it. Watch it start from zero."]}),`
`]}),(0,r.jsx)(i.p,{children:"Go back to your task list and add a third annotation: which tasks need standing context set up (a project, saved instructions, uploaded reference docs) to be worth running, and which work fine cold?"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Stretch goal:"})," If your tool has memory or project features, set one up with the context from Probe 1. Run the task again. Compare effort and quality against the cold-start version."]})]})}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"How much did front-loading context change output quality? Was the gap bigger than you expected?"}),`
`,(0,r.jsx)(i.li,{children:"What's one piece of standing context you'll set up this week to stop re-explaining yourself?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"The final property: Steerability. How much are you actually in control when you give instructions, and where does that control break down?"})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};