import{n as e,r as t}from"../../../../react-n2kbymz5.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components},{Callout:i,Video:o}=r;return i||a("Callout",!0),o||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{type:"note",children:(0,n.jsxs)(r.p,{children:["This lesson works with Claude Haiku 4.5, the model this course uses. Claude 4.6 and later models return an error when a request ends with a prefilled assistant message. On those models, steer Claude with your prompt or a system prompt, and use ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/structured-outputs",children:"structured outputs"})," to get JSON."]})}),`
`,(0,n.jsx)(o,{youtubeId:"pgOedJTCow4",title:"Controlling model output"}),`
`,(0,n.jsx)(r.p,{children:"Beyond crafting better prompts, there are two powerful techniques for controlling Claude's output: prefilled assistant messages and stop sequences. These methods give you precise control over how Claude responds and when it stops generating text."}),`
`,(0,n.jsx)(r.h2,{id:"prefilled-assistant-messages",children:"Prefilled Assistant Messages"}),`
`,(0,n.jsx)(r.p,{children:"Message prefilling lets you provide the beginning of Claude's response, which it will then continue from that starting point. This technique is incredibly useful for steering Claude in a specific direction."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b47e17ea1c9f.png",alt:'User message "Is tea or coffee better at breakfast?" goes to Claude, which returns an assistant message of "???".'})}),`
`,(0,n.jsx)(r.p,{children:`Here's how it works: instead of just sending a user message, you add an assistant message at the end of your message list. Claude sees this assistant message and thinks "I've already started responding to this question, so I should continue from where I left off."`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8a4248de3e83.png",alt:'Claude continues the prefilled text with "it has higher caffeine content which helps with alertness in the morning".'})}),`
`,(0,n.jsx)(r.p,{children:'For example, if you ask "Is tea or coffee better at breakfast?" without prefilling, Claude typically gives a balanced response mentioning both options. But if you add an assistant message saying "Coffee is better because", Claude will continue from there and build a case for coffee.'}),`
`,(0,n.jsx)(r.p,{children:`The key thing to understand is that Claude continues from exactly where your prefilled text ends. If you write "Coffee is better because", Claude won't repeat that text - it will pick up right after "because" and complete the thought.`}),`
`,(0,n.jsx)(r.p,{children:"Here's the code structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(messages, "Is tea or coffee better at breakfast?")
add_assistant_message(messages, "Coffee is better because")
answer = chat(messages)
`})}),`
`,(0,n.jsx)(r.p,{children:"You can steer Claude in any direction using this technique:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Favor coffee: "Coffee is better because"'}),`
`,(0,n.jsx)(r.li,{children:'Favor tea: "Tea is better because"'}),`
`,(0,n.jsx)(r.li,{children:'Take a contrarian stance: "Neither is very good because"'}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"stop-sequences",children:"Stop Sequences"}),`
`,(0,n.jsx)(r.p,{children:"Stop sequences force Claude to end its response as soon as it generates a specific string of characters. This is perfect for controlling the length or endpoint of responses."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./10b88f1b5cca.png",alt:'Diagram of the user message "Count from 1 to 10" sent to Claude with stop sequences set to "5", and the reply "1, 2, 3, 4,".'})}),`
`,(0,n.jsx)(r.p,{children:"The concept is straightforward: you provide a list of strings, and when Claude generates any of those strings, it immediately stops and returns whatever it has generated up to that point."}),`
`,(0,n.jsxs)(r.p,{children:["To use stop sequences, let your ",(0,n.jsx)(r.code,{children:"chat"})," function take a list of them:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, system=None, temperature=1.0, stop_sequences=[]):
    params = {
        "model": model,
        "max_tokens": 1000,
        "messages": messages,
        "temperature": temperature
    }
    if system:
        params["system"] = system
    if stop_sequences:
        params["stop_sequences"] = stop_sequences

    message = client.messages.create(**params)
    return message.content[0].text
`})}),`
`,(0,n.jsx)(r.p,{children:'For example, ask Claude to "Count from 1 to 10" with a stop sequence of "5":'}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`add_user_message(messages, "Count from 1 to 10")
answer = chat(messages, stop_sequences=["5"])
`})}),`
`,(0,n.jsx)(r.p,{children:'This returns: "1, 2, 3, 4, " - stopping right before the "5" is included in the output.'}),`
`,(0,n.jsxs)(r.p,{children:["You can be more precise with your stop sequences. If you want to avoid the trailing comma and space, use ",(0,n.jsx)(r.code,{children:'stop_sequences=[", 5"]'}),' instead. This will give you a cleaner result: "1, 2, 3, 4".']}),`
`,(0,n.jsx)(r.p,{children:"Stop sequences are particularly useful for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Limiting list lengths"}),`
`,(0,n.jsx)(r.li,{children:"Stopping at specific markers or delimiters"}),`
`,(0,n.jsx)(r.li,{children:"Creating consistent output formats"}),`
`,(0,n.jsx)(r.li,{children:"Preventing overly long responses"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Both techniques give you fine-grained control over Claude's behavior, allowing you to create more predictable and targeted responses for your applications."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["Callout","Video"];export{i as default};