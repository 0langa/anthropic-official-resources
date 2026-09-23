import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i,CodeCommand:o}=r;return i||a("ChatPrompt",!0),o||a("CodeCommand",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The ToolUniverse MCP gives Claude access to a library of 600+ vetted scientific tools to explore large hypothesis spaces, compare competing hypotheses, and iterate through fast-to-slow cycles of analysis. This article explains how to set up and use the ToolUniverse integration with Claude."}),`
`,(0,n.jsxs)(r.p,{children:["The ToolUniverse integration is available as a desktop extension in the Claude Desktop App (",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"download here"}),"), and it relies upon Claude's ability to use ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop",children:"local connectors via a desktop extension"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"about-the-tooluniverse-integration",children:(0,n.jsx)(r.strong,{children:"About the ToolUniverse integration"})}),`
`,(0,n.jsx)(r.p,{children:"ToolUniverse is an ecosystem for building AI scientists and AI agents for science that work with researchers to generate hypotheses, turn them into executable research plans, run scientific tools, and continually update analyses. It targets research at scale to reimagine scientific discovery: AI scientists explore large hypothesis spaces, compare competing hypotheses, and iterate through fast-to-slow cycles of analysis instead of producing one-off summaries."}),`
`,(0,n.jsx)(r.p,{children:"ToolUniverse standardizes tool use. It lets AI scientists discover and execute tools via local Python functions and remote services served through MCP. This design makes every step inspectable: AI scientists compose end-to-end workflows that connect datasets, models, and analysis pipelines and record inputs and outputs before they choose the next action. In human-AI collaboration, ToolUniverse supports a continuous loop of hypothesis generation, information-seeking tool calls, execution of research objectives, and refinement of internal models as new experimental data arrive and insights are generated."}),`
`,(0,n.jsx)(r.h2,{id:"data-sets-and-services-available-in-this-integration",children:(0,n.jsx)(r.strong,{children:"Data sets and services available in this integration"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Disclaimer from ToolUniverse:"})," ToolUniverse provides access to third-party scientific databases and services. All copyrights and intellectual property rights for the data, content, and services listed below belong to their respective original sources and owners. ToolUniverse acts solely as an integration platform and bears no responsibility for the accuracy, completeness, or continued availability of these external resources."]}),`
`,(0,n.jsx)(r.p,{children:"ToolUniverse provides access to a comprehensive ecosystem of scientific resources:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Biological Databases and Biological Foundation Models"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"UniProt - Complete protein knowledge database"}),`
`,(0,n.jsx)(r.li,{children:"Ensembl - Genomic data and annotations"}),`
`,(0,n.jsx)(r.li,{children:"RCSB PDB - Protein structure database"}),`
`,(0,n.jsx)(r.li,{children:"ChEMBL - Bioactive molecules and drug discovery database"}),`
`,(0,n.jsx)(r.li,{children:"NCBI databases - GenBank, RefSeq, SNP database"}),`
`,(0,n.jsx)(r.li,{children:"Gene Ontology - Biological process, function, and location annotations"}),`
`,(0,n.jsx)(r.li,{children:"ESM - Protein language models"}),`
`,(0,n.jsx)(r.li,{children:"TranscriptFormer - Single-cell foundation models"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Chemical and Drug Databases"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"PubChem - Chemical structures and biological activities"}),`
`,(0,n.jsx)(r.li,{children:"DrugBank - Drug and drug target database"}),`
`,(0,n.jsx)(r.li,{children:"ChEMBL - Bioactive drug-like small molecules"}),`
`,(0,n.jsx)(r.li,{children:"FDA databases - Drug approval, drug prescribing information, adverse events, drug indications and contraindications, drug interactions"}),`
`,(0,n.jsx)(r.li,{children:"ClinicalTrials.gov - Clinical trial information"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Literature and Knowledge Bases"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"PubMed - Biomedical literature database"}),`
`,(0,n.jsx)(r.li,{children:"Semantic Scholar - AI-powered literature analysis"}),`
`,(0,n.jsx)(r.li,{children:"Europe PMC - Open access biomedical literature"}),`
`,(0,n.jsx)(r.li,{children:"OpenAlex - Comprehensive scholarly works database"}),`
`,(0,n.jsx)(r.li,{children:"Crossref - DOI registration and metadata"}),`
`,(0,n.jsx)(r.li,{children:"OpenTargets - Insights for systematic drug target selection"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Genomic and Health Data"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"GTEx - Tissue-specific gene expression"}),`
`,(0,n.jsx)(r.li,{children:"GWAS Catalog - Genome-wide association studies"}),`
`,(0,n.jsx)(r.li,{children:"ClinVar - Genetic variation and disease relationships"}),`
`,(0,n.jsx)(r.li,{children:"OMIM - Online Mendelian Inheritance in Man"}),`
`,(0,n.jsx)(r.li,{children:"TCGA - Cancer genomics data"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Research Tools and APIs"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"OpenTargets - Target-disease associations"}),`
`,(0,n.jsx)(r.li,{children:"STRING - Protein-protein interaction networks"}),`
`,(0,n.jsx)(r.li,{children:"KEGG - Pathway and disease information"}),`
`,(0,n.jsx)(r.li,{children:"Reactome - Biological pathway database"}),`
`,(0,n.jsx)(r.li,{children:"InterPro - Protein families and domains"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"AI Models, AI agents, Foundation and Generative Models, Visualizations and Scientific Workflows"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"AlphaFold - Protein structure prediction"}),`
`,(0,n.jsx)(r.li,{children:"BLAST - Sequence similarity searching"}),`
`,(0,n.jsx)(r.li,{children:"ADMET-AI - Drug property prediction models"}),`
`,(0,n.jsx)(r.li,{children:"ChemTools - Chemical informatics utilities"}),`
`,(0,n.jsx)(r.li,{children:"Visualization tools - Molecular and data visualization"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-tooluniverse-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the ToolUniverse integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Research Scientists and Academics"})}),`
`,(0,n.jsx)(r.p,{children:"Accelerate hypothesis generation, automate literature reviews, perform complex multi-database analyses, and scale research capabilities to emerging experimental and AI-human collaboration platforms."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Pharmaceutical and Biotech Companies"})}),`
`,(0,n.jsx)(r.p,{children:"Streamline drug development pipelines, enhance target identification, improve compound design and optimization, virtual drug screening, and accelerate report generation and target assessment, de-risking and validation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Healthcare Organizations"})}),`
`,(0,n.jsx)(r.p,{children:"Power precision medicine initiatives, support clinical trial design and optimization with patient selection, facilitate pharmacogenomics research, and improve patient stratification strategies, extract prognostic and predictive biomarkers from multimodal healthcare datasets."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Data Scientists, ML Engineers, Platform and Infrastructure Engineers"})}),`
`,(0,n.jsx)(r.p,{children:"Access to domain-specific tools without custom development, rapid prototyping of AI agents for science, and integration of scientific data into ML workflows."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Government and Regulatory Agencies"})}),`
`,(0,n.jsx)(r.p,{children:"Enhanced regulatory decision-making, improved adverse event analysis, accelerated drug approval processes, and comprehensive safety monitoring."}),`
`,(0,n.jsx)(r.h2,{id:"who-can-access-the-tooluniverse-integration",children:(0,n.jsx)(r.strong,{children:"Who can access the ToolUniverse integration"})}),`
`,(0,n.jsxs)(r.p,{children:["ToolUniverse is open source under the Apache License 2.0, allowing free access to all features in ToolUniverse. The source code is available on ",(0,n.jsx)(r.a,{href:"https://github.com/mims-harvard/ToolUniverse",children:"GitHub"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["More details on accessing the integration can be found in ",(0,n.jsx)(r.a,{href:"https://github.com/mims-harvard/ToolUniverse",children:"ToolUniverse’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-tooluniverse-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the ToolUniverse integration"})}),`
`,(0,n.jsxs)(r.p,{children:["The ToolUniverse integration is available as a desktop extension in the Claude Desktop App (",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"download here"}),"). For Organization Owners (Team and Enterprise), setting up the integration involves making the extension available to your organization. For individual users, setting up the integration involves installing the extension from inside the Claude Desktop App."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"If your organization uses the Desktop Extension Allowlist (i.e., restricts which Desktop Extensions users can access)…"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:"Click “Desktop” tab at the top"}),`
`,(0,n.jsxs)(r.li,{children:["Confirm that “Allowlist” it toggled ",(0,n.jsx)(r.strong,{children:"on"})]}),`
`,(0,n.jsx)(r.li,{children:"Click the “Browse” button"}),`
`,(0,n.jsxs)(r.li,{children:["In the search field, type “",(0,n.jsx)(r.strong,{children:"ToolUniverse"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click on ToolUniverse"}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`,(0,n.jsxs)(r.li,{children:["Instruct your team to download the ",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"Claude Desktop App"})," to access the integration by following the instructions below for Individual Claude Users"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"If your organization does not use the Desktop Extension Allowlist (i.e., does not restrict which Desktop Extensions users can access)…"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:"Click “Desktop” tab at the top"}),`
`,(0,n.jsxs)(r.li,{children:["Confirm that “Allowlist” it toggled ",(0,n.jsx)(r.strong,{children:"off"})]}),`
`,(0,n.jsx)(r.li,{children:"If the Allowlist is toggled off, all users in your organization will already be able to access the Desktop Extension directory using the instructions below for Individual Claude Users"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Download the ",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"Claude Desktop App"})]}),`
`,(0,n.jsx)(r.li,{children:"In the Claude Desktop App, navigate to Settings > Extensions"}),`
`,(0,n.jsx)(r.li,{children:"Click “Browse extensions”"}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"ToolUniverse"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Install”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop",children:"installing desktop extensions from the directory"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Command:"}),`
`,(0,n.jsx)(o,{children:"/plugin marketplace add anthropics/life-sciences"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Command:"}),`
`,(0,n.jsx)(o,{children:"/plugin install tool-universe@life-sciences"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Restart Claude Code"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Verify that the server is connected with ",(0,n.jsx)(r.code,{children:"/mcp"})]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the ToolUniverse integration can be found in ",(0,n.jsx)(r.a,{href:"https://github.com/mims-harvard/ToolUniverse",children:"ToolUniverse’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Drug Discovery and Therapeutic Development"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Therapeutic discovery and target-to-candidate workflows"}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Sample Prompt:"})}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Identify targets for hypercholesterolemia, prioritize one using evidence from OpenTargets and literature, then screen known drugs and close analogs, and rank candidates by predicted binding and ADMET tradeoffs. Provide intermediate evidence and a final shortlist."})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Workflow:"})," ToolUniverse-powered AI scientists:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Query disease-target associations using OpenTargets API"}),`
`,(0,n.jsx)(r.li,{children:"Retrieve protein structures from RCSB PDB"}),`
`,(0,n.jsx)(r.li,{children:"Analyze molecular interactions with ChEMBL compound data"}),`
`,(0,n.jsx)(r.li,{children:"Predict binding affinities using integrated ML models"}),`
`,(0,n.jsx)(r.li,{children:"Generate research hypotheses for therapeutic development"}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Human Genetics and Genomic Research"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Human genetics to mechanism (variant-to-gene-to-pathway)"}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Sample Prompt:"})}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"From GWAS hits for type 2 diabetes, map variants to candidate genes, summarize functional annotations and tissue expression, and return enriched pathways with supporting references and links to primary sources."})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Workflow:"})," ToolUniverse-powered AI scientists:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Search GWAS catalog for disease-associated genetic variants"}),`
`,(0,n.jsx)(r.li,{children:"Map SNPs to genes using Ensembl and NCBI databases"}),`
`,(0,n.jsx)(r.li,{children:"Retrieve functional annotations from Gene Ontology"}),`
`,(0,n.jsx)(r.li,{children:"Analyze tissue-specific expression using GTEx data"}),`
`,(0,n.jsx)(r.li,{children:"Identify biological pathways using KEGG and Reactome"}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Literature and Multimodal Evidence Synthesis"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Sample Prompt:"})}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search PubMed and Europe PMC for recent CRISPR off-target detection methods, extract key experimental settings and reported failure modes, and produce a structured comparison table with citations."})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Workflow:"})," ToolUniverse-powered AI scientists:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Multi-database literature searches (PubMed, Europe PMC, bioRxiv)"}),`
`,(0,n.jsx)(r.li,{children:"Automated paper summarization and key finding extraction"}),`
`,(0,n.jsx)(r.li,{children:"Citation network analysis using Semantic Scholar"}),`
`,(0,n.jsx)(r.li,{children:"Trend identification through temporal analysis"}),`
`,(0,n.jsx)(r.li,{children:"Cross-referencing with clinical trial data from ClinicalTrials.gov"}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Chemical and Molecular Analysis"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Sample Prompt:"})}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Using ToolUniverse's OpenFDA and ADMET-AI tools, analyze the molecular properties of FDA-approved drugs for hypertension, predict their ADMET profiles, and identify potential side effect patterns."})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Workflow: ToolUniverse-powered AI scientists:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Query FDA drug databases for approved medications"}),`
`,(0,n.jsx)(r.li,{children:"Calculate molecular descriptors and properties"}),`
`,(0,n.jsx)(r.li,{children:"Predict pharmacokinetic profiles using ADMET-AI models"}),`
`,(0,n.jsx)(r.li,{children:"Analyze structure-activity relationships"}),`
`,(0,n.jsx)(r.li,{children:"Identify potential drug repurposing opportunities"}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Scientific Discovery and Automation for Multi-Tool Studies"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Sample Prompt:"})}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Build a reusable workflow that runs multiple literature searches in parallel, consolidates results, and produces a reproducible report. Return the workflow as a composed tool with clear inputs and outputs. Using ToolUniverse's UniProt, PRIDE, and KEGG pathway tools, design a complete proteomics workflow: from protein identification using mass spectrometry data to functional analysis and pathway mapping."})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Workflow:"})," ToolUniverse-powered AI scientists:",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Integrate multimodal proteomics databases (UniProt, PRIDE)"}),`
`,(0,n.jsx)(r.li,{children:"Automate data processing and quality control of proteomics readouts"}),`
`,(0,n.jsx)(r.li,{children:"Annotate protein functions and perform pathway analysis"}),`
`,(0,n.jsx)(r.li,{children:"Complete statistical analyses and generate interactive visualizations"}),`
`,(0,n.jsx)(r.li,{children:"Generate reports with summaries"}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"demos-and-documentation",children:(0,n.jsx)(r.strong,{children:"Demos and Documentation"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Live Demonstrations"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Interactive Web Platform:"})," ",(0,n.jsx)(r.a,{href:"https://aiscientist.tools",children:"AIScientist.Tools"})," - Live tool discovery and execution interface for exploring 700+ scientific tools"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Video Demonstrations:"})," Available on ",(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=fManSJlSs60",children:"YouTube"})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"GitHub Repository:"})," ",(0,n.jsx)(r.a,{href:"https://github.com/mims-harvard/ToolUniverse",children:"ToolUniverse on GitHub"})," - Complete source code, documentation, and community with 797+ stars"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Documentation and Tutorials"})}),`
`,(0,n.jsxs)(r.p,{children:["Documentation is available at ",(0,n.jsx)(r.a,{href:"https://zitniklab.hms.harvard.edu/ToolUniverse/",children:"ToolUniverse Documentation"})," covering installation, usage, and advanced features, including a quick start tutorial for 5-minute setup and immediate experimentation with scientific tools, and guides for integration with large language models, AI agents, and reasoning models."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Community Resources"})}),`
`,(0,n.jsxs)(r.p,{children:["Access community resources through our ",(0,n.jsx)(r.a,{href:"https://join.slack.com/t/tooluniversehq/shared_invite/zt-3dic3eoio-5xxoJch7TLNibNQn5_AREQ",children:"Slack Community"})," for peer support and collaboration, and ",(0,n.jsx)(r.a,{href:"https://github.com/mims-harvard/ToolUniverse",children:"GitHub Issues"})," for reporting bugs and requesting features."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};