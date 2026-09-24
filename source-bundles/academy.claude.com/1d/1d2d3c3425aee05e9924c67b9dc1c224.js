import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building chat applications with Claude, there's a significant user experience challenge: responses can take 10-30 seconds to generate, leaving users staring at a loading spinner. The solution is response streaming, which lets users see text appear chunk by chunk as Claude generates it, creating a much more responsive feel."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b677fa9ad369.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-standard-responses",children:"The Problem with Standard Responses"}),`
`,(0,n.jsx)(r.p,{children:"In a typical chat setup, your server sends a user message to Claude and waits for the complete response before sending anything back to the client. This creates an awkward delay where users have no feedback that anything is happening."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./75db72aa31a2.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-streaming-works",children:"How Streaming Works"}),`
`,(0,n.jsx)(r.p,{children:"With streaming enabled, Claude immediately sends back an initial response indicating it has received your request and is starting to generate text. Then you receive a series of events, each containing a small piece of the overall response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./383a3ef0267d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Your server can forward these text chunks to your client application as they arrive, allowing users to see the response building up word by word. All of these events are part of a single request to Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./383a3ef0267d.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-stream-events",children:"Understanding Stream Events"}),`
`,(0,n.jsx)(r.p,{children:"When you enable streaming, Claude sends back several types of events:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MessageStart"})," - A new message is being sent"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"ContentBlockStart"})," - Start of a new block containing text, tool use, or other content"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"ContentBlockDelta"})," - Chunks of the actual generated text"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"ContentBlockStop"})," - The current content block has been completed"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MessageDelta"})," - The current message is complete"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MessageStop"})," - End of information about the current message"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b05e5fa5712d.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"ContentBlockDelta"})," events contain the actual generated text that you'll want to display to users."]}),`
`,(0,n.jsx)(r.h2,{id:"basic-streaming-implementation",children:"Basic Streaming Implementation"}),`
`,(0,n.jsxs)(r.p,{children:["To enable streaming, add ",(0,n.jsx)(r.code,{children:"stream=True"})," to your messages.create call:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(messages, "Write a 1 sentence description of a fake database")

stream = client.messages.create(
    model=model,
    max_tokens=1000,
    messages=messages,
    stream=True
)

for event in stream:
    print(event)
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f3eb92bf758b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"simplified-text-streaming",children:"Simplified Text Streaming"}),`
`,(0,n.jsx)(r.p,{children:"Rather than manually parsing events, you can use the SDK's simplified streaming interface that extracts just the text content:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with client.messages.stream(
    model=model,
    max_tokens=1000,
    messages=messages
) as stream:
    for text in stream.text_stream:
        print(text, end="")
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach automatically filters out everything except the actual text content, which is usually what you need for displaying responses to users."}),`
`,(0,n.jsx)(r.h2,{id:"getting-the-final-message",children:"Getting the Final Message"}),`
`,(0,n.jsx)(r.p,{children:"While streaming is great for user experience, you often need the complete message for storage or further processing. After streaming completes, you can get the assembled final message:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with client.messages.stream(
    model=model,
    max_tokens=1000,
    messages=messages
) as stream:
    for text in stream.text_stream:
        pass  # Send to client in real application
    
    final_message = stream.get_final_message()
`})}),`
`,(0,n.jsx)(r.p,{children:"This gives you both the streaming capability for user experience and the complete message object for database storage or conversation history."}),`
`,(0,n.jsx)(r.h2,{id:"practical-considerations",children:"Practical Considerations"}),`
`,(0,n.jsx)(r.p,{children:"Each text chunk in the stream can contain multiple words or even complete sentences - you're not guaranteed to receive exactly one word per event. The chunk size depends on how quickly Claude generates each portion of text."}),`
`,(0,n.jsx)(r.p,{children:"In production applications, you'll typically forward these text chunks immediately to your client application through WebSockets or Server-Sent Events, allowing users to see responses appear in real-time while maintaining the complete conversation history on your server."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};