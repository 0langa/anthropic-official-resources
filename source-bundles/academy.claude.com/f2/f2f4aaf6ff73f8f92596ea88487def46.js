import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Intro to AI Capabilities and Limitations

Hi there, my name is Kristen, and I'm on the education team at Anthropic. Welcome to AI Capabilities and Limitations. If you've taken our AI Fluency Framework and Foundations course, you already know the 4Ds: Delegation, Description, Discernment, and Diligence. Those are human competencies. They're what you do when you collaborate with AI.

This course is the companion piece. It's about what the machine does when a human prompts it, and why. We're going to help you build a working mental model of where AI outputs actually come from. Importantly, this course centers on how AI is created, so it will remain useful and relevant even as AI models and products change.

You can't delegate a task to AI without knowing where the model is strong and where it's weak. You can't discern the quality of an output from AI without some picture of how that output was produced, and what to look out for. Everything you learn in this course is actionable through the 4Ds. Understanding that AI is a prediction engine changes how you describe tasks to it. Understanding the context window changes how you delegate long tasks. The two frameworks fit together.

Here's the roadmap for the course. First, we'll look at the two training stages that give an AI its character, and the fingerprints each one leaves on the finished system, pre-training and fine-tuning. Pre-training builds a document completer, while fine-tuning shapes AI into an assistant. Both stages matter for understanding why the model behaves the way it does.

And then we'll cover four core properties of generative AI: next token prediction, knowledge, working memory, and steerability. Each property is a continuum. You'll learn to evaluate where your task falls along the continuum for each property, whether it's in the capability zone or drifting towards the edge.

Finally, we'll look at how everything interconnects. Most real-world failures with AI are two properties meeting. A hallucinated citation is next token prediction meeting a knowledge gap. Drift over a long conversation is working memory meeting steerability. When you can name the combination, you know why it's happening and what to do about it.

Models will keep changing. Context windows grow. Hallucination rates drop. New features ship every month. The specifics shift constantly. But the shape of these properties stays useful. Next token prediction will still be next token prediction a year from now. The knowledge cutoff might move, but there will still be one. The context window might get bigger, but it'll still be an edge. What you're building here is a durable mental model, one that survives daily product updates and model releases.

As with all courses, the person doing the work is doing the learning. To get the most out of this course, spend time doing the exercises. The exercises are where the learning happens. We've designed them so you're testing each property against your own work in a domain where you're the expert. That's deliberate. You need to explore situations where you can actually tell if something's off.

So bring real tasks. Run real prompts. When we cover working memory, load in your actual long documents. When we cover next token prediction, ask about your actual niche topics. The goal is a calibration you can feel, not a list of terms you memorize.

Alright, I'm glad you're on this learning journey with me and the rest of our team. Together, we'll demystify how AI works and how you can use it to augment your thinking and your work.
`;function i(t){let i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CourseRoadmap:a,Exercise:s,ExerciseDeck:c,LessonVideo:l}=i;return a||o("CourseRoadmap",!0),s||o("Exercise",!0),c||o("ExerciseDeck",!0),l||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"welcome-to-the-ai-capabilities-and-limitations-course",children:"Welcome to the AI Capabilities and Limitations Course"}),`
`,(0,n.jsx)(l,{youtubeId:"Sj1yynxA9hw",title:"Intro to AI Capabilities and Limitations",duration:"4 min",transcript:r,children:(0,n.jsx)(i.p,{children:`The 4D Framework teaches YOU how to collaborate with AI. This course teaches
you how AI is able to work with you. Together they're one system: human
competencies on one side and machine properties on the other.`})}),`
`,(0,n.jsx)(i.h2,{id:"a-mental-model-of-the-machine",children:"A mental model of the machine"}),`
`,(0,n.jsx)(a,{sections:[{title:"What we mean by AI",description:"What is generative AI and how does it differ from other types of AI?"},{title:"How AI is trained",description:"How do pretraining and fine tuning give AI its character?"},{title:"Properties of AI",description:"What are next token prediction, knowledge, working memory, and steerability?"},{title:"Putting it all together",description:"What happens when properties collide in real life situations?"},{title:"Next steps",description:"How do you use this knowledge to use AI safely, effectively, and ethically?"}]}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"The AI Fluency Framework (4Ds)"})," describes human competencies. This course describes the machine properties those competencies respond to."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Generative AI has four core properties:"})," Next Token Prediction, knowledge, working memory, and steerability."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"This material is durable"})," because the properties stay stable even as models improve. Boundaries shift but the properties remain the same."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,n.jsx)(c,{children:(0,n.jsxs)(s,{title:"Mapping Your Current AI Use",note:"Why? This is the foundation for every exercise that follows in this course.",children:[(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"List 4–6 tasks you've actually used AI for in the last two weeks."}),` If you haven't used AI much yet, list tasks you'd like to use it for. Be specific: "drafted a client email explaining a project delay" tells you something. "Writing" doesn't.`]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"For each task, note one line:"})," did the output land on the first try, or did you need to rework it before it was usable? Don't overthink this. A quick gut check is fine."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Now share your list with Claude (or any AI assistant) and ask:"}),` "For each of these tasks, what's one way this could go wrong if I'm not paying attention?" See if the failure modes it names feel relatable. If they don't, push back: "That doesn't match my experience. Here's what actually went wrong..."`]}),`
`]}),(0,n.jsx)(i.p,{children:"Hold onto this list. You'll return to it in every lesson, and it'll look different each time you do."})]})}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:'Which of your listed tasks felt "safe" to hand to AI, and which felt risky? Can you articulate why yet?'}),`
`,(0,n.jsx)(i.li,{children:"What's one AI behavior you've noticed (good or bad) that you couldn't explain at the time?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:`Before the four properties, we need to draw a line around what "AI" means in this course. We're talking specifically about generative AI and how it's different from other forms of AI.`})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};