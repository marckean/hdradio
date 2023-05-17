---
layout: page
title: Australian Broadcasting Corporation
---


## Triple J - Sydney 128Kbps

<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/hls.js@1"></script> <!-- Include the HLS.js library -->
</head>

<body>
  <audio id="audioPlayer" controls></audio> <!-- Create an audio element with controls -->

  <script>
    if (Hls.isSupported()) {
      var audio = document.getElementById('audioPlayer');
      var hls = new Hls();
      
      hls.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8'); // Provide the path to your .m3u8 file
      hls.attachMedia(audio);

    }
  </script>



## ABC Classic 1 - Sydney 128Kbps



  <script>
    if (Hls.isSupported()) {
      var audio = document.getElementById('audioPlayer');
      var hls = new Hls();
      
      hls.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8'); // Provide the path to your .m3u8 file
      hls.attachMedia(audio);

    }
  </script>



## ABC Classic 2 - Sydney 128Kbps



  <script>
    if (Hls.isSupported()) {
      var audio = document.getElementById('audioPlayer');
      var hls = new Hls();
      
      hls.loadSource('https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8'); // Provide the path to your .m3u8 file
      hls.attachMedia(audio);

    }
  </script>
</body>

</html>

