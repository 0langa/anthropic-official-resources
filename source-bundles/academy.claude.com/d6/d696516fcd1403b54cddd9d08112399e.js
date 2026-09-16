import{Gp as e,qp as t}from"../../../../../content-de-meta-jwql3rqc.js";import{t as n}from"../../../../../steerability-mrakjhny.js";var r=e();function i(e){let i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"how-steerability-affects-generative-ai-outputs",children:"How steerability affects generative AI outputs"}),`
`,(0,r.jsx)(c,{youtubeId:"M_RwSRmp220",title:"Steerability",duration:"5 min",transcript:n,children:(0,r.jsx)(i.p,{children:`The model follows your instructions the same way it does everything else: by
continuing a pattern. That makes it remarkably steerable. It also means
there's always a gap between what you intended and what landed, and most of
the interesting failures live in that gap.`})}),`
`,(0,r.jsx)(i.h2,{id:"how-much-are-you-actually-in-control",children:"How much are you actually in control?"}),`
`,(0,r.jsx)(l,{name:"PredictBox",variant:"steerability",title:"Steerability — interactive exercise"}),`
`,(0,r.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Steerability"})," means the model follows instructions via Next Token Prediction.",`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Capability zone:"})," short, concrete, verifiable instructions. Format specs, length limits, explicit roles."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Limitation zone:"})," long chains of reasoning, abstract or ambiguous instructions, anything requiring native numerical or logical precision."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Characteristic failures:"})," reasoning drift (small errors compound) and letter-over-spirit (the instruction was honored but the intent wasn't)."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"System prompts, code execution, visible reasoning, and structured output modes"})," exist to keep your intent from diluting."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"When an instruction is followed literally but uselessly, restate the goal."})," Repeating the instruction with more force won't close the gap."]}),`
`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"4D connection:"})," Steerability is what makes Description powerful and what bounds it. Understanding the gap between words and intent changes how you write prompts and where you insert checkpoints."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,r.jsx)(s,{children:(0,r.jsxs)(a,{title:"The Goal Rewrite",note:"Why? The gap between what you say and what you mean is where most steerability failures live. This exercise teaches you to prompt from intent, not just from instruction.",children:[(0,r.jsx)(i.p,{children:`Pick a task from your Lesson 1 list that involves multiple steps or a specific output format. Write down the goal in one sentence: what you're actually trying to accomplish, not just what the output should look like. ("Convince my team this timeline is realistic" is a goal. "Three bullet points" is a format.)`}),(0,r.jsx)(i.p,{children:"Now run three probes:"}),(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 1: Tight control."}),' Give a short, concrete, verifiable instruction related to your task: "respond as a three-column table," "exactly five bullet points," "second person throughout." Check whether it held precisely. This is the capability zone: the instruction is simple enough to pattern-match perfectly.']}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 2: Reasoning drift."})," Ask for a version of your task that requires 4–5 dependent steps. Review the output step by step. Did a small error early on carry through to the end? Now try again, but ask the AI to stop and show you the result of step 2 before continuing. Compare what you get when you insert a checkpoint versus when you let it run."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Probe 3: Letter vs. spirit."}),` Give an instruction that could be satisfied literally but uselessly. "Make this shorter" on a draft where the real problem is structure. "Make this more professional" on an email where the real problem is that it's burying the ask. See what you get. Then re-prompt with the goal stated explicitly alongside the instruction: "Make this shorter. My goal is to keep the executive's attention through the key finding on page two." Compare.`]}),`
`]}),(0,r.jsx)(i.p,{children:"Go back to your task list. For any multi-step tasks, note where you'd insert a checkpoint. For any tasks where you've been prompting with format alone, draft the goal statement you'll add next time."})]})}),`
`,(0,r.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:"How often have you been stating format but not goal? What changes when you include both?"}),`
`,(0,r.jsx)(i.li,{children:"What's one recurring task where you'll add a mid-process checkpoint starting this week?"}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,r.jsx)(i.p,{children:"You've now met all four properties individually. In the next lesson we look at how they interact, because most real-world failures are two properties meeting."})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};