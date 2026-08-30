import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Temperature is a powerful parameter that controls how creative or deterministic Claude's responses will be. Understanding how to use it effectively can dramatically improve your AI applications."}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-generates-text",children:"How Claude Generates Text"}),`
`,(0,n.jsx)(r.p,{children:`Before diving into temperature, it's helpful to understand Claude's text generation process. When you send Claude a prompt like "What do you think?", it goes through three phases:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tokenization:"})," Breaking your input into smaller chunks"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prediction:"})," Calculating probabilities for possible next tokens"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sampling:"})," Selecting a token based on those probabilities"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b83b845133d3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'In the diagram above, you can see how Claude might assign different probabilities to potential next tokens. The word "about" has a 30% chance, "would" has 20%, and so on. This process repeats for each token until the response is complete.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd8b6aa732eb.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"what-temperature-does",children:"What Temperature Does"}),`
`,(0,n.jsx)(r.p,{children:"Temperature is a decimal value between 0 and 1 that directly influences these token selection probabilities. Think of it as a creativity dial:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Low temperature (near 0):"})," Makes the highest probability token much more likely to be selected"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"High temperature (near 1):"})," Distributes probability more evenly across all possible tokens"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./006332a5c3d9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"At temperature 0, Claude becomes deterministic - it will always pick the most probable token. At temperature 1, lower-probability tokens have a much better chance of being selected, leading to more creative and varied outputs."}),`
`,(0,n.jsx)(r.h2,{id:"temperature-ranges-and-use-cases",children:"Temperature Ranges and Use Cases"}),`
`,(0,n.jsx)(r.p,{children:"Different tasks call for different temperature settings:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./939a7ade1343.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"low-temperature-00---03",children:"Low Temperature (0.0 - 0.3)"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Factual responses"}),`
`,(0,n.jsx)(r.li,{children:"Coding assistance"}),`
`,(0,n.jsx)(r.li,{children:"Data extraction"}),`
`,(0,n.jsx)(r.li,{children:"Content moderation"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"medium-temperature-04---07",children:"Medium Temperature (0.4 - 0.7)"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Summarization"}),`
`,(0,n.jsx)(r.li,{children:"Educational content"}),`
`,(0,n.jsx)(r.li,{children:"Problem-solving"}),`
`,(0,n.jsx)(r.li,{children:"Creative writing with constraints"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"high-temperature-08---10",children:"High Temperature (0.8 - 1.0)"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Brainstorming"}),`
`,(0,n.jsx)(r.li,{children:"Creative writing"}),`
`,(0,n.jsx)(r.li,{children:"Marketing content"}),`
`,(0,n.jsx)(r.li,{children:"Joke generation"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-temperature-in-code",children:"Setting Temperature in Code"}),`
`,(0,n.jsx)(r.p,{children:"By default, Claude's temperature is set to 1.0, which means maximum creativity. You can override this by adding temperature to your inference configuration:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, system=None, temperature=1.0):
    params = {
        "modelId": model_id,
        "messages": messages,
        "inferenceConfig": {"temperature": temperature}
    }
    
    if system:
        params["system"] = [{"text": system}]
    
    response = client.converse(**params)
    return response["output"]["message"]["content"][0]["text"]
`})}),`
`,(0,n.jsx)(r.h2,{id:"temperature-in-practice",children:"Temperature in Practice"}),`
`,(0,n.jsx)(r.p,{children:"Here's a practical example using movie idea generation. With temperature set to the default (1.0), you might get creative responses like:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"A reclusive origami master discovers her intricate paper creations come to life at night, leading her on a magical journey to save their miniature world from a mysterious shadow creature threatening to unfold their existence."'})}),`
`,(0,n.jsx)(r.p,{children:"But when you set temperature to 0.0 for the same prompt, you'll consistently get more predictable responses:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:`"A time-traveling archaeologist must prevent ancient artifacts from being stolen by a tech billionaire who's using them to build a doomsday device that harnesses their forgotten power."`})}),`
`,(0,n.jsx)(r.p,{children:'Running the low-temperature version multiple times will produce very similar responses, often with repeated themes like "time-traveling historian" or "time-traveling archaeologist."'}),`
`,(0,n.jsx)(r.h2,{id:"key-takeaways",children:"Key Takeaways"}),`
`,(0,n.jsx)(r.p,{children:"Temperature gives you direct control over Claude's creativity level. Use lower temperatures when you need consistent, factual responses, and higher temperatures when you want creative, varied outputs. The default temperature of 1.0 maximizes creativity, so consider lowering it for tasks requiring precision and consistency."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};