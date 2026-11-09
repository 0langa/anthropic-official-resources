import{r as e,t}from"../../../react-tdxv2e9w.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When your company buys Claude through Google Cloud's Agent Platform, Claude Code, Claude Desktop, and the applications you build all reach Claude through your own Google Cloud project."})," You sign in with Google Cloud credentials, so you don't need an Anthropic API key, and Google Cloud bills the usage."]}),`
`,(0,n.jsxs)(r.p,{children:["Setup has four parts. Someone gets the project ready once, then each person gives themselves access. Next, you send Claude one request from your terminal and get its reply. After that, you point the app you use at the project. If you only call Claude from your own code, you can stop at the reply. For Claude Code, you're done when it answers you and ",(0,n.jsx)(r.code,{children:"/status"})," shows your project ID."]}),`
`,(0,n.jsx)(r.p,{children:"Google Cloud sells Claude as two services, and they're set up differently. So the first job is to check which one you have."}),`
`,(0,n.jsx)(r.h2,{id:"check-which-service-you-have",children:"Check which service you have"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"The two services differ in who operates Claude."})," On Claude Models on Google Cloud (Google managed), Google operates the Claude models as part of Google Cloud's Agent Platform, formerly Vertex AI. Agent Platform is the part of Google Cloud that these steps work in: you turn on its API, you get one of its roles, and your usage is billed as Agent Platform usage. On the Anthropic managed service, Anthropic operates the Claude API."]}),`
`,(0,n.jsx)(r.p,{children:"To tell which one is yours, look at something you already have. The table shows what to look for."}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Where to look"}),(0,n.jsx)(r.th,{children:"Google managed"}),(0,n.jsx)(r.th,{children:"Anthropic managed"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The Google Cloud console"}),(0,n.jsx)(r.td,{children:"Claude models in Model Garden"}),(0,n.jsxs)(r.td,{children:["The option labeled ",(0,n.jsx)(r.strong,{children:"Anthropic managed"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The SDK client in your code"}),(0,n.jsxs)(r.td,{children:["Its name contains ",(0,n.jsx)(r.code,{children:"Vertex"}),", as in ",(0,n.jsx)(r.code,{children:"AnthropicVertex"})]}),(0,n.jsxs)(r.td,{children:["Its name contains ",(0,n.jsx)(r.code,{children:"GoogleCloud"})]})]})]})]}),`
`,(0,n.jsx)(r.p,{children:"Model Garden is the part of the Google Cloud console where each model has its own card."}),`
`,(0,n.jsxs)(r.p,{children:["Request URLs are a third sign. On Google managed, they point at an Agent Platform host, and the URL path contains ",(0,n.jsx)(r.code,{children:".../publishers/anthropic/models/{model}"}),". The ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/overview",children:"overview of the two services"})," lists the hosts."]}),`
`,(0,n.jsxs)(r.p,{children:["If you have Anthropic managed, follow ",(0,n.jsx)(r.a,{href:"/tutorials/set-up-claude-on-google-cloud-anthropic-managed",children:"Set up Claude on Google Cloud (Anthropic managed)"})," instead. If you call ",(0,n.jsx)(r.code,{children:"api.anthropic.com"})," with an API key, you use neither service."]}),`
`,(0,n.jsx)(r.h2,{id:"what-you-need-and-what-it-costs",children:"What you need, and what it costs"}),`
`,(0,n.jsx)(r.p,{children:"Have these ready before you start:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A Google Cloud project with billing on, and its project ID"}),`
`,(0,n.jsxs)(r.li,{children:["Quota for the Claude models you'll use, in the region you'll use. Google's ",(0,n.jsx)(r.a,{href:"https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/quotas",children:"Quotas for Anthropic Claude models"})," lists the default quotas and says where to view your project's or request more."]}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.a,{href:"https://cloud.google.com/sdk/docs/install",children:"gcloud CLI"}),", Google Cloud's command-line tool"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"curl"})," and a Bash shell, to send the test request"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/setup",children:"Claude Code"}),", version 2.1.293 or later, if you'll use it. To update it, run ",(0,n.jsx)(r.code,{children:"claude update"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Wherever a command below shows ",(0,n.jsx)(r.code,{children:"YOUR-PROJECT-ID"})," or ",(0,n.jsx)(r.code,{children:"PROJECT_ID"}),", replace it with your project ID."]}),`
`,(0,n.jsxs)(r.p,{children:["If you've just installed the gcloud CLI, sign it in with ",(0,n.jsx)(r.code,{children:"gcloud auth login"})," or ",(0,n.jsx)(r.code,{children:"gcloud init"}),`. That's the gcloud CLI's own login, and the test request uses it. Application Default Credentials, which Claude Code uses, are a separate sign-in that comes under "Give yourself access."`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Google Cloud bills the usage, as Agent Platform usage."})," That includes what you send from Claude Code or Claude Desktop. To look up prices, start from the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#billing",children:"billing section of this service's docs page"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"get-the-project-ready-once",children:"Get the project ready, once"}),`
`,(0,n.jsxs)(r.p,{children:["Before anyone can call Claude from a project, the project needs the Agent Platform API turned on and a Claude model enabled. ",(0,n.jsx)(r.strong,{children:"These steps are done once per Google Cloud project, usually by an admin."}),' If someone has already done them for yours, go on to "Give yourself access."']}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Turn on the Agent Platform API. Point gcloud at the project, then enable the service ",(0,n.jsx)(r.code,{children:"aiplatform.googleapis.com"}),"."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud config set project YOUR-PROJECT-ID
gcloud services enable \\
  aiplatform.googleapis.com
`})}),`
`,(0,n.jsxs)(r.p,{children:["Google's ",(0,n.jsx)(r.a,{href:"https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/use-claude",children:"Before you begin steps for Claude models"})," cover this step and the billing check."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Enable the Claude models you'll use, in Model Garden. Google lists ",(0,n.jsx)(r.a,{href:"https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/use-claude",children:"the Claude model cards"}),". Open the card for each model and click ",(0,n.jsx)(r.strong,{children:"Enable"}),". For Claude Code, enable ",(0,n.jsx)(r.code,{children:"claude-opus-5-5"}),", ",(0,n.jsx)(r.code,{children:"claude-sonnet-5-5"}),", ",(0,n.jsx)(r.code,{children:"claude-haiku-5-5"}),", and ",(0,n.jsx)(r.code,{children:"claude-sonnet-5"}),". You pin the first three when you connect Claude Code. Don't pin Claude Sonnet 5. With these pins, it's the ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/permission-modes#default-classifier-model",children:"default model that checks actions in auto mode"}),", which is the mode interactive sessions start in on this service unless you set another. Without the pins, Claude Code uses a ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/google-vertex-ai#5-pin-model-versions",children:"default Claude Sonnet model"})," that's ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#api-model-ids",children:"deprecated on this service"}),"."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Whoever clicks ",(0,n.jsx)(r.strong,{children:"Enable"})," must have the ",(0,n.jsx)(r.a,{href:"https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/use-partner-models",children:"Consumer Procurement Entitlement Manager"})," role in Identity and Access Management (IAM). Its ID is ",(0,n.jsx)(r.code,{children:"roles/consumerprocurement.entitlementManager"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"give-yourself-access",children:"Give yourself access"}),`
`,(0,n.jsx)(r.p,{children:"The project is ready, but your own account still needs permission to call Claude and a sign-in Claude Code can use. Each person does these steps for their own account."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Point gcloud at the project."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud config set project YOUR-PROJECT-ID
`})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Get a role that lets you call Claude. The identity making the calls needs an IAM role that includes the ",(0,n.jsx)(r.code,{children:"aiplatform.endpoints.predict"})," permission, such as Agent Platform User (",(0,n.jsx)(r.code,{children:"roles/aiplatform.user"}),"). This command grants that role:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud projects add-iam-policy-binding \\
  PROJECT_ID \\
  --member=PRINCIPAL \\
  --role=roles/aiplatform.user
`})}),`
`,(0,n.jsxs)(r.p,{children:["Replace ",(0,n.jsx)(r.code,{children:"PRINCIPAL"})," with ",(0,n.jsx)(r.code,{children:"user:"})," and then your email address, for example, ",(0,n.jsx)(r.code,{children:"user:you@example.com"}),". ",(0,n.jsx)(r.a,{href:"https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/use-partner-models",children:"Google's page on granting access"})," shows the other forms ",(0,n.jsx)(r.code,{children:"PRINCIPAL"})," can take. If you aren't allowed to change the project's IAM policy, ask an admin to run the command for you."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Sign in with Application Default Credentials. These are the Google Cloud credentials Claude Code uses when it calls Claude."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud auth application-default login
`})}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"send-claude-a-test-request",children:"Send Claude a test request"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Send Claude one request before you connect an app."})," A reply tells you that the project and your access both work. The request calls the Agent Platform API directly, as an application you build does."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Check which account the gcloud CLI is signed in as. The request gets its token from the gcloud CLI's own login, not from Application Default Credentials."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud auth list
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The active account must be the one that has the role from "Give yourself access." If it isn't, run `,(0,n.jsx)(r.code,{children:"gcloud auth login"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Send the request. Replace ",(0,n.jsx)(r.code,{children:"YOUR-PROJECT-ID"})," first. Google Cloud bills this request as it does any other."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`curl https://aiplatform.googleapis.com/v1/projects/YOUR-PROJECT-ID/locations/global/publishers/anthropic/models/claude-opus-5-5:rawPredict \\
  -H "Authorization: Bearer $(gcloud auth print-access-token)" \\
  -H "Content-Type: application/json" \\
  -d '{
    "anthropic_version": "2026-10-21",
    "messages": [{"role": "user", "content": "Hey Claude!"}],
    "max_tokens": 100
  }'
