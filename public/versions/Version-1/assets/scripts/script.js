document.addEventListener('DOMContentLoaded', function () {
	// 1. Hamburger Menu Toggle
	const menuToggle = document.getElementById('menu-toggle');
	const navLinks = document.getElementById('nav-links');

	if (!menuToggle || !navLinks) {
		console.error('Error: menu-toggle or nav-links not found!');
		return;
	}

	menuToggle.addEventListener('click', function (event) {
		event.stopPropagation();
		navLinks.classList.toggle('active');
		console.log('Menu Toggle Clicked');
		console.log('Active class added:', navLinks.classList.contains('active'));
	});

	// Close the menu if clicked outside
	document.addEventListener('click', function (event) {
		if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) { // = 'if navLinks doesn't contain a child matching the event target....'
			navLinks.classList.remove('active');
			console.log('Menu closed');
		}
	});


	// 2. Resize Logo on Scroll
	const logo = document.querySelector("a .logo");
	const smallLogo = document.querySelector("a .small-logo");
	const navBar = document.querySelector(".navbar");
	const navBarText = document.querySelector("a .navbar");

	window.addEventListener("scroll", function () {
		if (window.scrollY > 20) {
			logo.classList.add("shrink");
			navBar.classList.add("shrink-navbar");
			navBarText.classList.add("shrink-nav-text");
		} else {
			logo.classList.remove("shrink");
			navBar.classList.remove("shrink-navbar");
			navBarText.classList.remove("shrink-nav-text");
		}

		//    if (window.scrollY > 525) {
		//      logo.classList.add("fade-out");
		//      smallLogo.classList.add("show");
		//    } else {
		//      logo.classList.remove("fade-out");
		//      smallLogo.classList.remove("show");
		//    }

		//    if (window.innerWidth < 700) {
		//      smallLogo.classList.remove("show");
		//    }
	});


});



