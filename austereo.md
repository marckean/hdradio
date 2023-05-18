---
layout: page
title: Austereo
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script> <!-- Include the HLS.js library -->

<p align="left"><a href="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:5px 0px 5px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Sydney 128Kbps

<audio id="2classicrock" controls></audio>
<button id="2classicrock_playButton">Play</button> <!-- Create a button for manual play -->


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
  var playButton = document.getElementById('2classicrock_playButton'); // Get the play button element
  var audioSrc1 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';
  var hls1 = new Hls();
  // Initialize more audio variables as needed

  if (audio1.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio1.src = audioSrc1;

  } else {
    
    // Attach the media to the audio player when the HLS manifest is parsed
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      hls.attachMedia(audio1);
    })

    // Stop loading the source when the play button is clicked
    playButton.addEventListener('click', function() {
      hls.stopLoad(); // Stop loading the source

      // Manually load the source and start playback
      hls.loadSource(audioSrc1); // Provide the path to your .m3u8 file
      hls.attachMedia(audio1);
      audio1.play();
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
    hls2.stopLoad();
    hls2.attachMedia(audio2);
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
    hls3.stopLoad();
    hls3.attachMedia(audio3);
  }
</script>

<script>
  var audio4 = document.getElementById('6classicrock');
  var audioSrc4 = 'https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8';

  if (audio4.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio4.src = audioSrc4; 

  } else {
    var hls4 = new Hls();
    // Initialize more Hls instances as needed

    hls4.loadSource(audioSrc4); // Provide the path to the first .m3u8 file
    hls4.stopLoad();
    hls4.attachMedia(audio4);
  }
</script>



