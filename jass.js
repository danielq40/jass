// ==================================================
// JASS JavaScript Library
// Version: 1.1
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
  const openBtn = document.querySelector('[jass-mobile-menu="open"]');
  const closeBtn = document.querySelector('[jass-mobile-menu="close"]');

  if (!menu || !openBtn || !closeBtn) {
    console.warn('JASS menu elements missing');
    return;
  }

  menu.style.display = 'none';

  openBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', initJassMobileMenu);
