import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The CMS Coverage connector gives Claude access to the CMS Medicare Coverage Database, enabling searches and retrieval of National Coverage Determinations (NCDs), Local Coverage Determinations (LCDs), billing articles, and coverage policy updates for Medicare Part B services. This article explains how to set up and use the CMS Coverage integration with Claude to search Medicare Part B coverage policies instantly."}),`
`,(0,n.jsxs)(r.p,{children:["The CMS Coverage integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["This server may return data governed by third-party license agreements, including those available ",(0,n.jsx)(r.a,{href:"https://api.coverage.cms.gov/v1/metadata/license-agreement/",children:"here"}),". By connecting to this server, you understand and agree to abide by any applicable agreements."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"This integration connects to the CMS Coverage API v1, providing comprehensive access to the Medicare Coverage Database maintained by the Centers for Medicare & Medicaid Services. This connector enables users to search, retrieve, and monitor Medicare Part B coverage policies that determine whether and under what circumstances Medicare will pay for medical services, procedures, durable medical equipment (DME), laboratory tests, and injectable drugs administered in medical settings across the United States. It's important to note that this connector covers Part B coverage only — it does not include Medicare Part D prescription drug formularies or Part A inpatient hospital coverage."}),`
`,(0,n.jsx)(r.p,{children:"The connector provides multiple tool categories for different coverage research needs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["National coverage tools include:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_ncds"})," for finding official nationwide coverage policies,"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_nca_cals"})," for tracking coverage analyses and letters"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_medcac_meetings"})," for advisory committee discussions"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_technology_assessments"})," for clinical evidence reviews."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:["Local coverage tools include:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_lcds"})," for regional coverage policies by Medicare Administrative Contractors (MACs)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_proposed_lcds"})," for pending policy changes"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_articles"})," for detailed billing and coding guidance with CPT/HCPCS codes and ICD-10 requirements."]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Detail retrieval tools like ",(0,n.jsx)(r.strong,{children:"get_ncd"}),", ",(0,n.jsx)(r.strong,{children:"get_nca"}),", and ",(0,n.jsx)(r.strong,{children:"get_cal"})," fetch complete policy documents including coverage criteria, indications, limitations, effective dates, and documentation requirements. Helper tools include ",(0,n.jsx)(r.strong,{children:"get_contractors"})," for identifying MACs by region, ",(0,n.jsx)(r.strong,{children:"whats_new_national"})," and ",(0,n.jsx)(r.strong,{children:"whats_new_local"})," for monitoring recent policy changes, and ",(0,n.jsx)(r.strong,{children:"sad_exclusion_list"})," for checking self-administered drug exclusions."]}),`
`,(0,n.jsxs)(r.p,{children:["On the provider side, the connector accesses structured data from the CMS Medicare Coverage Database API, retrieving policy documents, contractor information, billing codes, medical necessity criteria, and revision histories directly from CMS's official repository. Data returned from these APIs may be governed by third-party license agreements, including those available ",(0,n.jsx)(r.a,{href:"https://api.coverage.cms.gov/v1/metadata/license-agreement/",children:"here"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-cms-coverage-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the CMS Coverage integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare Providers & Physicians:"})," Verify coverage for procedures, understand medical necessity requirements, and ensure compliance with Medicare billing policies before providing services"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Medical Coders & Billers:"})," Access detailed billing articles with CPT/HCPCS codes, ICD-10 diagnosis codes, modifiers, and documentation requirements for accurate claims submission"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare Compliance Officers:"})," Monitor policy changes, track coverage updates, and ensure organizational adherence to Medicare coverage guidelines"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prior Authorization Specialists:"})," Research coverage criteria, medical necessity requirements, and documentation standards for authorization requests"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Durable Medical Equipment (DME) Suppliers:"})," Look up LCD coverage policies for equipment like wheelchairs, oxygen systems, and CPAP devices by geographic region"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare Policy Researchers:"})," Analyze coverage trends, compare regional LCD variations, and track national coverage decision-making processes"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Medical Affairs & Market Access Teams:"})," Research coverage landscapes for medical devices, procedures, and treatments to inform commercialization strategies"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Clinical Trial Investigators:"})," Verify Medicare coverage status for procedures and services used in clinical research protocols"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-cms-coverage-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the CMS Coverage integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"CMS Coverage"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"CMS Coverage"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/healthcare"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install cms-coverage@healthcare"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Pre-Service Coverage Verification"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Healthcare providers need to verify Medicare coverage before performing procedures or prescribing equipment to avoid claim denials and ensure patients understand their coverage."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Sample Prompts:"}),`
`]}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Does Medicare cover continuous glucose monitoring for type 2 diabetes patients?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are the medical necessity criteria for home oxygen therapy in California?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find the LCD for power wheelchairs in my region and tell me what documentation is required"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Is sacral nerve stimulation covered by Medicare for urinary incontinence?"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Billing & Coding Compliance"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Medical coders and billers need specific HCPCS codes, ICD-10 diagnosis codes, and billing requirements to submit clean claims and avoid denials."}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are the covered ICD-10 codes for diabetes self-management training?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find the billing article for home oxygen equipment and show me the required HCPCS codes"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What modifiers are required for billing wheelchair accessories in Texas?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me the documentation requirements for billing cardiac rehabilitation services"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Policy Monitoring & Updates"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Compliance officers and healthcare administrators need to stay current with coverage policy changes that affect their practice or organization."}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What Medicare coverage policies have changed in the last 30 days?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me recent LCD updates for my Medicare contractor"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Have there been any new NCDs published for cardiovascular procedures this quarter?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Are there any proposed LCDs for laboratory testing that I should review?"})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};