import{n as e,r as t}from"../../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"In the next video we will be making a request to the Anthropic API. To do so, you will need a secret API key. This guide will walk you through the process of creating an API key."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"API use is billed separately from a Claude plan."})," The Console can ask you to add credit even if you already pay for Claude. Max, Ultra, and Team plans include ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans",children:"monthly API credits"}),", which you claim by linking a Console organization to your plan."]}),`
`,(0,n.jsx)(r.h3,{id:"step-one-sign-in-to-the-claude-console",children:"Step One: Sign in to the Claude Console"}),`
`,(0,n.jsxs)(r.p,{children:["Go to the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/",children:"Claude Console"})," and sign in, or create an account if you don't have one yet."]}),`
`,(0,n.jsx)(r.h3,{id:"step-two-check-your-credit",children:"Step Two: Check your credit"}),`
`,(0,n.jsxs)(r.p,{children:["Open the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/settings/billing",children:"Billing page"}),". If you have no credit, add some there. You can create a key without credit, but your requests fail until you add it."]}),`
`,(0,n.jsx)(r.h3,{id:"step-three-create-a-key",children:"Step Three: Create a key"}),`
`,(0,n.jsxs)(r.p,{children:["Open the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/settings/keys",children:"API keys page"})," and click ",(0,n.jsx)(r.strong,{children:"Create key"}),". If the Console first asks where your code runs, choose ",(0,n.jsx)(r.strong,{children:"Somewhere else"}),". Then fill in the dialog:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Name:"})," Use 'Anthropic Course', so you can identify the key later."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Expires:"})," Choose a period long enough to finish the course, such as ",(0,n.jsx)(r.strong,{children:"30 days"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Linked account:"})," Keep your own account."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Scope:"})," Choose ",(0,n.jsx)(r.strong,{children:"Default workspace"}),". A key for the whole organization needs an extra header, which this course doesn't send."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You might not see every field. It depends on your organization and your role."}),`
`,(0,n.jsx)(r.h3,{id:"step-four-copy-the-key",children:"Step Four: Copy the key"}),`
`,(0,n.jsx)(r.p,{children:"The Console shows the full key only once. Copy it now, because we will use it in the next video. If you lose it, create a new key."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};