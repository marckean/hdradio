---
layout: page
title: Nova Entertainment
---



| Station | Location | Format | Stream URL |
|:-------------|:------------------|:------|
| Kiis 1065 | Sydney | CHR | 
<button id="playButton">Play</button><script>var audioSrc;function updateGlobalVariable() {audioSrc = '[Hello, world!](https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8)';}</script> |
| 2Day FM | Sydney | CHR | <button id="playButton">Play</button> |






<audio id="2classicrock" controls></audio>


<script>
  var audio = document.getElementById('2classicrock');
  
  var hls = new Hls();
  // Initialize more audio variables as needed

  if (audio1.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio1.src = audioSrc1;

  } else {

      playButton.addEventListener('click', function() {
      hls.attachMedia(audio);
        hls.loadSource(audioSrc()); // Provide the path to your .m3u8 file
        audio.play();
    });

    // Stop loading the source when the audio is paused
    audio1.addEventListener('pause', function() {
      hls1.stopLoad(); // Stop loading the source
    });
  }
</script>