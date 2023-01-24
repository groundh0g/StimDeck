---
layout: tags
title: "Blog Archive by Tag"
permalink: /blog/tags/
excerpt: "Tags for blog posts."
last_modified_at: 2023-01-23T00:00:00-00:00
layout: single
author: Joseph Hall
author_profile: true
---

This is an archive of the blog, grouped by tag.

{% assign sorted_tags = site.posts | map: "tags" | compact | unique | sort %}

<h2><i class="fas fa-solid fa-tags"></i> Tags</h2>
<ul style="list-style: none;">
{% for tag in sorted_tags %}
  {% assign post_count = site.tags[tag] | size %}
  <li><i class="fas fa-solid fa-tag"></i> <a href="#{{ tag | slugify }}-hash">{{ tag }}</a> [{{ post_count }}]</li>
{% endfor %}
</ul>


{% for tag in sorted_tags %}
    {% assign posts = site.tags[tag] | sort_natural %}
    {% for post in posts %}
  <div><h2><a name="{{ tag | slugify }}-hash"></a><i class="fas fa-solid fa-tag"></i> {{ tag }}</h2></div>
  {% include archive-single.html %}
    {% endfor %}
{% endfor %}
