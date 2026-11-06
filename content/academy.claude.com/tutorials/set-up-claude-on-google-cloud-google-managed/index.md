# Set up Claude on Google Cloud (Google managed)

Check that you have the Google managed service, then get your Google Cloud project ready and give yourself access. Then connect Claude Code or Claude Desktop and check that it answers, with no Anthropic API key. Google Cloud bills the usage.

20 minClaude Code

**When your company buys Claude through Google Cloud, Claude Code and Claude Desktop reach Claude through your own Google Cloud project.** You sign in with Google Cloud credentials, so you don't need an Anthropic API key, and Google Cloud bills the usage.

Setup has three parts. Someone gets the project ready once, then each person gives themselves access. After that, you point the app you use at the project. You're done when Claude Code answers you and `/status` shows your project ID.

Google Cloud sells Claude as two services, and they're set up differently. So the first job is to check which one you have.

## Check which service you have[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

**The two services differ in who operates Claude.** On Claude Models on Google Cloud (Google managed), Google operates the Claude models as part of Google Cloud's Agent Platform, formerly Vertex AI. Agent Platform is the part of Google Cloud that these steps work in: you turn on its API, you get one of its roles, and your usage is billed as Agent Platform usage. On the Anthropic managed service, Anthropic operates the Claude API.

To tell which one is yours, look at something you already have. The table shows what to look for.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Where to look</th><th class="border-b border-strong p-sm text-left font-medium">Google managed</th><th class="border-b border-strong p-sm text-left font-medium">Anthropic managed</th></tr></thead><tbody><tr><td class="border-b p-sm">The Google Cloud console</td><td class="border-b p-sm">Claude models in Model Garden</td><td class="border-b p-sm">The option labeled <strong>Anthropic managed</strong></td></tr><tr><td class="border-b p-sm">The SDK client in your code</td><td class="border-b p-sm">Its name contains <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">Vertex</code>, as in <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">AnthropicVertex</code></td><td class="border-b p-sm">Its name contains <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">GoogleCloud</code></td></tr></tbody></table>

Model Garden is the part of the Google Cloud console where each model has its own card.

