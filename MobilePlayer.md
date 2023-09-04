---
layout: page
title: Mobile Player
subtitle: High Quality Radio, Listen Live Online
---


<html lang="en">
<head>
    <title>Multi-format Audio Player</title>
</head>
<body>

    <audio id="myAudio" controls>
        Your browser does not support the audio element.
    </audio>

    <div id="audioMenu">
        <a href="#" data-audio-src="https://playerservices.streamtheworld.com/api/livestream-redirect/ARN_KIIS1065_SC" data-audio-type="mp3">Kiis FM - Sydney</a> |
        <a href="#" data-audio-src="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8" data-audio-type="m3u8">Triple M Classic Rock</a>
    </div>

    <!-- Add hls.min.js library -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <script src="./audioPlayer.js"></script>

</body>
</html>




