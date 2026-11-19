# Using the CMS Coverage Connector in Claude

Set up and use the CMS Coverage integration with Claude to search Medicare Part B coverage policies, NCDs, LCDs, and billing articles instantly.

15 minClaude

[Open Claude](https://claude.ai/new)

![](https://academy.claude.com/assets/v1/thumbnail.light-ffzmjyg1.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-jhucdf8t.png)

The CMS Coverage connector gives Claude access to the CMS Medicare Coverage Database, enabling searches of National Coverage Determinations (NCDs), Local Coverage Determinations (LCDs), billing articles, and coverage policy updates for Medicare Part B services. This article explains how to set up and use the CMS Coverage integration with Claude to search Medicare Part B coverage policies instantly.

The CMS Coverage integration relies upon Claude's ability to [use remote connectors(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).

This server may return data governed by third-party license agreements, including those available [here(opens in new tab)](https://api.coverage.cms.gov/v1/metadata/license-agreement/). By connecting to this server, you understand and agree to abide by any applicable agreements.

## **What this integration provides**[](https://academy.claude.com/tutorials/using-the-cms-coverage-connector-in-claude)

This integration connects to the CMS Coverage API v1, providing access to the Medicare Coverage Database maintained by the Centers for Medicare & Medicaid Services. This connector enables users to search and monitor Medicare Part B coverage policies that determine whether and under what circumstances Medicare will pay for medical services, procedures, durable medical equipment (DME), laboratory tests, and injectable drugs administered in medical settings across the United States. It's important to note that this connector does not include Medicare Part D prescription drug formularies or Medicare Advantage plan policies.

The connector provides tools for different coverage research needs:

- **National coverage:** Search official nationwide coverage policies (NCDs), coverage analyses (NCAs), coding analyses for labs (CALs), advisory committee meetings, and technology assessments.
- **Local coverage:** Search regional coverage policies (LCDs) from Medicare Administrative Contractors (MACs), proposed LCDs, and billing and coding articles. Each result gives the title, contractor, dates, and a link to the full document on the CMS website.

Claude can also fetch the text of an NCD, including its indications, limitations, and effective dates, and check the status of a coverage or coding analysis. Other tools list MACs, report recent national and local policy changes, and check self-administered drug exclusions.

On the provider side, the connector retrieves structured data directly from CMS's official repository through the CMS Medicare Coverage Database API. Data returned from these APIs may be governed by third-party license agreements, including those available [here(opens in new tab)](https://api.coverage.cms.gov/v1/metadata/license-agreement/).

## **Who should use the CMS Coverage integration**[](https://academy.claude.com/tutorials/using-the-cms-coverage-connector-in-claude)

- **Healthcare Providers & Physicians:** Verify coverage for procedures, understand medical necessity requirements, and ensure compliance with Medicare billing policies before providing services
- **Medical Coders & Billers:** Find detailed billing articles with CPT/HCPCS codes, ICD-10 diagnosis codes, modifiers, and documentation requirements for accurate claims submission
- **Healthcare Compliance Officers:** Monitor policy changes, track coverage updates, and ensure organizational adherence to Medicare coverage guidelines
- **Prior Authorization Specialists:** Research coverage criteria, medical necessity requirements, and documentation standards for authorization requests
- **Durable Medical Equipment (DME) Suppliers:** Look up LCD coverage policies for equipment like wheelchairs, oxygen systems, and CPAP devices by geographic region
- **Healthcare Policy Researchers:** Analyze coverage trends, find regional LCDs to compare, and track national coverage decision-making processes
- **Medical Affairs & Market Access Teams:** Research coverage landscapes for medical devices, procedures, and treatments to inform commercialization strategies
- **Clinical Trial Investigators:** Verify Medicare coverage status for procedures and services used in clinical research protocols

## **Setting up the CMS Coverage integration**[](https://academy.claude.com/tutorials/using-the-cms-coverage-connector-in-claude)

**For Organization Owners (Team and Enterprise)**

1. Navigate to [Organization settings > Connectors(opens in new tab)](https://claude.ai/admin-settings/connectors)
2. Use the Add button to browse all available connectors, then find **CMS Coverage** and add it for your team

**For Individual Claude Users**

1. Open [CMS Coverage in the connectors directory(opens in new tab)](https://claude.ai/directory/cms-coverage)
2. Connect it to Claude

Learn about [finding and connecting tools(opens in new tab)](https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory) in Claude.

**For Claude Code Users**

1. Command: `/plugin marketplace add anthropics/healthcare`
2. Command: `/plugin install healthcare@healthcare`
3. Restart Claude Code
4. Verify that the CMS Coverage server is connected with /mcp

## **Example use cases**[](https://academy.claude.com/tutorials/using-the-cms-coverage-connector-in-claude)

**Pre-Service Coverage Verification**

- Healthcare providers need to verify Medicare coverage before performing procedures or prescribing equipment to avoid claim denials and ensure patients understand their coverage.
- Sample Prompts:

Does Medicare cover continuous glucose monitoring for type 2 diabetes patients?



Open in Claude

Find the LCD with the medical necessity criteria for home oxygen therapy in California



Open in Claude

Find the LCD with the documentation requirements for power wheelchairs in my region



Open in Claude

Is sacral nerve stimulation covered by Medicare for urinary incontinence?



Open in Claude

**Billing & Coding Compliance**

- Medical coders and billers need specific HCPCS codes, ICD-10 diagnosis codes, and billing requirements to submit clean claims and avoid denials.
- Sample Prompts:

Find the billing article that lists the covered ICD-10 codes for diabetes self-management training



Open in Claude

Find the LCD and billing article that list the HCPCS codes for home oxygen equipment



Open in Claude

Find the billing article that covers modifiers for wheelchair accessories in Texas



Open in Claude

Find the billing article with the documentation requirements for cardiac rehabilitation services



Open in Claude

**Policy Monitoring & Updates**

- Compliance officers and healthcare administrators need to stay current with coverage policy changes that affect their practice or organization.
- Sample Prompts:

What Medicare coverage policies have changed in the last 30 days?



Open in Claude

Show me recent LCD updates for my Medicare contractor



Open in Claude

Have there been any new NCDs published for cardiovascular procedures this quarter?



Open in Claude

Are there any proposed LCDs for laboratory testing that I should review?



Open in Claude

Was this helpful?
