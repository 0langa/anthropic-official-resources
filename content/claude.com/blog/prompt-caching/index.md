![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d22606367ec36d6a7179_6380b3c2dc9e4011a3cd96fec382bd9197511e31-1000x1000.svg)

# Prompt caching with Claude

Claude caches frequently used context between API calls, reducing costs and latency for long prompts.

- Category

  [Product announcements](https://claude.com/blog/category/announcements)
- Product

  [Claude Platform](https://claude.com/platform/api)
- Date

  August 14, 2025
- Reading time

  5

  min
- Share

  [Copy link](https://claude.com/blog/prompt-caching)

  https://claude.com/blog/prompt-caching

***Update****: Prompt caching is Generally Available on the Anthropic API. Prompt caching is also available in preview in Amazon Bedrock and on Google Cloud’s Vertex AI. (December 17, 2024)*Prompt caching, which enables developers to cache frequently used context between API calls, is now available on the Anthropic API. With prompt caching, customers can provide Claude with more background knowledge and example outputs—all while reducing costs by up to 90% and latency by up to 85% for long prompts. Prompt caching is available today in public beta for Claude 3.5 Sonnet, Claude 3 Opus, and Claude 3 Haiku.

## When to use prompt caching

Prompt caching can be effective in situations where you want to send a large amount of prompt context once and then refer to that information repeatedly in subsequent requests, including:

- **Conversational agents:** Reduce cost and latency for extended conversations, especially those with long instructions or uploaded documents.
- **Coding assistants:** Improve autocomplete and codebase Q&A by keeping a summarized version of the codebase in the prompt.
- **Large document processing:** Incorporate complete long-form material including images in your prompt without increasing response latency.
- **Detailed instruction sets:** Share extensive lists of instructions, procedures, and examples to fine-tune Claude's responses. Developers often include a few examples in their prompt, but with prompt caching you can get even better performance by including dozens of diverse examples of high quality outputs.
- **Agentic search and tool use:** Enhance performance for scenarios involving multiple rounds of tool calls and iterative changes, where each step typically requires a new API call.
- **Talk to books, papers, documentation, podcast transcripts, and other long-form content:** Bring any knowledge base alive by embedding the entire document(s) into the prompt, and letting users ask it questions.

Early customers have seen substantial speed and cost improvements with prompt caching for a variety of use cases—from including a full knowledge base to 100-shot examples to including each turn of a conversation in their prompt.

<table>
<tbody>
<tr>
<th><strong>Use case</strong></th>
<th>
<strong>Latency w/o caching (time to first token)</strong>
</th>
<th>
<strong>Latency w/ caching (time to first token)</strong>
</th>
<th><strong>Cost reduction</strong></th>
</tr>
<tr>
<td>Chat with a book (100,000 token cached prompt) [1]</td>
<td>11.5s</td>
<td>2.4s (-79%)</td>
<td>-90%</td>
</tr>
<tr>
<td>Many-shot prompting (10,000 token prompt) [1]</td>
<td>1.6s</td>
<td>1.1s (-31%)</td>
<td>-86%</td>
</tr>
<tr>
<td>
            Multi-turn conversation (10-turn convo with a long system prompt)
            [2]
          </td>
<td>~10s</td>
<td>~2.5s (-75%)</td>
<td>-53%</td>
</tr>
</tbody>
</table>

Prompt caching

### How we price cached prompts

Cached prompts are priced based on the number of input tokens you cache and how frequently you use that content. Writing to the cache costs 25% more than our base input token price for any given model, while using cached content is significantly cheaper, costing only 10% of the base input token price.

<table>
<tbody>
<tr>
<td>
<strong>Claude 3.5 Sonnet</strong>
<ul>
<li>Our most intelligent model to date</li>
<li>200K context window</li>
</ul>
</td>
<td>
<strong>Input</strong>
<ul>
<li>$3 / MTok</li>
</ul>
<br/>
</td>
<td>
<strong>Prompt caching</strong>
<ul>
<li>
                $3.75 / MTok -
                <!-- -->Cache write
              </li>
<li>$0.30 / MTok - Cache read</li>
</ul>
</td>
<td>
<strong>Output </strong>
<ul>
<li>$15 / MTok</li>
</ul>
</td>
</tr>
<tr>
<td>
<strong>Claude 3 Opus</strong>
<ul>
<li>Powerful model for complex tasks</li>
<li>200K context window<br/></li>
</ul>
</td>
<td>
<strong>Input</strong>
<ul>
<li>$15 / MTok</li>
</ul>
<br/>
</td>
<td>
<strong>Prompt caching</strong>
<ul>
<li>
                $18.75 / MTok -
                <!-- -->Cache write
              </li>
<li>$1.50 / MTok - Cache read</li>
</ul>
</td>
<td>
<strong>Output</strong>
<ul>
<li>$75 / MTok</li>
</ul>
</td>
</tr>
<tr>
<td>
<strong>Claude 3 Haiku</strong>
<ul>
<li>Fastest, most cost-effective model</li>
<li>200K context window</li>
</ul>
</td>
<td>
<strong>Input</strong>
<ul>
<li>$0.25 / MTok</li>
</ul>
</td>
<td>
<strong>Prompt caching</strong>
<ul>
<li>
                $0.30 / MTok<!-- -->
                -
                <!-- -->Cache write
              </li>
<li>$0.03 / MTok - Cache read</li>
</ul>
</td>
<td>
<strong>Output</strong>
<ul>
<li>$1.25 / MTok</li>
</ul>
</td>
</tr>
</tbody>
</table>

Pricing

### Customer spotlight: Notion

[Notion](https://www.notion.so/product/ai) is adding prompt caching to Claude-powered features for its AI assistant, Notion AI. With reduced costs and increased speed, Notion is able to optimize internal operations and create a more elevated and responsive user experience for their customers.

> We're excited to use prompt caching to make Notion AI faster and cheaper, all while maintaining state-of-the-art quality.

— Simon Last, Co-founder at Notion

### Get started

To start using the prompt caching public beta on the Anthropic API, explore our [documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) and [pricing page](https://www.anthropic.com/pricing).

No items found.

[Prev](https://claude.com/blog/prompt-caching)Prev

0/5

[Next](https://claude.com/blog/prompt-caching)Next

eBook

##

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

Embedded media:

FAQ

No items found.

## Related posts

Explore more product news and best practices for teams building with Claude.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6a42c9bc20d2072552ef256a_Node-EnterpriseAgents.svg)

Sep 17, 2026

### Projects redesigned: from folder to conversation

Product announcements

[Projects redesigned: from folder to conversation](https://claude.com/blog/prompt-caching)Projects redesigned: from folder to conversation

[Projects redesigned: from folder to conversation](https://claude.com/blog/projects-redesigned)Projects redesigned: from folder to conversation

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6aa82dfc4ca89952d04c3873_Object-Store.svg)

Sep 15, 2026

### Claude for Small Business launches new workflows, integrations, and training programs

Product announcements

[Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/prompt-caching)Claude for Small Business launches new workflows, integrations, and training programs

[Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)Claude for Small Business launches new workflows, integrations, and training programs

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d229061abf091318fc81_6905c83d0735e1bc430025fdd1748d1406079036-1000x1000.svg)

Jun 25, 2025

### Turn ideas into interactive AI-powered apps

Product announcements

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/prompt-caching)Turn ideas into interactive AI-powered apps

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/build-artifacts)Turn ideas into interactive AI-powered apps

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d2222403b092e0358b0e_cd4fd51deacd067d4e30aee4f4b149f6cba1b97b-1000x1000.svg)

Jul 25, 2025

### Build and share AI-powered apps with Claude

Product announcements

[Build and share AI-powered apps with Claude](https://claude.com/blog/prompt-caching)Build and share AI-powered apps with Claude

[Build and share AI-powered apps with Claude](https://claude.com/blog/claude-powered-artifacts)Build and share AI-powered apps with Claude

## Transform how your organization operates with Claude

See pricing

[See pricing](https://claude.com/pricing)See pricing

Contact sales

[Contact sales](https://claude.com/contact-sales)Contact sales

Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

[Subscribe](https://claude.com/blog/prompt-caching)Subscribe

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.

Thank you! You’re subscribed.

Sorry, there was a problem with your submission, please try again later.
