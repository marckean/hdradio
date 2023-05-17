---
layout: page
title: Australian Broadcasting Corporation
---


## Triple J - Sydney 128Kbps

<!--Simplest syntax-->
<audio src="https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8" type="audio/mpeg" controls>
  I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
</audio>

<audio controls>
    <source src="https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8" type="application/x-mpegURL">
    Your browser does not support the HLS audio player.
  </audio>

[Stream URL](https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8)


## ABC Classic 1 - Sydney 128Kbps

<!--Simplest syntax-->
<audio src="https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8" type="audio/mpeg" controls>
  I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
</audio>

<audio controls>
    <source src="https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8" type="application/x-mpegURL">
    Your browser does not support the HLS audio player.
  </audio>

[Stream URL](https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8)



## ABC Classic 2 - Sydney 128Kbps

<!--Simplest syntax-->
<audio src="https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8" type="audio/mpeg" controls>
  I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
</audio>

<audio controls>
    <source src="https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8" type="application/x-mpegURL">
    Your browser does not support the HLS audio player.
  </audio>

[Stream URL](https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8)


<!DOCTYPE html>
<html>
<head>
  <title>HLS Audio Player</title>
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
</body>
</html>

