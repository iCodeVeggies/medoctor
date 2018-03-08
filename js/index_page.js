/* Toggle header text: mobile VS tablet, desktop */

var introLeadIn = document.querySelector('.intro-lead-in');
var introHeading = document.querySelector('.intro-heading');

function toggleHeadingText() {
   var emptyPara = document.createElement('p');
   emptyPara.textContent = "";
   if (window.innerWidth < 768) {
      introLeadIn.textContent = 'Concerned about your health?';
      introHeading.textContent = '';
   } else {
      introLeadIn.textContent = 'Do you have a Health Concern?';
      introHeading.textContent = 'We can help';
   }
}
window.onload = toggleHeadingText();
window.onresize = toggleHeadingText;


/* DIALOG MODAL */
(function () {
   var disclaimerLink = document.querySelector('#disclaimer-link');
   var closeDisclaimer = document.querySelector('button.close');

   // take out unnecessary dialog box close button
   disclaimerLink.addEventListener('click', function () {
      closeDisclaimer.parentElement.removeChild(closeDisclaimer);
   });
})();

/* HEALTH ASSESSMENT CARD */
window.onload = function () {
   // add years to DOB select box
   var dateOfBirth = document.querySelector("#dob");
   for (var i = 2006; i > 1918; i--) {
      var year = document.createElement('option');
      year.textContent = i;
      dateOfBirth.appendChild(year);
   }
}
