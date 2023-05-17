---
layout: page
title: Australian Broadcasting Corporation
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@1"></script> <!-- Include the HLS.js library -->

<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/triplej.png">
</a></p>

Triple J - Sydney 128Kbps

<audio id="triplejnsw" controls></audio> <!-- Create the first audio player -->

<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038316/doublejnsw/masterhq.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/doublej.png">
</a></p>

Double J - Sydney 128Kbps

<audio id="doublejnsw" controls></audio> <!-- Create the first audio player -->

<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038315/classicfmnsw/masterhq.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/abcclassic1.png">
</a></p>

ABC Classic 1 - Sydney 128Kbps

<audio id="classicfmnsw" controls></audio>


<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/abcclassic2.png">
</a></p>

ABC Classic 2 - Sydney 128Kbps

<audio id="classic2" controls></audio>

<!------------------------------------------->
<!--SCRIPTS-->
<!------------------------------------------->

<script>
  if (Hls.isSupported()) {
    var audio1 = document.getElementById('triplejnsw');
          // Initialize more audio variables as needed

    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8'); // Provide the path to the first .m3u8 file
    hls1.attachMedia(audio1);
  }
</script>

<script>
  if (Hls.isSupported()) {
    var audio1 = document.getElementById('doublejnsw');
          // Initialize more audio variables as needed

    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038315/doublejnsw/masterhq.m3u8'); // Provide the path to the first .m3u8 file
    hls1.attachMedia(audio1);
  }
</script>

<script>
  if (Hls.isSupported()) {
    var audio2 = document.getElementById('classicfmnsw');
    // Initialize more audio variables as needed

    var hls2 = new Hls();
    // Initialize more Hls instances as needed

    hls2.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8'); // Provide the path to the second .m3u8 file
    hls2.attachMedia(audio2);
  }
</script>

<script>
  if (Hls.isSupported()) {
    var audio3 = document.getElementById('classic2');
    // Initialize more audio variables as needed

    var hls3 = new Hls();
    // Initialize more Hls instances as needed

    hls3.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8'); // Provide the path to the second .m3u8 file
    hls3.attachMedia(audio3);
  }
</script>




