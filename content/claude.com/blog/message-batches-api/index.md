![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d2239bf93c8cb72a719a_a0655eda5d58588738240e9960790468a3d2c9c0-1000x1000.svg)

# Introducing the Message Batches API

Claude now offers a Message Batches API that processes up to large volumes of queries asynchronously at lower cost.

- Category

  [Product announcements](https://claude.com/blog/category/announcements)
- Product

  [Claude Platform](https://claude.com/platform/api)
- Date

  October 8, 2024
- Reading time

  5

  min
- Share

  [Copy link](https://claude.com/blog/message-batches-api)

  https://claude.com/blog/message-batches-api

***Update:*** *The Message Batches API is Generally Available on the Anthropic API. Customers using Claude in Amazon Bedrock can use batch inference. Batch predictions is also available in preview on Google Cloud’s Vertex AI. (December 17, 2024)*We’re introducing a new [Message Batches API](https://docs.anthropic.com/en/docs/build-with-claude/message-batches)—a powerful, cost-effective way to process large volumes of queries asynchronously.

Developers can send batches of up to 10,000 queries per batch. Each batch is processed in less than 24 hours and costs 50% less than standard API calls. This makes processing non-time-sensitive tasks more efficient and cost-effective.

The Batches API is available today in public beta with support for Claude 3.5 Sonnet, Claude 3 Opus, and Claude 3 Haiku on the Anthropic API. Customers using Claude in Amazon Bedrock can use [batch inference](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html). Support for batch processing for [Claude on Google Cloud’s Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude) is coming soon.

## High throughput at half the cost

Developers often use Claude to process vast amounts of data—from analyzing customer feedback to translating languages—where real-time responses aren't necessary.

Instead of managing complex queuing systems or worrying about rate limits, you can use the Batches API to submit groups of up to 10,000 queries and let Anthropic handle the processing at a 50% discount. Batches will be processed within 24 hours, though often much quicker. Additional benefits include:

- **Enhanced throughput:** Enjoy higher rate limits to process much larger request volumes without impacting your standard API rate limits.
- **Scalability for big data:** Handle large-scale tasks such as dataset analysis, classification of large datasets, or extensive model evaluations without infrastructure concerns.

The Batches API unlocks new possibilities for large-scale data processing that were previously less practical or cost-prohibitive. For example, analyzing entire corporate document repositories—which might involve millions of files—becomes more economically viable by leveraging our batching discount.

## Pricing

The Batches API allows you to take advantage of infrastructure cost savings and is offered at a 50% discount for both input and output tokens.

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
<strong>Batch Input</strong>
<ul>
<li>$1.50 / MTok</li>
</ul>
</td>
<td>
<strong>Batch Output</strong>
<ul>
<li>$7.50 / MTok</li>
</ul>
</td>
</tr>
<tr>
<td>
<strong>Claude 3 Opus</strong>
<ul>
<li>Powerful model for complex tasks</li>
<li>200K context window</li>
</ul>
</td>
<td>
<strong>Batch Input</strong>
<ul>
<li>$7.50 / MTok</li>
</ul>
</td>
<td>
<strong>Batch Output</strong>
<ul>
<li>$37.50 / MTok</li>
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
<strong>Batch Input</strong>
<ul>
<li>$0.125 / MTok</li>
</ul>
</td>
<td>
<strong>Batch Output</strong>
<ul>
<li>$0.625 / MTok</li>
</ul>
</td>
</tr>
</tbody>
</table>

## Customer Spotlight: Quora

[Quora](https://cloud.google.com/customers/quora?hl=en), a user-based question-and-answer platform, leverages Anthropic's Batches API for summarization and highlight extraction to create new end-user features.

"Anthropic's Batches API provides cost savings while also reducing the complexity of running a large number of queries that don't need to be processed in real time," said Andy Edmonds, Product Manager at Quora. "It's very convenient to submit a batch and download the results within 24 hours, instead of having to deal with the complexity of running many parallel live queries to get the same result. This frees up time for our engineers to work on more interesting problems.”

## Get started

To start using the Batches API in public beta on the Anthropic API, explore our [documentation](https://docs.anthropic.com/en/docs/build-with-claude/message-batches) and [pricing page](https://docs.anthropic.com/en/docs/build-with-claude/message-batches).

No items found.

[Prev](https://claude.com/blog/message-batches-api)Prev

0/5

[Next](https://claude.com/blog/message-batches-api)Next

eBook

##

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

Embedded media:

FAQ

No items found.

## Related posts

Explore more product news and best practices for teams building with Claude.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d22d0099a66d72e05699_33ddc751e21fb4b116b3f57dd553f0bc55ea09d1-1000x1000.svg)

Jun 18, 2026

### Claude Code now supports artifacts

Product announcements

[Claude Code now supports artifacts](https://claude.com/blog/message-batches-api)Claude Code now supports artifacts

[Claude Code now supports artifacts](https://claude.com/blog/artifacts-in-claude-code)Claude Code now supports artifacts

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d229061abf091318fc81_6905c83d0735e1bc430025fdd1748d1406079036-1000x1000.svg)

Jun 25, 2025

### Turn ideas into interactive AI-powered apps

Product announcements

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/message-batches-api)Turn ideas into interactive AI-powered apps

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/build-artifacts)Turn ideas into interactive AI-powered apps

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d2222403b092e0358b0e_cd4fd51deacd067d4e30aee4f4b149f6cba1b97b-1000x1000.svg)

Jul 25, 2025

### Build and share AI-powered apps with Claude

Product announcements

[Build and share AI-powered apps with Claude](https://claude.com/blog/message-batches-api)Build and share AI-powered apps with Claude

[Build and share AI-powered apps with Claude](https://claude.com/blog/claude-powered-artifacts)Build and share AI-powered apps with Claude

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d22949f86cd1968deb9f_33dbe8f783d4835a838b4c4ae85d3c04e352fee1-1000x1000.svg)

Jun 17, 2026

### Claude Design now stays on brand for daily work

Product announcements

[Claude Design now stays on brand for daily work](https://claude.com/blog/message-batches-api)Claude Design now stays on brand for daily work

[Claude Design now stays on brand for daily work](https://claude.com/blog/claude-design-stays-on-brand-for-daily-work)Claude Design now stays on brand for daily work

## Transform how your organization operates with Claude

See pricing

[See pricing](https://claude.com/pricing)See pricing

Contact sales

[Contact sales](https://claude.com/contact-sales)Contact sales

Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

[Subscribe](https://claude.com/blog/message-batches-api)Subscribe

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.

Thank you! You’re subscribed.

Sorry, there was a problem with your submission, please try again later.
