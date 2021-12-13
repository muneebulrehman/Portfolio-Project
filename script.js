"use strict";

const mobile = document.querySelector(".mobile");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
	mobile.classList.toggle("mobile-fix");
	document.querySelector(".nav-links").classList.add("show-links");
});
