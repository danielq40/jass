(function () {
  // Prevent running twice (Webflow sometimes injects scripts multiple times)
  if (window.__JASS_INITIALIZED__) return;
  window.__JASS_INITIALIZED__ = true;

  function hideBody() {
    if (!document.body) return false;

    document.body.style.transition = "opacity 0.2s ease";
    document.body.style.opacity = "0";
    return true;
  }

  function init() {
    // Try immediately
    if (hideBody()) return;

    // Otherwise wait until DOM is ready
    document.addEventListener("DOMContentLoaded", hideBody, { once: true });
  }

  init();
})();
