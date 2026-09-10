import{em as e,nm as t}from"../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Owkin connector powers Pathology Explorer, an Owkin AI agent that transforms H&E pathology slides into queryable insights for drug discovery and development and clinical research. This article explains how to set up and use the Owkin integration with Claude to accelerate pathology-driven research."}),`
`,(0,n.jsxs)(r.p,{children:["The Owkin integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"Owkin builds AI agents for biology to accelerate drug discovery, de-risk and accelerate clinical trials. The Owkin connector gives Claude access to Pathology Explorer, an Owkin agent that transforms H&E slides from the TCGA database into granular, queryable insights. Researchers can use it to automatically detect cell types from pathology images, spatially analyze tumor micro-environments, and validate hypotheses through cohort-level survival analysis, accelerating and de-risking drug discovery and development."}),`
`,(0,n.jsx)(r.p,{children:"The Pathology Explorer offers a range of capabilities, allowing Claude to analyze histopathological slides. Below is an extended description of the slide-level features provided by the model."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Count and density features"})}),`
`,(0,n.jsx)(r.p,{children:"For each cell type (lymphocytes, neutrophils, plasmocytes, fibroblasts, eosinophils, cancer cell), the model provides:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"count_{cell_type}: The total number of cells of the specified type detected in the slide."}),`
`,(0,n.jsx)(r.li,{children:"global_density_{cell_type}: The density of the specified cell type per unit area of the tissue."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Morphological features of the nucleus"})}),`
`,(0,n.jsx)(r.p,{children:"For each cell type, the model provides:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"mean_area_{cell_type}: The average area of the nuclei of the specified cell type in the slides."}),`
`,(0,n.jsx)(r.li,{children:"mean_circularity_{cell_type}: The average circularity of the nuclei of the specified cell type in the slides."}),`
`,(0,n.jsx)(r.li,{children:"mean_perimeter_{cell_type}: The average perimeter of the nuclei of the specified cell type in the slides."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Spatial organization features"})}),`
`,(0,n.jsx)(r.p,{children:"For three types of regions (tumor, tumor core and tumor core stroma), the model provides for each cell type:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"density_{cell_type}_in_{region}: The density of the specified cell type within the specified region."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For each region, the model also provides:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"area_{region}: The area of the specified region in the slide."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"In addition, for a selection of biologically relevant cell-cell interactions, the model provides:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"average_co_occurrence_{cell_type}_{cell_type2}_rad_20.0um: The average co-occurrence of the two specified cell types nuclei within a radius of 20 micrometers."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The model also computes the tils_diffusivity, a metric for quantifying the tumor-infiltrating lymphocytes diffusivity for the slide."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Available cohorts from the dataset"})}),`
`,(0,n.jsx)(r.p,{children:"The features are available on the following TCGA cohorts:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"TCGA_ACC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_BLCA"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_BRCA"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_CESC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_CHOL"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_COAD"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_DLBC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_ESCA"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_HNSC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_KICH"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_KIRC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_KIRP"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_LIHC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_LUAD"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_LUSC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_MESO"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_OV"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_PAAD"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_PRAD"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_READ"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_SARC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_STAD"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_THCA"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_THYM"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_UCEC"}),`
`,(0,n.jsx)(r.li,{children:"TCGA_UCS"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-owkin-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the Owkin integration"})}),`
`,(0,n.jsx)(r.p,{children:"Pharma researchers and healthcare providers (Research Use Only), for example:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Translational and immuno-oncology researchers"}),`
`,(0,n.jsx)(r.li,{children:"Novel drug discovery teams"}),`
`,(0,n.jsx)(r.li,{children:"Drug development and biomarker discovery teams"}),`
`,(0,n.jsx)(r.li,{children:"Digital pathology research groups"}),`
`,(0,n.jsx)(r.li,{children:"Companion diagnostic development groups"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-can-access-the-owkin-integration",children:(0,n.jsx)(r.strong,{children:"Who can access the Owkin integration"})}),`
`,(0,n.jsx)(r.p,{children:"Prerequisites to access the connector are:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["An account with access to the K Pro platform (",(0,n.jsx)(r.a,{href:"https://www.owkin.com/k-os/k-pro",children:"product page"}),", ",(0,n.jsx)(r.a,{href:"https://k.owkin.com/auth/signin?utm_source=k-nav-page&utm_medium=owkin-website&utm_campaign=k-nav-acquisition&next=%2Fchat",children:"signup page"}),")"]}),`
`,(0,n.jsx)(r.li,{children:"Access to Claude.ai or Claude Desktop"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["More details on accessing the integration can be found in ",(0,n.jsx)(r.a,{href:"https://docs.owkin.com/connect-and-integrate/pathology-explorer-mcp-ai-powered-tissue-analysis",children:"Owkin’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-owkin-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the Owkin integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"Owkin"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"Owkin"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`,(0,n.jsx)(r.li,{children:"Follow the instructions to enter your Owkin credentials to authenticate"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install owkin@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Owkin integration can be found in ",(0,n.jsx)(r.a,{href:"https://docs.owkin.com/connect-and-integrate/pathology-explorer-mcp-ai-powered-tissue-analysis",children:"Owkin’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Refine patient stratification."})," Identify patient subgroups that generalist models miss through granular profiling of 6 distinct cell types (including understudied populations like neutrophils and eosinophils). Leverage spatial organization analysis to characterize TME structures and phenotypes beyond simple counts."]}),`
`,(0,n.jsx)(r.p,{children:"Example prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"I'm looking for Lung Adenocarcinoma patients that might be resistant to immunotherapy. Are there cases with low immune infiltration in the TCGA cohort?"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Visualize whole-slide images."})," Build confidence in the model output by retrieving whole-slide images directly within the chat interface."]}),`
`,(0,n.jsx)(r.p,{children:"Example prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find the slide the most enriched in eosinophils from cohort TCGA_BRCA and plot it."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Assess prognostic value of H&E based markers."})," Test clinical hypotheses by performing survival analysis on your cohorts, by splitting patients based on features such as specific cell densities or spatial scores."]}),`
`,(0,n.jsx)(r.p,{children:"Example prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Is the density of plasmocytes associated with overall survival in bladder carcinoma?"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Extract quantitative evidence for reproducibility."})," Build trust in AI-generated insights by retrieving the underlying raw data for independent verification or downstream analysis."]}),`
`,(0,n.jsx)(r.p,{children:"Example prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Export the breakdown of all cell types for patient TCGA-A2-A0YI-01Z-00-DX1.1CF2EC2D-C722-467F-8832-409B823E8D8F.svs in parquet format, so I can reproduce this analysis."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Understand Owkin’s Pathology Explorer capabilities and context."})," Gain transparency into the model by querying its technical specifications directly. Learn about the supported cell types, the pan-cancer training dataset and more, to ensure the model is appropriate for your research question."]}),`
`,(0,n.jsx)(r.p,{children:"Example prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Can you provide an overview of Owkin’s Pathology Explorer model and its capabilities?"})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};