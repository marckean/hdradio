---
layout: page
title: Nova Entertainment
---


<button id="playButton">Play</button> <!-- Create a button for manual play -->

| Station | Location | Format | Stream URL |
|:-------------|:------------------|:------|
| Kiis 1065 | Sydney | CHR |  |
| 2Day FM | Sydney | CHR | <button id="playButton">Play</button> |
| Nova 969 | Sydney | CHR | [128Kbps](https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_969_AAC128_SC) |
| Nova 969 | Sydney | CHR | [320Kbps](https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_969_AAC320_SC) |
| **Dance Hits** | Sydney | Dance | [128Kbps](https://wz2liw.scahw.com.au/live/2dance_128.stream/playlist.m3u8) |
| Triple M | Sydney | Rock | [128Kbps](https://wz3liw.scahw.com.au/live/2mmm_128.stream/playlist.m3u8) |
| Triple M Classic Rock | Sydney | Classic Rock | [128Kbps](https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8) |
| **Triple M Country** | Sydney | Country | [128Kbps](https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8) |
| **Triple M Tradie Radio** | Sydney | Modern Rock | [128Kbps](https://wz2liw.scahw.com.au/live/290s_128.stream/playlist.m3u8) |
| WSFM | Sydney | AC | [128Kbps](https://playerservices.streamtheworld.com/api/livestream-redirect/ARN_WSFM_SC) |





<audio id="2classicrock" controls></audio>


<script>
  var audio1 = document.getElementById('2classicrock');
  var audioSrc1 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';
  var hls1 = new Hls();
  // Initialize more audio variables as needed

  if (audio1.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio1.src = audioSrc1;

  } else {

      

      hls.on(Hls.Events.MANIFEST_PARSED, function() {
      hls1.attachMedia(audio1);
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