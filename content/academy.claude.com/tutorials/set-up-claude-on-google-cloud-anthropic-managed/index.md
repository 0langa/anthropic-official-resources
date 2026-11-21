# Set up Claude on Google Cloud (Anthropic managed)

Call the Claude API, run by Anthropic, through your own Google Cloud project, so you sign in and pay through Google Cloud.

30 minClaude Platform

![](https://academy.claude.com/assets/v1/thumbnail.dark-c7j6fik2.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-c7j6fik2.png)

**Claude Models on Google Cloud (Anthropic managed) lets you call Claude through your own Google Cloud project.** Anthropic operates the Claude API. Google Cloud handles access, so you sign in with your Google credentials. Once the project is set up and your account has access, a first reply takes a few lines of Python. Claude Code can use the same project too, with three variables in its settings file.

## Check which service you have[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Google Cloud offers Claude as two services, and each has its own setup. The steps here are for Anthropic managed. The other service is Google managed, where Google operates Claude models as part of Google Cloud's Agent Platform. To tell which service you have, find something you already have in this table.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">What you already have</th><th class="border-b border-strong p-sm text-left font-medium">Your service</th></tr></thead><tbody><tr><td class="border-b p-sm">The Python SDK client <code class="cds-inline-code">AnthropicGoogleCloud</code> in your code</td><td class="border-b p-sm">Anthropic managed</td></tr><tr><td class="border-b p-sm">The host <code class="cds-inline-code">claude.googleapis.com</code> in your request URLs</td><td class="border-b p-sm">Anthropic managed</td></tr><tr><td class="border-b p-sm">The option labeled Anthropic managed, on the <a aria-describedby="_R_2bgeupj35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://console.cloud.google.com/agent-platform/claude-platform" rel="noopener noreferrer" target="_blank">Claude Platform page<span class="sr-only" hidden="" id="_R_2bgeupj35mq_">(opens in new tab)</span></a> of the Google Cloud console</td><td class="border-b p-sm">Anthropic managed</td></tr><tr><td class="border-b p-sm">The Python SDK client <code class="cds-inline-code">AnthropicVertex</code> in your code</td><td class="border-b p-sm">Google managed</td></tr><tr><td class="border-b p-sm">An Agent Platform host, such as <code class="cds-inline-code">aiplatform.googleapis.com</code>, in your request URLs</td><td class="border-b p-sm">Google managed</td></tr><tr><td class="border-b p-sm">Claude models, on the <a aria-describedby="_R_2egeupj35mq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary break-words" data-cds="TextLink" href="https://console.cloud.google.com/agent-platform/model-garden" rel="noopener noreferrer" target="_blank">Model Garden page<span class="sr-only" hidden="" id="_R_2egeupj35mq_">(opens in new tab)</span></a> of the Google Cloud console</td><td class="border-b p-sm">Google managed</td></tr></tbody></table>

If what you have points to Google managed, follow [Set up Claude on Google Cloud (Google managed)(opens in new tab)](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed) instead.

## What you need, and what it costs[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

You need these before you start:

- A Google Cloud project.
- The [gcloud CLI(opens in new tab)](https://cloud.google.com/sdk/docs/install), installed.
- Python 3.10 or later, if you'll call Claude from Python.
- [Claude Code(opens in new tab)](https://code.claude.com/docs/en/setup), version 2.1.307 or later, if you'll use it. To check your version, run `claude --version`, and to update, run `claude update`.

If you've just installed the gcloud CLI, sign it in with `gcloud auth login` or `gcloud init`. That's the gcloud CLI's own login, and step 2 of "Give yourself access" needs it. Application Default Credentials, which the SDK client uses, are a separate sign-in that comes in step 3.

You don't need an Anthropic API key, because this service doesn't use API keys.

**Usage is billed.** Billing goes through Google Cloud Marketplace, so the charges appear on your Google Cloud bill and Anthropic doesn't send a separate invoice. What you use while you follow this page is billed too, including your Claude Code prompts.

The commands below use placeholder values. Replace `my-project-id` with your project ID, `you@example.com` with your Google account, and `wrkspc_01AbCdEf23GhIj` with your workspace ID, which the next section explains.

## Get the project ready, once[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Setup creates a new Anthropic organization for your Google Cloud project. It's separate from any Anthropic organization your company already has. The new organization starts with one workspace, the Default Workspace, and everyone who calls this service needs that workspace's ID.

An admin usually does this part. If yours already has, ask them for the workspace ID and go on to "Give yourself access."

**If you have an existing discount, contact your Anthropic or Google Cloud account representative before you start.** Discounts can't be applied to past usage.

Then follow the steps in [Set up your account(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed) in the docs. That section lists the permissions you need. The steps take you from subscribing in Google Cloud Marketplace to copying the workspace ID, which starts with `wrkspc_`. Pass the ID on to your developers.

The Marketplace subscription is made once, so to add another project, repeat the steps in that project, starting from step 2. If a step fails, see [troubleshooting account setup(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed).

## Give yourself access[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Each developer who calls Claude does these steps in their own terminal, in order. If you only want Claude Code, do steps 1 to 3, then go on to "Connect Claude Code." Claude Code reads your project ID and workspace ID from its own settings file.

1. **Set your project in gcloud.**

   bash

   ```
   gcloud config set project my-project-id
   ```

   To see the project gcloud is using, run `gcloud config get-value project`.
2. **Grant your account `roles/claude.user`.** The identity that makes the calls needs this role on the project.

   bash

   ```
   gcloud projects add-iam-policy-binding \
     my-project-id \
     --member="user:you@example.com" \
     --role="roles/claude.user"
   ```

   You need permission to change the project's IAM policy to run this command. Without it, ask your admin to run the command for your account.
3. **Sign in with Application Default Credentials (ADC).** The SDK client gets its Google access token from ADC. For local development, run this command:

   bash

   ```
   gcloud auth application-default login
   ```

   To check that ADC works, run `gcloud auth application-default print-access-token`.
4. **Set two environment variables.** The SDK client needs your project ID and your workspace ID.

   bash

   ```
   export ANTHROPIC_GOOGLE_CLOUD_PROJECT="my-project-id"
   export ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID="wrkspc_01AbCdEf23GhIj"
   ```

## Get a first reply[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

One request from Python shows that the whole setup works. Stay in the terminal where you set the two variables.

1. **Install the SDK with its Google Cloud extra.** The SDK client for this service is in beta.

   bash

   ```
   pip install -U "anthropic[google_cloud]"
   ```
2. **Save this file as `first_reply.py`.** It creates the client, which resolves your Google credentials itself. Then it sends one request and prints what comes back.

   python

   ```
   from anthropic import AnthropicGoogleCloud

   client = AnthropicGoogleCloud()

   message = client.messages.create(
       model="claude-opus-5-5",
       max_tokens=1024,
       messages=[{
           "role": "user",
           "content": "Hello, Claude",
       }],
   )
   print(message)
   ```
3. **Run the file.**

   bash

   ```
   python first_reply.py
   ```

   The whole message prints in your terminal, with Claude's reply in its `content`. If you get an error instead, go to the next section.

**Check that the reply came through the project you meant.** The client reads the project ID from `ANTHROPIC_GOOGLE_CLOUD_PROJECT`. Run `echo "$ANTHROPIC_GOOGLE_CLOUD_PROJECT"` in the same terminal. The value should be the ID of the project that you or your admin got ready. The project set in gcloud can be a different one, so check the variable.

To see the same request without the SDK, read the [cURL sample(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed).

## If the first request fails[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Two common errors are a permission error and a model that isn't available.

If the client says the workspace ID is missing, set both variables again in this terminal, as in step 4 of "Give yourself access." For rate limits, contact [Anthropic Support(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed).

### A permission error[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Google Cloud returns an HTTP 403 error when the caller lacks permission. Check two things on the project you're calling:

- `claude.googleapis.com` is enabled. Run `gcloud services list --enabled --project=my-project-id` and look for its name.
- Your account has `roles/claude.user` or `roles/claude.admin`.

A new grant or a newly enabled service can take a moment to apply. If both checks pass, wait a moment and run `first_reply.py` again.

### A model that isn't available[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

The error message reads `Model {model} is not available for this organization's inference configuration.` It comes back when you request a model that isn't available to your Anthropic organization. You can look up the [models and their IDs(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed), and [Anthropic Support(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed) handles Claude itself, including models and API errors.

## Run any Claude API sample[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

**To run a Claude API sample on this service, replace its import and its client constructor.** The model ID stays the same, because this service uses the same model IDs as the Claude API. A sample that uses a feature this service doesn't support won't run, so check the short [list of features not supported(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed) first.

Say a sample written for the Claude API looks like this:

python

```
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": "Hello, Claude",
    }],
)
print(message)
```

After the swap, only the import and the client have changed:

python

```
from anthropic import AnthropicGoogleCloud

client = AnthropicGoogleCloud()

message = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": "Hello, Claude",
    }],
)
print(message)
```

The swap is enough because the new client takes care of what differs. A request to this service differs from a Claude API request in three ways.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">What differs</th><th class="border-b border-strong p-sm text-left font-medium">On Anthropic managed</th></tr></thead><tbody><tr><td class="border-b p-sm">Base URL</td><td class="border-b p-sm">A project-scoped URL, in place of <code class="cds-inline-code">https://api.anthropic.com</code></td></tr><tr><td class="border-b p-sm">Authentication</td><td class="border-b p-sm">An <code class="cds-inline-code">Authorization: Bearer</code> header with a Google access token. Don't send an <code class="cds-inline-code">x-api-key</code> header.</td></tr><tr><td class="border-b p-sm">Workspace</td><td class="border-b p-sm">The workspace ID is part of the URL. Don't send an <code class="cds-inline-code">anthropic-workspace-id</code> header.</td></tr></tbody></table>

The client builds the base URL from your project, location, and workspace ID, in this shape:

text

```
https://claude.googleapis.com/v1/projects/{project}/locations/global/workspaces/{workspace}/invoke
```

## Connect Claude Code[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

**Claude Code can reach Claude models through the same project.** Its usage is billed through Google Cloud Marketplace, like any other request to this service. You don't need to log in to an Anthropic account, or to log out of one. To connect it, follow these steps in order.

1. **Check your Google sign-in.** Make sure that at step 3 of "Give yourself access" you signed in with the account that has `roles/claude.user`, because Claude Code uses those Application Default Credentials. If you used another account, run that step's command again and sign in with the right one.
2. **Add three variables to your settings file.** They go in the `env` block of your user settings file, `~/.claude/settings.json`. If the file already exists, keep its other settings and put the three variables in its `env` block, adding the block if it has none. If the file doesn't exist, create it with this content, using your own project ID and workspace ID:

   json

   ```
   {
     "env": {
       "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD": "1",
       "ANTHROPIC_GOOGLE_CLOUD_PROJECT": "my-project-id",
       "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID": "wrkspc_01AbCdEf23GhIj"
     }
   }
   ```

   The first variable sends Claude Code's model requests to this service, and the other two name your project and workspace. For a team, put the same `env` block in a managed settings file on each developer's machine, as the docs on [setting up Claude Code for a team(opens in new tab)](https://code.claude.com/docs/en/claude-models-on-google-cloud-anthropic-managed) explain.
3. **Start Claude Code and check the provider.** Run `claude`, then run `/status` at the Claude Code prompt. The `API provider` line contains `on Google Cloud`. Check that the `GCP project` and `Workspace ID` lines show the IDs you just saved. If Claude Code asks you to log in, or `/status` shows another provider or no `API provider` line, make the checks after these steps before you go on.
4. **Send Claude Code a prompt.** A short one, such as `Hello, Claude`, is enough. A reply confirms that your credentials and IAM role work. If you get an error instead, look up its message and fix in [the Claude Code troubleshooting docs(opens in new tab)](https://code.claude.com/docs/en/claude-models-on-google-cloud-anthropic-managed). If `GOOGLE_APPLICATION_CREDENTIALS` is set, Claude Code uses the file it names and ignores your sign-in, even when a reply comes back. In that case, exit Claude Code, run `unset GOOGLE_APPLICATION_CREDENTIALS` in the same terminal, and start it again.

If step 3 asked you to log in, or `/status` showed another provider or no `API provider` line, check these things:

- `CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD` is `1`.
- `claude --version` prints 2.1.307 or later. If it's older, run `claude update`.
- `CLAUDE_CODE_USE_BEDROCK`, `CLAUDE_CODE_USE_FOUNDRY`, and `CLAUDE_CODE_USE_ANTHROPIC_AWS` aren't set. Remove them from your shell and your [settings files(opens in new tab)](https://code.claude.com/docs/en/settings). `CLAUDE_CODE_USE_VERTEX`, the Google managed switch, can stay set.

After you change a variable, restart Claude Code.

When you need them, these topics are in the Claude Code docs:

- [Pinning model versions(opens in new tab)](https://code.claude.com/docs/en/claude-models-on-google-cloud-anthropic-managed)
- [Which Claude Code features work on this service(opens in new tab)](https://code.claude.com/docs/en/feature-availability)

## Where to go next[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Take [Claude Platform 101(opens in new tab)](https://academy.claude.com/courses/claude-platform-101) next. It teaches what `messages`, `max_tokens`, and models are. Then take [Tool use with the Messages API(opens in new tab)](https://academy.claude.com/courses/tool-use-with-the-messages-api).

**Whenever a sample, in these courses or in the docs, creates an `anthropic.Anthropic()` client, swap its import and client before you run it.** Skip any step that gets or stores an API key or checks for credit, because this service doesn't use API keys and bills through Google Cloud. Some lessons use TypeScript, and the docs list [the package and client for each language(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed).

For Claude Code, take [Claude Code 101(opens in new tab)](https://academy.claude.com/courses/claude-code-101), then [Claude Code in action(opens in new tab)](https://academy.claude.com/courses/claude-code-in-action). Skip any step that logs in to an Anthropic account, because Claude Code reaches Claude through your project.

When you need them, these topics are in the docs:

- [Migrating from Google managed(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed)
- [Customer-managed encryption keys (CMEK)(opens in new tab)](https://platform.claude.com/docs/en/manage-claude/cmek-google-cloud-kms)
- [Monitoring and logging(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed)
- [Rate limits(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed)

Was this helpful?
