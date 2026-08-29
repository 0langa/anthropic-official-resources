Lesson 4 of 11 · Model Context Protocol: Advanced TopicsNotifications walkthrough

# Notifications walkthrough

Lesson 415 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fmodel-context-protocol-advanced-topics%2Fnotifications-walkthrough)

### Tutorial Steps

Let's get a better sense of how to implement this feature by walking through a sample project.

SkipNext

1. Tool function receives Context argument▶

Tool functions automatically receive 'Context' as their last argument. This object has methods for logging and reporting progress to the client.

2. Create logs and progress with context▶

Throughout your tool function, call the `info()`, `warning()`, `debug()`, or `error()` methods to log different types of messages for the client. Also call the `report_progress()` method to estimate the amount of remaining work for the tool call.

3. Define callbacks on the client▶

The client needs to define logging and progress callbacks, which will automatically be called whenever the server emits log or progress messages. These callbacks should try to display the provided logging and progress data to the user.

4. Pass callbacks to appropriate functions▶

Make sure you provide the logging callback to the `ClientSession` and the progress callback to the `call_tool()` function.

← PreviousNext →

#### Files

📄.gitignore📄client.py📄pyproject.toml📄README.md📄server.py

server.py×

```
1from mcp.server.fastmcp import FastMCP, Context



2import asyncio



3



4mcp = FastMCP(name="Demo Server")



5



6



7@mcp.tool()



8async def add(a: int, b: int, ctx: Context) -> int:



9    await ctx.info("Preparing to add...")



10    await ctx.report_progress(20, 100)



11



12    await asyncio.sleep(2)



13



14    await ctx.info("OK, adding...")



15    await ctx.report_progress(80, 100)



16



17    return a + b



18



19



20if __name__ == "__main__":



21    mcp.run(transport="stdio")



22
```

Was this helpful?
