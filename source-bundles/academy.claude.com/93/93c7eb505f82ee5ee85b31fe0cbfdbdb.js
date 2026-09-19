import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you combine tool use with streaming in Claude, you get real-time updates as the AI generates tool arguments. This creates a more responsive user experience, but there are some important details to understand about how it works behind the scenes."}),`
`,(0,n.jsx)(r.h2,{id:"basic-tool-streaming",children:"Basic Tool Streaming"}),`
`,(0,n.jsxs)(r.p,{children:["With streaming enabled, Claude sends back different types of events as it processes your request. You're already familiar with events like ",(0,n.jsx)(r.code,{children:"ContentBlockDelta"})," for regular text generation. For tool use, you'll also need to handle a new event type called ",(0,n.jsx)(r.code,{children:"InputJsonEvent"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a523a8aa5dac.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Each ",(0,n.jsx)(r.code,{children:"InputJsonEvent"})," contains two key properties:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"partial_json"})," - A chunk of JSON representing part of the tool arguments"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"snapshot"})," - The cumulative JSON built up from all chunks received so far"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Here's how you handle these events in your streaming pipeline:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`for chunk in stream:
    if chunk.type == "input_json":
        # Process the partial JSON chunk
        print(chunk.partial_json)
        # Or use the complete snapshot so far
        current_args = chunk.snapshot
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9d672ffb05b9.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-json-validation-works",children:"How JSON Validation Works"}),`
`,(0,n.jsx)(r.p,{children:"Here's where things get interesting. The Anthropic API doesn't immediately send you every chunk as Claude generates it. Instead, it buffers chunks and validates them first."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./52f7af62354a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The API waits for complete top-level key-value pairs before sending anything. For example, if your tool expects this structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "abstract": "This paper presents a novel...",
  "meta": {
    "word_count": 847,
    "review": "This paper introduces QuanNet..."
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"The API will:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Wait until the entire ",(0,n.jsx)(r.code,{children:"abstract"})," value is complete"]}),`
`,(0,n.jsx)(r.li,{children:"Validate that key-value pair against your schema"}),`
`,(0,n.jsxs)(r.li,{children:["Send all the buffered chunks for ",(0,n.jsx)(r.code,{children:"abstract"})," at once"]}),`
`,(0,n.jsxs)(r.li,{children:["Repeat the process for the ",(0,n.jsx)(r.code,{children:"meta"})," object"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a60c092a4b7a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This validation process explains why you see delays followed by bursts of text, even with streaming enabled. The chunks are being held back until a complete, valid top-level key-value pair is ready."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1a9a0fe5d50b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"fine-grained-tool-calling",children:"Fine-Grained Tool Calling"}),`
`,(0,n.jsx)(r.p,{children:"If you need faster, more granular streaming - perhaps to show users immediate updates or start processing partial results quickly - you can enable fine-grained tool calling."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ac9598d42c5f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Fine-grained tool calling does one main thing: it disables JSON validation on the API side. This means:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You get chunks as soon as Claude generates them"}),`
`,(0,n.jsx)(r.li,{children:"No buffering delays between top-level keys"}),`
`,(0,n.jsx)(r.li,{children:"More traditional streaming behavior"}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Critical:"})," JSON validation is disabled - your code must handle invalid JSON"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Enable it by adding ",(0,n.jsx)(r.code,{children:"fine_grained=True"})," to your API call:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`run_conversation(
    messages, 
    tools=[save_article_schema], 
    fine_grained=True
)
`})}),`
`,(0,n.jsxs)(r.p,{children:["With fine-grained tool calling, you might receive a ",(0,n.jsx)(r.code,{children:"word_count"})," value much earlier in the stream, without waiting for the entire ",(0,n.jsx)(r.code,{children:"meta"})," object to be completed."]}),`
`,(0,n.jsx)(r.h2,{id:"handling-invalid-json",children:"Handling Invalid JSON"}),`
`,(0,n.jsxs)(r.p,{children:["When using fine-grained tool calling, Claude might generate invalid JSON like ",(0,n.jsx)(r.code,{children:'"word_count": undefined'})," instead of a proper number. Your application needs to handle these cases gracefully:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`try:
    parsed_args = json.loads(chunk.snapshot)
except json.JSONDecodeError:
    # Handle invalid JSON appropriately
    print("Received invalid JSON, continuing...")
`})}),`
`,(0,n.jsx)(r.p,{children:"Without fine-grained tool calling, the API's validation would catch this error and potentially wrap problematic values in strings, which might not match your expected schema."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-fine-grained-tool-calling",children:"When to Use Fine-Grained Tool Calling"}),`
`,(0,n.jsx)(r.p,{children:"Consider enabling fine-grained tool calling when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You need to show users real-time progress on tool argument generation"}),`
`,(0,n.jsx)(r.li,{children:"You want to start processing partial tool results as quickly as possible"}),`
`,(0,n.jsx)(r.li,{children:"The buffering delays negatively impact your user experience"}),`
`,(0,n.jsx)(r.li,{children:"You're comfortable implementing robust JSON error handling"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For most applications, the default behavior with validation is perfectly adequate. But when you need that extra responsiveness, fine-grained tool calling gives you the control to get chunks as fast as Claude can generate them."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};