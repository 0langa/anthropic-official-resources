import{$p as e,Zp as t}from"../../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={em:"em",h2:"h2",p:"p",strong:"strong",...e(),...t.components},{ResourceWidget:i}=r;return i||a("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Text Your Friend Markov"})," — ",(0,n.jsx)(r.em,{children:"The 100% interpretable next-token generator"})]}),`
`,(0,n.jsx)(r.h2,{id:"send-a-text",children:"Send a Text"}),`
`,(0,n.jsx)(r.p,{children:"Long ago, my friends and I would play this game where you'd grab your phone and craft a message to a friend using only the recommended next words. Maybe you did this too."}),`
`,(0,n.jsx)(r.p,{children:`Here's a simulator that was "trained" on a bit of content. Have a play!`}),`
`,(0,n.jsx)(i,{name:"MarkovPhoneDemo",title:"Send a text — next-word simulator"}),`
`,(0,n.jsx)(r.p,{children:'We talked about this as if it were a "Me-bot". We knew it was recommending words based on our individual usage patterns, and we could see our voices in our personalized recommendations.'}),`
`,(0,n.jsx)(r.p,{children:"At the time, we were happy to dismiss it as tech magic. I don't think we realized how simple the algorithm might be."}),`
`,(0,n.jsx)(r.p,{children:"Keep reading if you want to build one with me :)"}),`
`,(0,n.jsx)(r.h2,{id:"training-your-model",children:'"Training" Your Model'}),`
`,(0,n.jsx)(r.p,{children:"Let's train on a handful of messages. All we need to do is tally the connections between words. Let's do this one message at a time."}),`
`,(0,n.jsx)(i,{name:"MarkovTrainingMatrix",title:"Build the transition matrix"}),`
`,(0,n.jsxs)(r.p,{children:["This finished map of connections between words is called a ",(0,n.jsx)(r.strong,{children:"frequency table"}),". Normalize each row and you get a probability distribution of what comes next."]}),`
`,(0,n.jsxs)(r.p,{children:["The act of picking a next word based on what you have so far is called ",(0,n.jsx)(r.strong,{children:"sampling"}),". We use that same term for this process with modern language models like Claude."]}),`
`,(0,n.jsx)(r.h2,{id:"do-some-sampling",children:"Do Some Sampling"}),`
`,(0,n.jsx)(r.p,{children:"Using the same matrix based on 5 texts, go ahead and have a more informed play at our game. We'll show you the probabilities."}),`
`,(0,n.jsx)(i,{name:"MarkovSampler",title:"Sample from the matrix"}),`
`,(0,n.jsx)(r.p,{children:"The highlighted row is your current context. Pick a word from the available choices to continue."}),`
`,(0,n.jsx)(r.h2,{id:"100-year-old-tech",children:"100-year-old Tech"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"Is this real tech?" Great question, reader.'})}),`
`,(0,n.jsx)(r.p,{children:"Markov published this idea in 1906. A century later in 2010, n-gram models like this were powering next-word prediction on your phone (SwiftKey, then Apple's QuickType). Around 2015, neural networks — first RNNs, then transformers in 2017 — began to replace the table lookup approach with a learned function, and the rest is... well, it's what we're working on now."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};