---
layout: default
---

# Austereo

## Triple M CLassic Rock Digital - Sydney 128Kbps

<!--Simplest syntax-->
<audio src="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8" type="audio/mpeg" controls>
  I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
</audio>

[Stream URL](https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8)

<script>
    if (Hls.isSupported()) {
      var audio = document.getElementById('audioPlayer');
      var hls = new Hls();
      
      hls.loadSource('https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'); // Provide the path to your .m3u8 file
      hls.attachMedia(audio);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        audio.play(); // Start playback once the manifest is parsed
      });
    }
    else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
      audio.src = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8'; // Fallback for Safari
      audio.addEventListener('loadedmetadata', function() {
        audio.play(); // Start playback once metadata is loaded
      });
    }
  </script>

  <audio controls>
    <source src="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8" type="application/x-mpegURL">
  </audio>