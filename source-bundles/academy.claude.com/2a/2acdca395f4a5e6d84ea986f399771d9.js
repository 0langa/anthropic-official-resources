import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"After breaking a document into chunks, the next step in a RAG pipeline is finding which chunks are most relevant to a user's question. This is essentially a search problem - you need to look through all your text chunks and identify the ones that relate to what the user is asking about."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./974fa9d12a15.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"semantic-search",children:"Semantic Search"}),`
`,(0,n.jsx)(r.p,{children:"The most common approach for finding relevant chunks is semantic search. Unlike keyword-based search that looks for exact word matches, semantic search uses text embeddings to understand the meaning and context of both the user's question and each text chunk."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3325be08d94c.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"text-embeddings",children:"Text Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"A text embedding is a numerical representation of the meaning contained in some text. Think of it as converting words and sentences into a format that computers can work with mathematically."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./daed6b6448ba.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how the process works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You feed text into an embedding model"}),`
`,(0,n.jsx)(r.li,{children:"The model outputs a long list of numbers (the embedding)"}),`
`,(0,n.jsx)(r.li,{children:"Each number ranges from -1 to +1"}),`
`,(0,n.jsx)(r.li,{children:"These numbers represent different qualities or features of the input text"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-numbers",children:"Understanding the Numbers"}),`
`,(0,n.jsx)(r.p,{children:`Each number in an embedding is essentially a "score" for some quality of the input text. However, here's the important caveat: we don't know precisely what each number represents.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1ba79edd89af.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`While it's helpful to imagine that one number might represent "how happy the text is" or "how much the text talks about oceans," these are just conceptual examples. The actual meaning of each dimension is learned by the model during training and isn't directly interpretable by humans.`}),`
`,(0,n.jsx)(r.h2,{id:"voyageai-for-embeddings",children:"VoyageAI for Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"Since Anthropic doesn't currently provide embedding generation, the recommended provider is VoyageAI. You'll need to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Sign up for a separate VoyageAI account"}),`
`,(0,n.jsx)(r.li,{children:"Get an API key (free to get started)"}),`
`,(0,n.jsx)(r.li,{children:"Add the key to your environment variables"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ce8910552c50.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["In your ",(0,n.jsx)(r.code,{children:".env"})," file, add:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`VOYAGE_API_KEY="your_key_here"
`})}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"First, install the VoyageAI library:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`%pip install voyageai
`})}),`
`,(0,n.jsx)(r.p,{children:"Then set up the client and create a function to generate embeddings:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from dotenv import load_dotenv
import voyageai

load_dotenv()
client = voyageai.Client()

def generate_embedding(text, model="voyage-3-large", input_type="query"):
    result = client.embed([text], model=model, input_type=input_type)
    return result.embeddings[0]
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./458bbee724a0.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you run this function on a text chunk, you'll get back a list of floating-point numbers representing the embedding. The process is quick and straightforward - the real challenge is understanding how to use these embeddings effectively in your RAG pipeline for finding the most relevant content."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6cdd71446c9d.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The next step is learning how to compare embeddings to determine which chunks are most similar to a user's question, which forms the core of the semantic search process."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};