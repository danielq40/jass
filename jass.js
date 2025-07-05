// ==================================================
// JASS JavaScript Library
// Version: 1.0
// Description: Core UI interactions for JASS websites
// Author: Daniel Quaranta www.danielquaranta.com
// ==================================================

/* ----------------------------------------------
 * Mobile Menu Toggle
 * Usage:
 *   - jass-mobile-menu="menu"   → target menu element
 *   - jass-mobile-menu="open"   → element that opens the menu
 *   - jass-mobile-menu="close"  → element that closes the menu
 * ---------------------------------------------- */
function initJassMobileMenu() {
  const menu = document.querySelector('[jass-mobile-menu="menu"]');
  const openers = document.querySelectorAll('[jass-mobile-menu="open"]');
  const closers = document.querySelectorAll('[jass-mobile-menu="close"]');

  if (!menu) return;

  openers.forEach(el => {
    el.addEventListener('click', () => {
      menu.setAttribute('jass-mobile-menu', 'menu open');
    });
  });

  closers.forEach(el => {
    el.addEventListener('click', () => {
      menu.setAttribute('jass-mobile-menu', 'menu');
    });
  });
}

/* ----------------------------------------------
 * Initialize All Components on DOM Ready
 * ---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initJassMobileMenu();
});
