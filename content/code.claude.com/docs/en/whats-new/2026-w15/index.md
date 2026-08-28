# Week 15 · April 6–10, 2026
Source: https://code.claude.com/docs/en/whats-new/2026-w15

Ultraplan cloud planning, the Monitor tool with self-pacing /loop, /team-onboarding for packaging your setup, and /autofix-pr from your terminal.

<div>
  <span>Releases <a href="/docs/en/changelog#2-1-92">v2.1.92 → v2.1.101</a></span>
  <span>4 features · April 6–10</span>
</div>

<div>
  <div>
    <span>Ultraplan</span>
    <span>research preview</span>
  </div>

  <p>Kick off plan mode in the cloud from your terminal, then review the result in your browser. Claude drafts the plan in a Claude Code on the web session while your terminal stays free; when it's ready you comment on individual sections, ask for revisions, and choose to execute remotely or send it back to your CLI. As of v2.1.101 the first run auto-creates a default cloud environment, so there's no web setup step before you can try it.</p>

  <Frame>
    <video />
  </Frame>

  <p>Run the command, or just include the keyword in any prompt:</p>

  ```text title="Claude Code" wrap theme={null}
  /ultraplan migrate the auth service from sessions to JWTs
  ```

  <a href="/docs/en/ultraplan">Ultraplan guide</a>
</div>

<div>
  <div>
    <span>Monitor tool</span>
    <span>v2.1.98</span>
  </div>

  <p>A new built-in tool that spawns a background watcher and streams its events into the conversation: each event lands as a new transcript message that Claude reacts to immediately. Tail a training run, babysit a PR's CI, or auto-fix a dev server crash the moment it happens, all without a Bash sleep loop holding the turn open.</p>

  <Frame>
    <video />
  </Frame>

  <p>Ask Claude to watch something while you keep working:</p>

  ```text title="Claude Code" wrap theme={null}
  Tail server.log in the background and tell me the moment a 5xx shows up
  ```

  <p>This pairs with <code>/loop</code>, which now self-paces: omit the interval and Claude schedules the next tick based on the task, or reaches for the Monitor tool to skip polling altogether.</p>

  ```text title="Claude Code" wrap theme={null}
  /loop check CI on my PR
  ```

  <a href="/docs/en/tools-reference#monitor-tool">Monitor tool reference</a>
</div>

<div>
  <div>
    <span>/autofix-pr</span>
    <span>CLI</span>
  </div>

  <p>PR auto-fix landed on the web in Week 13. Now you can turn it on without leaving your terminal: <code>/autofix-pr</code> infers the open PR for your current branch and enables auto-fix for it on Claude Code on the web in one step. Push your branch, run the command, walk away; Claude watches CI and review comments and pushes fixes until it's green.</p>

  <Frame>
    <video />
  </Frame>

  <p>Run it from the PR's branch:</p>

  ```text title="Claude Code" wrap theme={null}
  /autofix-pr
  ```

  <a href="/docs/en/claude-code-on-the-web#auto-fix-pull-requests">Auto-fix pull requests</a>
</div>

<div>
  <div>
    <span>/team-onboarding</span>
    <span>v2.1.101</span>
  </div>

  <p>Generates a teammate ramp-up guide from your local Claude Code usage. Run it in a project you know well and hand the output to a new teammate so they can replay your setup instead of starting from defaults.</p>

  <p>Run it from a project you've spent real time in:</p>

  ```text title="Claude Code" wrap theme={null}
  /team-onboarding
  ```

  <a href="/docs/en/commands">Commands reference</a>
</div>

<div>
  <p>Other wins</p>

  <div>
    <div>Focus view: press <code>Ctrl+O</code> in flicker-free mode to collapse the view to your last prompt, a one-line tool summary with diffstats, and Claude's final response</div>
    <div>Guided <a href="/docs/en/amazon-bedrock">Amazon Bedrock</a> and <a href="/docs/en/google-vertex-ai">Google Cloud's Agent Platform</a> setup wizards on the login screen: pick "3rd-party platform" for step-by-step auth, region, credential check, and model pinning</div>
    <div><code>/agents</code> gets a tabbed layout: a Running tab shows live subagents with a <code>● N running</code> count, plus Run agent and View running instance actions in the Library tab</div>
    <div>Default effort level is now <code>high</code> for API-key, Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, Team, and Enterprise users (control with <code>/effort</code>)</div>
    <div><code>/cost</code> shows a per-model and cache-hit breakdown for subscription users</div>
    <div><code>/release-notes</code> is now an interactive version picker</div>
    <div>Status line: new <code>refreshInterval</code> setting re-runs the command every N seconds, and <code>workspace.git\_worktree</code> in the JSON input</div>
    <div><code>CLAUDE\_CODE\_PERFORCE\_MODE</code>: Edit/Write fail on read-only files with a <code>p4 edit</code> hint instead of silently overwriting</div>
    <div>OS CA certificate store is now trusted by default, so enterprise TLS proxies work without extra setup (<code>CLAUDE\_CODE\_CERT\_STORE=bundled</code> to opt out)</div>
    <div>Amazon Bedrock powered by Mantle: set <code>CLAUDE\_CODE\_USE\_MANTLE=1</code></div>
    <div>Hardened Bash tool permissions: backslash-escaped flags, env-var prefixes, <code>/dev/tcp</code> redirects, and compound commands now prompt correctly</div>
    <div><code>UserPromptSubmit</code> hooks can set the session title via <code>hookSpecificOutput.sessionTitle</code></div>
  </div>
</div>

[Full changelog for v2.1.92–v2.1.101 →](/docs/en/changelog#2-1-92)
