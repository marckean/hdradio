---
layout: page
title: Austereo
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@1"></script> <!-- Include the HLS.js library -->


<p align="left"><a href="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Sydney 128Kbps

<audio id="2classicrock" controls></audio>


<p align="left"><a href="https://wz2liw.scahw.com.au/live/3classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Melbourne 128Kbps

<audio id="3classicrock" controls></audio>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Brisbane 128Kbps

<audio id="4classicrock" controls></audio>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Perth 128Kbps

<audio id="6classicrock" controls></audio>


<!------------------------------------------->
<!--SCRIPTS-->
<!------------------------------------------->

<script>
  var audio1 = document.getElementById('2classicrock');
  // Initialize more audio variables as needed

  if (audio1.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio1.src = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'; // Provide the path to the first .m3u8 file

    // Provide fallback sources and initialize more audio players as needed
  } else {
    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource('https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    //hls1.attachMedia(audio1);
  }
</script>

<script>
  var audio2 = document.getElementById('3classicrock');
  // Initialize more audio variables as needed

  if (audio2.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio2.src = 'https://wz2liw.scahw.com.au/live/3classicrock_128.stream/playlist.m3u8'; // Provide the path to the first .m3u8 file

    // Provide fallback sources and initialize more audio players as needed
  } else {
    var hls2 = new Hls();
    // Initialize more Hls instances as needed

    hls2.loadSource('https://wz2liw.scahw.com.au/live/3classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    //hls2.attachMedia(audio2);
  }
</script>

<script>
  var audio3 = document.getElementById('4classicrock');
  // Initialize more audio variables as needed

  if (audio3.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio3.src = 'https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8'; // Provide the path to the first .m3u8 file

    // Provide fallback sources and initialize more audio players as needed
  } else {
    var hls3 = new Hls();
    // Initialize more Hls instances as needed

    hls3.loadSource('https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    //hls3.attachMedia(audio3);
  }
</script>

<script>
  var audio4 = document.getElementById('6classicrock');
  // Initialize more audio variables as needed

  if (audio4.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio4.src = 'https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8'; // Provide the path to the first .m3u8 file

    // Provide fallback sources and initialize more audio players as needed
  } else {
    var hls4 = new Hls();
    // Initialize more Hls instances as needed

    hls4.loadSource('https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    //hls4.attachMedia(audio4);
  }
</script>

