import{Hf as e,Wf as t}from"../../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"4SunBsMGRwA",title:"What is thinking?",children:(0,n.jsxs)(r.p,{children:[`Some tasks need more than a quick answer. Claude can work through a problem
before responding — a feature called `,(0,n.jsx)(r.strong,{children:"extended thinking"}),`. In this lesson,
we'll look at what thinking is, how it works, and when it actually
helps.`]})}),`
`,(0,n.jsx)(r.p,{children:"Here's the failure mode we're trying to avoid. Ask a model a multi-step question and have it answer immediately, and it can confidently get it wrong:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d91ca0117211.png",alt:"Diagram of an app sending a multi-step apples question to a model, which immediately replies with the wrong answer: you'd have 6.5 apples"})}),`
`,(0,n.jsx)(r.h2,{id:"what-is-extended-thinking",children:"What is extended thinking?"}),`
`,(0,n.jsxs)(r.p,{children:["Extended thinking lets Claude reason step by step before producing a final response. When it's enabled, Claude generates internal reasoning tokens — often called a ",(0,n.jsx)(r.strong,{children:"chain of thought"})," — and then delivers the answer. The reasoning isn't hidden: you can see it in the response alongside the final text."]}),`
`,(0,n.jsx)(r.h2,{id:"adaptive-thinking-on-claude-opus-5",children:"Adaptive thinking on Claude Opus 5"}),`
`,(0,n.jsxs)(r.p,{children:["On Opus 5, thinking is ",(0,n.jsx)(r.strong,{children:"adaptive"})," and on by default. There's no token budget to pick: Claude decides dynamically when to think and how much."]}),`
`,(0,n.jsxs)(r.p,{children:["To control how much Claude thinks, use the ",(0,n.jsx)(r.strong,{children:"effort"})," parameter. One gotcha: it goes inside ",(0,n.jsx)(r.code,{children:"output_config"}),", not next to the ",(0,n.jsx)(r.code,{children:"thinking"})," block. The levels are:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"low"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"medium"})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"high"})," (the default)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"xhigh"})," (extra high)"]}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"max"})}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-it-and-when-to-skip-it",children:"When to use it (and when to skip it)"}),`
`,(0,n.jsx)(r.p,{children:"Extended thinking helps with:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Math and multi-step logic"}),`
`,(0,n.jsx)(r.li,{children:"Code debugging"}),`
`,(0,n.jsx)(r.li,{children:"Regulatory analysis"}),`
`,(0,n.jsx)(r.li,{children:"Anything that involves trade-offs or comparing options"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3c21abf3e9e1.png",alt:"Slide showing extended thinking use cases: math, multi-step logic, code debugging, regulatory analysis, and complex comparisons"})}),`
`,(0,n.jsx)(r.p,{children:"Skip it for simple classification, extraction, or boilerplate. For those tasks it just adds latency and cost without actually improving the results."}),`
`,(0,n.jsx)(r.h2,{id:"thinking-in-action",children:"Thinking in action"}),`
`,(0,n.jsx)(r.p,{children:"Let's see it work. Here's an agent loop with one weather tool, and we'll ask Claude to plan a road trip out of San Francisco — two stops, weighing weather and drive time. That's a real trade-off, the kind of question where thinking earns its keep."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import anthropic

client = anthropic.Anthropic()

weather_tool = {
    "name": "get_weather",
    "description": "Get the current weather for a city.",
    "input_schema": {
        "type": "object",
        "properties": {
            "city": {"type": "string", "description": "City name"}
        },
        "required": ["city"],
    },
}

response = client.messages.create(
    model="claude-opus-5",
    max_tokens=16000,
    thinking={"type": "adaptive", "display": "summarized"},  # summarized = return the reasoning text
    output_config={"effort": "high"},  # low | medium | high | xhigh | max
    tools=[weather_tool],
    messages=[
        {
            "role": "user",
            "content": "Plan a road trip out of San Francisco with two stops, "
                       "weighing weather and drive time.",
        }
    ],
)
`})}),`
`,(0,n.jsxs)(r.p,{children:["When you run this, the output is more interesting than usual. You'll see ",(0,n.jsx)(r.strong,{children:"thinking blocks"})," where Claude works through the trade-offs, followed by tool calls to check each city, and finally a text block with the actual recommendation."]}),`
`,(0,n.jsx)(r.p,{children:"The reasoning is visible — that's the whole point."}),`
`,(0,n.jsx)(r.h2,{id:"why-this-matters-in-production",children:"Why this matters in production"}),`
`,(0,n.jsxs)(r.p,{children:["In a production app, this is the difference between an agent that finds problems one at a time and an agent that connects them. Take a compliance review app: toggling adaptive thinking on the auto-review call lets the agent reason ",(0,n.jsx)(r.em,{children:"across"})," report sections — catching things like a wind load spec in section three that conflicts with the material spec elsewhere in the document."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f6cd259490ed.png",alt:"Compliance review app UI with a Thorough review checkbox enabled, running an auto-review that cross-references findings between report sections"})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Extended thinking"})," gives Claude room to reason before it answers, and the reasoning is visible in the response."]}),`
`,(0,n.jsxs)(r.li,{children:["On Opus 5, adaptive thinking is on by default — no token budget needed. Add ",(0,n.jsx)(r.code,{children:'"display": "summarized"'})," to see the reasoning in the response."]}),`
`,(0,n.jsxs)(r.li,{children:["Dial the depth with the ",(0,n.jsx)(r.strong,{children:"effort"})," parameter inside ",(0,n.jsx)(r.code,{children:"output_config"}),": ",(0,n.jsx)(r.code,{children:"low"}),", ",(0,n.jsx)(r.code,{children:"medium"}),", ",(0,n.jsx)(r.code,{children:"high"})," (default), ",(0,n.jsx)(r.code,{children:"xhigh"}),", or ",(0,n.jsx)(r.code,{children:"max"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"Use it for hard, trade-off-heavy problems. Skip it for simple ones — there it just costs latency and tokens."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};