const elHamurgerIcon = document.querySelector('.hamburger-icon');
const elNavbar = document.querySelector('.site-nav');
const elCloseNavbar = document.querySelector('.site-nav__header-btn');

elHamurgerIcon.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
	console.log(111);
});

elCloseNavbar.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
});
