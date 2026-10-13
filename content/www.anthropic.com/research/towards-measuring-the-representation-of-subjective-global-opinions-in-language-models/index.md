Societal Impacts

# Towards measuring the representation of subjective global opinions in language models

Jun 29, 2023

[Read Paper](https://arxiv.org/abs/2306.16388)

## Abstract

Large language models (LLMs) may not equitably represent diverse global perspectives on societal issues. In this paper, we develop a quantitative framework to evaluate whose opinions model-generated responses are more similar to. We first build a dataset, GlobalOpinionQA, comprised of questions and answers from cross-national surveys designed to capture diverse opinions on global issues across different countries. Next, we define a metric that quantifies the similarity between LLM-generated survey responses and human responses, conditioned on country. With our framework, we run three experiments on an LLM trained to be helpful, honest, and harmless with Constitutional AI. By default, LLM responses tend to be more similar to the opinions of certain populations, such as those from the USA, and some European and South American countries, highlighting the potential for biases. When we prompt the model to consider a particular country's perspective, responses shift to be more similar to the opinions of the prompted populations, but can reflect harmful cultural stereotypes. When we translate GlobalOpinionQA questions to a target language, the model's responses do not necessarily become the most similar to the opinions of speakers of those languages. We release our dataset for others to use and build on. Our data is at [this URL](https://huggingface.co/datasets/Anthropic/llm_global_opinions). We also provide an interactive visualization at [this URL](https://llmglobalvalues.anthropic.com/).

## Related content

### AI models may be capable of self-replicating without access to a datacenter

Our experiments suggest that small AI models may be only months away from being capable enough to self-replicate on commercial IoT devices, like Android TVs and smart ovens.

[Read more](https://www.anthropic.com/research/self-replicating-ai)

### Strengthening our defenses against distillation attacks

Illicit distillation allows model developers to copy frontier AI capabilities without creating proportionally robust safeguards. Here, we describe how we’ve reduced the rate of distillation by more than 90%.

[Read more](https://www.anthropic.com/research/distillation-defenses)

### Investigating unintended model actions in our evaluations and internal use

This report describes examples of unintended model actions we’ve observed during evaluations and internal use of Claude.

[Read more](https://www.anthropic.com/research/investigating-unintended-model-actions)
