---
layout: page
title: Nova Entertainment
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script> <!-- Include the HLS.js library -->

| Station | Location | Format | Stream URL |
|:-------------|:------------------|:------|
| Kiis 1065 | Sydney | CHR |  |
| 2Day FM | Sydney | CHR |  |


<button id="playButton">Play</button><script>var audioSrc;function updateGlobalVariable() {audioSrc = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'}</script>


<audio id="2classicrock" controls></audio>

<script>
  var audio = document.getElementById('2classicrock');
  var url = audioSrc()
  var hls = new Hls();
  // Initialize more audio variables as needed
    playButton.addEventListener('click', function() {

  if (audio.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio.src = url;

  } else {

      hls.attachMedia(audio);

      //hls.stopLoad();
      //hls.attachMedia(audio);
      hls.loadSource(url); // Provide the path to your .m3u8 file
      audio.play();
    ;
  }})
</script>
