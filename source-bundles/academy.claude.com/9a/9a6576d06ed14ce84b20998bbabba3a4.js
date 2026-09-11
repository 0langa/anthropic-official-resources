import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompts in MCP define a set of user and assistant messages that can be used by the client. These prompts should be high quality, well-tested, and relevant to the overall purpose of the MCP server."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bef88ee94584.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"implementing-list-prompts",children:"Implementing List Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The first step is implementing the ",(0,n.jsx)(r.code,{children:"list_prompts"})," method in your MCP client. This method retrieves all available prompts from the server:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_prompts(self) -> list[types.Prompt]:
    result = await self.session().list_prompts()
    return result.prompts
`})}),`
`,(0,n.jsxs)(r.p,{children:["This simple implementation calls the session's ",(0,n.jsx)(r.code,{children:"list_prompts"})," method and returns the prompts array from the result."]}),`
`,(0,n.jsx)(r.h2,{id:"getting-individual-prompts",children:"Getting Individual Prompts"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"get_prompt"})," method retrieves a specific prompt with arguments interpolated into it. When you request a prompt, you provide arguments that get passed to the prompt function as keyword arguments:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def get_prompt(self, prompt_name, args: dict[str, str]):
    result = await self.session().get_prompt(prompt_name, args)
    return result.messages
`})}),`
`,(0,n.jsx)(r.p,{children:"The method returns the messages from the result, which form a conversation that can be fed directly into Claude."}),`
`,(0,n.jsx)(r.h2,{id:"how-prompt-arguments-work",children:"How Prompt Arguments Work"}),`
`,(0,n.jsxs)(r.p,{children:["When you define a prompt function on the server side, it can accept parameters. For example, a document formatting prompt might expect a ",(0,n.jsx)(r.code,{children:"doc_id"})," parameter:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def format_document(doc_id: str):
    # The doc_id gets interpolated into the prompt
`})}),`
`,(0,n.jsxs)(r.p,{children:["When the client calls ",(0,n.jsx)(r.code,{children:"get_prompt"}),", the arguments dictionary should contain the expected keys. The MCP server will pass these as keyword arguments to the prompt function, allowing dynamic content to be inserted into the prompt template."]}),`
`,(0,n.jsx)(r.h2,{id:"testing-prompts-in-the-cli",children:"Testing Prompts in the CLI"}),`
`,(0,n.jsx)(r.p,{children:"Once implemented, you can test prompts through the command-line interface. When you type a forward slash, available prompts appear as commands. Selecting a prompt may prompt you to choose from available options (like document IDs), and then the complete prompt gets sent to Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./65779584e09c.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The workflow looks like this:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:'User selects a prompt (like "format")'}),`
`,(0,n.jsx)(r.li,{children:"System prompts for required arguments (like which document to format)"}),`
`,(0,n.jsx)(r.li,{children:"The prompt gets sent to Claude with the interpolated values"}),`
`,(0,n.jsx)(r.li,{children:"Claude can then use tools to fetch additional data and complete the task"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./54a5c301f264.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"prompt-best-practices",children:"Prompt Best Practices"}),`
`,(0,n.jsx)(r.p,{children:"When creating prompts for your MCP server:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Make them relevant to your server's purpose"}),`
`,(0,n.jsx)(r.li,{children:"Test them thoroughly before deployment"}),`
`,(0,n.jsx)(r.li,{children:"Use clear, specific instructions"}),`
`,(0,n.jsx)(r.li,{children:"Design them to work well with your available tools"}),`
`,(0,n.jsx)(r.li,{children:"Consider what arguments users will need to provide"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Prompts bridge the gap between predefined functionality and dynamic user needs, giving Claude structured starting points for complex tasks while maintaining flexibility through parameterization."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};