import{Hf as e,Wf as t}from"../../../../../content-es-meta-mstc7yuz.js";var n=e(),r=`# Discernment for user experience

As implementation gets faster, design and user experience become even more important. You don't need to become a designer, but you do need to recognize good experience, spec for it, and iterate towards it. A few principles here to guide you.

One is clarity. If users can't tell what your product does, or how to get started, they're gone. Clarity means unifying form and function while respecting people's mental models. Users arrive with expectations, shaped by other software and by the world. Keep it simple and map your interface to concepts they recognize. A patient checking wait times expects it to work like every other status checker.

Two is hierarchy and progressive disclosure. Make it easy for people to scan and find the information that is needed. Don't overwhelm them. Use text size and weight to create good headers. Minify the amount of unneeded elements, and allow people to find the information they need as they need it instead of cramming it all into one space.

Three, accessibility is a baseline, not a nice to have. Screen reader compatibility, color contrast, keyboard navigation, you should ask the AI for these explicitly every single time and build test cases to validate.

Four, feedback and responsiveness. When the user does something, the interface should acknowledge it, not lead the user to question if something might be broken. Loading states, confirmations, and error messages that explain what to do next, all in simple human language, help build trust.

The gap between making it look good and a good experience is enormous. Make it look good is a wish. Put the wait time in the largest text on the page, use a single color to indicate status, and make the refresh time visible so the patient knows how stale the number is, is an actionable, strong Description.

This is Description and Discernment working together. You describe the experience precisely, AI builds it. You evaluate what comes back against what you intended. You describe the gap, repeat.

One thing you'll notice in the exercises, the critique that you'd give a colleague and the description AI needs are not the same document. This feels cluttered is a fair critique, but it's useless instruction for AI. Part of design literacy is learning how to translate your own taste into something that is executable. Let's put it to work.
`;function i(e){let i={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"discernment-for-user-experience",children:"Discernment for user experience"}),`
`,(0,n.jsx)(c,{youtubeId:"jgcF2d0kW7U",title:"Discernment for user experience",duration:"2 min",transcript:r,children:(0,n.jsx)(i.p,{children:`As AI speeds up implementation, design becomes the differentiator. This
lesson covers the UX principles that matter most when working with AI, why
“make it look good” produces nothing useful, and how to close the gap
between a critique you’d give a colleague and a description AI can execute.`})}),`
`,(0,n.jsx)(l,{name:"Embed3",title:"UX Lab: Apply the four principles"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"When implementation is fast, experience is the differentiator."})," Design literacy is a core builder skill."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"“Make it look good” is a wish, not a spec."})," Describe experience with the same precision as a function."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"AI does not get accessibility right by default."})," Specify it, then audit what you get back."]}),`
`,(0,n.jsxs)(i.li,{children:["A good ",(0,n.jsx)(i.strong,{children:"critique"})," and an actionable ",(0,n.jsx)(i.strong,{children:"AI description"})," are different artifacts. Learn to translate between them."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercise",children:"Exercise"}),`
`,(0,n.jsx)(s,{children:(0,n.jsxs)(a,{title:"The Clinic Wait Time Project, Part 3",children:[(0,n.jsx)(i.p,{children:"Write a design spec for your clinic app — user flows, information hierarchy, interaction patterns — then rebuild it with AI against that spec. Critique the result: where did AI nail it, and where is it technically correct but experientially flat? Run a quick accessibility audit and document what AI missed."}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Clarity & Mental Model"})," — Does the output use language and patterns a clinic admin would recognize?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Information Hierarchy"})," — Is the most important information the first thing users see?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Accessibility"})," — Does it pass color contrast, screen reader, and keyboard navigation checks?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Feedback & Error Handling"})," — Does the interface acknowledge user actions and explain what to do when something goes wrong?"]}),`
`]})]})}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How much of your design spec describes what the interface does versus how it should feel to use?"}),`
`,(0,n.jsx)(i.li,{children:"After running the accessibility check, did you build with accessibility in mind from the start, or add it at the end?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"You’ve looked at your Clinic Wait Time Checker through both a code lens and a UX lens. In the next lesson, you’ll tackle the hardest question: what does it mean to actually stand behind what you build?"})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};