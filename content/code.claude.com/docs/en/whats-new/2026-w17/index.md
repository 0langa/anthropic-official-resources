# Week 17 · April 20–24, 2026
Source: https://code.claude.com/docs/en/whats-new/2026-w17

/ultrareview opens as a research preview, automatic session recaps when you return to a terminal, custom color themes you can build and ship in plugins, and a redesigned Claude Code on the web.

<div>
  <span>Releases <a href="/docs/en/changelog#2-1-114">v2.1.114 → v2.1.119</a></span>
  <span>4 features · April 20–24</span>
</div>

<div>
  <div>
    <span>/ultrareview</span>
    <span>research preview</span>
  </div>

  <p>Now in public research preview. Ultrareview runs a fleet of bug-hunting agents in the cloud against your branch or a PR, and findings land back in the CLI or Desktop automatically. Run it before merging critical changes such as auth or data migrations.</p>

  <Frame>
    <video />
  </Frame>

  <p>Review the branch you're on:</p>

  ```text Claude Code theme={null}
  > /ultrareview
  ```

  <p>Or point it at a PR:</p>

  ```text Claude Code theme={null}
  > /ultrareview 1234
  ```

  <a href="/docs/en/ultrareview">Ultrareview guide</a>
</div>

<div>
  <div>
    <span>Session recap</span>
    <span>CLI</span>
  </div>

  <p>Switch focus away from a session and come back to a one-line recap of what happened while you were gone. Helpful for staying in flow while running several Claude sessions at once.</p>

  <Frame>
    <video />
  </Frame>

  <p>Generate a recap on demand, or turn the automatic one off from <code>/config</code>:</p>

  ```text Claude Code theme={null}
  > /recap
  ```

  <a href="/docs/en/interactive-mode#session-recap">Interactive mode: session recap</a>
</div>

<div>
  <div>
    <span>Custom themes</span>
    <span>v2.1.118</span>
  </div>

  <p>Build and switch between named color themes from <code>/theme</code>, or hand-edit JSON files in <code>\~/.claude/themes/</code>. Each theme picks a base preset and overrides only the tokens you care about. Plugins can ship themes too.</p>

  <p>Open the theme picker and create a new one:</p>

  ```text Claude Code theme={null}
  > /theme
  ```

  <a href="/docs/en/terminal-config#create-a-custom-theme">Terminal config: create a custom theme</a>
</div>

<div>
  <div>
    <span>Claude Code on the web</span>
    <span>web</span>
  </div>

  <p>A new look for <a href="https://claude.ai/code">claude.ai/code</a> that matches the redesigned desktop app: sessions sidebar, drag-and-drop layout, and a refreshed routines view. Key parts were rebuilt for quicker responses and a more reliable experience.</p>

  <Frame>
    <img alt="Claude Code on the web redesign overview: new UI, speed and reliability, work across web, mobile, and CLI" />
  </Frame>

  <a href="/docs/en/claude-code-on-the-web">Claude Code on the web</a>
</div>

<div>
  <p>Other wins</p>

  <div>
    <div><a href="/docs/en/interactive-mode#vim-editor-mode">Vim visual mode</a>: press <code>v</code> for character selection or <code>V</code> for line selection in the prompt input, with operators and visual feedback</div>
    <div>Hooks can now call MCP tools directly via <a href="/docs/en/hooks#mcp-tool-hook-fields"><code>type: "mcp\_tool"</code></a>, so a hook can hit an already-connected server without spawning a process</div>
    <div><code>/cost</code> and <code>/stats</code> are merged into <a href="/docs/en/commands"><code>/usage</code></a>; the old names still work as typing shortcuts that open the relevant tab</div>
    <div><code>/config</code> changes (theme, editor mode, verbose, and similar) now persist to <code>\~/.claude/settings.json</code> and follow the same project/local/policy precedence as other <a href="/docs/en/settings">settings</a></div>
    <div><a href="/docs/en/sub-agents#fork-the-current-conversation">Forked subagents</a> can be enabled on external builds with <code>CLAUDE\_CODE\_FORK\_SUBAGENT=1</code>: a fork inherits your full conversation context instead of starting fresh</div>
    <div>Default <a href="/docs/en/model-config#adjust-effort-level">effort level</a> for Pro and Max subscribers on Opus 4.6 and Sonnet 4.6 is now <code>high</code> (was <code>medium</code>)</div>
    <div>Native macOS and Linux builds replace the <code>Glob</code> and <code>Grep</code> tools with embedded <code>bfs</code> and <code>ugrep</code> available through Bash, for faster searches without a separate tool round-trip</div>
    <div><code>--from-pr</code> now accepts GitLab merge request, Bitbucket pull request, and GitHub Enterprise PR URLs in addition to github.com</div>
    <div>Auto mode: include <code>"\$defaults"</code> in <a href="/docs/en/auto-mode-config"><code>autoMode.allow</code>, <code>soft\_deny</code>, or <code>environment</code></a> to add custom rules alongside the built-in list instead of replacing it</div>
    <div>New <a href="/docs/en/plugins/dependencies#tag-plugin-releases-for-version-resolution"><code>claude plugin tag</code></a> command creates release git tags for plugins with version validation</div>
    <div>Opus 4.7 sessions now compute against the model's native 1M context window, fixing inflated <code>/context</code> percentages and premature autocompaction</div>
    <div><code>/resume</code> on large sessions is up to 67% faster and now offers to summarize stale, large sessions before re-reading them</div>
  </div>
</div>

[Full changelog for v2.1.114–v2.1.119 →](/docs/en/changelog#2-1-114)
