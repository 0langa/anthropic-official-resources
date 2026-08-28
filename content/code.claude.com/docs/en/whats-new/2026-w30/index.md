# Week 30 · July 20–24, 2026
Source: https://code.claude.com/docs/en/whats-new/2026-w30

Opus 5 becomes the default Opus model, Claude Code Desktop adds an iOS Simulator pane, and the Claude Security plugin scans your code for vulnerabilities.

<div>
  <span>Releases <a href="/docs/en/changelog#2-1-214">v2.1.214 → v2.1.219</a></span>
  <span>3 features · July 20–24</span>
</div>

<div>
  <div>
    <span>Claude Opus 5</span>
    <span>new model</span>
  </div>

  <p>Claude Opus 5 is the new default Opus model in Claude Code. It's the default on Max, Team Premium, Enterprise pay-as-you-go, and the Anthropic API, and on Claude Platform on AWS, Amazon Bedrock, and Google Cloud's Agent Platform. On the Anthropic API and on Max, Team, and Enterprise plans, Opus 5 runs with a <a href="/docs/en/model-config#extended-context">1M-token context window</a>; on Amazon Bedrock and Google Cloud's Agent Platform, select the 1M model variant. Fast mode moves to Opus 5 at \$10/\$50 per MTok. Requires v2.1.219 or later.</p>

  <Frame>
    <video />
  </Frame>

  <p>Switch to Opus 5 by name, or pick it from the model picker:</p>

  ```text Claude Code theme={null}
  > /model claude-opus-5
  ```

  <a href="/docs/en/model-config#available-models">Model configuration</a>
</div>

<div>
  <div>
    <span>iOS Simulator in Claude Code Desktop</span>
    <span>Desktop</span>
  </div>

  <p>Claude Code Desktop on macOS gets an iOS Simulator pane, in public beta on Pro, Max, and Team plans. When Claude builds, launches, or checks your app in a simulator, the pane opens next to the conversation and streams the device screen live, so you can watch Claude tap through the app to verify its changes or drive the device yourself. Requires Xcode with the iOS platform installed, and Claude Desktop v1.24012.0 or later.</p>

  <Frame>
    <img alt="Claude Code Desktop with the iOS Simulator pane showing an iPhone app next to the conversation" />
  </Frame>

  <p>Ask Claude to run or test your app, and the pane opens when the app launches:</p>

  ```text Claude Code theme={null}
  > Build the app and run it in the simulator to check the onboarding flow.
  ```

  <a href="/docs/en/desktop-ios-simulator#run-your-app-in-the-simulator">Test iOS apps in the simulator</a>
</div>

<div>
  <div>
    <span>Claude Security plugin</span>
    <span>plugin</span>
  </div>

  <p>The Claude Security plugin runs a multi-agent vulnerability scan of your codebase inside a Claude Code session: agents map your architecture, build a threat model, hunt for vulnerabilities, and independently review every finding before writing the report to a <code>CLAUDE-SECURITY-\<timestamp>/</code> directory. Scan a whole repository or only a branch's diff, a pull request, or a single commit, then turn the findings you choose into reviewed patches that you apply yourself.</p>

  <p>Install the plugin from the official Anthropic marketplace, run <code>/reload-plugins</code>, then start a scan with <code>/claude-security</code>:</p>

  ```text Claude Code theme={null}
  > /plugin install claude-security@claude-plugins-official
  ```

  <a href="/docs/en/claude-security#scan-and-fix-your-codebase">Scan and fix your codebase</a>
</div>

<div>
  <p>Other wins</p>

  <div>
    <div><a href="/docs/en/code-review#review-a-diff-locally"><code>/code-review</code></a> now runs as a background subagent with its own context window, so review work stays out of your conversation and the findings arrive when it completes</div>
    <div><code>/verify</code>, <code>/code-review</code>, and <code>/deep-research</code> run only when you invoke them; Claude no longer launches them on its own</div>
    <div><a href="/docs/en/interactive-mode#emoji-shortcodes">Emoji shortcodes</a> autocomplete in the prompt input: type <code>:heart:</code> to insert an emoji, or two or more characters after <code>:</code> for suggestions; turn it off with <code>emojiCompletionEnabled</code></div>
    <div>Skills with <code>context: fork</code> <a href="/docs/en/skills#run-skills-in-a-subagent">run in the background</a> by default, and <code>background: false</code> in the skill's frontmatter waits for the result in the same turn</div>
    <div>A session runs up to 20 subagents concurrently by default; change the <a href="/docs/en/sub-agents#concurrent-subagent-limit">limit</a> with <code>CLAUDE\_CODE\_MAX\_CONCURRENT\_SUBAGENTS</code></div>
    <div>`--max-budget-usd` now enforces the cap on subagents: once spend reaches it, Claude can't start more and running background subagents stop</div>
    <div>New <a href="/docs/en/sandboxing#disable-filesystem-isolation"><code>sandbox.filesystem.disabled</code></a> setting skips filesystem isolation while keeping network egress control</div>
    <div>In auto mode, the checks for dangerous <code>rm</code> commands, background jobs, and suspicious Windows paths no longer open permission dialogs; the auto-mode classifier adjudicates them instead</div>
    <div>Bash permission checks fail closed on more shell forms, including file-descriptor redirects, Zsh variable subscripts in <code>\[\[ ]]</code> comparisons, <code>help</code> and <code>man</code> invocations that could run unsafe options, and commands over 10,000 characters</div>
    <div><a href="/docs/en/fast-mode">Fast mode</a> no longer supports Opus 4.7: <code>/fast</code> now applies to Opus 5 and Opus 4.8</div>
    <div>Long-running tool calls emit a periodic progress heartbeat instead of going silent</div>
  </div>
</div>

[Full changelog for v2.1.214–v2.1.219 →](/docs/en/changelog#2-1-214)
