import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building AI chatbots for specific use cases, you need a way to control how the AI responds. System prompts are the key to transforming a general-purpose AI into a specialized assistant that follows specific guidelines and stays on topic."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a8883fbe515b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-user-level-instructions",children:"The Problem with User-Level Instructions"}),`
`,(0,n.jsx)(r.p,{children:`You might think the solution is to include all your requirements in the user message itself. For example, telling the AI in each conversation to "mention AWS services" and "don't mention competitors." This approach has serious limitations:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You'd need to anticipate every possible question and edge case"}),`
`,(0,n.jsx)(r.li,{children:"The instruction list becomes unwieldy and repetitive"}),`
`,(0,n.jsx)(r.li,{children:"Users see all the internal instructions, making conversations cluttered"}),`
`,(0,n.jsx)(r.li,{children:"Requirements change based on the specific question being asked"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0d5cb99bb7a6.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"system-prompts-a-better-approach",children:"System Prompts: A Better Approach"}),`
`,(0,n.jsx)(r.p,{children:"System prompts solve this problem by giving Claude a role to play. Instead of listing specific do's and don'ts, you tell Claude to act like a particular type of professional. The AI then responds as that person would naturally respond."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e8f3cc5bc734.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"System prompts provide several key benefits:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude gets guidance on how to respond consistently"}),`
`,(0,n.jsx)(r.li,{children:"The AI adopts the mindset and constraints of the specified role"}),`
`,(0,n.jsx)(r.li,{children:"Responses stay focused and on-brand automatically"}),`
`,(0,n.jsx)(r.li,{children:"You don't need to anticipate every possible scenario"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementing-system-prompts",children:"Implementing System Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["To add a system prompt to your Claude conversation, you pass it as a parameter to the ",(0,n.jsx)(r.code,{children:"converse"})," function:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`system_prompt = """
You are an AWS cloud support specialist. Your job is to answer user queries related 
to cloud hosting services on AWS.
"""

response = client.converse(
    modelId=model_id, 
    messages=messages, 
    system=[{"text": system_prompt}]
)
`})}),`
`,(0,n.jsx)(r.p,{children:'The system prompt gets passed as a list containing a dictionary with a "text" key. This tells Claude what role to adopt before it sees any user messages.'}),`
`,(0,n.jsx)(r.h2,{id:"building-a-flexible-chat-function",children:"Building a Flexible Chat Function"}),`
`,(0,n.jsx)(r.p,{children:"Here's a reusable chat function that handles system prompts elegantly:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, system=None):
    params = {"modelId": model_id, "messages": messages}
    
    if system:
        params["system"] = [{"text": system}]
    
    response = client.converse(**params)
    
    return response["output"]["message"]["content"][0]["text"]
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach lets you optionally include a system prompt. When no system prompt is provided, Claude responds as its default self. When you include one, Claude adopts that specific role."}),`
`,(0,n.jsx)(r.h2,{id:"system-prompts-in-action",children:"System Prompts in Action"}),`
`,(0,n.jsx)(r.p,{children:`The difference is immediately apparent when you test the same question with and without a system prompt. Ask "How do I host a Postgres database?" without a system prompt, and you'll get a comprehensive answer covering multiple cloud providers and self-hosting options.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3068fd0afb53.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"With an AWS support specialist system prompt, the response focuses exclusively on AWS solutions like RDS, Aurora, and EC2-based deployments. No competitors mentioned, and the answer includes AWS-specific setup steps."}),`
`,(0,n.jsx)(r.p,{children:"Even more impressive is how system prompts handle off-topic questions. Ask for a bread recipe with the AWS specialist prompt active, and Claude politely declines while staying in character:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./23098f708f02.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"important-technical-details",children:"Important Technical Details"}),`
`,(0,n.jsx)(r.p,{children:"When working with system prompts, keep these requirements in mind:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"System prompts cannot be empty strings - they must contain at least one character"}),`
`,(0,n.jsx)(r.li,{children:'The system parameter expects a list of dictionaries with "text" keys'}),`
`,(0,n.jsx)(r.li,{children:"System prompts are processed before any user messages in the conversation"}),`
`,(0,n.jsxs)(r.li,{children:["You can change the top-level ",(0,n.jsx)(r.code,{children:"system"})," value between requests, but not partway through a single ",(0,n.jsx)(r.code,{children:"messages"})," list"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["If you've worked with Anthropic's Claude API directly, you might know that some Claude models support mid-conversation system messages — adding a message with the ",(0,n.jsx)(r.code,{children:"system"})," role to the ",(0,n.jsx)(r.code,{children:"messages"})," array instead of changing the top-level field. That feature isn't available on Amazon Bedrock. In this course, you'll always set system instructions through the top-level ",(0,n.jsx)(r.code,{children:"system"})," parameter on each ",(0,n.jsx)(r.code,{children:"converse"})," call."]}),`
`,(0,n.jsx)(r.p,{children:"System prompts give you powerful control over AI behavior without complex rule systems. By assigning Claude a specific professional role, you get consistent, appropriate responses that naturally follow the constraints and expertise of that role."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};