var body = document.querySelector('body');
var header = document.querySelector('header');
var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark fixed-top');
nav.setAttribute('id', 'mainNav');
nav.innerHTML = `<div class="container">
<a class="navbar-brand js-scroll-trigger" href="#page-top">
  <img src="img/logo-281x76.png" alt="Medoctor">
</a>
<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fa fa-bars"></i>
</button>
<div class="collapse navbar-collapse" id="navbarResponsive">
  <ul class="navbar-nav text-uppercase ml-auto">
    <li class="nav-item">
      <a class="nav-link js-scroll-trigger" href="#page-top">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link js-scroll-trigger" href="#faq">FAQ</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAbout" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        About
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownAbout">
        <a class="dropdown-item" href="about.html#about">About</a>
        <a class="dropdown-item" href="about.html#team">Team</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
    </li>
  </ul>
</div>
</div>`;
body.insertBefore(nav, body.childNodes[0]);
/* WINDOW ONLOAD and RESIZE */
window.onload = function () {
   addNavBar();
}
window.onresize = addNavBar;

function addNavBar(){
   body.insertBefore(nav, body.childNodes[0]);
   /* if (window.innerWidth > 768) {
      body.insertBefore(nav, body.childNodes[0]);
   } else {
      body.removeChild('nav');
   } */
}
