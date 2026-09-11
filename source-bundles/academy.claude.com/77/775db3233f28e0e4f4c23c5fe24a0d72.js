import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={a:"a",br:"br",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatAttachments:i,ChatPrompt:o,ChatResponse:s,TryIn:c,Video:l}=r;return i||a("ChatAttachments",!0),o||a("ChatPrompt",!0),s||a("ChatResponse",!0),c||a("TryIn",!0),l||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{youtubeId:"kSl2mxseXkM",title:"Genomic data analysis demo"}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"Claude's ability to process large datasets and search scientific literature, combined with your domain expertise, lets you move from raw data to validated hypotheses in a fraction of the time it would take manually."}),`
`,(0,n.jsx)(r.p,{children:"Share your genomic data with Claude and describe what you want to explore. Claude can analyze differential expression patterns, create visualizations, and search scientific databases to contextualize your findings."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"My colleagues recently published the attached single-cell dataset that describes gene expression differences between adult and pediatric liver samples with a focus on the immune system. I would like to explore these samples but focus on the parenchymal cells and differences between adult and pediatric liver. Can you help me first go through the differentially expressed genes and create a heatmap and then also identify pathways or sets of genes that are enriched in each sample?"})}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsxs)(r.p,{children:["To help Claude analyze your genomic data effectively, you'll need to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/8241126-what-kinds-of-documents-can-i-upload-to-claude",children:"provide your datasets"})," and optionally ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"connect to research databases."})]}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsx)(r.p,{children:"Upload CSV or TSV files containing differential expression results, normalized counts, or other quantitative genomics data. Click the (+) button in the chat bar to browse through your files, or alternatively, drag and drop files into the chat box area."}),`
`,(0,n.jsxs)(r.p,{children:["Use connectors to give Claude access to research databases. You can browse through a ",(0,n.jsx)(r.a,{href:"https://claude.com/partners/mcp",children:"variety of tools"})," from trusted partners, built for Model Context Protocol, or ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp",children:"add custom ones"}),". Keep in mind, some connectors are only available using ",(0,n.jsx)(r.a,{href:"https://www.claude.com/download",children:"Claude for Desktop"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"Claude can then use your genomic data files to perform computational analysis and generate visualizations."}),`
`,(0,n.jsx)(i,{items:[{name:"Differential expression data files",fileType:"CSV"}]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Claude examines your datasets, performs pathway enrichment analysis, creates visual representations of gene expression patterns, and identifies key biological processes enriched in each condition."}),`
`,(0,n.jsxs)(s,{children:[(0,n.jsx)(r.p,{children:"I'd be happy to help you analyze these differentially expressed genes between adult and pediatric liver parenchymal cells! Let me start by examining the datasets you've uploaded."}),(0,n.jsx)(r.p,{children:"Perfect! I can see we have two datasets:"}),(0,n.jsxs)(r.p,{children:["Pediatric-enriched genes: 2000 genes with positive log fold changes",(0,n.jsx)(r.br,{}),`
`,"Adult-enriched genes: 818 genes with positive log fold changes"]}),(0,n.jsx)(r.p,{children:"Now let me create a comprehensive analysis including:"}),(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"A heatmap visualization of top differentially expressed genes"}),`
`,(0,n.jsx)(r.li,{children:"Pathway enrichment analysis for both conditions"}),`
`]}),(0,n.jsx)(r.p,{children:"Excellent! I've completed a comprehensive analysis of the differentially expressed genes between adult and pediatric liver parenchymal cells. Here's what I found:"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Key Findings:"})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Dataset Overview:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Pediatric-enriched: 1,999 genes with significantly higher expression"}),`
`,(0,n.jsx)(r.li,{children:"Adult-enriched: 817 genes with significantly higher expression"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Top Pediatric-Enriched Genes:"})}),(0,n.jsx)(r.p,{children:"The most striking pediatric markers show extremely high fold changes (15-25 log2FC):"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"KCNA5 (voltage-gated potassium channel) - 24.9 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"HSPB7 (heat shock protein) - 24.7 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"MYOZ1 (muscle development) - 24.3 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"HAPLN2 (ECM proteoglycan) - 8.7 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"CASQ2 (cardiac calcium sequestration) - 8.1 log2FC"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Top Adult-Enriched Genes:"})}),(0,n.jsx)(r.p,{children:"Adult liver shows moderate enrichment (4-5 log2FC) in mature metabolic functions:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"APOA4 (lipid metabolism) - 5.3 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"CYP2A7 (drug metabolism) - 4.6 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"CHI3L1 (inflammatory marker) - 4.4 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"F9 (coagulation factor IX) - 4.1 log2FC"}),`
`,(0,n.jsx)(r.li,{children:"CYP3A4 (primary drug metabolizing enzyme) - 3.6 log2FC"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Pathway Enrichment Analysis:"})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Strongly Pediatric-Biased (>75%):"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Cardiac/Smooth Muscle (89% pediatric) - developmental contractile machinery"}),`
`,(0,n.jsx)(r.li,{children:"Muscle/Contractile proteins (86%) - cytoskeletal maturation"}),`
`,(0,n.jsx)(r.li,{children:"Extracellular Matrix (85%) - tissue remodeling"}),`
`,(0,n.jsx)(r.li,{children:"Chemokines/Cytokines (81%) - immune recruitment"}),`
`,(0,n.jsx)(r.li,{children:"Heat Shock Proteins (80%) - stress response/development"}),`
`,(0,n.jsx)(r.li,{children:"Coagulation/Blood (78%) - hemostasis development"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Strongly Adult-Biased (>75%):"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"CYP450/Drug Metabolism (87% adult) - mature xenobiotic processing"}),`
`,(0,n.jsx)(r.li,{children:"Secreted Proteins (83%) - hepatic synthetic function"}),`
`,(0,n.jsx)(r.li,{children:"Lipid Metabolism (80%) - mature lipid homeostasis"}),`
`,(0,n.jsx)(r.li,{children:"Glucose Metabolism (67%) - gluconeogenesis capacity"}),`
`,(0,n.jsx)(r.li,{children:"Ion Channels/Transport (65%) - mature hepatocyte function"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Biological Insights:"})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Pediatric liver is characterized by:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Strong developmental programs (muscle, ECM, contractile proteins)"}),`
`,(0,n.jsx)(r.li,{children:"Active tissue remodeling and growth"}),`
`,(0,n.jsx)(r.li,{children:"Elevated stress response (HSPs)"}),`
`,(0,n.jsx)(r.li,{children:"Immune system recruitment signatures"}),`
`,(0,n.jsx)(r.li,{children:"Immature metabolic capacity"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Adult liver demonstrates:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Mature metabolic specialization (CYP450s, lipid/glucose metabolism)"}),`
`,(0,n.jsx)(r.li,{children:"Established synthetic functions (coagulation factors, complement)"}),`
`,(0,n.jsx)(r.li,{children:"Reduced developmental signaling"}),`
`,(0,n.jsx)(r.li,{children:"Functional hepatocyte differentiation"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Files Generated:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"View heatmap - Top 50 genes from each group"}),`
`,(0,n.jsx)(r.li,{children:"View pathway analysis - Pathway enrichment comparison"}),`
`,(0,n.jsx)(r.li,{children:"View detailed summary - Gene statistics"}),`
`,(0,n.jsx)(r.li,{children:"View full pathway analysis - Complete pathway details"}),`
`,(0,n.jsx)(r.li,{children:"View pathway summary table - Summary statistics"}),`
`]})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"literature-validation",children:"Literature validation"}),`
`,(0,n.jsxs)(r.p,{children:["Claude can search ",(0,n.jsx)(r.a,{href:"https://claude.ai/directory/pubmed",children:"PubMed"})," to distinguish which of your findings are well-documented in literature versus novel discoveries, helping you identify the most promising avenues for further research."]}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"I'd like to focus on the extracellular matrix and its remodeling or function in the pediatric liver. I want to understand what is expected in these findings vs. what is new. Can you look at the ECM and remodeling proteins and explore the literature in PubMed to clarify citations of well-understood matrix proteins in the pediatric liver v. ECM components that do not currently have known functions in developmental or pediatric liver?"})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsxs)(r.h3,{id:"connect-pubmed-for-real-time-literature-integration",children:["Connect ",(0,n.jsx)(r.a,{href:"https://claude.ai/directory/pubmed",children:"PubMed"})," for real-time literature integration"]}),`
`,(0,n.jsx)(r.p,{children:"When Claude is connected to PubMed, it can access actual papers, extract specific experimental details, and find citations you might miss. This turns literature review from a multi-day task into a conversation. Claude provides reference links to all the articles it mentions, including identifying specific sections that you can deep dive on your own for further review."}),`
`,(0,n.jsx)(r.h3,{id:"build-your-analysis-incrementally",children:"Build your analysis incrementally"}),`
`,(0,n.jsx)(r.p,{children:"Start with exploratory data analysis and visualization, review the patterns, then dive deeper into specific pathways. This checkpoint approach lets you steer the analysis toward the most interesting findings rather than trying to do everything at once."}),`
`,(0,n.jsx)(r.h3,{id:"ask-claude-to-show-its-computational-methods",children:"Ask Claude to show its computational methods"}),`
`,(0,n.jsx)(r.p,{children:'Request "show me the code" or "explain your analytical approach" to verify Claude is using appropriate statistical methods for your data type. This builds confidence in results and helps you explain your analysis to reviewers.'}),`
`,(0,n.jsx)(r.h3,{id:"continue-working-in-your-files",children:"Continue working in your files"}),`
`,(0,n.jsx)(r.p,{children:"The files Claude creates are fully editable. Download the heat maps, pathway comparisons, and summary documents to continue working in your preferred tools."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Whether you're exploring differential expression, validating findings against literature, or designing follow-up experiments, Claude can handle the computational heavy lifting while you focus on the creative work of scientific discovery."}),`
`,(0,n.jsx)(c,{surfaces:["chat"],children:(0,n.jsx)(r.p,{children:"My colleagues recently published the attached single-cell dataset that describes gene expression differences between adult and pediatric liver samples with a focus on the immune system. I would like to explore these samples but focus on the parenchymal cells and differences between adult and pediatric liver. Can you help me first go through the differentially expressed genes and create a heatmap and then also identify pathways or sets of genes that are enriched in each sample?"})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};