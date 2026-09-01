Announcements

# Introducing 100K context windows

May 11, 2023

![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F747fdccef62301bfa3538a9c6c8f8771fc2dceac-2880x1620.png&w=3840&q=75)

We’ve expanded Claude’s context window from 9K to 100K tokens, corresponding to around 75,000 words! This means businesses can now submit **hundreds of pages** of materials for Claude to digest and analyze, and conversations with Claude can go on for hours or even days.

The average person can read 100,000 tokens of text in ~5+ hours[1], and then they might need substantially longer to digest, remember, and analyze that information. Claude can now do this in less than a minute. For example, we loaded the entire text of The Great Gatsby into Claude-Instant (72K tokens) and modified one line to say Mr. Carraway was “a software engineer that works on machine learning tooling at Anthropic.” When we asked the model to spot what was different, it responded with the correct answer in **22 seconds**.

Beyond just reading long texts, Claude can help retrieve information from the documents that help your business run. You can drop multiple documents or even a book into the prompt and then ask Claude questions that require synthesis of knowledge across many parts of the text. For complex questions, this is likely to work substantially better than vector search based approaches. Claude can follow your instructions and return what you’re looking for, as a human assistant would!

Our partners are excited about what larger context windows means for their business. 100K translates into roughly 6 hours of audio - AssemblyAI put out a great demonstration of this where they transcribed a long podcast into 58K words and then used Claude for summarization and Q&A. You can watch the full demo [here](https://youtu.be/2kFhloXz5_E). With 100K context windows, you can:

- Digest, summarize, and explain dense documents like financial statements or research papers
- Analyze strategic risks and opportunities for a company based on its annual reports
- Assess the pros and cons of a piece of legislation
- Identify risks, themes, and different forms of argument across legal documents.
- Read through hundreds of pages of developer documentation and surface answers to technical questions
- Rapidly prototype by dropping an entire codebase into the context and intelligently build on or modify it

100K context windows are now available in our API. If you are working with Claude, you can read more about what model versions to call [here](https://console.anthropic.com/docs/api/reference). If you’re not working with Claude yet, you can request access [here](https://www.anthropic.com/claude).

[1] [https://www.sciencedirect.com/...](https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786)

## Related content

### Improving our alignment and security efforts

[Read more](https://www.anthropic.com/news/improving-alignment-security-efforts)

### Previewing the Model Hardware Standard

We’re opening a research preview of the Model Hardware Standard (MHS), a shared specification for AI agents to safely operate physical devices, to a first group of scientific research labs and advanced manufacturers.

[Read more](https://www.anthropic.com/news/model-hardware-standard-research-preview)

### Expanding our support for scientists

Starting today, 10,000 scientists around the world can get Claude at no cost to start. Verified principal investigators qualify for a Claude Team subscription plan and then add their research team to Standard seats for free, or Premium seats for $15 per month, for up to a year.

[Read more](https://www.anthropic.com/news/expanding-support-for-scientists)
