---
layout: default
permalink: /publications/
title: Research
description: publications and research directions from the DUAL Group
nav: true
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/research.css' | relative_url }}">

<div class="dual-research">
  <header class="dual-research__intro">
    <p class="dual-research__kicker">Research &amp; publications</p>
    <h1>Ideas, methods, and systems.</h1>
    <div class="dual-research__intro-copy">
      <p>
        Our research explores the intersection of distributed computing, mathematical optimization, and artificial intelligence to build
        scalable, efficient, and reliable edge learning systems.
      </p>
      <p>
        We design algorithms that integrate distributed architectures with optimization principles to improve the efficiency, fairness,
        and interpretability of modern AI-edge systems, with a focus on large language models, federated and edge learning, and real-time
        collaborative inference.
      </p>
    </div>
  </header>

  <section class="dual-research__section dual-research__highlighted" aria-labelledby="dual-research-highlighted">
    <div class="dual-research__section-heading">
      <p class="dual-research__kicker">Selected work</p>
      <h2 id="dual-research-highlighted">Highlighted</h2>
    </div>
    {% bibliography --query @*[selected=true] %}
  </section>

  <section class="dual-research__section dual-research__all" aria-labelledby="dual-research-all">
    <div class="dual-research__section-heading">
      <p class="dual-research__kicker">Complete archive</p>
      <h2 id="dual-research-all">All Publications</h2>
    </div>
    {% include bib_search.liquid %}
    <div class="publications">
      {% bibliography %}
    </div>
  </section>
</div>
