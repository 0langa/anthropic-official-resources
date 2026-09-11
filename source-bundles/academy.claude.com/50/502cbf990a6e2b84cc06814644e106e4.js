import{em as e,nm as t}from"../../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"hftmYd97LBw",title:"MCP",children:(0,n.jsxs)(r.p,{children:["We have tools, skills, and connectors. So why does ",(0,n.jsx)(r.strong,{children:"MCP"}),` exist? At first
glance it looks like a second API stacked on top of the API. Fair
question — and the answer comes down to who maintains the integration code.`]})}),`
`,(0,n.jsx)(r.h2,{id:"the-maintenance-problem",children:"The maintenance problem"}),`
`,(0,n.jsxs)(r.p,{children:["Say your agent needs to pull tasks from Asana, check a Google Calendar, and search Slack — all in one go. With custom tools, you have to write three integrations. That part is doable. The painful part comes after: you also have to ",(0,n.jsx)(r.strong,{children:"maintain"})," those integrations every time one of those services changes its API, which happens often. Congratulations, you're now maintaining a pile of third-party API wrappers."]}),`
`,(0,n.jsx)(r.p,{children:"MCP shifts that maintenance to the service provider. Asana publishes an MCP server. Slack publishes one. Google publishes one. Each server exposes its own tools — with descriptions, schemas, and authentication — through a standard protocol. When their API changes, they update their server. You change nothing."}),`
`,(0,n.jsx)(r.h2,{id:"tools-vs-skills-vs-mcp",children:"Tools vs. skills vs. MCP"}),`
`,(0,n.jsx)(r.p,{children:"These three features do different jobs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tools"})," connect Claude to your internal systems — your database, your project tracker, your proprietary APIs. You own the code, so you also own the maintenance."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skills"})," teach Claude a procedure — your report template, your review checklist. Skills are instructions, not necessarily integrations."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP"})," connects Claude to third-party services, where the service provider maintains the integration. You don't write the Asana wrapper — Asana did."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The short version: ",(0,n.jsx)(r.strong,{children:"tools are for your stuff, skills are for your processes, and MCP is for everyone else's stuff."})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./63efd38d74fe.png",alt:"Comparison cards for Tools, Skills, and MCP, with the MCP card highlighted: connects Claude to third-party services, maintained by the service provider"})}),`
`,(0,n.jsx)(r.h2,{id:"connecting-to-an-mcp-server",children:"Connecting to an MCP server"}),`
`,(0,n.jsxs)(r.p,{children:["The cleanest way to get a feel for MCP is to point Claude at any MCP server and let it discover what's there. For this example, we'll use the Linear MCP server, with the connection details and auth token stored in a ",(0,n.jsx)(r.code,{children:".env"})," file."]}),`
`,(0,n.jsxs)(r.p,{children:["Two pieces work together in the request. The ",(0,n.jsx)(r.code,{children:"mcp_servers"})," key declares the connection — a type, a URL, a name to refer to it by, and optionally an auth token. Then a tool with the type ",(0,n.jsx)(r.code,{children:"mcp_toolset"})," configures which tools Claude can use from that server. The default is all of them, but if you want to scope it down, this is where you do it."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import os
import anthropic

client = anthropic.Anthropic()

response = client.beta.messages.create(
    model="claude-opus-5",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "What tools do you have available?"}
    ],
    mcp_servers=[
        {
            "type": "url",
            "url": "https://mcp.linear.app/mcp",
            "name": "linear",
            "authorization_token": os.environ["LINEAR_MCP_TOKEN"],
        }
    ],
    tools=[
        {
            "type": "mcp_toolset",
            "mcp_server_name": "linear",
        }
    ],
    betas=["mcp-client-2025-11-20"],
)

print(response)
`})}),`
`,(0,n.jsxs)(r.p,{children:["Notice that we never wrote a single tool schema. Claude ",(0,n.jsx)(r.strong,{children:"introspects"})," the server, gets the list of tools and their schemas back, and picks the right one for the prompt. As of this lesson, the MCP connector is in beta — note the beta header in the request."]}),`
`,(0,n.jsx)(r.p,{children:"Run it, and if your MCP URL points at Linear's MCP endpoint, Claude lists Linear's tools and then calls one. The same works for basically any compliant server. We didn't define a single tool. We didn't write a Linear client. Linear is maintaining that."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d26c6874c686.png",alt:"Terminal output listing the Linear MCP server's discovered tools, followed by Claude noting they are Linear project management tools and choosing which to call"})}),`
`,(0,n.jsx)(r.h2,{id:"filtering-which-tools-claude-can-use",children:"Filtering which tools Claude can use"}),`
`,(0,n.jsx)(r.p,{children:"MCP servers often expose many, many tools — and you don't always want Claude using all of them. Maybe you don't want it to have write permissions, or you just don't want all those tool definitions taking up context."}),`
`,(0,n.jsx)(r.p,{children:"The fix: disable everything by default, then enable only the specific tools you want. Here's that pattern with a Slack MCP server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`tools=[
    {
        "type": "mcp_toolset",
        "mcp_server_name": "slack",
        "default_config": {
            "enabled": False,
        },
        "configs": {
            "search_messages": {"enabled": True},
            "list_channels": {"enabled": True},
        },
    }
]
`})}),`
`,(0,n.jsx)(r.p,{children:"Now Claude can search Slack and list channels, but it can't post or delete. This is useful when you trust a service for reads but don't want Claude writing on your behalf by accident."}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP exists so you don't have to maintain integrations"})," someone else has already built. The service provider publishes an MCP server and keeps it up to date — you change nothing when their API changes."]}),`
`,(0,n.jsxs)(r.li,{children:["Pick the right feature for the job: ",(0,n.jsx)(r.strong,{children:"tools for your data, skills for your process, MCP for third-party services"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["Declare the connection in ",(0,n.jsx)(r.code,{children:"mcp_servers"})," (type, URL, name, optional auth token) and grant access with an ",(0,n.jsx)(r.code,{children:"mcp_toolset"})," entry in ",(0,n.jsx)(r.code,{children:"tools"}),". Claude introspects the server and discovers the tools on its own — no schemas to write."]}),`
`,(0,n.jsxs)(r.li,{children:["Scope down access by setting ",(0,n.jsx)(r.code,{children:'default_config: {"enabled": False}'})," and enabling specific tools in ",(0,n.jsx)(r.code,{children:"configs"})," — handy for keeping a server read-only."]}),`
`,(0,n.jsx)(r.li,{children:"The MCP connector is currently in beta, so include the beta header on your requests."}),`
`,(0,n.jsxs)(r.li,{children:["Visit ",(0,n.jsx)(r.strong,{children:"modelcontextprotocol.io"})," for the list of available servers and to learn more about the protocol."]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};