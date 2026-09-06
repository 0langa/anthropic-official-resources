import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";var n=t(),r=`# Discernment for code

You've now built something with AI. It runs. The tests pass. But so what?

Think about the project we've been building. Did it handle a scenario where a patient's estimated wait time suddenly jumps from 10 minutes to 90? Did it account and solve for different patient needs? Did it build in historical biases from the existing data? A working product and a good product are not always the same thing. And when AI can produce a working product in minutes, your ability to tell the difference becomes the most valuable skill in the room.

This module gives you a structure for that judgment. Five lenses and five questions to ask of anything that AI builds.

The first lens is functional integrity. Does it actually work? Bugs, errors, security holes. This is where most code review stops. It's necessary, but it's not close to sufficient.

In our project example, AI built sound logic to display wait times, but did it account for patient priority? What about conflicting data points and determining which one to display? When building, consider the full gamut of functional tests: unit tests, integration tests, regression tests, edge cases, end-to-end.

And here's a habit that matters. AI should be building tests alongside the code, not after it. When you prompt, ask it to write test cases in the very same pass, then build in regular checkpoints. A test suite that hasn't been run is not a safety net. It's just a false sense of security.

The second lens is production readiness. Does it actually work well? Performance, scalability, reliability, what happens under load? What happens when hundreds of people try to refresh at the same time?

AI has specific blind spots here. So how do you verify this in your building process? A few concrete moves: ask AI to stress test its own output, have it generate production scenarios, and check how the code handles them. Ask it explicitly, "What production assumptions does this code make?" You'll surface things that were missed in the first pass.

In your project, did the code account for when the API call takes five seconds too long? Does the display freeze, show stale data, or fail gracefully? AI doesn't think about that. That's with you.

The third lens is problem fit. Is it the right thing? Does it solve the user's actual problem? Or the problem the user thinks they have? Those can diverge, as you saw in the last lesson.

The patient asked about wait times, and at face value AI can build an estimated wait time display, but what the patient really needed to know was if there was a pediatrician available in the next 20 minutes, so they could assess if their child's fever is critical or not. AI solved the stated problem, but you need to check whether that's the real problem.

The fourth lens is experience quality. Is it actually good? Is the experience clear, intuitive, accessible?

AI doesn't have taste, it has patterns. It will give you a competent interface that no one enjoys using. For a clinical wait time tool, that's not just an aesthetic problem, it's a patient safety issue. It's your job as the builder to notice this, and translate it into something concrete and fixable. We'll talk more about Experience Discernment in the next lesson.

The fifth lens is responsible impact. Is it responsible? Bias? Privacy? Unintended consequences? Who could this harm? What does it assume about the user that might not be true?

Let's look back at the clinical wait time tool. Is the algorithm estimating wait times trained on historical data. If that data reflects existing bias, systemic inequities contributing to longer wait times for certain demographics, the model may reproduce that same pattern. It won't flag it, it will just display a number.

Build guardrails. Ask AI to name its bias as it builds. And most importantly, question all assumptions.

Most engineering education stops at the first two lenses, but builders need all five. And here's what you'll find when you start applying them. The biggest problems are almost never at lens 1. AI is good at producing code that runs. It needs your oversight to produce a product that matters.

One more thing, when you find something that isn't good enough, notice your own instinct. Do you reach in and fix it yourself, or do you go back and describe better what you needed? Neither is wrong, but the pattern tells you something about how you're working with AI, and whether you're building Discernment, or just building.

Alright, it's time to apply these lenses. Let's go.
`;function i(t){let i={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"discernment-for-code",children:"Discernment for code"}),`
`,(0,n.jsx)(c,{youtubeId:"7J2-HzHs4c8",title:"Discernment for code",duration:"5 min",transcript:r,children:(0,n.jsx)(i.p,{children:`When AI can spin up a working product in minutes, “working” stops being the
bar. You’ll learn where AI-built products typically fail, the technical
blind spots that surface in production but not in development, and how to
build the taste that AI doesn’t have.`})}),`
`,(0,n.jsx)(l,{name:"Embed2",title:"The Five Lenses of Discernment"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Code that runs can still fail."})," The default AI output is technically complete but often misses the point."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"AI has predictable blind spots"})," in concurrency, security, and anything that only breaks at scale."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Taste is a builder skill."})," AI delivers functional. Making it worth using is on you."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercise",children:"Exercise"}),`
`,(0,n.jsx)(s,{children:(0,n.jsx)(a,{title:"User testing the Clinic project",children:(0,n.jsx)(i.p,{children:"Put your build in front of a partner playing a patient or clinic admin — don’t explain, don’t help. Watch where they get confused, what they ignore, and what they wanted that you never built. Write down three things you’d change and which lens each falls under."})})}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Which of the five lenses do you naturally apply, and which do you have to remind yourself to check?"}),`
`,(0,n.jsx)(i.li,{children:"When AI produces something that isn’t good enough, what’s your instinct: fix it yourself, or describe it better?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"You’ve stress-tested the Clinic Wait Time Checker through the lenses you tend to skip. Next, you’ll look at the same tool through a different lens: how does it actually feel to use?"})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};