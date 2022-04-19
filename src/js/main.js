import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//* --- Burger --- *//
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.nav');
const burgerList = [burger, burgerMenu];
burger.addEventListener('click', () => {
	burgerList.forEach((e) => {
		e.classList.toggle('active');
	})
	
	// Anchor crossing
	for (let i = 0; i < burgerList.length; i++) {
		if (burgerList[i].classList.contains('active')) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.scrollBehavior = 'auto';
		} else {
			document.body.style.overflow = 'auto';	
			document.documentElement.style.scrollBehavior = 'smooth';
		}
	}
});

// Anchor crossing
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((navLink) => {
	navLink.addEventListener('click', (e) => {
		document.body.style.overflow = 'auto';	
		setTimeout(() => {
			document.documentElement.style.scrollBehavior = 'smooth';	
		}, 1000);
	});
});