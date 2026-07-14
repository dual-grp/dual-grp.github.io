---
layout: default
title: DUAL Group
permalink: /
---

<link rel="stylesheet" href="{{ '/assets/css/home.css' | relative_url }}">

<div class="dual-home">
  <section class="dual-home__hero" aria-labelledby="dual-home-title">
    <div class="dual-home__hero-copy">
      <p class="dual-home__eyebrow">School of Computer Science · University of Sydney</p>
      <h1 id="dual-home-title">Distributed intelligence for real&#8209;world systems.</h1>
      <p class="dual-home__hero-lead">
        We develop efficient and reliable learning systems at the intersection of distributed computing, optimization, and artificial
        intelligence.
      </p>
      <div class="dual-home__actions">
        <a class="dual-home__button dual-home__button--primary" href="{{ '/publications/' | relative_url }}">Explore research</a>
        <a class="dual-home__button dual-home__button--secondary" href="{{ '/people/' | relative_url }}">Meet the team</a>
      </div>
    </div>
    <div class="dual-home__brand" aria-hidden="true">
      <span class="dual-home__brand-glow"></span>
      <img src="{{ '/assets/img/branding/logo.png' | relative_url }}" alt="">
    </div>
  </section>

  <section class="dual-home__intro" aria-labelledby="dual-home-about">
    <div class="dual-home__section-heading">
      <p class="dual-home__kicker">About DUAL</p>
      <h2 id="dual-home-about">From mathematical foundations to deployable systems.</h2>
    </div>
    <div class="dual-home__intro-copy">
      <p>
        The Distributed compUting, optimizAtion, and Learning (DUAL) Group connects rigorous theory with intelligent systems that can
        operate at scale.
      </p>
      <p>
        We study resource-constrained environments where communication, compute, fairness, and reliability matter just as much as model
        accuracy.
      </p>
    </div>
  </section>

  <section class="dual-home__section" aria-labelledby="dual-home-themes">
    <div class="dual-home__section-heading dual-home__section-heading--compact">
      <p class="dual-home__kicker">Research themes</p>
      <h2 id="dual-home-themes">Building dependable intelligence, together.</h2>
    </div>
    <div class="dual-home__theme-grid">
      <article class="dual-home__theme-card">
        <span class="dual-home__theme-number">01</span>
        <h3>Efficient AI Systems</h3>
        <p>Faster and fairer large language model inference across heterogeneous edge resources.</p>
      </article>
      <article class="dual-home__theme-card">
        <span class="dual-home__theme-number">02</span>
        <h3>Federated &amp; Edge Learning</h3>
        <p>Collaborative learning that respects resource, privacy, and communication constraints.</p>
      </article>
      <article class="dual-home__theme-card">
        <span class="dual-home__theme-number">03</span>
        <h3>Distributed Optimization</h3>
        <p>Scalable algorithms with robust convergence and practical systems performance.</p>
      </article>
      <article class="dual-home__theme-card">
        <span class="dual-home__theme-number">04</span>
        <h3>Semantic Communication</h3>
        <p>Reliable meaning-aware communication under uncertainty and changing wireless conditions.</p>
      </article>
      <article class="dual-home__theme-card dual-home__theme-card--wide">
        <span class="dual-home__theme-number">05</span>
        <h3>Distributed Speculative Decoding for Edge LLM Inference</h3>
        <p>Coordinated decoding systems that accelerate language model inference across heterogeneous edge infrastructure.</p>
      </article>
    </div>
  </section>

  <section class="dual-home__section" aria-labelledby="dual-home-projects">
    <div class="dual-home__section-heading dual-home__section-heading--compact">
      <p class="dual-home__kicker">Featured projects</p>
      <h2 id="dual-home-projects">Research in motion.</h2>
    </div>
    <div class="dual-home__project-grid">
      <a class="dual-home__project-card" href="{{ '/projects/semcom/' | relative_url }}">
        <img src="{{ '/assets/img/lab/research.jpg' | relative_url }}" alt="Abstract visualization of connected data points">
        <span class="dual-home__project-shade"></span>
        <span class="dual-home__project-copy">
          <span class="dual-home__project-label">Robust communication</span>
          <strong>WaSeCom</strong>
          <span>Distributionally robust wireless semantic communication with large AI models.</span>
        </span>
      </a>
      <a class="dual-home__project-card" href="{{ '/projects/goodspeed/' | relative_url }}">
        <img
          src="{{ '/assets/img/projects/goodspeed_intro.PNG' | relative_url }}"
          alt="GOODSPEED distributed edge inference architecture"
        >
        <span class="dual-home__project-shade"></span>
        <span class="dual-home__project-copy">
          <span class="dual-home__project-label">Efficient inference</span>
          <strong>GOODSPEED</strong>
          <span>Speculative decoding for fast and fair LLM inference at the edge.</span>
        </span>
      </a>
    </div>
    <a class="dual-home__text-link" href="{{ '/projects/' | relative_url }}">View all projects <span aria-hidden="true">→</span></a>
  </section>

  <section class="dual-home__section dual-home__publications" aria-labelledby="dual-home-publications">
    <div class="dual-home__section-heading dual-home__section-heading--compact">
      <p class="dual-home__kicker">Selected publications</p>
      <h2 id="dual-home-publications">Recent work from the group.</h2>
    </div>
    {% include selected_papers.liquid %}
    <a class="dual-home__text-link" href="{{ '/publications/' | relative_url }}">Explore all research <span aria-hidden="true">→</span></a>
  </section>

  <section class="dual-home__closing" aria-labelledby="dual-home-people">
    <div>
      <p class="dual-home__kicker">People &amp; collaboration</p>
      <h2 id="dual-home-people">Curious minds are welcome.</h2>
      <p>
        DUAL brings together researchers and students across machine learning, distributed systems, optimization, and edge
        intelligence.
      </p>
      <div class="dual-home__actions dual-home__actions--closing">
        <a class="dual-home__button dual-home__button--light" href="{{ '/people/' | relative_url }}">Meet the team</a>
        <a class="dual-home__button dual-home__button--outline" href="{{ '/contact/' | relative_url }}">Contact us</a>
      </div>
    </div>
    <figure class="dual-home__closing-photo">
      <img src="{{ '/assets/img/lab/group_lunch.jpg' | relative_url }}" alt="DUAL Group members gathered outdoors for a group lunch" loading="lazy">
      <figcaption>Group lunch with the DUAL team</figcaption>
    </figure>
  </section>
</div>
