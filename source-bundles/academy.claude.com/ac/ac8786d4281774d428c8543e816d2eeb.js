import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Extended thinking is Claude's advanced feature that gives the model time to reason through complex problems before generating a final response. Think of it as Claude's internal monologue - you can see how it approaches your problem step by step."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0bd1c482a9cd.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-extended-thinking-works",children:"How Extended Thinking Works"}),`
`,(0,n.jsx)(r.p,{children:"When you enable extended thinking, Claude's response includes two parts instead of one:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Reasoning Content Part"})," - Claude's internal thinking process"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Text Part"})," - The final response you actually wanted"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7737b60029d8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The reasoning content shows you exactly how Claude breaks down your problem, what it considers, and how it arrives at its final answer. This transparency can be incredibly valuable for understanding and debugging complex tasks."}),`
`,(0,n.jsx)(r.h2,{id:"trade-offs-to-consider",children:"Trade-offs to Consider"}),`
`,(0,n.jsx)(r.p,{children:"Extended thinking comes with clear benefits and costs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Better accuracy"})," on complex tasks"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Higher cost"})," - you pay for all thinking tokens"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Increased latency"})," - thinking takes time"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key decision point is simple: use your evaluations. If you've already optimized your prompt but still aren't getting the accuracy you need, that's when extended thinking becomes worth considering."}),`
`,(0,n.jsx)(r.h2,{id:"the-signature-system",children:"The Signature System"}),`
`,(0,n.jsx)(r.p,{children:"One important detail you'll notice immediately is the cryptographic signature attached to reasoning content:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd50c9e46194.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This signature ensures you can't modify the thinking text. If you want to include Claude's previous reasoning in a follow-up conversation, the signature verifies the content hasn't been tampered with. This prevents potential safety issues from modified reasoning text."}),`
`,(0,n.jsx)(r.h2,{id:"redacted-content",children:"Redacted Content"}),`
`,(0,n.jsxs)(r.p,{children:["Sometimes Claude's thinking gets flagged by safety systems. When this happens, you'll receive a ",(0,n.jsx)(r.code,{children:"redactedContent"})," field instead of readable thinking text:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./78c6e80cb475.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The redacted content is encrypted but still functional - you can pass it back to Claude in future conversations without losing context. It's just not readable to you as a developer."}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsxs)(r.p,{children:["On current Claude models, such as Claude Opus 5 and Claude Sonnet 5, thinking runs as ",(0,n.jsx)(r.strong,{children:"adaptive thinking"})," and is on by default: Claude decides how much reasoning each request needs, with no token budget to manage. These models omit the reasoning text unless you ask for it, so set ",(0,n.jsx)(r.code,{children:"display"})," to ",(0,n.jsx)(r.code,{children:"summarized"})," to see it:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`additional_model_fields["thinking"] = {
    "type": "adaptive",
    "display": "summarized"
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["With adaptive thinking on, simple questions often come back quickly while harder ones get more reasoning time. To guide how much Claude thinks, you can combine adaptive thinking with the ",(0,n.jsx)(r.code,{children:"effort"})," parameter. The effort level acts as soft guidance for Claude's thinking allocation, and it takes the place of the manual token budget you would otherwise manage."]}),`
`,(0,n.jsxs)(r.p,{children:["If you've used extended thinking before, note that the manual configuration is being phased out: ",(0,n.jsx)(r.code,{children:'thinking.type: "enabled"'})," with ",(0,n.jsx)(r.code,{children:"budget_tokens"})," is deprecated on Claude Opus 4.6 and Claude Sonnet 4.6, and Claude Opus 4.7 and later models, including Claude Opus 5 and Claude Sonnet 5, do not support it and reject such requests with a 400 error. Use ",(0,n.jsx)(r.code,{children:'thinking.type: "adaptive"'})," with the ",(0,n.jsx)(r.code,{children:"effort"})," parameter instead."]}),`
`,(0,n.jsx)(r.h3,{id:"models-without-adaptive-thinking",children:"Models without adaptive thinking"}),`
`,(0,n.jsx)(r.p,{children:"The Claude 4.5 models (Claude Haiku 4.5, Claude Sonnet 4.5, and Claude Opus 4.5) and earlier models do not support adaptive thinking. On those models you enable extended thinking with a manual token budget:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`additional_model_fields["thinking"] = {
    "type": "enabled",
    "budget_tokens": thinking_budget
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"thinking_budget"})," controls how many tokens Claude can spend on reasoning. The minimum is 1024 tokens, but you might need more for complex problems. Like everything else with Claude, use your evaluations to find the right budget for your use case."]}),`
`,(0,n.jsx)(r.p,{children:"Here's how the updated chat function looks:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(
    messages,
    system=None,
    temperature=1.0,
    stop_sequences=[],
    tools=None,
    tool_choice="auto",
    text_editor=None,
    thinking=False,
    thinking_budget=1024
):
`})}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-implementation",children:"Testing Your Implementation"}),`
`,(0,n.jsx)(r.p,{children:"When building applications that handle extended thinking, you'll want to test both normal reasoning content and redacted content scenarios. There's actually a special test string that forces Claude to return redacted content - useful for making sure your code handles both cases properly."}),`
`,(0,n.jsx)(r.p,{children:"The most important takeaway about extended thinking is that the decision to use it should always be data-driven. Run your evaluations first, optimize your prompts, and only then consider extended thinking if you need that extra boost in accuracy for complex tasks. That discipline rests on a simple habit: decide what good looks like before you reach for more capability. When you know the accuracy your task needs, you can tell whether extended thinking earns its cost instead of guessing."}),`
`,(0,n.jsx)(r.h2,{id:"practice-run-adaptive-thinking-yourself",children:"Practice: run adaptive thinking yourself"}),`
`,(0,n.jsx)(r.p,{children:"Adaptive thinking is easiest to understand by watching it make decisions. In the code where you have been building the chat function, turn it on:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`additional_model_fields["thinking"] = {
    "type": "adaptive",
    "display": "summarized"
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["Now send two requests through this same configuration. First ask a quick factual question you already know the answer to. Then ask a genuinely hard one, like a multi-step analysis problem from your own work. If you are working on a model that does not support adaptive thinking, enable thinking with the manual ",(0,n.jsx)(r.code,{children:"budget_tokens"})," configuration from the section above and run the same two requests."]}),`
`,(0,n.jsx)(r.h3,{id:"check-what-the-thinking-did",children:"Check what the thinking did"}),`
`,(0,n.jsx)(r.p,{children:"Setting the flag only proves the request was accepted. These checks tell you what the thinking did:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Confirm thinking engaged."})," Each response should now contain two parts, the reasoning content and the final text, instead of text alone. The one exception is redacted content, which you saw earlier: a ",(0,n.jsx)(r.code,{children:"redactedContent"})," field means thinking ran but the text is encrypted."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Read the reasoning content."})," Check that it genuinely reasons about the question you asked rather than restating it. This is the same transparency you will rely on when debugging complex tasks later."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Compare the two requests."})," The simple question will usually come back quickly with little reasoning, while the hard one gets noticeably more. That difference is adaptive thinking making the allocation decision for you."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Weigh the cost."})," You pay for every thinking token, so check whether the harder answer is better than what you get without thinking. Your evaluations are the judge of that, and seeing reasoning text appear is no substitute for them."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The behavior worth keeping from this lesson: whenever you enable extended thinking on a new task, read the reasoning content on a few representative requests and re-run your evaluations before deciding the setting stays."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};