---
layout: page
title: Austereo
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@1"></script> <!-- Include the HLS.js library -->
<script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@0.20/+esm"></script>

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
  var audioSrc1 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';
  // Initialize more audio variables as needed

  if (audio1.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio1.src = audioSrc1;

  } else {
    var hls1 = new Hls();
    // Initialize more Hls instances as needed

    hls1.loadSource(audioSrc1); // Provide the path to the first .m3u8 file
    hls1.attachMedia(audio1);
    hls1.on(Hls.Events.MANIFEST_PARSED, function() {
          // Start playback when desired, e.g., on a button click
          audio1.button
        });
  }
</script>

<script>
  var audio2 = document.getElementById('3classicrock');
  var audioSrc2 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';

  if (audio2.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio2.src = audioSrc2;

  } else {
    var hls2 = new Hls();
    // Initialize more Hls instances as needed

    hls2.loadSource(audioSrc2); // Provide the path to the first .m3u8 file
    hls2.attachMedia(audio2);
    hls2.on(Hls.Events.MANIFEST_PARSED, function() {
          // Start playback when desired, e.g., on a button click
          // audio1.play();
        });
  }
</script>

<script>
  var audio3 = document.getElementById('4classicrock');
  var audioSrc3 = 'https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8';

  if (audio3.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio3.src = audioSrc3;

  } else {
    var hls3 = new Hls();
    // Initialize more Hls instances as needed

    hls3.loadSource(audioSrc3); // Provide the path to the first .m3u8 file
    hls3.attachMedia(audio3);
    hls3.on(Hls.Events.MANIFEST_PARSED, function() {
          // Start playback when desired, e.g., on a button click
          // audio1.play();
        });
  }
</script>

<script>
  var audio4 = document.getElementById('6classicrock');
  var audioSrc4 = 'https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8';

  if (audio4.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    <media-controller audio>
  <audio
    slot="media"
    src="https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8"
  ></audio>
      <media-control-bar>
        <media-play-button></media-play-button>
        <media-time-display show-duration></media-time-display>
        <media-mute-button></media-mute-button>
        <media-volume-range></media-volume-range>
      </media-control-bar>
        </media-controller> 

  } else {
    var hls4 = new Hls();
    // Initialize more Hls instances as needed

    hls4.loadSource(audioSrc4); // Provide the path to the first .m3u8 file
    hls4.attachMedia(audio4);
    hls4.on(Hls.Events.MANIFEST_PARSED, function() {
          // Start playback when desired, e.g., on a button click
          // audio1.play();
        });
  }
</script>

<p>

<media-controller audio1>
  <audio1
    slot="media"
    src="https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8"
  ></audio1>
  <media-control-bar>
    <media-play-button></media-play-button>
    <media-time-display show-duration></media-time-display>
    <media-mute-button></media-mute-button>
    <media-volume-range></media-volume-range>
  </media-control-bar>
</media-controller>