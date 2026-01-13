(function () {
  // Prevent double execution
  if (window.__JASS_INITIALIZED__) return;
  window.__JASS_INITIALIZED__ = true;

  function showBody() {
    if (!document.body) return false;

    document.body.style.opacity = "1";
    return true;
  }

  // Try immediately
  if (showBody()) return;

  // Fallback: wait for DOM
  document.addEventListener("DOMContentLoaded", showBody, { once: true });
})();
