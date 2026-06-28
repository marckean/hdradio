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

    /* --- Reveal-on-scroll for content blocks ------------------------- */
    var reduce = window.matchMedia &&
                 window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduce && "IntersectionObserver" in window) {
      var main = document.querySelector('[role="main"]');
      if (main) {
        var blocks = main.querySelectorAll("h1, h2, table, audio, p > img, p > a > img");
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

        blocks.forEach(function (el) {
          // reveal the logo's wrapping paragraph rather than the bare image
          var target = (el.tagName === "IMG") ? (el.closest("p") || el) : el;
          target.classList.add("reveal");
          io.observe(target);
        });
      }
    }
  });
})();
