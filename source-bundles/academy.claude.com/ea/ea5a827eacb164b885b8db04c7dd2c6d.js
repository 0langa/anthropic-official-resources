import{$p as e,Zp as t}from"../../../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:i,LessonVideo:o}=r;return i||a("CodeCommand",!0),o||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{youtubeId:"j0ftK_R5DTs",title:"Your first API call",children:(0,n.jsx)(r.p,{children:`Saying hi to Claude might warm your heart, but it's not really useful. In
this lesson we'll send Claude something real and get structured insight
back — in just under 20 lines of code.`})}),`
`,(0,n.jsx)(r.h2,{id:"get-set-up",children:"Get set up"}),`
`,(0,n.jsxs)(r.p,{children:["First, grab an ",(0,n.jsx)(r.strong,{children:"API key"})," from platform.claude.com. New accounts get a small amount of free credit to test the API, and after that you add credit there, in the Claude Console."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./009c63cba480.png",alt:"The Claude Console dialog showing a newly created API key with a Copy key button and a warning that the key won't be viewable again"})}),`
`,(0,n.jsxs)(r.p,{children:["Take the API key and store it in a ",(0,n.jsx)(r.code,{children:".env.local"})," file so it stays out of your version control. Hardcoding keys in source files is how they end up leaked on GitHub — keep them in environment files instead."]}),`
`,(0,n.jsx)(r.p,{children:"Next, install the SDK:"}),`
`,(0,n.jsx)(i,{children:"npm install @anthropic-ai/sdk"}),`
`,(0,n.jsx)(r.h2,{id:"the-anatomy-of-a-request",children:"The anatomy of a request"}),`
`,(0,n.jsxs)(r.p,{children:["Every API call goes through the ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"messages.create"})})," function. You specify three things:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"model"})," — which Claude model handles the request"]}),`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"max tokens limit"})," — a cap on how long the response can be"]}),`
`,(0,n.jsxs)(r.li,{children:["A list of ",(0,n.jsx)(r.strong,{children:"messages"})," — objects with either ",(0,n.jsx)(r.code,{children:"user"})," or ",(0,n.jsx)(r.code,{children:"assistant"})," roles, structured similarly to how you'd have a conversation with Claude elsewhere"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Here's what that looks like in its most basic form:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:`import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const msg = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2048,
  messages: [{
    role: "user",
    content: "Hello, Claude",
  }],
});
`})}),`
`,(0,n.jsx)(r.h2,{id:"a-real-example-reviewing-buggy-code",children:"A real example: reviewing buggy code"}),`
`,(0,n.jsx)(r.p,{children:`Let's give Claude something a little more interesting than "hello." We'll point it at some buggy code and ask for a review. Here's the whole thing — one file, about 20 lines of code:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:`import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const buggyCode = \`
function add(a, b) {
  return a - b;
}
\`;

const response = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2048,
  system: "You are a terse senior code reviewer. Give feedback in one paragraph.",
  messages: [
    { role: "user", content: \`Review this code:\\n\${buggyCode}\` },
  ],
});

for (const block of response.content) {
  if (block.type === "text") {
    console.log(block.text);
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"Two things to notice here:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"system"})})," prompt is where you shape the persona. I want a terse senior reviewer, not a chatty one — so I just say that."]}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"message.content"})})," in the response is an ",(0,n.jsx)(r.strong,{children:"array of blocks"}),", not a string. For a basic text reply there's usually just one block of type ",(0,n.jsx)(r.code,{children:"text"}),", but Claude can return multiple blocks — text, tool calls, thinking — so we always loop and check the type."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Run it, and Claude spots that ",(0,n.jsx)(r.code,{children:"add"})," is subtracting and tells you in one paragraph. That's it. That's the whole API call."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0c1e5d8ceae8.png",alt:"Terminal output from running the script: Claude responds that the function is named add but uses subtraction, and suggests changing return a - b to return a + b"})}),`
`,(0,n.jsx)(r.h2,{id:"from-script-to-product",children:"From script to product"}),`
`,(0,n.jsxs)(r.p,{children:["In a real product, this same ",(0,n.jsx)(r.code,{children:"messages.create"}),` shape is the engine behind something like a summarize endpoint. Pull a meeting transcript out of the database, hand it to Claude with a system prompt that says "extract insights and risks," save the result back on the row, and return it to the UI. It's the same call — just wrapped in a route handler.`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./593ef0e73af6.png",alt:"A meetings dashboard in a demo web app listing recorded project meetings, each with a transcript preview and a Generate summary button powered by the same API call"})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Your first API call is a ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"messages.create"})})," function with a ",(0,n.jsx)(r.strong,{children:"model"}),", a ",(0,n.jsx)(r.strong,{children:"token limit"}),", and ",(0,n.jsx)(r.strong,{children:"messages"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["Store your API key in a ",(0,n.jsx)(r.code,{children:".env.local"})," file to keep it out of version control."]}),`
`,(0,n.jsxs)(r.li,{children:["Add a ",(0,n.jsx)(r.strong,{children:"system prompt"})," to shape Claude's behavior."]}),`
`,(0,n.jsxs)(r.li,{children:["The response ",(0,n.jsx)(r.code,{children:"content"})," is an array of blocks — loop and check each block's ",(0,n.jsx)(r.code,{children:"type"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"From here, everything builds on this pattern."}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};