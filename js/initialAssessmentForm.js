/* WINDOW ONLOAD */
window.onload = (function () {
   addDOBs();
   removeDisclaimerCloseButton();
})()

/* DIALOG MODAL - REMOVE CLOSE BUTTON */
function removeDisclaimerCloseButton() {
   var disclaimerLink = document.querySelector('#disclaimer-link');
   var closeDisclaimer = document.querySelector('button.close');

   // take out unnecessary dialog box close button
   disclaimerLink.addEventListener('click', function () {
      closeDisclaimer.parentElement.removeChild(closeDisclaimer);
   });
}

/* ADD DOBs to HEALTH ASSESSMENT CARD */
function addDOBs() {
   // add years to DOB select box
   var dateOfBirth = document.querySelector("#dob");
   for (var i = 2006; i > 1918; i--) {
      var year = document.createElement('option');
      year.textContent = i;
      dateOfBirth.appendChild(year);
   }
}
