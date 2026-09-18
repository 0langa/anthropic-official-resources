Lesson 2 of 11 · Model Context Protocol: Advanced topicsSampling walkthrough

# Sampling walkthrough

Lesson 215 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fmodel-context-protocol-advanced-topics%2Fsampling-walkthrough)

### Tutorial Steps

Let's get a better sense of how to implement this feature by walking through a sample project.

SkipNext

1. Initiating sampling▶

On the server, during a tool call, run the `create_message()` method, passing in some messages that you wish to send to a language model.

2. Sampling callbacks▶

On the client, you must implement a sampling callback. It will receive a list of messages provided by the server.

3. Message formats▶

The list of messages provided by the server are formatted for communication in MCP. The individual messages aren't guaranteed to be compatible with whatever LLM SDK you are using.

For example, if you're using the Anthropic SDK, you'll have to write a little bit of conversion logic to turn the MCP messages into a format compatible with Anthropic's SDK.

4. Returning generated text▶

After generating text with the LLM, you'll return a `CreateMessageResult`, which contains the generated text.

5. Connecting the callback▶

Don't forget: the callback on the client needs to be passed into the `ClientSession` call.

6. Getting the result▶

After the client has generated and returned some text, it will be sent to the server. You can do anything with this text:

- Use it as part of a workflow in your tool
- Decide to make another sampling call
- Return the generated text

← PreviousNext →

#### Files

📄.gitignore📄client.py📄pyproject.toml📄README.md📄server.py

server.py×

client.py×

```
1import asyncio



2from anthropic import AsyncAnthropic



3from mcp import ClientSession, StdioServerParameters



4from mcp.client.stdio import stdio_client



5from mcp.client.session import RequestContext



6from mcp.types import (



7    CreateMessageRequestParams,



8    CreateMessageResult,



9    TextContent,



10    SamplingMessage,



11)



12



13anthropic_client = AsyncAnthropic()



14model = "claude-sonnet-4-5"



15



16server_params = StdioServerParameters(



17    command="uv",



18    args=["run", "server.py"],



19)



20



21



22async def chat(input_messages: list[SamplingMessage], max_tokens=4000):



23    messages = []



24    for msg in input_messages:



25        if msg.role == "user" and msg.content.type == "text":



26            content = (



27                msg.content.text



28                if hasattr(msg.content, "text")



29                else str(msg.content)



30            )



31            messages.append({"role": "user", "content": content})



32        elif msg.role == "assistant" and msg.content.type == "text":



33            content = (



34                msg.content.text



35                if hasattr(msg.content, "text")



36                else str(msg.content)



37            )



38            messages.append({"role": "assistant", "content": content})



39



40    response = await anthropic_client.messages.create(



41        model=model,



42        messages=messages,



43        max_tokens=max_tokens,



44    )



45



46    text = "".join([p.text for p in response.content if p.type == "text"])



47    return text



48



49



50async def sampling_callback(



51    context: RequestContext, params: CreateMessageRequestParams



52):



53    # Call Claude using the Anthropic SDK



54    text = await chat(params.messages)



55



56    return CreateMessageResult(



57        role="assistant",



58        model=model,



59        content=TextContent(type="text", text=text),



60    )



61



62



63async def run():



64    async with stdio_client(server_params) as (read, write):



65        async with ClientSession(



66            read, write, sampling_callback=sampling_callback



67        ) as session:



68            await session.initialize()



69



70            result = await session.call_tool(



71                name="summarize",



72                arguments={"text_to_summarize": "lots of text"},



73            )



74            print(result.content)



75



76



77if __name__ == "__main__":



78    import asyncio



79



80    asyncio.run(run())



81
```

Was this helpful?
