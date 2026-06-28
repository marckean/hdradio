/* =====================================================================
   HD/HQ Radio - custom facelift enhancements
   Loaded via _config.yml `site-js`. Progressive enhancement only:
   the site works fully without it.
   ===================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* --- Only one stream plays at a time ----------------------------- */
    var players = Array.prototype.slice.call(document.querySelectorAll("audio"));

    players.forEach(function (audio) {
      audio.addEventListener("play", function () {
        players.forEach(function (other) {
          if (other !== audio && !other.paused) {
            other.pause();
          }
        });
        audio.classList.add("is-playing");
      });
      audio.addEventListener("pause", function () { audio.classList.remove("is-playing"); });
      audio.addEventListener("ended", function () { audio.classList.remove("is-playing"); });
    });

  });
})();
