import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Steerability

Hi there, my name's Matt and I'm on the user research team at Anthropic. Today I'm here to talk to you about steerability in AI models. We'll look at why instructions work so well most of the time, why they sometimes land in a way that's technically correct but totally useless, and what you can do to keep the model pointed at what you actually want. If you've ever told an AI, "Be concise," and it dutifully trimmed the response but cut the one part you cared about, you've already encountered this topic.

Steerability is the model's ability to follow your directions. You say, "Respond with a table," and you get a table. You say, "Write this from a skeptic's point of view," and it shifts perspective. Specify a role, a tone, a format, a word limit, a set of rules, and the model applies them, often on the first try.

This didn't happen automatically. Out of the box, a pre-trained model is a document completer with no concept of helping. Fine-tuning is a second round of training where the model learns from curated examples of good assistant behavior. That's where it picks up the habit of treating your text as a request, breaking tasks into steps, and following the rules you set.

But steerability isn't the same thing as understanding. The model follows your instructions through the same pattern completion engine it uses for everything else. There's always some gap between the words you typed and the intent you had in mind, and many interesting AI limitations live in that gap.

Let me show you what that gap looks like. I'll ask Claude, "Summarize this report in under 100 words. And make it punchy." So that's 100 words. It's punchy. The instruction was followed to the letter. But the one qualified finding I actually needed made the summary less punchy, so it got cut. The model honored what I said and missed what I meant.

It helps to picture your instructions on a spectrum. On one end, you've got directions that are short, concrete, and easy to check. "Respond as a table." "Under 100 words." "Use this exact schema." These sit firmly in the capability zone. The pattern is simple to match, and you can verify it at a glance. Slide toward the other end, and control starts to thin out. Long chains of reasoning where a small mistake in step two quietly carries through steps three, four, and five. Abstract directions like, "Be insightful" where the model has to guess what you mean.

So the question to ask yourself isn't, "Did I write a good prompt?" It's more like, "How much room is there between what I typed and what I actually want?" When you're in the capability zone, steerability gives you a lot. Tight control over format and style, the ability to set a persona and have the model hold it across a whole conversation, multi-step task execution where you lay out a process and it works through it, and iterative refinement where shorter, more formal, try the opposite angle, all land.

Drift toward the edge and you'll see reasoning drift. Small errors compound over long chains and the model doesn't notice. Letter over spirit. Like we just saw, the instruction is honored literally but uselessly. Instructions as an attack surface. Because the model follows instructions embedded in text, a malicious instruction hidden inside a document or web page can be followed too. This is called prompt injection. More of a security concern than a daily one, but worth knowing exists.

A few product features are built specifically to narrow these gaps. System prompts and custom instructions give you standing directions that don't dilute as the conversation gets longer. Visible reasoning lets you catch drift at step two rather than discovering it in the final answer. And structured output modes, JSON schemas, function calling, narrow the room for letter over spirit wandering.

State the goal alongside the steps. "I'm trying to persuade a skeptical audience," gives the model more to work with than a format spec alone. Break long chains with checkpoints. Ask for an intermediate result you can verify before the model keeps going. When an instruction lands literally but uselessly, restate the goal rather than the instruction. Repeating, "Be concise" louder doesn't fix a concision problem that was really an intent problem. Keep concrete, verifiable instructions near the task. Short and checkable beats long and ambiguous.

In the 4D Framework, steerability is both the thing Description exploits and the constraint it operates inside. Good Description narrows the gap between your words and your intent, and it shapes Delegation too. Tasks that need long reasoning chains or native numeric precision need either tighter human checkpoints or a different tool entirely.

The model will follow you. Your job is to make sure 'following you' and 'doing what you actually need' point in the same direction.
`;function i(t){let i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c,ResourceWidget:l}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),l||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"how-steerability-affects-generative-ai-outputs",children:"How steerability affects generative AI outputs"}),`
`,(0,n.jsx)(c,{youtubeId:"M_RwSRmp220",title:"Steerability",duration:"5 min",transcript:r,children:(0,n.jsx)(i.p,{children:`The model follows your instructions the same way it does everything else: by
continuing a pattern. That makes it remarkably steerable. It also means
there's always a gap between what you intended and what landed, and most of
the interesting failures live in that gap.`})}),`
`,(0,n.jsx)(i.h2,{id:"how-much-are-you-actually-in-control",children:"How much are you actually in control?"}),`
`,(0,n.jsx)(l,{name:"PredictBox",variant:"steerability",title:"Steerability — interactive exercise"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Steerability"})," means the model follows instructions via Next Token Prediction.",`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Capability zone:"})," short, concrete, verifiable instructions. Format specs, length limits, explicit roles."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Limitation zone:"})," long chains of reasoning, abstract or ambiguous instructions, anything requiring native numerical or logical precision."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Characteristic failures:"})," reasoning drift (small errors compound) and letter-over-spirit (the instruction was honored but the intent wasn't)."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"System prompts, code execution, visible reasoning, and structured output modes"})," exist to keep your intent from diluting."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"When an instruction is followed literally but uselessly, restate the goal."})," Repeating the instruction with more force won't close the gap."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"4D connection:"})," Steerability is what makes Description powerful and what bounds it. Understanding the gap between words and intent changes how you write prompts and where you insert checkpoints."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,n.jsx)(s,{children:(0,n.jsxs)(a,{title:"The Goal Rewrite",note:"Why? The gap between what you say and what you mean is where most steerability failures live. This exercise teaches you to prompt from intent, not just from instruction.",children:[(0,n.jsx)(i.p,{children:`Pick a task from your Lesson 1 list that involves multiple steps or a specific output format. Write down the goal in one sentence: what you're actually trying to accomplish, not just what the output should look like. ("Convince my team this timeline is realistic" is a goal. "Three bullet points" is a format.)`}),(0,n.jsx)(i.p,{children:"Now run three probes:"}),(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Probe 1: Tight control."}),' Give a short, concrete, verifiable instruction related to your task: "respond as a three-column table," "exactly five bullet points," "second person throughout." Check whether it held precisely. This is the capability zone: the instruction is simple enough to pattern-match perfectly.']}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Probe 2: Reasoning drift."})," Ask for a version of your task that requires 4–5 dependent steps. Review the output step by step. Did a small error early on carry through to the end? Now try again, but ask the AI to stop and show you the result of step 2 before continuing. Compare what you get when you insert a checkpoint versus when you let it run."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Probe 3: Letter vs. spirit."}),` Give an instruction that could be satisfied literally but uselessly. "Make this shorter" on a draft where the real problem is structure. "Make this more professional" on an email where the real problem is that it's burying the ask. See what you get. Then re-prompt with the goal stated explicitly alongside the instruction: "Make this shorter. My goal is to keep the executive's attention through the key finding on page two." Compare.`]}),`
`]}),(0,n.jsx)(i.p,{children:"Go back to your task list. For any multi-step tasks, note where you'd insert a checkpoint. For any tasks where you've been prompting with format alone, draft the goal statement you'll add next time."})]})}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How often have you been stating format but not goal? What changes when you include both?"}),`
`,(0,n.jsx)(i.li,{children:"What's one recurring task where you'll add a mid-process checkpoint starting this week?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"You've now met all four properties individually. In the next lesson we look at how they interact, because most real-world failures are two properties meeting."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};