`})}),`
`,(0,n.jsxs)(r.p,{children:["This request uses the region ",(0,n.jsx)(r.code,{children:"global"}),". If you need data residency, both the host and the path change. The docs show ",(0,n.jsxs)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#global-multi-region-and-regional-endpoints",children:["the same request on the ",(0,n.jsx)(r.code,{children:"us"})," multi-region"]}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Read the reply. It's JSON, and Claude's words are in the ",(0,n.jsx)(r.code,{children:"content"})," entry whose ",(0,n.jsx)(r.code,{children:"type"})," is ",(0,n.jsx)(r.code,{children:"text"}),". Yours will have different words and more fields than this shortened one:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "type": "message",
  "role": "assistant",
  "content": [{"type": "text", "text": "Hello! Nice to meet you."}],
  "stop_reason": "end_turn"
}
`})}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"An error comes back as JSON too, with one of these codes:"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"What to check"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"401"}),(0,n.jsxs)(r.td,{children:["The token is missing, invalid, or expired. Run ",(0,n.jsx)(r.code,{children:"gcloud auth login"}),", then send the request again."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"403"}),(0,n.jsx)(r.td,{children:'The Agent Platform API is turned on, and your active account has the role from "Give yourself access."'})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"404"}),(0,n.jsx)(r.td,{children:"The project ID and model ID in the URL are right, and the model is enabled in Model Garden."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"429"}),(0,n.jsx)(r.td,{children:"Wait a few seconds and send it again. If it comes back, check your quota."})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:["The codes are in ",(0,n.jsx)(r.a,{href:"https://docs.cloud.google.com/gemini-enterprise-agent-platform/reference/models/api-errors",children:"Google's list of API errors"}),". Once you have a reply, if an app can't reach Claude, look at that app's sign-in and settings first."]}),`
`,(0,n.jsx)(r.h2,{id:"connect-claude-code-or-claude-desktop",children:"Connect Claude Code or Claude Desktop"}),`
`,(0,n.jsxs)(r.p,{children:["With the project ready, your access in place, and a reply from Claude, point the app you use at the project. Both apps ask for the same two values: your project ID and a region. The steps below use the region ",(0,n.jsx)(r.code,{children:"global"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["If you need data residency, use the ",(0,n.jsx)(r.code,{children:"us"})," or ",(0,n.jsx)(r.code,{children:"eu"})," multi-region."]})," It costs 10 percent more than ",(0,n.jsx)(r.code,{children:"global"}),", which sends requests to any region with available capacity. Regional endpoints serve Claude Sonnet 4.6 and earlier models only. The docs compare ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#global-multi-region-and-regional-endpoints",children:"global, multi-region, and regional endpoints"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"claude-code",children:"Claude Code"}),`
`,(0,n.jsx)(r.p,{children:"The login wizard handles the Claude Code side."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Start Claude Code."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`claude
`})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Choose Agent Platform."})," At the login prompt, select ",(0,n.jsx)(r.strong,{children:"3rd-party platform"}),", then ",(0,n.jsx)(r.strong,{children:"Google Vertex AI"}),". That's the label the login prompt still uses for Google Cloud's Agent Platform. If you're already signed in, run ",(0,n.jsx)(r.code,{children:"/login"})," to open the same menu."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Follow the wizard's prompts."})," When it asks how you authenticate to Google Cloud, choose Application Default Credentials from ",(0,n.jsx)(r.code,{children:"gcloud"}),', which you set up in "Give yourself access." Then give it your project ID and the region ',(0,n.jsx)(r.code,{children:"global"}),". The wizard verifies which Claude models your project can invoke and lets you pin them. Pin all three: ",(0,n.jsx)(r.code,{children:"claude-opus-5-5"}),", ",(0,n.jsx)(r.code,{children:"claude-sonnet-5-5"}),", and ",(0,n.jsx)(r.code,{children:"claude-haiku-5-5"}),". If the wizard starts from a different version of a model, change it before you pin. With a Haiku model pinned, Claude Code uses it for background tasks. The wizard saves the result to your user settings file, so you don't need to export environment variables yourself."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Send Claude Code a message."})," When it answers, Claude Code is reaching Claude through Google Cloud."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Check that it's using the project you meant."})," Run ",(0,n.jsx)(r.code,{children:"/status"}),". The ",(0,n.jsx)(r.code,{children:"API provider"})," line shows ",(0,n.jsx)(r.code,{children:"Google Vertex AI"}),". The ",(0,n.jsx)(r.code,{children:"GCP project"}),", ",(0,n.jsx)(r.code,{children:"Default region"}),", and ",(0,n.jsx)(r.code,{children:"Model"}),' lines show your project ID, your region, and the resolved model. Compare the project ID with the project from "Get the project ready, once."']}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Claude Opus models have a higher per-token price than Sonnet models."})," With all three pinned, Claude Code's primary model is still Opus, so you're billed at the Opus rate until you switch models with ",(0,n.jsx)(r.code,{children:"/model"}),". To change your model pins, project, region, or credentials later, run ",(0,n.jsx)(r.code,{children:"/setup-vertex"})," to reopen the wizard."]}),`
`,(0,n.jsxs)(r.p,{children:["To set Claude Code up without the wizard, for example, in CI or a scripted rollout, set these environment variables in the shell where you start ",(0,n.jsx)(r.code,{children:"claude"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`export CLAUDE_CODE_USE_VERTEX=1
export CLOUD_ML_REGION=global
export ANTHROPIC_VERTEX_PROJECT_ID=YOUR-PROJECT-ID
export ANTHROPIC_DEFAULT_OPUS_MODEL='claude-opus-5-5'
export ANTHROPIC_DEFAULT_SONNET_MODEL='claude-sonnet-5-5'
export ANTHROPIC_DEFAULT_HAIKU_MODEL='claude-haiku-5-5'
`})}),`
`,(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"/status"})," then shows no ",(0,n.jsx)(r.code,{children:"API provider"})," line, the variables aren't reaching the process. The ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/google-vertex-ai#set-up-manually",children:"manual setup steps"})," cover the rest, including how to pin model versions for a team."]}),`
`,(0,n.jsx)(r.h3,{id:"claude-desktop",children:"Claude Desktop"}),`
`,(0,n.jsx)(r.p,{children:"Claude Desktop can use Claude models through the same project, and Claude Cowork sessions run in that app. An IT administrator usually deploys it to every device, so ask whether yours already has. To try it on one device, fill in the same values by hand."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Open the ",(0,n.jsx)(r.a,{href:"https://claude.com/docs/third-party/claude-desktop/in-app-configuration#open-the-configuration-window",children:"in-app configuration window"}),"."]})," Go to ",(0,n.jsx)(r.strong,{children:"Help → Troubleshooting → Enable Developer Mode"}),", then ",(0,n.jsx)(r.strong,{children:"Developer → Configure Third-Party Inference…"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Choose the provider."})," In the ",(0,n.jsx)(r.strong,{children:"Connection"})," section, set ",(0,n.jsx)(r.strong,{children:"Inference provider"})," to ",(0,n.jsx)(r.strong,{children:"Vertex AI"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Fill in the Vertex AI credentials card."})," Put your project ID in ",(0,n.jsx)(r.strong,{children:"GCP project ID"})," and a region in ",(0,n.jsx)(r.strong,{children:"GCP region"}),". The region can be ",(0,n.jsx)(r.code,{children:"global"}),". Then provide exactly one credential source. ",(0,n.jsx)(r.strong,{children:"GCP credentials file path"})," accepts the file that ",(0,n.jsx)(r.code,{children:"gcloud auth application-default login"})," produces. Google lists ",(0,n.jsx)(r.a,{href:"https://docs.cloud.google.com/docs/authentication/application-default-credentials#personal",children:"where that file is saved"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add a model."})," Under ",(0,n.jsx)(r.strong,{children:"Models"}),", add at least one ",(0,n.jsx)(r.strong,{children:"Model list"})," entry, using the publisher model ID of a model you enabled, for example, ",(0,n.jsx)(r.code,{children:"claude-opus-5-5"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Apply the settings."})," Click ",(0,n.jsx)(r.strong,{children:"Apply Changes"}),". The app writes the configuration to this device only and relaunches into it. Then send a message to check that Claude answers."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://claude.com/docs/third-party/claude-desktop/vertex",children:"Deploy Claude Desktop on 3P with Google Cloud's Agent Platform"})," covers the other ways to sign in and how to push the settings to every device."]}),`
`,(0,n.jsx)(r.h2,{id:"if-it-doesnt-work",children:"If it doesn't work"}),`
`,(0,n.jsx)(r.p,{children:"These errors can stop Claude Code from reaching Claude. Find yours in the table, then apply its fix."}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"What you see"}),(0,n.jsx)(r.th,{children:"What to do"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:'"Could not load the default credentials"'}),(0,n.jsxs)(r.td,{children:["Run ",(0,n.jsx)(r.code,{children:"gcloud auth application-default login"})," to set up Application Default Credentials."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:'"model not found", a 404 error'}),(0,n.jsxs)(r.td,{children:["Confirm that the model is enabled in Model Garden. Then verify that the model is available in the location you specified. With the region ",(0,n.jsx)(r.code,{children:"global"}),', check in Model Garden, under "Supported features", that your models support global endpoints.']})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"A quota issue"}),(0,n.jsxs)(r.td,{children:["Check your current quotas or request a quota increase through the ",(0,n.jsx)(r.a,{href:"https://cloud.google.com/docs/quotas/view-manage",children:"Cloud Console"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"A 429 error"}),(0,n.jsxs)(r.td,{children:["On a regional endpoint, make sure that the primary model and the small, fast model are supported in your region. Consider switching to the region ",(0,n.jsx)(r.code,{children:"global"})," for better availability, unless you need data residency. If you already use ",(0,n.jsx)(r.code,{children:"global"}),", ",(0,n.jsx)(r.code,{children:"us"}),", or ",(0,n.jsx)(r.code,{children:"eu"}),", check your quotas or request an increase through the ",(0,n.jsx)(r.a,{href:"https://cloud.google.com/docs/quotas/view-manage",children:"Cloud Console"}),"."]})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"A model can be missing from a location."})," Some models are offered only on ",(0,n.jsx)(r.code,{children:"global"})," or multi-region locations such as ",(0,n.jsx)(r.code,{children:"eu"})," and ",(0,n.jsx)(r.code,{children:"us"}),", not in specific regions. If you change your region, verify that your models are available there."]}),`
`,(0,n.jsxs)(r.p,{children:["These fixes come from ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/google-vertex-ai#troubleshooting",children:"Troubleshooting in Claude Code on Google Cloud's Agent Platform"}),", which goes further. For Claude Desktop, start from ",(0,n.jsx)(r.a,{href:"https://claude.com/docs/third-party/claude-desktop/vertex#troubleshoot",children:"its own Troubleshoot section"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"where-to-go-next",children:"Where to go next"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Keep your project ID and your region where you can find them."})," Claude Code, Claude Desktop, and the SDK clients all ask for them."]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"To learn Claude Code,"})," take ",(0,n.jsx)(r.a,{href:"/courses/claude-code-101",children:"Claude Code 101"}),", then ",(0,n.jsx)(r.a,{href:"/courses/claude-code-in-action",children:"Claude Code in action"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"To learn Claude Cowork,"})," take ",(0,n.jsx)(r.a,{href:"/courses/introduction-to-claude-cowork",children:"Introduction to Claude Cowork"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"To call Claude from your own code,"})," follow the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed",children:"Google managed docs page"}),". It shows how to install an SDK and make a request with the ",(0,n.jsx)(r.code,{children:"AnthropicVertex"})," client."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For more on the service itself, the docs have a section on each of these:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#global-multi-region-and-regional-endpoints",children:"Global, multi-region, and regional endpoints"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#rate-limits",children:"Rate limits"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#activity-logging",children:"Monitoring and logging"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed#billing",children:"Billing"})}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};