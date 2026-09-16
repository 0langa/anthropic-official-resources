import{Gp as e,qp as t}from"../../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude includes a built-in web search tool that lets it search the internet for current or specialized information to answer user questions. Unlike other tools where you need to provide the implementation, Claude handles the entire search process automatically - you just need to provide a simple schema to enable it."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f1edc5de25d4.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-web-search-tool",children:"Setting Up the Web Search Tool"}),`
`,(0,n.jsx)(r.p,{children:"To use the web search tool, you create a schema object with these required fields:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`web_search_schema = {
    "type": "web_search_20250305",
    "name": "web_search", 
    "max_uses": 5
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"max_uses"})," field limits how many searches Claude can perform. Claude might do follow-up searches based on initial results, so this prevents excessive API calls."]}),`
`,(0,n.jsx)(r.h2,{id:"how-it-works",children:"How It Works"}),`
`,(0,n.jsx)(r.p,{children:`When you include the web search schema in your tools list, Claude will automatically decide when to search based on your question. For example, asking "What's the best exercise for gaining leg muscle?" might trigger a search for current fitness research.`}),`
`,(0,n.jsx)(r.p,{children:"The response contains several types of blocks:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"TextBlock"})," - Claude's explanation of what it's doing"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"ServerToolUseBlock"})," - Shows the exact search query Claude used"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"WebSearchToolResultBlock"})," - Contains the search results"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"WebSearchResultBlock"})," - Individual search results with titles and URLs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"CitationsWebSearchResultLocation"})," - Specific text citations supporting Claude's statements"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"restricting-search-domains",children:"Restricting Search Domains"}),`
`,(0,n.jsxs)(r.p,{children:["You can limit searches to specific domains using the ",(0,n.jsx)(r.code,{children:"allowed_domains"})," field. This is particularly useful when you want authoritative sources:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`web_search_schema = {
    "type": "web_search_20250305",
    "name": "web_search",
    "max_uses": 5,
    "allowed_domains": ["nih.gov"]
}
`})}),`
`,(0,n.jsx)(r.p,{children:"This ensures Claude only searches trusted domains like government health sites instead of random fitness blogs with potentially unreliable information."}),`
`,(0,n.jsx)(r.h2,{id:"rendering-search-results",children:"Rendering Search Results"}),`
`,(0,n.jsx)(r.p,{children:"The response structure is designed for rich UI rendering. You typically:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Display text blocks as regular content"}),`
`,(0,n.jsx)(r.li,{children:"Show web search results as a reference list at the top"}),`
`,(0,n.jsx)(r.li,{children:"Render citations inline with links back to source material"}),`
`,(0,n.jsx)(r.li,{children:"Highlight cited text to show how Claude supports its statements"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This creates a transparent experience where users can verify Claude's sources and understand how it arrived at its conclusions. The citation system helps build trust by showing the evidence behind Claude's responses."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};