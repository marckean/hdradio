---
layout: page
title: Australian Broadcasting Corporation
---



<script src="[path/to/hls.js](https://cdn.jsdelivr.net/npm/hls.js@1)"></script> <!-- Include the HLS.js library -->


<audio id="audioPlayer1" controls></audio> <!-- Create the first audio player -->
<audio id="audioPlayer2" controls></audio> <!-- Create the second audio player -->
<audio id="audioPlayer3" controls></audio> <!-- Create the third audio player -->
<!-- Add more audio players as needed -->

## Triple J - Sydney 128Kbps


  <script>
    if (Hls.isSupported()) {
      var audio1 = document.getElementById('audioPlayer1');
            // Initialize more audio variables as needed

      var hls1 = new Hls();
      // Initialize more Hls instances as needed

      hls1.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8'); // Provide the path to the first .m3u8 file
      hls1.attachMedia(audio1);
    }
  </script>

## ABC Classic 1 - Sydney 128Kbps


  <script>
    if (Hls.isSupported()) {
      var audio2 = document.getElementById('audioPlayer2');
      // Initialize more audio variables as needed

      var hls2 = new Hls();
      // Initialize more Hls instances as needed

      hls2.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8'); // Provide the path to the second .m3u8 file
      hls2.attachMedia(audio2);
    }
  </script>


## ABC Classic 2 - Sydney 128Kbps


  <script>
    if (Hls.isSupported()) {
      var audio2 = document.getElementById('audioPlayer3');
      // Initialize more audio variables as needed

      var hls2 = new Hls();
      // Initialize more Hls instances as needed

      hls2.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8'); // Provide the path to the second .m3u8 file
      hls2.attachMedia(audio2);
    }
  </script>



