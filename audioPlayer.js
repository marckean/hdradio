// document.addEventListener("DOMContentLoaded", function() {
//     const audio = document.getElementById('myAudio');
//     const hls = new Hls();

//     document.getElementById('audioMenu').addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const newAudioSrc = e.target.getAttribute('data-audio-src');
//         const audioType = e.target.getAttribute('data-audio-type');
        
//         if (newAudioSrc) {
//             if (audioType === 'm3u8') {
//                 if (Hls.isSupported()) {
//                     hls.loadSource(newAudioSrc);
//                     hls.attachMedia(audio);
//                     hls.on(Hls.Events.MANIFEST_PARSED, function() {
//                         audio.play();
//                     });
//                 } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
//                     audio.src = newAudioSrc;
//                     audio.addEventListener('loadedmetadata', function() {
//                         audio.play();
//                     });
//                 }
//             } else {
//                 audio.src = newAudioSrc;
//                 audio.type = `audio/${audioType}`;
//                 audio.play();
//             }
//         }
//     });
// });

// Add an event listener for the entire audioMenu div
document.addEventListener('DOMContentLoaded', (event) => {

    // Fetch the CSV and parse it
    fetch('./stations/StreamDatabase.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            for (let i = 1; i < rows.length; i++) { // Skip header row
                const row = rows[i].split(',');
                const stationName = row[0];
                const state = row[1];
                const url = row[2];
                const logo = row[3];
                const audioType = row[4];

                // Create a new div for each grid item
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';

                // Create an image element and set its properties
                const imgElement = document.createElement('img');
                imgElement.src = logo;
                imgElement.alt = stationName;
                imgElement.title = stationName;
                imgElement.style.cursor = 'pointer';
                imgElement.style.width = '100%';  // Responsive image

                // Add an event listener for the image element
                imgElement.addEventListener('click', function() {
                    const audioElement = document.getElementById('myAudio');
                    audioElement.src = url;
                    audioElement.type = `audio/${audioType}`;
                    audioElement.play();
                });

                // Append image to grid item and grid item to audio menu
                gridItem.appendChild(imgElement);
                document.getElementById('audioMenu').appendChild(gridItem);
            }
        });

});

