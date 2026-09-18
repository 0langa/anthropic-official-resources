Lesson 5 of 13 · AI capabilities and limitationsTry It Out: Next Token Prediction

# Try It Out: Next Token Prediction

Lesson 55 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-capabilities-and-limitations%2Ftry-it-out)

## Text Your Friend Markov

The 100% interpretable next-token generator

### Send a Text

Long ago, my friends and I would play this game where you'd grab your phone and craft a message to a friend using only the recommended next words. Maybe you did this too.

Here's a simulator that was "trained" on a bit of content. Have a play!

hey does anyone know how to fix the build

i think |

wethethat

We talked about this as if it were a "Me-bot". We knew it was recommending words based on our individual usage patterns, and we could see our voices in our personalized recommendations.

At the time, we were happy to dismiss it as tech magic. I don't think we realized how simple the algorithm might be.

Keep reading if you want to build one with me :)

### "Training" Your Model

Let's train on a handful of messages. All we need to do is tally the connections between words. Let's do this one message at a time.

1."i think we should probably ship it"

2."i think that sounds good"

3."i think we should probably wait"

4."we should check with the team"

5."that sounds good to me"

+ Add message 1

The Transition Matrix

Add messages above to start building the matrix.

This finished map of connections between words is called a **frequency table**. Normalize each row and you get a probability distribution of what comes next.

The act of picking a next word based on what you have so far is called **sampling**. We use that same term for this process with modern language models like Claude.

### Do Some Sampling

Using the same matrix based on 5 texts, go ahead and have a more informed play at our game. We'll show you the probabilities.

i \_

think100%

The highlighted row is your current context. Pick a word from the available choices to continue.

### Scale it up

Five messages gave us a tiny matrix and a handful of predictions. What happens with more data?

+ 1 message+ 10+ 50All 169

5messages

17unique words

13contexts

24transitions

2max options

After "probably""should""think":

ship 50%wait 50%

### The knobs

When you were sampling, you could see probabilities, but you also used your instincts about which words "felt right."

If you had to write *code* to make those choices instead of using your gut, **what encoded rule do you think would create the best result?**

Always pick the highest-probability wordPick semi-randomly, according to probabilitiesPick according to probabilities, but also boost the most likely choicesIgnore anything below a certain probability thresholdOnly consider the top N optionsGoblin mode — ignore the probabilities and pick something random

Show me the knobs

### The bridge

The sampling strategies you just used are more or less the same sampling constraints that developers pass to Claude. For LLMs, a few things differ.

Markov chain

LLM

1 Read context

last word: **"think"**

1 Read context

entire conversation so far

2 Compute distribution

look up one row in a table

2 Compute distribution

forward pass through billions of parameters — attention, embeddings, feedforward layers, residual connections, layer norms...

3 Sample next token

we 32%the 16%i 11%

3 Sample next tokensame process

we 32%the 16%i 11%

The Markov table lookup is a really simple and explainable operation. A forward pass through a neural network is quite a bit more complex. But in either case, the output is the same: a probability distribution of likely next words or tokens.

While sampling is the same, training is radically different. The exponential wall from before (vocabularyN rows) doesn't apply. LLMs trade the explainability of simply tallying words for far more context and far greater capabilities.

### 100-year-old Tech

*"Is this real tech?" Great question, reader.*

Markov published this idea in 1906. A century later in 2010, n-gram models like this were powering next-word prediction on your phone (SwiftKey, then Apple's QuickType). Around 2015, neural networks — first RNNs, then transformers in 2017 — began to replace the table lookup approach with a learned function, and the rest is... well, it's what we're working on now.

Was this helpful?
