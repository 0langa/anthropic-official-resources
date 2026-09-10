import{em as e,nm as t}from"../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{Callout:i,ChatPrompt:o,Expandable:s,QuickCheck:c,ResourceWidget:l}=r;return i||a("Callout",!0),o||a("ChatPrompt",!0),s||a("Expandable",!0),c||a("QuickCheck",!0),l||a("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:`You may remember a time when most LLMs couldn't tell you how many r's are in "strawberry." But why does that happen? The answer explains a surprising amount about what language models are good at, what they find hard, and how they use math to produce text. It also explains how your usage is calculated, which impacts how quickly you'll hit a rate limit or what your API bill might look like.`}),`
`,(0,n.jsx)(r.p,{children:"Let's start with some role reversal."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"This is a warm-up question, so just take your best guess."})}),`
`,(0,n.jsx)(c,{question:'If you type "Hello Claude" and hit send, what do you imagine arrives at the model?',options:[{label:'The word "Hello" and the word "Claude"',feedback:"Before the model sees your text, the full text is quietly translated into numbers. (Option four isn't as silly as it sounds, by the way. Models that take image input do turn images into grids of numbers.)"},{label:"A list of letters: H, e, l, l, o,  , C, l, a, u, d, e",feedback:"Before the model sees your text, the full text is quietly translated into numbers. (Option four isn't as silly as it sounds, by the way. Models that take image input do turn images into grids of numbers.)"},{label:"A list of numbers",correct:!0,feedback:"Before the model sees your text, the full text is quietly translated into numbers. (Option four isn't as silly as it sounds, by the way. Models that take image input do turn images into grids of numbers.)"},{label:"A tiny picture of each word",feedback:"Before the model sees your text, the full text is quietly translated into numbers. (Option four isn't as silly as it sounds, by the way. Models that take image input do turn images into grids of numbers.)"}]}),`
`,(0,n.jsx)(r.h2,{id:"three-ways-to-represent-text",children:"Three ways to represent text"}),`
`,(0,n.jsxs)(r.p,{children:["Think about this three-character string: ",(0,n.jsx)(r.code,{children:'"Hi!"'}),". Now think about three different ways we could pass that information to a language model."]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The exact way you see it."})," A ",(0,n.jsx)(r.em,{children:"string"}),": ",(0,n.jsx)(r.code,{children:'"Hi!"'}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"As a list of characters."})," ",(0,n.jsx)(r.code,{children:"['H', 'i', '!']"}),". The brackets ",(0,n.jsx)(r.code,{children:"["})," ",(0,n.jsx)(r.code,{children:"]"})," mean ",(0,n.jsx)(r.em,{children:"list"}),"; this particular list has three items in it."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"As one number per character."})," Every character could correspond to a standard number: ",(0,n.jsx)(r.code,{children:"'H'"})," is ",(0,n.jsx)(r.code,{children:"72"}),", ",(0,n.jsx)(r.code,{children:"'i'"})," is ",(0,n.jsx)(r.code,{children:"105"}),", ",(0,n.jsx)(r.code,{children:"'!'"})," is ",(0,n.jsx)(r.code,{children:"33"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`string:      "Hi!"
characters:  [ 'H', 'i', '!' ]
numbers:     [ 72,  105, 33  ]
`})}),`
`,(0,n.jsxs)(r.p,{children:["While all three approaches have their uses in code, language models do a fourth, more strategic thing. What arrives is still a list of numbers, but not one number per character from a fixed table: it's one number per ",(0,n.jsx)(r.strong,{children:"chunk"})," of text, from a vocabulary the model learned."]}),`
`,(0,n.jsxs)(r.p,{children:["A chunk of text with its numerical ID is called a ",(0,n.jsx)(r.em,{children:"token"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"tokens",children:"Tokens"}),`
`,(0,n.jsxs)(r.p,{children:["The widget below includes several pieces of text that you can ",(0,n.jsx)(r.strong,{children:"tokenize"}),". Click through the examples, tokenize each one, and see for yourself: how is a token different from a word?"]}),`
`,(0,n.jsx)(l,{name:"Tokenizer"}),`
`,(0,n.jsx)(i,{type:"note",children:(0,n.jsx)(r.p,{children:"The splits and ID numbers in these examples come from an illustrative tokenizer, not Claude's. Claude's tokenizer might break words up differently and use different IDs, but the patterns are roughly the same."})}),`
`,(0,n.jsx)(r.h2,{id:"over-or-under",children:"Over or under?"}),`
`,(0,n.jsx)(r.p,{children:"Now that you know what tokens look like, see if you can predict how many tokens will be produced by tokenizing the following strings."}),`
`,(0,n.jsx)(l,{name:"OverUnder"}),`
`,(0,n.jsx)(r.h2,{id:"why-subwords",children:"Why subwords?"}),`
`,(0,n.jsx)(r.p,{children:"You might be wondering: why not just one token per character, or one per word?"}),`
`,(0,n.jsxs)(r.p,{children:["The set of unique token IDs a tokenizer can produce is called its ",(0,n.jsx)(r.strong,{children:"vocabulary"}),". Deciding the just-right token size and vocabulary size is still a matter of some exploration and research, but most public tokenizers aim for a Goldilocks zone. Take a look at the sentence ",(0,n.jsx)(r.em,{children:'"The tokenizer rocks."'})," chopped up three different ways by three different tokenizers."]}),`
`,(0,n.jsxs)(r.p,{children:["With ",(0,n.jsx)(r.strong,{children:"tiny tokens"})," (one per character) the sentence costs 20 tokens. That's going to be slow and expensive to process!"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`[T] [h] [e] [ ] [t] [o] [k] [e] [n] [i] [z] [e] [r] [ ] [r] [o] [c] [k] [s] [.]
`})}),`
`,(0,n.jsxs)(r.p,{children:["With ",(0,n.jsx)(r.strong,{children:"large tokens"})," (one per word) the sentence only costs 4 tokens, but the model is going to have to learn a ",(0,n.jsx)(r.em,{children:"huge"}),' vocabulary to know niche words like "tokenizer":']}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`[The] [ tokenizer???] [ rocks] [.]
`})}),`
`,(0,n.jsxs)(r.p,{children:["With a ",(0,n.jsx)(r.strong,{children:"middle ground"})," (one token per word or subword) the sentence costs 5 tokens, without the vocabulary having to include as many specialized words:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`[The] [ token] [izer] [ rocks] [.]
`})}),`
`,(0,n.jsxs)(r.p,{children:["A tokenizer's vocabulary is ",(0,n.jsx)(r.em,{children:"baked into the model"}),', and cannot be changed after it is trained. Any specific model is said to be "locked to a tokenizer" because it only ever learned what ',(0,n.jsx)(r.code,{children:"token 4062"})," means, not what ",(0,n.jsx)(r.code,{children:'"quick"'})," means."]}),`
`,(0,n.jsxs)(s,{label:"Bonus reading",title:"Byte-pair encoding",children:[(0,n.jsxs)(r.p,{children:["Vocabularies like this are usually ",(0,n.jsx)(r.em,{children:"grown"})," rather than hand-picked. The most common process is an algorithm called ",(0,n.jsx)(r.strong,{children:"byte-pair encoding"})," (BPE). It starts with the smallest possible token (individual bytes) so that every possible character (and every emoji fragment) is already covered. Then it scans an enormous pile of text for the pair of adjacent pieces that appears most often, glues that pair into a new single piece, and adds it to the vocabulary. It repeats this until the vocabulary reaches the researcher's target size. Common words emerge early on and end up as single tokens; rarer words seldom do."]}),(0,n.jsx)(r.p,{children:"Want to dive deeper into BPE? Ask Claude to build you a visualization:"}),(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"I'm learning how tokenizers work, and I understand that text becomes tokens with numerical IDs. Teach me byte-pair encoding by building an interactive visualization. First, show me how the merge table is built: start from a few sentences and let me step through the merges one at a time, so I can watch common words become single tokens. Then, once I understand that, show me how the finished merge table is applied to new text, including how the tokenizer handles a word it has never seen."})})]}),`
`,(0,n.jsx)(r.h2,{id:"decoding-output",children:"Decoding output"}),`
`,(0,n.jsxs)(r.p,{children:["So now you know that the text you send to a model becomes a list of token IDs before it's processed. A model's ",(0,n.jsx)(r.strong,{children:"output"})," is ",(0,n.jsx)(r.em,{children:"also"})," a list of token IDs. Try decoding this reply."]}),`
`,(0,n.jsx)(l,{name:"DecodePuzzle"}),`
`,(0,n.jsx)(r.h2,{id:"from-tokens-to-meaning",children:"From tokens to meaning"}),`
`,(0,n.jsxs)(r.p,{children:["Tokenization gives every chunk of text a number, but tokens with similar IDs like ",(0,n.jsx)(r.code,{children:"9906"})," and ",(0,n.jsx)(r.code,{children:"9907"})," aren't ",(0,n.jsx)(r.em,{children:"related"})," - they're just neighbors in a list. A model needs a way to know that ",(0,n.jsx)(r.em,{children:"cat"})," and ",(0,n.jsx)(r.em,{children:"kitten"})," are close in meaning, even if their IDs are far apart in the vocabulary. Models do this by assigning each token a ",(0,n.jsx)(r.em,{children:"multi-dimensional score"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"Let's start with a 2D scoring system."}),`
`,(0,n.jsx)(l,{name:"ScoringScatter"}),`
`,(0,n.jsx)(r.h2,{id:"embeddings",children:"Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"An LLM embedding works the same way as the scoring you just did. Each word (or really, each token) becomes a point, and similar words (tokens) land near each other. Real embeddings are more complicated in two ways:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"An LLM embedding has thousands of dimensions"}),', not just two. You can imagine we could also include an axis for "dangerous" that might help us separate our tiger from our kitten.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The meaning captured in a single dimension isn't labeled"}),", and may actually mean something there isn't even a great human word for. Cuteness is in there ",(0,n.jsx)(r.em,{children:"somewhere"}),`, but there's no axis explicitly named "cuteness" - the model invents or discovers the dimensions during training, and the process of decoding what they mean is one focus of `,(0,n.jsx)(r.strong,{children:"interpretability"})," research."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:'Examine "cat" in 2, 3, and thousands of dimensions'})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`2 dimensions       "cat" = [ 8.0,  3.5 ]                                cute, big
3 dimensions       "cat" = [ 8.0,  3.5,  1.0 ]                          cute, big, dangerous
4,096 dimensions   "cat" = [ 0.031, -0.184, 0.772, …, -0.094 ]          (no labels)

The exact number of dimensions varies by model. 4,096 is a common size in open-weight models.
`})}),`
`,(0,n.jsx)(r.p,{children:"Want to explore embeddings further? Ask Claude to build you a visualization:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"I'm learning about embeddings. I understand that a token becomes a point in a space with many dimensions, that similar tokens land near each other, and that the dimensions aren't labeled with human words. Help me build intuition by making an interactive visualization: place a couple of dozen everyday words in a small embedding space, let me pick any word and see its nearest neighbours, and let me add a word of my own to see where it lands and why."})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsx)(r.p,{children:"So now you know that the text you send to an LLM becomes a series of tokens, and tokens become embeddings."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`text:        "Hi"
token:       [ 13347 ]
embedding:   [ 0.12, -0.48, 0.91, …, 0.07 ]
`})}),`
`,(0,n.jsx)(r.p,{children:"Congratulations! This is a huge step towards understanding how a language model works."}),`
`,(0,n.jsxs)(r.p,{children:["You may already be intuiting that the information captured in embeddings (how cute and big and ",(0,n.jsx)(r.em,{children:"everything"})," things are) plays a huge part in how a language model makes sense of its inputs and picks the right outputs. If so, your intuition is correct!"]}),`
`,(0,n.jsx)(r.p,{children:"If these four statements feel true, you've got what this lesson set out to teach."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You can explain why a 100-character URL costs more tokens than a 100-character sentence."}),`
`,(0,n.jsx)(r.li,{children:"You can predict roughly how many tokens a chunk of text will be."}),`
`,(0,n.jsx)(r.li,{children:"You know why a model is locked to its tokenizer, and why rarer words are chopped into pieces."}),`
`,(0,n.jsx)(r.li,{children:'You can explain what an embedding is and why it matters using the words "score," "dimension," and "nearby."'}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["Next: ",(0,n.jsx)(r.a,{href:"/tutorials/parametric-memory-and-context",children:"How context affects Claude's performance and cost"})," · ",(0,n.jsx)(r.a,{href:"/tutorials/choosing-the-right-claude-model",children:"Choosing the right Claude model"})," · ",(0,n.jsx)(r.a,{href:"/tutorials/how-to-select-the-right-effort-setting-for-claude-cowork-and-chat",children:"choose an effort level in Cowork and Chat"})," · ",(0,n.jsx)(r.a,{href:"/tutorials/choosing-the-right-effort-level-in-claude-code",children:"in Claude Code"})]})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["Learn more: ",(0,n.jsx)(r.a,{href:"/collections/ai-fluency",children:"AI Fluency"})," · ",(0,n.jsx)(r.a,{href:"/courses/ai-capabilities-and-limitations",children:"AI capabilities and limitations"})]})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};