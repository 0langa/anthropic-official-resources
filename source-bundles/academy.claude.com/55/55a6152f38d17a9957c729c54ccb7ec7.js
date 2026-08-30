import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Important note:"})," Your organization must enable the Web Search tool in the settings console before using it. You can find this setting here: ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/settings/privacy",children:"https://platform.claude.com/settings/privacy"})]}),`
`,(0,n.jsx)(r.p,{children:"Claude includes a built-in web search tool that lets it search the internet for current or specialized information to answer user questions. Unlike other tools where you need to provide the implementation, Claude handles the entire search process automatically - you just need to provide a simple schema to enable it."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f1edc5de25d4.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-web-search-tool",children:"Setting Up the Web Search Tool"}),`
`,(0,n.jsx)(r.p,{children:"To use the web search tool, you create a schema object with these required fields:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`web_search_schema = {
    "type": "web_search_20250305",
    "name": "web_search", 
    "max_uses": 5
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"max_uses"})," field limits how many searches Claude can perform. Claude might do follow-up searches based on initial results, so this prevents excessive API calls. A single search returns multiple results, but Claude may decide additional searches are needed."]}),`
`,(0,n.jsx)(r.h2,{id:"how-the-response-works",children:"How the Response Works"}),`
`,(0,n.jsx)(r.p,{children:"When Claude uses the web search tool, the response contains several types of blocks:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Text blocks"})," - Claude's explanation of what it's doing"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"ServerToolUseBlock"})," - Shows the exact search query Claude used"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"WebSearchToolResultBlock"})," - Contains the search results"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"WebSearchResultBlock"})," - Individual search results with titles and URLs"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Citation blocks"})," - Text that supports Claude's statements"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a9c3f8db3229.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The response structure lets you see exactly what Claude searched for and which sources it found. Citations include the specific text Claude used to support its answers, along with the source URLs."}),`
`,(0,n.jsx)(r.h2,{id:"restricting-search-domains",children:"Restricting Search Domains"}),`
`,(0,n.jsxs)(r.p,{children:["You can limit searches to specific domains using the ",(0,n.jsx)(r.code,{children:"allowed_domains"})," field. This is particularly useful when you want reliable, authoritative sources:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`web_search_schema = {
    "type": "web_search_20250305",
    "name": "web_search",
    "max_uses": 5,
    "allowed_domains": ["nih.gov"]
}
`})}),`
`,(0,n.jsx)(r.p,{children:"For example, when asking about medical or exercise advice, restricting to domains like PubMed (nih.gov) ensures you get evidence-based information rather than random blog content."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e9e7159ab9e9.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"rendering-search-results",children:"Rendering Search Results"}),`
`,(0,n.jsx)(r.p,{children:"The different block types in the response are designed for specific UI rendering:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Render text blocks as regular content"}),`
`,(0,n.jsx)(r.li,{children:"Display web search results as a list of sources at the top"}),`
`,(0,n.jsx)(r.li,{children:"Show citations inline with the text, including the source domain, page title, URL, and quoted text"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cc9b802fe80e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This structure helps users understand how Claude arrived at its answers and provides transparency about the sources being used. The citation format makes it clear which specific information came from which sources, building trust in the AI's responses."}),`
`,(0,n.jsx)(r.h2,{id:"practical-usage",children:"Practical Usage"}),`
`,(0,n.jsx)(r.p,{children:"The web search tool works best for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Current events and recent developments"}),`
`,(0,n.jsx)(r.li,{children:"Specialized information not in Claude's training data"}),`
`,(0,n.jsx)(r.li,{children:"Fact-checking and finding authoritative sources"}),`
`,(0,n.jsx)(r.li,{children:"Research tasks requiring up-to-date information"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Simply include the schema in your tools array when making API calls, and Claude will automatically decide when a web search would help answer the user's question."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};