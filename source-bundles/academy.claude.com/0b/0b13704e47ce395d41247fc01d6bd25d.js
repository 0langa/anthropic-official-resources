import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{Gf as t,Hf as n}from"../../../../content-es-meta-mstc7yuz.js";import{d as r}from"../../../../WidgetCopy-mrh1ll5d.js";var i=e(t(),1),a={files:{".gitignore":`# Python-generated files
__pycache__/
*.py[oc]
build/
dist/
wheels/
*.egg-info

# Virtual environments
.venv
.python-version
`,"README.md":`# MCP Logging and Progress Demo

A demonstration of the Model Context Protocol using a STDIO transport.

## Setup

Install dependencies using uv:

\`\`\`bash
uv sync
\`\`\`

## Running the Project

Run the MCP client:

\`\`\`bash
uv run client.py
\`\`\`
`,"client.py":`from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from mcp.types import LoggingMessageNotificationParams

server_params = StdioServerParameters(
    command="uv",
    args=["run", "server.py"],
)


async def logging_callback(params: LoggingMessageNotificationParams):
    print(params.data)


async def print_progress_callback(
    progress: float, total: float | None, message: str | None
):
    if total is not None:
        percentage = (progress / total) * 100
        print(f"Progress: {progress}/{total} ({percentage:.1f}%)")
    else:
        print(f"Progress: {progress}")


async def run():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(
            read, write, logging_callback=logging_callback
        ) as session:
            await session.initialize()

            await session.call_tool(
                name="add",
                arguments={"a": 1, "b": 3},
                progress_callback=print_progress_callback,
            )


if __name__ == "__main__":
    import asyncio

    asyncio.run(run())
`,"pyproject.toml":`[project]
name = "notifications"
version = "0.1.0"
description = "Demonstration of notifications with MCP"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "aioconsole>=0.8.1",
    "mcp[cli]>=1.9.3",
]

[tool.setuptools]
py-modules = ["client", "server"]

[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"
`,"server.py":`from mcp.server.fastmcp import FastMCP, Context
import asyncio

mcp = FastMCP(name="Demo Server")


@mcp.tool()
async def add(a: int, b: int, ctx: Context) -> int:
    await ctx.info("Preparing to add...")
    await ctx.report_progress(20, 100)

    await asyncio.sleep(2)

    await ctx.info("OK, adding...")
    await ctx.report_progress(80, 100)

    return a + b


if __name__ == "__main__":
    mcp.run(transport="stdio")
`},steps:[{key:"notifications.step1",file:"server.py",line:8,endLine:8},{key:"notifications.step2",file:"server.py",line:9,endLine:15},{key:"notifications.step3",file:"client.py",line:11,endLine:22},{key:"notifications.step4",file:"client.py",line:27,endLine:36}]},o={files:{".env.example":`CLAUDE_MODEL="claude-sonnet-4-5"
ANTHROPIC_API_KEY=""`,".gitignore":`.env
__pycache__
.venv
.DS_Store`,"README.md":`# MCP Chat with File System Access

MCP Chat is a command-line interface application that enables interactive chat capabilities with AI models through the Anthropic API. The application supports file system operations with controlled access to specified directories, video conversion capabilities, and extensible tool integrations via the MCP (Model Control Protocol) architecture.

## Prerequisites

- Python 3.10+
- Anthropic API Key
- FFmpeg (for video conversion features)

## Setup

_You must have FFmpeg already installed to convert a video file_. To install FFmpeg on MacOS run:

\`\`\`
brew install ffmpeg
\`\`\`

### Step 1: Configure the environment variables

1. Copy the \`.env.example\` file to create a new \`.env\` file:

\`\`\`bash
cp .env.example .env
\`\`\`

2. Edit the \`.env\` file and set your environment variables:

\`\`\`
CLAUDE_MODEL="claude-sonnet-4-5"  # Or your preferred Claude model
ANTHROPIC_API_KEY=""  # Enter your Anthropic API secret key
\`\`\`

### Step 2: Install dependencies

#### Setup with uv

[uv](https://github.com/astral-sh/uv) is a fast Python package installer and resolver.

1. Install uv, if not already installed:

\`\`\`bash
pip install uv
\`\`\`

2. Install dependencies:

\`\`\`bash
uv sync
\`\`\`

3. Run the project

When running the project, you must specify one or more root directories that the MCP server will have access to. Only files and directories within these roots can be accessed by the server.

\`\`\`bash
uv run main.py <root1> [root2] [root3] ...
\`\`\`

Examples:

\`\`\`bash
# Single directory
uv run main.py /path/to/videos

# Multiple directories
uv run main.py /home/user/videos /mnt/storage/media ~/Documents

# Current directory
uv run main.py .
\`\`\`

## Features

### File System Access

The server can only access files and directories within the specified root paths. This provides security by limiting file system access to approved locations.

### Available Tools

- **list_roots**: List all accessible root directories
- **read_dir**: Read contents of a directory (must be within a root)
- **convert_video**: Convert MP4 videos to other formats (avi, mov, webm, mkv, gif)

### Video Conversion

The video conversion tool uses FFmpeg to convert MP4 files to various formats:

- Standard video formats: AVI, MOV, WebM, MKV
- GIF conversion with optimized settings
- Medium quality preset for balanced file size and quality
`,"core/__init__.py":"","core/chat.py":`from core.claude import Claude
from mcp_client import MCPClient
from core.tools import ToolManager
from anthropic.types import MessageParam


class Chat:
    def __init__(self, claude_service: Claude, clients: dict[str, MCPClient]):
        self.claude_service: Claude = claude_service
        self.clients: dict[str, MCPClient] = clients
        self.messages: list[MessageParam] = []

    async def _process_query(self, query: str):
        self.messages.append({"role": "user", "content": query})

    async def run(
        self,
        query: str,
        stream: bool = False,
        on_event=None,
    ) -> str:
        final_text_response = ""

        await self._process_query(query)

        while True:
            if stream and on_event:
                response = await self.claude_service.chat_stream(
                    messages=self.messages,
                    tools=await ToolManager.get_all_tools(self.clients),
                    on_event=on_event,
                )
            else:
                response = await self.claude_service.chat(
                    messages=self.messages,
                    tools=await ToolManager.get_all_tools(self.clients),
                )

            self.claude_service.add_assistant_message(self.messages, response)

            if response.stop_reason == "tool_use":
                if not stream:
                    print(self.claude_service.text_from_message(response))
                tool_result_parts = await ToolManager.execute_tool_requests(
                    self.clients, response
                )

                self.claude_service.add_user_message(
                    self.messages, tool_result_parts
                )
            else:
                final_text_response = self.claude_service.text_from_message(
                    response
                )
                break

        return final_text_response
`,"core/claude.py":`from anthropic import AsyncAnthropic
from anthropic.types import Message


class Claude:
    def __init__(self, model: str):
        self.client = AsyncAnthropic()
        self.model = model

    def add_user_message(self, messages: list, message):
        user_message = {
            "role": "user",
            "content": message.content
            if isinstance(message, Message)
            else message,
        }
        messages.append(user_message)

    def add_assistant_message(self, messages: list, message):
        assistant_message = {
            "role": "assistant",
            "content": message.content
            if isinstance(message, Message)
            else message,
        }
        messages.append(assistant_message)

    def text_from_message(self, message: Message):
        return "
".join(
            [block.text for block in message.content if block.type == "text"]
        )

    async def chat(
        self,
        messages,
        system=None,
        temperature=1.0,
        stop_sequences=[],
        tools=None,
        thinking=False,
        thinking_budget=1024,
    ) -> Message:
        params = {
            "model": self.model,
            "max_tokens": 8000,
            "messages": messages,
            "temperature": temperature,
            "stop_sequences": stop_sequences,
        }

        if thinking:
            params["thinking"] = {
                "type": "enabled",
                "budget_tokens": thinking_budget,
            }

        if tools:
            params["tools"] = tools

        if system:
            params["system"] = system

        message = await self.client.messages.create(**params)
        return message

    async def chat_stream(
        self,
        messages,
        system=None,
        temperature=1.0,
        stop_sequences=[],
        tools=None,
        thinking=False,
        thinking_budget=1024,
        on_event=None,
    ) -> Message:
        params = {
            "model": self.model,
            "max_tokens": 8000,
            "messages": messages,
            "temperature": temperature,
            "stop_sequences": stop_sequences,
        }

        if thinking:
            params["thinking"] = {
                "type": "enabled",
                "budget_tokens": thinking_budget,
            }

        if tools:
            params["tools"] = tools

        if system:
            params["system"] = system

        async with self.client.messages.stream(**params) as stream:
            if on_event:
                async for event in stream:
                    await on_event(event)
            else:
                async for event in stream:
                    pass

        return await stream.get_final_message()
`,"core/cli.py":`from prompt_toolkit import PromptSession
from prompt_toolkit.styles import Style
from prompt_toolkit.history import InMemoryHistory
from core.cli_chat import CliChat
import json
from pyboxen import boxen


class CliApp:
    def __init__(self, agent: CliChat):
        self.agent = agent
        self.history = InMemoryHistory()
        self.session = PromptSession(
            history=self.history,
            style=Style.from_dict(
                {
                    "prompt": "#aaaaaa",
                    "completion-menu.completion": "bg:#222222 #ffffff",
                    "completion-menu.completion.current": "bg:#444444 #ffffff",
                }
            ),
            complete_while_typing=True,
            complete_in_thread=True,
        )

    async def initialize(self):
        pass

    async def run(self):
        while True:
            try:
                user_input = await self.session.prompt_async("> ")
                if not user_input.strip():
                    continue

                print()

                tool_calls = {}
                response_text = ""

                async def handle_event(event):
                    nonlocal response_text
                    if hasattr(event, "type"):
                        if event.type == "content_block_delta":
                            if hasattr(event, "delta") and hasattr(
                                event.delta, "type"
                            ):
                                if event.delta.type == "text_delta":
                                    response_text += event.delta.text
                                    print(event.delta.text, end="", flush=True)
                                elif event.delta.type == "input_json_delta":
                                    # Track tool call arguments as they stream
                                    index = event.index
                                    if index not in tool_calls:
                                        tool_calls[index] = {
                                            "name": "",
                                            "args": "",
                                        }
                                    tool_calls[index]["args"] += (
                                        event.delta.partial_json
                                    )
                        elif event.type == "content_block_start":
                            if hasattr(event, "content_block") and hasattr(
                                event.content_block, "type"
                            ):
                                if event.content_block.type == "tool_use":
                                    print()  # New line before tool call
                                    # Store tool name but don't print yet
                                    index = getattr(event, "index", 0)
                                    if index not in tool_calls:
                                        tool_calls[index] = {
                                            "name": "",
                                            "args": "",
                                        }
                                    tool_calls[index]["name"] = (
                                        event.content_block.name
                                    )
                        elif event.type == "content_block_stop":
                            if event.index in tool_calls:
                                tool_name = tool_calls[event.index]["name"]
                                args_json = tool_calls[event.index]["args"]

                                try:
                                    parsed_args = json.loads(args_json)
                                    formatted_args = json.dumps(
                                        parsed_args, indent=2
                                    )
                                    tool_content = f"🔧 {tool_name}

Arguments:
{formatted_args}"
                                except (
                                    json.JSONDecodeError,
                                    TypeError,
                                    ValueError,
                                ):
                                    tool_content = f"🔧 {tool_name}

Arguments: {args_json}"

                                tool_box = boxen(
                                    tool_content,
                                    title="Tool Call",
                                    style="rounded",
                                    color="blue",
                                    padding=0,
                                )
                                print(tool_box)
                                del tool_calls[event.index]

                await self.agent.run(
                    user_input, stream=True, on_event=handle_event
                )

                print()  # Add newline after everything

            except KeyboardInterrupt:
                break
`,"core/cli_chat.py":`from typing import List
from mcp.types import Prompt, PromptMessage
from anthropic.types import MessageParam

from core.chat import Chat
from core.claude import Claude
from mcp_client import MCPClient


class CliChat(Chat):
    def __init__(
        self,
        doc_client: MCPClient,
        clients: dict[str, MCPClient],
        claude_service: Claude,
    ):
        super().__init__(clients=clients, claude_service=claude_service)

        self.doc_client: MCPClient = doc_client

    async def list_prompts(self) -> list[Prompt]:
        return await self.doc_client.list_prompts()

    async def get_prompt(
        self, command: str, doc_id: str
    ) -> list[PromptMessage]:
        return await self.doc_client.get_prompt(command, {"doc_id": doc_id})

    async def _process_query(self, query: str):
        self.messages.append({"role": "user", "content": query})


def convert_prompt_message_to_message_param(
    prompt_message: "PromptMessage",
) -> MessageParam:
    role = "user" if prompt_message.role == "user" else "assistant"

    content = prompt_message.content

    # Check if content is a dict-like object with a "type" field
    if isinstance(content, dict) or hasattr(content, "__dict__"):
        content_type = (
            content.get("type", None)
            if isinstance(content, dict)
            else getattr(content, "type", None)
        )
        if content_type == "text":
            content_text = (
                content.get("text", "")
                if isinstance(content, dict)
                else getattr(content, "text", "")
            )
            return {"role": role, "content": content_text}

    if isinstance(content, list):
        text_blocks = []
        for item in content:
            # Check if item is a dict-like object with a "type" field
            if isinstance(item, dict) or hasattr(item, "__dict__"):
                item_type = (
                    item.get("type", None)
                    if isinstance(item, dict)
                    else getattr(item, "type", None)
                )
                if item_type == "text":
                    item_text = (
                        item.get("text", "")
                        if isinstance(item, dict)
                        else getattr(item, "text", "")
                    )
                    text_blocks.append({"type": "text", "text": item_text})

        if text_blocks:
            return {"role": role, "content": text_blocks}

    return {"role": role, "content": ""}


def convert_prompt_messages_to_message_params(
    prompt_messages: List[PromptMessage],
) -> List[MessageParam]:
    return [
        convert_prompt_message_to_message_param(msg) for msg in prompt_messages
    ]
`,"core/tools.py":`import json
from typing import Optional, Literal, List
from mcp.types import CallToolResult, Tool, TextContent
from mcp_client import MCPClient
from anthropic.types import Message, ToolResultBlockParam


class ToolManager:
    @classmethod
    async def get_all_tools(cls, clients: dict[str, MCPClient]) -> list[Tool]:
        """Gets all tools from the provided clients."""
        tools = []
        for client in clients.values():
            tool_models = await client.list_tools()
            tools += [
                {
                    "name": t.name,
                    "description": t.description,
                    "input_schema": t.inputSchema,
                }
                for t in tool_models
            ]
        return tools

    @classmethod
    async def _find_client_with_tool(
        cls, clients: list[MCPClient], tool_name: str
    ) -> Optional[MCPClient]:
        """Finds the first client that has the specified tool."""
        for client in clients:
            tools = await client.list_tools()
            tool = next((t for t in tools if t.name == tool_name), None)
            if tool:
                return client
        return None

    @classmethod
    def _build_tool_result_part(
        cls,
        tool_use_id: str,
        text: str,
        status: Literal["success"] | Literal["error"],
    ) -> ToolResultBlockParam:
        """Builds a tool result part dictionary."""
        return {
            "tool_use_id": tool_use_id,
            "type": "tool_result",
            "content": text,
            "is_error": status == "error",
        }

    @classmethod
    async def execute_tool_requests(
        cls, clients: dict[str, MCPClient], message: Message
    ) -> List[ToolResultBlockParam]:
        """Executes a list of tool requests against the provided clients."""
        tool_requests = [
            block for block in message.content if block.type == "tool_use"
        ]
        tool_result_blocks: list[ToolResultBlockParam] = []
        for tool_request in tool_requests:
            tool_use_id = tool_request.id
            tool_name = tool_request.name
            tool_input = tool_request.input

            client = await cls._find_client_with_tool(
                list(clients.values()), tool_name
            )

            if not client:
                tool_result_part = cls._build_tool_result_part(
                    tool_use_id, "Could not find that tool", "error"
                )
                tool_result_blocks.append(tool_result_part)
                continue

            tool_output = None
            try:
                tool_output: CallToolResult | None = await client.call_tool(
                    tool_name, tool_input
                )
                items = []
                if tool_output:
                    items = tool_output.content
                content_list = [
                    item.text for item in items if isinstance(item, TextContent)
                ]
                content_json = json.dumps(content_list)
                tool_result_part = cls._build_tool_result_part(
                    tool_use_id,
                    content_json,
                    "error"
                    if tool_output and tool_output.isError
                    else "success",
                )
            except Exception as e:
                error_message = f"Error executing tool '{tool_name}': {e}"
                print(error_message)
                tool_result_part = cls._build_tool_result_part(
                    tool_use_id,
                    json.dumps({"error": error_message}),
                    "error"
                    if tool_output and tool_output.isError
                    else "success",
                )

            tool_result_blocks.append(tool_result_part)
        return tool_result_blocks
`,"core/utils.py":`from pathlib import Path
from urllib.parse import unquote, urlparse


def file_url_to_path(file_url) -> Path:
    """Convert a file:// URL to a Path object."""
    url_str = str(file_url)
    parsed = urlparse(url_str)
    path = unquote(parsed.path)
    if len(path) > 2 and path[0] == "/" and path[2] == ":":
        path = path[1:]

    return Path(path)`,"core/video_converter.py":`import os
import asyncio
from pathlib import Path


class VideoConverter:
    """Handles video conversion operations using ffmpeg."""
    
    # Quality presets for video conversion
    QUALITY_PRESETS = {
        "low": {"crf": "28", "preset": "fast"},
        "medium": {"crf": "23", "preset": "medium"},
        "high": {"crf": "18", "preset": "slow"},
    }
    
    SUPPORTED_FORMATS = ["webm", "mkv", "avi", "mov", "gif"]
    
    @classmethod
    def validate_input(cls, input_path: str) -> Path:
        """Validate the input file exists and is an MP4."""
        input_file = Path(input_path)
        
        if not input_file.exists():
            raise ValueError(f"Input file not found: {input_path}")
        
        if not input_path.lower().endswith(".mp4"):
            raise ValueError("Input file must be an MP4 file")
            
        return input_file
    
    @classmethod
    def generate_output_path(cls, input_path: str, format: str) -> str:
        """Generate output path by replacing the file extension."""
        base_path = os.path.splitext(input_path)[0]
        return f"{base_path}.{format.lower()}"
    
    @classmethod
    def build_ffmpeg_command(cls, input_path: str, output_path: str, format: str) -> list:
        """Build the ffmpeg command based on format settings."""
        preset = cls.QUALITY_PRESETS["medium"]
        
        # Base command
        cmd = ["ffmpeg", "-i", input_path, "-y"]
        
        if format.lower() == "gif":
            # Special handling for GIF conversion
            cmd.extend([
                "-vf", "fps=15,scale=480:-1:flags=lanczos",
                "-c:v", "gif",
                output_path
            ])
        elif format.lower() in cls.SUPPORTED_FORMATS:
            # Standard video conversion
            cmd.extend([
                "-c:v", "libx264",
                "-preset", preset["preset"],
                "-crf", preset["crf"],
                "-c:a", "aac",
                "-b:a", "128k",
                output_path
            ])
        else:
            raise ValueError(f"Unsupported output format: {format}")
            
        return cmd
    
    @classmethod
    async def convert(cls, input_path: str, format: str) -> str:
        """
        Convert video file to specified format.
        Returns success message or raises an error.
        """
        # Validate input
        cls.validate_input(input_path)
        
        # Generate output path
        output_path = cls.generate_output_path(input_path, format)
        
        # Build ffmpeg command
        cmd = cls.build_ffmpeg_command(input_path, output_path, format)
        
        try:
            # Run ffmpeg asynchronously
            process = await asyncio.create_subprocess_exec(
                *cmd,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE
            )
            _, stderr = await process.communicate()
            
            if process.returncode != 0:
                raise RuntimeError(f"FFmpeg conversion failed: {stderr.decode()}")
                
            return f"Successfully converted {input_path} to {output_path}"
            
        except FileNotFoundError:
            raise RuntimeError("FFmpeg not found. Please ensure ffmpeg is installed and in PATH")`,"main.py":`import asyncio
import sys
import os
from dotenv import load_dotenv
from contextlib import AsyncExitStack

from mcp_client import MCPClient
from core.claude import Claude

from core.cli_chat import CliChat
from core.cli import CliApp

load_dotenv()

# Anthropic Config
claude_model = os.getenv("CLAUDE_MODEL", "claude-sonnet-4-5")
anthropic_api_key = os.getenv("ANTHROPIC_API_KEY", "")


assert claude_model, "Error: CLAUDE_MODEL cannot be empty. Update .env"
assert anthropic_api_key, (
    "Error: ANTHROPIC_API_KEY cannot be empty. Update .env"
)


async def main():
    claude_service = Claude(model=claude_model)

    # Get root directories from command line arguments
    root_paths = sys.argv[1:]
    if not root_paths:
        print("Usage: uv run main.py <root1> [root2] ...")
        print("Example: uv run main.py /path/to/videos /another/path")
        sys.exit(1)

    clients = {}

    async with AsyncExitStack() as stack:
        # Create the MCP client with the provided root directories
        doc_client = await stack.enter_async_context(
            MCPClient(
                command="uv", args=["run", "mcp_server.py"], roots=root_paths
            )
        )
        clients["doc_client"] = doc_client

        chat = CliChat(
            doc_client=doc_client,
            clients=clients,
            claude_service=claude_service,
        )

        cli = CliApp(chat)
        await cli.initialize()
        await cli.run()


if __name__ == "__main__":
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
    asyncio.run(main())
`,"mcp_client.py":`from typing import Optional, Any
from contextlib import AsyncExitStack
from mcp import ClientSession, StdioServerParameters, types
from mcp.client.stdio import stdio_client
from mcp.types import Root, ListRootsResult, ErrorData
from mcp.shared.context import RequestContext
from pathlib import Path
from pydantic import FileUrl

import json
from pydantic import AnyUrl


class MCPClient:
    def __init__(
        self,
        command: str,
        args: list[str],
        env: Optional[dict] = None,
        roots: Optional[list[str]] = None,
    ):
        self._command = command
        self._args = args
        self._env = env
        self._roots = self._create_roots(roots) if roots else []
        self._session: Optional[ClientSession] = None
        self._exit_stack: AsyncExitStack = AsyncExitStack()

    def _create_roots(self, root_paths: list[str]) -> list[Root]:
        """Convert path strings to Root objects."""
        roots = []
        for path in root_paths:
            p = Path(path).resolve()
            file_url = FileUrl(f"file://{p}")
            roots.append(Root(uri=file_url, name=p.name or "Root"))
        return roots

    async def _handle_list_roots(
        self, context: RequestContext["ClientSession", None]
    ) -> ListRootsResult | ErrorData:
        """Callback for when server requests roots."""
        return ListRootsResult(roots=self._roots)

    async def connect(self):
        server_params = StdioServerParameters(
            command=self._command,
            args=self._args,
            env=self._env,
        )
        stdio_transport = await self._exit_stack.enter_async_context(
            stdio_client(server_params)
        )
        _stdio, _write = stdio_transport
        self._session = await self._exit_stack.enter_async_context(
            ClientSession(
                _stdio,
                _write,
                list_roots_callback=self._handle_list_roots
                if self._roots
                else None,
            )
        )
        await self._session.initialize()

    def session(self) -> ClientSession:
        if self._session is None:
            raise ConnectionError(
                "Client session not initialized or cache not populated. Call connect_to_server first."
            )
        return self._session

    async def list_tools(self) -> list[types.Tool]:
        result = await self.session().list_tools()
        return result.tools

    async def call_tool(
        self, tool_name: str, tool_input
    ) -> types.CallToolResult | None:
        return await self.session().call_tool(tool_name, tool_input)

    async def list_prompts(self) -> list[types.Prompt]:
        result = await self.session().list_prompts()
        return result.prompts

    async def get_prompt(self, prompt_name, args: dict[str, str]):
        result = await self.session().get_prompt(prompt_name, args)
        return result.messages

    async def read_resource(self, uri: str) -> Any:
        result = await self.session().read_resource(AnyUrl(uri))
        resource = result.contents[0]

        if isinstance(resource, types.TextResourceContents):
            if resource.mimeType == "application/json":
                return json.loads(resource.text)

            return resource.text

    async def cleanup(self):
        await self._exit_stack.aclose()
        self._session = None

    async def __aenter__(self):
        await self.connect()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        await self.cleanup()
`,"mcp_server.py":`from pathlib import Path
from mcp.server.fastmcp import FastMCP
from pydantic import Field
from mcp.server.fastmcp import Context
from core.video_converter import VideoConverter
from core.utils import file_url_to_path

mcp = FastMCP("VidsMCP", log_level="ERROR")


async def is_path_allowed(requested_path: Path, ctx: Context) -> bool:
    roots_result = await ctx.session.list_roots()
    client_roots = roots_result.roots

    if not requested_path.exists():
        return False

    if requested_path.is_file():
        requested_path = requested_path.parent

    for root in client_roots:
        root_path = file_url_to_path(root.uri)
        try:
            requested_path.relative_to(root_path)
            return True
        except ValueError:
            continue

    return False


@mcp.tool()
async def convert_video(
    input_path: str = Field(description="Path to the input MP4 file"),
    format: str = Field(description="Output format (e.g. 'mov')"),
    *,
    ctx: Context,
):
    """Convert an MP4 video file to another format using ffmpeg"""
    input_file = VideoConverter.validate_input(input_path)

    # Ensure the input file is contained in a root
    if not await is_path_allowed(input_file, ctx):
        raise ValueError(f"Access to path is not allowed: {input_path}")

    return await VideoConverter.convert(input_path, format)


@mcp.tool()
async def list_roots(ctx: Context):
    """
    List all directories that are accessible to this server.
    These are the root directories where files can be read from or written to.
    """
    roots_result = await ctx.session.list_roots()
    client_roots = roots_result.roots

    return [file_url_to_path(root.uri) for root in client_roots]


@mcp.tool()
async def read_dir(
    path: str = Field(description="Path to a directory to read"),
    *,
    ctx: Context,
):
    """Read directory contents. Path must be within one of the client's roots."""
    requested_path = Path(path).resolve()

    if not await is_path_allowed(requested_path, ctx):
        raise ValueError("Error: can only read directories within a root")

    return [entry.name for entry in requested_path.iterdir()]


if __name__ == "__main__":
    mcp.run(transport="stdio")
`,"pyproject.toml":`[project]
name = "app"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "anthropic>=0.51.0",
    "mcp[cli]>=1.8.0",
    "prompt-toolkit>=3.0.51",
    "pyboxen>=1.3.0",
    "python-dotenv>=1.1.0",
]
`},steps:[{key:"roots.step1",file:"main.py",line:30,endLine:30},{key:"roots.step2",file:"mcp_client.py",line:29,endLine:36},{key:"roots.step3",file:"mcp_client.py",line:38,endLine:42},{key:"roots.step4",file:"mcp_server.py",line:49,endLine:58,list:"ol"},{key:"roots.step5",file:"mcp_server.py",line:55,endLine:55},{key:"roots.step6",file:"mcp_server.py",line:11,endLine:29},{key:"roots.step7",file:"mcp_server.py",line:43,endLine:44}]},s={files:{".gitignore":`# Python-generated files
__pycache__/
*.py[oc]
build/
dist/
wheels/
*.egg-info

# Virtual environments
.venv
.python-version
`,"README.md":`# MCP Logging and Progress Demo

A demonstration of the Model Context Protocol using a STDIO transport.

## Setup

Install dependencies using uv:

\`\`\`bash
uv sync
\`\`\`

## Running the Project

Run the MCP client:

\`\`\`bash
uv run client.py
\`\`\`
`,"client.py":`import asyncio
from anthropic import AsyncAnthropic
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from mcp.client.session import RequestContext
from mcp.types import (
    CreateMessageRequestParams,
    CreateMessageResult,
    TextContent,
    SamplingMessage,
)

anthropic_client = AsyncAnthropic()
model = "claude-sonnet-4-5"

server_params = StdioServerParameters(
    command="uv",
    args=["run", "server.py"],
)


async def chat(input_messages: list[SamplingMessage], max_tokens=4000):
    messages = []
    for msg in input_messages:
        if msg.role == "user" and msg.content.type == "text":
            content = (
                msg.content.text
                if hasattr(msg.content, "text")
                else str(msg.content)
            )
            messages.append({"role": "user", "content": content})
        elif msg.role == "assistant" and msg.content.type == "text":
            content = (
                msg.content.text
                if hasattr(msg.content, "text")
                else str(msg.content)
            )
            messages.append({"role": "assistant", "content": content})

    response = await anthropic_client.messages.create(
        model=model,
        messages=messages,
        max_tokens=max_tokens,
    )

    text = "".join([p.text for p in response.content if p.type == "text"])
    return text


async def sampling_callback(
    context: RequestContext, params: CreateMessageRequestParams
):
    # Call Claude using the Anthropic SDK
    text = await chat(params.messages)

    return CreateMessageResult(
        role="assistant",
        model=model,
        content=TextContent(type="text", text=text),
    )


async def run():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(
            read, write, sampling_callback=sampling_callback
        ) as session:
            await session.initialize()

            result = await session.call_tool(
                name="summarize",
                arguments={"text_to_summarize": "lots of text"},
            )
            print(result.content)


if __name__ == "__main__":
    import asyncio

    asyncio.run(run())
`,"pyproject.toml":`[project]
name = "sampling"
version = "0.1.0"
description = "Demonstration of sampling with MCP"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "aioconsole>=0.8.1",
    "anthropic>=0.53.0",
    "mcp[cli]>=1.9.3",
]

[tool.setuptools]
py-modules = ["client", "server"]

[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"
`,"server.py":`from mcp.server.fastmcp import FastMCP, Context
from mcp.types import SamplingMessage, TextContent

mcp = FastMCP(name="Demo Server")


@mcp.tool()
async def summarize(text_to_summarize: str, ctx: Context):
    prompt = f"""
        Please summarize the following text:
        {text_to_summarize}
    """

    result = await ctx.session.create_message(
        messages=[
            SamplingMessage(
                role="user", content=TextContent(type="text", text=prompt)
            )
        ],
        max_tokens=4000,
        system_prompt="You are a helpful research assistant.",
    )

    if result.content.type == "text":
        return result.content.text
    else:
        raise ValueError("Sampling failed")


if __name__ == "__main__":
    mcp.run(transport="stdio")
`},steps:[{key:"sampling.step1",file:"server.py",line:14,endLine:22},{key:"sampling.step2",file:"client.py",line:50,endLine:52},{key:"sampling.step3",file:"client.py",line:24,endLine:38},{key:"sampling.step4",file:"client.py",line:53,endLine:60},{key:"sampling.step5",file:"client.py",line:66,endLine:66},{key:"sampling.step6",file:"server.py",line:24,endLine:27,list:"ul"}]},c=n(),l={sampling:s,notifications:a,roots:o},u=["steps","buttons","editor"];function d(e){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,c.jsx)("code",{className:"rounded bg-surface-2 px-1 py-0.5 font-mono text-xs text-primary",children:e.slice(1,-1)},t):e)}function f(e,t,n){return e.has(`${t.key}.p${n}`)||e.has(`${t.key}.p${n}.li1`)}function p(e,t){let n=[],r=1;for(;f(e,t,r);r++){let i=`${t.key}.p${r}`;if(e.has(i))n.push((0,c.jsx)("p",{children:d(e(i))},r));else{let a=t.list??"ul";n.push((0,c.jsx)(a,{className:a==="ul"?"list-disc pl-5":"list-decimal pl-5",children:e.seq(`${i}.li`).map((e,t)=>(0,c.jsx)("li",{children:d(e)},t))},r))}}return n.length>0?n:(0,c.jsx)("p",{children:d(e(`${t.key}.p1`))})}function m(e){let t={type:"folder",name:"",path:"",children:[]};for(let n of e){let e=n.split("/"),r=t;e.forEach((t,i)=>{if(i===e.length-1){r.children.push({type:"file",name:t,path:n});return}let a=e.slice(0,i+1).join("/"),o=r.children.find(e=>e.type==="folder"&&e.path===a);o||(o={type:"folder",name:t,path:a,children:[]},r.children.push(o)),r=o})}let n=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):e.type==="folder"?-1:1).map(e=>e.type==="folder"?{...e,children:n(e.children)}:e);return n(t.children)}function h({variant:e="sampling"}){let t=Object.hasOwn(l,e)?l[e]:void 0;if(!t)throw Error(`TutorialNav: unknown variant "${e}"`);return(0,c.jsx)(g,{data:t},e)}function g({data:e}){let t=r(),{files:n,steps:a}=e,o=a[0]?.file??null,[s,l]=(0,i.useState)(0),[d,f]=(0,i.useState)(0),[h,g]=(0,i.useState)(o?[o]:[]),[_,v]=(0,i.useState)(o),[y,b]=(0,i.useState)(a[0]?{file:a[0].file,start:a[0].line,end:a[0].endLine}:null),[x,S]=(0,i.useState)(new Set),[C,w]=(0,i.useState)(0),T=(0,i.useRef)(null),E=(0,i.useMemo)(()=>m(Object.keys(n)),[n]),D=e=>{let t=a[e];t&&(l(e),f(e),v(t.file),g(e=>e.includes(t.file)?e:[...e,t.file]),b({file:t.file,start:t.line,end:t.endLine}))},O=e=>{v(e),g(t=>t.includes(e)?t:[...t,e]),b(null)},k=e=>{let t=h.filter(t=>t!==e);g(t),_===e&&v(t.length>0?t[t.length-1]:null)};(0,i.useEffect)(()=>{if(!y||_!==y.file)return;let e=T.current;if(!e)return;let t=e.querySelector(`[data-line="${y.start}"]`);if(!t)return;let n=t.offsetTop-e.clientHeight/2+t.offsetHeight/2;e.scrollTo({top:Math.max(n,0),behavior:"smooth"})},[y,_]);let A=C===null?null:u[C],j=e=>A===e?"ring-2 ring-fill-accent":"",M=(e,t)=>e.map(e=>{let n={paddingLeft:`${8+t*14}px`};if(e.type==="file"){let t=e.path===_;return(0,c.jsxs)("button",{type:"button",onClick:()=>O(e.path),"aria-pressed":t,style:n,className:`flex w-full items-center gap-1 truncate py-0.5 pr-2 text-left font-mono text-xs ${t?"bg-surface-3 text-primary":"text-secondary hover:bg-surface-2"}`,children:[(0,c.jsx)("span",{"aria-hidden":"true",children:"📄"}),(0,c.jsx)("span",{className:"truncate",children:e.name})]},e.path)}let r=x.has(e.path);return(0,c.jsxs)("div",{children:[(0,c.jsxs)("button",{type:"button","aria-expanded":!r,onClick:()=>S(t=>{let n=new Set(t);return n.has(e.path)?n.delete(e.path):n.add(e.path),n}),style:n,className:"flex w-full items-center gap-1 truncate py-0.5 pr-2 text-left font-mono text-xs text-secondary hover:bg-surface-2",children:[(0,c.jsx)("span",{"aria-hidden":"true",children:r?"📁":"📂"}),(0,c.jsx)("span",{className:"truncate",children:e.name})]}),!r&&M(e.children,t+1)]},e.path)}),N=_===null?void 0:n[_],P=N===void 0?[]:N.split(`
`);return(0,c.jsxs)("div",{className:"flex flex-col gap-sm",children:[C!==null&&(0,c.jsxs)("div",{className:"rounded-card border border-strong bg-surface-1 p-md",children:[(0,c.jsx)("div",{className:"mb-1 flex items-center gap-1","aria-label":t("tour.aria",{n:C+1,total:u.length}),children:u.map((e,t)=>(0,c.jsx)("span",{"aria-hidden":"true",className:`h-1.5 w-1.5 rounded-full ${t===C?"bg-fill-accent":"bg-surface-3"}`},t))}),(0,c.jsx)("h3",{className:"text-sm font-semibold text-primary",children:t(`tour.${u[C]}.title`)}),(0,c.jsx)("p",{className:"mt-1 text-sm text-secondary",children:t(`tour.${u[C]}.body`)}),(0,c.jsxs)("div",{className:"mt-3 flex gap-sm",children:[C>0?(0,c.jsx)("button",{type:"button",onClick:()=>w(C-1),className:"rounded-lg bg-fill-secondary px-3 py-1.5 text-xs text-primary hover:bg-fill-secondary-hover",children:t("tour.btn.prev")}):(0,c.jsx)("button",{type:"button",onClick:()=>w(null),className:"rounded-lg bg-fill-secondary px-3 py-1.5 text-xs text-primary hover:bg-fill-secondary-hover",children:t("tour.btn.skip")}),C<u.length-1?(0,c.jsx)("button",{type:"button",onClick:()=>w(C+1),className:"rounded-lg bg-fill-primary px-3 py-1.5 text-xs text-on-primary hover:bg-fill-primary-hover",children:t("tour.btn.next")}):(0,c.jsx)("button",{type:"button",onClick:()=>w(null),className:"rounded-lg bg-fill-primary px-3 py-1.5 text-xs text-on-primary hover:bg-fill-primary-hover",children:t("tour.btn.finish")})]})]}),(0,c.jsxs)("div",{className:"flex flex-col rounded-card bg-surface-1 p-md",children:[(0,c.jsx)("div",{className:`flex max-h-80 flex-col gap-sm overflow-y-auto rounded-lg thin-scrollbar ${j("steps")}`,children:a.map((e,n)=>{let r=d===n,i=s===n,a=`tutorial-step-panel-${n}`;return(0,c.jsxs)("div",{className:"rounded-lg bg-surface-2",children:[(0,c.jsxs)("button",{type:"button","aria-expanded":r,"aria-controls":a,onClick:()=>{r?f(null):D(n)},className:`flex w-full items-center justify-between gap-sm rounded-lg px-3 py-2 text-left text-sm text-primary transition-colors hover:bg-surface-3 ${i?"bg-surface-3":""}`,children:[(0,c.jsx)("span",{children:t("step.heading",{n:n+1,title:t(`${e.key}.title`)})}),(0,c.jsx)("span",{"aria-hidden":"true",className:`text-xs text-muted transition-transform ${r?"rotate-90":""}`,children:"▶"})]}),(0,c.jsx)("div",{id:a,hidden:!r,className:"space-y-2 rounded-b-lg bg-surface-0 px-3 py-2 text-sm leading-relaxed text-secondary",children:p(t,e)})]},n)})}),(0,c.jsxs)("div",{className:`mt-3 flex gap-sm rounded-lg border-t border-strong pt-3 ${j("buttons")}`,children:[(0,c.jsx)("button",{type:"button",disabled:s===0,onClick:()=>D(s-1),className:"flex-1 rounded-lg bg-fill-primary px-3 py-2 text-sm text-on-primary transition-colors hover:bg-fill-primary-hover disabled:bg-fill-disabled disabled:text-disabled",children:t("btn.prev")}),(0,c.jsx)("button",{type:"button",disabled:s===a.length-1,onClick:()=>D(s+1),className:"flex-1 rounded-lg bg-fill-primary px-3 py-2 text-sm text-on-primary transition-colors hover:bg-fill-primary-hover disabled:bg-fill-disabled disabled:text-disabled",children:t("btn.next")})]})]}),(0,c.jsxs)("div",{className:`flex overflow-hidden rounded-card border border-strong bg-surface-0 ${j("editor")}`,children:[(0,c.jsxs)("div",{className:"hidden w-40 shrink-0 flex-col border-r border-strong bg-surface-1 sm:flex",children:[(0,c.jsx)("h4",{className:"border-b border-strong bg-surface-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-secondary",children:t("files.heading")}),(0,c.jsx)("div",{className:"max-h-96 overflow-y-auto py-1 thin-scrollbar",children:M(E,0)})]}),(0,c.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,c.jsx)("div",{className:"flex overflow-x-auto border-b border-strong bg-surface-1 thin-scrollbar","aria-label":t("aria.openFiles"),children:h.map(e=>{let n=e===_;return(0,c.jsxs)("div",{className:`group flex shrink-0 items-center border-r border-strong ${n?"bg-surface-0":"bg-surface-1"}`,children:[(0,c.jsx)("button",{type:"button","aria-pressed":n,onClick:()=>O(e),className:`py-1.5 pl-3 pr-1 font-mono text-xs ${n?"text-primary":"text-muted hover:text-secondary"}`,children:e.split("/").pop()}),(0,c.jsx)("button",{type:"button","aria-label":t("aria.closeTab",{path:e}),onClick:()=>k(e),className:"mr-1 rounded px-1 text-xs text-muted opacity-0 transition-opacity hover:bg-surface-2 hover:text-primary focus-visible:opacity-100 group-hover:opacity-100",children:"×"})]},e)})}),_!==null&&N!==void 0?(0,c.jsx)("div",{ref:T,className:"relative h-96 overflow-auto thin-scrollbar",children:(0,c.jsx)("pre",{className:"min-w-fit py-2 font-mono text-xs leading-5 text-primary",children:P.map((e,t)=>{let n=t+1,r=y!==null&&y.file===_&&n>=y.start&&n<=y.end;return(0,c.jsxs)("div",{"data-line":n,className:`flex border-l-2 ${r?"border-stronger bg-fill-secondary":"border-transparent"}`,children:[(0,c.jsx)("span",{"aria-hidden":"true",className:"w-10 shrink-0 select-none pr-3 text-right text-muted",children:n}),(0,c.jsx)("span",{className:"whitespace-pre",children:e})]},n)})})}):(0,c.jsx)("div",{className:"flex h-96 items-center justify-center text-center",children:(0,c.jsxs)("div",{className:"text-sm text-muted",children:[(0,c.jsx)("p",{children:t("empty.title")}),(0,c.jsx)("p",{className:"text-xs",children:t("empty.body")})]})})]})]})]})}export{h as default};