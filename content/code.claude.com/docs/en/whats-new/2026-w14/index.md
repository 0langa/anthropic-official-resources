# Week 14 · March 30 – April 3, 2026
Source: https://code.claude.com/docs/en/whats-new/2026-w14

Computer use in the CLI, interactive in-product lessons, flicker-free rendering, per-tool MCP result-size overrides, and plugin executables on PATH.

<div>
  <span>Releases <a href="/docs/en/changelog#2-1-86">v2.1.86 → v2.1.91</a></span>
  <span>5 features · March 30 – April 3</span>
</div>

<div>
  <div>
    <span>Computer use in the CLI</span>
    <span>research preview</span>
  </div>

  <p>Last week computer use landed in the Desktop app. This week it's in the CLI: Claude can open native apps, click through UI, test its own changes, and fix what breaks, all from your terminal. Web apps already had verification loops; native iOS, macOS, and other GUI-only apps didn't. Now they do. Best for closing the loop on apps and tools where there's no API to call. Still early; expect rough edges.</p>

  <Frame>
    <video />
  </Frame>

  <p>Requires macOS and a Pro or Max plan; otherwise, <code>computer-use</code> won't appear in <code>/mcp</code>. Run <code>/mcp</code>, find <code>computer-use</code>, and toggle it on. Then ask Claude to verify a change end to end:</p>

  ```text title="Claude Code" wrap theme={null}
  Open the iOS simulator, tap through onboarding, and screenshot each step
  ```

  <a href="/docs/en/computer-use">Computer use guide</a>
</div>

<div>
  <div>
    <span>/powerup</span>
    <span>v2.1.90</span>
  </div>

  <p>Interactive lessons that teach Claude Code features through animated demos, right inside your terminal. Claude Code releases frequently, and features that would have changed how you work last month can slip by. Run <code>/powerup</code> once and you'll know what's there.</p>

  <Frame>
    <video />
  </Frame>

  <p>Run it:</p>

  ```text title="Claude Code" wrap theme={null}
  /powerup
  ```

  <a href="/docs/en/commands">Commands reference</a>
</div>

<div>
  <div>
    <span>Flicker-free rendering</span>
    <span>v2.1.89</span>
  </div>

  <p>Opt into a new alt-screen renderer with virtualized scrollback. The prompt input stays pinned to the bottom, mouse selection works across long conversations, and the flicker on redraw is gone. Unset <code>CLAUDE\_CODE\_NO\_FLICKER</code> to roll back.</p>

  <Frame>
    <video />
  </Frame>

  <p>Set the env var and restart Claude Code:</p>

  ```bash theme={null}
  export CLAUDE_CODE_NO_FLICKER=1
  claude
  ```

  <a href="/docs/en/fullscreen">Fullscreen rendering</a>
</div>

<div>
  <div>
    <span>MCP result-size override</span>
    <span>v2.1.91</span>
  </div>

  <p>MCP server authors can now raise the truncation cap on a specific tool by setting <code>anthropic/maxResultSizeChars</code> in the tool's <code>tools/list</code> entry, up to a hard ceiling of 500K characters. The cap used to be global, so tools that occasionally returned inherently large payloads like database schemas or full file trees hit the default limit and got persisted to disk with a file reference. Per-tool overrides keep those results inline when the tool really needs them.</p>

  <p>Annotate the tool in your server's <code>tools/list</code> response:</p>

  ```json highlight={5} theme={null}
  {
    "name": "get_schema",
    "description": "Returns the full database schema",
    "_meta": {
      "anthropic/maxResultSizeChars": 500000
    }
  }
  ```

  <a href="/docs/en/mcp#raise-the-limit-for-a-specific-tool">MCP reference</a>
</div>

<div>
  <div>
    <span>Plugin executables on PATH</span>
    <span>v2.1.91</span>
  </div>

  <p>Place an executable in a <code>bin/</code> directory at your plugin root and Claude Code adds that directory to the Bash tool's <code>PATH</code> while the plugin is enabled. Claude can then invoke the binary as a bare command from any Bash tool call, with no absolute path or wrapper script needed. Handy for packaging CLI helpers next to the commands, agents, and hooks that call them.</p>

  <p>Add a <code>bin/</code> directory at the plugin root:</p>

  ```text highlight={4, 5} theme={null}
  my-plugin/
  ├── .claude-plugin/
  │   └── plugin.json
  └── bin/
      └── my-tool
  ```

  <a href="/docs/en/plugins-reference#file-locations-reference">Plugins reference</a>
</div>

<div>
  <p>Other wins</p>

  <div>
    <div>Auto mode follow-ups: new <code>PermissionDenied</code> hook fires on classifier denials (return <code>retry: true</code> to let Claude try a different approach), and <code>/permissions</code> → Recently denied lets you retry manually with <code>r</code></div>
    <div>New <code>defer</code> value for <code>permissionDecision</code> in <code>PreToolUse</code> hooks: <code>-p</code> sessions pause at a tool call and exit with a <code>deferred\_tool\_use</code> payload so an SDK app or custom UI can surface it, then resume with <code>--resume</code></div>
    <div><code>/buddy</code>: hatch a small creature that watches you code. An April Fools' joke, no longer available</div>
    <div><code>disableSkillShellExecution</code> setting blocks inline shell from skills, custom commands, and plugin commands</div>
    <div>Edit tool now works on files viewed via <code>cat</code> or <code>sed -n</code> without a separate Read</div>
    <div>Hook output over 50K saved to disk with a path + preview instead of injected into context</div>
    <div>Thinking summaries off by default in interactive sessions (<code>showThinkingSummaries: true</code> to restore)</div>
    <div>Voice mode: push-to-talk modifier combos, Windows WebSocket, macOS Apple Silicon mic permission</div>
    <div><code>claude-cli://</code> deep links accept multi-line prompts (encoded <code>%0A</code>)</div>
  </div>
</div>

[Full changelog for v2.1.86–v2.1.91 →](/docs/en/changelog#2-1-86)
