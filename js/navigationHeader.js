// DOM elements
var body = document.querySelector('body');
var header = document.querySelector('header');
var nav = document.querySelector('nav');
var headerContent = document.querySelector('#header-content');
var headerMobileImg = document.querySelector('#header-content img');
var introText = document.querySelector('div.intro-text');
var introLinks = document.querySelector('div.intro-links');

/* WINDOW ONLOAD and RESIZE */
window.onload = (function () {
  toggleNavHeader();
})()
window.onresize = toggleNavHeader;

/* TOGGLE NAVIGATION AND HEADER */
function toggleNavHeader() {
  if (window.innerWidth > 768) {
    // if no nav element, add it
    if (body.firstElementChild !== nav) {
      body.insertBefore(nav, body.firstChild);
    }
    // if mobile-mode image exists, remove it
    if (headerContent.firstElementChild === headerMobileImg) {
      headerContent.removeChild(headerMobileImg);
    }
    // put in buttons
    introText.appendChild(introLinks);
  } else {
    // if nav element exists, remove it
    if (body.firstElementChild === nav) {
      body.removeChild(nav);
    }
    // if no mobile-mode image, add it
    if (headerContent.firstElementChild !== headerMobileImg) {
      headerContent.insertBefore(headerMobileImg, headerContent.firstChild);
    }
    // remove intro links
    introText.removeChild(introLinks);
  }
}