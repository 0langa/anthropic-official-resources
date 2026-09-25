import{Nm as e,jm as t}from"../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The ClinicalTrials.gov connector gives Claude access to the NIH/NLM registry of 500,000+ clinical studies to search trials, analyze endpoints, and support research operations. This article explains how to set up and use the ClinicalTrials.gov integration with Claude to power clinical, regulatory, and patient-supporting workflows."}),`
`,(0,n.jsxs)(r.p,{children:["The ClinicalTrials.gov integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"The ClinicalTrials.gov connector gives Claude access to ClinicalTrials.gov API v2, the world's largest clinical trial registry managed by the National Library of Medicine (NLM) at the National Institutes of Health (NIH). With more than 1,200 studies, the database has grown to over 500,000 registered trials across 221 countries and territories, representing the most comprehensive source of clinical research information worldwide."}),`
`,(0,n.jsx)(r.p,{children:"This connector provides six primary tool calls that access different dimensions of clinical trial data."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_trials"}),' is the primary discovery tool, enabling users to find trials by condition (e.g., "diabetes", "lung cancer"), intervention (drug/treatment names), location (city, state, country), sponsor, recruitment status (RECRUITING, COMPLETED, etc.), and development phase (PHASE1-PHASE4), with support for Boolean operators and medical synonym expansion.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_trial_details"})," retrieves comprehensive protocol information for specific trials using their NCT identifier, returning full eligibility criteria (inclusion/exclusion), detailed study design and methodology, primary and secondary endpoints with measurement timeframes, all study locations with contact information, sponsor details, enrollment targets, and links to published results."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_by_sponsor"}),' enables pharmaceutical pipeline analysis by finding all trials funded by specific companies or institutions (e.g., "Pfizer", "NIH", "Mayo Clinic"), supporting competitive intelligence and drug development tracking with filtering by condition and phase.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_investigators"})," identifies principal investigators and research sites conducting trials in specific therapeutic areas, returning investigator names, roles, institutional affiliations, facility locations, and associated trial information for site selection and investigator verification."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"analyze_endpoints"})," systematically compares outcome measures across trials, operating in two modes: single-trial analysis (returns all endpoints for one NCT ID) or aggregate analysis (identifies common endpoint patterns across multiple trials in a therapeutic area), essential for protocol design benchmarking and understanding standard measures in a disease area."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_by_eligibility"}),' enables clinical research coordinators to screen for trials matching specific demographic and clinical criteria (age, sex) with support for eligibility keyword searches in inclusion/exclusion criteria text (e.g., "BRCA mutation", "HbA1c > 8%", "ECOG 0-1").']}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"On the provider side, the connector queries ClinicalTrials.gov's RESTful API v2, which accesses a PostgreSQL database updated daily with trial registration data submitted by study sponsors. All interventional trials of FDA-regulated products must be registered before enrollment begins (per FDAAA 801), and results must be submitted within one year of study completion. The database includes structured data fields for conditions (using MeSH terminology), interventions, locations, eligibility criteria, outcome measures, and study design parameters."}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-clinicaltrialsgov-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the ClinicalTrials.gov integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Clinical Research Coordinators & Study Recruiters:"})," Screen institutional patient populations for trial eligibility using demographic and clinical criteria, identify nearby recruiting studies for referral programs, verify detailed trial requirements and visit schedules, and coordinate with study sponsors to accelerate enrollment."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pharmaceutical & Biotech Companies:"})," Conduct competitive intelligence on competitor pipelines, analyze clinical development strategies across therapeutic areas, identify partnership opportunities with active research sites, and benchmark study designs and endpoints against industry standards."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Principal Investigators & Site Coordinators:"})," Identify collaborating investigators at other institutions, understand which sites are most active in specific disease areas, verify investigator qualifications and track record, and discover trials for potential site participation."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Protocol Writers & Clinical Operations Teams:"})," Benchmark endpoint selection by analyzing outcome measures used in similar trials, design eligibility criteria based on prior study standards, identify common recruitment challenges in a therapeutic area, and estimate feasible enrollment timelines."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Regulatory Affairs Professionals:"})," Track clinical development programs for regulatory submissions, verify trial registration compliance for FDA-regulated products, analyze phase progression rates and development timelines, and identify precedent trials for regulatory strategy."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Clinical Trial Recruiters & Research Navigators:"})," Screen institutional patient populations for trial eligibility, identify appropriate trials for referral programs, coordinate with study sponsors for patient enrollment, and maintain databases of active trials at their healthcare system."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Medical Affairs & Health Economists:"})," Analyze trial completion rates and time-to-results, identify gaps in clinical evidence for specific indications, track real-world evidence studies and post-marketing trials, and support payer value dossiers with clinical trial data."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-clinicaltrialsgov-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the ClinicalTrials.gov integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"ClinicalTrials.gov"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"ClinicalTrials.gov"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install clinical-trials@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsxs)(r.li,{children:["Verify that the server is connected with ",(0,n.jsx)(r.code,{children:"/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the ClinicalTrials.gov integration can be found in the ",(0,n.jsx)(r.a,{href:"http://clinicaltrials.gov",children:"ClinicalTrials.gov MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Clinical Trial Recruitment & Eligibility Screening"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Research coordinators and recruitment professionals identifying eligible trial candidates from their institutional patient populations"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find recruiting Phase 3 diabetes trials with HbA1c eligibility criteria between 7-10% for our Boston research site"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What breast cancer trials are accepting BRCA-positive candidates at academic medical centers in California?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search for Alzheimer's trials with MMSE score requirements that match our memory clinic population"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Identify pediatric leukemia trials recruiting at major children's hospitals for our referral network"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Competitive Intelligence & Pipeline Analysis"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Analyzing pharmaceutical company development programs and therapeutic landscapes"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What Phase 3 oncology trials is Pfizer currently running? Show their cancer pipeline"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all GLP-1 agonist trials for obesity. Who are the main sponsors and what endpoints are they measuring?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me Moderna's active clinical trials and their development phases"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What companies are developing drugs for Parkinson's disease? Analyze their trial endpoints"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Systematic Protocol Design & Endpoint Benchmarking"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Designing new trial protocols based on industry standards and precedent studies"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are the most common primary endpoints used in Phase 3 diabetes trials?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Analyze endpoints for completed heart failure trials - what timeframes do they use?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find principal investigators at academic medical centers conducting immunotherapy trials"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What eligibility criteria do Phase 2 NASH trials typically use? Show me HbA1c cutoffs"})}),`
`,(0,n.jsx)(r.p,{children:"Learn more at How to use the Clinical Trial Protocol skill with Claude"})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};