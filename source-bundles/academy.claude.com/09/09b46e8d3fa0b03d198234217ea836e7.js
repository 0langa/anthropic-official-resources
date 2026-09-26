import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Beyond crafting better prompts, there are two powerful techniques for controlling Claude's output: prefilled assistant messages and stop sequences. These methods give you precise control over how Claude responds and when it stops generating text."}),`
`,(0,n.jsx)(r.h2,{id:"prefilled-assistant-messages",children:"Prefilled Assistant Messages"}),`
`,(0,n.jsx)(r.p,{children:"Message prefilling lets you provide the beginning of Claude's response, which strongly influences the direction of its answer. Instead of letting Claude decide how to start its response, you give it a specific opening that steers the conversation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d4b65a9763ef.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Here's how it works: you build your normal list of messages with the user's question, but then add an assistant message at the end containing the start of the response you want. When Claude processes this, it sees the assistant message and thinks "I've already started responding to this question, so I should continue from where I left off."`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./795076b1349f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`For example, if you ask "Is tea or coffee better at breakfast?" and prefill with "Coffee is better because", Claude will continue from that point and build a response supporting coffee. The key insight is that Claude will pick up exactly where your prefilled text ends - it won't repeat what you've written.`}),`
`,(0,n.jsx)(r.p,{children:"Let's see this in practice:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(messages, "Is coffee or tea better for breakfast?")
add_assistant_message(messages, "Coffee is better because")

chat(messages)
`})}),`
`,(0,n.jsx)(r.p,{children:`This returns something like "it has more caffeine." Notice that Claude continues directly from your prefilled text, so you'll need to combine both parts to get the complete response: "Coffee is better because it has more caffeine."`}),`
`,(0,n.jsx)(r.p,{children:"You can steer Claude in any direction by changing your prefilled text:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"Tea is better because"'})," - pushes toward tea"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"They are the same because"'})," - creates a neutral response"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"stop-sequences",children:"Stop Sequences"}),`
`,(0,n.jsx)(r.p,{children:"Stop sequences force Claude to end its response immediately when it generates specific text. This is useful when you want to truncate output at a particular point or prevent Claude from continuing past a certain marker."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c0e455bf7313.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The concept is straightforward: you provide a list of strings, and as soon as Claude generates any of those strings, it stops and returns whatever it has generated so far. The stop sequence itself is not included in the response."}),`
`,(0,n.jsx)(r.p,{children:"To use stop sequences, you need to modify your chat function to accept them as a parameter:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, system=None, temperature=1.0, stop_sequences=[]):
    params = {
        "modelId": model_id,
        "messages": messages,
        "inferenceConfig": {
            "temperature": temperature,
            "stopSequences": stop_sequences
        },
    }
`})}),`
`,(0,n.jsx)(r.p,{children:"Here's a practical example:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(messages, "Count from 1 to 10")

chat(messages, stop_sequences=["5"])
`})}),`
`,(0,n.jsx)(r.p,{children:'This returns "1, 2, 3, 4," and stops before including the "5". You can specify multiple stop sequences, and Claude will stop at whichever one it encounters first:'}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`chat(messages, stop_sequences=["5", "3, 4"])
`})}),`
`,(0,n.jsx)(r.p,{children:"Stop sequences are particularly useful for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Controlling the length of responses"}),`
`,(0,n.jsx)(r.li,{children:"Stopping at natural breakpoints in structured output"}),`
`,(0,n.jsx)(r.li,{children:"Preventing Claude from continuing past specific markers or delimiters"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Both techniques give you fine-grained control over Claude's behavior, allowing you to shape responses in ways that simple prompting alone cannot achieve."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};