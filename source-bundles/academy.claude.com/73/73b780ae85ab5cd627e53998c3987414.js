import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"After breaking a document into chunks, the next step in a RAG pipeline is finding which chunks are most relevant to a user's question. This is fundamentally a search problem - you need to look through all your text chunks and identify the ones that relate to what the user is asking about."}),`
`,(0,n.jsx)(r.h2,{id:"finding-relevant-chunks",children:"Finding Relevant Chunks"}),`
`,(0,n.jsx)(r.p,{children:`The challenge is determining which chunks are "related" to a user's question. This isn't as simple as keyword matching - you need to understand the meaning and context of both the question and the chunks.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./644f01627e92.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The most common solution is semantic search, which uses text embeddings to understand what each piece of text is actually about, rather than just looking for exact word matches."}),`
`,(0,n.jsx)(r.h2,{id:"what-are-text-embeddings",children:"What Are Text Embeddings?"}),`
`,(0,n.jsx)(r.p,{children:"A text embedding is a numerical representation of the meaning contained in some text. Think of it as converting words and sentences into a format that computers can work with mathematically."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a3f8ebf9f863.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You feed text into an embedding model"}),`
`,(0,n.jsx)(r.li,{children:"The model outputs a long list of numbers (typically 1024 numbers)"}),`
`,(0,n.jsx)(r.li,{children:'Each number represents a "score" for some quality of the input text'}),`
`,(0,n.jsx)(r.li,{children:"The numbers range from -1 to +1"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-numbers",children:"Understanding the Numbers"}),`
`,(0,n.jsx)(r.p,{children:"Each number in an embedding is like a score for some aspect of the text. While we don't know exactly what each position represents, it's helpful to think of them as measuring different qualities."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./12f327b493d6.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`For example, one number might score "how happy the text is" while another might measure "how much the text talks about oceans." The key point is that we don't actually know what each number represents - the embedding model learns these patterns during training, and they're not human-interpretable.`}),`
`,(0,n.jsx)(r.h2,{id:"generating-embeddings-with-code",children:"Generating Embeddings with Code"}),`
`,(0,n.jsx)(r.p,{children:"Creating embeddings is straightforward. Here's the basic process:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def generate_embedding(
    text,
    embedding_model_id="amazon.titan-embed-text-v2:0",
    dimensions=1024,
    normalize=True,
):
    request_body = {
        "inputText": text,
        "dimensions": dimensions,
        "normalize": normalize,
    }
    
    request_json = json.dumps(request_body)
    response = client.invoke_model(
        modelId=embedding_model_id,
        body=request_json,
        accept="application/json",
        contentType="application/json",
    )
    
    response_body = json.loads(response.get("body").read())
    return response_body["embedding"]
`})}),`
`,(0,n.jsx)(r.p,{children:"When you run this function on a text chunk, you get back a list of 1024 numbers that represent the semantic meaning of that text."}),`
`,(0,n.jsx)(r.p,{children:"Note that you might need to request access to the Titan embedding model in the AWS Bedrock console. If version 2 isn't available, version 1 works just as well for learning purposes."}),`
`,(0,n.jsx)(r.h2,{id:"why-embeddings-matter-for-rag",children:"Why Embeddings Matter for RAG"}),`
`,(0,n.jsx)(r.p,{children:"The power of embeddings becomes clear when you realize that similar texts will have similar embedding values. This means you can mathematically compare a user's question to your document chunks and find the most semantically similar ones - even if they don't share the exact same words."}),`
`,(0,n.jsx)(r.p,{children:"This numerical representation is what makes semantic search possible and much more effective than simple keyword matching for finding relevant context in RAG systems."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};