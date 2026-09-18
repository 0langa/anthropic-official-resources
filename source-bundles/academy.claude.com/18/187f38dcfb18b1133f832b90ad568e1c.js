import{$p as e,Zp as t}from"../../../../../content-de-meta-ee5tgx76.js";import{t as n}from"../../../../../when-properties-collide-lpn3k3ep.js";var r=t();function i(t){let i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"diagnosing-ai-failures",children:"Diagnosing AI failures"}),`
`,(0,r.jsx)(c,{youtubeId:"SPkg5WRfnEE",title:"When Properties Collide",duration:"3 min",transcript:n,children:(0,r.jsx)(i.p,{children:`The four properties don't operate in isolation. Most real failures are two of
them intersecting. Once you can name which two, you know which fix to reach
for.`})}),`
`,(0,r.jsx)(i.h2,{id:"two-properties-meeting-diagnosing-what-went-wrong",children:"Two properties meeting: diagnosing what went wrong"}),`
`,(0,r.jsx)(l,{name:"PropertyCollisionArena",title:"When Properties Collide — interactive exercise"}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Real-world failures are usually two properties interacting"}),", not one."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Diagnostic pairs to recognize:"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Next Token Prediction + Knowledge (hallucinated specifics)"}),`
`,(0,r.jsx)(i.li,{children:"Working Memory + Steerability (long-conversation drift)"}),`
`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Naming the properties at play"})," points you straight to the fix: verify specifics, re-supply context, offload to code execution, or invite pushback."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"This diagnostic move is Discernment applied."})," You evaluate better when you know what kind of wrong you're looking at."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,r.jsx)(s,{children:(0,r.jsxs)(a,{title:"The Failure Diagnosis",note:"Why? Most real-world AI failures aren't one property acting up. They're two properties meeting at the same time. Naming which two changes the fix entirely.",children:[(0,r.jsx)(i.p,{children:"Think back across your experience with AI (including what you've observed during this course). Identify two or three times an AI output genuinely disappointed or surprised you. For each one, describe it in a sentence or two: what you asked, what you got, what was disappointing or surprising."}),(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Walk through each event with the AI."}),' Describe what happened and ask: "Based on the four properties (Next Token Prediction, Knowledge, Working Memory, Steerability), which ones were likely at play here, and why?"']}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Evaluate its diagnosis against what you now know."})," Do you agree? If not, push back. (Remember the sycophancy fingerprint from Lesson 3: the AI may agree with your framing too readily. If you think it's wrong, say so.)"]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"For each diagnosis, ask:"}),` "Given that diagnosis, what's the most targeted fix?" If you can, test the adjustment right now on a similar task.`]}),`
`]}),(0,r.jsx)(i.p,{children:"Now look at your Lesson 1 task list with all its accumulated annotations (property tags from Lesson 2, verification scores from Lesson 4, knowledge flags from Lesson 5, context needs from Lesson 6, goal statements from Lesson 7). For the tasks that gave you the most trouble, name which two properties were colliding. Write the diagnosis next to each one."})]})}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"Did naming the property pair change what fix you'd reach for? Before this course, would you have tried a different (less effective) fix?"}),`
`,(0,r.jsx)(i.li,{children:"Which property pairing do you think you'll encounter most often in your day-to-day work?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"In the final lesson, we consolidate what you've built, connect it back to the 4D Framework as a complete system, and point you to where to go deeper."})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};