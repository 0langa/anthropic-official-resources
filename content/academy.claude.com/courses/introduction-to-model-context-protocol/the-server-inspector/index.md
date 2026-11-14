Lesson 4 of 10 · Introduction to Model Context ProtocolThe server inspector

# The server inspector

Lesson 43 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-model-context-protocol%2Fthe-server-inspector)

Embedded media: https://www.youtube-nocookie.com/embed/rob9Wi4kyoQ?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=rob9Wi4kyoQ)

When building MCP servers, you need a way to test your functionality without connecting to a full application. The Python MCP SDK includes a built-in browser-based inspector that lets you debug and test your server in real-time.

## Starting the Inspector[](https://academy.claude.com/courses/introduction-to-model-context-protocol/the-server-inspector)

First, make sure your Python environment is activated (check your project's README for the exact command). The inspector also needs Node.js 22.19 or later. Then run the inspector with:

`mcp dev mcp_server.py`

This starts the MCP Inspector and prints a local URL that starts with `http://127.0.0.1:6274`. If it doesn't open on its own, copy the full URL into your browser.

## Using the Inspector Interface[](https://academy.claude.com/courses/introduction-to-model-context-protocol/the-server-inspector)

These steps follow version 2 of the inspector. The video and the picture below show version 1, which looks different. Look for these key elements:

- A switch on your server's card, which connects to the server
- Tabs for **Tools**, **Prompts**, and **Resources**, which appear once you're connected
- A tools listing and testing panel

Turn on the switch first to start your server. You'll see its status change from "Disconnected" to "Connected".

## Testing Your Tools[](https://academy.claude.com/courses/introduction-to-model-context-protocol/the-server-inspector)

Open the **Tools** tab to see all available tools from your server. When you select a tool, you see its details and input fields.

![MCP Inspector with the Tools tab open, showing the read_doc_contents and edit_document tools listed and the read_doc_contents panel with a doc_id input field and Run Tool button](https://academy.claude.com/assets/media/cb9b3c821130bee229aefb94456017fd04d46e53b1d24a91aef58a83d49b31a4.png)

For example, to test a document reading tool:

1. Select the `read_doc_contents` tool
2. Enter a document ID (like "deposition.md")
3. Click **Execute Tool**
4. Check the results for success and expected output

The inspector shows both the success status and the actual returned data, making it easy to verify your tool works correctly.

## Testing Tool Interactions[](https://academy.claude.com/courses/introduction-to-model-context-protocol/the-server-inspector)

You can test multiple tools in sequence to verify complex workflows. For instance, after using an edit tool to modify a document, immediately test the read tool to confirm the changes were applied correctly.

The inspector maintains your server state between tool calls, so edits persist and you can verify the complete functionality of your MCP server.

## Development Workflow[](https://academy.claude.com/courses/introduction-to-model-context-protocol/the-server-inspector)

The MCP Inspector becomes an essential part of your development process. Instead of writing separate test scripts or connecting to full applications, you can:

- Quickly iterate on tool implementations
- Test edge cases and error conditions
- Verify tool interactions and state management
- Debug issues in real-time

This immediate feedback loop makes MCP server development much more efficient and helps catch issues early in the development process.

Was this helpful?
