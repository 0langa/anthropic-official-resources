# Set up Claude on Google Cloud (Anthropic managed)

Get a Google Cloud project ready for Claude Models on Google Cloud (Anthropic managed), give your own account access, and get a first reply from Claude in Python. Then run any Claude API sample by swapping its import and client.

25 minClaude Platform

**Claude Models on Google Cloud (Anthropic managed) lets you call Claude through your own Google Cloud project.** Anthropic operates the Claude API. Google Cloud handles access, so you sign in with your Google credentials. Once the project is set up and your account has access, a first reply takes a few lines of Python.

## Check which service you have[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Google Cloud offers Claude as two services, and each has its own setup. The steps here are for Anthropic managed. The other service is Google managed, where Google operates Claude models as part of Google Cloud's Agent Platform. To tell which service you have, find something you already have in this table.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">What you already have</th><th class="border-b border-strong p-sm text-left font-medium">Your service</th></tr></thead><tbody><tr><td class="border-b p-sm">The Python SDK client <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">AnthropicGoogleCloud</code> in your code</td><td class="border-b p-sm">Anthropic managed</td></tr><tr><td class="border-b p-sm">The host <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">claude.googleapis.com</code> in your request URLs</td><td class="border-b p-sm">Anthropic managed</td></tr><tr><td class="border-b p-sm">The option labeled Anthropic managed, in the Google Cloud console</td><td class="border-b p-sm">Anthropic managed</td></tr><tr><td class="border-b p-sm">The Python SDK client <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">AnthropicVertex</code> in your code</td><td class="border-b p-sm">Google managed</td></tr><tr><td class="border-b p-sm">An Agent Platform host, such as <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">aiplatform.googleapis.com</code>, in your request URLs</td><td class="border-b p-sm">Google managed</td></tr><tr><td class="border-b p-sm">Claude models in Model Garden, in the Google Cloud console</td><td class="border-b p-sm">Google managed</td></tr></tbody></table>

If what you have points to Google managed, follow [Set up Claude on Google Cloud (Google managed)(opens in new tab)](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed) instead.

## What you need, and what it costs[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

You need these before you start:

- A Google Cloud project
- The [gcloud CLI(opens in new tab)](https://cloud.google.com/sdk/docs/install), installed
- Python 3.10 or later

You don't need an Anthropic API key, because this service doesn't use API keys.

**Usage is billed, and the SDK client for this service is in beta.** Billing goes through Google Cloud Marketplace, so the charges appear on your Google Cloud bill and Anthropic doesn't send a separate invoice. The one request you send here is billed too.

The commands below use placeholder values. Replace `my-project-id` with your project ID, `you@example.com` with your Google account, and `wrkspc_01AbCdEf23GhIj` with your workspace ID, which the next section explains.

## Get the project ready, once[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Setup creates a new Anthropic organization for your Google Cloud project. It's separate from any Anthropic organization your company already has. The new organization starts with one workspace, the Default Workspace, and everyone who calls this service needs that workspace's ID.

An admin usually does this part. If yours already has, ask them for the workspace ID and go on to "Give yourself access".

**If you have an existing discount, contact your Anthropic or Google Cloud account representative before you start.** Discounts can't be applied to past usage.

Then follow the steps in [Set up your account(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed) in the docs. That section lists the permissions you need. The steps take you from subscribing in Google Cloud Marketplace to copying the workspace ID, which starts with `wrkspc_`. Pass the ID on to your developers.

The Marketplace subscription is made once, so to add another project, repeat the steps in that project, starting from step 2. If a step fails, see [troubleshooting account setup(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed).

## Give yourself access[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Each developer who calls Claude does these steps in their own terminal, in order.

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

1. **Install the SDK with its Google Cloud extra.**

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

If the client says the workspace ID is missing, set both variables again in this terminal, as in step 4 of "Give yourself access". For rate limits, contact [Anthropic Support(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed).

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

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">What differs</th><th class="border-b border-strong p-sm text-left font-medium">On Anthropic managed</th></tr></thead><tbody><tr><td class="border-b p-sm">Base URL</td><td class="border-b p-sm">A project-scoped URL, in place of <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">https://api.anthropic.com</code></td></tr><tr><td class="border-b p-sm">Authentication</td><td class="border-b p-sm">An <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">Authorization: Bearer</code> header with a Google access token. Don't send an <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">x-api-key</code> header.</td></tr><tr><td class="border-b p-sm">Workspace</td><td class="border-b p-sm">The workspace ID is part of the URL. Don't send an <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em] break-words">anthropic-workspace-id</code> header.</td></tr></tbody></table>

The client builds the base URL from your project, location, and workspace ID, in this shape:

text

```
https://claude.googleapis.com/v1/projects/{project}/locations/global/workspaces/{workspace}/invoke
```

## Where to go next[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-anthropic-managed)

Take [Claude Platform 101(opens in new tab)](https://academy.claude.com/courses/claude-platform-101) next. It teaches what `messages`, `max_tokens`, and models are. Then take [Tool use with the Messages API(opens in new tab)](https://academy.claude.com/courses/tool-use-with-the-messages-api).

**Whenever a sample, in these courses or in the docs, creates an `anthropic.Anthropic()` client, swap its import and client before you run it.** Skip any step that gets or stores an API key or checks for credit, because this service doesn't use API keys and bills through Google Cloud. Some lessons use TypeScript, and the docs list [the package and client for each language(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed).

When you need them, these topics are in the docs:

- [Migrating from Google managed(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed)
- [Customer-managed encryption keys (CMEK)(opens in new tab)](https://platform.claude.com/docs/en/manage-claude/cmek-google-cloud-kms)
- [Monitoring and logging(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed)
- [Rate limits(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed)

Was this helpful?
