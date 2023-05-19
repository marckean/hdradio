---
layout: post
title: Australian Broadcasting Corporation
---

Listen live, listen online, high quality, high definition, radio stream URLs listed here:

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script> <!-- Include the HLS.js library -->

<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplej.png">
</a></p>

Triple J - Sydney 128Kbps

<audio id="triplejnsw" controls></audio>

<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038315/doublejnsw/masterhq.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/doublej.png">
</a></p>

Double J - Sydney 128Kbps

<audio id="doublejnsw" controls></audio>

<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/abcclassic1.png">
</a></p>

ABC Classic 1 - Sydney 128Kbps

<audio id="classicfmnsw" controls></audio>


<!--Sydney-->
<p align="left"><a href="https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/abcclassic2.png">
</a></p>

ABC Classic 2 - Sydney 128Kbps

<audio id="classic2" controls></audio>

<!------------------------------------------->
<!--SCRIPTS-->
<!------------------------------------------->

<script>
  var audio1 = document.getElementById('triplejnsw');
  var audioSrc1 = 'https://mediaserviceslive.akamaized.net/hls/live/2038308/triplejnsw/masterhq.m3u8';
  var hls1 = new Hls();
  // Initialize more audio variables as needed

  if (audio1.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio1.src = audioSrc1;

  } else {

      hls1.attachMedia(audio1);

    // When the play button is clicked, check if the source is loaded and start playback
    audio1.addEventListener('play', function() {
      if (hls1.media && hls1.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls1.startLoad(); // Resume loading in case it was stopped
      } else {
        hls1.loadSource(audioSrc1); // Provide the path to your .m3u8 file
        audio1.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio1.addEventListener('pause', function() {
      hls1.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio2 = document.getElementById('doublejnsw');
  var audioSrc2 = 'https://mediaserviceslive.akamaized.net/hls/live/2038315/doublejnsw/masterhq.m3u8';
  var hls2 = new Hls();

  if (audio2.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio2.src = audioSrc2;

  } else {

      hls2.attachMedia(audio2);

    // When the play button is clicked, check if the source is loaded and start playback
    audio2.addEventListener('play', function() {
      if (hls2.media && hls2.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls2.startLoad(); // Resume loading in case it was stopped
      } else {
        hls2.loadSource(audioSrc2); // Provide the path to your .m3u8 file
        audio2.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio2.addEventListener('pause', function() {
      hls2.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio3 = document.getElementById('classicfmnsw');
  var audioSrc3 = 'https://mediaserviceslive.akamaized.net/hls/live/2038316/classicfmnsw/masterhq.m3u8';
  var hls3 = new Hls();

  if (audio3.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio3.src = audioSrc3;

  } else {

      hls3.attachMedia(audio3);

    // When the play button is clicked, check if the source is loaded and start playback
    audio3.addEventListener('play', function() {
      if (hls3.media && hls3.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls3.startLoad(); // Resume loading in case it was stopped
      } else {
        hls3.loadSource(audioSrc3); // Provide the path to your .m3u8 file
        audio3.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio3.addEventListener('pause', function() {
      hls3.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio4 = document.getElementById('classic2');
  var audioSrc4 = 'https://mediaserviceslive.akamaized.net/hls/live/2038317/classic2/masterhq.m3u8';
  var hls4 = new Hls();

  if (audio4.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio4.src = audioSrc4; 

  } else {

      hls4.attachMedia(audio4);

    // When the play button is clicked, check if the source is loaded and start playback
    audio4.addEventListener('play', function() {
      if (hls4.media && hls4.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls4.startLoad(); // Resume loading in case it was stopped
      } else {
        hls4.loadSource(audioSrc4); // Provide the path to your .m3u8 file
        audio4.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio4.addEventListener('pause', function() {
      hls4.stopLoad(); // Stop loading the source
    });
  }
</script>