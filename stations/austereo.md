---
layout: page
title: Austereo
---
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script> <!-- Include the HLS.js library -->

Listen live, listen online, high quality, high definition, radio stream URLs listed here:

<!------------------ Hit Network ------------------>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/2day_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/2day.png">
</a></p>

2Day FM - Sydney 128Kbps

<audio id="2day" controls></audio>


<p align="left"><a href="https://wz3liw.scahw.com.au/live/3fox_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/fox.png">
</a></p>

Fox FM - Melbourne 128Kbps

<audio id="3fox" controls></audio>


<p align="left"><a href="https://wz4liw.scahw.com.au/live/4bbb_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/b105.png">
</a></p>

B105 - Brisbane 128Kbps

<audio id="4bbb" controls></audio>


<p align="left"><a href="https://wz6liw.scahw.com.au/live/6mix_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/Mix94.5.png">
</a></p>

Mix 94.5 - Perth 128Kbps

<audio id="6mix" controls></audio>


<p align="left"><a href="https://wz5liw.scahw.com.au/live/5ssa_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/safm.png">
</a></p>

SAFM - Adelaide 128Kbps

<audio id="5ssa" controls></audio>


<!------------------ Triple M Network ------------------>

<p align="left"><a href="https://wz3liw.scahw.com.au/live/2mmm_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/2mmm.png">
</a></p>

Triple M - Sydney 128Kbps

<audio id="2mmm" controls></audio>


<p align="left"><a href="https://wz3liw.scahw.com.au/live/3mmm_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/3mmm-primary.png">
</a></p>

Triple M - Melbourne 128Kbps

<audio id="3mmm" controls></audio>


<p align="left"><a href="https://wz3liw.scahw.com.au/live/4mmm_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/4mmm-primary.png">
</a></p>

Triple M - Brisbane 128Kbps

<audio id="4mmm" controls></audio>


<p align="left"><a href="https://wz6liw.scahw.com.au/live/6ppm_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplem929-perth.png">
</a></p>

Triple M - Perth 128Kbps

<audio id="6ppm" controls></audio>


<p align="left"><a href="https://wz5liw.scahw.com.au/live/5mmm_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/5mmm-primary.png">
</a></p>

Triple M - Adelaide 128Kbps

<audio id="5mmm" controls></audio>


<!------------------ Triple M Classic Rock ------------------>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Sydney 128Kbps

<audio id="2classicrock" controls></audio>


<p align="left"><a href="https://wz2liw.scahw.com.au/live/3classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Melbourne 128Kbps

<audio id="3classicrock" controls></audio>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Brisbane 128Kbps

<audio id="4classicrock" controls></audio>

<p align="left"><a href="https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8">
<img style="vertical-align:middle;margin:0px 0px 0px 0px" width="200" src="/assets/img/stations/triplemclassicrock.png">
</a></p>

Triple M Classic Rock Digital - Perth 128Kbps

<audio id="6classicrock" controls></audio>


<!------------------------------------------->
<!--------SCRIPTS-------->
<!------------------------------------------->

<!------------------ Triple M Classic Rock ------------------>

