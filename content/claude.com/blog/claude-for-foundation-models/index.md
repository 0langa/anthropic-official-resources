# Building intelligent apps for Apple platforms with Claude in the Foundation Models framework

- Category[Product updates](https://claude.com/resources/product-updates)
- ProductClaude Platform, Claude apps
- DateJune 8, 2026
- Reading time3 min
- ShareCopy link

Today we're releasing Foundation Models framework support for Claude through a new Swift package that lets Apple developers use Apple's Foundation Models framework to call Claude for more complex workflows.

![](https://assets.claude.com/2c536ac9545ae24001d8f6d0ce604702e7f27eee.png)

Apple’s Foundation Models framework gives developers access to tap into models natively from Swift. It is very easy to use and can return typed Swift values through guided generation in as few as three lines of code. Developers can use this to tap into Apple’s on-device models for fast, local tasks like summarization or extraction.

Developers can now use Apple’s Foundation Models framework to hand off to Claude when a request calls for multi-step reasoning, code generation, and more. Claude can also search the web for current information and execute code for data analysis. Stream Claude's response back into the same view.

Because Apple's framework returns typed Swift values from @Generable annotations, developers arrive at the Claude API call with clean inputs instead of raw user text.

## What this unlocks

The Foundation Models framework already powers a range of intelligent on-device features — journaling apps that surface personalized prompts, document apps that summarize contracts, learning apps that explain a concept at a student's level. Adding Claude extends each of those patterns.

![](https://assets.claude.com/1fe4afefb5a24989001f5b36f9a211f597442586.png)

A journaling app can generate daily prompts on-device, then ask Claude to find threads across months of entries. A study app can define a term on-device, then hand off to Claude when the student follows up with "why does this matter for everything else we've covered?"

It's one experience for the user, backed by the right model for each step.

## Getting started

Claude support with the Foundation Models framework will be available tomorrow and works through Apple's Foundation Models framework on iOS 27, iPadOS 27, macOS 27, and visionOS 27, and watch OS 27. Add it to your project, sign in with an Anthropic API key, and pass typed outputs from Apple's on-device pass into a Claude request — the package handles streaming, tool calls, and structured responses back into your SwiftUI view.

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleNov 10, 2026

### Your apps can now open in Claude, and Claude can work in them

Our partners can now embed their apps directly in Claude, so you and Claude can work in the same tool, on the same screen, without switching tabs.

Claude appsMCP](https://claude.com/resources/articles/interactive-connectors-full-tool)[ArticleNov 10, 2026

### More ways to work with Claude: Sheets, Whiteboards, and Interactive Connectors

Work at the speed of thought

Claude apps](https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors)[ArticleNov 10, 2026

### Introducing Claude Whiteboards, Claude Sheets, and Claude Data

Now you can brainstorm on whiteboards, build sheets, and share data directly in Claude.

Claude apps](https://claude.com/resources/articles/sheets-whiteboards-data)[ArticleNov 9, 2026

### Claude Fable 5.2 and Mythos 5.2

Introducing Claude Fable 5.2 and Claude Mythos 5.2, our new models for the hardest technical challenges.

Claude appsClaude Code1 more: Claude PlatformClaude Platform

(opens in new tab)](https://www.anthropic.com/claude-fable-and-mythos-5-2)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
