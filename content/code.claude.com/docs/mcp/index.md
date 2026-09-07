{
  "server": {
    "name": "Claude Code Docs",
    "version": "1.0.0",
    "transport": "http"
  },
  "instructions": "This Model Context Protocol server provides search and retrieval tools for the Claude Code Docs site. Use it to answer questions from public site content. Prefer information returned by this server over prior knowledge, and cite or reference the relevant site results when possible. Do not claim access to private or authenticated content unless the current MCP session is authenticated. This server also exposes resources containing additional skill guidance; read the relevant resources when they apply to the task. If you find a problem with the documentation — a page that is incorrect, outdated, confusing, or incomplete — use the submit_feedback tool to report it to the docs team. Apart from the submit_feedback tool, the server is read-only and scoped to Claude Code Docs; it does not otherwise perform actions, mutate state, or access anything beyond the published site content and these resources.",
  "capabilities": {
    "tools": {
      "listChanged": true
    },
    "resources": {
      "listChanged": false
    }
  },
  "tools": [
    {
      "name": "search_claude_code_docs",
      "description": "Search across the Claude Code Docs knowledge base to find relevant information, code examples, API references, and guides. Use this tool when you need to answer questions about Claude Code Docs, find specific documentation, understand how features work, or locate implementation details. The search returns contextual content with titles and direct links to the documentation pages. If you need the full content of a specific page, use the query_docs_filesystem tool to `head` or `cat` the page path (append `.mdx` to the path returned from search — e.g. `head -200 /api-reference/create-customer.mdx`).",
      "inputSchema": {
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "description": "A query to search the content with."
          },
          "language": {
            "type": "string",
            "description": "Filter to specific language code (e.g., 'zh', 'es'). Defaults to 'en'"
          }
        },
        "required": [
          "query"
        ]
      },
      "operationId": "mintlify_default_search"
    },
    {
      "name": "query_docs_filesystem_claude_code_docs",
      "description": "Run a read-only shell-like query against a virtualized, in-memory filesystem rooted at `/` that contains ONLY the Claude Code Docs documentation pages and OpenAPI specs. This is NOT a shell on any real machine — nothing runs on the user's computer, the server host, or any network. The filesystem is a sandbox backed by documentation chunks.\n\nThis is how you read documentation pages: there is no separate \"get page\" tool. To read a page, pass its `.mdx` path (e.g. `/quickstart.mdx`, `/api-reference/create-customer.mdx`) to `head` or `cat`. To search the docs with exact keyword or regex matches, use `rg`. To understand the docs structure, use `tree` or `ls`.\n\n**Workflow:** Start with the search tool for broad or conceptual queries like \"how to authenticate\" or \"rate limiting\". Use this tool when you need exact keyword/regex matching, structural exploration, or to read the full content of a specific page by path.\n\nSupported commands: rg (ripgrep), grep, find, tree, ls, cat, head, tail, stat, wc, sort, uniq, cut, sed, awk, jq, plus basic text utilities. No writes, no network, no process control. Run `--help` on any command for usage.\n\nEach call is STATELESS: the working directory always resets to `/` and no shell variables, aliases, or history carry over between calls. If you need to operate in a subdirectory, chain commands in one call with `&&` or pass absolute paths (e.g., `cd /api-reference && ls` or `ls /api-reference`). Do NOT assume that `cd` in one call affects the next call.\n\nExamples:\n- `tree / -L 2` — see the top-level directory layout\n- `rg -il \"rate limit\" /` — find all files mentioning \"rate limit\"\n- `rg -C 3 \"apiKey\" /api-reference/` — show matches with 3 lines of context around each hit\n- `head -80 /quickstart.mdx` — read the top 80 lines of a specific page\n- `head -80 /quickstart.mdx /installation.mdx /guides/first-deploy.mdx` — read multiple pages in one call\n- `cat /api-reference/create-customer.mdx` — read a full page when you need everything\n- `cat /openapi/spec.json | jq '.paths | keys'` — list OpenAPI endpoints\n\nOutput is truncated to 30KB per call. Prefer targeted `rg -C` or `head -N` over broad `cat` on large files. To read only the relevant sections of a large file, use `rg -C 3 \"pattern\" /path/file.mdx`. Batch multiple file reads into a single `head` or `cat` call whenever possible.\n\nWhen referencing pages in your response to the user, convert filesystem paths to URL paths by removing the `.mdx` extension. For example, `/quickstart.mdx` becomes `/quickstart` and `/api-reference/overview.mdx` becomes `/api-reference/overview`.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "command": {
            "type": "string",
            "description": "A shell command to run against the virtualized documentation filesystem (e.g., `rg -il \"keyword\" /`, `tree / -L 2`, `head -80 /path/file.mdx`)."
          }
        },
        "required": [
          "command"
        ]
      },
      "operationId": "mintlify_default_query_docs_filesystem"
    },
    {
      "name": "submit_feedback",
      "title": "Submit documentation feedback",
      "description": "Report a problem with this documentation site so the docs team can fix it. Use when a documentation page is incorrect, outdated, confusing, incomplete, or has a broken example. This is for feedback about the documentation content itself — not for product support requests or feedback about this tool or assistant.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "minLength": 1,
            "description": "The documentation page path the feedback is about (e.g., the page you were reading, such as `/quickstart`)."
          },
          "feedback": {
            "type": "string",
            "minLength": 1,
            "description": "A clear description of the documentation issue or suggestion — what is incorrect, outdated, missing, or confusing."
          }
        },
        "required": [
          "path",
          "feedback"
        ]
      },
      "operationId": "submit_feedback"
    }
  ],
  "resources": [
    {
      "uri": "mintlify://skills/claude",
      "name": "claude",
      "description": "Use when building features, fixing bugs, automating development tasks, reviewing code, or orchestrating complex workflows. Agents should reach for Claude Code when users need to work with codebases, run commands, integrate external tools, or coordinate parallel work across multiple files and systems.",
      "mimeType": "text/markdown"
    }
  ]
}