<script>
  var audio1 = document.getElementById('2classicrock');
  var audioSrc1 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';
  var hls1 = new Hls();
  // Initialize more audio variables as needed

  if (audio1.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio1.src = audioSrc1;

  } else {

      hls1.attachMedia(audio1);

    // When the play button is clicked, check if the source is loaded and start playback
    audio1.addEventListener('play', function() {
      if (hls1.media && hls1.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls1.startLoad(); // Resume loading in case it was stopped
      } else {
        hls1.loadSource(audioSrc1); // Provide the path to your .m3u8 file
        audio1.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio1.addEventListener('pause', function() {
      hls1.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio2 = document.getElementById('3classicrock');
  var audioSrc2 = 'https://wz2liw.scahw.com.au/live/2classicrock_128.stream/playlist.m3u8';
  var hls2 = new Hls();

  if (audio2.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio2.src = audioSrc2;

  } else {

      hls2.attachMedia(audio2);

    // When the play button is clicked, check if the source is loaded and start playback
    audio2.addEventListener('play', function() {
      if (hls2.media && hls2.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls2.startLoad(); // Resume loading in case it was stopped
      } else {
        hls2.loadSource(audioSrc2); // Provide the path to your .m3u8 file
        audio2.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio2.addEventListener('pause', function() {
      hls2.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio3 = document.getElementById('4classicrock');
  var audioSrc3 = 'https://wz2liw.scahw.com.au/live/4classicrock_128.stream/playlist.m3u8';
  var hls3 = new Hls();

  if (audio3.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio3.src = audioSrc3;

  } else {

      hls3.attachMedia(audio3);

    // When the play button is clicked, check if the source is loaded and start playback
    audio3.addEventListener('play', function() {
      if (hls3.media && hls3.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls3.startLoad(); // Resume loading in case it was stopped
      } else {
        hls3.loadSource(audioSrc3); // Provide the path to your .m3u8 file
        audio3.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio3.addEventListener('pause', function() {
      hls3.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio4 = document.getElementById('6classicrock');
  var audioSrc4 = 'https://wz2liw.scahw.com.au/live/6classicrock_128.stream/playlist.m3u8';
  var hls4 = new Hls();

  if (audio4.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio4.src = audioSrc4; 

  } else {

      hls4.attachMedia(audio4);

    // When the play button is clicked, check if the source is loaded and start playback
    audio4.addEventListener('play', function() {
      if (hls4.media && hls4.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls4.startLoad(); // Resume loading in case it was stopped
      } else {
        hls4.loadSource(audioSrc4); // Provide the path to your .m3u8 file
        audio4.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio4.addEventListener('pause', function() {
      hls4.stopLoad(); // Stop loading the source
    });
  }
</script>

<!------------------ Hit ------------------>

<script>
  var audio5 = document.getElementById('2day');
  var audioSrc5 = 'https://wz2liw.scahw.com.au/live/2day_128.stream/playlist.m3u8';
  var hls5 = new Hls();

  if (audio5.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio5.src = audioSrc5; 

  } else {

      hls5.attachMedia(audio5);

    // When the play button is clicked, check if the source is loaded and start playback
    audio5.addEventListener('play', function() {
      if (hls5.media && hls5.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls5.startLoad(); // Resume loading in case it was stopped
      } else {
        hls5.loadSource(audioSrc5); // Provide the path to your .m3u8 file
        audio5.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio5.addEventListener('pause', function() {
      hls5.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio6 = document.getElementById('2dance');
  var audioSrc6 = 'https://wz2liw.scahw.com.au/live/2dance_128.stream/playlist.m3u8';
  var hls6 = new Hls();

  if (audio6.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio6.src = audioSrc6; 

  } else {

      hls6.attachMedia(audio6);

    // When the play button is clicked, check if the source is loaded and start playback
    audio6.addEventListener('play', function() {
      if (hls6.media && hls6.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls6.startLoad(); // Resume loading in case it was stopped
      } else {
        hls6.loadSource(audioSrc6); // Provide the path to your .m3u8 file
        audio6.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio6.addEventListener('pause', function() {
      hls6.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio7 = document.getElementById('2easy');
  var audioSrc7 = 'https://wz2liw.scahw.com.au/live/2easy_128.stream/playlist.m3u8';
  var hls7 = new Hls();

  if (audio7.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio7.src = audioSrc7; 

  } else {

      hls7.attachMedia(audio7);

    // When the play button is clicked, check if the source is loaded and start playback
    audio7.addEventListener('play', function() {
      if (hls7.media && hls7.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls7.startLoad(); // Resume loading in case it was stopped
      } else {
        hls7.loadSource(audioSrc7); // Provide the path to your .m3u8 file
        audio7.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio7.addEventListener('pause', function() {
      hls7.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio8 = document.getElementById('3fox');
  var audioSrc8 = 'https://wz2liw.scahw.com.au/live/3fox_128.stream/playlist.m3u8';
  var hls8 = new Hls();

  if (audio8.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio8.src = audioSrc8; 

  } else {

      hls8.attachMedia(audio8);

    // When the play button is clicked, check if the source is loaded and start playback
    audio8.addEventListener('play', function() {
      if (hls8.media && hls8.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls8.startLoad(); // Resume loading in case it was stopped
      } else {
        hls8.loadSource(audioSrc8); // Provide the path to your .m3u8 file
        audio8.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio8.addEventListener('pause', function() {
      hls8.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio8 = document.getElementById('4bbb');
  var audioSrc8 = 'https://wz4liw.scahw.com.au/live/4bbb_128.stream/playlist.m3u8';
  var hls8 = new Hls();

  if (audio8.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio8.src = audioSrc8; 

  } else {

      hls8.attachMedia(audio8);

    // When the play button is clicked, check if the source is loaded and start playback
    audio8.addEventListener('play', function() {
      if (hls8.media && hls8.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls8.startLoad(); // Resume loading in case it was stopped
      } else {
        hls8.loadSource(audioSrc8); // Provide the path to your .m3u8 file
        audio8.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio8.addEventListener('pause', function() {
      hls8.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio9 = document.getElementById('5ssa');
  var audioSrc9 = 'https://wz5liw.scahw.com.au/live/5ssa_128.stream/playlist.m3u8';
  var hls9 = new Hls();

  if (audio9.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio9.src = audioSrc9; 

  } else {

      hls9.attachMedia(audio9);

    // When the play button is clicked, check if the source is loaded and start playback
    audio9.addEventListener('play', function() {
      if (hls9.media && hls9.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls9.startLoad(); // Resume loading in case it was stopped
      } else {
        hls9.loadSource(audioSrc9); // Provide the path to your .m3u8 file
        audio9.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio9.addEventListener('pause', function() {
      hls9.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio10 = document.getElementById('6mix');
  var audioSrc10 = 'https://wz6liw.scahw.com.au/live/6mix_128.stream/playlist.m3u8';
  var hls10 = new Hls();

  if (audio10.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio10.src = audioSrc10; 

  } else {

      hls10.attachMedia(audio10);

    // When the play button is clicked, check if the source is loaded and start playback
    audio10.addEventListener('play', function() {
      if (hls10.media && hls10.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls10.startLoad(); // Resume loading in case it was stopped
      } else {
        hls10.loadSource(audioSrc10); // Provide the path to your .m3u8 file
        audio10.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio10.addEventListener('pause', function() {
      hls10.stopLoad(); // Stop loading the source
    });
  }
</script>

<!------------------ Triple M ------------------>

<script>
  var audio11 = document.getElementById('2mmm');
  var audioSrc11 = 'https://wz3liw.scahw.com.au/live/2mmm_128.stream/playlist.m3u8';
  var hls11 = new Hls();

  if (audio11.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio11.src = audioSrc11; 

  } else {

      hls11.attachMedia(audio11);

    // When the play button is clicked, check if the source is loaded and start playback
    audio11.addEventListener('play', function() {
      if (hls11.media && hls11.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls11.startLoad(); // Resume loading in case it was stopped
      } else {
        hls11.loadSource(audioSrc11); // Provide the path to your .m3u8 file
        audio11.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio11.addEventListener('pause', function() {
      hls11.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio12 = document.getElementById('3mmm');
  var audioSrc12 = 'https://wz3liw.scahw.com.au/live/3mmm_128.stream/playlist.m3u8';
  var hls12 = new Hls();

  if (audio12.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio12.src = audioSrc12; 

  } else {

      hls12.attachMedia(audio12);

    // When the play button is clicked, check if the source is loaded and start playback
    audio12.addEventListener('play', function() {
      if (hls12.media && hls12.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls12.startLoad(); // Resume loading in case it was stopped
      } else {
        hls12.loadSource(audioSrc12); // Provide the path to your .m3u8 file
        audio12.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio12.addEventListener('pause', function() {
      hls12.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio13 = document.getElementById('4mmm');
  var audioSrc13 = 'https://wz3liw.scahw.com.au/live/4mmm_128.stream/playlist.m3u8';
  var hls13 = new Hls();

  if (audio13.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio13.src = audioSrc13; 

  } else {

      hls13.attachMedia(audio13);

    // When the play button is clicked, check if the source is loaded and start playback
    audio13.addEventListener('play', function() {
      if (hls13.media && hls13.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls13.startLoad(); // Resume loading in case it was stopped
      } else {
        hls13.loadSource(audioSrc13); // Provide the path to your .m3u8 file
        audio13.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio13.addEventListener('pause', function() {
      hls13.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio14 = document.getElementById('6ppm');
  var audioSrc14 = 'https://wz3liw.scahw.com.au/live/6ppm_128.stream/playlist.m3u8';
  var hls14 = new Hls();

  if (audio14.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio14.src = audioSrc14; 

  } else {

      hls14.attachMedia(audio14);

    // When the play button is clicked, check if the source is loaded and start playback
    audio14.addEventListener('play', function() {
      if (hls14.media && hls14.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls14.startLoad(); // Resume loading in case it was stopped
      } else {
        hls14.loadSource(audioSrc14); // Provide the path to your .m3u8 file
        audio14.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio14.addEventListener('pause', function() {
      hls14.stopLoad(); // Stop loading the source
    });
  }
</script>

<script>
  var audio15 = document.getElementById('5mmm');
  var audioSrc15 = 'https://wz3liw.scahw.com.au/live/5mmm_128.stream/playlist.m3u8';
  var hls15 = new Hls();

  if (audio15.canPlayType('application/vnd.apple.mpegurl') || (typeof window.Hls === 'undefined')) {
    audio15.src = audioSrc15; 

  } else {

      hls15.attachMedia(audio15);

    // When the play button is clicked, check if the source is loaded and start playback
    audio15.addEventListener('play', function() {
      if (hls15.media && hls15.media.readyState === 4) { // Check if the source is loaded (readyState 4 means loaded)
        hls15.startLoad(); // Resume loading in case it was stopped
      } else {
        hls15.loadSource(audioSrc15); // Provide the path to your .m3u8 file
        audio15.play();
      }
    });
    // Stop loading the source when the audio is paused
    audio15.addEventListener('pause', function() {
      hls15.stopLoad(); // Stop loading the source
    });
  }
</script>