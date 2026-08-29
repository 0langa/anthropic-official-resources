import{Hf as e,Wf as t}from"../../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{Callout:i,LessonVideo:o}=r;return i||a("Callout",!0),o||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{youtubeId:"UAeTSBsK71A",title:"Choosing the right model",children:(0,n.jsxs)(r.p,{children:[`You're shipping an app with Claude. Which model do you pick? If you default
to the smartest one, your API bill will surprise you. Pick the cheapest one,
and the output might not hold up. Each model has different trade-offs, and
picking the right one affects both `,(0,n.jsx)(r.strong,{children:"quality"})," and ",(0,n.jsx)(r.strong,{children:"cost"}),"."]})}),`
`,(0,n.jsx)(r.h2,{id:"the-model-tiers",children:"The model tiers"}),`
`,(0,n.jsxs)(r.p,{children:["Anthropic currently offers four model tiers, and you choose between them with the ",(0,n.jsx)(r.code,{children:"model"})," parameter in your API call."]}),`
`,(0,n.jsx)(i,{type:"note",children:(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:[`Note that Claude Fable 5 has been generally available since June 9, 2026,
but is not reflected in the video above. Learn more about Claude
Fable and Claude Mythos
`,(0,n.jsx)(r.a,{href:"https://www.anthropic.com/news/claude-fable-5-mythos-5",children:"here"}),`. The video and
terminal screenshot in this lesson were recorded with earlier models (Claude
Opus 4.7 and Claude Sonnet 4.6). The code below uses the current model IDs;
your latency and token numbers will differ.`]})})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Fable"})," is our most capable model yet — a new tier that sits above Opus, built for your toughest challenges. It comes at a significantly higher cost than Opus, so reserve it for work where that extra capability is worth paying for. The current Fable model is Claude Fable 5 (",(0,n.jsx)(r.code,{children:"claude-fable-5"}),")."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Opus"})," is the most capable of the three core model families, but also the slowest and highest cost of the three. Use it for deep reasoning, complex analysis, multi-step coding, and nuanced writing. The current Opus model is Claude Opus 5 (",(0,n.jsx)(r.code,{children:"claude-opus-5"}),")."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Haiku"})," is the fastest and lowest cost, optimized for speed and cost efficiency rather than maximum intelligence. Use it for high-volume, low-complexity work like classification, extraction, and routing. The current Haiku model is Claude Haiku 4.5 (",(0,n.jsx)(r.code,{children:"claude-haiku-4-5"}),")."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Sonnet"})," sits in the sweet spot: a balanced combination of intelligence, speed, and cost that works well for most production work. The current Sonnet model is Claude Sonnet 5 (",(0,n.jsx)(r.code,{children:"claude-sonnet-5"}),")."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8750225705f5.png",alt:"Three cards comparing the Claude model tiers: Haiku (fastest, lowest cost, for classification and routing), Sonnet (capable and fast, for most production work), and Opus (most intelligent, highest cost, for deep reasoning and complex analysis)"})}),`
`,(0,n.jsx)(r.h2,{id:"start-with-a-simple-evaluation",children:"Start with a simple evaluation"}),`
`,(0,n.jsxs)(r.p,{children:["Before you write production code, set up a simple ",(0,n.jsx)(r.strong,{children:"evaluation"}),": a set of example inputs that you run through each model and score against what good output means for your use case. You don't need anything fancy — 20 or 30 representative examples from your actual workload is enough to start."]}),`
`,(0,n.jsx)(r.p,{children:"Then work your way up the tiers:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Run your examples through ",(0,n.jsx)(r.strong,{children:"Haiku"})," first. If the quality holds, you're done — and you just saved a lot of money."]}),`
`,(0,n.jsxs)(r.li,{children:["If it doesn't, step up to ",(0,n.jsx)(r.strong,{children:"Sonnet"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["Only reach for ",(0,n.jsx)(r.strong,{children:"Opus"})," when the task needs it."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"comparing-the-tiers-side-by-side",children:"Comparing the tiers side by side"}),`
`,(0,n.jsx)(r.p,{children:"Let's see the difference between the tiers, not just talk about it. We'll send the same prompt through all three models and watch the latency and token counts:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`models = ["claude-haiku-4-5", "claude-sonnet-5", "claude-opus-5"]

for model in models:
    response = client.messages.create(
        model=model,
        max_tokens=300,
        messages=[{"role": "user", "content": prompt}],
    )
    print(model, response.usage)
`})}),`
`,(0,n.jsx)(r.p,{children:"Two things are going on here:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["The loop swaps the ",(0,n.jsx)(r.code,{children:"model"})," field on each request. Same prompt, same max tokens — only the model changes."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"response.usage"})," gives you the input and output tokens straight back from the API, which is what your bill is calculated on."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9d432e5390ce.png",alt:"Terminal output from running the same prompt through Opus, Sonnet, and Haiku, showing each model's latency and input/output token counts"})}),`
`,(0,n.jsxs)(r.p,{children:["Run it and you'll see three models and three sets of numbers. ",(0,n.jsx)(r.strong,{children:"Opus"})," takes the longest and reads the most polished — but for a two-sentence definition, that polish is wasted. ",(0,n.jsx)(r.strong,{children:"Sonnet"})," tightens the writing up a little. And ",(0,n.jsx)(r.strong,{children:"Haiku"})," comes back, often in under a second, with a very competent two-sentence answer. It's honestly perfect for this kind of scenario."]}),`
`,(0,n.jsxs)(r.p,{children:["And that's the whole point: ",(0,n.jsx)(r.strong,{children:"the right model is the cheapest one whose output you'd actually ship."})," For a definition, Haiku is plenty. For drafting a regulatory response, you'd run the same comparison and probably end up on Opus. The eval is the same shape every single time."]}),`
`,(0,n.jsx)(r.h2,{id:"routing-different-work-to-different-models",children:"Routing different work to different models"}),`
`,(0,n.jsx)(r.p,{children:"In a real app, you'd route different kinds of work to different models inside the same endpoint. Take an operations dashboard with a document processing route:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Every incoming file gets ",(0,n.jsx)(r.strong,{children:"classified with Haiku"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["Client updates get ",(0,n.jsx)(r.strong,{children:"drafted with Sonnet"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["Only RFP responses ",(0,n.jsx)(r.strong,{children:"reach for Opus"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"One queue, three models, picked per task."}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Anthropic offers four model tiers: ",(0,n.jsx)(r.strong,{children:"Fable"})," for the highest available capability, ",(0,n.jsx)(r.strong,{children:"Opus"})," for hard problems, ",(0,n.jsx)(r.strong,{children:"Sonnet"})," for daily work, and ",(0,n.jsx)(r.strong,{children:"Haiku"})," for volume."]}),`
`,(0,n.jsx)(r.li,{children:"Set up a simple evaluation — 20 or 30 representative examples from your real workload — before writing production code."}),`
`,(0,n.jsx)(r.li,{children:"Run the eval from Haiku upward and stop at the cheapest model whose output you'd actually ship."}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"response.usage"})," reports input and output tokens, which is what your bill is based on."]}),`
`,(0,n.jsx)(r.li,{children:"In production, route different tasks to different models inside the same endpoint instead of picking one model for everything."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};