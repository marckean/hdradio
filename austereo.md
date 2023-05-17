---
layout: page
title: Austereo
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@1"></script> <!-- Include the HLS.js library -->

## Triple M Classic Rock Digital - Sydney 128Kbps

<audio id="2classicrock" controls></audio>

## Triple M Classic Rock Digital - Melbourne 128Kbps

<audio id="3classicrock" controls></audio>

## Triple M Classic Rock Digital - Brisbane 128Kbps

<audio id="4classicrock" controls></audio>

## Triple M Classic Rock Digital - Perth 128Kbps

<audio id="6classicrock" controls></audio>


<!------------------------------------------->
<!--SCRIPTS-->
<!------------------------------------------->

<script>
  if (Hls.isSupported()) {
    var audio1 = document.getElementById('2classicrock');
          // Initialize more audio variables as needed

    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource('https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    hls1.attachMedia(audio1);
  }
</script>

<script>
  if (Hls.isSupported()) {
    var audio1 = document.getElementById('3classicrock');
          // Initialize more audio variables as needed

    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource('https://wz2liw.scahw.com.au/live/3classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    hls1.attachMedia(audio1);
  }
</script>

<script>
  if (Hls.isSupported()) {
    var audio1 = document.getElementById('4classicrock');
          // Initialize more audio variables as needed

    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource('https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    hls1.attachMedia(audio1);
  }
</script>

<script>
  if (Hls.isSupported()) {
    var audio1 = document.getElementById('6classicrock');
          // Initialize more audio variables as needed

    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource('https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8'); // Provide the path to the first .m3u8 file
    hls1.attachMedia(audio1);
  }
</script>