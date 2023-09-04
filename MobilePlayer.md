---
layout: page
title: Mobile Player
subtitle: High Quality Radio, Listen Live Online
---

{% assign stations = site.data.StreamDatabase %}
<div id="audioMenu" class="grid-container">

{% for station in stations %}
  {% if forloop.index0 | modulo: 3 == 0 %}
  <!-- Beginning of a new row -->
  | 
  {% endif %}

  [![{{ station.Station Name }}]({{ station.Logo }})]({{ station.URL }}) |
  
  {% if forloop.index0 | modulo: 3 == 2 or forloop.last %}
  <!-- End of the row -->
  |
  {% endif %}

{% endfor %}

</div>

{% include audio_player_script.html %}

