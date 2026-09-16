import{Gp as e,qp as t}from"../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Egnyte connector provides Claude with secure access to your organization’s content stored in Egnyte, enabling advanced document search, AI-powered analysis, and intelligent content management. Through the Egnyte Remote MCP Server, Claude can search for files, retrieve document content, ask questions about specific documents, generate summaries, and interact with Egnyte AI capabilities like Copilot and Knowledge Bases."}),`
`,(0,n.jsx)(r.h2,{id:"what-this-connector-provides",children:"What This Connector Provides"}),`
`,(0,n.jsx)(r.h3,{id:"integration-capabilities",children:"Integration Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"Through the Egnyte integration, Claude can access content and leverage AI capabilities in your Egnyte workspace:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Search and Discovery:"})," Claude can search for documents and files using both basic and advanced search capabilities. Advanced search includes extensive filtering options such as metadata, date ranges, file types, and similarity search to help locate specific content across your organization’s file repository."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Document Analysis:"})," Using Egnyte AI, Claude can ask questions about specific documents, generate AI-powered summaries, and extract key information from files. This allows for quick comprehension of lengthy documents without reading the entire content."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Intelligent Content Access:"})," Claude can fetch and summarize the full content of specific documents, making it easy to work with multiple files simultaneously or extract relevant information for analysis."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Copilot Integration:"})," Through Egnyte Copilot, Claude can ask questions with optional context from specific files or folders, enabling comprehensive analysis across related documents."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Knowledge Base Queries:"})," Claude can query specific Knowledge Bases that your organization has created in Egnyte, providing access to curated information repositories and enabling targeted searches within specialized content collections."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Governed Access:"})," All data access through the connector respects your organization’s Egnyte permissions. Claude can only access files and folders that your user account has permission to view, ensuring data security and compliance with organizational policies."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-uses-egnyte-content",children:"How Claude Uses Egnyte Content"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Egnyte capabilities in several ways to support comprehensive content management and analysis:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Multi-Document Research:"})," Claude combines search results, document content, and AI-powered analysis to provide comprehensive insights. For example, when researching a topic, Claude might search across multiple folders, retrieve relevant documents, and use Egnyte AI to extract key information from each file."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Contextual Understanding:"})," By using tools like ask_document and summarize_document, Claude can understand the context and content of files before providing answers or recommendations. This ensures responses are grounded in your organization’s actual documents rather than general knowledge."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Efficient Information Retrieval:"})," Claude uses advanced search filters to narrow down results based on metadata, date ranges, file types, and custom fields. This targeted approach helps locate specific information quickly, even in large content repositories."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cross-Document Analysis:"})," Claude can analyze multiple related documents by asking questions across different files, comparing information, and synthesizing insights from various sources within your Egnyte workspace."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Knowledge Base Utilization:"})," When your organization has created Knowledge Bases in Egnyte, Claude can query these curated collections for specific information, making it efficient to access specialized or frequently referenced content."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-egnyte-connector",children:"Setting up the Egnyte Connector"}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Egnyte connector can be found in ",(0,n.jsx)(r.a,{href:"https://developers.egnyte.com/api-docs/remote-mcp-server",children:"Egnyte’s MCP Server Documentation"}),". Authentication is handled via OAuth 2.0, providing secure access to your Egnyte content."]}),`
`,(0,n.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,(0,n.jsx)(r.p,{children:"Before setting up the Egnyte connector, ensure you have:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"An active Egnyte account on Essential, Elite, or Ultimate plans (Gen 4), OR Platform Enterprise or Platform Enterprise Light with the Co-Pilot add-on (Gen 3)"}),`
`,(0,n.jsxs)(r.li,{children:["An MCP-compatible AI client (",(0,n.jsx)(r.a,{href:"http://claude.ai/",children:"Claude.ai"}),", Claude Desktop, ChatGPT, etc.)"]}),`
`,(0,n.jsx)(r.li,{children:"Your Egnyte domain name and credentials for authentication"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"adding-the-connector-as-an-organization-owner",children:"Adding the Connector as an Organization Owner"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"})]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add custom connector”"}),`
`,(0,n.jsxs)(r.li,{children:["Enter the integration URL: ",(0,n.jsx)(r.a,{href:"https://mcp-server.egnyte.com/mcp",children:"https://mcp-server.egnyte.com/mcp"})]}),`
`,(0,n.jsx)(r.li,{children:"Name the integration (e.g., “Egnyte”)"}),`
`,(0,n.jsx)(r.li,{children:"Click “Add”"}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect” and you will be redirected to the authentication page"}),`
`,(0,n.jsx)(r.li,{children:"Enter your Egnyte domain and authenticate with your Egnyte credentials"}),`
`,(0,n.jsx)(r.li,{children:"Grant the necessary permissions for the integration"}),`
`,(0,n.jsx)(r.li,{children:"All Egnyte tools should now appear in Claude"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"contract-review-and-analysis",children:"Contract Review and Analysis"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use Case:"})," Legal teams need to review multiple contracts for specific clauses and terms."]}),`
`,(0,n.jsx)(r.p,{children:"For this analysis, Claude might use the following workflow:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Advanced Search:"})," Use the advanced_search tool to locate all contracts in a specific folder, filtering by file type (e.g., PDF) and date range to find relevant documents."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Document Interrogation:"})," Apply the ask_document tool to query specific clauses or terms within each contract, such as “What are the termination conditions?” or “What is the liability cap?”"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Content Summarization:"})," Generate summaries of key terms using summarize_document to create concise overviews of each contract’s main provisions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cross-Document Comparison:"})," Compare multiple contracts by asking questions across documents to identify common terms, variations in clauses, or outlier provisions."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude would then provide a comprehensive analysis showing key findings, comparisons across contracts, and any notable clauses requiring attention."}),`
`,(0,n.jsx)(r.h3,{id:"due-diligence-research",children:"Due Diligence Research"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use Case:"})," Investment teams need to analyze company documents during due diligence processes."]}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search our due diligence folder for documents related to TechCorp’s financials and operations. Summarize the key financial metrics and operational risks."})}),`
`,(0,n.jsx)(r.p,{children:"For this task, Claude might:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Search: Use advanced_search with metadata filters to find all TechCorp-related documents in the due diligence folder"}),`
`,(0,n.jsx)(r.li,{children:"Content Review: Fetch key documents and use ask_document to extract specific information about financials, revenue, expenses, and operational metrics"}),`
`,(0,n.jsx)(r.li,{children:"Risk Analysis: Query documents about operational challenges, market risks, or compliance issues"}),`
`,(0,n.jsx)(r.li,{children:"Knowledge Base Query: If available, search relevant Knowledge Bases for industry benchmarks or comparative analysis"}),`
`,(0,n.jsx)(r.li,{children:"Synthesis: Compile findings into a structured summary with key metrics, identified risks, and relevant citations"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude would deliver a comprehensive due diligence summary with financial highlights, operational insights, and risk factors drawn directly from the reviewed documents."}),`
`,(0,n.jsx)(r.h3,{id:"policy-and-compliance-documentation",children:"Policy and Compliance Documentation"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use Case:"})," HR or compliance teams need to quickly reference organizational policies and ensure compliance."]}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What is our company’s remote work policy? Are there any recent updates to travel expense guidelines?"})}),`
`,(0,n.jsx)(r.p,{children:"For this request, Claude might:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Knowledge Base Search: Query the HR Knowledge Base (if configured) for policy documents"}),`
`,(0,n.jsx)(r.li,{children:"Document Search: Use search tools to locate policy handbooks and recent policy updates"}),`
`,(0,n.jsx)(r.li,{children:"Specific Questions: Apply ask_document to extract relevant policy sections"}),`
`,(0,n.jsx)(r.li,{children:"Recent Changes: Filter by date to identify recent policy modifications"}),`
`,(0,n.jsx)(r.li,{children:"Copilot Query: Use ask_copilot with context from specific policy folders for comprehensive answers"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude would respond with clear policy information, citing specific documents and highlighting any recent changes to ensure teams have current, accurate guidance."}),`
`,(0,n.jsx)(r.h3,{id:"customer-document-repository-search",children:"Customer Document Repository Search"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use Case:"})," Customer success teams need to find specific deliverables, contracts, or correspondence across client folders."]}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all project deliverables for Acme Corp from Q4 2024, and summarize the project outcomes."})}),`
`,(0,n.jsx)(r.p,{children:"For this analysis, Claude might:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Targeted Search: Use advanced_search with folder path (Acme Corp), date filters (Q4 2024), and file type filters to locate deliverables"}),`
`,(0,n.jsx)(r.li,{children:"Content Retrieval: Fetch identified documents to access full content"}),`
`,(0,n.jsx)(r.li,{children:"AI Summarization: Apply summarize_document to each deliverable to extract project outcomes and key results"}),`
`,(0,n.jsx)(r.li,{children:"Consolidated Report: Compile summaries into a unified overview of all Q4 2024 deliverables"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude would provide a comprehensive summary of all project deliverables with key outcomes, making it easy for customer success teams to review project history and results."}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-egnyte",children:"Tips for Using Egnyte"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Be specific about file locations and criteria when searching. Including folder paths, date ranges, and file types helps Claude locate the exact documents you need.",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Example: Instead of “Find the contract”, try “Search for PDF contracts in the Legal/Vendor folder from 2024”"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:["Use natural language when asking questions about documents. The ask_document and Copilot tools understand conversational queries.",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Example: “What are the payment terms?” or “Summarize the main risks outlined in this document”"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:["Leverage Knowledge Bases for frequently accessed information. If your organization has created Knowledge Bases, reference them for faster access to curated content.",`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Example: “Query the HR Knowledge Base for our vacation policy”"}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.li,{children:"Remember that all access respects your Egnyte permissions. Claude can only access files and folders you have permission to view, ensuring security and proper access control."}),`
`,(0,n.jsx)(r.li,{children:"For complex analyses involving multiple documents, consider providing folder paths or specific file IDs to help Claude locate the right content efficiently."}),`
`,(0,n.jsx)(r.li,{children:"When working with large document sets, use filters and metadata to narrow results before asking Claude to analyze or summarize content."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};