---
layout: page
title: GOODSPEED
description: Speculative decoding for efficient and fair LLM inference at the edge.
img: assets/img/projects/goodspeed_intro.PNG
image_alt: GOODSPEED distributed speculative decoding architecture with draft and verification servers
image_fit: contain
eyebrow: Efficient inference
topics:
  - Speculative decoding
  - Edge inference
  - Fair resource allocation
importance: 2
category: research
permalink: /projects/goodspeed/
related_publications: true
---

<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

<div class="dual-project-detail">
  <a class="dual-project-detail__back" href="{{ '/projects/' | relative_url }}"><span aria-hidden="true">←</span> All projects</a>

  <header class="dual-project-detail__hero">
    <div class="dual-project-detail__hero-copy">
      <p class="dual-project-detail__kicker">{{ page.eyebrow }}</p>
      <h1>{{ page.title }}</h1>
      <p class="dual-project-detail__lead">{{ page.description }}</p>
      <ul class="dual-project-detail__topics" aria-label="{{ page.title }} research topics">
        {% for topic in page.topics %}
          <li>{{ topic }}</li>
        {% endfor %}
      </ul>
    </div>
    <div class="dual-project-detail__visual dual-project-detail__visual--{{ page.image_fit }}">
      <img src="{{ page.img | prepend: '/' | relative_url }}" alt="{{ page.image_alt }}">
    </div>
  </header>

  <section class="dual-project-detail__section dual-project-detail__overview" aria-labelledby="goodspeed-overview">
    <div class="dual-project-detail__section-heading">
      <p class="dual-project-detail__kicker">Overview</p>
      <h2 id="goodspeed-overview">Faster inference, shared fairly.</h2>
    </div>
    <div class="dual-project-detail__prose">
      <p>GOODSPEED explores speculative decoding for efficient large language model inference in distributed edge environments.</p>
      <p>
        The project studies how to balance inference speed, output quality, and proportional fairness across heterogeneous edge
        resources and draft servers.
      </p>
    </div>
  </section>

  <section class="dual-project-detail__section dual-project-detail__focus" aria-labelledby="goodspeed-focus">
    <div class="dual-project-detail__section-heading">
      <p class="dual-project-detail__kicker">Research focus</p>
      <h2 id="goodspeed-focus">Coordinated inference at the edge.</h2>
    </div>
    <ol class="dual-project-detail__focus-list">
      <li>Speculative decoding optimization for faster token generation while preserving output quality.</li>
      <li>Fair resource allocation across heterogeneous edge clients and servers.</li>
      <li>Efficient LLM inference in resource-constrained distributed systems.</li>
      <li>Coordinated inference architectures across multiple edge nodes.</li>
    </ol>
  </section>

  <section class="dual-project-detail__section dual-project-detail__split" aria-labelledby="goodspeed-direction">
    <div>
      <p class="dual-project-detail__kicker">System direction</p>
      <h2 id="goodspeed-direction">Adaptive decoding across distributed resources.</h2>
    </div>
    <p>
      GOODSPEED builds on recent advances in accelerated inference, distributed machine learning systems, edge computing
      optimization, and fair resource allocation.
    </p>
  </section>

  <section class="dual-project-detail__section dual-project-detail__status" aria-labelledby="goodspeed-status">
    <p class="dual-project-detail__kicker">Status</p>
    <h2 id="goodspeed-status">Active research and development.</h2>
    <p>This project is under active development. Research findings and implementation details will be shared as they become available.</p>
  </section>

<span class="dual-project-detail__citation-source" aria-hidden="true">{% cite goodspeed2025 %}</span>
</div>

<nav class="dual-project-nav" aria-label="Project navigation">
  <a href="{{ '/projects/' | relative_url }}"><span aria-hidden="true">←</span> Back to all projects</a>
  <a class="dual-project-nav__next" href="{{ '/projects/semcom/' | relative_url }}">
    <span>Explore another project</span>
    <strong>WaSeCom <span aria-hidden="true">→</span></strong>
  </a>
</nav>
