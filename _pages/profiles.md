---
layout: default
permalink: /people/
title: People
description: members of the DUAL Group
nav: true
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/sections.css' | relative_url }}">

<div class="dual-people">
  <header class="dual-people__intro">
    <p class="dual-section-kicker">People &amp; collaboration</p>
    <h1>The people behind DUAL.</h1>
    <p>
      Our group brings together researchers and students working across distributed intelligence, optimization, reliable AI, and
      efficient learning systems.
    </p>
  </header>

{% assign role_groups = "professor:Leadership|phd:PhD researchers|mphil:MPhil researchers|research-pathway:Research pathway|honours:Honours students|alumni:Alumni" | split: "|" %}

  <div class="dual-people__groups">
    {% for role_group in role_groups %}
      {% assign role_parts = role_group | split: ":" %}
      {% assign role_key = role_parts[0] %}
      {% assign role_label = role_parts[1] %}
      {% assign members = site.members | where: "role", role_key | sort: "name" %}
      {% if members.size > 0 %}
        <section class="dual-people__group" aria-labelledby="dual-people-{{ role_key }}">
          <div class="dual-people__group-heading">
            <div>
              <p class="dual-section-kicker">{{ role_label }}</p>
              <h2 id="dual-people-{{ role_key }}">{{ role_label }}</h2>
            </div>
            <span>{{ members.size }} {% if members.size == 1 %}member{% else %}members{% endif %}</span>
          </div>

          <div class="dual-people__grid">
            {% for member in members %}
              <article class="dual-person-card">
                {% if member.image %}
                  <a class="dual-person-card__image" href="{{ member.url | relative_url }}" tabindex="-1" aria-hidden="true">
                    <img src="{{ member.image | prepend: '/' | relative_url }}" alt="" loading="lazy">
                  </a>
                {% endif %}
                <div class="dual-person-card__body">
                  <h3><a href="{{ member.url | relative_url }}">{{ member.name }}</a></h3>
                  {% if member.description %}
                    <p>{{ member.description }}</p>
                  {% endif %}
                  {% include member_links.liquid links=member.links %}
                </div>
              </article>
            {% endfor %}
          </div>
        </section>
      {% endif %}
    {% endfor %}

  </div>

  <section class="dual-people__closing" aria-labelledby="dual-people-connect">
    <div>
      <p class="dual-section-kicker">People &amp; collaboration</p>
      <h2 id="dual-people-connect">Connect with the group.</h2>
      <p>Learn more about our research or get in touch to start a conversation.</p>
    </div>
    <div class="dual-people__closing-actions">
      <a href="{{ '/publications/' | relative_url }}">Explore research</a>
      <a href="{{ '/contact/' | relative_url }}">Contact DUAL</a>
    </div>
  </section>
</div>
