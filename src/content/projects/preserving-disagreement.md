---
title: 'Preserving Disagreement in Human–AI Innovation'
cluster: agents
area: Knowledge management; human–AI innovation
stage: Accepted · OUI 2026
oneLine: Minority concerns that consensus discards validate at nearly the same rate as the ones it keeps.
whyMatters: Multi-agent systems are converging on consensus rules to decide what to act on, and everything outside the majority is thrown away. If dismissed concerns turn out to carry as much downstream-validated knowledge as adopted ones, then consensus is not a filter for quality — it is a lossy compression of what the system knew.
idea: Treat minority concerns discarded by consensus-oriented multi-agent systems as potentially valuable coordination residue, then validate those concerns against later independent human activity.
researchQuestion: Does inter-agent disagreement discarded by a consensus rule contain innovation-relevant knowledge that subsequently appears in independent human activity?
keyProposition: Consensus does not reliably separate useful concerns from noise. Minority disagreement can carry downstream-validated knowledge and should be preserved, organized, and made retrievable rather than erased.
dataDescription: Replay of 100 randomly sampled merged Kubernetes pull requests through four specialized LLM review agents. The replay produced 615 distinct concerns, partitioned into 204 adopted and 411 dismissed. Each concern was traced across seven repositories over a three-month forward window and graded on a seven-level validation scale.
findings: Of the 411 dismissed concerns, 149 (36.3%) were independently re-raised, 68 (16.5%) actively addressed, 14 (3.4%) reached high-value validation, and 6 (1.5%) mapped to incidents. Dismissed and adopted concerns validated at nearly identical rates — 36.3% vs. 34.8% for re-raising, 16.5% vs. 17.2% for active addressing. Consensus provided lift only at the highest-severity tail.
lastActivity: 2026-06
venue: Open & User Innovation Conference 2026 (Harvard Business School)
collaborators: ['Shengsheng Huang (Texas A&M)']
order: 1
---

Consensus is the default stopping rule in multi-agent review: when several agents inspect the same
artifact, the majority position becomes the output and the rest is discarded. This project asks what
is inside the discarded pile. We replayed real merged Kubernetes pull requests through a panel of
specialized LLM review agents, recorded every concern raised, and then followed each concern forward
into three months of independent human activity across the wider repository ecosystem.

The dismissed concerns did not behave like noise. They were re-raised and acted on by human
developers at almost exactly the rate of the concerns the panel adopted, which means the consensus
rule was not separating signal from noise so much as choosing arbitrarily between two comparably
useful sets. The practical implication is architectural: coordination residue should be preserved and
made retrievable, not thrown away at the moment of aggregation.
