InterpretabilityResearch

# Privileged bases in the transformer residual stream

Mar 16, 2023

[Read Paper](https://transformer-circuits.pub/2023/privileged-basis/index.html)

## Abstract

Our mathematical theories of the Transformer architecture suggest that individual coordinates in the residual stream should have no special significance (that is, the basis directions should be in some sense "arbitrary" and no more likely to encode information than random directions). Recent work has shown that this observation is false in practice. We investigate this phenomenon and provisionally conclude that the per-dimension normalizers in the Adam optimizer are to blame for the effect.  
  
We explore two other obvious sources of basis dependency in a Transformer: Layer normalization, and finite-precision floating-point calculations. We confidently rule these out as being the source of the observed basis-alignment.

## Related content

### The missing map of the sky

Brice Ménard, an astrophysicist at Johns Hopkins University and a researcher at Anthropic, explains how he worked with Claude Science to produce the first complete map of the sky in UV light.

[Read more](https://www.anthropic.com/research/the-missing-map-of-the-sky)

### Launching an opt-in vulnerability-finding service for open-source software

We’re making available OSS Scanner, an opt-in vulnerability scanner for the open-source ecosystem that’s informed by our experience using Claude to find vulnerabilities during Project Glasswing.

[Read more](https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source)

### Claude-shaped science

Guest author Prof. Matthew Schwartz describes what happened when he stopped fighting Claude and allowed Claude to find “Claude-shaped” problems: ones best suited to the capabilities of the current generation of LLM tools. This led him to build BootLoops, a toolkit for exact calculations in quantitative science, which he has been applying across scientific fields alongside experts.

[Read more](https://www.anthropic.com/research/claude-shaped-science)
