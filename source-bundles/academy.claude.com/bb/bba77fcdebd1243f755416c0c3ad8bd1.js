import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"Ao759wXbRc0",title:"What is tool use?",children:(0,n.jsxs)(r.p,{children:[`Your existing workflows rely on a lot of different technologies — project
management software, databases, files. Claude can't just check these things
itself. Instead, it relies on `,(0,n.jsx)(r.strong,{children:"tools"}),`, which give Claude access to
external data and actions.`]})}),`
`,(0,n.jsx)(r.h2,{id:"what-a-tool-is",children:"What a tool is"}),`
`,(0,n.jsxs)(r.p,{children:["Simply put, a tool is a ",(0,n.jsx)(r.strong,{children:"function you define and expose to Claude"}),". You describe what it does and what inputs it takes, and Claude decides when to call it."]}),`
`,(0,n.jsxs)(r.p,{children:["Here's the key thing to internalize: ",(0,n.jsx)(r.strong,{children:"Claude doesn't execute the tool — your code does"}),". The flow looks like this:"]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude requests"})," a tool call."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Your code executes"})," the function."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The result goes back to Claude"}),", and it keeps going."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-tools-are-defined",children:"How tools are defined"}),`
`,(0,n.jsxs)(r.p,{children:["Tools are ",(0,n.jsx)(r.strong,{children:"JSON schemas"})," with three parts: a ",(0,n.jsx)(r.strong,{children:"name"}),", a ",(0,n.jsx)(r.strong,{children:"description"}),", and an ",(0,n.jsx)(r.strong,{children:"input schema"}),". You pass them to Claude in the request body as a ",(0,n.jsx)(r.code,{children:"tools"})," array."]}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"description"})," is what Claude reads to decide whether to call the tool. If you write a vague description, you get bad tool use. This is the number one reason agents misfire or don't grab the tools that are available to them. Be specific."]}),`
`,(0,n.jsx)(r.p,{children:"Here's what a tool definition looks like:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "name": "lookup_building_code",
  "description": "Look up a specific building code section by its identifier. Returns the full text of that code section.",
  "input_schema": {
    "type": "object",
    "properties": {
      "section": {
        "type": "string",
        "description": "The building code section to look up"
      }
    },
    "required": ["section"]
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["So what happens when we use this? Say we send an agent a compliance report. On the first turn, Claude comes back with ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:'stop_reason: "tool_use"'})})," — that's our signal. Here's what that response looks like:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./86aba76697a0.png",alt:"An API response with stop_reason set to tool_use, containing a tool_use content block that names the tool and the input Claude wants to call it with"})}),`
`,(0,n.jsxs)(r.p,{children:["Our loop calls ",(0,n.jsx)(r.code,{children:"lookup_building_code"})," with the parameter Claude requested, then feeds the result back as a ",(0,n.jsx)(r.strong,{children:"tool result"})," — a user message containing a ",(0,n.jsx)(r.code,{children:"tool_result"})," block tied to the tool call's id:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7fd7f44e8eea.png",alt:"A user message containing a tool_result block with the tool_use_id and the looked-up building code text as its content"})}),`
`,(0,n.jsx)(r.p,{children:"And Claude keeps going. At that point, we can keep calling tools and returning results to Claude until it has what it needs."}),`
`,(0,n.jsx)(r.h2,{id:"multiple-tools-letting-claude-pick",children:"Multiple tools: letting Claude pick"}),`
`,(0,n.jsxs)(r.p,{children:["One tool is useful, but the interesting part is giving Claude ",(0,n.jsx)(r.strong,{children:"multiple tools"})," and watching it pick which one to use, in what order."]}),`
`,(0,n.jsx)(r.p,{children:"Picture this scenario: you're packing for a three-day trip to Denver, and you want both today's weather and the forecast for the next few days. So we declare two tools instead of one:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:`const tools = [
  {
    name: "get_weather",
    description: "Get today's current weather for a city.",
    input_schema: {
      type: "object",
      properties: {
        city: { type: "string", description: "The city to check" }
      },
      required: ["city"]
    }
  },
  {
    name: "get_forecast",
    description: "Get the weather forecast for the next few days for a city.",
    input_schema: {
      type: "object",
      properties: {
        city: { type: "string", description: "The city to check" }
      },
      required: ["city"]
    }
  }
];
`})}),`
`,(0,n.jsxs)(r.p,{children:["The loop is identical to the agent loops we've already seen. The only new piece is a ",(0,n.jsx)(r.code,{children:"runTool"})," function that ",(0,n.jsx)(r.strong,{children:"dispatches on the tool name"})," with a switch statement — this block of code is just where your code actually runs:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:`function runTool(name, input) {
  switch (name) {
    case "get_weather":
      return getWeather(input.city);
    case "get_forecast":
      return getForecast(input.city);
  }
}

while (true) {
  const response = await client.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 1024,
    messages,
    tools,
  });

  if (response.stop_reason !== "tool_use") {
    // Claude is done — this is the final answer
    break;
  }

  messages.push({ role: "assistant", content: response.content });

  const toolResults = response.content
    .filter((block) => block.type === "tool_use")
    .map((block) => ({
      type: "tool_result",
      tool_use_id: block.id,
      content: runTool(block.name, block.input),
    }));

  messages.push({ role: "user", content: toolResults });
}
`})}),`
`,(0,n.jsx)(r.p,{children:"And that's the whole pattern. Want a third tool? Add it to the array, add a case to the switch, and you're done."}),`
`,(0,n.jsxs)(r.p,{children:["Run this, and you'll see Claude call ",(0,n.jsx)(r.code,{children:"get_weather"})," and then ",(0,n.jsx)(r.code,{children:"get_forecast"})," — sometimes in the same turn, sometimes one after the other. Then it answers: pack layers, expect snow flurries today, warming through the week."]}),`
`,(0,n.jsxs)(r.p,{children:["Now notice ",(0,n.jsx)(r.em,{children:"how"}),` Claude chose. It read the descriptions, mapped your prompt to "today's weather" and "the next few days," and picked the right tool for each. That's why your tool descriptions really matter.`]}),`
`,(0,n.jsx)(r.h2,{id:"the-tool-runner-skip-the-boilerplate",children:"The tool runner: skip the boilerplate"}),`
`,(0,n.jsx)(r.p,{children:"You've probably already spotted two red flags with what we just wrote:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["That's a ",(0,n.jsx)(r.strong,{children:"lot of code"})," for two simple lookups."]}),`
`,(0,n.jsxs)(r.li,{children:["In a real codebase, you don't want to ",(0,n.jsx)(r.strong,{children:"handwrite JSON schemas"})," for every function you have. It's like writing your code twice."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["That's where the ",(0,n.jsx)(r.strong,{children:"tool runner"})," comes in. It ships in beta in the Claude SDKs: TypeScript, Python, Ruby, C#, Go, Java, and PHP. You define each tool once, and the runner handles the entire tool use / tool result loop internally."]}),`
`,(0,n.jsx)(r.p,{children:"Your code shrinks down to: describe the tool, send the prompt, wait for the result. Here's the same two-tool weather demo wired through the tool runner:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:`// The same two lookups we ran by hand — just plain TypeScript functions
function getWeather(city: string) {
  // ...existing lookup
}

function getForecast(city: string) {
  // ...existing lookup
}

const runner = client.beta.messages.toolRunner({
  model: "claude-sonnet-5",
  max_tokens: 1024,
  messages: [
    {
      role: "user",
      content:
        "I'm packing for a three-day trip to Denver. What's the weather today and over the next few days?",
    },
  ],
  tools: [getWeather, getForecast],
});

// Await the runner to get the final message after all the tool ping-pong has settled
const finalMessage = await runner;
`})}),`
`,(0,n.jsx)(r.p,{children:"Same scenario, a fraction of the code:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No while loop"}),", no stop reason switch, no manually pushing tool results back into messages — the runner handles all of that."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No JSON schemas"}),", so you don't write things twice."]}),`
`,(0,n.jsx)(r.li,{children:"The two functions are the same lookups we ran by hand a minute ago, just plain TypeScript."}),`
`,(0,n.jsx)(r.li,{children:"Awaiting the runner returns the final assistant message once everything has settled."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Run it, and you get the same answer."}),`
`,(0,n.jsx)(r.h2,{id:"real-tools-wrap-your-existing-code",children:"Real tools wrap your existing code"}),`
`,(0,n.jsxs)(r.p,{children:["In real life, your tools wouldn't be hardcoded weather data. They'd wrap ",(0,n.jsx)(r.strong,{children:"actual functions you already have in your application"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["Take a compliance review agent: its tools are thin wrappers around ",(0,n.jsx)(r.code,{children:"lookup_building_code"})," and ",(0,n.jsx)(r.code,{children:"search_building_code"})," functions that already exist in the codebase. With the tool runner, you pass those functions in directly, and the agent cites specific code sections in every finding it writes — no schema writing required:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3e1712a481bd.png",alt:"A compliance review app showing a structural report alongside agent findings, each flagged item citing the specific building code section it checked"})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tools give Claude access to your systems."})," A tool is a function you define and expose; Claude decides when to call it, and your code executes it."]}),`
`,(0,n.jsxs)(r.li,{children:["Tools are JSON schemas with a ",(0,n.jsx)(r.strong,{children:"name"}),", a ",(0,n.jsx)(r.strong,{children:"description"}),", and an ",(0,n.jsx)(r.strong,{children:"input schema"}),", passed in the request as a ",(0,n.jsx)(r.code,{children:"tools"})," array."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Write specific descriptions."})," Vague descriptions are the number one reason agents misfire."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'stop_reason: "tool_use"'})," is your signal to run the tool and feed the result back as a tool result."]}),`
`,(0,n.jsx)(r.li,{children:"For multiple tools, dispatch on the tool name. Adding a tool means adding to the array and adding a case."}),`
`,(0,n.jsxs)(r.li,{children:["The SDK's ",(0,n.jsx)(r.strong,{children:"tool runner"})," (available in beta across the Claude SDKs) builds schemas from your actual functions and handles the whole loop — or you can run the loop yourself."]}),`
`,(0,n.jsxs)(r.li,{children:["You execute, or you delegate the loop. At the far end of that spectrum, ",(0,n.jsx)(r.strong,{children:"managed agents"})," delegate the whole agent to Anthropic."]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};