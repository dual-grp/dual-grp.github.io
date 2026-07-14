---
layout: page
title: WaSeCom
description: Wasserstein distributionally robust wireless semantic communication with large AI models.
img: assets/img/lab/research.jpg
image_alt: Abstract blue visualization of connected information in a communication system
image_fit: cover
eyebrow: Robust communication
topics:
  - Semantic communication
  - Distributional robustness
  - Wireless AI
importance: 1
category: research
permalink: /projects/semcom/
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

  <section class="dual-project-detail__section dual-project-detail__overview" aria-labelledby="wasecom-overview">
    <div class="dual-project-detail__section-heading">
      <p class="dual-project-detail__kicker">Overview</p>
      <h2 id="wasecom-overview">Reliability across meaning and transmission.</h2>
    </div>
    <div class="dual-project-detail__prose">
      <p>
        WaSeCom is a model-agnostic framework for improving the reliability and adaptability of wireless semantic communication
        systems under semantic-level and channel-level uncertainty.
      </p>
      <p>
        The project combines large AI models with Wasserstein distributionally robust optimization to preserve semantic fidelity
        under adversarial perturbations, distribution shifts, and challenging wireless channel conditions.
      </p>
    </div>
  </section>

  <section class="dual-project-detail__section dual-project-detail__focus" aria-labelledby="wasecom-focus">
    <div class="dual-project-detail__section-heading">
      <p class="dual-project-detail__kicker">Research focus</p>
      <h2 id="wasecom-focus">Robust by design.</h2>
    </div>
    <ol class="dual-project-detail__focus-list">
      <li>Robust semantic encoding and decoding under semantic noise, adversarial perturbations, and input distribution shifts.</li>
      <li>Robust channel encoding and decoding under AWGN, Rayleigh fading, interference, and other channel variations.</li>
      <li>Bi-level Wasserstein distributionally robust optimization for semantic and physical layers.</li>
      <li>Model-agnostic integration with transformer-based and multimodal AI architectures.</li>
    </ol>
  </section>

  <section class="dual-project-detail__section dual-project-detail__split" aria-labelledby="wasecom-method">
    <div>
      <p class="dual-project-detail__kicker">How it works</p>
      <h2 id="wasecom-method">A bi-level view of uncertainty.</h2>
    </div>
    <p>
      WaSeCom uses large AI model encoders for compact semantic representations across text, image, audio, and video modalities. A
      bi-level optimization formulation separates semantic robustness from channel robustness, while dual reformulation and smooth
      worst-case objectives make training scalable with deep learning models.
    </p>
  </section>

  <section class="dual-project-detail__section" aria-labelledby="wasecom-contributions">
    <div class="dual-project-detail__section-heading">
      <p class="dual-project-detail__kicker">Contributions</p>
      <h2 id="wasecom-contributions">What the framework brings together.</h2>
    </div>
    <ul class="dual-project-detail__contribution-grid">
      <li>A Wasserstein robust framework for wireless semantic communication.</li>
      <li>Robustness guarantees for semantic and channel uncertainty.</li>
      <li>Model-agnostic design across large AI architectures and modalities.</li>
      <li>Empirical validation for image and text semantic communication tasks.</li>
    </ul>
  </section>

  <section class="dual-project-detail__section dual-project-detail__collaboration" aria-labelledby="wasecom-collaboration">
    <p class="dual-project-detail__kicker">Collaboration</p>
    <h2 id="wasecom-collaboration">A cross-institution research effort.</h2>
    <p>
      This project includes researchers from the University of Sydney, Kyung Hee University, Virginia Tech, Nanyang Technological
      University, University of Houston, Princeton University, and partner institutions.
    </p>
  </section>

<span class="dual-project-detail__citation-source" aria-hidden="true">{% cite semcom2025 %}</span>
</div>

<nav class="dual-project-nav" aria-label="Project navigation">
  <a href="{{ '/projects/' | relative_url }}"><span aria-hidden="true">←</span> Back to all projects</a>
  <a class="dual-project-nav__next" href="{{ '/projects/goodspeed/' | relative_url }}">
    <span>Next project</span>
    <strong>GOODSPEED <span aria-hidden="true">→</span></strong>
  </a>
</nav>
