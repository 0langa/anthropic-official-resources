import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# When Properties Collide

Over the last few lessons, we've covered four properties that shape how AI systems behave. Next token prediction, knowledge, working memory, and steerability. Now you have four lenses, but they don't exist in isolation. They're interconnected. Most real-world AI surprises aren't single-property failures. They're two properties meeting at the same time. And when you can name which two, the fix becomes obvious.

You asked Claude about a niche topic, and it gave you a paper title, author names, sounds great. Then you go to look it up, and it doesn't exist. This is next token prediction meeting knowledge. Next token prediction is doing what it always does, generating what a plausible answer looks like. A good citation has a title in the right cadence, a journal that sounds real, names that fit the field. Meanwhile, there's a knowledge gap underneath, and the model doesn't know the gap is there. It can't tell the difference between what it knows and what it's generating.

When you observe this, verify specifics independently. Or better, use a tool with source grounding so the model is retrieving real documents rather than generating citation-shaped text.

You set up careful constraints at the start of a long conversation. 20 messages later, Claude is ignoring half of them. This is working memory meeting steerability. Your early context has faded, either pushed out of the window or just receiving less attention than what you said recently. And because steerability works by following whatever instructions are most salient right now, your later messages are quietly overwriting the earlier ones. Resupply critical context. Or if the conversation has gotten unwieldy, start a fresh one and put the essentials up front.

Even before starting your conversation with AI, ask, "Which properties am I looking at with the task I'm trying to accomplish?" That question comes first because the diagnosis determines the fix. A knowledge problem and a working memory problem can produce outputs that look similar on the surface, but they need completely different responses. If you jump straight to, "How do I fix my prompt?" you're guessing. If you name the properties first, you're operating strategically.

This diagnostic step is Discernment in action. Naming the property level failure is exactly what turns vague dissatisfaction into a targeted iteration. You move from, "That wasn't quite right," to, "I need to reground this in a source," or "I need to invite pushback."

And it feeds back into Delegation. If you keep seeing the same compound failure on the same kind of task, that's signal. It tells you which task types to restructure, which to break into smaller pieces, which to keep for yourself. The patterns you diagnose today shape how you delegate tomorrow.
`;function i(t){let i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"diagnosing-ai-failures",children:"Diagnosing AI failures"}),`
`,(0,n.jsx)(c,{youtubeId:"SPkg5WRfnEE",title:"When Properties Collide",duration:"3 min",transcript:r,children:(0,n.jsx)(i.p,{children:`The four properties don't operate in isolation. Most real failures are two of
them intersecting. Once you can name which two, you know which fix to reach
for.`})}),`
`,(0,n.jsx)(i.h2,{id:"two-properties-meeting-diagnosing-what-went-wrong",children:"Two properties meeting: diagnosing what went wrong"}),`
`,(0,n.jsx)(l,{name:"PropertyCollisionArena",title:"When Properties Collide — interactive exercise"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Real-world failures are usually two properties interacting"}),", not one."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Diagnostic pairs to recognize:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Next Token Prediction + Knowledge (hallucinated specifics)"}),`
`,(0,n.jsx)(i.li,{children:"Working Memory + Steerability (long-conversation drift)"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Naming the properties at play"})," points you straight to the fix: verify specifics, re-supply context, offload to code execution, or invite pushback."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"This diagnostic move is Discernment applied."})," You evaluate better when you know what kind of wrong you're looking at."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,n.jsx)(s,{children:(0,n.jsxs)(a,{title:"The Failure Diagnosis",note:"Why? Most real-world AI failures aren't one property acting up. They're two properties meeting at the same time. Naming which two changes the fix entirely.",children:[(0,n.jsx)(i.p,{children:"Think back across your experience with AI (including what you've observed during this course). Identify two or three times an AI output genuinely disappointed or surprised you. For each one, describe it in a sentence or two: what you asked, what you got, what was disappointing or surprising."}),(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Walk through each event with the AI."}),' Describe what happened and ask: "Based on the four properties (Next Token Prediction, Knowledge, Working Memory, Steerability), which ones were likely at play here, and why?"']}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Evaluate its diagnosis against what you now know."})," Do you agree? If not, push back. (Remember the sycophancy fingerprint from Lesson 3: the AI may agree with your framing too readily. If you think it's wrong, say so.)"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"For each diagnosis, ask:"}),` "Given that diagnosis, what's the most targeted fix?" If you can, test the adjustment right now on a similar task.`]}),`
`]}),(0,n.jsx)(i.p,{children:"Now look at your Lesson 1 task list with all its accumulated annotations (property tags from Lesson 2, verification scores from Lesson 4, knowledge flags from Lesson 5, context needs from Lesson 6, goal statements from Lesson 7). For the tasks that gave you the most trouble, name which two properties were colliding. Write the diagnosis next to each one."})]})}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Did naming the property pair change what fix you'd reach for? Before this course, would you have tried a different (less effective) fix?"}),`
`,(0,n.jsx)(i.li,{children:"Which property pairing do you think you'll encounter most often in your day-to-day work?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"In the final lesson, we consolidate what you've built, connect it back to the 4D Framework as a complete system, and point you to where to go deeper."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};