import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={a:"a",code:"code",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"In the next video we will be making a request to Vertex AI in order to call a Claude model. To do so, you need to go through a little bit of setup."}),`
`,(0,n.jsx)(r.h4,{children:"Step One: Ensure Anthropic models are enabled in Vertex"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["In your browser, navigate to ",(0,n.jsx)(r.a,{href:"https://console.cloud.google.com/vertex-ai/dashboard",children:"https://console.cloud.google.com/vertex-ai/dashboard"})]}),`
`,(0,n.jsxs)(r.li,{children:["In the left hand nav, click on ",(0,n.jsx)(r.strong,{children:"'Model Garden'"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.img,{src:"./4ed45039d908.png",alt:""})})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["In the ",(0,n.jsx)(r.strong,{children:"'Search models'"})," box, enter ",(0,n.jsx)(r.strong,{children:"'Anthropic'"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.img,{src:"./62117edb2bb3.png",alt:""})})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Click on the model that you want to use."}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:"Step Two: Enable the Model"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Once you've found the model you want to use, you may need to enable it. On the model information page, click the ",(0,n.jsx)(r.strong,{children:"'Enable'"})," button"]}),`
`,(0,n.jsxs)(r.li,{children:["If you don't see an ",(0,n.jsx)(r.strong,{children:"'Enable'"})," button then you already have access to the model"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6516b221ada0.png",alt:""})}),`
`,(0,n.jsx)(r.h4,{children:"Step Three: Install the gcloud CLI"}),`
`,(0,n.jsxs)(r.p,{children:["If you don't already have the gcloud CLI installed, follow the directions here to install and authenticate with the CLI: ",(0,n.jsx)(r.a,{href:"https://cloud.google.com/sdk/docs/install",children:"https://cloud.google.com/sdk/docs/install"})]}),`
`,(0,n.jsx)(r.h4,{children:"Step Four: Login and set up authentication with the gcloud CLI"}),`
`,(0,n.jsx)(r.p,{children:"If you have not already logged in to the gcloud CLI, do so by running:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud init
gcloud auth login
`})}),`
`,(0,n.jsx)(r.p,{children:"Then, set your project ID and set your default credentials:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`gcloud config set project YOUR_PROJECT_ID
gcloud auth application-default login
`})}),`
`,(0,n.jsx)(r.p,{children:"That's it! The Anthropic SDK will automatically use these credentials when attempting to access Vertex."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};