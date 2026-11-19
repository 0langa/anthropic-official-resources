import{n as e,r as t}from"../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:i}=r;return i||a("CodeCommand",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"what-is-the-prior-auth-review-sample-skill",children:(0,n.jsx)(r.strong,{children:"What is the Prior Auth Review sample skill?"})}),`
`,(0,n.jsx)(r.p,{children:"The Prior Authorization skill is a sample skill that digests request packet documentation and performs several initial checks to be verified by a human reviewer.  These include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"NPI Physician Registry"}),`
`,(0,n.jsx)(r.li,{children:"ICD-10 Lookup"}),`
`,(0,n.jsx)(r.li,{children:"CMS Coverage Database"}),`
`,(0,n.jsx)(r.li,{children:"CPT Codes"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"It then extracts clinical data to summarize the argument for medical necessity and confirms all the required documentation is present."}),`
`,(0,n.jsxs)(r.p,{children:["This is a sample skill that gives you a starting point to customize for your own use cases. Be sure to review the ",(0,n.jsx)(r.a,{href:"https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip",children:"README.md"})," file before using the skill."]}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-prior-auth-review-sample-skill",children:(0,n.jsx)(r.strong,{children:"Who should use the Prior Auth Review sample skill?"})}),`
`,(0,n.jsx)(r.p,{children:"This skill is designed for payer clinical reviewers who need to significantly reduce the time to initial recommendation without writing code from scratch."}),`
`,(0,n.jsxs)(r.h2,{id:"how-to-access-the-skill-in-claudeai",children:[(0,n.jsx)(r.strong,{children:"How to access the skill in"})," ",(0,n.jsx)(r.a,{href:"http://claude.ai",children:(0,n.jsx)(r.strong,{children:"Claude.ai"})})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Download the ",(0,n.jsxs)(r.a,{href:"https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip",children:["ZIP file for ",(0,n.jsx)(r.code,{children:"prior-auth-review-skill"})]})]}),`
`,(0,n.jsx)(r.li,{children:"Review the sample skill thoroughly and make edits and adjustments to fit your organization’s workflows"}),`
`,(0,n.jsxs)(r.li,{children:["Open ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings",children:"Organization settings"}),", search for “Skills” and click the first result. Make sure the switches for skills and code execution are both turned on."]}),`
`,(0,n.jsxs)(r.li,{children:["Open ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/skills",children:"your organization’s skills and plugins"}),", select the add button at the top, and upload the skill zip file"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13119606-provisioning-and-managing-skills-for-your-organization",children:"provisioning and managing skills for your organization"})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Download the ",(0,n.jsxs)(r.a,{href:"https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip",children:["ZIP file for ",(0,n.jsx)(r.code,{children:"prior-auth-review-skill"})]})]}),`
`,(0,n.jsx)(r.li,{children:"Review the sample skill thoroughly and make edits and adjustments to fit your workflow"}),`
`,(0,n.jsxs)(r.li,{children:["Open ",(0,n.jsx)(r.a,{href:"https://claude.ai/customize/skills",children:"skills in Claude"})," and select ",(0,n.jsx)(r.strong,{children:"Add"}),". If you don’t see skills or ",(0,n.jsx)(r.strong,{children:"Add"}),", search Settings for “Code execution” and make sure it’s on (on a Team or Enterprise plan, contact your team admin)."]}),`
`,(0,n.jsx)(r.li,{children:"Choose the upload option, then select the skill zip file"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-access-the-skill-in-claude-code",children:(0,n.jsx)(r.strong,{children:"How to access the skill in Claude Code"})}),`
`,(0,n.jsx)(r.p,{children:"Command"}),`
`,(0,n.jsx)(i,{children:"/plugin marketplace add anthropics/healthcare"}),`
`,(0,n.jsx)(i,{children:"/plugin install prior-auth-review@healthcare"})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["CodeCommand"];export{i as default};