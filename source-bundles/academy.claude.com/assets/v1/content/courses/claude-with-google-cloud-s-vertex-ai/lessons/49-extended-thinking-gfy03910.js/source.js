import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Extended thinking is Claude's advanced reasoning feature that gives the model time to think through complex problems before generating a response. When enabled, Claude produces a visible thinking process that users can examine to understand how the model approached their query."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bcdce97e3d0d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This feature significantly improves Claude's ability to handle complex tasks with greater accuracy, but it comes with important trade-offs. You'll be charged for all tokens generated during the thinking phase, and the additional processing time increases response latency. The key is knowing when the improved intelligence justifies the extra cost and wait time."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-extended-thinking",children:"When to Use Extended Thinking"}),`
`,(0,n.jsx)(r.p,{children:"The decision to enable extended thinking should be driven by your prompt evaluations. Here's the recommended approach:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Write and test your prompt without extended thinking first"}),`
`,(0,n.jsx)(r.li,{children:"Run evaluations to measure accuracy"}),`
`,(0,n.jsx)(r.li,{children:"If results aren't meeting your standards after prompt optimization efforts"}),`
`,(0,n.jsx)(r.li,{children:"Then consider enabling extended thinking as a solution"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-extended-thinking-changes-responses",children:"How Extended Thinking Changes Responses"}),`
`,(0,n.jsx)(r.p,{children:"Without extended thinking, Claude's response flow is straightforward - you send a user message with a text block and receive an assistant message with a text block in return."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./699b356c4c42.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"With extended thinking enabled, the response structure changes significantly. You'll receive an assistant message containing two distinct blocks:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2cee7e788b2e.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.code,{children:"thinking"})," block containing Claude's reasoning process"]}),`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.code,{children:"text"})," block with the final response"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"the-signature-system",children:"The Signature System"}),`
`,(0,n.jsx)(r.p,{children:"Each thinking block includes a cryptographic signature that serves an important security purpose. This signature ensures that the thinking text hasn't been modified when you include the message in future conversation turns."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./87a48c18f07e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude relies heavily on the thinking content for response generation, so preventing tampering is crucial for maintaining safe and consistent behavior. If you modify the thinking text, the signature validation will fail."}),`
`,(0,n.jsx)(r.h2,{id:"redacted-thinking",children:"Redacted Thinking"}),`
`,(0,n.jsx)(r.p,{children:"Sometimes Claude's thinking process gets flagged by internal safety systems. When this happens, you'll receive a redacted thinking block instead of the raw thinking text."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./13c20f67d2bd.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The redacted content contains the actual thinking text in encrypted form. While you can't read it, you can still include this block in future conversation turns so Claude doesn't lose context from its previous reasoning."}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"To enable extended thinking in your code, you'll need to modify your chat function with two new parameters:"}),`
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
`,(0,n.jsxs)(r.p,{children:["The thinking budget represents the maximum tokens Claude can use for reasoning. The minimum allowed value is 1024 tokens. Importantly, your ",(0,n.jsx)(r.code,{children:"max_tokens"})," parameter must exceed your thinking budget - if you set a thinking budget of 1024, ",(0,n.jsx)(r.code,{children:"max_tokens"})," must be at least 1025."]}),`
`,(0,n.jsxs)(r.p,{children:["In practice, you'll want a much larger buffer. For example, with a thinking budget of 1024 and ",(0,n.jsx)(r.code,{children:"max_tokens"})," of 4000, Claude can use up to 1024 tokens for thinking and up to 2976 tokens for the actual response."]}),`
`,(0,n.jsx)(r.p,{children:"Add the thinking configuration to your API parameters when the feature is enabled:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if thinking:
    params["thinking"] = {
        "type": "enabled",
        "budget_tokens": thinking_budget
    }
`})}),`
`,(0,n.jsx)(r.h2,{id:"testing-redacted-responses",children:"Testing Redacted Responses"}),`
`,(0,n.jsx)(r.p,{children:"During development, you may want to test how your application handles redacted thinking blocks. You can force Claude to return a redacted response by including this special trigger string in your message:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`TRIGGER_REDACTED_THINKING_46C9A13E193C177646C7398A98432ECCCE4C1253D5E2D82641AC0E52CC2876CB
`})}),`
`,(0,n.jsx)(r.p,{children:"This ensures your error handling works correctly when encountering redacted content in production."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};