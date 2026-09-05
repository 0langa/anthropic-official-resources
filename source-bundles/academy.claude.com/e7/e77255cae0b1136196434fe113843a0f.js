import{$f as e,Zf as t}from"../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{Callout:i,ChatPrompt:o}=r;return i||a("Callout",!0),o||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The PubMed integration provides access to millions of biomedical research articles and clinical studies, allowing Claude to access abstracts and full papers to clarify experimental approaches, identify key findings, determine novelty and applicability, and surface specific papers for deeper exploration. This article explains how to set up and use the PubMed integration with Claude to accelerate your research workflows."}),`
`,(0,n.jsxs)(r.p,{children:["The PubMed integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What this integration provides"}),`
`,(0,n.jsx)(r.p,{children:"The PubMed integration connects Claude directly to the PubMed database maintained by the U.S. National Library of Medicine. With over 36 million citations for biomedical literature, PubMed is the premier resource for medical research, scientific studies, and health information."}),`
`,(0,n.jsx)(r.p,{children:"This integration allows you to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Search for research articles using keywords, authors, journals, or advanced query syntax"}),`
`,(0,n.jsx)(r.li,{children:"Get complete article metadata including abstracts, authors, publication dates, citations, and links to the full article"}),`
`,(0,n.jsx)(r.li,{children:"Access full-text articles from PubMed Central (PMC) when available"}),`
`,(0,n.jsx)(r.li,{children:"Find related articles across NCBI databases"}),`
`,(0,n.jsx)(r.li,{children:"Match citations to PubMed IDs for verification and referencing"}),`
`,(0,n.jsx)(r.li,{children:"Convert between ID formats (PMID, PMC ID, DOI)"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-pubmed-integration",children:"Setting up the PubMed integration"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:['Click "',(0,n.jsx)(r.strong,{children:"PubMed"}),'"']}),`
`,(0,n.jsx)(r.li,{children:'Click "Add to your team"'}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Find "PubMed"'}),`
`,(0,n.jsx)(r.li,{children:'Click "Connect"'}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install pubmed@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsxs)(r.li,{children:["Verify that the server is connected with ",(0,n.jsx)(r.code,{children:"/mcp"})]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"using-the-pubmed-mcp-with-the-messages-api",children:"Using the PubMed MCP with the Messages API"}),`
`,(0,n.jsx)(r.p,{children:"Developers can connect to the PubMed integration directly through Claude's Messages API using the MCP connector. This allows you to build applications that leverage PubMed search capabilities programmatically."}),`
`,(0,n.jsx)(r.h3,{id:"requirements",children:"Requirements"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"An Anthropic API key"})}),`
`,(0,n.jsxs)(r.p,{children:["The beta header: ",(0,n.jsx)(r.code,{children:"anthropic-beta: mcp-client-2025-11-20"})]}),`
`,(0,n.jsx)(r.h3,{id:"setup",children:"Setup"}),`
`,(0,n.jsx)(i,{type:"note",children:(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Add the PubMed MCP server to your API request's ",(0,n.jsx)(r.code,{children:"mcp_servers"})," array"]}),`
`,(0,n.jsxs)(r.li,{children:["Reference the server in your ",(0,n.jsx)(r.code,{children:"tools"})," array using an ",(0,n.jsx)(r.code,{children:"mcp_toolset"})," entry"]}),`
`,(0,n.jsx)(r.li,{children:"Include the required beta header"}),`
`]})}),`
`,(0,n.jsx)(r.h3,{id:"example-request",children:"Example Request"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import anthropic

client = anthropic.Anthropic()

response = client.beta.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1000,
    messages=[{"role": "user", "content": "Find recent papers on CRISPR gene editing in cancer treatment"}],
    mcp_servers=[{"type": "url", "url": "https://pubmed.mcp.claude.com/mcp", "name": "pubmed"}],
    tools=[{"type": "mcp_toolset", "mcp_server_name": "pubmed"}],
    betas=["mcp-client-2025-11-20"]
)
`})}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common use cases"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Search for Research Articles"})}),`
`,(0,n.jsx)(r.p,{children:"Ask Claude to find articles on biomedical or scientific topics of interest. Example prompts:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Find recent studies about immunotherapy for melanoma"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Show me research on CRISPR gene editing from the last month"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Find literature related to a proposal or gene that I am working on"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Get Article Details and Metadata"})}),`
`,(0,n.jsx)(r.p,{children:"Retrieve comprehensive information about specific articles. Example prompts:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"What are the most cited papers on this topic?"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Find the most recent papers on this topic and summarize new contributions to the field?"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Who were the authors for that study?"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"When was that paper published?"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Access Full-Text Articles"})}),`
`,(0,n.jsx)(r.p,{children:"For articles available in PubMed Central, retrieve the complete text of the articles to help with your research. Example prompts:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Compare the methods of these two papers"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"What were the shared conclusions across these papers, and where did they differ?"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Read these papers and help me identify the most important conclusions for my hypothesis"})}),`
`,(0,n.jsx)(i,{type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Only articles in PubMed Central (PMC) have full text available. PubMed might only have access to abstracts of other articles."]})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Find Related Articles"})}),`
`,(0,n.jsx)(r.p,{children:"Discover similar research across NCBI databases. Example prompts:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Find similar studies to this one"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Compare the findings of this study to others in the field"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Match Citations to PubMed IDs"})}),`
`,(0,n.jsx)(r.p,{children:"Verify citations and find PubMed IDs from journal references. Example prompts:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Look up this citation: Smith J, Nature 2020, vol 52, page 811"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Find the PubMed entry for this reference from my bibliography"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"I have a citation from a paper, can you find it in PubMed?"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"I would like to have a discussion about the paper associated with this PMID"})}),`
`,(0,n.jsx)(r.h2,{id:"frequently-asked-questions",children:"Frequently asked questions"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Is the PubMed integration free to use?"})}),`
`,(0,n.jsx)(r.p,{children:"Yes! The integration is free for all Claude users. PubMed is a free public resource provided by the U.S. National Library of Medicine."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Can I access full-text articles for any paper?"})}),`
`,(0,n.jsx)(r.p,{children:"PubMed only makes the full text of articles available if they are in PubMed Central (PMC). PubMed contains over 36 million citations with abstracts, but PMC contains approximately 8 million full-text articles. Where the full text of an article is not available, Claude can provide relevant metadata (title, authors, abstract) if available, and can also supply a link to the full article for your review."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"How current is the data?"})}),`
`,(0,n.jsx)(r.p,{children:"PubMed is updated daily with new research. The integration provides real-time access to the latest available data from the NCBI databases."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Does this work with other NCBI databases?"})}),`
`,(0,n.jsx)(r.p,{children:"The integration primarily accesses PubMed and PubMed Central. However, you can discover related data from other NCBI databases (like Gene, Protein, and Nucleotide databases) by asking Claude to find connections. For example:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Find genes associated with this article"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Show me protein sequences referenced in this paper"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Are there any nucleotide sequences linked to this study?"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Are there any rate limits I should know about?"})}),`
`,(0,n.jsx)(r.p,{children:"Yes, the server has rate limits to comply with NCBI guidelines. If you receive a rate limit message, wait briefly and try again."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Where does the data come from?"})}),`
`,(0,n.jsx)(r.p,{children:"All data comes from official NCBI sources, but may not reflect the most current/accurate data available from NLM: PubMed (the National Library of Medicine's MEDLINE database), PubMed Central (free full-text archive of biomedical literature), and the NCBI E-utilities API (official programmatic access to NCBI databases)."}),`
`,(0,n.jsx)(r.h2,{id:"privacy-and-data-usage",children:"Privacy and Data Usage"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The PubMed integration only accesses publicly available research articles"}),`
`,(0,n.jsx)(r.li,{children:"No personal health information or patient data is accessible through the integration"}),`
`,(0,n.jsx)(r.li,{children:"Your search queries are used only to retrieve relevant articles"}),`
`,(0,n.jsx)(r.li,{children:"All data comes from official NCBI sources"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"additional-resources",children:"Additional Resources"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["PubMed Advanced Search Builder: ",(0,n.jsx)(r.a,{href:"https://pubmed.ncbi.nlm.nih.gov/advanced/",children:"https://pubmed.ncbi.nlm.nih.gov/advanced/"})]}),`
`,(0,n.jsxs)(r.li,{children:["MeSH Database: ",(0,n.jsx)(r.a,{href:"https://www.ncbi.nlm.nih.gov/mesh",children:"https://www.ncbi.nlm.nih.gov/mesh"})]}),`
`,(0,n.jsxs)(r.li,{children:["NCBI E-utilities Documentation: ",(0,n.jsx)(r.a,{href:"https://www.ncbi.nlm.nih.gov/books/NBK25501/",children:"https://www.ncbi.nlm.nih.gov/books/NBK25501/"})]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"need-more-help",children:"Need More Help?"}),`
`,(0,n.jsxs)(r.p,{children:["If you're experiencing issues with the PubMed integration or have questions not covered here, please ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9015913-how-to-get-support",children:"contact Claude support"})," or visit our help center for additional troubleshooting guides."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};