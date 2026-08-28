# Week 16 · April 13–17, 2026
Source: https://code.claude.com/docs/en/whats-new/2026-w16

Claude Opus 4.7 with the new xhigh effort level, Routines on Claude Code on the web, mobile push notifications that ping your phone when Claude needs you, a /usage breakdown that shows what's driving your limits, and native binaries replacing the bundled JavaScript.

<div>
  <span>Releases <a href="/docs/en/changelog#2-1-105">v2.1.105 → v2.1.113</a></span>
  <span>5 features · April 13–17</span>
</div>

<div>
  <div>
    <span>Claude Opus 4.7</span>
    <span>new model</span>
  </div>

  <p>Anthropic's strongest coding model yet is now the default on Max and Team Premium, and available everywhere else from <code>/model</code>. It adds a new <code>xhigh</code> effort level that sits between <code>high</code> and <code>max</code>: best results for most coding and agentic tasks, applied as the default the first time you switch to 4.7. <code>/effort</code> now opens an interactive arrow-key slider when you call it without arguments, so you can dial intelligence against speed without remembering the level names.</p>

  <p>Switch model and effort in one go:</p>

  ```text Claude Code theme={null}
  > /model opus
  > /effort xhigh
  ```

  <a href="/docs/en/model-config#adjust-effort-level">Model config: effort levels</a>
</div>

<div>
  <div>
    <span>Routines</span>
    <span>web</span>
  </div>

  <p>Templated cloud agents that fire on a schedule, a GitHub event, or an API call. Define a routine once on Claude Code on the web with a prompt, the repos it can touch, and the connectors it needs, then let PR-opened, release-published, or your own webhook trigger it without your machine running. The trigger picker now covers GitHub events with optional filters and gives every routine a tokened <code>/fire</code> endpoint for external systems.</p>

  <Frame>
    <img alt="Creating a routine on Claude Code on the web with schedule, GitHub event, and API triggers" />
  </Frame>

  <p>Create one from the web UI, or scaffold from your terminal:</p>

  ```text Claude Code theme={null}
  > /schedule daily PR review at 9am
  ```

  <a href="/docs/en/routines">Routines guide</a>
</div>

<div>
  <div>
    <span>/usage breakdown</span>
    <span>CLI</span>
  </div>

  <p>More visibility into where your Claude Code usage goes. <code>/usage</code> now shows what's driving your limits: parallel sessions, subagents, cache misses, and long context, each with a percentage of your last 24 hours and a tip to optimize it. Press <code>d</code> or <code>w</code> to switch between day and week views.</p>

  <Frame>
    <img alt="The /usage command showing a breakdown of what's contributing to limits usage" />
  </Frame>

  <p>Run it any time:</p>

  ```text Claude Code theme={null}
  > /usage
  ```

  <a href="/docs/en/commands">Commands reference</a>
</div>

<div>
  <div>
    <span>Mobile push notifications</span>
    <span>mobile</span>
  </div>

  <p>With <a href="/docs/en/remote-control">Remote Control</a> connected, Claude can send a push notification to your phone when a long task finishes or it needs a decision to keep going. Turn it on with "Push when Claude decides" in <code>/config</code>, or ask for one in your prompt. Useful when you kick off a long agent run and want to step away from the terminal.</p>

  <Frame>
    <video />
  </Frame>

  <p>Ask Claude to ping you when it's done:</p>

  ```text Claude Code theme={null}
  > notify me when the tests pass
  ```

  <a href="/docs/en/remote-control#mobile-push-notifications">Remote Control: mobile push notifications</a>
</div>

<div>
  <div>
    <span>Native binaries</span>
    <span>v2.1.113</span>
  </div>

  <p>The <code>claude</code> CLI now spawns a native per-platform binary instead of bundled JavaScript, so the installed <code>claude</code> command no longer invokes Node. The npm package pulls the right binary in through an optional dependency such as <code>@anthropic-ai/claude-code-darwin-arm64</code>, so your install command doesn't change. The standalone installer already shipped this binary; npm now matches it.</p>

  <p>Upgrade and check what you're running:</p>

  ```bash theme={null}
  claude update
  claude --version
  ```

  <a href="/docs/en/setup">Setup guide</a>
</div>

<div>
  <p>Other wins</p>

  <div>
    <div>New <a href="/docs/en/ultrareview"><code>/ultrareview</code></a>: comprehensive code review in the cloud using parallel multi-agent analysis and an adversarial critique pass. Run it bare to review your current branch, or <code>/ultrareview \<PR#></code> for a specific PR</div>
    <div><a href="/docs/en/permission-modes#eliminate-prompts-with-auto-mode">Auto mode</a> is now available for Max subscribers on Opus 4.7, and the <code>--enable-auto-mode</code> flag is no longer required</div>
    <div><a href="/docs/en/interactive-mode#session-recap">Session recap</a> shows a one-line summary of what happened while you were away; run <code>/recap</code> on demand or turn it off from <code>/config</code></div>
    <div>New <code>/tui</code> command and <code>tui</code> setting switch between classic and flicker-free rendering mid-conversation; focus view moved from <code>Ctrl+O</code> to its own <code>/focus</code> command</div>
    <div>Plugins can ship background watchers via a top-level <code>monitors</code> manifest key that auto-arms at session start or on skill invoke</div>
    <div>"Auto (match terminal)" option in <code>/theme</code> follows your terminal's dark/light mode</div>
    <div><code>/fewer-permission-prompts</code> scans your transcripts for common read-only Bash and MCP calls and proposes an allowlist for <code>.claude/settings.json</code></div>
    <div>Claude can now discover and run built-in commands like <code>/init</code>, <code>/review</code>, and <code>/security-review</code> via the Skill tool</div>
    <div><code>PreCompact</code> hooks can block compaction by exiting with code 2 or returning <code>"decision":"block"</code></div>
    <div><code>ENABLE\_PROMPT\_CACHING\_1H</code> opts API key, Amazon Bedrock, Google Cloud's Agent Platform, and Microsoft Foundry users into 1-hour prompt cache TTL</div>
    <div><code>sandbox.network.deniedDomains</code> setting carves specific domains out of a broader <code>allowedDomains</code> wildcard</div>
    <div><code>/undo</code> is now an alias for <code>/rewind</code>, and <code>/proactive</code> is an alias for <code>/loop</code></div>
    <div>Hardened Bash permissions: deny rules now match through <code>env</code>/<code>sudo</code>/<code>watch</code> wrappers, and <code>Bash(find:\*)</code> allow rules no longer auto-approve <code>-exec</code> or <code>-delete</code></div>
  </div>
</div>

[Full changelog for v2.1.105–v2.1.113 →](/docs/en/changelog#2-1-105)
