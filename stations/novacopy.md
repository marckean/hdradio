---
layout: page
title: Nova Entertainment
---

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script> <!-- Include the HLS.js library -->

| Station | Location | Format | Stream URL |
|:-------------|:------------------|:------|
| Kiis 1065 | Sydney | CHR | <button id="playButton" data-global-variable="https://playerservices.streamtheworld.com/api/livestream-redirect/ARN_KIIS1065_SC">Play</button> |
| 2Day FM | Sydney | CHR | <button id="playButton" data-global-variable="https://wz2liw.scahw.com.au/live/2day_128.stream/playlist.m3u8">Play</button> |





<!-- <audio id="2classicrock" controls></audio>

<script>
  //var audio = document.getElementById('2classicrock');
  var audio = new Audio(); // Create an audio element
  var url = window.audioSrc
  var hls = new Hls();
  // Initialize more audio variables as needed
    playButton.addEventListener('click', function() {

  if (audio.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio.src = url;

  } else {
      audio.controls = true; // Enable controls for the audio player
      // Attach the media to the audio player when the HLS manifest is parsed
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        hls.attachMedia(audio);
        audio.play(); // Start playback after the source is loaded
      });

        hls.loadSource(url); // Provide the path to your .m3u8 file

  }})
</script> -->


<!-- <script>
  var audio = document.getElementById('2classicrock');
  var url = window.audioSrc
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
</script> -->




<script>
  var playButton = document.getElementById('playButton'); // Get the play button element
  var playButton1 = document.getElementById('playButton1'); // Get the play button element
  var url = window.audioSrc
  var hls = new Hls(); // Create an instance of HLS.js
  var audio = new Audio(); // Create an audio element

 hls.stopLoad(); // Stop loading the source
 hls.loadSource(url); // Provide the path to your .m3u8 file
 
  // When the play button is clicked, load the HLS source and start playback
  playButton.addEventListener('click', function() {
    audio.stop(); 
    hls.attachMedia(audio); // Attach the media to the audio element
    audio.play(); // Start playback
  });
</script>


