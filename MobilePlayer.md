---
layout: page
title: Mobile Player
subtitle: High Quality Radio, Listen Live Online
---

## Mobile Player

<html lang="en">
<head>
    <title>Multi-format Audio Player</title>
</head>
<body>

    <audio id="myAudio" controls>
        Your browser does not support the audio element.
    </audio>

    <div id="audioMenu">
        <a href="#" data-audio-src="https://playerservices.streamtheworld.com/api/livestream-redirect/ARN_KIIS1065_SC" data-audio-type="mp3"><img style="vertical-align:middle;margin:0px 0px 0px 0px" width="100" src="/assets/img/stations/kiis1065.png"></a>
        <a href="#" data-audio-src="https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_969_AAC128_SC" data-audio-type="mp3"><img style="vertical-align:middle;margin:0px 0px 0px 0px" width="100" src="/assets/img/stations/Brand+Tile-N969.png"></a> <br>

        <a href="#" data-audio-src="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8" data-audio-type="m3u8"><img style="vertical-align:middle;margin:0px 0px 0px 0px" width="100" src="/assets/img/stations/triplemclassicrock.png"></a>
        <a href="#" data-audio-src="https://wz2liw.scahw.com.au/live/280s_128.stream/playlist.m3u8" data-audio-type="m3u8"><img style="vertical-align:middle;margin:0px 0px 0px 0px" width="100" src="/assets/img/stations/mmm-80s.png"></a>
    </div>

    <!-- Add hls.min.js library -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <script src="./audioPlayer.js"></script>

</body>
</html>




