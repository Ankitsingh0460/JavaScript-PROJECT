// RESPONSIVE NAV
const navBtn = document.querySelector("#menu-icon");
const navMenu = document.querySelector("nav");

navBtn.addEventListener("click", () => {
	navMenu.classList.toggle("responsive-nav-menu");
});

// NAV DROPDOWNS
const navItems = document.getElementsByClassName("nav-menu-item");

for (i = 0; i < navItems.length; i += 1) {
	const submenu = navItems[i];
	submenu.addEventListener("click", () => {
		submenu.classList.toggle("open-submenu");
	});
}

// FAQ DROPDOWNS
const faqItems = document.getElementsByClassName("faq-item");

for (i = 0; i < faqItems.length; i += 1) {
	const answer = faqItems[i];
	answer.addEventListener("click", () => {
		answer.classList.toggle("show-answer");
	});
}
