---
title: 'Disagreement as Signal'
cluster: society
area: Knowledge management; organizational learning
stage: Proof of concept · gold labeling and evaluation pending
oneLine: An ambient LLM that probes experts the moment they disagree, turning tacit judgment into reusable knowledge.
whyMatters: Organizations lose expert judgment because the moments that contain it are never written down, and asking experts to state their general rules after the fact produces platitudes. Catching the reasoning while a concrete decision is still live is the difference between a knowledge base of maxims and one of usable, scoped judgments.
idea: Use an ambient LLM system to observe routine work, detect disagreement as a high-signal moment, ask a targeted in-context question while the decision is fresh, and convert the response into a situated knowledge card containing condition, action, rationale, and scope.
researchQuestion: Can disagreement in everyday work serve as a trigger for targeted LLM probing that externalizes experts' tacit judgment more effectively than asking them to articulate general rules?
keyProposition: Disagreement reveals situated expert judgment. Concrete, just-in-time probes at disagreement moments can make tacit reasoning articulable and preserve it as scoped, reusable organizational knowledge.
dataDescription: Proof-of-concept corpus drawn from 2,400 code-review comments across Rust, Django, and pandas — 526 multi-turn threads, 495 after the multi-participant filter, and 255 senior–junior candidate threads. An 80-thread stratified sample carries detector predictions, and five real situated knowledge cards have been constructed.
findings: The system produced traceable knowledge cards from real disagreements, establishing feasibility. In the 80-thread sample the detector classified 31 threads as disagreement-with-rationale and 49 as neutral. Precision, recall, F1, inter-rater reliability, transfer accuracy, and practitioner usefulness are not yet available — human gold labeling and the planned 12–16-person evaluation are still pending.
lastActivity: 2026-08
order: 2
---

Most knowledge-management systems ask people to write down what they know, which is precisely the
thing experts are worst at doing on demand. This project inverts the prompt. An ambient system
watches ordinary work for disagreement — the moment when two people with different experience reach
different conclusions about the same concrete case — and asks a narrow question right then, while the
decision is still specific enough to answer honestly.

The output is a situated knowledge card: the condition that triggered the judgment, the action taken,
the rationale, and the scope in which it applies. We have built the pipeline end to end on real code
review and produced cards from genuine disagreements. What remains is measurement: a human gold
standard for the disagreement detector, and an evaluation with practitioners to test whether the
cards transfer to people who were not in the original conversation.
