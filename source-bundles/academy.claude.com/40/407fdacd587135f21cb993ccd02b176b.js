import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"After extracting text chunks from a document, the next step in a RAG pipeline is finding which chunks are most relevant to a user's question. This is essentially a search problem - you need to look through all your chunks and identify the ones that relate to what the user is asking about."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5bdbb520520b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"semantic-search",children:"Semantic Search"}),`
`,(0,n.jsx)(r.p,{children:"The most common approach for finding relevant chunks is semantic search. Unlike traditional keyword-based search, semantic search uses text embeddings to understand the actual meaning of both the user's question and each text chunk. This allows the system to find conceptually related content even when the exact words don't match."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./952c238e9444.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"what-are-text-embeddings",children:"What Are Text Embeddings?"}),`
`,(0,n.jsx)(r.p,{children:"A text embedding is a numerical representation of the meaning contained in some text. Think of it as converting words and sentences into a format that computers can work with mathematically."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5126d0bcc653.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how the process works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You feed text into an embedding model"}),`
`,(0,n.jsx)(r.li,{children:"The model outputs a long list of numbers (the embedding)"}),`
`,(0,n.jsx)(r.li,{children:"Each number ranges from -1 to +1"}),`
`,(0,n.jsx)(r.li,{children:"These numbers represent different qualities or features of the input text"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-numbers",children:"Understanding the Numbers"}),`
`,(0,n.jsx)(r.p,{children:`Each number in an embedding is essentially a "score" for some quality of the input text. However, here's the important caveat: we don't actually know what each specific number represents.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bcff1d5482df.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`While it's helpful to imagine that one number might represent "how happy the text is" and another might represent "how much the text talks about oceans," these are just conceptual examples. The embedding model learns these features during training, but they're not explicitly labeled or interpretable to us.`}),`
`,(0,n.jsx)(r.p,{children:"Despite this opacity, embeddings are incredibly powerful because they capture semantic meaning in a way that allows for mathematical comparison between different pieces of text."}),`
`,(0,n.jsx)(r.h2,{id:"embeddings-on-vertex-ai",children:"Embeddings on Vertex AI"}),`
`,(0,n.jsxs)(r.p,{children:["Claude can't generate embeddings directly. Instead, you need to use a specialized embedding model. On Vertex AI, the model we'll use is called ",(0,n.jsx)(r.code,{children:"text-embedding-005"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c353c4d3d619.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"To work with embeddings on Vertex AI, you'll need to install the Google GenAI SDK:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`pip install google-genai
`})}),`
`,(0,n.jsx)(r.p,{children:"Here's the basic setup for generating embeddings:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from google import genai

client = genai.Client(
    project="YOUR_PROJECT_ID", 
    location="global", 
    vertexai=True
)

def generate_embedding(text):
    response = client.models.embed_content(
        model="text-embedding-005", 
        contents=text
    )
    
    if not response.embeddings:
        return []
    
    return [e.values for e in response.embeddings]
`})}),`
`,(0,n.jsx)(r.p,{children:"When you run this function with a text chunk, you'll get back a list of floating-point numbers representing the semantic meaning of that text. These embeddings form the foundation for implementing semantic search in your RAG system."}),`
`,(0,n.jsx)(r.p,{children:"The next step is understanding how to use these embeddings to actually find the most relevant chunks for a user's question, which involves comparing embeddings mathematically to determine similarity."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};