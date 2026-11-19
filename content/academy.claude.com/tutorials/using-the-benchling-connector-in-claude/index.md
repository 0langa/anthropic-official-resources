# Using the Benchling connector in Claude

Set up and use the Benchling integration with Claude to connect to Benchling R&D platform data for experiments, notebooks, and structured records.

10 minClaude

[Open Claude](https://claude.ai/new)

![](https://academy.claude.com/assets/v1/thumbnail.light-gb2898h8.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-pryc31en.png)

The Benchling integration connects Claude to Benchling R&D platform data, enabling scientists to ask questions and receive clear summaries with links back to source experiments, notebooks, and structured records—all while maintaining existing access permissions. This article explains how to set up and use the Benchling integration with Claude to advance your R&D workflows.

The Benchling integration relies upon Claude's ability to [use remote connectors(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).

## **What this integration provides**[](https://academy.claude.com/tutorials/using-the-benchling-connector-in-claude)

When Claude sends a query to Benchling, it can search across the full breadth of a customer’s Benchling environment. This covers experimental results and study data, notebook content such as text and attachments, and structured records like registry items, inventory, and templates. The Benchling integration brings these different data types together to provide a unified answer, saving scientists from having to manually piece information across entries or projects. You can also choose to pull in public literature sources, combining internal and external knowledge in one place. All results follow the same access permissions already set in Benchling, ensuring people only see the data they are meant to.

## **Who should use the Benchling integration**[](https://academy.claude.com/tutorials/using-the-benchling-connector-in-claude)

- **Bench Scientists & Research Associates** - want to quickly find and summarize the right data, whether from Benchling or external sources, and use it to decide on next steps in their experiments.
- **Team Leads & Project Managers** - need concise summaries of ongoing work and alignment with external findings to guide project planning.
- **Computational Biologists & Informatics Teams** - want to ask governance questions and assemble curated datasets from Benchling that can be used for deeper analysis or shared across teams.
- **Program Leads** - need automatically generated reports that combine Benchling study results with external context or public data, giving them a clear view of progress and next steps.
- **R&D Leaders & Executives** - require portfolio-level insights to spot trends across programs and benchmark against public industry data.

## **Who can access the Benchling integration**[](https://academy.claude.com/tutorials/using-the-benchling-connector-in-claude)

Benchling customers who meet the following criteria:

- Benchling Chat enabled in your tenant
- V3 APIs enabled in your tenant
- Benchling remote MCP enabled for your tenant

No additional setup is required beyond connecting Claude to the Benchling connector and authenticating with your Benchling login credentials.

More details on accessing the integration can be found in [Benchling’s MCP Server Documentation(opens in new tab)](https://help.benchling.com/hc/en-us/articles/40342713479437-Benchling-MCP).

## **Setting up the Benchling integration**[](https://academy.claude.com/tutorials/using-the-benchling-connector-in-claude)

**For Organization Owners (Team and Enterprise)**

1. Navigate to [Organization settings > Connectors(opens in new tab)](https://claude.ai/admin-settings/connectors)
2. Use the Add button to browse all available connectors, then find **Benchling** and add it for your team
3. When asked for a Server URL, enter your Benchling MCP Server URL. It follows the pattern `https://<tenant>.mcp.benchling.com/mcp`, using your tenant name
4. Follow any prompts to finish

**For Individual Claude Users**

1. Open [Benchling in the connectors directory(opens in new tab)](https://claude.ai/directory/benchling)
2. Connect it to Claude. If asked for a Server URL, enter `https://<tenant>.mcp.benchling.com/mcp`, using your tenant name.
3. Follow the instructions to authenticate with your Benchling account

Learn about [finding and connecting tools(opens in new tab)](https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory) in Claude.

Technical details of the Benchling integration can be found in [Benchling’s MCP Server Documentation(opens in new tab)](https://help.benchling.com/hc/en-us/articles/40342713479437-Benchling-MCP).

## **Example use cases**[](https://academy.claude.com/tutorials/using-the-benchling-connector-in-claude)

**Cross-Source Comparison:**

Compare the IC50 results from my last two Benchling experiments with recent PubMed articles on AAV stability.



Open in Claude

**Insight Summarization:**

Summarize the key findings from Benchling experiments and highlight how they align with external literature trends.



Open in Claude

**Recommendations:**

Based on our last three in vivo results in Benchling and recent FDA guidance, what should we test next?



Open in Claude

**Portfolio Insights:**

Aggregate results from our top five Benchling programs and highlight which ones are showing the strongest early efficacy signals compared with industry benchmarks.



Open in Claude

Was this helpful?
