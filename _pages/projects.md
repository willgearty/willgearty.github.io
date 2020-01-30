---
layout: page
title: Projects
permalink: /projects/
description: A growing collection of your cool projects.
social: true
---

<center>
    <img src="/assets/img/under_construction.png" width="60%">
</center>

{% for project in site.projects %}

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
            <span>
                <h1>{{ project.title }}</h1>
                <br/>
                <p>{{ project.description }}</p>
            </span>
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
            <span>
                <h1>{{ project.title }}</h1>
                <br/>
                <p>{{ project.description }}</p>
            </span>
            </a>
        </div>
    </div>

    {% endif %}

{% endunless %}

{% endfor %}
