import{Gp as e,qp as t}from"../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The bioRxiv connector gives Claude access to bioRxiv and medRxiv preprint servers, enabling researchers to search, retrieve, and summarize preprints. This article explains how to set up and use the bioRxiv integration with Claude to track emerging research before peer review publication."}),`
`,(0,n.jsxs)(r.p,{children:["The bioRxiv integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"This connector gives Claude direct access to bioRxiv and medRxiv, the leading preprint servers for biological and health sciences operated by openRxiv. bioRxiv focuses on basic research across more than 25 life science disciplines, while medRxiv specializes in clinical and health research. These platforms enable scientists to share unpublished manuscripts rapidly, with bioRxiv now hosting over 310,000 preprints. The connector provides early access to cutting-edge research months before traditional peer-reviewed publication."}),`
`,(0,n.jsx)(r.p,{children:"The connector provides nine primary tool calls that access different aspects of the preprint ecosystem."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_preprints"})," enables users to discover preprints by date range, subject category (neuroscience, genomics, immunology, etc.), or recent submissions, returning DOIs, titles, authors, abstracts, and categories for each result."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_preprint"})," retrieves comprehensive metadata for specific preprints including full abstracts, corresponding author contact information, funding details, license information, PDF URLs, and whether the preprint has been published in a peer-reviewed journal."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_categories"})," lists all 27 bioRxiv subject categories for filtering searches across disciplines from animal behavior to systems biology."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_published_articles"})," tracks preprints that have successfully transitioned to peer-reviewed publication, returning both the original preprint DOI and the published journal DOI with publication dates for analyzing preprint-to-publication timelines."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_biorxiv_publications"})," provides simplified tracking of bioRxiv-specific publication outcomes (excludes medRxiv)."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_publisher_articles"})," filters published preprints by specific journals or publishers using DOI prefixes, enabling competitive analysis of which journals publish from the preprint pool."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_by_funder"})," discovers research funded by specific organizations using ROR IDs (e.g., NIH, NSF, European Commission), essential for tracking grant-funded research output."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_content_statistics"})," and ",(0,n.jsx)(r.strong,{children:"get_usage_statistics"})," provide platform-wide metrics on submission volumes, cumulative growth, abstract views, full-text views, and PDF downloads over time."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"On the provider side, the connector queries the official bioRxiv/medRxiv RESTful API, accessing metadata stored in their PostgreSQL database. All preprints undergo basic screening for plagiarism and non-scientific content but are NOT peer-reviewed. Preprints receive DOIs for citability and version control tracks revisions over time."}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-biorxiv-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the bioRxiv integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Academic Researchers:"})," Monitor emerging research in their field before formal publication, identify collaboration opportunities, track competitor labs' preprints, and stay current with fast-moving areas where preprints provide 3-12 month publication lead time."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Grant Reviewers & Funding Officers:"})," Track research outputs from funded grants using ROR-based funder searches, assess productivity of research programs, and monitor which preprints from funded work achieve peer-reviewed publication."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Journal Editors & Publishers:"})," Discover high-quality preprints for solicitation, analyze which preprints attract reader attention through usage statistics, and understand publication patterns across therapeutic areas or disciplines."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pharmaceutical & Biotech Scientists:"})," Monitor early-stage research relevant to drug targets, track academic publications before patent filings become public, identify emerging therapeutic modalities, and discover potential academic collaboration partners."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Science Journalists & Communicators:"})," Find breaking research stories, verify preprint status before reporting, track which preprints generate public interest through download metrics, and identify high-impact studies transitioning to peer-review."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Meta-Researchers & Bibliometricians:"})," Analyze preprint-to-publication rates, study time-to-publication across disciplines, investigate funder impacts on research dissemination, and track platform growth trends in open science."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"PhD Students & Postdocs:"})," Stay current with latest methodologies before publication, find recent work for literature reviews, identify active research groups in their area, and discover which labs are productively publishing in their field."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-biorxiv-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the bioRxiv integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"bioRxiv"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"bioRxiv"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install biorxiv@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Literature Monitoring & Early Research Discovery"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Staying current with rapidly evolving research areas before formal publication"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all neuroscience preprints posted in the last 30 days related to Alzheimer's disease"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search medRxiv for recent COVID-19 clinical trial preprints from the past week"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me the latest CRISPR gene editing preprints in the molecular biology category"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are the most recent cancer immunotherapy preprints on bioRxiv?"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Publication Tracking & Impact Analysis"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Analyzing which preprints successfully transition to peer-reviewed journals"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Which bioRxiv preprints have been published in Nature journals in the past 6 months?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Track preprints that were published in high-impact journals with DOI prefix 10.1126 (Science)"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me recent genomics preprints that have been formally published and compare preprint vs publication dates"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find preprints from 2024 that successfully made it into peer-reviewed journals"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Funding Agency Research Output Monitoring"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Tracking research productivity and outputs from specific funding organizations"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all preprints funded by the NIH (ROR ID: 021nxhr62) in the past year"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What research has the European Commission (ROR: 02mhbdp94) funded that's been posted as preprints?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me bioRxiv preprints funded by the Wellcome Trust and track their publication outcomes"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Analyze preprint submission trends and usage statistics for platform growth over time"})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};