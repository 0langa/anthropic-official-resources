import{Hf as e,Wf as t}from"../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The NPI Registry connector gives Claude access to the CMS National Plan and Provider Enumeration System (NPPES) to validate, look up, and search healthcare providers in the United States by their National Provider Identifier (NPI). This article explains how to set up and use the NPI Registry integration with Claude to search and verify US healthcare provider credentials."}),`
`,(0,n.jsxs)(r.p,{children:["The NPI Registry integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What this integration provides"}),`
`,(0,n.jsx)(r.p,{children:"The NPI Registry connector provides programmatic access to the Centers for Medicare & Medicaid Services (CMS) NPPES NPI Registry API v2.1. The National Provider Identifier (NPI) is a unique 10-digit identification number required under HIPAA for covered healthcare providers in the United States. This connector enables users to validate NPI numbers, retrieve comprehensive provider information, and search the registry containing millions of individual providers (NPI-1) and organizations (NPI-2) including physicians, nurses, therapists, hospitals, clinics, and pharmacies."}),`
`,(0,n.jsx)(r.p,{children:"The connector provides three core tools that access different NPPES endpoints:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"npi_validate"})," performs instant local validation of NPI format and Luhn check digit without making an API call"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"npi_lookup"})," retrieves complete provider records by NPI number including credentials (MD, DO, RN, PA-C, etc.), primary specialty/taxonomy codes, state license numbers, practice addresses, phone numbers, and enumeration status"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"npi_search"})," enables discovery of providers through flexible queries combining first/last name, organization name, location (city/state/ZIP), specialty/taxonomy descriptions, and supports wildcards and name alias expansion. The provider-side data accessed includes self-reported information from NPPES enrollment records such as legal business names, practice locations, NUCC healthcare provider taxonomy classifications, state licensing information, mailing addresses, and optional health information exchange endpoints."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-npi-registry-integration",children:"Who should use the NPI Registry integration"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare Administrators:"})," Verify provider credentials, validate billing information, and maintain accurate provider directories for insurance networks and health systems"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Clinical Research Coordinators:"})," Validate US-based clinical trial investigators' credentials and verify their medical specialties and practice locations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare IT Developers:"})," Build provider lookup features, validate NPI numbers in EHR systems, and integrate provider verification into healthcare applications"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Medical Affairs Teams:"})," Identify and locate key opinion leaders, build physician networks, and conduct competitive intelligence on provider affiliations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Compliance Officers:"})," Verify provider licensing status, validate NPIs for regulatory submissions, and audit provider enrollment data"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare Recruiters:"})," Find providers by specialty and location, identify practice affiliations, and verify credentials during candidate screening"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Health Services Researchers:"})," Analyze provider distribution patterns, study specialty availability by geographic region, and access provider taxonomy data"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-npi-registry-integration",children:"Setting up the NPI Registry integration"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"NPI Registry"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"NPI Registry"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/healthcare"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install npi-registry@healthcare"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:"Example use cases"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Provider Credential Verification"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Validate the credentials, specialty, and practice location of a healthcare provider before onboarding, contracting, or referral."}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Validate NPI 1043248818 and show me their credentials and specialty"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Look up the provider with NPI 1679576722 and tell me if they're actively licensed"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Check if NPI 1234567893 is valid and what type of provider it belongs to"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Provider Discovery by Specialty and Location"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Find healthcare providers in specific geographic areas by their medical specialty to build networks, identify referral partners, or analyze provider availability."}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all cardiologists practicing in Boston, Massachusetts"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search for nurse practitioners in ZIP code 90210"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me orthopedic surgeons in California with their practice addresses"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all general acute care hospitals in New York"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Clinical Trial Investigator Verification"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Verify that clinical trial investigators are legitimate US healthcare providers with appropriate credentials and active status."}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"I have a clinical trial investigator named Dr. Sarah Johnson in Minnesota. Can you find her NPI and verify her credentials?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Verify that the principal investigator John Smith, MD is a licensed oncologist in Texas"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find the NPI and specialty for Dr. Robert Chen who lists Mayo Clinic as his affiliation"})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};