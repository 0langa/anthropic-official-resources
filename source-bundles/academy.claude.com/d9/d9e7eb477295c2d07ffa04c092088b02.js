import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Making your first API request to AWS Bedrock requires three essential components: a Bedrock Runtime Client to connect to the service, a Model ID to specify which model you want to run, and a User Message containing the text you want to feed into the model."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-bedrock-client",children:"Setting Up the Bedrock Client"}),`
`,(0,n.jsx)(r.p,{children:"Start by creating a client using boto3 to connect to the Bedrock runtime service:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import boto3

client = boto3.client("bedrock-runtime", region_name="us-west-2")
`})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-model-ids-and-regional-availability",children:"Understanding Model IDs and Regional Availability"}),`
`,(0,n.jsx)(r.p,{children:"Here's where things get tricky. Not every model is available in every AWS region. If you try to run a model that doesn't exist in your chosen region, you'll get a cryptic error message saying the model doesn't exist."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c93ba7b7d44d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For example, if Claude Sonnet is available in us-west-2 but you're making requests from us-east-1, your request will fail."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bcba2fe357dd.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"using-inference-profiles",children:"Using Inference Profiles"}),`
`,(0,n.jsx)(r.p,{children:"Inference profiles solve the regional availability problem by automatically routing your requests to a region where your chosen model is actually hosted."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d4643acb25d9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Instead of tracking which models are in which regions, you can use an inference profile that knows the model is available in multiple regions like us-west-2 and us-east-2."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4789ffaf0596.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you make a request using an inference profile, AWS automatically routes it to the correct region where your model exists, even if you're connecting from a different region."}),`
`,(0,n.jsx)(r.p,{children:'To find inference profile IDs, go to the AWS Bedrock console and look under "Cross-region inference" rather than using the model ID from the main model catalog page.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8d6a91b2c219.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Copy the inference profile ID for your chosen model. The examples in this course use Claude Haiku 4.5, whose inference profile ID is ",(0,n.jsx)(r.code,{children:"us.anthropic.claude-haiku-4-5-20251001-v1:0"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"creating-user-messages",children:"Creating User Messages"}),`
`,(0,n.jsx)(r.p,{children:"User messages have a specific structure that might look overly complex at first, but there's a good reason for it:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`user_message = {
    "role": "user",
    "content": [
        {"text": "What's 1+1?"}
    ]
}
`})}),`
`,(0,n.jsx)(r.p,{children:"The content is a list because a single message can contain different types of content - text, images, or other media types. This structure allows you to send multimodal requests."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./224c2c12f355.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"making-the-request",children:"Making the Request"}),`
`,(0,n.jsx)(r.p,{children:"Now you can make your API call using the converse method:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response = client.converse(
    modelId=model_id,
    messages=[user_message]
)
`})}),`
`,(0,n.jsx)(r.p,{children:"The response contains a lot of metadata, but to get just the generated text, you need to navigate through the response structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response["output"]["message"]["content"][0]["text"]
`})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-message-types",children:"Understanding Message Types"}),`
`,(0,n.jsx)(r.p,{children:"There are two main message types you'll work with:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User messages"}),' - Content you want to feed into the model (role: "user")']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Assistant messages"}),' - Content the model has produced (role: "assistant")']}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./059b35dbd386.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Both message types follow the same structure with a role and content list. This consistency makes it easy to build conversations by alternating between user and assistant messages."}),`
`,(0,n.jsx)(r.p,{children:"The assistant message you get back from Bedrock follows the exact same format as your user message, just with a different role. This standardized structure makes it straightforward to chain multiple requests together for longer conversations."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};