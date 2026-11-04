import{ah as e,sh as t}from"../../../content-de-meta-c2f0og8i.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Claude Models on Google Cloud (Anthropic managed) lets you call Claude through your own Google Cloud project."})," Anthropic operates the Claude API. Google Cloud handles access, so you sign in with your Google credentials. Once the project is set up and your account has access, a first reply takes a few lines of Python."]}),`
`,(0,n.jsx)(r.h2,{id:"check-which-service-you-have",children:"Check which service you have"}),`
`,(0,n.jsx)(r.p,{children:"Google Cloud offers Claude as two services, and each has its own setup. The steps here are for Anthropic managed. The other service is Google managed, where Google operates Claude models as part of Google Cloud's Agent Platform. To tell which service you have, find a value you already have in this table."}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"What you already have"}),(0,n.jsx)(r.th,{children:"Anthropic managed"}),(0,n.jsx)(r.th,{children:"Google managed"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The Python SDK client in your code"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"AnthropicGoogleCloud"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"AnthropicVertex"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The host in your request URLs"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"claude.googleapis.com"})}),(0,n.jsxs)(r.td,{children:["An Agent Platform host, such as ",(0,n.jsx)(r.code,{children:"aiplatform.googleapis.com"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The Google Cloud console"}),(0,n.jsx)(r.td,{children:"The option labeled Anthropic managed"}),(0,n.jsx)(r.td,{children:"Claude models in Model Garden"})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:["If your value is in the Google managed column, follow the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed",children:"Google managed guide"})," instead."]}),`
`,(0,n.jsx)(r.h2,{id:"what-you-need-and-what-it-costs",children:"What you need, and what it costs"}),`
`,(0,n.jsx)(r.p,{children:"You need these before you start:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A Google Cloud project"}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.a,{href:"https://cloud.google.com/sdk/docs/install",children:"gcloud CLI"}),", installed"]}),`
`,(0,n.jsx)(r.li,{children:"Python 3.10 or later"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You don't need an Anthropic API key, because this service doesn't use API keys."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Usage is billed, and the SDK client for this service is in beta."})," Billing goes through Google Cloud Marketplace, so the charges appear on your Google Cloud bill and Anthropic doesn't send a separate invoice. The one request you send here is billed too."]}),`
`,(0,n.jsxs)(r.p,{children:["The commands below use placeholder values. Replace ",(0,n.jsx)(r.code,{children:"my-project-id"})," with your project ID, ",(0,n.jsx)(r.code,{children:"you@example.com"})," with your Google account, and ",(0,n.jsx)(r.code,{children:"wrkspc_01AbCdEf23GhIj"})," with your workspace ID, which the next section explains."]}),`
`,(0,n.jsx)(r.h2,{id:"get-the-project-ready-once",children:"Get the project ready, once"}),`
`,(0,n.jsx)(r.p,{children:"These steps create a new Anthropic organization for your Google Cloud project. It's separate from any Anthropic organization your company already has. The new organization starts with one workspace, the Default Workspace, and everyone who calls this service needs that workspace's ID."}),`
`,(0,n.jsx)(r.p,{children:'An admin usually does this part. If yours already has, ask them for the workspace ID and go on to "Give yourself access".'}),`
`,(0,n.jsx)(r.p,{children:"Whoever does the steps needs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Permission to purchase in Google Cloud Marketplace on your billing account."}),`
`,(0,n.jsx)(r.li,{children:"Permission to enable services on the project."}),`
`,(0,n.jsxs)(r.li,{children:["An IAM role that lets you open the Claude Console, at ",(0,n.jsx)(r.code,{children:"platform.claude.com"}),", which step 4 needs. Of the three predefined IAM roles, only ",(0,n.jsx)(r.code,{children:"roles/claude.admin"})," on the project does."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Work through the steps in order."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Subscribe in Marketplace."}),' Open Google Cloud Marketplace and find the Claude Models on Google Cloud (Anthropic managed) listing. Click "Subscribe" and complete the purchase flow. Then return to the listing and click "Manage on Console", which opens the Claude page in the Google Cloud console.']}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Enable two services on the project."})," Run this command:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud services enable claude.googleapis.com \\
  anthropic-managed-claude.cloudpartnerservices.goog \\
  --project=my-project-id
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"claude.googleapis.com"})," serves the API, and calls fail without it. The second is the Marketplace service that attributes the project's usage to your subscription."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Activate the Anthropic organization."}),` On the Claude page, click "Activate". In the Anthropic setup flow, enter a contact email address, then open the setup link sent to that address. Fill in the organization's name, entity type, country, and intended use. Then accept Anthropic's Commercial Terms of Service and Usage Policy.`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Copy the workspace ID."}),' When the organization is active, the button on the Claude page changes to "Open Claude Console". Click it, then go to "Settings > Workspaces". The ID starts with ',(0,n.jsx)(r.code,{children:"wrkspc_"}),". Pass it on to your developers."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The Marketplace subscription is made once, so to add another project, repeat these steps in that project, starting from step 2. If a step fails, see ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#troubleshooting-account-setup",children:"troubleshooting account setup"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"give-yourself-access",children:"Give yourself access"}),`
`,(0,n.jsx)(r.p,{children:"Each developer who calls Claude does these steps in their own terminal, in order."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Set your project in gcloud."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud config set project my-project-id
`})}),`
`,(0,n.jsxs)(r.p,{children:["To see the project gcloud is using, run ",(0,n.jsx)(r.code,{children:"gcloud config get-value project"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Grant your account ",(0,n.jsx)(r.code,{children:"roles/claude.user"}),"."]})," The identity that makes the calls needs this role on the project."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud projects add-iam-policy-binding my-project-id \\
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
    messages=[{"role": "user", "content": "Hello, Claude"}],
)
print(message)
`})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Run the file."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`python first_reply.py
`})}),`
`,(0,n.jsx)(r.p,{children:"Claude's reply prints in your terminal. If you get an error instead, go to the next section."}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Check that the reply came through the project you meant."})," The client reads the project ID from ",(0,n.jsx)(r.code,{children:"ANTHROPIC_GOOGLE_CLOUD_PROJECT"}),". Run ",(0,n.jsx)(r.code,{children:'echo "$ANTHROPIC_GOOGLE_CLOUD_PROJECT"'})," in the same terminal. The value should be the ID of the project that you or your admin got ready. The project set in gcloud can be a different one, so check the variable."]}),`
`,(0,n.jsxs)(r.p,{children:["To see the same request without the SDK, read the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#making-requests",children:"cURL sample"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"if-the-first-request-fails",children:"If the first request fails"}),`
`,(0,n.jsx)(r.p,{children:"Two errors stop a first request: a permission error and a model that isn't available."}),`
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
    messages=[{"role": "user", "content": "Hello, Claude"}],
)
print(message)
`})}),`
`,(0,n.jsx)(r.p,{children:"After the swap, only the import and the client have changed:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from anthropic import AnthropicGoogleCloud

client = AnthropicGoogleCloud()

message = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello, Claude"}],
)
print(message)
`})}),`
`,(0,n.jsx)(r.p,{children:"The swap is enough because the new client takes care of what differs. A request to this service differs from a Claude API request in three ways."}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"What differs"}),(0,n.jsx)(r.th,{children:"On Anthropic managed"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Base URL"}),(0,n.jsxs)(r.td,{children:["A project-scoped URL, in place of ",(0,n.jsx)(r.code,{children:"https://api.anthropic.com"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Authentication"}),(0,n.jsxs)(r.td,{children:["An ",(0,n.jsx)(r.code,{children:"Authorization: Bearer"})," header with a Google access token. Don't send an ",(0,n.jsx)(r.code,{children:"x-api-key"})," header."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Workspace"}),(0,n.jsxs)(r.td,{children:["The workspace ID is part of the URL. Don't send an ",(0,n.jsx)(r.code,{children:"anthropic-workspace-id"})," header."]})]})]})]}),`
`,(0,n.jsx)(r.p,{children:"The client builds the base URL from your project, location, and workspace ID, in this shape:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",children:`https://claude.googleapis.com/v1/projects/{project}/locations/global/workspaces/{workspace}/invoke
`})}),`
`,(0,n.jsx)(r.h2,{id:"where-to-go-next",children:"Where to go next"}),`
`,(0,n.jsxs)(r.p,{children:["Take ",(0,n.jsx)(r.a,{href:"/courses/claude-platform-101",children:"Claude Platform 101"})," next. It teaches what ",(0,n.jsx)(r.code,{children:"messages"}),", ",(0,n.jsx)(r.code,{children:"max_tokens"}),", and models are. Then take ",(0,n.jsx)(r.a,{href:"/courses/tool-use-with-the-messages-api",children:"Tool use with the Messages API"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:["Whenever a sample, in these courses or in the docs, creates an ",(0,n.jsx)(r.code,{children:"anthropic.Anthropic()"})," client, swap its import and client before you run it."]})}),`
`,(0,n.jsx)(r.p,{children:"When you need them, these topics are in the docs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#migrating-from-google-managed",children:"Migrating from Google managed"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/manage-claude/cmek-google-cloud-kms",children:"Customer-managed encryption keys (CMEK)"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#monitoring-and-logging",children:"Monitoring and logging"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed#rate-limits",children:"Rate limits"})}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};