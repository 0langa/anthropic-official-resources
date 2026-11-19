# Using the ClinicalTrials.gov Connector in Claude

Set up and use the ClinicalTrials.gov integration with Claude to search the NIH/NLM registry of 600,000+ clinical studies, analyze endpoints, and support research operations.

15 minClaude

[Open Claude](https://claude.ai/new)

![](https://academy.claude.com/assets/v1/thumbnail.light-masuk8o7.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-gfv3v8tj.png)

The ClinicalTrials.gov connector gives Claude access to the NIH/NLM registry of 600,000+ clinical studies to search trials, analyze endpoints, and support research operations. This article explains how to set up and use the ClinicalTrials.gov integration with Claude to power clinical, regulatory, and patient-supporting workflows.

The ClinicalTrials.gov integration relies upon Claude's ability to [use remote connectors(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).

## **What this integration provides**[](https://academy.claude.com/tutorials/using-the-clinicaltrials-gov-connector-in-claude)

The ClinicalTrials.gov connector gives Claude access to ClinicalTrials.gov API v2, the world's largest clinical trial registry managed by the National Library of Medicine (NLM) at the National Institutes of Health (NIH). The database has grown to over 600,000 registered studies with locations in more than 200 countries and territories, representing the most comprehensive source of clinical research information worldwide.

This connector provides six primary tool calls that access different dimensions of clinical trial data.

- **search\_trials** is the primary discovery tool, enabling users to find trials by condition (e.g., "diabetes", "lung cancer"), intervention (drug/treatment names), location (city, state, country), sponsor, recruitment status (RECRUITING, COMPLETED, etc.), and development phase (PHASE1-PHASE4), with support for Boolean operators and medical synonym expansion.
- **get\_trial\_details** retrieves comprehensive protocol information for specific trials using their NCT identifier, returning full eligibility criteria (inclusion/exclusion), detailed study design and methodology, primary and secondary endpoints with measurement timeframes, all study locations with contact information, sponsor details, enrollment targets, and links to published results.
- **search\_by\_sponsor** enables pharmaceutical pipeline analysis by finding all trials funded by specific companies or institutions (e.g., "Pfizer", "NIH", "Mayo Clinic"), supporting competitive intelligence and drug development tracking with filtering by condition and phase.
- **search\_investigators** identifies principal investigators and research sites conducting trials in specific therapeutic areas, returning investigator names, roles, institutional affiliations, facility locations, and associated trial information for site selection and investigator verification.
- **analyze\_endpoints** systematically compares outcome measures across trials, operating in two modes: single-trial analysis (returns all endpoints for one NCT ID) or aggregate analysis (identifies common endpoint patterns across multiple trials in a therapeutic area), essential for protocol design benchmarking and understanding standard measures in a disease area.
- **search\_by\_eligibility** enables clinical research coordinators to screen for trials matching specific demographic and clinical criteria (age, sex) with support for eligibility keyword searches in inclusion/exclusion criteria text (e.g., "BRCA mutation", "HbA1c > 8%", "ECOG 0-1").

On the provider side, the connector queries ClinicalTrials.gov's RESTful API v2. ClinicalTrials.gov refreshes its data daily, Monday through Friday, with trial registration data submitted by study sponsors. The database includes structured data fields for conditions (using MeSH terminology), interventions, locations, eligibility criteria, outcome measures, and study design parameters.

## **Who should use the ClinicalTrials.gov integration**[](https://academy.claude.com/tutorials/using-the-clinicaltrials-gov-connector-in-claude)

- **Clinical Research Coordinators & Study Recruiters:** Screen institutional patient populations for trial eligibility using demographic and clinical criteria, identify nearby recruiting studies for referral programs, verify detailed trial requirements and visit schedules, and coordinate with study sponsors to accelerate enrollment.
- **Pharmaceutical & Biotech Companies:** Conduct competitive intelligence on competitor pipelines, analyze clinical development strategies across therapeutic areas, identify partnership opportunities with active research sites, and benchmark study designs and endpoints against industry standards.
- **Principal Investigators & Site Coordinators:** Identify collaborating investigators at other institutions, understand which sites are most active in specific disease areas, verify investigator qualifications and track record, and discover trials for potential site participation.
- **Protocol Writers & Clinical Operations Teams:** Benchmark endpoint selection by analyzing outcome measures used in similar trials, design eligibility criteria based on prior study standards, identify common recruitment challenges in a therapeutic area, and estimate feasible enrollment timelines.
- **Regulatory Affairs Professionals:** Track clinical development programs for regulatory submissions, verify trial registration compliance for FDA-regulated products, analyze phase progression rates and development timelines, and identify precedent trials for regulatory strategy.
- **Clinical Trial Recruiters & Research Navigators:** Screen institutional patient populations for trial eligibility, identify appropriate trials for referral programs, coordinate with study sponsors for patient enrollment, and maintain databases of active trials at their healthcare system.
- **Medical Affairs & Health Economists:** Analyze trial completion rates and time-to-results, identify gaps in clinical evidence for specific indications, track real-world evidence studies and post-marketing trials, and support payer value dossiers with clinical trial data.

## **Setting up the ClinicalTrials.gov integration**[](https://academy.claude.com/tutorials/using-the-clinicaltrials-gov-connector-in-claude)

The connectors directory lists this connector as **Clinical Trials**.

**For Organization Owners (Team and Enterprise)**

1. Navigate to [Organization settings > Connectors(opens in new tab)](https://claude.ai/admin-settings/connectors)
2. Use the Add button to browse all available connectors, then find **Clinical Trials** and add it for your team

**For Individual Claude Users**

1. Open [Clinical Trials in the connectors directory(opens in new tab)](https://claude.ai/directory/clinical-trials)
2. Connect it to Claude

Learn about [finding and connecting tools(opens in new tab)](https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory) in Claude.

**For Claude Code Users**

1. Connect **Clinical Trials** in Claude by following the steps above
2. Sign in to Claude Code with the same Claude account (run `/login` to switch accounts), then restart Claude Code
3. Run `/mcp` and check that the connector appears in the claude.ai section of the list (if it isn't shown, select **Show unused connectors** at the end of that section)

Learn about [using connectors from Claude in Claude Code(opens in new tab)](https://code.claude.com/docs/en/mcp).

## **Example use cases**[](https://academy.claude.com/tutorials/using-the-clinicaltrials-gov-connector-in-claude)

**Clinical Trial Recruitment & Eligibility Screening**

- Scenario: Research coordinators and recruitment professionals identifying eligible trial candidates from their institutional patient populations
- Sample Prompts:

Find recruiting Phase 3 diabetes trials with HbA1c eligibility criteria between 7-10% for our Boston research site



Open in Claude

What breast cancer trials are accepting BRCA-positive candidates at academic medical centers in California?



Open in Claude

Search for Alzheimer's trials with MMSE score requirements that match our memory clinic population



Open in Claude

Identify pediatric leukemia trials recruiting at major children's hospitals for our referral network



Open in Claude

**Competitive Intelligence & Pipeline Analysis**

- Scenario: Analyzing pharmaceutical company development programs and therapeutic landscapes
- Sample Prompts:

What Phase 3 oncology trials is Pfizer currently running? Show their cancer pipeline



Open in Claude

Find all GLP-1 agonist trials for obesity. Who are the main sponsors and what endpoints are they measuring?



Open in Claude

Show me Moderna's active clinical trials and their development phases



Open in Claude

What companies are developing drugs for Parkinson's disease? Analyze their trial endpoints



Open in Claude

**Systematic Protocol Design & Endpoint Benchmarking**

- Scenario: Designing new trial protocols based on industry standards and precedent studies
- Sample Prompts:

What are the most common primary endpoints used in Phase 3 diabetes trials?



Open in Claude

Analyze endpoints for completed heart failure trials - what timeframes do they use?



Open in Claude

Find principal investigators at academic medical centers conducting immunotherapy trials



Open in Claude

What eligibility criteria do Phase 2 NASH trials typically use? Show me HbA1c cutoffs



Open in Claude

Learn more at How to use the Clinical Trial Protocol skill with Claude

Was this helpful?
