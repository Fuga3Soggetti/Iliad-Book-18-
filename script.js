// ─────────────────────────────────────────────────────────────────────────────
// GLOSSARY SIDE-PANEL ENGINE
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  "use strict";

  let panel      = null;
  let activeWord = null;

  // ── Build the side-panel DOM element (once) ───────────────────────────────

  function createPanel() {
    const el = document.createElement("div");
    el.id = "gloss-panel";
    el.setAttribute("role", "complementary");
    el.setAttribute("aria-label", "Glossary");
    el.innerHTML = `
      <div id="gloss-panel-header">
        <img id="gloss-panel-art" src="panel-art.jpg" alt="">
        <div id="gloss-panel-title">
          <span class="title-en">Glossary</span>
          <span class="title-grc">Γλωσσάριον</span>
        </div>
        <button id="gloss-panel-close" aria-label="Close">&times;</button>
      </div>
      <div id="gloss-panel-inner"></div>
    `;
    document.body.appendChild(el);

    // Clicks inside the panel must not bubble to the document close-handler
    el.addEventListener("click", function (e) { e.stopPropagation(); });

    el.querySelector("#gloss-panel-close").addEventListener("click", function (e) {
      e.stopPropagation();
      hidePanel();
    });
    return el;
  }

  // ── Render one field row ──────────────────────────────────────────────────

  function field(label, value) {
    if (!value) return "";
    return `
      <div class="gloss-field">
        <span class="gloss-label">${label}</span>
        <span class="gloss-value">${value}</span>
      </div>`;
  }

  // ── Show / hide the glossary panel ───────────────────────────────────────

  function showPanel(triggerEl, entry) {
    if (!panel) panel = createPanel();
    const inner = panel.querySelector("#gloss-panel-inner");
    inner.innerHTML =
      field("English",         entry.english) +
      field("Greek",           entry.greek ? `<span class="gloss-greek">${entry.greek}</span>` : "") +
      field("Transliteration", entry.transliteration) +
      field("Hittite",         entry.hittite) +
      field("Linear B",        entry.linearb) +
      field("Literal",         entry.literal) +
      field("Our choice",      entry.choice) +
      field("Notes",           entry.notes);

    if (activeWord) activeWord.classList.remove("gloss-active");
    activeWord = triggerEl;
    activeWord.classList.add("gloss-active");
    panel.classList.add("visible");
    document.body.classList.add("gloss-open");
  }

  function hidePanel() {
    if (!panel) return;
    panel.classList.remove("visible");
    document.body.classList.remove("gloss-open");
    if (activeWord) {
      activeWord.classList.remove("gloss-active");
      activeWord = null;
    }
  }

  // ── Main init ─────────────────────────────────────────────────────────────

  function init() {

    document.querySelectorAll("[data-gloss]").forEach(function (el) {
      el.classList.add("gloss-term");
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "button");

      var isGreek     = el.getAttribute("lang") === "grc";
      var greekText   = isGreek ? el.textContent : null;
      var glossKey    = el.getAttribute("data-gloss");
      var glossEntry  = GLOSSARY[glossKey];
      // Per-element overrides: data-hover-en on a Greek span, data-hover-grc on an English span
      var hoverEn     = el.getAttribute("data-hover-en");
      var hoverGrc    = el.getAttribute("data-hover-grc");
      var englishText = isGreek ? (hoverEn || (glossEntry ? glossEntry.english : null)) : null;
      var englishWord = (!isGreek) ? el.textContent : null;
      var greekSwap   = !isGreek ? (hoverGrc || (glossEntry && glossEntry.greek ? glossEntry.greek : null)) : null;

      // ── Restore helpers (used in click + mouseleave) ──────────────────────
      function restoreGreek() {
        if (isGreek && el.classList.contains("gloss-english")) {
          el.textContent = greekText;
          el.classList.remove("gloss-english");
          el.style.minWidth = "";
        }
      }

      function restoreEnglish() {
        if (!isGreek && el.classList.contains("gloss-swapped")) {
          el.textContent = englishWord;
          el.classList.remove("gloss-swapped");
          el.style.minWidth = "";
        }
      }

      // ── click: restore any swap first, then open / close panel ───────────
      el.addEventListener("click", function (e) {
        e.stopPropagation();          // prevent document close-handler firing
        restoreGreek();
        restoreEnglish();
        if (!glossEntry) return;
        if (activeWord === el) { hidePanel(); return; }
        showPanel(el, glossEntry);
      });

      // ── keyboard ──────────────────────────────────────────────────────────
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); }
        if (e.key === "Escape") hidePanel();
      });

      // ── Greek word: swap to English on hover, revert on leave ────────────
      if (isGreek && englishText) {
        el.addEventListener("mouseenter", function () {
          if (el.classList.contains("gloss-active")) return;
          el.style.minWidth = el.offsetWidth + "px";  // freeze width before swap
          el.textContent = englishText;
          el.classList.add("gloss-english");
        });

        el.addEventListener("mouseleave", restoreGreek);
      }

      // ── English word: swap to Greek on hover, revert on leave ────────────
      if (!isGreek && greekSwap) {
        el.addEventListener("mouseenter", function () {
          if (el.classList.contains("gloss-active")) return;
          el.style.minWidth = el.offsetWidth + "px";  // freeze width before swap
          el.textContent = greekSwap;
          el.classList.add("gloss-swapped");
        });

        el.addEventListener("mouseleave", restoreEnglish);
      }
    });

    // Close panel on click anywhere outside a gloss-term or the panel itself
    document.addEventListener("click", hidePanel);

    // Close panel on Escape anywhere
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") hidePanel();
    });

    // ── Plain hover-swap elements (no glossary panel) ────────────────────────
    document.querySelectorAll("[data-hover-en]").forEach(function (el) {
      if (el.hasAttribute("data-gloss")) return; // override already handled by the gloss handler
      var original   = el.textContent;
      var english    = el.getAttribute("data-hover-en");
      var swapped    = false;

      el.addEventListener("mouseenter", function () {
        el.textContent = english;
        swapped = true;
      });

      el.addEventListener("mouseleave", function () {
        if (swapped) {
          el.textContent = original;
          swapped = false;
        }
      });
    });

    // ── English translation line numbers (right margin, every 5 lines) ────────
    var verseParas = document.querySelectorAll(".verse-block p, .verse-speech p");
    verseParas.forEach(function (p, i) {
      var lineNum = i + 1;
      if (lineNum % 5 === 0) {
        var span = document.createElement("span");
        span.className = "trans-linenum";
        span.setAttribute("aria-hidden", "true");
        span.textContent = lineNum;
        p.insertBefore(span, p.firstChild);
      }
    });
  }

  // Run after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
