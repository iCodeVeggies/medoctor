/* GLOBALS */
var body = document.querySelector('body');
// Navigation section
var nav = document.querySelector('nav');
// Header section elements
var header = document.querySelector('header');
var headerContent = document.querySelector('#header-content');
var headerMobileImg = document.querySelector('#header-content img');
var introText = document.querySelector('div.intro-text');
var introLinks = document.querySelector('div.intro-links');
// FAQs section
var faqSection = document.querySelector('#faq');
var faqPara = document.querySelectorAll('#faq p');
var faqParaCopy = [];
var faqShowHideSpan = document.querySelectorAll('#faq span.show-hide-text');
var faqPlusMinusLinks = document.querySelectorAll('#faq span.show-hide-text i');

/* WINDOW ONLOAD and RESIZE */
window.onload = (function () {
  copyFullText();
  toggleMobileDesktop();
  addListeners();
})()
window.onresize = function () {
  toggleMobileDesktop();
  addListeners();
}

/* COPY FULL FAQ TEXT */
function copyFullText(){
  for (var i = 0; i < faqPara.length; i++){
    faqParaCopy.push(faqPara[i].innerText);
  }
}

/* TOGGLE NAVIGATION AND HEADER */
function toggleMobileDesktop() {
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
    // turn on toggle tex
    toggleTextOnOff('on');
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
    if (introText.children[1]){
      introText.removeChild(introLinks);
    }
    // turn off toggle text
    toggleTextOnOff('off');
  }
}

/* TURN TOGGLE TEXT ON OR OFF */
function toggleTextOnOff(command) {
  if (command === 'on') {
    // add FAQs span element and minimize text
    for (var i = 0; i < faqPara.length; i++) {
      faqPara[i].parentElement.appendChild(faqShowHideSpan[i]);
      faqPara[i].innerText = faqPara[i].innerText.slice(0, 300) + '...';
    }
  } else {
    // remove FAQs span element and maximize text
    for (var i = 0; i < faqPara.length; i++) {
      faqPara[i].parentElement.removeChild(faqShowHideSpan[i]);
      // insert full text if it's minimized
      if (faqPara[i].innerText.length < 304){
        faqPara[i].innerText = faqParaCopy[i];
      }       
    }
  }
}

/* ADD LISTENERS */
function addListeners() {
  // expand or shrink text listeners
  for (var i = 0; i < faqPlusMinusLinks.length; i++) {
    faqPlusMinusLinks[i].addEventListener('click', function (e) {
      e.preventDefault();
      toggleText(e);
    })
  }
}

/* TOGGLE TEXT */
function toggleText(e) {
  var clickedElem = e.target;
  var iNum = clickedElem.getAttribute('data-i-num');
  var faClass = clickedElem.getAttribute('class');
  var elemParagraph = clickedElem.parentElement.previousElementSibling;

  if (faClass === 'fa fa-plus') {
    clickedElem.setAttribute('class', 'fa fa-minus');
    elemParagraph.innerText = faqParaCopy[iNum];
  } else {
    clickedElem.setAttribute('class', 'fa fa-plus');
    elemParagraph.innerText = elemParagraph.innerText.slice(0, 300) + '...';;
  }
}