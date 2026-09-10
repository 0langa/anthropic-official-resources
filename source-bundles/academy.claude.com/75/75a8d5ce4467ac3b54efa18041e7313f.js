import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The final step in building our MCP client is implementing prompt functionality. This allows us to list all available prompts from the server and retrieve specific prompts with variables interpolated into them."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-list-prompts",children:"Implementing List Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"list_prompts"})," method is straightforward. We call the session's list prompts method and return the prompts:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_prompts(self) -> list[types.Prompt]:
    result = await self.session().list_prompts()
    return result.prompts
`})}),`
`,(0,n.jsx)(r.h2,{id:"getting-individual-prompts",children:"Getting Individual Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"get_prompt"}),' method is more interesting because it handles argument interpolation. When we request a specific prompt, we pass arguments that get injected into the prompt function. For example, if our server has a "format" prompt that expects a ',(0,n.jsx)(r.code,{children:"doc_id"})," parameter, we provide that value in the arguments dictionary:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def get_prompt(self, prompt_name, args: dict[str, str]):
    result = await self.session().get_prompt(prompt_name, args)
    return result.messages
`})}),`
`,(0,n.jsx)(r.p,{children:"The method returns messages that form a conversation ready to be fed directly into Claude."}),`
`,(0,n.jsx)(r.h2,{id:"how-prompt-arguments-work",children:"How Prompt Arguments Work"}),`
`,(0,n.jsxs)(r.p,{children:["When you define a prompt function in your MCP server, any parameters become available as interpolation variables. The arguments dictionary you pass to ",(0,n.jsx)(r.code,{children:"get_prompt"})," provides values for these parameters. The server then generates the complete prompt with your values substituted in the appropriate places."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2c67261e0d3c.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-implementation",children:"Testing the Implementation"}),`
`,(0,n.jsx)(r.p,{children:'Once implemented, you can test prompts through the CLI. When you type a forward slash, available prompts appear as commands. Selecting a prompt like "format" will prompt you to choose values for any required arguments (like selecting a document to format). The system then:'}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Retrieves the prompt with your arguments interpolated"}),`
`,(0,n.jsx)(r.li,{children:"Sends the complete prompt to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Claude executes any necessary tool calls to fulfill the request"}),`
`,(0,n.jsx)(r.li,{children:"Returns the formatted result"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./746dff951e80.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"prompts-in-practice",children:"Prompts in Practice"}),`
`,(0,n.jsx)(r.p,{children:"Prompts define reusable sets of user and assistant messages that clients can invoke. They should be high-quality, well-tested, and relevant to your MCP server's purpose. Think of them as pre-built workflows that combine your server's tools and resources to accomplish specific tasks."}),`
`,(0,n.jsx)(r.p,{children:"The prompt system creates a clean separation between the prompt logic (defined on the server) and the execution (handled by the client and Claude). This makes it easy to create sophisticated, multi-step workflows that users can trigger with simple commands."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};