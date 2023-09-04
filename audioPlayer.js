document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('myAudio');
    const hls = new Hls();
    const currentStationElement = document.getElementById('currentStation');  // New line

    document.getElementById('audioMenu').addEventListener('click', function(e) {
        e.preventDefault();

        // Log the actual target element clicked
        console.log('Element clicked:', e.target);
        
        // Find the nearest parent anchor element
        let target = e.target;
        while (target && target.tagName !== 'A') {
            target = target.parentElement;
        }

        // Log the resulting anchor element
        console.log('Nearest parent anchor element:', target);
        
        if (target) {
            const newAudioSrc = target.getAttribute('data-audio-src');
            const audioType = target.getAttribute('data-audio-type');

            // Get the image source URL to display as current station (New line)
            const currentStationImage = target.querySelector('img').src;

            // Log the audio source and type
            console.log('New audio source:', newAudioSrc);
            console.log('New audio type:', audioType);
        
            if (newAudioSrc) {
                // Update current station display (New line)
                currentStationElement.innerHTML = `<img src="${currentStationImage}" width="100" style="vertical-align:middle;margin:0px 0px 0px 0px" />`;

                if (audioType === 'm3u8') {
                    if (Hls.isSupported()) {
                        hls.loadSource(newAudioSrc);
                        hls.attachMedia(audio);
                        hls.on(Hls.Events.MANIFEST_PARSED, function() {
                            audio.play();
                            console.log('Playing m3u8 audio');
                        });
                    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
                        audio.src = newAudioSrc;
                        audio.addEventListener('loadedmetadata', function() {
                            audio.play();
                            console.log('Playing m3u8 audio through native support');
                        });
                    }
                } else {
                    audio.src = newAudioSrc;
                    audio.type = `audio/${audioType}`;
                    audio.play();
                    console.log(`Playing ${audioType} audio`);
                }
            }
        }
    });
});
