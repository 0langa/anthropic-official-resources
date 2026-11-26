import{n as e,r as t}from"../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Claude Models on Google Cloud (Anthropic managed) lets you call Claude through your own Google Cloud project."})," Anthropic operates the Claude API. Google Cloud handles access, so you sign in with your Google credentials. Once the project is set up and your account has access, a first reply takes a few lines of Python. Claude Code can use the same project too, with three variables in its settings file."]}),`
`,(0,n.jsx)(r.h2,{id:"check-which-service-you-have",children:"Check which service you have"}),`
`,(0,n.jsx)(r.p,{children:"Google Cloud offers Claude as two services, and each has its own setup. The steps here are for Anthropic managed. The other service is Google managed, where Google operates Claude models as part of Google Cloud's Agent Platform. To tell which service you have, find something you already have in this table."}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"What you already have"}),(0,n.jsx)(r.th,{children:"Your service"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["The Python SDK client ",(0,n.jsx)(r.code,{children:"AnthropicGoogleCloud"})," in your code"]}),(0,n.jsx)(r.td,{children:"Anthropic managed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["The host ",(0,n.jsx)(r.code,{children:"claude.googleapis.com"})," in your request URLs"]}),(0,n.jsx)(r.td,{children:"Anthropic managed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["The option labeled Anthropic managed, on the ",(0,n.jsx)(r.a,{href:"https://console.cloud.google.com/agent-platform/claude-platform",children:"Claude Platform page"})," of the Google Cloud console"]}),(0,n.jsx)(r.td,{children:"Anthropic managed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["The Python SDK client ",(0,n.jsx)(r.code,{children:"AnthropicVertex"})," in your code"]}),(0,n.jsx)(r.td,{children:"Google managed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["An Agent Platform host, such as ",(0,n.jsx)(r.code,{children:"aiplatform.googleapis.com"}),", in your request URLs"]}),(0,n.jsx)(r.td,{children:"Google managed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["Claude models, on the ",(0,n.jsx)(r.a,{href:"https://console.cloud.google.com/agent-platform/model-garden",children:"Model Garden page"})," of the Google Cloud console"]}),(0,n.jsx)(r.td,{children:"Google managed"})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:["If what you have points to Google managed, follow ",(0,n.jsx)(r.a,{href:"/tutorials/set-up-claude-on-google-cloud-google-managed",children:"Set up Claude on Google Cloud (Google managed)"})," instead."]}),`
`,(0,n.jsx)(r.h2,{id:"what-you-need-and-what-it-costs",children:"What you need, and what it costs"}),`
`,(0,n.jsx)(r.p,{children:"You need these before you start:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A Google Cloud project."}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.a,{href:"https://cloud.google.com/sdk/docs/install",children:"gcloud CLI"}),", installed."]}),`
`,(0,n.jsx)(r.li,{children:"Python 3.10 or later, if you'll call Claude from Python."}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/setup#install-claude-code",children:"Claude Code"}),", version 2.1.307 or later, if you'll use it. To check your version, run ",(0,n.jsx)(r.code,{children:"claude --version"}),", and to update, run ",(0,n.jsx)(r.code,{children:"claude update"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["If you've just installed the gcloud CLI, sign it in with ",(0,n.jsx)(r.code,{children:"gcloud auth login"})," or ",(0,n.jsx)(r.code,{children:"gcloud init"}),`. That's the gcloud CLI's own login, and step 2 of "Give yourself access" needs it. Application Default Credentials, which the SDK client uses, are a separate sign-in that comes in step 3.`]}),`
`,(0,n.jsx)(r.p,{children:"You don't need an Anthropic API key, because this service doesn't use API keys."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Usage is billed."})," Billing goes through Google Cloud Marketplace, so the charges appear on your Google Cloud bill and Anthropic doesn't send a separate invoice. What you use while you follow this page is billed too, including your Claude Code prompts."]}),`
`,(0,n.jsxs)(r.p,{children:["The commands below use placeholder values. Replace ",(0,n.jsx)(r.code,{children:"my-project-id"})," with your project ID, ",(0,n.jsx)(r.code,{children:"you@example.com"})," with your Google account, and ",(0,n.jsx)(r.code,{children:"wrkspc_01AbCdEf23GhIj"})," with your workspace ID, which the next section explains."]}),`
`,(0,n.jsx)(r.h2,{id:"get-the-project-ready-once",children:"Get the project ready, once"}),`
`,(0,n.jsx)(r.p,{children:"Setup creates a new Anthropic organization for your Google Cloud project. It's separate from any Anthropic organization your company already has. The new organization starts with one workspace, the Default Workspace, and everyone who calls this service needs that workspace's ID."}),`
`,(0,n.jsx)(r.p,{children:'An admin usually does this part. If yours already has, ask them for the workspace ID and go on to "Give yourself access."'}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"If you have an existing discount, contact your Anthropic or Google Cloud account representative before you start."})," Discounts can't be applied to past usage."]}),`
`,(0,n.jsxs)(r.p,{children:["Then follow the steps in ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#set-up-your-account",children:"Set up your account"})," in the docs. That section lists the permissions you need. The steps take you from subscribing in Google Cloud Marketplace to copying the workspace ID, which starts with ",(0,n.jsx)(r.code,{children:"wrkspc_"}),". Pass the ID on to your developers."]}),`
`,(0,n.jsxs)(r.p,{children:["The Marketplace subscription is made once, so to add another project, repeat the steps in that project, starting from step 2. If a step fails, see ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#troubleshooting-account-setup",children:"troubleshooting account setup"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"give-yourself-access",children:"Give yourself access"}),`
`,(0,n.jsx)(r.p,{children:'Each developer who calls Claude does these steps in their own terminal, in order. If you only want Claude Code, do steps 1 to 3, then go on to "Connect Claude Code." Claude Code reads your project ID and workspace ID from its own settings file.'}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Set your project in gcloud."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud config set project my-project-id
`})}),`
`,(0,n.jsxs)(r.p,{children:["To see the project gcloud is using, run ",(0,n.jsx)(r.code,{children:"gcloud config get-value project"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Grant your account ",(0,n.jsx)(r.code,{children:"roles/claude.user"}),"."]})," The identity that makes the calls needs this role on the project."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud projects add-iam-policy-binding \\
  my-project-id \\
  --member="user:you@example.com" \\
  --role="roles/claude.user"
`})}),`
`,(0,n.jsx)(r.p,{children:"You need permission to change the project's IAM policy to run this command. Without it, ask your admin to run the command for your account."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Sign in with Application Default Credentials (ADC)."})," The SDK client gets its Google access token from ADC. For local development, run this command:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud auth application-default login
`})}),`
`,(0,n.jsxs)(r.p,{children:["To check that ADC works, run ",(0,n.jsx)(r.code,{children:"gcloud auth application-default print-access-token"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Set two environment variables."})," The SDK client needs your project ID and your workspace ID."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`export ANTHROPIC_GOOGLE_CLOUD_PROJECT="my-project-id"
export ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID="wrkspc_01AbCdEf23GhIj"
`})}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"get-a-first-reply",children:"Get a first reply"}),`
`,(0,n.jsx)(r.p,{children:"One request from Python shows that the whole setup works. Stay in the terminal where you set the two variables."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Install the SDK with its Google Cloud extra."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`pip install -U "anthropic[google_cloud]"
`})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Save this file as ",(0,n.jsx)(r.code,{children:"first_reply.py"}),"."]})," It creates the client, which resolves your Google credentials itself. Then it sends one request and prints what comes back."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from anthropic import AnthropicGoogleCloud

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
`})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Run the file."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`python first_reply.py
`})}),`
`,(0,n.jsxs)(r.p,{children:["The whole message prints in your terminal, with Claude's reply in its ",(0,n.jsx)(r.code,{children:"content"}),". If you get an error instead, go to the next section."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Check that the reply came through the project you meant."})," The client reads the project ID from ",(0,n.jsx)(r.code,{children:"ANTHROPIC_GOOGLE_CLOUD_PROJECT"}),". Run ",(0,n.jsx)(r.code,{children:'echo "$ANTHROPIC_GOOGLE_CLOUD_PROJECT"'})," in the same terminal. The value should be the ID of the project that you or your admin got ready. The project set in gcloud can be a different one, so check the variable."]}),`
`,(0,n.jsxs)(r.p,{children:["To see the same request without the SDK, read the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#making-requests",children:"cURL sample"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"if-the-first-request-fails",children:"If the first request fails"}),`
`,(0,n.jsx)(r.p,{children:"Two common errors are a permission error and a model that isn't available."}),`
`,(0,n.jsxs)(r.p,{children:['If the client says the workspace ID is missing, set both variables again in this terminal, as in step 4 of "Give yourself access." For rate limits, contact ',(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#support",children:"Anthropic Support"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"a-permission-error",children:"A permission error"}),`
`,(0,n.jsx)(r.p,{children:"Google Cloud returns an HTTP 403 error when the caller lacks permission. Check two things on the project you're calling:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"claude.googleapis.com"})," is enabled. Run ",(0,n.jsx)(r.code,{children:"gcloud services list --enabled --project=my-project-id"})," and look for its name."]}),`
`,(0,n.jsxs)(r.li,{children:["Your account has ",(0,n.jsx)(r.code,{children:"roles/claude.user"})," or ",(0,n.jsx)(r.code,{children:"roles/claude.admin"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["A new grant or a newly enabled service can take a moment to apply. If both checks pass, wait a moment and run ",(0,n.jsx)(r.code,{children:"first_reply.py"})," again."]}),`
`,(0,n.jsx)(r.h3,{id:"a-model-that-isnt-available",children:"A model that isn't available"}),`
`,(0,n.jsxs)(r.p,{children:["The error message reads ",(0,n.jsx)(r.code,{children:"Model {model} is not available for this organization's inference configuration."})," It comes back when you request a model that isn't available to your Anthropic organization. You can look up the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#api-model-ids",children:"models and their IDs"}),", and ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#support",children:"Anthropic Support"})," handles Claude itself, including models and API errors."]}),`
`,(0,n.jsx)(r.h2,{id:"run-any-claude-api-sample",children:"Run any Claude API sample"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"To run a Claude API sample on this service, replace its import and its client constructor."})," The model ID stays the same, because this service uses the same model IDs as the Claude API. A sample that uses a feature this service doesn't support won't run, so check the short ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#features-not-supported",children:"list of features not supported"})," first."]}),`
`,(0,n.jsx)(r.p,{children:"Say a sample written for the Claude API looks like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import anthropic

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
`})}),`
`,(0,n.jsx)(r.p,{children:"After the swap, only the import and the client have changed:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from anthropic import AnthropicGoogleCloud

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
`})}),`
`,(0,n.jsx)(r.p,{children:"The swap is enough because the new client takes care of what differs. A request to this service differs from a Claude API request in three ways."}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"What differs"}),(0,n.jsx)(r.th,{children:"On Anthropic managed"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Base URL"}),(0,n.jsxs)(r.td,{children:["A project-scoped URL, in place of ",(0,n.jsx)(r.code,{children:"https://api.anthropic.com"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Authentication"}),(0,n.jsxs)(r.td,{children:["An ",(0,n.jsx)(r.code,{children:"Authorization: Bearer"})," header with a Google access token. Don't send an ",(0,n.jsx)(r.code,{children:"x-api-key"})," header."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Workspace"}),(0,n.jsxs)(r.td,{children:["The workspace ID is part of the URL. Don't send an ",(0,n.jsx)(r.code,{children:"anthropic-workspace-id"})," header."]})]})]})]}),`
`,(0,n.jsx)(r.p,{children:"The client builds the base URL from your project, location, and workspace ID, in this shape:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",children:`https://claude.googleapis.com/v1/projects/{project}/locations/global/workspaces/{workspace}/invoke
`})}),`
`,(0,n.jsx)(r.h2,{id:"connect-claude-code",children:"Connect Claude Code"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Claude Code can reach Claude models through the same project."})," Its usage is billed through Google Cloud Marketplace, like any other request to this service. You don't need to log in to an Anthropic account, or to log out of one. To connect it, follow these steps in order."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Check your Google sign-in."}),' Make sure that at step 3 of "Give yourself access" you signed in with the account that has ',(0,n.jsx)(r.code,{children:"roles/claude.user"}),", because Claude Code uses those Application Default Credentials. If you used another account, run that step's command again and sign in with the right one."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add three variables to your settings file."})," They go in the ",(0,n.jsx)(r.code,{children:"env"})," block of your user settings file, ",(0,n.jsx)(r.code,{children:"~/.claude/settings.json"}),". If the file already exists, keep its other settings and put the three variables in its ",(0,n.jsx)(r.code,{children:"env"})," block, adding the block if it has none. If the file doesn't exist, create it with this content, using your own project ID and workspace ID:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "env": {
    "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD": "1",
    "ANTHROPIC_GOOGLE_CLOUD_PROJECT": "my-project-id",
    "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID": "wrkspc_01AbCdEf23GhIj"
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["The first variable sends Claude Code's model requests to this service, and the other two name your project and workspace. For a team, put the same ",(0,n.jsx)(r.code,{children:"env"})," block in a managed settings file on each developer's machine, as the docs on ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/claude-models-on-google-cloud-anthropic-managed#set-up-claude-code-for-a-team",children:"setting up Claude Code for a team"})," explain."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Start Claude Code and check the provider."})," Run ",(0,n.jsx)(r.code,{children:"claude"}),", then run ",(0,n.jsx)(r.code,{children:"/status"})," at the Claude Code prompt. The ",(0,n.jsx)(r.code,{children:"API provider"})," line contains ",(0,n.jsx)(r.code,{children:"on Google Cloud"}),". Check that the ",(0,n.jsx)(r.code,{children:"GCP project"})," and ",(0,n.jsx)(r.code,{children:"Workspace ID"})," lines show the IDs you just saved. If Claude Code asks you to log in, or ",(0,n.jsx)(r.code,{children:"/status"})," shows another provider or no ",(0,n.jsx)(r.code,{children:"API provider"})," line, make the checks after these steps before you go on."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Send Claude Code a prompt."})," A short one, such as ",(0,n.jsx)(r.code,{children:"Hello, Claude"}),", is enough. A reply confirms that your credentials and IAM role work. If you get an error instead, look up its message and fix in ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/claude-models-on-google-cloud-anthropic-managed#troubleshooting",children:"the Claude Code troubleshooting docs"}),". If ",(0,n.jsx)(r.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})," is set, Claude Code uses the file it names and ignores your sign-in, even when a reply comes back. In that case, exit Claude Code, run ",(0,n.jsx)(r.code,{children:"unset GOOGLE_APPLICATION_CREDENTIALS"})," in the same terminal, and start it again."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["If step 3 asked you to log in, or ",(0,n.jsx)(r.code,{children:"/status"})," showed another provider or no ",(0,n.jsx)(r.code,{children:"API provider"})," line, check these things:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD"})," is ",(0,n.jsx)(r.code,{children:"1"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"claude --version"})," prints 2.1.307 or later. If it's older, run ",(0,n.jsx)(r.code,{children:"claude update"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"CLAUDE_CODE_USE_BEDROCK"}),", ",(0,n.jsx)(r.code,{children:"CLAUDE_CODE_USE_FOUNDRY"}),", and ",(0,n.jsx)(r.code,{children:"CLAUDE_CODE_USE_ANTHROPIC_AWS"})," aren't set. Remove them from your shell and your ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/settings#find-or-create-your-settings-files",children:"settings files"}),". ",(0,n.jsx)(r.code,{children:"CLAUDE_CODE_USE_VERTEX"}),", the Google managed switch, can stay set."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"After you change a variable, restart Claude Code."}),`
`,(0,n.jsx)(r.p,{children:"When you need them, these topics are in the Claude Code docs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/claude-models-on-google-cloud-anthropic-managed#pin-model-versions",children:"Pinning model versions"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/feature-availability#summary-by-provider",children:"Which Claude Code features work on this service"})}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"where-to-go-next",children:"Where to go next"}),`
`,(0,n.jsxs)(r.p,{children:["Take ",(0,n.jsx)(r.a,{href:"/courses/claude-platform-101",children:"Claude Platform 101"})," next. It teaches what ",(0,n.jsx)(r.code,{children:"messages"}),", ",(0,n.jsx)(r.code,{children:"max_tokens"}),", and models are. Then take ",(0,n.jsx)(r.a,{href:"/courses/tool-use-with-the-messages-api",children:"Tool use with the Messages API"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Whenever a sample, in these courses or in the docs, creates an ",(0,n.jsx)(r.code,{children:"anthropic.Anthropic()"})," client, swap its import and client before you run it."]})," Skip any step that gets or stores an API key or checks for credit, because this service doesn't use API keys and bills through Google Cloud. Some lessons use TypeScript, and the docs list ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#install-an-sdk",children:"the package and client for each language"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["For Claude Code, take ",(0,n.jsx)(r.a,{href:"/courses/claude-code-101",children:"Claude Code 101"}),", then ",(0,n.jsx)(r.a,{href:"/courses/claude-code-in-action",children:"Claude Code in action"}),". Skip any step that logs in to an Anthropic account, because Claude Code reaches Claude through your project."]}),`
`,(0,n.jsx)(r.p,{children:"When you need them, these topics are in the docs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#migrating-from-google-managed",children:"Migrating from Google managed"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/manage-claude/cmek-google-cloud-kms",children:"Customer-managed encryption keys (CMEK)"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#monitoring-and-logging",children:"Monitoring and logging"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#rate-limits",children:"Rate limits"})}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};