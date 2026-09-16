import{Gp as e,qp as t}from"../../../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The final step in building our MCP client is implementing prompt functionality. This allows us to list all available prompts from the server and retrieve specific prompts with variables filled in."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-list-prompts",children:"Implementing List Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"list_prompts"})," method is straightforward. It calls the session's list prompts function and returns the prompts:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_prompts(self) -> list[types.Prompt]:
    result = await self.session().list_prompts()
    return result.prompts
`})}),`
`,(0,n.jsx)(r.h2,{id:"getting-individual-prompts",children:"Getting Individual Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"get_prompt"})," method is more interesting because it handles variable interpolation. When you request a prompt, you provide arguments that get passed to the prompt function as keyword arguments:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def get_prompt(self, prompt_name, args: dict[str, str]):
    result = await self.session().get_prompt(prompt_name, args)
    return result.messages
`})}),`
`,(0,n.jsxs)(r.p,{children:["For example, if your server has a ",(0,n.jsx)(r.code,{children:"format_document"})," prompt that expects a ",(0,n.jsx)(r.code,{children:"doc_id"})," parameter, the arguments dictionary would contain ",(0,n.jsx)(r.code,{children:'{"doc_id": "plan.md"}'}),". This value gets interpolated into the prompt template."]}),`
`,(0,n.jsx)(r.h2,{id:"testing-prompts-in-action",children:"Testing Prompts in Action"}),`
`,(0,n.jsxs)(r.p,{children:["Once implemented, you can test prompts through the CLI. When you type a slash (",(0,n.jsx)(r.code,{children:"/"}),'), available prompts appear as commands. Selecting a prompt like "format" will prompt you to choose from available documents.']}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d4db71aadca3.png",alt:'The CLI after typing "/format plan.md", showing a dropdown of available documents — deposition.md, report.pdf, financials.docx, outlook.pdf, plan.md, and spec.txt — with plan.md highlighted'})}),`
`,(0,n.jsx)(r.p,{children:"After selecting a document, the system sends the complete prompt to Claude. The AI receives both the formatting instructions and the document ID, then uses available tools to fetch and process the content."}),`
`,(0,n.jsx)(r.h2,{id:"how-prompts-work",children:"How Prompts Work"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./746dff951e80.png",alt:`Slide explaining prompts: they define a set of user and assistant messages clients can use and should be high quality, well-tested, and relevant to the MCP's purpose — alongside an MCP server code snippet defining a "format" prompt with the @mcp.prompt decorator`})}),`
`,(0,n.jsx)(r.p,{children:"Prompts define a set of user and assistant messages that clients can use. They should be high-quality, well-tested, and relevant to your MCP server's purpose. The workflow is:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Write and evaluate a prompt relevant to your server's functionality"}),`
`,(0,n.jsxs)(r.li,{children:["Define the prompt in your MCP server using the ",(0,n.jsx)(r.code,{children:"@mcp.prompt"})," decorator"]}),`
`,(0,n.jsx)(r.li,{children:"Clients can request the prompt at any time"}),`
`,(0,n.jsx)(r.li,{children:"Arguments provided by the client become keyword arguments in your prompt function"}),`
`,(0,n.jsx)(r.li,{children:"The function returns formatted messages ready for the AI model"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This system creates reusable, parameterized prompts that maintain consistency while allowing customization through variables. It's particularly useful for complex workflows where you want to ensure the AI receives properly structured instructions every time."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};