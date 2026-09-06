import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"System prompts are a powerful way to customize how Claude responds to user input. Instead of getting generic answers, you can shape Claude's tone, style, and approach to match your specific use case."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0118ce8922f6.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"why-system-prompts-matter",children:"Why System Prompts Matter"}),`
`,(0,n.jsx)(r.p,{children:'Consider building a math tutor chatbot. When a student asks "How do I solve 5x + 2 = 3 for x?", you want Claude to act like a real tutor, not just spit out the answer. A good math tutor should:'}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Initially give hints rather than complete solutions"}),`
`,(0,n.jsx)(r.li,{children:"Patiently walk students through problems step by step"}),`
`,(0,n.jsx)(r.li,{children:"Show solutions for similar problems as examples"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You definitely don't want Claude to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Immediately give direct answers"}),`
`,(0,n.jsx)(r.li,{children:"Tell students to just use a calculator"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-system-prompts-work",children:"How System Prompts Work"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ad3b9ae04c6d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"System prompts provide Claude with guidance on how to respond. You define them as plain strings and pass them into the create function call. The key benefits are:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"System prompts provide Claude guidance on how to respond"}),`
`,(0,n.jsx)(r.li,{children:"Claude will try to respond in the same way someone in the specified role would respond"}),`
`,(0,n.jsx)(r.li,{children:"Helps keep Claude on task"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Here's the basic structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`system_prompt = """
You are a patient math tutor.
Do not directly answer a student's questions.
Guide them to a solution step by step.
"""

client.messages.create(
    model=model,
    messages=messages,
    max_tokens=1000,
    system=system_prompt
)
`})}),`
`,(0,n.jsx)(r.h2,{id:"seeing-the-difference",children:"Seeing the Difference"}),`
`,(0,n.jsx)(r.p,{children:"Without a system prompt, Claude gives a complete step-by-step solution immediately. This might be helpful, but it doesn't encourage the student to think through the problem themselves."}),`
`,(0,n.jsx)(r.p,{children:`With the math tutor system prompt, Claude's response changes dramatically. Instead of providing the full solution, Claude asks guiding questions like "What do you think would be a good first step to isolate x? Consider what operation we might need to perform on both sides to start moving terms around."`}),`
`,(0,n.jsx)(r.h2,{id:"building-a-flexible-chat-function",children:"Building a Flexible Chat Function"}),`
`,(0,n.jsx)(r.p,{children:"Rather than hard-coding system prompts, you can make your chat function more reusable by accepting system prompts as parameters:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, system=None):
    params = {
        "model": model,
        "max_tokens": 1000,
        "messages": messages,
    }
    
    if system:
        params["system"] = system
    
    message = client.messages.create(**params)
    return message.content[0].text
`})}),`
`,(0,n.jsxs)(r.p,{children:["This approach handles an important detail: Claude's API doesn't accept ",(0,n.jsx)(r.code,{children:"system=None"}),", so you need to conditionally include the system parameter only when it's provided."]}),`
`,(0,n.jsx)(r.p,{children:"Now you can call your chat function with or without a system prompt:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Without system prompt
answer = chat(messages)

# With system prompt
system = """
You are a patient math tutor.
Do not directly answer a student's questions.
Guide them to a solution step by step.
"""
answer = chat(messages, system=system)
`})}),`
`,(0,n.jsx)(r.p,{children:"System prompts are essential for creating AI applications that behave consistently and appropriately for their intended purpose. They transform generic AI responses into specialized, role-appropriate interactions."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};