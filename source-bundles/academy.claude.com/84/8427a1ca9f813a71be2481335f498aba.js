import{Qm as e,Xm as t}from"../../../../../content-de-meta-j2jjwhjm.js";var n=t(),r=`# Streaming tool calls: No more frozen spinners

Your agent takes eight seconds to answer, and your user stares at a frozen spinner for all eight of them. The model was actually doing some useful work this whole time, but your UI just couldn't see it. Say a support agent is looking up a project while an employee waits. Here's how tool calls stream, and how to turn those eight silent seconds into a live status line.

Set stream: true and the response arrives as server-sent events. For plain text, you get content_block_delta events carrying text_delta chunks. Everyone's seen that part already. Tool calls stream a bit differently. A tool call starts with content_block_start. The tool name is there, but the input is empty.

The arguments arrive next, as a series of content_block_delta events carrying input_json_delta chunks. Each chunk has a partial_json string, a fragment of the input JSON. Then content_block_stop closes the block, and the message_delta at the end carries stop_reason tool_use, which is your cue to actually run the tool.

Now, taking into consideration that the fragments of the JSON split anywhere. Mid-key, mid-value, mid-escape-sequence, a chunk might be this right here, and the next might be the rest of it.

And some deltas could even be empty strings. So the rule is to accumulate partial_json fragments into a buffer of some sort. And don't parse until content_block_stop. If Claude makes several tool calls in one turn, each block has its own index. So keep one buffer per index or the fragments interleave into garbage. If you're using an official SDK, well, the messages.stream does the buffering for you and hands you an accumulated events plus a final parsed message. Knowing the raw layer still matters, though, because it's what you'll be debugging when something looks wrong on the wire.

So here's a support UI that I built with two builds side by side. Slow down three times so we can watch it. On the left here, we'll have no streaming, just a spinner. But on the right, we have streaming. You can see it says "Checking MEG-2026-0142."

My code spotted the project ID before the tool even ran. And then there's the left one. At normal speed, both take about seven and a half seconds. They both have the same wait, but on the right, I can visually simulate what's actually happening.

So I kind of get a status 1.8 seconds into the run. So here's the raw layer underneath of it. The fragments are piling up in the buffer. Once the project ID is there, that's when the status switched to checking.

Tool inputs stream as input_json_delta fragments with the name up front and the arguments trickling in. Buffer per block index, parse only at block stop, and run the tool when stop_reason says tool_use.

Let the SDK accumulate for you, but know the wire format for the day that you have to debug it. The model was never frozen. Now, your UI knows it too.
`;function i(t){let i={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a,ResourceWidget:s}=i;return a||o("LessonVideo",!0),s||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{youtubeId:"S1LrVAQ96nU",title:"Streaming tool calls: No more frozen spinners",transcript:r,children:(0,n.jsx)(i.p,{children:"A streamed tool call arrives with the tool's name first and its input in pieces, so the screen can say what is happening. The video shows two versions of the screen at Meridian, a fictional engineering consultancy, side by side. One has no streaming and the other has streaming. The demo is simulated and runs at one-third speed."})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["This video was recorded in September 2026, and its code uses Claude Sonnet 5 (",(0,n.jsx)(i.code,{children:"claude-sonnet-5"}),"). Your results may differ on newer models."]})}),`
`,(0,n.jsx)(i.p,{children:"Say your user watches a spinner for eight seconds. That happens because your tool loop sends each request, waits, and gets back a finished response."}),`
`,(0,n.jsx)(i.p,{children:"In that time Claude picks a tool and writes its input, your code runs the tool, and Claude writes the answer. Your code sees each response only once it is finished, so your UI has nothing to show while Claude writes."}),`
`,(0,n.jsx)(i.p,{children:`Meridian has this problem today. Its support agent is written in Python and answers employees' questions about projects. When an employee asks "What's the status of the pump station job?" the screen says "thinking..." until the answer comes.`}),`
`,(0,n.jsxs)(i.p,{children:["Streaming changes what that employee sees. ",(0,n.jsx)(i.strong,{children:"With streaming, your code gets the response piece by piece, before it is finished."}),` So Meridian's screen can say "Looking up project..." as soon as Claude picks the tool.`]}),`
`,(0,n.jsx)(i.h2,{id:"what-a-streamed-tool-call-looks-like",children:"What a streamed tool call looks like"}),`
`,(0,n.jsxs)(i.p,{children:["Where your tool loop sends its request, replace ",(0,n.jsx)(i.code,{children:"client.messages.create(...)"})," with ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/build-with-claude/streaming#streaming-with-sdks",children:(0,n.jsx)(i.code,{children:"client.messages.stream(...)"})}),". The response then arrives as a series of ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/build-with-claude/streaming",children:"server-sent events"}),", small JSON messages that each have a ",(0,n.jsx)(i.code,{children:"type"}),"."]}),`
`,(0,n.jsxs)(i.p,{children:["A response is made of content blocks, or blocks for short, with one block for each stretch of Claude's text and one for each tool call. A tool call's block has the type ",(0,n.jsx)(i.code,{children:"tool_use"}),". Current models can also add thinking blocks, which this lesson's code ignores."]}),`
`,(0,n.jsx)(i.p,{children:`Picture a friend reading you a phone number over the phone. First they tell you whose number it is: "Here's the plumber's number." Then they read it out a few digits at a time, stopping wherever they like. Finally they say "That's it."`}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"A tool call's block arrives the way the phone number did."})," One event opens it, one or more events fill it, and one event closes it. Here are the events of Meridian's tool call."]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-text",children:`{"type": "content_block_start", "index": 0,
 "content_block": {"type": "tool_use", "id": "toolu_01",
                   "name": "lookup_project_status", "input": {}}}
{"type": "content_block_delta", "index": 0,
 "delta": {"type": "input_json_delta", "partial_json": "{\\"project_"}}
{"type": "content_block_delta", "index": 0,
 "delta": {"type": "input_json_delta", "partial_json": "id\\": \\"MEG-2"}}
{"type": "content_block_delta", "index": 0,
 "delta": {"type": "input_json_delta", "partial_json": "026-0142\\"}"}}
{"type": "content_block_stop", "index": 0}
`})}),`
`,(0,n.jsx)(i.h2,{id:"show-the-chosen-tool-as-soon-as-its-block-opens",children:"Show the chosen tool as soon as its block opens"}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["The tool's name is in ",(0,n.jsx)(i.code,{children:"content_block_start"}),", the block's first event."]})," When that event arrives, your code can update the status line, the one line of text your UI shows while your user waits."]}),`
`,(0,n.jsxs)(i.p,{children:["Meridian keeps a small dict, ",(0,n.jsx)(i.code,{children:"STATUS"}),", that maps each tool's name to words for the user, so ",(0,n.jsx)(i.code,{children:"lookup_project_status"}),' becomes "Looking up project..." on the screen.']}),`
`,(0,n.jsx)(i.h2,{id:"put-the-streaming-request-together",children:"Put the streaming request together"}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["When the stream ends, call ",(0,n.jsx)(i.code,{children:"stream.get_final_message()"})," to get the finished response, the same kind of object that ",(0,n.jsx)(i.code,{children:"client.messages.create(...)"})," returns."]})," So the rest of your tool loop stays as it was."]}),`
`,(0,n.jsxs)(i.p,{children:["Here is Meridian's streaming request. ",(0,n.jsx)(i.code,{children:"on_status"})," is a function you write that shows a string as the status line."]}),`
`,(0,n.jsx)(s,{name:"CodeParts",title:"Streaming tool calls: find the line that does each job"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"A streamed tool call arrives with the tool's name first, then its input in pieces."}),`
`,(0,n.jsxs)(i.li,{children:["As soon as ",(0,n.jsx)(i.code,{children:"content_block_start"})," arrives, show the chosen tool in words your user understands."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"stream.get_final_message()"})," returns the finished response, so the rest of your tool loop doesn't change."]}),`
`]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};