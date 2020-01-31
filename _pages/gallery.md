---
layout: page
title: Gallery
permalink: /gallery/
description: 
social: true
---
<div class="noborder">
    <table>
        {% for album in site.data.flickr %}
            {% assign loopindex = forloop.index | modulo: 2 %}
            {% if loopindex == 1 %}
            <tr>
            {% endif %}
            <td width="50%">
                <h3>{{ album.title }}</h3>
                <a data-flickr-embed="true" data-header="false" data-footer="false" href="https://www.flickr.com/photos/127446549@N05/albums/{{ album.album }}" title="{{ album.title }}"><img src="https://live.staticflickr.com/65535/{{ album.image }}.jpg" width="100%" height="auto" alt="{{ album.title }}"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </td>
            {% if loopindex == 0  or forloop.last %}
            </tr>
            {% endif %}
        {% endfor %}
    </table>
</div>

<h3>Other Random Images</h3>
{% include image_gallery.html folder="/assets/img/gallery" %}
