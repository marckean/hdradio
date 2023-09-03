---
layout: page
title: Mobile Player
subtitle: High Quality Radio, Listen Live Online
---

<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Add viewport for mobile responsiveness -->
    <title>Multi-format Audio Player</title>
    <style>
        /* Style for the grid layout */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 columns */
            gap: 10px;
        }
        /* Style for each grid item */
        .grid-item {
            padding: 10px;
            text-align: center;
        }
    </style>
</head>
<body>

    <audio id="myAudio" controls>
        Your browser does not support the audio element.
    </audio>

    <div id="audioMenu" class="grid-container">
        <!-- Logos will be dynamically added here -->
    </div>

    <!-- Add hls.min.js library -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <script src="./audioPlayer.js"></script>

</body>
</html>
