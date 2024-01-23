---
layout: page
title: Research
permalink: /research/
description: 
nav: true
nav_order: 5
display_categories:
horizontal: false
---
<div class="projects">
<p align="justify">The degree to which species diversify taxonomically and functionally varies dramatically across time, space, and the tree of life.
    This ultimately has resulted in the vast diversity and disparity that we see on Earth today. Numerous physiological, ecological, and environmental conditions have been implicated as the causes for this variation.
    I integrate tools and theory from paleontology, geology, ecology, and physiology to study how these components collectively drive and constrain diversity and disparity across time, space, and life.
    Beyond understanding how and why life diversified the way it did in the past, my research provides insights into how modern anthropogenic environmental shifts may ultimately influence the ecology and evolution of today’s biosphere.
</p>

<p><i>Click any of the tiles below to learn more about my various research projects:</i></p>

<center>
{% assign projects = site.projects | sort: 'importance' %}
{% for project in projects %}

{% unless project.hidden %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <div>
            <span>
                <h1>{{ project.title }}</h1>
                {% if project.description %}
                <br/>
                <p>{{ project.description }}</p>
                {% endif %}
            </span>
        </div>
        </a>
    </div>
</div>
{% else %}

<div class="project ">
    <div class="thumbnail">
        <a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <div>
            <span>
                <h1>{{ project.title }}</h1>
                {% if project.description %}
                <br/>
                <p>{{ project.description }}</p>
                {% endif %}
            </span>
        </div>
        </a>
    </div>
</div>

{% endif %}

{% endunless %}

{% endfor %}
</center>
</div>
