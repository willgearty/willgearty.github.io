---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2020, 2018, 2016, 2013]
social: true
header: true
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
