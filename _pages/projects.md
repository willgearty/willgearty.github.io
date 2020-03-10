---
layout: page
title: Research
permalink: /research/
description: Click any of the tiles below to learn more about my various research projects
social: true
header: true
---

<center>
{% assign projects = site.projects | sort: 'order' %}
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