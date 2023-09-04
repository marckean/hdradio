document.addEventListener("DOMContentLoaded", function() {
    let audioElement = document.getElementById("myAudio");

    let links = document.querySelectorAll("#audioMenu a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let audioSrc = this.getAttribute("data-audio-src");
            let audioType = this.getAttribute("data-audio-type");

            if (audioType === 'm3u8' && Hls.isSupported()) {
                let hls = new Hls();
                hls.loadSource(audioSrc);
                hls.attachMedia(audioElement);
            } else if (audioType === 'mp3') {
                audioElement.src = audioSrc;
            }

            audioElement.play();
        });
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
  

