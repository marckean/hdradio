---
layout: page
title: Nova Entertainment
---

<audio id="2classicrock" controls></audio>

| Station | Location | Format | Stream URL |
|:-------------|:------------------|:------|
| Kiis 1065 | Sydney | CHR | <button id="playButton">Play</button>;<script>var audioSrc;function updateGlobalVariable() {audioSrc = '[Hello, world!](https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8)';}</script> |
| 2Day FM | Sydney | CHR |  |





<script>
  var audio = document.getElementById('2classicrock');
  
  var hls = new Hls();
  // Initialize more audio variables as needed
    playButton.addEventListener('click', function() {
      
  if (audio.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio.src = audioSrc;

  } else {

    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      hls.attachMedia(audio);
    });

      hls.stopLoad();
      hls.attachMedia(audio);
      hls.loadSource(audioSrc()); // Provide the path to your .m3u8 file
      audio.play();
    ;
  }})
</script>
