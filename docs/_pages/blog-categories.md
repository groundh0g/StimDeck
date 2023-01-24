---
layout: categories
title: "Blog Archive by Category"
permalink: /blog/categories/
excerpt: "Categories for blog posts."
last_modified_at: 2023-01-23T00:00:00-00:00
layout: single
author: Joseph Hall
author_profile: true
---

This is an archive of the blog, grouped by category.

{% assign sorted_categories = site.posts | map: "categories" | compact | unique | sort %}

<h2><i class="fas fa-solid fa-folder-tree"></i> Categories</h2>
<ul style="list-style: none;">
{% for category in sorted_categories %}
  {% assign post_count = site.categories[category] | size %}
  <li><i class="fas fa-solid fa-folder-open"></i> <a href="#{{ category | slugify }}-hash">{{ category }}</a> [{{ post_count }}]</li>
{% endfor %}
</ul>


{% for category in sorted_categories %}
    {% assign posts = site.categories[category] | sort_natural %}
    {% for post in posts %}
  <div><h2><a name="{{ category | slugify }}-hash"></a><i class="fas fa-solid fa-folder-open"></i> {{ category }}</h2></div>
  {% include archive-single.html %}
    {% endfor %}
{% endfor %}
