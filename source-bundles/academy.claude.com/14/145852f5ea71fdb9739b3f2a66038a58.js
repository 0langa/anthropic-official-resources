import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Important Note: Extended Thinking is not compatible with some other features, notably message pre-filling, and it restricts how you can use temperature. See the full list of restrictions here:"})," ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/thinking#limits-and-feature-compatibility",children:(0,n.jsx)(r.strong,{children:"https://platform.claude.com/docs/en/build-with-claude/thinking#limits-and-feature-compatibility"})})]}),`
`,(0,n.jsx)(r.p,{children:`Extended thinking is Claude's advanced reasoning feature that gives the model time to work through complex problems before generating a final response. Think of it as Claude's "scratch paper" - you can see the reasoning process that leads to the answer, which helps with transparency and often results in better quality responses.`}),`
`,(0,n.jsx)(r.h2,{id:"how-extended-thinking-works",children:"How Extended Thinking Works"}),`
`,(0,n.jsx)(r.p,{children:"When extended thinking is enabled, Claude's response changes from a simple text block to a structured response containing two parts:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./60d09f38b502.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"With thinking enabled, you get both the reasoning process and the final answer:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a9c2236d86a9.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key benefits include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Better reasoning capabilities for complex tasks"}),`
`,(0,n.jsx)(r.li,{children:"Increased accuracy on difficult problems"}),`
`,(0,n.jsx)(r.li,{children:"Transparency into Claude's thought process"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"However, there are important trade-offs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Higher costs (you pay for thinking tokens)"}),`
`,(0,n.jsx)(r.li,{children:"Increased latency (thinking takes time)"}),`
`,(0,n.jsx)(r.li,{children:"More complex response handling in your code"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-extended-thinking",children:"When to Use Extended Thinking"}),`
`,(0,n.jsx)(r.p,{children:"The decision is straightforward: use your prompt evaluations. Run your prompts without thinking first, and if the accuracy isn't meeting your requirements after you've already optimized your prompt, then consider enabling extended thinking. It's a tool for when standard prompting isn't quite getting you there."}),`
`,(0,n.jsx)(r.h2,{id:"response-structure-and-security",children:"Response Structure and Security"}),`
`,(0,n.jsx)(r.p,{children:"Extended thinking responses include a special signature system for security:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a9c2236d86a9.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The signature is a cryptographic token that ensures you haven't modified the thinking text. This prevents developers from tampering with Claude's reasoning process, which could potentially lead the model in unsafe directions."}),`
`,(0,n.jsx)(r.h2,{id:"redacted-thinking",children:"Redacted Thinking"}),`
`,(0,n.jsx)(r.p,{children:"Sometimes you'll receive a redacted thinking block instead of readable reasoning text:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8925b1f16a1b.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This happens when Claude's thinking process gets flagged by internal safety systems. The redacted content contains the actual thinking in encrypted form, allowing you to pass the complete message back to Claude in future conversations without losing context."}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"To enable extended thinking in your code, you need to add two parameters to your chat function:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(
    messages,
    system=None,
    temperature=1.0,
    stop_sequences=[],
    tools=None,
    thinking=False,
    thinking_budget=1024
):
`})}),`
`,(0,n.jsxs)(r.p,{children:["The thinking budget — ",(0,n.jsx)(r.code,{children:"budget_tokens"})," in the request — sets the maximum tokens Claude can use for reasoning. The minimum ",(0,n.jsx)(r.code,{children:"budget_tokens"})," value is 1024, and your ",(0,n.jsx)(r.code,{children:"max_tokens"})," parameter must be greater than ",(0,n.jsx)(r.code,{children:"budget_tokens"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["Add the ",(0,n.jsx)(r.code,{children:"thinking"})," parameter to your API request — an object with ",(0,n.jsx)(r.code,{children:"type"})," set to ",(0,n.jsx)(r.code,{children:'"enabled"'})," and a ",(0,n.jsx)(r.code,{children:"budget_tokens"})," value — and raise ",(0,n.jsx)(r.code,{children:"max_tokens"})," so it's greater than ",(0,n.jsx)(r.code,{children:"budget_tokens"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if thinking:
    params["max_tokens"] = thinking_budget + 1000
    params["thinking"] = {
        "type": "enabled",
        "budget_tokens": thinking_budget
    }
`})}),`
`,(0,n.jsx)(r.p,{children:"Then call your chat function with thinking enabled:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`chat(messages, thinking=True)
`})}),`
`,(0,n.jsx)(r.h2,{id:"testing-redacted-responses",children:"Testing Redacted Responses"}),`
`,(0,n.jsx)(r.p,{children:"For testing purposes, you can force Claude to return a redacted thinking block by sending a special trigger string. This helps ensure your application handles redacted responses gracefully without crashing."}),`
`,(0,n.jsx)(r.p,{children:"Extended thinking is a powerful feature when you need Claude to tackle complex reasoning tasks, but use it judiciously given the cost and latency implications. Start with standard prompting, optimize thoroughly, then add thinking when you need that extra reasoning capability."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};