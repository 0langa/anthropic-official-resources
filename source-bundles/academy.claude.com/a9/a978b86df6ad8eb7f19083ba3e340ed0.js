import{Hf as e,Wf as t}from"../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{PromptExampleList:i}=r;return i||a("PromptExampleList",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The ICD-10 connector gives Claude access to ICD-10-CM diagnosis codes and ICD-10-PCS procedure codes (2026 edition), enabling healthcare organizations to search, validate, and explore medical coding hierarchies required for HIPAA-compliant billing and clinical documentation. This article explains how to set up and use the ICD-10 integration with Claude to streamline medical coding and billing compliance workflows."}),`
`,(0,n.jsxs)(r.p,{children:["The ICD-10 integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"This integration provides access to the 2026 International Classification of Diseases, 10th Revision code sets used in the United States healthcare system. ICD-10 is based on the World Health Organization (WHO) classification system, with ICD-10-CM (Clinical Modification) authorized by WHO and developed by the CDC's National Center for Health Statistics (NCHS) for diagnosis coding, and ICD-10-PCS (Procedure Coding System) developed by CMS for inpatient procedure coding. Both code sets are HIPAA-mandated standards that became effective October 1, 2015, and are updated annually. The FY 2026 release includes over 550 diagnosis code changes (487 additions, 28 deletions, 38 revisions) and became effective October 1, 2025, for patient encounters and discharges through September 30, 2026."}),`
`,(0,n.jsx)(r.p,{children:"This connector provides nine primary tool calls that access ICD-10-CM and ICD-10-PCS codes."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_diagnosis_by_description"}),' enables users to find diagnosis codes by disease name or medical terminology (e.g., "diabetes", "myocardial infarction", "breast cancer"), using case-insensitive text matching across code descriptions with automatic filtering for HIPAA-valid codes (excludes category headers that cannot be billed).']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_diagnosis_by_code"}),' finds diagnosis codes by exact code match or prefix search (e.g., "E11" returns all Type 2 diabetes codes), useful for exploring code families and related conditions.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_procedure_by_description"}),' searches ICD-10-PCS procedure codes by anatomical terms and root operations (e.g., "appendix", "resection", "percutaneous endoscopic" for laparoscopic procedures), noting that PCS uses standardized terminology rather than common procedure names.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"search_procedure_by_code"}),' finds procedure codes by exact match or prefix (e.g., "0DT" returns gastrointestinal resection procedures), enabling systematic exploration of procedure code families.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"lookup_code"}),' retrieves complete details for a specific code when the exact code is known (e.g., "E11.65", "0DTJ4ZZ"), returning short and long descriptions plus HIPAA transaction validity status.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"validate_code"})," checks whether a code exists in the database and confirms its validity for HIPAA-covered transactions, distinguishing between billable codes and category headers."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_hierarchy"}),' retrieves the full code family tree under a category prefix (e.g., "E11" returns all 117 Type 2 diabetes codes), showing parent-child relationships and complication progressions.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_by_category"}),' navigates diagnosis codes by chapter (single letter like "E" for Endocrine diseases) or 3-character category (e.g., "E11" for Type 2 Diabetes).']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"get_by_body_system"}),' retrieves ICD-10-PCS procedure codes for specific anatomical systems using the first character body system code (e.g., "0" for Central Nervous System, "D" for Gastrointestinal).']}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'On the provider side, the connector accesses a locally stored database of the 2026 ICD-10-CM and ICD-10-PCS code sets published by CMS and CDC/NCHS. The database includes code structure (chapter, category, subcategory), short and long descriptions, and HIPAA transaction validity flags. ICD-10-CM codes are 3-7 alphanumeric characters documenting diagnoses; ICD-10-PCS codes are exactly 7 alphanumeric characters documenting inpatient procedures. Category header codes (shorter codes like "E11" or "E11.3") serve as organizational groupings and are NOT valid for billing—only fully specified codes with maximum detail are HIPAA-compliant.'}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-icd-10-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the ICD-10 integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Medical Coders & Health Information Management Professionals:"})," Search and validate diagnosis and procedure codes for accurate medical record documentation, ensure code specificity meets billing requirements, verify HIPAA transaction validity, and explore code hierarchies to select the most appropriate codes."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Revenue Cycle Management Teams & Billing Specialists:"})," Validate code accuracy before claim submission to reduce denials, verify codes are valid for the current fiscal year (FY 2026), identify codes requiring additional documentation specificity, and ensure compliance with payer coding requirements."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Clinical Documentation Improvement (CDI) Specialists:"})," Query physicians for more specific documentation when codes lack required detail, identify incomplete or non-specific codes that may result in claim denials, ensure documentation supports the most accurate and specific ICD-10 codes, and track code hierarchy relationships for comorbidity and complication coding."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare IT & EHR Integration Teams:"})," Build and maintain code validation logic in electronic health record systems, implement automated code suggestion features based on clinical documentation, create coding reference tools integrated into clinical workflows, and ensure coding databases are updated with annual ICD-10 revisions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Medical Auditors & Compliance Officers:"})," Audit coded medical records for accuracy and specificity, identify patterns of coding errors or undercoding, verify compliance with CMS coding guidelines and HIPAA standards, and conduct retrospective reviews of diagnosis and procedure coding quality."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Healthcare Data Analysts & Population Health Teams:"})," Analyze disease prevalence and treatment patterns using standardized ICD-10 codes, track diagnosis trends across patient populations, conduct outcomes research using procedure codes, and support quality reporting and value-based care initiatives with accurate coded data."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-icd-10-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the ICD-10 integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"ICD-10"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"ICD-10"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/healthcare"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install icd10-codes@healthcare"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Medical Coding & Documentation Accuracy"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Coders and CDI specialists ensuring accurate, specific code selection for billing and documentation"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{surface:"chat",prompts:["Find all ICD-10 codes for Type 2 diabetes with complications. Show me the complete hierarchy","Validate code E11.65 for HIPAA billing. Is this code specific enough or is it a category header?","Search for diagnosis codes related to hypertension with chronic kidney disease","What ICD-10-PCS codes exist for laparoscopic appendectomy? Search procedures for 'appendix' and 'percutaneous endoscopic'"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Billing Compliance & Claims Processing"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: Revenue cycle teams validating codes before claim submission to prevent denials"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{surface:"chat",prompts:["Is E11.9 valid for HIPAA transactions? What's the full description?","Search for all myocardial infarction diagnosis codes that are valid for billing","Find procedure codes for coronary artery bypass graft by searching code prefix '021'","Validate this procedure code 0DTJ4ZZ - is it valid for inpatient hospital billing?"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Clinical Documentation Improvement & Audit"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Scenario: CDI specialists and auditors reviewing documentation specificity and code appropriateness"}),`
`,(0,n.jsx)(r.li,{children:"Sample Prompts:"}),`
`]}),`
`,(0,n.jsx)(i,{surface:"chat",prompts:["Show me the hierarchy of breast cancer diagnosis codes to identify if we're using the most specific code","Search for diabetes codes with retinopathy complications - which codes distinguish between severity levels?","What ICD-10 codes exist in the category E08 for diabetes due to underlying condition?","Find all gastrointestinal resection procedures by body system. Are we coding to the appropriate specificity level?"]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};