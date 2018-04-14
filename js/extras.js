/*** 
Dynamically assign navigation bar height to section 'margin-top' style property. This is neccassary because index page needs to be compressed, and doesn't have a nav bar in mobile mode. 
***/

var navbar = document.querySelector('#defaultNav');
var pageSections = document.querySelectorAll('section');

window.onload = function () {
   for (var i = 0; i < pageSections.length; i++) {
      pageSections[i].style.marginTop = navbar.scrollHeight+'px';
   }
}