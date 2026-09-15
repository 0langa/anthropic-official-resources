import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";import{t as n}from"../../../../../next-token-prediction-f8b33opp.js";var r=e();function i(e){let i={em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"how-ai-models-use-next-token-prediction",children:"How AI models use next token prediction"}),`
`,(0,r.jsx)(c,{youtubeId:"kl0gunXTvyk",title:"Next Token Prediction",duration:"4 min",transcript:n,children:(0,r.jsx)(i.p,{children:`Generative AI is closer to a vastly sophisticated autocomplete than to a
search engine. It writes answers word by word based on what tends to follow
what. That single property gives you both the fluency and the hallucination.`})}),`
`,(0,r.jsx)(i.h2,{id:"autocomplete-at-scale",children:"Autocomplete at scale"}),`
`,(0,r.jsx)(l,{name:"PredictBox",variant:"next-token-prediction",title:"Next Token Prediction — interactive exercise"}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Next Token Prediction"})," refers to the fact that generative AI writes answers word by word based on what tends to follow what.",`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Capability zone:"})," tasks that resemble patterns the model has seen many times (summarizing, reformatting, explaining common concepts)."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Limitation zone:"}),' novel or sparse territory, and anywhere the task requires distinguishing "true" from "sounds true."']}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Fabrication concentrates in specificity:"})," names, dates, statistics, citations, URLs, quotes. The more precise a claim, the more it warrants verification."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Product features"})," like citations, uncertainty signaling, constrained generation, and generator-verifier loops exist specifically to push this limitation further out."]}),`
`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"4D connection:"})," Next Token Prediction is the foundation of Discernment. Knowing the output was generated tells you exactly what kind of scrutiny to apply."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,r.jsx)(s,{children:(0,r.jsxs)(a,{title:"The Verification Test",note:"Why? You now know that the same generative process that makes AI fluent is the one that makes it fabricate. Time to see that on your own turf, in a domain where you'll catch it.",children:[(0,r.jsx)(i.p,{children:"Go back to your task list and pick the task where you're most confident in your domain expertise. You need a topic where you're the expert, because you need to be able to verify what comes back. Write down five specific, checkable facts from that domain: a person's job title, a publication date, a statistic, a product specification, a direct quote, a URL. Things you know to be accurate and can confirm independently."}),(0,r.jsx)(i.p,{children:"Now run three probes:"}),(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 1: The capability zone."})," Ask the AI to explain or summarize a well-known concept in your domain. Something popular and well-documented. Note the fluency. Spot-check the content. This is what the capability zone feels like: smooth, confident, and largely accurate."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 2: Specificity under pressure."})," Ask the AI to provide five checkable specifics in your domain: cite three sources, name an author, give exact figures, provide a URL. Verify every one. Score it out of five: how many were fully accurate? If it fabricates, note how confident it sounded doing it."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 3: Sampling in action."})," Run the exact same specific-facts request in a fresh conversation. Compare the two outputs. What stayed consistent? What changed? The variation you see is Next Token Prediction's sampling at work."]}),`
`]}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Stretch goal:"})," Re-run Probe 2 in a tool with citations enabled (like Research mode in Claude). Score it again. Does having sources to check change the score?"]})]})}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Would you have caught fabrications in a domain you didn't know well?"}),`
`,(0,r.jsx)(i.li,{children:"Look at your task list: which tasks sit mostly in the capability zone, and which push into specificity that needs verification?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsxs)(i.p,{children:["Next Token Prediction explains how the AI generates. Next we look at what it's generating ",(0,r.jsx)(i.em,{children:"from"}),": the Knowledge property. What does the model actually know, where does that knowledge come from, and where are the gaps?"]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};