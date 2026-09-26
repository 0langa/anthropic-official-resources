Product

# Golden Gate Claude

May 23, 2024

![Golden Gate Claude](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fb9cae5bd58125d8650c5ae390ee9b054c0eb8ae9-1920x1080.jpg&w=3840&q=75)

*UPDATE: Golden Gate Claude was online for a 24-hour period as a research demo and is no longer available. If you'd like to find out more about our research on interpretability and the activation of features within Claude, please see [this post](https://www.anthropic.com/news/mapping-mind-language-model) or our [full research paper](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html).*

On Tuesday, we [released a major new research paper](https://www.anthropic.com/research/mapping-mind-language-model) on interpreting large language models, in which we began to map out the inner workings of our AI model, Claude 3 Sonnet. In the “mind” of Claude, we found millions of concepts that activate when the model reads relevant text or sees relevant images, which we call “features”.

One of those was the concept of the Golden Gate Bridge. We found that there’s a specific combination of neurons in Claude’s neural network that activates when it encounters a mention (or a picture) of this most famous San Francisco landmark.

Not only can we identify these features, we can tune the strength of their activation up or down, and identify corresponding changes in Claude’s behavior.

And as we [explain in our research paper](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html), when we turn up the strength of the “Golden Gate Bridge” feature, Claude’s responses begin to focus on the Golden Gate Bridge. Its replies to most queries start to mention the Golden Gate Bridge, even if it’s not directly relevant.

If you ask this “Golden Gate Claude” how to spend $10, it will recommend using it to drive across the Golden Gate Bridge and pay the toll. If you ask it to write a love story, it’ll tell you a tale of a car who can’t wait to cross its beloved bridge on a foggy day. If you ask it what it imagines it looks like, it will likely tell you that it imagines it looks like the Golden Gate Bridge.

For a short time, we’re making this model available for everyone to interact with. You can talk to “Golden Gate Claude” on [claude.ai](https://claude.ai/redirect/website.v1.fe3825aa-e747-4a63-acf8-286399d19159) (just click the Golden Gate logo on the right-hand side). Please bear in mind that this is a research demonstration only, and that this particular model might behave in some unexpected—even jarring—ways.

Our goal is to let people see the impact our interpretability work can have. The fact that we can find and alter these features within Claude makes us more confident that we’re beginning to understand how large language models really work. This isn’t a matter of asking the model verbally to do some play-acting, or of adding a new “system prompt” that attaches extra text to every input, telling Claude to pretend it’s a bridge. Nor is it traditional “fine-tuning,” where we use extra training data to create a new black box that tweaks the behavior of the old black box. This is a precise, surgical change to some of the most basic aspects of the model’s internal activations.

[As we describe in our paper](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html), we can use these same techniques to change the strength of *safety-related* features—like those related to dangerous computer code, criminal activity, or deception. With further research, we believe this work could help make AI models safer.

## Related content

### Claude discovers a novel enzyme system with CRISPR-like repeats

We’re announcing a new life sciences research group and laboratory at Anthropic. This post introduces the team behind this work and shares early results in which Claude discovered a novel enzyme system with properties reminiscent of CRISPR, with only high-level direction from our scientists.

[Read more](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)

### Partnering with Accenture on embedded evaluation

[Read more](https://www.anthropic.com/news/accenture-embedded-evaluation)

### Introducing the Life Sciences Verification Program

The Life Sciences Verification Program (LSVP) gives life science professionals access to Claude Mythos, Opus, and Sonnet models with a refined set of safeguards more permissive for biology-related work.

[Read more](https://www.anthropic.com/news/life-sciences-verification-program)
