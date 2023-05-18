---
layout: page
title: Austereo
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script> <!-- Include the HLS.js library -->

<p align="left"><a href="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Sydney 128Kbps

<audio id="2classicrock" controls></audio>


<p align="left"><a href="https://wz2liw.scahw.com.au/live/3classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Melbourne 128Kbps

<audio id="3classicrock" controls></audio>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Brisbane 128Kbps

<audio id="4classicrock" controls></audio>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Perth 128Kbps

<audio id="6classicrock" controls></audio>


<!------------------------------------------->
<!--------SCRIPTS-------->
<!------------------------------------------->

<script>
  var audio1 = document.getElementById('2classicrock');
  var audioSrc1 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';
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
  var audio2 = document.getElementById('3classicrock');
  var audioSrc2 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';
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
  var audio3 = document.getElementById('4classicrock');
  var audioSrc3 = 'https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8';
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
  var audio4 = document.getElementById('6classicrock');
  var audioSrc4 = 'https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8';
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



