const mobile = document.querySelector('.mobile');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');
const scrollLink = document.querySelectorAll('.scroll-link');
const navbarHeader = document.querySelector('.navbar-header');

navToggle.addEventListener('click', () => {
  mobile.classList.add('mobile-fix');
  document.querySelector('.nav-links').classList.add('show-links');
  navbarHeader.classList.remove('hidden');
  navToggle.classList.add('hidden');
});

navClose.addEventListener('click', () => {
  navbarHeader.classList.add('hidden');
  navToggle.classList.remove('hidden');
  mobile.classList.remove('mobile-fix');
  document.querySelector('.nav-links').classList.remove('show-links');
});

scrollLink.forEach((link) => {
  link.addEventListener('click', () => {
    navbarHeader.classList.add('hidden');
    navToggle.classList.remove('hidden');
    mobile.classList.remove('mobile-fix');
    document.querySelector('.nav-links').classList.remove('show-links');
  });
});