import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";var n=t(),r=`# Diligence & sharing your work

Hi there, my name is Martina, and I'm an engineer at Anthropic. Throughout this course, you've delegated, described, and discerned. You have a clinic app that works. It's almost time to ship it.

In the 4D Framework, Diligence means taking responsibility for what you build with AI. Essentially, making sure your use of AI is transparent, ethical, and accountable. This includes being transparent about your AI use and disclosing it, taking ownership of the outputs that AI creates, verifying work before you ship, considering the impact of what you built on others, and honoring policies, privacy, and professional standards that govern AI use in your organization or industry. Rather than tell you what to value, I'm going to show you what Diligence looks like in my day-to-day as an engineer.

With AI, you can end up being the owner of code you didn't write. Diligence is how you catch up to your own code. Understand it, stress it, test it, and put the systems in place that catch what you miss. For me, that comes down to three habits.

When you're writing code yourself, it becomes apparent as you go that there are things you hadn't thought of. Some edge case, some decision you hadn't realized needed to be made. With AI, sometimes those end up getting decided without ever being surfaced to you. So I try to recreate that step on purpose, get those questions out in the open where I can actually weigh in. When an edge case pops into my head, I'll just say to the model, like, "Can you double check that users can't view other users' files?" After Claude builds something substantial, I ask directly, "What assumptions and trade-offs did you make?" What security risks should I be aware of? That ensures that you're looped in on the important decisions.

When Claude writes most of a pull request, I make sure to say so in the Description, not as a disclaimer, as information. This is relevant because AI makes a different shape of mistake than humans do. Deprecated APIs used confidently, code that's locally clean but inconsistent with the codebase, invented behavior for cases you never specified. A reviewer who knows that can better tailor their review.

It's easy to feel out of your depth when AI does the building. You can end up with working code you don't understand, which wasn't really possible before. But it's not that you can't understand it, it's just a separate step now, and AI can help with that too. Claude is more than happy to sit with you and patiently explain. It takes a bit of time, but that's what puts you back in the loop.

Here's the thing, the engineering best practices that existed before AI still apply after, maybe even more so, because now you're shipping faster, and you understand a smaller fraction of what you shipped. Tests are still the easiest way to make sure you don't break something while moving this fast. A solid test suite pins down the behavior you care about, so you can keep iterating without fear.

Observability hasn't gone anywhere either. Some things only show up when real users have it: so you want logs, error tracking, dashboards. You find out from your own data, not from a user email. And feature flags remain useful for when something does slip through. Having these safety nets in place is what lets you move fast safely.

Verification, transparency, understanding. Tests on one end, observability on the other. None of this is new to engineering. AI is just a new tool under your belt to get there.
`;function i(t){let i={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"diligence-sharing-your-work",children:"Diligence & sharing your work"}),`
`,(0,n.jsx)(c,{youtubeId:"wrgLtG-IHKk",title:"Diligence & sharing your work",duration:"3 min",transcript:r,children:(0,n.jsx)(i.p,{children:`Diligence in the builder model is full ownership: you’re responsible for
the product from whether it should exist to whether it’s serving users
after launch. This lesson covers what it means to ship, the technical
realities AI won’t warn you about, why tests become your safety net the
moment something is live, and the underrated skill of deprecating your own
work.`})}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"You own the outcome, not the output."})," “AI wrote it” explains nothing and excuses nothing."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Shipping has its own technical vocabulary"})," (migrations, versioning, rate limits, feature flags) that AI will not surface unless you ask."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Tests make post-launch iteration safe."})," The test-first habit is why you can keep changing things confidently."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Prototype freely, ship selectively."})," Cheap code creates value only when paired with honest evaluation."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Access is a design decision."})," Check who your assumptions exclude before you call something shipped."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercise",children:"Exercise"}),`
`,(0,n.jsx)(s,{children:(0,n.jsxs)(a,{title:"Ship the Clinic app",note:"Shipping is where diligence becomes real — before you deploy, answer each of these honestly.",children:[(0,n.jsx)(i.p,{children:"Once you’ve worked through these, deploy your app or host it as a prototype, share it with three real users, and make one iteration based on what you learn, with tests that verify the change."}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Understanding"})," — Can you explain what your code does, not just what it should do?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Testing"})," — Do your acceptance tests still pass? Have you tested edge cases — closed clinic, missing data, zero wait time?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Access"})," — Who does your build not serve well?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Responsibility"})," — Could this output be misread or misused? Have you been transparent about AI’s role?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Feedback loop"})," — How will you know if it’s working after it ships?"]}),`
`]})]})}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How has your thinking about AI integration changed from the beginning of this course?"}),`
`,(0,n.jsx)(i.li,{children:"What’s one thing you’ll do differently in your work with AI based on what you’ve learned?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"You’ve built, evaluated, and shipped the Clinic Wait Time Checker. In the final lesson, you’ll bring the full 4D Framework together and leave with a real task already in motion."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};