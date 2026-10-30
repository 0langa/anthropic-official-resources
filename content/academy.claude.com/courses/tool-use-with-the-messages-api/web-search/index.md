Lesson 6 of 9 · Tool use with the Messages APIWeb search: Answers from the sites you trust

# Web search: Answers from the sites you trust

Lesson 67 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Ftool-use-with-the-messages-api%2Fweb-search)

Embedded media: https://www.youtube-nocookie.com/embed/JPDMo4M3kME?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Web search: Answers from the sites you trust

SummaryTranscript

The web search tool lets Claude search the web while it works on your
request. Dynamic filtering keeps only the relevant parts of the search
results, so you use fewer tokens on search-heavy requests. Meridian, a
fictional engineering consultancy, cites engineering standards in its
proposals.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=JPDMo4M3kME)

*The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (`claude-sonnet-5`). Results may differ on newer models.*

Claude answers from what it learned in training, so it doesn't know about anything newer than that, or anything that was never in it. When a question needs those facts, someone has to look them up, and that legwork falls to you.

**With the web search tool, Claude does that legwork itself, searching the web while it works on your request and answering from what it finds.**

One of Meridian's proposals cites four Canadian engineering standards by clause, and Meridian carries professional liability if any reference is wrong. So before the proposal goes out, Meridian wants each reference checked against official sources.

## Add the tool to your request[](https://academy.claude.com/courses/tool-use-with-the-messages-api/web-search)

Web search is a server tool. It runs on Anthropic's infrastructure, so you don't write a handler for it or send back a `tool_result`.

**Adding it takes one entry in your `tools` list.** The entry's `type` picks the version of the tool, and Meridian sets it to `web_search_20260209`. Its `name` is always `web_search`. The [tool reference(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference) lists the current versions, so copy the `type` value from there.

On Claude 4.6 and later models, `web_search_20260209` and later versions use dynamic filtering by default. Claude runs code that filters the search results, so only relevant content reaches the context window.

Claude usually does all its searching during one request. Your code sends that request and gets back the finished answer.

The API can pause a long-running turn and return a `stop_reason` of `pause_turn`. When it does, send the response's content back as an assistant message, with the same `tools`, and Claude continues.

[Each search is billed(opens in new tab)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) on top of what you pay for tokens. [Not every cloud platform offers web search(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock).

## Name the sites Claude may use[](https://academy.claude.com/courses/tool-use-with-the-messages-api/web-search)

So far, nothing in the request limits which sites Claude can search, and that's a problem for Meridian. The open web is full of forum posts and reseller sites, but Meridian can stand behind only official sources.

So you tell the search where it may look. **`allowed_domains` is another field in the tool's entry, and it limits search results to the sites you name.** Meridian names four sites. Two belong to the bodies that publish these standards and certify to them, `csagroup.org` and `cwbgroup.org`. Two belong to governments, `ontario.ca` and `canada.ca`.

`allowed_domains` takes a list. Write each item as a bare domain with no `https://`, and its subdomains are included.

## Read the answer and its sources[](https://academy.claude.com/courses/tool-use-with-the-messages-api/web-search)

Claude's answer can arrive in several `text` blocks, with the searches in between. **So join every `text` block to get the whole answer.**

Each search also adds a `web_search_tool_result` block to the response. It holds the list of results the search returned, and each result has a `title` and a `url`.

Of Meridian's four references, Claude found that two check out, a third checks out except for its subclause number, and the fourth is wrong.

## Put the program together[](https://academy.claude.com/courses/tool-use-with-the-messages-api/web-search)

Meridian's program puts these steps together. In the program, `excerpt` holds the passage from the proposal, and `QUESTION` holds Meridian's question.

Exercise: given a displayed Python program using the web search tool, pick the line that performs each of five jobs, such as restricting results to named domains or choosing the tool's version. A wrong pick gets a hint, and the right line gets a short note.

Select the line of the program that does this job.

Job 1 of 5

Claude's reply comes in several pieces with searches in between, and you want to read it whole.

TOOLS = [{ "type": "web\_search\_20260209", "name": "web\_search", "allowed\_domains": ["csagroup.org", "cwbgroup.org", "ontario.ca", "canada.ca"],}]def answer(resp): return "".join(b.text for b in resp.content if b.type == "text")messages = [{"role": "user", "content": QUESTION + excerpt}]resp = client.messages.create( model="claude-sonnet-5", max\_tokens=4096, tools=TOOLS, messages=messages,)print(answer(resp))for block in resp.content: if block.type == "web\_search\_tool\_result": if isinstance(block.content, list): for result in block.content: print(result.title, result.url)

Next jobStart over

## Key takeaways[](https://academy.claude.com/courses/tool-use-with-the-messages-api/web-search)

- Web search is a server tool, so you add one entry to `tools` and don't write a handler. Claude usually does all its searching during one request.
- `allowed_domains` limits search results to the sites you name.
- On Claude 4.6 and later models, dynamic filtering is on by default in `web_search_20260209` and later versions, so only relevant content reaches the context window.

Was this helpful?


## Video transcript

# Web search: Dynamic filtering and citations

A web search tool that dumps 10 raw results into your context window costs you tokens on nine pages that you just simply didn't need. Dynamic filtering fixes that. Web search is a server-side tool, just like our code execution tool. Anthropic runs a search, and you write no handler code. With dynamic filtering, Claude writes and runs code in a sandbox on Anthropic's side to post-process the search results before they reach the context window. Only the relevant hits survive. On search-heavy agents, that's the difference between paying for 10 pages and paying for the two sentences that mattered.

The sandbox is auto-provisioned. You don't set anything up. One capability note, though, is that dynamic filtering needs a model that supports programmatic tool calling. On models that don't, set allowed_callers to direct, or the API 400s. Check the web search tool page for supported models.

Now I have a proposal here that claims a specific CSA structural requirement. I want Claude to verify against the actual standard and I want to control where it looks.

So I'm going to lock the allowed_domains to the official sources. So ontario.ca, canada.ca, csagroup.org, cwbgroup.org. So when we run it. Claude does a search and it filters the run server side.

And we get the answer back with a verification and something that we didn't have to build. And automatic citations pointing at the exact source. Three of the four references check out. The fourth is wrong. The full-time engineer rule is Division 1, not 3. And on A23.3, it says plainly it couldn't confirm the exact subclause number.

Nice. We get the sources right here. For a consultancy whose proposals carry actual professional liability, cited answers aren't just like a nice-to-have. They're basically the whole product. One trap from JSON outputs. Document citations refuse to combine with them. Enable citations on a document you provide. Add JSON output and the API returns a 400. Web search is different though. It runs with JSON output, but the JSON comes back without citations. So you do lose the receipts.

So here's everything that I'm deliberately not putting in this video. Per-search pricing, the org-level enablement toggle, max_uses caps, domain allow versus block rules. All of this is on the docs page and all of it changes faster than this video will. So check out the web search tool and read it the day you build because things are changing.

And one thing to know is that availability will differ by cloud. As of this recording, web search isn't on Amazon Bedrock at all, and Claude on Google Cloud gets basic search without dynamic filtering. So if you're on a cloud platform, check the availability table before you design around this tool.

Quick recap: dynamic filtering runs Claude-written code server side, so only relevant results reach your context. Domain locks control where it looks, citations come free, and they don't mix with structured outputs. Everything that changes monthly lives in the docs, and platform support varies, so check before you architect. Live data filtered before you pay for it, with receipts.

