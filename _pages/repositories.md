---
layout: page
permalink: /repositories/
title: repositories
description: GitHub organization and repositories for the DUAL Group.
nav: true
nav_order: 5
---

## GitHub Organization

The DUAL Group maintains its code and project repositories under the [dual-grp GitHub organization](https://github.com/dual-grp).

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories row row-cols-1 row-cols-md-2 g-3 align-items-stretch">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
