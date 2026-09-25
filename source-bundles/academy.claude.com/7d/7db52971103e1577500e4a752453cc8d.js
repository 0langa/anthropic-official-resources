import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Sampling allows a server to access a language model like Claude through a connected MCP client. Instead of the server directly calling Claude, it asks the client to make the call on its behalf. This shifts the responsibility and cost of text generation from the server to the client."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-sampling-solves",children:"The Problem Sampling Solves"}),`
`,(0,n.jsx)(r.p,{children:"Imagine you have an MCP server with a research tool that fetches information from Wikipedia. After gathering all that data, you need to summarize it into a coherent report. You have two options:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cb728a616db6.png",alt:"Sequence diagram of Option 1: the MCP server is given direct access to Claude, so after the research tool fetches Wikipedia results the server itself asks Claude to summarize them"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Option 1:"})," Give the MCP server direct access to Claude. The server would need its own API key, handle authentication, manage costs, and implement all the Claude integration code. This works but adds significant complexity."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1d73e4eb39a5.png",alt:`Sequence diagram of Option 2: the MCP server generates a prompt and asks the MCP client "Could you call Claude for me?", the client calls Claude on the server's behalf and returns the results of the call`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Option 2:"}),' Use sampling. The server generates a prompt and asks the client "Could you call Claude for me?" The client, which already has a connection to Claude, makes the call and returns the results.']}),`
`,(0,n.jsx)(r.h2,{id:"how-sampling-works",children:"How Sampling Works"}),`
`,(0,n.jsx)(r.p,{children:"The flow is straightforward:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Server completes its work (like fetching Wikipedia articles)"}),`
`,(0,n.jsx)(r.li,{children:"Server creates a prompt asking for text generation"}),`
`,(0,n.jsx)(r.li,{children:"Server sends a sampling request to the client"}),`
`,(0,n.jsx)(r.li,{children:"Client calls Claude with the provided prompt"}),`
`,(0,n.jsx)(r.li,{children:"Client returns the generated text to the server"}),`
`,(0,n.jsx)(r.li,{children:"Server uses the generated text in its response"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"benefits-of-sampling",children:"Benefits of Sampling"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Reduces server complexity:"})," The server doesn't need to integrate with language models directly"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Shifts cost burden:"})," The client pays for token usage, not the server"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No API keys needed:"})," The server doesn't need credentials for Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Perfect for public servers:"})," You don't want a public server racking up AI costs for every user"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"Setting up sampling requires code on both sides:"}),`
`,(0,n.jsx)(r.h3,{id:"server-side",children:"Server Side"}),`
`,(0,n.jsxs)(r.p,{children:["In your tool function, use the ",(0,n.jsx)(r.code,{children:"create_message"})," function to request text generation:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.tool()
async def summarize(text_to_summarize: str, ctx: Context):
    prompt = f"""
    Please summarize the following text:
    {text_to_summarize}
    """

    result = await ctx.session.create_message(
        messages=[
            SamplingMessage(
                role="user",
                content=TextContent(
                    type="text",
                    text=prompt
                )
            )
        ],
        max_tokens=4000,
        system_prompt="You are a helpful research assistant",
    )

    if result.content.type == "text":
        return result.content.text
    else:
        raise ValueError("Sampling failed")
`})}),`
`,(0,n.jsx)(r.h3,{id:"client-side",children:"Client Side"}),`
`,(0,n.jsx)(r.p,{children:"Create a sampling callback that handles the server's requests:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def sampling_callback(
    context: RequestContext, params: CreateMessageRequestParams
):
    # Call Claude using the Anthropic SDK
    text = await chat(params.messages)

    return CreateMessageResult(
        role="assistant",
        model=model,
        content=TextContent(type="text", text=text),
    )
`})}),`
`,(0,n.jsx)(r.p,{children:"Then pass this callback when initializing your client session:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async with ClientSession(
    read,
    write,
    sampling_callback=sampling_callback
) as session:
    await session.initialize()
`})}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-sampling",children:"When to Use Sampling"}),`
`,(0,n.jsx)(r.p,{children:"Sampling is most valuable when building publicly accessible MCP servers. You don't want random users generating unlimited text at your expense. By using sampling, each client pays for their own AI usage while still benefiting from your server's functionality."}),`
`,(0,n.jsx)(r.p,{children:"The technique essentially moves the AI integration complexity from your server to the client, which often already has the necessary connections and credentials in place."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};