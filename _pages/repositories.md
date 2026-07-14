---
layout: default
permalink: /repositories/
title: Repositories
description: GitHub organization and repositories for the DUAL Group.
nav: true
nav_order: 5
---

<link rel="stylesheet" href="{{ '/assets/css/sections.css' | relative_url }}">

<div class="dual-repositories">
  <header class="dual-repositories__intro">
    <p class="dual-section-kicker">Open research</p>
    <h1>Code for reproducible systems.</h1>
    <p>
      Explore implementations and research artifacts from DUAL work in federated learning, distributed optimization, anomaly
      detection, and efficient AI systems.
    </p>
  </header>

{% assign github_org = site.data.repositories.github_users | first %}
{% if github_org %}
<section class="dual-repositories__organization" aria-labelledby="dual-repositories-organization">
<div>
<p class="dual-section-kicker">GitHub organization</p>
<h2 id="dual-repositories-organization">dual-grp</h2>
<p>The DUAL Group maintains its public research code and project repositories in one shared organization.</p>
</div>
<a href="https://github.com/{{ github_org }}" target="_blank" rel="external nofollow noopener">
View organization <span aria-hidden="true">↗</span>
</a>
</section>
{% endif %}

{% if site.data.repositories.github_repos %}
<section class="dual-repositories__catalog" aria-labelledby="dual-repositories-catalog">
<div class="dual-repositories__section-heading">
<p class="dual-section-kicker">Selected repositories</p>
<h2 id="dual-repositories-catalog">Research code from the group.</h2>
</div>
<div class="dual-repositories__grid">
{% for repo in site.data.repositories.github_repos %}
{% include repository/repo.liquid repository=repo %}
{% endfor %}
</div>
</section>
{% endif %}
</div>
