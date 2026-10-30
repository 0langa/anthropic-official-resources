import{Qm as e,Xm as t}from"../../../../../content-de-meta-j2jjwhjm.js";var n=t(),r=`# Creating tools that Claude picks

The most common reason "Claude misused my tool" is the description. This video shows you how to write tool definitions that Claude selects correctly and how to prove it with a before-and-after evaluation.

Claude picks tools by reading your descriptions, so a one-line description is a one-line argument for using it. Write about 3-4 sentences at the minimum, what the tool returns, when to use it, when not to, and what the edge cases might look like. Single-sentence descriptions degrade selections in evaluations. So let's look at this definition. It says what comes back. It names the trigger: "only when the user asks about a specific project by name or job number." It gives the job number format and says what the tool does not return.

That last sentence keeps Claude from calling it for invoice questions, for example. Five thin tools compete with each other. One lookup_project_status with a fields parameter beats get_project_phase, get_project_hours, get_project_lead, and whatever siblings they might have. And the docs recommend an action parameter over splitting each verb into its own tool. Namespaces help once the surface grows. So github_list_prs, slack_send_message. Past what namespacing can manage, say 50-plus tools whose definitions eat the context window, the tool search tool loads definitions on demand. For nested or format-sensitive inputs, add input_examples. The API validates them against your schema and they cost about 20 to 200 tokens.

So I got a 30-case selection evaluation: 30 questions an employee would ask, each labeled with the tool that should fire. So our first run here uses the tall, thin tool surface. The thin surface is six one-line tools, one per field.

And you can see here that the selection accuracy is pretty mediocre and the misses cluster where two thin tools overlap. Same 30 questions, same model. The only change is the tool definitions.

Now the consolidated version with the fuller descriptions with the same 30 cases that we just ran before. And we can see that our accuracy is climbing a lot. And the overlap misses disappear because there's not really any overlap left to miss.

We have one more knob that we can tune. Your error messages are prompts too. "Error 404" teaches Claude nothing. "Job number not found, verify format" teaches it exactly what to fix, and it usually self-corrects on the next call.

Write descriptions of three to four sentences that say what the tool returns, when to use it, and when not to. Consolidate thin tools into one with parameters. Add input_examples for tricky formats and return errors that tell Claude how to fix the call. Your tool definitions are prompts, so write them like it.
`;function i(t){let i={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components},{ImageFigure:a,LessonVideo:s,ResourceWidget:c}=i;return a||o("ImageFigure",!0),s||o("LessonVideo",!0),c||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{youtubeId:"GqHhQGou3sE",title:"Creating tools that Claude picks",transcript:r,children:(0,n.jsx)(i.p,{children:"When Claude picks the wrong tool, look first at the tool's definition. The video follows Meridian, a fictional engineering consultancy. Meridian rewrites its tool definitions and runs the same 30 questions before and after the rewrite."})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (",(0,n.jsx)(i.code,{children:"claude-sonnet-5"}),"). Results may differ on newer models."]})}),`
`,(0,n.jsx)(i.p,{children:"Say your tool loop works, and then one of these happens:"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Claude calls the wrong tool."}),`
`,(0,n.jsx)(i.li,{children:"It makes three tool calls for one fact."}),`
`,(0,n.jsxs)(i.li,{children:["It passes ",(0,n.jsx)(i.code,{children:"0142"})," where your code wants ",(0,n.jsx)(i.code,{children:"MEG-2026-0142"}),"."]}),`
`]}),`
`,(0,n.jsxs)(i.p,{children:["Claude never receives the function that runs your tool. It sees only the definition you send and the results you return. ",(0,n.jsx)(i.strong,{children:"So when Claude misuses a tool, look at the definition first."})]}),`
`,(0,n.jsx)(i.p,{children:"Meridian has an internal assistant for employees' questions about projects, permits, and billing. Rewriting its tool definitions raised its score from 14 to 26 of 30 test questions, on the same model."}),`
`,(0,n.jsx)(i.h2,{id:"what-claude-sees-of-your-tool",children:"What Claude sees of your tool"}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"A tool definition is a block of JSON that tells Claude a tool exists."})," You send it in the ",(0,n.jsx)(i.code,{children:"tools"})," list of each request."]}),`
`,(0,n.jsx)(i.p,{children:"Here is the rewritten definition of Meridian's project tool. It has four parts."}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:`{
  "name": "lookup_project_status",
  "description": "Returns current facts about a single Meridian …",
  "input_schema": {
    "type": "object",
    "properties": {
      "project_id": {
        "type": "string",
        "description": "Full Meridian job number in the format MEG-YYYY-NNNN, e.g. MEG-2026-0142."
      },
      "fields": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": ["phase", "status", "lead", "hours", "deadline", "site", "client"]
        },
        "description": "Which fields to return. Omit to return everything."
      }
    },
    "required": ["project_id"]
  },
  "input_examples": [
    {"project_id": "MEG-2026-0142", "fields": ["phase", "status"]},
    {"project_id": "MEG-2025-0417", "fields": ["lead", "hours"]},
    {"project_id": "MEG-2024-0233"}
  ]
}
`})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"name"})," is what Claude calls the tool by."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"description"})," is plain text that you write and Claude reads. It's cut short here and shown in full in the next section."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"input_schema"})," lists the tool's parameters in JSON Schema, each with a name, a type, and its own description. ",(0,n.jsx)(i.code,{children:"required"})," says which ones must be given."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"input_examples"})," is optional. It shows Claude what a good input looks like, such as a full job number. Each example must be valid against ",(0,n.jsx)(i.code,{children:"input_schema"}),", or the API returns a 400 error."]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Claude decides whether to make a tool call by reading the user's request and each tool's description."}),`
`,(0,n.jsx)(i.h2,{id:"write-a-detailed-description",children:"Write a detailed description"}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Of the four parts, the description does the most."})}),`
`,(0,n.jsx)(i.p,{children:"Aim for at least three to four sentences, more if the tool is complex. Cover four things:"}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsx)(i.li,{children:"What the tool does"}),`
`,(0,n.jsx)(i.li,{children:"When to use it, and when not to"}),`
`,(0,n.jsx)(i.li,{children:"What each parameter means"}),`
`,(0,n.jsx)(i.li,{children:"What it doesn't return"}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"Here is Meridian's full description:"}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-text",children:`Returns current facts about a single Meridian project: phase,
schedule status, project lead, hours budgeted and consumed,
deadline, site city, and client. Use this only when the user asks
about a specific project by name or job number; if only a partial
number is given (e.g. 'the 0142 job'), normalize it to the full
MEG-YYYY-NNNN format before calling. Pass the fields parameter to
fetch just the fields the question needs instead of the whole
record. This tool does not return permit or invoicing information.
Use get_permit_status or get_billing_summary for those.
`})}),`
`,(0,n.jsx)(a,{src:"./l1-description-four-parts.png",alt:"Meridian's tool description, with each stretch tinted by which of the four things it covers.",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"Meridian's description covers all four things a good description needs."})})}),`
`,(0,n.jsx)(i.p,{children:"Saying when to use the tool, and when not to, helps Claude avoid calling the wrong one. Meridian's description limits the tool to questions about one project. For permits and billing, it names the tools to use."}),`
`,(0,n.jsx)(i.h2,{id:"combine-overlapping-tools-into-one",children:"Combine overlapping tools into one"}),`
`,(0,n.jsx)(i.p,{children:"A good description can't help much when several tools do nearly the same job."}),`
`,(0,n.jsx)(i.p,{children:"Meridian's first set had six thin tools, each with a one-line description. Four of them returned one project fact each. Those four overlapped, so Claude had to guess which ones a question needed."}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["The fix is to combine the four into one tool, ",(0,n.jsx)(i.code,{children:"lookup_project_status"}),", with a ",(0,n.jsx)(i.code,{children:"fields"})," parameter that says which facts to return."]})," The other two, for permits and billing, do different jobs, so they stay. Six tools become three."]}),`
`,(0,n.jsx)(i.h2,{id:"measure-the-change-with-an-eval",children:"Measure the change with an eval"}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"An eval is a fixed set of test questions with known right answers, run against Claude and scored."})," It shows whether the new definitions are better."]}),`
`,(0,n.jsxs)(i.p,{children:["Meridian's eval checks whether Claude calls the right tools. It has 30 questions an employee would ask, each labeled with the right tool calls. Meridian ran the 30 questions twice on ",(0,n.jsx)(i.code,{children:"claude-sonnet-5"}),", once with each set of tools."]}),`
`,(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Set of tools"}),(0,n.jsx)(i.th,{children:"Number of tools"}),(0,n.jsx)(i.th,{children:"Score"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Thin"}),(0,n.jsx)(i.td,{children:"6"}),(0,n.jsx)(i.td,{children:"14/30 (47%)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Consolidated"}),(0,n.jsx)(i.td,{children:"3"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.strong,{children:"26/30 (87%)"})})]})]})]}),`
`,(0,n.jsx)(i.h2,{id:"fix-only-the-part-at-fault",children:"Fix only the part at fault"}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"To fix one failure, find the part of the definition that's at fault, change only that part, and rerun your eval."})}),`
`,(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"What Claude does wrong"}),(0,n.jsx)(i.th,{children:"Part to change"}),(0,n.jsx)(i.th,{children:"What to do"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Calls the wrong tool, or more tools than the question needs"}),(0,n.jsx)(i.td,{children:"The description"}),(0,n.jsx)(i.td,{children:"Say what each tool does and when to use it. Combine tools that overlap."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Passes a value of the wrong type or format"}),(0,n.jsx)(i.td,{children:"The schema and the examples"}),(0,n.jsxs)(i.td,{children:["Give the format in the parameter's own ",(0,n.jsx)(i.code,{children:"description"}),". Add ",(0,n.jsx)(i.code,{children:"input_examples"}),"."]})]})]})]}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/troubleshooting-tool-use#claude-calls-the-wrong-tool",children:"Troubleshooting tool use"})," lists more symptoms and fixes."]}),`
`,(0,n.jsx)(c,{name:"KnowledgeCheck",title:"Check your understanding",flag:"academy_knowledge_check_batch2_main"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Write descriptions of at least three to four sentences, and say when not to use the tool."}),`
`,(0,n.jsx)(i.li,{children:"Combine overlapping tools into one tool with parameters."}),`
`,(0,n.jsx)(i.li,{children:"Measure changes with an eval."}),`
`,(0,n.jsx)(i.li,{children:"To fix one failure, change only the part at fault."}),`
`]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};