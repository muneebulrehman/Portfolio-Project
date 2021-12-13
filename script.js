"use strict";

const mobile = document.querySelector(".mobile");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector('.nav-close');
const scrollLink = document.querySelectorAll(".scroll-link")

navToggle.addEventListener("click", () => {
	mobile.classList.add("mobile-fix");
	document.querySelector(".nav-links").classList.add("show-links");
});

navClose.addEventListener('click', () => {
	mobile.classList.remove("mobile-fix");
	document.querySelector(".nav-links").classList.remove("show-links");
})

scrollLink.forEach(link => {link.addEventListener('click', (e)=>{
	e.preventDefault();
	mobile.classList.remove("mobile-fix");
	document.querySelector(".nav-links").classList.remove("show-links");
})
});

