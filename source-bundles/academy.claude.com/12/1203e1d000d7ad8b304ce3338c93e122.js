import{$f as e,Zf as t}from"../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The ChEMBL connector gives Claude access to EMBL-EBI's ChEMBL database, a manually curated repository of bioactive molecules with drug-like properties, their biological targets, and quantitative activity measurements. This article explains how to set up and use the ChEMBL integration with Claude to accelerate drug discovery through bioactive compound data."}),`
`,(0,n.jsxs)(r.p,{children:["The ChEMBL integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"This integration connects Claude to the most recent version of ChEMBL, Europe's leading open-access drug discovery database maintained by the European Bioinformatics Institute (EMBL-EBI). ChEMBL contains over 2 million bioactive compounds, 15+ million activity measurements, and data from 76,000+ scientific publications, making it an essential resource for computational drug discovery, target identification, and pharmaceutical research."}),`
`,(0,n.jsx)(r.p,{children:"This connector provides six primary tool calls that access different facets of the ChEMBL database."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"compound_search"})," enables users to find molecules by name, ChEMBL ID, or chemical structure (SMILES), returning comprehensive data including molecular properties, synonyms, approval status, and ATC classifications."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"target_search"})," queries biological targets (proteins, enzymes, receptors) by name, gene symbol, or organism, providing protein accessions, Gene Ontology annotations, and cross-references to UniProt and other databases."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_bioactivity"})," retrieves quantitative activity measurements (IC50, EC50, Ki, Kd values) for compound-target interactions, including assay descriptions, pChEMBL scores, confidence ratings, and literature references from peer-reviewed journals."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_mechanism"}),' accesses manually curated mechanism of action data for approved drugs, detailing how compounds interact with their biological targets (e.g., "Cyclooxygenase inhibitor") with action types (INHIBITOR, AGONIST, ANTAGONIST) and supporting references.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"drug_search"})," finds approved drugs and clinical candidates by therapeutic indication using MeSH disease terminology, returning drugs with their development phase, approval dates, and safety warnings."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_admet"})," provides calculated molecular properties critical for drug-likeness assessment, including lipophilicity (ALogP), polar surface area, hydrogen bond donors/acceptors, Rule of Five violations, and QED drug-likeness scores."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"On the provider side, the connector queries ChEMBL's RESTful API and SQL database containing standardized, manually curated data extracted from medicinal chemistry literature, clinical trials databases, and high-throughput screening campaigns. All bioactivity data includes confidence scores, data validity flags, and full provenance tracing back to original publications."}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-chembl-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the ChEMBL integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Medicinal Chemists:"})," Design and optimize lead compounds by analyzing structure-activity relationships (SAR), checking molecular properties against drug-likeness criteria, and identifying structural analogs with improved potency or selectivity."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pharmacologists:"})," Research drug mechanisms of action, identify polypharmacology risks, discover off-target effects, and validate therapeutic targets by examining bioactivity profiles across protein families."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Computational Biologists & Cheminformaticians:"})," Build machine learning models for activity prediction, perform virtual screening campaigns, train QSAR models, and conduct large-scale data mining across chemical space."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Drug Discovery Scientists:"})," Identify validated drug targets, find chemical starting points for hit-to-lead optimization, benchmark competitor compounds, and assess freedom-to-operate by analyzing approved drugs in therapeutic areas."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Academic Researchers:"})," Investigate drug repurposing opportunities, study evolutionary relationships between drug targets, analyze clinical development success rates, and validate findings against established bioactivity data."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pharmaceutical Project Teams:"})," Conduct competitive intelligence on drug pipelines, analyze endpoints for clinical trial design, assess target tractability, and evaluate ADMET liabilities early in development."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-chembl-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the ChEMBL integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"ChEMBL"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"ChEMBL"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install chembl@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Target-Based Drug Discovery"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:"Scenario: Identifying validated compounds for a therapeutic target of interest"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:"Sample Prompts:"})}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all approved kinase inhibitors that target EGFR with IC50 less than 100 nM"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What compounds have been tested against the BCL2 protein? Show me the most potent ones with their bioactivity data"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search for GPCR agonists targeting the adenosine A2A receptor and show their mechanism of action"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Compound Optimization & SAR Analysis"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Improving lead compound properties by studying structure-activity relationships"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find structural analogs of imatinib with similarity > 85% and compare their target selectivity profiles"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are the ADMET properties for aspirin? Does it pass Lipinski's Rule of Five?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me compounds similar to this SMILES structure: CC(=O)Oc1ccccc1C(=O)O, and compare their bioactivity against cyclooxygenase"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Competitive Intelligence & Drug Repurposing"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Analyzing therapeutic landscapes and identifying repositioning opportunities"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are all the approved drugs for treating hypertension? Show their mechanisms of action"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find the mechanism of action for pembrolizumab and identify all other compounds targeting the same protein"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search for approved oncology drugs that also show bioactivity against inflammatory disease targets"})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};