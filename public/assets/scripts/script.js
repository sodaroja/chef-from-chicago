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


	// 2. Resize and Dock elements on Scroll
	const logo = document.querySelector("a .logo");
	const smallLogo = document.querySelector("a .small-logo");
	const navBar = document.querySelector(".navbar");
	const mapTitle = document.querySelector(".map-name");
	const mapSubTitle = document.querySelector(".map-sub-title");

	window.addEventListener("scroll", function () {
		if (window.scrollY > 20) {
			logo.classList.add("shrink");
			navBar.classList.add("shrink-navbar");
			myHeader.classList.add("fade-and-shrink-hdr");
			myHeaderBtn.classList.add("shrink-hdr");
			myNavPrimary.classList.add("shrink-nav");
			// navBarText.classList.add("shrink-nav-text");
		} if (window.scrollY > 40) {
			mapTitle.classList.add("stick");
			mapSubTitle.classList.add("stick-sub");
		}
		else {
			logo.classList.remove("shrink");
			navBar.classList.remove("shrink-navbar");
			mapTitle.classList.remove("stick");
			mapSubTitle.classList.remove("stick-sub");
			myHeader.classList.remove("fade-and-shrink-hdr");
			myHeaderBtn.classList.remove("shrink-hdr");
			myNavPrimary.classList.remove("shrink-nav");
			// navBarText.classList.remove("shrink-nav-text");
		}
	});

	// 3.  Interactive maps //
	var districtsMap = document.getElementById("districts-polygon-map"),
		districtInfo = document.getElementById("district-info"),
		alldistricts = districtsMap.querySelectorAll("g");
	console.log(districtsMap, "Districts Map");
	districtsMap.addEventListener("click", function (e) {
		console.log("test click");
		var district = e.target.parentNode;
		if (e.target.nodeName == "path") {
			if (district.classList.contains('active')) {
				district.classList.remove("active");
				districtInfo.innerHTML = "";
				return;
			}
			for (var i = 0; i < alldistricts.length; i++) {
				alldistricts[i].classList.remove("active");
			}
			district.classList.add("active");
			var districtName = district.querySelector("title").innerHTML,
				districtParagraph = district.querySelector("desc p");
			sourceImg = district.querySelector("img"),
				imgPath = "https://cbdatadesign.com/wp-content/uploads/2023/07/";
			districtInfo.innerHTML = "";
			districtInfo.insertAdjacentHTML("afterbegin", "<img src=" + imgPath + sourceImg.getAttribute('xlink:href') + " alt='" + sourceImg.getAttribute('alt') + "'><h1>" + districtName + "</h1><p>" + districtParagraph.innerHTML + "</p>");
			districtInfo.classList.add("show");
		}
		const isSmallViewport = window.innerWidth <= 768; // Adjust breakpoint as needed

		if (isSmallViewport) {
			// Small delay to ensure pop-up is rendered first
			setTimeout(() => {
				window.scrollBy({
					top: 800,
					behavior: 'smooth'
				});
			}, 500);
		}
	});

	/* Adjust viewBox sizing */
	var districtsMap = document.getElementById("districts-polygon-map");
	const defaultScreenMap = '50 000 1200 922';
	const mediumScreenMap = '200 000 1200 922';
	const smallScreenMap = '400 5 500 1022';

	if (window.innerWidth < 800) {
		console.log("Small screen - Viewbox changed to:", smallScreenMap);
		districtsMap.setAttribute('viewBox', smallScreenMap);
	} else if (window.innerWidth < 1050) {
		console.log("Medium screen - Viewbox changed to:", mediumScreenMap);
		districtsMap.setAttribute('viewBox', mediumScreenMap);
	} else {
		console.log("Default screen - Viewbox changed to:", defaultScreenMap);
		districtsMap.setAttribute('viewBox', defaultScreenMap);
	}
});





