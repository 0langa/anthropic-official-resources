Claude Platform

# Start building with Claude

Everything you need to integrate Claude into your applications. From first API call to production.

Search`Ctrl``K`

[Quickstart](https://platform.claude.com/docs/en/get-started)[Get API key](https://platform.claude.com/settings/keys)[API reference](https://platform.claude.com/docs/en/api/overview)

PythonTypeScriptGoJavaRubyPHPC#cURLCLI



```
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
  model="claude-opus-5",
  max_tokens=1024,
  messages=[{
    "role": "user",
    "content": "Hello, Claude"
  }]
)
for block in message.content:
    if block.type == "text":
        print(block.text)
```

Platform

## Choose how you build

Pick the developer surface that matches your approach, and the infrastructure that fits your stack.

### Messages

Direct model access. You construct every turn, manage conversation state, and write your own tool loop.

[Quickstart](https://platform.claude.com/docs/en/get-started)[API reference](https://platform.claude.com/docs/en/api/messages/create)[Client SDKs](https://platform.claude.com/docs/en/cli-sdks-libraries/overview)

### Managed Agents

Fully managed agent infrastructure. Deploy and manage autonomous agents in stateful sessions with persistent event history.

[Quickstart](https://platform.claude.com/docs/en/managed-agents/quickstart)[API reference](https://platform.claude.com/docs/en/api/beta/sessions)[Define your agent](https://platform.claude.com/docs/en/managed-agents/agent-setup)

Claude is also available on these cloud platforms:

[Amazon Bedrock](https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock)

[Google Cloud](https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai)

[Microsoft Foundry](https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry)

Developer journey

## From idea to production

Follow the lifecycle or jump to what you need.

MessagesManaged Agents

1. 1

   ### Get started

   [Quickstart](https://platform.claude.com/docs/en/get-started)

   [Get API key](https://platform.claude.com/settings/keys)

   [Choose a model](https://platform.claude.com/docs/en/models/overview)

   [Install an SDK](https://platform.claude.com/docs/en/cli-sdks-libraries/overview)

   [Try the API in playground](https://platform.claude.com/playground)
2. 2

   ### Build

   [Messages API](https://platform.claude.com/docs/en/api/messages/create)

   [Thinking](https://platform.claude.com/docs/en/build-with-claude/thinking)

   [Vision](https://platform.claude.com/docs/en/build-with-claude/vision)

   [Tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)

   [Web search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)

   [Code execution](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)

   [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

   [Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

   [Streaming](https://platform.claude.com/docs/en/build-with-claude/streaming)
3. 3

   ### Evaluate and ship

   [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)

   [Run evals](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

   [Batch testing](https://platform.claude.com/docs/en/build-with-claude/batch-processing)

   [Safety and guardrails](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/increase-consistency)

   [Rate limits and errors](https://platform.claude.com/docs/en/api/rate-limits)

   [Cost optimization](https://platform.claude.com/docs/en/about-claude/pricing)
4. 4

   ### Operate

   [Workspaces and admin](https://platform.claude.com/docs/en/build-with-claude/workspaces)

   [API key management](https://platform.claude.com/settings/keys)

   [Usage monitoring](https://platform.claude.com/docs/en/build-with-claude/usage-cost-api)

   [Model migration](https://platform.claude.com/docs/en/about-claude/models/migration-guide)

Models

## The Claude model family

Choose the right model for your use case.

![](https://platform.claude.com/images/dashboard-discovery/head.svg)

### [Fable 5.1](https://platform.claude.com/docs/en/models/fable-5-1/overview)

New

Most capableResearchMulti-day tasks

For demanding reasoning and long-horizon agentic work

![](https://platform.claude.com/images/dashboard-discovery/cursor.svg)

### [Opus 5](https://platform.claude.com/docs/en/models/opus-5/overview)

Complex projectsAgentsCoding

For complex agentic coding and enterprise work

![](https://platform.claude.com/images/dashboard-discovery/bubble.svg)

### [Sonnet 5](https://platform.claude.com/docs/en/models/sonnet-5/overview)

Everyday tasksWritingCost-efficient

The best combination of speed and intelligence

![](https://platform.claude.com/images/dashboard-discovery/bird.svg)

### [Haiku 4.5](https://platform.claude.com/docs/en/models/haiku-4-5/overview)

FastestLowest costHigh volume

The fastest model with near-frontier intelligence

Resources

## Keep learning



[Courses](https://academy.claude.com/courses)

Interactive courses to master Claude.



[Cookbook](https://platform.claude.com/cookbook)

Code samples and patterns.



[Quickstarts](https://github.com/anthropics/anthropic-quickstarts)

Deployable starter apps.



[What's new](https://platform.claude.com/docs/en/release-notes/overview)

Latest features and updates.



[Claude Code](https://code.claude.com/docs)

An agentic coding assistant in your terminal.


## TypeScript

```
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const msg = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 1024,
  messages: [{
    role: "user",
    content: "Hello, Claude"
  }],
});
for (const block of msg.content) {
  if (block.type === "text") {
    console.log(block.text);
  }
}
```


## Go

```
import anthropic "github.com/anthropics/anthropic-sdk-go"

client := anthropic.NewClient()
msg, _ := client.Messages.New(
  context.TODO(),
  anthropic.MessageNewParams{
    Model:     anthropic.ModelClaudeOpus5,
    MaxTokens: 1024,
    Messages: []anthropic.MessageParam{
      anthropic.NewUserMessage(
        anthropic.NewTextBlock("Hello, Claude"),
      ),
    },
  },
)
for _, block := range msg.Content {
  if textBlock, ok := block.AsAny().(anthropic.TextBlock); ok {
    fmt.Println(textBlock.Text)
  }
}
```


## Java

```
import com.anthropic.client.okhttp.AnthropicOkHttpClient;

var client = AnthropicOkHttpClient
  .fromEnv();

var msg = client.messages().create(
  MessageCreateParams.builder()
    .model("claude-opus-5")
    .maxTokens(1024)
    .addUserMessage("Hello, Claude")
    .build()
);
for (var block : msg.content()) {
  block.text().ifPresent(
    textBlock -> System.out.println(textBlock.text()));
}
```


## Ruby

```
require "anthropic"

client = Anthropic::Client.new

msg = client.messages.create(
  model: "claude-opus-5",
  max_tokens: 1024,
  messages: [{
    role: "user",
    content: "Hello, Claude"
  }]
)
msg.content.each do |block|
  puts block.text if block.type == :text
end
```


## PHP

```
use Anthropic\Client;

$client = new Client(
  apiKey: getenv("ANTHROPIC_API_KEY")
);

$message = $client->messages->create(
  model: "claude-opus-5",
  maxTokens: 1024,
  messages: [['role' => 'user',
    'content' => 'Hello, Claude']],
);
foreach ($message->content as $block) {
  if (isset($block->text)) {
    echo $block->text, PHP_EOL;
  }
}
```


## C#

```
using Anthropic;

var client = new AnthropicClient();

var msg = await client.Messages
  .Create(new() {
    Model = "claude-opus-5",
    MaxTokens = 1024,
    Messages = [new() {
      Role = Role.User,
      Content = "Hello, Claude"
    }]
  });
foreach (var block in msg.Content)
{
  if (block.TryPickText(out var textBlock))
  {
    Console.WriteLine(textBlock.Text);
  }
}
```


## cURL

```
curl https://api.anthropic.com/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-opus-5",
    "max_tokens": 1024,
    "messages": [{
      "role": "user",
      "content": "Hello, Claude"
    }]
  }'
```


## CLI

```
ant messages create \
  --model claude-opus-5 \
  --max-tokens 1024 \
  --message '{
    role: user,
    content: "Hello, Claude"
  }'
```


## Managed Agents

1. 1

   ### Get started

   [Quickstart](https://platform.claude.com/docs/en/managed-agents/quickstart)

   [Get API key](https://platform.claude.com/settings/keys)

   [Build in Console](https://platform.claude.com/docs/en/managed-agents/onboarding)
2. 2

   ### Define your agent

   [Agent setup](https://platform.claude.com/docs/en/managed-agents/agent-setup)

   [Tools](https://platform.claude.com/docs/en/managed-agents/tools)

   [Tool permissions](https://platform.claude.com/docs/en/managed-agents/permission-policies)
3. 3

   ### Run sessions

   [Streaming and events](https://platform.claude.com/docs/en/managed-agents/events-and-streaming)

   [Sessions API reference](https://platform.claude.com/docs/en/api/beta/sessions)
4. 4

   ### Operate

   [Workspaces and admin](https://platform.claude.com/docs/en/build-with-claude/workspaces)

   [API key management](https://platform.claude.com/settings/keys)

   [Usage monitoring](https://platform.claude.com/docs/en/build-with-claude/usage-cost-api)
