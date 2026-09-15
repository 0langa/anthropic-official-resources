# Week 35 · August 24–28, 2026
Source: https://code.claude.com/docs/en/whats-new/2026-w35

Resume terminal sessions in the Claude Code Desktop app, review feedback reports that Claude drafts for you, and start a session in restricted mode.

<div>
  <span>Releases <a href="/docs/en/changelog#2-1-240">v2.1.240 → v2.1.250</a></span>
  <span>3 features · August 24–28</span>
</div>

<div>
  <div>
    <span>Resume terminal sessions in the Desktop app</span>
    <span>Desktop</span>
  </div>

  <p>Type <code>/resume</code> in the Claude Code Desktop prompt box to pick up any session you started from the CLI and continue it in the app with the full conversation and context intact. Search your sessions by title, folder, or branch, and preview where you left off before you resume.</p>

  <Frame>
    <video />
  </Frame>

  <p>In a Desktop session, run the command to list your terminal sessions:</p>

  ```text Claude Code theme={null}
  > /resume
  ```

  <p>Select a session and press <code>Enter</code>. The conversation opens in the app where you left off.</p>

  <a href="/docs/en/desktop#coming-from-the-cli">Move between the CLI and Desktop</a>
</div>

<div>
  <div>
    <span>Claude-drafted feedback</span>
    <span>CLI</span>
  </div>

  <p>When a tool keeps failing, Claude can't help with a request, or you point out a mistake, Claude now drafts a feedback report for you with the <code>SendFeedback</code> tool. A card above your prompt shows the draft, and you can review, send, or dismiss it from there. Nothing reaches Anthropic until you send it. Requires v2.1.238 or later.</p>

  <Frame>
    <img alt="A Claude Code session where Claude has drafted a bug report titled Sandbox image pull fails behind proxy, shown as a card above the prompt with options to review, send, or dismiss" />
  </Frame>

  <p>Run <code>/feedback</code> with no argument to open your queue of drafts from every session:</p>

  ```text Claude Code theme={null}
  > /feedback
  ```

  <p>Select a draft, then edit, send, or discard it. To turn drafting off, set <strong>Claude-drafted feedback</strong> to <code>off</code> in <code>/config</code>.</p>

  <a href="/docs/en/tools-reference#sendfeedback-tool-behavior">SendFeedback tool behavior</a>
</div>

<div>
  <div>
    <span>Restricted mode</span>
    <span>v2.1.248</span>
  </div>

  <p>Restricted mode starts Claude Code without the built-in tools that run commands or code. Use it when an evaluation harness drives <code>claude</code> on a shared machine. Start it with `--restricted` or set <code>CLAUDE\_CODE\_RESTRICTED=1</code>. Claude Code also removes <code>WebFetch</code>, confines the file tools to the working directories, loads only managed settings and `--settings`, and refuses the <code>bypassPermissions</code> permission mode.</p>

  <p>Run a non-interactive query without the command-running tools:</p>

  ```bash terminal theme={null}
  claude --restricted -p "review src/ for SQL injection risks"
  ```

  <p>To give Claude one of the removed tools back, list it in `--tools` together with the other built-in tools you want, for example `--tools "Bash,Read,Edit"`. `--tools` is an allowlist, and its <code>default</code> preset doesn't restore the removed tools.</p>

  <a href="/docs/en/cli-reference#cli-flags">CLI flags</a>
</div>

<div>
  <p>Other wins</p>

  <div>
    <div>Set the new <a href="/docs/en/settings-reference#modelpicker"><code>modelPicker</code></a> setting to extend or replace the <code>/model</code> picker's built-in list with your own ordered, labeled entries, including Amazon Bedrock or Google Cloud's Agent Platform model IDs</div>
    <div>Set <a href="/docs/en/prompt-caching#choose-the-ttl-yourself"><code>promptCacheTtl</code></a> to <code>1h</code> to keep a one-hour prompt cache on the main conversation when you use an API key or a cloud provider; <code>subagentPromptCacheTtl</code> sets the TTL for subagents and all other requests outside the main conversation</div>
    <div>On Pro, Max, Team, and Enterprise plans, <a href="/docs/en/costs#plan-usage-breakdown"><code>/usage</code></a> adds a Loops breakdown: run count, total tokens, tokens per run, and last run for the <code>/loop</code> and scheduled tasks that used the most tokens</div>
    <div>Organizations on contracted rates can set the <a href="/docs/en/costs#report-spend-at-your-contracted-rates"><code>modelPricing</code></a> managed setting so <code>/usage</code>, the status line, and OpenTelemetry report cost at those rates instead of list price</div>
    <div><code>/login</code> offers <strong>Sign in with your Console account</strong> under the <strong>Anthropic Console account</strong> option, so members of Console organizations that don't allow API keys can sign in without creating one</div>
    <div>Run <code>/permissions</code> and open the new <a href="/docs/en/auto-mode-config#edit-rules-from-permissions"><strong>Auto mode</strong> tab</a> to view and edit auto mode classifier rules without opening a settings file</div>
    <div>When auto mode is available, Bash permission prompts in the Manual and <code>acceptEdits</code> permission modes offer a <a href="/docs/en/permission-modes#switch-permission-modes"><strong>Yes, and switch to auto mode</strong></a> option; select it to approve the command and switch the session to auto mode</div>
    <div>After you <a href="/docs/en/permissions#move-the-session-to-another-directory">move a session with <code>/cd</code></a>, the new directory's project settings, hooks, <code>.mcp.json</code> servers, skills, and subagents take effect immediately instead of on the next `--resume`</div>
    <div>In non-interactive sessions, including <code>-p</code> runs, Agent SDK runs, and cloud sessions, Claude Code <a href="/docs/en/errors#the-response-above-may-be-incomplete">continues a response</a> that a server error, dropped connection, or stall cut off mid-stream, when the partial response contains text and no tool calls</div>
    <div>A subagent that stops at its <code>maxTurns</code> limit returns its output marked as partial, with a hint that Claude can <a href="/docs/en/sub-agents#resume-subagents">continue it with <code>SendMessage</code></a>, instead of appearing finished</div>
    <div>On Amazon Bedrock, Google Cloud's Agent Platform, and Microsoft Foundry, sessions on the same machine can now <a href="/docs/en/cross-session-messaging#availability">message each other</a>, <code>/loop</code> can <a href="/docs/en/scheduled-tasks#let-claude-choose-the-interval">choose its own interval</a>, and <code>/model</code> and <code>/effort</code> apply immediately instead of after the turn ends</div>
    <div>The native installer and auto-updater download a zstd-compressed build, about 75 MB instead of 340 MB on Linux x64, and native builds load code on demand, using roughly 40 to 70 MB less memory per session</div>
  </div>
</div>

[Full changelog for v2.1.240–v2.1.250 →](/docs/en/changelog#2-1-240)
