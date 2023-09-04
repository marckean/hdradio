document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('myAudio');
    const hls = new Hls();
    const currentStationElement = document.getElementById('currentStation');
    let currentStationIndex = null;
    const stations = Array.from(document.querySelectorAll('[data-audio-src]'));

    // Add Play/Pause button logic
    const playPauseButton = document.getElementById('playPause');
    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Add Next button logic
    const nextTrackButton = document.getElementById('nextTrack');
    nextTrackButton.addEventListener('click', function() {
        if (currentStationIndex !== null && currentStationIndex < stations.length - 1) {
            stations[currentStationIndex + 1].click();
        }
    });

    // Add Previous button logic
    const prevTrackButton = document.getElementById('prevTrack');
    prevTrackButton.addEventListener('click', function() {
        if (currentStationIndex > 0) {
            stations[currentStationIndex - 1].click();
        }
    });

    document.getElementById('audioMenu').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the nearest parent anchor element
        let target = e.target;
        while (target && target.tagName !== 'A') {
            target = target.parentElement;
        }

        if (target) {
            const newAudioSrc = target.getAttribute('data-audio-src');
            const audioType = target.getAttribute('data-audio-type');
            currentStationIndex = stations.indexOf(target);

            // Get the image source URL to display as current station
            const currentStationImage = target.querySelector('img').src;

            if (newAudioSrc) {
                // Update current station display
                currentStationElement.innerHTML = `<img src="${currentStationImage}" width="100" style="vertical-align:middle;margin:0px 0px 0px 0px" />`;

                if (audioType === 'm3u8') {
                    if (Hls.isSupported()) {
                        hls.loadSource(newAudioSrc);
                        hls.attachMedia(audio);
                        hls.on(Hls.Events.MANIFEST_PARSED, function() {
                            audio.play();
                            playPauseButton.textContent = 'Pause'; // Update the Play/Pause button
                        });
                    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
                        audio.src = newAudioSrc;
                        audio.addEventListener('loadedmetadata', function() {
                            audio.play();
                            playPauseButton.textContent = 'Pause'; // Update the Play/Pause button
                        });
                    }
                } else {
                    audio.src = newAudioSrc;
                    audio.type = `audio/${audioType}`;
                    audio.play();
                    playPauseButton.textContent = 'Pause'; // Update the Play/Pause button
                }
            }
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     const audio = document.getElementById('myAudio');
//     const hls = new Hls();
//     const currentStationElement = document.getElementById('currentStation');  // New line
//     let currentStationIndex = null;
//     const stations = Array.from(document.querySelectorAll('[data-audio-src]'));

//     document.getElementById('audioMenu').addEventListener('click', function(e) {
//         e.preventDefault();

//         // Log the actual target element clicked
//         console.log('Element clicked:', e.target);
        
//         // Find the nearest parent anchor element
//         let target = e.target;
//         while (target && target.tagName !== 'A') {
//             target = target.parentElement;
//         }

//         // Log the resulting anchor element
//         console.log('Nearest parent anchor element:', target);
        
//         if (target) {
//             const newAudioSrc = target.getAttribute('data-audio-src');
//             const audioType = target.getAttribute('data-audio-type');
//             currentStationIndex = stations.indexOf(target);

//             // Get the image source URL to display as current station (New line)
//             const currentStationImage = target.querySelector('img').src;

//             // Log the audio source and type
//             console.log('New audio source:', newAudioSrc);
//             console.log('New audio type:', audioType);
        
//             if (newAudioSrc) {
//                 // Update current station display (New line)
//                 currentStationElement.innerHTML = `<img src="${currentStationImage}" width="100" style="vertical-align:middle;margin:0px 0px 0px 0px" />`;

//                 if (audioType === 'm3u8') {
//                     if (Hls.isSupported()) {
//                         hls.loadSource(newAudioSrc);
//                         hls.attachMedia(audio);
//                         hls.on(Hls.Events.MANIFEST_PARSED, function() {
//                             audio.play();
//                             console.log('Playing m3u8 audio');
//                         });
//                     } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
//                         audio.src = newAudioSrc;
//                         audio.addEventListener('loadedmetadata', function() {
//                             audio.play();
//                             console.log('Playing m3u8 audio through native support');
//                         });
//                     }
//                 } else {
//                     audio.src = newAudioSrc;
//                     audio.type = `audio/${audioType}`;
//                     audio.play();
//                     console.log(`Playing ${audioType} audio`);
//                 }
//             }
//         }
//     });
//     document.getElementById('nextTrack').addEventListener('click', function() {
//         if (currentStationIndex !== null && currentStationIndex < stations.length - 1) {
//             // Trigger a click event on the next station
//             stations[currentStationIndex + 1].click();
//         }
//     });

//     document.getElementById('audioMenu').addEventListener('click', function(e) {
//         // ... existing code ...

//         if (target) {
//             // ... existing code ...

//             // Update the current station index
//             currentStationIndex = stations.indexOf(target);

//             // ... existing code ...
//         }
//     });
// });
