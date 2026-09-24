import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The final step in building our MCP client is implementing prompt functionality. This allows us to list all available prompts from the server and retrieve specific prompts with variables interpolated into them."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-list-prompts",children:"Implementing List Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"list_prompts"})," method is straightforward. We call the session's list prompts method and return the prompts:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_prompts(self) -> list[types.Prompt]:
    result = await self.session().list_prompts()
    return result.prompts
`})}),`
`,(0,n.jsx)(r.h2,{id:"getting-individual-prompts",children:"Getting Individual Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"get_prompt"}),' method is more interesting because it handles argument interpolation. When we request a specific prompt, we pass arguments that get injected into the prompt function. For example, if our server has a "format" prompt that expects a ',(0,n.jsx)(r.code,{children:"doc_id"})," parameter, that value gets passed through and interpolated into the actual prompt text."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def get_prompt(self, prompt_name, args: dict[str, str]):
    result = await self.session().get_prompt(prompt_name, args)
    return result.messages
`})}),`
`,(0,n.jsx)(r.p,{children:"The method returns messages that form a conversation ready to be fed directly into Claude."}),`
`,(0,n.jsx)(r.h2,{id:"testing-prompts-in-action",children:"Testing Prompts in Action"}),`
`,(0,n.jsx)(r.p,{children:`When you run the client and type a forward slash, you'll see available prompts as commands. Selecting a prompt like "format" will prompt you to choose from available documents. The system then:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Takes the prompt with the document ID interpolated"}),`
`,(0,n.jsx)(r.li,{children:"Feeds it directly to Claude as a user message"}),`
`,(0,n.jsx)(r.li,{children:"Claude receives both the instructions and the document ID"}),`
`,(0,n.jsx)(r.li,{children:"Claude uses available tools to fetch the document content"}),`
`,(0,n.jsx)(r.li,{children:"Claude responds with the reformatted result"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./24f98aa7f062.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-prompts-work",children:"How Prompts Work"}),`
`,(0,n.jsx)(r.p,{children:"Prompts define a set of user and assistant messages that can be used by the client. These prompts should be high quality, well-tested, and relevant to the overall purpose of your MCP server."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./746dff951e80.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The workflow is:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Write and evaluate a prompt relevant to your MCP server's purpose"}),`
`,(0,n.jsxs)(r.li,{children:["Define the prompt inside your MCP server using the ",(0,n.jsx)(r.code,{children:"@mcp.prompt"})," decorator"]}),`
`,(0,n.jsx)(r.li,{children:"Your client can request that prompt at any time"}),`
`,(0,n.jsx)(r.li,{children:"When requesting the prompt, provide arguments that get passed as keyword arguments to the prompt function"}),`
`,(0,n.jsx)(r.li,{children:"The function uses those arguments to customize the prompt content"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This system creates reusable, parameterized prompts that can be shared across different clients and use cases, making your MCP server more versatile and powerful."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};