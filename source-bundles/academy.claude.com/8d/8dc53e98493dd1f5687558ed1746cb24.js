import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["When building chat interfaces with AI models, users expect to see responses appear immediately rather than waiting 10-30 seconds for a complete response. The ",(0,n.jsx)(r.code,{children:"converse_stream"})," function solves this by streaming text as it's generated, creating a much better user experience."]}),`
`,(0,n.jsx)(r.h2,{id:"how-streaming-works",children:"How Streaming Works"}),`
`,(0,n.jsx)(r.p,{children:"Instead of waiting for the entire response to be generated, streaming sends back pieces of text as soon as they're available. Here's how the flow changes:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./77791ffb43d5.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["When you call ",(0,n.jsx)(r.code,{children:"converse_stream"}),", you immediately get back an initial response that contains a ",(0,n.jsx)(r.code,{children:"stream"})," object. This stream is a generator that yields events as the model generates text. Each event contains a small chunk of the overall response."]}),`
`,(0,n.jsx)(r.h2,{id:"basic-implementation",children:"Basic Implementation"}),`
`,(0,n.jsxs)(r.p,{children:["Here's how to use ",(0,n.jsx)(r.code,{children:"converse_stream"})," in your code:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(messages, "Write a 1 sentence description of a fake database")
response = client.converse_stream(messages=messages, modelId=model_id)

for event in response["stream"]:
    print(event)
`})}),`
`,(0,n.jsx)(r.p,{children:"This will print out all the different events as they arrive. You'll see the response come in chunks rather than all at once."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-stream-events",children:"Understanding Stream Events"}),`
`,(0,n.jsx)(r.p,{children:"The stream yields several types of events, each serving a different purpose:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e652a5f85512.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["For basic text generation, you only need to care about ",(0,n.jsx)(r.code,{children:"contentBlockDelta"})," events. These contain the actual generated text chunks that you want to display to users."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./97a9dc1ff5a0.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The events always arrive in a predictable order: ",(0,n.jsx)(r.code,{children:"messageStart"}),", multiple ",(0,n.jsx)(r.code,{children:"contentBlockDelta"})," events containing your text, then ",(0,n.jsx)(r.code,{children:"contentBlockStop"}),", ",(0,n.jsx)(r.code,{children:"messageStop"}),", and finally ",(0,n.jsx)(r.code,{children:"metadata"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"extracting-the-text",children:"Extracting the Text"}),`
`,(0,n.jsxs)(r.p,{children:["To get just the generated text from each chunk, filter for ",(0,n.jsx)(r.code,{children:"contentBlockDelta"})," events and extract the text:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`text = ""
for event in response["stream"]:
    if "contentBlockDelta" in event:
        chunk = event["contentBlockDelta"]["delta"]["text"]
        print(chunk, end="")
        text += chunk

print("\\n\\nTotal Message:\\n" + text)
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:'end=""'})," parameter removes the automatic newline that Python's print function adds, making the streaming text appear more naturally."]}),`
`,(0,n.jsx)(r.h2,{id:"practical-applications",children:"Practical Applications"}),`
`,(0,n.jsx)(r.p,{children:"In a real application, instead of printing each chunk, you'd typically:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Send each chunk to your frontend via WebSockets or Server-Sent Events"}),`
`,(0,n.jsx)(r.li,{children:"Update the UI to display the growing response in real-time"}),`
`,(0,n.jsx)(r.li,{children:"Store the complete message once streaming finishes"}),`
`,(0,n.jsx)(r.li,{children:"Handle any errors that might occur during streaming"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'This streaming approach transforms the user experience from "submit and wait" to "submit and watch the response appear," making your AI-powered applications feel much more responsive and engaging.'})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};