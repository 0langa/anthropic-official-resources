import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude can natively run multiple tools at the same time, but some versions don't take advantage of this as much as you might wish. You can greatly increase the chances of Claude making multiple tool calls in a single message by implementing a batch tool."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./76c7f6ecd92f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`When Claude sends back tool use parts in a message, there can be more than one tool request in a single response. For example, if you ask "What is March 12th, 2025 + 50 days? Also, what is March 12th, 2025 + 100 days?", Claude could theoretically send back two separate tool use parts - one for each calculation. These operations are completely parallelizable since they don't depend on each other.`}),`
`,(0,n.jsx)(r.p,{children:"However, Claude doesn't always try to parallelize tool calls as much as you'd expect. Instead of making both calls simultaneously, it often makes them sequentially, which is less efficient."}),`
`,(0,n.jsx)(r.h2,{id:"how-the-batch-tool-works",children:"How the Batch Tool Works"}),`
`,(0,n.jsx)(r.p,{children:"The batch tool is implemented just like any other tool - you need a tool specification and a function to handle when it gets called. The key idea is to create a tool that can invoke multiple other tools simultaneously."}),`
`,(0,n.jsx)(r.p,{children:"Here's the basic structure of the batch tool specification:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "name": "batch_tool",
  "description": "Invoke multiple other tool calls simultaneously",
  "input_schema": {
    "type": "object",
    "properties": {
      "invocations": {
        "type": "array",
        "description": "The tool calls to invoke",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the tool to invoke"
            },
            "arguments": {
              "type": "string", 
              "description": "The arguments to the tool, encoded as a JSON string"
            }
          },
          "required": ["name", "arguments"]
        }
      }
    },
    "required": ["invocations"]
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"The tool takes a list of invocations, where each invocation contains the name of a tool to call and its arguments (encoded as a JSON string)."}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"The batch tool implementation involves two main functions:"}),`
`,(0,n.jsx)(r.h3,{id:"the-runbatch-function",children:"The run_batch Function"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_batch(tool_input):
    batch_output = []
    for invocation in tool_input["invocations"]:
        tool_name = invocation["name"]
        args = json.loads(invocation["arguments"])
        
        tool_output = run_tool(tool_name, args)
        batch_output.append({"tool_name": tool_name, "output": tool_output})
    
    return batch_output
`})}),`
`,(0,n.jsxs)(r.p,{children:["This function loops through each invocation, extracts the tool name and arguments, calls the appropriate tool using the existing ",(0,n.jsx)(r.code,{children:"run_tool"})," function, and collects all the results."]}),`
`,(0,n.jsx)(r.h3,{id:"adding-to-runtool",children:"Adding to run_tool"}),`
`,(0,n.jsxs)(r.p,{children:["You also need to add a case to your main ",(0,n.jsx)(r.code,{children:"run_tool"})," function:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`elif tool_name == "batch_tool":
    return run_batch(tool_input)
`})}),`
`,(0,n.jsxs)(r.p,{children:["Note that unlike other tools, you pass ",(0,n.jsx)(r.code,{children:"tool_input"})," directly without using the splat operator (",(0,n.jsx)(r.code,{children:"**"}),"), since the batch tool needs to handle the raw input structure."]}),`
`,(0,n.jsx)(r.h2,{id:"results",children:"Results"}),`
`,(0,n.jsx)(r.p,{children:"When you implement the batch tool and run the same date calculation query, instead of seeing two separate tool calls in the message log, you'll see a single call to the batch tool. This single call contains both date calculations as sub-invocations, effectively parallelizing the operations."}),`
`,(0,n.jsx)(r.p,{children:'The batch tool is particularly useful when you have multiple independent operations that can be executed simultaneously. By "tricking" Claude into using this pattern, you can significantly improve the efficiency of your tool-calling workflows.'})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};