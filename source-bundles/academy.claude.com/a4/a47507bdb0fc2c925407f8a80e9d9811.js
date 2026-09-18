import{$p as e,Zp as t}from"../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CoworkPrompt:i}=r;return i||a("CoworkPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"what-this-connector-provides",children:"What this connector provides"}),`
`,(0,n.jsx)(r.p,{children:"The Blender connector gives Claude access to your open Blender scene through Blender's Python API. With it connected, you can ask Claude to read and explain a complex node or modifier setup, batch-apply changes across many objects, clean out unused data, and write Python that adds new tools to Blender's interface."}),`
`,(0,n.jsxs)(r.p,{children:["The connector was built by the Blender developers and released as part of ",(0,n.jsx)(r.a,{href:"https://www.anthropic.com/news/claude-for-creative-work",children:"Claude for Creative Work"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-blender-connector",children:"Setting up the Blender connector"}),`
`,(0,n.jsx)(r.p,{children:"First, add the Blender connector in Claude Desktop, then install an add-on inside Blender so the two can communicate. After setting up once, start the connection from inside Blender each time you work."}),`
`,(0,n.jsx)(r.h3,{id:"prerequisites",children:(0,n.jsx)(r.strong,{children:"Prerequisites"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:(0,n.jsx)(r.strong,{children:"Claude Desktop"})})," — any Claude plan, including Free"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Blender 4.2 or later"})," — free at ",(0,n.jsx)(r.a,{href:"https://www.blender.org/download/",children:"blender.org/download"})]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"step-1-add-the-connector-in-claude-desktop",children:(0,n.jsx)(r.strong,{children:"Step 1: Add the connector in Claude Desktop"})}),`
`,(0,n.jsxs)(r.p,{children:["In Claude Desktop, go to ",(0,n.jsx)(r.strong,{children:"Customize > Connectors"}),", search for ",(0,n.jsx)(r.strong,{children:"Blender"}),", and select ",(0,n.jsx)(r.strong,{children:"Add"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ca660bfe6116.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"step-2-install-the-add-on-in-blender",children:(0,n.jsx)(r.strong,{children:"Step 2: Install the add-on in Blender"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Open the ",(0,n.jsx)(r.a,{href:"https://www.blender.org/lab/mcp-server/",children:"Blender MCP Server page"})," in a browser alongside Blender."]}),`
`,(0,n.jsxs)(r.li,{children:["Drag the install link from that page into the Blender window. Blender will prompt you to add the ",(0,n.jsx)(r.strong,{children:"lab"})," extension repository; allow it."]}),`
`,(0,n.jsx)(r.li,{children:"Drag the same link into Blender a second time. This installs the add-on. Blender will notify you in the status bar when updates are available."}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"step-3-start-the-connection",children:(0,n.jsx)(r.strong,{children:"Step 3: Start the connection"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Open your Blender project."}),`
`,(0,n.jsx)(r.li,{children:"Go to Edit > Preferences > Add-ons"}),`
`,(0,n.jsx)(r.li,{children:"Find BlenderMCP tab and enable/ click 'start MCP server'"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["For more on installing connectors from the directory, see ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"Browsing the Connectors Directory"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["The connector is built on the open Model Context Protocol and works with other MCP clients, including Claude Code. For setup outside Claude Desktop, see Blender's ",(0,n.jsx)(r.a,{href:"https://www.blender.org/lab/mcp-server/",children:"MCP server documentation"})," and the ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/mcp",children:"Claude Code MCP guide"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:"Example use cases"}),`
`,(0,n.jsx)(r.h4,{children:(0,n.jsx)(r.strong,{children:"Clean up scene naming"})}),`
`,(0,n.jsx)(r.p,{children:"Your scene has objects, collections, and materials with default or misleading names left over from earlier iterations."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:'Look at the open scene and rename the data blocks so each name matches what it contains. Flag any names that are misleading, like a collection called "rocks" that only contains pebble meshes.'})}),`
`,(0,n.jsx)(r.h4,{children:(0,n.jsx)(r.strong,{children:"Understand a complex setup you didn't build"})}),`
`,(0,n.jsx)(r.p,{children:"You've opened a .blend file from the community and want to understand how its Geometry Nodes tree works before you change anything."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Walk through the Geometry Nodes modifier on the active object. Explain what each node group does in the order data flows through them, and write your notes as frame labels inside the node editor so the explanation is saved in the file."})}),`
`,(0,n.jsx)(r.h4,{children:(0,n.jsx)(r.strong,{children:"Find what's using an object or material"})}),`
`,(0,n.jsx)(r.p,{children:"You want to change or delete something but aren't sure what else in the file depends on it."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:'List everything in this file that uses the "Glass_Tinted" material, including objects, node groups, and Geometry Nodes setups. Tell me what would break if I removed it.'})}),`
`,(0,n.jsx)(r.h4,{children:(0,n.jsx)(r.strong,{children:"Find the heaviest objects in a scene"})}),`
`,(0,n.jsx)(r.p,{children:"Render times are long and you want to know where the polygon budget is going relative to what's visible on screen."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"For each mesh in the scene, report its polygon count alongside how large it appears in the active camera's final render. Sort by polygon count and flag anything that's heavy but small on screen."})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cbc27c06a272.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"frequently-asked-questions",children:"Frequently asked questions"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Does the connector work on claude.ai in the browser?"})," — No. The connector needs Blender running on the same machine as Claude, so it requires Claude Desktop."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Does Claude edit my .blend file directly?"})," — Claude operates on the open scene through Blender's Python API. Changes apply to your session and are written to disk when you save in Blender."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Do I need to know Python?"})," — No. You describe what you want and Claude writes and runs the Python. You can ask to see the code first if you want to review it or learn from it."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};