import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Delegation & the builder's toolkit

If you've spent any time building with AI, you've probably noticed something. The hard part isn't getting AI to write code, the hard part is knowing what code you want an AI to write. Many people think of delegating something to an AI as a simple yes or no question. But for builders, knowing exactly what and how to delegate is much more complex. Your customer comes to you with a problem. How do you decompose it into something that you can actually build? And what role does AI play at each stage of that work?

Here's a useful frame. Imagine yourself as the lead on a project and AI as your team. A great lead doesn't just assign tasks. They frame the problem so everyone understands what they're solving. They set goals so the team knows what good looks like. They decide what to tackle first. And critically, they know which decisions to make themselves, and which ones to hand off. That's Delegation in the builder sense. And it starts well before any code gets written.

Every builder carries a toolkit that they may not know that they have. You could boil it down to six capabilities you can reach for at any different moment in a build. AI can help with all six, but it's much stronger at some than others, and knowing the difference is a key part of AI fluency for builders.

The first capability is empathy. What does the person we're building for actually need? Not what they said that they want, but what will actually truly help their work. This is where you talk to users and observe what frustrates them. AI can help you organize what you learn here, but it can't sit with a clinic receptionist and notice that she checks her phone 40 times a day because patients keep calling to ask about wait times. That observation is all you.

The second is design. What should we build, and why? This is where you weigh trade-offs, make bets, and decide what matters. Should it be a text message or a web page? Should it show exact wait times or ranges? Those are judgment calls. All AI can do is generate options, but the judgment about which option fits is yours.

Third is architecture. How should the thing be structured? What are the pieces, and how do they fit together? AI knows patterns. It's seen a thousand systems like the one you're sketching, but it doesn't know your constraints, your team skills, or what you need to change six months from now. 'Human plus AI' works really, really well here.

Fourth is implementation, writing the actual code. This is where AI is the strongest. Once you know what you're building, and how it should be structured, AI can write working code effectively. This is the capability you should delegate most aggressively. If you've entered this stage without clearly defined tests and success checkpoints, you've probably skipped a step.

Fifth is judgment. Does it actually work? Is it actually good? Would you put your name on it? AI will tell you the code runs, but it won't tell you if the experience feels right, whether the edge cases matter, or whether you've solved a real problem at hand. Judgment requires your expertise, standards, and perspective.

Last is shipping. Getting it to real users and learning from what happens. This means communication, measurement, iteration. AI can draft release notes, but it can't read the room when your user hesitates before clicking.

Now look at the shape of that list. Implementation sits right in the middle, and that's where AI is the strongest. Empathy, judgment, and shipping sit at the edges, and that's where AI is the weakest. That's the key insight for this course. AI is the strongest in the middle of the toolkit, and weakest at the edges. The edges are where the human work lives. The edges are where the value is.

So what does good Delegation look like in practice? It looks like spending real time at the beginning of a project getting clear on who you're building for, and defining what success means. It looks like inspecting the results skeptically, and keeping judgment calls in your own hands.

There's a temptation, once you have a tool that can write code instantly, to skip straight to building, to treat empathy and design work as overhead. Resist that feeling. The faster AI makes implementation, the more your value shifts to everything around it.

The builders who thrive in this era won't be the ones who prompt the fastest. They will be the ones who frame problems clearly, who know what good looks like before they start, and who can tell the difference between code that runs and code that matters. The work starts now. Let's get into it.
`;function i(t){let i={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"delegation-the-builders-toolkit",children:"Delegation & the builder's toolkit"}),`
`,(0,n.jsx)(c,{youtubeId:"AWSZoy3w_nE",title:"Delegation & the builder's toolkit",duration:"5 min",transcript:r,children:(0,n.jsx)(i.p,{children:`Before you write a single line of code, you make a dozen decisions that
shape whether what you build will matter. This lesson reframes delegation:
it’s not “should I use AI here?” but “I have a customer problem — how do I
break it down, and what role does AI play?”`})}),`
`,(0,n.jsx)(l,{name:"Embed1",title:"The Builder's Toolkit"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Delegation"})," means decomposing the problem first, then deciding what AI handles at each step."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Write acceptance tests"})," before code. They give you and AI a shared definition of done."]}),`
`,(0,n.jsxs)(i.li,{children:["As AI accelerates implementation, your value shifts to ",(0,n.jsx)(i.strong,{children:"framing problems"})," and ",(0,n.jsx)(i.strong,{children:"raising the bar"}),"."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercise",children:"Exercise"}),`
`,(0,n.jsx)(s,{children:(0,n.jsxs)(a,{title:"The Clinic Wait Time Project, Part 1",note:"This project threads through the entire course. You'll return to it in every lesson, and by the end you'll have built something real. But in this lesson, you write zero code. That's intentional.",children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"The scenario:"})," A community health clinic needs a way for patients to check wait times before coming in. That’s all you’ve been told."]}),(0,n.jsx)(i.p,{children:"Your job this session is to do the work that comes before building. You’ll produce three deliverables."}),(0,n.jsx)(i.h3,{children:"Deliverable 1: A Problem Brief (one page max)"}),(0,n.jsx)(i.p,{children:"Answer these questions in plain language:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Who are the users? Be specific. Patients, yes — but which patients? What about staff? Who else touches this?"}),`
`,(0,n.jsx)(i.li,{children:"What do they actually need? Not “a wait time checker.” What outcome are they hoping for?"}),`
`,(0,n.jsx)(i.li,{children:"What does a great solution feel like to use? Describe the experience, not the features."}),`
`,(0,n.jsx)(i.li,{children:"What are the real constraints? Think budget, technical skill at the clinic, patient access to devices, privacy requirements."}),`
`]}),(0,n.jsx)(i.h3,{children:"Deliverable 2: A Delegation Plan"}),(0,n.jsxs)(i.p,{children:["Map the build to the six toolkit capabilities. For each one, decide which AI collaboration mode fits best: ",(0,n.jsx)(i.strong,{children:"Automation"})," (AI does it, you check), ",(0,n.jsx)(i.strong,{children:"Augmentation"})," (you and AI work it together), or ",(0,n.jsx)(i.strong,{children:"Agency"})," (AI operates with latitude inside boundaries you set). Make a simple table — six rows, one per capability."]}),(0,n.jsx)(i.h3,{children:"Deliverable 3: Acceptance Tests"}),(0,n.jsx)(i.p,{children:"Write five to seven statements that define “done.” Each must be concrete enough that a stranger could tell you whether the finished product passes or fails."}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Good:"}),` “A patient with a basic smartphone can find the current wait time in under 30 seconds without creating an account.”
`,(0,n.jsx)(i.strong,{children:"Bad:"})," “The system is easy to use.”"]})]})}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Where did you spend most of your time across the six capabilities on a past project? Where should you have spent more?"}),`
`,(0,n.jsx)(i.li,{children:"If implementation became effectively free tomorrow, where would your value as a builder come from?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"In the next lesson, we move from delegation to description. You’ve decided what to build and who’s doing what — now you need to communicate that clearly enough that AI can actually execute it."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};