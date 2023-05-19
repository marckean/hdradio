---
layout: page
title: Nova Entertainment
---



| Station | Location | Format | Stream URL |
|:-------------|:------------------|:------|
| Kiis 1065 | Sydney | CHR |  |
| 2Day FM | Sydney | CHR |  |


<button id="playButton">Play</button><script>var audioSrc;function updateGlobalVariable() {audioSrc = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'}</script>


<audio id="2classicrock" controls></audio>

<script>
  var audio = document.getElementById('2classicrock');
  
  var hls = new Hls();
  // Initialize more audio variables as needed
    playButton.addEventListener('click', function() {

  if (audio.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio.src = audioSrc;

  } else {

      hls.attachMedia(audio);

      //hls.stopLoad();
      //hls.attachMedia(audio);
      hls.loadSource('https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'); // Provide the path to your .m3u8 file
      audio.play();
    ;
  }})
</script>
