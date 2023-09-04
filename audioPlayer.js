document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('myAudio');
    const hls = new Hls();

    document.getElementById('audioMenu').addEventListener('click', function(e) {
        e.preventDefault();
        
        const newAudioSrc = e.target.getAttribute('data-audio-src');
        const audioType = e.target.getAttribute('data-audio-type');
        
        if (newAudioSrc) {
            if (audioType === 'm3u8') {
                if (Hls.isSupported()) {
                    hls.loadSource(newAudioSrc);
                    hls.attachMedia(audio);
                    hls.on(Hls.Events.MANIFEST_PARSED, function() {
                        audio.play();
                    });
                } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
                    audio.src = newAudioSrc;
                    audio.addEventListener('loadedmetadata', function() {
                        audio.play();
                    });
                }
            } else {
                audio.src = newAudioSrc;
                audio.type = `audio/${audioType}`;
                audio.play();
            }
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     const audioElement = document.getElementById("myAudio");
  
//     const audioMenu = document.getElementById("audioMenu");
//     audioMenu.addEventListener("click", function(event) {
//       const target = event.target;
//       if (target.tagName === "A") {
//         event.preventDefault();
        
//         const audioSrc = target.getAttribute("data-audio-src");
//         const audioType = target.getAttribute("data-audio-type");
        
//         if (audioType === "mp3") {
//           audioElement.src = audioSrc;
//         } else if (audioType === "m3u8" && Hls.isSupported()) {
//           var hls = new Hls();
//           hls.loadSource(audioSrc);
//           hls.attachMedia(audioElement);
//         }
        
//         audioElement.play();
//       }
//     });
//   });
  

