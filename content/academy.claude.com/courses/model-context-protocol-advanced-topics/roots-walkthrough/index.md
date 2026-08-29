Lesson 6 of 11 · Model Context Protocol: Advanced TopicsRoots walkthrough

# Roots walkthrough

Lesson 615 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fmodel-context-protocol-advanced-topics%2Froots-walkthrough)

### Tutorial Steps

Let's get a better sense of how to implement this feature by walking through a sample project.

SkipNext

1. Defining roots▶

Ideally, a user will dictate which files/folders can be accessed by the MCP server.

This program is set up to accept a list of CLI arguments, which are interpretted as paths that the user wants to allow access to.

That list of paths is provided to the `MCPClient` down on lines 42.

2. Creating root objects▶

According to the MCP spec, all roots should have a URI that begins with `file://`.

This function takes the list of paths of that the user provided and turns them into `Root` objects.

3. Roots callback▶

The client doesn't immediately provide the list of roots to the server. Instead, the server can make a request to the client at some future point in time. We make a callback that will be executed when the server requests the roots. The callback needs to return the list of roots inside of a `ListRootsResult` object.

This callback is passed into the ClientSession down on line 58.

4. Using the roots▶

On to the server. The server will use the roots in two scenarios:

1. Whenever a tool attempts to access a file or folder
2. When a LLM (like Claude) needs to resolve a file or folder to a full path. Think of when a user says 'read the todos.txt file' - Claude needs to figure out where the text file is, and might do so by looking at the list of roots

To handle the second case, we can either define a tool that lists out the roots or inject them directly in a prompt.

5. Accessing the roots▶

Roots are accessed by calling `ctx.session.list_roots()`.

This sends a message back to the client, which causes it to run the root-listing callback.

6. Authorizing access▶

Remember: the MCP SDK does not attempt to limit what files or folders your tools attempt to read! You must implement that check yourself.

Consider implementing a function like `is_path_allowed`, which will decide whether a path is accessible by comparing it to the list of roots.

7. Authorizing access▶

Once you've put an authorization function together - like `is_path_allowed` - use it throughout your tools to ensure the requested path is accessible.

← PreviousNext →

#### Files

📂core📄\_\_init\_\_.py📄chat.py📄claude.py📄cli\_chat.py📄cli.py📄tools.py📄utils.py📄video\_converter.py

📄.env.example📄.gitignore📄main.py📄mcp\_client.py📄mcp\_server.py📄pyproject.toml📄README.md

main.py×

mcp\_client.py×

```
1import asyncio



2import sys



3import os



4from dotenv import load_dotenv



5from contextlib import AsyncExitStack



6



7from mcp_client import MCPClient



8from core.claude import Claude



9



10from core.cli_chat import CliChat



11from core.cli import CliApp



12



13load_dotenv()



14



15# Anthropic Config



16claude_model = os.getenv("CLAUDE_MODEL", "claude-sonnet-4-5")



17anthropic_api_key = os.getenv("ANTHROPIC_API_KEY", "")



18



19



20assert claude_model, "Error: CLAUDE_MODEL cannot be empty. Update .env"



21assert anthropic_api_key, (



22    "Error: ANTHROPIC_API_KEY cannot be empty. Update .env"



23)



24



25



26async def main():



27    claude_service = Claude(model=claude_model)



28



29    # Get root directories from command line arguments



30    root_paths = sys.argv[1:]



31    if not root_paths:



32        print("Usage: uv run main.py <root1> [root2] ...")



33        print("Example: uv run main.py /path/to/videos /another/path")



34        sys.exit(1)



35



36    clients = {}



37



38    async with AsyncExitStack() as stack:



39        # Create the MCP client with the provided root directories



40        doc_client = await stack.enter_async_context(



41            MCPClient(



42                command="uv", args=["run", "mcp_server.py"], roots=root_paths



43            )



44        )



45        clients["doc_client"] = doc_client



46



47        chat = CliChat(



48            doc_client=doc_client,



49            clients=clients,



50            claude_service=claude_service,



51        )



52



53        cli = CliApp(chat)



54        await cli.initialize()



55        await cli.run()



56



57



58if __name__ == "__main__":



59    if sys.platform == "win32":



60        asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())



61    asyncio.run(main())



62
```

Was this helpful?
