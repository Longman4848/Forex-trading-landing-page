var hamburger = document.querySelector('.hamburger');
var navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', function() {
    navLink.classList.toggle('show');
});