Request URLs are a third sign. On Google managed, they point at an Agent Platform host, and the URL path contains `.../publishers/anthropic/models/{model}`. The [overview of the two services(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/overview) lists the hosts.

If you have Anthropic managed, follow the [Anthropic managed docs page(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed) instead. If you call `api.anthropic.com` with an API key, you use neither service.

## What you need, and what it costs[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

Have these ready before you start:

- A Google Cloud project with billing on, and its project ID
- The [gcloud CLI(opens in new tab)](https://cloud.google.com/sdk/docs/install), Google Cloud's command-line tool
- [Claude Code(opens in new tab)](https://code.claude.com/docs/en/setup), installed

Wherever a command below shows `YOUR-PROJECT-ID` or `PROJECT_ID`, replace it with your project ID.

If you've just installed the gcloud CLI, sign it in with `gcloud auth login` or `gcloud init`. That's the gcloud CLI's own login. Application Default Credentials, which Claude Code uses, are a separate sign-in that comes under "Give yourself access."

**Google Cloud bills the usage, as Agent Platform usage.** That includes what you send from Claude Code or Claude Desktop. To look up prices, start from the [billing section of this service's docs page(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed).

## Get the project ready, once[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

Before anyone can call Claude from a project, the project needs the Agent Platform API turned on and a Claude model enabled. **These steps are done once per Google Cloud project, usually by an admin.** If someone has already done them for yours, go on to "Give yourself access."

1. Turn on the Agent Platform API. Point gcloud at the project, then enable the service `aiplatform.googleapis.com`.

   bash

   ```
   gcloud config set project YOUR-PROJECT-ID
   gcloud services enable aiplatform.googleapis.com
   ```

   Google's [Before you begin steps for Claude models(opens in new tab)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/use-claude) cover this step and the billing check.
2. Enable the Claude models you'll use, in Model Garden. Google lists [the Claude model cards(opens in new tab)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/use-claude). Open the card for each model and click **Enable**. With no model pinned, Claude Code's primary model is `claude-opus-5-5`, and it uses its default Claude Sonnet model for background tasks. The [list of default models(opens in new tab)](https://code.claude.com/docs/en/google-vertex-ai) gives both IDs, so enable those two.

Whoever clicks **Enable** must have the [Consumer Procurement Entitlement Manager(opens in new tab)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/use-partner-models) role in Identity and Access Management (IAM). Its ID is `roles/consumerprocurement.entitlementManager`.

## Give yourself access[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

The project is ready, but your own account still needs permission to call Claude and a sign-in Claude Code can use. Each person does these steps for their own account.

1. Point gcloud at the project.

   bash

   ```
   gcloud config set project YOUR-PROJECT-ID
   ```
2. Get a role that lets you call Claude. The identity making the calls needs an IAM role that includes the `aiplatform.endpoints.predict` permission, such as Agent Platform User (`roles/aiplatform.user`). This command grants that role:

   bash

   ```
   gcloud projects add-iam-policy-binding PROJECT_ID --member=PRINCIPAL --role=roles/aiplatform.user
   ```

   Replace `PRINCIPAL` with `user:` and then your email address, for example, `user:you@example.com`. [Google's page on granting access(opens in new tab)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/use-partner-models) shows the other forms `PRINCIPAL` can take. If you aren't allowed to change the project's IAM policy, ask an admin to run the command for you.
3. Sign in with Application Default Credentials. These are the Google Cloud credentials Claude Code uses when it calls Claude.

   bash

   ```
   gcloud auth application-default login
   ```

## Connect Claude Code or Claude Desktop[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

With the project ready and your access in place, point the app you use at the project. Both apps ask for the same two values: your project ID and a region. The steps below use the region `global`.

### Claude Code[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

The login wizard handles the Claude Code side.

1. **Start Claude Code.**

   bash

   ```
   claude
   ```
2. **Choose Agent Platform.** At the login prompt, select **3rd-party platform**, then **Google Vertex AI**. That's the label the login prompt still uses for Google Cloud's Agent Platform. If you're already signed in, run `/login` to open the same menu.
3. **Follow the wizard's prompts.** When it asks how you authenticate to Google Cloud, choose Application Default Credentials from `gcloud`, which you set up in "Give yourself access." Then give it your project ID and the region `global`. The wizard verifies which Claude models your project can invoke and lets you pin them. It saves the result to your user settings file, so you don't need to export environment variables yourself.
4. **Send Claude Code a message.** When it answers, Claude Code is reaching Claude through Google Cloud.

**Check that it's using the project you meant.** Run `/status`. The `API provider` line shows `Google Vertex AI`. The `GCP project`, `Default region`, and `Model` lines show your project ID, your region, and the resolved model. Compare the project ID with the project from "Get the project ready, once."

**Claude Opus models have a higher per-token price than Sonnet models.** If you don't pin a primary model, you're billed at the Opus rate. To change your model pins, project, region, or credentials later, run `/setup-vertex` to reopen the wizard.

To set Claude Code up without the wizard, for example, in CI or a scripted rollout, set these environment variables in the shell where you start `claude`:

bash

```
export CLAUDE_CODE_USE_VERTEX=1
export CLOUD_ML_REGION=global
export ANTHROPIC_VERTEX_PROJECT_ID=YOUR-PROJECT-ID
```

If `/status` then shows no `API provider` line, the variables aren't reaching the process. The [manual setup steps(opens in new tab)](https://code.claude.com/docs/en/google-vertex-ai) cover the rest, including how to pin model versions for a team.

### Claude Desktop[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

Claude Desktop can use Claude models through the same project, and Claude Cowork sessions run in that app. An IT administrator usually deploys it to every device, so ask whether yours already has. To try it on one device, fill in the same values by hand.

1. **Open the [in-app configuration window(opens in new tab)](https://claude.com/docs/third-party/claude-desktop/in-app-configuration).** It's under **Developer → Configure Third-Party Inference…**.
2. **Choose the provider.** In the **Connection** section, set **Inference provider** to **Vertex AI**.
3. **Fill in the Vertex AI credentials card.** Put your project ID in **GCP project ID** and a region in **GCP region**. The region can be `global`. Then provide exactly one credential source. **GCP credentials file path** accepts the file that `gcloud auth application-default login` produces.
4. **Add a model.** Under **Models**, add at least one **Model list** entry, using the publisher model ID of a model you enabled.

[Deploy Claude Desktop on 3P with Google Cloud's Agent Platform(opens in new tab)](https://claude.com/docs/third-party/claude-desktop/vertex) covers the other ways to sign in and how to push the settings to every device.

## If it doesn't work[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

These errors can stop Claude Code from reaching Claude. Find yours in the table, then apply its fix.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">What you see</th><th class="border-b border-strong p-sm text-left font-medium">What to do</th></tr></thead><tbody><tr><td class="border-b p-sm">"Could not load the default credentials"</td><td class="border-b p-sm">Run <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">gcloud auth application-default login</code> to set up Application Default Credentials.</td></tr><tr><td class="border-b p-sm">"model not found", a 404 error</td><td class="border-b p-sm">Confirm that the model is enabled in Model Garden. Then verify that the model is available in the location you specified. With the region <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">global</code>, check in Model Garden, under "Supported features", that your models support global endpoints.</td></tr><tr><td class="border-b p-sm">A quota issue</td><td class="border-b p-sm">Check your current quotas or request a quota increase through the <a aria-describedby="_R_kt7nmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://cloud.google.com/docs/quotas/view-manage" rel="noopener noreferrer" target="_blank">Cloud Console<span class="sr-only" hidden="" id="_R_kt7nmd35kq_">(opens in new tab)</span></a>.</td></tr><tr><td class="border-b p-sm">A 429 error</td><td class="border-b p-sm">On a regional endpoint, make sure that the primary model and the small, fast model are supported in your region. Consider switching to the region <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">global</code> for better availability.</td></tr></tbody></table>

**A model can be missing from a location.** Some models are offered only on `global` or multi-region locations such as `eu` and `us`, not in specific regions. If you change your region, verify that your models are available there.

These fixes come from [Troubleshooting in Claude Code on Google Cloud's Agent Platform(opens in new tab)](https://code.claude.com/docs/en/google-vertex-ai), which goes further. For Claude Desktop, start from [its own Troubleshoot section(opens in new tab)](https://claude.com/docs/third-party/claude-desktop/vertex).

## Where to go next[](https://academy.claude.com/tutorials/set-up-claude-on-google-cloud-google-managed)

**Keep your project ID and your region where you can find them.** Claude Code, Claude Desktop, and the SDK clients all ask for them.

- **To learn Claude Code,** take [Claude Code 101(opens in new tab)](https://academy.claude.com/courses/claude-code-101), then [Claude Code in action(opens in new tab)](https://academy.claude.com/courses/claude-code-in-action).
- **To learn Claude Cowork,** take [Introduction to Claude Cowork(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-cowork).
- **To call Claude from your own code,** follow the [Google managed docs page(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed). It shows how to install an SDK and make a request with the `AnthropicVertex` client.

For more on the service itself, the docs have a section on each of these:

- [Global, multi-region, and regional endpoints(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed)
- [Rate limits(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed)
- [Monitoring and logging(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed)
- [Billing(opens in new tab)](https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed)

Was this helpful?
