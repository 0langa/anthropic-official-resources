import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now we're at the final step of the tool use workflow. After running our tools and getting the results, we need to send everything back to Claude so it can provide a complete response to the user."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d86caccabc4e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process is straightforward: take all the tool result parts we generated, package them into a user message, and send the entire conversation history back to Claude along with the original tool schemas."}),`
`,(0,n.jsx)(r.h2,{id:"adding-the-assistant-message",children:"Adding the Assistant Message"}),`
`,(0,n.jsxs)(r.p,{children:["First, we need to make sure our conversation history is complete. After Claude's initial response with the tool use request, we need to add that response to our message history using ",(0,n.jsx)(r.code,{children:"add_assistant_message()"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./324a7d4f8396.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This ensures we have the complete conversation flow: user question → assistant tool request → tool results → final assistant response."}),`
`,(0,n.jsx)(r.h2,{id:"running-tools-and-creating-tool-results",children:"Running Tools and Creating Tool Results"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"run_tools()"})," function processes all the tool use requests from Claude's response and creates properly formatted tool result parts. Each tool result includes:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The tool use ID (matching the original request)"}),`
`,(0,n.jsx)(r.li,{children:"The actual output from running the tool"}),`
`,(0,n.jsx)(r.li,{children:"A status indicating success or error"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c79e6ca88e19.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The function handles both successful tool executions and errors gracefully, wrapping everything in the correct JSON structure that Claude expects."}),`
`,(0,n.jsx)(r.h2,{id:"adding-tool-results-to-the-conversation",children:"Adding Tool Results to the Conversation"}),`
`,(0,n.jsxs)(r.p,{children:["Once we have our tool results, we add them to the conversation using ",(0,n.jsx)(r.code,{children:"add_user_message()"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`add_user_message(messages, run_tools(parts))
`})}),`
`,(0,n.jsx)(r.p,{children:"This creates a user message containing all the tool result parts. The conversation now has the complete back-and-forth needed for Claude to provide a final response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./77b78dbac304.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"final-call-to-claude",children:"Final Call to Claude"}),`
`,(0,n.jsx)(r.p,{children:"The last step is sending everything back to Claude. This requires two important elements:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The complete message history (user → assistant → user)"}),`
`,(0,n.jsx)(r.li,{children:"The original tool schemas"}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`text, parts = chat(messages, tools=[get_current_datetime_schema])
`})}),`
`,(0,n.jsxs)(r.p,{children:["Including the tool schemas is crucial. Without them, Claude would be confused about the tool references in the conversation history and wouldn't understand what ",(0,n.jsx)(r.code,{children:"get_current_datetime"})," actually does."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a4ccdcec50f5.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"success",children:"Success"}),`
`,(0,n.jsx)(r.p,{children:'When everything works correctly, Claude receives the tool results and can provide a complete, informed response. In our example, Claude successfully retrieved the current time and formatted it in a natural response: "The current date and time is 2025-04-03, 12:54:00."'}),`
`,(0,n.jsx)(r.p,{children:"This demonstrates that our tool integration is working properly. While Claude knows the current date, it doesn't have access to real-time information like the exact current time - which is exactly what our tool provided."}),`
`,(0,n.jsx)(r.p,{children:"The complete tool use cycle is now working: Claude requests a tool, we execute it, return the results, and Claude incorporates that information into its final response to the user."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};