import{em as e,nm as t}from"../../../../../content-de-meta-ifw6afqc.js";import{t as n}from"../../../../../knowledge-fo05a64g.js";var r=e();function i(e){let i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"understanding-knowledge-gaps-in-ai-models",children:"Understanding knowledge gaps in AI models"}),`
`,(0,r.jsx)(c,{youtubeId:"iSLdQXeKbHs",title:"Knowledge",duration:"5 min",transcript:n,children:(0,r.jsx)(i.p,{children:`The model knows what it was exposed to during training, and only that. No
real-time browsing by default, no lived experience, and a hard stop at the
knowledge cutoff. The practical question isn't "does the AI know this?" but
"how well-represented was this in what it read?"`})}),`
`,(0,r.jsx)(i.h2,{id:"what-the-model-read-and-when-it-stopped-reading",children:"What the model read, and when it stopped reading"}),`
`,(0,r.jsx)(l,{name:"PredictBox",variant:"knowledge",title:"Knowledge — interactive exercise"}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"What generative AI knows"})," comes entirely from training data and is frozen at the knowledge cutoff. Without tools, it has no access to any information after that date.",`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Capability zone:"})," topics that appeared frequently, recently (within training), and consistently in training data."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Limitation zone:"})," rare, post-cutoff, niche, local, or contested topics."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Characteristic failures:"}),' staleness, uneven coverage, inherited bias in what counts as "default" or "normal," and inability to attribute where knowledge came from.']}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Web search, retrieval (RAG/MCPs), and tool use"})," exist specifically to patch these gaps by giving the model access to information it was never trained on."]}),`
`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"4D connection:"})," Knowledge unevenness is core to Delegation. Understanding where the model is well-stocked versus thin tells you when to hand off, when to supply context yourself, and when to go elsewhere."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,r.jsx)(s,{children:(0,r.jsxs)(a,{title:"The Outsider Test",note:"Why? You know the model's knowledge is broad but frozen, shaped by whatever was in its training data. Now you're going to map exactly where it's well-stocked and where it's thin in your specific domain.",children:[(0,r.jsx)(i.p,{children:"Return to your task list and select one task. Relative to that task, write down:"}),(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Two topics that are mainstream, well-documented, and stable. The kind of thing any informed colleague would know."}),`
`,(0,r.jsx)(i.li,{children:"Two topics that are niche, local, recent, or rapidly evolving. Industry-specific jargon, regional regulations, something that changed in the last year."}),`
`,(0,r.jsx)(i.li,{children:'One "default assumption" that outsiders to your field often get wrong. (Who the typical customer is. What a "standard" case looks like. Which tool people actually use vs. the one that gets press.)'}),`
`]}),(0,r.jsx)(i.p,{children:"Now run three probes:"}),(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 1: Coverage."})," Ask about one mainstream topic and one niche topic from your list. Compare the depth and accuracy. Pay attention to whether the AI signals uncertainty differently between the two, or whether both answers come with the same confident tone."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 2: Staleness."})," Ask about something you know has changed recently in your field: a regulation update, a tool release, a leadership change, a revised standard. Does the AI acknowledge the cutoff? Present stale information as current? Decline to answer? Note what happens."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 3: Default assumptions."}),` Without naming your assumption directly, ask a question that would reveal whether the AI defaults to the outsider's view. For example, if your field's "standard" customer is different from what most people assume, ask the AI to describe the typical customer. Note what it treats as normal.`]}),`
`]}),(0,r.jsx)(i.p,{children:"Go back to your task list and add a second annotation: for each task, flag whether you can lean on the model's knowledge, or whether you need to bring the knowledge yourself via context, documents, or search."}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Stretch goal:"})," Re-run the staleness probe with web search enabled. Compare what changes. This is retrieval in action."]})]})}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"What's one area of your work where you now realize you need to supply context rather than assume the model has it?"}),`
`,(0,r.jsx)(i.li,{children:"Did the default-assumption probe surface anything that surprised you?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"Knowledge covers what the model absorbed during training. Working Memory covers what it's paying attention to right now: your prompt, your documents, your conversation. This property has the hardest edge of all four."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};