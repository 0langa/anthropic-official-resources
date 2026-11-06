import{r as e,t}from"../../../react-tdxv2e9w.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"With Claude in Amazon Bedrock, you call Claude from your own AWS account."})," You use your AWS sign-in, and the usage goes on your AWS bill. One short Python file gets you a first reply from Claude. You don't need an Anthropic API key."]}),`
`,(0,n.jsx)(r.p,{children:"Before you start, you need an AWS account, Python 3.10 or later, and the AWS CLI. The AWS CLI is the tool for using AWS from a terminal."}),`
`,(0,n.jsx)(r.h2,{id:"get-permission-to-call-claude",children:"Get permission to call Claude"}),`
`,(0,n.jsx)(r.p,{children:"On this page, you sign in as a role to call Claude. A role is a set of permissions in an AWS account. That role is created in IAM Identity Center, AWS's service for signing in. IAM Identity Center is also where you sign in as that role."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"The steps below are for whoever administers your AWS account, so if that isn't you, send these steps to your admin."})," If you've never set up IAM Identity Center, start with AWS's ",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html",children:"getting started guide for IAM Identity Center"}),"."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Create a permission set."})," A permission set holds the policies that list what a role may do. Follow AWS's steps to ",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/howtocreatepermissionset.html",children:"create a permission set"}),". Add to it the AWS managed policy ",(0,n.jsx)(r.code,{children:"AmazonBedrockMantleInferenceAccess"}),", which AWS provides to allow calls to Claude in Amazon Bedrock."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Add these permissions for AWS Marketplace, AWS's store, to the same permission set."})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"aws-marketplace:Subscribe"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"aws-marketplace:Unsubscribe"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"aws-marketplace:ViewSubscriptions"})}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The first call to each Claude model in an account can start a subscription to that model through AWS Marketplace, and that call needs these permissions. The account also needs a payment method set up for AWS Marketplace purchases. These permissions are needed only for a model's first use in an account, so you can remove them from the permission set once the subscription to each model the account will use is complete."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Assign the permission set to the person who will call Claude."})," Do this in the AWS account they'll call Claude from, following AWS's steps to ",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/assignusers.html",children:"assign access to AWS accounts"}),". Assigning it creates the role in that account, named after the permission set."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"sign-in-from-your-terminal",children:"Sign in from your terminal"}),`
`,(0,n.jsx)(r.p,{children:"Ask your admin for the details you need to sign in:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The AWS account to use."}),`
`,(0,n.jsx)(r.li,{children:"The name of the role."}),`
`,(0,n.jsx)(r.li,{children:"The IAM Identity Center start URL, the web address where you sign in."}),`
`,(0,n.jsx)(r.li,{children:"The AWS Region that hosts IAM Identity Center. A Region is one of the places where AWS runs its services."}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["You sign in as the role with the AWS CLI. If you don't have it yet, ",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"install the AWS CLI"})," first. Then work through these steps in order."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Set up a sign-in profile."})," A profile is a named set of sign-in settings that the CLI saves. Run this command:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`aws configure sso
`})}),`
`,(0,n.jsx)(r.p,{children:"It asks its questions one at a time. Answer the first ones like this:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["For the session name, enter any short name, such as ",(0,n.jsx)(r.code,{children:"my-sso"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"For the start URL, enter the one your admin gave you."}),`
`,(0,n.jsx)(r.li,{children:"For the Region that hosts IAM Identity Center, enter the one your admin gave you."}),`
`,(0,n.jsxs)(r.li,{children:["For the registration scopes, enter ",(0,n.jsx)(r.code,{children:"sso:account:access"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Next the command opens your browser, and you sign in there. If the browser doesn't open, follow the instructions the command prints. When the command lists AWS accounts and then roles, pick the account and the role your admin named."}),`
`,(0,n.jsx)(r.p,{children:"At the end it asks for these settings:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["For the profile's Region, enter ",(0,n.jsx)(r.code,{children:"us-east-1"}),", which is US East (N. Virginia)."]}),`
`,(0,n.jsxs)(r.li,{children:["For the output format, enter ",(0,n.jsx)(r.code,{children:"json"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["For the profile name, enter ",(0,n.jsx)(r.code,{children:"default"}),". The CLI uses the ",(0,n.jsx)(r.code,{children:"default"})," profile when a command doesn't name one, so the commands below run as written."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Sign in."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`aws sso login
`})}),`
`,(0,n.jsx)(r.p,{children:'Your browser opens. Finish signing in there, and the terminal prints a line that starts "Successfully logged into Start URL". The CLI now holds your credentials. Credentials are short-lived keys that prove to AWS who you are. When they expire, run this command again.'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Check which account and role you're signed in as."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`aws sts get-caller-identity
`})}),`
`,(0,n.jsxs)(r.p,{children:["In the output, ",(0,n.jsx)(r.code,{children:"Account"})," should be the ID of your AWS account. ",(0,n.jsx)(r.code,{children:"Arn"})," is AWS's full name for the role you're signed in as, and it should include the name of the role you picked. If either is wrong, run ",(0,n.jsx)(r.code,{children:"aws configure sso"})," again and pick the right account and role."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"get-a-first-reply",children:"Get a first reply"}),`
`,(0,n.jsx)(r.p,{children:"Now send Claude one request from Python."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Install Anthropic's Python SDK, with its Amazon Bedrock support."})," The SDK is Anthropic's library for calling Claude from code."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`pip install -U "anthropic[bedrock]"
`})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:["Save this file as ",(0,n.jsx)(r.code,{children:"first_reply.py"}),"."]})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from anthropic import (
    AnthropicBedrockMantle,
)

client = AnthropicBedrockMantle(
    aws_region="us-east-1",
)

message = client.messages.create(
    model="anthropic.claude-sonnet-5",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": "Hello, Claude",
    }],
)

for block in message.content:
    if block.type == "text":
        print(block.text)
`})}),`
`,(0,n.jsxs)(r.p,{children:["The file creates a client, the object your code sends requests through. The client is for Claude in Amazon Bedrock in ",(0,n.jsx)(r.code,{children:"us-east-1"}),", the Region you gave your profile."]}),`
`,(0,n.jsx)(r.p,{children:"The client finds your AWS credentials by itself, including the ones from your IAM Identity Center sign-in, so no key goes in the file."}),`
`,(0,n.jsxs)(r.p,{children:['The file then sends one message, "Hello, Claude", to Claude Sonnet 5. The ',(0,n.jsx)(r.code,{children:"model"})," line names that model by its model ID. Last, the file prints the text of Claude's reply."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Run the file."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`python first_reply.py
`})}),`
`,(0,n.jsx)(r.p,{children:`Claude's reply prints in your terminal. If Python stops with an error instead, go to "If the request fails" below.`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Check the account again."})," In the same terminal, run ",(0,n.jsx)(r.code,{children:"aws sts get-caller-identity"}),". It shows which account and role you're signed in as. The usage goes on your AWS bill, so make sure the account is the one your admin named."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"if-the-request-fails",children:"If the request fails"}),`
`,(0,n.jsxs)(r.p,{children:["When a request fails, the SDK raises an error, which Python prints in the terminal. Look in that output for ",(0,n.jsx)(r.code,{children:"PermissionDeniedError"})," or ",(0,n.jsx)(r.code,{children:"NotFoundError"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"a-permission-error",children:"A permission error"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"PermissionDeniedError"})," means AWS refused the request with status 403. A status is the number a server sends back to say how a request went. The credentials you sent aren't allowed to make this request. Try these fixes in order:"]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Sign in again, because your sign-in may have expired. Run ",(0,n.jsx)(r.code,{children:"aws sso login"}),", then run ",(0,n.jsx)(r.code,{children:"first_reply.py"})," again."]}),`
`,(0,n.jsx)(r.li,{children:'Ask your admin to check that the role and the account have everything listed under "Get permission to call Claude."'}),`
`,(0,n.jsxs)(r.li,{children:["If this is the first call to Claude Sonnet 5 in your account, wait 2 minutes after the permissions are in place, then run ",(0,n.jsx)(r.code,{children:"first_reply.py"})," again. The subscription to the model can take up to 2 minutes to complete, and calls may be refused until it's done."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"a-not-found-error",children:"A not-found error"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"NotFoundError"})," means AWS answered with status 404 and couldn't find something the request named. Check the model ID in ",(0,n.jsx)(r.code,{children:"first_reply.py"}),". Model IDs in Claude in Amazon Bedrock start with ",(0,n.jsx)(r.code,{children:"anthropic."}),", so it must read ",(0,n.jsx)(r.code,{children:"anthropic.claude-sonnet-5"})," exactly."]}),`
`,(0,n.jsx)(r.h3,{id:"any-other-error",children:"Any other error"}),`
`,(0,n.jsxs)(r.p,{children:["Look up any other error on AWS's page of ",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html",children:"Amazon Bedrock error codes"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"where-to-go-next",children:"Where to go next"}),`
`,(0,n.jsxs)(r.p,{children:["Next, take the course ",(0,n.jsx)(r.a,{href:"/courses/claude-platform-101",children:"Claude Platform 101"}),", which teaches building on the Claude Platform. Several of its lessons have Python samples that create their client with ",(0,n.jsx)(r.code,{children:"anthropic.Anthropic()"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["In those samples, use the import, the client line, and the model ID from ",(0,n.jsx)(r.code,{children:"first_reply.py"})," instead."]})," Some of the course's samples use features that Claude in Amazon Bedrock does not support, which the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock",children:"Claude in Amazon Bedrock docs page"})," lists."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};