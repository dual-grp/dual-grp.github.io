---
layout: default
title: Projects
permalink: /projects/
description: research projects and systems from the DUAL Group
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

<div class="dual-projects">
  <header class="dual-projects__intro">
    <p class="dual-projects__kicker">Research projects</p>
    <h1>Research, built into systems.</h1>
    <p>
      We turn ideas in distributed intelligence into methods and systems for reliable communication, efficient edge inference,
      and resource-aware learning.
    </p>
  </header>

{% assign sorted_projects = site.projects | sort: "importance" %}
  <section class="dual-projects__list" aria-label="DUAL research projects">
    {% for project in sorted_projects %}
      {% assign card_direction = forloop.index0 | modulo: 2 %}
      <article class="dual-projects__card{% if card_direction == 1 %} dual-projects__card--reverse{% endif %}">
        <div class="dual-projects__media dual-projects__media--{{ project.image_fit | default: 'cover' }}">
          <img
            src="{{ project.img | prepend: '/' | relative_url }}"
            alt="{{ project.image_alt }}"
            {% if forloop.first %}
              loading="eager"
            {% else %}
              loading="lazy"
            {% endif %}
          >
        </div>
        <div class="dual-projects__card-copy">
          <p class="dual-projects__eyebrow">{{ project.eyebrow }}</p>
          <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
          <p class="dual-projects__description">{{ project.description }}</p>
          <ul class="dual-projects__topics" aria-label="{{ project.title }} research topics">
            {% for topic in project.topics %}
              <li>{{ topic }}</li>
            {% endfor %}
          </ul>
          <a class="dual-projects__link" href="{{ project.url | relative_url }}">
            Explore project <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    {% endfor %}
  </section>

  <section class="dual-projects__closing" aria-labelledby="dual-projects-research">
    <div>
      <p class="dual-projects__kicker">Research &amp; publications</p>
      <h2 id="dual-projects-research">Follow the ideas behind each system.</h2>
      <p class="dual-projects__closing-copy">Explore the methods, analysis, and published work that support DUAL projects.</p>
    </div>
    <a class="dual-projects__button" href="{{ '/publications/' | relative_url }}">Browse publications</a>
  </section>
</div>
