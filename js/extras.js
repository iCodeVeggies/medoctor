var introText = document.querySelector('.intro-text');
var introLinks = document.createElement('div');
introLinks.setAttribute('class', 'intro-links');
introLinks.innerHTML = `
<a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#assessment">Free Health Assessment</a>
<a id="go-arrow" href="#assessment" class="btn btn-circle js-scroll-trigger bounce">
  <i class="fa fa-4x fa-arrow-circle-down"></i>
</a>
`;

window.onload = function () {
   if (window.innerWidth >= 768) {
      introText.appendChild(introLinks);
   } else {
      introText.removeChild(introLinks);
   }
}
window.onresize = function () {
   if (window.innerWidth >= 768) {
      introText.appendChild(introLinks);
   } else {
      introText.removeChild(introLinks);
   }
};