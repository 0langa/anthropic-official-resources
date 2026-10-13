Frontier Red Team

# Detailed cyber evaluations of Claude 4

Jul 15, 2025

*Anthropic (with [Pattern Labs](https://patternlabs.co/))*

We believe we are at a crucial period for cybersecurity and AI, with models advancing toward human-level cyber offense capabilities in some scenarios. As part of our commitment to safety at the frontier, we conduct rigorous testing of our models' cyber offense capabilities. For Claude Opus 4 and Claude Sonnet 4, we partnered with Pattern Labs to conduct an in-depth [evaluation](https://patternlabs.co/blog/from-scripts-to-strategy-claude-4s-advanced-approach-to-offensive-security) ranging from standalone capture the flag(CTF) challenges to complex network environment simulations. The results reveal significant progress: Opus demonstrated markedly improved ability to think flexibly and adapt its approach to challenges instead of persisting with failed, unchanging approaches. Moreover, the model demonstrated significant improvement in vulnerability identification and executing complex multi-step attack chains, consistently succeeding where previous models failed. However, important limitations remain, particularly with maintaining coherent, long-horizon plans and goals if presented with unexpected obstacles. Our partners at Pattern Labs have posted the [full evaluation report](https://patternlabs.co/blog/from-scripts-to-strategy-claude-4s-advanced-approach-to-offensive-security), which reveals both these exciting advances and critical limitations that inform our ongoing safety work.

####

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

## Subscribe to the Frontier Red Team newsletter

Get updates on our latest red-teaming research and findings.
