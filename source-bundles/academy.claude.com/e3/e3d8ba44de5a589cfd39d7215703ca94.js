import{Qm as e,Xm as t}from"../../../../../content-de-meta-j2jjwhjm.js";var n=t(),r=`# Strict tool use: Stop rejecting your own calls

If your backend ever rejected a tool call the model itself produced, well, this is the fix. With strict: true on a tool, the API constrains sampling to your schema's grammar, so Claude cannot emit invalid input. Not "usually valid," just simply cannot. A string where an integer belongs is no longer in the space of things that the model can produce. The schema needs additionalProperties: false, and the cleanest way to keep the API and your backend agreeing is to generate the schema from the same source of truth that your validator uses.

So this could be Pydantic in Python, Zod in TypeScript, etc. Structured outputs are generally available, so the standard path needs no beta header. A schema and a backend that drifts apart is exactly what you'll see in a minute.

The backend wants PE license numbers, and the tool file never says so. Keep the schema itself simple. Put numeric bounds and soft constraints in the field descriptions instead. If you use the SDK's Structured Output Helpers, they make that move for you.

If you need Claude to definitely call one of your tools, well, pair strict with tool_choice, type "any". Together, they mean a tool will be called, and its input will be valid. One caveat though is that the newest models drop forced tool choice. So on Claude Fable 5.1, that pairing returns a 400. It still works on Opus 5 and earlier. Where forced tool choice isn't supported, leave tool_choice on auto and keep strict: true and ask for the tool in your prompt. Make sure you check out the documentation just for the up-to-date specs.

So here's the stamp request tool without strict. The license number is just a string, nothing about the format. So I'm going to run 100 submissions through it and look at the license number. Every rejection is that one field.

So you can see right here "PE 46196" with the space right there. You have just the numbers alone, 71057, and then a couple of unknowns, 79 out of 100 rejected. Here's the definition that the strict run sends.

Okay, we have strict: true right here. And we can see that the license number here can be null. All right, so we have the same 100 requests, but this time with strict: true right here. Let's try it.

And you can see right here that we got zero rejections. That's what grammar constraint means. Strict controls the shape, not the truth. So 28 requests had no license right here. And you can see that all 28 came back null. So none were invented. So that's the whole trick. The API now guarantees the shape of every single call. And the only thing that your validator still checks is the business rules.

Now, four things to know before you ship this. Compiled grammars sit on their own cache, separate from message content for about a day. So keep sensitive data like PHI out of property names, enums, and regex patterns. Numeric bounds like minimum and maximum aren't part of the grammar, so write them into the description yourself. That's why this schema stays simple and why you still validate client-side. Schema limits interact across tools. Four strict tools with six optional parameters each hits the 24-parameter ceiling even though no single tool looks complex.

Past the compiled grammar limits, the API returns a 400 that says "Schema is too complex for compilation." If you're seeing that error right now, split your strict tools across requests or trim optional parameters. And JSON outputs refuse to combine with document citations. Enable citations on a document you provide. Add JSON output and the API returns a 400. Web search is different though. In my test, it ran fine with JSON output, but the JSON came back without any citations. So you'll lose the receipts.

strict: true makes invalid tool input impossible. Generate the schema from Pydantic or Zod. Keep it simple and put soft constraints in descriptions. Watch for interacting limits across tools. And remember that document citations and JSON outputs don't mix. Your backend has a validator. With strict, Claude can't produce input that fails it.
`;function i(t){let i={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{ImageFigure:a,LessonVideo:s,ResourceWidget:c}=i;return a||o("ImageFigure",!0),s||o("LessonVideo",!0),c||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{youtubeId:"iX5OdlZnmec",title:"Strict tool use: Stop rejecting your own calls",transcript:r,children:(0,n.jsx)(i.p,{children:"When your backend rejects a tool call that Claude itself produced, strict tool use is the fix. The video turns it on for one tool at Meridian, a fictional engineering consultancy, and runs the same 100 requests with it off and on."})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["The demo in this video was recorded in September 2026. It ran on Claude Haiku 4.5 (",(0,n.jsx)(i.code,{children:"claude-haiku-4-5"}),"). Results may differ on newer models."]})}),`
`,(0,n.jsxs)(i.p,{children:["Claude usually follows a tool's ",(0,n.jsx)(i.code,{children:"input_schema"}),", but nothing enforces it by default. So sometimes your backend rejects a tool call Claude made, because the call's input has one of these:"]}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:["The string ",(0,n.jsx)(i.code,{children:'"2"'})," instead of the integer ",(0,n.jsx)(i.code,{children:"2"})]}),`
`,(0,n.jsx)(i.li,{children:"A missing required field"}),`
`]}),`
`,(0,n.jsxs)(i.p,{children:["Strict tool use fixes this. ",(0,n.jsxs)(i.strong,{children:["One flag, ",(0,n.jsx)(i.code,{children:"strict: true"}),", makes the input Claude writes match your schema."]})]}),`
`,(0,n.jsxs)(i.p,{children:["At Meridian, an assistant uses the ",(0,n.jsx)(i.code,{children:"queue_stamp_request"})," tool to queue drawing sets for a licensed engineer's stamp. Meridian's validator is the code that checks every tool call. With strict off, it rejects 79 of 100 requests. With strict on and the schema generated from the validator, it rejects none."]}),`
`,(0,n.jsx)(i.h2,{id:"how-strict-tool-use-works",children:"How strict tool use works"}),`
`,(0,n.jsxs)(i.p,{children:["With ",(0,n.jsx)(i.code,{children:"strict: true"}),", the API first compiles your JSON Schema into a grammar. ",(0,n.jsx)(i.strong,{children:"A grammar is a set of rules that says which tokens may come next at each point in the input."})," Then, each time Claude picks the next token of the tool call, it can pick only a token that the grammar allows. This is called ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use",children:"grammar-constrained sampling"}),"."]}),`
`,(0,n.jsx)(a,{src:"./l2-grammar-sampling.png",alt:'The schema says revision is an integer, and Claude has written up to "revision":. Without strict, five next tokens can be picked: 3, "3", three, 3.0, and null. With strict: true, only 3 can be picked and the other four are crossed out.',children:(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["With ",(0,n.jsx)(i.code,{children:"strict: true"}),", only tokens your schema allows can be picked, so an integer field gets an integer."]})})}),`
`,(0,n.jsx)(i.p,{children:"This is Meridian's tool definition, cut down. Strict needs two of its lines, the flag and a setting the flag requires."}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:`{
  "name": "queue_stamp_request",
  "description": "Queues a drawing set for a professional engineer's stamp.",
  "strict": true,
  "input_schema": {
    "type": "object",
    "properties": {
      "drawing_set_id": {"type": "string"},
      "revision": {"type": "integer"}
    },
    "required": ["drawing_set_id", "revision"],
    "additionalProperties": false
  }
}
`})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:'"strict": true'})," is the flag. It sits at the top level, beside ",(0,n.jsx)(i.code,{children:"name"}),", ",(0,n.jsx)(i.code,{children:"description"}),", and ",(0,n.jsx)(i.code,{children:"input_schema"}),", outside the schema."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:'"additionalProperties": false'})," is the setting. It means the input can't carry a field the schema doesn't name, and strict requires it on every object."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"build-the-schema-from-your-validator",children:"Build the schema from your validator"}),`
`,(0,n.jsxs)(i.p,{children:["Strict tool use makes the input Claude writes match your schema, so the schema must say what your validator says. When you write the schema by hand, the two drift apart. ",(0,n.jsx)(i.strong,{children:"A tool call can then match the schema and still be rejected."})," At Meridian, a handwritten schema made the license number a plain string with no pattern. So ",(0,n.jsx)(i.code,{children:'"PE 46196"'})," passed the schema and failed the validator, which requires ",(0,n.jsx)(i.code,{children:"PE-"})," and five digits."]}),`
`,(0,n.jsx)(i.p,{children:"Write the rules once, in your validator, and generate the schema from it. In Python the validator is usually a Pydantic class. In TypeScript it's usually written with Zod."}),`
`,(0,n.jsxs)(i.p,{children:["Below is Meridian's Pydantic class, ",(0,n.jsx)(i.code,{children:"StampRequest"}),", with the code that uses it, then the schema that ",(0,n.jsx)(i.code,{children:"StampRequest.model_json_schema()"})," returns. Each ",(0,n.jsx)(i.code,{children:"# ..."})," stands for code not shown, and the schema shows only the license number."]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`class StampRequest(BaseModel):
    model_config = {"extra": "forbid"}
    # ...
    pe_license_number: str | None = Field(pattern=r"^PE-\\d{5}$")
    # ...
stamp_tool = {
    # ...
    "input_schema": StampRequest.model_json_schema(),
    "strict": True,
}
stamp_request = StampRequest.model_validate(call.input)
`})}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:`{
  "additionalProperties": false,
  "properties": {
    "pe_license_number": {
      "anyOf": [
        {"pattern": "^PE-\\\\d{5}$", "type": "string"},
        {"type": "null"}
      ],
      "title": "Pe License Number"
    }
  }
}
`})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:'"extra": "forbid"'})," becomes ",(0,n.jsx)(i.code,{children:'"additionalProperties": false'}),", the setting strict requires."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"str | None"})," becomes ",(0,n.jsx)(i.code,{children:"anyOf"}),", so the license number is a string with that ",(0,n.jsx)(i.code,{children:"pattern"}),", or null."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"model_validate()"})," checks ",(0,n.jsx)(i.code,{children:"call.input"}),", the input Claude wrote, against the same class."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"compare-the-runs-with-strict-off-and-on",children:"Compare the runs with strict off and on"}),`
`,(0,n.jsxs)(i.p,{children:["Meridian's test sends 100 plain-language stamp requests to Claude Haiku 4.5 with the ",(0,n.jsx)(i.code,{children:"queue_stamp_request"})," tool, and ",(0,n.jsx)(i.code,{children:"StampRequest"})," validates every tool call. The same 100 requests run twice, first with a handwritten schema and strict off, then with the generated schema and strict on."]}),`
`,(0,n.jsx)(i.p,{children:"Replay both runs below."}),`
`,(0,n.jsx)(c,{name:"StrictSwitch",title:"Strict tool use: send the requests with strict off, then on"}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["The schema's ",(0,n.jsx)(i.code,{children:"pattern"})," says what format is allowed, and strict makes Claude keep to it."]})}),`
`,(0,n.jsx)(i.p,{children:"Strict controls the input's shape but can't supply a fact the request never gave. Of the 100 requests, 28 never mention a license. The generated schema allows null for the license number, and all 28 came back null."}),`
`,(0,n.jsx)(i.h2,{id:"limits-of-strict-tool-use",children:"Limits of strict tool use"}),`
`,(0,n.jsx)(i.p,{children:"Six things to know, as of October 2026:"}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Keep protected health information (PHI) out."})," Compiled schemas don't get the same PHI protections as prompts and responses, so leave PHI out of property names, ",(0,n.jsx)(i.code,{children:"enum"})," values, ",(0,n.jsx)(i.code,{children:"const"})," values, and ",(0,n.jsx)(i.code,{children:"pattern"})," expressions."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Bounds aren't supported."})," A request whose schema uses ",(0,n.jsx)(i.code,{children:"minimum"}),", ",(0,n.jsx)(i.code,{children:"maximum"}),", ",(0,n.jsx)(i.code,{children:"minLength"}),", or ",(0,n.jsx)(i.code,{children:"maxLength"})," returns a 400 error. Check bounds in a validator function, such as Pydantic's ",(0,n.jsx)(i.code,{children:"@field_validator"}),", and state them in the field's description."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Limits add up across tools."})," One request can hold at most ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/build-with-claude/structured-outputs#schema-complexity-limits",children:"20 strict tools"}),". Across those tools, it can hold at most 24 optional parameters. It can also hold at most 16 parameters that use ",(0,n.jsx)(i.code,{children:"anyOf"})," or a type array, which is what a nullable field like ",(0,n.jsx)(i.code,{children:"str | None"})," generates."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Input can still fail to match the schema."})," This happens after a refusal, when a response is cut off at ",(0,n.jsx)(i.code,{children:"max_tokens"}),", or when an ",(0,n.jsx)(i.code,{children:"enum"})," or ",(0,n.jsx)(i.code,{children:"const"})," string comes back in different capitalization."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Some models reject a forced tool call."})," Setting ",(0,n.jsx)(i.code,{children:"tool_choice"})," to ",(0,n.jsx)(i.code,{children:"any"})," or ",(0,n.jsx)(i.code,{children:"tool"})," forces a tool call. That returns a 400 error on Claude Opus 5.5, Claude Sonnet 5.5, Claude Fable 5.1, and Claude Mythos 5.1. On those models, leave ",(0,n.jsx)(i.code,{children:"tool_choice"})," on ",(0,n.jsx)(i.code,{children:"auto"}),", its default."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Programmatic tool calling can't use strict tools."})," In programmatic tool calling, Claude writes code that calls your tools. Lesson 8 covers it."]}),`
`]}),`
`,(0,n.jsx)(c,{name:"KnowledgeCheck",title:"Check your understanding",flag:"academy_knowledge_check_batch2_main"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"strict: true"})," makes tool input match your schema, except after a refusal or a cut-off response, or when an ",(0,n.jsx)(i.code,{children:"enum"})," or ",(0,n.jsx)(i.code,{children:"const"})," string changes case."]}),`
`,(0,n.jsx)(i.li,{children:"Generate the schema from your validator, such as a Pydantic class."}),`
`,(0,n.jsx)(i.li,{children:"Keep bounds out of the schema, and count tools, optional parameters, and nullable parameters across the whole request."}),`
`]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};